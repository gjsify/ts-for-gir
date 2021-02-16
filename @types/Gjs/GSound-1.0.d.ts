/**
 * GSound-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum Error {
    NOTSUPPORTED,
    INVALID,
    STATE,
    OOM,
    NODRIVER,
    SYSTEM,
    CORRUPT,
    TOOBIG,
    NOTFOUND,
    DESTROYED,
    CANCELED,
    NOTAVAILABLE,
    ACCESS,
    IO,
    INTERNAL,
    DISABLED,
    FORKED,
    DISCONNECTED,
}
export const ATTR_APPLICATION_ICON: string
export const ATTR_APPLICATION_ICON_NAME: string
export const ATTR_APPLICATION_ID: string
export const ATTR_APPLICATION_LANGUAGE: string
export const ATTR_APPLICATION_NAME: string
export const ATTR_APPLICATION_PROCESS_BINARY: string
export const ATTR_APPLICATION_PROCESS_HOST: string
export const ATTR_APPLICATION_PROCESS_ID: string
export const ATTR_APPLICATION_PROCESS_USER: string
export const ATTR_APPLICATION_VERSION: string
export const ATTR_CANBERRA_CACHE_CONTROL: string
export const ATTR_CANBERRA_ENABLE: string
export const ATTR_CANBERRA_FORCE_CHANNEL: string
export const ATTR_CANBERRA_VOLUME: string
export const ATTR_CANBERRA_XDG_THEME_NAME: string
export const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string
export const ATTR_EVENT_DESCRIPTION: string
export const ATTR_EVENT_ID: string
export const ATTR_EVENT_MOUSE_BUTTON: string
export const ATTR_EVENT_MOUSE_HPOS: string
export const ATTR_EVENT_MOUSE_VPOS: string
export const ATTR_EVENT_MOUSE_X: string
export const ATTR_EVENT_MOUSE_Y: string
export const ATTR_MEDIA_ARTIST: string
export const ATTR_MEDIA_FILENAME: string
export const ATTR_MEDIA_ICON: string
export const ATTR_MEDIA_ICON_NAME: string
export const ATTR_MEDIA_LANGUAGE: string
export const ATTR_MEDIA_NAME: string
export const ATTR_MEDIA_ROLE: string
export const ATTR_MEDIA_TITLE: string
export const ATTR_WINDOW_DESKTOP: string
export const ATTR_WINDOW_HEIGHT: string
export const ATTR_WINDOW_HPOS: string
export const ATTR_WINDOW_ICON: string
export const ATTR_WINDOW_ICON_NAME: string
export const ATTR_WINDOW_ID: string
export const ATTR_WINDOW_NAME: string
export const ATTR_WINDOW_VPOS: string
export const ATTR_WINDOW_WIDTH: string
export const ATTR_WINDOW_X: string
export const ATTR_WINDOW_X11_DISPLAY: string
export const ATTR_WINDOW_X11_MONITOR: string
export const ATTR_WINDOW_X11_SCREEN: string
export const ATTR_WINDOW_X11_XID: string
export const ATTR_WINDOW_Y: string
export function error_quark(): GLib.Quark
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export class Context {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSound.Context */
    cache(attrs: GLib.HashTable): boolean
    open(): boolean
    play_full_finish(result: Gio.AsyncResult): boolean
    play_full(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    play_simple(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    set_attributes(attrs: GLib.HashTable): boolean
    set_driver(driver: string): boolean
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GSound.Context */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): Context
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class ContextClass {
    static name: string
}