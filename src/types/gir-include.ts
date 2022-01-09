export interface GirInclude {
    /** Dependant namespace to include with the current namespace. For example, Gtk will need the namespace GLib */
    $: {
        /** name of the dependant namespace to include */
        name: string
        /** version of the dependant namespace to use */
        version?: string
    }
}
