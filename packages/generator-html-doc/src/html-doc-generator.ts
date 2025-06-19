import { Logger, DANGER_HTML_DOC_GENERATOR_NOT_IMPLEMENTED } from '@ts-for-gir/lib'
import type { Generator } from '@ts-for-gir/generator-base'

import type { OptionsGeneration, GirModule, NSRegistry } from '@ts-for-gir/lib'

/**
 * A template that can be used to implement an HTML Documentation Generator
 */
export class HtmlDocGenerator implements Generator {
    protected log: Logger
    constructor(
        protected readonly config: OptionsGeneration,
        protected readonly registry: NSRegistry,
    ) {
        this.log = new Logger(config.verbose, HtmlDocGenerator.name)
    }

    async start(): Promise<void> {
        return Promise.resolve(this.log.danger(DANGER_HTML_DOC_GENERATOR_NOT_IMPLEMENTED))
    }

    generate(_module: GirModule): Promise<void> {
        throw new Error('Method not implemented.')
    }

    finish(_girModules: GirModule[]): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
