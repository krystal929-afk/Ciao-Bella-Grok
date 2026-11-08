import { copyFileSync, existsSync, readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";

const CSS_URL = /\/assets\/styles-[A-Za-z0-9_-]+\.css/g;
const TEXT = new Set([".js", ".mjs", ".cjs", ".html", ".json", ".map"]);

/**
 * The client build and the SSR build each hash styles.css on their own.
 * HTML from the server then asks for a file the client output never emitted
 * (404), while the real stylesheet sits beside it unused (200).
 * Keep the client bundle's stylesheet, rewrite every other reference to it,
 * and delete stale styles-*.css so an old deploy artifact cannot win.
 *
 * @param {string} root
 */
export function unifyCss(root) {
  const assetDirs = ["dist/client/assets", ".vercel/output/static/assets"]
    .map((dir) => join(root, dir))
    .filter((dir) => existsSync(dir));
  if (assetDirs.length === 0) return null;

  /** @type {{ name: string, dir: string, mtime: number }[]} */
  const emitted = [];
  for (const dir of assetDirs) {
    for (const name of readdirSync(dir)) {
      if (!/^styles-[A-Za-z0-9_-]+\.css$/.test(name)) continue;
      emitted.push({ name, dir, mtime: statSync(join(dir, name)).mtimeMs });
    }
  }
  if (emitted.length === 0) return null;

  /** @type {{ url: string, name: string, mtime: number }[]} */
  const clientRefs = [];
  for (const dir of assetDirs) {
    for (const name of readdirSync(dir)) {
      if (!name.endsWith(".js")) continue;
      const path = join(dir, name);
      const text = readFileSync(path, "utf8");
      const mtime = statSync(path).mtimeMs;
      for (const url of text.match(CSS_URL) ?? []) {
        clientRefs.push({ url, name: url.slice("/assets/".length), mtime });
      }
    }
  }
  clientRefs.sort((a, b) => b.mtime - a.mtime);

  const present = new Set(emitted.map((file) => file.name));
  const referenced = clientRefs.find((ref) => present.has(ref.name));
  const newest = [...emitted].sort((a, b) => b.mtime - a.mtime)[0];
  const canonical = referenced?.name ?? newest?.name;
  if (!canonical) return null;
  const canonicalUrl = `/assets/${canonical}`;
  const source = emitted.find((file) => file.name === canonical);
  if (!source) throw new Error(`[ciao-bella] canonical stylesheet missing on disk: ${canonicalUrl}`);

  for (const dir of assetDirs) {
    const target = join(dir, canonical);
    if (!existsSync(target)) copyFileSync(join(source.dir, canonical), target);
    for (const name of readdirSync(dir)) {
      if (name !== canonical && /^styles-[A-Za-z0-9_-]+\.css$/.test(name)) unlinkSync(join(dir, name));
    }
  }

  let rewrote = 0;
  for (const dir of [join(root, "dist"), join(root, ".vercel/output")]) {
    if (existsSync(dir)) rewrote += rewriteTree(dir, canonicalUrl);
  }

  const leftover = new Set();
  for (const dir of [join(root, "dist"), join(root, ".vercel/output")]) {
    scanTree(dir, (text) => {
      for (const url of text.match(CSS_URL) ?? []) {
        if (url !== canonicalUrl) leftover.add(url);
      }
    });
  }
  if (leftover.size > 0) {
    throw new Error(`[ciao-bella] stylesheet references still diverge: ${[...leftover].join(", ")}`);
  }
  for (const dir of assetDirs) {
    if (!existsSync(join(dir, canonical))) {
      throw new Error(`[ciao-bella] ${canonicalUrl} was not written to ${dir}`);
    }
  }
  const serverAssets = join(root, "dist/server/assets");
  if (existsSync(serverAssets)) {
    for (const name of readdirSync(serverAssets)) {
      if (name !== canonical && /^styles-[A-Za-z0-9_-]+\.css$/.test(name)) {
        unlinkSync(join(serverAssets, name));
      }
    }
  }

  return { canonicalUrl, rewrote, emitted: [...present] };
}

/** @param {string} dir @param {string} canonicalUrl */
function rewriteTree(dir, canonicalUrl) {
  let rewrote = 0;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      rewrote += rewriteTree(path, canonicalUrl);
      continue;
    }
    if (!TEXT.has(extname(name)) || stat.size > 8_000_000) continue;
    const text = readFileSync(path, "utf8");
    if (!text.includes("/assets/styles-")) continue;
    const next = text.replace(CSS_URL, canonicalUrl);
    if (next !== text) {
      writeFileSync(path, next);
      rewrote += 1;
    }
  }
  return rewrote;
}

/** @param {string} dir @param {(text: string) => void} visit */
function scanTree(dir, visit) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) scanTree(path, visit);
    else if (TEXT.has(extname(name)) && stat.size < 8_000_000) visit(readFileSync(path, "utf8"));
  }
}
