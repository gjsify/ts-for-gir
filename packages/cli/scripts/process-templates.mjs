#!/usr/bin/env node

/**
 * Resolves `workspace:^` specifiers in template root package.json files to
 * concrete versions, then writes processed copies to dist-templates/ for the
 * shipped npm artifact. Sub-package package.json files inside templates (e.g.
 * types-workspace/packages/app/package.json) are copied verbatim because their
 * `workspace:^` references are user-workspace references, not ts-for-gir ones.
 */

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
 * Node-native walk of `package.json#workspaces` globs — no yarn dependency,
 * works on the Node-free `gjsify install` install path.
 *
 * Supports the common globbing patterns we use here (`packages/*`,
 * `examples/*`, `tests/*`, `types-dev/*`); plain string entries are treated
 * as exact relative paths.
 */
function buildVersionMap() {
	const rootPkg = readJson(join(MONOREPO_ROOT, "package.json"));
	const patterns = Array.isArray(rootPkg.workspaces)
		? rootPkg.workspaces
		: Array.isArray(rootPkg.workspaces?.packages)
			? rootPkg.workspaces.packages
			: [];

	const dirs = new Set();
	for (const pattern of patterns) {
		if (pattern.endsWith("/*")) {
			const base = pattern.slice(0, -2);
			const baseAbs = join(MONOREPO_ROOT, base);
			if (!existsSync(baseAbs)) continue;
			for (const entry of readdirSync(baseAbs, { withFileTypes: true })) {
				if (!entry.isDirectory()) continue;
				dirs.add(join(baseAbs, entry.name));
			}
		} else {
			dirs.add(join(MONOREPO_ROOT, pattern));
		}
	}

	const map = {};
	for (const dir of dirs) {
		const pkgPath = join(dir, "package.json");
		if (!existsSync(pkgPath)) continue;
		const pkg = readJson(pkgPath);
		if (pkg.name && pkg.version) map[pkg.name] = pkg.version;
	}
	return map;
}

const npmVersionCache = {};

function resolveViaNpm(name) {
	if (name in npmVersionCache) return npmVersionCache[name];
	try {
		const stdout = execFileSync("npm", ["view", name, "version"], {
			encoding: "utf8",
			stdio: ["pipe", "pipe", "pipe"],
			timeout: 30 * 1000,
		});
		const version = stdout.trim();
		npmVersionCache[name] = version || null;
		return npmVersionCache[name];
	} catch {
		npmVersionCache[name] = null;
		return null;
	}
}

function resolveDeps(deps, versionMap, templateName) {
	if (!deps) return;
	for (const name of Object.keys(deps)) {
		const spec = deps[name];
		if (typeof spec !== "string" || !WORKSPACE_PREFIX_RE.test(spec)) continue;
		let version = versionMap[name];
		if (!version) {
			version = resolveViaNpm(name);
			if (version) {
				console.log(`[process-templates] resolved ${name} via npm registry: ${version}`);
			}
		}
		if (!version) {
			throw new Error(
				`[process-templates] Template "${templateName}": cannot resolve workspace:^ for "${name}". ` +
					"Not found as a local workspace and not published to the npm registry.",
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
