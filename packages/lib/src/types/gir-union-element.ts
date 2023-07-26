import { UnionElement } from '@gi.ts/parser'
import type {
    GirInfoElements,
    GirConstructorElement,
    GirMethodElement,
    GirFunctionElement,
    GirFieldElement,
    GirRecordElement,
    PartOfModule,
} from './index.js'

export interface GirUnionElement extends UnionElement, PartOfModule, GirInfoElements {
    field?: GirFieldElement[]
    constructor?: GirConstructorElement[]
    method?: GirMethodElement[]
    function?: GirFunctionElement[]
    record?: GirRecordElement[]
}
