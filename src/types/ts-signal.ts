import { TsMethod, TsCallback, TsCallbackInterface } from './index.js'

/**
 * Holds the data to generate a function in/for Typescript for `GirSignal`
 */
export interface TsSignal extends TsCallback {
    /** Signal functions like `connect`, `connect_after`, `disconnect` and `emit` on Gjs or `connect`, `after`, `on`, `once`, `off` and `emit` an node-gtk */
    tsMethods: TsMethod[]

    /** Signal overloads, used in `ConflictResolver` */
    overloads: TsSignal[]

    /**
     * Interface for the callback type
     */
    tsCallbackInterface?: TsCallbackInterface

    girTypeName: 'signal'
    /** Signals are represented in Typescript as multiple event methods */
    tsTypeName: 'event-methods'
}
