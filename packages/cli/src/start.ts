#!/usr/bin/env -S node --experimental-specifier-resolution=node --experimental-strip-types --experimental-transform-types --no-warnings
import { APP_NAME, APP_USAGE, APP_VERSION } from "@ts-for-gir/lib";
import yargs, { type CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";

import { analyze, copy, doc, generate, json, list } from "./commands/index.ts";

void yargs(hideBin(process.argv))
	.scriptName(APP_NAME)
	.strict()
	.usage(APP_USAGE)
	.version(APP_VERSION)
	// TODO: Fix this
	.command(analyze as unknown as CommandModule)
	.command(generate as unknown as CommandModule)
	.command(json as unknown as CommandModule)
	.command(list as unknown as CommandModule)
	.command(copy as unknown as CommandModule)
	.command(doc as unknown as CommandModule)
	.demandCommand(1)
	.help().argv;
