import type { GirInfoElements, GirAnyType, GirInfoAttrs, PartOfModule, TsVar } from './index.js'

export interface GirConstantElement extends PartOfModule, GirInfoElements, GirAnyType {
    /** A constant entity, similar to const variable in C */
    $: GirInfoAttrs & {
        /** name of the constant */
        name: string
        /** value of the constant */
        value: string
        /** corresponding C type of the constant in C */
        'c:type'?: string
        /** corresponding C identifier in the source code */
        'c:identifier'?: string
    }

    _tsData?: TsVar
}
