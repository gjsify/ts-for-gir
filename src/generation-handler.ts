import fs from 'fs'
import { GirModule } from './gir-module.js'
import { Generator } from './generator.js'
import TypeDefinitionGenerator from './type-definition-generator.js'
import HTMLDocGenerator from './html-doc-generator.js'
import { Logger } from './logger.js'
import { getEnvironmentDir } from './utils.js'
import { InheritanceTable, GenerateConfig, GirModulesGrouped, GeneratorType } from './types/index.js'

export class GenerationHandler {
    log: Logger
    generator: Generator
    constructor(private readonly config: GenerateConfig, type: GeneratorType) {
        this.log = new Logger(config.environment, config.verbose, 'GenerationHandler')

        switch (type) {
            case GeneratorType.TYPES:
                this.generator = new TypeDefinitionGenerator(config)
                break
            case GeneratorType.HTML_DOC:
                this.generator = new HTMLDocGenerator(config)
                break
            default:
                throw new Error('Unknown Generator')
        }
    }

    private finalizeInheritance(inheritanceTable: InheritanceTable): void {
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

    public async start(girModules: GirModule[], girModulesGrouped: GirModulesGrouped[]): Promise<void> {
        this.log.info(
            `Start to generate .d.ts files for '${this.config.environment}' as '${
                this.config.buildType || 'unknown'
            }'.`,
        )

        if (girModules.length == 0) {
            this.log.error('Need to specify modules!')
        }

        GirModule.allGirModules = girModules

        this.log.info('Files parsed, loading types...')

        const inheritanceTable: InheritanceTable = {}
        for (const girModule of girModules) girModule.init(inheritanceTable)

        this.finalizeInheritance(inheritanceTable)

        this.log.info('Types loaded, generating .d.ts...')

        for (const girModule of girModules) {
            if (this.config.outdir) {
                const outputDir = getEnvironmentDir(this.config.environment, this.config.outdir)
                fs.mkdirSync(outputDir, { recursive: true })
            }
            this.log.log(` - ${girModule.packageName} ...`)
            girModule.start()
        }

        await this.generator.start(girModules, girModulesGrouped, inheritanceTable)

        this.log.success('Done.')
    }
}
