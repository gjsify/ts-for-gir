#!/usr/bin/env node --experimental-specifier-resolution=node --experimental-strip-types --experimental-transform-types --no-warnings
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { generate, list, doc, copy } from './commands/index.ts'
import { Config } from './config.ts'

void yargs(hideBin(process.argv))
    .scriptName(Config.appName)
    .strict()
    .usage(Config.usage)
    .command(generate.command, generate.description, generate.builder, generate.handler)
    .command(list.command, list.description, list.builder, list.handler)
    .command(copy.command, copy.description, copy.builder, copy.handler)
    .command(doc.command, doc.description, doc.builder, doc.handler)
    .demandCommand(1)
    .help().argv
