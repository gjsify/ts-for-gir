/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Argv, BuilderCallback } from 'yargs'
import { ERROR_NO_MODULES_FOUND, Logger } from '@ts-for-gir/lib'
import { GeneratorType } from '@ts-for-gir/generator-base'
import { GenerationHandler } from '../generation-handler.js'
import { Config } from '../config.js'
import { ModuleLoader } from '../module-loader.js'

import type { ConfigFlags } from '@ts-for-gir/lib'

const command = 'generate [modules..]'

const description = 'Generates .d.ts files from GIR for GJS or node-gtk'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder: BuilderCallback<any, ConfigFlags> = (yargs: Argv<any>) => {
    const optionNames = Object.keys(Config.generateOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, Config.generateOptions[optionName])
    }
    return yargs.example(examples) as Argv<ConfigFlags>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (args: ConfigFlags) => {
    const config = await Config.load(args)

    for (const env of config.environments) {
        const generateConfig = Config.getGenerateConfig(config, env)
        const moduleLoader = new ModuleLoader(generateConfig)
        const { keep, grouped } = await moduleLoader.getModulesResolved(
            config.modules,
            config.ignore || [],
            config.ignoreVersionConflicts,
        )
        if (keep.length === 0) {
            return Logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
        }
        const tsForGir = new GenerationHandler(generateConfig, GeneratorType.TYPES)

        const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module)
        const girModulesGrouped = Object.values(grouped)

        await tsForGir.start(girModules, girModulesGrouped)
    }
}

const examples: ReadonlyArray<[string, string?]> = [
    [
        `${Config.appName} generate`,
        `Run '${Config.appName} generate' in your gjs or node-gtk project to generate typings for your project, pass the gir modules you need for your project`,
    ],
    [`${Config.appName} generate Gtk*`, 'You can also use wild cards'],
    [`${Config.appName} generate '*'`, 'If you want to parse all of your locally installed gir modules run'],
    [`${Config.appName} generate '*' -e gjs`, 'Generate .d.ts. files only for gjs'],
    [`${Config.appName} generate '*' -e node`, 'Generate .d.ts. files only for node'],
    [`${Config.appName} generate --configName='.ts-for-gir.gtk4.rc.js`, 'Use a special config file'],
    [
        `${Config.appName} generate --ignore=Gtk-4.0 xrandr-1.3`,
        'Generate .d.ts. files but not for Gtk-4.0 and xrandr-1.3',
    ],
]

export const generate = {
    command,
    description,
    builder,
    handler,
    examples,
}
