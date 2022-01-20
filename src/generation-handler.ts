import fs from 'fs'
import Path from 'path'

import { GirModule } from './gir-module.js'
import { Generator } from './generator.js'
import TypeDefinitionGenerator from './type-definition-generator.js'
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
                this.generator = new TypeDefinitionGenerator(config)
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

        for (const girModule of girModules) girModule.loadTypes()

        const inheritanceTable: InheritanceTable = {}
        for (const girModule of girModules) girModule.loadInheritance(inheritanceTable)

        this.finalizeInheritance(inheritanceTable)

        this.log.info('Types loaded, generating .d.ts...')

        for (const girModule of girModules) {
            let dtOut: NodeJS.WritableStream = process.stdout
            let dtOutputPath: string | null = null
            if (this.config.outdir) {
                const packageName: string = girModule.packageName
                const outputDir = getEnvironmentDir(this.config.environment, this.config.outdir)
                const dtFileName = `${packageName}.d.ts`
                dtOutputPath = Path.join(outputDir, dtFileName)
                fs.mkdirSync(outputDir, { recursive: true })
                dtOut = fs.createWriteStream(dtOutputPath)
            }
            this.log.log(` - ${girModule.packageName} ...`)
            await girModule.start(dtOut, dtOutputPath)
        }

        await this.generator.start(girModules, girModulesGrouped, inheritanceTable)

        this.log.success('Done.')
    }
}
