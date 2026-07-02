#!/usr/bin/env node

/**
 * Packs workspace packages into tarballs for E2E tests using Yarn's native
 * tooling. Outputs a JSON map of { packageName: tarballFilename } to stdout.
 *
 * Usage:
 *   node pack.mjs <tarballsDir> [--include-girs <csv>]
 *
 * --include-girs   Comma-separated @girs/* package names from types-dev/* to
 *                  also include. Without it, only the primary packages
 *                  (@ts-for-gir/*, @gi.ts/*) are packed.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MONOREPO_ROOT = resolve(__dirname, "..", "..");

const [tarballsDir, ...rest] = process.argv.slice(2);
if (!tarballsDir) {
  console.error("Usage: pack.mjs <tarballsDir> [--include-girs <csv>]");
  process.exit(1);
}

let includeGirs = [];
for (let i = 0; i < rest.length; i++) {
  if (rest[i] === "--include-girs") {
    includeGirs = (rest[i + 1] || "").split(",").filter(Boolean);
    i++;
  }
}

mkdirSync(tarballsDir, { recursive: true });

// Enumerate workspaces via the project's root `package.json#workspaces`
// globs — no yarn dependency. The previous Yarn-Berry-shaped
// `yarn workspaces list --json` call was the entire reason this
// suite needed yarn on PATH in CI (plus the tarball-packing line
// below). Walking the globs ourselves keeps the e2e suite aligned
// with the production publish path (which uses `gjsify pack`).
function listWorkspaces() {
  const rootPkg = JSON.parse(readFileSync(join(MONOREPO_ROOT, "package.json"), "utf8"));
  const patterns = Array.isArray(rootPkg.workspaces)
    ? rootPkg.workspaces
    : Array.isArray(rootPkg.workspaces?.packages)
      ? rootPkg.workspaces.packages
      : [];
  // Expand each pattern (e.g. `packages/*`, `examples/*`,
  // `types-dev/*`) to actual workspace directories with a
  // package.json.
  const workspaces = [];
  for (const pattern of patterns) {
    const negate = pattern.startsWith("!");
    if (negate) continue; // negations not handled by this simple walker
    const segments = pattern.split("/");
    // Stop at the first wildcard segment — we list direct children
    // of the parent dir matching the remaining literal segments.
    const wildcardIdx = segments.findIndex((s) => s.includes("*"));
    if (wildcardIdx === -1) {
      const dir = join(MONOREPO_ROOT, pattern);
      if (existsSync(join(dir, "package.json"))) {
        const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
        if (pkg.name)
          workspaces.push({ name: pkg.name, location: pattern, private: !!pkg.private });
      }
      continue;
    }
    const parent = join(MONOREPO_ROOT, ...segments.slice(0, wildcardIdx));
    if (!existsSync(parent)) continue;
    for (const child of readdirSync(parent, { withFileTypes: true })) {
      if (!child.isDirectory()) continue;
      const childDir = join(parent, child.name);
      const pkgPath = join(childDir, "package.json");
      if (!existsSync(pkgPath)) continue;
      const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
      if (!pkg.name) continue;
      workspaces.push({
        name: pkg.name,
        location: [...segments.slice(0, wildcardIdx), child.name].join("/"),
        private: !!pkg.private,
      });
    }
  }
  return workspaces;
}

const allWorkspaces = listWorkspaces();

// Skip private packages — they don't represent publishable surfaces and
// `gjsify pack` would either fail or produce tarballs the e2e test
// doesn't expect.
const primary = allWorkspaces.filter(
  (w) =>
    !w.location.startsWith("examples/") &&
    !w.location.startsWith("tests/") &&
    !w.location.startsWith("types-dev/") &&
    !w.private,
);
const girsWanted = allWorkspaces.filter(
  (w) => w.location.startsWith("types-dev/") && includeGirs.includes(w.name),
);
const selected = [...primary, ...girsWanted];

if (selected.length === 0) {
  process.stdout.write("{}\n");
  process.exit(0);
}

// Pack each workspace via `gjsify pack`. This is the SAME packer the
// production publish path uses (see .github/workflows/release-app.yml's
// `gjsify run publish:app` script chain), so the e2e tests now exercise
// the exact tarball-shape the published packages will have. Prepack
// lifecycle scripts (e.g. ts-for-gir/cli's process-templates) run via
// the build script chain in `build:app`, not via the pack invocation
// itself — see #416 for the explicit-chain pattern that decoupled
// artifact generation from the pack-time hook.
const tarballMap = {};
for (const w of selected) {
  const workspaceDir = join(MONOREPO_ROOT, w.location);
  execFileSync(
    "gjsify",
    // Note: no `--ignore-scripts` flag — that's only in gjsify
    // 0.4.22+ (via #272). The bootstrapped gjsify in CI is
    // 0.4.21 which silently runs zero lifecycle scripts anyway
    // (the lifecycle-script support is what #272 adds). Add the
    // flag back once CI's bootstrap version reaches 0.4.22.
    ["pack", workspaceDir, "--pack-destination", tarballsDir],
    { cwd: MONOREPO_ROOT, stdio: ["pipe", "pipe", "inherit"], maxBuffer: 50 * 1024 * 1024 },
  );
  // `gjsify pack` mirrors npm's filename format: `@scope/name` →
  // `scope-name-<version>.tgz`. We don't need the version in the map
  // since the consumer (helpers.mjs) just resolves by package name,
  // but we DO need to discover the actual filename to record.
  // Read the workspace's version + reconstruct the npm filename.
  const pkg = JSON.parse(readFileSync(join(workspaceDir, "package.json"), "utf8"));
  const filenameBase = w.name.startsWith("@") ? w.name.slice(1).replace("/", "-") : w.name;
  const filename = `${filenameBase}-${pkg.version}.tgz`;
  tarballMap[w.name] = filename;
}
process.stdout.write(`${JSON.stringify(tarballMap, null, 2)}\n`);
