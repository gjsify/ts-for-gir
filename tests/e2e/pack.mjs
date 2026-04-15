#!/usr/bin/env node

/**
 * Packs workspace packages into tarballs for E2E tests using Yarn's native
 * tooling. Outputs a JSON map of { packageName: tarballFilename } to stdout.
 *
 * Usage:
 *   node pack.mjs <tarballsDir> [--include-girs <csv>]
 *
 * --include-girs   Comma-separated @girs/* package names from types-dev/* to
 *                  also include. Without it, only the primary packages
 *                  (@ts-for-gir/*, @gi.ts/*) are packed.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MONOREPO_ROOT = resolve(__dirname, "..", "..");

const [tarballsDir, ...rest] = process.argv.slice(2);
if (!tarballsDir) {
	console.error("Usage: pack.mjs <tarballsDir> [--include-girs <csv>]");
	process.exit(1);
}

let includeGirs = [];
for (let i = 0; i < rest.length; i++) {
	if (rest[i] === "--include-girs") {
		includeGirs = (rest[i + 1] || "").split(",").filter(Boolean);
		i++;
	}
}

mkdirSync(tarballsDir, { recursive: true });

// Ask yarn which workspaces exist so we can build the name → tarball map
// without duplicating glob semantics.
const listOutput = execFileSync("yarn", ["workspaces", "list", "--json"], {
	cwd: MONOREPO_ROOT,
	encoding: "utf8",
	maxBuffer: 50 * 1024 * 1024,
});
const allWorkspaces = listOutput
	.trim()
	.split("\n")
	.filter(Boolean)
	.map((line) => JSON.parse(line))
	.filter((w) => w.location !== ".");

function isPrivate(workspace) {
	const pkg = JSON.parse(readFileSync(join(MONOREPO_ROOT, workspace.location, "package.json"), "utf8"));
	return !!pkg.private;
}

// Skip private packages so the map matches what `yarn ... --no-private pack` actually produces.
const primary = allWorkspaces.filter(
	(w) =>
		!w.location.startsWith("examples/") &&
		!w.location.startsWith("tests/") &&
		!w.location.startsWith("types-dev/") &&
		!isPrivate(w),
);
const girsWanted = allWorkspaces.filter((w) => w.location.startsWith("types-dev/") && includeGirs.includes(w.name));
const selected = [...primary, ...girsWanted];

// Build an --include flag list for a single `yarn workspaces foreach pack` call.
const includeFlags = selected.flatMap((w) => ["--include", w.name]);
if (selected.length === 0) {
	process.stdout.write("{}\n");
	process.exit(0);
}

// Yarn expands %s to the package ident: @ts-for-gir/cli → @ts-for-gir-cli.tgz
execFileSync(
	"yarn",
	["workspaces", "foreach", "-A", "--no-private", ...includeFlags, "pack", "-o", `${tarballsDir}/%s.tgz`],
	{ cwd: MONOREPO_ROOT, stdio: ["pipe", "pipe", "inherit"], maxBuffer: 50 * 1024 * 1024 },
);

const tarballMap = {};
for (const w of selected) {
	tarballMap[w.name] = `${w.name.replace("/", "-")}.tgz`;
}
process.stdout.write(`${JSON.stringify(tarballMap, null, 2)}\n`);
