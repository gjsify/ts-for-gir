/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * Default values, parse the config file and handle CLI flags
 */
import inquirer from 'inquirer'
import { Options } from 'yargs'
import { cosmiconfig, Options as ConfigSearchOptions } from 'cosmiconfig'
import Path from 'path'
import OS from 'os'
import { merge, isEqual, readTsJsConfig } from './utils.js'
import type { Environment, UserConfig, ConfigFlags, UserConfigLoadResult, GenerateConfig } from './types/index.js'
import { promises as fs } from 'fs'
import { Logger } from './logger.js'
import { APP_NAME, APP_USAGE } from './constants.js'
import {
    WARN_USE_NAMESPACE_ON_TYPES,
    WARN_USE_NAMESPACE_ON_ESM,
    ERROR_CONFIG_EXTENSION_UNSUPPORTED,
} from './messages.js'

export class Config {
    static appName = APP_NAME

    static usage = APP_USAGE

    /**
     * Default cli flag and argument values
     */
    static defaults = {
        environments: ['gjs', 'node'],
        pretty: false,
        print: false,
        configName: '.ts-for-girrc.js',
        outdir: './@types',
        girDirectories: OS.platform() === 'darwin' ? ['/usr/local/share/gir-1.0'] : ['/usr/share/gir-1.0'],
        modules: ['*'],
        ignore: [],
        verbose: true,
        ignoreVersionConflicts: false,
        useNamespace: false,
        buildType: 'lib',
        moduleType: 'commonjs',
        noComments: false,
        noDebugComments: false,
        noCheck: false,
        fixConflicts: true,
        noDOMLib: false,
    }

    static configFilePath = Path.join(process.cwd(), Config.defaults.configName)

    /**
     * CLI options used in commands/generate.ts and commands/list.ts
     */
    static options = {
        modules: {
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
            description: 'Directory to output to',
            default: Config.defaults.outdir,
            normalize: true,
        } as Options,
        environments: {
            type: 'string',
            alias: 'e',
            description: 'Javascript environment',
            array: true,
            choices: ['gjs', 'node'],
            default: Config.defaults.environments,
            normalize: true,
        } as Options,
        ignore: {
            type: 'string',
            alias: 'i',
            description: 'Modules that should be ignored',
            array: true,
            default: Config.defaults.ignore,
            normalize: true,
        } as Options,
        buildType: {
            type: 'string',
            alias: 'b',
            description: 'Definitions generation type',
            array: false,
            choices: ['lib', 'types'],
            default: Config.defaults.buildType,
            normalize: true,
        } as Options,
        moduleType: {
            type: 'string',
            alias: 't',
            description: 'Specify what module code is generated.',
            choices: ['esm', 'commonjs'],
            default: Config.defaults.moduleType,
            normalize: true,
        } as Options,
        pretty: {
            type: 'boolean',
            description: 'Prettifies the generated .d.ts files',
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
        ignoreVersionConflicts: {
            type: 'boolean',
            description: 'Do not ask for package versions if multiple versions are found',
            default: Config.defaults.ignoreVersionConflicts,
            normalize: true,
        } as Options,
        print: {
            type: 'boolean',
            alias: 'p',
            description: 'Print the output to console and create no files',
            default: Config.defaults.print,
            normalize: true,
        } as Options,
        configName: {
            type: 'string',
            description: 'Name of the config if you want to use a different name',
            default: Config.defaults.configName,
            normalize: true,
        } as Options,
        useNamespace: {
            type: 'boolean',
            alias: 'd',
            description: 'Export all symbols for each module as a namespace',
            default: Config.defaults.useNamespace,
            normalize: true,
        } as Options,
        noComments: {
            type: 'boolean',
            alias: 'n',
            description: 'Do not generate documentation comments',
            default: Config.defaults.noComments,
            normalize: true,
        } as Options,
        noDebugComments: {
            type: 'boolean',
            description: 'Do not generate debugging inline comments',
            default: Config.defaults.noDebugComments,
            normalize: true,
        } as Options,
        noCheck: {
            type: 'boolean',
            description: 'Disable typescript semantic checks using @ts-nocheck',
            default: Config.defaults.noCheck,
            normalize: true,
        } as Options,
        fixConflicts: {
            type: 'boolean',
            description: 'Fix Inheritance and implementation type conflicts',
            default: Config.defaults.fixConflicts,
            normalize: true,
        } as Options,
        noDOMLib: {
            type: 'boolean',
            description: 'Disables the generation of types that are in conflict with the DOM types',
            default: Config.defaults.noDOMLib,
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
        moduleType: this.options.moduleType,
        pretty: this.options.pretty,
        verbose: this.options.verbose,
        ignoreVersionConflicts: this.options.ignoreVersionConflicts,
        print: this.options.print,
        configName: this.options.configName,
        useNamespace: this.options.useNamespace,
        noComments: this.options.noComments,
        noDebugComments: this.options.noDebugComments,
        noCheck: this.options.noCheck,
        noDOMLib: this.options.noDOMLib,
        fixConflicts: this.options.fixConflicts,
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
        merge(configToStore, userConfig?.config || {}, configsToAdd)
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
                Logger.error(ERROR_CONFIG_EXTENSION_UNSUPPORTED)
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

                    // Files with `exports.default = { ... }`
                    if (file?.default?.default) {
                        return file.default.default as Partial<UserConfig>
                    }
                    // Files with `export default { ... }`
                    if (file?.default) {
                        return file.default as Partial<UserConfig>
                    }
                    // Files with `export { ... }`
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
            moduleType: config.moduleType,
            useNamespace: config.useNamespace,
            noComments: config.noComments,
            noDebugComments: config.noDebugComments,
            noCheck: config.noCheck,
            fixConflicts: config.fixConflicts,
            noDOMLib: config.noDOMLib,
        }
        return generateConfig
    }

    protected static async validateTsConfig(config: UserConfig): Promise<UserConfig> {
        const tsCompilerOptions = (config.outdir && readTsJsConfig(config.outdir)?.compilerOptions) || {}
        const tsConfigHasDOMLib = tsCompilerOptions.noLib
            ? false // NoLib makes typescript to ignore the lib property
            : Array.isArray(tsCompilerOptions.lib)
            ? tsCompilerOptions.lib.some((lib) => lib.toLowerCase().startsWith('dom'))
            : true // Typescript icludes DOM lib by default

        if (config.environments.includes('gjs') && tsConfigHasDOMLib && !config.noDOMLib) {
            const answer = (
                await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'include',
                        choices: ['Yes', 'No'],
                        message:
                            'Your typescript compilerOptions includes the DOM lib, this conflicts with some Gjs global types, do you want to skip generating those types?',
                    },
                ])
            ).include as 'Yes' | 'No'

            if (answer == 'No') config.noDOMLib = true
        }

        return config
    }

    public static async validate(config: UserConfig): Promise<UserConfig> {
        if (config.buildType === 'types') {
            if (config.useNamespace !== true) {
                Logger.warn(WARN_USE_NAMESPACE_ON_TYPES)
                config.useNamespace = true
            }
        }

        if (config.moduleType === 'esm') {
            if (config.useNamespace !== true) {
                Logger.warn(WARN_USE_NAMESPACE_ON_ESM)
                config.useNamespace = true
            }
        }

        config = await this.validateTsConfig(config)

        return config
    }

    /**
     * Loads the values of the config file and concatenate them with passed cli flags / arguments.
     * The values from config file are preferred if the cli flag value is the default (and so not set / overwritten)
     * @param options
     */
    public static async load(options: ConfigFlags): Promise<UserConfig> {
        const configFile = await this.loadConfigFile(options.configName)

        const config: UserConfig = {
            environments: options.environments,
            buildType: options.buildType,
            moduleType: options.moduleType,
            verbose: options.verbose,
            ignoreVersionConflicts: options.ignoreVersionConflicts,
            pretty: options.pretty,
            print: options.print,
            outdir: options.outdir,
            girDirectories: options.girDirectories,
            ignore: options.ignore,
            modules: options.modules,
            useNamespace: options.useNamespace,
            noComments: options.noComments,
            noDebugComments: options.noDebugComments,
            noCheck: options.noCheck,
            fixConflicts: options.fixConflicts,
            noDOMLib: options.noDOMLib,
        }

        if (configFile) {
            // environments
            if (isEqual(config.environments, Config.defaults.environments) && configFile.config.environments) {
                config.environments = configFile.config.environments
            }
            // buildType
            if (config.buildType === Config.options.buildType.default && configFile.config.buildType) {
                config.buildType = configFile.config.buildType
            }
            // moduleType
            if (config.moduleType === Config.options.moduleType.default && configFile.config.moduleType) {
                config.moduleType = configFile.config.moduleType
            }
            // verbose
            if (config.verbose === Config.options.verbose.default && typeof configFile.config.verbose === 'boolean') {
                config.verbose = configFile.config.verbose
            }
            // ignoreVersionConflicts
            if (
                config.ignoreVersionConflicts === Config.options.ignoreVersionConflicts.default &&
                typeof configFile.config.ignoreVersionConflicts === 'boolean'
            ) {
                config.ignoreVersionConflicts = configFile.config.ignoreVersionConflicts
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
                (!config.ignore || config.ignore.length <= 0 || isEqual(config.ignore, Config.defaults.ignore)) &&
                configFile.config.ignore
            ) {
                config.ignore = configFile.config.ignore
            }
            // modules
            if (
                (config.modules.length <= 0 || isEqual(config.modules, Config.defaults.modules)) &&
                configFile.config.modules
            ) {
                config.modules = configFile.config.modules
            }
            // useNamespace
            if (
                config.useNamespace === Config.options.useNamespace.default &&
                typeof configFile.config.useNamespace === 'boolean'
            ) {
                config.useNamespace = configFile.config.useNamespace
            }
            // noComments
            if (
                config.noComments === Config.options.noComments.default &&
                typeof configFile.config.noComments === 'boolean'
            ) {
                config.noComments = configFile.config.noComments
            }
            // noDebugComments
            if (
                config.noDebugComments === Config.options.noDebugComments.default &&
                typeof configFile.config.noDebugComments === 'boolean'
            ) {
                config.noDebugComments = configFile.config.noDebugComments
            }
            // noCheck
            if (config.noCheck === Config.options.noCheck.default && typeof configFile.config.noCheck === 'boolean') {
                config.noCheck = configFile.config.noCheck
            }
            // fixConflicts
            if (
                config.fixConflicts === Config.options.fixConflicts.default &&
                typeof configFile.config.fixConflicts === 'boolean'
            ) {
                config.fixConflicts = configFile.config.fixConflicts
            }
            // noDOMLib
            if (
                config.noDOMLib === Config.options.noDOMLib.default &&
                typeof configFile.config.noDOMLib === 'boolean'
            ) {
                config.noDOMLib = configFile.config.noDOMLib
            }
        }

        return await this.validate(config)
    }
}
