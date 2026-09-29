import { build } from "esbuild";

/**
 * The bundle step, driven by Meson.
 *
 * Meson passes absolute paths: it runs commands in the build directory, not the
 * source tree, so a relative `entryPoints` would resolve against the wrong
 * root. Invoked directly (`npm run build`) both fall back to the paths a
 * developer at the project root expects.
 */
function argValue(flag: string): string | undefined {
	const index = process.argv.indexOf(flag);
	return index === -1 ? undefined : process.argv[index + 1];
}

await build({
	entryPoints: [argValue("--entry") ?? "main.ts"],
	outfile: argValue("--outfile") ?? "dist/main.js",
	// The app id, from `-Dapp_id=` in the Flatpak manifest. GJS reads
	// `applicationId` at RUNTIME, so Meson cannot fill it in after the fact —
	// but a build-time `define` is the same substitution one step earlier, and
	// it keeps the manifest the single home for the id instead of leaving a
	// second literal in `main.ts` for a rename to miss.
	define: {
		__APP_ID__: JSON.stringify(argValue("--app-id") ?? "com.example.__PROJECT_NAME__"),
	},
	bundle: true,
	target: "firefox128",
	format: "esm",
	// GJS resolves these at runtime; bundling them would fail on `gi://` and
	// would inline a second copy of the ambient types.
	external: ["gi://*", "resource://*", "gettext", "system", "cairo"],
	// A `.ui` or `.css` import is TEXT that GJS parses at runtime, not a module
	// to execute. Without these loaders esbuild rejects the import outright, and
	// they are the first thing a real app adds to this file.
	loader: {
		".ui": "text",
		".css": "text",
	},
});
