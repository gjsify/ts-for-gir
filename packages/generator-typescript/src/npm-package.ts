import { Logger, Dependency, DependencyManager, OptionsGeneration, GirModule } from '@ts-for-gir/lib'
import { TemplateProcessor } from './template-processor.js'

export class NpmPackage<Wrapped extends Dependency | GirModule> {
    config: OptionsGeneration
    moduleTemplateProcessor: TemplateProcessor
    dependencyManager: DependencyManager
    log: Logger
    packageName: string

    constructor(
        config: OptionsGeneration,
        dependencyManager: DependencyManager,
        dependencyOrModule: Wrapped,
        deps: Dependency[],
    ) {
        this.config = config

        this.packageName = dependencyOrModule.packageName

        this.log = new Logger(this.config.verbose, NpmPackage.name)

        this.dependencyManager = dependencyManager

        this.moduleTemplateProcessor = new TemplateProcessor(
            {
                name: dependencyOrModule.namespace,
                namespace: dependencyOrModule.namespace,
                version: dependencyOrModule.version,
                importName: dependencyOrModule.importName,
                registry: this.dependencyManager,
                girModule: dependencyOrModule instanceof GirModule ? dependencyOrModule : undefined,
            },
            dependencyOrModule.packageName,
            deps,
            this.config,
        )
    }

    async exportNPMPackage() {
        await this.exportNPMPackageJson()
        await this.exportNPMReadme()
        await this.exportTSConfig()
        await this.exportTypeDoc()
    }

    async exportNPMPackageJson() {
        const template = 'package.json'
        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    async exportNPMReadme() {
        const girModuleImportName = this.packageName.toUpperCase()
        // E.g. `README-GJS.md` or `README-GTK-4.0.md`
        let template = girModuleImportName ? `README-${girModuleImportName}.md` : 'README.md'
        const outputFilename = 'README.md'

        if (!(await this.moduleTemplateProcessor.exists(template))) {
            template = 'README.md'
        }

        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(template, this.config.outdir, outputFilename)
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    async exportTSConfig() {
        const template = 'tsconfig.json'
        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }

    async exportTypeDoc() {
        const template = 'typedoc.json'
        if (this.config.outdir) {
            await this.moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                template, // output filename
            )
        } else {
            const { append, prepend } = await this.moduleTemplateProcessor.load(template)
            this.log.log(append + prepend)
        }
    }
}
