import type { ConfigFlags } from "@ts-for-gir/lib";
import type { BuilderCallback } from "yargs";
/**
 * Base interface for command definition structure
 */
export interface CommandDefinition<TArgs> {
	/** Command name and parameters */
	command: string;
	/** Command description */
	description: string;
	/** Builder function for yargs configuration */
	builder: BuilderCallback<TArgs, ConfigFlags>;
	/** Handler function for command execution */
	handler: (args: ConfigFlags) => Promise<void>;
	/** Example usage array */
	examples: ReadonlyArray<[string, string?]>;
}
