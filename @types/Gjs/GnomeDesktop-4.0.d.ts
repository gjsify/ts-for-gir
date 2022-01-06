/**
 * GnomeDesktop-4.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as GDesktopEnums from './GDesktopEnums-3.0';

export enum DesktopThumbnailSize {
    NORMAL,
    LARGE,
    XLARGE,
    XXLARGE,
}
export function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean
export function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string
export function get_all_locales(): string[]
export function get_country_from_code(code: string, translation?: string | null): string
export function get_country_from_locale(locale: string, translation?: string | null): string
export function get_input_source_from_locale(locale: string): [ /* returnType */ boolean, /* type */ string, /* id */ string ]
export function get_language_from_code(code: string, translation?: string | null): string
export function get_language_from_locale(locale: string, translation?: string | null): string
export function get_translated_modifier(modifier: string, translation?: string | null): string
export function language_has_translations(code: string): boolean
export function normalize_locale(locale: string): string
export function parse_locale(locale: string): [ /* returnType */ boolean, /* language_codep */ string | null, /* country_codep */ string | null, /* codesetp */ string | null, /* modifierp */ string | null ]
export function start_systemd_scope(name: string, pid: number, description?: string | null, connection?: Gio.DBusConnection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function start_systemd_scope_finish(res: Gio.AsyncResult): boolean
export interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, id: number): void
}
export interface DesktopThumbnailFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class DesktopThumbnailFactory {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory */
    parent: GObject.Object
    priv: DesktopThumbnailFactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory */
    can_thumbnail(uri: string, mime_type: string, mtime: number): boolean
    create_failed_thumbnail(uri: string, mtime: number): void
    generate_thumbnail(uri: string, mime_type: string): GdkPixbuf.Pixbuf
    has_valid_failed_thumbnail(uri: string, mtime: number): boolean
    lookup(uri: string, mtime: number): string
    save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DesktopThumbnailFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DesktopThumbnailFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DesktopThumbnailFactory_ConstructProps)
    _init (config?: DesktopThumbnailFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(size: DesktopThumbnailSize): DesktopThumbnailFactory
    static $gtype: GObject.Type
}
export interface IdleMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class IdleMonitor {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor */
    parent: GObject.Object
    priv: IdleMonitorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor */
    add_idle_watch(interval_msec: number, callback: IdleMonitorWatchFunc | null): number
    add_user_active_watch(callback: IdleMonitorWatchFunc | null): number
    get_idletime(): number
    remove_watch(id: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IdleMonitor_ConstructProps)
    _init (config?: IdleMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IdleMonitor
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface PnpIds_ConstructProps extends GObject.Object_ConstructProps {
}
export class PnpIds {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.PnpIds */
    parent: GObject.Object
    priv: PnpIdsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.PnpIds */
    get_pnp_id(pnp_id: string): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PnpIds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PnpIds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PnpIds_ConstructProps)
    _init (config?: PnpIds_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PnpIds
    static $gtype: GObject.Type
}
export interface WallClock_ConstructProps extends GObject.Object_ConstructProps {
    time_only?: boolean
}
export class WallClock {
    /* Properties of GnomeDesktop-4.0.GnomeDesktop.WallClock */
    readonly clock: string
    time_only: boolean
    readonly timezone: GLib.TimeZone
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.WallClock */
    parent_object: GObject.Object
    priv: WallClockPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.WallClock */
    get_clock(): string
    get_timezone(): GLib.TimeZone
    string_for_datetime(now: GLib.DateTime, clock_format: GDesktopEnums.ClockFormat, show_weekday: boolean, show_full_date: boolean, show_seconds: boolean): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-only", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-only", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timezone", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WallClock_ConstructProps)
    _init (config?: WallClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WallClock
    static $gtype: GObject.Type
}
export interface XkbInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class XkbInfo {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfo */
    parent_object: GObject.Object
    priv: XkbInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.XkbInfo */
    description_for_group(group_id: string): string
    description_for_option(group_id: string, id: string): string
    get_all_layouts(): string[]
    get_all_option_groups(): string[]
    get_languages_for_layout(layout_id: string): string[]
    get_layout_info(id: string): [ /* returnType */ boolean, /* display_name */ string | null, /* short_name */ string | null, /* xkb_layout */ string | null, /* xkb_variant */ string | null ]
    get_layouts_for_country(country_code: string): string[]
    get_layouts_for_language(language_code: string): string[]
    get_options_for_group(group_id: string): string[]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GnomeDesktop-4.0.GnomeDesktop.XkbInfo */
    connect(sigName: "layouts-changed", callback: (($obj: XkbInfo) => void)): number
    connect_after(sigName: "layouts-changed", callback: (($obj: XkbInfo) => void)): number
    emit(sigName: "layouts-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XkbInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XkbInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XkbInfo_ConstructProps)
    _init (config?: XkbInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XkbInfo
    static $gtype: GObject.Type
}
export abstract class DesktopThumbnailFactoryClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryClass */
    parent: GObject.ObjectClass
    static name: string
}
export class DesktopThumbnailFactoryPrivate {
    static name: string
}
export abstract class IdleMonitorClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IdleMonitorPrivate {
    static name: string
}
export abstract class PnpIdsClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.PnpIdsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PnpIdsPrivate {
    static name: string
}
export abstract class WallClockClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.WallClockClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WallClockPrivate {
    static name: string
}
export abstract class XkbInfoClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class XkbInfoPrivate {
    static name: string
}