// See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts
export interface GirAnnotation {
    /** element defining an annotation from the source code, usually a user-defined annotation associated to a parameter or a return value */
    $: {
        /** name of the attribute */
        name: string
        /** value of the attribute */
        value: string[]
    }
}
