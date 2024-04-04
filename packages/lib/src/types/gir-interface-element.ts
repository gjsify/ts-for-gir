import {
    GirCallbackElement,
    GirConstantElement,
    GirConstructorElement,
    GirFieldElement,
    GirFunctionElement,
    GirImplements,
    GirMethodElement,
    GirPrerequisite,
    GirPropertyElement,
    GirSignalElement,
    GirVirtualMethodElement,
    PartOfModule,
} from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirInterfaceElement extends PartOfModule, parser.GirInterfaceElement {
    prerequisite?: GirPrerequisite[]
    implements?: GirImplements[]
    function?: GirFunctionElement[]
    constructor?: GirConstructorElement[]
    method?: GirMethodElement[]
    'virtual-method'?: GirVirtualMethodElement[]
    field?: GirFieldElement[]
    property?: GirPropertyElement[]
    signal?: GirSignalElement[]
    'glib:signal'?: GirSignalElement[]
    callback?: GirCallbackElement[]
    constant?: GirConstantElement[]
}
