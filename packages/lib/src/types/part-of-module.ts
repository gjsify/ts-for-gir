import type { GirModule } from '../gir-module.ts'

// Custom properties, not part of parsed gir xml
export interface PartOfModule {
    _module?: GirModule
    /** E.g. `'GObject.Object'` */
    _fullSymName?: string
}
