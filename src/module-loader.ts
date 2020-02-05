/**
 * The ModuleLoader is used for reading gir modules from the file system and to solve conflicts (e.g. Gtk-3.0 and Gtk-4.0 would be a conflict)
 */

import * as inquirer from 'inquirer'
import glob from 'tiny-glob'
import Path from 'path'
import fs from 'fs'
import * as xml2js from 'xml2js'
import {
    GroupedGirFiles,
    ParsedGir,
    GenerateConfig,
    GirModules,
    ResolveType,
    ResolveGirModule,
    GroupedGirFile,
} from './types'
import { GirModule } from './gir-module'
import { Config } from './config'
import { Logger } from './logger'
import { Utils } from './utils'

export class ModuleLoader {
    log: Logger
    constructor(private readonly config: GenerateConfig) {
        this.log = new Logger('', config.verbose, 'ModuleLoader')
    }

    /**
     * Groupes Gir modules by name id
     * E.g. Gtk-3.0 and Gtk-4.0 will be grouped
     * @param girFiles
     */
    private groupGirFiles(resolveGirModules: Set<ResolveGirModule> | ResolveGirModule[]): GroupedGirFiles {
        const girFilesGrouped: GroupedGirFiles = {}

        for (const resolveGirModule of resolveGirModules) {
            const { name } = Utils.splitModuleName(resolveGirModule.fullName)
            const id = name.toLowerCase()

            if (!girFilesGrouped[id]) {
                girFilesGrouped[id] = {
                    name: name,
                    modules: [resolveGirModule],
                    hasConflict: false,
                }
            } else {
                girFilesGrouped[id].modules.push(resolveGirModule)
                girFilesGrouped[id].hasConflict = true
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
            if (group.hasConflict) {
                const question = {
                    name: group.name,
                    message: `Multiple versions of '${group.name}' found, which one do you want to use?`,
                    type: 'list',
                    choices: group.modules.map(module => module.fullName),
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
    ): { keep: ResolveGirModule[]; ignore: ResolveGirModule[] } {
        const keep: ResolveGirModule[] = []
        const ignore: ResolveGirModule[] = []
        for (const id in girFilesGrouped) {
            const group = girFilesGrouped[id]
            const currentFullName = answers[group.name]
            if (!group.hasConflict) {
                keep.push(group.modules[0])
            } else {
                const keepModule = group.modules.find(resolveGirModule => resolveGirModule.fullName === currentFullName)
                if (!keepModule) {
                    throw new Error('Module not found!')
                }
                keep.push(keepModule)
                ignore.push(...group.modules.filter(resolveGirModule => resolveGirModule.fullName !== currentFullName))
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
    private async askAddIgnorePrompt(ignore: ResolveGirModule[]): Promise<void> {
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
                await Config.addToConfig({ ignore: ignore.map(currentIgnoreModule => currentIgnoreModule.fullName) })
            } catch (error) {
                this.log.error(error)
                process.exit(1)
            }

            this.log.log(`Add ignored modules to '${Config.configFilePath}'`)
        }
    }

    /**
     * Reads a gir xml module file and creates an object of GirModule
     * @param fillName
     * @param config
     */
    private async loadGirModuleFromXml(fullName: string): Promise<GirModule | null> {
        const filePath = Path.join(this.config.girDirectory, fullName + '.gir')
        if (!fs.existsSync(filePath)) {
            this.log.error(`ENOENT: no such file or directory, open '${filePath}'`)
            return null
        }
        this.log.log(`Parsing ${filePath}...`)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const result = (await xml2js.parseStringPromise(fileContents)) as ParsedGir
        const gi = new GirModule(result, this.config)
        return gi
    }

    /**
     * Reads the gir xml module files and creates an object of GirModule for each module
     * @param girModulesToRead
     * @param girModules is modified and corresponds to the return value
     * @param config
     */
    private async loadGirModules(
        girModulesToRead: string[] | Set<string>,
        girModules: ResolveGirModule[] = [],
        resolvedBy = ResolveType.BY_HAND,
    ): Promise<ResolveGirModule[]> {
        // A copy is needed here because we are changing the array for the while loop
        const girToLoad = Array.from(girModulesToRead)

        while (girToLoad.length > 0) {
            const fullName = girToLoad.shift()
            if (!fullName) throw new Error(`Module name '${fullName} 'not found!`)
            const gi = await this.loadGirModuleFromXml(fullName)
            if (gi && gi.fullName && !girModules.find(girModule => girModule.fullName === gi.fullName)) {
                const addModule = {
                    fullName: gi.fullName,
                    module: gi,
                    resolvedBy,
                }
                girModules.push(addModule)
                // Load dependencies
                if (gi.dependencies.length > 0) {
                    this.loadGirModules(gi.dependencies, girModules, ResolveType.DEPENDENCE)
                }
            }
        }
        return girModules
    }

    /**
     * If multiple versions of the same module are found, this will aks the user with input prompts for the version he wish to use
     * @param resolveFirModules
     */
    private async askForVersionsPrompt(girFilesGrouped: GroupedGirFiles): Promise<ResolveGirModule[]> {
        const questions = this.generateFileVersionQuestions(girFilesGrouped)
        const answers: { [name: string]: string } = await inquirer.prompt(questions)
        const { keep, ignore } = this.sortOutUnchoosedVersions(girFilesGrouped, answers)
        if (ignore && ignore.length > 0) {
            this.log.log(`The following modules are ignored: \n${ignore.join('\n')}`)
            await this.askAddIgnorePrompt(ignore)
        }

        return keep
    }

    /**
     * Find modules with the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    private async findModules(modules: string[], ignores: string[] = []): Promise<Set<string>> {
        const foundModules = new Set<string>()

        for (const i in modules) {
            if (modules[i]) {
                const filename = `${modules[i]}.gir`
                const files = await glob(filename, { cwd: this.config.girDirectory })
                let globModules = files.map(file => Path.basename(file, '.gir'))
                // Filter out the ignored modules
                globModules = globModules.filter(mod => {
                    return !ignores.includes(mod)
                })
                globModules.forEach(mod => foundModules.add(mod))
            }
        }
        return foundModules
    }

    /**
     * Loads all found modules and sorts out those that the user does not want to use
     * (if multiple versions of a gir file are found) including their dependencies
     * @param girDirectory
     * @param modules
     */
    public async getModulesResolved(modules: string[], ignores: string[] = []): Promise<GirModule[]> {
        const foundGirModules = await this.findModules(modules, ignores)
        const girModules = await this.loadGirModules(foundGirModules)
        const girFilesGrouped = this.groupGirFiles(girModules)
        // const girModules = girModules.map((girModule) => )
        const choosedGirModules = await this.askForVersionsPrompt(girFilesGrouped)
        return choosedGirModules.map(choosedGirModule => choosedGirModule.module)
    }

    /**
     * Find modules with the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    public async getModules(modules: string[], ignores: string[] = []): Promise<GroupedGirFile[]> {
        const foundGirModules = await this.findModules(modules, ignores)
        const girModules = await this.loadGirModules(foundGirModules)
        const girFilesGrouped = this.groupGirFiles(girModules)
        return Object.values(girFilesGrouped)
    }
}
