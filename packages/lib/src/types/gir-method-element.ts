import {
    GirDocElement,
    GirInfoAttrs,
    GirCallableAttrs,
    GirCallableParams,
    GirCallableReturn,
    TsMethod,
    PartOfClass,
} from './index.js'
import { MethodElement } from '@gi.ts/parser'

export interface GirMethodElement extends Omit<MethodElement, 'return-value'>, PartOfClass, GirDocElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsMethod
}
