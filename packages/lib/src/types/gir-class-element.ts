import {
    GirCallbackElement,
    GirConstantElement,
    GirConstructorElement,
    GirFieldElement,
    GirFunctionElement,
    GirImplements,
    GirMethodElement,
    GirPropertyElement,
    GirRecordElement,
    GirSignalElement,
    GirUnionElement,
    GirVirtualMethodElement,
    PartOfModule,
} from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirClassElement extends PartOfModule, parser.GirClassElement {
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
