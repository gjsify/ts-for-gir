import { TsMethod, TsCallback, TsCallbackInterface } from './index.js'

/**
 * Holds the data to generate a function in/for Typescript for `GirSignal`
 */
export interface TsSignal extends TsCallback {
    /** Signal functions like `connect`, `connect_after` and `emit` on Gjs or `connect`, `on`, `once`, `off` and `emit` an node-gtk */
    tsMethods: TsMethod[]
    /**
     * Interface for the callback type
     */
    tsCallbackInterface?: TsCallbackInterface
}
