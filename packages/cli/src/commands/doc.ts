/**
 * Everything you need for the `ts-for-gir doc` command is located here
 */

import { GeneratorType } from "@ts-for-gir/generator-base";
import type { ConfigFlags } from "@ts-for-gir/lib";
import { docOptions } from "../config.ts";
import type { DocCommandArgs } from "../types/index.ts";
import { createBuilder } from "./command-builder.ts";
import { runGenerationCommand } from "./run-generation-command.ts";

const command = "doc [modules..]";

const description = "The HTML documentation generator is not yet implemented, but feel free to implement it 🤗";

const examples: ReadonlyArray<[string, string?]> = [];

const builder = createBuilder<DocCommandArgs>(docOptions, examples);

const handler = async (args: ConfigFlags) => {
	await runGenerationCommand(args, {
		generatorType: GeneratorType.HTML_DOC,
		loggerName: "DocCommand",
	});
};

export const doc = {
	command,
	description,
	builder,
	handler,
	examples,
};
