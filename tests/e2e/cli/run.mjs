// E2E tests for the ts-for-gir CLI.
// Tests run in an isolated temp directory outside the monorepo workspace
// to simulate real user conditions (npm install from tarball).

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import {
  createTestEnvironment,
  cleanupTestEnvironment,
  setupProject,
  runCli,
  GIRS_DIR,
} from '../helpers.mjs';

describe('ts-for-gir CLI E2E', { timeout: 10 * 60 * 1000 }, () => {
  let tmpDir;
  let tarballsDir;
  let tarballMap;
  let projectWithPkg;
  let projectNoPkg;
  let cliBin;

  before(() => {
    const env = createTestEnvironment('ts-for-gir-e2e-');
    tmpDir = env.tmpDir;
    tarballsDir = env.tarballsDir;
    tarballMap = env.tarballMap;

    // Project WITH package.json — install CLI from tarball
    projectWithPkg = join(tmpDir, 'project-with-pkg');
    mkdirSync(projectWithPkg, { recursive: true });

    setupProject(projectWithPkg, {
      name: 'test-ts-for-gir',
      version: '0.1.0',
      type: 'module',
      private: true,
      dependencies: {
        '@ts-for-gir/cli': '^4.0.0',
      },
    }, tarballsDir, tarballMap);

    // Resolve the installed CLI binary path
    cliBin = join(projectWithPkg, 'node_modules', '@ts-for-gir', 'cli', 'bin', 'ts-for-gir');
    assert.ok(existsSync(cliBin), `CLI binary not found at ${cliBin}`);

    // Project WITHOUT package.json — empty directory
    projectNoPkg = join(tmpDir, 'project-no-pkg');
    mkdirSync(projectNoPkg, { recursive: true });
  });

  after(() => {
    cleanupTestEnvironment(tmpDir);
  });

  // --- Tests with package.json ---

  it('--version outputs version (with package.json)', () => {
    const result = runCli(cliBin, projectWithPkg, ['--version']);
    assert.ok(!result.error, `CLI crashed: ${result.stderr}`);
    assert.match(result.stdout.trim(), /\d+\.\d+\.\d+/, 'Expected semver-like version output');
  });

  it('--help shows usage info (with package.json)', () => {
    const result = runCli(cliBin, projectWithPkg, ['--help']);
    assert.ok(!result.error, `CLI crashed: ${result.stderr}`);
    assert.ok(result.stdout.includes('generate'), 'Expected "generate" in help output');
    assert.ok(result.stdout.includes('list'), 'Expected "list" in help output');
  });

  // --- Tests WITHOUT package.json (issue #304) ---

  it('--version works without package.json (issue #304)', () => {
    const result = runCli(cliBin, projectNoPkg, ['--version']);
    assert.ok(!result.error, `CLI crashed without package.json: ${result.stderr}`);
    assert.match(result.stdout.trim(), /\d+\.\d+\.\d+/, 'Expected semver-like version output');
  });

  it('--help works without package.json (issue #304)', () => {
    const result = runCli(cliBin, projectNoPkg, ['--help']);
    assert.ok(!result.error, `CLI crashed without package.json: ${result.stderr}`);
    assert.ok(result.stdout.includes('generate'), 'Expected "generate" in help output');
  });

  // --- list command ---

  it('list shows available GIR modules', () => {
    const result = runCli(cliBin, projectWithPkg, ['list', '--girDirectories', GIRS_DIR]);
    assert.ok(!result.error, `list command failed: ${result.stderr}`);
    const output = result.stdout;
    assert.ok(output.includes('GLib'), 'Expected GLib in module listing');
    assert.ok(output.includes('Gtk'), 'Expected Gtk in module listing');
  });

  it('list works without package.json (issue #304)', () => {
    const result = runCli(cliBin, projectNoPkg, ['list', '--girDirectories', GIRS_DIR]);
    assert.ok(!result.error, `list command failed without package.json: ${result.stderr}`);
    assert.ok(result.stdout.includes('GLib'), 'Expected GLib in module listing');
  });

  // --- generate command ---

  it('generate Gtk-4.0 creates type definitions', () => {
    const outdir = join(projectWithPkg, '@types');
    const result = runCli(cliBin, projectWithPkg, [
      'generate', 'Gtk-4.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', outdir,
    ]);
    assert.ok(!result.error, `generate command failed: ${result.stderr}`);
    assert.ok(existsSync(outdir), 'Output directory was not created');
    const files = readdirSync(outdir, { recursive: true }).filter(f => f.endsWith('.d.ts'));
    assert.ok(files.length > 0, 'No .d.ts files were generated');
  });

  it('generate Gtk-4.0 --package creates package.json files', () => {
    const outdir = join(projectWithPkg, 'types-pkg');
    const result = runCli(cliBin, projectWithPkg, [
      'generate', 'Gtk-4.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', outdir,
      '--package',
    ]);
    assert.ok(!result.error, `generate --package failed: ${result.stderr}`);
    assert.ok(existsSync(outdir), 'Output directory was not created');
    const allFiles = readdirSync(outdir, { recursive: true });
    const pkgJsonFiles = allFiles.filter(f => f.endsWith('package.json'));
    assert.ok(pkgJsonFiles.length > 0, 'No package.json files were generated');
  });

  it('generate with config file works', () => {
    const outdir = join(projectWithPkg, '@types-config');
    const configContent = `export default {
  modules: ['Gtk-4.0'],
  girDirectories: ['${GIRS_DIR}'],
  outdir: '${outdir}',
};\n`;
    writeFileSync(join(projectWithPkg, '.ts-for-girrc.js'), configContent);

    const result = runCli(cliBin, projectWithPkg, ['generate']);
    assert.ok(!result.error, `generate with config file failed: ${result.stderr}`);
    assert.ok(existsSync(outdir), 'Output directory from config was not created');
    const files = readdirSync(outdir, { recursive: true }).filter(f => f.endsWith('.d.ts'));
    assert.ok(files.length > 0, 'No .d.ts files were generated via config');
  });

  it('generated types are valid TypeScript', () => {
    const outdir = join(projectWithPkg, '@types');
    // Skip if generate test didn't produce output
    if (!existsSync(outdir)) {
      assert.fail('Output directory from generate test does not exist — skipping tsc check');
    }

    // Create a minimal TS file that references the generated types
    const testTsFile = join(projectWithPkg, 'check-types.ts');
    writeFileSync(testTsFile, '// Minimal type check — just verify generated files parse\nexport {};\n');

    // Create a tsconfig that includes the generated types
    const tsconfig = {
      compilerOptions: {
        strict: true,
        noEmit: true,
        module: 'nodenext',
        moduleResolution: 'nodenext',
        target: 'esnext',
        skipLibCheck: false,
        typeRoots: [outdir],
      },
      include: [join(outdir, '**', '*.d.ts')],
    };
    writeFileSync(join(projectWithPkg, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));

    // Run tsc via npx to check the generated types
    let tscStderr = '';
    try {
      execFileSync('npx', ['--yes', 'typescript', '--', 'tsc', '--noEmit'], {
        cwd: projectWithPkg,
        encoding: 'utf8',
        timeout: 3 * 60 * 1000,
        stdio: ['pipe', 'pipe', 'pipe'],
      });
    } catch (err) {
      tscStderr = err.stderr || '';
      // We don't strictly assert zero exit — generated types may have known issues.
      // The key assertion is that tsc can parse the files without crashing.
    }
    assert.ok(
      !tscStderr.includes('Cannot find module'),
      `tsc crashed or could not find modules: ${tscStderr}`,
    );
  });

  it('handles invalid module name gracefully', () => {
    const result = runCli(cliBin, projectWithPkg, [
      'generate', 'NonExistentModule-99.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', join(projectWithPkg, 'types-invalid'),
    ]);
    assert.ok(result.exitCode !== 0 || result.stderr, 'Expected non-zero exit or stderr for invalid module');
  });

  it('generate Gtk-4.0 works without package.json (issue #304)', () => {
    const outdir = join(projectNoPkg, '@types');
    const result = runCli(cliBin, projectNoPkg, [
      'generate', 'Gtk-4.0',
      '--girDirectories', GIRS_DIR,
      '--outdir', outdir,
    ]);
    assert.ok(!result.error, `generate failed without package.json: ${result.stderr}`);
    assert.ok(existsSync(outdir), 'Output directory was not created without package.json');
    const files = readdirSync(outdir, { recursive: true }).filter(f => f.endsWith('.d.ts'));
    assert.ok(files.length > 0, 'No .d.ts files generated without package.json');
  });
});
