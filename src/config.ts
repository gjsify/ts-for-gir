/**
 * Default values, parse the config file and handle CLI flags
 */

import { flags } from '@oclif/command'
import { cosmiconfig, Options as ConfigSearchOptions } from 'cosmiconfig'
import Path from 'path'
import { Utils } from './utils'
import { Environment, BuildType, UserConfig, UserConfigLoadResult } from './types'
import { promises as fs } from 'fs'
import { Logger } from './logger'

export class Config {
    static appName = 'ts-for-gir'

    static configFilePath = Path.join(process.cwd(), '.ts-for-girrc.js')

    static defaults = {
        environments: ['gjs', 'node'],
        pretty: false,
        print: false,
        outdir: '@types',
        girDirectory: '/usr/share/gir-1.0',
        modules: ['*'],
    }

    static defaultCliFlags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-g, --gir-directory=VALUE)
        girDirectory: flags.string({ char: 'g', description: 'GIR directory', default: Config.defaults.girDirectory }),
        outdir: flags.string({
            char: 'o',
            description: 'directory to output to',
            default: Config.defaults.outdir,
        }),
        environments: flags.string({
            char: 'e',
            description: 'javascript environment',
            multiple: true,
            options: ['gjs', 'node'],
            default: Config.defaults.environments,
        }),
        ignore: flags.string({
            char: 'i',
            description: 'modules that should be ignored',
            multiple: true,
        }),
        buildType: flags.string({
            char: 'b',
            description: '[default for gjs: lib, default for node: types] Force the definitions generation type',
            multiple: false,
            options: ['lib', 'types'],
        }),
        pretty: flags.boolean({
            description: 'prettifies the generated .d.ts files',
            default: Config.defaults.pretty,
        }),
        verbose: flags.boolean({ char: 'v', description: 'verbosity', default: true }),
        print: flags.boolean({
            char: 'p',
            description: 'print the output to console and create no files',
            default: Config.defaults.print,
        }),
        configName: flags.string({
            description: 'name of the config if you want to use a different name',
        }),
    }

    static defaultCliArgs = {
        modules: {
            name: 'modules',
            description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
            required: true,
            default: Config.defaults.modules[0],
        },
    }

    public static async addToConfig(configsToAdd: Partial<UserConfig>): Promise<void> {
        const userConfig = await this.loadConfigFile()
        const path = userConfig?.filepath || this.configFilePath
        const configToStore = {}
        Utils.merge(configToStore, userConfig?.config || {}, configsToAdd)
        const fileExtension = Path.extname(path)
        let writeConfigString = ''
        switch (fileExtension) {
            case '.js':
                writeConfigString = `module.exports = ${JSON.stringify(configToStore, null, 4)}`
                break
            default:
                Logger.error('Only configs with the extension .js are currently supported. Do nothing')
                break
        }
        if (writeConfigString && path) {
            return fs.writeFile(path, writeConfigString)
        }
    }

    /**
     * The user can create a `.ts-for-girrc` file for his default configs,
     * this method load this config file an returns the user configuration
     * @param configName If the user uses a custom config file name
     */
    private static async loadConfigFile(configName?: string): Promise<UserConfigLoadResult | null> {
        const configSearchOptions: ConfigSearchOptions = {}
        if (configName) {
            configSearchOptions.searchPlaces = [configName]
        }
        const userConfig: UserConfigLoadResult | null = await cosmiconfig(Config.appName, configSearchOptions).search()
        if (userConfig?.filepath) {
            Config.configFilePath = userConfig?.filepath
        }
        return userConfig
    }

    /**
     * Loads the values of the config file and concatenate them with passed cli flags.
     * The values from config file  are prefered if the cli flag value is the default (and so not set / overwritten)
     * @param flags
     * @param modules
     */
    public static async load(flags, modules): Promise<UserConfig> {
        const configFile = await this.loadConfigFile(flags.configName)
        const config: UserConfig = {
            environments: flags.environments as Environment[],
            buildType: flags.buildType as BuildType | undefined,
            verbose: flags.verbose,
            pretty: flags.pretty,
            print: flags.print,
            outdir: flags.outdir,
            girDirectory: flags.girDirectory,
            modules,
        }

        if (configFile) {
            if (Utils.isEqual(config.environments, Config.defaults.environments) && configFile.config.environments) {
                config.environments = configFile.config.environments
            }
            if (configFile.config.buildType) {
                config.buildType = configFile.config.buildType
            }
            if (
                config.verbose === Config.defaultCliFlags.verbose.default &&
                typeof configFile.config.verbose === 'boolean'
            ) {
                config.verbose = configFile.config.verbose
            }
            if (
                config.pretty === Config.defaultCliFlags.pretty.default &&
                typeof configFile.config.pretty === 'boolean'
            ) {
                config.pretty = configFile.config.pretty
            }
            if (config.print === Config.defaultCliFlags.print.default && typeof configFile.config.print === 'boolean') {
                config.print = configFile.config.print
            }
            if (config.outdir === Config.defaultCliFlags.outdir.default && configFile.config.outdir) {
                config.outdir = config.print ? null : configFile.config.outdir
            }
            if (config.girDirectory === Config.defaultCliFlags.girDirectory.default && configFile.config.girDirectory) {
                config.girDirectory = configFile.config.girDirectory
            }
            if (Utils.isEqual(config.modules, Config.defaults.modules) && configFile.config.modules) {
                config.modules = configFile.config.modules
            }
        }
        return config
    }
}
