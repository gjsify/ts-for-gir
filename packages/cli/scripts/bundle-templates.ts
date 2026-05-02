#!/usr/bin/env node
/**
 * Reads all files from @ts-for-gir/templates and writes them as an embedded
 * TypeScript module. Both the Node.js bundle and the GJS bundle import this
 * module so that neither needs to resolve the templates package at runtime.
 *
 * Run via: yarn bundle-templates
 * Output:  packages/cli/src/generated/templates-bundle.ts
 */

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI_ROOT = join(__dirname, "..");
const TEMPLATES_DIR = join(CLI_ROOT, "..", "..", "packages", "templates", "templates");
const OUTPUT_FILE = join(CLI_ROOT, "src", "generated", "templates-bundle.ts");

function readDirRecursive(dir: string, base: string): Array<[string, string]> {
	const entries: Array<[string, string]> = [];
	for (const name of readdirSync(dir)) {
		const fullPath = join(dir, name);
		const stat = statSync(fullPath);
		if (stat.isDirectory()) {
			entries.push(...readDirRecursive(fullPath, base));
		} else {
			const relKey = relative(base, fullPath).replace(/\\/g, "/");
			const content = readFileSync(fullPath, "utf8");
			entries.push([relKey, content]);
		}
	}
	return entries;
}

const entries = readDirRecursive(TEMPLATES_DIR, TEMPLATES_DIR);

const lines = entries.map(([key, content]) => {
	return `  ${JSON.stringify(key)}: ${JSON.stringify(content)},`;
});

const output = `// AUTO-GENERATED — do not edit manually.
// Run: yarn workspace @ts-for-gir/cli bundle-templates
// Source: packages/templates/templates/
export const EMBEDDED_TEMPLATES: Record<string, string> = {
${lines.join("\n")}
};
`;

mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
writeFileSync(OUTPUT_FILE, output, "utf8");
console.log(`[bundle-templates] wrote ${entries.length} template files to ${OUTPUT_FILE}`);
