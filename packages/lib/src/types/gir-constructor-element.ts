import type { GirCallableParams, GirCallableReturn, PartOfClass } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirConstructorElement extends parser.GirConstructorElement, PartOfClass {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
