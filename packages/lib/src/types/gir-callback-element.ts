import { CallbackElement } from '@gi.ts/parser'
import {
    GirBoolean,
    GirInfoElements,
    GirInfoAttrs,
    GirCallableParams,
    GirCallableReturn,
    PartOfModule,
    TsCallback,
} from './index.js'

export interface GirCallbackElement extends CallbackElement, PartOfModule, GirInfoElements {
    /* Other elements a property can contain */

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    _tsData?: TsCallback
}
