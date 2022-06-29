import { GirInclude, GirNamespace, GirCInclude, GirPackage } from './index.js'

/** Root node of a GIR repository. It contains  namespaces, which can in turn be implemented in several libraries */
export interface GirRepository {
    $: {
        /** version number of the repository */
        version?: string
        /** prefixes to filter out from C identifiers for data structures and types. For example, GtkWindow will be Window. If c:symbol-prefixes is not used, then this element is used for both */
        'c:identifier-prefixes'?: string
        /** prefixes to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        'c:symbol-prefixes'?: string
    }

    /* Other elements a repository can contain */
    include?: GirInclude[]
    'c:include': GirCInclude[]
    package: GirPackage[]

    namespace?: GirNamespace[]
}
