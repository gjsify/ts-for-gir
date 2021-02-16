/**
 * Tracker-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum NotifierEventType {
    CREATE,
    DELETE,
    UPDATE,
}
export enum SparqlError {
    ERROR_CONSTRAINT,
    ERROR_INTERNAL,
    ERROR_NO_SPACE,
    ERROR_ONTOLOGY_NOT_FOUND,
    ERROR_OPEN_ERROR,
    ERROR_PARSE,
    ERROR_QUERY_FAILED,
    ERROR_TYPE,
    ERROR_UNKNOWN_CLASS,
    ERROR_UNKNOWN_GRAPH,
    ERROR_UNKNOWN_PROPERTY,
    ERROR_UNSUPPORTED,
    N_ERRORS,
}
export enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
export enum SparqlConnectionFlags {
    NONE,
    READONLY,
    FTS_ENABLE_STEMMER,
    FTS_ENABLE_UNACCENT,
    FTS_ENABLE_STOP_WORDS,
    FTS_IGNORE_NUMBERS,
}
export const PREFIX_DC: string
export const PREFIX_MFO: string
export const PREFIX_NAO: string
export const PREFIX_NCO: string
export const PREFIX_NFO: string
export const PREFIX_NIE: string
export const PREFIX_NMM: string
export const PREFIX_NRL: string
export const PREFIX_OSINFO: string
export const PREFIX_RDF: string
export const PREFIX_RDFS: string
export const PREFIX_SLO: string
export const PREFIX_TRACKER: string
export const PREFIX_XSD: string
export function check_version(required_major: number, required_minor: number, required_micro: number): string
export function sparql_error_quark(): GLib.Quark
export function sparql_escape_string(literal: string): string
export function sparql_escape_uri(uri: string): string
export function sparql_get_ontology_nepomuk(): Gio.File
export function sparql_get_uuid_urn(): string
export interface Batch_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
}
export class Batch {
    /* Fields of Tracker.Batch */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.Batch */
    add_resource(graph: string, resource: Resource): void
    add_sparql(sparql: string): void
    execute(cancellable?: Gio.Cancellable | null): boolean
    execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    execute_finish(res: Gio.AsyncResult): boolean
    get_connection(): SparqlConnection
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
    connect(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Batch_ConstructProps)
    _init (config?: Batch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
    sparql_connection?: SparqlConnection
}
export class Endpoint {
    /* Fields of Tracker.Endpoint */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.Endpoint */
    get_sparql_connection(): SparqlConnection
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
    connect(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Endpoint_ConstructProps)
    _init (config?: Endpoint_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EndpointDBus_ConstructProps extends Endpoint_ConstructProps {
    dbus_connection?: Gio.DBusConnection
    object_path?: string
}
export class EndpointDBus {
    /* Fields of Tracker.Endpoint */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.Endpoint */
    get_sparql_connection(): SparqlConnection
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
    /* Virtual methods of Tracker.EndpointDBus */
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
    connect(sigName: "notify", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EndpointDBus_ConstructProps)
    _init (config?: EndpointDBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sparql_connection: SparqlConnection, dbus_connection: Gio.DBusConnection, object_path?: string | null, cancellable?: Gio.Cancellable | null): EndpointDBus
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface EndpointHttp_ConstructProps extends Endpoint_ConstructProps {
    http_certificate?: Gio.TlsCertificate
    http_port?: number
}
export class EndpointHttp {
    /* Fields of Tracker.Endpoint */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.Endpoint */
    get_sparql_connection(): SparqlConnection
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
    /* Virtual methods of Tracker.EndpointHttp */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Tracker.EndpointHttp */
    connect(sigName: "block-remote-address", callback: (($obj: EndpointHttp, address: Gio.SocketAddress) => boolean)): number
    connect_after(sigName: "block-remote-address", callback: (($obj: EndpointHttp, address: Gio.SocketAddress) => boolean)): number
    emit(sigName: "block-remote-address", address: Gio.SocketAddress): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EndpointHttp_ConstructProps)
    _init (config?: EndpointHttp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sparql_connection: SparqlConnection, port: number, certificate?: Gio.TlsCertificate | null, cancellable?: Gio.Cancellable | null): EndpointHttp
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface NamespaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class NamespaceManager {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.NamespaceManager */
    add_prefix(prefix: string, ns: string): void
    expand_uri(compact_uri: string): string
    foreach(func: GLib.HFunc): void
    has_prefix(prefix: string): boolean
    lookup_prefix(prefix: string): string | null
    print_turtle(): string
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
    connect(sigName: "notify", callback: (($obj: NamespaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamespaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NamespaceManager_ConstructProps)
    _init (config?: NamespaceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NamespaceManager
    static get_default(): NamespaceManager
    static $gtype: GObject.Type
}
export interface Notifier_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
}
export class Notifier {
    /* Fields of Tracker.Notifier */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.Notifier */
    signal_subscribe(connection: Gio.DBusConnection, service: string, object_path?: string | null, graph?: string | null): number
    signal_unsubscribe(handler_id: number): void
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
    /* Signals of Tracker.Notifier */
    connect(sigName: "events", callback: (($obj: Notifier, service: string, graph: string, events: NotifierEvent[]) => void)): number
    connect_after(sigName: "events", callback: (($obj: Notifier, service: string, graph: string, events: NotifierEvent[]) => void)): number
    emit(sigName: "events", service: string, graph: string, events: NotifierEvent[]): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notifier_ConstructProps)
    _init (config?: Notifier_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Resource_ConstructProps extends GObject.Object_ConstructProps {
    identifier?: string
}
export class Resource {
    /* Properties of Tracker.Resource */
    identifier: string
    /* Fields of Tracker.Resource */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.Resource */
    add_boolean(property_uri: string, value: boolean): void
    add_double(property_uri: string, value: number): void
    add_gvalue(property_uri: string, value: any): void
    add_int(property_uri: string, value: number): void
    add_int64(property_uri: string, value: number): void
    add_relation(property_uri: string, resource: Resource): void
    add_string(property_uri: string, value: string): void
    add_uri(property_uri: string, value: string): void
    get_first_boolean(property_uri: string): boolean
    get_first_double(property_uri: string): number
    get_first_int(property_uri: string): number
    get_first_int64(property_uri: string): number
    get_first_relation(property_uri: string): Resource
    get_first_string(property_uri: string): string
    get_first_uri(property_uri: string): string
    get_identifier(): string
    get_properties(): string[]
    get_property_overwrite(property_uri: string): boolean
    get_values(property_uri: string): any
    identifier_compare_func(identifier: string): number
    print_jsonld(namespaces?: NamespaceManager | null): string
    print_sparql_update(namespaces?: NamespaceManager | null, graph_id?: string | null): string
    print_turtle(namespaces?: NamespaceManager | null): string
    serialize(): GLib.Variant
    set_boolean(property_uri: string, value: boolean): void
    set_double(property_uri: string, value: number): void
    set_gvalue(property_uri: string, value: any): void
    set_identifier(identifier?: string | null): void
    set_int(property_uri: string, value: number): void
    set_int64(property_uri: string, value: number): void
    set_relation(property_uri: string, resource: Resource): void
    set_string(property_uri: string, value: string): void
    set_uri(property_uri: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Resource_ConstructProps)
    _init (config?: Resource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(identifier?: string | null): Resource
    static deserialize(variant: GLib.Variant): Resource
    static $gtype: GObject.Type
}
export interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SparqlConnection {
    /* Fields of Tracker.SparqlConnection */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.SparqlConnection */
    close(): void
    close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(res: Gio.AsyncResult): boolean
    create_batch(): Batch
    create_notifier(): Notifier
    get_namespace_manager(): NamespaceManager
    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    query_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(res: Gio.AsyncResult): SparqlCursor
    query_statement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null
    update(sparql: string, cancellable?: Gio.Cancellable | null): void
    update_array_async(sparql: string, sparql_length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_array_finish(res: Gio.AsyncResult): boolean
    update_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_blank(sparql: string, cancellable?: Gio.Cancellable | null): GLib.Variant
    update_blank_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_blank_finish(res: Gio.AsyncResult): GLib.Variant
    update_finish(res: Gio.AsyncResult): void
    update_resource(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null): boolean
    update_resource_async(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_resource_finish(res: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlConnection_ConstructProps)
    _init (config?: SparqlConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static bus_new(service_name: string, object_path?: string | null, dbus_connection?: Gio.DBusConnection | null): SparqlConnection
    static new(flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null): SparqlConnection
    static new_finish(result: Gio.AsyncResult): SparqlConnection
    static remote_new(uri_base: string): SparqlConnection
    static new_async(flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
}
export class SparqlCursor {
    /* Properties of Tracker.SparqlCursor */
    readonly n_columns: number
    /* Fields of Tracker.SparqlCursor */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.SparqlCursor */
    close(): void
    get_boolean(column: number): boolean
    get_connection(): SparqlConnection
    get_double(column: number): number
    get_integer(column: number): number
    get_n_columns(): number
    get_string(column: number): [ /* returnType */ string | null, /* length */ number | null ]
    get_value_type(column: number): SparqlValueType
    get_variable_name(column: number): string
    is_bound(column: number): boolean
    next(cancellable?: Gio.Cancellable | null): boolean
    next_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(res: Gio.AsyncResult): boolean
    rewind(): void
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
    connect(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlCursor_ConstructProps)
    _init (config?: SparqlCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SparqlStatement_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
    sparql?: string
}
export class SparqlStatement {
    /* Fields of Tracker.SparqlStatement */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker.SparqlStatement */
    bind_boolean(name: string, value: boolean): void
    bind_double(name: string, value: number): void
    bind_int(name: string, value: number): void
    bind_string(name: string, value: string): void
    clear_bindings(): void
    execute(cancellable?: Gio.Cancellable | null): SparqlCursor
    execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    execute_finish(res: Gio.AsyncResult): SparqlCursor
    get_connection(): SparqlConnection
    get_sparql(): string
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
    connect(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlStatement_ConstructProps)
    _init (config?: SparqlStatement_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class BatchClass {
    static name: string
}
export abstract class EndpointClass {
    static name: string
}
export abstract class NamespaceManagerClass {
    /* Fields of Tracker.NamespaceManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class NotifierClass {
    static name: string
}
export class NotifierEvent {
    /* Methods of Tracker.NotifierEvent */
    get_event_type(): NotifierEventType
    get_id(): number
    get_urn(): string
    static name: string
}
export abstract class ResourceClass {
    static name: string
}
export abstract class SparqlConnectionClass {
    static name: string
}
export abstract class SparqlCursorClass {
    static name: string
}
export abstract class SparqlStatementClass {
    static name: string
}