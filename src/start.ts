import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { generate, list } from './commands'
import { Config } from './config'

void yargs(hideBin(process.argv))
    .scriptName(Config.appName)
    .strict()
    .usage(Config.usage)
    .command(generate.command, generate.description, generate.builder, generate.handler)
    .command(list.command, list.description, list.builder, list.handler)
    .demandCommand(1)
    .help().argv
