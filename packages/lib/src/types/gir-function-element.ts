import { FunctionElement } from '@gi.ts/parser'
import type { GirDocElement, PartOfClass, GirCallableParams, GirCallableReturn } from './index.js'

export interface GirFunctionElement extends FunctionElement, PartOfClass, GirDocElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
