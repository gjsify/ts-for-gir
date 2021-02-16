/**
 * GSSDP-1.0
 */

import * as Gjs from './Gjs';
import * as Soup from './Soup-2.4';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

export enum Error {
    NO_IP_ADDRESS,
    FAILED,
}
export const ALL_RESOURCES: string
export function error_quark(): GLib.Quark
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    active?: boolean
    host_ip?: string
    interface?: string
    msearch_port?: number
    network?: string
    server_id?: string
    socket_ttl?: number
}
export class Client {
    /* Properties of GSSDP.Client */
    active: boolean
    host_ip: string
    network: string
    server_id: string
    /* Fields of GSSDP.Client */
    parent: GObject.Object
    priv: ClientPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSSDP.Client */
    add_cache_entry(ip_address: string, user_agent: string): void
    append_header(name: string, value: string): void
    clear_headers(): void
    get_active(): boolean
    get_host_ip(): string
    get_interface(): string
    get_main_context(): GLib.MainContext
    get_network(): string
    get_server_id(): string
    guess_user_agent(ip_address: string): string
    remove_header(name: string): void
    set_network(network: string): void
    set_server_id(server_id: string): void
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
    /* Virtual methods of GSSDP.Client */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GSSDP.Client */
    connect(sigName: "message-received", callback: (($obj: Client, from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders) => void)): number
    connect_after(sigName: "message-received", callback: (($obj: Client, from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders) => void)): number
    emit(sigName: "message-received", from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(main_context?: GLib.MainContext | null, iface?: string | null): Client
    static new_with_port(iface: string | null, msearch_port: number): Client
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ResourceBrowser_ConstructProps extends GObject.Object_ConstructProps {
    active?: boolean
    client?: Client
    mx?: number
    target?: string
}
export class ResourceBrowser {
    /* Properties of GSSDP.ResourceBrowser */
    active: boolean
    mx: number
    target: string
    /* Fields of GSSDP.ResourceBrowser */
    parent: GObject.Object
    priv: ResourceBrowserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSSDP.ResourceBrowser */
    get_active(): boolean
    get_client(): Client
    get_mx(): number
    get_target(): string
    rescan(): boolean
    set_active(active: boolean): void
    set_mx(mx: number): void
    set_target(target: string): void
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
    /* Virtual methods of GSSDP.ResourceBrowser */
    vfunc_resource_unavailable(usn: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GSSDP.ResourceBrowser */
    connect(sigName: "resource-available", callback: (($obj: ResourceBrowser, usn: string, locations: string[]) => void)): number
    connect_after(sigName: "resource-available", callback: (($obj: ResourceBrowser, usn: string, locations: string[]) => void)): number
    emit(sigName: "resource-available", usn: string, locations: string[]): void
    connect(sigName: "resource-unavailable", callback: (($obj: ResourceBrowser, usn: string) => void)): number
    connect_after(sigName: "resource-unavailable", callback: (($obj: ResourceBrowser, usn: string) => void)): number
    emit(sigName: "resource-unavailable", usn: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mx", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::target", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResourceBrowser_ConstructProps)
    _init (config?: ResourceBrowser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client, target: string): ResourceBrowser
    static $gtype: GObject.Type
}
export interface ResourceGroup_ConstructProps extends GObject.Object_ConstructProps {
    available?: boolean
    client?: Client
    max_age?: number
    message_delay?: number
}
export class ResourceGroup {
    /* Properties of GSSDP.ResourceGroup */
    available: boolean
    max_age: number
    message_delay: number
    /* Fields of GSSDP.ResourceGroup */
    parent: GObject.Object
    priv: ResourceGroupPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSSDP.ResourceGroup */
    add_resource(target: string, usn: string, locations: string[]): number
    add_resource_simple(target: string, usn: string, location: string): number
    get_available(): boolean
    get_client(): Client
    get_max_age(): number
    get_message_delay(): number
    remove_resource(resource_id: number): void
    set_available(available: boolean): void
    set_max_age(max_age: number): void
    set_message_delay(message_delay: number): void
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
    connect(sigName: "notify", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::available", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-age", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-delay", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-delay", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResourceGroup_ConstructProps)
    _init (config?: ResourceGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client): ResourceGroup
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of GSSDP.ClientClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class ResourceBrowserClass {
    /* Fields of GSSDP.ResourceBrowserClass */
    parent_class: GObject.ObjectClass
    resource_unavailable: (resource_browser: ResourceBrowser, usn: string) => void
    static name: string
}
export class ResourceBrowserPrivate {
    static name: string
}
export abstract class ResourceGroupClass {
    /* Fields of GSSDP.ResourceGroupClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ResourceGroupPrivate {
    static name: string
}