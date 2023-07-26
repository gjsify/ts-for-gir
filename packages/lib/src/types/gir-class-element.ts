import { ClassElement } from '@gi.ts/parser'
import type {
    GirInfoElements,
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
}
