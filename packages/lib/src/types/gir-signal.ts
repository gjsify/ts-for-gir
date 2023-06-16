import { SignalElement } from '@gi.ts/parser'
import {
    GirCallableReturn,
    GirInfoElements,
    GirCallableParams,
    PartOfModule,
    GirClassElement,
    GirRecordElement,
    GirInterfaceElement,
    TsSignal,
} from './index.js'

export interface GirSignalElement extends Omit<SignalElement, 'return-value'>, PartOfModule, GirInfoElements {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM

    /**
     * The class this function is defined in
     */
    _class?: GirClassElement | GirRecordElement | GirInterfaceElement

    _tsData?: TsSignal
}
