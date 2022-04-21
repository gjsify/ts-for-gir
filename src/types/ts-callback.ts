import { TsMethod, TsCallbackInterface } from './index.js'

/**
 * Holds the data to generate a callback function in/for Typescript
 */
export interface TsCallback extends TsMethod {
    /**
     * Interface for the callback type
     */
    tsCallbackInterface?: TsCallbackInterface
}
