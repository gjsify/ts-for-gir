import { FunctionElement } from '@gi.ts/parser'
import type {
    GirCallableAttrs,
    GirInfoAttrs,
    GirDocElement,
    PartOfClass,
    GirCallableParams,
    GirCallableReturn,
    TsMethod,
} from './index.js'

export interface GirFunctionElement extends FunctionElement, PartOfClass, GirDocElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsMethod
}
