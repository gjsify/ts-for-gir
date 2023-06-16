import { CallableParamElement } from '@gi.ts/parser'
import type {
    GirBoolean,
    GirUnparsedNumber,
    GirInfoAttrs,
    GirDocElement,
    GirAnyType,
    GirTransferOwnership,
    GirDirection,
    GirVarArgs,
    PartOfClass,
    TsParameter,
} from './index.js'

export interface GirCallableParamElement extends CallableParamElement, PartOfClass, GirDocElement, GirAnyType {
    varargs?: GirVarArgs[]

    _tsData?: TsParameter
}
