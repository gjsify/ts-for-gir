/**
 * Dee-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ICUError {
    BAD_RULE,
    BAD_ID,
    UNKNOWN,
}
export enum SharedModelAccessMode {
    WORLD_WRITABLE,
    LEADER_WRITABLE,
}
export enum SharedModelError {
    SHARED_MODEL_ERROR_LEADER_INVALIDATED,
}
export enum SharedModelFlushMode {
    AUTOMATIC,
    MANUAL,
}
export enum TransactionError {
    CONCURRENT_MODIFICATION,
    COMMITTED,
}
export enum TermMatchFlag {
    EXACT,
    PREFIX,
}
export const PEER_DBUS_IFACE: string
export const SEQUENCE_MODEL_DBUS_IFACE: string
export const SHARED_MODEL_DBUS_IFACE: string
export function filter_new(map_func: FilterMapFunc, map_notify: FilterMapNotify): /* out_filter */ Filter
export function filter_new_collator(column: number): /* out_filter */ Filter
export function filter_new_collator_desc(column: number): /* out_filter */ Filter
export function filter_new_for_any_column(column: number, value: GLib.Variant): /* out_filter */ Filter
export function filter_new_for_key_column(column: number, key: string): /* out_filter */ Filter
export function filter_new_regex(column: number, regex: GLib.Regex): /* out_filter */ Filter
export function filter_new_sort(cmp_row: CompareRowFunc): /* out_filter */ Filter
export function icu_error_quark(): GLib.Quark
export function model_reader_new(reader_func: ModelReaderFunc): /* out_reader */ ModelReader
export function model_reader_new_for_int32_column(column: number): /* out_reader */ ModelReader
export function model_reader_new_for_string_column(column: number): /* out_reader */ ModelReader
export function model_reader_new_for_uint32_column(column: number): /* out_reader */ ModelReader
export function resource_manager_get_default(): ResourceManager
export function serializable_parse(data: GLib.Variant, type: GObject.Type): GObject.Object
export function serializable_parse_external(data: GLib.Variant): GObject.Object
export interface CollatorFunc {
    (input: string): string
}
export interface CompareRowFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
export interface CompareRowSizedFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
export interface FilterMapFunc {
    (orig_model: Model, filter_model: FilterModel): void
}
export interface FilterMapNotify {
    (orig_model: Model, orig_iter: ModelIter, filter_model: FilterModel): boolean
}
export interface IndexIterFunc {
    (key: string, rows: ResultSet): boolean
}
export interface ModelReaderFunc {
    (model: Model, iter: ModelIter): string
}
export interface SerializableParseFunc {
    (data: GLib.Variant): GObject.Object
}
export interface TermFilterFunc {
    (terms_in: TermList, terms_out: TermList): void
}
export class Model {
    /* Methods of Dee.Model */
    append_row(row_members: GLib.Variant[]): ModelIter
    begin_changeset(): void
    clear(): void
    clear_tag(iter: ModelIter, tag: ModelTag): void
    end_changeset(): void
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    get_column_index(column_name: string): number
    get_column_names(): string[]
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    get_iter_at_row(row: number): ModelIter
    get_last_iter(): ModelIter
    get_n_columns(): number
    get_n_rows(): number
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] | null ]
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    get_vardict_schema(column: number): GLib.HashTable
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    is_first(iter: ModelIter): boolean
    is_last(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prepend_row(row_members: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    set_column_names_full(column_names: string[]): void
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    set_schema_full(column_schemas: string[]): void
    set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Virtual methods of Dee.Model */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    vfunc_clear(): void
    vfunc_end_changeset(): void
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    vfunc_get_column_index(column_name: string): number
    vfunc_get_column_names(): string[]
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    vfunc_get_iter_at_row(row: number): ModelIter
    vfunc_get_last_iter(): ModelIter
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    vfunc_is_first(iter: ModelIter): boolean
    vfunc_is_last(iter: ModelIter): boolean
    vfunc_next(iter: ModelIter): ModelIter
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    vfunc_prev(iter: ModelIter): ModelIter
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    vfunc_set_column_names_full(column_names: string[]): void
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    vfunc_set_schema_full(column_schemas: string[]): void
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: Model) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: Model) => void)): number
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (($obj: Model) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: Model) => void)): number
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: (($obj: Model, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: Model, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: (($obj: Model, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: Model, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: (($obj: Model, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: Model, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    static name: string
}
export class ResourceManager {
    /* Methods of Dee.ResourceManager */
    load(resource_name: string): GObject.Object
    store(resource: Serializable, resource_name: string): boolean
    /* Virtual methods of Dee.ResourceManager */
    vfunc_load(resource_name: string): GObject.Object
    vfunc_store(resource: Serializable, resource_name: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_default(): ResourceManager
}
export class ResultSet {
    /* Methods of Dee.ResultSet */
    get_model(): Model
    get_n_rows(): number
    has_next(): boolean
    next(): ModelIter
    peek(): ModelIter
    seek(pos: number): void
    tell(): number
    /* Virtual methods of Dee.ResultSet */
    vfunc_get_model(): Model
    vfunc_get_n_rows(): number
    vfunc_has_next(): boolean
    vfunc_next(): ModelIter
    vfunc_peek(): ModelIter
    vfunc_seek(pos: number): void
    vfunc_tell(): number
    static name: string
}
export class Serializable {
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.Serializable */
    vfunc_serialize(): GLib.Variant
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
}
export interface Analyzer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Analyzer {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Analyzer */
    add_term_filter(filter_func: TermFilterFunc): void
    analyze(data: string, terms_out?: TermList | null, colkeys_out?: TermList | null): void
    collate_cmp(key1: string, key2: string): number
    collate_key(data: string): string
    tokenize(data: string, terms_out: TermList): void
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
    /* Virtual methods of Dee.Analyzer */
    vfunc_add_term_filter(filter_func: TermFilterFunc): void
    vfunc_analyze(data: string, terms_out?: TermList | null, colkeys_out?: TermList | null): void
    vfunc_collate_cmp(key1: string, key2: string): number
    vfunc_collate_key(data: string): string
    vfunc_tokenize(data: string, terms_out: TermList): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Analyzer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Analyzer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Analyzer_ConstructProps)
    _init (config?: Analyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Analyzer
    static collate_cmp_func(key1: string, key2: string, analyzer?: object | null): number
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends Peer_ConstructProps {
    bus_address?: string
}
export class Client {
    /* Properties of Dee.Peer */
    readonly swarm_leader: string
    swarm_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Peer */
    get_connections(): Gio.DBusConnection[]
    get_swarm_leader(): string
    get_swarm_name(): string
    is_swarm_leader(): boolean
    is_swarm_owner(): boolean
    list_peers(): string[]
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
    /* Virtual methods of Dee.Peer */
    vfunc_connection_acquired(connection: Gio.DBusConnection): void
    vfunc_connection_closed(connection: Gio.DBusConnection): void
    vfunc_get_connections(): Gio.DBusConnection[]
    vfunc_get_swarm_leader(): string
    vfunc_is_swarm_leader(): boolean
    vfunc_list_peers(): string[]
    vfunc_peer_found(name: string): void
    vfunc_peer_lost(name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.Peer */
    connect(sigName: "connection-acquired", callback: (($obj: Client, object: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-acquired", callback: (($obj: Client, object: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    connect(sigName: "connection-closed", callback: (($obj: Client, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Client, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    connect(sigName: "peer-found", callback: (($obj: Client, name: string) => void)): number
    connect_after(sigName: "peer-found", callback: (($obj: Client, name: string) => void)): number
    emit(sigName: "peer-found", name: string): void
    connect(sigName: "peer-lost", callback: (($obj: Client, name: string) => void)): number
    connect_after(sigName: "peer-lost", callback: (($obj: Client, name: string) => void)): number
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::swarm-leader", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swarm-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarm_name: string): Client
    static new_for_address(swarm_name: string, bus_address: string): Client
    static $gtype: GObject.Type
}
export interface FileResourceManager_ConstructProps extends GObject.Object_ConstructProps {
    primary_path?: string
}
export class FileResourceManager {
    /* Fields of Dee.FileResourceManager */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.FileResourceManager */
    add_search_path(path: string): void
    get_primary_path(): string
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
    /* Methods of Dee.ResourceManager */
    load(resource_name: string): GObject.Object
    store(resource: Serializable, resource_name: string): boolean
    /* Virtual methods of Dee.FileResourceManager */
    vfunc_load(resource_name: string): GObject.Object
    vfunc_store(resource: Serializable, resource_name: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileResourceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileResourceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileResourceManager_ConstructProps)
    _init (config?: FileResourceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(primary_path: string): FileResourceManager
    static get_default(): ResourceManager
    static $gtype: GObject.Type
}
export interface FilterModel_ConstructProps extends ProxyModel_ConstructProps {
    filter?: Filter
}
export class FilterModel {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.FilterModel */
    append_iter(iter: ModelIter): ModelIter
    contains(iter: ModelIter): boolean
    insert_iter(iter: ModelIter, pos: number): ModelIter
    insert_iter_before(iter: ModelIter, pos: ModelIter): ModelIter
    insert_iter_with_original_order(iter: ModelIter): ModelIter
    prepend_iter(iter: ModelIter): ModelIter
    /* Methods of Dee.SerializableModel */
    get_seqnum(): number
    inc_seqnum(): number
    set_seqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    append_row(row_members: GLib.Variant[]): ModelIter
    begin_changeset(): void
    clear(): void
    clear_tag(iter: ModelIter, tag: ModelTag): void
    end_changeset(): void
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    get_column_index(column_name: string): number
    get_column_names(): string[]
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    get_iter_at_row(row: number): ModelIter
    get_last_iter(): ModelIter
    get_n_columns(): number
    get_n_rows(): number
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] | null ]
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    get_vardict_schema(column: number): GLib.HashTable
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    is_first(iter: ModelIter): boolean
    is_last(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prepend_row(row_members: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    set_column_names_full(column_names: string[]): void
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    set_schema_full(column_schemas: string[]): void
    set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    vfunc_clear(): void
    vfunc_end_changeset(): void
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    vfunc_get_column_index(column_name: string): number
    vfunc_get_column_names(): string[]
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    vfunc_get_iter_at_row(row: number): ModelIter
    vfunc_get_last_iter(): ModelIter
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    vfunc_is_first(iter: ModelIter): boolean
    vfunc_is_last(iter: ModelIter): boolean
    vfunc_next(iter: ModelIter): ModelIter
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    vfunc_prev(iter: ModelIter): ModelIter
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    vfunc_set_column_names_full(column_names: string[]): void
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    vfunc_set_schema_full(column_schemas: string[]): void
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: FilterModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: FilterModel) => void)): number
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (($obj: FilterModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: FilterModel) => void)): number
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterModel_ConstructProps)
    _init (config?: FilterModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(orig_model: Model, filter: Filter): FilterModel
    static $gtype: GObject.Type
}
export interface GListResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class GListResultSet {
    /* Fields of Dee.GListResultSet */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Dee.ResultSet */
    get_model(): Model
    get_n_rows(): number
    has_next(): boolean
    next(): ModelIter
    peek(): ModelIter
    seek(pos: number): void
    tell(): number
    /* Virtual methods of Dee.GListResultSet */
    vfunc_get_model(): Model
    vfunc_get_n_rows(): number
    vfunc_has_next(): boolean
    vfunc_next(): ModelIter
    vfunc_peek(): ModelIter
    vfunc_seek(pos: number): void
    vfunc_tell(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListResultSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GListResultSet_ConstructProps)
    _init (config?: GListResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HashIndex_ConstructProps extends Index_ConstructProps {
}
export class HashIndex {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Index */
    foreach(start_term: string, func: IndexIterFunc): void
    get_analyzer(): Analyzer
    get_model(): Model
    get_n_rows(): number
    get_n_rows_for_term(term: string): number
    get_n_terms(): number
    get_reader(): ModelReader
    get_supported_term_match_flags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookup_one(term: string): ModelIter
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
    /* Virtual methods of Dee.Index */
    vfunc_foreach(start_term: string, func: IndexIterFunc): void
    vfunc_get_n_rows(): number
    vfunc_get_n_rows_for_term(term: string): number
    vfunc_get_n_terms(): number
    vfunc_get_supported_term_match_flags(): number
    vfunc_lookup(term: string, flags: TermMatchFlag): ResultSet
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HashIndex_ConstructProps)
    _init (config?: HashIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends GObject.Object_ConstructProps {
    analyzer?: Analyzer
    model?: Model
    reader?: ModelReader
}
export class Index {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Index */
    foreach(start_term: string, func: IndexIterFunc): void
    get_analyzer(): Analyzer
    get_model(): Model
    get_n_rows(): number
    get_n_rows_for_term(term: string): number
    get_n_terms(): number
    get_reader(): ModelReader
    get_supported_term_match_flags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookup_one(term: string): ModelIter
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
    /* Virtual methods of Dee.Index */
    vfunc_foreach(start_term: string, func: IndexIterFunc): void
    vfunc_get_n_rows(): number
    vfunc_get_n_rows_for_term(term: string): number
    vfunc_get_n_terms(): number
    vfunc_get_supported_term_match_flags(): number
    vfunc_lookup(term: string, flags: TermMatchFlag): ResultSet
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Peer_ConstructProps extends GObject.Object_ConstructProps {
    swarm_name?: string
    swarm_owner?: boolean
}
export class Peer {
    /* Properties of Dee.Peer */
    readonly swarm_leader: string
    swarm_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Peer */
    get_connections(): Gio.DBusConnection[]
    get_swarm_leader(): string
    get_swarm_name(): string
    is_swarm_leader(): boolean
    is_swarm_owner(): boolean
    list_peers(): string[]
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
    /* Virtual methods of Dee.Peer */
    vfunc_connection_acquired(connection: Gio.DBusConnection): void
    vfunc_connection_closed(connection: Gio.DBusConnection): void
    vfunc_get_connections(): Gio.DBusConnection[]
    vfunc_get_swarm_leader(): string
    vfunc_is_swarm_leader(): boolean
    vfunc_list_peers(): string[]
    vfunc_peer_found(name: string): void
    vfunc_peer_lost(name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.Peer */
    connect(sigName: "connection-acquired", callback: (($obj: Peer, object: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-acquired", callback: (($obj: Peer, object: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    connect(sigName: "connection-closed", callback: (($obj: Peer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Peer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    connect(sigName: "peer-found", callback: (($obj: Peer, name: string) => void)): number
    connect_after(sigName: "peer-found", callback: (($obj: Peer, name: string) => void)): number
    emit(sigName: "peer-found", name: string): void
    connect(sigName: "peer-lost", callback: (($obj: Peer, name: string) => void)): number
    connect_after(sigName: "peer-lost", callback: (($obj: Peer, name: string) => void)): number
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::swarm-leader", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swarm-name", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Peer_ConstructProps)
    _init (config?: Peer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarm_name: string): Peer
    static $gtype: GObject.Type
}
export interface ProxyModel_ConstructProps extends SerializableModel_ConstructProps {
    back_end?: Model
    inherit_seqnums?: boolean
    proxy_signals?: boolean
}
export class ProxyModel {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.SerializableModel */
    get_seqnum(): number
    inc_seqnum(): number
    set_seqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    append_row(row_members: GLib.Variant[]): ModelIter
    begin_changeset(): void
    clear(): void
    clear_tag(iter: ModelIter, tag: ModelTag): void
    end_changeset(): void
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    get_column_index(column_name: string): number
    get_column_names(): string[]
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    get_iter_at_row(row: number): ModelIter
    get_last_iter(): ModelIter
    get_n_columns(): number
    get_n_rows(): number
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] | null ]
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    get_vardict_schema(column: number): GLib.HashTable
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    is_first(iter: ModelIter): boolean
    is_last(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prepend_row(row_members: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    set_column_names_full(column_names: string[]): void
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    set_schema_full(column_schemas: string[]): void
    set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    vfunc_clear(): void
    vfunc_end_changeset(): void
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    vfunc_get_column_index(column_name: string): number
    vfunc_get_column_names(): string[]
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    vfunc_get_iter_at_row(row: number): ModelIter
    vfunc_get_last_iter(): ModelIter
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    vfunc_is_first(iter: ModelIter): boolean
    vfunc_is_last(iter: ModelIter): boolean
    vfunc_next(iter: ModelIter): ModelIter
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    vfunc_prev(iter: ModelIter): ModelIter
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    vfunc_set_column_names_full(column_names: string[]): void
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    vfunc_set_schema_full(column_schemas: string[]): void
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: ProxyModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: ProxyModel) => void)): number
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (($obj: ProxyModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: ProxyModel) => void)): number
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyModel_ConstructProps)
    _init (config?: ProxyModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SequenceModel_ConstructProps extends SerializableModel_ConstructProps {
}
export class SequenceModel {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.SerializableModel */
    get_seqnum(): number
    inc_seqnum(): number
    set_seqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    append_row(row_members: GLib.Variant[]): ModelIter
    begin_changeset(): void
    clear(): void
    clear_tag(iter: ModelIter, tag: ModelTag): void
    end_changeset(): void
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    get_column_index(column_name: string): number
    get_column_names(): string[]
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    get_iter_at_row(row: number): ModelIter
    get_last_iter(): ModelIter
    get_n_columns(): number
    get_n_rows(): number
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] | null ]
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    get_vardict_schema(column: number): GLib.HashTable
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    is_first(iter: ModelIter): boolean
    is_last(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prepend_row(row_members: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    set_column_names_full(column_names: string[]): void
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    set_schema_full(column_schemas: string[]): void
    set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    vfunc_clear(): void
    vfunc_end_changeset(): void
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    vfunc_get_column_index(column_name: string): number
    vfunc_get_column_names(): string[]
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    vfunc_get_iter_at_row(row: number): ModelIter
    vfunc_get_last_iter(): ModelIter
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    vfunc_is_first(iter: ModelIter): boolean
    vfunc_is_last(iter: ModelIter): boolean
    vfunc_next(iter: ModelIter): ModelIter
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    vfunc_prev(iter: ModelIter): ModelIter
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    vfunc_set_column_names_full(column_names: string[]): void
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    vfunc_set_schema_full(column_schemas: string[]): void
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SequenceModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SequenceModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: SequenceModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: SequenceModel) => void)): number
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (($obj: SequenceModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: SequenceModel) => void)): number
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SequenceModel_ConstructProps)
    _init (config?: SequenceModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SequenceModel
    static $gtype: GObject.Type
}
export interface SerializableModel_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableModel {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.SerializableModel */
    get_seqnum(): number
    inc_seqnum(): number
    set_seqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    append_row(row_members: GLib.Variant[]): ModelIter
    begin_changeset(): void
    clear(): void
    clear_tag(iter: ModelIter, tag: ModelTag): void
    end_changeset(): void
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    get_column_index(column_name: string): number
    get_column_names(): string[]
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    get_iter_at_row(row: number): ModelIter
    get_last_iter(): ModelIter
    get_n_columns(): number
    get_n_rows(): number
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] | null ]
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    get_vardict_schema(column: number): GLib.HashTable
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    is_first(iter: ModelIter): boolean
    is_last(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prepend_row(row_members: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    set_column_names_full(column_names: string[]): void
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    set_schema_full(column_schemas: string[]): void
    set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    vfunc_clear(): void
    vfunc_end_changeset(): void
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    vfunc_get_column_index(column_name: string): number
    vfunc_get_column_names(): string[]
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    vfunc_get_iter_at_row(row: number): ModelIter
    vfunc_get_last_iter(): ModelIter
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    vfunc_is_first(iter: ModelIter): boolean
    vfunc_is_last(iter: ModelIter): boolean
    vfunc_next(iter: ModelIter): ModelIter
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    vfunc_prev(iter: ModelIter): ModelIter
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    vfunc_set_column_names_full(column_names: string[]): void
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    vfunc_set_schema_full(column_schemas: string[]): void
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: SerializableModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: SerializableModel) => void)): number
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (($obj: SerializableModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: SerializableModel) => void)): number
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableModel_ConstructProps)
    _init (config?: SerializableModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends Peer_ConstructProps {
    bus_address?: string
    same_user_only?: boolean
}
export class Server {
    /* Properties of Dee.Peer */
    readonly swarm_leader: string
    swarm_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Server */
    get_client_address(): string
    /* Methods of Dee.Peer */
    get_connections(): Gio.DBusConnection[]
    get_swarm_leader(): string
    get_swarm_name(): string
    is_swarm_leader(): boolean
    is_swarm_owner(): boolean
    list_peers(): string[]
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
    /* Virtual methods of Dee.Peer */
    vfunc_connection_acquired(connection: Gio.DBusConnection): void
    vfunc_connection_closed(connection: Gio.DBusConnection): void
    vfunc_get_connections(): Gio.DBusConnection[]
    vfunc_get_swarm_leader(): string
    vfunc_is_swarm_leader(): boolean
    vfunc_list_peers(): string[]
    vfunc_peer_found(name: string): void
    vfunc_peer_lost(name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.Peer */
    connect(sigName: "connection-acquired", callback: (($obj: Server, object: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-acquired", callback: (($obj: Server, object: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    connect(sigName: "connection-closed", callback: (($obj: Server, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Server, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    connect(sigName: "peer-found", callback: (($obj: Server, name: string) => void)): number
    connect_after(sigName: "peer-found", callback: (($obj: Server, name: string) => void)): number
    emit(sigName: "peer-found", name: string): void
    connect(sigName: "peer-lost", callback: (($obj: Server, name: string) => void)): number
    connect_after(sigName: "peer-lost", callback: (($obj: Server, name: string) => void)): number
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::swarm-leader", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swarm-name", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarm_name: string): Server
    static new_for_address(swarm_name: string, bus_address: string): Server
    static bus_address_for_name(name: string, include_username: boolean): string
    static $gtype: GObject.Type
}
export interface SharedModel_ConstructProps extends ProxyModel_ConstructProps {
    access_mode?: SharedModelAccessMode
    flush_mode?: SharedModelFlushMode
    peer?: Peer
}
export class SharedModel {
    /* Properties of Dee.SharedModel */
    flush_mode: SharedModelFlushMode
    readonly synchronized: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.SharedModel */
    flush_revision_queue(): number
    flush_revision_queue_sync(): number
    get_flush_mode(): SharedModelFlushMode
    get_peer(): Peer
    get_swarm_name(): string
    is_leader(): boolean
    is_synchronized(): boolean
    set_flush_mode(mode: SharedModelFlushMode): void
    /* Methods of Dee.SerializableModel */
    get_seqnum(): number
    inc_seqnum(): number
    set_seqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    append_row(row_members: GLib.Variant[]): ModelIter
    begin_changeset(): void
    clear(): void
    clear_tag(iter: ModelIter, tag: ModelTag): void
    end_changeset(): void
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    get_column_index(column_name: string): number
    get_column_names(): string[]
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    get_iter_at_row(row: number): ModelIter
    get_last_iter(): ModelIter
    get_n_columns(): number
    get_n_rows(): number
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] | null ]
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    get_vardict_schema(column: number): GLib.HashTable
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    is_first(iter: ModelIter): boolean
    is_last(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prepend_row(row_members: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    set_column_names_full(column_names: string[]): void
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    set_schema_full(column_schemas: string[]): void
    set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    vfunc_clear(): void
    vfunc_end_changeset(): void
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    vfunc_get_column_index(column_name: string): number
    vfunc_get_column_names(): string[]
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    vfunc_get_iter_at_row(row: number): ModelIter
    vfunc_get_last_iter(): ModelIter
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    vfunc_is_first(iter: ModelIter): boolean
    vfunc_is_last(iter: ModelIter): boolean
    vfunc_next(iter: ModelIter): ModelIter
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    vfunc_prev(iter: ModelIter): ModelIter
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    vfunc_set_column_names_full(column_names: string[]): void
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    vfunc_set_schema_full(column_schemas: string[]): void
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.SharedModel */
    connect(sigName: "begin-transaction", callback: (($obj: SharedModel, begin_seqnum: number, end_seqnum: number) => void)): number
    connect_after(sigName: "begin-transaction", callback: (($obj: SharedModel, begin_seqnum: number, end_seqnum: number) => void)): number
    emit(sigName: "begin-transaction", begin_seqnum: number, end_seqnum: number): void
    connect(sigName: "end-transaction", callback: (($obj: SharedModel, begin_seqnum: number, end_seqnum: number) => void)): number
    connect_after(sigName: "end-transaction", callback: (($obj: SharedModel, begin_seqnum: number, end_seqnum: number) => void)): number
    emit(sigName: "end-transaction", begin_seqnum: number, end_seqnum: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: SharedModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: SharedModel) => void)): number
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (($obj: SharedModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: SharedModel) => void)): number
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: "notify::flush-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::synchronized", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::synchronized", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SharedModel_ConstructProps)
    _init (config?: SharedModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): SharedModel
    static new_for_peer(peer: Peer): SharedModel
    static new_with_back_end(name: string, back_end: Model): SharedModel
    static $gtype: GObject.Type
}
export interface TermList_ConstructProps extends GObject.Object_ConstructProps {
}
export class TermList {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.TermList */
    add_term(term: string): TermList
    clear(): TermList
    clone(): TermList
    get_term(n: number): string
    num_terms(): number
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
    /* Virtual methods of Dee.TermList */
    vfunc_add_term(term: string): TermList
    vfunc_clear(): TermList
    vfunc_clone(): TermList
    vfunc_get_term(n: number): string
    vfunc_num_terms(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TermList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TermList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TermList_ConstructProps)
    _init (config?: TermList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TextAnalyzer_ConstructProps extends Analyzer_ConstructProps {
}
export class TextAnalyzer {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Analyzer */
    add_term_filter(filter_func: TermFilterFunc): void
    analyze(data: string, terms_out?: TermList | null, colkeys_out?: TermList | null): void
    collate_cmp(key1: string, key2: string): number
    collate_key(data: string): string
    tokenize(data: string, terms_out: TermList): void
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
    /* Virtual methods of Dee.Analyzer */
    vfunc_add_term_filter(filter_func: TermFilterFunc): void
    vfunc_analyze(data: string, terms_out?: TermList | null, colkeys_out?: TermList | null): void
    vfunc_collate_cmp(key1: string, key2: string): number
    vfunc_collate_key(data: string): string
    vfunc_tokenize(data: string, terms_out: TermList): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextAnalyzer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextAnalyzer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextAnalyzer_ConstructProps)
    _init (config?: TextAnalyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextAnalyzer
    static $gtype: GObject.Type
}
export interface Transaction_ConstructProps extends SerializableModel_ConstructProps {
    target?: Model
}
export class Transaction {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Transaction */
    commit(): boolean
    get_target(): Model
    is_committed(): boolean
    /* Methods of Dee.SerializableModel */
    get_seqnum(): number
    inc_seqnum(): number
    set_seqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    append_row(row_members: GLib.Variant[]): ModelIter
    begin_changeset(): void
    clear(): void
    clear_tag(iter: ModelIter, tag: ModelTag): void
    end_changeset(): void
    find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    find_row_sorted_with_sizes(row_spec: GLib.Variant[], cmp_func: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    get_bool(iter: ModelIter, column: number): boolean
    get_column_index(column_name: string): number
    get_column_names(): string[]
    get_column_schema(column: number): string
    get_double(iter: ModelIter, column: number): number
    get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    get_first_iter(): ModelIter
    get_int32(iter: ModelIter, column: number): number
    get_int64(iter: ModelIter, column: number): number
    get_iter_at_row(row: number): ModelIter
    get_last_iter(): ModelIter
    get_n_columns(): number
    get_n_rows(): number
    get_position(iter: ModelIter): number
    get_row(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* out_row_members */ GLib.Variant[] | null ]
    get_schema(): string[]
    get_string(iter: ModelIter, column: number): string
    get_tag(iter: ModelIter, tag: ModelTag): object | null
    get_uchar(iter: ModelIter, column: number): number
    get_uint32(iter: ModelIter, column: number): number
    get_uint64(iter: ModelIter, column: number): number
    get_value(iter: ModelIter, column: number): GLib.Variant
    get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    get_vardict_schema(column: number): GLib.HashTable
    insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    insert_row_sorted_with_sizes(row_members: GLib.Variant[], cmp_func: CompareRowSizedFunc): ModelIter
    is_first(iter: ModelIter): boolean
    is_last(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prepend_row(row_members: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    register_vardict_schema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    set_column_names_full(column_names: string[]): void
    set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    set_schema_full(column_schemas: string[]): void
    set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfunc_append_row(row_members: GLib.Variant[]): ModelIter
    vfunc_begin_changeset(): void
    vfunc_changeset_finished(): void
    vfunc_changeset_started(): void
    vfunc_clear(): void
    vfunc_end_changeset(): void
    vfunc_find_row_sorted(row_spec: GLib.Variant[], cmp_func: CompareRowFunc): [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    vfunc_get_bool(iter: ModelIter, column: number): boolean
    vfunc_get_column_index(column_name: string): number
    vfunc_get_column_names(): string[]
    vfunc_get_column_schema(column: number): string
    vfunc_get_double(iter: ModelIter, column: number): number
    vfunc_get_field_schema(field_name: string): [ /* returnType */ string, /* out_column */ number ]
    vfunc_get_first_iter(): ModelIter
    vfunc_get_int32(iter: ModelIter, column: number): number
    vfunc_get_int64(iter: ModelIter, column: number): number
    vfunc_get_iter_at_row(row: number): ModelIter
    vfunc_get_last_iter(): ModelIter
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_position(iter: ModelIter): number
    vfunc_get_row(iter: ModelIter, out_row_members: GLib.Variant): GLib.Variant
    vfunc_get_schema(): string[]
    vfunc_get_string(iter: ModelIter, column: number): string
    vfunc_get_tag(iter: ModelIter, tag: ModelTag): object | null
    vfunc_get_uchar(iter: ModelIter, column: number): number
    vfunc_get_uint32(iter: ModelIter, column: number): number
    vfunc_get_uint64(iter: ModelIter, column: number): number
    vfunc_get_value(iter: ModelIter, column: number): GLib.Variant
    vfunc_get_value_by_name(iter: ModelIter, column_name: string): GLib.Variant
    vfunc_get_vardict_schema(num_column: number): GLib.HashTable
    vfunc_insert_row(pos: number, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_before(iter: ModelIter, row_members: GLib.Variant[]): ModelIter
    vfunc_insert_row_sorted(row_members: GLib.Variant[], cmp_func: CompareRowFunc): ModelIter
    vfunc_is_first(iter: ModelIter): boolean
    vfunc_is_last(iter: ModelIter): boolean
    vfunc_next(iter: ModelIter): ModelIter
    vfunc_prepend_row(row_members: GLib.Variant[]): ModelIter
    vfunc_prev(iter: ModelIter): ModelIter
    vfunc_register_tag(tag_destroy: GLib.DestroyNotify): ModelTag
    vfunc_register_vardict_schema(num_column: number, schemas: GLib.HashTable): void
    vfunc_remove(iter: ModelIter): void
    vfunc_row_added(iter: ModelIter): void
    vfunc_row_changed(iter: ModelIter): void
    vfunc_row_removed(iter: ModelIter): void
    vfunc_set_column_names_full(column_names: string[]): void
    vfunc_set_row(iter: ModelIter, row_members: GLib.Variant[]): void
    vfunc_set_schema_full(column_schemas: string[]): void
    vfunc_set_tag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfunc_set_value(iter: ModelIter, column: number, value: GLib.Variant): void
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: Transaction) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: Transaction) => void)): number
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (($obj: Transaction) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: Transaction) => void)): number
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target: Model): Transaction
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeIndex_ConstructProps extends Index_ConstructProps {
}
export class TreeIndex {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dee.Index */
    foreach(start_term: string, func: IndexIterFunc): void
    get_analyzer(): Analyzer
    get_model(): Model
    get_n_rows(): number
    get_n_rows_for_term(term: string): number
    get_n_terms(): number
    get_reader(): ModelReader
    get_supported_term_match_flags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookup_one(term: string): ModelIter
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
    /* Virtual methods of Dee.Index */
    vfunc_foreach(start_term: string, func: IndexIterFunc): void
    vfunc_get_n_rows(): number
    vfunc_get_n_rows_for_term(term: string): number
    vfunc_get_n_terms(): number
    vfunc_get_supported_term_match_flags(): number
    vfunc_lookup(term: string, flags: TermMatchFlag): ResultSet
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeIndex_ConstructProps)
    _init (config?: TreeIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex
    static $gtype: GObject.Type
}
export abstract class AnalyzerClass {
    /* Fields of Dee.AnalyzerClass */
    analyze: (self: Analyzer, data: string, terms_out?: TermList | null, colkeys_out?: TermList | null) => void
    tokenize: (self: Analyzer, data: string, terms_out: TermList) => void
    add_term_filter: (self: Analyzer, filter_func: TermFilterFunc) => void
    collate_key: (self: Analyzer, data: string) => string
    collate_cmp: (self: Analyzer, key1: string, key2: string) => number
    static name: string
}
export class AnalyzerPrivate {
    static name: string
}
export abstract class ClientClass {
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class FileResourceManagerClass {
    /* Fields of Dee.FileResourceManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Filter {
    /* Fields of Dee.Filter */
    map_func: FilterMapFunc
    map_notify: FilterMapNotify
    destroy: GLib.DestroyNotify
    userdata: object
    /* Methods of Dee.Filter */
    map(orig_model: Model, filter_model: FilterModel): void
    notify(orig_iter: ModelIter, orig_model: Model, filter_model: FilterModel): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static new_collator(column: number): /* out_filter */ Filter
    static new_collator_desc(column: number): /* out_filter */ Filter
    static new_for_any_column(column: number, value: GLib.Variant): /* out_filter */ Filter
    static new_for_key_column(column: number, key: string): /* out_filter */ Filter
    static new_regex(column: number, regex: GLib.Regex): /* out_filter */ Filter
    static new_sort(cmp_row: CompareRowFunc): /* out_filter */ Filter
}
export abstract class FilterModelClass {
    static name: string
}
export class FilterModelPrivate {
    static name: string
}
export abstract class GListResultSetClass {
    /* Fields of Dee.GListResultSetClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HashIndexClass {
    /* Fields of Dee.HashIndexClass */
    parent_class: IndexClass
    static name: string
}
export class HashIndexPrivate {
    static name: string
}
export class ICUTermFilter {
    /* Methods of Dee.ICUTermFilter */
    apply(text: string): string
    destroy(): void
    static name: string
}
export abstract class IndexClass {
    /* Fields of Dee.IndexClass */
    parent_class: GObject.ObjectClass
    lookup: (self: Index, term: string, flags: TermMatchFlag) => ResultSet
    foreach: (self: Index, start_term: string, func: IndexIterFunc) => void
    get_n_terms: (self: Index) => number
    get_n_rows: (self: Index) => number
    get_n_rows_for_term: (self: Index, term: string) => number
    get_supported_term_match_flags: (self: Index) => number
    static name: string
}
export class IndexPrivate {
    static name: string
}
export abstract class ModelIface {
    /* Fields of Dee.ModelIface */
    g_iface: GObject.TypeInterface
    row_added: (self: Model, iter: ModelIter) => void
    row_removed: (self: Model, iter: ModelIter) => void
    row_changed: (self: Model, iter: ModelIter) => void
    set_schema_full: (self: Model, column_schemas: string[]) => void
    get_schema: (self: Model) => string[]
    get_column_schema: (self: Model, column: number) => string
    get_field_schema: (self: Model, field_name: string) => [ /* returnType */ string, /* out_column */ number ]
    get_column_index: (self: Model, column_name: string) => number
    set_column_names_full: (self: Model, column_names: string[]) => void
    get_column_names: (self: Model) => string[]
    register_vardict_schema: (self: Model, num_column: number, schemas: GLib.HashTable) => void
    get_vardict_schema: (self: Model, num_column: number) => GLib.HashTable
    get_n_columns: (self: Model) => number
    get_n_rows: (self: Model) => number
    append_row: (self: Model, row_members: GLib.Variant[]) => ModelIter
    prepend_row: (self: Model, row_members: GLib.Variant[]) => ModelIter
    insert_row: (self: Model, pos: number, row_members: GLib.Variant[]) => ModelIter
    insert_row_before: (self: Model, iter: ModelIter, row_members: GLib.Variant[]) => ModelIter
    insert_row_sorted: (self: Model, row_members: GLib.Variant[], cmp_func: CompareRowFunc) => ModelIter
    find_row_sorted: (self: Model, row_spec: GLib.Variant[], cmp_func: CompareRowFunc) => [ /* returnType */ ModelIter, /* out_was_found */ boolean ]
    remove: (self: Model, iter: ModelIter) => void
    clear: (self: Model) => void
    set_value: (self: Model, iter: ModelIter, column: number, value: GLib.Variant) => void
    set_row: (self: Model, iter: ModelIter, row_members: GLib.Variant[]) => void
    get_value: (self: Model, iter: ModelIter, column: number) => GLib.Variant
    get_value_by_name: (self: Model, iter: ModelIter, column_name: string) => GLib.Variant
    get_first_iter: (self: Model) => ModelIter
    get_last_iter: (self: Model) => ModelIter
    get_iter_at_row: (self: Model, row: number) => ModelIter
    get_bool: (self: Model, iter: ModelIter, column: number) => boolean
    get_uchar: (self: Model, iter: ModelIter, column: number) => number
    get_int32: (self: Model, iter: ModelIter, column: number) => number
    get_uint32: (self: Model, iter: ModelIter, column: number) => number
    get_int64: (self: Model, iter: ModelIter, column: number) => number
    get_uint64: (self: Model, iter: ModelIter, column: number) => number
    get_double: (self: Model, iter: ModelIter, column: number) => number
    get_string: (self: Model, iter: ModelIter, column: number) => string
    next: (self: Model, iter: ModelIter) => ModelIter
    prev: (self: Model, iter: ModelIter) => ModelIter
    is_first: (self: Model, iter: ModelIter) => boolean
    is_last: (self: Model, iter: ModelIter) => boolean
    get_position: (self: Model, iter: ModelIter) => number
    register_tag: (self: Model, tag_destroy: GLib.DestroyNotify) => ModelTag
    get_tag: (self: Model, iter: ModelIter, tag: ModelTag) => object | null
    set_tag: (self: Model, iter: ModelIter, tag: ModelTag, value?: object | null) => void
    get_row: (self: Model, iter: ModelIter, out_row_members: GLib.Variant) => GLib.Variant
    begin_changeset: (self: Model) => void
    end_changeset: (self: Model) => void
    changeset_started: (self: Model) => void
    changeset_finished: (self: Model) => void
    static name: string
}
export class ModelIter {
    static name: string
}
export class ModelReader {
    /* Fields of Dee.ModelReader */
    reader_func: ModelReaderFunc
    userdata: object
    destroy: GLib.DestroyNotify
    /* Methods of Dee.ModelReader */
    read(model: Model, iter: ModelIter): string
    static name: string
    /* Static methods and pseudo-constructors */
    static new_for_int32_column(column: number): /* out_reader */ ModelReader
    static new_for_string_column(column: number): /* out_reader */ ModelReader
    static new_for_uint32_column(column: number): /* out_reader */ ModelReader
}
export class ModelTag {
    static name: string
}
export abstract class PeerClass {
    /* Fields of Dee.PeerClass */
    peer_found: (self: Peer, name: string) => void
    peer_lost: (self: Peer, name: string) => void
    connection_acquired: (self: Peer, connection: Gio.DBusConnection) => void
    connection_closed: (self: Peer, connection: Gio.DBusConnection) => void
    get_swarm_leader: (self: Peer) => string
    is_swarm_leader: (self: Peer) => boolean
    get_connections: (self: Peer) => Gio.DBusConnection[]
    list_peers: (self: Peer) => string[]
    static name: string
}
export class PeerPrivate {
    static name: string
}
export abstract class ProxyModelClass {
    static name: string
}
export class ProxyModelPrivate {
    static name: string
}
export abstract class ResourceManagerIface {
    /* Fields of Dee.ResourceManagerIface */
    g_iface: GObject.TypeInterface
    store: (self: ResourceManager, resource: Serializable, resource_name: string) => boolean
    load: (self: ResourceManager, resource_name: string) => GObject.Object
    static name: string
}
export abstract class ResultSetIface {
    /* Fields of Dee.ResultSetIface */
    g_iface: GObject.TypeInterface
    get_n_rows: (self: ResultSet) => number
    next: (self: ResultSet) => ModelIter
    has_next: (self: ResultSet) => boolean
    peek: (self: ResultSet) => ModelIter
    seek: (self: ResultSet, pos: number) => void
    tell: (self: ResultSet) => number
    get_model: (self: ResultSet) => Model
    static name: string
}
export abstract class SequenceModelClass {
    static name: string
}
export class SequenceModelPrivate {
    static name: string
}
export abstract class SerializableIface {
    /* Fields of Dee.SerializableIface */
    g_iface: GObject.TypeInterface
    serialize: (self: Serializable) => GLib.Variant
    static name: string
}
export abstract class SerializableModelClass {
    /* Fields of Dee.SerializableModelClass */
    get_seqnum: (self: Model) => number
    set_seqnum: (self: Model, seqnum: number) => void
    inc_seqnum: (self: Model) => number
    static name: string
}
export class SerializableModelPrivate {
    static name: string
}
export abstract class ServerClass {
    static name: string
}
export class ServerPrivate {
    static name: string
}
export abstract class SharedModelClass {
    static name: string
}
export class SharedModelPrivate {
    static name: string
}
export abstract class TermListClass {
    /* Fields of Dee.TermListClass */
    parent_class: GObject.ObjectClass
    get_term: (self: TermList, n: number) => string
    add_term: (self: TermList, term: string) => TermList
    num_terms: (self: TermList) => number
    clear: (self: TermList) => TermList
    clone: (self: TermList) => TermList
    static name: string
}
export class TermListPrivate {
    static name: string
}
export abstract class TextAnalyzerClass {
    static name: string
}
export class TextAnalyzerPrivate {
    static name: string
}
export abstract class TransactionClass {
    static name: string
}
export class TransactionPrivate {
    static name: string
}
export abstract class TreeIndexClass {
    /* Fields of Dee.TreeIndexClass */
    parent_class: IndexClass
    static name: string
}
export class TreeIndexPrivate {
    static name: string
}