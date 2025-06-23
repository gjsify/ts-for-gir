import type { PartOfClass } from './index.ts'
import * as parser from '@gi.ts/parser'

export interface GirCallableReturn extends PartOfClass, parser.GirCallableReturn {
    // CUSTOM
    girTypeName?: 'callable-return'
}
