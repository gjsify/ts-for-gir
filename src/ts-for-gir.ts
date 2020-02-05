import fs from 'fs'
import Path from 'path'
import * as xml2js from 'xml2js'

import { GirModule } from './gir-module'
import TemplateProcessor from './template-processor'
import { Transformation } from './transformation'
import { Logger } from './logger'
import { Utils } from './utils'

import { InheritanceTable, SymTable, ParsedGir, GenerateConfig, GirModules } from './types'

export interface Dependency {
    name: string
    version: string
    fullName: string
}

export interface DependencyMap {
    [name: string]: Dependency[]
}

export class TsForGir {
    log: Logger
    /** Transitive module dependencies */
    modDependencyMap: DependencyMap = {}
    constructor(private readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, 'TsForGir')
    }

    exportGjs(girModules: GirModule[]): void {
        if (!this.config.outdir) return

        const templateProcessor = new TemplateProcessor({ girModules: girModules }, 'gjs', this.config)

        // Types
        templateProcessor.create('Gjs.d.ts', this.config.outdir, 'Gjs.d.ts')
        templateProcessor.create('index.d.ts', this.config.outdir, 'index.d.ts')

        // Lib
        if (this.config.buildType === 'lib') {
            templateProcessor.create('index.js', this.config.outdir, 'index.js')
            templateProcessor.create('Gjs.js', this.config.outdir, 'Gjs.js')
        }
    }

    exportGjsCastLib(inheritanceTable: InheritanceTable): void {
        if (!this.config.outdir) return

        const inheritanceTableKeys = Object.keys(inheritanceTable)
        const templateProcessor = new TemplateProcessor({ inheritanceTableKeys, inheritanceTable }, 'gjs', this.config)
        templateProcessor.create('cast.ts', this.config.outdir, 'cast.ts')
    }

    exportNodeGtk(girModules: GirModule[]): void {
        if (!this.config.outdir) return

        const templateProcessor = new TemplateProcessor({ girModules }, 'node', this.config)

        templateProcessor.create('index.d.ts', this.config.outdir, 'index.d.ts')
        if (this.config.buildType === 'lib') {
            templateProcessor.create('index.js', this.config.outdir, 'index.js')
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

    // TODO WIP
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

    // TODO WIP
    private setTraverseDependencies(girModules: GirModule[]): void {
        // Figure out transitive module dependencies
        for (const girModule of girModules) {
            this.modDependencyMap[`${girModule.name}-${girModule.version}` || '-'] = Utils.map(
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

        for (const girModule of Object.values(girModules)) {
            const result: { [name: string]: 1 } = {}
            this.traverseDependencies(girModule.fullName, result)
            girModule.transitiveDependencies = Object.keys(result)
        }
    }

    main(girModules: GirModule[]): void {
        this.log.info(`Start to generate .d.ts files for '${this.config.environment}' as '${this.config.buildType}'.`)

        if (girModules.length == 0) {
            this.log.error('Need to specify modules!')
        }

        //this.log.dir(girModules["GObject-2.0"], { depth: null })

        this.log.info('Files parsed, loading types...')

        const symTable: SymTable = {}
        for (const girModule of girModules) girModule.loadTypes(symTable)

        const inheritanceTable: InheritanceTable = {}
        for (const girModule of girModules) girModule.loadInheritance(inheritanceTable)

        this.finaliseInheritance(inheritanceTable)

        // this.log.debug('inheritanceTable:')
        // this.log.debug(inheritanceTable)

        // TODO WIP
        this.setTraverseDependencies(girModules)

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

        for (const girModule of girModules) {
            let dtOutf: NodeJS.WritableStream = process.stdout
            let dtOutputPath: string | null = null
            if (this.config.outdir) {
                const fullName: string = girModule.fullName || 'unknown'
                const OutputDir = Transformation.getEnvironmentDir(this.config.environment, this.config.outdir)
                const dtFileName = `${fullName}.d.ts`
                dtOutputPath = Path.join(OutputDir, dtFileName)
                fs.mkdirSync(OutputDir, { recursive: true })
                dtOutf = fs.createWriteStream(dtOutputPath)
            }
            this.log.log(` - ${girModule.fullName} ...`)
            girModule.patch = patch
            girModule.export(dtOutf, dtOutputPath)
            if (this.config.buildType === 'lib') {
                girModule.exportJs()
            }
        }

        if (this.config.environment === 'node') {
            // node-gtk internal stuff
            this.exportNodeGtk(girModules)
        }

        if (this.config.environment === 'gjs') {
            // GJS internal stuff
            this.exportGjs(girModules)
            this.exportGjsCastLib(inheritanceTable)
        }

        this.log.success('Done.')
    }
}
