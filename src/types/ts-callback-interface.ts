import { TsDoc } from './index.js'

/**
 * Holds the data to generate an interface for `GirCallbackElements` in/for Typescript
 */
export interface TsCallbackInterface {
    name: string
    overwriteDoc?: Partial<TsDoc>
}
