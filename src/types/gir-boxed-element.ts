import { GirInfoAttrs, GirFunctionElement } from './index.js'

export interface GirBoxedElement {
    /** Boxed type (wrapper to opaque C structures registered by the type system) */
    $: GirInfoAttrs & {
        /** GObject compatible type name of the boxed type */
        'glib:name': string
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        'c:symbol-prefix'?: string
        /** GObject compatible type name of the boxed type */
        'glib:type-name'?: string
        /** Function to get the GObject compatible type of the boxed type */
        'glib:get-type'?: string
    }

    /* Other elements a Boxed type can contain */

    function?: GirFunctionElement[]
}
