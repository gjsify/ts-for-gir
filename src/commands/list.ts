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
    ]

    static flags = {
        help: Config.defaultCliFlags.help,
        girDirectory: Config.defaultCliFlags.girDirectory,
    }

    static args = [Config.defaultCliArgs.modules]

    async run(): Promise<void> {
        const { argv, flags } = this.parse(List)
        const config = await Config.load(flags, argv)
        const moduleLoader = new ModuleLoader(true)
        const foundGirModules = await moduleLoader.findModules(config.girDirectory, config.modules)
        if (foundGirModules.size === 0) {
            this.error('No module found')
        }
        for (const module of foundGirModules) {
            this.log(module)
        }
    }
}
