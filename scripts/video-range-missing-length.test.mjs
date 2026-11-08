import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import server from "../src/server.ts";

const file = readFileSync(new URL("../public/video/ciao-bella-hero.mp4", import.meta.url));
const size = file.byteLength;

function assetWithoutLength() {
  const body = new ReadableStream({
    start(controller) {
      const chunk = 64 * 1024;
      for (let offset = 0; offset < file.byteLength; offset += chunk) {
        controller.enqueue(file.subarray(offset, offset + chunk));
      }
      controller.close();
    },
  });
  const response = new Response(body, { status: 200, headers: { "content-type": "video/mp4" } });
  response.headers.delete("content-length");
  return response;
}

function assets() {
  return {
    ASSETS: {
      async fetch() {
        return assetWithoutLength();
      },
    },
  };
}

async function ranged(header) {
  const response = await server.fetch(
    new Request("https://ciao-bella.test/video/ciao-bella-hero.mp4", { headers: { range: header } }),
    assets(),
  );
  const bytes = new Uint8Array(await response.arrayBuffer());
  return { response, bytes };
}

test("original homepage video is the full file", () => {
  assert.ok(size > 17_000_000, `expected the 17MB original, got ${size}`);
});

test("missing Content-Length still returns only the requested range", async () => {
  const cases = [
    { header: "bytes=0-1023", start: 0, end: 1023 },
    { header: "bytes=8000000-8001023", start: 8_000_000, end: 8_000_000 + 1023 },
    { header: `bytes=${size - 512}-${size - 1}`, start: size - 512, end: size - 1 },
    { header: "bytes=-256", start: size - 256, end: size - 1 },
  ];
  for (const item of cases) {
    const { response, bytes } = await ranged(item.header);
    assert.equal(response.status, 206, item.header);
    assert.equal(response.headers.get("content-range"), `bytes ${item.start}-${item.end}/${size}`, item.header);
    assert.equal(Number(response.headers.get("content-length")), bytes.byteLength, item.header);
    assert.equal(bytes.byteLength, item.end - item.start + 1, item.header);
    assert.equal(Buffer.compare(bytes, file.subarray(item.start, item.end + 1)), 0, item.header);
  }
});

test("an unsatisfiable range is 416 and does not return the file", async () => {
  const { response, bytes } = await ranged(`bytes=${size}-`);
  assert.equal(response.status, 416);
  assert.equal(response.headers.get("content-range"), `bytes */${size}`);
  assert.equal(bytes.byteLength, 0);
});

test("a ranged request is still sliced when Content-Length is present", async () => {
  const response = await server.fetch(
    new Request("https://ciao-bella.test/video/ciao-bella-hero.mp4", {
      headers: { range: "bytes=100-199" },
    }),
    {
      ASSETS: {
        async fetch() {
          return new Response(file, {
            status: 200,
            headers: {
              "content-type": "video/mp4",
              "content-length": String(size),
            },
          });
        },
      },
    },
  );
  const bytes = new Uint8Array(await response.arrayBuffer());
  assert.equal(response.status, 206);
  assert.equal(response.headers.get("content-range"), `bytes 100-199/${size}`);
  assert.equal(Number(response.headers.get("content-length")), 100);
  assert.equal(Buffer.compare(bytes, file.subarray(100, 200)), 0);
});
