/**
 * The ModuleLoader is used for reading gir modules from the file system and to solve conflicts (e.g. Gtk-3.0 and Gtk-4.0 would be a conflict)
 */

import * as inquirer from 'inquirer'
import glob from 'tiny-glob'
import Path from 'path'
import { GroupedGirFiles } from './types'
import { Config } from './config'
import { Logger } from './logger'
import { Utils } from './utils'

export class ModuleLoader {
    log: Logger
    constructor(verbose: boolean) {
        this.log = new Logger('', verbose, 'ModuleLoader')
    }

    /**
     * Groupes Gir modules by name id
     * E.g. Gtk-3.0 and Gtk-4.0 will be grouped
     * @param girFiles
     */
    private groupGirFiles(girFiles: Set<string>): GroupedGirFiles {
        const girFilesGrouped: GroupedGirFiles = {}

        for (const fullName of girFiles) {
            const { name } = Utils.splitModuleName(fullName)
            const id = name.toLowerCase()

            if (!girFilesGrouped[id]) {
                girFilesGrouped[id] = {
                    name,
                    fullNames: [fullName],
                }
            } else {
                girFilesGrouped[id].fullNames.push(fullName)
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
            if (group.fullNames.length > 1) {
                const question = {
                    name: group.name,
                    message: `Multiple versions of '${group.name}' found, which one do you want to use?`,
                    type: 'list',
                    choices: group.fullNames,
                }
                questions.push(question)
            }
        }
        return questions as inquirer.QuestionCollection<{ [name: string]: string }>
    }

    private sortOutDuplicates(
        girFilesGrouped: GroupedGirFiles,
        answers: { [name: string]: string },
    ): { keep: string[]; ignore: string[] } {
        const keep: string[] = []
        const ignore: string[] = []
        for (const id in girFilesGrouped) {
            const group = girFilesGrouped[id]
            if (group.fullNames.length === 1) {
                keep.push(group.fullNames[0])
            } else if (group.fullNames.length > 1 && answers[group.name]) {
                keep.push(answers[group.name])
                ignore.push(...group.fullNames.filter(fullName => fullName !== answers[group.name]))
            }
        }

        return {
            keep,
            ignore,
        }
    }

    private async askAddIgnore(): Promise<void> {
        const questions = [
            {
                name: 'addToIgnore',
                message: `Do you want to add the ignored modules to your config so that you don't need to select them again next time?`,
                type: 'list',
                choices: ['No', 'Yes'],
            },
        ]

        const answer: { [name: string]: string } = await inquirer.prompt(questions)

        if (answer.addToIgnore === 'Yes') {
            // TODO
            this.log.log(`Add ignored modules to '${Config.configFilePath}'`)
        }
    }

    /**
     * Loads all found modules and sorts out those that the user does not want to use (if multiple versions of a gir file are found)
     * @param girDirectory
     * @param modules
     */
    public async getModules(girDirectory: string, modules: string[]): Promise<string[]> {
        const foundGirModules = await this.findModules(girDirectory, modules)
        const choosedGirModules = await this.askForVersions(foundGirModules)
        return choosedGirModules
    }

    /**
     * If multiple versions of the same module are found, this will aks the user with input prompts for the version he wish to use
     * @param foundGirModules
     */
    public async askForVersions(foundGirModules: Set<string>): Promise<string[]> {
        const girFilesGrouped = this.groupGirFiles(foundGirModules)
        const questions = this.generateFileVersionQuestions(girFilesGrouped)
        const answers: { [name: string]: string } = await inquirer.prompt(questions)
        const { keep, ignore } = this.sortOutDuplicates(girFilesGrouped, answers)
        if (ignore) {
            this.log.log(`The following modules are ignored: \n${ignore.join('\n')}`)
            await this.askAddIgnore()
        }

        return keep
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
