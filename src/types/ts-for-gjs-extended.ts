import { GirModule } from '../gir-module'
import { GirClassElement, GirRecordElement, GirInterfaceElement } from '.'

// Custom properties, not part of parsed gir xml
export interface TsForGjsExtended {
    _module?: GirModule
    _fullSymName?: string
    /**
     * The class this function is defined in
     */
    _class?: GirClassElement | GirRecordElement | GirInterfaceElement
}
