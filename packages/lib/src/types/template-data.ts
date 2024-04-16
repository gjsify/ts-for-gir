import type { Data } from 'ejs'
import type { OptionsGeneration } from './options-generation.js'
import type { GirModule } from '../gir-module.js'

export interface TemplateData extends Data, Partial<OptionsGeneration> {
    girModule?: GirModule
    importName?: string
}
