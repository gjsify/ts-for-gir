/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Argv } from 'yargs'
import { Logger, ERROR_NO_MODULES_FOUND } from '@ts-for-gir/lib'
import { GeneratorType } from '@ts-for-gir/generator-base'
import { GenerationHandler } from '../generation-handler.js'
import { Config } from '../config.js'
import { ModuleLoader } from '../module-loader.js'

import type { ConfigFlags } from '@ts-for-gir/lib'

const command = 'doc [modules..]'

const description = 'The HTML documentation generator is not yet implemented, but feel free to implement it 🤗'

const builder = (yargs: Argv) => {
    const optionNames = Object.keys(Config.docOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, Config.docOptions[optionName])
    }
    return yargs.example(examples)
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
