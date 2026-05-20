#!/usr/bin/env -S gjs -m
/**
 * ts-for-gir installer / updater for GJS
 *
 * Usage:
 *   gjs -m install.js               # install or update
 *   gjs -m install.js --force       # reinstall even if already up to date
 *   gjs -m install.js --tag=next    # install a specific dist-tag (default: latest)
 *   # or, if the shebang is supported:
 *   ./install.js
 *
 * Fetches `@ts-for-gir/cli` from the npm registry (full package tarball, not
 * just the GJS binary), extracts it to ~/.local/share/ts-for-gir/, and writes
 * a small POSIX `sh` launcher at ~/.local/bin/ts-for-gir that exec's the GJS
 * bundle inside the install dir.
 *
 * Why the npm tarball + launcher (vs. the previous single-binary download
 * from a GitHub release): commands like `ts-for-gir create` rely on assets
 * shipped *next to* the bin (e.g. dist-templates/), which the old
 * one-asset-only path could not deliver. Going through the published npm
 * package gives us the whole package tree — same artefact npm/gjsify-install-g
 * use — so package-relative `__dirname/..` resolution Just Works.
 *
 * Test hooks (set in tests/e2e/install/run.mjs):
 *   TS_FOR_GIR_INSTALL_REGISTRY  override the npm registry origin
 *   TS_FOR_GIR_INSTALL_DIR       override the launcher dir (~/.local/bin)
 *   TS_FOR_GIR_INSTALL_DATA_DIR  override the package install dir
 *                                (XDG_DATA_HOME/ts-for-gir)
 */

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Soup from "gi://Soup?version=3.0";
import system, { exit } from "system";

// GJS does not auto-promisify libsoup methods; wire them up explicitly so
// `await session.send_and_read_async(...)` uses the standard 3-arg signature.
Gio._promisify(Soup.Session.prototype, "send_and_read_async");
Gio._promisify(Gio.Subprocess.prototype, "wait_check_async");

const PACKAGE = "@ts-for-gir/cli";
const DEFAULT_REGISTRY = "https://registry.npmjs.org";
const DEFAULT_BIN_NAME = "ts-for-gir";

const REGISTRY = (GLib.getenv("TS_FOR_GIR_INSTALL_REGISTRY") || DEFAULT_REGISTRY).replace(/\/+$/, "");
// `~/.local/bin` style — where the launcher script lives, expected to be on $PATH.
const BIN_DIR =
	GLib.getenv("TS_FOR_GIR_INSTALL_DIR") ||
	GLib.build_filenamev([GLib.get_home_dir(), ".local", "bin"]);
// `~/.local/share/ts-for-gir/` — the extracted npm package tree (bin/, dist-templates/, …).
const DATA_DIR =
	GLib.getenv("TS_FOR_GIR_INSTALL_DATA_DIR") ||
	GLib.build_filenamev([
		GLib.getenv("XDG_DATA_HOME") || GLib.build_filenamev([GLib.get_home_dir(), ".local", "share"]),
		"ts-for-gir",
	]);
const LAUNCHER_PATH = GLib.build_filenamev([BIN_DIR, DEFAULT_BIN_NAME]);

function info(msg) {
	print(`[ts-for-gir] ${msg}`);
}

function error(msg) {
	printerr(`[ts-for-gir] ERROR: ${msg}`);
}

function readJsonFile(path) {
	const file = Gio.File.new_for_path(path);
	if (!file.query_exists(null)) return null;
	try {
		const [, bytes] = file.load_contents(null);
		return JSON.parse(new TextDecoder().decode(bytes));
	} catch {
		return null;
	}
}

function getInstalledVersion() {
	// Prefer the package.json — single-source-of-truth that doesn't require
	// spawning the bundle (which can be slow and may itself be broken on a
	// half-finished install).
	const pkg = readJsonFile(GLib.build_filenamev([DATA_DIR, "package.json"]));
	return pkg?.version ?? null;
}

function ensureDir(dir) {
	const file = Gio.File.new_for_path(dir);
	if (!file.query_exists(null)) {
		file.make_directory_with_parents(null);
	}
}

function checkPath() {
	const pathEnv = GLib.getenv("PATH") ?? "";
	if (!pathEnv.split(":").includes(BIN_DIR)) {
		info("");
		info(`Note: ${BIN_DIR} is not in your PATH.`);
		info("Add the following line to your ~/.bashrc or ~/.profile:");
		info(`  export PATH="${BIN_DIR}:$PATH"`);
	}
}

async function fetchJson(session, url, accept = "application/json") {
	const message = Soup.Message.new("GET", url);
	message.request_headers.append("Accept", accept);
	message.request_headers.append("User-Agent", "ts-for-gir-installer/2.0");
	const bytes = await session.send_and_read_async(message, GLib.PRIORITY_DEFAULT, null);
	const status = message.get_status();
	if (status !== Soup.Status.OK) {
		throw new Error(`HTTP ${status} from ${url}`);
	}
	return JSON.parse(new TextDecoder().decode(bytes.get_data()));
}

async function fetchBytes(session, url) {
	const message = Soup.Message.new("GET", url);
	message.request_headers.append("User-Agent", "ts-for-gir-installer/2.0");
	const bytes = await session.send_and_read_async(message, GLib.PRIORITY_DEFAULT, null);
	const status = message.get_status();
	if (status !== Soup.Status.OK) {
		throw new Error(`HTTP ${status} from ${url}`);
	}
	return bytes.get_data();
}

/**
 * Pick the version that satisfies the requested dist-tag. We deliberately
 * don't implement full semver-range resolution here — `install.js` is meant
 * to be a thin bootstrapper, and any user who needs sharper version control
 * already has a real package manager.
 */
function pickVersion(packument, tag) {
	const distTags = packument["dist-tags"] || {};
	const version = distTags[tag];
	if (!version) {
		const known = Object.keys(distTags).join(", ");
		throw new Error(`Unknown dist-tag '${tag}' on ${PACKAGE}. Known tags: ${known || "(none)"}`);
	}
	const meta = packument.versions?.[version];
	if (!meta?.dist?.tarball) {
		throw new Error(`Packument lists version ${version} but has no dist.tarball entry`);
	}
	return { version, tarballUrl: meta.dist.tarball };
}

async function extractTarball(tarballPath, destDir) {
	// Layout note: npm tarballs always nest contents under a leading
	// `package/` directory. `--strip-components=1` collapses that prefix so
	// `package/bin/x` lands at `<destDir>/bin/x`.
	//
	// Why subprocess instead of a pure-JS tar reader: GJS has no built-in
	// tarball parser, every Linux distro ships GNU/BSD tar with `-z`, and the
	// subprocess hop is invisibly cheap next to a network round-trip. This
	// keeps install.js short and inspectable.
	const proc = Gio.Subprocess.new(
		[
			"tar",
			"-xzf",
			tarballPath,
			"-C",
			destDir,
			"--strip-components=1",
		],
		Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE,
	);
	await proc.wait_check_async(null);
}

async function downloadTarballToTmp(session, url) {
	const bytes = await fetchBytes(session, url);
	// `Gio.File.new_tmp` returns [file, IOStream]; close the stream before
	// handing the path to `tar` so there's no contention on the fd.
	const [file, iostream] = Gio.File.new_tmp("ts-for-gir-XXXXXX.tgz");
	iostream.close(null);
	file.replace_contents(bytes, null, false, Gio.FileCreateFlags.REPLACE_DESTINATION, null);
	return file.get_path();
}

function rmRecursive(path) {
	const file = Gio.File.new_for_path(path);
	if (!file.query_exists(null)) return;
	const enumerator = file.enumerate_children(
		"standard::name,standard::type",
		Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
		null,
	);
	let childInfo;
	while ((childInfo = enumerator.next_file(null))) {
		const child = file.resolve_relative_path(childInfo.get_name());
		if (childInfo.get_file_type() === Gio.FileType.DIRECTORY) {
			rmRecursive(child.get_path());
		} else {
			child.delete(null);
		}
	}
	enumerator.close(null);
	file.delete(null);
}

function shQuote(s) {
	return `'${s.replace(/'/g, `'\\''`)}'`;
}

function pickLauncherTarget(pkg) {
	// Prefer `gjsify.bin[<bin-name>]` (GJS bundle), fall back to npm `bin`
	// (Node script). Only the plain string and `Record<name, target>` shapes
	// matter here — none of the bins we care about use the npm "single
	// string" form because @ts-for-gir/cli has multiple bins.
	const gjsifyBin = pkg?.gjsify?.bin;
	if (gjsifyBin && typeof gjsifyBin === "object" && gjsifyBin[DEFAULT_BIN_NAME]) {
		return gjsifyBin[DEFAULT_BIN_NAME];
	}
	const npmBin = pkg?.bin;
	if (npmBin && typeof npmBin === "object" && npmBin[DEFAULT_BIN_NAME]) {
		return npmBin[DEFAULT_BIN_NAME];
	}
	throw new Error(`No '${DEFAULT_BIN_NAME}' bin declared in package.json (looked at gjsify.bin and bin)`);
}

/**
 * Discover @gjsify/* native prebuild directories (Vala/GObject typelibs +
 * shared libs) reachable from the user's gjsify global install — typically
 * `~/.local/share/gjsify/global/node_modules/@gjsify/<pkg>/prebuilds/linux-<arch>/`.
 * ts-for-gir's GJS bundle uses these via `imports.gi.GjsifyTerminal` for
 * correct TTY width / isTTY / raw-mode detection; without GI_TYPELIB_PATH /
 * LD_LIBRARY_PATH pointing at them, the bundle falls back to env-only
 * defaults (no colors, 80-col wrap).
 *
 * Returns the empty array when no gjsify global install is present, in which
 * case the launcher is written without an env preamble.
 */
function detectGjsifyNativePrebuildDirs() {
	const xdgData =
		GLib.getenv("XDG_DATA_HOME") || GLib.build_filenamev([GLib.get_home_dir(), ".local", "share"]);
	const gjsifyPrefix =
		GLib.getenv("GJSIFY_GLOBAL_PREFIX") || GLib.build_filenamev([xdgData, "gjsify", "global"]);
	const nodeModulesGjsify = GLib.build_filenamev([gjsifyPrefix, "node_modules", "@gjsify"]);
	const dir = Gio.File.new_for_path(nodeModulesGjsify);
	if (!dir.query_exists(null)) return [];
	// gjs runs on `process.arch`-equivalent x64 / arm64; mirror gjsify's
	// detect-native-packages.ts arch map so the prebuild directory name
	// matches the .so/.typelib layout shipped by gjsify.
	const machine = (() => {
		try {
			const [, out] = GLib.spawn_command_line_sync("uname -m");
			return new TextDecoder().decode(out).trim();
		} catch {
			return "x86_64";
		}
	})();
	const archDir = `linux-${machine === "aarch64" ? "aarch64" : machine === "x86_64" ? "x86_64" : machine}`;
	const out = [];
	const enumerator = dir.enumerate_children("standard::name,standard::type", Gio.FileQueryInfoFlags.NONE, null);
	let info;
	while ((info = enumerator.next_file(null))) {
		const name = info.get_name();
		const pkgDir = GLib.build_filenamev([nodeModulesGjsify, name]);
		const prebuildsDir = GLib.build_filenamev([pkgDir, "prebuilds", archDir]);
		if (Gio.File.new_for_path(prebuildsDir).query_exists(null)) {
			out.push(prebuildsDir);
		}
	}
	enumerator.close(null);
	return out;
}

function buildLauncherEnvPreamble(prebuildsDirs) {
	if (prebuildsDirs.length === 0) return "";
	const joined = shQuote(prebuildsDirs.join(":"));
	return (
		`GI_TYPELIB_PATH=${joined}\${GI_TYPELIB_PATH:+":$GI_TYPELIB_PATH"}\n` +
		`LD_LIBRARY_PATH=${joined}\${LD_LIBRARY_PATH:+":$LD_LIBRARY_PATH"}\n` +
		`export GI_TYPELIB_PATH LD_LIBRARY_PATH\n`
	);
}

function writeLauncher(target) {
	const envPreamble = buildLauncherEnvPreamble(detectGjsifyNativePrebuildDirs());
	const launcher = `#!/bin/sh\n${envPreamble}exec ${shQuote(target)} "$@"\n`;
	const file = Gio.File.new_for_path(LAUNCHER_PATH);
	file.replace_contents(
		new TextEncoder().encode(launcher),
		null,
		false,
		Gio.FileCreateFlags.REPLACE_DESTINATION,
		null,
	);
	const fileInfo = new Gio.FileInfo();
	fileInfo.set_attribute_uint32("unix::mode", 0o755);
	file.set_attributes_from_info(fileInfo, Gio.FileQueryInfoFlags.NONE, null);
}

function makeBinExecutable(target) {
	const file = Gio.File.new_for_path(target);
	if (!file.query_exists(null)) return;
	const fileInfo = new Gio.FileInfo();
	fileInfo.set_attribute_uint32("unix::mode", 0o755);
	try {
		file.set_attributes_from_info(fileInfo, Gio.FileQueryInfoFlags.NONE, null);
	} catch {
		/* best effort */
	}
}

function parseArgs() {
	const argv = system?.programArgs ?? [];
	const force = argv.includes("--force") || argv.includes("-f");
	const help = argv.includes("--help") || argv.includes("-h");
	let tag = "latest";
	for (const a of argv) {
		const m = a.match(/^--tag=(.+)$/);
		if (m) tag = m[1];
	}
	return { force, help, tag };
}

function printUsage() {
	print("Usage: gjs -m install.js [--force] [--tag=<dist-tag>] [--help]");
	print("");
	print(`Installs or updates ${PACKAGE} from the npm registry.`);
	print(`  package tree → ${DATA_DIR}`);
	print(`  launcher     → ${LAUNCHER_PATH}`);
	print("");
	print("Options:");
	print("  --force, -f         Reinstall even if the latest version is already installed.");
	print("  --tag=<dist-tag>    Install a specific dist-tag (default: latest, e.g. next).");
	print("  --help,  -h         Show this message.");
}

async function main() {
	const { force, help, tag } = parseArgs();
	if (help) {
		printUsage();
		exit(0);
	}

	const session = new Soup.Session();

	const packumentUrl = `${REGISTRY}/${encodeURIComponent(PACKAGE).replace("%40", "@")}`;
	info(`Fetching ${packumentUrl} ...`);
	let packument;
	try {
		packument = await fetchJson(session, packumentUrl, "application/vnd.npm.install-v1+json");
	} catch (err) {
		error(`Failed to fetch packument: ${err.message}`);
		exit(1);
	}

	let target;
	try {
		target = pickVersion(packument, tag);
	} catch (err) {
		error(err.message);
		exit(1);
	}

	const installedVersion = getInstalledVersion();
	if (installedVersion === target.version && !force) {
		info(`Already up to date (v${installedVersion})`);
		info("Run with --force to reinstall anyway.");
		exit(0);
	}

	if (installedVersion === target.version) {
		info(`Reinstalling v${installedVersion} (--force) ...`);
	} else if (installedVersion) {
		info(`Updating from v${installedVersion} to v${target.version} ...`);
	} else {
		info(`Installing ${PACKAGE}@${target.version} ...`);
	}

	let tarballPath;
	try {
		info(`Downloading ${target.tarballUrl} ...`);
		tarballPath = await downloadTarballToTmp(session, target.tarballUrl);
	} catch (err) {
		error(`Download failed: ${err.message}`);
		exit(1);
	}

	try {
		// Wipe the previous install before extracting so we don't leave stale
		// files when a release removes something. The launcher is rewritten
		// below regardless, so a half-finished extract is recoverable by
		// re-running with --force.
		rmRecursive(DATA_DIR);
		ensureDir(DATA_DIR);
		await extractTarball(tarballPath, DATA_DIR);
	} catch (err) {
		error(`Extraction failed: ${err.message}`);
		exit(1);
	} finally {
		try {
			Gio.File.new_for_path(tarballPath).delete(null);
		} catch {
			/* best effort */
		}
	}

	// Resolve the launcher target via the freshly-extracted package.json so
	// the install path stays in sync with whatever the published package
	// declares (gjsify.bin can change in future releases).
	const pkg = readJsonFile(GLib.build_filenamev([DATA_DIR, "package.json"]));
	if (!pkg) {
		error("Extracted package is missing package.json");
		exit(1);
	}
	let binRel;
	try {
		binRel = pickLauncherTarget(pkg);
	} catch (err) {
		error(err.message);
		exit(1);
	}
	const binAbs = GLib.build_filenamev([DATA_DIR, binRel]);
	makeBinExecutable(binAbs);

	ensureDir(BIN_DIR);
	writeLauncher(binAbs);

	info(`Installed ${PACKAGE}@${target.version}`);
	info(`  package tree → ${DATA_DIR}`);
	info(`  launcher     → ${LAUNCHER_PATH}  →  ${binAbs}`);
	checkPath();
	info(`Done! Run: ${DEFAULT_BIN_NAME} --help`);
}

await main();
