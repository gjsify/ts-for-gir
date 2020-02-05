import { GirModule } from '../gir-module'

export enum ResolveType {
    DEPENDENCE,
    BY_HAND,
}

export interface ResolveGirModule {
    module: GirModule
    resolvedBy: ResolveType
    /**
     * E.g. Gtk-3.0
     */
    fullName: string
}

export interface GroupedGirFile {
    modules: ResolveGirModule[]
    hasConflict: boolean
    /**
     * E.g. Gtk
     */
    name: string
}

export interface GroupedGirFiles {
    [id: string]: GroupedGirFile
}
