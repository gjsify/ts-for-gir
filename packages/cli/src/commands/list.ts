/**
 * Everything you need for the `ts-for-gir list` command is located here
 */

import type { ConfigFlags } from '@ts-for-gir/lib'
import { ERROR_NO_MODULES_FOUND, Logger, NSRegistry, ResolveType } from '@ts-for-gir/lib'
import type { Argv, BuilderCallback } from 'yargs'
import { Config } from '../config.ts'
import { ModuleLoader } from '../module-loader.ts'

const command = 'list [modules..]'

const description = 'Lists all available GIR modules'

const builder: BuilderCallback<any, ConfigFlags> = (yargs: Argv<any>) => {
    const optionNames = Object.keys(Config.listOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, Config.listOptions[optionName])
    }
    return yargs.example(examples) as Argv<ConfigFlags>
}

const handler = async (args: ConfigFlags) => {
    const config = await Config.load(args)
    const generateConfig = Config.getOptionsGeneration(config)
    const registry = new NSRegistry() // TODO: Use singleton
    const moduleLoader = new ModuleLoader(generateConfig, registry)
    const { grouped, failed } = await moduleLoader.getModules(config.modules, config.ignore)
    const moduleGroups = Object.values(grouped)
    if (Object.keys(grouped).length === 0) {
        return Logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
    }

    const conflictModules = moduleGroups.filter((moduleGroup) => moduleGroup.hasConflict)

    const byHandModules = moduleGroups.filter(
        (moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.BY_HAND,
    )

    const depModules = moduleGroups.filter(
        (moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.DEPENDENCE,
    )

    Logger.info('\nSearch for gir files in:')
    for (const dir of config.girDirectories) {
        Logger.white(`- ${dir}`)
    }

    Logger.info('\nSelected Modules:')
    for (const moduleGroup of byHandModules) {
        for (const depModule of moduleGroup.modules) {
            Logger.white(`- ${depModule.packageName}`)
            Logger.gray(`  - ${depModule.path}`)
        }
    }

    if (depModules.length > 0) {
        Logger.yellow('\nDependencies:')
        for (const moduleGroup of depModules) {
            for (const depModule of moduleGroup.modules) {
                Logger.white(`- ${depModule.packageName}`)
                Logger.gray(`- ${depModule.path}`)
            }
        }
    }

    if (conflictModules.length > 0) {
        Logger.danger('\nConflicts:')
        for (const moduleGroup of conflictModules) {
            Logger.white(`- ${moduleGroup.namespace}`)
            for (const conflictModule of moduleGroup.modules) {
                Logger.white(`  - ${conflictModule.packageName}`)
                Logger.gray(`  - ${conflictModule.path}`)
            }
        }
    }

    if (failed.length > 0) {
        Logger.danger('\nDependencies not found:')
        for (const fail of failed) {
            Logger.white(`- ${fail}`)
        }
    }
}

const examples: ReadonlyArray<[string, string?]> = [
    [`${Config.appName} list -g ./vala-girs/gir-1.0`, 'Lists all available GIR modules in ./vala-girs/gir-1.0'],
    [
        `${Config.appName} list --ignore=Gtk-3.0 xrandr-1.3`,
        'Lists all available GIR modules in /usr/share/gir-1.0 but not Gtk-3.0 and xrandr-1.3',
    ],
]

export const list = {
    command,
    description,
    builder,
    handler,
    examples,
}
