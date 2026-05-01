import { APP_NAME, APP_USAGE, APP_VERSION } from "@ts-for-gir/lib";
import yargs, { type CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";

import { analyze, copy, create, doc, generate, json, list } from "./commands/index.ts";

try {
	await yargs(hideBin(process.argv))
		.scriptName(APP_NAME)
		.strict()
		.usage(APP_USAGE)
		.version(APP_VERSION)
		// Disable yargs's internal `process.exit` and route both success
		// and failure through `parseAsync` + `process.exitCode` so async
		// command handlers complete and stdout drains before the runtime
		// (Node or the gjsify Node-compat loader on GJS) tears down.
		.exitProcess(false)
		.fail(false)
		// TODO: Fix this
		.command(analyze as unknown as CommandModule)
		.command(create as unknown as CommandModule)
		.command(generate as unknown as CommandModule)
		.command(json as unknown as CommandModule)
		.command(list as unknown as CommandModule)
		.command(copy as unknown as CommandModule)
		.command(doc as unknown as CommandModule)
		.demandCommand(1)
		.help()
		.parseAsync();
} catch (err) {
	const message = err instanceof Error ? err.message : String(err);
	process.stderr.write(`${message}\n`);
	process.exitCode = 1;
}
