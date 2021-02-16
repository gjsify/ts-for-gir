/**
 * Uhm-0.0
 */

import type * as Gjs from './Gjs';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ServerError {
    SERVER_ERROR_MESSAGE_MISMATCH,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export interface Resolver_ConstructProps extends Gio.Resolver_ConstructProps {
}
export class Resolver {
    /* Fields of Gio.Resolver */
    parent_instance: GObject.Object
    priv: Gio.ResolverPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Uhm.Resolver */
    add_A(hostname: string, addr: string): boolean
    add_SRV(service: string, protocol: string, domain: string, addr: string, port: number): boolean
    reset(): void
    /* Methods of Gio.Resolver */
    lookup_by_address(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null): string
    lookup_by_address_async(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_by_address_finish(result: Gio.AsyncResult): string
    lookup_by_name(hostname: string, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    lookup_by_name_async(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_by_name_finish(result: Gio.AsyncResult): Gio.InetAddress[]
    lookup_by_name_with_flags(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    lookup_by_name_with_flags_async(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_by_name_with_flags_finish(result: Gio.AsyncResult): Gio.InetAddress[]
    lookup_records(rrname: string, record_type: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null): GLib.Variant[]
    lookup_records_async(rrname: string, record_type: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_records_finish(result: Gio.AsyncResult): GLib.Variant[]
    lookup_service(service: string, protocol: string, domain: string, cancellable?: Gio.Cancellable | null): Gio.SrvTarget[]
    lookup_service_async(service: string, protocol: string, domain: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_service_finish(result: Gio.AsyncResult): Gio.SrvTarget[]
    set_default(): void
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
    /* Virtual methods of Gio.Resolver */
    vfunc_lookup_by_address(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null): string
    vfunc_lookup_by_address_async(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_by_address_finish(result: Gio.AsyncResult): string
    vfunc_lookup_by_name(hostname: string, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    vfunc_lookup_by_name_async(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_by_name_finish(result: Gio.AsyncResult): Gio.InetAddress[]
    vfunc_lookup_by_name_with_flags(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    vfunc_lookup_by_name_with_flags_async(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_by_name_with_flags_finish(result: Gio.AsyncResult): Gio.InetAddress[]
    vfunc_lookup_records(rrname: string, record_type: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null): GLib.Variant[]
    vfunc_lookup_records_async(rrname: string, record_type: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_records_finish(result: Gio.AsyncResult): GLib.Variant[]
    vfunc_lookup_service_async(rrname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_service_finish(result: Gio.AsyncResult): Gio.SrvTarget[]
    vfunc_reload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Resolver */
    connect(sigName: "reload", callback: (($obj: Resolver) => void)): number
    connect_after(sigName: "reload", callback: (($obj: Resolver) => void)): number
    emit(sigName: "reload"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Resolver_ConstructProps)
    _init (config?: Resolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Resolver
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    enable_logging?: boolean
    enable_online?: boolean
    tls_certificate?: Gio.TlsCertificate
    trace_directory?: Gio.File
}
export class Server {
    /* Properties of Uhm.Server */
    readonly address: string
    enable_logging: boolean
    enable_online: boolean
    readonly port: number
    readonly resolver: Resolver
    tls_certificate: Gio.TlsCertificate
    trace_directory: Gio.File
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Uhm.Server */
    compare_messages_remove_filter(filter_id: number): void
    end_trace(): void
    filter_ignore_parameter_values(parameter_names: string[]): number
    get_address(): string | null
    get_enable_logging(): boolean
    get_enable_online(): boolean
    get_port(): number
    get_resolver(): Resolver | null
    get_tls_certificate(): Gio.TlsCertificate | null
    get_trace_directory(): Gio.File | null
    load_trace(trace_file: Gio.File, cancellable?: Gio.Cancellable | null): void
    load_trace_async(trace_file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_trace_finish(result: Gio.AsyncResult): void
    received_message_chunk(message_chunk: string, message_chunk_length: number): void
    received_message_chunk_with_direction(direction: number, data: string, data_length: number): void
    run(): void
    set_default_tls_certificate(): Gio.TlsCertificate
    set_enable_logging(enable_logging: boolean): void
    set_enable_online(enable_online: boolean): void
    set_expected_domain_names(domain_names?: string[] | null): void
    set_tls_certificate(tls_certificate?: Gio.TlsCertificate | null): void
    set_trace_directory(trace_directory?: Gio.File | null): void
    start_trace(trace_name: string): void
    start_trace_full(trace_file: Gio.File): void
    stop(): void
    unload_trace(): void
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
    /* Virtual methods of Uhm.Server */
    vfunc_compare_messages(expected_message: Soup.Message, actual_message: Soup.Message, actual_client: Soup.ClientContext): boolean
    vfunc_handle_message(message: Soup.Message, client: Soup.ClientContext): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Uhm.Server */
    connect(sigName: "compare-messages", callback: (($obj: Server, expected_message: Soup.Message, actual_message: Soup.Message, actual_client: Soup.ClientContext) => boolean)): number
    connect_after(sigName: "compare-messages", callback: (($obj: Server, expected_message: Soup.Message, actual_message: Soup.Message, actual_client: Soup.ClientContext) => boolean)): number
    emit(sigName: "compare-messages", expected_message: Soup.Message, actual_message: Soup.Message, actual_client: Soup.ClientContext): void
    connect(sigName: "handle-message", callback: (($obj: Server, message: Soup.Message, client: Soup.ClientContext) => boolean)): number
    connect_after(sigName: "handle-message", callback: (($obj: Server, message: Soup.Message, client: Soup.ClientContext) => boolean)): number
    emit(sigName: "handle-message", message: Soup.Message, client: Soup.ClientContext): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-logging", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-logging", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-online", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-online", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolver", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolver", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::trace-directory", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trace-directory", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Server
    static error_quark(): GLib.Quark
    static received_message_chunk_from_soup(logger: Soup.Logger, level: Soup.LoggerLogLevel, direction: number, data: string, user_data?: object | null): void
    static $gtype: GObject.Type
}
export abstract class ResolverClass {
    static name: string
}
export class ResolverPrivate {
    static name: string
}
export abstract class ServerClass {
    /* Fields of Uhm.ServerClass */
    handle_message: (self: Server, message: Soup.Message, client: Soup.ClientContext) => boolean
    compare_messages: (self: Server, expected_message: Soup.Message, actual_message: Soup.Message, actual_client: Soup.ClientContext) => boolean
    static name: string
}
export class ServerPrivate {
    static name: string
}