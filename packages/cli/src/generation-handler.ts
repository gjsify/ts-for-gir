import { mkdir } from 'node:fs/promises'
import { type Generator, GeneratorType } from '@ts-for-gir/generator-base'
import { HtmlDocGenerator } from '@ts-for-gir/generator-html-doc'
import { TypeDefinitionGenerator } from '@ts-for-gir/generator-typescript'
import {
    ERROR_NO_MODULE_SPECIFIED,
    FILE_PARSING_DONE,
    GENERATING_TYPES_DONE,
    type GirModule,
    Logger,
    type NSRegistry,
    type OptionsGeneration,
    START_MODULE,
    TSDATA_PARSING_DONE,
} from '@ts-for-gir/lib'

export class GenerationHandler {
    log: Logger
    generator: Generator
    protected readonly config: OptionsGeneration
    protected readonly registry: NSRegistry
    constructor(config: OptionsGeneration, type: GeneratorType, registry: NSRegistry) {
        this.registry = registry
        this.config = config
        this.log = new Logger(config.verbose, 'GenerationHandler')

        switch (type) {
            case GeneratorType.TYPES:
                this.generator = new TypeDefinitionGenerator(config, this.registry)
                break
            case GeneratorType.HTML_DOC:
                this.generator = new HtmlDocGenerator(config, this.registry)
                break
            default:
                throw new Error('Unknown Generator')
        }
    }

    public async start(girModules: GirModule[]): Promise<void> {
        this.log.info(START_MODULE)

        if (girModules.length === 0) {
            this.log.error(ERROR_NO_MODULE_SPECIFIED)
        }

        this.log.info(FILE_PARSING_DONE)

        this.log.info(TSDATA_PARSING_DONE)

        if (this.config.outdir) {
            await mkdir(this.config.outdir, { recursive: true })
        }

        // TODO: Put this somewhere that makes sense
        this.registry.transform({
            inferGenerics: true,
            verbose: this.config.verbose,
        })

        await this.generator.start()

        for (const girModule of girModules) {
            this.log.log(` - ${girModule.packageName} ...`)
            await this.generator.generate(girModule)
        }

        await this.generator.finish(girModules)

        this.log.success(GENERATING_TYPES_DONE)
    }
}
