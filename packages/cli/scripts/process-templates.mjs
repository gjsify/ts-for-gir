#!/usr/bin/env node

/**
 * Resolves `workspace:^` specifiers in template root package.json files to
 * concrete versions, then writes processed copies to dist-templates/ for the
 * shipped npm artifact. Sub-package package.json files inside templates (e.g.
 * types-workspace/packages/app/package.json) are copied verbatim because their
 * `workspace:^` references are user-workspace references, not ts-for-gir ones.
 */

import { execFileSync } from "node:child_process";
import { cpSync, existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CLI_ROOT = resolve(__dirname, "..");
const MONOREPO_ROOT = resolve(CLI_ROOT, "..", "..");
const TEMPLATES_DIR = join(CLI_ROOT, "templates");
const DIST_DIR = join(CLI_ROOT, "dist-templates");

const WORKSPACE_PREFIX_RE = /^workspace:[~^*]?$/;

function readJson(path) {
	return JSON.parse(readFileSync(path, "utf8"));
}

/**
 * Build a { packageName: version } map from every workspace in the monorepo.
 * Yarn's `workspaces list --json` already includes types-dev/* (the @girs/*
 * packages), so a single call covers both the CLI packages and the GIR types.
 */
function buildVersionMap() {
	const stdout = execFileSync("yarn", ["workspaces", "list", "--json"], {
		cwd: MONOREPO_ROOT,
		encoding: "utf8",
		maxBuffer: 50 * 1024 * 1024,
	});
	const map = {};
	for (const line of stdout.trim().split("\n")) {
		if (!line) continue;
		const entry = JSON.parse(line);
		if (entry.location === ".") continue;
		const pkgPath = join(MONOREPO_ROOT, entry.location, "package.json");
		if (!existsSync(pkgPath)) continue;
		const pkg = readJson(pkgPath);
		if (pkg.name && pkg.version) map[pkg.name] = pkg.version;
	}
	return map;
}

function resolveDeps(deps, versionMap, templateName) {
	if (!deps) return;
	for (const name of Object.keys(deps)) {
		const spec = deps[name];
		if (typeof spec !== "string" || !WORKSPACE_PREFIX_RE.test(spec)) continue;
		const version = versionMap[name];
		if (!version) {
			throw new Error(
				`[process-templates] Template "${templateName}": cannot resolve workspace:^ for "${name}". ` +
					"Make sure the package exists as a workspace in the monorepo.",
			);
		}
		deps[name] = `^${version}`;
	}
}

function processRootPackageJson(rootPkgPath, versionMap, templateName) {
	const pkg = readJson(rootPkgPath);
	resolveDeps(pkg.dependencies, versionMap, templateName);
	resolveDeps(pkg.devDependencies, versionMap, templateName);
	resolveDeps(pkg.peerDependencies, versionMap, templateName);
	resolveDeps(pkg.optionalDependencies, versionMap, templateName);
	writeFileSync(rootPkgPath, `${JSON.stringify(pkg, null, "\t")}\n`);
}

function main() {
	if (!existsSync(TEMPLATES_DIR)) {
		console.error(`[process-templates] Templates dir missing: ${TEMPLATES_DIR}`);
		process.exit(1);
	}

	if (existsSync(DIST_DIR)) rmSync(DIST_DIR, { recursive: true, force: true });

	const versionMap = buildVersionMap();
	console.log(`[process-templates] Resolved ${Object.keys(versionMap).length} workspace package versions`);

	const templates = readdirSync(TEMPLATES_DIR).filter((name) =>
		statSync(join(TEMPLATES_DIR, name)).isDirectory(),
	);

	for (const templateName of templates) {
		cpSync(join(TEMPLATES_DIR, templateName), join(DIST_DIR, templateName), { recursive: true });
		const rootPkgPath = join(DIST_DIR, templateName, "package.json");
		if (existsSync(rootPkgPath)) {
			processRootPackageJson(rootPkgPath, versionMap, templateName);
		}
		console.log(`[process-templates] processed ${templateName}`);
	}

	console.log(`[process-templates] wrote ${templates.length} templates to ${DIST_DIR}`);
}

main();
