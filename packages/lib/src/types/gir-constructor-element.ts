import { ConstructorElement } from '@gi.ts/parser'
import {
    GirInfoAttrs,
    GirCallableAttrs,
    GirCallableParams,
    GirCallableReturn,
    PartOfClass,
    TsFunction,
} from './index.js'

export interface GirConstructorElement extends ConstructorElement, PartOfClass {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsFunction
}
