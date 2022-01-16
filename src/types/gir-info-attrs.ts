import { GirBoolean } from './gir-boolean'

// Some base information for most elements like version, deprecation, stability, if they are introspectable or not, etc...
// See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts
export interface GirInfoAttrs {
    /** Binary attribute which is GirBoolean(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
    introspectable?: GirBoolean
    /** Binary attribute which isBinaryOption (true) if the element has been deprecated */
    deprecated?: string
    /** Version number from which this element is deprecated */
    'deprecated-version'?: string
    /** version number of an element */
    version?: string
    /** give the statibility status of the element. Can take the values "Stable", "Unstable" or "Private" */
    stability?: string[]
}
