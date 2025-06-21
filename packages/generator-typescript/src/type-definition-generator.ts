import type { Generator } from '@ts-for-gir/generator-base'
import { Logger, DependencyManager, type NSRegistry, type OptionsGeneration, GirModule } from '@ts-for-gir/lib'

import { TemplateProcessor } from './template-processor.ts'
//import { PackageDataParser } from './package-data-parser.ts'
import { NpmPackage } from './npm-package.ts'
import { ModuleGenerator } from './module-generator.ts'

export class TypeDefinitionGenerator implements Generator {
    readonly log: Logger
    //readonly moduleGenerator!: ModuleGenerator
    readonly config: OptionsGeneration
    readonly registry: NSRegistry
    readonly dependencyManager: DependencyManager
    //readonly packageData: PackageDataParser

    constructor(config: OptionsGeneration, registry: NSRegistry) {
        this.config = config
        this.registry = registry
        this.log = new Logger(this.config.verbose, TypeDefinitionGenerator.name)
        this.dependencyManager = DependencyManager.getInstance(this.config)
        // this.packageData = new PackageDataParser(this.config)
    }

    async exportGjs() {
        const { config, dependencyManager } = this

        // TODO: Print to stdout
        if (!config.outdir) return

        const gjs = dependencyManager.getGjs()

        const templateProcessor = new TemplateProcessor(
            {},
            gjs.packageName,
            this.registry,
            await dependencyManager.core(),
            config,
        )

        // Package
        if (this.config.package) {
            await templateProcessor.create('index.d.ts', config.outdir, 'index.d.ts', undefined, undefined, {
                name: gjs.importName,
            })
            await templateProcessor.create('index.js', config.outdir, 'index.js', undefined, undefined, {
                name: gjs.importName,
            })

            await templateProcessor.create('gjs/gjs.d.ts', config.outdir, 'gjs.d.ts')
            await templateProcessor.create('gjs/gjs.js', config.outdir, 'gjs.js')

            // Additional DOM types supported by GJS
            await templateProcessor.create('gjs/dom.d.ts', config.outdir, 'dom.d.ts')
            await templateProcessor.create('gjs/dom.js', config.outdir, 'dom.js')

            await templateProcessor.create('gjs/gettext.d.ts', config.outdir, 'gettext.d.ts')
            await templateProcessor.create('gjs/gettext.js', config.outdir, 'gettext.js')

            await templateProcessor.create('gjs/system.d.ts', config.outdir, 'system.d.ts')
            await templateProcessor.create('gjs/system.js', config.outdir, 'system.js')

            await templateProcessor.create('gjs/cairo.d.ts', config.outdir, 'cairo.d.ts')
            await templateProcessor.create('gjs/cairo.js', config.outdir, 'cairo.js')

            await templateProcessor.create('gjs/console.d.ts', config.outdir, 'console.d.ts')
            await templateProcessor.create('gjs/console.js', config.outdir, 'console.js')

            // Import ambient types
            await templateProcessor.create('gjs/gjs-ambient.d.ts', config.outdir, 'gjs-ambient.d.ts')
            await templateProcessor.create('gjs/gjs-ambient.js', config.outdir, 'gjs-ambient.js')

            const pkg = new NpmPackage(config, dependencyManager, this.registry, gjs, await dependencyManager.core())
            await pkg.exportNPMPackage()
        } else {
            const gjsContent = await templateProcessor.load('gjs/gjs.d.ts')
            await templateProcessor.write(gjsContent.prepend + '\n' + gjsContent.append, config.outdir, 'gjs.d.ts')

            const gettextContent = await templateProcessor.load('gjs/gettext.d.ts')
            await templateProcessor.write(
                gettextContent.prepend + '\n' + gettextContent.append,
                config.outdir,
                'gettext.d.ts',
            )

            const systemContent = await templateProcessor.load('gjs/system.d.ts')
            await templateProcessor.write(
                systemContent.prepend + '\n' + systemContent.append,
                config.outdir,
                'system.d.ts',
            )

            const cairoContent = await templateProcessor.load('gjs/cairo.d.ts')
            await templateProcessor.write(
                cairoContent.prepend + '\n' + cairoContent.append,
                config.outdir,
                'cairo.d.ts',
            )

            const consoleContent = await templateProcessor.load('gjs/console.d.ts')
            await templateProcessor.write(
                consoleContent.prepend + '\n' + consoleContent.append,
                config.outdir,
                'console.d.ts',
            )

            // Additional DOM types supported by GJS
            const domContent = await templateProcessor.load('gjs/dom.d.ts')
            await templateProcessor.write(domContent.prepend + '\n' + domContent.append, config.outdir, 'dom.d.ts')
        }
    }

    async exportAllModules(girModules: GirModule[]) {
        const { config, dependencyManager } = this

        if (config.package) {
            throw new Error('Export all modules is not implemented for package.json mode')
        }

        // TODO: Print to stdout
        if (!config.outdir) return

        const templateProcessor = new TemplateProcessor(
            girModules,
            'index',
            this.registry,
            dependencyManager.all(),
            config,
        )

        await templateProcessor.create('gi.d.ts', config.outdir, 'gi.d.ts')
        await templateProcessor.create('index-locally.d.ts', config.outdir, 'index.d.ts')
    }

    public async generate(module: GirModule) {
        const moduleGenerator = new ModuleGenerator(module, this.config, this.registry)
        await moduleGenerator.exportModule(this.registry, module)
    }

    public async start() {
        // if (this.packageData) {
        //     await this.packageData.start()
        // }
    }

    public async finish(girModules: GirModule[]) {
        // GJS internal stuff
        await this.exportGjs()

        // index file for all modules
        if (!this.config.package) {
            await this.exportAllModules(girModules)
        }
    }
}
