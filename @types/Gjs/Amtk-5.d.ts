/**
 * Amtk-5
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

export enum FactoryFlags {
    FLAGS_NONE,
    IGNORE_GACTION,
    IGNORE_ICON,
    IGNORE_LABEL,
    IGNORE_TOOLTIP,
    IGNORE_ACCELS,
    IGNORE_ACCELS_FOR_DOC,
    IGNORE_ACCELS_FOR_APP,
}
export function action_map_add_action_entries_check_dups(action_map: Gio.ActionMap, entries: Gio.ActionEntry[], user_data?: object | null): void
export function finalize(): void
export function gmenu_append_item(menu: Gio.Menu, item: Gio.MenuItem): void
export function gmenu_append_section(menu: Gio.Menu, label: string | null, section: Gio.Menu): void
export function init(): void
export function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null
export function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void
export function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description?: string | null): void
export function shortcuts_group_new(title: string): Gtk.Container
export function shortcuts_section_new(title: string): Gtk.Container
export function shortcuts_window_new(parent: Gtk.Window): Gtk.ShortcutsWindow
export function utils_bind_g_action_to_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_without_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void
export function utils_create_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_with_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void
export function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string
export function utils_remove_mnemonic(str: string): string
export interface ActionInfoCentralStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class ActionInfoCentralStore {
    /* Fields of Amtk.ActionInfoCentralStore */
    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Amtk.ActionInfoCentralStore */
    lookup(action_name: string): ActionInfo
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
    connect(sigName: "notify", callback: (($obj: ActionInfoCentralStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionInfoCentralStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActionInfoCentralStore_ConstructProps)
    _init (config?: ActionInfoCentralStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_singleton(): ActionInfoCentralStore
    static $gtype: GObject.Type
}
export interface ActionInfoStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class ActionInfoStore {
    /* Fields of Amtk.ActionInfoStore */
    parent: GObject.Object
    priv: ActionInfoStorePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Amtk.ActionInfoStore */
    add(info: ActionInfo): void
    add_entries(entries: ActionInfoEntry[], translation_domain?: string | null): void
    check_all_used(): void
    lookup(action_name: string): ActionInfo
    set_all_accels_to_app(application: Gtk.Application): void
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
    connect(sigName: "notify", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActionInfoStore_ConstructProps)
    _init (config?: ActionInfoStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ActionInfoStore
    static $gtype: GObject.Type
}
export interface ApplicationWindow_ConstructProps extends GObject.Object_ConstructProps {
    application_window?: Gtk.ApplicationWindow
    statusbar?: Gtk.Statusbar
}
export class ApplicationWindow {
    /* Properties of Amtk.ApplicationWindow */
    statusbar: Gtk.Statusbar
    /* Fields of Amtk.ApplicationWindow */
    parent: GObject.Object
    priv: ApplicationWindowPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Amtk.ApplicationWindow */
    connect_menu_to_statusbar(menu_shell: Gtk.MenuShell): void
    connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void
    create_open_recent_menu(): Gtk.Widget
    create_open_recent_menu_item(): Gtk.Widget
    get_application_window(): Gtk.ApplicationWindow
    get_statusbar(): Gtk.Statusbar | null
    set_statusbar(statusbar?: Gtk.Statusbar | null): void
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
    connect(sigName: "notify", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationWindow_ConstructProps)
    _init (config?: ApplicationWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow
    static $gtype: GObject.Type
}
export interface Factory_ConstructProps extends GObject.Object_ConstructProps {
    application?: Gtk.Application
    default_flags?: FactoryFlags
}
export class Factory {
    /* Properties of Amtk.Factory */
    default_flags: FactoryFlags
    /* Fields of Amtk.Factory */
    parent: GObject.Object
    priv: FactoryPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Amtk.Factory */
    create_check_menu_item(action_name: string): Gtk.Widget
    create_check_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    create_gmenu_item(action_name: string): Gio.MenuItem
    create_gmenu_item_full(action_name: string, flags: FactoryFlags): Gio.MenuItem
    create_menu_item(action_name: string): Gtk.Widget
    create_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    create_menu_tool_button(action_name: string): Gtk.MenuToolButton
    create_menu_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.MenuToolButton
    create_shortcut(action_name: string): Gtk.Widget
    create_shortcut_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    create_simple_menu(entries: ActionInfoEntry[]): Gtk.Widget
    create_simple_menu_full(entries: ActionInfoEntry[], flags: FactoryFlags): Gtk.Widget
    create_tool_button(action_name: string): Gtk.ToolItem
    create_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.ToolItem
    get_application(): Gtk.Application | null
    get_default_flags(): FactoryFlags
    set_default_flags(default_flags: FactoryFlags): void
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
    connect(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application?: Gtk.Application | null): Factory
    static new_with_default_application(): Factory
    static $gtype: GObject.Type
}
export interface MenuShell_ConstructProps extends GObject.Object_ConstructProps {
    menu_shell?: Gtk.MenuShell
}
export class MenuShell {
    /* Fields of Amtk.MenuShell */
    parent: GObject.Object
    priv: MenuShellPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Amtk.MenuShell */
    get_menu_shell(): Gtk.MenuShell
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
    /* Virtual methods of Amtk.MenuShell */
    vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void
    vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Amtk.MenuShell */
    connect(sigName: "menu-item-deselected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    connect_after(sigName: "menu-item-deselected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    emit(sigName: "menu-item-deselected", menu_item: Gtk.MenuItem): void
    connect(sigName: "menu-item-selected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    connect_after(sigName: "menu-item-selected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    emit(sigName: "menu-item-selected", menu_item: Gtk.MenuItem): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuShell_ConstructProps)
    _init (config?: MenuShell_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell
    static $gtype: GObject.Type
}
export class ActionInfo {
    /* Methods of Amtk.ActionInfo */
    copy(): ActionInfo
    get_accels(): string[]
    get_action_name(): string | null
    get_icon_name(): string | null
    get_label(): string | null
    get_tooltip(): string | null
    has_been_used(): boolean
    mark_as_used(): void
    ref(): ActionInfo
    set_accels(accels: string[]): void
    set_action_name(action_name: string): void
    set_icon_name(icon_name?: string | null): void
    set_label(label?: string | null): void
    set_tooltip(tooltip?: string | null): void
    unref(): void
    static name: string
    static new(): ActionInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ActionInfo
    static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo
}
export abstract class ActionInfoCentralStoreClass {
    /* Fields of Amtk.ActionInfoCentralStoreClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ActionInfoCentralStorePrivate {
    static name: string
}
export class ActionInfoEntry {
    /* Fields of Amtk.ActionInfoEntry */
    action_name: string
    icon_name: string
    label: string
    accel: string
    tooltip: string
    static name: string
}
export abstract class ActionInfoStoreClass {
    /* Fields of Amtk.ActionInfoStoreClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ActionInfoStorePrivate {
    static name: string
}
export abstract class ApplicationWindowClass {
    /* Fields of Amtk.ApplicationWindowClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class ApplicationWindowPrivate {
    static name: string
}
export abstract class FactoryClass {
    /* Fields of Amtk.FactoryClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class FactoryPrivate {
    static name: string
}
export abstract class MenuShellClass {
    /* Fields of Amtk.MenuShellClass */
    parent_class: GObject.ObjectClass
    menu_item_selected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    menu_item_deselected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    padding: object[]
    static name: string
}
export class MenuShellPrivate {
    static name: string
}