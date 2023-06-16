import { UnionElement } from '@gi.ts/parser'
import type {
    GirInfoElements,
    GirInfoAttrs,
    GirConstructorElement,
    GirMethodElement,
    GirFunctionElement,
    GirFieldElement,
    GirRecordElement,
    PartOfModule,
    TsClass,
} from './index.js'

export interface GirUnionElement extends UnionElement, PartOfModule, GirInfoElements {
    field?: GirFieldElement[]
    constructor?: GirConstructorElement[]
    method?: GirMethodElement[]
    function?: GirFunctionElement[]
    record?: GirRecordElement[]

    _tsData?: TsClass
}
