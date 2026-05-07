#!/usr/bin/env -S gjs -m
/**
 * ts-for-gir installer / updater for GJS
 *
 * Usage:
 *   gjs -m install.js
 *   # or, if the shebang is supported:
 *   ./install.js
 *
 * Installs or updates the ts-for-gir GJS binary to ~/.local/bin/ts-for-gir.
 * Set GITHUB_TOKEN environment variable to avoid GitHub API rate limits.
 */

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Soup from "gi://Soup?version=3.0";
import { exit } from "system";

// GJS does not auto-promisify libsoup methods; wire it up explicitly so we can
// `await session.send_and_read_async(...)` with the standard 3-arg signature.
Gio._promisify(Soup.Session.prototype, "send_and_read_async");

const REPO = "gjsify/ts-for-gir";
const GJS_ASSET_NAME = "ts-for-gir-gjs";
const INSTALL_DIR = GLib.build_filenamev([GLib.get_home_dir(), ".local", "bin"]);
const INSTALL_PATH = GLib.build_filenamev([INSTALL_DIR, "ts-for-gir"]);
const GITHUB_API = "https://api.github.com";

function info(msg) {
	print(`[ts-for-gir] ${msg}`);
}

function error(msg) {
	printerr(`[ts-for-gir] ERROR: ${msg}`);
}

function getInstalledVersion() {
	const file = Gio.File.new_for_path(INSTALL_PATH);
	if (!file.query_exists(null)) return null;
	try {
		const [ok, stdout] = GLib.spawn_command_line_sync(`${INSTALL_PATH} --version`);
		if (!ok) return null;
		const output = new TextDecoder().decode(stdout).trim();
		const match = output.match(/(\d+\.\d+\.\d+(?:-\S+)?)/);
		return match ? match[1] : null;
	} catch {
		return null;
	}
}

function ensureInstallDir() {
	const dir = Gio.File.new_for_path(INSTALL_DIR);
	if (!dir.query_exists(null)) {
		dir.make_directory_with_parents(null);
		info(`Created ${INSTALL_DIR}`);
	}
}

function checkPath() {
	const pathEnv = GLib.getenv("PATH") ?? "";
	if (!pathEnv.split(":").includes(INSTALL_DIR)) {
		info("");
		info(`Note: ${INSTALL_DIR} is not in your PATH.`);
		info("Add the following line to your ~/.bashrc or ~/.profile:");
		info(`  export PATH="$HOME/.local/bin:$PATH"`);
	}
}

async function fetchJson(session, url) {
	const message = Soup.Message.new("GET", url);
	message.request_headers.append("Accept", "application/vnd.github.v3+json");
	message.request_headers.append("User-Agent", "ts-for-gir-installer/1.0");
	const token = GLib.getenv("GITHUB_TOKEN");
	if (token) {
		message.request_headers.append("Authorization", `token ${token}`);
	}
	const bytes = await session.send_and_read_async(message, GLib.PRIORITY_DEFAULT, null);
	const status = message.get_status();
	if (status !== Soup.Status.OK) {
		throw new Error(`HTTP ${status} from ${url}`);
	}
	return JSON.parse(new TextDecoder().decode(bytes.get_data()));
}

async function downloadToFile(session, url, destPath) {
	const message = Soup.Message.new("GET", url);
	message.request_headers.append("User-Agent", "ts-for-gir-installer/1.0");
	const bytes = await session.send_and_read_async(message, GLib.PRIORITY_DEFAULT, null);
	const status = message.get_status();
	if (status !== Soup.Status.OK) {
		throw new Error(`HTTP ${status} downloading binary`);
	}

	// Atomic write: write to tmp then rename
	const tmpPath = destPath + ".tmp";
	const tmpFile = Gio.File.new_for_path(tmpPath);
	tmpFile.replace_contents(bytes.get_data(), null, false, Gio.FileCreateFlags.REPLACE_DESTINATION, null);

	// Make executable
	const fileInfo = new Gio.FileInfo();
	fileInfo.set_attribute_uint32("unix::mode", 0o755);
	tmpFile.set_attributes_from_info(fileInfo, Gio.FileQueryInfoFlags.NONE, null);

	// Rename to final destination (atomic on Linux)
	const destFile = Gio.File.new_for_path(destPath);
	tmpFile.move(destFile, Gio.FileCopyFlags.OVERWRITE, null, null);
}

async function main() {
	const session = new Soup.Session();

	info("Fetching release information from GitHub...");

	// We scan the recent releases instead of using /releases/latest because the
	// latter skips prereleases. During the rc cycle the most recent stable may
	// not yet ship the GJS bundle, so picking the newest release that actually
	// contains the asset is more robust.
	let releases;
	try {
		releases = await fetchJson(session, `${GITHUB_API}/repos/${REPO}/releases?per_page=20`);
	} catch (err) {
		error(`Failed to fetch release info: ${err.message}`);
		exit(1);
	}

	let release;
	let asset;
	for (const candidate of releases) {
		if (candidate.draft) continue;
		const match = candidate.assets?.find((a) => a.name === GJS_ASSET_NAME);
		if (match) {
			release = candidate;
			asset = match;
			break;
		}
	}

	if (!release || !asset) {
		error(`No release with a ${GJS_ASSET_NAME} asset found in the last 20 releases`);
		exit(1);
	}

	const latestVersion = release.tag_name.replace(/^v/, "");
	const installedVersion = getInstalledVersion();

	if (installedVersion === latestVersion) {
		info(`Already up to date (v${installedVersion})`);
		exit(0);
	}

	if (installedVersion) {
		info(`Updating from v${installedVersion} to v${latestVersion}...`);
	} else {
		info(`Installing ts-for-gir v${latestVersion}...`);
	}

	ensureInstallDir();

	info(`Downloading ${asset.browser_download_url}...`);
	try {
		await downloadToFile(session, asset.browser_download_url, INSTALL_PATH);
	} catch (err) {
		error(`Download failed: ${err.message}`);
		exit(1);
	}

	info(`Installed to ${INSTALL_PATH}`);
	checkPath();
	info("Done! Run: ts-for-gir --help");
}

await main();
