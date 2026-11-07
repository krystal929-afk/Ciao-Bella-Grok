import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "node_modules/@electric-sql/pglite/dist");
const destDir = join(root, ".vercel/output/functions/__server.func/_libs");
const files = ["pglite.data", "pglite.wasm", "initdb.wasm"];

if (!existsSync(destDir)) {
  console.log("skip pglite assets: nitro output not built yet");
  process.exit(0);
}

for (const file of files) {
  copyFileSync(join(srcDir, file), join(destDir, file));
}
console.log("copied pglite wasm assets into the server bundle");
