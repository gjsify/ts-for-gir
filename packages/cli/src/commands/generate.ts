/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { spawn } from 'node:child_process'
import { GeneratorType } from '@ts-for-gir/generator-base'
import type { ConfigFlags } from '@ts-for-gir/lib'
import { ERROR_NO_MODULES_FOUND, Formatter, Logger, NSRegistry } from '@ts-for-gir/lib'
import type { Argv, BuilderCallback } from 'yargs'
import { Config } from '../config.ts'
import { GenerationHandler } from '../generation-handler.ts'
import { ModuleLoader } from '../module-loader.ts'
import type { GenerateCommandArgs } from '../types/index.ts'

const command = 'generate [modules..]'

const description = 'Generates Typescript type definition .d.ts files from GIR for GJS'

const builder: BuilderCallback<GenerateCommandArgs, ConfigFlags> = (yargs: Argv<GenerateCommandArgs>) => {
    const optionNames = Object.keys(Config.generateOptions)
    for (const optionName of optionNames) {
        yargs = yargs.option(optionName, Config.generateOptions[optionName])
    }
    return yargs.example(examples) as Argv<ConfigFlags>
}

const handler = async (args: ConfigFlags) => {
    const config = await Config.load(args)

    const generateConfig = Config.getOptionsGeneration(config)
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
        return Logger.error(ERROR_NO_MODULES_FOUND(config.girDirectories))
    }

    moduleLoader.parse(keep)

    const tsForGir = new GenerationHandler(generateConfig, GeneratorType.TYPES, registry)

    const girModules = Array.from(keep).map((girModuleResolvedBy) => girModuleResolvedBy.module)

    await tsForGir.start(girModules)
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
    async format(input: string): Promise<string> {
        try {
            // Use Biome for formatting TypeScript code
            const biomeProcess = spawn('biome', ['format', '--stdin-file-path=temp.ts'], {
                stdio: ['pipe', 'pipe', 'pipe'],
            })

            let output = ''
            let error = ''

            biomeProcess.stdout.on('data', (data) => {
                output += data.toString()
            })

            biomeProcess.stderr.on('data', (data) => {
                error += data.toString()
            })

            biomeProcess.stdin.write(input)
            biomeProcess.stdin.end()

            return new Promise((resolve, reject) => {
                biomeProcess.on('close', (code) => {
                    if (code === 0) {
                        resolve(output)
                    } else {
                        Logger.warn('[TypeScriptFormatter] Biome formatting failed, returning original input', error)
                        resolve(input) // Fallback to original input
                    }
                })

                biomeProcess.on('error', (err) => {
                    Logger.warn('[TypeScriptFormatter] Failed to spawn biome process, returning original input', err)
                    resolve(input) // Fallback to original input
                })
            })
        } catch (error) {
            Logger.warn('[TypeScriptFormatter] Failed to format with Biome, returning original input', error)
            return input
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
