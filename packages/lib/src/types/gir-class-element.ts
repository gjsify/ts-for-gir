import type {
    GirCallbackElement,
    GirConstantElement,
    GirConstructorElement,
    GirFieldElement,
    GirFunctionElement,
    GirMethodElement,
    GirPropertyElement,
    GirRecordElement,
    GirSignalElement,
    GirUnionElement,
    GirVirtualMethodElement,
    PartOfModule,
} from './index.ts'
import { type GirClassElement as GirClassElementParser, type GirImplements } from '@gi.ts/parser'

export interface GirClassElement extends PartOfModule, GirClassElementParser {
    implements?: GirImplements[]
    constructor?: GirConstructorElement[]
    method?: GirMethodElement[]
    function?: GirFunctionElement[]
    'virtual-method'?: GirVirtualMethodElement[]
    field?: GirFieldElement[]
    property?: GirPropertyElement[]
    signal?: GirSignalElement[]
    'glib:signal'?: GirSignalElement[]
    union?: GirUnionElement[]
    constant?: GirConstantElement[]
    record?: GirRecordElement[]
    callback?: GirCallbackElement[]
}
