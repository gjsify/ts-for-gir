import {
    GirBitfieldElement,
    GirCallbackElement,
    GirClassElement,
    GirConstantElement,
    GirEnumElement,
    GirFunctionElement,
    GirInterfaceElement,
    GirRecordElement,
    GirUnionElement,
    GirAliasElement,
    GirMethodElement,
    GirVirtualMethodElement,
    GirSignalElement,
    GirConstructorElement,
    GirFieldElement,
    GirPropertyElement,
} from '@gi.ts/parser'

export type GirAnyElement =
    | GirBitfieldElement
    | GirCallbackElement
    | GirClassElement
    | GirConstantElement
    | GirEnumElement
    | GirFunctionElement
    | GirInterfaceElement
    | GirRecordElement
    | GirUnionElement
    | GirAliasElement
    | GirMethodElement
    | GirVirtualMethodElement
    | GirSignalElement
    | GirConstructorElement
    | GirFieldElement
    | GirPropertyElement
