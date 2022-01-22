import {
    GirBoolean,
    GirInfoAttrs,
    GirInfoElements,
    GirAnyType,
    GirTransferOwnership,
    PartOfClass,
    DescProperty,
} from '.'

export interface GirPropertyElement extends PartOfClass, GirInfoElements, GirAnyType {
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
        /** The setter function for this property */
        setter?: string
        /** The getter function for this property */
        getter?: string
    } & Partial<GirTransferOwnership>

    // CUSTOM
    _type: 'property' | 'constructor-property'
    _desc?: DescProperty
}
