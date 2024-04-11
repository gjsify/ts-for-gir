import { GirModule } from '../gir-module'
import { ResolveType } from './resolve-type'

export interface GirModuleResolvedBy {
    module: GirModule
    resolvedBy: ResolveType
    /**
     * E.g. Gtk-3.0
     */
    packageName: string
    /**
     * Path of the gir file
     * E.g. /usr/share/gir-1.0/Gtk-3.0/Gtk-3.0.gir
     */
    path: string | null
}
