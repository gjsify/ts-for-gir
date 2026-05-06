#!/usr/bin/env node
/**
 * Reads every EJS template from @ts-for-gir/templates and emits a single
 * TypeScript module that exports them as a `Record<string, string>` keyed by
 * the template's path relative to the templates dir.
 *
 * Why not load them dynamically? `TemplateEngine.read()` looks up template
 * names computed at runtime (e.g. "class.d.ts", "interface.d.ts"), so the
 * paths are never statically resolvable. The gjsify build-time
 * `readFileSync(new URL(…, import.meta.url))` inliner only handles paths it
 * can resolve at build time, and Yarn PnP zip caches break the legacy
 * `import.meta.url` URL-rewrite fallback at runtime. Embedding the contents
 * up-front is the only approach that works for both layouts (PnP zip cache
 * and unzipped node_modules) and for both bundles (Node.js + GJS).
 *
 * Run via: yarn bundle-templates
 * Output:  packages/cli/src/generated/templates-bundle.ts
 */

import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
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
