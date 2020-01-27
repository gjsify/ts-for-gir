import { TsForGir } from '../ts-for-gir'
import { Command, flags } from '@oclif/command'
import * as Config from '@oclif/config'

import { Environment, BuildType } from '../types'

const NAME = 'ts-for-gir'

export default class Generate extends Command {
    static description = 'Generates .d.ts files from GIR for gjs or node-gtk'

    static strict = false

    static examples = [
        `# Run '${NAME} generate' in your gjs or node-gtk project to generate typings for your project, pass the gir modules you need for your project`,
        `${NAME} generate`,
        '',
        '# You can also use wild cards',
        `${NAME} generate -m Gtk*`,
        '',
        '# If you want to parse all of your locally installed gir modules run',
        `${NAME} generate '*'`,
    ]

    static aliases: ['g']

    static flags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-g, --gir-directory=VALUE)
        girDirectory: flags.string({ char: 'g', description: 'GIR directory', default: '/usr/share/gir-1.0' }),
        outdir: flags.string({
            char: 'o',
            description: 'Directory to output to',
            default: '@types',
        }),
        environment: flags.string({
            char: 'e',
            description: 'Javascript environment',
            multiple: true,
            options: ['gjs', 'node'],
            default: ['gjs', 'node'],
        }),
        buildType: flags.string({
            char: 'b',
            description: '[default for gjs: lib, default for node: types] Force the definitions generation type',
            multiple: false,
            options: ['lib', 'types'],
        }),
        // flag with no value
        verbose: flags.boolean({ char: 'v', description: 'verbosity', default: true }),
        print: flags.boolean({ char: 'p', description: 'Print the output to console and create no files' }),
    }

    static args = [
        {
            name: 'modules',
            description: "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
            required: true,
            default: '*',
        },
    ]

    constructor(argv: string[], config: Config.IConfig) {
        super(argv, config)
    }

    async run(): Promise<void> {
        const { argv, flags } = this.parse(Generate)
        const outDir: string | null = flags.print ? null : flags.outdir
        const girDirectory = flags.girDirectory
        const tsForGir = new TsForGir(flags.verbose)
        const foundGirModules = await tsForGir.findModules(girDirectory, argv)
        const environments: Environment[] = flags.environment as Environment[]
        const buildType: BuildType | undefined = flags.buildType as BuildType | undefined

        if (argv.length === 0) {
            this.error("Need to pass an argument via 'ts-for-git generate [arguments here]'!")
            return
        }

        if (foundGirModules.size === 0) {
            this.error('No module found!')
            return
        }

        for (const i in environments) {
            if (environments[i]) {
                const defaultBuildType = environments[i] === 'gjs' ? 'lib' : 'types'

                tsForGir.main(outDir, girDirectory, foundGirModules, environments[i], buildType || defaultBuildType)
            }
        }
    }
}

// new CLI(process.argv, {})
