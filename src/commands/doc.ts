/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Argv } from 'yargs'

import { GenerationHandler } from '../generation-handler.js'
import { Config } from '../config.js'
import { ModuleLoader } from '../module-loader.js'
import { ConfigFlags, GeneratorType } from '../types/index.js'
import { Logger } from '../logger.js'

const command = 'doc [modules..]'

const description = 'The HTML documentation generator is not yet implemented, but feel free to implement it 🤗'

const builder = (yargs: Argv) => {
    return yargs
        .option('modules', Config.generateOptions.modules)
        .option('girDirectories', Config.generateOptions.girDirectories)
        .option('outdir', Config.generateOptions.outdir)
        .option('environments', Config.generateOptions.environments)
        .option('ignore', Config.generateOptions.ignore)
        .option('verbose', Config.generateOptions.verbose)
        .option('ignoreConflicts', Config.generateOptions.ignoreConflicts)
        .option('configName', Config.generateOptions.configName)
        .example(examples)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (args: any /* TODO */) => {
    const config = await Config.load(args as ConfigFlags)

    for (let i = 0; i < config.environments.length; i++) {
        if (config.environments[i]) {
            const generateConfig = Config.getGenerateConfig(config, config.environments[i])
            const moduleLoader = new ModuleLoader(generateConfig)
            const { keep, grouped } = await moduleLoader.getModulesResolved(
                config.modules,
                config.ignore || [],
                config.ignoreConflicts,
            )
            if (keep.length === 0) {
                return Logger.error(
                    'No module found!\nPlease make sure that you have installed the necessary gir files.\nFor example with "sudo apt install libgtk-3-dev" for Gtk3 on Ubuntu or "sudo dnf install gtk3-devel" on Fedora.',
                )
            }
            const tsForGir = new GenerationHandler(generateConfig, GeneratorType.HTML_DOC)

            await tsForGir.start(
                Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module),
                Object.values(grouped),
            )
        }
    }
}

const examples: ReadonlyArray<[string, string?]> = []

export const doc = {
    command,
    description,
    builder,
    handler,
    examples,
}