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
} from './index'

export interface SymTableItems {
    [name: string]:
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
}
