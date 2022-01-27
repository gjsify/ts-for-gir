/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger } from './logger.js'
import { Generator } from './generator.js'
import type { GenerateConfig, GirModulesGrouped, InheritanceTable } from './types/index.js'
import type { GirModule } from './gir-module'

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
        return Promise.resolve(this.log.danger('The HtmlDocGenerator is currently not implemented. Do nothing...'))
    }
}
