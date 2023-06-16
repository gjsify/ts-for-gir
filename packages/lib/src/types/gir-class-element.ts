import { ClassElement } from '@gi.ts/parser'
import type {
    GirBoolean,
    GirInfoElements,
    GirInfoAttrs,
    PartOfModule,
    GirConstructorElement,
    GirImplements,
    GirMethodElement,
    GirFunctionElement,
    GirVirtualMethodElement,
    GirFieldElement,
    GirPropertyElement,
    GirSignalElement,
    GirUnionElement,
    GirConstantElement,
    GirRecordElement,
    GirCallbackElement,
    TsClass,
} from './index.js'

export interface GirClassElement extends ClassElement, PartOfModule, GirInfoElements {
    /* Other elements a class can contain */

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

    _tsData?: TsClass
}
