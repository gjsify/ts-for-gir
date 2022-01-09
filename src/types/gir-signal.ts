import { TsForGjsExtended } from './ts-for-gjs-extended'
import { GirCallableParams } from './gir-callable-param'
import { GirInfoElements } from './gir-info-elements'
import { GirInfoAttrs } from './gir-info-attrs'
import { GirBoolean } from './gir-boolean'
import { GirCallableReturn } from './gir-callable-return'

export interface GirSignalElement extends TsForGjsExtended, GirInfoElements {
    /** A signal as defined in the GObject system (https://developer.gnome.org/gobject/stable/signal.html) */
    $: GirInfoAttrs & {
        /** name of the signal */
        name: string
        /** Binary attribute, true if the signal has a detailed parameter (https://developer.gnome.org/gobject/stable/signal.html#signal-detail//and https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        detailed?: GirBoolean
        /** When to run the signal during the 5 steps of signal emission (https://developer.gnome.org/gobject/stable/signal.html#signal-emission and https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        when?: 'first' | 'last' | 'cleanup'
        /** Binary attribute, true if the signal can be freely emitted on alive objects from user code (https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        action?: GirBoolean
        /** Binary attribute, true if no emission hooks are supported for this signal (https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags)  */
        'no-hooks'?: GirBoolean
        /** Binary attribute, true if signals emitted for an object while currently being in emission for this very object will not be emitted recursively, but instead cause the first emission to be restarted (https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        'no-recurse'?: GirBoolean
    }
    /* Other elements a property can contain */

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
