import { build } from "esbuild";

await build({
	entryPoints: ["main.ts"],
	outdir: "dist",
	bundle: true,
	target: "firefox128",
	format: "esm",
	external: ["gi://*", "resource://*", "gettext", "system", "cairo"],
});
