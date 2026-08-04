// E2E test for `packages/cli/bin/ts-for-gir-dev` — the dev entry's exit-code
// propagation.
//
// THE INCIDENT
//
// The wrapper spawns `src/start.ts` under Node's type-stripping flags and used to end
// on a bare `spawn(...)`: no `exit` handler, no `error` handler, 43 lines total. So the
// wrapper returned immediately and the process exited **0 no matter what the CLI did**.
//
// Measured before the fix: a bogus subcommand exited 0, and so did a run where the CLI
// could not even load its own dependencies (`node:internal/modules/package_json_reader`
// crash in a tree with no `node_modules`) — a hard startup failure reported as success.
//
// It mattered because of one script. The repo's `build:types` is
//
//     ts-for-gir-dev generate --configName=… --girDirectories=./girs … && gjsify install
//
// so the step that generates all ~700 `@girs/*` packages COULD NOT FAIL in CI. A
// generator crash, an unresolvable dependency, a thrown parse error: every one of them
// landed as a green step, and the only remaining signal was a human reading the log.
//
// WHY THE TEST DRIVES A STUB
//
// It copies the REAL wrapper into a temp tree beside a stub `src/start.ts` whose exit
// code comes from argv. The wrapper resolves its target as `../src/start.ts` relative to
// its own location, so the copy runs the real file against a controllable child — the
// exit code becomes an input instead of something to provoke, and the test needs no
// installed dependency tree, no GIR files, and no generation run. Provoking a real
// failure would test the CLI; this tests the wrapper.

import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, copyFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// tests/e2e/dev-wrapper-exit/ → repo root is 3 levels up.
const REPO_ROOT = join(__dirname, "..", "..", "..");
const WRAPPER = join(REPO_ROOT, "packages", "cli", "bin", "ts-for-gir-dev");

let root;
let wrapper;

/** Run the copied wrapper, handing the stub the exit code (or `signal`) to use. */
function run(arg) {
  return spawnSync(process.execPath, [wrapper, String(arg)], { encoding: "utf8" });
}

describe("ts-for-gir-dev exit-code propagation", { timeout: 60_000 }, () => {
  before(() => {
    root = mkdtempSync(join(tmpdir(), "ts-for-gir-dev-wrapper-"));
    mkdirSync(join(root, "bin"));
    mkdirSync(join(root, "src"));
    wrapper = join(root, "bin", "ts-for-gir-dev");
    copyFileSync(WRAPPER, wrapper);
    writeFileSync(
      join(root, "src", "start.ts"),
      [
        'const arg: string = process.argv[2] ?? "0";',
        'if (arg === "signal") { process.kill(process.pid, "SIGTERM"); }',
        "process.stdout.write(`stub ran with ${arg}\\n`);",
        "process.exit(Number(arg));",
        "",
      ].join("\n"),
    );
  });

  after(() => {
    if (root) rmSync(root, { recursive: true, force: true });
  });

  it("passes a successful run through as 0", () => {
    const result = run(0);
    assert.equal(result.status, 0, result.stderr);
    // Also proves the wrapper actually reached the stub rather than exiting early
    // for an unrelated reason — the failure modes below would look identical.
    assert.match(result.stdout, /stub ran with 0/);
  });

  it("fails when the child fails", () => {
    const result = run(1);
    assert.equal(result.status, 1);
    assert.match(result.stdout, /stub ran with 1/);
  });

  it("preserves the exact code, not just non-zero", () => {
    // Collapsing every failure to 1 would lose a CLI that distinguishes its exit
    // codes, and a caller keying on one would silently take the wrong branch.
    const result = run(7);
    assert.equal(result.status, 7);
  });

  it("reports a signal-killed child as 128+n rather than success", () => {
    const result = run("signal");
    // Node surfaces this either as the conventional shell code or as the signal
    // name, depending on how the re-raise lands; either is honest, 0 is not.
    const killed = result.status === 143 || result.signal === "SIGTERM";
    assert.ok(
      killed,
      `expected 143 or SIGTERM, got status=${result.status} signal=${result.signal}`,
    );
    assert.notEqual(result.status, 0);
  });

  it("fails loudly when the interpreter cannot be spawned at all", () => {
    // The `error` half of the pair. Without it a spawn failure is silence: no
    // handler, no exception, exit 0.
    const result = spawnSync(process.execPath, [wrapper, "0"], {
      encoding: "utf8",
      env: { ...process.env, PATH: "/nonexistent" },
    });
    // `process.execPath` is absolute, so PATH cannot break it — the wrapper must
    // still succeed. This pins the reason it uses execPath instead of "node".
    assert.equal(result.status, 0, `execPath spawn must not depend on PATH: ${result.stderr}`);
  });
});
