/**
 * AppIndicator3-0.1
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
export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string
export const INDICATOR_SIGNAL_NEW_ICON: string
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string
export const INDICATOR_SIGNAL_NEW_LABEL: string
export const INDICATOR_SIGNAL_NEW_STATUS: string
export const INDICATOR_SIGNAL_SCROLL_EVENT: string
export interface Indicator_ConstructProps extends GObject.Object_ConstructProps {
    attention_icon_desc?: string
    attention_icon_name?: string
    category?: string
    icon_desc?: string
    icon_name?: string
    icon_theme_path?: string
    id?: string
    label?: string
    label_guide?: string
    ordering_index?: number
    status?: string
    title?: string
}
export class Indicator {
    /* Properties of AppIndicator3-0.1.AppIndicator3.Indicator */
    attention_icon_desc: string
    attention_icon_name: string
    readonly connected: boolean
    icon_desc: string
    icon_name: string
    icon_theme_path: string
    label: string
    label_guide: string
    ordering_index: number
    status: string
    title: string
    /* Fields of AppIndicator3-0.1.AppIndicator3.Indicator */
    parent: GObject.Object
    priv: IndicatorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppIndicator3-0.1.AppIndicator3.Indicator */
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
    set_menu(menu?: Gtk.Menu | null): void
    set_ordering_index(ordering_index: number): void
    set_secondary_activate_target(menuitem?: Gtk.Widget | null): void
    set_status(status: IndicatorStatus): void
    set_title(title?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of AppIndicator3-0.1.AppIndicator3.Indicator */
    connect(sigName: "connection-changed", callback: (($obj: Indicator, arg1: boolean) => void)): number
    connect_after(sigName: "connection-changed", callback: (($obj: Indicator, arg1: boolean) => void)): number
    emit(sigName: "connection-changed", arg1: boolean): void
    connect(sigName: "new-attention-icon", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "new-attention-icon", callback: (($obj: Indicator) => void)): number
    emit(sigName: "new-attention-icon"): void
    connect(sigName: "new-icon", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "new-icon", callback: (($obj: Indicator) => void)): number
    emit(sigName: "new-icon"): void
    connect(sigName: "new-icon-theme-path", callback: (($obj: Indicator, object: string) => void)): number
    connect_after(sigName: "new-icon-theme-path", callback: (($obj: Indicator, object: string) => void)): number
    emit(sigName: "new-icon-theme-path", object: string): void
    connect(sigName: "new-label", callback: (($obj: Indicator, object: string, p0: string) => void)): number
    connect_after(sigName: "new-label", callback: (($obj: Indicator, object: string, p0: string) => void)): number
    emit(sigName: "new-label", object: string, p0: string): void
    connect(sigName: "new-status", callback: (($obj: Indicator, arg1: string) => void)): number
    connect_after(sigName: "new-status", callback: (($obj: Indicator, arg1: string) => void)): number
    emit(sigName: "new-status", arg1: string): void
    connect(sigName: "scroll-event", callback: (($obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void)): number
    emit(sigName: "scroll-event", arg1: number, arg2: Gdk.ScrollDirection): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Indicator_ConstructProps)
    _init (config?: Indicator_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class IndicatorClass {
    /* Fields of AppIndicator3-0.1.AppIndicator3.IndicatorClass */
    parent_class: GObject.ObjectClass
    new_icon: (indicator: Indicator) => void
    new_attention_icon: (indicator: Indicator) => void
    new_status: (indicator: Indicator, status: string) => void
    new_icon_theme_path: (indicator: Indicator, icon_theme_path: string) => void
    new_label: (indicator: Indicator, label: string, guide: string) => void
    connection_changed: (indicator: Indicator, connected: boolean) => void
    scroll_event: (indicator: Indicator, delta: number, direction: Gdk.ScrollDirection) => void
    app_indicator_reserved_ats: () => void
    unfallback: (indicator: Indicator, status_icon: Gtk.StatusIcon) => void
    app_indicator_reserved_1: () => void
    app_indicator_reserved_2: () => void
    app_indicator_reserved_3: () => void
    app_indicator_reserved_4: () => void
    app_indicator_reserved_5: () => void
    app_indicator_reserved_6: () => void
    static name: string
}
export class IndicatorPrivate {
    static name: string
}