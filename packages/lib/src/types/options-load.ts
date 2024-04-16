import type { OptionsBase, PropertyCase } from './index.js'

export interface OptionsLoad extends OptionsBase {
    loadDocs: boolean
    propertyCase: PropertyCase
}
