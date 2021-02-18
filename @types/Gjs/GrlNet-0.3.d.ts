/**
 * GrlNet-0.3
 */

import type * as Gjs from './Gjs';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum WcError {
    UNAVAILABLE,
    PROTOCOL_ERROR,
    AUTHENTICATION_REQUIRED,
    NOT_FOUND,
    CONFLICT,
    FORBIDDEN,
    NETWORK_ERROR,
    PROXY_ERROR,
    CANCELLED,
}
export interface Wc_ConstructProps extends GObject.Object_ConstructProps {
    cache?: boolean
    cache_size?: number
    loglevel?: number
    throttling?: number
    user_agent?: string
}
export class Wc {
    /* Properties of GrlNet.Wc */
    cache: boolean
    cache_size: number
    loglevel: number
    throttling: number
    user_agent: string
    /* Fields of GrlNet.Wc */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GrlNet.Wc */
    flush_delayed_requests(): void
    request_async(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    request_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* content */ Uint8Array[] | null ]
    request_with_headers_async(uri: string, headers?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_cache(use_cache: boolean): void
    set_cache_size(cache_size: number): void
    set_log_level(log_level: number): void
    set_throttling(throttling: number): void
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
    connect(sigName: "notify", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache-size", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-size", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::loglevel", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loglevel", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttling", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttling", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Wc_ConstructProps)
    _init (config?: Wc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Wc
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export abstract class WcClass {
    /* Fields of GrlNet.WcClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WcPrivate {
    static name: string
}