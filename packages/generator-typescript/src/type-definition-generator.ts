import { Generator } from '@ts-for-gir/generator-base'
import { Logger, DependencyManager, NSRegistry, OptionsGeneration, GirModule } from '@ts-for-gir/lib'

import { TemplateProcessor } from './template-processor.js'
import { PackageDataParser } from './package-data-parser.js'
import { NpmPackage } from './npm-package.js'
import { ModuleGenerator } from './module-generator.js'

export class TypeDefinitionGenerator implements Generator {
    log: Logger
    dependencyManager: DependencyManager
    packageData?: PackageDataParser

    module!: ModuleGenerator

    /**
     * @param _config The config to use without the override config
     */
    constructor(readonly config: OptionsGeneration) {
        this.log = new Logger(this.config.verbose, TypeDefinitionGenerator.name)
        this.dependencyManager = DependencyManager.getInstance(this.config)
        this.packageData = new PackageDataParser(this.config)
    }

    async exportGjs() {
        const { config, dependencyManager } = this

        // TODO: Print to stdout
        if (!config.outdir) return

        const gjs = dependencyManager.getGjs()

        const templateProcessor = new TemplateProcessor(
            {
                registry: dependencyManager,
            },
            gjs.packageName,
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

            // Import ambient types
            await templateProcessor.create('gjs/gjs-ambient.d.ts', config.outdir, 'gjs-ambient.d.ts')
            await templateProcessor.create('gjs/gjs-ambient.js', config.outdir, 'gjs-ambient.js')

            const pkg = new NpmPackage(config, dependencyManager, gjs, await dependencyManager.core())
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
            {
                registry: dependencyManager,
                girModules,
            },
            'index',
            dependencyManager.all(),
            config,
        )

        await templateProcessor.create('gi.d.ts', config.outdir, 'gi.d.ts')
        await templateProcessor.create('index-locally.d.ts', config.outdir, 'index.d.ts')
    }

    public async generate(registry: NSRegistry, module: GirModule) {
        const moduleGenerator = new ModuleGenerator(module, this.config)
        await moduleGenerator.exportModule(registry, module)
    }

    public async start() {
        if (this.packageData) {
            await this.packageData.start()
        }
    }

    public async finish(_registry: NSRegistry, girModules: GirModule[]) {
        // GJS internal stuff
        await this.exportGjs()

        // index file for all modules
        if (!this.config.package) {
            await this.exportAllModules(girModules)
        }
    }
}
