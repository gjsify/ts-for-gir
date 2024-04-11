/**
 * Everything you need for the `ts-for-gir copy` command is located here
 */

import { Argv, BuilderCallback } from 'yargs'
import { copyFile, mkdir } from 'fs/promises'
import { basename, join } from 'path'
import { ModuleLoader } from '../module-loader.js'
import { Config } from '../config.js'
import { Logger, ERROR_NO_MODULES_FOUND, ResolveType } from '@ts-for-gir/lib'

import type { ConfigFlags, GirModuleResolvedBy } from '@ts-for-gir/lib'

const command = 'copy [modules..]'

const description = 'Scan for *.gir files and copy them to a new directory'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder: BuilderCallback<any, ConfigFlags> = (yargs: Argv<any>) => {
    const optionNames = Object.keys(Config.copyOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, Config.copyOptions[optionName])
    }
    return yargs.example(examples) as Argv<ConfigFlags>
}

const copyGirFile = async (args: ConfigFlags, depModule: GirModuleResolvedBy) => {
    if (!depModule.path) {
        Logger.danger(`- ${depModule.packageName} not found`)
        return
    }
    if (!args.outdir) {
        Logger.error(`outdir not found`)
        return
    }
    const filename = basename(depModule.path)
    const dest = join(args.outdir, filename)
    Logger.success(`Copy ${depModule.path} to ${dest}`)
    await copyFile(depModule.path, dest)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (args: ConfigFlags) => {
    const config = await Config.load(args)
    const generateConfig = Config.getGenerateConfig(config)
    const moduleLoader = new ModuleLoader(generateConfig)
    const { grouped, failed } = await moduleLoader.getModules(config.modules, config.ignore)
    const moduleGroups = Object.values(grouped)
    if (Object.keys(grouped).length === 0) {
        return Logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
    }

    if (!args.outdir) {
        Logger.error(`outdir not found`)
        return
    }

    const conflictModules = moduleGroups.filter((moduleGroup) => moduleGroup.hasConflict)

    const byHandModules = moduleGroups.filter(
        (moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.BY_HAND,
    )

    const depModules = moduleGroups.filter(
        (moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.DEPENDENCE,
    )

    await mkdir(args.outdir, { recursive: true }).catch((err) => {
        Logger.error(`Failed to copy gir files to ${args.outdir}: ${err}`)
    })

    Logger.info('\nSelected Modules:')
    for (const moduleGroup of byHandModules) {
        for (const depModule of moduleGroup.modules) {
            await copyGirFile(args, depModule)
        }
    }

    if (depModules.length > 0) {
        Logger.yellow('\nDependencies:')
        for (const moduleGroup of depModules) {
            for (const depModule of moduleGroup.modules) {
                await copyGirFile(args, depModule)
            }
        }
    }

    if (conflictModules.length > 0) {
        Logger.danger('\nConflicts:')
        for (const moduleGroup of conflictModules) {
            Logger.white(`- ${moduleGroup.namespace}`)
            for (const conflictModule of moduleGroup.modules) {
                Logger.white(`  - ${conflictModule.packageName}`)
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
    [`${Config.appName} copy -o ./gir`, `Copy found *.gir files to ./gir`],
    [
        `${Config.appName} copy -g /usr/share/gir-1.0 --ignore=Gtk-3.0 xrandr-1.3 -o ./gir`,
        'Copy all found *.gir files in /usr/share/gir-1.0 excluding Gtk-3.0 and xrandr-1.3 to ./gir',
    ],
]

export const copy = {
    command,
    description,
    builder,
    handler,
    examples,
}
