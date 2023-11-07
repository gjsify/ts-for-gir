/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger, DANGER_HTML_DOC_GENERATOR_NOT_IMPLEMENTED } from '@ts-for-gir/lib'
import { Generator } from '@ts-for-gir/generator-base'

import type { GenerateConfig, GirModule, NSRegistry } from '@ts-for-gir/lib'

/**
 * A template that can be used to implement an HTML Documentation Generator
 */
export class HtmlDocGenerator implements Generator {
    protected log: Logger
    constructor(protected readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, HtmlDocGenerator.name)
    }

    async start(_registry: NSRegistry): Promise<void> {
        return Promise.resolve(this.log.danger(DANGER_HTML_DOC_GENERATOR_NOT_IMPLEMENTED))
    }

    generate(_registry: NSRegistry, _module: GirModule): Promise<void> {
        throw new Error('Method not implemented.')
    }

    finish(_registry: NSRegistry): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
