import {
    GirBoolean,
    GirInfoElements,
    GirInfoAttrs,
    GirCallableParams,
    GirCallableReturn,
    PartOfModule,
    TsCallback,
    TsCallbackInterface,
} from '.'

export interface GirCallbackElement extends PartOfModule, GirInfoElements {
    /** A callback closure, that is a function called when a signal is emitted (as an answer to that signal) */
    $: GirInfoAttrs & {
        /** name of the callback */
        name: string
        /** the C type returned by the callback closure (i.e. function) */
        'c:type'?: string
        /** Binary attribute, true if the callback can throw an error */
        throws?: GirBoolean
    }

    /* Other elements a property can contain */

    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]

    // CUSTOM
    _girType?: 'callback'
    /** Will be exported in Typescript as a `interface` to be able to assign this interface to the callbacks or as a global function */
    _tsType?: 'interface'
    _tsData?: TsCallback

    /**
     * Interface for callback types
     */
    _tsDataInterface?: TsCallbackInterface
}
