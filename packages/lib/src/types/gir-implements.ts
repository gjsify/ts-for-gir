import { GirInfoAttrs } from './index.js'

export interface GirImplements {
    /** Give the name of the interface it implements. This element is generally used within a class element */
    $: GirInfoAttrs & {
        /** name of the interface implemented by a class */
        name: string
    }
}
