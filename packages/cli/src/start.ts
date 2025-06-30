#!/usr/bin/env -S node --experimental-specifier-resolution=node --experimental-strip-types --experimental-transform-types --no-warnings
import yargs, { type CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";

import { analyze, copy, doc, generate, json, list } from "./commands/index.ts";
import { appName, usage } from "./config.ts";

void yargs(hideBin(process.argv))
	.scriptName(appName)
	.strict()
	.usage(usage)
	// TODO: Fix this
	.command(analyze as unknown as CommandModule)
	.command(generate as unknown as CommandModule)
	.command(json as unknown as CommandModule)
	.command(list as unknown as CommandModule)
	.command(copy as unknown as CommandModule)
	.command(doc as unknown as CommandModule)
	.demandCommand(1)
	.help().argv;
