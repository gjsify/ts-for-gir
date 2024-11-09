/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Argv, BuilderCallback } from 'yargs'
import { ERROR_NO_MODULES_FOUND, Logger } from '@ts-for-gir/lib'
import { GeneratorType } from '@ts-for-gir/generator-base'
import { GenerationHandler } from '../generation-handler.js'
import { Config } from '../config.js'
import { ModuleLoader } from '../module-loader.js'
import prettier from 'prettier'

import type { ConfigFlags } from '@ts-for-gir/lib'
import { Formatter } from '@ts-for-gir/lib'

const command = 'generate [modules..]'

const description = 'Generates Typescript type definition .d.ts files from GIR for GJS'

 
const builder: BuilderCallback<any, ConfigFlags> = (yargs: Argv<any>) => {
    const optionNames = Object.keys(Config.generateOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, Config.generateOptions[optionName])
    }
    return yargs.example(examples) as Argv<ConfigFlags>
}

 
const handler = async (args: ConfigFlags) => {
    const config = await Config.load(args)

    const generateConfig = Config.getOptionsGeneration(config)
    const moduleLoader = new ModuleLoader(generateConfig)
    const { keep } = await moduleLoader.getModulesResolved(
        config.modules,
        config.ignore || [],
        config.ignoreVersionConflicts,
    )

    if (keep.length === 0) {
        return Logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
    }

    moduleLoader.parse(keep)

    const tsForGir = new GenerationHandler(generateConfig, GeneratorType.TYPES)

    const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module)

    moduleLoader.dependencyManager.registerFormatter('dts', new TypeScriptFormatter())
    await tsForGir.start(girModules, moduleLoader.dependencyManager)
}

const examples: ReadonlyArray<[string, string?]> = [
    [
        `${Config.appName} generate`,
        `Run '${Config.appName} generate' in your gjs project to generate typings for your project, pass the gir modules you need for your project`,
    ],
    [`${Config.appName} generate Gtk*`, 'You can also use wild cards'],
    [`${Config.appName} generate '*'`, 'If you want to parse all of your locally installed gir modules run'],
    [`${Config.appName} generate --configName='.ts-for-gir.gtk4.rc.js`, 'Use a special config file'],
    [
        `${Config.appName} generate --ignore=Gtk-4.0 xrandr-1.3`,
        'Generate .d.ts. files but not for Gtk-4.0 and xrandr-1.3',
    ],
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
            return Promise.resolve(input)
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
