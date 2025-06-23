import type { Data } from 'ejs'
import type { OptionsGeneration } from './options-generation.ts'
import type { GirModule } from '../gir-module.ts'

export interface TemplateData extends Data, Partial<OptionsGeneration> {
    girModule?: GirModule
    importName?: string
}
