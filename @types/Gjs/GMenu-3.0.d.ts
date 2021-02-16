/**
 * GMenu-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum TreeItemType {
    INVALID,
    DIRECTORY,
    ENTRY,
    SEPARATOR,
    HEADER,
    ALIAS,
}
export enum TreeFlags {
    NONE,
    INCLUDE_EXCLUDED,
    SHOW_EMPTY,
    INCLUDE_NODISPLAY,
    SHOW_ALL_SEPARATORS,
    SORT_DISPLAY_NAME,
    INCLUDE_UNALLOCATED,
}
export interface Tree_ConstructProps extends GObject.Object_ConstructProps {
    flags?: TreeFlags
    menu_basename?: string
    menu_path?: string
}
export class Tree {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMenu.Tree */
    get_canonical_menu_path(): string
    get_directory_from_path(path: string): TreeDirectory
    get_entry_by_id(id: string): TreeEntry
    get_root_directory(): TreeDirectory
    load_sync(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GMenu.Tree */
    connect(sigName: "changed", callback: (($obj: Tree) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Tree) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(menu_basename: string, flags: TreeFlags): Tree
    static new_for_path(menu_path: string, flags: TreeFlags): Tree
    static item_ref(item?: object | null): object | null
    static item_unref(item?: object | null): void
    static $gtype: GObject.Type
}
export class TreeAlias {
    /* Methods of GMenu.TreeAlias */
    get_aliased_directory(): TreeDirectory
    get_aliased_entry(): TreeEntry
    get_aliased_item_type(): TreeItemType
    get_directory(): TreeDirectory
    get_parent(): TreeDirectory
    get_tree(): Tree
    static name: string
}
export abstract class TreeClass {
    /* Fields of GMenu.TreeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TreeDirectory {
    /* Methods of GMenu.TreeDirectory */
    get_comment(): string
    get_desktop_file_path(): string
    get_generic_name(): string
    get_icon(): Gio.Icon
    get_is_nodisplay(): boolean
    get_menu_id(): string
    get_name(): string
    get_parent(): TreeDirectory
    get_tree(): Tree
    iter(): TreeIter
    make_path(entry: TreeEntry): string
    static name: string
}
export class TreeEntry {
    /* Methods of GMenu.TreeEntry */
    get_app_info(): Gio.DesktopAppInfo
    get_desktop_file_id(): string
    get_desktop_file_path(): string
    get_is_excluded(): boolean
    get_is_nodisplay_recurse(): boolean
    get_is_unallocated(): boolean
    get_parent(): TreeDirectory
    get_tree(): Tree
    static name: string
}
export class TreeHeader {
    /* Methods of GMenu.TreeHeader */
    get_directory(): TreeDirectory
    get_parent(): TreeDirectory
    get_tree(): Tree
    static name: string
}
export class TreeIter {
    /* Methods of GMenu.TreeIter */
    get_alias(): TreeAlias
    get_directory(): TreeDirectory
    get_entry(): TreeEntry
    get_header(): TreeHeader
    get_separator(): TreeSeparator
    next(): TreeItemType
    static name: string
}
export class TreeSeparator {
    /* Methods of GMenu.TreeSeparator */
    get_parent(): TreeDirectory
    get_tree(): Tree
    static name: string
}