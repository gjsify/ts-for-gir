/**
 * Helper to build yargs commands with common structure
 */

import type { ConfigFlags } from "@ts-for-gir/lib";
import type { Argv, BuilderCallback, Options } from "yargs";

export interface CommandDefinition {
	command: string;
	description: string;
	builder: BuilderCallback<unknown, ConfigFlags>;
	handler: (args: ConfigFlags) => Promise<void>;
	examples: ReadonlyArray<[string, string?]>;
}

/**
 * Creates a builder function for yargs commands
 */
export function createBuilder<TArgs>(
	options: Record<string, Options>,
	examples: ReadonlyArray<[string, string?]>,
): BuilderCallback<TArgs, ConfigFlags> {
	return (yargs: Argv<TArgs>) => {
		const optionNames = Object.keys(options);
		for (const optionName of optionNames) {
			yargs = yargs.option(optionName, options[optionName]);
		}
		return yargs.example(examples) as Argv<ConfigFlags>;
	};
}
