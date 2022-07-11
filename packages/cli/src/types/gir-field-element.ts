import {
    GirInfoElements,
    GirAnyType,
    GirInfoAttrs,
    GirBoolean,
    GirUnparsedNumber,
    GirCallbackElement,
    PartOfClass,
    TsVar,
} from './index.js'

export interface GirFieldElement extends PartOfClass, GirInfoElements, GirAnyType {
    /** A field of struct of union structure, that is a C bit field, that is a fixed length in bits variable */
    $: GirInfoAttrs & {
        /** name of the field */
        name: string
        /** Binary attribute, true if the field is writeable */
        writable?: GirBoolean
        /** Binary attribute, true if the field is readable */
        readable?: GirBoolean
        /** Binary attribute, true if the field is private to the structure or has public ("0") visibility */
        private?: GirBoolean
        /** number of bits of the field */
        bits?: GirUnparsedNumber /** integer */
    }

    /* Other elements a property can contain */
    callback?: GirCallbackElement[]

    _tsData?: TsVar
}
