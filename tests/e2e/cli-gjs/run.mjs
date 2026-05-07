// E2E tests for the ts-for-gir GJS bundle.
// Tests the GJS binary directly from the CLI package build output.

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  cleanupTestEnvironment,
  GIRS_DIR,
  MONOREPO_ROOT,
} from '../helpers.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GJS_BIN = join(MONOREPO_ROOT, 'packages', 'cli', 'bin', 'ts-for-gir-gjs');

/**
 * Run the GJS bundle with the given arguments.
 * The binary has a shebang so it can be executed directly.
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
    result.stdout = err.stdout || '';
    result.stderr = err.stderr || '';
    result.exitCode = err.status;
    result.error = err;
  }
  return result;
}

function gjsAvailable() {
  try {
    execFileSync('gjs', ['--version'], { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

describe('ts-for-gir GJS bundle E2E', { timeout: 10 * 60 * 1000 }, () => {
  let tmpDir;

  before(() => {
    if (!existsSync(GJS_BIN)) {
      throw new Error(
        `GJS bundle not found at ${GJS_BIN}.\n` +
        'Run: yarn build:app:gjs'
      );
    }
    if (!gjsAvailable()) {
      throw new Error('gjs is not installed on this system. Install with: sudo apt-get install gjs');
    }
    tmpDir = join(MONOREPO_ROOT, 'tests', 'e2e', 'tmp-gjs');
    mkdirSync(tmpDir, { recursive: true });
  });

  after(() => {
    cleanupTestEnvironment(tmpDir);
  });

  it('--help shows usage info', () => {
    const result = runGjs(['--help']);
    assert.ok(!result.error, `GJS bundle crashed: ${result.stderr}`);
    assert.ok(result.stdout.includes('generate'), 'Expected "generate" in help output');
    assert.ok(result.stdout.includes('list'), 'Expected "list" in help output');
    assert.ok(result.stdout.includes('self-update'), 'Expected "self-update" in help output');
  });

  it('--version outputs version number', () => {
    const result = runGjs(['--version']);
    assert.ok(!result.error, `GJS bundle crashed: ${result.stderr}`);
    assert.match(result.stdout.trim(), /\d+\.\d+\.\d+/, 'Expected semver-like version output');
  });

  it('list shows available GIR modules', () => {
    const result = runGjs(['list', '--girDirectories', GIRS_DIR]);
    assert.ok(!result.error, `list command failed: ${result.stderr}`);
    assert.ok(result.stdout.includes('GLib'), 'Expected GLib in module listing');
    assert.ok(result.stdout.includes('Gtk'), 'Expected Gtk in module listing');
  });

  it('generate Gtk-4.0 creates type definitions', () => {
    const outdir = join(tmpDir, 'generated-types');
    const result = runGjs([
      'generate', 'Gtk-4.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', outdir,
      '--noNamespace',
    ]);
    assert.ok(!result.error, `generate failed: ${result.stderr}`);
    assert.ok(existsSync(join(outdir, 'gtk-4.0.d.ts')), 'Expected gtk-4.0.d.ts to be generated');
  });

  it('doc generates HTML documentation natively', () => {
    // TypeDoc HTML generation calls shiki → WebAssembly.compile(oniguruma).
    // GJS 1.88 (SM 140) lacks the WebAssembly Promise APIs natively, but
    // @gjsify/webassembly (≥0.3.5) registers a polyfill backed by the
    // synchronous `new WebAssembly.{Module,Instance}` constructors.
    const outdir = join(tmpDir, 'docs');
    const result = runGjs([
      'doc', 'GLib-2.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', outdir,
    ]);
    assert.ok(!result.error, `doc command failed: ${result.stderr}`);
    assert.ok(existsSync(join(outdir, 'index.html')), 'Expected index.html in HTML output');
  });

  it('json GLib-2.0 generates valid JSON natively', () => {
    const outdir = join(__dirname, 'tmp-json');
    if (!existsSync(outdir)) mkdirSync(outdir, { recursive: true });
    const result = runGjs([
      'json',
      'GLib-2.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', outdir,
    ]);
    assert.ok(!result.error, `json failed: ${result.stderr}`);
    const outFile = join(outdir, 'GLib-2.0.json');
    assert.ok(existsSync(outFile), 'Expected GLib-2.0.json to be generated');
  });

  it('self-update --check reports version status', () => {
    // Network may not be available in all CI environments — tolerate HTTP /
    // network errors, but reject runtime errors that indicate the GJS bundle
    // is missing a required global. The original failure mode was
    // `Failed to fetch release information: fetch is not defined`, which the
    // previous lenient assertion (matching `Failed to fetch`) accepted as a
    // pass — masking the missing @gjsify/fetch polyfill for an entire release.
    const result = runGjs(['self-update', '--check']);
    const combined = result.stdout + result.stderr;

    const runtimeFailureSignals = [
      'is not defined',     // ReferenceError (e.g. `fetch is not defined`)
      'is not a function',  // TypeError when a global is wrong shape
      'ReferenceError',
    ];
    for (const signal of runtimeFailureSignals) {
      assert.ok(
        !combined.includes(signal),
        `self-update --check hit a runtime error (${signal}): ${combined}`,
      );
    }

    // Success path or network/HTTP error — both acceptable.
    const hasExpectedOutput =
      combined.includes('up to date') ||
      combined.includes('version available') ||
      // `Checking for updates` is printed before the network call; an HTTP /
      // socket error is then reported via `Failed to fetch release information`
      // followed by an HTTP status or libsoup error message.
      (combined.includes('Checking for updates') &&
        (combined.includes('HTTP ') || combined.includes('Failed to fetch')));
    assert.ok(hasExpectedOutput, `Unexpected output from self-update --check: ${combined}`);
  });
});
