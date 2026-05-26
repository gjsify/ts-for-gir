// Dual-runtime parity E2E test for ts-for-gir.
//
// PURPOSE: Guard that the Node bundle (bin/ts-for-gir, built via
// `gjsify build --app node`) and the GJS bundle (bin/ts-for-gir-gjs,
// built via `gjsify build --app gjs`) produce IDENTICAL, CORRECT output
// for every deterministic CLI operation.
//
// Each "parity" test runs the same arguments against both runtimes and asserts:
//   (a) both exit successfully (no crash / non-zero exit), AND
//   (b) the normalised output from the Node runtime equals the normalised
//       output from the GJS runtime.
//
// Non-deterministic bits normalised before comparison:
//   - Leading/trailing whitespace per line
//   - Blank lines (collapsed)
//   - ANSI colour sequences (stripped via regex)
//   - Absolute temp-dir paths (replaced with a placeholder token)
//
// Operations compared (cheapest → most expensive):
//   1. --version   Both runtimes print the same semver string.
//   2. --help      Both runtimes print the same usage text.
//   3. list        Both runtimes agree on the available GIR namespaces
//                  when pointed at the monorepo's bundled ./girs directory.
//   4. generate GLib-2.0
//                  Each runtime generates into its own temp outdir; the
//                  resulting .d.ts file-set (names only, not content) must
//                  be identical between runtimes. Content is NOT compared
//                  byte-for-byte because timestamps/metadata may differ,
//                  but file presence must match exactly.

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

import { MONOREPO_ROOT, GIRS_DIR, cleanupTestEnvironment } from '../helpers.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Binary paths ────────────────────────────────────────────────────────────
const NODE_BIN = join(MONOREPO_ROOT, 'packages', 'cli', 'bin', 'ts-for-gir');
const GJS_BIN  = join(MONOREPO_ROOT, 'packages', 'cli', 'bin', 'ts-for-gir-gjs');

// ── Runtime helpers ──────────────────────────────────────────────────────────

/**
 * Run the Node bundle with `node <bin> ...args`.
 * @param {string[]} args
 * @param {object} [options]
 * @returns {{ stdout: string, stderr: string, exitCode?: number, error?: Error }}
 */
function runNode(args, options = {}) {
  const result = { stdout: '', stderr: '' };
  try {
    result.stdout = execFileSync('node', [NODE_BIN, ...args], {
      encoding: 'utf8',
      timeout: 2 * 60 * 1000,
      stdio: ['pipe', 'pipe', 'pipe'],
      ...options,
    });
  } catch (err) {
    result.stdout   = err.stdout  || '';
    result.stderr   = err.stderr  || '';
    result.exitCode = err.status;
    result.error    = err;
  }
  return result;
}

/**
 * Run the GJS bundle directly (it carries a `#!/usr/bin/env gjs` shebang).
 * @param {string[]} args
 * @param {object} [options]
 * @returns {{ stdout: string, stderr: string, exitCode?: number, error?: Error }}
 */
function runGjs(args, options = {}) {
  const result = { stdout: '', stderr: '' };
  try {
    result.stdout = execFileSync(GJS_BIN, args, {
      encoding: 'utf8',
      timeout: 2 * 60 * 1000,
      stdio: ['pipe', 'pipe', 'pipe'],
      ...options,
    });
  } catch (err) {
    result.stdout   = err.stdout  || '';
    result.stderr   = err.stderr  || '';
    result.exitCode = err.status;
    result.error    = err;
  }
  return result;
}

// ── Normalisation ────────────────────────────────────────────────────────────

// Strip ANSI escape sequences (colours, bold, etc.)
const ANSI_RE = /\x1b\[[0-9;]*m/g;

/**
 * Normalise CLI output so two "equivalent" strings compare equal:
 *   - Strip ANSI codes
 *   - Trim each line
 *   - Remove empty lines
 *   - Replace absolute temp paths with a stable placeholder
 * @param {string} text
 * @param {string[]} [tempDirs]  Absolute paths to replace with '<TMPDIR>'
 * @returns {string}
 */
function normalise(text, tempDirs = []) {
  let s = text.replace(ANSI_RE, '');
  for (const d of tempDirs) {
    // Escape special regex chars in the path before substituting
    const escaped = d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    s = s.replace(new RegExp(escaped, 'g'), '<TMPDIR>');
  }
  return s
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .join('\n');
}

// ── Availability guards ──────────────────────────────────────────────────────

function gjsAvailable() {
  try {
    execFileSync('gjs', ['--version'], { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

// ── Test suite ───────────────────────────────────────────────────────────────

describe('dual-runtime parity: Node bundle vs GJS bundle', { timeout: 10 * 60 * 1000 }, () => {
  let tmpDir;
  let nodeOutDir;
  let gjsOutDir;

  before(() => {
    // Verify both binaries have been built before running any test.
    assert.ok(existsSync(NODE_BIN), `Node bundle not found at ${NODE_BIN}.\nRun: yarn build:app`);
    assert.ok(existsSync(GJS_BIN),  `GJS bundle not found at ${GJS_BIN}.\nRun: yarn build:app:gjs`);
    assert.ok(gjsAvailable(), 'gjs is not installed — install with: sudo apt-get install gjs');

    // Create isolated temp directories for generate output (one per runtime)
    tmpDir    = mkdtempSync(join(tmpdir(), 'ts-for-gir-parity-'));
    nodeOutDir = join(tmpDir, 'node-out');
    gjsOutDir  = join(tmpDir, 'gjs-out');
    mkdirSync(nodeOutDir, { recursive: true });
    mkdirSync(gjsOutDir,  { recursive: true });
  });

  after(() => {
    cleanupTestEnvironment(tmpDir);
  });

  // ── 1. --version ────────────────────────────────────────────────────────────

  it('--version: both runtimes print the same semver string', () => {
    const node = runNode(['--version']);
    const gjs  = runGjs(['--version']);

    assert.ok(!node.error, `Node bundle crashed on --version: ${node.stderr}`);
    assert.ok(!gjs.error,  `GJS bundle crashed on --version: ${gjs.stderr}`);

    const nodeVer = normalise(node.stdout);
    const gjsVer  = normalise(gjs.stdout);

    assert.match(nodeVer, /\d+\.\d+\.\d+/, `Node --version not semver: "${nodeVer}"`);
    assert.match(gjsVer,  /\d+\.\d+\.\d+/, `GJS --version not semver: "${gjsVer}"`);
    assert.equal(nodeVer, gjsVer, '--version output differs between Node and GJS runtimes');
  });

  // ── 2. --help ────────────────────────────────────────────────────────────────

  it('--help: both runtimes print identical usage text', () => {
    const node = runNode(['--help']);
    const gjs  = runGjs(['--help']);

    assert.ok(!node.error, `Node bundle crashed on --help: ${node.stderr}`);
    assert.ok(!gjs.error,  `GJS bundle crashed on --help: ${gjs.stderr}`);

    const nodeHelp = normalise(node.stdout);
    const gjsHelp  = normalise(gjs.stdout);

    // Sanity: both mention the core commands
    for (const cmd of ['generate', 'list']) {
      assert.ok(nodeHelp.includes(cmd), `Node --help missing "${cmd}"`);
      assert.ok(gjsHelp.includes(cmd),  `GJS --help missing "${cmd}"`);
    }

    assert.equal(nodeHelp, gjsHelp, '--help output differs between Node and GJS runtimes');
  });

  // ── 3. list ─────────────────────────────────────────────────────────────────

  it('list: both runtimes agree on available GIR namespaces', () => {
    const node = runNode(['list', '--girDirectories', GIRS_DIR]);
    const gjs  = runGjs(['list',  '--girDirectories', GIRS_DIR]);

    assert.ok(!node.error, `Node bundle list failed: ${node.stderr}`);
    assert.ok(!gjs.error,  `GJS bundle list failed: ${gjs.stderr}`);

    const nodeList = normalise(node.stdout);
    const gjsList  = normalise(gjs.stdout);

    // Both must mention GLib (always present in the monorepo's ./girs)
    assert.ok(nodeList.includes('GLib'), `Node list output missing GLib: ${nodeList}`);
    assert.ok(gjsList.includes('GLib'),  `GJS list output missing GLib: ${gjsList}`);

    assert.equal(nodeList, gjsList, 'list output differs between Node and GJS runtimes');
  });

  // ── 4. generate GLib-2.0 ────────────────────────────────────────────────────

  it('generate GLib-2.0: both runtimes produce identical .d.ts file sets', () => {
    // Run Node runtime generate
    const nodeResult = runNode([
      'generate', 'GLib-2.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', nodeOutDir,
      '--noNamespace',
    ]);
    // Run GJS runtime generate
    const gjsResult = runGjs([
      'generate', 'GLib-2.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', gjsOutDir,
      '--noNamespace',
    ]);

    assert.ok(!nodeResult.error, `Node generate GLib-2.0 failed: ${nodeResult.stderr}`);
    assert.ok(!gjsResult.error,  `GJS generate GLib-2.0 failed: ${gjsResult.stderr}`);

    // Collect .d.ts file names (relative to outdir) — not absolute paths
    const nodeDts = readdirSync(nodeOutDir, { recursive: true })
      .filter((f) => f.endsWith('.d.ts'))
      .sort();
    const gjsDts = readdirSync(gjsOutDir, { recursive: true })
      .filter((f) => f.endsWith('.d.ts'))
      .sort();

    assert.ok(nodeDts.length > 0, 'Node runtime produced no .d.ts files');
    assert.ok(gjsDts.length > 0,  'GJS runtime produced no .d.ts files');

    assert.deepEqual(
      nodeDts,
      gjsDts,
      'Generated .d.ts file sets differ between Node and GJS runtimes',
    );
  });
});
