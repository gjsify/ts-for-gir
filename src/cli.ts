import commander from 'commander'
import glob from 'tiny-glob'
import Path from 'path'
import { TsForGir } from './ts-for-gir'

import { Environment, BuildType } from './types'

const NAME = 'ts-for-gir'

/**
 * See https://github.com/tj/commander.js/#custom-option-processing
 * @param value
 * @param previous
 */
const collect = (value: string, previous: string[]) => {
    return previous.concat([value])
}

/**
 * Adds the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
 * @param girDirectory
 * @param modules
 */
const findModules = async (girDirectory: string, modules: string[]) => {
    const foundModules = new Set<string>()
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

commander
    .name(NAME)
    .description('Generates typescript type definitions from gir for gjs and node-gtk')
    .usage('ts-for-gir [options]')
    .option('-g --gir-directory [directory]', 'GIR directory', '/usr/share/gir-1.0')
    .option('-m --module <modules>', "GIR modules to load, e.g. 'Gio-2.0'. Accepts multiple modules", collect, [])
    .option('-o --outdir <dir>', 'Directory to output to', '@types')
    .option('-e --environment <environments>', 'Javascript environment', collect, ['gjs', 'node'])
    .option(
        '-b --build-type <type>',
        "Force the definitions generation type (default for gjs: 'lib', default for node: 'types')",
    )
    .option('-p --print', 'Print the output to console and create no files')
    .option('-v, --verbose', 'verbosity', true)

commander.on('--help', function() {
    console.log('')
    console.log(
        `Run ${NAME} in your gjs or node-gtk project to generate typings for your project, pass the gir modules you need for your project`,
    )
    console.log('')
    console.log('Examples:')
    console.log(
        `  $ ${NAME} -m Gtk-3.0 -m Soup-2.4 -m GtkSource-3.0 -m WebKit2-4.0 -m AppIndicator3-0.1 -m Gda-5.0 -m Notify-0.7 -o @types`,
    )
    console.log('')
    console.log('  # You can also use wild cards')
    console.log(`  $ ${NAME} -m Gtk*`)
    console.log('')
    console.log('  # If you want to parse all of your locally installed gir modules, run')
    console.log(`  $ ${NAME} -m '*'`)
})

commander.parse(process.argv)

const run = async (): Promise<void> => {
    const outDir: string | null = commander.print ? null : commander.outdir
    const girDirectory = commander.girDirectory
    const girToLoad = await findModules(girDirectory, commander.module)
    const environments: Environment[] = commander.environment
    const buildType: BuildType | undefined = commander.buildType

    for (const i in environments) {
        if (environments[i]) {
            const defaultBuildType = environments[i] === 'gjs' ? 'lib' : 'types'
            console.log('buildType || defaultBuildType', buildType || defaultBuildType)
            const tsForGir = new TsForGir()
            tsForGir.main(
                outDir,
                girDirectory,
                Array.from(girToLoad),
                environments[i],
                buildType || defaultBuildType,
                commander.verbose,
            )
        }
    }
}

run()
