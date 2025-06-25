#!/usr/bin/env node
import yargs, { type CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";

import { copy, doc, generate, list } from "./commands/index.ts";
import { appName, usage } from "./config.ts";

void yargs(hideBin(process.argv))
	.scriptName(appName)
	.strict()
	.usage(usage)
	// TODO: Fix this
	.command(generate as unknown as CommandModule)
	.command(list as unknown as CommandModule)
	.command(copy as unknown as CommandModule)
	.command(doc as unknown as CommandModule)
	.demandCommand(1)
	.help().argv;
