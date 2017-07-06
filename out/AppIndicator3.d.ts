/**
 * AppIndicator3-0.1
 */

import * as Gjs from './Gjs'
import * as Gtk from './Gtk'
import * as xlib from './xlib'
import * as Gdk from './Gdk'
import * as cairo from './cairo'
import * as Pango from './Pango'
import * as GObject from './GObject'
import * as GLib from './GLib'
import * as Gio from './Gio'
import * as GdkPixbuf from './GdkPixbuf'
import * as GModule from './GModule'
import * as Atk from './Atk'
export enum IndicatorCategory {
    APPLICATION_STATUS,
    COMMUNICATIONS,
    SYSTEM_SERVICES,
    HARDWARE,
    OTHER,
}
export enum IndicatorStatus {
    PASSIVE,
    ACTIVE,
    ATTENTION,
}
export const INDICATOR_SIGNAL_CONNECTION_CHANGED:string
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON:string
export const INDICATOR_SIGNAL_NEW_ICON:string
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH:string
export const INDICATOR_SIGNAL_NEW_LABEL:string
export const INDICATOR_SIGNAL_NEW_STATUS:string
export const INDICATOR_SIGNAL_SCROLL_EVENT:string
export interface Indicator_ConstructProps extends GObject.Object_ConstructProps {
    attention_icon_desc?:string
    attention_icon_name?:string
    category?:string
    icon_desc?:string
    icon_name?:string
    icon_theme_path?:string
    id?:string
    label?:string
    label_guide?:string
    ordering_index?:number
    status?:string
    title?:string
}
export interface Indicator {
    /* Properties of AppIndicator3.Indicator */
    attention_icon_desc:string
    attention_icon_name:string
    readonly connected:boolean
    icon_desc:string
    icon_name:string
    icon_theme_path:string
    label:string
    label_guide:string
    ordering_index:number
    status:string
    title:string
    /* Fields of AppIndicator3.Indicator */
    parent:GObject.Object
    priv:IndicatorPrivate
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of AppIndicator3.Indicator */
    build_menu_from_desktop(desktop_file: string, desktop_profile: string): void
    get_attention_icon(): string
    get_attention_icon_desc(): string
    get_category(): IndicatorCategory
    get_icon(): string
    get_icon_desc(): string
    get_icon_theme_path(): string
    get_id(): string
    get_label(): string
    get_label_guide(): string
    get_menu(): Gtk.Menu
    get_ordering_index(): number
    get_secondary_activate_target(): Gtk.Widget
    get_status(): IndicatorStatus
    get_title(): string
    set_attention_icon(icon_name: string): void
    set_attention_icon_full(icon_name: string, icon_desc: string): void
    set_icon(icon_name: string): void
    set_icon_full(icon_name: string, icon_desc: string): void
    set_icon_theme_path(icon_theme_path: string): void
    set_label(label: string, guide: string): void
    set_menu(menu: Gtk.Menu | null): void
    set_ordering_index(ordering_index: number): void
    set_secondary_activate_target(menuitem: Gtk.Widget | null): void
    set_status(status: IndicatorStatus): void
    set_title(title: string | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of AppIndicator3.Indicator */
    vfunc_connection_changed(connected: boolean, user_data: object): void
    vfunc_new_attention_icon(user_data: object): void
    vfunc_new_icon(user_data: object): void
    vfunc_new_icon_theme_path(icon_theme_path: string, user_data: object): void
    vfunc_new_label(label: string, guide: string, user_data: object): void
    vfunc_new_status(status: string, user_data: object): void
    vfunc_scroll_event(delta: number, direction: Gdk.ScrollDirection, user_data: object): void
    vfunc_unfallback(status_icon: Gtk.StatusIcon): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of AppIndicator3.Indicator */
    connect(sigName: "connection-changed", callback: ((obj: Indicator, arg1: boolean) => void))
    connect(sigName: "new-attention-icon", callback: ((obj: Indicator) => void))
    connect(sigName: "new-icon", callback: ((obj: Indicator) => void))
    connect(sigName: "new-icon-theme-path", callback: ((obj: Indicator, object: string) => void))
    connect(sigName: "new-label", callback: ((obj: Indicator, object: string, p0: string) => void))
    connect(sigName: "new-status", callback: ((obj: Indicator, arg1: string) => void))
    connect(sigName: "scroll-event", callback: ((obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::attention-icon-desc", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::attention-icon-name", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::connected", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-desc", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-theme-path", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::label", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::label-guide", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::ordering-index", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::status", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::title", callback: ((obj: Indicator, pspec: GObject.ParamSpec) => void))
}
export interface Indicator_Static {
    name: string
    new (config: Indicator_ConstructProps): Indicator
}
export declare class Indicator_Static {
    new(id: string, icon_name: string, category: IndicatorCategory): Indicator
    new_with_path(id: string, icon_name: string, category: IndicatorCategory, icon_theme_path: string): Indicator
}
export declare var Indicator: Indicator_Static
export interface IndicatorPrivate {
}
export interface IndicatorPrivate_Static {
    name: string
}
export declare var IndicatorPrivate: IndicatorPrivate_Static