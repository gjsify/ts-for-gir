/**
 * Everything you need for the `ts-for-gir doc` command is located here
 */

declare const __GJS_BUNDLE__: boolean | undefined;

import { GeneratorType } from "@ts-for-gir/generator-base";
import { HtmlDocGenerator } from "@ts-for-gir/generator-html-doc";
import { APP_NAME, type ConfigFlags, NSRegistry } from "@ts-for-gir/lib";
import { docOptions, getOptionsGeneration, load } from "../config.ts";
import { TypeScriptFormatter } from "../formatters/typescript-formatter.ts";
import type { DocCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";
import { runGenerationCommand } from "./run-generation-command.ts";

const command = "doc [modules..]";

const description = "Generates HTML documentation from GIR files using TypeDoc";

const examples: ReadonlyArray<[string, string?]> = [
	[`${APP_NAME} doc Gtk-4.0 --outdir ./docs`, "Generate HTML documentation for Gtk-4.0"],
	[`${APP_NAME} doc '*' --outdir ./docs`, "Generate documentation for all locally installed GIR modules"],
	[
		`${APP_NAME} doc --merge --jsonDir ./json-output --outdir ./docs`,
		"Generate HTML from pre-generated JSON files (low memory)",
	],
];

const builder = createBuilder<DocCommandArgs>(docOptions, examples);

const handler = async (args: ConfigFlags) => {
	// HTML generation uses TypeDoc's shiki syntax highlighter which compiles
	// the oniguruma regex engine via `WebAssembly.compile(...)`. GJS 1.88.0
	// (SpiderMonkey 140) exposes `WebAssembly.compile` / `WebAssembly.instantiate`
	// as functions but the runtime throws `Error: WebAssembly Promise APIs not
	// supported in this runtime.` at the first call — a known upstream GJS gap.
	// Track at https://gitlab.gnome.org/GNOME/gjs/-/issues — once GJS ships the
	// Promise-based WASM APIs, this bail can be removed.
	if (typeof __GJS_BUNDLE__ !== "undefined") {
		process.stderr.write(
			"The 'doc' command is not supported in the GJS bundle.\n" +
				"TypeDoc's shiki highlighter calls WebAssembly.compile() to load\n" +
				"the oniguruma regex engine — GJS 1.88 throws 'WebAssembly Promise\n" +
				"APIs not supported in this runtime.'\n" +
				"Use Node.js instead: npx @ts-for-gir/cli doc\n",
		);
		process.exit(1);
	}
	const config = getOptionsGeneration(await load(args));
	if (config.merge) {
		if (!config.jsonDir) {
			throw new Error("--jsonDir is required when using --merge mode");
		}
		const generator = new HtmlDocGenerator(config, new NSRegistry());
		await generator.generateFromJson(config.jsonDir);
		return;
	}

	await runGenerationCommand(args, {
		generatorType: GeneratorType.HTML_DOC,
		loggerName: "DocCommand",
		configureRegistry: (registry) => {
			registry.registerFormatter("dts", new TypeScriptFormatter());
		},
	});
};

export const doc = {
	command,
	description,
	builder,
	handler,
	examples,
};
