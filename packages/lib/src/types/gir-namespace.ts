import {
    GirInterfaceElement,
    GirRecordElement,
    GirUnionElement,
    GirEnumElement,
    GirAliasElement,
    GirFunctionElement,
    GirClassElement,
    GirBitfieldElement,
    GirCallbackElement,
    GirConstantElement,
    GirAnnotation,
    GirBoxedElement,
} from './index.js'
import { Namespace } from '@gi.ts/parser'

/** Namespace which maps metadata entries to C functionality. This a similar concept to namespace in C++, but for GObject-based C libraries */
export interface GirNamespace extends Namespace {
    /* Other elements a namespace can contain */
    alias?: GirAliasElement[]
    class?: GirClassElement[]
    interface?: GirInterfaceElement[]
    record?: GirRecordElement[]
    enumeration?: GirEnumElement[]
    function?: GirFunctionElement[]
    union?: GirUnionElement[]
    bitfield?: GirBitfieldElement[]
    callback?: GirCallbackElement[]
    constant?: GirConstantElement[]
    annotation?: GirAnnotation[]
    ['glib:boxed']?: GirBoxedElement[]
}
