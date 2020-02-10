import { GirModule } from '../gir-module'
import { ResolveType } from './resolve-type'

export interface GirModuleResolvedBy {
    module: GirModule
    resolvedBy: ResolveType
    /**
     * E.g. Gtk-3.0
     */
    packageName: string
}
