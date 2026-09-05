// The controls. A gate that only checks the happy path cannot tell "the flag works" from "the
// output happens to look like that anyway", so each of these must go the OTHER way.

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..", "..");

const bin = [
  join(here, "node_modules", ".bin", "ts-for-gir-dev"),
  join(repoRoot, "node_modules", ".bin", "ts-for-gir-dev"),
].find((candidate) => existsSync(candidate));

if (!bin) {
  console.error("ts-for-gir-dev not found — run `gjsify install` first");
  process.exit(1);
}

const run = (args) =>
  spawnSync(bin, args, { cwd: here, encoding: "utf8", env: { ...process.env, NO_COLOR: "1" } });

const failures = [];
const GIRS = ["--girDirectories", "../external-deps/fixtures", "--girDirectories", "../../girs"];
const COMMON = [
  "generate",
  "Greeter-1.0",
  ...GIRS,
  "--ignoreVersionConflicts",
  "--configName",
  "none.rc.js",
];

// 1. --bundleMeta without --bundle is a contradiction, not a silently ignored flag.
{
  const result = run([...COMMON, "--outdir", "./control-package", "--bundleMeta", '{"sdk":"x"}']);
  if (result.status === 0) failures.push("--bundleMeta without --bundle exited 0");
  else if (!`${result.stderr}${result.stdout}`.includes("--bundleMeta is only valid"))
    failures.push(
      `--bundleMeta without --bundle failed for the wrong reason: ${result.stderr.trim().split("\n").pop()}`,
    );
}

// 2. A name npm would reject must fail before anything is generated, not at publish time.
{
  const result = run([...COMMON, "--outdir", "./control-package", "--bundle", "Not A Name"]);
  if (result.status === 0) failures.push("--bundle with an invalid package name exited 0");
  else if (!`${result.stderr}${result.stdout}`.includes("not a valid npm package name"))
    failures.push(
      `invalid --bundle failed for the wrong reason: ${result.stderr.trim().split("\n").pop()}`,
    );
}

// 3. Without --bundle the SAME inputs must produce the opposite shape: a manifest per
//    namespace and no manifest at the root. This is what proves the flag does the work.
{
  const controlDir = join(here, "control-package");
  rmSync(controlDir, { recursive: true, force: true });
  const result = run([...COMMON, "--outdir", "./control-package", "--package"]);
  if (result.status !== 0) {
    failures.push(
      `control run (plain package mode) failed: ${result.stderr.trim().split("\n").pop()}`,
    );
  } else {
    if (existsSync(join(controlDir, "package.json"))) {
      failures.push(
        "plain package mode wrote a root manifest — the bundle assertions prove nothing",
      );
    }
    const perNamespace = readdirSync(controlDir, { withFileTypes: true }).filter(
      (e) => e.isDirectory() && existsSync(join(controlDir, e.name, "package.json")),
    );
    if (perNamespace.length === 0) {
      failures.push("plain package mode wrote no per-namespace manifests — the control is broken");
    }
  }
  rmSync(controlDir, { recursive: true, force: true });
}

if (failures.length > 0) {
  console.error("bundle control failures:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(
  "OK: controls — bad flags rejected, and plain package mode still emits per-namespace manifests",
);
