import { GirCallableParams, GirCallableReturn, PartOfClass, TsMethod } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirVirtualMethodElement extends PartOfClass, parser.GirVirtualMethodElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsMethod
}
