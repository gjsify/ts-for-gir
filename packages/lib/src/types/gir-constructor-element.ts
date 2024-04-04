import { GirCallableParams, GirCallableReturn, PartOfClass } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirConstructorElement extends parser.GirConstructorElement, PartOfClass {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
