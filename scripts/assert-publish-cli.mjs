#!/usr/bin/env node
// The CLI that publishes must be new enough to notice a publish that never landed --
// and the job must say WHICH CLI that was.
//
// WHY. The v5.1.0 cut (run 34899018849) reported SUCCESS and printed npm's
// `+ <pkg>@5.1.0` marker for all twelve packages. Three of them --
// `@ts-for-gir/cli`, `@ts-for-gir/reporter` and `@gi.ts/parser` -- never reached the
// registry and had to be published by a manual dispatch.
//
// `gjsify publish` has read back what it PUT since @gjsify/cli 0.47.0 (gjsify#1509),
// which turns exactly that silence into a failed step. That code did not run. With
// `GJSIFY_PUBLISH_DEBUG=1` the step logged `PUT`, `auth-mode:` and `payload size:`
// twelve times each and not one read-back line -- the output shape of a CLI below 0.47,
// which here means the workspace's own 0.44.0, pinned `^0.44.0`, a range that cannot
// reach 0.47. The version the job PRINTED, in a step of its own, was 0.51.1.
//
// WHICH of the two binaries won is not fully settled, and this deliberately does not
// depend on the answer. Measured with 0.51.1, a nested `gjsify` resolves through a
// `/tmp/gjsify-shim-*` directory to the OUTER CLI, which would have made the publish
// 0.51.1; and the `PATH=` prefix the step carried named `${{ github.workspace }}`, a
// HOST path absent from the container, so it cannot be what selected 0.44.0 either.
// Something in between chose it. So both candidate binaries are held to the floor --
// the one on PATH and the one in `node_modules` -- and the guard is correct whichever
// mechanism applies.
//
// Nothing caught it. gjsify's own "version skew" warning compares the running CLI
// against the one ALREADY INSTALLED, so on a fresh container -- where `gjsify install`
// runs against an empty tree -- it has nothing to compare and stays silent. The skew
// only comes into existence after that install, and nothing looked again.
//
// So this runs INSIDE the publishing step's own shell, after the same PATH the publish
// command will use, and states what it measured.
//
// Usage: node --no-warnings scripts/assert-publish-cli.mjs

import { spawnSync } from "node:child_process";
import { readFileSync, realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";

/**
 * Lowest @gjsify/cli that verifies a publish against the registry before reporting
 * success (gjsify#1509, released in 0.47.0). Below it, a PUT that npm accepted and
 * then dropped exits 0.
 */
export const MIN_CLI_VERSION = "0.47.0";

/** @returns {{major: number, minor: number, patch: number, pre: string | null} | null} */
export function parseVersion(text) {
  const match = /(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?/.exec(String(text ?? ""));
  if (!match) return null;
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    pre: match[4] ?? null,
  };
}

/**
 * Is `version` at least `floor`? A prerelease sorts BELOW the release it leads to, so
 * 0.47.0-rc.1 does not clear a 0.47.0 floor -- the read-back landed in the release.
 */
export function isAtLeast(version, floor) {
  const a = parseVersion(version);
  const b = parseVersion(floor);
  if (!a || !b) return false;
  for (const key of ["major", "minor", "patch"]) {
    if (a[key] !== b[key]) return a[key] > b[key];
  }
  if (a.pre && !b.pre) return false;
  if (!a.pre && b.pre) return true;
  return true;
}

/**
 * Is this module the program node was asked to run, rather than an import?
 *
 * Both halves of the pair are dual-role -- imported for their constants, executed by a
 * workflow -- so both have to answer this, and answering it WRONG is silent: the module
 * body runs, `main()` does not, and the process exits 0 having printed nothing. In the
 * publish step that is an unguarded publish wearing a green check, which is the failure
 * this pair exists to prevent, reintroduced by the guard itself.
 *
 * The obvious spelling, `import.meta.url === \`file://${process.argv[1]}\``, is wrong in
 * two ways that were measured against this very file:
 *
 *   - a path containing a SPACE -- `import.meta.url` percent-encodes it (`%20`),
 *     `argv[1]` does not, so the strings never match;
 *   - a path reached through a SYMLINKED directory -- node's ESM loader resolves symlinks
 *     before it builds `import.meta.url`, `argv[1]` keeps the path as given.
 *
 * Both exited 0 with no output at all. Comparing real paths decides the same question
 * without depending on how the path was spelled.
 */
export function isEntryPoint(moduleUrl) {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return realpathSync(entry) === realpathSync(fileURLToPath(moduleUrl));
  } catch {
    return false;
  }
}

// --- SELF-TEST FIRST: a check that cannot go red is worse than no check. -----

const VECTORS = [
  ["the version that published v5.1.0", "0.44.0", MIN_CLI_VERSION, false],
  ["the release the read-back landed in", "0.47.0", MIN_CLI_VERSION, true],
  ["the version the job bootstrapped", "0.51.1", MIN_CLI_VERSION, true],
  ["one patch below the floor", "0.46.9", MIN_CLI_VERSION, false],
  ["a prerelease of the floor is not the floor", "0.47.0-rc.1", MIN_CLI_VERSION, false],
  ["a prerelease after the floor clears it", "0.48.0-rc.1", MIN_CLI_VERSION, true],
  ["a later major clears it", "1.0.0", MIN_CLI_VERSION, true],
  ["10 is not 1 -- string compare would say below", "0.100.0", MIN_CLI_VERSION, true],
  ["unparsable input never passes", "not-a-version", MIN_CLI_VERSION, false],
];

const selfTestFailures = [];
for (const [label, version, floor, expected] of VECTORS) {
  const got = isAtLeast(version, floor);
  if (got !== expected) selfTestFailures.push(`${label}: expected ${expected}, got ${got}`);
}
if (!parseVersion(MIN_CLI_VERSION)) selfTestFailures.push("MIN_CLI_VERSION is not a version");
if (selfTestFailures.length > 0) {
  console.error("assert-publish-cli: SELF-TEST failed -- the check itself is broken:");
  for (const failure of selfTestFailures) console.error(`  - ${failure}`);
  process.exit(1);
}

// Importing this module for its constants must not run the assertion below.
if (isEntryPoint(import.meta.url)) main();

// --- The binary this step will actually run --------------------------------

function main() {
  // `command -v` through a shell, so this resolves gjsify exactly the way the publish
  // command in the same `run:` block will -- same PATH, same shell, one step later.
  const resolution = spawnSync("sh", ["-c", "command -v gjsify"], { encoding: "utf8" });
  const binary = resolution.stdout.trim();
  if (resolution.status !== 0 || binary === "") {
    console.error("assert-publish-cli: no `gjsify` on PATH -- nothing would publish.");
    process.exit(1);
  }

  const probe = spawnSync(binary, ["--version"], { encoding: "utf8" });
  if (probe.status !== 0) {
    console.error(`assert-publish-cli: \`${binary} --version\` exited ${probe.status}.`);
    if (probe.stderr) console.error(probe.stderr.trim());
    process.exit(1);
  }
  const reported = `${probe.stdout}${probe.stderr}`.trim();
  const parsed = parseVersion(reported);
  if (!parsed) {
    console.error(`assert-publish-cli: cannot read a version out of \`${binary} --version\`:`);
    console.error(`  ${JSON.stringify(reported)}`);
    process.exit(1);
  }
  const version = `${parsed.major}.${parsed.minor}.${parsed.patch}${parsed.pre ? `-${parsed.pre}` : ""}`;

  // Two binaries can publish, so both are measured. `gjsify run publish:app` does not run
  // `gjsify publish` from this PATH directly: the CLI re-execs nested invocations through a
  // shim directory it puts FIRST on PATH, with the workspace's `node_modules/.bin` behind
  // it. Measured with 0.51.1: `gjsify run` and `gjsify foreach --exec` both resolve a nested
  // `gjsify` to `/tmp/gjsify-shim-*/gjsify`, which execs the OUTER CLI. Older CLIs let
  // `node_modules/.bin` win -- which is how v5.1.0 was published by 0.44.0 while the job
  // reported 0.51.1. Holding BOTH candidates to the floor means the answer does not depend
  // on which CLI's task-runner semantics apply.
  let pin = "(not declared)";
  let installed = null;
  try {
    const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
    pin =
      manifest.devDependencies?.["@gjsify/cli"] ?? manifest.dependencies?.["@gjsify/cli"] ?? pin;
  } catch {
    // Running outside the repo is not this check's business; the binary above is.
  }
  try {
    const url = new URL("../node_modules/@gjsify/cli/package.json", import.meta.url);
    installed = JSON.parse(readFileSync(url, "utf8")).version ?? null;
  } catch {
    // No workspace copy: the resolved binary is the only candidate.
  }

  console.log(`assert-publish-cli: publishing with ${binary}`);
  console.log(`assert-publish-cli: it reports ${version}; this workspace pins @gjsify/cli ${pin}`);
  console.log(
    installed
      ? `assert-publish-cli: node_modules/@gjsify/cli is ${installed} -- the other binary a nested ` +
          "`gjsify publish` could resolve to"
      : "assert-publish-cli: no @gjsify/cli in node_modules; the resolved binary is the only candidate",
  );

  const tooOld = [
    ["the CLI on PATH", version],
    ...(installed ? [["node_modules/@gjsify/cli", installed]] : []),
  ].filter(([, candidate]) => !isAtLeast(candidate, MIN_CLI_VERSION));

  if (tooOld.length > 0) {
    console.error(
      `assert-publish-cli: REFUSING to publish. Below ${MIN_CLI_VERSION} -- the release that added ` +
        "the registry read-back (gjsify#1509) -- are:",
    );
    for (const [which, candidate] of tooOld) console.error(`  - ${which}: ${candidate}`);
    console.error(
      "  Below it, `gjsify publish` prints npm's success marker for a PUT that never resolved on " +
        "the registry and exits 0 -- which is how v5.1.0 shipped nine of twelve packages while " +
        "the job reported success.",
    );
    console.error(
      `  Either this step is not running the workspace's CLI, or the pin (currently ${pin}) is too ` +
        "low -- a caret on a 0.x version cannot cross a minor, so `^0.44.0` never reaches 0.47.",
    );
    process.exit(1);
  }

  console.log(
    `assert-publish-cli: both candidates are >= ${MIN_CLI_VERSION}, so a publish that does not ` +
      "resolve on the registry fails this step instead of printing a success marker.",
  );
}
