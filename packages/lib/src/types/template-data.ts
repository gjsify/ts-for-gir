import type { Data } from 'ejs'
import type { GirModule } from '../gir-module.js'

export interface TemplateData extends Data {
    girModule?: GirModule
}
