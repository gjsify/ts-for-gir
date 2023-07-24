import { CallbackElement } from '@gi.ts/parser'
import { GirInfoElements, GirCallableParams, GirCallableReturn, PartOfModule } from './index.js'

export interface GirCallbackElement extends CallbackElement, PartOfModule, GirInfoElements {
    /* Other elements a property can contain */
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
