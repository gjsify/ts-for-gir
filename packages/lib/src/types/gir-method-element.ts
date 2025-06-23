import type { GirCallableParams } from './gir-callable-params.ts'
import type { PartOfClass, GirCallableReturn } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirMethodElement extends PartOfClass, parser.GirMethodElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
