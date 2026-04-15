// Shared E2E test helpers for ts-for-gir CLI workflows.

import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const MONOREPO_ROOT = join(__dirname, '..', '..');
export const GIRS_DIR = join(MONOREPO_ROOT, 'girs');

/**
 * Pack workspace tarballs via pack.mjs into tarballsDir.
 * Returns { "@ts-for-gir/cli": "@ts-for-gir-cli.tgz", ... } map.
 *
 * @param {string} tarballsDir Output directory for tarballs
 * @param {object} [options]
 * @param {string[]} [options.includeGirs] Names of @girs/* packages from types-dev to also pack
 */
export function packWorkspaces(tarballsDir, options = {}) {
  const args = [join(__dirname, 'pack.mjs'), tarballsDir];
  if (options.includeGirs && options.includeGirs.length > 0) {
    args.push('--include-girs', options.includeGirs.join(','));
  }
  const stdout = execFileSync('node', args, {
    cwd: MONOREPO_ROOT,
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
    timeout: 10 * 60 * 1000,
  });
  return JSON.parse(stdout);
}

/**
 * Create a temporary directory for an E2E test.
 * Returns { tmpDir, tarballsDir, tarballMap }.
 *
 * @param {string} [prefix]
 * @param {object} [options]
 * @param {string[]} [options.includeGirs] Names of @girs/* packages from types-dev to also pack
 */
export function createTestEnvironment(prefix = 'ts-for-gir-e2e-', options = {}) {
  const tmpDir = mkdtempSync(join(tmpdir(), prefix));
  const tarballsDir = join(tmpDir, 'tarballs');

  console.log(`  tmp dir: ${tmpDir}`);
  console.log('  packing workspace packages...');
  const tarballMap = packWorkspaces(tarballsDir, options);
  console.log(`  packed ${Object.keys(tarballMap).length} packages`);

  return { tmpDir, tarballsDir, tarballMap };
}

/**
 * Clean up a temporary directory unless TS_FOR_GIR_E2E_KEEP_TEMP is set.
 */
export function cleanupTestEnvironment(tmpDir) {
  if (process.env.TS_FOR_GIR_E2E_KEEP_TEMP) {
    console.log(`  keeping tmp dir: ${tmpDir}`);
  } else if (tmpDir) {
    rmSync(tmpDir, { recursive: true, force: true });
  }
}

/**
 * Build an npm `overrides` object pointing all workspace packages to local tarballs.
 */
export function buildOverrides(tarballsDir, tarballMap) {
  const overrides = {};
  for (const [name, filename] of Object.entries(tarballMap)) {
    overrides[name] = `file:${join(tarballsDir, filename)}`;
  }
  return overrides;
}

/**
 * Convert a package name to its tarball file: reference, or return undefined.
 */
export function toFileRef(name, tarballsDir, tarballMap) {
  const filename = tarballMap[name];
  if (!filename) return undefined;
  return `file:${join(tarballsDir, filename)}`;
}

/**
 * Write a package.json, install deps, and return the project dir.
 * Note: Uses execSync for npm install — input is not user-controlled, safe in E2E context.
 */
export function setupProject(projectDir, pkg, tarballsDir, tarballMap) {
  // Patch all @ts-for-gir/* and @gi.ts/* deps to local tarballs
  for (const field of ['dependencies', 'devDependencies']) {
    if (!pkg[field]) continue;
    for (const name of Object.keys(pkg[field])) {
      const ref = toFileRef(name, tarballsDir, tarballMap);
      if (ref) pkg[field][name] = ref;
    }
  }

  // Add overrides for transitive deps
  pkg.overrides = buildOverrides(tarballsDir, tarballMap);

  writeFileSync(join(projectDir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n');

  console.log('  running npm install...');
  execFileSync('npm', ['install', '--no-audit', '--no-fund'], {
    cwd: projectDir,
    stdio: 'pipe',
    timeout: 3 * 60 * 1000,
  });
  console.log('  npm install done');
}

/**
 * Run the ts-for-gir CLI binary with the given arguments.
 * @param {string} cliBin Absolute path to the CLI binary
 * @param {string} cwd Working directory
 * @param {string[]} args CLI arguments as an array
 * @param {object} [options] Additional execFileSync options
 * @returns {{ stdout: string, stderr: string, exitCode?: number, error?: Error }}
 */
export function runCli(cliBin, cwd, args, options = {}) {
  const result = { stdout: '', stderr: '' };
  try {
    result.stdout = execFileSync('node', [cliBin, ...args], {
      cwd,
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
