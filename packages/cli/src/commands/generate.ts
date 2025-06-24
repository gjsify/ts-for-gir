/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { GeneratorType } from '@ts-for-gir/generator-base'
import type { ConfigFlags } from '@ts-for-gir/lib'
import { ERROR_NO_MODULES_FOUND, Formatter, Logger, NSRegistry } from '@ts-for-gir/lib'
import prettier from 'prettier'
import type { Argv, BuilderCallback } from 'yargs'
import { appName, generateOptions, getOptionsGeneration, load } from '../config.ts'
import { GenerationHandler } from '../generation-handler.ts'
import { ModuleLoader } from '../module-loader.ts'
import type { GenerateCommandArgs } from '../types/index.ts'

const command = 'generate [modules..]'

const description = 'Generates Typescript type definition .d.ts files from GIR for GJS'

const logger = new Logger(false, 'GenerateCommand')

const builder: BuilderCallback<GenerateCommandArgs, ConfigFlags> = (yargs: Argv<GenerateCommandArgs>) => {
    const optionNames = Object.keys(generateOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, generateOptions[optionName])
    }
    return yargs.example(examples) as Argv<ConfigFlags>
}

const handler = async (args: ConfigFlags) => {
    const config = await load(args)

    const generateConfig = getOptionsGeneration(config)
    const registry = new NSRegistry() // TODO: Use singleton

    // Register TypeScript formatter for .d.ts files
    registry.registerFormatter('dts', new TypeScriptFormatter())

    const moduleLoader = new ModuleLoader(generateConfig, registry)
    const { keep } = await moduleLoader.getModulesResolved(
        config.modules,
        config.ignore || [],
        config.ignoreVersionConflicts,
    )

    if (keep.length === 0) {
        logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
        return
    }

    moduleLoader.parse(keep)

    const tsForGir = new GenerationHandler(generateConfig, GeneratorType.TYPES, registry)

    const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module)

    await tsForGir.start(girModules)
}

const examples: ReadonlyArray<[string, string?]> = [
    [
        `${appName} generate`,
        `Run '${appName} generate' in your gjs project to generate typings for your project, pass the gir modules you need for your project`,
    ],
    [`${appName} generate Gtk*`, 'You can also use wild cards'],
    [`${appName} generate '*'`, 'If you want to parse all of your locally installed gir modules run'],
    [`${appName} generate --configName='.ts-for-gir.gtk4.rc.js`, 'Use a special config file'],
    [`${appName} generate --ignore=Gtk-4.0 xrandr-1.3`, 'Generate .d.ts. files but not for Gtk-4.0 and xrandr-1.3'],
]

class TypeScriptFormatter extends Formatter {
    format(input: string): Promise<string> {
        try {
            return prettier.format(input, {
                singleQuote: true,
                parser: 'typescript',
                printWidth: 120,
                tabWidth: 4,
            })
        } catch (error) {
            Logger.warn('[TypeScriptFormatter] Failed to format with prettier, returning original input', error)
            throw error
            // return Promise.resolve(input)
        }
    }
}

export const generate = {
    command,
    description,
    builder,
    handler,
    examples,
}
