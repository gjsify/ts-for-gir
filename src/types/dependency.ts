export interface Dependency {
    /**
     * E.g. 'Gtk'
     */
    namespace: string
    /**
     * E.g. '3.0'
     */
    version: string
    /**
     * E.g. 'Gtk-3.0'
     */
    packageName: string
}
