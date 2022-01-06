/**
 * Libmsi-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ColInfo {
    NAMES,
    TYPES,
}
export enum DBError {
    SUCCESS,
    INVALIDARG,
    MOREDATA,
    FUNCTIONERROR,
    DUPLICATEKEY,
    REQUIRED,
    BADLINK,
    OVERFLOW,
    UNDERFLOW,
    NOTINSET,
    BADVERSION,
    BADCASE,
    BADGUID,
    BADWILDCARD,
    BADIDENTIFIER,
    BADLANGUAGE,
    BADFILENAME,
    BADPATH,
    BADCONDITION,
    BADFORMATTED,
    BADTEMPLATE,
    BADDEFAULTDIR,
    BADREGPATH,
    BADCUSTOMSOURCE,
    BADPROPERTY,
    MISSINGDATA,
    BADCATEGORY,
    BADKEYTABLE,
    BADMAXMINVALUES,
    BADCABINET,
    BADSHORTCUT,
    STRINGOVERFLOW,
    BADLOCALIZEATTRIB,
}
export enum Property {
    DICTIONARY,
    CODEPAGE,
    TITLE,
    SUBJECT,
    AUTHOR,
    KEYWORDS,
    COMMENTS,
    TEMPLATE,
    LASTAUTHOR,
    UUID,
    EDITTIME,
    LASTPRINTED,
    CREATED_TM,
    LASTSAVED_TM,
    VERSION,
    SOURCE,
    RESTRICT,
    THUMBNAIL,
    APPNAME,
    SECURITY,
}
export enum PropertyType {
    EMPTY,
    INT,
    STRING,
    FILETIME,
}
export enum ResultError {
    SUCCESS,
    ACCESS_DENIED,
    INVALID_HANDLE,
    NOT_ENOUGH_MEMORY,
    INVALID_DATA,
    OUTOFMEMORY,
    INVALID_PARAMETER,
    OPEN_FAILED,
    CALL_NOT_IMPLEMENTED,
    MORE_DATA,
    NOT_FOUND,
    CONTINUE,
    UNKNOWN_PROPERTY,
    BAD_QUERY_SYNTAX,
    INVALID_FIELD,
    FUNCTION_FAILED,
    INVALID_TABLE,
    DATATYPE_MISMATCH,
    INVALID_DATATYPE,
}
export enum DbFlags {
    READONLY,
    CREATE,
    TRANSACT,
    PATCH,
}
export const NULL_INT: number
export function db_error_quark(): GLib.Quark
export function result_error_quark(): GLib.Quark
export interface Database_ConstructProps extends GObject.Object_ConstructProps {
    flags?: DbFlags
    outpath?: string
    path?: string
}
export class Database {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libmsi-1.0.Libmsi.Database */
    apply_transform(file: string): boolean
    commit(): boolean
    export(table: string, fd: number): boolean
    get_primary_keys(table: string): Record
    import(path: string): boolean
    is_readonly(): boolean
    is_table_persistent(table: string): boolean
    merge(merge: Database, table?: string | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Database, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Database_ConstructProps)
    _init (config?: Database_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number, persist?: string | null): Database
    static $gtype: GObject.Type
}
export interface Query_ConstructProps extends GObject.Object_ConstructProps {
    database?: Database
    query?: string
}
export class Query {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libmsi-1.0.Libmsi.Query */
    close(): boolean
    execute(rec?: Record | null): boolean
    fetch(): Record | null
    get_column_info(info: ColInfo): Record
    get_error(): /* column */ string | null
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
    connect(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Query_ConstructProps)
    _init (config?: Query_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(database: Database, query: string): Query
    static $gtype: GObject.Type
}
export interface Record_ConstructProps extends GObject.Object_ConstructProps {
    count?: number
}
export class Record {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libmsi-1.0.Libmsi.Record */
    clear(): boolean
    get_field_count(): number
    get_int(field: number): number
    get_stream(field: number): Gio.InputStream
    get_string(field: number): string
    is_null(field: number): boolean
    load_stream(field: number, filename: string): boolean
    set_int(field: number, val: number): boolean
    set_stream(field: number, input: Gio.InputStream, count: number, cancellable?: Gio.Cancellable | null): boolean
    set_string(field: number, val: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Record, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Record, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Record_ConstructProps)
    _init (config?: Record_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(count: number): Record
    static $gtype: GObject.Type
}
export interface SummaryInfo_ConstructProps extends GObject.Object_ConstructProps {
    database?: Database
    update_count?: number
}
export class SummaryInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libmsi-1.0.Libmsi.SummaryInfo */
    get_filetime(prop: Property): number
    get_int(prop: Property): number
    get_properties(): Property[]
    get_property_type(prop: Property): PropertyType
    get_string(prop: Property): string
    persist(): boolean
    save(db: Database): boolean
    set_filetime(prop: Property, value: number): boolean
    set_int(prop: Property, value: number): boolean
    set_string(prop: Property, value: string): boolean
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
    connect(sigName: "notify", callback: (($obj: SummaryInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SummaryInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SummaryInfo_ConstructProps)
    _init (config?: SummaryInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(database: Database | null, update_count: number): SummaryInfo
    static $gtype: GObject.Type
}
export abstract class DatabaseClass {
    /* Fields of Libmsi-1.0.Libmsi.DatabaseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class QueryClass {
    /* Fields of Libmsi-1.0.Libmsi.QueryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RecordClass {
    /* Fields of Libmsi-1.0.Libmsi.RecordClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SummaryInfoClass {
    /* Fields of Libmsi-1.0.Libmsi.SummaryInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}