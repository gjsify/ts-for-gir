import type { OptionsBase, PropertyCase } from './index.ts'

export interface OptionsLoad extends OptionsBase {
    loadDocs: boolean
    propertyCase: PropertyCase
}
