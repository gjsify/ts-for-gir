import { RecordElement } from '@gi.ts/parser'
import {
    GirBoolean,
    GirInfoElements,
    GirInfoAttrs,
    GirFieldElement,
    GirFunctionElement,
    GirUnionElement,
    GirMethodElement,
    GirConstructorElement,
    GirPropertyElement,
    PartOfModule,
    TsClass,
} from './index.js'

export interface GirRecordElement extends RecordElement, PartOfModule, GirInfoElements {
    /** Record definition, equivalent to a C struct, that is a simple structure, not a class */

    /* Other elements a record can contain */

    field?: GirFieldElement[]
    function?: GirFunctionElement[]
    union?: GirUnionElement[]
    method?: GirMethodElement[]
    constructor?: GirConstructorElement[]
    property?: GirPropertyElement[]

    _tsData?: TsClass
}
