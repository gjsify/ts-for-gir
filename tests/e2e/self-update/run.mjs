// E2E regression guard: `ts-for-gir self-update` binary-path detection (#418).
//
// REGRESSION: On rc.17 and earlier, ANY path containing `node_modules` —
// including the canonical gjsify-install global location
// (`$HOME/.local/share/gjsify/global/node_modules/…`) — triggered the error:
//   "Cannot determine current binary path. self-update only works when
//    running the installed GJS binary."
//
// FIX (#418): `isGjsifyGlobalLocation()` now exempts paths whose prefix
// matches `$XDG_DATA_HOME/gjsify/global/` or `$HOME/.local/share/gjsify/global/`.
//
// THIS FILE guards that fix. Three path-detection branches are exercised:
//   1. gjsify-global path → ACCEPTED   (the rc.17 regression case)
//   2. plain project-local node_modules path → REJECTED
//   3. .ts dev-mode path → REJECTED
//
// ── GitHub API mockability ────────────────────────────────────────────────────
// getCurrentBinaryPath() is called AFTER the GitHub releases API fetch, so
// reaching the binary-path guard requires the network call to succeed first.
// self-update.ts exposes a test seam: TS_FOR_GIR_GITHUB_API overrides the
// hardcoded api.github.com base URL. We spin up a minimal in-process HTTP
// server and point the CLI at it via that env var — no real network access.
//
// ── Controlling process.argv[1] ──────────────────────────────────────────────
// process.argv is a plain mutable JS array. We use a --import preload
// (argv1-override.mjs) that reads TS_FOR_GIR_ARGV1_OVERRIDE from the env and
// sets process.argv[1] before the CLI module loads. This is safe — it avoids
// monkey-patching frozen ESM module namespaces (which would throw
// "Cannot assign to read only property").
//
// ── Which binary this test uses ──────────────────────────────────────────────
// This test uses the compiled Node bundle (bin/ts-for-gir), the same binary
// dual-runtime-parity uses. In CI the bundle is always rebuilt from the
// current source (gjsify run build:app) before the e2e suite runs, so the
// TS_FOR_GIR_GITHUB_API test seam (added alongside this test) is present in
// the bundle. If you run this test locally without rebuilding first, the seam
// may be absent and ALL tests will fail — run `gjsify run build:app` first.
//
// ── "Accepted" vs "Rejected" test oracle ────────────────────────────────────
// getCurrentBinaryPath() fires at step 5 of the handler (after API fetch +
// asset lookup). For REJECTED paths it returns null, printing:
//   "Cannot determine current binary path for update."
// For ACCEPTED paths it returns the path, but the handler also calls
// existsSync(currentPath). The fake gjsify-global path is written to disk so
// existsSync() passes, and the handler advances to downloadBinary() — the
// mock server responds with 200 + a tiny stub body so the download completes
// promptly and the process exits with "Successfully updated".
// The key assertion for ACCEPTED tests is the ABSENCE of the path-rejection
// message; any forward-progress indicator proves path-detection passed.

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import {
  existsSync,
  mkdirSync,
  writeFileSync,
  rmSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MONOREPO_ROOT = join(__dirname, '..', '..', '..');

// Compiled Node bundle — same binary used by dual-runtime-parity.
// Requires `gjsify run build:app` to have been run first.
const NODE_BIN = join(MONOREPO_ROOT, 'packages', 'cli', 'bin', 'ts-for-gir');

// --import preload: sets process.argv[1] from TS_FOR_GIR_ARGV1_OVERRIDE
// before the CLI module loads.
const ARGV1_PRELOAD = join(__dirname, 'argv1-override.mjs');

// ── Fake GitHub release ───────────────────────────────────────────────────────
//
// A version guaranteed to differ from the current installed version so the
// handler does NOT short-circuit at "Already up to date" and proceeds to the
// asset lookup → binary-path check.
const FAKE_LATEST_VERSION = '99.99.99-test';

// ── Helper: run CLI with controlled argv[1] and mocked GitHub API ─────────────

/**
 * Run `node <NODE_BIN> self-update [extraArgs]` with:
 *   - TS_FOR_GIR_GITHUB_API → mock server (test seam in self-update.ts)
 *   - TS_FOR_GIR_ARGV1_OVERRIDE → injected into process.argv[1] via preload
 *
 * Returns { stdout, stderr, exitCode, error? }.
 *
 * @param {string}   fakeArgv1   Value to inject as process.argv[1]
 * @param {string}   apiBase     Base URL of the mock GitHub API server
 * @param {string[]} [extraArgs] Additional CLI args
 * @param {object}   [extraEnv]  Additional env vars merged on top of process.env
 */
function runSelfUpdate(fakeArgv1, apiBase, extraArgs = [], extraEnv = {}) {
  const result = { stdout: '', stderr: '', exitCode: null };
  try {
    result.stdout = execFileSync(
      'node',
      [`--import=${ARGV1_PRELOAD}`, NODE_BIN, 'self-update', ...extraArgs],
      {
        encoding: 'utf8',
        timeout: 30_000,
        stdio: ['pipe', 'pipe', 'pipe'],
        env: {
          ...process.env,
          TS_FOR_GIR_GITHUB_API: apiBase,
          TS_FOR_GIR_ARGV1_OVERRIDE: fakeArgv1,
          NODE_NO_WARNINGS: '1',
          ...extraEnv,
        },
      },
    );
    result.exitCode = 0;
  } catch (err) {
    result.stdout = err.stdout || '';
    result.stderr = err.stderr || '';
    result.exitCode = err.status ?? 1;
    result.error = err;
  }
  return result;
}

// ── Test suite ────────────────────────────────────────────────────────────────

describe('self-update binary-path detection (#418 regression guard)', { timeout: 180_000 }, () => {
  let server;
  let apiBase;
  let tmpRoot;

  before(async () => {
    // The compiled bundle must exist. If not: run `gjsify run build:app`.
    assert.ok(
      existsSync(NODE_BIN),
      `Node bundle not found at ${NODE_BIN}.\nRun: gjsify run build:app`,
    );
    assert.ok(existsSync(ARGV1_PRELOAD), `Preload not found at ${ARGV1_PRELOAD}`);

    // Temp root for fake on-disk binary files created by the "accepted" tests.
    tmpRoot = join(tmpdir(), `ts4gir-selfupdate-e2e-${Date.now()}`);
    mkdirSync(tmpRoot, { recursive: true });

    // Mock GitHub releases API server.
    // The server advertises FAKE_LATEST_VERSION (99.99.99-test), which is
    // guaranteed to differ from any real installed version, so the handler
    // doesn't short-circuit at "Already up to date" and reaches the
    // asset-lookup → binary-path check.
    //
    // The mock serves the binary download URL with a prompt 200 + tiny body
    // (instead of 404) so the CLI's downloadBinary() completes quickly without
    // leaving an undrained HTTP response body on the connection. A 404 here
    // caused the undici keep-alive connection to hang until the execFileSync
    // 30 s timeout fired — two such spawns exceeded the 60 s suite timeout.
    server = createServer((req, res) => {
      try {
        const url = req.url ?? '';
        if (url === '/repos/gjsify/ts-for-gir/releases/latest') {
          const port = server.address().port;
          res.writeHead(200, { 'content-type': 'application/json', 'connection': 'close' });
          res.end(
            JSON.stringify({
              tag_name: `v${FAKE_LATEST_VERSION}`,
              assets: [
                {
                  name: 'ts-for-gir-gjs',
                  // Serve the download URL with a real 200 + tiny stub body.
                  // This lets downloadBinary() complete promptly; the CLI will
                  // then overwrite the fake on-disk binary (acceptable in tests).
                  browser_download_url: `http://127.0.0.1:${port}/fake-binary`,
                },
              ],
            }),
          );
          return;
        }
        if (url === '/fake-binary') {
          // Minimal stub "binary" — just enough bytes for arrayBuffer() to
          // resolve immediately. The CLI writes it to a tmp file and renames it
          // over the fake argv1 path; both operations succeed and the process
          // exits cleanly with "Successfully updated".
          const stub = Buffer.from('#!/bin/sh\n# stub\n');
          res.writeHead(200, {
            'content-type': 'application/octet-stream',
            'content-length': String(stub.length),
            'connection': 'close',
          });
          res.end(stub);
          return;
        }
        // All other paths → 404.
        res.writeHead(404, { 'connection': 'close' }).end('not found in mock');
      } catch (e) {
        res.writeHead(500).end(String(e));
      }
    });

    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    apiBase = `http://127.0.0.1:${server.address().port}`;
  });

  after(() => {
    if (server) server.close();
    if (tmpRoot && !process.env.TS_FOR_GIR_E2E_KEEP_TEMP) {
      rmSync(tmpRoot, { recursive: true, force: true });
    }
  });

  // ── Test 1: gjsify-global path under $HOME is ACCEPTED ──────────────────────
  //
  // THE rc.17 REGRESSION CASE. The canonical gjsify-install path is:
  //   $HOME/.local/share/gjsify/global/node_modules/@ts-for-gir/cli/bin/ts-for-gir-gjs
  //
  // Before #418, `getCurrentBinaryPath()` rejected ALL paths containing
  // `node_modules` — including this one. The fix adds `isGjsifyGlobalLocation()`
  // which recognises this prefix and allows the update to proceed.
  //
  // We create the fake binary file on disk so existsSync() passes, and the
  // handler advances to downloadBinary(). The mock now serves the download URL
  // with a 200 + tiny stub body so the download completes promptly and the
  // process exits cleanly with "Successfully updated".
  // The key assertion is the ABSENCE of "Cannot determine current binary path".

  it('gjsify-global path under $HOME/.local/share/gjsify/global/ is ACCEPTED (rc.17 regression guard)', () => {
    const fakeHome = join(tmpRoot, 'home-xdg-home');
    const globalBinDir = join(
      fakeHome, '.local', 'share', 'gjsify', 'global',
      'node_modules', '@ts-for-gir', 'cli', 'bin',
    );
    mkdirSync(globalBinDir, { recursive: true });
    const fakeArgv1 = join(globalBinDir, 'ts-for-gir-gjs');
    // Create a placeholder file so existsSync(currentPath) passes in the handler.
    writeFileSync(fakeArgv1, '#!/bin/sh\n', { mode: 0o755 });

    const result = runSelfUpdate(fakeArgv1, apiBase, [], {
      HOME: fakeHome,
      XDG_DATA_HOME: '',     // ensure only HOME is consulted
    });

    // THE REGRESSION ASSERTION: path-detection must NOT reject this path.
    assert.ok(
      !result.stderr.includes('Cannot determine current binary path'),
      `rc.17 regression: gjsify-global HOME path was rejected.\n` +
      `stderr: ${result.stderr}\nstdout: ${result.stdout}`,
    );

    // Handler must have advanced past path-detection to the download step.
    // The mock serves a stub binary so the download completes and the process
    // prints "Successfully updated". We accept any progress marker so the
    // assertion is robust against minor message wording changes.
    const combined = result.stdout + result.stderr;
    assert.ok(
      combined.includes('Checking for updates') ||
      combined.includes('Updating to') ||
      combined.includes('Successfully updated') ||
      combined.includes('Update failed') ||
      combined.includes(FAKE_LATEST_VERSION),
      `Expected handler to proceed past path-detection; got:\n` +
      `stdout: ${result.stdout}\nstderr: ${result.stderr}`,
    );
  });

  it('gjsify-global path under $XDG_DATA_HOME/gjsify/global/ is ACCEPTED', () => {
    const fakeXdgData = join(tmpRoot, 'xdg-data');
    const globalBinDir = join(
      fakeXdgData, 'gjsify', 'global',
      'node_modules', '@ts-for-gir', 'cli', 'bin',
    );
    mkdirSync(globalBinDir, { recursive: true });
    const fakeArgv1 = join(globalBinDir, 'ts-for-gir-gjs');
    writeFileSync(fakeArgv1, '#!/bin/sh\n', { mode: 0o755 });

    const result = runSelfUpdate(fakeArgv1, apiBase, [], {
      XDG_DATA_HOME: fakeXdgData,
    });

    assert.ok(
      !result.stderr.includes('Cannot determine current binary path'),
      `XDG gjsify-global path was rejected.\n` +
      `stderr: ${result.stderr}\nstdout: ${result.stdout}`,
    );

    const combined = result.stdout + result.stderr;
    assert.ok(
      combined.includes('Checking for updates') ||
      combined.includes('Updating to') ||
      combined.includes('Successfully updated') ||
      combined.includes('Update failed') ||
      combined.includes(FAKE_LATEST_VERSION),
      `Expected handler to proceed past path-detection; got:\n` +
      `stdout: ${result.stdout}\nstderr: ${result.stderr}`,
    );
  });

  // ── Test 2: plain project-local node_modules path is REJECTED ───────────────
  //
  // A local `npm install @ts-for-gir/cli` drops the binary at
  // <project>/node_modules/@ts-for-gir/cli/bin/ts-for-gir-gjs. This path
  // contains `node_modules` but is NOT under the gjsify-global root, so
  // self-update should refuse and tell the user to update via their package
  // manager.

  it('project-local node_modules path (not gjsify-global) is REJECTED', () => {
    const fakeHome = join(tmpRoot, 'home-local-nm');
    mkdirSync(fakeHome, { recursive: true });
    // Path is under a project directory, NOT under fakeHome's gjsify-global.
    const localNodeModulesArgv1 =
      '/home/user/myproject/node_modules/@ts-for-gir/cli/bin/ts-for-gir-gjs';

    const result = runSelfUpdate(localNodeModulesArgv1, apiBase, [], {
      HOME: fakeHome,
      XDG_DATA_HOME: join(fakeHome, '.local', 'share'),
    });

    const combined = result.stdout + result.stderr;
    assert.ok(
      combined.includes('Cannot determine current binary path') ||
      combined.includes('self-update only works when running the installed GJS binary'),
      `Expected path-rejection message for project-local node_modules; got:\n` +
      `stdout: ${result.stdout}\nstderr: ${result.stderr}`,
    );
    assert.notEqual(
      result.exitCode,
      0,
      'Expected non-zero exit for rejected project-local node_modules path',
    );
  });

  // ── Test 3: .ts dev-mode path is REJECTED ────────────────────────────────────
  //
  // Executing directly from TypeScript source (e.g. the dev launcher spawns
  // `node --experimental-strip-types src/start.ts …`) must never allow
  // self-update — there is no installed binary to atomically replace.
  // getCurrentBinaryPath() returns null immediately for any path ending in .ts.

  it('.ts dev path (source execution) is REJECTED', () => {
    const devTsArgv1 = join(MONOREPO_ROOT, 'packages', 'cli', 'src', 'start.ts');

    const result = runSelfUpdate(devTsArgv1, apiBase);

    const combined = result.stdout + result.stderr;
    assert.ok(
      combined.includes('Cannot determine current binary path') ||
      combined.includes('self-update only works when running the installed GJS binary'),
      `Expected dev-path rejection for .ts argv[1]; got:\n` +
      `stdout: ${result.stdout}\nstderr: ${result.stderr}`,
    );
    assert.notEqual(
      result.exitCode,
      0,
      'Expected non-zero exit for .ts dev path',
    );
  });

  // ── Test 4: "Already up to date" short-circuit ───────────────────────────────
  //
  // When the mock API reports the same version as currently installed, the
  // handler short-circuits at "Already up to date" BEFORE reaching the
  // binary-path check. This verifies the short-circuit works and exits 0.
  //
  // The current version is read dynamically from packages/cli/package.json so
  // this test stays correct across version bumps.

  it('reports "Already up to date" when mock API returns the current version', async () => {
    const req = createRequire(import.meta.url);
    const { version: currentVersion } = req(
      join(MONOREPO_ROOT, 'packages', 'cli', 'package.json'),
    );

    // Dedicated server that advertises the current version (matches installed).
    let sameVersionServer;
    let sameVersionApiBase;
    try {
      sameVersionServer = createServer((req2, res) => {
        const url = req2.url ?? '';
        if (url === '/repos/gjsify/ts-for-gir/releases/latest') {
          res.writeHead(200, { 'content-type': 'application/json' });
          res.end(JSON.stringify({ tag_name: `v${currentVersion}`, assets: [] }));
          return;
        }
        res.writeHead(404).end('not found');
      });
      await new Promise((resolve) => sameVersionServer.listen(0, '127.0.0.1', resolve));
      sameVersionApiBase = `http://127.0.0.1:${sameVersionServer.address().port}`;

      // Use a gjsify-global path so path-detection doesn't interfere.
      // The file doesn't need to exist on disk — the handler returns before
      // reaching existsSync() when versions match.
      const fakeHome = join(tmpRoot, 'home-uptodate');
      mkdirSync(fakeHome, { recursive: true });
      const gjsifyGlobalArgv1 = join(
        fakeHome,
        '.local', 'share', 'gjsify', 'global',
        'node_modules', '@ts-for-gir', 'cli', 'bin', 'ts-for-gir-gjs',
      );

      const result = runSelfUpdate(gjsifyGlobalArgv1, sameVersionApiBase, [], {
        HOME: fakeHome,
        XDG_DATA_HOME: '',
      });

      assert.ok(
        result.stdout.includes('Already up to date'),
        `Expected "Already up to date" message; got:\n` +
        `stdout: ${result.stdout}\nstderr: ${result.stderr}`,
      );
      assert.equal(result.exitCode, 0, 'Expected zero exit for "Already up to date"');
    } finally {
      if (sameVersionServer) sameVersionServer.close();
    }
  });
});
