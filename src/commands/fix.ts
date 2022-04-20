/**
 * Everything you need for the `ts-for-gir list` command is located here
 */

import { Argv } from 'yargs'

import { Config } from '../config.js'
import { ConfigFlags } from '../types/index.js'
import { tsAutoFix } from '../autofix/index.js'
import { getEnvironmentDir } from '../utils.js'

const command = 'fix [modules..]'

const description = 'Automatically fix TS Errors when codefixes are available'

const builder = (yargs: Argv) => {
    return yargs
        .option('modules', Config.listOptions.modules)
        .option('environments', Config.generateOptions.environments)
        .option('girDirectories', Config.listOptions.girDirectories)
        .option('outdir', Config.generateOptions.outdir)
        .option('ignore', Config.listOptions.ignore)
        .option('environments', Config.generateOptions.environments)
        .option('verbose', Config.listOptions.verbose)
        .option('configName', Config.listOptions.configName)
        .option('ignoreConflicts', Config.generateOptions.ignoreConflicts)
        .example(examples)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (args: any /* TODO */) => {
    const config = await Config.load(args as ConfigFlags)

    // const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module)

    // TODO move
    if (config.outdir) {
        for (const env of config.environments) {
            const rootDir = getEnvironmentDir(env, config.outdir)

            console.log(`Start fix typescript errors...`)

            tsAutoFix({
                compilerOptionsOverrides: {
                    rootDir,
                },
                rootNames: [rootDir + '/Gtk-4.0.d.ts'], // TODO
            })
        }
    }
}

const examples: ReadonlyArray<[string, string?]> = [
    [`${Config.appName} list -g ./vala-girs/gir-1.0`, `Lists all available GIR modules in ./vala-girs/gir-1.0`],
    [
        `${Config.appName} list --ignore=Gtk-3.0 xrandr-1.3`,
        'Lists all available GIR modules in /usr/share/gir-1.0 but not Gtk-3.0 and xrandr-1.3',
    ],
]

export const fix = {
    command,
    description,
    builder,
    handler,
    examples,
}
