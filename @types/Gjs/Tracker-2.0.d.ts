/**
 * Tracker-2.0
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
export enum SparqlConnectionFlags {
    NONE,
    READONLY,
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
export enum Error {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
export enum SparqlBuilderState {
    UPDATE,
    INSERT,
    DELETE,
    SUBJECT,
    PREDICATE,
    OBJECT,
    BLANK,
    WHERE,
    EMBEDDED_INSERT,
    GRAPH,
}
export enum NotifierFlags {
    NONE,
    QUERY_URN,
    QUERY_LOCATION,
    NOTIFY_UNEXTRACTED,
}
export const DBUS_SERVICE: string
export const DBUS_INTERFACE_RESOURCES: string
export const DBUS_OBJECT_RESOURCES: string
export const DBUS_INTERFACE_STATISTICS: string
export const DBUS_OBJECT_STATISTICS: string
export const DBUS_INTERFACE_STATUS: string
export const DBUS_OBJECT_STATUS: string
export const DBUS_INTERFACE_STEROIDS: string
export const DBUS_OBJECT_STEROIDS: string
export function check_version(required_major: number, required_minor: number, required_micro: number): string
export function sparql_escape_uri(uri: string): string
export function sparql_escape_string(literal: string): string
export function sparql_get_uuid_urn(): string
export interface NamespaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class NamespaceManager {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.NamespaceManager */
    add_prefix(prefix: string, ns: string): void
    expand_uri(compact_uri: string): string
    foreach(func: GLib.HFunc): void
    has_prefix(prefix: string): boolean
    lookup_prefix(prefix: string): string
    print_turtle(): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
    classes?: string[]
}
export class Notifier {
    /* Fields of Tracker-2.0.Tracker.Notifier */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Tracker-2.0.Tracker.Notifier */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Tracker-2.0.Tracker.Notifier */
    connect(sigName: "events", callback: (($obj: Notifier, events: NotifierEvent[]) => void)): number
    connect_after(sigName: "events", callback: (($obj: Notifier, events: NotifierEvent[]) => void)): number
    emit(sigName: "events", events: NotifierEvent[]): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Static methods and pseudo-constructors */
    static new(classes: string[] | null, flags: NotifierFlags, cancellable?: Gio.Cancellable | null): Notifier
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Resource_ConstructProps extends GObject.Object_ConstructProps {
    identifier?: string
}
export class Resource {
    /* Properties of Tracker-2.0.Tracker.Resource */
    identifier: string
    /* Fields of Tracker-2.0.Tracker.Resource */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.Resource */
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
    get_values(property_uri: string): any[]
    identifier_compare_func(identifier: string): number
    print_jsonld(namespaces?: NamespaceManager | null): string
    print_sparql_update(namespaces?: NamespaceManager | null, graph_id?: string | null): string
    print_turtle(namespaces?: NamespaceManager | null): string
    set_boolean(property_uri: string, value: boolean): void
    set_double(property_uri: string, value: number): void
    set_gvalue(property_uri: string, value: any): void
    set_identifier(identifier?: string | null): void
    set_int(property_uri: string, value: number): void
    set_int64(property_uri: string, value: number): void
    set_relation(property_uri: string, resource: Resource): void
    set_string(property_uri: string, value: string): void
    set_uri(property_uri: string, value: string): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
    static new(identifier: string): Resource
    static $gtype: GObject.Type
}
export interface SparqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class SparqlBuilder {
    /* Properties of Tracker-2.0.Tracker.SparqlBuilder */
    readonly result: string
    length: number
    readonly state: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlBuilder */
    insert_open(graph?: string | null): void
    insert_silent_open(graph?: string | null): void
    insert_close(): void
    delete_open(graph?: string | null): void
    delete_close(): void
    graph_open(graph: string): void
    graph_close(): void
    where_open(): void
    where_close(): void
    subject_variable(var_name: string): void
    object_variable(var_name: string): void
    subject_iri(iri: string): void
    subject(s: string): void
    predicate_iri(iri: string): void
    predicate(s: string): void
    object_iri(iri: string): void
    object(s: string): void
    object_string(literal: string): void
    object_unvalidated(value: string): void
    object_boolean(literal: boolean): void
    object_int64(literal: number): void
    object_date(literal: number): /* literal */ number
    object_double(literal: number): void
    object_blank_open(): void
    object_blank_close(): void
    prepend(raw: string): void
    append(raw: string): void
    get_result(): string
    get_length(): number
    get_state(): any
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlBuilder_ConstructProps)
    _init (config?: SparqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static update(): SparqlBuilder
    static embedded_insert(): SparqlBuilder
    static new(): SparqlBuilder
    static $gtype: GObject.Type
}
export interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SparqlConnection {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlConnection */
    query(sparql: string, cancellable?: Gio.Cancellable | null): any
    query_async(sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    query_finish(_res_: Gio.AsyncResult): any
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    update_finish(_res_: Gio.AsyncResult): void
    update_array_async(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    update_array_finish(_res_: Gio.AsyncResult): any[] | null
    update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    update_blank_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    load_async(file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    load_finish(_res_: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): any | null
    statistics_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    statistics_finish(_res_: Gio.AsyncResult): any | null
    get_namespace_manager(): NamespaceManager | null
    query_statement(sparql: string, cancellable?: Gio.Cancellable | null): any | null
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
    /* Virtual methods of Tracker-2.0.Tracker.SparqlConnection */
    vfunc_query(sparql: string, cancellable?: Gio.Cancellable | null): any
    vfunc_query_async(sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_query_finish(_res_: Gio.AsyncResult): any
    vfunc_update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    vfunc_update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_finish(_res_: Gio.AsyncResult): void
    vfunc_update_array_async(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_array_finish(_res_: Gio.AsyncResult): any[] | null
    vfunc_update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    vfunc_update_blank_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    vfunc_load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    vfunc_load_async(file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(_res_: Gio.AsyncResult): void
    vfunc_statistics(cancellable?: Gio.Cancellable | null): any | null
    vfunc_statistics_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_statistics_finish(_res_: Gio.AsyncResult): any | null
    vfunc_get_namespace_manager(): NamespaceManager | null
    vfunc_query_statement(sparql: string, cancellable?: Gio.Cancellable | null): any | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
    static get_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    static get_finish(_res_: Gio.AsyncResult): any
    static get(cancellable?: Gio.Cancellable | null): any
    static remote_new(uri_base: string): any
    static local_new(flags: any, store: Gio.File, journal?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null): any
    static local_new_async(flags: any, store: Gio.File, journal?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    static local_new_finish(_res_: Gio.AsyncResult): any
    static set_domain(domain?: string | null): void
    static get_domain(): string | null
    static set_dbus_connection(dbus_connection: Gio.DBusConnection): void
    static get_dbus_connection(): Gio.DBusConnection | null
    static $gtype: GObject.Type
}
export interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    connection?: any
}
export class SparqlCursor {
    /* Properties of Tracker-2.0.Tracker.SparqlCursor */
    connection: any
    readonly n_columns: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlCursor */
    get_value_type(column: number): any
    get_variable_name(column: number): string | null
    get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable?: Gio.Cancellable | null): boolean
    next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    next_finish(_res_: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    get_integer(column: number): number
    get_double(column: number): number
    get_boolean(column: number): boolean
    is_bound(column: number): boolean
    get_connection(): any
    set_connection(value: any): void
    get_n_columns(): number
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
    /* Virtual methods of Tracker-2.0.Tracker.SparqlCursor */
    vfunc_get_value_type(column: number): any
    vfunc_get_variable_name(column: number): string | null
    vfunc_get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    vfunc_next(cancellable?: Gio.Cancellable | null): boolean
    vfunc_next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_next_finish(_res_: Gio.AsyncResult): boolean
    vfunc_rewind(): void
    vfunc_close(): void
    vfunc_get_integer(column: number): number
    vfunc_get_double(column: number): number
    vfunc_get_boolean(column: number): boolean
    vfunc_is_bound(column: number): boolean
    vfunc_get_n_columns(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
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
    sparql?: string
    connection?: any
}
export class SparqlStatement {
    /* Properties of Tracker-2.0.Tracker.SparqlStatement */
    sparql: string
    connection: any
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlStatement */
    bind_int(name: string, value: number): void
    bind_boolean(name: string, value: boolean): void
    bind_string(name: string, value: string): void
    bind_double(name: string, value: number): void
    execute(cancellable?: Gio.Cancellable | null): any
    execute_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    execute_finish(_res_: Gio.AsyncResult): any
    get_sparql(): string
    set_sparql(value: string): void
    get_connection(): any
    set_connection(value: any): void
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
    /* Virtual methods of Tracker-2.0.Tracker.SparqlStatement */
    vfunc_bind_int(name: string, value: number): void
    vfunc_bind_boolean(name: string, value: boolean): void
    vfunc_bind_string(name: string, value: string): void
    vfunc_bind_double(name: string, value: number): void
    vfunc_execute(cancellable?: Gio.Cancellable | null): any
    vfunc_execute_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_execute_finish(_res_: Gio.AsyncResult): any
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlStatement_ConstructProps)
    _init (config?: SparqlStatement_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class NamespaceManagerClass {
    /* Fields of Tracker-2.0.Tracker.NamespaceManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class NotifierClass {
    /* Fields of Tracker-2.0.Tracker.NotifierClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class NotifierEvent {
    /* Methods of Tracker-2.0.Tracker.NotifierEvent */
    get_event_type(): NotifierEventType
    get_id(): number
    get_location(): string | null
    get_type(): string
    get_urn(): string
    static name: string
}
export abstract class ResourceClass {
    /* Fields of Tracker-2.0.Tracker.ResourceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SparqlBuilderClass {
    static name: string
}
export class SparqlBuilderPrivate {
    static name: string
}
export abstract class SparqlConnectionClass {
    /* Fields of Tracker-2.0.Tracker.SparqlConnectionClass */
    query: any
    query_async: any
    query_finish: any
    update: any
    update_async: any
    update_finish: any
    update_array_async: any
    update_array_finish: any
    update_blank: any
    update_blank_async: any
    update_blank_finish: any
    load: any
    load_async: any
    load_finish: any
    statistics: any
    statistics_async: any
    statistics_finish: any
    get_namespace_manager: () => NamespaceManager | null
    query_statement: any
    static name: string
}
export class SparqlConnectionPrivate {
    static name: string
}
export abstract class SparqlCursorClass {
    /* Fields of Tracker-2.0.Tracker.SparqlCursorClass */
    get_value_type: (column: number) => any
    get_variable_name: (column: number) => string | null
    get_string: (column: number) => [ /* returnType */ string | null, /* length */ number ]
    next: any
    next_async: any
    next_finish: any
    rewind: () => void
    close: () => void
    get_integer: (column: number) => number
    get_double: (column: number) => number
    get_boolean: (column: number) => boolean
    is_bound: (column: number) => boolean
    static name: string
}
export class SparqlCursorPrivate {
    static name: string
}
export abstract class SparqlStatementClass {
    /* Fields of Tracker-2.0.Tracker.SparqlStatementClass */
    bind_int: (name: string, value: number) => void
    bind_boolean: (name: string, value: boolean) => void
    bind_string: (name: string, value: string) => void
    bind_double: (name: string, value: number) => void
    execute: any
    execute_async: any
    execute_finish: any
    static name: string
}
export class SparqlStatementPrivate {
    static name: string
}