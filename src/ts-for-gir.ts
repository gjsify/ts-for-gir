import lodash from 'lodash'
import fs from 'fs'
import Path from 'path'
import * as xml2js from 'xml2js'
import glob from 'tiny-glob'

import { GirModule } from './gir-module'
import TemplateProcessor from './template-processor'
import { Transformation } from './transformation'
import { Logger } from './logger'
import { Utils } from './utils'

import { Environment, BuildType, InheritanceTable, SymTable } from './types'

export interface Dependency {
    name: string
    version: string
    fullname: string
}

export interface DependencyMap {
    [name: string]: Dependency[]
}

export class TsForGir {
    log: Logger
    constructor(verbose: boolean, private prettify: boolean) {
        this.log = Logger.getInstance(verbose)
    }
    /**
     * Adds the possibility to use wild cards for module names. E.g. `Gtk*` or `'*'`
     * @param girDirectory
     * @param modules
     */
    async findModules(girDirectory: string, modules: string[]): Promise<Set<string>> {
        const foundModules = new Set<string>()

        for (const i in modules) {
            if (modules[i]) {
                const filename = `${modules[i]}.gir`
                const files = await glob(filename, { cwd: girDirectory })
                const globModules = files.map(file => Path.basename(file, '.gir'))
                globModules.forEach(module => foundModules.add(module))
            }
        }

        // Remove duplicates
        if (foundModules.has('ColorHug-1.0') && foundModules.has('Colorhug-1.0')) {
            foundModules.delete('ColorHug-1.0')
        }

        return foundModules
    }
    exportGjs(outDir: string | null, girModules: { [key: string]: GirModule }, buildType: BuildType): void {
        if (!outDir) return

        const girModuleKeys = Object.keys(girModules).map(key => key.split('-')[0])

        /**
         * Gir modules grouped by name for each version
         */
        const girModGrouped: { [key: string]: { modules: Set<GirModule>; name: string; types: string } } = {}

        // Groupe gir modules by name for each version
        for (const fullName of Object.keys(girModules)) {
            const girModule = girModules[fullName]
            if (!girModule.name) {
                continue
            }
            if (!girModGrouped[girModule.name]) {
                girModGrouped[girModule.name] = {
                    modules: new Set<GirModule>().add(girModule),
                    name: girModule.name,
                    types: '',
                }
            } else {
                girModGrouped[girModule.name].modules.add(girModule)
            }
        }

        for (const name in girModGrouped) {
            const girModule = girModGrouped[name]
            for (const moduleVersions of girModule.modules) {
                if (girModule.types === '') {
                    girModule.types = `typeof ${moduleVersions.namespaceName}`
                } else {
                    girModule.types = `${girModule.types} | typeof ${moduleVersions.namespaceName}`
                }
            }
        }

        const templateProcessor = new TemplateProcessor(
            { girModules: girModules, girModuleKeys, girModGrouped, environment: 'Gjs' as Environment, buildType },
            'gjs',
            this.prettify,
        )

        if (outDir) {
            // Types
            templateProcessor.create('Gjs.d.ts', outDir, 'Gjs.d.ts')
            templateProcessor.create('index.d.ts', outDir, 'index.d.ts')

            // Lib
            if (buildType === 'lib') {
                templateProcessor.create('index.js', outDir, 'index.js')
                templateProcessor.create('Gjs.js', outDir, 'Gjs.js')
            }
        }
    }

    exportGjsCastLib(outDir: string | null, inheritanceTable: InheritanceTable, buildType: BuildType): void {
        if (!outDir) return

        const inheritanceTableKeys = Object.keys(inheritanceTable)
        const templateProcessor = new TemplateProcessor(
            { inheritanceTableKeys, inheritanceTable, buildType },
            'gjs',
            this.prettify,
        )
        templateProcessor.create('cast.ts', outDir, 'cast.ts')
    }

    exportNodeGtk(outDir: string | null, girModules: { [key: string]: GirModule }, buildType: BuildType): void {
        if (!outDir) return

        const templateProcessor = new TemplateProcessor(
            { girModules, environment: 'node-gtk' as Environment, buildType },
            'node',
            this.prettify,
        )

        templateProcessor.create('index.d.ts', outDir, 'index.d.ts')
        if (buildType === 'lib') {
            templateProcessor.create('index.js', outDir, 'index.js')
        }
    }

    finaliseInheritance(inheritanceTable: InheritanceTable): void {
        for (const clsName of Object.keys(inheritanceTable)) {
            let p: string | string[] = inheritanceTable[clsName][0]
            while (p) {
                p = inheritanceTable[p]
                if (p) {
                    p = p[0]
                    inheritanceTable[clsName].push(p)
                }
            }
        }
    }

    main(
        outDir: string | null,
        girDirectory: string,
        girModulesToLoad: string[] | Set<string>,
        environment: Environment,
        buildType: BuildType,
    ): void {
        this.log.info(`Start to generate .d.ts files for '${environment}' as '${buildType}'.`)

        const girModules: { [key: string]: GirModule } = {}
        // A copy is needed here because we are changing the array
        const girToLoad = Array.from(girModulesToLoad)

        if (girToLoad.length == 0) {
            this.log.error('Need to specify modules via -m!')
            return
        }

        while (girToLoad.length > 0) {
            const name = girToLoad.shift()
            if (!name) throw new Error('Module name not found!')
            const filePath = Path.join(girDirectory, name + '.gir')
            if (fs.existsSync(filePath)) {
                this.log.log(`Parsing ${filePath}...`)
                const fileContents = fs.readFileSync(filePath, 'utf8')
                xml2js.parseString(fileContents, (err, result) => {
                    if (err) {
                        this.log.error(err)
                        return
                    }
                    const gi = new GirModule(result, environment, buildType, this.prettify)

                    if (!gi.name) return

                    girModules[`${gi.name}-${gi.version}`] = gi

                    for (const dep of gi.dependencies) {
                        if (!girModules[dep] && lodash.indexOf(girToLoad, dep) < 0) {
                            girToLoad.unshift(dep)
                        }
                    }
                })
            } else {
                this.log.warn(`ENOENT: no such file or directory, open '${filePath}'`)
            }
        }

        //this.log.dir(girModules["GObject-2.0"], { depth: null })

        this.log.info('Files parsed, loading types...')

        const symTable: SymTable = {}
        for (const girModule of lodash.values(girModules)) girModule.loadTypes(symTable)

        const inheritanceTable: InheritanceTable = {}
        for (const girModule of lodash.values(girModules)) girModule.loadInheritance(inheritanceTable)

        this.finaliseInheritance(inheritanceTable)

        // this.log.log('inheritanceTable:')
        // this.log.dir(inheritanceTable)

        // Figure out transitive module dependencies
        const modDependencyMap: DependencyMap = {}

        for (const girModule of lodash.values(girModules)) {
            modDependencyMap[`${girModule.name}-${girModule.version}` || '-'] = lodash.map(
                girModule.dependencies || [],
                (fullname: string): Dependency => {
                    const tmp = fullname.split('-')
                    const name = tmp[0]
                    const version = tmp[1]
                    return {
                        name,
                        version,
                        fullname,
                    }
                },
            )
        }

        const traverseDependencies = (fullName: string | null, result): void => {
            if (!fullName) {
                return
            }
            const deps = modDependencyMap[fullName]
            if (Utils.isIterable(deps)) {
                for (const dep of deps) {
                    if (result[dep.fullname]) continue
                    result[dep.fullname] = 1
                    traverseDependencies(dep.fullname, result)
                }
            } else {
                // this.log.warn('`deps` is not iterable: ', deps, fullName, modDependencyMap)
            }
        }

        for (const girModule of lodash.values(girModules)) {
            const result = {}
            traverseDependencies(girModule.fullName, result)
            girModule.transitiveDependencies = Object.keys(result)
        }

        const patch = {
            'Atk.Object.get_description': [
                '/* return type clashes with Atk.Action.get_description */',
                'get_description(): string | null',
            ],
            'Atk.Object.get_name': ['/* return type clashes with Atk.Action.get_name */', 'get_name(): string | null'],
            'Atk.Object.set_description': [
                '/* return type clashes with Atk.Action.set_description */',
                'set_description(description: string): boolean | null',
            ],
            'Gtk.Container.child_notify': ['/* child_notify clashes with Gtk.Widget.child_notify */'],
            'Gtk.MenuItem.activate': ['/* activate clashes with Gtk.Widget.activate */'],
            'Gtk.TextView.get_window': ['/* get_window clashes with Gtk.Widget.get_window */'],
            'WebKit.WebView.get_settings': ['/* get_settings clashes with Gtk.Widget.get_settings */'],
        }

        this.log.info('Types loaded, generating .d.ts...')

        for (const k of Object.keys(girModules)) {
            let dtOutf: NodeJS.WritableStream = process.stdout
            let dtOutputPath: string | null = null
            if (outDir) {
                const fullName: string = girModules[k].fullName || 'unknown'
                const OutputDir = Transformation.getEnvironmentDir(environment, outDir)
                const dtFileName = `${fullName}.d.ts`
                dtOutputPath = Path.join(OutputDir, dtFileName)
                fs.mkdirSync(OutputDir, { recursive: true })
                dtOutf = fs.createWriteStream(dtOutputPath)
            }
            this.log.log(` - ${k} ...`)
            girModules[k].patch = patch
            girModules[k].export(dtOutf, dtOutputPath, girDirectory)
            if (buildType === 'lib') {
                girModules[k].exportJs(outDir)
            }
        }

        if (environment === 'node') {
            // node-gtk internal stuff
            this.exportNodeGtk(outDir, girModules, buildType)
        }

        if (environment === 'gjs') {
            // GJS internal stuff
            this.exportGjs(outDir, girModules, buildType)
            this.exportGjsCastLib(outDir, inheritanceTable, buildType)
        }

        this.log.success('Done.')
    }
}
