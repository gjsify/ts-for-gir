/**
 * GConf-2.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ClientErrorHandlingMode {
    HANDLE_NONE,
    HANDLE_UNRETURNED,
    HANDLE_ALL,
}
export enum ClientPreloadType {
    PRELOAD_NONE,
    PRELOAD_ONELEVEL,
    PRELOAD_RECURSIVE,
}
export enum Error {
    SUCCESS,
    FAILED,
    NO_SERVER,
    NO_PERMISSION,
    BAD_ADDRESS,
    BAD_KEY,
    PARSE_ERROR,
    CORRUPT,
    TYPE_MISMATCH,
    IS_DIR,
    IS_KEY,
    OVERRIDDEN,
    OAF_ERROR,
    LOCAL_ENGINE,
    LOCK_FAILED,
    NO_WRITABLE_DATABASE,
    IN_SHUTDOWN,
}
export enum ValueType {
    INVALID,
    STRING,
    INT,
    FLOAT,
    BOOL,
    SCHEMA,
    LIST,
    PAIR,
}
export enum UnsetFlags {
    NAMES,
}
export function concat_dir_and_key(dir: string, key: string): string
export function debug_shutdown(): number
export function enum_to_string(lookup_table: EnumStringPair, enum_value: number): string
export function error_quark(): GLib.Quark
export function escape_key(arbitrary_text: string, len: number): string
export function init(argc: number, argv: string): boolean
export function is_initialized(): boolean
export function key_is_below(above: string, below: string): boolean
export function postinit(app?: object | null, mod_info?: object | null): void
export function preinit(app?: object | null, mod_info?: object | null): void
export function string_to_enum(lookup_table: EnumStringPair, str: string, enum_value_retloc: number): boolean
export function unescape_key(escaped_key: string, len: number): string
export function unique_key(): string
export function valid_key(key: string, why_invalid: string): boolean
export function value_decode(encoded: string): Value
export interface ChangeSetForeachFunc {
    (cs: ChangeSet, key: string, value: Value): void
}
export interface ClientErrorHandlerFunc {
    (client: Client, error: GLib.Error): void
}
export interface ClientNotifyFunc {
    (client: Client, cnxn_id: number, entry: Entry): void
}
export interface ListenersForeach {
    (location: string, cnxn_id: number, listener_data?: object | null): void
}
export interface ListenersPredicate {
    (location: string, cnxn_id: number, listener_data?: object | null): boolean
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Fields of GConf.Client */
    object: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GConf.Client */
    add_dir(dir: string, preload: ClientPreloadType): void
    all_dirs(dir: string): string[]
    all_entries(dir: string): Entry[]
    change_set_from_currentv(keys: string): ChangeSet
    clear_cache(): void
    commit_change_set(cs: ChangeSet, remove_committed: boolean): boolean
    dir_exists(dir: string): boolean
    error(error: GLib.Error): void
    get(key: string): Value
    get_bool(key: string): boolean
    get_default_from_schema(key: string): Value
    get_entry(key: string, locale: string, use_schema_default: boolean): Entry
    get_float(key: string): number
    get_int(key: string): number
    get_pair(key: string, car_type: ValueType, cdr_type: ValueType, car_retloc?: object | null, cdr_retloc?: object | null): boolean
    get_string(key: string): string
    get_without_default(key: string): Value
    key_is_writable(key: string): boolean
    notify(key: string): void
    notify_add(namespace_section: string, func: ClientNotifyFunc): number
    notify_remove(cnxn: number): void
    preload(dirname: string, type: ClientPreloadType): void
    recursive_unset(key: string, flags: UnsetFlags): boolean
    remove_dir(dir: string): void
    reverse_change_set(cs: ChangeSet): ChangeSet
    set(key: string, val: Value): void
    set_bool(key: string, val: boolean): boolean
    set_error_handling(mode: ClientErrorHandlingMode): void
    set_float(key: string, val: number): boolean
    set_int(key: string, val: number): boolean
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car?: object | null, address_of_cdr?: object | null): boolean
    set_string(key: string, val: string): boolean
    suggest_sync(): void
    unreturned_error(error: GLib.Error): void
    unset(key: string): boolean
    value_changed(key: string, value: Value): void
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
    /* Virtual methods of GConf.Client */
    vfunc_error(error: GLib.Error): void
    vfunc_unreturned_error(error: GLib.Error): void
    vfunc_value_changed(key: string, value: Value): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GConf.Client */
    connect(sigName: "error", callback: (($obj: Client, object?: object | null) => void)): number
    connect_after(sigName: "error", callback: (($obj: Client, object?: object | null) => void)): number
    emit(sigName: "error", object?: object | null): void
    connect(sigName: "unreturned-error", callback: (($obj: Client, object?: object | null) => void)): number
    connect_after(sigName: "unreturned-error", callback: (($obj: Client, object?: object | null) => void)): number
    emit(sigName: "unreturned-error", object?: object | null): void
    connect(sigName: "value-changed", callback: (($obj: Client, object: string, p0?: object | null) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: Client, object: string, p0?: object | null) => void)): number
    emit(sigName: "value-changed", object: string, p0?: object | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Client
    static $gtype: GObject.Type
}
export class ChangeSet {
    /* Methods of GConf.ChangeSet */
    check_value(key: string, value_retloc: Value): boolean
    clear(): void
    foreach(func: ChangeSetForeachFunc): void
    ref(): ChangeSet
    remove(key: string): void
    set(key: string, value: Value): void
    set_bool(key: string, val: boolean): void
    set_float(key: string, val: number): void
    set_int(key: string, val: number): void
    set_nocopy(key: string, value: Value): void
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car?: object | null, address_of_cdr?: object | null): void
    set_string(key: string, val: string): void
    size(): number
    unref(): void
    unset(key: string): void
    static name: string
    static new(): ChangeSet
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ChangeSet
}
export abstract class ClientClass {
    /* Fields of GConf.ClientClass */
    parent_class: GObject.ObjectClass
    value_changed: (client: Client, key: string, value: Value) => void
    unreturned_error: (client: Client, error: GLib.Error) => void
    error: (client: Client, error: GLib.Error) => void
    pad1: GLib.Func
    pad2: GLib.Func
    pad3: GLib.Func
    static name: string
}
export class Engine {
    /* Methods of GConf.Engine */
    all_dirs(dir: string): string[]
    all_entries(dir: string): Entry[]
    associate_schema(key: string, schema_key: string): boolean
    change_set_from_current(err: GLib.Error, first_key: string, ...args: any): ChangeSet
    change_set_from_currentv(keys: string): ChangeSet
    commit_change_set(cs: ChangeSet, remove_committed: boolean): boolean
    dir_exists(dir: string): boolean
    get(key: string): Value
    get_bool(key: string): boolean
    get_default_from_schema(key: string): Value
    get_entry(key: string, locale: string, use_schema_default: boolean): Entry
    get_float(key: string): number
    get_full(key: string, locale: string, use_schema_default: boolean, is_default_p: boolean, is_writable_p: boolean): Value
    get_int(key: string): number
    get_pair(key: string, car_type: ValueType, cdr_type: ValueType, car_retloc?: object | null, cdr_retloc?: object | null): boolean
    get_string(key: string): string
    get_user_data(): object | null
    get_with_locale(key: string, locale: string): Value
    get_without_default(key: string): Value
    key_is_writable(key: string): boolean
    notify_remove(cnxn: number): void
    ref(): void
    remove_dir(dir: string): void
    reverse_change_set(cs: ChangeSet): ChangeSet
    set(key: string, value: Value): boolean
    set_bool(key: string, val: boolean): boolean
    set_float(key: string, val: number): boolean
    set_int(key: string, val: number): boolean
    set_list(key: string, list_type: ValueType, list: object[]): boolean
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car?: object | null, address_of_cdr?: object | null): boolean
    set_string(key: string, val: string): boolean
    set_user_data(data: object | null, dnotify: GLib.DestroyNotify): void
    suggest_sync(): void
    unref(): void
    unset(key: string): boolean
    static name: string
}
export class Entry {
    /* Fields of GConf.Entry */
    key: string
    value: Value
    /* Methods of GConf.Entry */
    copy(): Entry
    equal(b: Entry): boolean
    free(): void
    get_is_default(): boolean
    get_is_writable(): boolean
    get_key(): string
    get_schema_name(): string
    get_value(): Value
    ref(): Entry
    set_is_default(is_default: boolean): void
    set_is_writable(is_writable: boolean): void
    set_schema_name(name: string): void
    set_value(val: Value): void
    set_value_nocopy(val: Value): void
    steal_value(): Value
    unref(): void
    static name: string
    static new(key: string, val: Value): Entry
    constructor(key: string, val: Value)
    /* Static methods and pseudo-constructors */
    static new(key: string, val: Value): Entry
    static new_nocopy(key: string, val: Value): Entry
}
export class EnumStringPair {
    /* Fields of GConf.EnumStringPair */
    enum_value: number
    str: string
    static name: string
}
export class Listeners {
    /* Methods of GConf.Listeners */
    add(listen_point: string, listener_data: object | null, destroy_notify: GLib.FreeFunc): number
    count(): number
    foreach(callback: ListenersForeach): void
    free(): void
    get_data(cnxn_id: number, listener_data_p: object | null, location_p: string): boolean
    notify(all_above: string, callback: any): void
    remove(cnxn_id: number): void
    remove_if(predicate: ListenersPredicate): void
    static name: string
}
export class MetaInfo {
    /* Fields of GConf.MetaInfo */
    schema: string
    mod_user: string
    mod_time: GLib.Time
    /* Methods of GConf.MetaInfo */
    free(): void
    get_mod_user(): string
    get_schema(): string
    set_mod_time(mod_time: GLib.Time): void
    set_mod_user(mod_user: string): void
    set_schema(schema_name: string): void
    static name: string
}
export class Schema {
    /* Methods of GConf.Schema */
    free(): void
    get_car_type(): ValueType
    get_cdr_type(): ValueType
    get_default_value(): Value
    get_list_type(): ValueType
    get_locale(): string
    get_long_desc(): string
    get_owner(): string
    get_short_desc(): string
    get_type(): ValueType
    set_car_type(type: ValueType): void
    set_cdr_type(type: ValueType): void
    set_default_value(val: Value): void
    set_default_value_nocopy(val: Value): void
    set_list_type(type: ValueType): void
    set_locale(locale: string): void
    set_long_desc(desc: string): void
    set_owner(owner: string): void
    set_short_desc(desc: string): void
    set_type(type: ValueType): void
    static name: string
}
export class Value {
    /* Fields of GConf.Value */
    type: ValueType
    /* Methods of GConf.Value */
    compare(value_b: Value): number
    copy(): Value
    encode(): string
    free(): void
    get_bool(): boolean
    get_car(): Value
    get_cdr(): Value
    get_float(): number
    get_int(): number
    get_list(): Value[]
    get_list_type(): ValueType
    get_string(): string
    set_bool(the_bool: boolean): void
    set_car(car: Value): void
    set_car_nocopy(car: Value): void
    set_cdr(cdr: Value): void
    set_cdr_nocopy(cdr: Value): void
    set_float(the_float: number): void
    set_int(the_int: number): void
    set_list_type(type: ValueType): void
    set_string(the_str: string): void
    to_string(): string
    static name: string
    static new(type: ValueType): Value
    constructor(type: ValueType)
    /* Static methods and pseudo-constructors */
    static new(type: ValueType): Value
    static new_from_string(type: ValueType, str: string): Value
    static decode(encoded: string): Value
}