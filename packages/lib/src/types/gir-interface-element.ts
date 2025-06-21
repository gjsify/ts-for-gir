import type {
    GirCallbackElement,
    GirConstantElement,
    GirConstructorElement,
    GirFieldElement,
    GirFunctionElement,
    GirMethodElement,
    GirPropertyElement,
    GirSignalElement,
    GirVirtualMethodElement,
    PartOfModule,
} from './index.ts'
import  { type GirImplements, type GirPrerequisite, type GirInterfaceElement as GirInterfaceElementParser } from '@gi.ts/parser'

export interface GirInterfaceElement extends PartOfModule, GirInterfaceElementParser {
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
