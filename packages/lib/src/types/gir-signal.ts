import {
    PartOfModule,
    GirClassElement,
    GirRecordElement,
    GirInterfaceElement,
    GirCallableParams,
    GirCallableReturn,
} from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirSignalElement extends PartOfModule, parser.GirSignalElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    /**
     * The class this function is defined in
     */
    _class?: GirClassElement | GirRecordElement | GirInterfaceElement
}
