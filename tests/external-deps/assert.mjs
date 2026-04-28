// Asserts the shape of the single-file ambient .d.ts emitted by --external-deps.
// Bytewise snapshots are too brittle (formatter touches, dep version bumps) — we only
// check the load-bearing properties: ambient module wrapper, npm-style imports for
// transitive deps, no <reference> blocks, no GJS aux-file emission alongside.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outfile = join(here, "generated", "gi-types.d.ts");
const outdir = join(here, "generated");

if (!existsSync(outfile)) {
	throw new Error(`expected outfile not generated: ${outfile}`);
}

const content = readFileSync(outfile, "utf8");

const must = [
	["ambient module wrapper", /declare module 'gi:\/\/Greeter\?version=1\.0'/],
	["unversioned re-export wrapper", /declare module 'gi:\/\/Greeter'/],
	["GObject npm import", /from '@girs\/gobject-2\.0'/],
	["Gio npm import", /from '@girs\/gio-2\.0'/],
	["GLib npm import", /from '@girs\/glib-2\.0'/],
	["primary class generated", /class HelloWorld extends GObject\.Object/],
	["instance method generated", /say_hello\([^)]*name: string[^)]*\): string/],
	["cross-namespace return type", /open_stream\([^)]*\): Gio\.InputStream/],
	["signal generated", /ready: \(\) => void/],
];

const mustNot = [
	["no /// <reference> blocks", /\/\/\/\s*<reference path/],
	["no gi:// import for deps", /from 'gi:\/\/(GObject|Gio|GLib)\?/],
];

const failures = [];
for (const [label, re] of must) if (!re.test(content)) failures.push(`missing: ${label} (${re})`);
for (const [label, re] of mustNot) if (re.test(content)) failures.push(`should not appear: ${label} (${re})`);

const auxFiles = readdirSync(outdir).filter((n) => n !== "gi-types.d.ts");
if (auxFiles.length > 0) failures.push(`unexpected aux files in output dir: ${auxFiles.join(", ")}`);

if (failures.length > 0) {
	console.error("external-deps assertion failures:");
	for (const f of failures) console.error(`  - ${f}`);
	console.error("\n--- generated content ---\n" + content);
	process.exit(1);
}

console.log(`OK: ${outfile} matches expected shape (${content.length} bytes)`);
