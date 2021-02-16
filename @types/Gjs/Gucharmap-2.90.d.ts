/**
 * Gucharmap-2.90
 */

import * as Gjs from './Gjs';
import * as Pango from './Pango-1.0';
import * as cairo from './cairo-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';

export enum CharmapPageType {
    CHARTABLE,
    DETAILS,
}
export enum UnicodeVersion {
    UNASSIGNED,
    /* 1_1 (invalid, starts with a number) */
    /* 2_0 (invalid, starts with a number) */
    /* 2_1 (invalid, starts with a number) */
    /* 3_0 (invalid, starts with a number) */
    /* 3_1 (invalid, starts with a number) */
    /* 3_2 (invalid, starts with a number) */
    /* 4_0 (invalid, starts with a number) */
    /* 4_1 (invalid, starts with a number) */
    /* 5_0 (invalid, starts with a number) */
    /* 5_1 (invalid, starts with a number) */
    /* 5_2 (invalid, starts with a number) */
    /* 6_0 (invalid, starts with a number) */
    /* 6_1 (invalid, starts with a number) */
    /* 6_2 (invalid, starts with a number) */
    /* 6_3 (invalid, starts with a number) */
    /* 7_0 (invalid, starts with a number) */
    /* 8_0 (invalid, starts with a number) */
    LATEST,
}
export function get_nameslist_colons(uc: number): string[]
export function get_nameslist_equals(uc: number): string[]
export function get_nameslist_exes(uc: number): number
export function get_nameslist_pounds(uc: number): string[]
export function get_nameslist_stars(uc: number): string[]
export function get_unicode_category_name(uc: number): string
export function get_unicode_data_name(uc: number): string
export function get_unicode_data_name_count(): number
export function get_unicode_kCantonese(uc: number): string
export function get_unicode_kDefinition(uc: number): string
export function get_unicode_kJapaneseKun(uc: number): string
export function get_unicode_kJapaneseOn(uc: number): string
export function get_unicode_kKorean(uc: number): string
export function get_unicode_kMandarin(uc: number): string
export function get_unicode_kTang(uc: number): string
export function get_unicode_name(uc: number): string
export function get_unicode_version(uc: number): UnicodeVersion
export function get_unihan_count(): number
export function unichar_isdefined(uc: number): boolean
export function unichar_isgraph(uc: number): boolean
export function unichar_to_printable_utf8(uc: number, outbuf: string): number
export function unichar_type(uc: number): GLib.UnicodeType
export function unichar_validate(uc: number): boolean
export function unicode_get_locale_character(): number
export function unicode_get_script_for_char(wc: number): string
export function unicode_list_scripts(): string[]
export function unicode_version_to_string(version: UnicodeVersion): string
export interface BlockChaptersModel_ConstructProps extends ChaptersModel_ConstructProps {
}
export class BlockChaptersModel {
    /* Fields of Gucharmap.BlockChaptersModel */
    parent: ChaptersModel
    /* Fields of Gucharmap.ChaptersModel */
    parent_instance: Gtk.ListStore
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.ChaptersModel */
    character_to_iter(wc: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_book_codepoint_list(): CodepointList
    get_codepoint_list(iter: Gtk.TreeIter): CodepointList
    get_title(): string
    id_to_iter(id: string): [ /* returnType */ boolean, /* _iter */ Gtk.TreeIter ]
    /* Methods of Gtk.ListStore */
    append(): /* iter */ Gtk.TreeIter
    clear(): void
    insert(position: number): /* iter */ Gtk.TreeIter
    insert_after(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_before(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_with_values(position: number, columns: number[], values: any): /* iter */ Gtk.TreeIter | null
    iter_is_valid(iter: Gtk.TreeIter): boolean
    move_after(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    move_before(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(): /* iter */ Gtk.TreeIter
    remove(iter: Gtk.TreeIter): boolean
    reorder(new_order: number[]): void
    set_column_types(types: GObject.Type[]): void
    set_value(iter: Gtk.TreeIter, column: number, value: any): void
    set(iter: Gtk.TreeIter, columns: number[], values: any): void
    swap(a: Gtk.TreeIter, b: Gtk.TreeIter): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.TreeDragDest */
    drag_data_received(dest: Gtk.TreePath, value: any): boolean
    row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    /* Methods of Gtk.TreeDragSource */
    drag_data_delete(path: Gtk.TreePath): boolean
    drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    row_draggable(path: Gtk.TreePath): boolean
    /* Methods of Gtk.TreeModel */
    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel
    foreach(func: Gtk.TreeModelForeachFunc): void
    get_column_type(index_: number): GObject.Type
    get_flags(): Gtk.TreeModelFlags
    get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_first(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_from_string(path_string: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_n_columns(): number
    get_path(iter: Gtk.TreeIter): Gtk.TreePath
    get_string_from_iter(iter: Gtk.TreeIter): string | null
    get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_has_child(iter: Gtk.TreeIter): boolean
    iter_n_children(iter?: Gtk.TreeIter | null): number
    iter_next(iter: Gtk.TreeIter): boolean
    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_previous(iter: Gtk.TreeIter): boolean
    ref_node(iter: Gtk.TreeIter): void
    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_deleted(path: Gtk.TreePath): void
    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void
    unref_node(iter: Gtk.TreeIter): void
    /* Methods of Gtk.TreeSortable */
    get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    has_default_sort_func(): boolean
    set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    sort_column_changed(): void
    /* Virtual methods of Gucharmap.ChaptersModel */
    vfunc_character_to_iter(wc: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_book_codepoint_list(): CodepointList
    vfunc_get_codepoint_list(iter: Gtk.TreeIter): CodepointList
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_drag_data_received(dest: Gtk.TreePath, value: any): boolean
    vfunc_row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    vfunc_drag_data_delete(path: Gtk.TreePath): boolean
    vfunc_drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    vfunc_row_draggable(path: Gtk.TreePath): boolean
    vfunc_get_column_type(index_: number): GObject.Type
    vfunc_get_flags(): Gtk.TreeModelFlags
    vfunc_get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_n_columns(): number
    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath
    vfunc_get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    vfunc_iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean
    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number
    vfunc_iter_next(iter: Gtk.TreeIter): boolean
    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_previous(iter: Gtk.TreeIter): boolean
    vfunc_ref_node(iter: Gtk.TreeIter): void
    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_deleted(path: Gtk.TreePath): void
    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_unref_node(iter: Gtk.TreeIter): void
    vfunc_get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    vfunc_has_default_sort_func(): boolean
    vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    vfunc_set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_sort_column_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockChaptersModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockChaptersModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-has-child-toggled", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    connect_after(sigName: "rows-reordered", callback: (($obj: BlockChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null): void
    /* Signals of Gtk.TreeSortable */
    connect(sigName: "sort-column-changed", callback: (($obj: BlockChaptersModel) => void)): number
    connect_after(sigName: "sort-column-changed", callback: (($obj: BlockChaptersModel) => void)): number
    emit(sigName: "sort-column-changed"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlockChaptersModel_ConstructProps)
    _init (config?: BlockChaptersModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BlockChaptersModel
    static new(types: GObject.Type[]): BlockChaptersModel
    static $gtype: GObject.Type
}
export interface BlockCodepointList_ConstructProps extends CodepointList_ConstructProps {
    first_codepoint?: number
    last_codepoint?: number
}
export class BlockCodepointList {
    /* Fields of Gucharmap.BlockCodepointList */
    parent_instance: CodepointList
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.CodepointList */
    get_char(index: number): number
    get_index(wc: number): number
    get_last_index(): number
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
    /* Virtual methods of Gucharmap.CodepointList */
    vfunc_get_char(index: number): number
    vfunc_get_index(wc: number): number
    vfunc_get_last_index(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockCodepointList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockCodepointList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlockCodepointList_ConstructProps)
    _init (config?: BlockCodepointList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start: number, end: number): BlockCodepointList
    static $gtype: GObject.Type
}
export interface ChaptersModel_ConstructProps extends Gtk.ListStore_ConstructProps {
}
export class ChaptersModel {
    /* Fields of Gucharmap.ChaptersModel */
    parent_instance: Gtk.ListStore
    /* Fields of Gtk.ListStore */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.ChaptersModel */
    character_to_iter(wc: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_book_codepoint_list(): CodepointList
    get_codepoint_list(iter: Gtk.TreeIter): CodepointList
    get_title(): string
    id_to_iter(id: string): [ /* returnType */ boolean, /* _iter */ Gtk.TreeIter ]
    /* Methods of Gtk.ListStore */
    append(): /* iter */ Gtk.TreeIter
    clear(): void
    insert(position: number): /* iter */ Gtk.TreeIter
    insert_after(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_before(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_with_values(position: number, columns: number[], values: any): /* iter */ Gtk.TreeIter | null
    iter_is_valid(iter: Gtk.TreeIter): boolean
    move_after(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    move_before(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(): /* iter */ Gtk.TreeIter
    remove(iter: Gtk.TreeIter): boolean
    reorder(new_order: number[]): void
    set_column_types(types: GObject.Type[]): void
    set_value(iter: Gtk.TreeIter, column: number, value: any): void
    set(iter: Gtk.TreeIter, columns: number[], values: any): void
    swap(a: Gtk.TreeIter, b: Gtk.TreeIter): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.TreeDragDest */
    drag_data_received(dest: Gtk.TreePath, value: any): boolean
    row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    /* Methods of Gtk.TreeDragSource */
    drag_data_delete(path: Gtk.TreePath): boolean
    drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    row_draggable(path: Gtk.TreePath): boolean
    /* Methods of Gtk.TreeModel */
    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel
    foreach(func: Gtk.TreeModelForeachFunc): void
    get_column_type(index_: number): GObject.Type
    get_flags(): Gtk.TreeModelFlags
    get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_first(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_from_string(path_string: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_n_columns(): number
    get_path(iter: Gtk.TreeIter): Gtk.TreePath
    get_string_from_iter(iter: Gtk.TreeIter): string | null
    get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_has_child(iter: Gtk.TreeIter): boolean
    iter_n_children(iter?: Gtk.TreeIter | null): number
    iter_next(iter: Gtk.TreeIter): boolean
    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_previous(iter: Gtk.TreeIter): boolean
    ref_node(iter: Gtk.TreeIter): void
    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_deleted(path: Gtk.TreePath): void
    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void
    unref_node(iter: Gtk.TreeIter): void
    /* Methods of Gtk.TreeSortable */
    get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    has_default_sort_func(): boolean
    set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    sort_column_changed(): void
    /* Virtual methods of Gucharmap.ChaptersModel */
    vfunc_character_to_iter(wc: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_book_codepoint_list(): CodepointList
    vfunc_get_codepoint_list(iter: Gtk.TreeIter): CodepointList
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_drag_data_received(dest: Gtk.TreePath, value: any): boolean
    vfunc_row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    vfunc_drag_data_delete(path: Gtk.TreePath): boolean
    vfunc_drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    vfunc_row_draggable(path: Gtk.TreePath): boolean
    vfunc_get_column_type(index_: number): GObject.Type
    vfunc_get_flags(): Gtk.TreeModelFlags
    vfunc_get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_n_columns(): number
    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath
    vfunc_get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    vfunc_iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean
    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number
    vfunc_iter_next(iter: Gtk.TreeIter): boolean
    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_previous(iter: Gtk.TreeIter): boolean
    vfunc_ref_node(iter: Gtk.TreeIter): void
    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_deleted(path: Gtk.TreePath): void
    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_unref_node(iter: Gtk.TreeIter): void
    vfunc_get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    vfunc_has_default_sort_func(): boolean
    vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    vfunc_set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_sort_column_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChaptersModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChaptersModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: ChaptersModel, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: ChaptersModel, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-has-child-toggled", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    connect_after(sigName: "rows-reordered", callback: (($obj: ChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null): void
    /* Signals of Gtk.TreeSortable */
    connect(sigName: "sort-column-changed", callback: (($obj: ChaptersModel) => void)): number
    connect_after(sigName: "sort-column-changed", callback: (($obj: ChaptersModel) => void)): number
    emit(sigName: "sort-column-changed"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChaptersModel_ConstructProps)
    _init (config?: ChaptersModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ChaptersView_ConstructProps extends Gtk.TreeView_ConstructProps {
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class ChaptersView {
    /* Properties of Gtk.TreeView */
    activate_on_single_click: boolean
    enable_grid_lines: Gtk.TreeViewGridLines
    enable_search: boolean
    enable_tree_lines: boolean
    expander_column: Gtk.TreeViewColumn
    fixed_height_mode: boolean
    headers_clickable: boolean
    headers_visible: boolean
    hover_expand: boolean
    hover_selection: boolean
    level_indentation: number
    model: Gtk.TreeModel
    reorderable: boolean
    rubber_banding: boolean
    search_column: number
    show_expanders: boolean
    tooltip_column: number
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of Gucharmap.ChaptersView */
    parent_instance: Gtk.TreeView
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.ChaptersView */
    get_book_codepoint_list(): CodepointList
    get_codepoint_list(): CodepointList
    get_model(): ChaptersModel
    get_selected(): string
    next(): void
    previous(): void
    select_character(wc: number): boolean
    select_locale(): boolean
    set_model(model: ChaptersModel): void
    set_selected(name: string): boolean
    /* Methods of Gtk.TreeView */
    append_column(column: Gtk.TreeViewColumn): number
    collapse_all(): void
    collapse_row(path: Gtk.TreePath): boolean
    columns_autosize(): void
    convert_bin_window_to_tree_coords(bx: number, by: number): [ /* tx */ number, /* ty */ number ]
    convert_bin_window_to_widget_coords(bx: number, by: number): [ /* wx */ number, /* wy */ number ]
    convert_tree_to_bin_window_coords(tx: number, ty: number): [ /* bx */ number, /* by */ number ]
    convert_tree_to_widget_coords(tx: number, ty: number): [ /* wx */ number, /* wy */ number ]
    convert_widget_to_bin_window_coords(wx: number, wy: number): [ /* bx */ number, /* by */ number ]
    convert_widget_to_tree_coords(wx: number, wy: number): [ /* tx */ number, /* ty */ number ]
    create_row_drag_icon(path: Gtk.TreePath): Gdk.Paintable | null
    enable_model_drag_dest(formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    expand_all(): void
    expand_row(path: Gtk.TreePath, open_all: boolean): boolean
    expand_to_path(path: Gtk.TreePath): void
    get_activate_on_single_click(): boolean
    get_background_area(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): /* rect */ Gdk.Rectangle
    get_cell_area(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): /* rect */ Gdk.Rectangle
    get_column(n: number): Gtk.TreeViewColumn | null
    get_columns(): Gtk.TreeViewColumn[]
    get_cursor(): [ /* path */ Gtk.TreePath | null, /* focus_column */ Gtk.TreeViewColumn | null ]
    get_dest_row_at_pos(drag_x: number, drag_y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* pos */ Gtk.TreeViewDropPosition | null ]
    get_drag_dest_row(): [ /* path */ Gtk.TreePath | null, /* pos */ Gtk.TreeViewDropPosition | null ]
    get_enable_search(): boolean
    get_enable_tree_lines(): boolean
    get_expander_column(): Gtk.TreeViewColumn | null
    get_fixed_height_mode(): boolean
    get_grid_lines(): Gtk.TreeViewGridLines
    get_headers_clickable(): boolean
    get_headers_visible(): boolean
    get_hover_expand(): boolean
    get_hover_selection(): boolean
    get_level_indentation(): number
    get_model(): Gtk.TreeModel | null
    get_n_columns(): number
    get_path_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* column */ Gtk.TreeViewColumn | null, /* cell_x */ number | null, /* cell_y */ number | null ]
    get_reorderable(): boolean
    get_rubber_banding(): boolean
    get_search_column(): number
    get_search_entry(): Gtk.Editable | null
    get_selection(): Gtk.TreeSelection
    get_show_expanders(): boolean
    get_tooltip_column(): number
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [ /* returnType */ boolean, /* model */ Gtk.TreeModel | null, /* path */ Gtk.TreePath | null, /* iter */ Gtk.TreeIter | null ]
    get_visible_range(): [ /* returnType */ boolean, /* start_path */ Gtk.TreePath | null, /* end_path */ Gtk.TreePath | null ]
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    insert_column(column: Gtk.TreeViewColumn, position: number): number
    insert_column_with_data_func(position: number, title: string, cell: Gtk.CellRenderer, func: Gtk.TreeCellDataFunc): number
    is_blank_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* column */ Gtk.TreeViewColumn | null, /* cell_x */ number | null, /* cell_y */ number | null ]
    is_rubber_banding_active(): boolean
    map_expanded_rows(func: Gtk.TreeViewMappingFunc): void
    move_column_after(column: Gtk.TreeViewColumn, base_column?: Gtk.TreeViewColumn | null): void
    remove_column(column: Gtk.TreeViewColumn): number
    row_activated(path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    row_expanded(path: Gtk.TreePath): boolean
    scroll_to_cell(path: Gtk.TreePath | null, column: Gtk.TreeViewColumn | null, use_align: boolean, row_align: number, col_align: number): void
    scroll_to_point(tree_x: number, tree_y: number): void
    set_activate_on_single_click(single: boolean): void
    set_column_drag_function(func?: Gtk.TreeViewColumnDropFunc | null): void
    set_cursor(path: Gtk.TreePath, focus_column: Gtk.TreeViewColumn | null, start_editing: boolean): void
    set_cursor_on_cell(path: Gtk.TreePath, focus_column: Gtk.TreeViewColumn | null, focus_cell: Gtk.CellRenderer | null, start_editing: boolean): void
    set_drag_dest_row(path: Gtk.TreePath | null, pos: Gtk.TreeViewDropPosition): void
    set_enable_search(enable_search: boolean): void
    set_enable_tree_lines(enabled: boolean): void
    set_expander_column(column?: Gtk.TreeViewColumn | null): void
    set_fixed_height_mode(enable: boolean): void
    set_grid_lines(grid_lines: Gtk.TreeViewGridLines): void
    set_headers_clickable(setting: boolean): void
    set_headers_visible(headers_visible: boolean): void
    set_hover_expand(expand: boolean): void
    set_hover_selection(hover: boolean): void
    set_level_indentation(indentation: number): void
    set_model(model?: Gtk.TreeModel | null): void
    set_reorderable(reorderable: boolean): void
    set_row_separator_func(func?: Gtk.TreeViewRowSeparatorFunc | null): void
    set_rubber_banding(enable: boolean): void
    set_search_column(column: number): void
    set_search_entry(entry?: Gtk.Editable | null): void
    set_search_equal_func(search_equal_func: Gtk.TreeViewSearchEqualFunc): void
    set_show_expanders(enabled: boolean): void
    set_tooltip_cell(tooltip: Gtk.Tooltip, path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null, cell?: Gtk.CellRenderer | null): void
    set_tooltip_column(column: number): void
    set_tooltip_row(tooltip: Gtk.Tooltip, path: Gtk.TreePath): void
    unset_rows_drag_dest(): void
    unset_rows_drag_source(): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.Scrollable */
    get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    get_hadjustment(): Gtk.Adjustment
    get_hscroll_policy(): Gtk.ScrollablePolicy
    get_vadjustment(): Gtk.Adjustment
    get_vscroll_policy(): Gtk.ScrollablePolicy
    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void
    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void
    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void
    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of Gucharmap.ChaptersView */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /* Virtual methods of Gtk.TreeView */
    vfunc_columns_changed(): void
    vfunc_cursor_changed(): void
    vfunc_expand_collapse_cursor_row(logical: boolean, expand: boolean, open_all: boolean): boolean
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend: boolean, modify: boolean): boolean
    vfunc_row_activated(path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    vfunc_row_collapsed(iter: Gtk.TreeIter, path: Gtk.TreePath): void
    vfunc_row_expanded(iter: Gtk.TreeIter, path: Gtk.TreePath): void
    vfunc_select_all(): boolean
    vfunc_select_cursor_parent(): boolean
    vfunc_select_cursor_row(start_editing: boolean): boolean
    vfunc_start_interactive_search(): boolean
    vfunc_test_collapse_row(iter: Gtk.TreeIter, path: Gtk.TreePath): boolean
    vfunc_test_expand_row(iter: Gtk.TreeIter, path: Gtk.TreePath): boolean
    vfunc_toggle_cursor_row(): boolean
    vfunc_unselect_all(): boolean
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TreeView */
    connect(sigName: "columns-changed", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "columns-changed", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "columns-changed"): void
    connect(sigName: "cursor-changed", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "cursor-changed", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "cursor-changed"): void
    connect(sigName: "expand-collapse-cursor-row", callback: (($obj: ChaptersView, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    connect_after(sigName: "expand-collapse-cursor-row", callback: (($obj: ChaptersView, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    emit(sigName: "expand-collapse-cursor-row", object: boolean, p0: boolean, p1: boolean): void
    connect(sigName: "move-cursor", callback: (($obj: ChaptersView, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    connect_after(sigName: "move-cursor", callback: (($obj: ChaptersView, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean): void
    connect(sigName: "row-activated", callback: (($obj: ChaptersView, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    connect_after(sigName: "row-activated", callback: (($obj: ChaptersView, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    emit(sigName: "row-activated", path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    connect(sigName: "row-collapsed", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-collapsed", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-collapsed", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "row-expanded", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-expanded", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-expanded", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "select-all", callback: (($obj: ChaptersView) => boolean)): number
    connect_after(sigName: "select-all", callback: (($obj: ChaptersView) => boolean)): number
    emit(sigName: "select-all"): void
    connect(sigName: "select-cursor-parent", callback: (($obj: ChaptersView) => boolean)): number
    connect_after(sigName: "select-cursor-parent", callback: (($obj: ChaptersView) => boolean)): number
    emit(sigName: "select-cursor-parent"): void
    connect(sigName: "select-cursor-row", callback: (($obj: ChaptersView, object: boolean) => boolean)): number
    connect_after(sigName: "select-cursor-row", callback: (($obj: ChaptersView, object: boolean) => boolean)): number
    emit(sigName: "select-cursor-row", object: boolean): void
    connect(sigName: "start-interactive-search", callback: (($obj: ChaptersView) => boolean)): number
    connect_after(sigName: "start-interactive-search", callback: (($obj: ChaptersView) => boolean)): number
    emit(sigName: "start-interactive-search"): void
    connect(sigName: "test-collapse-row", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-collapse-row", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-collapse-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "test-expand-row", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-expand-row", callback: (($obj: ChaptersView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-expand-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "toggle-cursor-row", callback: (($obj: ChaptersView) => boolean)): number
    connect_after(sigName: "toggle-cursor-row", callback: (($obj: ChaptersView) => boolean)): number
    emit(sigName: "toggle-cursor-row"): void
    connect(sigName: "unselect-all", callback: (($obj: ChaptersView) => boolean)): number
    connect_after(sigName: "unselect-all", callback: (($obj: ChaptersView) => boolean)): number
    emit(sigName: "unselect-all"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ChaptersView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ChaptersView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ChaptersView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ChaptersView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "map", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ChaptersView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ChaptersView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ChaptersView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ChaptersView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ChaptersView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ChaptersView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "show", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ChaptersView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ChaptersView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ChaptersView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ChaptersView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-search", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expander-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-clickable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-selection", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::level-indentation", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reorderable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rubber-banding", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-expanders", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ChaptersView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChaptersView_ConstructProps)
    _init (config?: ChaptersView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChaptersView
    static $gtype: GObject.Type
}
export interface Charmap_ConstructProps extends Gtk.Paned_ConstructProps {
    active_chapter?: string
    active_character?: number
    active_page?: number
    chapters_model?: ChaptersModel
    font_desc?: Pango.FontDescription
    font_fallback?: boolean
    snap_power_2?: boolean
    orientation?: Gtk.Orientation
}
export class Charmap {
    /* Properties of Gucharmap.Charmap */
    active_chapter: string
    active_character: number
    readonly active_codepoint_list: CodepointList
    active_page: number
    chapters_model: ChaptersModel
    font_desc: Pango.FontDescription
    font_fallback: boolean
    snap_power_2: boolean
    /* Properties of Gtk.Paned */
    end_child: Gtk.Widget
    readonly max_position: number
    readonly min_position: number
    position: number
    position_set: boolean
    resize_end_child: boolean
    resize_start_child: boolean
    shrink_end_child: boolean
    shrink_start_child: boolean
    start_child: Gtk.Widget
    wide_handle: boolean
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.Charmap */
    get_active_chapter(): string
    get_active_character(): number
    get_active_codepoint_list(): CodepointList
    get_active_page(): number
    get_book_codepoint_list(): CodepointList
    get_chapters_model(): ChaptersModel
    get_chapters_view(): ChaptersView
    get_chapters_visible(): boolean
    get_chartable(): Chartable
    get_font_desc(): Pango.FontDescription
    get_font_fallback(): boolean
    get_page_visible(page: number): boolean
    get_snap_pow2(): boolean
    next_chapter(): void
    previous_chapter(): void
    set_active_chapter(chapter: string): void
    set_active_character(uc: number): void
    set_active_page(page: number): void
    set_chapters_model(model: ChaptersModel): void
    set_chapters_visible(visible: boolean): void
    set_font_desc(font_desc: Pango.FontDescription): void
    set_font_fallback(enable_font_fallback: boolean): void
    set_page_visible(page: number, visible: boolean): void
    set_snap_pow2(snap: boolean): void
    /* Methods of Gtk.Paned */
    get_end_child(): Gtk.Widget | null
    get_position(): number
    get_resize_end_child(): boolean
    get_resize_start_child(): boolean
    get_shrink_end_child(): boolean
    get_shrink_start_child(): boolean
    get_start_child(): Gtk.Widget | null
    get_wide_handle(): boolean
    set_end_child(child: Gtk.Widget): void
    set_position(position: number): void
    set_resize_end_child(resize: boolean): void
    set_resize_start_child(resize: boolean): void
    set_shrink_end_child(resize: boolean): void
    set_shrink_start_child(resize: boolean): void
    set_start_child(child: Gtk.Widget): void
    set_wide_handle(wide: boolean): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of Gucharmap.Charmap */
    vfunc_link_clicked(old_character: number, new_character: number): void
    vfunc_status_message(message: string): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gucharmap.Charmap */
    connect(sigName: "link-clicked", callback: (($obj: Charmap, object: number, p0: number) => void)): number
    connect_after(sigName: "link-clicked", callback: (($obj: Charmap, object: number, p0: number) => void)): number
    emit(sigName: "link-clicked", object: number, p0: number): void
    connect(sigName: "status-message", callback: (($obj: Charmap, object: string) => void)): number
    connect_after(sigName: "status-message", callback: (($obj: Charmap, object: string) => void)): number
    emit(sigName: "status-message", object: string): void
    /* Signals of Gtk.Paned */
    connect(sigName: "accept-position", callback: (($obj: Charmap) => boolean)): number
    connect_after(sigName: "accept-position", callback: (($obj: Charmap) => boolean)): number
    emit(sigName: "accept-position"): void
    connect(sigName: "cancel-position", callback: (($obj: Charmap) => boolean)): number
    connect_after(sigName: "cancel-position", callback: (($obj: Charmap) => boolean)): number
    emit(sigName: "cancel-position"): void
    connect(sigName: "cycle-child-focus", callback: (($obj: Charmap, reversed: boolean) => boolean)): number
    connect_after(sigName: "cycle-child-focus", callback: (($obj: Charmap, reversed: boolean) => boolean)): number
    emit(sigName: "cycle-child-focus", reversed: boolean): void
    connect(sigName: "cycle-handle-focus", callback: (($obj: Charmap, reversed: boolean) => boolean)): number
    connect_after(sigName: "cycle-handle-focus", callback: (($obj: Charmap, reversed: boolean) => boolean)): number
    emit(sigName: "cycle-handle-focus", reversed: boolean): void
    connect(sigName: "move-handle", callback: (($obj: Charmap, scroll_type: Gtk.ScrollType) => boolean)): number
    connect_after(sigName: "move-handle", callback: (($obj: Charmap, scroll_type: Gtk.ScrollType) => boolean)): number
    emit(sigName: "move-handle", scroll_type: Gtk.ScrollType): void
    connect(sigName: "toggle-handle-focus", callback: (($obj: Charmap) => boolean)): number
    connect_after(sigName: "toggle-handle-focus", callback: (($obj: Charmap) => boolean)): number
    emit(sigName: "toggle-handle-focus"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Charmap) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Charmap) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Charmap, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Charmap, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Charmap) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Charmap) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Charmap, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Charmap, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Charmap) => void)): number
    connect_after(sigName: "map", callback: (($obj: Charmap) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Charmap, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Charmap, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Charmap, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Charmap, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Charmap, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Charmap, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Charmap) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Charmap) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Charmap) => void)): number
    connect_after(sigName: "show", callback: (($obj: Charmap) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Charmap, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Charmap, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Charmap) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Charmap) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Charmap) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Charmap) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-chapter", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-chapter", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-character", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-character", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-codepoint-list", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-codepoint-list", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-page", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-page", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chapters-model", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chapters-model", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-fallback", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-fallback", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::snap-power-2", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-power-2", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-end-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-end-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-start-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-start-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shrink-end-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shrink-end-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shrink-start-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shrink-start-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-child", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wide-handle", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wide-handle", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Charmap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Charmap_ConstructProps)
    _init (config?: Charmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Charmap
    static new(orientation: Gtk.Orientation): Charmap
    static $gtype: GObject.Type
}
export interface Chartable_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    active_character?: number
    codepoint_list?: CodepointList
    font_desc?: Pango.FontDescription
    font_fallback?: boolean
    snap_power_2?: boolean
    zoom_enabled?: boolean
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class Chartable {
    /* Properties of Gucharmap.Chartable */
    active_character: number
    codepoint_list: CodepointList
    font_desc: Pango.FontDescription
    font_fallback: boolean
    snap_power_2: boolean
    zoom_enabled: boolean
    readonly zoom_showing: boolean
    /* Properties of Gtk.DrawingArea */
    content_height: number
    content_width: number
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of Gucharmap.Chartable */
    parent_instance: Gtk.DrawingArea
    /* Fields of Gtk.DrawingArea */
    widget: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.Chartable */
    get_active_character(): number
    get_codepoint_list(): CodepointList
    get_font_desc(): Pango.FontDescription
    get_font_fallback(): boolean
    get_snap_pow2(): boolean
    get_zoom_enabled(): boolean
    set_active_character(wc: number): void
    set_codepoint_list(codepoint_list: CodepointList): void
    set_font_desc(font_desc: Pango.FontDescription): void
    set_font_fallback(enable_font_fallback: boolean): void
    set_snap_pow2(snap: boolean): void
    set_zoom_enabled(enabled: boolean): void
    /* Methods of Gtk.DrawingArea */
    get_content_height(): number
    get_content_width(): number
    set_content_height(height: number): void
    set_content_width(width: number): void
    set_draw_func(draw_func: Gtk.DrawingAreaDrawFunc | null): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.Scrollable */
    get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    get_hadjustment(): Gtk.Adjustment
    get_hscroll_policy(): Gtk.ScrollablePolicy
    get_vadjustment(): Gtk.Adjustment
    get_vscroll_policy(): Gtk.ScrollablePolicy
    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void
    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void
    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void
    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of Gucharmap.Chartable */
    vfunc_activate(): void
    vfunc_copy_clipboard(): void
    vfunc_move_cursor(step: Gtk.MovementStep, count: number): boolean
    vfunc_paste_clipboard(): void
    vfunc_set_active_char(ch: number): void
    vfunc_set_scroll_adjustments(hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment): void
    vfunc_status_message(message: string): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /* Virtual methods of Gtk.DrawingArea */
    vfunc_resize(width: number, height: number): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gucharmap.Chartable */
    connect(sigName: "activate", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Chartable) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "copy-clipboard", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: Chartable) => void)): number
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "move-cursor", callback: (($obj: Chartable, object: Gtk.MovementStep, p0: number) => boolean)): number
    connect_after(sigName: "move-cursor", callback: (($obj: Chartable, object: Gtk.MovementStep, p0: number) => boolean)): number
    emit(sigName: "move-cursor", object: Gtk.MovementStep, p0: number): void
    connect(sigName: "paste-clipboard", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: Chartable) => void)): number
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "status-message", callback: (($obj: Chartable, object: string) => void)): number
    connect_after(sigName: "status-message", callback: (($obj: Chartable, object: string) => void)): number
    emit(sigName: "status-message", object: string): void
    /* Signals of Gtk.DrawingArea */
    connect(sigName: "resize", callback: (($obj: Chartable, width: number, height: number) => void)): number
    connect_after(sigName: "resize", callback: (($obj: Chartable, width: number, height: number) => void)): number
    emit(sigName: "resize", width: number, height: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Chartable) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Chartable, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Chartable, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Chartable) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Chartable, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Chartable, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "map", callback: (($obj: Chartable) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Chartable, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Chartable, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Chartable, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Chartable, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Chartable, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Chartable, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Chartable) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "show", callback: (($obj: Chartable) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Chartable, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Chartable, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Chartable) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Chartable) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Chartable) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-character", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-character", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codepoint-list", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codepoint-list", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-fallback", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-fallback", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::snap-power-2", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-power-2", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-enabled", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-enabled", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-showing", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-showing", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-height", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-height", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-width", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-width", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Chartable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Chartable_ConstructProps)
    _init (config?: Chartable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Chartable
    static $gtype: GObject.Type
}
export interface ChartableAccessible_ConstructProps extends Atk.NoOpObject_ConstructProps {
}
export class ChartableAccessible {
    /* Properties of Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_parent: Atk.Object
    accessible_role: Atk.Role
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    accessible_table_column_description: string
    accessible_table_column_header: Atk.Object
    accessible_table_row_description: string
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    accessible_value: number
    /* Fields of Atk.NoOpObject */
    parent: Atk.Object
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atk.Object */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    get_accessible_id(): string
    get_attributes(): Atk.AttributeSet
    get_description(): string | null
    get_index_in_parent(): number
    get_layer(): Atk.Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string | null
    get_object_locale(): string
    get_parent(): Atk.Object
    get_role(): Atk.Role
    initialize(data?: object | null): void
    notify_state_change(state: Atk.State, value: boolean): void
    peek_parent(): Atk.Object
    ref_accessible_child(i: number): Atk.Object
    ref_relation_set(): Atk.RelationSet
    ref_state_set(): Atk.StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): boolean | null
    set_name(name: string): void
    set_parent(parent: Atk.Object): void
    set_role(role: Atk.Role): void
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
    /* Methods of Atk.Action */
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: Atk.ScrollType): boolean
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Methods of Atk.Document */
    get_attribute_value(attribute_name: string): string | null
    get_current_page_number(): number
    get_document(): object | null
    get_document_type(): string
    get_locale(): string
    get_page_count(): number
    set_attribute_value(attribute_name: string, attribute_value: string): boolean
    /* Methods of Atk.EditableText */
    copy_text(start_pos: number, end_pos: number): void
    cut_text(start_pos: number, end_pos: number): void
    delete_text(start_pos: number, end_pos: number): void
    insert_text(string: string, length: number, position: number): void
    paste_text(position: number): void
    set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean
    set_text_contents(string: string): void
    /* Methods of Atk.Hypertext */
    get_link(link_index: number): Atk.Hyperlink
    get_link_index(char_index: number): number
    get_n_links(): number
    /* Methods of Atk.Image */
    get_image_description(): string
    get_image_locale(): string | null
    get_image_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_image_size(): [ /* width */ number | null, /* height */ number | null ]
    set_image_description(description: string): boolean
    /* Methods of Atk.Selection */
    add_selection(i: number): boolean
    clear_selection(): boolean
    get_selection_count(): number
    is_child_selected(i: number): boolean
    ref_selection(i: number): Atk.Object | null
    remove_selection(i: number): boolean
    select_all_selection(): boolean
    /* Methods of Atk.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_caption(): Atk.Object | null
    get_column_at_index(index_: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Atk.Object | null
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_row_at_index(index_: number): number
    get_row_description(row: number): string | null
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Atk.Object | null
    get_selected_columns(selected: number): number
    get_selected_rows(selected: number): number
    get_summary(): Atk.Object
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    ref_at(row: number, column: number): Atk.Object
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    set_caption(caption: Atk.Object): void
    set_column_description(column: number, description: string): void
    set_column_header(column: number, header: Atk.Object): void
    set_row_description(row: number, description: string): void
    set_row_header(row: number, header: Atk.Object): void
    set_summary(accessible: Atk.Object): void
    /* Methods of Atk.TableCell */
    get_column_header_cells(): Atk.Object[]
    get_column_span(): number
    get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Atk.Object[]
    get_row_span(): number
    get_table(): Atk.Object
    /* Methods of Atk.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, coords: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_default_attributes(): Atk.AttributeSet
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): /* rect */ Atk.TextRectangle
    get_run_attributes(offset: number): [ /* returnType */ Atk.AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    remove_selection(selection_num: number): boolean
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean
    set_caret_offset(offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Methods of Atk.Value */
    get_current_value(): /* value */ any
    get_increment(): number
    get_maximum_value(): /* value */ any
    get_minimum_increment(): /* value */ any
    get_minimum_value(): /* value */ any
    get_range(): Atk.Range | null
    get_sub_ranges(): Atk.Range[]
    get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    set_current_value(value: any): boolean
    set_value(new_value: number): void
    /* Virtual methods of Gucharmap.ChartableAccessible */
    vfunc_do_action(i: number): boolean
    vfunc_get_description(i: number): string | null
    vfunc_get_description(): string | null
    vfunc_get_keybinding(i: number): string | null
    vfunc_get_localized_name(i: number): string | null
    vfunc_get_n_actions(): number
    vfunc_get_name(i: number): string | null
    vfunc_get_name(): string | null
    vfunc_set_description(i: number, desc: string): boolean
    vfunc_set_description(description: string): boolean | null
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Atk.Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    vfunc_get_current_page_number(): number
    vfunc_get_document(): object | null
    vfunc_get_document_attribute_value(attribute_name: string): string | null
    vfunc_get_document_attributes(): Atk.AttributeSet
    vfunc_get_document_locale(): string
    vfunc_get_document_type(): string
    vfunc_get_page_count(): number
    vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean
    vfunc_copy_text(start_pos: number, end_pos: number): void
    vfunc_cut_text(start_pos: number, end_pos: number): void
    vfunc_delete_text(start_pos: number, end_pos: number): void
    vfunc_insert_text(string: string, length: number, position: number): void
    vfunc_paste_text(position: number): void
    vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean
    vfunc_set_text_contents(string: string): void
    vfunc_get_link(link_index: number): Atk.Hyperlink
    vfunc_get_link_index(char_index: number): number
    vfunc_get_n_links(): number
    vfunc_link_selected(link_index: number): void
    vfunc_get_image_description(): string
    vfunc_get_image_locale(): string | null
    vfunc_get_image_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_image_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_set_image_description(description: string): boolean
    vfunc_add_selection(i: number): boolean
    vfunc_add_selection(start_offset: number, end_offset: number): boolean
    vfunc_clear_selection(): boolean
    vfunc_get_selection_count(): number
    vfunc_is_child_selected(i: number): boolean
    vfunc_ref_selection(i: number): Atk.Object | null
    vfunc_remove_selection(i: number): boolean
    vfunc_select_all_selection(): boolean
    vfunc_selection_changed(): void
    vfunc_add_column_selection(column: number): boolean
    vfunc_add_row_selection(row: number): boolean
    vfunc_column_deleted(column: number, num_deleted: number): void
    vfunc_column_inserted(column: number, num_inserted: number): void
    vfunc_column_reordered(): void
    vfunc_get_caption(): Atk.Object | null
    vfunc_get_column_at_index(index_: number): number
    vfunc_get_column_description(column: number): string
    vfunc_get_column_extent_at(row: number, column: number): number
    vfunc_get_column_header(column: number): Atk.Object | null
    vfunc_get_index_at(row: number, column: number): number
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_row_at_index(index_: number): number
    vfunc_get_row_description(row: number): string | null
    vfunc_get_row_extent_at(row: number, column: number): number
    vfunc_get_row_header(row: number): Atk.Object | null
    vfunc_get_selected_columns(selected: number): number
    vfunc_get_selected_rows(selected: number): number
    vfunc_get_summary(): Atk.Object
    vfunc_is_column_selected(column: number): boolean
    vfunc_is_row_selected(row: number): boolean
    vfunc_is_selected(row: number, column: number): boolean
    vfunc_model_changed(): void
    vfunc_ref_at(row: number, column: number): Atk.Object
    vfunc_remove_column_selection(column: number): boolean
    vfunc_remove_row_selection(row: number): boolean
    vfunc_row_deleted(row: number, num_deleted: number): void
    vfunc_row_inserted(row: number, num_inserted: number): void
    vfunc_row_reordered(): void
    vfunc_set_caption(caption: Atk.Object): void
    vfunc_set_column_description(column: number, description: string): void
    vfunc_set_column_header(column: number, header: Atk.Object): void
    vfunc_set_row_description(row: number, description: string): void
    vfunc_set_row_header(row: number, header: Atk.Object): void
    vfunc_set_summary(accessible: Atk.Object): void
    vfunc_get_column_header_cells(): Atk.Object[]
    vfunc_get_column_span(): number
    vfunc_get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    vfunc_get_row_header_cells(): Atk.Object[]
    vfunc_get_row_span(): number
    vfunc_get_table(): Atk.Object
    vfunc_get_bounded_ranges(rect: Atk.TextRectangle, coord_type: Atk.CoordType, x_clip_type: Atk.TextClipType, y_clip_type: Atk.TextClipType): Atk.TextRange[]
    vfunc_get_caret_offset(): number
    vfunc_get_character_at_offset(offset: number): number
    vfunc_get_character_count(): number
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_default_attributes(): Atk.AttributeSet
    vfunc_get_n_selections(): number
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): /* rect */ Atk.TextRectangle
    vfunc_get_run_attributes(offset: number): [ /* returnType */ Atk.AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text(start_offset: number, end_offset: number): string
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean
    vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: Atk.CoordType, x: number, y: number): boolean
    vfunc_set_caret_offset(offset: number): boolean
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    vfunc_text_attributes_changed(): void
    vfunc_text_caret_moved(location: number): void
    vfunc_text_changed(position: number, length: number): void
    vfunc_text_selection_changed(): void
    vfunc_get_current_value(): /* value */ any
    vfunc_get_increment(): number
    vfunc_get_maximum_value(): /* value */ any
    vfunc_get_minimum_increment(): /* value */ any
    vfunc_get_minimum_value(): /* value */ any
    vfunc_get_range(): Atk.Range | null
    vfunc_get_sub_ranges(): Atk.Range[]
    vfunc_get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    vfunc_set_current_value(value: any): boolean
    vfunc_set_value(new_value: number): void
    /* Virtual methods of Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): Atk.AttributeSet
    vfunc_get_description(): string | null
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Atk.Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string | null
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Atk.Object
    vfunc_get_role(): Atk.Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    vfunc_ref_relation_set(): Atk.RelationSet
    vfunc_ref_state_set(): Atk.StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): boolean | null
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Atk.Object): void
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: ChartableAccessible, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: ChartableAccessible, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: (($obj: ChartableAccessible, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: ChartableAccessible, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: (($obj: ChartableAccessible, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: ChartableAccessible, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: ChartableAccessible, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: ChartableAccessible, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: ChartableAccessible, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: ChartableAccessible, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: ChartableAccessible, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: ChartableAccessible, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    /* Signals of Atk.Document */
    connect(sigName: "load-complete", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "load-complete", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "load-complete"): void
    connect(sigName: "load-stopped", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "load-stopped", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "load-stopped"): void
    connect(sigName: "page-changed", callback: (($obj: ChartableAccessible, page_number: number) => void)): number
    connect_after(sigName: "page-changed", callback: (($obj: ChartableAccessible, page_number: number) => void)): number
    emit(sigName: "page-changed", page_number: number): void
    connect(sigName: "reload", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "reload", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "reload"): void
    /* Signals of Atk.Hypertext */
    connect(sigName: "link-selected", callback: (($obj: ChartableAccessible, arg1: number) => void)): number
    connect_after(sigName: "link-selected", callback: (($obj: ChartableAccessible, arg1: number) => void)): number
    emit(sigName: "link-selected", arg1: number): void
    /* Signals of Atk.Selection */
    connect(sigName: "selection-changed", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "selection-changed"): void
    /* Signals of Atk.Table */
    connect(sigName: "column-deleted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-deleted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    connect(sigName: "column-inserted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-inserted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    connect(sigName: "column-reordered", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "column-reordered", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "column-reordered"): void
    connect(sigName: "model-changed", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "model-changed", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "model-changed"): void
    connect(sigName: "row-deleted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    connect(sigName: "row-inserted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    connect(sigName: "row-reordered", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "row-reordered", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "row-reordered"): void
    /* Signals of Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "text-attributes-changed"): void
    connect(sigName: "text-caret-moved", callback: (($obj: ChartableAccessible, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: (($obj: ChartableAccessible, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    connect(sigName: "text-changed", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: (($obj: ChartableAccessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    connect(sigName: "text-insert", callback: (($obj: ChartableAccessible, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: (($obj: ChartableAccessible, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-remove", callback: (($obj: ChartableAccessible, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: (($obj: ChartableAccessible, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-selection-changed", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "text-selection-changed", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "text-selection-changed"): void
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: (($obj: ChartableAccessible, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ChartableAccessible, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    /* Signals of Atk.Window */
    connect(sigName: "activate", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "activate", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "create", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "create", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "create"): void
    connect(sigName: "deactivate", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "destroy", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "maximize", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "maximize", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "maximize"): void
    connect(sigName: "minimize", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "minimize"): void
    connect(sigName: "move", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "move", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "move"): void
    connect(sigName: "resize", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "resize", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "resize"): void
    connect(sigName: "restore", callback: (($obj: ChartableAccessible) => void)): number
    connect_after(sigName: "restore", callback: (($obj: ChartableAccessible) => void)): number
    emit(sigName: "restore"): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-parent", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: ChartableAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChartableAccessible_ConstructProps)
    _init (config?: ChartableAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(chartable: Chartable): ChartableAccessible
    static new(obj: GObject.Object): ChartableAccessible
    static free_ranges(ranges: Atk.TextRange[]): void
    static $gtype: GObject.Type
}
export interface ChartableCellAccessible_ConstructProps extends Atk.Object_ConstructProps {
}
export class ChartableCellAccessible {
    /* Properties of Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_parent: Atk.Object
    accessible_role: Atk.Role
    accessible_table_caption: string
    accessible_table_caption_object: Atk.Object
    accessible_table_column_description: string
    accessible_table_column_header: Atk.Object
    accessible_table_row_description: string
    accessible_table_row_header: Atk.Object
    accessible_table_summary: Atk.Object
    accessible_value: number
    /* Fields of Gucharmap.ChartableCellAccessible */
    parent: Atk.Object
    widget: Gtk.Widget
    index: number
    state_set: Atk.StateSet
    activate_description: string
    action_idle_handler: number
    /* Fields of Atk.Object */
    description: string
    name: string
    role: Atk.Role
    relation_set: Atk.RelationSet
    layer: Atk.Layer
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.ChartableCellAccessible */
    add_state(state_type: Atk.StateType, emit_signal: boolean): boolean
    initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void
    remove_state(state_type: Atk.StateType, emit_signal: boolean): boolean
    /* Methods of Atk.Object */
    add_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    get_accessible_id(): string
    get_attributes(): Atk.AttributeSet
    get_description(): string | null
    get_index_in_parent(): number
    get_layer(): Atk.Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string | null
    get_object_locale(): string
    get_parent(): Atk.Object
    get_role(): Atk.Role
    initialize(data?: object | null): void
    notify_state_change(state: Atk.State, value: boolean): void
    peek_parent(): Atk.Object
    ref_accessible_child(i: number): Atk.Object
    ref_relation_set(): Atk.RelationSet
    ref_state_set(): Atk.StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): boolean | null
    set_name(name: string): void
    set_parent(parent: Atk.Object): void
    set_role(role: Atk.Role): void
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
    /* Methods of Atk.Action */
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: Atk.ScrollType): boolean
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of Gucharmap.ChartableCellAccessible */
    vfunc_do_action(i: number): boolean
    vfunc_get_description(i: number): string | null
    vfunc_get_description(): string | null
    vfunc_get_keybinding(i: number): string | null
    vfunc_get_localized_name(i: number): string | null
    vfunc_get_n_actions(): number
    vfunc_get_name(i: number): string | null
    vfunc_get_name(): string | null
    vfunc_set_description(i: number, desc: string): boolean
    vfunc_set_description(description: string): boolean | null
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Atk.Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): Atk.AttributeSet
    vfunc_get_description(): string | null
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Atk.Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string | null
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Atk.Object
    vfunc_get_role(): Atk.Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: Atk.PropertyValues): void
    vfunc_ref_relation_set(): Atk.RelationSet
    vfunc_ref_state_set(): Atk.StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): boolean | null
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Atk.Object): void
    vfunc_set_role(role: Atk.Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: ChartableCellAccessible, arg1: Atk.Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: ChartableCellAccessible, arg1: Atk.Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: (($obj: ChartableCellAccessible, arg1: number, arg2: Atk.Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: ChartableCellAccessible, arg1: number, arg2: Atk.Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: (($obj: ChartableCellAccessible, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: ChartableCellAccessible, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: ChartableCellAccessible, arg1: Atk.PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: ChartableCellAccessible, arg1: Atk.PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: ChartableCellAccessible, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: ChartableCellAccessible, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: ChartableCellAccessible) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: ChartableCellAccessible) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: ChartableCellAccessible, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: ChartableCellAccessible, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-parent", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: ChartableCellAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChartableCellAccessible_ConstructProps)
    _init (config?: ChartableCellAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChartableCellAccessible
    static $gtype: GObject.Type
}
export interface CodepointList_ConstructProps extends GObject.Object_ConstructProps {
}
export class CodepointList {
    /* Fields of Gucharmap.CodepointList */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.CodepointList */
    get_char(index: number): number
    get_index(wc: number): number
    get_last_index(): number
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
    /* Virtual methods of Gucharmap.CodepointList */
    vfunc_get_char(index: number): number
    vfunc_get_index(wc: number): number
    vfunc_get_last_index(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CodepointList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CodepointList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CodepointList_ConstructProps)
    _init (config?: CodepointList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ScriptChaptersModel_ConstructProps extends ChaptersModel_ConstructProps {
}
export class ScriptChaptersModel {
    /* Fields of Gucharmap.ScriptChaptersModel */
    parent: ChaptersModel
    /* Fields of Gucharmap.ChaptersModel */
    parent_instance: Gtk.ListStore
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.ChaptersModel */
    character_to_iter(wc: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_book_codepoint_list(): CodepointList
    get_codepoint_list(iter: Gtk.TreeIter): CodepointList
    get_title(): string
    id_to_iter(id: string): [ /* returnType */ boolean, /* _iter */ Gtk.TreeIter ]
    /* Methods of Gtk.ListStore */
    append(): /* iter */ Gtk.TreeIter
    clear(): void
    insert(position: number): /* iter */ Gtk.TreeIter
    insert_after(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_before(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_with_values(position: number, columns: number[], values: any): /* iter */ Gtk.TreeIter | null
    iter_is_valid(iter: Gtk.TreeIter): boolean
    move_after(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    move_before(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(): /* iter */ Gtk.TreeIter
    remove(iter: Gtk.TreeIter): boolean
    reorder(new_order: number[]): void
    set_column_types(types: GObject.Type[]): void
    set_value(iter: Gtk.TreeIter, column: number, value: any): void
    set(iter: Gtk.TreeIter, columns: number[], values: any): void
    swap(a: Gtk.TreeIter, b: Gtk.TreeIter): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.TreeDragDest */
    drag_data_received(dest: Gtk.TreePath, value: any): boolean
    row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    /* Methods of Gtk.TreeDragSource */
    drag_data_delete(path: Gtk.TreePath): boolean
    drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    row_draggable(path: Gtk.TreePath): boolean
    /* Methods of Gtk.TreeModel */
    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel
    foreach(func: Gtk.TreeModelForeachFunc): void
    get_column_type(index_: number): GObject.Type
    get_flags(): Gtk.TreeModelFlags
    get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_first(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_from_string(path_string: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_n_columns(): number
    get_path(iter: Gtk.TreeIter): Gtk.TreePath
    get_string_from_iter(iter: Gtk.TreeIter): string | null
    get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_has_child(iter: Gtk.TreeIter): boolean
    iter_n_children(iter?: Gtk.TreeIter | null): number
    iter_next(iter: Gtk.TreeIter): boolean
    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_previous(iter: Gtk.TreeIter): boolean
    ref_node(iter: Gtk.TreeIter): void
    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_deleted(path: Gtk.TreePath): void
    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void
    unref_node(iter: Gtk.TreeIter): void
    /* Methods of Gtk.TreeSortable */
    get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    has_default_sort_func(): boolean
    set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    sort_column_changed(): void
    /* Virtual methods of Gucharmap.ChaptersModel */
    vfunc_character_to_iter(wc: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_book_codepoint_list(): CodepointList
    vfunc_get_codepoint_list(iter: Gtk.TreeIter): CodepointList
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_drag_data_received(dest: Gtk.TreePath, value: any): boolean
    vfunc_row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    vfunc_drag_data_delete(path: Gtk.TreePath): boolean
    vfunc_drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    vfunc_row_draggable(path: Gtk.TreePath): boolean
    vfunc_get_column_type(index_: number): GObject.Type
    vfunc_get_flags(): Gtk.TreeModelFlags
    vfunc_get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_n_columns(): number
    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath
    vfunc_get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    vfunc_iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean
    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number
    vfunc_iter_next(iter: Gtk.TreeIter): boolean
    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_previous(iter: Gtk.TreeIter): boolean
    vfunc_ref_node(iter: Gtk.TreeIter): void
    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_deleted(path: Gtk.TreePath): void
    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_unref_node(iter: Gtk.TreeIter): void
    vfunc_get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    vfunc_has_default_sort_func(): boolean
    vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    vfunc_set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_sort_column_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScriptChaptersModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScriptChaptersModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-has-child-toggled", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    connect_after(sigName: "rows-reordered", callback: (($obj: ScriptChaptersModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null): void
    /* Signals of Gtk.TreeSortable */
    connect(sigName: "sort-column-changed", callback: (($obj: ScriptChaptersModel) => void)): number
    connect_after(sigName: "sort-column-changed", callback: (($obj: ScriptChaptersModel) => void)): number
    emit(sigName: "sort-column-changed"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScriptChaptersModel_ConstructProps)
    _init (config?: ScriptChaptersModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScriptChaptersModel
    static new(types: GObject.Type[]): ScriptChaptersModel
    static $gtype: GObject.Type
}
export interface ScriptCodepointList_ConstructProps extends CodepointList_ConstructProps {
}
export class ScriptCodepointList {
    /* Fields of Gucharmap.ScriptCodepointList */
    parent: CodepointList
    /* Fields of Gucharmap.CodepointList */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gucharmap.ScriptCodepointList */
    append_script(script: string): boolean
    set_script(script: string): boolean
    set_scripts(scripts: string): boolean
    /* Methods of Gucharmap.CodepointList */
    get_char(index: number): number
    get_index(wc: number): number
    get_last_index(): number
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
    /* Virtual methods of Gucharmap.CodepointList */
    vfunc_get_char(index: number): number
    vfunc_get_index(wc: number): number
    vfunc_get_last_index(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScriptCodepointList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScriptCodepointList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScriptCodepointList_ConstructProps)
    _init (config?: ScriptCodepointList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScriptCodepointList
    static $gtype: GObject.Type
}
export abstract class BlockChaptersModelClass {
    /* Fields of Gucharmap.BlockChaptersModelClass */
    parent_class: ChaptersModelClass
    static name: string
}
export class BlockChaptersModelPrivate {
    static name: string
}
export abstract class BlockCodepointListClass {
    /* Fields of Gucharmap.BlockCodepointListClass */
    parent_class: CodepointListClass
    static name: string
}
export class BlockCodepointListPrivate {
    static name: string
}
export abstract class ChaptersModelClass {
    /* Fields of Gucharmap.ChaptersModelClass */
    parent_class: Gtk.ListStoreClass
    title: string
    character_to_iter: (chapters: ChaptersModel, wc: number) => [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_codepoint_list: (chapters: ChaptersModel, iter: Gtk.TreeIter) => CodepointList
    get_book_codepoint_list: (chapters: ChaptersModel) => CodepointList
    static name: string
}
export class ChaptersModelPrivate {
    /* Fields of Gucharmap.ChaptersModelPrivate */
    book_list: CodepointList
    static name: string
}
export abstract class ChaptersViewClass {
    /* Fields of Gucharmap.ChaptersViewClass */
    parent_class: Gtk.TreeViewClass
    static name: string
}
export class ChaptersViewPrivate {
    static name: string
}
export abstract class CharmapClass {
    /* Fields of Gucharmap.CharmapClass */
    parent_class: Gtk.PanedClass
    status_message: (charmap: Charmap, message: string) => void
    link_clicked: (charmap: Charmap, old_character: number, new_character: number) => void
    static name: string
}
export class CharmapPrivate {
    static name: string
}
export abstract class ChartableAccessibleClass {
    static name: string
}
export abstract class ChartableCellAccessibleClass {
    /* Fields of Gucharmap.ChartableCellAccessibleClass */
    parent_class: Atk.ObjectClass
    static name: string
}
export abstract class ChartableClass {
    /* Fields of Gucharmap.ChartableClass */
    parent_class: Gtk.DrawingAreaClass
    set_scroll_adjustments: (chartable: Chartable, hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment) => void
    move_cursor: (chartable: Chartable, step: Gtk.MovementStep, count: number) => boolean
    activate: (chartable: Chartable) => void
    copy_clipboard: (chartable: Chartable) => void
    paste_clipboard: (chartable: Chartable) => void
    set_active_char: (chartable: Chartable, ch: number) => void
    status_message: (chartable: Chartable, message: string) => void
    static name: string
}
export class ChartablePrivate {
    /* Fields of Gucharmap.ChartablePrivate */
    vadjustment: Gtk.Adjustment
    vadjustment_changed_handler_id: number
    hadjustment: Gtk.Adjustment
    hscroll_policy: number
    vscroll_policy: number
    font_desc: Pango.FontDescription
    minimal_column_width: number
    minimal_row_height: number
    n_padded_columns: number
    n_padded_rows: number
    rows: number
    cols: number
    page_size: number
    page_first_cell: number
    active_cell: number
    pango_layout: Pango.Layout
    zoom_window: Gtk.Widget
    zoom_image_width: number
    zoom_image_height: number
    click_x: number
    click_y: number
    target_list: Gtk.TargetList
    codepoint_list: CodepointList
    last_cell: number
    codepoint_list_changed: boolean
    snap_pow2_enabled: number
    zoom_mode_enabled: number
    font_fallback: number
    static name: string
}
export abstract class CodepointListClass {
    /* Fields of Gucharmap.CodepointListClass */
    parent_class: GObject.ObjectClass
    get_last_index: (list: CodepointList) => number
    get_char: (list: CodepointList, index: number) => number
    get_index: (list: CodepointList, wc: number) => number
    static name: string
}
export class CodepointListPrivate {
    static name: string
}
export abstract class ScriptChaptersModelClass {
    /* Fields of Gucharmap.ScriptChaptersModelClass */
    parent_class: ChaptersModelClass
    static name: string
}
export class ScriptChaptersModelPrivate {
    static name: string
}
export abstract class ScriptCodepointListClass {
    /* Fields of Gucharmap.ScriptCodepointListClass */
    parent_class: CodepointListClass
    static name: string
}
export class ScriptCodepointListPrivate {
    static name: string
}