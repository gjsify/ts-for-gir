import type {
    GirConstructorElement,
    GirFieldElement,
    GirFunctionElement,
    GirMethodElement,
    GirRecordElement,
    PartOfModule,
    TsClass,
} from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirUnionElement extends PartOfModule, parser.GirUnionElement {
    field?: GirFieldElement[]
    constructor?: GirConstructorElement[]
    method?: GirMethodElement[]
    function?: GirFunctionElement[]
    record?: GirRecordElement[]

    _tsData?: TsClass
}
