/**
 * GnomeDesktop-3.0
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
import type * as GDesktopEnums from './GDesktopEnums-3.0';

export enum DesktopThumbnailSize {
    NORMAL,
    LARGE,
    XLARGE,
    XXLARGE,
}
export enum RRDpmsMode {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
export enum RRDpmsModeType {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
export enum RRError {
    UNKNOWN,
    NO_RANDR_EXTENSION,
    RANDR_ERROR,
    BOUNDS_ERROR,
    CRTC_ASSIGNMENT,
    NO_MATCHING_CONFIG,
    NO_DPMS_EXTENSION,
}
export enum RRRotation {
    ROTATION_NEXT,
    ROTATION_0,
    ROTATION_90,
    ROTATION_180,
    ROTATION_270,
    REFLECT_X,
    REFLECT_Y,
}
export const RR_CONNECTOR_TYPE_PANEL: string
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
export function rr_error_quark(): GLib.Quark
export function start_systemd_scope(name: string, pid: number, description?: string | null, connection?: Gio.DBusConnection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function start_systemd_scope_finish(res: Gio.AsyncResult): boolean
export interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, id: number): void
}
export interface BG_ConstructProps extends GObject.Object_ConstructProps {
}
export class BG {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.BG */
    changes_with_time(): boolean
    create_frame_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number, frame_num: number): GdkPixbuf.Pixbuf
    create_surface(window: Gdk.Window, width: number, height: number): cairo.Surface
    create_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    get_filename(): string
    get_image_size(factory: DesktopThumbnailFactory, best_width: number, best_height: number, width: number, height: number): boolean
    get_placement(): GDesktopEnums.BackgroundStyle
    get_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    has_multiple_sizes(): boolean
    is_dark(dest_width: number, dest_height: number): boolean
    load_from_preferences(settings: Gio.Settings): void
    save_to_preferences(settings: Gio.Settings): void
    set_filename(filename: string): void
    set_placement(placement: GDesktopEnums.BackgroundStyle): void
    set_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
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
    /* Signals of GnomeDesktop-3.0.GnomeDesktop.BG */
    connect(sigName: "changed", callback: (($obj: BG) => void)): number
    connect_after(sigName: "changed", callback: (($obj: BG) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "transitioned", callback: (($obj: BG) => void)): number
    connect_after(sigName: "transitioned", callback: (($obj: BG) => void)): number
    emit(sigName: "transitioned"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BG, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BG, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BG_ConstructProps)
    _init (config?: BG_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BG
    static $gtype: GObject.Type
}
export interface BGCrossfade_ConstructProps extends GObject.Object_ConstructProps {
    height?: number
    width?: number
}
export class BGCrossfade {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade */
    parent_object: GObject.Object
    priv: BGCrossfadePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade */
    is_started(): boolean
    set_end_surface(surface: cairo.Surface): boolean
    set_start_surface(surface: cairo.Surface): boolean
    start(window: Gdk.Window): void
    stop(): void
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
    /* Virtual methods of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade */
    vfunc_finished(window: Gdk.Window): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade */
    connect(sigName: "finished", callback: (($obj: BGCrossfade, window: GObject.Object) => void)): number
    connect_after(sigName: "finished", callback: (($obj: BGCrossfade, window: GObject.Object) => void)): number
    emit(sigName: "finished", window: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BGCrossfade_ConstructProps)
    _init (config?: BGCrossfade_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number): BGCrossfade
    static $gtype: GObject.Type
}
export interface BGSlideShow_ConstructProps extends GObject.Object_ConstructProps {
    file?: Gio.File
}
export class BGSlideShow {
    /* Properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow */
    readonly has_multiple_sizes: boolean
    readonly start_time: number
    readonly total_duration: number
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow */
    parent_object: GObject.Object
    priv: BGSlideShowPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow */
    get_current_slide(width: number, height: number): [ /* progress */ number | null, /* duration */ number | null, /* is_fixed */ boolean | null, /* file1 */ string | null, /* file2 */ string | null ]
    get_has_multiple_sizes(): boolean
    get_num_slides(): number
    get_slide(frame_number: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number | null, /* duration */ number | null, /* is_fixed */ boolean | null, /* file1 */ string | null, /* file2 */ string | null ]
    get_start_time(): number
    get_total_duration(): number
    load(): boolean
    load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    connect(sigName: "notify", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BGSlideShow_ConstructProps)
    _init (config?: BGSlideShow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): BGSlideShow
    static $gtype: GObject.Type
}
export interface DesktopThumbnailFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class DesktopThumbnailFactory {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory */
    parent: GObject.Object
    priv: DesktopThumbnailFactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory */
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
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor */
    parent: GObject.Object
    priv: IdleMonitorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor */
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
    /* Virtual methods of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor */
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
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.PnpIds */
    parent: GObject.Object
    priv: PnpIdsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.PnpIds */
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
export interface RRConfig_ConstructProps extends GObject.Object_ConstructProps {
    screen?: RRScreen
}
export class RRConfig {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.RRConfig */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.RRConfig */
    applicable(screen: RRScreen): boolean
    apply(screen: RRScreen): boolean
    apply_persistent(screen: RRScreen): boolean
    ensure_primary(): boolean
    equal(config2: RRConfig): boolean
    get_clone(): boolean
    get_outputs(): RROutputInfo[]
    load_current(): boolean
    match(config2: RRConfig): boolean
    sanitize(): void
    set_clone(clone: boolean): void
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
    connect(sigName: "notify", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RRConfig_ConstructProps)
    _init (config?: RRConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_current(screen: RRScreen): RRConfig
    static $gtype: GObject.Type
}
export interface RROutputInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class RROutputInfo {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo */
    get_aspect_ratio(): number
    get_display_name(): string
    get_geometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_name(): string
    get_preferred_height(): number
    get_preferred_width(): number
    get_primary(): boolean
    get_product(): string
    get_refresh_rate(): number
    get_rotation(): RRRotation
    get_serial(): string
    get_underscanning(): boolean
    get_vendor(): string
    is_active(): boolean
    is_connected(): boolean
    is_primary_tile(): boolean
    set_active(active: boolean): void
    set_geometry(x: number, y: number, width: number, height: number): void
    set_primary(primary: boolean): void
    set_refresh_rate(rate: number): void
    set_rotation(rotation: RRRotation): void
    set_underscanning(underscanning: boolean): void
    supports_rotation(rotation: RRRotation): boolean
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
    connect(sigName: "notify", callback: (($obj: RROutputInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RROutputInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RROutputInfo_ConstructProps)
    _init (config?: RROutputInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RRScreen_ConstructProps extends GObject.Object_ConstructProps {
    dpms_mode?: RRDpmsModeType
    gdk_screen?: Gdk.Screen
}
export class RRScreen {
    /* Properties of GnomeDesktop-3.0.GnomeDesktop.RRScreen */
    dpms_mode: RRDpmsModeType
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.RRScreen */
    parent: GObject.Object
    priv: RRScreenPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.RRScreen */
    get_crtc_by_id(id: number): RRCrtc
    get_dpms_mode(): [ /* returnType */ boolean, /* mode */ RRDpmsMode ]
    get_output_by_id(id: number): RROutput
    get_output_by_name(name: string): RROutput
    get_ranges(): [ /* min_width */ number, /* max_width */ number, /* min_height */ number, /* max_height */ number ]
    list_clone_modes(): RRMode[]
    list_crtcs(): RRCrtc[]
    list_modes(): RRMode[]
    list_outputs(): RROutput[]
    refresh(): boolean
    set_dpms_mode(mode: RRDpmsMode): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GnomeDesktop-3.0.GnomeDesktop.RRScreen */
    vfunc_changed(): void
    vfunc_output_connected(output: RROutput): void
    vfunc_output_disconnected(output: RROutput): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GnomeDesktop-3.0.GnomeDesktop.RRScreen */
    connect(sigName: "changed", callback: (($obj: RRScreen) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RRScreen) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "output-connected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    connect_after(sigName: "output-connected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    emit(sigName: "output-connected", output?: object | null): void
    connect(sigName: "output-disconnected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    connect_after(sigName: "output-disconnected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    emit(sigName: "output-disconnected", output?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dpms-mode", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpms-mode", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RRScreen_ConstructProps)
    _init (config?: RRScreen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(screen: Gdk.Screen): RRScreen
    static new_finish(result: Gio.AsyncResult): RRScreen
    static new_async(screen: Gdk.Screen, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface WallClock_ConstructProps extends GObject.Object_ConstructProps {
    time_only?: boolean
}
export class WallClock {
    /* Properties of GnomeDesktop-3.0.GnomeDesktop.WallClock */
    readonly clock: string
    time_only: boolean
    readonly timezone: GLib.TimeZone
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.WallClock */
    parent_object: GObject.Object
    priv: WallClockPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.WallClock */
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
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.XkbInfo */
    parent_object: GObject.Object
    priv: XkbInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.XkbInfo */
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
export abstract class BGClass {
    static name: string
}
export abstract class BGCrossfadeClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.BGCrossfadeClass */
    parent_class: GObject.ObjectClass
    finished: (fade: BGCrossfade, window: Gdk.Window) => void
    static name: string
}
export class BGCrossfadePrivate {
    static name: string
}
export abstract class BGSlideShowClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.BGSlideShowClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BGSlideShowPrivate {
    static name: string
}
export abstract class DesktopThumbnailFactoryClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactoryClass */
    parent: GObject.ObjectClass
    static name: string
}
export class DesktopThumbnailFactoryPrivate {
    static name: string
}
export abstract class IdleMonitorClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.IdleMonitorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class IdleMonitorPrivate {
    static name: string
}
export abstract class PnpIdsClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.PnpIdsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PnpIdsPrivate {
    static name: string
}
export class RRCTM {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.RRCTM */
    matrix: number[]
    static name: string
}
export abstract class RRConfigClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.RRConfigClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RRConfigPrivate {
    static name: string
}
export class RRCrtc {
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.RRCrtc */
    can_drive_output(output: RROutput): boolean
    get_current_mode(): RRMode
    get_current_rotation(): RRRotation
    get_gamma(size: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    get_id(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_rotations(): RRRotation
    set_gamma(size: number, red: number, green: number, blue: number): boolean
    supports_rotation(rotation: RRRotation): boolean
    static name: string
}
export class RRMode {
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.RRMode */
    get_freq(): number
    get_freq_f(): number
    get_height(): number
    get_id(): number
    get_is_interlaced(): boolean
    get_is_tiled(): boolean
    get_width(): number
    static name: string
}
export class RROutput {
    /* Methods of GnomeDesktop-3.0.GnomeDesktop.RROutput */
    can_clone(clone: RROutput): boolean
    get_backlight(): number
    get_crtc(): RRCrtc
    get_current_mode(): RRMode
    get_display_name(): string
    get_edid_data(size: number): number
    get_id(): number
    get_ids_from_edid(): [ /* vendor */ string | null, /* product */ string | null, /* serial */ string | null ]
    get_is_primary(): boolean
    get_is_underscanning(): boolean
    get_min_backlight_step(): number
    get_name(): string
    get_physical_size(): [ /* width_mm */ number | null, /* height_mm */ number | null ]
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_possible_crtcs(): RRCrtc[]
    get_preferred_mode(): RRMode
    is_builtin_display(): boolean
    list_modes(): RRMode[]
    set_backlight(value: number): boolean
    set_color_transform(value: RRCTM): boolean
    supports_color_transform(): boolean
    supports_mode(mode: RRMode): boolean
    supports_underscanning(): boolean
    static name: string
}
export abstract class RROutputInfoClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.RROutputInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class RROutputInfoPrivate {
    static name: string
}
export abstract class RRScreenClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.RRScreenClass */
    parent_class: GObject.ObjectClass
    changed: (screen: RRScreen) => void
    output_connected: (screen: RRScreen, output: RROutput) => void
    output_disconnected: (screen: RRScreen, output: RROutput) => void
    static name: string
}
export class RRScreenPrivate {
    static name: string
}
export abstract class WallClockClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.WallClockClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WallClockPrivate {
    static name: string
}
export abstract class XkbInfoClass {
    /* Fields of GnomeDesktop-3.0.GnomeDesktop.XkbInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class XkbInfoPrivate {
    static name: string
}