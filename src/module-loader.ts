/**
 * The ModuleLoader is used for reading gir modules from the file system and to solve conflicts (e.g. Gtk-3.0 and Gtk-4.0 would be a conflict)
 */

import * as inquirer from 'inquirer'
import glob from 'tiny-glob'
import Path from 'path'
import fs from 'fs'
import * as xml2js from 'xml2js'
import {
    GirModulesGroupedMap,
    ParsedGir,
    GenerateConfig,
    ResolveType,
    GirModuleResolvedBy,
    GirModulesGrouped,
    DependencyMap,
    Dependency,
} from './types'
import { GirModule } from './gir-module'
import { Config } from './config'
import { Logger } from './logger'
import { Utils } from './utils'

export class ModuleLoader {
    log: Logger
    /** Transitive module dependencies */
    modDependencyMap: DependencyMap = {}
    constructor(private readonly config: GenerateConfig) {
        this.log = new Logger('', config.verbose, 'ModuleLoader')
    }

    /**
     * Groupes Gir modules by name id
     * E.g. Gtk-3.0 and Gtk-4.0 will be grouped
     * @param girFiles
     */
    private groupGirFiles(resolveGirModules: Set<GirModuleResolvedBy> | GirModuleResolvedBy[]): GirModulesGroupedMap {
        const girFilesGrouped: GirModulesGroupedMap = {}

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
        girFilesGrouped: GirModulesGroupedMap,
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
        girFilesGrouped: GirModulesGroupedMap,
        answers: { [name: string]: string },
    ): { keep: GirModuleResolvedBy[]; ignore: GirModuleResolvedBy[] } {
        const keep: GirModuleResolvedBy[] = []
        const ignore: GirModuleResolvedBy[] = []
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
    private async askAddIgnorePrompt(ignore: GirModuleResolvedBy[]): Promise<void> {
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
     * Figure out transitive module dependencies
     * @param fullName
     * @param result
     */
    private traverseDependencies(fullName: string, result: { [name: string]: 1 } = {}): void {
        const deps = this.modDependencyMap[fullName]
        if (Utils.isIterable(deps)) {
            for (const dep of deps) {
                if (result[dep.fullName]) continue
                result[dep.fullName] = 1
                this.traverseDependencies(dep.fullName, result)
            }
        } else {
            // this.log.warn('`deps` is not iterable: ', deps, fullName, modDependencyMap)
        }
    }

    /**
     * Extends the modDependencyMap by the current Module,
     * should be called for each girModule so that the modDependencyMap is complete
     * @param girModule
     */
    private extendDependencyMapFromGirModule(girModule: GirModule): void {
        this.modDependencyMap[girModule.fullName || '-'] = Utils.map(
            girModule.dependencies || [],
            (fullName: string): Dependency => {
                const { name, version } = Utils.splitModuleName(fullName)
                return {
                    name,
                    version,
                    fullName,
                }
            },
        )
    }

    /**
     * Sets the traverse dependencies for the current girModule,
     * is required so that all dependencies can be found internally when generating the dependency imports for the module .d.ts file
     * @param girModules
     */
    private setTraverseDependenciesForModules(girModules: GirModuleResolvedBy[]): void {
        for (const girModule of girModules) {
            const result: { [name: string]: 1 } = {}
            this.traverseDependencies(girModule.fullName, result)
            girModule.module.transitiveDependencies = Object.keys(result)
        }
    }

    /**
     * Reads a gir xml module file and creates an object of GirModule.
     * Also sets the setDependencyMap
     * @param fillName
     * @param config
     */
    private async loadAndCreateGirModule(fullName: string): Promise<GirModule | null> {
        const filePath = Path.join(this.config.girDirectory, fullName + '.gir')
        if (!fs.existsSync(filePath)) {
            this.log.warn(`ENOENT: no such file or directory, open '${filePath}'`)
            return null
        }
        this.log.log(`Parsing ${filePath}...`)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const result = (await xml2js.parseStringPromise(fileContents)) as ParsedGir
        const gi = new GirModule(result, this.config)
        this.extendDependencyMapFromGirModule(gi)
        return gi
    }

    private findGirModuleByFullName(
        girModules: GirModuleResolvedBy[],
        fullName: string,
    ): GirModuleResolvedBy | undefined {
        return girModules.find(girModule => girModule.fullName === fullName)
    }

    private existsGirModule(girModules: GirModuleResolvedBy[], fullName: string): boolean {
        const foundModule = this.findGirModuleByFullName(girModules, fullName)

        return typeof foundModule !== 'undefined'
    }

    /**
     * Reads the gir xml module files and creates an object of GirModule for each module
     * @param girModulesToRead
     * @param girModules is modified and corresponds to the return value
     * @param config
     */
    private async loadGirModules(
        girModulesToRead: string[] | Set<string>,
        girModules: GirModuleResolvedBy[] = [],
        resolvedBy = ResolveType.BY_HAND,
    ): Promise<GirModuleResolvedBy[]> {
        // A copy is needed here because we are changing the array for the while loop
        const girToLoad = Array.from(girModulesToRead)
        let newModuleFound = false

        while (girToLoad.length > 0) {
            const fullName = girToLoad.shift()
            if (!fullName) throw new Error(`Module name '${fullName} 'not found!`)
            // If module has not already been loaded
            if (!this.existsGirModule(girModules, fullName)) {
                const gi = await this.loadAndCreateGirModule(fullName)
                if (gi && gi.fullName) {
                    const addModule = {
                        fullName: gi.fullName,
                        module: gi,
                        resolvedBy,
                    }
                    girModules.push(addModule)
                    newModuleFound = true
                }
            }
        }

        if (!newModuleFound) {
            return girModules
        }
        this.setTraverseDependenciesForModules(girModules)

        // Load girModules for dependencies
        for (const girModule of girModules) {
            // Load dependencies
            if (girModule.module.transitiveDependencies.length > 0) {
                await this.loadGirModules(girModule.module.transitiveDependencies, girModules, ResolveType.DEPENDENCE)
            }
        }
        return girModules
    }

    /**
     * If multiple versions of the same module are found, this will aks the user with input prompts for the version he wish to use
     * @param resolveFirModules
     */
    private async askForVersionsPrompt(girFilesGrouped: GirModulesGroupedMap): Promise<GirModuleResolvedBy[]> {
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
        const choosedGirModules = await this.askForVersionsPrompt(girFilesGrouped)
        return choosedGirModules.map(choosedGirModule => choosedGirModule.module)
    }

    /**
     * Find modules with the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    public async getModules(modules: string[], ignores: string[] = []): Promise<GirModulesGrouped[]> {
        const foundGirModules = await this.findModules(modules, ignores)
        const girModules = await this.loadGirModules(foundGirModules)
        const girFilesGrouped = this.groupGirFiles(girModules)
        return Object.values(girFilesGrouped)
    }
}
