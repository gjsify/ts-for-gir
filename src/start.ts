#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { generate, list, doc, fix } from './commands/index.js'
import { Config } from './config.js'

void yargs(hideBin(process.argv))
    .scriptName(Config.appName)
    .strict()
    .usage(Config.usage)
    .command(generate.command, generate.description, generate.builder, generate.handler)
    .command(list.command, list.description, list.builder, list.handler)
    .command(doc.command, doc.description, doc.builder, doc.handler)
    .command(fix.command, fix.description, fix.builder, fix.handler)
    .demandCommand(1)
    .help().argv
