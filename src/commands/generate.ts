/**
 * Everything you need for the `ts-for-gir generate` command is located here
 */

import { Command } from '@oclif/command'
import * as CLIConfig from '@oclif/config'
import { TsForGir } from '../ts-for-gir'
import { Config } from '../config'
import { ModuleLoader } from '../module-loader'

export default class Generate extends Command {
    static description = 'Generates .d.ts files from GIR for gjs or node-gtk'

    static strict = false

    static examples = [
        `# Run '${Config.appName} generate' in your gjs or node-gtk project to generate typings for your project, pass the gir modules you need for your project`,
        `${Config.appName} generate`,
        '',
        '# You can also use wild cards',
        `${Config.appName} generate Gtk*`,
        '',
        '# If you want to parse all of your locally installed gir modules run',
        `${Config.appName} generate '*'`,
        '',
        '# Generate .d.ts. files only for gjs',
        `${Config.appName} generate '*' -e gjs`,
        '',
        '# Generate .d.ts. files only for node',
        `${Config.appName} generate '*' -e node`,
        '',
        '# Use a special config file',
        `${Config.appName} generate --configName='.ts-for-gir.gtk4.rc.js`,
        '',
        '# Generate .d.ts. files but not for Gtk-3.0 and xrandr-1.3',
        `${Config.appName} generate --ignore=Gtk-3.0 xrandr-1.3`,
    ]

    static flags = {
        help: Config.defaultCliFlags.help,
        girDirectory: Config.defaultCliFlags.girDirectory,
        outdir: Config.defaultCliFlags.outdir,
        environments: Config.defaultCliFlags.environments,
        ignore: Config.defaultCliFlags.ignore,
        buildType: Config.defaultCliFlags.buildType,
        pretty: Config.defaultCliFlags.pretty,
        verbose: Config.defaultCliFlags.verbose,
        print: Config.defaultCliFlags.print,
        configName: Config.defaultCliFlags.configName,
    }

    static args = [Config.defaultCliArgs.modules]

    constructor(argv: string[], config: CLIConfig.IConfig) {
        super(argv, config)
    }

    async run(): Promise<void> {
        const { argv, flags } = this.parse(Generate)

        const config = await Config.load(flags, argv)

        if (argv.length === 0) {
            this.error("Need to pass an argument via 'ts-for-git generate [arguments here]'!")
        }

        const moduleLoader = new ModuleLoader(config.verbose)
        const choosedGirModules = await moduleLoader.getModules(
            config.girDirectory,
            config.modules,
            config.ignore || [],
        )

        if (choosedGirModules.length === 0) {
            this.error('No module found!')
        }
        for (const i in config.environments) {
            if (config.environments[i]) {
                const tsForGir = new TsForGir(config.environments[i], config.verbose, config.pretty)
                const defaultBuildType = config.environments[i] === 'gjs' ? 'lib' : 'types'
                tsForGir.main(
                    config.outdir,
                    config.girDirectory,
                    choosedGirModules,
                    config.environments[i],
                    config.buildType || defaultBuildType,
                )
            }
        }
    }
}
