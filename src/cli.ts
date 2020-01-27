import commander from 'commander'
import glob from 'tiny-glob'
import Path from 'path'
import { TsForGir } from './ts-for-gir'
import { Logger } from './logger'

import { Environment, BuildType } from './types'

const NAME = 'ts-for-gir'

export class CLI {
    log: Logger
    constructor() {
        commander
            .name(NAME)
            .option('-g --gir-directory [directory]', 'GIR directory', '/usr/share/gir-1.0')
            .option(
                '-m --module <modules>',
                "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules",
                this.collect.bind(this),
                [],
            )
            .option('-o --outdir <dir>', 'Directory to output to', '@types')
            .option('-e --environment <environments>', 'Javascript environment', this.collect.bind(this), [
                'gjs',
                'node',
            ])
            .option(
                '-b --build-type <type>',
                "Force the definitions generation type (default for gjs: 'lib', default for node: 'types')",
            )
            .option('-p --print', 'Print the output to console and create no files')
            .option('-v, --verbose', 'verbosity', true)

        commander
            .command('run [options]')
            .description('Generates typescript type definitions from GIR for gjs or node-gtk')
            .action(this.run.bind(this))

        commander
            .command('list [options]')
            .description('Lists all available GIR modules')
            .action(this.list.bind(this))

        commander.on('--help', () => {
            console.log('')
            console.log(
                `Run ${NAME} in your gjs or node-gtk project to generate typings for your project, pass the gir modules you need for your project`,
            )
            console.log('')
            console.log('Examples:')
            console.log(
                `  $ ${NAME} run -m Gtk-3.0 -m Soup-2.4 -m GtkSource-3.0 -m WebKit2-4.0 -m AppIndicator3-0.1 -m Gda-5.0 -m Notify-0.7 -o @types`,
            )
            console.log('')
            console.log('  # You can also use wild cards')
            console.log(`  $ ${NAME} run -m Gtk*`)
            console.log('')
            console.log('  # If you want to parse all of your locally installed gir modules, run')
            console.log(`  $ ${NAME} run -m '*'`)
            console.log('')
            console.log('  # Lists all available GIR modules in ./vala-girs/gir-1.0')
            console.log(`  $ ${NAME} list -g ./vala-girs/gir-1.0`)
        })

        commander.parseAsync(process.argv)

        this.log = Logger.getInstance(commander.verbose)
    }

    /**
     * See https://github.com/tj/commander.js/#custom-option-processing
     * @param value
     * @param previous
     */
    private collect(value: string, previous: string[]): string[] {
        return previous.concat([value])
    }

    /**
     * Adds the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    private async findModules(girDirectory: string, modules: string[]): Promise<Set<string>> {
        const foundModules = new Set<string>()

        if (modules.length == 0) {
            this.log.error('Need to specify modules via -m!')
        }

        for (const i in modules) {
            if (modules[i]) {
                const filename = `${modules[i]}.gir`
                const files = await glob(filename, { cwd: girDirectory })
                const globModules = files.map(file => Path.basename(file, '.gir'))
                globModules.forEach(module => foundModules.add(module))
            }
        }

        return foundModules
    }

    async list(): Promise<void> {
        const girDirectory = commander.girDirectory
        const foundGirModules = await this.findModules(girDirectory, commander.module)
        if (foundGirModules.size === 0) {
            this.log.danger('No module found')
            return
        }
        for (const module of foundGirModules) {
            console.log(module)
        }
    }

    async run(): Promise<void> {
        const outDir: string | null = commander.print ? null : commander.outdir
        const girDirectory = commander.girDirectory
        const foundGirModules = await this.findModules(girDirectory, commander.module)
        const environments: Environment[] = commander.environment
        const buildType: BuildType | undefined = commander.buildType

        if (commander.module.length === 0) {
            this.log.error('Need to specify modules via -m!')
            return
        }

        if (foundGirModules.size === 0) {
            this.log.error('No module found!')
            return
        }

        for (const i in environments) {
            if (environments[i]) {
                const defaultBuildType = environments[i] === 'gjs' ? 'lib' : 'types'
                const tsForGir = new TsForGir(commander.verbose)
                tsForGir.main(outDir, girDirectory, foundGirModules, environments[i], buildType || defaultBuildType)
            }
        }
    }
}

new CLI()
