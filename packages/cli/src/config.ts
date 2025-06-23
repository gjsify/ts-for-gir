/**
 * Default values, parse the config file and handle CLI flags
 */

import type { ConfigFlags, OptionsGeneration, UserConfig, UserConfigLoadResult } from '@ts-for-gir/lib'
import { APP_NAME, APP_USAGE, ERROR_CONFIG_EXTENSION_UNSUPPORTED, isEqual, Logger, merge } from '@ts-for-gir/lib'
import { type Options as ConfigSearchOptions, cosmiconfig } from 'cosmiconfig'
import { existsSync } from 'fs'
import { writeFile } from 'fs/promises'
import { dirname, extname, join, resolve } from 'path'
import type { Options } from 'yargs'

export class Config {
    static appName = APP_NAME

    static usage = APP_USAGE

    /**
     * Default cli flag and argument values
     */
    static defaults = {
        print: false,
        configName: '.ts-for-girrc.js',
        root: process.cwd(),
        outdir: './@types',
        girDirectories: getDefaultGirDirectories(),
        modules: ['*'],
        ignore: [],
        verbose: false,
        ignoreVersionConflicts: false,
        noNamespace: false,
        noComments: false,
        promisify: true,
        npmScope: '@girs',
        workspace: false,
        onlyVersionPrefix: false,
        noPrettyPrint: false,
        // Disabled by default because advanced variants are complicated,
        // it does impact performance (especially on older typescript versions)
        // and we'd need to test it works with the updated bindings
        noAdvancedVariants: true,
        package: false,
    }

    static configFilePath = join(process.cwd(), Config.defaults.configName)

    /**
     * CLI options used in commands/generate.ts and commands/list.ts
     */
    static options: { [name: string]: Options } = {
        modules: {
            description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
            array: true,
            default: Config.defaults.modules,
            normalize: true,
        },
        girDirectories: {
            type: 'string',
            alias: 'g',
            description: 'GIR directories',
            array: true,
            default: Config.defaults.girDirectories,
            normalize: true,
        },
        root: {
            type: 'string',
            description: 'Root directory of your project',
            default: Config.defaults.root,
            normalize: true,
        },
        outdir: {
            type: 'string',
            alias: 'o',
            description: 'Directory to output to',
            default: Config.defaults.outdir,
            normalize: true,
        },
        ignore: {
            type: 'string',
            alias: 'i',
            description: 'Modules that should be ignored',
            array: true,
            default: Config.defaults.ignore,
            normalize: true,
        },
        verbose: {
            type: 'boolean',
            alias: 'v',
            description: 'Switch on/off the verbose mode',
            default: Config.defaults.verbose,
            normalize: true,
        },
        ignoreVersionConflicts: {
            type: 'boolean',
            description: 'Skip prompts for library version selection when multiple versions are detected',
            default: Config.defaults.ignoreVersionConflicts,
            normalize: true,
        },
        print: {
            type: 'boolean',
            alias: 'p',
            description: 'Print the output to console and create no files',
            default: Config.defaults.print,
            normalize: true,
        },
        configName: {
            type: 'string',
            description: 'Specify a custom name for the configuration file',
            default: Config.defaults.configName,
            normalize: true,
        },
        noNamespace: {
            type: 'boolean',
            alias: 'd',
            description: 'Do not export all symbols for each module as a namespace',
            default: Config.defaults.noNamespace,
            normalize: true,
        },
        noComments: {
            type: 'boolean',
            alias: 'n',
            description: 'Do not generate documentation comments',
            default: Config.defaults.noComments,
            normalize: true,
        },
        promisify: {
            type: 'boolean',
            description: 'Generate promisified functions for async/finish calls',
            default: Config.defaults.promisify,
            normalize: true,
        },
        npmScope: {
            type: 'string',
            description: 'Scope of the generated NPM packages',
            default: Config.defaults.npmScope,
            normalize: true,
        },
        workspace: {
            type: 'boolean',
            description:
                'Uses the workspace protocol for the generated packages which can be used with package managers like Yarn and PNPM',
            default: Config.defaults.workspace,
            normalize: true,
        },
        onlyVersionPrefix: {
            type: 'boolean',
            description:
                'Only use the version prefix for the ambient module exports. This is useful if, for whatever reason, you want to use different library versions of the same library in your project.',
            default: Config.defaults.onlyVersionPrefix,
            normalize: true,
        },
        noPrettyPrint: {
            type: 'boolean',
            description: 'Do not prettify the generated types',
            default: Config.defaults.noPrettyPrint,
            normalize: true,
        },
        noAdvancedVariants: {
            type: 'boolean',
            description: 'Disable GLib.Variant class with string parsing',
            default: Config.defaults.noAdvancedVariants,
            normalize: true,
        },
        package: {
            type: 'boolean',
            description: 'Generate the typescript types with package.json support',
            default: Config.defaults.package,
            normalize: true,
        },
    }

    /**
     * CLI flags used in commands/generate.ts
     */
    static generateOptions = {
        modules: this.options.modules,
        girDirectories: this.options.girDirectories,
        root: this.options.root,
        outdir: this.options.outdir,
        ignore: this.options.ignore,
        verbose: this.options.verbose,
        ignoreVersionConflicts: this.options.ignoreVersionConflicts,
        print: this.options.print,
        configName: this.options.configName,
        noNamespace: this.options.noNamespace,
        noComments: this.options.noComments,
        promisify: this.options.promisify,
        npmScope: this.options.npmScope,
        workspace: this.options.workspace,
        onlyVersionPrefix: this.options.onlyVersionPrefix,
        noPrettyPrint: this.options.noPrettyPrint,
        noAdvancedVariants: this.options.noAdvancedVariants,
        package: this.options.package,
    }

    static listOptions = {
        modules: this.options.modules,
        girDirectories: Config.options.girDirectories,
        root: this.options.root,
        ignore: Config.options.ignore,
        configName: Config.options.configName,
        verbose: Config.options.verbose,
    }

    static copyOptions = {
        modules: this.options.modules,
        girDirectories: Config.options.girDirectories,
        root: this.options.root,
        outdir: Config.options.outdir,
        ignore: Config.options.ignore,
        configName: Config.options.configName,
        verbose: Config.options.verbose,
    }

    static docOptions = {
        modules: this.options.modules,
        girDirectories: Config.options.girDirectories,
        root: this.options.root,
        outdir: Config.options.outdir,
        ignore: Config.options.ignore,
        verbose: Config.options.verbose,
        ignoreVersionConflicts: Config.options.ignoreVersionConflicts,
        configName: Config.options.configName,
    }

    /**
     * Overwrites values in the user config file
     * @param configsToAdd
     */
    public static async addToConfig(configsToAdd: Partial<UserConfig>, configName?: string): Promise<void> {
        const userConfig = await Config.loadConfigFile(configName)
        const path = userConfig?.filepath || Config.configFilePath
        const configToStore = {}
        merge(configToStore, userConfig?.config || {}, configsToAdd)
        const fileExtension = extname(path)
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
            return writeFile(path, writeConfigString)
        }
    }

    /**
     * The user can create a `.ts-for-girrc` file for his default configs,
     * this method load this config file an returns the user configuration
     * @param configName If the user uses a custom config file name
     */
    private static async loadConfigFile(configName?: string): Promise<UserConfigLoadResult | null> {
        const configSearchOptions: Partial<ConfigSearchOptions> = {
            loaders: {
                // ESM loader
                '.js': async (filepath) => {
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
        const configFile: UserConfigLoadResult | null = await cosmiconfig(Config.appName, configSearchOptions).search()
        if (configFile?.filepath) {
            Config.configFilePath = configFile.filepath
        }

        return configFile
    }

    public static getOptionsGeneration(config: UserConfig): OptionsGeneration {
        const generateConfig: OptionsGeneration = {
            ...config,
        }
        return generateConfig
    }

    public static validate(config: UserConfig): UserConfig {
        return config
    }

    /**
     * Loads the values of the config file and concatenate them with passed cli flags / arguments.
     * The values from config file are preferred if the cli flag value is the default (and so not set / overwritten)
     * @param options
     */
    public static async load(options: ConfigFlags): Promise<UserConfig> {
        const configFile = await Config.loadConfigFile(options.configName)
        const configFileData = configFile?.config || {}

        const config: UserConfig = {
            ...options,
        }

        if (configFileData) {
            // verbose
            if (config.verbose === Config.options.verbose.default && typeof configFileData.verbose === 'boolean') {
                config.verbose = configFileData.verbose
            }
            // ignoreVersionConflicts
            if (
                config.ignoreVersionConflicts === Config.options.ignoreVersionConflicts.default &&
                typeof configFileData.ignoreVersionConflicts === 'boolean'
            ) {
                config.ignoreVersionConflicts = configFileData.ignoreVersionConflicts
            }
            // print
            if (config.print === Config.options.print.default && typeof configFileData.print === 'boolean') {
                config.print = configFileData.print
            }
            // root
            if (config.root === Config.options.root.default && (configFileData.root || configFile?.filepath)) {
                // Use the config file path as the root path if no root path is set
                config.root =
                    configFileData.root ||
                    (configFile?.filepath ? dirname(configFile.filepath) : (Config.options.root.default as string))
            }
            // outdir
            if (config.outdir === Config.options.outdir.default && configFileData.outdir) {
                config.outdir = config.print ? null : configFileData.outdir
            }
            // girDirectories
            if (config.girDirectories === Config.options.girDirectories.default && configFileData.girDirectories) {
                config.girDirectories = configFileData.girDirectories
            }
            // ignore
            if (
                (!config.ignore || config.ignore.length <= 0 || isEqual(config.ignore, Config.defaults.ignore)) &&
                configFileData.ignore
            ) {
                config.ignore = configFileData.ignore
            }
            // modules
            if (
                (config.modules.length <= 0 || isEqual(config.modules, Config.defaults.modules)) &&
                configFileData.modules
            ) {
                config.modules = configFileData.modules
            }
            // noNamespace
            if (
                config.noNamespace === Config.options.noNamespace.default &&
                typeof configFileData.noNamespace === 'boolean'
            ) {
                config.noNamespace = configFileData.noNamespace
            }
            // noComments
            if (
                config.noComments === Config.options.noComments.default &&
                typeof configFileData.noComments === 'boolean'
            ) {
                config.noComments = configFileData.noComments
            }
            // promisify
            if (
                config.promisify === Config.options.promisify.default &&
                typeof configFileData.promisify === 'boolean'
            ) {
                config.promisify = configFileData.promisify
            }
            // npmScope
            if (config.npmScope === Config.options.npmScope.default && configFileData.npmScope) {
                config.npmScope = configFileData.npmScope
            }
            // workspace
            if (
                config.workspace === Config.options.workspace.default &&
                typeof configFileData.workspace === 'boolean'
            ) {
                config.workspace = configFileData.workspace
            }
            // onlyVersionPrefix
            if (
                config.onlyVersionPrefix === Config.options.onlyVersionPrefix.default &&
                typeof configFileData.onlyVersionPrefix === 'boolean'
            ) {
                config.onlyVersionPrefix = configFileData.onlyVersionPrefix
            }
            // noPrettyPrint
            if (
                config.noPrettyPrint === Config.options.noPrettyPrint.default &&
                typeof configFileData.noPrettyPrint === 'boolean'
            ) {
                config.noPrettyPrint = configFileData.noPrettyPrint
            }
            // noAdvancedVariants
            if (
                config.noAdvancedVariants === Config.options.noAdvancedVariants.default &&
                typeof configFileData.noAdvancedVariants === 'boolean'
            ) {
                config.noAdvancedVariants = configFileData.noAdvancedVariants
            }
            // package
            if (config.package === Config.options.package.default && typeof configFileData.package === 'boolean') {
                config.package = configFileData.package
            }
        }

        // If outdir is not absolute, make it absolute to the root path
        if (config.outdir && !config.outdir?.startsWith('/')) {
            config.outdir = resolve(config.root, config.outdir)
        }

        // Same for girDirectories
        if (config.girDirectories) {
            config.girDirectories = config.girDirectories.map((dir) => {
                if (!dir.startsWith('/')) {
                    return resolve(config.root, dir)
                }
                return dir
            })
        }

        return Config.validate(config)
    }
}

function getDefaultGirDirectories(): string[] {
    const girDirectories = [
        '/usr/local/share/gir-1.0',
        '/usr/share/gir-1.0',
        '/usr/share/*/gir-1.0',
        '/usr/share/gnome-shell',
        '/usr/share/gnome-shell/gir-1.0',
        '/usr/lib64/mutter-*',
        '/usr/lib/mutter-*',
        '/usr/lib/x86_64-linux-gnu/mutter-*',
    ]
    // NixOS and other distributions does not have a /usr/local/share directory.
    // Instead, the nix store paths with Gir files are set as XDG_DATA_DIRS.
    // See https://github.com/NixOS/nixpkgs/blob/96e18717904dfedcd884541e5a92bf9ff632cf39/pkgs/development/libraries/gobject-introspection/setup-hook.sh#L7-L10
    const dataDirs = process.env['XDG_DATA_DIRS']?.split(':') || []
    for (let dataDir of dataDirs) {
        dataDir = join(dataDir, 'gir-1.0')
        if (!girDirectories.includes(dataDir) && existsSync(dataDir)) {
            girDirectories.push(dataDir)
        }
    }
    return girDirectories
}
