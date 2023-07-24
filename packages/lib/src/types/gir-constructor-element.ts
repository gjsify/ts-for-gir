import { ConstructorElement } from '@gi.ts/parser'
import { GirCallableParams, GirCallableReturn, PartOfClass } from './index.js'

export interface GirConstructorElement extends ConstructorElement, PartOfClass {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
