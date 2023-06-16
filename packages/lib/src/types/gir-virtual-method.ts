import { VirtualMethodElement } from '@gi.ts/parser'
import { PartOfClass, GirDocElement, TsMethod, GirCallableReturn, GirCallableParams } from './index.js'

export interface GirVirtualMethodElement extends VirtualMethodElement, PartOfClass, GirDocElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsMethod
}
