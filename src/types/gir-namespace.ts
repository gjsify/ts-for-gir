import {
    GirInfoAttrs,
    GirInterfaceElement,
    GirRecordElement,
    GirUnionElement,
    GirEnumElement,
    GirAliasElement,
    GirFunctionElement,
    GirClassElement,
    GirBitfieldElement,
    GirCallbackElement,
    GirConstantElement,
    GirAnnotation,
    GirBoxedElement,
} from './index.js'

/** Namespace which maps metadata entries to C functionality. This a similar concept to namespace in C++, but for GObject-based C libraries */
export interface GirNamespace {
    $: GirInfoAttrs & {
        /** name of the namespace. For example, 'Gtk' (technically optional) */
        name: string
        /** version number of the namespace (technically optional) */
        version: string
        /** prefixes to filter out from C identifiers for data structures and types. For example, GtkWindow will be Window. If c:symbol-prefixes is not used, then this element is used for both */
        'c:identifier-prefixes'?: string
        /** prefixes to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        'c:symbol-prefixes'?: string
        /** @deprecated the same as c:identifier-prefixes. Only used for backward compatibility  */
        'c:prefix'?: string
        /** Path to the shared library implementing the namespace. It can be a comma-separated list, with relative path only */
        'shared-library'?: string
    }

    /* Other elements a namespace can contain */
    alias?: GirAliasElement[]
    class?: GirClassElement[]
    interface?: GirInterfaceElement[]
    record?: GirRecordElement[]
    enumeration?: GirEnumElement[]
    function?: GirFunctionElement[]
    union?: GirUnionElement[]
    bitfield?: GirBitfieldElement[]
    callback?: GirCallbackElement[]
    constant?: GirConstantElement[]
    annotation?: GirAnnotation[]
    ['glib:boxed']?: GirBoxedElement[]
}
