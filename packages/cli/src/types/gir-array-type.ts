// See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts

import { GirInfoAttrs, GirUnparsedNumber, GirBoolean, GirType } from './index.js'

export interface GirArrayType {
    /** An array type of data where each element is of the same type */
    $: GirInfoAttrs & {
        /** name of the array type */
        name?: string
        /** Binary attribute, true if the last element of the array is zero. For example, in an array of pointers, the last pointer would be NULL */
        'zero-terminated'?: GirBoolean
        /** size of an array of predetermined fixed size. For example a C array declared as char arr[5]. */
        'fixed-size'?: GirUnparsedNumber /** integer */
        /** Binary attribute which is GirBoolean (false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
        introspectable?: GirBoolean
        /** 0-based index of parameter element that specifies the length of the array */
        length?: GirUnparsedNumber /** integer */
        /** the C representation of the array type */
        'c:type'?: string
    }
    array?: GirArrayType[]
    type?: GirType[]
}
