import type { GirInfoElements, GirAnyType, GirInfoAttrs, PartOfModule, DescVar } from '.'

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

    // CUSTOM
    _girType?: 'constant'
    /** Will be exported in Typescript as a `constant` */
    _tsType?: 'constant'
    _desc?: DescVar
}
