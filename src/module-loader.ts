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
            const { name } = Utils.splitModuleName(resolveGirModule.packageName)
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
     * @param keepFullName Users choosed module packageName
     */
    private sortVersionsByAnswer(
        girModulesGrouped: GirModulesGrouped,
        answeredFullName: string,
    ): { keep: Set<GirModuleResolvedBy>; ignore: string[] } {
        const keep = new Set<GirModuleResolvedBy>()
        let ignore: string[] = []

        if (!girModulesGrouped.hasConflict) {
            keep.add(girModulesGrouped.modules[0])
        } else {
            const keepModule = this.findGirModuleByFullName(girModulesGrouped.modules, answeredFullName) as
                | GirModuleResolvedBy
                | undefined
            const girModulePackageNames = girModulesGrouped.modules.map(
                (resolveGirModule) => resolveGirModule.packageName,
            )
            if (!keepModule) {
                throw new Error('Module not found!')
            }
            keep.add(keepModule)
            const toIgnore = girModulePackageNames.filter((packageName) => packageName !== answeredFullName)
            ignore = ignore.concat(toIgnore)
        }

        return {
            keep,
            ignore,
        }
    }

    private generateContinueQuestion(
        message = `do you want to continue?`,
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

    private generateIgnoreDepsQuestion(
        message = `Do you want to ignore them too?`,
        choices = ['Yes', 'No', 'Go back'],
    ): inquirer.ListQuestion {
        const question: inquirer.ListQuestion = {
            name: 'continue',
            message,
            type: 'list',
            choices,
        }
        return question
    }

    private async askIgnoreDepsPrompt(
        deps: GirModuleResolvedBy[] | Set<GirModuleResolvedBy>,
    ): Promise<'Yes' | 'No' | 'Go back'> {
        let question: inquirer.ListQuestion<inquirer.Answers> | null = null
        const size = (deps as GirModuleResolvedBy[]).length || (deps as Set<GirModuleResolvedBy>).size || 0
        if (size > 0) {
            this.log.log(bold('\nThe following modules have the ignored modules as dependencies:'))
            for (const dep of deps) {
                this.log.log(`- ${dep.packageName}`)
            }
            this.log.log(bold('\n'))
            question = this.generateIgnoreDepsQuestion()
        } else {
            this.log.log(bold('\nNo dependencies found on the ignored modules'))
            question = this.generateContinueQuestion()
        }

        const answer: string = (await inquirer.prompt([question])).continue
        return answer as 'Yes' | 'No' | 'Go back'
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
            choices: girModuleGrouped.modules.map((module) => module.packageName),
        }
        return question
    }

    /**
     * Find modules that depend on the module with the name 'packageName'
     * @param girModulesGroupedMap
     * @param packageName
     */
    private findModulesDependOnPackage(
        girModulesGroupedMap: GirModulesGroupedMap,
        packageName: string,
    ): GirModuleResolvedBy[] {
        const girModules: GirModuleResolvedBy[] = []
        for (const girModulesGrouped of Object.values(girModulesGroupedMap)) {
            for (const girModuleResolvedBy of girModulesGrouped.modules) {
                if (girModuleResolvedBy.packageName === packageName) {
                    continue
                }
                for (const dep of girModuleResolvedBy.module.dependencies) {
                    if (dep === packageName && !girModules.includes(girModuleResolvedBy)) {
                        girModules.push(girModuleResolvedBy)
                    }
                }
            }
        }
        return girModules
    }

    /**
     * Find modules that depend on the module with the names in `packageNames`
     * @param girModulesGroupedMap
     * @param packageName
     */
    private findModulesDependOnPackages(
        girModulesGroupedMap: GirModulesGroupedMap,
        packageNames: string[],
    ): GirModuleResolvedBy[] {
        let girModules: GirModuleResolvedBy[] = []
        for (const packageName of packageNames) {
            girModules = girModules.concat(this.findModulesDependOnPackage(girModulesGroupedMap, packageName))
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

        const unchoosed = (question.choices as string[]).filter((choice) => choice !== choosed)
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
        ignore: string[],
    ): Promise<{ keep: Set<GirModuleResolvedBy>; ignore: string[] }> {
        let keep = new Set<GirModuleResolvedBy>()
        for (const girModulesGrouped of Object.values(girModulesGroupedMap)) {
            // Remove ignored modules from group
            girModulesGrouped.modules = girModulesGrouped.modules.filter(
                (girGroup) => !ignore.includes(girGroup.packageName),
            )
            girModulesGrouped.hasConflict = girModulesGrouped.modules.length >= 2

            if (girModulesGrouped.modules.length <= 0) {
                continue
            }

            // Ask for version if there is a conflict
            if (!girModulesGrouped.hasConflict) {
                keep = Utils.union<GirModuleResolvedBy>(keep, girModulesGrouped.modules)
            } else {
                let goBack = true
                let versionAnswer: AnswerVersion | null = null
                let ignoreDepsAnswer: 'Yes' | 'No' | 'Go back' | null = null
                let wouldIgnoreDeps: GirModuleResolvedBy[] = []
                while (goBack) {
                    versionAnswer = await this.askForVersionsPrompt(girModulesGrouped)
                    // Check modules that depend on the unchoosed modules
                    wouldIgnoreDeps = this.findModulesDependOnPackages(girModulesGroupedMap, versionAnswer.unchoosed)
                    // Do not check dependencies that have already been ignored
                    wouldIgnoreDeps = wouldIgnoreDeps.filter((dep) => !ignore.includes(dep.packageName))
                    ignoreDepsAnswer = await this.askIgnoreDepsPrompt(wouldIgnoreDeps)
                    goBack = ignoreDepsAnswer === 'Go back'
                }
                if (!versionAnswer) {
                    throw new Error('Error in processing the prompt versionAnswer')
                }

                if (ignoreDepsAnswer === 'Yes') {
                    // Also ignore the dependencies of the unselected version
                    ignore = ignore.concat(wouldIgnoreDeps.map((dep) => dep.packageName))
                }

                const unionMe = this.sortVersionsByAnswer(girModulesGrouped, versionAnswer.choosed)
                // Do not ignore the choosed package version
                keep = Utils.union<GirModuleResolvedBy>(keep, unionMe.keep)
                // Ignore the unchoosed package versions
                ignore = ignore.concat(unionMe.ignore)
            }
        }
        if (ignore && ignore.length > 0) {
            const ignoreLogList = '- ' + ignore.join('\n- ')

            this.log.log(bold(`\n The following modules will be ignored:`))
            this.log.log(`\n${ignoreLogList}\n`)
            await this.askAddToIgnoreToConfigPrompt(ignore)
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
    private async askAddToIgnoreToConfigPrompt(ignore: string[] | Set<string>): Promise<void> {
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
                    ignore: Array.from(ignore),
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
     * @param packageName
     * @param result
     */
    private traverseDependencies(packageName: string, result: { [name: string]: 1 } = {}): void {
        const deps = this.modDependencyMap[packageName]
        if (Utils.isIterable(deps)) {
            for (const dep of deps) {
                if (result[dep.packageName]) continue
                result[dep.packageName] = 1
                this.traverseDependencies(dep.packageName, result)
            }
        } else {
            // this.log.warn('`deps` is not iterable: ', deps, packageName, modDependencyMap)
        }
    }

    /**
     * Extends the modDependencyMap by the current Module,
     * should be called for each girModule so that the modDependencyMap is complete
     * @param girModule
     */
    private extendDependencyMapByGirModule(girModule: GirModule): void {
        this.modDependencyMap[girModule.packageName || '-'] = Utils.map(
            girModule.dependencies || [],
            (packageName: string): Dependency => {
                const { name, version } = Utils.splitModuleName(packageName)
                return {
                    name,
                    version,
                    packageName,
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
            this.traverseDependencies(girModule.packageName, result)
            girModule.module.transitiveDependencies = Object.keys(result)
        }
    }

    /**
     * Reads a gir xml module file and creates an object of GirModule.
     * Also sets the setDependencyMap
     * @param fillName
     * @param config
     */
    private async loadAndCreateGirModule(packageName: string): Promise<GirModule | null> {
        const file = Utils.findFileInDirs(this.config.girDirectories, packageName + '.gir')
        if (!file.exists || file.path === null) {
            return null
        }
        this.log.log(`Parsing ${file.path}...`)
        const fileContents = fs.readFileSync(file.path, 'utf8')
        const result = (await xml2js.parseStringPromise(fileContents)) as ParsedGir
        const gi = new GirModule(result, this.config)
        // Figure out transitive module dependencies
        this.extendDependencyMapByGirModule(gi)
        return gi
    }

    /**
     * Returns a girModule found by `packageName` property
     * @param girModules Array of girModules
     * @param packageName Full name like 'Gtk-3.0' you are looking for
     */
    private findGirModuleByFullName(
        girModules: (GirModuleResolvedBy | GirModule)[],
        packageName: string,
    ): GirModuleResolvedBy | GirModule | undefined {
        return girModules.find((girModule) => girModule.packageName === packageName)
    }

    /**
     * Checks if a girModule with an equal `packageName` property exists
     * @param girModules
     * @param packageName
     */
    private existsGirModule(girModules: (GirModuleResolvedBy | GirModule)[], packageName: string): boolean {
        const foundModule = this.findGirModuleByFullName(girModules, packageName)
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
            const packageName = girToLoad.shift()
            if (!packageName) throw new Error(`Module name '${packageName} 'not found!`)
            // If module has not already been loaded
            if (!this.existsGirModule(girModules, packageName)) {
                const gi = await this.loadAndCreateGirModule(packageName)
                if (!gi) {
                    if (!failedGirModules.has(packageName)) {
                        this.log.warn(`No gir file found for '${packageName}', this module will be ignored`)
                        failedGirModules.add(packageName)
                    }
                } else if (gi && gi.packageName) {
                    const addModule = {
                        packageName: gi.packageName,
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
     * @param girDirectories
     * @param modules
     */
    private async findModules(modules: string[], ignore: string[] = []): Promise<Set<string>> {
        const foundModules = new Set<string>()

        for (const i in modules) {
            if (modules[i]) {
                const filename = `${modules[i]}.gir`
                let files: string[] = []
                for (const girDirectory of this.config.girDirectories) {
                    files = files.concat(await glob(filename, { cwd: girDirectory }))
                }

                let globModules = files.map((file) => Path.basename(file, '.gir'))
                // Filter out the ignored modules
                globModules = globModules.filter((mod) => {
                    return !ignore.includes(mod)
                })
                globModules.forEach((mod) => foundModules.add(mod))
            }
        }
        return foundModules
    }

    /**
     * Loads all found modules and sorts out those that the user does not want to use
     * (if multiple versions of a gir file are found) including their dependencies
     * @param girDirectories
     * @param modules
     */
    public async getModulesResolved(
        modules: string[],
        ignore: string[] = [],
        doNotAskForVersionOnConflict = true,
    ): Promise<{ keep: GirModuleResolvedBy[]; ignore: string[]; failed: Set<string> }> {
        const foundGirModules = await this.findModules(modules, ignore)
        const { loaded, failed } = await this.loadGirModules(foundGirModules)
        let keep: GirModuleResolvedBy[] = []
        if (doNotAskForVersionOnConflict) {
            keep = loaded
        } else {
            const girModulesGrouped = this.groupGirFiles(loaded)
            const filtered = await this.askForEachConflictVersionsPrompt(girModulesGrouped, ignore)
            keep = Array.from(filtered.keep)
        }

        return { keep, ignore, failed }
    }

    /**
     * Find modules with the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectories
     * @param modules
     */
    public async getModules(
        modules: string[],
        ignore: string[] = [],
    ): Promise<{ grouped: GirModulesGroupedMap; loaded: GirModuleResolvedBy[]; failed: string[] }> {
        const foundGirModules = await this.findModules(modules, ignore)
        const { loaded, failed } = await this.loadGirModules(foundGirModules)
        const grouped = this.groupGirFiles(loaded)
        return { grouped, loaded, failed: Array.from(failed) }
    }
}
