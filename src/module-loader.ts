/**
 * The ModuleLoader is used for reading gir modules from the file system and to solve conflicts (e.g. Gtk-3.0 and Gtk-4.0 would be a conflict)
 */

import * as inquirer from 'inquirer'
import glob from 'tiny-glob'
import Path from 'path'
import fs from 'fs'
import * as xml2js from 'xml2js'
import { GroupedGirFiles, ParsedGir, GenerateConfig } from './types'
import { GirModule } from './gir-module'
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

    /**
     * Sorts out the module the user has not choosed via cli prompt
     * @param girFilesGrouped
     * @param answers
     */
    private sortOutUnchoosedVersions(
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

    /**
     * Asks via cli prompt if the user wants to add the ignored modules to his config file
     * @param ignore
     */
    private async askAddIgnore(ignore: string[]): Promise<void> {
        const questions = [
            {
                name: 'addToIgnore',
                message: `Do you want to add the ignored modules to your config so that you don't need to select them again next time?\n  Config path: '${Config.configFilePath}`,
                type: 'list',
                choices: ['No', 'Yes'],
            },
        ]

        const answer: { [name: string]: string } = await inquirer.prompt(questions)

        if (answer.addToIgnore === 'Yes') {
            try {
                await Config.addToConfig({ ignore })
            } catch (error) {
                this.log.error(error)
                process.exit(1)
            }

            this.log.log(`Add ignored modules to '${Config.configFilePath}'`)
        }
    }

    /**
     * Reads parses the gir xml module files
     * @param girModulesToRead
     * @param config
     */
    private async readModule(
        girModulesToRead: string[] | Set<string>,
        config: GenerateConfig,
    ): Promise<{ [key: string]: GirModule }> {
        const girModules: { [key: string]: GirModule } = {}
        // A copy is needed here because we are changing the array
        const girToLoad = Array.from(girModulesToRead)

        while (girToLoad.length > 0) {
            const name = girToLoad.shift()
            if (!name) throw new Error('Module name not found!')
            const filePath = Path.join(config.girDirectory, name + '.gir')
            if (!fs.existsSync(filePath)) {
                this.log.warn(`ENOENT: no such file or directory, open '${filePath}'`)
                continue
            }
            this.log.log(`Parsing ${filePath}...`)
            const fileContents = fs.readFileSync(filePath, 'utf8')
            const result = (await xml2js.parseStringPromise(fileContents)) as ParsedGir

            const gi = new GirModule(result, config)
            if (gi.fullName) {
                girModules[gi.fullName] = gi
            }
        }
        return girModules
    }

    // TODO WIP
    private checkDependencies(choosedGirModules, config: GenerateConfig) {
        const girModules = this.readModule(choosedGirModules, config)
    }

    /**
     * If multiple versions of the same module are found, this will aks the user with input prompts for the version he wish to use
     * @param foundGirModules
     */
    private async askForVersions(foundGirModules: Set<string>): Promise<string[]> {
        const girFilesGrouped = this.groupGirFiles(foundGirModules)
        const questions = this.generateFileVersionQuestions(girFilesGrouped)
        const answers: { [name: string]: string } = await inquirer.prompt(questions)
        const { keep, ignore } = this.sortOutUnchoosedVersions(girFilesGrouped, answers)
        if (ignore && ignore.length > 0) {
            this.log.log(`The following modules are ignored: \n${ignore.join('\n')}`)
            await this.askAddIgnore(ignore)
        }

        return keep
    }

    /**
     * Loads all found modules and sorts out those that the user does not want to use (if multiple versions of a gir file are found)
     * @param girDirectory
     * @param modules
     */
    public async getModules(girDirectory: string, modules: string[], ignore: string[]): Promise<string[]> {
        const foundGirModules = await this.findModules(girDirectory, modules, ignore)
        const choosedGirModules = await this.askForVersions(foundGirModules)
        return choosedGirModules
    }

    /**
     * Find modules with the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    public async findModules(girDirectory: string, modules: string[], ignore: string[]): Promise<Set<string>> {
        const foundModules = new Set<string>()

        for (const i in modules) {
            if (modules[i]) {
                const filename = `${modules[i]}.gir`
                const files = await glob(filename, { cwd: girDirectory })
                let globModules = files.map(file => Path.basename(file, '.gir'))
                // Filter out the ignored modules
                globModules = globModules.filter(module => {
                    return !ignore.includes(module)
                })
                globModules.forEach(module => foundModules.add(module))
            }
        }
        return foundModules
    }
}
