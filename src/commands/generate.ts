import { TsForGir } from '../ts-for-gir'
import { Command, flags } from '@oclif/command'
import * as inquirer from 'inquirer'
import Path from 'path'
import * as Config from '@oclif/config'

import { Environment, BuildType, GroupedGirFiles } from '../types'

const NAME = 'ts-for-gir'

export default class Generate extends Command {
    static description = 'Generates .d.ts files from GIR for gjs or node-gtk'

    static strict = false

    static examples = [
        `# Run '${NAME} generate' in your gjs or node-gtk project to generate typings for your project, pass the gir modules you need for your project`,
        `${NAME} generate`,
        '',
        '# You can also use wild cards',
        `${NAME} generate Gtk*`,
        '',
        '# If you want to parse all of your locally installed gir modules run',
        `${NAME} generate '*'`,
        '',
        '# Generate .d.ts. files only for gjs',
        `${NAME} generate '*' -e gjs`,
        '',
        '# Generate .d.ts. files only for node',
        `${NAME} generate '*' -e node`,
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
        prettify: flags.boolean({
            description: 'Prettifies the generated .d.ts files',
            default: false,
        }),
        // flag with no value
        verbose: flags.boolean({ char: 'v', description: 'verbosity', default: true }),
        print: flags.boolean({
            char: 'p',
            description: 'Print the output to console and create no files',
            default: false,
        }),
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

    /**
     * Groupes Gir modules by name id
     * E.g. Gtk-3.0 and Gtk-4.0 will be grouped
     * @param girFiles
     */
    groupGirFiles(girFiles: Set<string>): GroupedGirFiles {
        const girFilesGrouped: GroupedGirFiles = {}

        for (const fullName of girFiles) {
            const name = fullName.split('-')[0]
            const id = name.toLowerCase()

            if (!girFilesGrouped[id]) {
                girFilesGrouped[id] = {
                    name,
                    fullNames: new Set<string>().add(fullName),
                }
            } else {
                girFilesGrouped[id].fullNames.add(fullName)
            }
        }

        return girFilesGrouped
    }

    generateFileVersionQuestions(
        girFilesGrouped: GroupedGirFiles,
    ): inquirer.QuestionCollection<{ [name: string]: string }> {
        const questions: any = []
        for (const id in girFilesGrouped) {
            const group = girFilesGrouped[id]
            if (group.fullNames.size > 1) {
                const fileVersions = Array.from(group.fullNames)
                const question = {
                    name: group.name,
                    message: `Multiple versions of '${group.name}' found, which one do you want to use?`,
                    type: 'list',
                    choices: fileVersions,
                }
                questions.push(question)
            }
        }
        return questions as inquirer.QuestionCollection<{ [name: string]: string }>
    }

    sortOutDuplicates(girFilesGrouped: GroupedGirFiles, answers: { [name: string]: string }): Set<string> {
        const result = new Set<string>()
        for (const id in girFilesGrouped) {
            const group = girFilesGrouped[id]
            if (group.fullNames.size === 1) {
                result.add(Array.from(group.fullNames)[0])
            } else if (group.fullNames.size > 1 && answers[group.name]) {
                result.add(answers[group.name])
            }
        }
        return result
    }

    async askForVersions(foundGirModules: Set<string>): Promise<Set<string>> {
        const girFilesGrouped = this.groupGirFiles(foundGirModules)
        const questions = this.generateFileVersionQuestions(girFilesGrouped)
        const answers: { [name: string]: string } = await inquirer.prompt(questions)
        this.log('answers', answers)
        return this.sortOutDuplicates(girFilesGrouped, answers)
    }

    async run(): Promise<void> {
        const { argv, flags } = this.parse(Generate)
        const outDir: string | null = flags.print ? null : Path.join(process.cwd(), flags.outdir)
        const girDirectory = flags.girDirectory
        const tsForGir = new TsForGir(flags.verbose, flags.prettify)
        const foundGirModules = await tsForGir.findModules(girDirectory, argv)
        const choosedGirModules = await this.askForVersions(foundGirModules)
        this.log('choosedGirModules', choosedGirModules)
        const environments: Environment[] = flags.environment as Environment[]
        const buildType: BuildType | undefined = flags.buildType as BuildType | undefined

        if (argv.length === 0) {
            this.error("Need to pass an argument via 'ts-for-git generate [arguments here]'!")
            return
        }

        if (choosedGirModules.size === 0) {
            this.error('No module found!')
            return
        }

        for (const i in environments) {
            if (environments[i]) {
                const defaultBuildType = environments[i] === 'gjs' ? 'lib' : 'types'

                tsForGir.main(outDir, girDirectory, choosedGirModules, environments[i], buildType || defaultBuildType)
            }
        }
    }
}

// new CLI(process.argv, {})
