import { build } from "esbuild";

/**
 * Meson runs this script from its build directory and passes the input and
 * output paths with `--entry` and `--outfile`. `npm run build` passes nothing
 * and gets the defaults below.
 */
function argValue(flag: string): string | undefined {
	const index = process.argv.indexOf(flag);
	return index === -1 ? undefined : process.argv[index + 1];
}

await build({
	entryPoints: [argValue("--entry") ?? "main.ts"],
	outfile: argValue("--outfile") ?? "dist/main.js",
	// Replaces `__APP_ID__` in main.ts with the id Meson got from the manifest,
	// so the app id is only written down in the manifest.
	define: {
		__APP_ID__: JSON.stringify(argValue("--app-id") ?? "com.example.__PROJECT_NAME__"),
	},
	bundle: true,
	target: "firefox128",
	format: "esm",
	// GJS provides these modules at runtime. esbuild cannot bundle them.
	external: ["gi://*", "resource://*", "gettext", "system", "cairo"],
	// Import `.ui` and `.css` files as strings. GJS parses them at runtime.
	loader: {
		".ui": "text",
		".css": "text",
	},
});
