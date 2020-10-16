/**
 * Default values, parse the config file and handle CLI flags
 */

import { flags } from '@oclif/command'
import { cosmiconfig, Options as ConfigSearchOptions } from 'cosmiconfig'
import Path from 'path'
import { Utils } from './utils'
import { Environment, BuildType, UserConfig, ConfigFlags, UserConfigLoadResult, GenerateConfig } from './types'
import { promises as fs } from 'fs'
import { Logger } from './logger'

export class Config {
    static appName = 'ts-for-gir'

    static configFilePath = Path.join(process.cwd(), '.ts-for-girrc.js')

    /**
     * Default cli flag and argument values
     */
    static defaults = {
        environments: ['gjs', 'node'],
        pretty: false,
        print: false,
        outdir: '@types',
        girDirectories: ['/usr/share/gir-1.0'],
        modules: ['*'],
        ignore: [],
        verbose: true,
        ignoreConflicts: false,
    }

    /**
     * CLI flags used in commands/generate.ts and commands/list.ts
     */
    static defaultCliFlags = {
        help: flags.help({ char: 'h' }),
        girDirectories: flags.string({
            char: 'g',
            description: 'GIR directory',
            multiple: true,
            default: Config.defaults.girDirectories,
        }),
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
            default: Config.defaults.ignore,
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
        verbose: flags.boolean({
            char: 'v',
            description: 'Switch on/off the verbose mode',
            default: Config.defaults.verbose,
        }),
        ignoreConflicts: flags.boolean({
            description: 'Do not ask for package versions if multiple versions are found',
            default: Config.defaults.ignoreConflicts,
        }),
        print: flags.boolean({
            char: 'p',
            description: 'print the output to console and create no files',
            default: Config.defaults.print,
        }),
        configName: flags.string({
            description: 'name of the config if you want to use a different name',
        }),
    }

    /**
     * CLI arguments used in commands/generate.ts and commands/list.ts
     */
    static defaultCliArgs = {
        modules: {
            name: 'modules',
            description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
            required: true,
            default: Config.defaults.modules[0],
        },
    }

    /**
     * Overwrites values in the user config
     * @param configsToAdd
     */
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
            case '.jsson':
                writeConfigString = `${JSON.stringify(configToStore, null, 4)}`
                break
            default:
                Logger.error('Only configs with the extension .js and .json are currently supported. Do nothing')
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

    public static getGenerateConfig(config: UserConfig, environment: Environment = 'gjs'): GenerateConfig {
        const defaultBuildType = environment === 'gjs' ? 'lib' : 'types'
        const generateConfig: GenerateConfig = {
            environment: environment,
            girDirectories: config.girDirectories,
            outdir: config.outdir,
            pretty: config.pretty,
            verbose: config.verbose,
            buildType: config.buildType || defaultBuildType,
        }
        return generateConfig
    }

    /**
     * Loads the values of the config file and concatenate them with passed cli flags / arguments.
     * The values from config file  are prefered if the cli flag value is the default (and so not set / overwritten)
     * @param flags
     * @param modules
     */
    public static async load(flags: ConfigFlags, modules: string[]): Promise<UserConfig> {
        const configFile = await this.loadConfigFile(flags.configName)
        const config: UserConfig = {
            environments: flags.environments as Environment[],
            buildType: flags.buildType as BuildType | undefined,
            verbose: flags.verbose,
            ignoreConflicts: flags.ignoreConflicts,
            pretty: flags.pretty,
            print: flags.print,
            outdir: flags.outdir,
            girDirectories: flags.girDirectories,
            ignore: flags.ignore,
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
            if (
                config.girDirectories === Config.defaultCliFlags.girDirectories.default &&
                configFile.config.girDirectories
            ) {
                config.girDirectories = configFile.config.girDirectories
            }
            if (
                (!config.ignore || config.ignore.length <= 0 || Utils.isEqual(config.ignore, Config.defaults.ignore)) &&
                configFile.config.ignore
            ) {
                config.ignore = configFile.config.ignore
            }
            if (
                (config.modules.length <= 0 || Utils.isEqual(config.modules, Config.defaults.modules)) &&
                configFile.config.modules
            ) {
                config.modules = configFile.config.modules
            }
        }
        return config
    }
}
