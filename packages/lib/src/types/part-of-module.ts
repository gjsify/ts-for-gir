import { GirModule } from '../gir-module'

// Custom properties, not part of parsed gir xml
export interface PartOfModule {
    _module?: GirModule
    /** E.g. `'GObject.Object'` */
    _fullSymName?: string
}
