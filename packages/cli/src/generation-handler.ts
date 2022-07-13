import fs from 'fs'
import { GirModule } from './gir-module.js'
import { Generator } from './generator.js'
import TypeDefinitionGenerator from './type-definition-generator.js'
import HTMLDocGenerator from './html-doc-generator.js'
import { Logger } from './logger.js'
import { getEnvironmentDir } from './utils.js'
import { InheritanceTable, GenerateConfig, GirModulesGrouped, GeneratorType } from './types/index.js'
import {
    START_MODULE,
    FILE_PARSING_DONE,
    TSDATA_PARSING_DONE,
    GENERATING_TYPES_DONE,
    ERROR_NO_MODULE_SPECIFIED,
} from './messages.js'

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
        this.log.info(START_MODULE(this.config.environment, this.config.buildType))

        if (girModules.length == 0) {
            this.log.error(ERROR_NO_MODULE_SPECIFIED)
        }

        GirModule.allGirModules = girModules

        this.log.info(FILE_PARSING_DONE)

        const inheritanceTable: InheritanceTable = {}
        for (const girModule of girModules) girModule.init(inheritanceTable)

        this.finalizeInheritance(inheritanceTable)

        this.log.info(TSDATA_PARSING_DONE)

        for (const girModule of girModules) {
            if (this.config.outdir) {
                const outputDir = getEnvironmentDir(this.config.environment, this.config.outdir)
                fs.mkdirSync(outputDir, { recursive: true })
            }
            this.log.log(` - ${girModule.packageName} ...`)
            girModule.start()
        }

        await this.generator.start(girModules, girModulesGrouped, inheritanceTable)

        this.log.success(GENERATING_TYPES_DONE)
    }
}
