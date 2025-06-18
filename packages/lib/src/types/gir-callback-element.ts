import type { GirCallableParams, GirCallableReturn, PartOfModule } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirCallbackElement extends PartOfModule, parser.GirCallbackElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
