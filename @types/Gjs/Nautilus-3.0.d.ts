/**
 * Nautilus-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gtk from './Gtk-3.0';
import type * as xlib from './xlib-2.0';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';

export enum OperationResult {
    COMPLETE,
    FAILED,
    IN_PROGRESS,
}
export function file_info_create(location: Gio.File): FileInfo
export function file_info_create_for_uri(uri: string): FileInfo
export function file_info_list_copy(files: FileInfo[]): FileInfo[]
export function file_info_list_free(files: FileInfo[]): void
export function file_info_lookup(location: Gio.File): FileInfo
export function file_info_lookup_for_uri(uri: string): FileInfo
export function info_provider_update_complete_invoke(update_complete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
export function module_initialize(module: GObject.TypeModule): void
export function module_list_types(): /* types */ GObject.Type[]
export function module_shutdown(): void
export class ColumnProvider {
    /* Methods of Nautilus.ColumnProvider */
    get_columns(): Column[]
    static name: string
}
export class FileInfo {
    /* Methods of Nautilus.FileInfo */
    add_emblem(emblem_name: string): void
    add_string_attribute(attribute_name: string, value: string): void
    can_write(): boolean
    get_activation_uri(): string
    get_file_type(): Gio.FileType
    get_location(): Gio.File
    get_mime_type(): string
    get_mount(): Gio.Mount | null
    get_name(): string
    get_parent_info(): FileInfo | null
    get_parent_location(): Gio.File | null
    get_parent_uri(): string
    get_string_attribute(attribute_name: string): string
    get_uri(): string
    get_uri_scheme(): string
    invalidate_extension_info(): void
    is_directory(): boolean
    is_gone(): boolean
    is_mime_type(mime_type: string): boolean
    /* Virtual methods of Nautilus.FileInfo */
    vfunc_add_emblem(emblem_name: string): void
    vfunc_add_string_attribute(attribute_name: string, value: string): void
    vfunc_can_write(): boolean
    vfunc_get_activation_uri(): string
    vfunc_get_file_type(): Gio.FileType
    vfunc_get_location(): Gio.File
    vfunc_get_mime_type(): string
    vfunc_get_mount(): Gio.Mount | null
    vfunc_get_name(): string
    vfunc_get_parent_info(): FileInfo | null
    vfunc_get_parent_location(): Gio.File | null
    vfunc_get_parent_uri(): string
    vfunc_get_string_attribute(attribute_name: string): string
    vfunc_get_uri(): string
    vfunc_get_uri_scheme(): string
    vfunc_invalidate_extension_info(): void
    vfunc_is_directory(): boolean
    vfunc_is_gone(): boolean
    vfunc_is_mime_type(mime_type: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static create(location: Gio.File): FileInfo
    static create_for_uri(uri: string): FileInfo
    static list_copy(files: FileInfo[]): FileInfo[]
    static list_free(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo
    static lookup_for_uri(uri: string): FileInfo
}
export class InfoProvider {
    /* Methods of Nautilus.InfoProvider */
    cancel_update(handle: OperationHandle): void
    update_file_info(file: FileInfo, update_complete: Function, handle: OperationHandle): OperationResult
    static name: string
    /* Static methods and pseudo-constructors */
    static update_complete_invoke(update_complete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}
export class LocationWidgetProvider {
    /* Methods of Nautilus.LocationWidgetProvider */
    get_widget(uri: string, window: Gtk.Widget): Gtk.Widget
    static name: string
}
export class MenuProvider {
    /* Methods of Nautilus.MenuProvider */
    emit_items_updated_signal(): void
    get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[] | null
    get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null
    /* Signals of Nautilus.MenuProvider */
    connect(sigName: "items-updated", callback: (($obj: MenuProvider) => void)): number
    connect_after(sigName: "items-updated", callback: (($obj: MenuProvider) => void)): number
    emit(sigName: "items-updated"): void
    static name: string
}
export class PropertyPageProvider {
    /* Methods of Nautilus.PropertyPageProvider */
    get_pages(files: FileInfo[]): PropertyPage[]
    static name: string
}
export interface Column_ConstructProps extends GObject.Object_ConstructProps {
    attribute?: string
    default_sort_order?: Gtk.SortType
    description?: string
    label?: string
    name?: string
    xalign?: number
}
export class Column {
    /* Properties of Nautilus.Column */
    attribute: string
    readonly attribute_q: number
    default_sort_order: Gtk.SortType
    description: string
    label: string
    xalign: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, attribute: string, label: string, description: string): Column
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends GObject.Object_ConstructProps {
}
export class Menu {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Nautilus.Menu */
    append_item(item: MenuItem): void
    get_items(): MenuItem[]
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menu
    static $gtype: GObject.Type
}
export interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
    icon?: string
    label?: string
    menu?: Menu
    name?: string
    priority?: boolean
    sensitive?: boolean
    tip?: string
}
export class MenuItem {
    /* Properties of Nautilus.MenuItem */
    icon: string
    label: string
    menu: Menu
    priority: boolean
    sensitive: boolean
    tip: string
    /* Fields of Nautilus.MenuItem */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Nautilus.MenuItem */
    activate(): void
    set_submenu(menu: Menu): void
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
    /* Virtual methods of Nautilus.MenuItem */
    vfunc_activate(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Nautilus.MenuItem */
    connect(sigName: "activate", callback: (($obj: MenuItem) => void)): number
    connect_after(sigName: "activate", callback: (($obj: MenuItem) => void)): number
    emit(sigName: "activate"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: string, tip: string, icon: string): MenuItem
    static list_free(item_list: MenuItem[]): void
    static $gtype: GObject.Type
}
export interface PropertyPage_ConstructProps extends GObject.Object_ConstructProps {
    label?: Gtk.Widget
    name?: string
    page?: Gtk.Widget
}
export class PropertyPage {
    /* Properties of Nautilus.PropertyPage */
    label: Gtk.Widget
    page: Gtk.Widget
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PropertyPage_ConstructProps)
    _init (config?: PropertyPage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage
    static $gtype: GObject.Type
}
export abstract class ColumnClass {
    /* Fields of Nautilus.ColumnClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ColumnProviderInterface {
    /* Fields of Nautilus.ColumnProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export class File {
    static name: string
}
export abstract class FileInfoInterface {
    /* Fields of Nautilus.FileInfoInterface */
    g_iface: GObject.TypeInterface
    is_gone: (file_info: FileInfo) => boolean
    get_name: (file_info: FileInfo) => string
    get_uri: (file_info: FileInfo) => string
    get_parent_uri: (file_info: FileInfo) => string
    get_uri_scheme: (file_info: FileInfo) => string
    get_mime_type: (file_info: FileInfo) => string
    is_mime_type: (file_info: FileInfo, mime_type: string) => boolean
    is_directory: (file_info: FileInfo) => boolean
    add_emblem: (file_info: FileInfo, emblem_name: string) => void
    get_string_attribute: (file_info: FileInfo, attribute_name: string) => string
    add_string_attribute: (file_info: FileInfo, attribute_name: string, value: string) => void
    invalidate_extension_info: (file_info: FileInfo) => void
    get_activation_uri: (file_info: FileInfo) => string
    get_file_type: (file_info: FileInfo) => Gio.FileType
    get_location: (file_info: FileInfo) => Gio.File
    get_parent_location: (file_info: FileInfo) => Gio.File | null
    get_parent_info: (file_info: FileInfo) => FileInfo | null
    get_mount: (file_info: FileInfo) => Gio.Mount | null
    can_write: (file_info: FileInfo) => boolean
    static name: string
}
export class InfoProviderInterface {
    /* Fields of Nautilus.InfoProviderInterface */
    g_iface: GObject.TypeInterface
    update_file_info: (provider: InfoProvider, file: FileInfo, update_complete: Function, handle: OperationHandle) => OperationResult
    cancel_update: (provider: InfoProvider, handle: OperationHandle) => void
    static name: string
}
export class LocationWidgetProviderInterface {
    /* Fields of Nautilus.LocationWidgetProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class MenuClass {
    /* Fields of Nautilus.MenuClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MenuItemClass {
    /* Fields of Nautilus.MenuItemClass */
    parent: GObject.ObjectClass
    activate: (item: MenuItem) => void
    static name: string
}
export class MenuProviderInterface {
    /* Fields of Nautilus.MenuProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export class OperationHandle {
    static name: string
}
export abstract class PropertyPageClass {
    /* Fields of Nautilus.PropertyPageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PropertyPageProviderInterface {
    /* Fields of Nautilus.PropertyPageProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export type ColumnProviderIface = ColumnProviderInterface
export type InfoProviderIface = InfoProviderInterface
export type LocationWidgetProviderIface = LocationWidgetProviderInterface
export type MenuProviderIface = MenuProviderInterface
export type PropertyPageProviderIface = PropertyPageProviderInterface