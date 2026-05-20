import { APP_NAME, APP_USAGE, APP_VERSION } from "@ts-for-gir/lib";
import yargs, { type CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";

import { analyze, copy, create, doc, generate, json, list, selfUpdate } from "./commands/index.ts";

try {
	const cli = yargs(hideBin(process.argv));
	await cli
		.scriptName(APP_NAME)
		.strict()
		.usage(APP_USAGE)
		.version(APP_VERSION)
		// Use the full terminal width for help. yargs's default caps at 80
		// (`Math.min(80, process.stdout.columns)`); we explicitly opt into
		// the real terminal width so long option/description lines wrap at
		// the actual terminal edge instead of an arbitrary 80-col limit.
		// Under GJS, `process.stdout.columns` is backed by
		// `@gjsify/terminal-native` (ioctl TIOCGWINSZ) when the typelib is
		// on `GI_TYPELIB_PATH` — the install.js launcher imports those env
		// vars from the gjsify global install when present.
		.wrap(cli.terminalWidth())
		// Disable yargs's internal `process.exit` and route both success
		// and failure through `parseAsync` + an explicit `process.exit` so
		// async command handlers complete and stdout drains before the
		// runtime (Node or the gjsify Node-compat loader on GJS, which
		// keeps a GLib main loop alive that would otherwise prevent the
		// process from exiting after main() returns) tears down.
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
		.command(selfUpdate as unknown as CommandModule)
		.demandCommand(1)
		.help()
		.parseAsync();
	process.exit(0);
} catch (err) {
	const message = err instanceof Error ? err.message : String(err);
	process.stderr.write(`${message}\n`);
	process.exit(1);
}
