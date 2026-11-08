import { createReadStream, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import type { Connect, Plugin } from "vite";
import { rangeResponsePlan } from "./scripts/video-range.mjs";
import { unifyCss } from "./scripts/unify-css.mjs";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
// @ts-expect-error JS plugin alongside the TS vite config
import { grokPwaPlugin } from "./scripts/grok-pwa-plugin.mjs";
// @ts-expect-error JS plugin alongside the TS vite config
import { appEnvPlugin } from "./scripts/app-env-plugin.mjs";
import { isMigrationFile } from "./scripts/migration-plan.mjs";

/** The files `src/lib/db.ts` globs — same directory, same non-recursive scope. */
function hasGlobbedMigrations(root: string): boolean {
  try {
    return readdirSync(join(root, "migrations")).some(isMigrationFile);
  } catch {
    return false;
  }
}

function videoFile(root: string, name: string, preview: boolean) {
  if (!name || name.includes("..") || name.includes("/") || !name.endsWith(".mp4")) return null;
  const candidates = preview
    ? [join(root, "dist/client/video", name), join(root, "public/video", name)]
    : [join(root, "public/video", name)];
  return candidates.find((candidate) => existsSync(candidate)) ?? null;
}

function videoRangeMiddleware(root: string, preview: boolean): Connect.NextHandleFunction {
  return (req, res, next) => {
    const pathOnly = (req.url ?? "").split("?", 1)[0] ?? "";
    if (!pathOnly.startsWith("/video/")) {
      next();
      return;
    }
    const file = videoFile(root, pathOnly.slice("/video/".length), preview);
    if (!file) {
      next();
      return;
    }
    const method = (req.method ?? "GET").toUpperCase();
    if (method !== "GET" && method !== "HEAD") {
      res.statusCode = 405;
      res.setHeader("Allow", "GET, HEAD");
      res.end("Method Not Allowed");
      return;
    }
    const size = statSync(file).size;
    const plan = rangeResponsePlan(size, req.headers.range);
    res.setHeader("Accept-Ranges", "bytes");
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Cache-Control", "public, max-age=86400");
    if (plan.status === 416) {
      res.statusCode = 416;
      res.setHeader("Content-Range", plan.contentRange ?? `bytes */${size}`);
      res.setHeader("Content-Length", "0");
      res.end();
      return;
    }
    res.statusCode = plan.status;
    res.setHeader("Content-Length", String(plan.length));
    if (plan.contentRange) res.setHeader("Content-Range", plan.contentRange);
    if (method === "HEAD") {
      res.end();
      return;
    }
    createReadStream(file, { start: plan.start, end: plan.end }).pipe(res);
  };
}

function videoRangePlugin(): Plugin {
  return {
    name: "ciao-bella-video-range",
    configureServer(server) {
      server.middlewares.use(videoRangeMiddleware(server.config.root, false));
    },
    configurePreviewServer(server) {
      server.middlewares.use(videoRangeMiddleware(server.config.root, true));
    },
  };
}

function cssUnifyPlugin(): Plugin {
  return {
    name: "ciao-bella-css-unify",
    apply: "build",
    enforce: "post",
    closeBundle() {
      const result = unifyCss(process.cwd());
      if (!result) return;
      console.log(
        `[ciao-bella] stylesheet ${result.canonicalUrl} (emitted ${result.emitted.join(", ")}), rewrote ${result.rewrote} files`,
      );
    },
  };
}

/**
 * Finish PGLite bootstrap during dev-server setup (before traffic). Vite awaits
 * async `configureServer` hooks. Production: `src/lib/db` kicks `ensureDbReady`
 * on import.
 *
 * Vite awaiting the hook puts this on time-to-first-render, so an app with no
 * migrations — no schema to apply — skips it entirely rather than paying for a
 * PGLite instance it never queries.
 */
function pgliteBootstrapPlugin(): Plugin {
  return {
    name: "app-builder:pglite-bootstrap",
    apply: "serve",
    async configureServer(server) {
      if (!hasGlobbedMigrations(server.config.root)) return;
      try {
        const mod = (await server.ssrLoadModule("/src/lib/db.ts")) as {
          ensureDbReady?: () => Promise<void>;
        };
        if (typeof mod.ensureDbReady === "function") {
          await mod.ensureDbReady();
        }
      } catch (err) {
        console.error("[app-builder] DB bootstrap failed:", err);
        throw err;
      }
    },
  };
}

/**
 * Live-preview OAuth popup — handled HERE so the agent never has to create a
 * `/auth/popup` route (and cannot break it by scaffolding a React page that
 * paints the full app shell in the popup).
 *
 * `signIn` (client.ts) opens `/auth/popup?providerId=…` in a top-level window.
 * This middleware runs before TanStack Start, calls `handleAuthPopupRequest`,
 * and returns the 302 / completion HTML. Deployed apps do not use the popup
 * (full-page OAuth redirect), so `apply: "serve"` is enough.
 */
function authPopupPlugin(): Plugin {
  return {
    name: "app-builder:auth-popup",
    apply: "serve",
    configureServer(server) {
      // Register immediately (not in a returned post-hook) so we run BEFORE
      // TanStack Start / the SPA HTML fallback. A model-authored
      // `src/routes/auth/popup.tsx` React page must never win this path.
      server.middlewares.use(async (req, res, next) => {
        try {
          const rawUrl = req.url ?? "";
          const pathOnly = rawUrl.split("?", 1)[0] ?? "";
          if (pathOnly !== "/auth/popup") {
            next();
            return;
          }
          if ((req.method ?? "GET").toUpperCase() !== "GET") {
            res.statusCode = 405;
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end("Method Not Allowed");
            return;
          }

          const host = String(
            req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost:8080",
          );
          const proto = String(
            req.headers["x-forwarded-proto"] ??
              ((req.socket as { encrypted?: boolean } | undefined)?.encrypted ? "https" : "http"),
          );
          const requestHeaders = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (value === undefined) continue;
            if (Array.isArray(value)) {
              for (const v of value) requestHeaders.append(key, v);
            } else {
              requestHeaders.set(key, value);
            }
          }
          // Ensure Host is the public preview host so Better Auth's dynamic
          // baseURL / redirect_uri match the popup origin.
          if (!requestHeaders.has("host")) requestHeaders.set("host", host);

          const request = new Request(`${proto}://${host}${rawUrl}`, {
            method: "GET",
            headers: requestHeaders,
          });

          const mod = (await server.ssrLoadModule("/src/lib/auth/popup.server.ts")) as {
            handleAuthPopupRequest: (req: Request) => Promise<Response>;
          };
          const response = await mod.handleAuthPopupRequest(request);

          res.statusCode = response.status;
          // Preserve multiple Set-Cookie headers (OAuth state + session).
          const setCookies =
            typeof response.headers.getSetCookie === "function"
              ? response.headers.getSetCookie()
              : [];
          response.headers.forEach((value, key) => {
            if (key.toLowerCase() === "set-cookie") return;
            res.setHeader(key, value);
          });
          for (const cookie of setCookies) {
            res.appendHeader("set-cookie", cookie);
          }
          const body = Buffer.from(await response.arrayBuffer());
          res.end(body);
        } catch (err) {
          console.error("[app-builder] /auth/popup handler failed:", err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end("auth popup failed");
          }
        }
      });
    },
  };
}

// Cloudflare Workers build. The sandbox preview keeps Nitro. Official Workers
// guide: https://developers.cloudflare.com/workers/static-assets/migration-guides/vercel-to-workers/tanstack-start/
const workers = process.env.CF_WORKERS === "1";

// `0.0.0.0:8080` is the live-preview contract — don't change host/port.
// The dev server starts once `src/router.tsx` and `src/routes/` exist — see
// AGENTS.md § "First scaffold".
export default defineConfig(({ command, isPreview }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    ...(workers ? [cloudflare({ viteEnvironment: { name: "ssr" } })] : []),
    pgliteBootstrapPlugin(),
    videoRangePlugin(),
    // Before tanstackStart so /auth/popup never falls through to the SPA.
    authPopupPlugin(),
    // Dev-only /__app-env, read by scripts/check-auth-invariant.mjs.
    appEnvPlugin(),
    // PWA head + ?install=1 tutorial page; runs before Start/Nitro.
    grokPwaPlugin(),
    tailwindcss(),
    tanstackStart(),
    ...(!workers && (command === "build" || isPreview)
      ? [
          nitro({
            preset: "vercel",
            // Auto-registers server/middleware/* (the PWA install page +
            // manifest + head-tag middleware). Nitro v3 defaults serverDir to
            // false, so removing this silently unwires /?install=1 on deploys.
            serverDir: "./server",
          }),
        ]
      : []),
    viteReact(),
    cssUnifyPlugin(),
  ],
}));
