import { GirModuleResolvedBy } from './gir-module-resolved-by'

/**
 * Grouped gir modules by basename like Gtk for Gtk-2.0, Gtk-3.0 and Gtk-4.0
 */
export interface GirModulesGrouped {
    modules: GirModuleResolvedBy[]
    hasConflict: boolean
    /**
     * E.g. Gtk
     */
    namespace: string
}
