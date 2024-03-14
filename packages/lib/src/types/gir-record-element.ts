import {
    GirConstructorElement,
    GirFieldElement,
    GirFunctionElement,
    GirMethodElement,
    GirPropertyElement,
    GirUnionElement,
    PartOfModule,
    TsClass,
} from './index.js'

import * as parser from '@gi.ts/parser'

export interface GirRecordElement extends PartOfModule, parser.GirRecordElement {
    field?: GirFieldElement[]
    function?: GirFunctionElement[]
    union?: GirUnionElement[]
    method?: GirMethodElement[]
    constructor?: GirConstructorElement[]
    property?: GirPropertyElement[]

    _tsData?: TsClass
}
