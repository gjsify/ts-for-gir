/**
 * Everything you need for the `ts-for-gir self-update` command is located here
 */

import { chmodSync, existsSync, renameSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { APP_NAME, APP_VERSION } from "@ts-for-gir/lib";

import type { SelfUpdateCommandArgs } from "../types/index.ts";

const REPO = "gjsify/ts-for-gir";
// Allow tests to point the GitHub API at a local mock server without needing
// network access. The env var is intentionally NOT documented in user-facing
// help — it is a test seam only.
const GITHUB_API = process.env.TS_FOR_GIR_GITHUB_API ?? "https://api.github.com";
const GJS_ASSET_NAME = "ts-for-gir-gjs";

function getCurrentBinaryPath(): string | null {
  const p = process.argv[1] ?? null;
  if (!p) return null;
  // Refuse to update in dev mode — running from a source `.ts` file or
  // from a project-local `node_modules/` (in which case the user should
  // update via their package manager, not by replacing the binary in
  // place).
  if (p.endsWith(".ts")) return null;
  if (p.includes("/node_modules/") && !isGjsifyGlobalLocation(p)) return null;
  return p;
}

/**
 * Recognise the gjsify-install global location (`~/.local/share/gjsify/global/
 * node_modules/<pkg>/...`, set up by `gjsify install -g` and `install.js`).
 *
 * The previous broad `path.includes("node_modules")` check rejected this
 * location alongside genuine project-local installs, even though the
 * gjsify-global location IS the canonical install spot for `ts-for-gir
 * self-update`. The fix: only refuse updates for paths that contain
 * `node_modules` AND aren't under the gjsify-global root.
 *
 * Matches both XDG_DATA_HOME-rooted and the documented fallback
 * (`$HOME/.local/share/gjsify/global/`).
 */
function isGjsifyGlobalLocation(p: string): boolean {
  const xdgData = process.env.XDG_DATA_HOME;
  const home = process.env.HOME;
  const candidates: string[] = [];
  if (xdgData) candidates.push(`${xdgData}/gjsify/global/`);
  if (home) candidates.push(`${home}/.local/share/gjsify/global/`);
  return candidates.some((root) => p.startsWith(root));
}

async function fetchJson(url: string): Promise<unknown> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": `ts-for-gir/${APP_VERSION}`,
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `token ${token}`;

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} from ${url}`);
  }
  return response.json();
}

async function downloadBinary(url: string, destPath: string): Promise<void> {
  const response = await fetch(url, {
    headers: { "User-Agent": `ts-for-gir/${APP_VERSION}` },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} downloading binary`);
  }
  const buffer = await response.arrayBuffer();
  const tmpPath = join(tmpdir(), `ts-for-gir-update-${Date.now()}`);
  writeFileSync(tmpPath, Buffer.from(buffer));
  chmodSync(tmpPath, 0o755);
  renameSync(tmpPath, destPath); // atomic on POSIX
}

const command = "self-update";
const description = "Update ts-for-gir to the latest version from GitHub releases";
const examples: ReadonlyArray<[string, string?]> = [
  [`${APP_NAME} self-update`, "Check for updates and install the latest version"],
  [`${APP_NAME} self-update --check`, "Only check for a newer version, do not install"],
  [`${APP_NAME} self-update --force`, "Force reinstall even if already on the latest version"],
];

const builder = (yargs: import("yargs").Argv) =>
  yargs
    .option("check", {
      description: "Only check for a newer version, do not install",
      type: "boolean",
      default: false,
    })
    .option("force", {
      description: "Force reinstall even if already on the latest version",
      type: "boolean",
      default: false,
    })
    .example(examples as [string, string?][]);

const handler = async (args: SelfUpdateCommandArgs): Promise<void> => {
  console.log(`Checking for updates... (current: v${APP_VERSION})`);

  let release: Record<string, unknown>;
  try {
    release = (await fetchJson(`${GITHUB_API}/repos/${REPO}/releases/latest`)) as Record<
      string,
      unknown
    >;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    process.stderr.write(`Failed to fetch release information: ${msg}\n`);
    process.exitCode = 1;
    return;
  }

  const latestVersion = (release.tag_name as string).replace(/^v/, "");

  if (latestVersion === APP_VERSION && !args.force) {
    console.log(`Already up to date (v${APP_VERSION})`);
    return;
  }

  if (args.check) {
    console.log(`New version available: v${latestVersion} (current: v${APP_VERSION})`);
    console.log(`Run \`${APP_NAME} self-update\` to install it.`);
    return;
  }

  console.log(`Updating to v${latestVersion}...`);

  const assets = release.assets as Array<Record<string, string>>;
  const asset = assets.find((a) => a.name === GJS_ASSET_NAME);
  if (!asset) {
    process.stderr.write(
      `No GJS binary found in release ${release.tag_name}.\n` +
        "self-update requires the GJS bundle to be installed via install.js.\n" +
        "For npm installations use: npm update -g @ts-for-gir/cli\n",
    );
    process.exitCode = 1;
    return;
  }

  const currentPath = getCurrentBinaryPath();
  if (!currentPath || !existsSync(currentPath)) {
    process.stderr.write(
      "Cannot determine current binary path for update.\n" +
        "self-update only works when running the installed GJS binary.\n",
    );
    process.exitCode = 1;
    return;
  }

  try {
    await downloadBinary(asset.browser_download_url, currentPath);
    console.log(`Successfully updated to v${latestVersion}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    process.stderr.write(`Update failed: ${msg}\n`);
    process.exitCode = 1;
  }
  // Force-exit after a successful or failed download so that any open
  // keep-alive HTTP connections in undici's connection pool do not prevent
  // the Node event loop from draining. Without this, the process can hang
  // indefinitely when the download URL was served by a local HTTP mock (or
  // any server that does not close the connection after the response).
  process.exit(process.exitCode ?? 0);
};

export const selfUpdate = {
  command,
  description,
  builder,
  handler,
  examples,
};
