/**
 * Geoclue-2.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AccuracyLevel {
    NONE,
    COUNTRY,
    CITY,
    NEIGHBORHOOD,
    STREET,
    EXACT,
}
export enum ClientProxyCreateFlags {
    NONE,
    AUTO_DELETE,
}
export function client_interface_info(): Gio.DBusInterfaceInfo
export function client_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function location_interface_info(): Gio.DBusInterfaceInfo
export function location_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function manager_interface_info(): Gio.DBusInterfaceInfo
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export class Client {
    /* Properties of Geoclue.Client */
    active: boolean
    desktop_id: string
    distance_threshold: number
    location: string
    requested_accuracy_level: number
    time_threshold: number
    /* Methods of Geoclue.Client */
    call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean
    call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    emit_location_updated(arg_old: string, arg_new: string): void
    /* Virtual methods of Geoclue.Client */
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_location_updated(arg_old: string, arg_new: string): void
    /* Signals of Geoclue.Client */
    connect(sigName: "handle-start", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-stop", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "location-updated", callback: (($obj: Client, arg_old: string, arg_new: string) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: Client, arg_old: string, arg_new: string) => void)): number
    emit(sigName: "location-updated", arg_old: string, arg_new: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Location {
    /* Properties of Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Manager {
    /* Properties of Geoclue.Manager */
    available_accuracy_level: number
    in_use: boolean
    /* Methods of Geoclue.Manager */
    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_agent_finish(res: Gio.AsyncResult): boolean
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean
    call_create_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_client_finish(res: Gio.AsyncResult): boolean
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Virtual methods of Geoclue.Manager */
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    connect_after(sigName: "handle-add-agent", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, arg_id: string): void
    connect(sigName: "handle-create-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-create-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-delete-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean)): number
    connect_after(sigName: "handle-delete-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean)): number
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, arg_client: string): void
    connect(sigName: "handle-get-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export interface ClientProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    active?: boolean
    desktop_id?: string
    distance_threshold?: number
    location?: string
    requested_accuracy_level?: number
    time_threshold?: number
}
export class ClientProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Geoclue.Client */
    active: boolean
    desktop_id: string
    distance_threshold: number
    location: string
    requested_accuracy_level: number
    time_threshold: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Geoclue.Client */
    call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean
    call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    emit_location_updated(arg_old: string, arg_new: string): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Geoclue.ClientProxy */
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_location_updated(arg_old: string, arg_new: string): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ClientProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ClientProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ClientProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ClientProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Geoclue.Client */
    connect(sigName: "handle-start", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-stop", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "location-updated", callback: (($obj: ClientProxy, arg_old: string, arg_new: string) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: ClientProxy, arg_old: string, arg_new: string) => void)): number
    emit(sigName: "location-updated", arg_old: string, arg_new: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::desktop-id", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::distance-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientProxy_ConstructProps)
    _init (config?: ClientProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ClientProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static create(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static create_finish(result: Gio.AsyncResult): ClientProxy
    static create_full(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static create_full_finish(result: Gio.AsyncResult): ClientProxy
    static create_full_sync(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null): ClientProxy
    static create_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null): ClientProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ClientSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    active?: boolean
    desktop_id?: string
    distance_threshold?: number
    location?: string
    requested_accuracy_level?: number
    time_threshold?: number
}
export class ClientSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue.Client */
    active: boolean
    desktop_id: string
    distance_threshold: number
    location: string
    requested_accuracy_level: number
    time_threshold: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Geoclue.Client */
    call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(cancellable?: Gio.Cancellable | null): boolean
    call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    emit_location_updated(arg_old: string, arg_new: string): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Geoclue.ClientSkeleton */
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_location_updated(arg_old: string, arg_new: string): void
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Geoclue.Client */
    connect(sigName: "handle-start", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-stop", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "location-updated", callback: (($obj: ClientSkeleton, arg_old: string, arg_new: string) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: ClientSkeleton, arg_old: string, arg_new: string) => void)): number
    emit(sigName: "location-updated", arg_old: string, arg_new: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::desktop-id", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::distance-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientSkeleton_ConstructProps)
    _init (config?: ClientSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface LocationProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    accuracy?: number
    altitude?: number
    description?: string
    heading?: number
    latitude?: number
    longitude?: number
    speed?: number
    timestamp?: GLib.Variant
}
export class LocationProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Geoclue.LocationProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: LocationProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: LocationProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: LocationProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: LocationProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accuracy", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::altitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::heading", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::speed", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocationProxy_ConstructProps)
    _init (config?: LocationProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): LocationProxy
    static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface LocationSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    accuracy?: number
    altitude?: number
    description?: string
    heading?: number
    latitude?: number
    longitude?: number
    speed?: number
    timestamp?: GLib.Variant
}
export class LocationSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Geoclue.LocationSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: LocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: LocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accuracy", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::altitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::heading", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::speed", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocationSkeleton_ConstructProps)
    _init (config?: LocationSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LocationSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    available_accuracy_level?: number
    in_use?: boolean
}
export class ManagerProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Geoclue.Manager */
    available_accuracy_level: number
    in_use: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Geoclue.Manager */
    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_agent_finish(res: Gio.AsyncResult): boolean
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean
    call_create_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_client_finish(res: Gio.AsyncResult): boolean
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Geoclue.ManagerProxy */
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    connect_after(sigName: "handle-add-agent", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, arg_id: string): void
    connect(sigName: "handle-create-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-create-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-delete-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean)): number
    connect_after(sigName: "handle-delete-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean)): number
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, arg_client: string): void
    connect(sigName: "handle-get-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-use", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ManagerProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    available_accuracy_level?: number
    in_use?: boolean
}
export class ManagerSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue.Manager */
    available_accuracy_level: number
    in_use: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Geoclue.Manager */
    call_add_agent(arg_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_agent_finish(res: Gio.AsyncResult): boolean
    call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean
    call_create_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_create_client_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_delete_client(arg_client: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_client_finish(res: Gio.AsyncResult): boolean
    call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    call_get_client_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Geoclue.ManagerSkeleton */
    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    connect_after(sigName: "handle-add-agent", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, arg_id: string): void
    connect(sigName: "handle-create-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-create-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-delete-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean)): number
    connect_after(sigName: "handle-delete-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean)): number
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, arg_client: string): void
    connect(sigName: "handle-get-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-use", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ManagerSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface Simple_ConstructProps extends GObject.Object_ConstructProps {
    accuracy_level?: AccuracyLevel
    desktop_id?: string
    distance_threshold?: number
    time_threshold?: number
}
export class Simple {
    /* Properties of Geoclue.Simple */
    readonly client: ClientProxy
    readonly location: LocationProxy
    /* Fields of Geoclue.Simple */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Geoclue.Simple */
    get_client(): ClientProxy
    get_location(): Location
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Geoclue.Simple */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Simple_ConstructProps)
    _init (config?: Simple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(result: Gio.AsyncResult): Simple
    static new_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable?: Gio.Cancellable | null): Simple
    static new_with_thresholds_sync(desktop_id: string, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable?: Gio.Cancellable | null): Simple
    static new_with_thresholds(desktop_id: string, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export abstract class ClientIface {
    /* Fields of Geoclue.ClientIface */
    parent_iface: GObject.TypeInterface
    handle_start: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    handle_stop: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    get_active: (object: Client) => boolean
    get_desktop_id: (object: Client) => string | null
    get_distance_threshold: (object: Client) => number
    get_location: (object: Client) => string | null
    get_requested_accuracy_level: (object: Client) => number
    get_time_threshold: (object: Client) => number
    location_updated: (object: Client, arg_old: string, arg_new: string) => void
    static name: string
}
export abstract class ClientProxyClass {
    /* Fields of Geoclue.ClientProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ClientProxyPrivate {
    static name: string
}
export abstract class ClientSkeletonClass {
    /* Fields of Geoclue.ClientSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ClientSkeletonPrivate {
    static name: string
}
export abstract class LocationIface {
    /* Fields of Geoclue.LocationIface */
    parent_iface: GObject.TypeInterface
    get_accuracy: (object: Location) => number
    get_altitude: (object: Location) => number
    get_description: (object: Location) => string | null
    get_heading: (object: Location) => number
    get_latitude: (object: Location) => number
    get_longitude: (object: Location) => number
    get_speed: (object: Location) => number
    get_timestamp: (object: Location) => GLib.Variant | null
    static name: string
}
export abstract class LocationProxyClass {
    /* Fields of Geoclue.LocationProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class LocationProxyPrivate {
    static name: string
}
export abstract class LocationSkeletonClass {
    /* Fields of Geoclue.LocationSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class LocationSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of Geoclue.ManagerIface */
    parent_iface: GObject.TypeInterface
    handle_add_agent: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean
    handle_create_client: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handle_delete_client: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_client: string) => boolean
    handle_get_client: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    get_available_accuracy_level: (object: Manager) => number
    get_in_use: (object: Manager) => boolean
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of Geoclue.ManagerProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of Geoclue.ManagerSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class SimpleClass {
    /* Fields of Geoclue.SimpleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SimplePrivate {
    static name: string
}