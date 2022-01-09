import { GirBoolean, GirInfoAttrs, GirInfoElements, GirAnyType, GirTransferOwnership, GirClassElement } from '.'

export interface GirPropertyElement extends GirInfoElements, GirAnyType {
    /** Property, that is a variable or members with getter and setter functions */
    $: GirInfoAttrs & {
        /** name of the property */
        name: string
        /** Binary attribute, true if the property is writeable, that is it has a setter function */
        writable?: GirBoolean
        /** Binary attribute, true if the property is readable, that is it has a getter function */
        readable?: GirBoolean
        /** Binary attribute, true if the property will be set upon construction */
        construct?: GirBoolean
        /** Binary attribute, true if the property can only be set upon construction */
        'construct-only'?: GirBoolean
    } & Partial<GirTransferOwnership>

    /**
     * The class this variable is defined in
     */
    _class?: GirClassElement
}
