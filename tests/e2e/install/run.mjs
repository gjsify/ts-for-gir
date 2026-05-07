// E2E test for install.js — the GJS-native installer/updater.
//
// Spins up an in-process HTTP server that mocks the two GitHub endpoints
// install.js talks to (`/repos/.../releases?per_page=20` and the asset
// browser_download_url) and points install.js at it via the
// TS_FOR_GIR_INSTALL_GITHUB_API and TS_FOR_GIR_INSTALL_DIR env-var test
// hooks. No external network access, no real GitHub.
//
// Validates: fresh install, idempotent re-run ("Already up to date"),
// --force reinstall, atomic install (binary chmod +x at the destination),
// the version-detection round-trip via `<binary> --version`, and that an
// HTTP error from the mock surfaces as a non-zero exit.

import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdtempSync, rmSync, existsSync, statSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MONOREPO_ROOT = join(__dirname, "..", "..", "..");
const INSTALL_JS = join(MONOREPO_ROOT, "install.js");

// A fake "ts-for-gir-gjs" binary we serve as the release asset. install.js
// chmods it +x and runs `--version` to detect what's installed; a tiny POSIX
// shell script is enough to satisfy that round-trip.
function fakeBinary(version) {
	return `#!/bin/sh
case "$1" in
  --version) echo "${version}" ;;
  *) echo "fake ts-for-gir binary v${version}"; exit 0 ;;
esac
`;
}

function gjsAvailable() {
	try {
		const { execFileSync } = require("node:child_process");
		execFileSync("gjs", ["--version"], { stdio: "pipe" });
		return true;
	} catch {
		return false;
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
	let apiBase;
	let installDir;
	let installPath;
	// Mutable per-test: lets a single `it()` swap in a different release/asset
	// without having to spin up a new server.
	let mockState;

	before(async () => {
		// Skip cleanly when gjs is not available — same pattern the cli-gjs
		// e2e suite uses, so this test is a soft-fail on Node-only sandboxes.
		const { execFileSync } = await import("node:child_process");
		try {
			execFileSync("gjs", ["--version"], { stdio: "pipe" });
		} catch {
			throw new Error("gjs is not installed; install with: sudo apt-get install gjs");
		}

		if (!existsSync(INSTALL_JS)) {
			throw new Error(`install.js not found at ${INSTALL_JS}`);
		}

		const tmpRoot = mkdtempSync(join(tmpdir(), "ts-for-gir-install-e2e-"));
		installDir = join(tmpRoot, "bin");
		installPath = join(installDir, "ts-for-gir");

		mockState = {
			version: "1.0.0-test",
			binaryContent: fakeBinary("1.0.0-test"),
			// Per-test overrides for failure-mode assertions.
			releasesStatus: 200,
			assetStatus: 200,
		};

		server = createServer((req, res) => {
			try {
				const url = req.url ?? "";
				if (url.startsWith("/repos/gjsify/ts-for-gir/releases")) {
					if (mockState.releasesStatus !== 200) {
						res.writeHead(mockState.releasesStatus).end("mock failure");
						return;
					}
					const port = server.address().port;
					const body = [
						{
							tag_name: `v${mockState.version}`,
							draft: false,
							assets: [
								{
									name: "ts-for-gir-gjs",
									browser_download_url: `http://127.0.0.1:${port}/asset/ts-for-gir-gjs`,
								},
							],
						},
					];
					res.writeHead(200, { "content-type": "application/json" });
					res.end(JSON.stringify(body));
					return;
				}
				if (url === "/asset/ts-for-gir-gjs") {
					if (mockState.assetStatus !== 200) {
						res.writeHead(mockState.assetStatus).end("mock failure");
						return;
					}
					res.writeHead(200, { "content-type": "application/octet-stream" });
					res.end(mockState.binaryContent);
					return;
				}
				res.writeHead(404).end("not found");
			} catch (e) {
				res.writeHead(500).end(String(e));
			}
		});
		await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
		apiBase = `http://127.0.0.1:${server.address().port}`;
	});

	after(() => {
		if (server) server.close();
		if (installDir && !process.env.TS_FOR_GIR_E2E_KEEP_TEMP) {
			rmSync(dirname(installDir), { recursive: true, force: true });
		}
	});

	it("fresh install downloads and installs the binary", async () => {
		// Start from a clean slate: prior tests in the same suite may have
		// installed a binary into installDir.
		if (existsSync(installPath)) rmSync(installPath);

		const result = await runGjs({
			env: {
				TS_FOR_GIR_INSTALL_GITHUB_API: apiBase,
				TS_FOR_GIR_INSTALL_DIR: installDir,
			},
		});
		assert.equal(result.exitCode, 0, `install failed: ${result.stderr}`);
		assert.match(result.stdout, /Installing ts-for-gir v1\.0\.0-test/);
		assert.match(result.stdout, /Installed to/);
		assert.ok(existsSync(installPath), `expected ${installPath} to exist`);
		// Atomic install path leaves no .tmp dropping behind.
		assert.ok(!existsSync(`${installPath}.tmp`), "no leftover .tmp file");
		// Binary content must match what the mock served — proves the asset
		// URL was actually followed (regression guard against silent-skip
		// bugs like "Already up to date" firing on a stale cached path).
		const installed = readFileSync(installPath, "utf8");
		assert.equal(installed, mockState.binaryContent);
		// Executable bit on owner — install.js promises 0755 atomic install.
		const mode = statSync(installPath).mode & 0o777;
		assert.equal(mode, 0o755, `expected mode 0755 but got 0${mode.toString(8)}`);
	});

	it("idempotent re-run reports Already up to date", async () => {
		const result = await runGjs({
			env: {
				TS_FOR_GIR_INSTALL_GITHUB_API: apiBase,
				TS_FOR_GIR_INSTALL_DIR: installDir,
			},
		});
		assert.equal(result.exitCode, 0, `re-run failed: ${result.stderr}`);
		assert.match(result.stdout, /Already up to date \(v1\.0\.0-test\)/);
		// Must not redownload — the "Downloading ..." line is only emitted
		// when install.js actually fetches the asset.
		assert.doesNotMatch(result.stdout, /Downloading/);
	});

	it("--force reinstalls the same version", async () => {
		const result = await runGjs({
			args: ["--force"],
			env: {
				TS_FOR_GIR_INSTALL_GITHUB_API: apiBase,
				TS_FOR_GIR_INSTALL_DIR: installDir,
			},
		});
		assert.equal(result.exitCode, 0, `--force failed: ${result.stderr}`);
		assert.match(result.stdout, /Reinstalling v1\.0\.0-test \(--force\)/);
		assert.match(result.stdout, /Downloading/);
	});

	it("upgrades when the mock advertises a newer version", async () => {
		mockState.version = "1.0.1-test";
		mockState.binaryContent = fakeBinary("1.0.1-test");
		try {
			const result = await runGjs({
				env: {
					TS_FOR_GIR_INSTALL_GITHUB_API: apiBase,
					TS_FOR_GIR_INSTALL_DIR: installDir,
				},
			});
			assert.equal(result.exitCode, 0, `upgrade failed: ${result.stderr}`);
			assert.match(result.stdout, /Updating from v1\.0\.0-test to v1\.0\.1-test/);
			const installed = readFileSync(installPath, "utf8");
			assert.equal(installed, mockState.binaryContent);
		} finally {
			mockState.version = "1.0.0-test";
			mockState.binaryContent = fakeBinary("1.0.0-test");
		}
	});

	it("exits non-zero when the GitHub API returns a 5xx", async () => {
		mockState.releasesStatus = 503;
		try {
			const result = await runGjs({
				env: {
					TS_FOR_GIR_INSTALL_GITHUB_API: apiBase,
					TS_FOR_GIR_INSTALL_DIR: installDir,
				},
			});
			assert.notEqual(result.exitCode, 0, "should fail on 5xx");
			const combined = result.stdout + result.stderr;
			assert.match(combined, /Failed to fetch release info/);
		} finally {
			mockState.releasesStatus = 200;
		}
	});

	it("--help prints usage and exits 0", async () => {
		const result = await runGjs({
			args: ["--help"],
			env: {
				TS_FOR_GIR_INSTALL_GITHUB_API: apiBase,
				TS_FOR_GIR_INSTALL_DIR: installDir,
			},
		});
		assert.equal(result.exitCode, 0, `--help failed: ${result.stderr}`);
		assert.match(result.stdout, /Usage: gjs -m install\.js/);
		assert.match(result.stdout, /--force/);
		assert.match(result.stdout, /--help/);
	});
});
