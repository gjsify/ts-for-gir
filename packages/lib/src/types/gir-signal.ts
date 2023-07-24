import { SignalElement } from '@gi.ts/parser'
import { GirCallableReturn, GirInfoElements, GirCallableParams, PartOfModule } from './index.js'

export interface GirSignalElement extends Omit<SignalElement, 'return-value'>, PartOfModule, GirInfoElements {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
