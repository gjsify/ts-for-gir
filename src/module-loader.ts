import * as inquirer from 'inquirer'
import glob from 'tiny-glob'
import Path from 'path'
import { GroupedGirFiles } from './types'
import { Logger } from './logger'

export class ModuleLoader {
    log: Logger
    constructor(verbose: boolean) {
        this.log = Logger.getInstance('', verbose, 'ModuleLoader')
    }

    /**
     * Groupes Gir modules by name id
     * E.g. Gtk-3.0 and Gtk-4.0 will be grouped
     * @param girFiles
     */
    private groupGirFiles(girFiles: Set<string>): GroupedGirFiles {
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

    private generateFileVersionQuestions(
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

    private sortOutDuplicates(girFilesGrouped: GroupedGirFiles, answers: { [name: string]: string }): Set<string> {
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

    public async getModules(girDirectory: string, modules: string[]): Promise<Set<string>> {
        const foundGirModules = await this.findModules(girDirectory, modules)
        const choosedGirModules = await this.askForVersions(foundGirModules)
        return choosedGirModules
    }

    public async askForVersions(foundGirModules: Set<string>): Promise<Set<string>> {
        const girFilesGrouped = this.groupGirFiles(foundGirModules)
        const questions = this.generateFileVersionQuestions(girFilesGrouped)
        const answers: { [name: string]: string } = await inquirer.prompt(questions)
        return this.sortOutDuplicates(girFilesGrouped, answers)
    }

    /**
     * Adds the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    public async findModules(girDirectory: string, modules: string[]): Promise<Set<string>> {
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
}
