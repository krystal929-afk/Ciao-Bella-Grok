import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { rangeResponsePlan } from "../scripts/video-range.mjs";

const start = createStartHandler(defaultStreamHandler);

type AssetBinding = { fetch: (request: Request) => Promise<Response> };
type WorkerEnv = {
  ASSETS?: AssetBinding;
  BOOKING_ENABLED?: string;
};

function asWorkerEnv(value: unknown): WorkerEnv | undefined {
  if (!value || typeof value !== "object") return undefined;
  if ("ASSETS" in value || "BOOKING_ENABLED" in value) return value as WorkerEnv;
  return undefined;
}

function rememberBookingFlag(env: WorkerEnv | undefined) {
  if (!env || env.BOOKING_ENABLED == null || typeof process === "undefined") return;
  process.env.BOOKING_ENABLED = String(env.BOOKING_ENABLED);
}

function htmlCache(response: Response) {
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("cache-control", "no-cache, must-revalidate");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function videoPath(url: URL) {
  if (!url.pathname.startsWith("/video/") || !url.pathname.endsWith(".mp4")) return false;
  const name = url.pathname.slice("/video/".length);
  return name.length > 0 && !name.includes("/") && !name.includes("..");
}

function withVideoHeaders(response: Response, method: string) {
  const headers = new Headers(response.headers);
  headers.set("accept-ranges", "bytes");
  if (!headers.get("content-type")?.includes("video")) headers.set("content-type", "video/mp4");
  return new Response(method === "HEAD" ? null : response.body, {
    status: response.status,
    headers,
  });
}

async function sliceFullAsset(request: Request, asset: Response): Promise<Response> {
  const size = Number(asset.headers.get("content-length") ?? "");
  const headers = new Headers();
  headers.set("accept-ranges", "bytes");
  headers.set("content-type", "video/mp4");
  headers.set("cache-control", asset.headers.get("cache-control") ?? "public, max-age=86400");
  if (!Number.isFinite(size) || size <= 0 || !asset.body) {
    return new Response(request.method === "HEAD" ? null : asset.body, { status: asset.status, headers });
  }
  const plan = rangeResponsePlan(size, request.headers.get("range"));
  if (plan.status === 416) {
    headers.set("content-range", plan.contentRange ?? `bytes */${size}`);
    headers.set("content-length", "0");
    return new Response(null, { status: 416, headers });
  }
  if (plan.status === 200) {
    headers.set("content-length", String(size));
    return new Response(request.method === "HEAD" ? null : asset.body, { status: 200, headers });
  }
  const reader = asset.body.getReader();
  const chunks: Uint8Array[] = [];
  let seen = 0;
  const need = plan.end + 1;
  try {
    while (seen < need) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      chunks.push(value);
      seen += value.byteLength;
    }
  } finally {
    await reader.cancel();
  }
  const merged = new Uint8Array(seen);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  const slice = merged.subarray(plan.start, plan.end + 1);
  headers.set("content-range", plan.contentRange ?? "");
  headers.set("content-length", String(slice.byteLength));
  return new Response(request.method === "HEAD" ? null : slice, { status: 206, headers });
}

function partialIsExact(response: Response, request: Request) {
  const range = request.headers.get("range");
  if (!range) return response.status === 200;
  if (response.status !== 206) return false;
  const total = Number((response.headers.get("content-range") ?? "").split("/")[1]);
  if (!Number.isFinite(total)) return false;
  const plan = rangeResponsePlan(total, range);
  return (
    plan.status === 206 &&
    Number(response.headers.get("content-length")) === plan.length &&
    response.headers.get("content-range") === plan.contentRange
  );
}

async function serveVideo(request: Request, env: WorkerEnv | undefined): Promise<Response | null> {
  const url = new URL(request.url);
  if (!videoPath(url)) return null;
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method Not Allowed", { status: 405, headers: { allow: "GET, HEAD" } });
  }
  if (!env?.ASSETS) return null;
  const ranged = new Request(request.url, {
    method: "GET",
    headers: request.headers.get("range") ? { range: request.headers.get("range")! } : undefined,
  });
  const asset = await env.ASSETS.fetch(ranged);
  if (asset.status === 404) return asset;
  if (!request.headers.get("range") || partialIsExact(asset, request) || asset.status === 416) {
    return withVideoHeaders(asset, request.method);
  }
  if (asset.status === 206) {
    await asset.body?.cancel();
    const full = await env.ASSETS.fetch(new Request(request.url, { method: "GET" }));
    return sliceFullAsset(request, full);
  }
  return sliceFullAsset(request, asset);
}

const server = {
  async fetch(request: Request, second?: unknown) {
    const env = asWorkerEnv(second);
    rememberBookingFlag(env);
    const video = await serveVideo(request, env);
    if (video) return video;
    const response = await start(request, second as never);
    return htmlCache(response);
  },
};

export default server;
