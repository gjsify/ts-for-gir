// E2E tests for the `ts-for-gir create` command.
// Scaffolds each template into a temp dir, rewires deps to local tarballs,
// runs npm install, and verifies the per-template build/check workflow.

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';

import {
  buildOverrides,
  cleanupTestEnvironment,
  createTestEnvironment,
  setupProject,
} from '../helpers.mjs';

// Minimal @girs/* set covering the deps in the types-npm and types-workspace
// templates plus their transitive workspace:^ chain.
const GIRS_TO_PACK = [
  '@girs/adw-1',
  '@girs/cairo-1.0',
  '@girs/freetype2-2.0',
  '@girs/gdk-4.0',
  '@girs/gdkpixbuf-2.0',
  '@girs/gio-2.0',
  '@girs/gjs',
  '@girs/glib-2.0',
  '@girs/gmodule-2.0',
  '@girs/gobject-2.0',
  '@girs/graphene-1.0',
  '@girs/gsk-4.0',
  '@girs/gtk-4.0',
  '@girs/harfbuzz-0.0',
  '@girs/pango-1.0',
  '@girs/pangocairo-1.0',
];

const TEMPLATES = ['types-locally', 'types-npm', 'types-workspace'];

function rewriteWorkspaceProtocolToTarballs(pkgPath, tarballMap, tarballsDir) {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  for (const field of ['dependencies', 'devDependencies']) {
    if (!pkg[field]) continue;
    for (const name of Object.keys(pkg[field])) {
      if (tarballMap[name]) {
        pkg[field][name] = `file:${join(tarballsDir, tarballMap[name])}`;
      }
    }
  }
  pkg.overrides = buildOverrides(tarballsDir, tarballMap);
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

function npmInstall(cwd) {
  execFileSync('npm', ['install', '--no-audit', '--no-fund'], {
    cwd,
    stdio: 'pipe',
    timeout: 5 * 60 * 1000,
  });
}

function npmRun(cwd, script) {
  return spawnSync('npm', ['run', '--silent', script], {
    cwd,
    encoding: 'utf8',
    timeout: 5 * 60 * 1000,
  });
}

describe('ts-for-gir create E2E', { timeout: 20 * 60 * 1000 }, () => {
  let tmpDir;
  let tarballsDir;
  let tarballMap;
  let hostProjectDir;
  let cliBin;

  before(() => {
    const env = createTestEnvironment('ts-for-gir-create-e2e-', {
      includeGirs: GIRS_TO_PACK,
    });
    tmpDir = env.tmpDir;
    tarballsDir = env.tarballsDir;
    tarballMap = env.tarballMap;

    // Host project that has the CLI installed; we run `ts-for-gir create` from here.
    hostProjectDir = join(tmpDir, 'host');
    mkdirSync(hostProjectDir, { recursive: true });
    setupProject(
      hostProjectDir,
      {
        name: 'ts-for-gir-create-host',
        version: '0.0.1',
        type: 'module',
        private: true,
        devDependencies: {
          '@ts-for-gir/cli': '^4.0.0',
        },
      },
      tarballsDir,
      tarballMap,
    );

    cliBin = join(hostProjectDir, 'node_modules', '@ts-for-gir', 'cli', 'bin', 'ts-for-gir');
    assert.ok(existsSync(cliBin), `CLI binary missing at ${cliBin}`);

    // Sanity: `dist-templates/` should ship with the packed CLI tarball.
    const distTemplatesDir = join(hostProjectDir, 'node_modules', '@ts-for-gir', 'cli', 'dist-templates');
    assert.ok(existsSync(distTemplatesDir), `dist-templates/ missing in installed CLI at ${distTemplatesDir}`);
    for (const t of TEMPLATES) {
      assert.ok(existsSync(join(distTemplatesDir, t)), `template "${t}" missing in dist-templates/`);
    }
  });

  after(() => {
    cleanupTestEnvironment(tmpDir);
  });

  for (const template of TEMPLATES) {
    it(`scaffolds ${template} with resolved versions`, () => {
      const projectName = `app-${template}`;
      const scaffoldRoot = join(tmpDir, 'scaffolds', template);
      mkdirSync(scaffoldRoot, { recursive: true });

      // Run from within scaffoldRoot so the project is created at scaffoldRoot/projectName.
      const result = spawnSync(
        'node',
        [cliBin, 'create', projectName, '--template', template, '--no-install'],
        {
          cwd: scaffoldRoot,
          encoding: 'utf8',
          timeout: 60 * 1000,
        },
      );
      assert.equal(result.status, 0, `create failed: ${result.stderr}\n${result.stdout}`);

      const targetDir = join(scaffoldRoot, projectName);
      const rootPkg = JSON.parse(readFileSync(join(targetDir, 'package.json'), 'utf8'));
      assert.equal(rootPkg.name, projectName, 'project name not substituted in root package.json');

      // Root package.json must NOT contain unresolved workspace:^ for ts-for-gir/girs deps.
      const rootText = readFileSync(join(targetDir, 'package.json'), 'utf8');
      assert.ok(
        !/"@(?:ts-for-gir|girs|gi\.ts)\/[^"]+"\s*:\s*"workspace:/.test(rootText),
        `Root package.json has unresolved workspace:^ specifier:\n${rootText}`,
      );

      // For types-workspace, the sub-package uses plain "*" so npm, yarn and pnpm
      // all resolve to the local workspace (npm does not understand workspace:^).
      if (template === 'types-workspace') {
        const subPkgPath = join(targetDir, 'packages', 'app', 'package.json');
        assert.ok(existsSync(subPkgPath), 'types-workspace sub-package missing');
        const subPkg = JSON.parse(readFileSync(subPkgPath, 'utf8'));
        assert.equal(subPkg.name, `@${projectName}/app`);
        for (const [name, spec] of Object.entries(subPkg.dependencies || {})) {
          assert.ok(
            !/^workspace:/.test(spec),
            `sub-package dep "${name}": "${spec}" must not use workspace: protocol (npm incompatible)`,
          );
        }
      }
    });
  }

  it('types-locally: install, generate, check, build', () => {
    const projectDir = join(tmpDir, 'scaffolds', 'types-locally', 'app-types-locally');
    rewriteWorkspaceProtocolToTarballs(join(projectDir, 'package.json'), tarballMap, tarballsDir);
    npmInstall(projectDir);

    const generate = npmRun(projectDir, 'generate');
    assert.equal(generate.status, 0, `generate failed: ${generate.stderr}\n${generate.stdout}`);
    assert.ok(existsSync(join(projectDir, '@types')), '@types/ not generated');
    const dts = readdirSync(join(projectDir, '@types'), { recursive: true })
      .filter((f) => typeof f === 'string' && f.endsWith('.d.ts'));
    assert.ok(dts.length > 0, 'no .d.ts files generated');

    const check = npmRun(projectDir, 'check:types');
    assert.equal(check.status, 0, `check:types failed: ${check.stderr}\n${check.stdout}`);

    const build = npmRun(projectDir, 'build');
    assert.equal(build.status, 0, `build failed: ${build.stderr}\n${build.stdout}`);
    assert.ok(existsSync(join(projectDir, 'dist', 'main.js')), 'dist/main.js missing');
  });

  it('types-npm: install, check, build', () => {
    const projectDir = join(tmpDir, 'scaffolds', 'types-npm', 'app-types-npm');
    rewriteWorkspaceProtocolToTarballs(join(projectDir, 'package.json'), tarballMap, tarballsDir);
    npmInstall(projectDir);

    const check = npmRun(projectDir, 'check');
    assert.equal(check.status, 0, `check failed: ${check.stderr}\n${check.stdout}`);

    const build = npmRun(projectDir, 'build');
    assert.equal(build.status, 0, `build failed: ${build.stderr}\n${build.stdout}`);
    assert.ok(existsSync(join(projectDir, 'dist', 'main.js')), 'dist/main.js missing');
  });

  it('types-workspace: install, generate types, re-install, check sub-package', () => {
    // The template's .ts-for-girrc.js sets depVersionFormat: "caret" so the
    // generator writes ^<version> instead of workspace:^ for transitive @girs
    // refs. That lets npm either (a) resolve to a local workspace package or
    // (b) fall back to the NPM registry for transitive deps whose modules
    // aren't in the user's `modules` set.
    const projectDir = join(tmpDir, 'scaffolds', 'types-workspace', 'app-types-workspace');
    rewriteWorkspaceProtocolToTarballs(join(projectDir, 'package.json'), tarballMap, tarballsDir);
    npmInstall(projectDir);

    const buildTypes = npmRun(projectDir, 'build:types');
    assert.equal(buildTypes.status, 0, `build:types failed: ${buildTypes.stderr}\n${buildTypes.stdout}`);
    assert.ok(existsSync(join(projectDir, '@girs')), '@girs/ workspace dir not generated');
    const girsEntries = readdirSync(join(projectDir, '@girs'));
    assert.ok(girsEntries.length > 0, '@girs/ has no generated packages');
    for (const expected of ['adw-1', 'gtk-4.0']) {
      const pkgDir = join(projectDir, '@girs', expected);
      assert.ok(existsSync(pkgDir), `expected @girs/${expected} not generated`);
      assert.ok(existsSync(join(pkgDir, 'package.json')), `@girs/${expected}/package.json missing`);
    }

    // Verify caret format landed in a generated package.json (spot-check).
    const adwPkg = JSON.parse(readFileSync(join(projectDir, '@girs', 'adw-1', 'package.json'), 'utf8'));
    const adwDeps = adwPkg.dependencies || {};
    for (const [name, spec] of Object.entries(adwDeps)) {
      assert.ok(
        !/^workspace:/.test(spec),
        `generated @girs/adw-1 dep "${name}" is "${spec}" — expected caret or registry spec, not workspace:`,
      );
    }

    // Second install: npm now discovers the freshly generated @girs/* as
    // workspaces. Strip @girs/* tarball overrides first — the local workspace
    // packages are now the source of truth and npm refuses to override direct
    // workspace deps.
    const rootPkgPath = join(projectDir, 'package.json');
    const rootPkg = JSON.parse(readFileSync(rootPkgPath, 'utf8'));
    if (rootPkg.overrides) {
      for (const name of Object.keys(rootPkg.overrides)) {
        if (name.startsWith('@girs/')) delete rootPkg.overrides[name];
      }
    }
    writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2));
    npmInstall(projectDir);

    const check = npmRun(projectDir, 'check');
    assert.equal(check.status, 0, `workspace check failed: ${check.stderr}\n${check.stdout}`);
  });

  it('errors on non-TTY without --template', () => {
    const result = spawnSync('node', [cliBin, 'create', 'bad-app', '--no-install'], {
      cwd: tmpDir,
      encoding: 'utf8',
      timeout: 30 * 1000,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    assert.notEqual(result.status, 0, 'expected non-zero exit when --template missing on non-TTY');
    assert.match(result.stderr + result.stdout, /template/i);
  });

  it('refuses non-empty target dir without --force', () => {
    const conflictRoot = join(tmpDir, 'conflict-root');
    mkdirSync(conflictRoot, { recursive: true });
    const targetName = 'occupied';
    mkdirSync(join(conflictRoot, targetName), { recursive: true });
    writeFileSync(join(conflictRoot, targetName, 'pre-existing.txt'), 'hello');

    const result = spawnSync(
      'node',
      [cliBin, 'create', targetName, '--template', 'types-npm', '--no-install'],
      {
        cwd: conflictRoot,
        encoding: 'utf8',
        timeout: 30 * 1000,
      },
    );
    assert.notEqual(result.status, 0, 'expected non-zero exit on non-empty target');
    assert.match(result.stderr + result.stdout, /not empty|--force/i);
  });
});
