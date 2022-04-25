import { TsMethod, TsCallbackInterface, TsDoc } from './index.js'

/**
 * Holds the data to generate a callback function in/for Typescript
 */
export interface TsCallback extends TsMethod {
    /**
     * Interface for the callback type
     */
    tsCallbackInterface?: TsCallbackInterface
    // CUSTOM
    girTypeName: 'callback' | 'signal'
    /** Will be exported in Typescript as a `interface` to be able to assign this interface to the callbacks or as a global function */
    tsTypeName: 'interface' | 'event-methods'

    /** Typescript data to generate documentations in TSDoc style */
    doc: TsDoc
}
