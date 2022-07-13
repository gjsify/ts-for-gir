/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger } from './logger.js'
import { Generator } from './generator.js'
import { DANGER_HTML_DOC_GENERATOR_NOT_IMPLEMENTED } from './messages.js'
import type { GenerateConfig, GirModulesGrouped, InheritanceTable } from './types/index.js'
import type { GirModule } from './gir-module.js'

/**
 * A template that can be used to implement an HTML Documentation Generator
 */
export default class HtmlDocGenerator implements Generator {
    protected log: Logger
    constructor(protected readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, HtmlDocGenerator.name)
    }
    public async start(
        girModules: GirModule[],
        girModulesGrouped: GirModulesGrouped[],
        inheritanceTable: InheritanceTable,
    ) {
        return Promise.resolve(this.log.danger(DANGER_HTML_DOC_GENERATOR_NOT_IMPLEMENTED))
    }
}
