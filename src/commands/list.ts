/**
 * Everything you need for the `ts-for-gir list` command is located here
 */

import { ModuleLoader } from '../module-loader'
import { Command } from '@oclif/command'
import { Config } from '../config'

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
        girDirectory: Config.defaultCliFlags.girDirectory,
        ignore: Config.defaultCliFlags.ignore,
        configName: Config.defaultCliFlags.configName,
    }

    static args = [Config.defaultCliArgs.modules]

    async run(): Promise<void> {
        const { argv, flags } = this.parse(List)
        const config = await Config.load(flags, argv)
        const moduleLoader = new ModuleLoader(true)
        const foundGirModules = await moduleLoader.findModules(config.girDirectory, config.modules, config.ignore || [])
        if (foundGirModules.size === 0) {
            this.error('No module found')
        }
        for (const module of foundGirModules) {
            this.log(module)
        }
    }
}
