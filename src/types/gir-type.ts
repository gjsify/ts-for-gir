import { GirArrayType, GirBoolean, GirInfoAttrs, GirDocElement } from './index.js'

export interface GirType extends GirDocElement {
    /** A simple type of data (as opposed to an array) */
    $: GirInfoAttrs & {
        /** name of the type */
        name?: string
        /** the C representation of the type */
        'c:type'?: string
        /** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
        introspectable?: GirBoolean
    }

    array?: GirArrayType[]
    type: GirType[]
}
