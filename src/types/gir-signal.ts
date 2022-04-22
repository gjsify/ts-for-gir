import {
    GirCallableReturn,
    GirBoolean,
    GirInfoAttrs,
    GirInfoElements,
    GirCallableParams,
    PartOfModule,
    GirClassElement,
    GirRecordElement,
    GirInterfaceElement,
    TsSignal,
} from './index.js'

export interface GirSignalElement extends PartOfModule, GirInfoElements {
    /** A signal as defined in the GObject system (https://docs.gtk.org/gobject/concepts.html#signals) */
    $: GirInfoAttrs & {
        /** name of the signal */
        name: string
        /** Binary attribute, true if the signal has a detailed parameter (https://docs.gtk.org/gobject/concepts.html#the-detail-argument and https://docs.gtk.org/gobject/flags.SignalFlags.html) */
        detailed?: GirBoolean
        /** When to run the signal during the 5 steps of signal emission (https://docs.gtk.org/gobject/concepts.html#signal-emission and https://docs.gtk.org/gobject/flags.SignalFlags.html) */
        when?: 'first' | 'last' | 'cleanup'
        /** Binary attribute, true if the signal can be freely emitted on alive objects from user code (https://docs.gtk.org/gobject/flags.SignalFlags.html) */
        action?: GirBoolean
        /** Binary attribute, true if no emission hooks are supported for this signal (https://docs.gtk.org/gobject/flags.SignalFlags.html) */
        'no-hooks'?: GirBoolean
        /** Binary attribute, true if signals emitted for an object while currently being in emission for this very object will not be emitted recursively, but instead cause the first emission to be restarted (https://docs.gtk.org/gobject/flags.SignalFlags.html) */
        'no-recurse'?: GirBoolean
    }
    /* Other elements a property can contain */

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM

    /**
     * The class this function is defined in
     */
    _class?: GirClassElement | GirRecordElement | GirInterfaceElement

    _tsData?: TsSignal
}
