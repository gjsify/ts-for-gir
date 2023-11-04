import { GirCallableParams } from './gir-callable-params.js'
import { TsMethod, PartOfClass, GirCallableReturn } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirMethodElement extends PartOfClass, parser.GirMethodElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsMethod
}
