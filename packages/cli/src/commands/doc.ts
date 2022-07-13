/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Argv } from 'yargs'

import { GenerationHandler } from '../generation-handler.js'
import { Config } from '../config.js'
import { ModuleLoader } from '../module-loader.js'
import { ConfigFlags, GeneratorType } from '../types/index.js'
import { Logger } from '../logger.js'
import { ERROR_NO_MODULES_FOUND } from '../messages.js'

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
        .option('ignoreVersionConflicts', Config.generateOptions.ignoreVersionConflicts)
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
                config.ignoreVersionConflicts,
            )
            if (keep.length === 0) {
                return Logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
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
