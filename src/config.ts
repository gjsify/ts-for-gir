/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * Default values, parse the config file and handle CLI flags
 */
import { Options } from 'yargs'
import { cosmiconfig, Options as ConfigSearchOptions } from 'cosmiconfig'
import Path from 'path'
import OS from 'os'
import { Utils } from './utils.js'
import type { Environment, UserConfig, ConfigFlags, UserConfigLoadResult, GenerateConfig } from './types/index.js'
import { promises as fs } from 'fs'
import { Logger } from './logger.js'

export class Config {
    static appName = 'ts-for-gir'

    static usage = 'Typescript .d.ts generator from GIR for gjs or node-gtk'

    static configFilePath = Path.join(process.cwd(), '.ts-for-girrc.js')

    /**
     * Default cli flag and argument values
     */
    static defaults = {
        environments: ['gjs', 'node'],
        pretty: false,
        print: false,
        outdir: './@types',
        girDirectories: [OS.platform() === 'darwin' ? '/usr/local/share/gir-1.0' : '/usr/share/gir-1.0'],
        modules: ['*'],
        ignore: [],
        verbose: true,
        ignoreConflicts: false,
        exportDefault: false,
        buildType: 'lib',
        noComments: false,
    }

    /**
     * CLI options used in commands/generate.ts and commands/list.ts
     */
    static options = {
        modules: {
            name: 'modules',
            description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
            array: true,
            default: Config.defaults.modules,
            normalize: true,
        } as Options,
        girDirectories: {
            type: 'string',
            alias: 'g',
            description: 'GIR directories',
            array: true,
            default: Config.defaults.girDirectories,
            normalize: true,
        } as Options,
        outdir: {
            type: 'string',
            alias: 'o',
            description: 'directory to output to',
            default: Config.defaults.outdir,
            normalize: true,
        } as Options,
        environments: {
            type: 'string',
            alias: 'e',
            description: 'javascript environment',
            array: true,
            choices: ['gjs', 'node'],
            default: Config.defaults.environments,
            normalize: true,
        } as Options,
        ignore: {
            type: 'string',
            alias: 'i',
            description: 'modules that should be ignored',
            array: true,
            default: Config.defaults.ignore,
            normalize: true,
        } as Options,
        buildType: {
            type: 'string',
            alias: 'b',
            description: 'definitions generation type',
            array: false,
            choices: ['lib', 'types'],
            default: Config.defaults.buildType,
            normalize: true,
        } as Options,
        pretty: {
            type: 'boolean',
            description: 'prettifies the generated .d.ts files',
            default: Config.defaults.pretty,
            normalize: true,
        } as Options,
        verbose: {
            type: 'boolean',
            alias: 'v',
            description: 'Switch on/off the verbose mode',
            default: Config.defaults.verbose,
            normalize: true,
        } as Options,
        ignoreConflicts: {
            type: 'boolean',
            description: 'Do not ask for package versions if multiple versions are found',
            default: Config.defaults.ignoreConflicts,
            normalize: true,
        } as Options,
        print: {
            type: 'boolean',
            alias: 'p',
            description: 'print the output to console and create no files',
            default: Config.defaults.print,
            normalize: true,
        } as Options,
        configName: {
            type: 'string',
            description: 'name of the config if you want to use a different name',
            normalize: true,
        } as Options,
        exportDefault: {
            type: 'boolean',
            alias: 'd',
            description: 'Export all symbols for each module as a single entity using ES6 export default',
            default: Config.defaults.exportDefault,
            normalize: true,
        } as Options,
        noComments: {
            type: 'boolean',
            alias: 'n',
            description: 'Do not generate documentation comments',
            default: Config.defaults.noComments,
            normalize: true,
        } as Options,
    }

    /**
     * CLI flags used in commands/generate.ts
     */
    static generateOptions = {
        modules: this.options.modules,
        girDirectories: this.options.girDirectories,
        outdir: this.options.outdir,
        environments: this.options.environments,
        ignore: this.options.ignore,
        buildType: this.options.buildType,
        pretty: this.options.pretty,
        verbose: this.options.verbose,
        ignoreConflicts: this.options.ignoreConflicts,
        print: this.options.print,
        configName: this.options.configName,
        exportDefault: this.options.exportDefault,
        noComments: this.options.noComments,
    }

    static listOptions = {
        modules: this.options.modules,
        girDirectories: Config.options.girDirectories,
        ignore: Config.options.ignore,
        configName: Config.options.configName,
        verbose: Config.options.verbose,
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
                writeConfigString = `export default ${JSON.stringify(configToStore, null, 4)}`
                break
            case '.json':
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
        const configSearchOptions: ConfigSearchOptions = {
            loaders: {
                // ESM loader
                '.js': async (filepath) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const file = await import(filepath)
                    if (file.default) {
                        return file.default as Partial<UserConfig>
                    }
                    return file as Partial<UserConfig>
                },
            },
        }
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
        const generateConfig: GenerateConfig = {
            environment: environment,
            girDirectories: config.girDirectories,
            outdir: config.outdir,
            pretty: config.pretty,
            verbose: config.verbose,
            buildType: config.buildType,
            exportDefault: config.exportDefault,
            noComments: config.noComments,
        }
        return generateConfig
    }

    /**
     * Loads the values of the config file and concatenate them with passed cli flags / arguments.
     * The values from config file are preferred if the cli flag value is the default (and so not set / overwritten)
     * @param options
     * @param modules
     */
    public static async load(options: ConfigFlags): Promise<UserConfig> {
        const configFile = await this.loadConfigFile(options.configName)

        const config: UserConfig = {
            environments: options.environments,
            buildType: options.buildType,
            verbose: options.verbose,
            ignoreConflicts: options.ignoreConflicts,
            pretty: options.pretty,
            print: options.print,
            outdir: options.outdir,
            girDirectories: options.girDirectories,
            ignore: options.ignore,
            modules: options.modules,
            exportDefault: options.exportDefault,
            noComments: options.noComments,
        }

        if (configFile) {
            // environments
            if (Utils.isEqual(config.environments, Config.defaults.environments) && configFile.config.environments) {
                config.environments = configFile.config.environments
            }
            // buildType
            if (configFile.config.buildType) {
                config.buildType = configFile.config.buildType
            }
            // verbose
            if (config.verbose === Config.options.verbose.default && typeof configFile.config.verbose === 'boolean') {
                config.verbose = configFile.config.verbose
            }
            // ignoreConflicts
            if (
                config.ignoreConflicts === Config.options.ignoreConflicts.default &&
                typeof configFile.config.ignoreConflicts === 'boolean'
            ) {
                config.ignoreConflicts = configFile.config.ignoreConflicts
            }
            // pretty
            if (config.pretty === Config.options.pretty.default && typeof configFile.config.pretty === 'boolean') {
                config.pretty = configFile.config.pretty
            }
            // print
            if (config.print === Config.options.print.default && typeof configFile.config.print === 'boolean') {
                config.print = configFile.config.print
            }
            // outdir
            if (config.outdir === Config.options.outdir.default && configFile.config.outdir) {
                config.outdir = config.print ? null : configFile.config.outdir
            }
            // girDirectories
            if (config.girDirectories === Config.options.girDirectories.default && configFile.config.girDirectories) {
                config.girDirectories = configFile.config.girDirectories
            }
            // ignore
            if (
                (!config.ignore || config.ignore.length <= 0 || Utils.isEqual(config.ignore, Config.defaults.ignore)) &&
                configFile.config.ignore
            ) {
                config.ignore = configFile.config.ignore
            }
            // modules
            if (
                (config.modules.length <= 0 || Utils.isEqual(config.modules, Config.defaults.modules)) &&
                configFile.config.modules
            ) {
                config.modules = configFile.config.modules
            }
            // exportDefault
            if (
                config.exportDefault === Config.options.exportDefault.default &&
                typeof configFile.config.exportDefault === 'boolean'
            ) {
                config.exportDefault = configFile.config.exportDefault
            }
            // noComments
            if (
                config.noComments === Config.options.noComments.default &&
                typeof configFile.config.noComments === 'boolean'
            ) {
                config.noComments = configFile.config.noComments
            }
        }

        return config
    }
}
