import fs from 'fs'
import Path from 'path'

import { GirModule } from './gir-module'
import TemplateProcessor from './template-processor'
import { Transformation } from './transformation'
import { Logger } from './logger'

import { InheritanceTable, SymTable, GenerateConfig } from './types'

export class Generator {
    log: Logger
    constructor(private readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, 'TsForGir')
    }

    private exportGjs(girModules: GirModule[]): void {
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

    private exportGjsCastLib(inheritanceTable: InheritanceTable): void {
        if (!this.config.outdir) return

        const inheritanceTableKeys = Object.keys(inheritanceTable)
        const templateProcessor = new TemplateProcessor({ inheritanceTableKeys, inheritanceTable }, 'gjs', this.config)
        templateProcessor.create('cast.ts', this.config.outdir, 'cast.ts')
    }

    private exportNodeGtk(girModules: GirModule[]): void {
        if (!this.config.outdir) return

        const templateProcessor = new TemplateProcessor({ girModules }, 'node', this.config)

        templateProcessor.create('index.d.ts', this.config.outdir, 'index.d.ts')
        if (this.config.buildType === 'lib') {
            templateProcessor.create('index.js', this.config.outdir, 'index.js')
        }
    }

    private finaliseInheritance(inheritanceTable: InheritanceTable): void {
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

    public start(girModules: GirModule[]): void {
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
                const packageName: string = girModule.packageName || 'unknown'
                const OutputDir = Transformation.getEnvironmentDir(this.config.environment, this.config.outdir)
                const dtFileName = `${packageName}.d.ts`
                dtOutputPath = Path.join(OutputDir, dtFileName)
                fs.mkdirSync(OutputDir, { recursive: true })
                dtOutf = fs.createWriteStream(dtOutputPath)
            }
            this.log.log(` - ${girModule.packageName} ...`)
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
