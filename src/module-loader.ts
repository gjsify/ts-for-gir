/**
 * The ModuleLoader is used for reading gir modules from the file system and to solve conflicts (e.g. Gtk-3.0 and Gtk-4.0 would be a conflict)
 */

import * as inquirer from 'inquirer'
import glob from 'tiny-glob'
import Path from 'path'
import fs from 'fs'
import { bold } from 'chalk'
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
    AnswerVersion,
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
        const girModulesGrouped: GirModulesGroupedMap = {}

        for (const resolveGirModule of resolveGirModules) {
            const { name } = Utils.splitModuleName(resolveGirModule.fullName)
            const id = name.toLowerCase()

            if (!girModulesGrouped[id]) {
                girModulesGrouped[id] = {
                    name: name,
                    modules: [resolveGirModule],
                    hasConflict: false,
                }
            } else {
                girModulesGrouped[id].modules.push(resolveGirModule)
                girModulesGrouped[id].hasConflict = true
            }
        }

        return girModulesGrouped
    }

    /**
     * Sorts out the module the user has not choosed via cli prompt
     * @param girModulesGrouped
     * @param keepFullName Users choosed module fullName
     */
    private sortVersionsByAnswer(
        girModulesGrouped: GirModulesGrouped,
        answeredFullName: string,
    ): { keep: Set<GirModuleResolvedBy>; ignore: Set<GirModuleResolvedBy> } {
        const keep = new Set<GirModuleResolvedBy>()
        let ignore = new Set<GirModuleResolvedBy>()

        if (!girModulesGrouped.hasConflict) {
            keep.add(girModulesGrouped.modules[0])
        } else {
            const keepModule = this.findGirModuleByFullName(girModulesGrouped.modules, answeredFullName) as
                | GirModuleResolvedBy
                | undefined
            if (!keepModule) {
                throw new Error('Module not found!')
            }
            keep.add(keepModule)
            ignore = Utils.union(
                ignore,
                girModulesGrouped.modules.filter(resolveGirModule => resolveGirModule.fullName !== answeredFullName),
            )
        }

        return {
            keep,
            ignore,
        }
    }

    private generateContinueQuestion(
        message = `Do you want to continue?`,
        choices = ['Yes', 'Go back'],
    ): inquirer.ListQuestion {
        const question: inquirer.ListQuestion = {
            name: 'continue',
            message,
            type: 'list',
            choices,
        }
        return question
    }

    private async askContinuePrompt(deps: GirModuleResolvedBy[] | Set<GirModuleResolvedBy>): Promise<boolean> {
        const question = this.generateContinueQuestion()
        const size = (deps as GirModuleResolvedBy[]).length || (deps as Set<GirModuleResolvedBy>).size || 0
        if (size > 0) {
            this.log.log(
                bold(
                    '\nThe following modules have the unselected modules as dependencies, which would also be added to the igorier list:',
                ),
            )
            for (const dep of deps) {
                this.log.log(`- ${dep.fullName}`)
            }
            this.log.log(bold('\n'))
        } else {
            this.log.log(bold('\nNo dependencies found on the unselected modules'))
        }

        const answer: string = (await inquirer.prompt([question])).continue
        return answer === 'Yes'
    }

    private generateModuleVersionQuestion(
        girModuleGrouped: GirModulesGrouped,
        message?: string,
    ): inquirer.ListQuestion {
        message = message || `Multiple versions of '${girModuleGrouped.name}' found, which one do you want to use?`
        const question: inquirer.ListQuestion = {
            name: girModuleGrouped.name,
            message,
            type: 'list',
            choices: girModuleGrouped.modules.map(module => module.fullName),
        }
        return question
    }

    /**
     * Find modules that depend on the module with the name 'fullName'
     * @param girModulesGroupedMap
     * @param fullName
     */
    private findModulesDependOnName(
        girModulesGroupedMap: GirModulesGroupedMap,
        fullName: string,
    ): Set<GirModuleResolvedBy> {
        const girModules = new Set<GirModuleResolvedBy>()
        for (const girModulesGrouped of Object.values(girModulesGroupedMap)) {
            for (const girModuleResolvedBy of girModulesGrouped.modules) {
                if (girModuleResolvedBy.fullName === fullName) {
                    continue
                }
                for (const dep of girModuleResolvedBy.module.dependencies) {
                    if (dep === fullName && !girModules.has(girModuleResolvedBy)) {
                        girModules.add(girModuleResolvedBy)
                    }
                }
            }
        }
        return girModules
    }

    private findModulesDependOnNames(
        girModulesGroupedMap: GirModulesGroupedMap,
        fullNames: string[],
    ): Set<GirModuleResolvedBy> {
        let girModules = new Set<GirModuleResolvedBy>()
        for (const fullName of fullNames) {
            girModules = Utils.union(girModules, this.findModulesDependOnName(girModulesGroupedMap, fullName))
        }
        return girModules
    }

    private async askForVersionsPrompt(girModulesGrouped: GirModulesGrouped): Promise<AnswerVersion> {
        const question = this.generateModuleVersionQuestion(girModulesGrouped)
        if (!question.choices) {
            throw new Error('No valid questions!')
        }
        const choosed: string = (await inquirer.prompt([question]))[girModulesGrouped.name]
        if (!choosed) {
            throw new Error('No valid answer!')
        }

        const unchoosed = (question.choices as string[]).filter(choice => choice !== choosed)
        return {
            choosed,
            unchoosed,
        }
    }

    /**
     * If multiple versions of the same module are found, this will aks the user with input prompts for the version he wish to use.
     * Ignores also modules that depend on a module that should be ignored
     * @param resolveFirModules
     */
    private async askForEachConflictVersionsPrompt(
        girModulesGroupedMap: GirModulesGroupedMap,
    ): Promise<{ keep: Set<GirModuleResolvedBy>; ignore: Set<GirModuleResolvedBy> }> {
        let keep = new Set<GirModuleResolvedBy>()
        let ignore = new Set<GirModuleResolvedBy>()
        for (const girModulesGrouped of Object.values(girModulesGroupedMap)) {
            // Ask for version if there is a conflict
            if (girModulesGrouped.hasConflict) {
                let goOn = false
                let answer: AnswerVersion | null = null
                let wouldIgnoreDeps = new Set<GirModuleResolvedBy>()
                while (!goOn) {
                    answer = await this.askForVersionsPrompt(girModulesGrouped)
                    // Check modules that depend on the unchoosed modules
                    wouldIgnoreDeps = this.findModulesDependOnNames(girModulesGroupedMap, answer.unchoosed)
                    // Do not check dependencies that have already been ignored
                    wouldIgnoreDeps = Utils.difference(wouldIgnoreDeps, ignore)
                    goOn = await this.askContinuePrompt(wouldIgnoreDeps)
                }
                if (!answer) {
                    throw new Error('Error in processing the prompt answer')
                }
                // Now it will ignore this deps
                ignore = Utils.union<GirModuleResolvedBy>(ignore, wouldIgnoreDeps)
                const unionMe = this.sortVersionsByAnswer(girModulesGrouped, answer.choosed)
                keep = Utils.union<GirModuleResolvedBy>(keep, unionMe.keep)
                ignore = Utils.union<GirModuleResolvedBy>(ignore, unionMe.ignore)
            } else {
                keep = Utils.union<GirModuleResolvedBy>(keep, girModulesGrouped.modules)
            }
        }
        if (ignore && ignore.size > 0) {
            const ignoreLogList =
                '- ' +
                Array.from(ignore)
                    .map(ignore => ignore.fullName)
                    .join('\n- ')

            this.log.log(bold(`\n The following modules will be ignored:`))
            this.log.log(`\n${ignoreLogList}\n`)
            await this.askAddToIgnorePrompt(ignore)
        }

        // To be sure that all ignored modules are really ignored
        keep = Utils.difference(keep, ignore)
        return {
            keep,
            ignore,
        }
    }

    /**
     * Asks via cli prompt if the user wants to add the ignored modules to his config file
     * @param ignore
     */
    private async askAddToIgnorePrompt(ignore: GirModuleResolvedBy[] | Set<GirModuleResolvedBy>): Promise<void> {
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
                await Config.addToConfig({
                    ignore: Array.from(ignore).map(currentIgnoreModule => currentIgnoreModule.fullName),
                })
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
    private extendDependencyMapByGirModule(girModule: GirModule): void {
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
            return null
        }
        this.log.log(`Parsing ${filePath}...`)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const result = (await xml2js.parseStringPromise(fileContents)) as ParsedGir
        const gi = new GirModule(result, this.config)
        // Figure out transitive module dependencies
        this.extendDependencyMapByGirModule(gi)
        return gi
    }

    /**
     * Returns a girModule found by `fullName` property
     * @param girModules Array of girModules
     * @param fullName Full name like 'Gtk-3.0' you are looking for
     */
    private findGirModuleByFullName(
        girModules: (GirModuleResolvedBy | GirModule)[],
        fullName: string,
    ): GirModuleResolvedBy | GirModule | undefined {
        return girModules.find(girModule => girModule.fullName === fullName)
    }

    /**
     * Checks if a girModule with an equal `fullName` property exists
     * @param girModules
     * @param fullName
     */
    private existsGirModule(girModules: (GirModuleResolvedBy | GirModule)[], fullName: string): boolean {
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
        failedGirModules = new Set<string>(),
    ): Promise<{ loaded: GirModuleResolvedBy[]; failed: Set<string> }> {
        // A copy is needed here because we are changing the array for the while loop
        const girToLoad = Array.from(girModulesToRead)
        let newModuleFound = false

        while (girToLoad.length > 0) {
            const fullName = girToLoad.shift()
            if (!fullName) throw new Error(`Module name '${fullName} 'not found!`)
            // If module has not already been loaded
            if (!this.existsGirModule(girModules, fullName)) {
                const gi = await this.loadAndCreateGirModule(fullName)
                if (!gi) {
                    if (!failedGirModules.has(fullName)) {
                        this.log.warn(`No gir file found for '${fullName}', this module is ignored`)
                        failedGirModules.add(fullName)
                    }
                } else if (gi && gi.fullName) {
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
            return {
                loaded: girModules,
                failed: failedGirModules,
            }
        }

        // Figure out transitive module dependencies
        this.setTraverseDependenciesForModules(girModules)

        // Load girModules for dependencies
        for (const girModule of girModules) {
            // Load dependencies
            if (girModule.module.transitiveDependencies.length > 0) {
                await this.loadGirModules(
                    girModule.module.transitiveDependencies,
                    girModules,
                    ResolveType.DEPENDENCE,
                    failedGirModules,
                )
            }
        }
        return {
            loaded: girModules,
            failed: failedGirModules,
        }
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
    public async getModulesResolved(
        modules: string[],
        ignores: string[] = [],
    ): Promise<{ keep: Set<GirModuleResolvedBy>; ignore: Set<GirModuleResolvedBy>; failed: Set<string> }> {
        const foundGirModules = await this.findModules(modules, ignores)
        const { loaded, failed } = await this.loadGirModules(foundGirModules)
        const girModulesGrouped = this.groupGirFiles(loaded)
        const { keep, ignore } = await this.askForEachConflictVersionsPrompt(girModulesGrouped)
        return { keep, ignore, failed }
    }

    /**
     * Find modules with the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    public async getModules(
        modules: string[],
        ignores: string[] = [],
    ): Promise<{ grouped: GirModulesGroupedMap; loaded: GirModuleResolvedBy[]; failed: Set<string> }> {
        const foundGirModules = await this.findModules(modules, ignores)
        const { loaded, failed } = await this.loadGirModules(foundGirModules)
        const grouped = this.groupGirFiles(loaded)
        return { grouped, loaded, failed }
    }
}
