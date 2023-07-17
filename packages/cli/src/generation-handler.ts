import { GirModule, Logger, START_MODULE, FILE_PARSING_DONE, ERROR_NO_MODULE_SPECIFIED } from '@ts-for-gir/lib'
import { GeneratorType, Generator } from '@ts-for-gir/generator-base'
import { GiTsTypeDefinitionGenerator } from '@ts-for-gir/generator-typescript-gi-ts'
import { HtmlDocGenerator } from '@ts-for-gir/generator-html-doc'

import type { InheritanceTable, GenerateConfig, GirModulesGrouped } from '@ts-for-gir/lib'

export class GenerationHandler {
    log: Logger
    generator: Generator

    constructor(private readonly config: GenerateConfig, type: GeneratorType) {
        this.log = new Logger(config.environment, config.verbose, 'GenerationHandler')

        switch (type) {
            case GeneratorType.TYPES:
                this.generator = new GiTsTypeDefinitionGenerator(config)
                break
            case GeneratorType.HTML_DOC:
                this.generator = new HtmlDocGenerator(config)
                break
            default:
                throw new Error('Unknown Generator')
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

        await this.generator.start(girModules, girModulesGrouped, inheritanceTable)
    }
}
