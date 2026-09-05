// Asserts the shape of a --bundle run: ONE manifest, every namespace on a subpath, every
// subpath resolving to a file that exists, and cross-namespace imports pointing inside the
// bundle. Bytewise snapshots would be brittle (formatter, dep bumps); these are the properties
// a consumer actually depends on.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outdir = join(here, "generated");
const BUNDLE = "@girs-test/bundle-fixture";

const failures = [];
const fail = (msg) => failures.push(msg);

const manifestPath = join(outdir, "package.json");
if (!existsSync(manifestPath)) {
  console.error(`no bundle manifest at ${manifestPath}`);
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

// --- the manifest itself -----------------------------------------------------------------
if (manifest.name !== BUNDLE) fail(`name: expected ${BUNDLE}, got ${manifest.name}`);
if (typeof manifest.version !== "string") fail("version: missing");
if (manifest.type !== "module") fail("type: expected 'module'");
for (const forbidden of ["main", "types", "module"]) {
  if (forbidden in manifest) fail(`${forbidden}: a bundle has no single entry point`);
}
if ("." in (manifest.exports ?? {})) fail("exports['.']: a bundle must not publish a barrel");

// --bundleMeta merged
if (manifest.sdk?.id !== "org.example.Sdk")
  fail(`bundleMeta not merged: sdk=${JSON.stringify(manifest.sdk)}`);

// libraryVersions: only strings, and only for libraries that state their own version. GLib
// states one, the Greeter fixture does not — so both directions are covered by real data.
if (typeof manifest.libraryVersions?.["glib-2.0"] !== "string") {
  fail("libraryVersions['glib-2.0']: GLib states its own version and must be recorded");
}
if ("greeter-1.0" in (manifest.libraryVersions ?? {})) {
  fail("libraryVersions['greeter-1.0']: the fixture states no version of its own");
}
if (manifest.libraryVersions !== undefined) {
  if (typeof manifest.libraryVersions !== "object" || Array.isArray(manifest.libraryVersions)) {
    fail("libraryVersions: not an object");
  } else {
    for (const [ns, version] of Object.entries(manifest.libraryVersions)) {
      if (typeof version !== "string" || version.length === 0) {
        fail(`libraryVersions[${ns}]: not a version string (${JSON.stringify(version)})`);
      }
    }
  }
}

// --- exactly one manifest, and no per-namespace manifests ---------------------------------
const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
};
const allFiles = walk(outdir);
const strays = allFiles.filter((f) => {
  const rel = f.slice(outdir.length + 1);
  if (!rel.includes("/")) return false; // root files are fine
  return ["package.json", "tsconfig.json", "typedoc.json"].includes(rel.split("/").pop());
});
if (strays.length > 0) {
  fail(
    `per-namespace manifests must not be emitted in bundle mode: ${strays.map((f) => f.slice(outdir.length + 1)).join(", ")}`,
  );
}

// --- every export target exists ------------------------------------------------------------
// The assertion that catches a drifting map: an exports entry pointing at a file that was never
// written fails at the consumer, long after generation reported success.
let checkedTargets = 0;
for (const [subpath, target] of Object.entries(manifest.exports ?? {})) {
  const paths = typeof target === "string" ? [target] : Object.values(target);
  for (const relative of paths) {
    checkedTargets++;
    const full = join(outdir, relative);
    if (!existsSync(full) || !statSync(full).isFile()) {
      fail(`exports['${subpath}'] -> ${relative} does not exist`);
    }
  }
}
if (checkedTargets === 0) fail("exports: empty");

// --- and the other direction: every generated namespace is exported ------------------------
const namespaceDirs = readdirSync(outdir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(join(outdir, e.name, "index.d.ts")))
  .map((e) => e.name);
if (namespaceDirs.length < 2)
  fail(`expected a multi-namespace bundle, got ${namespaceDirs.length}`);
for (const dir of namespaceDirs) {
  if (!(`./${dir}` in manifest.exports)) fail(`namespace ${dir} generated but not exported`);
}
for (const required of ["greeter-1.0", "gjs"]) {
  if (!namespaceDirs.includes(required))
    fail(`expected namespace missing from output: ${required}`);
}
// The gjs package carries files no other namespace has — proof the map follows the output
// rather than a fixed per-namespace shape.
for (const required of ["./gjs/dom", "./gjs/console", "./greeter-1.0/ambient"]) {
  if (!(required in manifest.exports)) fail(`expected subpath missing: ${required}`);
}

// --- cross-namespace imports stay inside the bundle ----------------------------------------
const moduleFile = join(outdir, "greeter-1.0", "greeter-1.0.d.ts");
const moduleSource = existsSync(moduleFile) ? readFileSync(moduleFile, "utf8") : "";
if (!moduleSource) fail(`missing ${moduleFile}`);
if (!new RegExp(`from '${BUNDLE.replace("/", "\\/")}/gobject-2\\.0'`).test(moduleSource)) {
  fail("cross-namespace import does not point into the bundle");
}
if (/from '@girs\//.test(moduleSource)) {
  fail("cross-namespace import escapes to the published @girs/* packages");
}

// And the same over the WHOLE tree, not just the module that happens to be under test. A single
// specifier left at the literal `@girs` — the GJS ambient template had one — pulls a second copy
// of GJS, GLib and GObject into the consumer's program, where every shared ambient declaration
// is then declared twice. That is the failure this whole package shape exists to prevent, so it
// is checked everywhere code is emitted, not by sampling.
const escapes = allFiles
  .filter((f) => f.endsWith(".d.ts") || f.endsWith(".js"))
  .filter((f) => /['"]@girs\/(?!\w)|['"]@girs\/[a-z]/.test(readFileSync(f, "utf8")))
  .map((f) => f.slice(outdir.length + 1));
if (escapes.length > 0) {
  fail(`files reaching outside the bundle to @girs/*: ${escapes.join(", ")}`);
}

if (failures.length > 0) {
  console.error("bundle assertion failures:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(
  `OK: ${BUNDLE} — ${namespaceDirs.length} namespaces, ${Object.keys(manifest.exports).length} subpaths, ${checkedTargets} targets all present`,
);
