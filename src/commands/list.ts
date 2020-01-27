import { TsForGir } from '../ts-for-gir'
import { Command, flags } from '@oclif/command'

const NAME = 'ts-for-gir'

export default class List extends Command {
    static description = 'Lists all available GIR modules'

    static examples = [
        '# Lists all available GIR modules in ./vala-girs/gir-1.0',
        `${NAME} list -g ./vala-girs/gir-1.0`,
    ]

    static aliases: ['l']

    static flags = {
        help: flags.help({ char: 'h' }),
        girDirectory: flags.string({ char: 'g', description: 'GIR directory', default: '/usr/share/gir-1.0' }),
    }

    static args = [
        {
            name: 'modules',
            description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
            required: true,
            default: '*',
        },
    ]

    async run(): Promise<void> {
        const { argv, flags } = this.parse(List)
        const girDirectory = flags.girDirectory
        const tsForGir = new TsForGir(false, false)
        const foundGirModules = await tsForGir.findModules(girDirectory, argv)
        if (foundGirModules.size === 0) {
            this.error('No module found')
            return
        }
        for (const module of foundGirModules) {
            this.log(module)
        }
    }
}
