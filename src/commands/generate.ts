/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Argv } from 'yargs'

import { Generator } from '../generator'
import { Config } from '../config'
import { ModuleLoader } from '../module-loader'
import { ConfigFlags } from '../types'
import { Logger } from '../logger'

const command = 'generate [modules..]'

const description = 'Generates .d.ts files from GIR for gjs or node-gtk'

const builder = (yargs: Argv) => {
    return yargs
        .option('modules', Config.generateOptions.modules)
        .option('girDirectories', Config.generateOptions.girDirectories)
        .option('outdir', Config.generateOptions.outdir)
        .option('environments', Config.generateOptions.environments)
        .option('ignore', Config.generateOptions.ignore)
        .option('buildType', Config.generateOptions.buildType)
        .option('pretty', Config.generateOptions.pretty)
        .option('verbose', Config.generateOptions.verbose)
        .option('ignoreConflicts', Config.generateOptions.ignoreConflicts)
        .option('print', Config.generateOptions.print)
        .option('configName', Config.generateOptions.configName)
        .option('exportDefault', Config.generateOptions.exportDefault)
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
            const tsForGir = new Generator(generateConfig)

            await tsForGir.start(
                Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module),
                Object.values(grouped),
            )
        }
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
        `${Config.appName} generate --ignore=Gtk-3.0 xrandr-1.3`,
        'Generate .d.ts. files but not for Gtk-3.0 and xrandr-1.3',
    ],
]

export const generate = {
    command,
    description,
    builder,
    handler,
    examples,
}
