import {
    GirInfoElements,
    GirPrerequisite,
    GirImplements,
    GirConstructorElement,
    GirMethodElement,
    GirVirtualMethodElement,
    GirFunctionElement,
    GirFieldElement,
    GirPropertyElement,
    GirCallbackElement,
    GirConstantElement,
    GirSignalElement,
    PartOfModule,
} from './index.js'
import { InterfaceElement } from '@gi.ts/parser'

export interface GirInterfaceElement extends InterfaceElement, PartOfModule, GirInfoElements {
    //Other elements an interface can contain

    prerequisite?: GirPrerequisite[]
    implements?: GirImplements[]
    function?: GirFunctionElement[]
    constructors?: GirConstructorElement[] // Typed as optional
    method?: GirMethodElement[]
    'virtual-method'?: GirVirtualMethodElement[]
    field?: GirFieldElement[]
    property?: GirPropertyElement[]
    signal?: GirSignalElement[]
    'glib:signal'?: GirSignalElement[]
    callback?: GirCallbackElement[]
    constant?: GirConstantElement[]
}
