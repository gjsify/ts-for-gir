/**
 * Everything you need for the `ts-for-gir list` command is located here
 */

import { ModuleLoader } from '../module-loader'
import { Command } from '@oclif/command'
import chalk from 'chalk'
import { Config } from '../config'
import { ResolveType, ConfigFlags } from '../types'

export default class List extends Command {
    static description = 'Lists all available GIR modules'

    static examples = [
        '# Lists all available GIR modules in ./vala-girs/gir-1.0',
        `${Config.appName} list -g ./vala-girs/gir-1.0`,
        '',
        '# Lists all available GIR modules in /usr/share/gir-1.0 but not Gtk-3.0 and xrandr-1.3',
        `${Config.appName} list --ignore=Gtk-3.0 xrandr-1.3`,
    ]

    static flags = {
        help: Config.defaultCliFlags.help,
        girDirectories: Config.defaultCliFlags.girDirectories,
        ignore: Config.defaultCliFlags.ignore,
        configName: Config.defaultCliFlags.configName,
        verbose: Config.defaultCliFlags.verbose,
    }

    static args = [Config.defaultCliArgs.modules]

    async run(): Promise<void> {
        const { argv, flags } = this.parse(List)
        const config = await Config.load((flags as unknown) as ConfigFlags, argv)
        const generateConfig = Config.getGenerateConfig(config)
        const moduleLoader = new ModuleLoader(generateConfig)
        const { grouped, failed } = await moduleLoader.getModules(config.modules, config.ignore)
        const moduleGroupes = Object.values(grouped)
        if (Object.keys(grouped).length === 0) {
            this.log(chalk.red('No modules found'))
            return
        }

        const conflictModules = moduleGroupes.filter((moduleGroup) => moduleGroup.hasConflict)

        const byHandModules = moduleGroupes.filter(
            (moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.BY_HAND,
        )

        const depModules = moduleGroupes.filter(
            (moduleGroup) => moduleGroup.modules[0].resolvedBy === ResolveType.DEPENDENCE,
        )

        this.log(chalk.blue('\nSelected Modules:'))
        for (const moduleGroup of byHandModules) {
            for (const depModule of moduleGroup.modules) {
                this.log(chalk.white(`- ${depModule.packageName}`))
            }
        }

        if (depModules.length > 0) {
            this.log(chalk.yellow('\nDependencies:'))
            for (const moduleGroup of depModules) {
                for (const depModule of moduleGroup.modules) {
                    this.log(chalk.white(`- ${depModule.packageName}`))
                }
            }
        }

        if (conflictModules.length > 0) {
            this.log(chalk.red('\nConflicts:'))
            for (const moduleGroup of conflictModules) {
                this.log(chalk.white(`- ${moduleGroup.name}`))
                for (const conflictModule of moduleGroup.modules) {
                    this.log(chalk.white(`  - ${conflictModule.packageName}`))
                }
            }
        }

        if (failed.length > 0) {
            this.log(chalk.red('\nDependencies not found:'))
            for (const fail of failed) {
                this.log(chalk.white(`- ${fail}`))
            }
        }
    }
}
