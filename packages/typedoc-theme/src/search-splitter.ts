/**
 * Post-processes TypeDoc's monolithic search.js into per-module chunks.
 *
 * TypeDoc generates a single search.js containing all 460k+ entries (16 MB compressed).
 * This module splits it into one file per GIR module so each page only loads the
 * search data it needs.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { deflateSync, inflateSync } from "node:zlib";
import lunr from "lunr";

// TypeDoc ReflectionKind.Module = 2
const KIND_MODULE = 2;

interface SearchDocument {
	kind: number;
	name: string;
	url: string;
	classes?: string;
	parent?: string;
	icon?: string | number;
}

interface SearchData {
	rows: SearchDocument[];
	index: object; // serialized lunr index — we don't need to load it
}

/**
 * Sanitize a module name for use as a filename.
 * e.g. "Gtk-4.0" → "gtk-4.0", "gjs/cairo" → "gjs_cairo"
 */
export function sanitizeModuleName(name: string): string {
	return name.toLowerCase().replace(/[/\\]/g, "_");
}

/**
 * Extract the top-level module name from a search row.
 * - Module entries (kind=2): module = row.name
 * - Everything else: match the parent prefix against known module names
 *
 * We can't simply split on "." because module names themselves contain dots
 * (e.g. "AppStream-1.0" has parent "AppStream-1.0.AppStream.Component").
 */
function getModuleName(row: SearchDocument, moduleNames: Set<string>): string | undefined {
	if (row.kind === KIND_MODULE) return row.name;
	if (!row.parent) return undefined;

	// Try to match the parent prefix against known module names
	for (const mod of moduleNames) {
		if (row.parent === mod || row.parent.startsWith(`${mod}.`)) {
			return mod;
		}
	}

	return undefined;
}

/**
 * Build a compressed search chunk (same format as TypeDoc's search.js)
 * from a subset of rows.
 */
function buildChunk(rows: SearchDocument[]): string {
	const builder = new lunr.Builder();
	builder.pipeline.add(lunr.trimmer);
	builder.ref("id");
	builder.field("name", { boost: 10 });

	for (let i = 0; i < rows.length; i++) {
		builder.add({ id: i, name: rows[i].name });
	}

	const index = builder.build();
	const data = { rows, index };
	const compressed = deflateSync(Buffer.from(JSON.stringify(data)));
	return compressed.toString("base64");
}

/**
 * Read and decompress TypeDoc's search.js, returning the parsed search data.
 */
function readSearchData(assetsDir: string): SearchData {
	const raw = readFileSync(join(assetsDir, "search.js"), "utf-8");

	// Extract base64 payload from: window.searchData = "...";
	const match = raw.match(/window\.searchData\s*=\s*"([^"]+)"/);
	if (!match?.[1]) {
		throw new Error("Could not extract searchData from search.js");
	}

	const decoded = Buffer.from(match[1], "base64");
	const decompressed = inflateSync(decoded);
	return JSON.parse(decompressed.toString("utf-8")) as SearchData;
}

/**
 * Split the monolithic search.js into per-module chunks.
 *
 * Produces:
 * - `search-modules.js` — module-level entries only (for the homepage)
 * - `search-{module}.js` — per-module entries (for module pages)
 * - Replaces `search.js` with a null stub
 */
export async function splitSearchIndex(outputDir: string): Promise<void> {
	const assetsDir = join(outputDir, "assets");

	let searchData: SearchData;
	try {
		searchData = readSearchData(assetsDir);
	} catch {
		// No search.js or unparseable — nothing to split
		return;
	}

	const { rows } = searchData;

	// Collect known module names first (kind=2 entries)
	const moduleNames = new Set<string>();
	for (const row of rows) {
		if (row.kind === KIND_MODULE) {
			moduleNames.add(row.name);
		}
	}

	// Group rows by module
	const moduleMap = new Map<string, SearchDocument[]>();
	const moduleEntries: SearchDocument[] = [];

	for (const row of rows) {
		if (row.kind === KIND_MODULE) {
			moduleEntries.push(row);
		}

		const mod = getModuleName(row, moduleNames);
		if (!mod) continue;

		let bucket = moduleMap.get(mod);
		if (!bucket) {
			bucket = [];
			moduleMap.set(mod, bucket);
		}
		bucket.push(row);
	}

	// Write per-module chunks
	for (const [moduleName, moduleRows] of moduleMap) {
		const chunk = buildChunk(moduleRows);
		const filename = `search-${sanitizeModuleName(moduleName)}.js`;
		writeFileSync(join(assetsDir, filename), `window.searchData = "${chunk}";`);
	}

	// Write module index for homepage
	const modulesChunk = buildChunk(moduleEntries);
	writeFileSync(join(assetsDir, "search-modules.js"), `window.searchData = "${modulesChunk}";`);

	// Replace original search.js with a null stub
	writeFileSync(join(assetsDir, "search.js"), 'window.searchData = null;');

	const totalChunks = moduleMap.size + 1; // +1 for modules index
	console.log(`[search-splitter] Split ${rows.length} entries into ${totalChunks} chunks (${moduleMap.size} modules)`);
}
