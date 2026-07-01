// E2E test for install.js — the GJS-native installer/updater.
//
// Spins up an in-process HTTP server that mocks the two npm-registry
// endpoints install.js talks to (the packument and the tarball URL it
// resolves to) and points install.js at it via the
// TS_FOR_GIR_INSTALL_REGISTRY / TS_FOR_GIR_INSTALL_DIR /
// TS_FOR_GIR_INSTALL_DATA_DIR env-var test hooks. No external network
// access, no real npm.
//
// Validates: fresh install of the full package (binary + dist-templates),
// idempotent re-run ("Already up to date"), --force reinstall, version
// detection round-trip via the launcher → bin chain, the `dist-templates/`
// directory ends up next to the bin (the whole point of moving from the
// single-asset GitHub-release flow), HTTP errors surface as non-zero exits,
// and --help works.

import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { createServer } from "node:http";
import {
  mkdtempSync,
  rmSync,
  existsSync,
  statSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  chmodSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MONOREPO_ROOT = join(__dirname, "..", "..", "..");
const INSTALL_JS = join(MONOREPO_ROOT, "install.js");

const PACKAGE = "@ts-for-gir/cli";
// install.js encodes the package name except for the leading `@` (npm
// registry convention). Mirror that exactly so URL routing matches.
const ENCODED_PACKAGE = `@${encodeURIComponent(PACKAGE.slice(1))}`;
const FAKE_BIN_REL = "bin/ts-for-gir-gjs";

// A fake "ts-for-gir-gjs" binary we ship inside the tarball. install.js
// chmods it +x and the launcher exec's it; a tiny POSIX shell script is
// enough to satisfy the version-detection round-trip.
function fakeBinary(version) {
  return `#!/bin/sh
case "$1" in
  --version) echo "${version}" ;;
  *) echo "fake ts-for-gir binary v${version}"; exit 0 ;;
esac
`;
}

/**
 * Build a real .tgz tarball matching npm's published-package layout
 * (`package/<files>` prefix). Returns the bytes for the HTTP server to
 * serve verbatim.
 */
function buildTarball(version, opts = {}) {
  const stage = mkdtempSync(join(tmpdir(), "ts-for-gir-pack-"));
  try {
    const root = join(stage, "package");
    mkdirSync(root, { recursive: true });

    // Minimal package.json that drives:
    //  - install.js's getInstalledVersion() (reads .version)
    //  - install.js's pickLauncherTarget() (reads gjsify.bin.ts-for-gir)
    const pkg = {
      name: PACKAGE,
      version,
      bin: { "ts-for-gir": "bin/ts-for-gir-node" },
      gjsify: { bin: { "ts-for-gir": FAKE_BIN_REL } },
      ...opts.extraPkg,
    };
    writeFileSync(join(root, "package.json"), JSON.stringify(pkg, null, 2));

    mkdirSync(join(root, "bin"), { recursive: true });
    writeFileSync(join(root, FAKE_BIN_REL), fakeBinary(version));
    // Tar preserves modes; mark the bin executable in the source so
    // install.js's chmod is a no-op rather than a load-bearing step.
    chmodSync(join(root, FAKE_BIN_REL), 0o755);

    // dist-templates/ — the whole reason this rewrite exists. If the
    // install path can't carry these alongside the bin, downstream
    // commands like `ts-for-gir create` fail with a confusing
    // path-not-found. The tests assert the dir survives the round trip.
    mkdirSync(join(root, "dist-templates", "types-locally"), { recursive: true });
    writeFileSync(
      join(root, "dist-templates", "types-locally", "package.json"),
      JSON.stringify({ name: "tpl-marker", version: "0.0.0" }) + "\n",
    );
    writeFileSync(join(root, "dist-templates", "types-locally", "README.md"), "marker\n");

    // Build with `tar -czf` so we exercise the same toolchain install.js
    // will use to extract — both ends agree on header dialect.
    const tgzPath = join(stage, "package.tgz");
    execFileSync("tar", ["-czf", tgzPath, "-C", stage, "package"], { stdio: "pipe" });
    return readFileSync(tgzPath);
  } finally {
    rmSync(stage, { recursive: true, force: true });
  }
}

function runGjs({ env, args = [] } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn("gjs", ["-m", INSTALL_JS, ...args], {
      env: { ...process.env, ...env },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (c) => {
      stdout += c;
    });
    child.stderr.on("data", (c) => {
      stderr += c;
    });
    const killTimer = setTimeout(() => {
      try {
        child.kill("SIGKILL");
      } catch {}
    }, 60_000);
    child.on("close", (code) => {
      clearTimeout(killTimer);
      resolve({ exitCode: code, stdout, stderr });
    });
    child.on("error", (e) => {
      clearTimeout(killTimer);
      reject(e);
    });
  });
}

describe("install.js E2E", { timeout: 5 * 60 * 1000 }, () => {
  let server;
  let registryBase;
  let tmpRoot;
  let installDir;
  let dataDir;
  let launcherPath;
  // Mutable per-test: lets a single `it()` swap in a different release
  // without spinning up a new server.
  let mockState;

  before(async () => {
    // Same precondition pattern the cli-gjs e2e suite uses: hard-fail with
    // an actionable message rather than silently passing on Node-only
    // sandboxes.
    try {
      execFileSync("gjs", ["--version"], { stdio: "pipe" });
    } catch {
      throw new Error("gjs is not installed; install with: sudo apt-get install gjs");
    }

    if (!existsSync(INSTALL_JS)) {
      throw new Error(`install.js not found at ${INSTALL_JS}`);
    }

    tmpRoot = mkdtempSync(join(tmpdir(), "ts-for-gir-install-e2e-"));
    installDir = join(tmpRoot, "bin");
    dataDir = join(tmpRoot, "share", "ts-for-gir");
    launcherPath = join(installDir, "ts-for-gir");

    mockState = {
      version: "1.0.0-test",
      tarball: buildTarball("1.0.0-test"),
      // Per-test overrides for failure-mode assertions.
      packumentStatus: 200,
      tarballStatus: 200,
    };

    server = createServer((req, res) => {
      try {
        const url = req.url ?? "";
        if (url === `/${ENCODED_PACKAGE}`) {
          if (mockState.packumentStatus !== 200) {
            res.writeHead(mockState.packumentStatus).end("mock failure");
            return;
          }
          const port = server.address().port;
          const body = {
            name: PACKAGE,
            "dist-tags": { latest: mockState.version },
            versions: {
              [mockState.version]: {
                name: PACKAGE,
                version: mockState.version,
                dist: {
                  tarball: `http://127.0.0.1:${port}/tarball/cli-${mockState.version}.tgz`,
                },
              },
            },
          };
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify(body));
          return;
        }
        if (url.startsWith("/tarball/")) {
          if (mockState.tarballStatus !== 200) {
            res.writeHead(mockState.tarballStatus).end("mock failure");
            return;
          }
          res.writeHead(200, { "content-type": "application/octet-stream" });
          res.end(mockState.tarball);
          return;
        }
        res.writeHead(404).end("not found");
      } catch (e) {
        res.writeHead(500).end(String(e));
      }
    });
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    registryBase = `http://127.0.0.1:${server.address().port}`;
  });

  after(() => {
    if (server) server.close();
    if (tmpRoot && !process.env.TS_FOR_GIR_E2E_KEEP_TEMP) {
      rmSync(tmpRoot, { recursive: true, force: true });
    }
  });

  function envVars() {
    return {
      TS_FOR_GIR_INSTALL_REGISTRY: registryBase,
      TS_FOR_GIR_INSTALL_DIR: installDir,
      TS_FOR_GIR_INSTALL_DATA_DIR: dataDir,
    };
  }

  it("fresh install fetches the npm tarball, extracts the package tree, writes a launcher", async () => {
    // Start from a clean slate: prior tests in the same suite may have
    // installed into the same dirs.
    if (existsSync(launcherPath)) rmSync(launcherPath);
    if (existsSync(dataDir)) rmSync(dataDir, { recursive: true });

    const result = await runGjs({ env: envVars() });
    assert.equal(result.exitCode, 0, `install failed: ${result.stderr}`);
    assert.match(result.stdout, /Installing @ts-for-gir\/cli@1\.0\.0-test/);
    assert.match(result.stdout, /Installed @ts-for-gir\/cli@1\.0\.0-test/);

    // Package tree under DATA_DIR — proves --strip-components=1 stripped
    // the `package/` prefix and the whole tarball landed.
    assert.ok(existsSync(join(dataDir, "package.json")), "package.json present");
    const installedPkg = JSON.parse(readFileSync(join(dataDir, "package.json"), "utf8"));
    assert.equal(installedPkg.version, "1.0.0-test");

    assert.ok(existsSync(join(dataDir, FAKE_BIN_REL)), `expected ${FAKE_BIN_REL} under ${dataDir}`);
    // Bin is executable (preserved from tar's mode bits).
    const binMode = statSync(join(dataDir, FAKE_BIN_REL)).mode & 0o777;
    assert.equal(binMode, 0o755, `expected bin mode 0755, got 0${binMode.toString(8)}`);

    // dist-templates/ survived the round trip — the whole point of this
    // rewrite. Without these next to the bin, `ts-for-gir create` would
    // fail with the confusing path-not-found error from rc.13 and earlier.
    assert.ok(
      existsSync(join(dataDir, "dist-templates", "types-locally", "package.json")),
      "dist-templates/ shipped alongside the bin",
    );

    // Launcher: a tiny POSIX sh script, exec's the absolute bin path.
    assert.ok(existsSync(launcherPath), `expected launcher at ${launcherPath}`);
    const launcherMode = statSync(launcherPath).mode & 0o777;
    assert.equal(
      launcherMode,
      0o755,
      `expected launcher mode 0755, got 0${launcherMode.toString(8)}`,
    );
    const launcherText = readFileSync(launcherPath, "utf8");
    assert.match(launcherText, /^#!\/bin\/sh\n/);
    assert.match(launcherText, /\bexec /);
    assert.ok(launcherText.includes(join(dataDir, FAKE_BIN_REL)));
  });

  it("the launcher round-trips: invoking it exec's the bin and reports the version", async () => {
    // Validates the install path actually produces a working CLI:
    // PATH + launcher + bin chain end-to-end. Regression guard against
    // a cosmetic-only install (files written, but launcher broken).
    const stdout = execFileSync(launcherPath, ["--version"], { encoding: "utf8" });
    assert.equal(stdout.trim(), "1.0.0-test");
  });

  it("idempotent re-run reports Already up to date and skips the download", async () => {
    const result = await runGjs({ env: envVars() });
    assert.equal(result.exitCode, 0, `re-run failed: ${result.stderr}`);
    assert.match(result.stdout, /Already up to date \(v1\.0\.0-test\)/);
    // Must not redownload — "Downloading ..." only fires on actual fetches.
    assert.doesNotMatch(result.stdout, /Downloading/);
  });

  it("--force reinstalls the same version", async () => {
    const result = await runGjs({ args: ["--force"], env: envVars() });
    assert.equal(result.exitCode, 0, `--force failed: ${result.stderr}`);
    assert.match(result.stdout, /Reinstalling v1\.0\.0-test \(--force\)/);
    assert.match(result.stdout, /Downloading/);
  });

  it("upgrades when the registry advertises a newer version", async () => {
    mockState.version = "1.0.1-test";
    mockState.tarball = buildTarball("1.0.1-test");
    try {
      const result = await runGjs({ env: envVars() });
      assert.equal(result.exitCode, 0, `upgrade failed: ${result.stderr}`);
      assert.match(result.stdout, /Updating from v1\.0\.0-test to v1\.0\.1-test/);

      const installedPkg = JSON.parse(readFileSync(join(dataDir, "package.json"), "utf8"));
      assert.equal(installedPkg.version, "1.0.1-test");

      const stdout = execFileSync(launcherPath, ["--version"], { encoding: "utf8" });
      assert.equal(stdout.trim(), "1.0.1-test");
    } finally {
      mockState.version = "1.0.0-test";
      mockState.tarball = buildTarball("1.0.0-test");
    }
  });

  it("exits non-zero when the registry returns a 5xx for the packument", async () => {
    mockState.packumentStatus = 503;
    try {
      const result = await runGjs({ env: envVars() });
      assert.notEqual(result.exitCode, 0, "should fail on 5xx packument");
      const combined = result.stdout + result.stderr;
      assert.match(combined, /Failed to fetch packument/);
    } finally {
      mockState.packumentStatus = 200;
    }
  });

  it("--help prints usage and exits 0", async () => {
    const result = await runGjs({ args: ["--help"], env: envVars() });
    assert.equal(result.exitCode, 0, `--help failed: ${result.stderr}`);
    assert.match(result.stdout, /Usage: gjs -m install\.js/);
    assert.match(result.stdout, /--force/);
    assert.match(result.stdout, /--help/);
    assert.match(result.stdout, /--tag=/);
  });
});
