import { CallableReturn } from '@gi.ts/parser'
import { PartOfClass, GirDocElement, GirAnyType } from './index.js'

export interface GirCallableReturn extends CallableReturn, PartOfClass, GirAnyType, GirDocElement {
    // CUSTOM
    girTypeName?: 'callable-return'
}
