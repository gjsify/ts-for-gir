import type { Data } from 'ejs'
import type { GenerateConfig } from './generate-config.js'
import type { GirModule } from '../gir-module.js'

export interface TemplateData extends Data, Partial<GenerateConfig> {
    girModule?: GirModule
    importName?: string
}
