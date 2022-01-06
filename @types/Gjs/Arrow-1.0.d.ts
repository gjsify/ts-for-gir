/**
 * Arrow-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum CompareOperator {
    EQUAL,
    NOT_EQUAL,
    GREATER,
    GREATER_EQUAL,
    LESS,
    LESS_EQUAL,
}
export enum CompressionType {
    UNCOMPRESSED,
    SNAPPY,
    GZIP,
    BROTLI,
    ZSTD,
    LZ4,
    LZO,
    BZ2,
}
export enum CountMode {
    ALL,
    NULL,
}
export enum Error {
    OUT_OF_MEMORY,
    KEY,
    TYPE,
    INVALID,
    IO,
    CAPACITY,
    INDEX,
    UNKNOWN,
    NOT_IMPLEMENTED,
    SERIALIZATION,
    CODE_GENERATION,
    EXPRESSION_VALIDATION,
    EXECUTION,
    ALREADY_EXISTS,
}
export enum FileMode {
    READ,
    WRITE,
    READWRITE,
}
export enum FileType {
    NOT_FOUND,
    UNKNOWN,
    FILE,
    DIR,
}
export enum FilterNullSelectionBehavior {
    DROP,
    EMIT_NULL,
}
export enum JSONReadUnexpectedFieldBehavior {
    IGNORE,
    ERROR,
    INFER_TYPE,
}
export enum MetadataVersion {
    V1,
    V2,
    V3,
}
export enum SortOrder {
    ASCENDING,
    DESCENDING,
}
export enum TimeUnit {
    SECOND,
    MILLI,
    MICRO,
    NANO,
}
export enum Type {
    NA,
    BOOLEAN,
    UINT8,
    INT8,
    UINT16,
    INT16,
    UINT32,
    INT32,
    UINT64,
    INT64,
    HALF_FLOAT,
    FLOAT,
    DOUBLE,
    STRING,
    BINARY,
    FIXED_SIZE_BINARY,
    DATE32,
    DATE64,
    TIMESTAMP,
    TIME32,
    TIME64,
    INTERVAL_MONTHS,
    INTERVAL_DAY_TIME,
    DECIMAL128,
    DECIMAL256,
    LIST,
    STRUCT,
    SPARSE_UNION,
    DENSE_UNION,
    DICTIONARY,
    MAP,
    EXTENSION,
    FIXED_SIZE_LIST,
    DURATION,
    LARGE_STRING,
    LARGE_BINARY,
    LARGE_LIST,
}
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_TAG: string
export function error_quark(): GLib.Quark
export class File {
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    is_closed(): boolean
    tell(): number
    static name: string
}
export class FunctionOptions {
    static name: string
}
export class Readable {
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null
    static name: string
}
export class Writable {
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array[]): boolean
    static name: string
}
export class WritableFile {
    /* Methods of Arrow-1.0.Arrow.WritableFile */
    write_at(position: number, data: Uint8Array[]): boolean
    static name: string
}
export interface Array_ConstructProps extends GObject.Object_ConstructProps {
    array?: object
    buffer1?: Buffer
    buffer2?: Buffer
    null_bitmap?: Buffer
    parent?: Array
    value_data_type?: DataType
}
export class Array {
    /* Fields of Arrow-1.0.Arrow.Array */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Array_ConstructProps)
    _init (config?: Array_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ArrayBuilder_ConstructProps extends GObject.Object_ConstructProps {
    array_builder?: object
}
export class ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArrayBuilder_ConstructProps)
    _init (config?: ArrayBuilder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ArrayDatum_ConstructProps extends Datum_ConstructProps {
    value?: Array
}
export class ArrayDatum {
    /* Fields of Arrow-1.0.Arrow.ArrayDatum */
    parent_instance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(other_datum: Datum): boolean
    is_array(): boolean
    is_array_like(): boolean
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: ArrayDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArrayDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArrayDatum_ConstructProps)
    _init (config?: ArrayDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Array): ArrayDatum
    static $gtype: GObject.Type
}
export interface ArraySortOptions_ConstructProps extends GObject.Object_ConstructProps {
    order?: SortOrder
}
export class ArraySortOptions {
    /* Properties of Arrow-1.0.Arrow.ArraySortOptions */
    order: SortOrder
    /* Fields of Arrow-1.0.Arrow.ArraySortOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArraySortOptions */
    equal(other_options: ArraySortOptions): boolean
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
    connect(sigName: "notify", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::order", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArraySortOptions_ConstructProps)
    _init (config?: ArraySortOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(order: SortOrder): ArraySortOptions
    static $gtype: GObject.Type
}
export interface BinaryArray_ConstructProps extends Array_ConstructProps {
}
export class BinaryArray {
    /* Fields of Arrow-1.0.Arrow.BinaryArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    get_offsets_buffer(): Buffer
    get_value(i: number): GLib.Bytes
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BinaryArray_ConstructProps)
    _init (config?: BinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BinaryArray
    static $gtype: GObject.Type
}
export interface BinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class BinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryArrayBuilder */
    append(value: Uint8Array[]): boolean
    append_value(value: Uint8Array[]): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: BinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BinaryArrayBuilder_ConstructProps)
    _init (config?: BinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryArrayBuilder
    static $gtype: GObject.Type
}
export interface BinaryDataType_ConstructProps extends DataType_ConstructProps {
}
export class BinaryDataType {
    /* Fields of Arrow-1.0.Arrow.BinaryDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: BinaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BinaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BinaryDataType_ConstructProps)
    _init (config?: BinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryDataType
    static $gtype: GObject.Type
}
export interface BinaryDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class BinaryDictionaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder */
    append_array(array: BinaryArray): boolean
    append_indices(values: number[], is_valids: boolean[] | null): boolean
    append_value(value: Uint8Array[]): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    finish_delta(): [ /* returnType */ boolean, /* out_indices */ Array, /* out_delta */ Array ]
    get_dictionary_length(): number
    insert_memo_values(values: BinaryArray): boolean
    reset_full(): void
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: BinaryDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BinaryDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BinaryDictionaryArrayBuilder_ConstructProps)
    _init (config?: BinaryDictionaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryDictionaryArrayBuilder
    static $gtype: GObject.Type
}
export interface BooleanArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
export class BooleanArray {
    /* Fields of Arrow-1.0.Arrow.BooleanArray */
    parent_instance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BooleanArray */
    and(right: BooleanArray): BooleanArray
    get_value(i: number): boolean
    get_values(): boolean[]
    invert(): BooleanArray
    or(right: BooleanArray): BooleanArray
    xor(right: BooleanArray): BooleanArray
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BooleanArray_ConstructProps)
    _init (config?: BooleanArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BooleanArray
    static $gtype: GObject.Type
}
export interface BooleanArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class BooleanArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BooleanArrayBuilder */
    append(value: boolean): boolean
    append_value(value: boolean): boolean
    append_values(values: boolean[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: BooleanArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BooleanArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BooleanArrayBuilder_ConstructProps)
    _init (config?: BooleanArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BooleanArrayBuilder
    static $gtype: GObject.Type
}
export interface BooleanDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
export class BooleanDataType {
    /* Fields of Arrow-1.0.Arrow.BooleanDataType */
    parent_instance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: BooleanDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BooleanDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BooleanDataType_ConstructProps)
    _init (config?: BooleanDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BooleanDataType
    static $gtype: GObject.Type
}
export interface Buffer_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: object
    data?: GLib.Bytes
    parent?: Buffer
}
export class Buffer {
    /* Fields of Arrow-1.0.Arrow.Buffer */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(other_buffer: Buffer): boolean
    equal_n_bytes(other_buffer: Buffer, n_bytes: number): boolean
    get_capacity(): number
    get_data(): GLib.Bytes
    get_mutable_data(): GLib.Bytes | null
    get_parent(): Buffer | null
    get_size(): number
    is_mutable(): boolean
    slice(offset: number, size: number): Buffer
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
    connect(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array[]): Buffer
    static new_bytes(data: GLib.Bytes): Buffer
    static $gtype: GObject.Type
}
export interface BufferInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
    buffer?: Buffer
}
export class BufferInputStream {
    /* Fields of Arrow-1.0.Arrow.BufferInputStream */
    parent_instance: SeekableInputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BufferInputStream */
    get_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    get_size(): number
    get_support_zero_copy(): boolean
    peek(n_bytes: number): GLib.Bytes
    read_at(position: number, n_bytes: number): Buffer | null
    read_at_bytes(position: number, n_bytes: number): GLib.Bytes | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(n_bytes: number): boolean
    align(alignment: number): boolean
    read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    read_tensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BufferInputStream_ConstructProps)
    _init (config?: BufferInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer): BufferInputStream
    static $gtype: GObject.Type
}
export interface BufferOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export class BufferOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    write_record_batch(record_batch: RecordBatch, options?: WriteOptions | null): number
    write_tensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    is_closed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BufferOutputStream_ConstructProps)
    _init (config?: BufferOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: ResizableBuffer): BufferOutputStream
    static $gtype: GObject.Type
}
export interface CSVReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    allow_newlines_in_values?: boolean
    allow_null_strings?: boolean
    block_size?: number
    check_utf8?: boolean
    delimiter?: number
    escape_character?: number
    generate_column_names?: boolean
    ignore_empty_lines?: boolean
    is_double_quoted?: boolean
    is_escaped?: boolean
    is_quoted?: boolean
    n_skip_rows?: number
    quote_character?: number
    use_threads?: boolean
}
export class CSVReadOptions {
    /* Properties of Arrow-1.0.Arrow.CSVReadOptions */
    allow_newlines_in_values: boolean
    allow_null_strings: boolean
    block_size: number
    check_utf8: boolean
    delimiter: number
    escape_character: number
    generate_column_names: boolean
    ignore_empty_lines: boolean
    is_double_quoted: boolean
    is_escaped: boolean
    is_quoted: boolean
    n_skip_rows: number
    quote_character: number
    use_threads: boolean
    /* Fields of Arrow-1.0.Arrow.CSVReadOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.CSVReadOptions */
    add_column_name(column_name: string): void
    add_column_type(name: string, data_type: DataType): void
    add_false_value(false_value: string): void
    add_null_value(null_value: string): void
    add_schema(schema: Schema): void
    add_true_value(true_value: string): void
    get_column_names(): string[] | null
    get_column_types(): GLib.HashTable
    get_false_values(): string[] | null
    get_null_values(): string[] | null
    get_true_values(): string[] | null
    set_column_names(column_names: string[]): void
    set_false_values(false_values: string[]): void
    set_null_values(null_values: string[]): void
    set_true_values(true_values: string[]): void
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
    connect(sigName: "notify", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-newlines-in-values", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-null-strings", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-null-strings", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::block-size", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::check-utf8", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::check-utf8", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delimiter", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delimiter", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::escape-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::escape-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generate-column-names", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generate-column-names", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-empty-lines", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-empty-lines", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-double-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-double-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-escaped", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-escaped", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-skip-rows", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-skip-rows", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quote-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quote-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-threads", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CSVReadOptions_ConstructProps)
    _init (config?: CSVReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CSVReadOptions
    static $gtype: GObject.Type
}
export interface CSVReader_ConstructProps extends GObject.Object_ConstructProps {
    csv_table_reader?: object
}
export class CSVReader {
    /* Fields of Arrow-1.0.Arrow.CSVReader */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.CSVReader */
    read(): Table | null
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
    connect(sigName: "notify", callback: (($obj: CSVReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CSVReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CSVReader_ConstructProps)
    _init (config?: CSVReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input: InputStream, options?: CSVReadOptions | null): CSVReader
    static $gtype: GObject.Type
}
export interface CastOptions_ConstructProps extends GObject.Object_ConstructProps {
    allow_decimal_truncate?: boolean
    allow_float_truncate?: boolean
    allow_int_overflow?: boolean
    allow_invalid_utf8?: boolean
    allow_time_overflow?: boolean
    allow_time_truncate?: boolean
    to_data_type?: DataType
}
export class CastOptions {
    /* Properties of Arrow-1.0.Arrow.CastOptions */
    allow_decimal_truncate: boolean
    allow_float_truncate: boolean
    allow_int_overflow: boolean
    allow_invalid_utf8: boolean
    allow_time_overflow: boolean
    allow_time_truncate: boolean
    to_data_type: DataType
    /* Fields of Arrow-1.0.Arrow.CastOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-decimal-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-decimal-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-float-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-float-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-int-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-int-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-invalid-utf8", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-invalid-utf8", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-time-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-time-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to-data-type", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-data-type", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CastOptions_ConstructProps)
    _init (config?: CastOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CastOptions
    static $gtype: GObject.Type
}
export interface ChunkedArray_ConstructProps extends GObject.Object_ConstructProps {
    chunked_array?: object
}
export class ChunkedArray {
    /* Fields of Arrow-1.0.Arrow.ChunkedArray */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ChunkedArray */
    equal(other_chunked_array: ChunkedArray): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): ChunkedArray | null
    filter_chunked_array(filter: ChunkedArray, options?: FilterOptions | null): ChunkedArray | null
    get_chunk(i: number): Array
    get_chunks(): Array[]
    get_length(): number
    get_n_chunks(): number
    get_n_nulls(): number
    get_n_rows(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    slice(offset: number, length: number): ChunkedArray
    sort_indices(order: SortOrder): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): ChunkedArray | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
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
    connect(sigName: "notify", callback: (($obj: ChunkedArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChunkedArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChunkedArray_ConstructProps)
    _init (config?: ChunkedArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(chunks: Array[]): ChunkedArray
    static $gtype: GObject.Type
}
export interface ChunkedArrayDatum_ConstructProps extends Datum_ConstructProps {
    value?: ChunkedArray
}
export class ChunkedArrayDatum {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayDatum */
    parent_instance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(other_datum: Datum): boolean
    is_array(): boolean
    is_array_like(): boolean
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: ChunkedArrayDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChunkedArrayDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChunkedArrayDatum_ConstructProps)
    _init (config?: ChunkedArrayDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: ChunkedArray): ChunkedArrayDatum
    static $gtype: GObject.Type
}
export interface Codec_ConstructProps extends GObject.Object_ConstructProps {
    codec?: object
}
export class Codec {
    /* Fields of Arrow-1.0.Arrow.Codec */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Codec */
    get_compression_level(): number
    get_compression_type(): CompressionType
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: Codec, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Codec, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Codec_ConstructProps)
    _init (config?: Codec_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: CompressionType): Codec
    static $gtype: GObject.Type
}
export interface CompareOptions_ConstructProps extends GObject.Object_ConstructProps {
    operator?: CompareOperator
}
export class CompareOptions {
    /* Properties of Arrow-1.0.Arrow.CompareOptions */
    operator: CompareOperator
    /* Fields of Arrow-1.0.Arrow.CompareOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CompareOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompareOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::operator", callback: (($obj: CompareOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CompareOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompareOptions_ConstructProps)
    _init (config?: CompareOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompareOptions
    static $gtype: GObject.Type
}
export interface CompressedInputStream_ConstructProps extends InputStream_ConstructProps {
    codec?: Codec
    raw?: InputStream
}
export class CompressedInputStream {
    /* Fields of Arrow-1.0.Arrow.CompressedInputStream */
    parent_instance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(n_bytes: number): boolean
    align(alignment: number): boolean
    read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    read_tensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompressedInputStream_ConstructProps)
    _init (config?: CompressedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(codec: Codec, raw: InputStream): CompressedInputStream
    static $gtype: GObject.Type
}
export interface CompressedOutputStream_ConstructProps extends OutputStream_ConstructProps {
    codec?: Codec
    raw?: OutputStream
}
export class CompressedOutputStream {
    /* Fields of Arrow-1.0.Arrow.CompressedOutputStream */
    parent_instance: OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    write_record_batch(record_batch: RecordBatch, options?: WriteOptions | null): number
    write_tensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    is_closed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompressedOutputStream_ConstructProps)
    _init (config?: CompressedOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(codec: Codec, raw: OutputStream): CompressedOutputStream
    static $gtype: GObject.Type
}
export interface CountOptions_ConstructProps extends GObject.Object_ConstructProps {
    mode?: CountMode
}
export class CountOptions {
    /* Properties of Arrow-1.0.Arrow.CountOptions */
    mode: CountMode
    /* Fields of Arrow-1.0.Arrow.CountOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CountOptions_ConstructProps)
    _init (config?: CountOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CountOptions
    static $gtype: GObject.Type
}
export interface DataType_ConstructProps extends GObject.Object_ConstructProps {
    data_type?: object
}
export class DataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataType_ConstructProps)
    _init (config?: DataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Date32Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Date32Array {
    /* Fields of Arrow-1.0.Arrow.Date32Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date32Array */
    get_value(i: number): number
    get_values(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Date32Array_ConstructProps)
    _init (config?: Date32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date32Array
    static $gtype: GObject.Type
}
export interface Date32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Date32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date32ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Date32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Date32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Date32ArrayBuilder_ConstructProps)
    _init (config?: Date32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date32ArrayBuilder
    static $gtype: GObject.Type
}
export interface Date32DataType_ConstructProps extends DataType_ConstructProps {
}
export class Date32DataType {
    /* Fields of Arrow-1.0.Arrow.Date32DataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Date32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Date32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Date32DataType_ConstructProps)
    _init (config?: Date32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date32DataType
    static $gtype: GObject.Type
}
export interface Date64Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Date64Array {
    /* Fields of Arrow-1.0.Arrow.Date64Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date64Array */
    get_value(i: number): number
    get_values(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Date64Array_ConstructProps)
    _init (config?: Date64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date64Array
    static $gtype: GObject.Type
}
export interface Date64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Date64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date64ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Date64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Date64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Date64ArrayBuilder_ConstructProps)
    _init (config?: Date64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date64ArrayBuilder
    static $gtype: GObject.Type
}
export interface Date64DataType_ConstructProps extends DataType_ConstructProps {
}
export class Date64DataType {
    /* Fields of Arrow-1.0.Arrow.Date64DataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Date64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Date64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Date64DataType_ConstructProps)
    _init (config?: Date64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date64DataType
    static $gtype: GObject.Type
}
export interface Datum_ConstructProps extends GObject.Object_ConstructProps {
    datum?: object
}
export class Datum {
    /* Fields of Arrow-1.0.Arrow.Datum */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(other_datum: Datum): boolean
    is_array(): boolean
    is_array_like(): boolean
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Datum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Datum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Datum_ConstructProps)
    _init (config?: Datum_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Decimal128_ConstructProps extends GObject.Object_ConstructProps {
    decimal128?: object
}
export class Decimal128 {
    /* Fields of Arrow-1.0.Arrow.Decimal128 */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128 */
    abs(): void
    copy(): Decimal128
    divide(right: Decimal128): [ /* returnType */ Decimal128 | null, /* remainder */ Decimal128 | null ]
    equal(other_decimal: Decimal128): boolean
    greater_than(other_decimal: Decimal128): boolean
    greater_than_or_equal(other_decimal: Decimal128): boolean
    less_than(other_decimal: Decimal128): boolean
    less_than_or_equal(other_decimal: Decimal128): boolean
    minus(right: Decimal128): Decimal128
    multiply(right: Decimal128): Decimal128
    negate(): void
    not_equal(other_decimal: Decimal128): boolean
    plus(right: Decimal128): Decimal128
    rescale(original_scale: number, new_scale: number): Decimal128 | null
    to_bytes(): GLib.Bytes
    to_integer(): number
    to_string(): string
    to_string_scale(scale: number): string
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
    connect(sigName: "notify", callback: (($obj: Decimal128, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal128, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal128_ConstructProps)
    _init (config?: Decimal128_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_integer(data: number): Decimal128
    static new_string(data: string): Decimal128
    static $gtype: GObject.Type
}
export interface Decimal128Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}
export class Decimal128Array {
    /* Fields of Arrow-1.0.Arrow.Decimal128Array */
    parent_instance: FixedSizeBinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128Array */
    format_value(i: number): string
    get_value(i: number): Decimal128
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    get_byte_width(): number
    get_value(i: number): GLib.Bytes
    get_values_bytes(): GLib.Bytes
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal128Array_ConstructProps)
    _init (config?: Decimal128Array_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Decimal128ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}
export class Decimal128ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayBuilder */
    parent_instance: FixedSizeBinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128ArrayBuilder */
    append(value: Decimal128): boolean
    append_value(value?: Decimal128 | null): boolean
    append_values(values: Decimal128[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    append_value(value: Uint8Array[] | null): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    append_values_packed(values: GLib.Bytes, is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Decimal128ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal128ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal128ArrayBuilder_ConstructProps)
    _init (config?: Decimal128ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: Decimal128DataType): Decimal128ArrayBuilder
    static new(data_type: FixedSizeBinaryDataType): Decimal128ArrayBuilder
    static $gtype: GObject.Type
}
export interface Decimal128DataType_ConstructProps extends DecimalDataType_ConstructProps {
}
export class Decimal128DataType {
    /* Fields of Arrow-1.0.Arrow.Decimal128DataType */
    parent_instance: DecimalDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    get_precision(): number
    get_scale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    get_byte_width(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Decimal128DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal128DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal128DataType_ConstructProps)
    _init (config?: Decimal128DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): Decimal128DataType
    static new(byte_width: number): Decimal128DataType
    static max_precision(): number
    static $gtype: GObject.Type
}
export interface Decimal256_ConstructProps extends GObject.Object_ConstructProps {
    decimal256?: object
}
export class Decimal256 {
    /* Fields of Arrow-1.0.Arrow.Decimal256 */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256 */
    abs(): void
    copy(): Decimal256
    divide(right: Decimal256): [ /* returnType */ Decimal256 | null, /* remainder */ Decimal256 | null ]
    equal(other_decimal: Decimal256): boolean
    greater_than(other_decimal: Decimal256): boolean
    greater_than_or_equal(other_decimal: Decimal256): boolean
    less_than(other_decimal: Decimal256): boolean
    less_than_or_equal(other_decimal: Decimal256): boolean
    multiply(right: Decimal256): Decimal256
    negate(): void
    not_equal(other_decimal: Decimal256): boolean
    plus(right: Decimal256): Decimal256
    rescale(original_scale: number, new_scale: number): Decimal256 | null
    to_bytes(): GLib.Bytes
    to_string(): string
    to_string_scale(scale: number): string
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
    connect(sigName: "notify", callback: (($obj: Decimal256, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal256, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal256_ConstructProps)
    _init (config?: Decimal256_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_integer(data: number): Decimal256
    static new_string(data: string): Decimal256
    static $gtype: GObject.Type
}
export interface Decimal256Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}
export class Decimal256Array {
    /* Fields of Arrow-1.0.Arrow.Decimal256Array */
    parent_instance: FixedSizeBinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256Array */
    format_value(i: number): string
    get_value(i: number): Decimal256
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    get_byte_width(): number
    get_value(i: number): GLib.Bytes
    get_values_bytes(): GLib.Bytes
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal256Array_ConstructProps)
    _init (config?: Decimal256Array_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Decimal256ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}
export class Decimal256ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayBuilder */
    parent_instance: FixedSizeBinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256ArrayBuilder */
    append_value(value?: Decimal256 | null): boolean
    append_values(values: Decimal256[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    append_value(value: Uint8Array[] | null): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    append_values_packed(values: GLib.Bytes, is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Decimal256ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal256ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal256ArrayBuilder_ConstructProps)
    _init (config?: Decimal256ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: Decimal256DataType): Decimal256ArrayBuilder
    static new(data_type: FixedSizeBinaryDataType): Decimal256ArrayBuilder
    static $gtype: GObject.Type
}
export interface Decimal256DataType_ConstructProps extends DecimalDataType_ConstructProps {
}
export class Decimal256DataType {
    /* Fields of Arrow-1.0.Arrow.Decimal256DataType */
    parent_instance: DecimalDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    get_precision(): number
    get_scale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    get_byte_width(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Decimal256DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decimal256DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decimal256DataType_ConstructProps)
    _init (config?: Decimal256DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): Decimal256DataType
    static new(byte_width: number): Decimal256DataType
    static max_precision(): number
    static $gtype: GObject.Type
}
export interface DecimalDataType_ConstructProps extends FixedSizeBinaryDataType_ConstructProps {
}
export class DecimalDataType {
    /* Fields of Arrow-1.0.Arrow.DecimalDataType */
    parent_instance: FixedSizeBinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    get_precision(): number
    get_scale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    get_byte_width(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: DecimalDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecimalDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DecimalDataType_ConstructProps)
    _init (config?: DecimalDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): DecimalDataType
    static new(byte_width: number): DecimalDataType
    static $gtype: GObject.Type
}
export interface DenseUnionArray_ConstructProps extends UnionArray_ConstructProps {
    value_offsets?: Int32Array
}
export class DenseUnionArray {
    /* Fields of Arrow-1.0.Arrow.DenseUnionArray */
    parent_instance: UnionArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    get_field(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DenseUnionArray_ConstructProps)
    _init (config?: DenseUnionArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]): DenseUnionArray
    static new_data_type(data_type: DenseUnionDataType, type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]): DenseUnionArray
    static $gtype: GObject.Type
}
export interface DenseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}
export class DenseUnionDataType {
    /* Fields of Arrow-1.0.Arrow.DenseUnionDataType */
    parent_instance: UnionDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    get_field(i: number): Field | null
    get_fields(): Field[]
    get_n_fields(): number
    get_type_codes(): Uint8Array[]
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: DenseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DenseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DenseUnionDataType_ConstructProps)
    _init (config?: DenseUnionDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[], type_codes: Uint8Array[]): DenseUnionDataType
    static $gtype: GObject.Type
}
export interface DictionaryArray_ConstructProps extends Array_ConstructProps {
    dictionary?: Array
    indices?: Array
}
export class DictionaryArray {
    /* Fields of Arrow-1.0.Arrow.DictionaryArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DictionaryArray */
    get_dictionary(): Array
    get_dictionary_data_type(): DictionaryDataType
    get_indices(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DictionaryArray_ConstructProps)
    _init (config?: DictionaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: DataType, indices: Array, dictionary: Array): DictionaryArray
    static $gtype: GObject.Type
}
export interface DictionaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
export class DictionaryDataType {
    /* Fields of Arrow-1.0.Arrow.DictionaryDataType */
    parent_instance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DictionaryDataType */
    get_index_data_type(): DataType
    get_value_data_type(): DataType
    is_ordered(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: DictionaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DictionaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DictionaryDataType_ConstructProps)
    _init (config?: DictionaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index_data_type: DataType, value_data_type: DataType, ordered: boolean): DictionaryDataType
    static $gtype: GObject.Type
}
export interface DoubleArray_ConstructProps extends NumericArray_ConstructProps {
}
export class DoubleArray {
    /* Fields of Arrow-1.0.Arrow.DoubleArray */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DoubleArray */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DoubleArray_ConstructProps)
    _init (config?: DoubleArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): DoubleArray
    static $gtype: GObject.Type
}
export interface DoubleArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class DoubleArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DoubleArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: DoubleArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DoubleArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DoubleArrayBuilder_ConstructProps)
    _init (config?: DoubleArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DoubleArrayBuilder
    static $gtype: GObject.Type
}
export interface DoubleDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}
export class DoubleDataType {
    /* Fields of Arrow-1.0.Arrow.DoubleDataType */
    parent_instance: FloatingPointDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: DoubleDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DoubleDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DoubleDataType_ConstructProps)
    _init (config?: DoubleDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DoubleDataType
    static $gtype: GObject.Type
}
export interface ExecuteContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class ExecuteContext {
    /* Fields of Arrow-1.0.Arrow.ExecuteContext */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ExecuteContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExecuteContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExecuteContext_ConstructProps)
    _init (config?: ExecuteContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExecuteContext
    static $gtype: GObject.Type
}
export interface ExtensionArray_ConstructProps extends Array_ConstructProps {
    storage?: Array
}
export class ExtensionArray {
    /* Fields of Arrow-1.0.Arrow.ExtensionArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionArray */
    get_storage(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtensionArray_ConstructProps)
    _init (config?: ExtensionArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtensionDataType_ConstructProps extends DataType_ConstructProps {
    storage_data_type?: DataType
}
export class ExtensionDataType {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionDataType */
    get_extension_name(): string
    wrap_array(storage: Array): ExtensionArray
    wrap_chunked_array(storage: ChunkedArray): ChunkedArray
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    /* Virtual methods of Arrow-1.0.Arrow.ExtensionDataType */
    vfunc_equal(other_data_type: ExtensionDataType): boolean
    vfunc_get_array_gtype(): GObject.Type
    vfunc_get_extension_name(): string
    vfunc_serialize(): GLib.Bytes
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtensionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtensionDataType_ConstructProps)
    _init (config?: ExtensionDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtensionDataTypeRegistry_ConstructProps extends GObject.Object_ConstructProps {
    registry?: object
}
export class ExtensionDataTypeRegistry {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistry */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionDataTypeRegistry */
    lookup(name: string): ExtensionDataType
    register(data_type: ExtensionDataType): boolean
    unregister(name: string): boolean
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
    connect(sigName: "notify", callback: (($obj: ExtensionDataTypeRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionDataTypeRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtensionDataTypeRegistry_ConstructProps)
    _init (config?: ExtensionDataTypeRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static default(): ExtensionDataTypeRegistry
    static $gtype: GObject.Type
}
export interface FeatherFileReader_ConstructProps extends GObject.Object_ConstructProps {
    feather_reader?: object
}
export class FeatherFileReader {
    /* Fields of Arrow-1.0.Arrow.FeatherFileReader */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FeatherFileReader */
    get_version(): number
    read(): Table
    read_indices(indices: number[]): Table
    read_names(names: string[]): Table
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
    connect(sigName: "notify", callback: (($obj: FeatherFileReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeatherFileReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeatherFileReader_ConstructProps)
    _init (config?: FeatherFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): FeatherFileReader
    static $gtype: GObject.Type
}
export interface FeatherWriteProperties_ConstructProps extends GObject.Object_ConstructProps {
    compression?: CompressionType
}
export class FeatherWriteProperties {
    /* Properties of Arrow-1.0.Arrow.FeatherWriteProperties */
    compression: CompressionType
    /* Fields of Arrow-1.0.Arrow.FeatherWriteProperties */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeatherWriteProperties_ConstructProps)
    _init (config?: FeatherWriteProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeatherWriteProperties
    static $gtype: GObject.Type
}
export interface Field_ConstructProps extends GObject.Object_ConstructProps {
    data_type?: DataType
    field?: object
}
export class Field {
    /* Fields of Arrow-1.0.Arrow.Field */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Field */
    equal(other_field: Field): boolean
    get_data_type(): DataType
    get_metadata(): GLib.HashTable | null
    get_name(): string
    has_metadata(): boolean
    is_nullable(): boolean
    remove_metadata(): Field
    to_string(): string
    to_string_metadata(show_metadata: boolean): string
    with_merged_metadata(metadata: GLib.HashTable): Field
    with_metadata(metadata: GLib.HashTable): Field
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
    connect(sigName: "notify", callback: (($obj: Field, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Field, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Field_ConstructProps)
    _init (config?: Field_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, data_type: DataType): Field
    static new_full(name: string, data_type: DataType, nullable: boolean): Field
    static $gtype: GObject.Type
}
export interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
    mtime?: number
    path?: string
    size?: number
    type?: FileType
}
export class FileInfo {
    /* Properties of Arrow-1.0.Arrow.FileInfo */
    readonly base_name: string
    readonly dir_name: string
    readonly extension: string
    mtime: number
    path: string
    size: number
    type: FileType
    /* Fields of Arrow-1.0.Arrow.FileInfo */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileInfo */
    equal(other_file_info: FileInfo): boolean
    is_dir(): boolean
    is_file(): boolean
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dir-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dir-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtime", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileInfo_ConstructProps)
    _init (config?: FileInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileInfo
    static $gtype: GObject.Type
}
export interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export class FileOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    write_record_batch(record_batch: RecordBatch, options?: WriteOptions | null): number
    write_tensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    is_closed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileOutputStream_ConstructProps)
    _init (config?: FileOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, append: boolean): FileOutputStream
    static $gtype: GObject.Type
}
export interface FileSelector_ConstructProps extends GObject.Object_ConstructProps {
    allow_not_found?: boolean
    base_dir?: string
    max_recursion?: number
    recursive?: boolean
}
export class FileSelector {
    /* Properties of Arrow-1.0.Arrow.FileSelector */
    allow_not_found: boolean
    base_dir: string
    max_recursion: number
    recursive: boolean
    /* Fields of Arrow-1.0.Arrow.FileSelector */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-not-found", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-not-found", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::base-dir", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-dir", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-recursion", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recursive", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileSelector_ConstructProps)
    _init (config?: FileSelector_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileSystem_ConstructProps extends GObject.Object_ConstructProps {
    file_system?: object
}
export class FileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copy_file(src: string, dest: string): boolean
    create_dir(path: string, recursive: boolean): boolean
    delete_dir(path: string): boolean
    delete_dir_contents(path: string): boolean
    delete_file(path: string): boolean
    delete_files(paths: string[]): boolean
    get_file_info(path: string): FileInfo | null
    get_file_infos_paths(paths: string[]): FileInfo[]
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string
    move(src: string, dest: string): boolean
    open_append_stream(path: string): OutputStream | null
    open_input_file(path: string): SeekableInputStream | null
    open_input_stream(path: string): InputStream | null
    open_output_stream(path: string): OutputStream | null
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
    connect(sigName: "notify", callback: (($obj: FileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileSystem_ConstructProps)
    _init (config?: FileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(uri: string): FileSystem | null
    static $gtype: GObject.Type
}
export interface FilterOptions_ConstructProps extends GObject.Object_ConstructProps {
    null_selection_behavior?: FilterNullSelectionBehavior
}
export class FilterOptions {
    /* Properties of Arrow-1.0.Arrow.FilterOptions */
    null_selection_behavior: FilterNullSelectionBehavior
    /* Fields of Arrow-1.0.Arrow.FilterOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::null-selection-behavior", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-selection-behavior", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOptions_ConstructProps)
    _init (config?: FilterOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterOptions
    static $gtype: GObject.Type
}
export interface FixedSizeBinaryArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
export class FixedSizeBinaryArray {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    parent_instance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    get_byte_width(): number
    get_value(i: number): GLib.Bytes
    get_values_bytes(): GLib.Bytes
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FixedSizeBinaryArray_ConstructProps)
    _init (config?: FixedSizeBinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: FixedSizeBinaryDataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): FixedSizeBinaryArray
    static $gtype: GObject.Type
}
export interface FixedSizeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class FixedSizeBinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    append_value(value: Uint8Array[] | null): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    append_values_packed(values: GLib.Bytes, is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: FixedSizeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FixedSizeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FixedSizeBinaryArrayBuilder_ConstructProps)
    _init (config?: FixedSizeBinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    static $gtype: GObject.Type
}
export interface FixedSizeBinaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
export class FixedSizeBinaryDataType {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    get_byte_width(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: FixedSizeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FixedSizeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FixedSizeBinaryDataType_ConstructProps)
    _init (config?: FixedSizeBinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(byte_width: number): FixedSizeBinaryDataType
    static $gtype: GObject.Type
}
export interface FixedWidthDataType_ConstructProps extends DataType_ConstructProps {
}
export class FixedWidthDataType {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: FixedWidthDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FixedWidthDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FixedWidthDataType_ConstructProps)
    _init (config?: FixedWidthDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FloatArray_ConstructProps extends NumericArray_ConstructProps {
}
export class FloatArray {
    /* Fields of Arrow-1.0.Arrow.FloatArray */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FloatArray */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FloatArray_ConstructProps)
    _init (config?: FloatArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): FloatArray
    static $gtype: GObject.Type
}
export interface FloatArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class FloatArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.FloatArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FloatArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: FloatArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FloatArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FloatArrayBuilder_ConstructProps)
    _init (config?: FloatArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FloatArrayBuilder
    static $gtype: GObject.Type
}
export interface FloatDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}
export class FloatDataType {
    /* Fields of Arrow-1.0.Arrow.FloatDataType */
    parent_instance: FloatingPointDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: FloatDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FloatDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FloatDataType_ConstructProps)
    _init (config?: FloatDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FloatDataType
    static $gtype: GObject.Type
}
export interface FloatingPointDataType_ConstructProps extends NumericDataType_ConstructProps {
}
export class FloatingPointDataType {
    /* Fields of Arrow-1.0.Arrow.FloatingPointDataType */
    parent_instance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: FloatingPointDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FloatingPointDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FloatingPointDataType_ConstructProps)
    _init (config?: FloatingPointDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Function_ConstructProps extends GObject.Object_ConstructProps {
    "function"?: object
}
export class Function {
    /* Fields of Arrow-1.0.Arrow.Function */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Function */
    execute(args: Datum[], options?: FunctionOptions | null, context?: ExecuteContext | null): Datum | null
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
    connect(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Function_ConstructProps)
    _init (config?: Function_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): Function
    static $gtype: GObject.Type
}
export interface GIOInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
    raw?: Gio.InputStream
}
export class GIOInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    parent_instance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.GIOInputStream */
    get_raw(): Gio.InputStream
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    get_size(): number
    get_support_zero_copy(): boolean
    peek(n_bytes: number): GLib.Bytes
    read_at(position: number, n_bytes: number): Buffer | null
    read_at_bytes(position: number, n_bytes: number): GLib.Bytes | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(n_bytes: number): boolean
    align(alignment: number): boolean
    read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    read_tensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GIOInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GIOInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GIOInputStream_ConstructProps)
    _init (config?: GIOInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gio_input_stream: Gio.InputStream): GIOInputStream
    static $gtype: GObject.Type
}
export interface GIOOutputStream_ConstructProps extends OutputStream_ConstructProps {
    raw?: Gio.OutputStream
}
export class GIOOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.GIOOutputStream */
    get_raw(): Gio.OutputStream
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    write_record_batch(record_batch: RecordBatch, options?: WriteOptions | null): number
    write_tensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    is_closed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GIOOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GIOOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GIOOutputStream_ConstructProps)
    _init (config?: GIOOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gio_output_stream: Gio.OutputStream): GIOOutputStream
    static $gtype: GObject.Type
}
export interface HDFSFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
export class HDFSFileSystem {
    /* Fields of Arrow-1.0.Arrow.HDFSFileSystem */
    parent_instance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copy_file(src: string, dest: string): boolean
    create_dir(path: string, recursive: boolean): boolean
    delete_dir(path: string): boolean
    delete_dir_contents(path: string): boolean
    delete_file(path: string): boolean
    delete_files(paths: string[]): boolean
    get_file_info(path: string): FileInfo | null
    get_file_infos_paths(paths: string[]): FileInfo[]
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string
    move(src: string, dest: string): boolean
    open_append_stream(path: string): OutputStream | null
    open_input_file(path: string): SeekableInputStream | null
    open_input_stream(path: string): InputStream | null
    open_output_stream(path: string): OutputStream | null
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
    connect(sigName: "notify", callback: (($obj: HDFSFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HDFSFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HDFSFileSystem_ConstructProps)
    _init (config?: HDFSFileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends Gio.InputStream_ConstructProps {
    input_stream?: object
}
export class InputStream {
    /* Fields of Arrow-1.0.Arrow.InputStream */
    parent_instance: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(n_bytes: number): boolean
    align(alignment: number): boolean
    read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    read_tensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Int16Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Int16Array {
    /* Fields of Arrow-1.0.Arrow.Int16Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int16Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int16Array_ConstructProps)
    _init (config?: Int16Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int16Array
    static $gtype: GObject.Type
}
export interface Int16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Int16ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int16ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Int16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int16ArrayBuilder_ConstructProps)
    _init (config?: Int16ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int16ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class Int16DataType {
    /* Fields of Arrow-1.0.Arrow.Int16DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Int16DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int16DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int16DataType_ConstructProps)
    _init (config?: Int16DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int16DataType
    static $gtype: GObject.Type
}
export interface Int32Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Int32Array {
    /* Fields of Arrow-1.0.Arrow.Int32Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int32Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int32Array_ConstructProps)
    _init (config?: Int32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int32Array
    static $gtype: GObject.Type
}
export interface Int32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Int32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int32ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Int32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int32ArrayBuilder_ConstructProps)
    _init (config?: Int32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int32ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class Int32DataType {
    /* Fields of Arrow-1.0.Arrow.Int32DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Int32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int32DataType_ConstructProps)
    _init (config?: Int32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int32DataType
    static $gtype: GObject.Type
}
export interface Int64Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Int64Array {
    /* Fields of Arrow-1.0.Arrow.Int64Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int64Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int64Array_ConstructProps)
    _init (config?: Int64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int64Array
    static $gtype: GObject.Type
}
export interface Int64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Int64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int64ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Int64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int64ArrayBuilder_ConstructProps)
    _init (config?: Int64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int64ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class Int64DataType {
    /* Fields of Arrow-1.0.Arrow.Int64DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Int64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int64DataType_ConstructProps)
    _init (config?: Int64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int64DataType
    static $gtype: GObject.Type
}
export interface Int8Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Int8Array {
    /* Fields of Arrow-1.0.Arrow.Int8Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int8Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): Uint8Array[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int8Array_ConstructProps)
    _init (config?: Int8Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int8Array
    static $gtype: GObject.Type
}
export interface Int8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Int8ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int8ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: Uint8Array[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Int8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int8ArrayBuilder_ConstructProps)
    _init (config?: Int8ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int8ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class Int8DataType {
    /* Fields of Arrow-1.0.Arrow.Int8DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Int8DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Int8DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Int8DataType_ConstructProps)
    _init (config?: Int8DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int8DataType
    static $gtype: GObject.Type
}
export interface IntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class IntArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.IntArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: IntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IntArrayBuilder_ConstructProps)
    _init (config?: IntArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IntArrayBuilder
    static $gtype: GObject.Type
}
export interface IntegerDataType_ConstructProps extends NumericDataType_ConstructProps {
}
export class IntegerDataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    parent_instance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: IntegerDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IntegerDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IntegerDataType_ConstructProps)
    _init (config?: IntegerDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface JSONReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    allow_newlines_in_values?: boolean
    block_size?: number
    schema?: Schema
    unexpected_field_behavior?: JSONReadUnexpectedFieldBehavior
    use_threads?: boolean
}
export class JSONReadOptions {
    /* Properties of Arrow-1.0.Arrow.JSONReadOptions */
    allow_newlines_in_values: boolean
    block_size: number
    schema: Schema
    unexpected_field_behavior: JSONReadUnexpectedFieldBehavior
    use_threads: boolean
    /* Fields of Arrow-1.0.Arrow.JSONReadOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-newlines-in-values", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::block-size", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::schema", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unexpected-field-behavior", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unexpected-field-behavior", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-threads", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JSONReadOptions_ConstructProps)
    _init (config?: JSONReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): JSONReadOptions
    static $gtype: GObject.Type
}
export interface JSONReader_ConstructProps extends GObject.Object_ConstructProps {
    json_table_reader?: object
}
export class JSONReader {
    /* Fields of Arrow-1.0.Arrow.JSONReader */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.JSONReader */
    read(): Table | null
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
    connect(sigName: "notify", callback: (($obj: JSONReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JSONReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JSONReader_ConstructProps)
    _init (config?: JSONReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input: InputStream, options?: JSONReadOptions | null): JSONReader
    static $gtype: GObject.Type
}
export interface LargeBinaryArray_ConstructProps extends Array_ConstructProps {
}
export class LargeBinaryArray {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    get_offsets_buffer(): Buffer
    get_value(i: number): GLib.Bytes
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeBinaryArray_ConstructProps)
    _init (config?: LargeBinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): LargeBinaryArray
    static $gtype: GObject.Type
}
export interface LargeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class LargeBinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    append_value(value: Uint8Array[]): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: LargeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeBinaryArrayBuilder_ConstructProps)
    _init (config?: LargeBinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeBinaryArrayBuilder
    static $gtype: GObject.Type
}
export interface LargeBinaryDataType_ConstructProps extends DataType_ConstructProps {
}
export class LargeBinaryDataType {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: LargeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeBinaryDataType_ConstructProps)
    _init (config?: LargeBinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeBinaryDataType
    static $gtype: GObject.Type
}
export interface LargeListArray_ConstructProps extends Array_ConstructProps {
    raw_values?: Array
}
export class LargeListArray {
    /* Fields of Arrow-1.0.Arrow.LargeListArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListArray */
    get_value(i: number): Array
    get_value_length(i: number): number
    get_value_offset(i: number): number
    get_value_offsets(): number[]
    get_value_type(): DataType
    get_values(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeListArray_ConstructProps)
    _init (config?: LargeListArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number): LargeListArray
    static $gtype: GObject.Type
}
export interface LargeListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class LargeListArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListArrayBuilder */
    append_value(): boolean
    get_value_builder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: LargeListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeListArrayBuilder_ConstructProps)
    _init (config?: LargeListArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: LargeListDataType): LargeListArrayBuilder
    static $gtype: GObject.Type
}
export interface LargeListDataType_ConstructProps extends DataType_ConstructProps {
}
export class LargeListDataType {
    /* Fields of Arrow-1.0.Arrow.LargeListDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListDataType */
    get_field(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: LargeListDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeListDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeListDataType_ConstructProps)
    _init (config?: LargeListDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(field: Field): LargeListDataType
    static $gtype: GObject.Type
}
export interface LargeStringArray_ConstructProps extends LargeBinaryArray_ConstructProps {
}
export class LargeStringArray {
    /* Fields of Arrow-1.0.Arrow.LargeStringArray */
    parent_instance: LargeBinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeStringArray */
    get_string(i: number): string
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    get_offsets_buffer(): Buffer
    get_value(i: number): GLib.Bytes
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeStringArray_ConstructProps)
    _init (config?: LargeStringArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): LargeStringArray
    static $gtype: GObject.Type
}
export interface LargeStringArrayBuilder_ConstructProps extends LargeBinaryArrayBuilder_ConstructProps {
}
export class LargeStringArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayBuilder */
    parent_instance: LargeBinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeStringArrayBuilder */
    append_string(value: string): boolean
    append_strings(values: string[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    append_value(value: Uint8Array[]): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: LargeStringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeStringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeStringArrayBuilder_ConstructProps)
    _init (config?: LargeStringArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeStringArrayBuilder
    static $gtype: GObject.Type
}
export interface LargeStringDataType_ConstructProps extends DataType_ConstructProps {
}
export class LargeStringDataType {
    /* Fields of Arrow-1.0.Arrow.LargeStringDataType */
    parent_instance: LargeBinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: LargeStringDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LargeStringDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LargeStringDataType_ConstructProps)
    _init (config?: LargeStringDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeStringDataType
    static $gtype: GObject.Type
}
export interface ListArray_ConstructProps extends Array_ConstructProps {
    raw_values?: Array
}
export class ListArray {
    /* Fields of Arrow-1.0.Arrow.ListArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListArray */
    get_value(i: number): Array
    get_value_length(i: number): number
    get_value_offset(i: number): number
    get_value_offsets(): number[]
    get_value_type(): DataType
    get_values(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListArray_ConstructProps)
    _init (config?: ListArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number): ListArray
    static $gtype: GObject.Type
}
export interface ListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class ListArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ListArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListArrayBuilder */
    append(): boolean
    append_value(): boolean
    get_value_builder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: ListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListArrayBuilder_ConstructProps)
    _init (config?: ListArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: ListDataType): ListArrayBuilder
    static $gtype: GObject.Type
}
export interface ListDataType_ConstructProps extends DataType_ConstructProps {
}
export class ListDataType {
    /* Fields of Arrow-1.0.Arrow.ListDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListDataType */
    get_field(): Field
    get_value_field(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: ListDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListDataType_ConstructProps)
    _init (config?: ListDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(field: Field): ListDataType
    static $gtype: GObject.Type
}
export interface LocalFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
export class LocalFileSystem {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystem */
    parent_instance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copy_file(src: string, dest: string): boolean
    create_dir(path: string, recursive: boolean): boolean
    delete_dir(path: string): boolean
    delete_dir_contents(path: string): boolean
    delete_file(path: string): boolean
    delete_files(paths: string[]): boolean
    get_file_info(path: string): FileInfo | null
    get_file_infos_paths(paths: string[]): FileInfo[]
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string
    move(src: string, dest: string): boolean
    open_append_stream(path: string): OutputStream | null
    open_input_file(path: string): SeekableInputStream | null
    open_input_stream(path: string): InputStream | null
    open_output_stream(path: string): OutputStream | null
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
    connect(sigName: "notify", callback: (($obj: LocalFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocalFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocalFileSystem_ConstructProps)
    _init (config?: LocalFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options?: LocalFileSystemOptions | null): LocalFileSystem
    static $gtype: GObject.Type
}
export interface LocalFileSystemOptions_ConstructProps extends GObject.Object_ConstructProps {
    use_mmap?: boolean
}
export class LocalFileSystemOptions {
    /* Properties of Arrow-1.0.Arrow.LocalFileSystemOptions */
    use_mmap: boolean
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-mmap", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-mmap", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocalFileSystemOptions_ConstructProps)
    _init (config?: LocalFileSystemOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LocalFileSystemOptions
    static $gtype: GObject.Type
}
export interface MapArray_ConstructProps extends ListArray_ConstructProps {
    items?: Array
    keys?: Array
    offsets?: Array
}
export class MapArray {
    /* Fields of Arrow-1.0.Arrow.MapArray */
    parent_instance: ListArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapArray */
    get_items(): Array
    get_keys(): Array
    /* Methods of Arrow-1.0.Arrow.ListArray */
    get_value(i: number): Array
    get_value_length(i: number): number
    get_value_offset(i: number): number
    get_value_offsets(): number[]
    get_value_type(): DataType
    get_values(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapArray_ConstructProps)
    _init (config?: MapArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(offsets: Array, keys: Array, items: Array): MapArray
    static new(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number): MapArray
    static $gtype: GObject.Type
}
export interface MapArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class MapArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.MapArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapArrayBuilder */
    append_value(): boolean
    append_values(offsets: number[], is_valids: boolean[] | null): boolean
    get_item_builder(): ArrayBuilder
    get_key_builder(): ArrayBuilder
    get_value_builder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: MapArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapArrayBuilder_ConstructProps)
    _init (config?: MapArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: MapDataType): MapArrayBuilder
    static $gtype: GObject.Type
}
export interface MapDataType_ConstructProps extends ListDataType_ConstructProps {
}
export class MapDataType {
    /* Fields of Arrow-1.0.Arrow.MapDataType */
    parent_instance: ListDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapDataType */
    get_item_type(): DataType
    get_key_type(): DataType
    /* Methods of Arrow-1.0.Arrow.ListDataType */
    get_field(): Field
    get_value_field(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: MapDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapDataType_ConstructProps)
    _init (config?: MapDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(key_type: DataType, item_type: DataType): MapDataType
    static new(field: Field): MapDataType
    static $gtype: GObject.Type
}
export interface MemoryMappedInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
}
export class MemoryMappedInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    parent_instance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    get_size(): number
    get_support_zero_copy(): boolean
    peek(n_bytes: number): GLib.Bytes
    read_at(position: number, n_bytes: number): Buffer | null
    read_at_bytes(position: number, n_bytes: number): GLib.Bytes | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(n_bytes: number): boolean
    align(alignment: number): boolean
    read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    read_tensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryMappedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MemoryMappedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MemoryMappedInputStream_ConstructProps)
    _init (config?: MemoryMappedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): MemoryMappedInputStream
    static $gtype: GObject.Type
}
export interface MockFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
export class MockFileSystem {
    /* Fields of Arrow-1.0.Arrow.MockFileSystem */
    parent_instance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copy_file(src: string, dest: string): boolean
    create_dir(path: string, recursive: boolean): boolean
    delete_dir(path: string): boolean
    delete_dir_contents(path: string): boolean
    delete_file(path: string): boolean
    delete_files(paths: string[]): boolean
    get_file_info(path: string): FileInfo | null
    get_file_infos_paths(paths: string[]): FileInfo[]
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string
    move(src: string, dest: string): boolean
    open_append_stream(path: string): OutputStream | null
    open_input_file(path: string): SeekableInputStream | null
    open_input_stream(path: string): InputStream | null
    open_output_stream(path: string): OutputStream | null
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
    connect(sigName: "notify", callback: (($obj: MockFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MockFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MockFileSystem_ConstructProps)
    _init (config?: MockFileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MutableBuffer_ConstructProps extends Buffer_ConstructProps {
}
export class MutableBuffer {
    /* Fields of Arrow-1.0.Arrow.MutableBuffer */
    parent_instance: Buffer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MutableBuffer */
    set_data(offset: number, data: Uint8Array[]): boolean
    slice(offset: number, size: number): MutableBuffer
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(other_buffer: Buffer): boolean
    equal_n_bytes(other_buffer: Buffer, n_bytes: number): boolean
    get_capacity(): number
    get_data(): GLib.Bytes
    get_mutable_data(): GLib.Bytes | null
    get_parent(): Buffer | null
    get_size(): number
    is_mutable(): boolean
    slice(offset: number, size: number): Buffer
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
    connect(sigName: "notify", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MutableBuffer_ConstructProps)
    _init (config?: MutableBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array[]): MutableBuffer
    static new_bytes(data: GLib.Bytes): MutableBuffer
    static $gtype: GObject.Type
}
export interface NullArray_ConstructProps extends Array_ConstructProps {
}
export class NullArray {
    /* Fields of Arrow-1.0.Arrow.NullArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NullArray_ConstructProps)
    _init (config?: NullArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number): NullArray
    static $gtype: GObject.Type
}
export interface NullArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class NullArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.NullArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: NullArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NullArrayBuilder_ConstructProps)
    _init (config?: NullArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullArrayBuilder
    static $gtype: GObject.Type
}
export interface NullDataType_ConstructProps extends DataType_ConstructProps {
}
export class NullDataType {
    /* Fields of Arrow-1.0.Arrow.NullDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: NullDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NullDataType_ConstructProps)
    _init (config?: NullDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullDataType
    static $gtype: GObject.Type
}
export interface NumericArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
export class NumericArray {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    parent_instance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NumericArray_ConstructProps)
    _init (config?: NumericArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NumericDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
export class NumericDataType {
    /* Fields of Arrow-1.0.Arrow.NumericDataType */
    parent_instance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: NumericDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NumericDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NumericDataType_ConstructProps)
    _init (config?: NumericDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ORCFileReader_ConstructProps extends GObject.Object_ConstructProps {
    input?: SeekableInputStream
    orc_file_reader?: object
}
export class ORCFileReader {
    /* Fields of Arrow-1.0.Arrow.ORCFileReader */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ORCFileReader */
    get_field_indexes(): number[] | null
    get_field_indices(): number[] | null
    get_n_rows(): number
    get_n_stripes(): number
    read_stripe(i: number): RecordBatch | null
    read_stripes(): Table | null
    read_type(): Schema | null
    set_field_indexes(field_indexes: number[] | null): void
    set_field_indices(field_indices: number[] | null): void
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
    connect(sigName: "notify", callback: (($obj: ORCFileReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ORCFileReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ORCFileReader_ConstructProps)
    _init (config?: ORCFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): ORCFileReader
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
    output_stream?: object
}
export class OutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    write_record_batch(record_batch: RecordBatch, options?: WriteOptions | null): number
    write_tensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    is_closed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PrimitiveArray_ConstructProps extends Array_ConstructProps {
}
export class PrimitiveArray {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrimitiveArray_ConstructProps)
    _init (config?: PrimitiveArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    max_recursion_depth?: number
    use_threads?: boolean
}
export class ReadOptions {
    /* Properties of Arrow-1.0.Arrow.ReadOptions */
    max_recursion_depth: number
    use_threads: boolean
    /* Fields of Arrow-1.0.Arrow.ReadOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ReadOptions */
    get_included_fields(): number[]
    set_included_fields(fields: number[]): void
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
    connect(sigName: "notify", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-recursion-depth", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-threads", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ReadOptions_ConstructProps)
    _init (config?: ReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ReadOptions
    static $gtype: GObject.Type
}
export interface RecordBatch_ConstructProps extends GObject.Object_ConstructProps {
    record_batch?: object
}
export class RecordBatch {
    /* Fields of Arrow-1.0.Arrow.RecordBatch */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatch */
    add_column(i: number, field: Field, column: Array): RecordBatch | null
    equal(other_record_batch: RecordBatch): boolean
    equal_metadata(other_record_batch: RecordBatch, check_metadata: boolean): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): RecordBatch | null
    get_column_data(i: number): Array | null
    get_column_name(i: number): string | null
    get_n_columns(): number
    get_n_rows(): number
    get_schema(): Schema
    remove_column(i: number): RecordBatch | null
    serialize(options?: WriteOptions | null): Buffer | null
    slice(offset: number, length: number): RecordBatch
    sort_indices(options: SortOptions): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): RecordBatch | null
    to_string(): string | null
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
    connect(sigName: "notify", callback: (($obj: RecordBatch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatch_ConstructProps)
    _init (config?: RecordBatch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schema: Schema, n_rows: number, columns: Array[]): RecordBatch
    static $gtype: GObject.Type
}
export interface RecordBatchBuilder_ConstructProps extends GObject.Object_ConstructProps {
    record_batch_builder?: object
}
export class RecordBatchBuilder {
    /* Fields of Arrow-1.0.Arrow.RecordBatchBuilder */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchBuilder */
    flush(): RecordBatch
    get_column_builder(i: number): ArrayBuilder | null
    get_field(i: number): ArrayBuilder | null
    get_initial_capacity(): number
    get_n_columns(): number
    get_n_fields(): number
    get_schema(): Schema
    set_initial_capacity(capacity: number): void
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
    connect(sigName: "notify", callback: (($obj: RecordBatchBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchBuilder_ConstructProps)
    _init (config?: RecordBatchBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schema: Schema): RecordBatchBuilder
    static $gtype: GObject.Type
}
export interface RecordBatchDatum_ConstructProps extends Datum_ConstructProps {
    value?: RecordBatch
}
export class RecordBatchDatum {
    /* Fields of Arrow-1.0.Arrow.RecordBatchDatum */
    parent_instance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(other_datum: Datum): boolean
    is_array(): boolean
    is_array_like(): boolean
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: RecordBatchDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchDatum_ConstructProps)
    _init (config?: RecordBatchDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: RecordBatch): RecordBatchDatum
    static $gtype: GObject.Type
}
export interface RecordBatchFileReader_ConstructProps extends GObject.Object_ConstructProps {
    record_batch_file_reader?: object
}
export class RecordBatchFileReader {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchFileReader */
    get_n_record_batches(): number
    get_record_batch(i: number): RecordBatch | null
    get_schema(): Schema
    get_version(): MetadataVersion
    read_record_batch(i: number): RecordBatch | null
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
    connect(sigName: "notify", callback: (($obj: RecordBatchFileReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchFileReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchFileReader_ConstructProps)
    _init (config?: RecordBatchFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): RecordBatchFileReader
    static $gtype: GObject.Type
}
export interface RecordBatchFileWriter_ConstructProps extends RecordBatchStreamWriter_ConstructProps {
}
export class RecordBatchFileWriter {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    write_record_batch(record_batch: RecordBatch): boolean
    write_table(table: Table): boolean
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
    connect(sigName: "notify", callback: (($obj: RecordBatchFileWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchFileWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchFileWriter_ConstructProps)
    _init (config?: RecordBatchFileWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: OutputStream, schema: Schema): RecordBatchFileWriter
    static $gtype: GObject.Type
}
export interface RecordBatchIterator_ConstructProps extends GObject.Object_ConstructProps {
    iterator?: object
}
export class RecordBatchIterator {
    /* Fields of Arrow-1.0.Arrow.RecordBatchIterator */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchIterator */
    equal(other_iterator: RecordBatchIterator): boolean
    next(): RecordBatch | null
    to_list(): RecordBatch[]
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
    connect(sigName: "notify", callback: (($obj: RecordBatchIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchIterator_ConstructProps)
    _init (config?: RecordBatchIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(record_batches: RecordBatch[]): RecordBatchIterator
    static $gtype: GObject.Type
}
export interface RecordBatchReader_ConstructProps extends GObject.Object_ConstructProps {
    record_batch_reader?: object
}
export class RecordBatchReader {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReader */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    get_next_record_batch(): RecordBatch | null
    get_schema(): Schema
    read_next(): RecordBatch | null
    read_next_record_batch(): RecordBatch | null
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
    connect(sigName: "notify", callback: (($obj: RecordBatchReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchReader_ConstructProps)
    _init (config?: RecordBatchReader_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RecordBatchStreamReader_ConstructProps extends RecordBatchReader_ConstructProps {
}
export class RecordBatchStreamReader {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReader */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    get_next_record_batch(): RecordBatch | null
    get_schema(): Schema
    read_next(): RecordBatch | null
    read_next_record_batch(): RecordBatch | null
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
    connect(sigName: "notify", callback: (($obj: RecordBatchStreamReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchStreamReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchStreamReader_ConstructProps)
    _init (config?: RecordBatchStreamReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: InputStream): RecordBatchStreamReader
    static $gtype: GObject.Type
}
export interface RecordBatchStreamWriter_ConstructProps extends RecordBatchWriter_ConstructProps {
}
export class RecordBatchStreamWriter {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    write_record_batch(record_batch: RecordBatch): boolean
    write_table(table: Table): boolean
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
    connect(sigName: "notify", callback: (($obj: RecordBatchStreamWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchStreamWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchStreamWriter_ConstructProps)
    _init (config?: RecordBatchStreamWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    static $gtype: GObject.Type
}
export interface RecordBatchWriter_ConstructProps extends GObject.Object_ConstructProps {
    record_batch_writer?: object
}
export class RecordBatchWriter {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    write_record_batch(record_batch: RecordBatch): boolean
    write_table(table: Table): boolean
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
    connect(sigName: "notify", callback: (($obj: RecordBatchWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordBatchWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordBatchWriter_ConstructProps)
    _init (config?: RecordBatchWriter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResizableBuffer_ConstructProps extends MutableBuffer_ConstructProps {
}
export class ResizableBuffer {
    /* Fields of Arrow-1.0.Arrow.ResizableBuffer */
    parent_instance: MutableBuffer
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ResizableBuffer */
    reserve(new_capacity: number): boolean
    resize(new_size: number): boolean
    /* Methods of Arrow-1.0.Arrow.MutableBuffer */
    set_data(offset: number, data: Uint8Array[]): boolean
    slice(offset: number, size: number): MutableBuffer
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(other_buffer: Buffer): boolean
    equal_n_bytes(other_buffer: Buffer, n_bytes: number): boolean
    get_capacity(): number
    get_data(): GLib.Bytes
    get_mutable_data(): GLib.Bytes | null
    get_parent(): Buffer | null
    get_size(): number
    is_mutable(): boolean
    slice(offset: number, size: number): Buffer
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
    connect(sigName: "notify", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResizableBuffer_ConstructProps)
    _init (config?: ResizableBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(initial_size: number): ResizableBuffer
    static new(data: Uint8Array[]): ResizableBuffer
    static $gtype: GObject.Type
}
export interface S3FileSystem_ConstructProps extends FileSystem_ConstructProps {
}
export class S3FileSystem {
    /* Fields of Arrow-1.0.Arrow.S3FileSystem */
    parent_instance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copy_file(src: string, dest: string): boolean
    create_dir(path: string, recursive: boolean): boolean
    delete_dir(path: string): boolean
    delete_dir_contents(path: string): boolean
    delete_file(path: string): boolean
    delete_files(paths: string[]): boolean
    get_file_info(path: string): FileInfo | null
    get_file_infos_paths(paths: string[]): FileInfo[]
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string
    move(src: string, dest: string): boolean
    open_append_stream(path: string): OutputStream | null
    open_input_file(path: string): SeekableInputStream | null
    open_input_stream(path: string): InputStream | null
    open_output_stream(path: string): OutputStream | null
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
    connect(sigName: "notify", callback: (($obj: S3FileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: S3FileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: S3FileSystem_ConstructProps)
    _init (config?: S3FileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Schema_ConstructProps extends GObject.Object_ConstructProps {
    schema?: object
}
export class Schema {
    /* Fields of Arrow-1.0.Arrow.Schema */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Schema */
    add_field(i: number, field: Field): Schema | null
    equal(other_schema: Schema): boolean
    get_field(i: number): Field
    get_field_by_name(name: string): Field
    get_field_index(name: string): number
    get_fields(): Field[]
    get_metadata(): GLib.HashTable | null
    has_metadata(): boolean
    n_fields(): number
    remove_field(i: number): Schema | null
    replace_field(i: number, field: Field): Schema | null
    to_string(): string
    to_string_metadata(show_metadata: boolean): string
    with_metadata(metadata: GLib.HashTable): Schema
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
    connect(sigName: "notify", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Schema_ConstructProps)
    _init (config?: Schema_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[]): Schema
    static $gtype: GObject.Type
}
export interface SeekableInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class SeekableInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    parent_instance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    get_size(): number
    get_support_zero_copy(): boolean
    peek(n_bytes: number): GLib.Bytes
    read_at(position: number, n_bytes: number): Buffer | null
    read_at_bytes(position: number, n_bytes: number): GLib.Bytes | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(n_bytes: number): boolean
    align(alignment: number): boolean
    read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    read_tensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    get_mode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SeekableInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SeekableInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SeekableInputStream_ConstructProps)
    _init (config?: SeekableInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SlowFileSystem_ConstructProps extends FileSystem_ConstructProps {
    base_file_system?: FileSystem
}
export class SlowFileSystem {
    /* Fields of Arrow-1.0.Arrow.SlowFileSystem */
    parent_instance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copy_file(src: string, dest: string): boolean
    create_dir(path: string, recursive: boolean): boolean
    delete_dir(path: string): boolean
    delete_dir_contents(path: string): boolean
    delete_file(path: string): boolean
    delete_files(paths: string[]): boolean
    get_file_info(path: string): FileInfo | null
    get_file_infos_paths(paths: string[]): FileInfo[]
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string
    move(src: string, dest: string): boolean
    open_append_stream(path: string): OutputStream | null
    open_input_file(path: string): SeekableInputStream | null
    open_input_stream(path: string): InputStream | null
    open_output_stream(path: string): OutputStream | null
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
    connect(sigName: "notify", callback: (($obj: SlowFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SlowFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SlowFileSystem_ConstructProps)
    _init (config?: SlowFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_average_latency(base_file_system: FileSystem, average_latency: number): SlowFileSystem
    static new_average_latency_and_seed(base_file_system: FileSystem, average_latency: number, seed: number): SlowFileSystem
    static $gtype: GObject.Type
}
export interface SortKey_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    order?: SortOrder
}
export class SortKey {
    /* Properties of Arrow-1.0.Arrow.SortKey */
    name: string
    order: SortOrder
    /* Fields of Arrow-1.0.Arrow.SortKey */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SortKey */
    equal(other_sort_key: SortKey): boolean
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
    connect(sigName: "notify", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SortKey_ConstructProps)
    _init (config?: SortKey_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, order: SortOrder): SortKey
    static $gtype: GObject.Type
}
export interface SortOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class SortOptions {
    /* Fields of Arrow-1.0.Arrow.SortOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SortOptions */
    add_sort_key(sort_key: SortKey): void
    equal(other_options: SortOptions): boolean
    get_sort_keys(): SortKey[]
    set_sort_keys(sort_keys: SortKey[]): void
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
    connect(sigName: "notify", callback: (($obj: SortOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SortOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SortOptions_ConstructProps)
    _init (config?: SortOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sort_keys?: SortKey[] | null): SortOptions
    static $gtype: GObject.Type
}
export interface SparseUnionArray_ConstructProps extends UnionArray_ConstructProps {
}
export class SparseUnionArray {
    /* Fields of Arrow-1.0.Arrow.SparseUnionArray */
    parent_instance: UnionArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    get_field(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparseUnionArray_ConstructProps)
    _init (config?: SparseUnionArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type_ids: Int8Array, fields: Array[]): SparseUnionArray
    static new_data_type(data_type: SparseUnionDataType, type_ids: Int8Array, fields: Array[]): SparseUnionArray
    static $gtype: GObject.Type
}
export interface SparseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}
export class SparseUnionDataType {
    /* Fields of Arrow-1.0.Arrow.SparseUnionDataType */
    parent_instance: UnionDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    get_field(i: number): Field | null
    get_fields(): Field[]
    get_n_fields(): number
    get_type_codes(): Uint8Array[]
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: SparseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparseUnionDataType_ConstructProps)
    _init (config?: SparseUnionDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[], type_codes: Uint8Array[]): SparseUnionDataType
    static $gtype: GObject.Type
}
export interface StringArray_ConstructProps extends BinaryArray_ConstructProps {
}
export class StringArray {
    /* Fields of Arrow-1.0.Arrow.StringArray */
    parent_instance: BinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringArray */
    get_string(i: number): string
    /* Methods of Arrow-1.0.Arrow.BinaryArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    get_offsets_buffer(): Buffer
    get_value(i: number): GLib.Bytes
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StringArray_ConstructProps)
    _init (config?: StringArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): StringArray
    static $gtype: GObject.Type
}
export interface StringArrayBuilder_ConstructProps extends BinaryArrayBuilder_ConstructProps {
}
export class StringArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.StringArrayBuilder */
    parent_instance: BinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringArrayBuilder */
    append(value: string): boolean
    append_string(value: string): boolean
    append_strings(values: string[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.BinaryArrayBuilder */
    append(value: Uint8Array[]): boolean
    append_value(value: Uint8Array[]): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: StringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StringArrayBuilder_ConstructProps)
    _init (config?: StringArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringArrayBuilder
    static $gtype: GObject.Type
}
export interface StringDataType_ConstructProps extends DataType_ConstructProps {
}
export class StringDataType {
    /* Fields of Arrow-1.0.Arrow.StringDataType */
    parent_instance: BinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: StringDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StringDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StringDataType_ConstructProps)
    _init (config?: StringDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringDataType
    static $gtype: GObject.Type
}
export interface StringDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class StringDictionaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringDictionaryArrayBuilder */
    append_array(array: StringArray): boolean
    append_indices(values: number[], is_valids: boolean[] | null): boolean
    append_string(value: string): boolean
    finish_delta(): [ /* returnType */ boolean, /* out_indices */ Array, /* out_delta */ Array ]
    get_dictionary_length(): number
    insert_memo_values(values: StringArray): boolean
    reset_full(): void
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: StringDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StringDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StringDictionaryArrayBuilder_ConstructProps)
    _init (config?: StringDictionaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringDictionaryArrayBuilder
    static $gtype: GObject.Type
}
export interface StructArray_ConstructProps extends Array_ConstructProps {
}
export class StructArray {
    /* Fields of Arrow-1.0.Arrow.StructArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructArray */
    flatten(): Array[]
    get_field(i: number): Array
    get_fields(): Array[]
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StructArray_ConstructProps)
    _init (config?: StructArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: DataType, length: number, fields: Array[], null_bitmap: Buffer | null, n_nulls: number): StructArray
    static $gtype: GObject.Type
}
export interface StructArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class StructArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.StructArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructArrayBuilder */
    append(): boolean
    append_value(): boolean
    get_field_builder(i: number): ArrayBuilder
    get_field_builders(): Array[]
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: StructArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StructArrayBuilder_ConstructProps)
    _init (config?: StructArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: StructDataType): StructArrayBuilder
    static $gtype: GObject.Type
}
export interface StructDataType_ConstructProps extends DataType_ConstructProps {
}
export class StructDataType {
    /* Fields of Arrow-1.0.Arrow.StructDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructDataType */
    get_field(i: number): Field | null
    get_field_by_name(name: string): Field | null
    get_field_index(name: string): number
    get_fields(): Field[]
    get_n_fields(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: StructDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StructDataType_ConstructProps)
    _init (config?: StructDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[]): StructDataType
    static $gtype: GObject.Type
}
export interface SubTreeFileSystem_ConstructProps extends FileSystem_ConstructProps {
    base_file_system?: FileSystem
}
export class SubTreeFileSystem {
    /* Fields of Arrow-1.0.Arrow.SubTreeFileSystem */
    parent_instance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copy_file(src: string, dest: string): boolean
    create_dir(path: string, recursive: boolean): boolean
    delete_dir(path: string): boolean
    delete_dir_contents(path: string): boolean
    delete_file(path: string): boolean
    delete_files(paths: string[]): boolean
    get_file_info(path: string): FileInfo | null
    get_file_infos_paths(paths: string[]): FileInfo[]
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string
    move(src: string, dest: string): boolean
    open_append_stream(path: string): OutputStream | null
    open_input_file(path: string): SeekableInputStream | null
    open_input_stream(path: string): InputStream | null
    open_output_stream(path: string): OutputStream | null
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
    connect(sigName: "notify", callback: (($obj: SubTreeFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubTreeFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubTreeFileSystem_ConstructProps)
    _init (config?: SubTreeFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_path: string, base_file_system: FileSystem): SubTreeFileSystem
    static $gtype: GObject.Type
}
export interface Table_ConstructProps extends GObject.Object_ConstructProps {
    table?: object
}
export class Table {
    /* Fields of Arrow-1.0.Arrow.Table */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Table */
    add_column(i: number, field: Field, chunked_array: ChunkedArray): Table | null
    combine_chunks(): Table | null
    concatenate(other_tables: Table[]): Table | null
    equal(other_table: Table): boolean
    equal_metadata(other_table: Table, check_metadata: boolean): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Table | null
    filter_chunked_array(filter: ChunkedArray, options?: FilterOptions | null): Table | null
    get_column_data(i: number): ChunkedArray | null
    get_n_columns(): number
    get_n_rows(): number
    get_schema(): Schema
    remove_column(i: number): Table | null
    replace_column(i: number, field: Field, chunked_array: ChunkedArray): Table | null
    slice(offset: number, length: number): Table
    sort_indices(options: SortOptions): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Table | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): Table | null
    to_string(): string | null
    write_as_feather(sink: OutputStream, properties?: FeatherWriteProperties | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Table, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Table, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Table_ConstructProps)
    _init (config?: Table_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_arrays(schema: Schema, arrays: Array[]): Table
    static new_chunked_arrays(schema: Schema, chunked_arrays: ChunkedArray[]): Table
    static new_record_batches(schema: Schema, record_batches: RecordBatch[]): Table
    static $gtype: GObject.Type
}
export interface TableBatchReader_ConstructProps extends RecordBatchReader_ConstructProps {
}
export class TableBatchReader {
    /* Fields of Arrow-1.0.Arrow.TableBatchReader */
    parent_instance: RecordBatchReader
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    get_next_record_batch(): RecordBatch | null
    get_schema(): Schema
    read_next(): RecordBatch | null
    read_next_record_batch(): RecordBatch | null
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
    connect(sigName: "notify", callback: (($obj: TableBatchReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TableBatchReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TableBatchReader_ConstructProps)
    _init (config?: TableBatchReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(table: Table): TableBatchReader
    static $gtype: GObject.Type
}
export interface TableDatum_ConstructProps extends Datum_ConstructProps {
    value?: Table
}
export class TableDatum {
    /* Fields of Arrow-1.0.Arrow.TableDatum */
    parent_instance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(other_datum: Datum): boolean
    is_array(): boolean
    is_array_like(): boolean
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: TableDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TableDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TableDatum_ConstructProps)
    _init (config?: TableDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Table): TableDatum
    static $gtype: GObject.Type
}
export interface TakeOptions_ConstructProps extends GObject.Object_ConstructProps {
}
export class TakeOptions {
    /* Fields of Arrow-1.0.Arrow.TakeOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: TakeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TakeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TakeOptions_ConstructProps)
    _init (config?: TakeOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TakeOptions
    static $gtype: GObject.Type
}
export interface Tensor_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: Buffer
    tensor?: object
}
export class Tensor {
    /* Fields of Arrow-1.0.Arrow.Tensor */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Tensor */
    equal(other_tensor: Tensor): boolean
    get_buffer(): Buffer
    get_dimension_name(i: number): string
    get_n_dimensions(): number
    get_shape(): number[]
    get_size(): number
    get_strides(): number[]
    get_value_data_type(): DataType
    get_value_type(): Type
    is_column_major(): boolean
    is_contiguous(): boolean
    is_mutable(): boolean
    is_row_major(): boolean
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
    connect(sigName: "notify", callback: (($obj: Tensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tensor_ConstructProps)
    _init (config?: Tensor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: DataType, data: Buffer, shape: number[], strides: number[] | null, dimension_names: string[] | null): Tensor
    static $gtype: GObject.Type
}
export interface Time32Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Time32Array {
    /* Fields of Arrow-1.0.Arrow.Time32Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time32Array */
    get_value(i: number): number
    get_values(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Time32Array_ConstructProps)
    _init (config?: Time32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: Time32DataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Time32Array
    static $gtype: GObject.Type
}
export interface Time32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Time32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time32ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Time32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Time32ArrayBuilder_ConstructProps)
    _init (config?: Time32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: Time32DataType): Time32ArrayBuilder
    static $gtype: GObject.Type
}
export interface Time32DataType_ConstructProps extends TimeDataType_ConstructProps {
}
export class Time32DataType {
    /* Fields of Arrow-1.0.Arrow.Time32DataType */
    parent_instance: TimeDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    get_unit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Time32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Time32DataType_ConstructProps)
    _init (config?: Time32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): Time32DataType
    static $gtype: GObject.Type
}
export interface Time64Array_ConstructProps extends NumericArray_ConstructProps {
}
export class Time64Array {
    /* Fields of Arrow-1.0.Arrow.Time64Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time64Array */
    get_value(i: number): number
    get_values(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Time64Array_ConstructProps)
    _init (config?: Time64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: Time64DataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Time64Array
    static $gtype: GObject.Type
}
export interface Time64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class Time64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time64ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Time64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Time64ArrayBuilder_ConstructProps)
    _init (config?: Time64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: Time64DataType): Time64ArrayBuilder
    static $gtype: GObject.Type
}
export interface Time64DataType_ConstructProps extends TimeDataType_ConstructProps {
}
export class Time64DataType {
    /* Fields of Arrow-1.0.Arrow.Time64DataType */
    parent_instance: TimeDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    get_unit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Time64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Time64DataType_ConstructProps)
    _init (config?: Time64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): Time64DataType
    static $gtype: GObject.Type
}
export interface TimeDataType_ConstructProps extends DataType_ConstructProps {
}
export class TimeDataType {
    /* Fields of Arrow-1.0.Arrow.TimeDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    get_unit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: TimeDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimeDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimeDataType_ConstructProps)
    _init (config?: TimeDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TimestampArray_ConstructProps extends NumericArray_ConstructProps {
}
export class TimestampArray {
    /* Fields of Arrow-1.0.Arrow.TimestampArray */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampArray */
    get_value(i: number): number
    get_values(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimestampArray_ConstructProps)
    _init (config?: TimestampArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: TimestampDataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): TimestampArray
    static $gtype: GObject.Type
}
export interface TimestampArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class TimestampArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: TimestampArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimestampArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimestampArrayBuilder_ConstructProps)
    _init (config?: TimestampArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_type: TimestampDataType): TimestampArrayBuilder
    static $gtype: GObject.Type
}
export interface TimestampDataType_ConstructProps extends DataType_ConstructProps {
}
export class TimestampDataType {
    /* Fields of Arrow-1.0.Arrow.TimestampDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampDataType */
    get_unit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: TimestampDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimestampDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimestampDataType_ConstructProps)
    _init (config?: TimestampDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): TimestampDataType
    static $gtype: GObject.Type
}
export interface UInt16Array_ConstructProps extends NumericArray_ConstructProps {
}
export class UInt16Array {
    /* Fields of Arrow-1.0.Arrow.UInt16Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt16Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt16Array_ConstructProps)
    _init (config?: UInt16Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt16Array
    static $gtype: GObject.Type
}
export interface UInt16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class UInt16ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt16ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: UInt16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt16ArrayBuilder_ConstructProps)
    _init (config?: UInt16ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt16ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class UInt16DataType {
    /* Fields of Arrow-1.0.Arrow.UInt16DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: UInt16DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt16DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt16DataType_ConstructProps)
    _init (config?: UInt16DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt16DataType
    static $gtype: GObject.Type
}
export interface UInt32Array_ConstructProps extends NumericArray_ConstructProps {
}
export class UInt32Array {
    /* Fields of Arrow-1.0.Arrow.UInt32Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt32Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt32Array_ConstructProps)
    _init (config?: UInt32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt32Array
    static $gtype: GObject.Type
}
export interface UInt32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class UInt32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt32ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: UInt32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt32ArrayBuilder_ConstructProps)
    _init (config?: UInt32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt32ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class UInt32DataType {
    /* Fields of Arrow-1.0.Arrow.UInt32DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: UInt32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt32DataType_ConstructProps)
    _init (config?: UInt32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt32DataType
    static $gtype: GObject.Type
}
export interface UInt64Array_ConstructProps extends NumericArray_ConstructProps {
}
export class UInt64Array {
    /* Fields of Arrow-1.0.Arrow.UInt64Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt64Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt64Array_ConstructProps)
    _init (config?: UInt64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt64Array
    static $gtype: GObject.Type
}
export interface UInt64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class UInt64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt64ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: UInt64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt64ArrayBuilder_ConstructProps)
    _init (config?: UInt64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt64ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class UInt64DataType {
    /* Fields of Arrow-1.0.Arrow.UInt64DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: UInt64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt64DataType_ConstructProps)
    _init (config?: UInt64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt64DataType
    static $gtype: GObject.Type
}
export interface UInt8Array_ConstructProps extends NumericArray_ConstructProps {
}
export class UInt8Array {
    /* Fields of Arrow-1.0.Arrow.UInt8Array */
    parent_instance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt8Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    get_value(i: number): number
    get_values(): Uint8Array[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    get_buffer(): Buffer
    get_data_buffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt8Array_ConstructProps)
    _init (config?: UInt8Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt8Array
    static $gtype: GObject.Type
}
export interface UInt8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class UInt8ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt8ArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: Uint8Array[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: UInt8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt8ArrayBuilder_ConstructProps)
    _init (config?: UInt8ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt8ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
export class UInt8DataType {
    /* Fields of Arrow-1.0.Arrow.UInt8DataType */
    parent_instance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    is_signed(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    get_bit_width(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: UInt8DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UInt8DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UInt8DataType_ConstructProps)
    _init (config?: UInt8DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt8DataType
    static $gtype: GObject.Type
}
export interface UIntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
export class UIntArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UIntArrayBuilder */
    parent_instance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UIntArrayBuilder */
    append(value: number): boolean
    append_value(value: number): boolean
    append_values(values: number[], is_valids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    append_empty_value(): boolean
    append_empty_values(n: number): boolean
    append_null(): boolean
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    connect(sigName: "notify", callback: (($obj: UIntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UIntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UIntArrayBuilder_ConstructProps)
    _init (config?: UIntArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UIntArrayBuilder
    static $gtype: GObject.Type
}
export interface UnionArray_ConstructProps extends Array_ConstructProps {
    type_ids?: Int8Array
}
export class UnionArray {
    /* Fields of Arrow-1.0.Arrow.UnionArray */
    parent_instance: Array
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    get_field(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(target_data_type: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null
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
    connect(sigName: "notify", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnionArray_ConstructProps)
    _init (config?: UnionArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UnionDataType_ConstructProps extends DataType_ConstructProps {
}
export class UnionDataType {
    /* Fields of Arrow-1.0.Arrow.UnionDataType */
    parent_instance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    get_field(i: number): Field | null
    get_fields(): Field[]
    get_n_fields(): number
    get_type_codes(): Uint8Array[]
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(other_data_type: DataType): boolean
    get_id(): Type
    get_name(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: UnionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnionDataType_ConstructProps)
    _init (config?: UnionDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WriteOptions_ConstructProps extends GObject.Object_ConstructProps {
    alignment?: number
    allow_64bit?: boolean
    codec?: Codec
    max_recursion_depth?: number
    use_threads?: boolean
    write_legacy_ipc_format?: boolean
}
export class WriteOptions {
    /* Properties of Arrow-1.0.Arrow.WriteOptions */
    alignment: number
    allow_64bit: boolean
    codec: Codec
    max_recursion_depth: number
    use_threads: boolean
    write_legacy_ipc_format: boolean
    /* Fields of Arrow-1.0.Arrow.WriteOptions */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-64bit", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-64bit", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codec", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-recursion-depth", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-threads", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-legacy-ipc-format", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-legacy-ipc-format", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WriteOptions_ConstructProps)
    _init (config?: WriteOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WriteOptions
    static $gtype: GObject.Type
}
export abstract class ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ArrayClass {
    /* Fields of Arrow-1.0.Arrow.ArrayClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ArrayDatumClass {
    /* Fields of Arrow-1.0.Arrow.ArrayDatumClass */
    parent_class: DatumClass
    static name: string
}
export abstract class ArraySortOptionsClass {
    /* Fields of Arrow-1.0.Arrow.ArraySortOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class BinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class BinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.BinaryDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class BinaryDictionaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class BooleanArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class BooleanArrayClass {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayClass */
    parent_class: PrimitiveArrayClass
    static name: string
}
export abstract class BooleanDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.BooleanDataTypeClass */
    parent_class: FixedWidthDataTypeClass
    static name: string
}
export abstract class BufferClass {
    /* Fields of Arrow-1.0.Arrow.BufferClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BufferInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.BufferInputStreamClass */
    parent_class: SeekableInputStreamClass
    static name: string
}
export abstract class BufferOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.BufferOutputStreamClass */
    parent_class: OutputStreamClass
    static name: string
}
export abstract class CSVReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CSVReadOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CSVReaderClass {
    /* Fields of Arrow-1.0.Arrow.CSVReaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CastOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CastOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ChunkedArrayClass {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ChunkedArrayDatumClass {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayDatumClass */
    parent_class: DatumClass
    static name: string
}
export abstract class CodecClass {
    /* Fields of Arrow-1.0.Arrow.CodecClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CompareOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CompareOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CompressedInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.CompressedInputStreamClass */
    parent_class: InputStreamClass
    static name: string
}
export abstract class CompressedOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.CompressedOutputStreamClass */
    parent_class: OutputStreamClass
    static name: string
}
export abstract class CountOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CountOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DataTypeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class Date32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Date32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Date32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Date32DataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class Date64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Date64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Date64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Date64DataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class DatumClass {
    /* Fields of Arrow-1.0.Arrow.DatumClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class Decimal128ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass */
    parent_class: FixedSizeBinaryArrayBuilderClass
    static name: string
}
export abstract class Decimal128ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayClass */
    parent_class: FixedSizeBinaryArrayClass
    static name: string
}
export abstract class Decimal128Class {
    /* Fields of Arrow-1.0.Arrow.Decimal128Class */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class Decimal128DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128DataTypeClass */
    parent_class: DecimalDataTypeClass
    static name: string
}
export abstract class Decimal256ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass */
    parent_class: FixedSizeBinaryArrayBuilderClass
    static name: string
}
export abstract class Decimal256ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayClass */
    parent_class: FixedSizeBinaryArrayClass
    static name: string
}
export abstract class Decimal256Class {
    /* Fields of Arrow-1.0.Arrow.Decimal256Class */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class Decimal256DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256DataTypeClass */
    parent_class: DecimalDataTypeClass
    static name: string
}
export abstract class DecimalDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DecimalDataTypeClass */
    parent_class: FixedSizeBinaryDataTypeClass
    static name: string
}
export abstract class DenseUnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.DenseUnionArrayClass */
    parent_class: UnionArrayClass
    static name: string
}
export abstract class DenseUnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DenseUnionDataTypeClass */
    parent_class: UnionDataTypeClass
    static name: string
}
export abstract class DictionaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.DictionaryArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class DictionaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DictionaryDataTypeClass */
    parent_class: FixedWidthDataTypeClass
    static name: string
}
export abstract class DoubleArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class DoubleArrayClass {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class DoubleDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DoubleDataTypeClass */
    parent_class: FloatingPointDataTypeClass
    static name: string
}
export abstract class ExecuteContextClass {
    /* Fields of Arrow-1.0.Arrow.ExecuteContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ExtensionArrayClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class ExtensionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeClass */
    parent_class: DataTypeClass
    get_extension_name: (data_type: ExtensionDataType) => string
    equal: (data_type: ExtensionDataType, other_data_type: ExtensionDataType) => boolean
    serialize: (data_type: ExtensionDataType) => GLib.Bytes
    get_array_gtype: (data_type: ExtensionDataType) => GObject.Type
    static name: string
}
export abstract class ExtensionDataTypeRegistryClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FeatherFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.FeatherFileReaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FeatherWritePropertiesClass {
    /* Fields of Arrow-1.0.Arrow.FeatherWritePropertiesClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FieldClass {
    /* Fields of Arrow-1.0.Arrow.FieldClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FileInfoClass {
    /* Fields of Arrow-1.0.Arrow.FileInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FileInterface {
    static name: string
}
export abstract class FileOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.FileOutputStreamClass */
    parent_class: OutputStreamClass
    static name: string
}
export abstract class FileSelectorClass {
    /* Fields of Arrow-1.0.Arrow.FileSelectorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FileSystemClass {
    /* Fields of Arrow-1.0.Arrow.FileSystemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FilterOptionsClass {
    /* Fields of Arrow-1.0.Arrow.FilterOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FixedSizeBinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class FixedSizeBinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass */
    parent_class: PrimitiveArrayClass
    static name: string
}
export abstract class FixedSizeBinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass */
    parent_class: FixedWidthDataTypeClass
    static name: string
}
export abstract class FixedWidthDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class FloatArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.FloatArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class FloatArrayClass {
    /* Fields of Arrow-1.0.Arrow.FloatArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class FloatDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FloatDataTypeClass */
    parent_class: FloatingPointDataTypeClass
    static name: string
}
export abstract class FloatingPointDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FloatingPointDataTypeClass */
    parent_class: NumericDataTypeClass
    static name: string
}
export abstract class FunctionClass {
    /* Fields of Arrow-1.0.Arrow.FunctionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FunctionOptionsInterface {
    static name: string
}
export abstract class GIOInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.GIOInputStreamClass */
    parent_class: SeekableInputStreamClass
    static name: string
}
export abstract class GIOOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.GIOOutputStreamClass */
    parent_class: OutputStreamClass
    static name: string
}
export abstract class HDFSFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.HDFSFileSystemClass */
    parent_class: FileSystemClass
    static name: string
}
export abstract class InputStreamClass {
    /* Fields of Arrow-1.0.Arrow.InputStreamClass */
    parent_class: Gio.InputStreamClass
    static name: string
}
export abstract class Int16ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Int16ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Int16DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int16DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class Int32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Int32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Int32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int32DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class Int64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Int64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Int64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int64DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class Int8ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Int8ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Int8DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int8DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class IntArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.IntArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class IntegerDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.IntegerDataTypeClass */
    parent_class: NumericDataTypeClass
    static name: string
}
export abstract class JSONReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.JSONReadOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class JSONReaderClass {
    /* Fields of Arrow-1.0.Arrow.JSONReaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class LargeBinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class LargeBinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class LargeBinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class LargeListArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class LargeListArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class LargeListDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeListDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class LargeStringArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayBuilderClass */
    parent_class: LargeBinaryArrayBuilderClass
    static name: string
}
export abstract class LargeStringArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayClass */
    parent_class: LargeBinaryArrayClass
    static name: string
}
export abstract class LargeStringDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringDataTypeClass */
    parent_class: LargeBinaryDataTypeClass
    static name: string
}
export abstract class ListArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.ListArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class ListArrayClass {
    /* Fields of Arrow-1.0.Arrow.ListArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class ListDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.ListDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class LocalFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemClass */
    parent_class: FileSystemClass
    static name: string
}
export abstract class LocalFileSystemOptionsClass {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MapArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.MapArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class MapArrayClass {
    /* Fields of Arrow-1.0.Arrow.MapArrayClass */
    parent_class: ListArrayClass
    static name: string
}
export abstract class MapDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.MapDataTypeClass */
    parent_class: ListDataTypeClass
    static name: string
}
export abstract class MemoryMappedInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.MemoryMappedInputStreamClass */
    parent_class: SeekableInputStreamClass
    static name: string
}
export abstract class MockFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.MockFileSystemClass */
    parent_class: FileSystemClass
    static name: string
}
export abstract class MutableBufferClass {
    /* Fields of Arrow-1.0.Arrow.MutableBufferClass */
    parent_class: BufferClass
    static name: string
}
export abstract class NullArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.NullArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class NullArrayClass {
    /* Fields of Arrow-1.0.Arrow.NullArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class NullDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.NullDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class NumericArrayClass {
    /* Fields of Arrow-1.0.Arrow.NumericArrayClass */
    parent_class: PrimitiveArrayClass
    static name: string
}
export abstract class NumericDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.NumericDataTypeClass */
    parent_class: FixedWidthDataTypeClass
    static name: string
}
export abstract class ORCFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.ORCFileReaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class OutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.OutputStreamClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PrimitiveArrayClass {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class ReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.ReadOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReadableInterface {
    static name: string
}
export abstract class RecordBatchBuilderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchBuilderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RecordBatchClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RecordBatchDatumClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchDatumClass */
    parent_class: DatumClass
    static name: string
}
export abstract class RecordBatchFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchFileReaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RecordBatchFileWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchFileWriterClass */
    parent_class: RecordBatchStreamWriterClass
    static name: string
}
export abstract class RecordBatchIteratorClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RecordBatchReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RecordBatchStreamReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchStreamReaderClass */
    parent_class: RecordBatchReaderClass
    static name: string
}
export abstract class RecordBatchStreamWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchStreamWriterClass */
    parent_class: RecordBatchWriterClass
    static name: string
}
export abstract class RecordBatchWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchWriterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ResizableBufferClass {
    /* Fields of Arrow-1.0.Arrow.ResizableBufferClass */
    parent_class: MutableBufferClass
    static name: string
}
export abstract class S3FileSystemClass {
    /* Fields of Arrow-1.0.Arrow.S3FileSystemClass */
    parent_class: FileSystemClass
    static name: string
}
export abstract class SchemaClass {
    /* Fields of Arrow-1.0.Arrow.SchemaClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SeekableInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStreamClass */
    parent_class: InputStreamClass
    static name: string
}
export abstract class SlowFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.SlowFileSystemClass */
    parent_class: FileSystemClass
    static name: string
}
export abstract class SortKeyClass {
    /* Fields of Arrow-1.0.Arrow.SortKeyClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SortOptionsClass {
    /* Fields of Arrow-1.0.Arrow.SortOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SparseUnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.SparseUnionArrayClass */
    parent_class: UnionArrayClass
    static name: string
}
export abstract class SparseUnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.SparseUnionDataTypeClass */
    parent_class: UnionDataTypeClass
    static name: string
}
export abstract class StringArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StringArrayBuilderClass */
    parent_class: BinaryArrayBuilderClass
    static name: string
}
export abstract class StringArrayClass {
    /* Fields of Arrow-1.0.Arrow.StringArrayClass */
    parent_class: BinaryArrayClass
    static name: string
}
export abstract class StringDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.StringDataTypeClass */
    parent_class: BinaryDataTypeClass
    static name: string
}
export abstract class StringDictionaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class StructArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StructArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class StructArrayClass {
    /* Fields of Arrow-1.0.Arrow.StructArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class StructDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.StructDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class SubTreeFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.SubTreeFileSystemClass */
    parent_class: FileSystemClass
    static name: string
}
export abstract class TableBatchReaderClass {
    /* Fields of Arrow-1.0.Arrow.TableBatchReaderClass */
    parent_class: RecordBatchReaderClass
    static name: string
}
export abstract class TableClass {
    /* Fields of Arrow-1.0.Arrow.TableClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TableDatumClass {
    /* Fields of Arrow-1.0.Arrow.TableDatumClass */
    parent_class: DatumClass
    static name: string
}
export abstract class TakeOptionsClass {
    /* Fields of Arrow-1.0.Arrow.TakeOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TensorClass {
    /* Fields of Arrow-1.0.Arrow.TensorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class Time32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Time32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Time32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Time32DataTypeClass */
    parent_class: TimeDataTypeClass
    static name: string
}
export abstract class Time64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class Time64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class Time64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Time64DataTypeClass */
    parent_class: TimeDataTypeClass
    static name: string
}
export abstract class TimeDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.TimeDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class TimestampArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class TimestampArrayClass {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class TimestampDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.TimestampDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class UInt16ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class UInt16ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class UInt16DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt16DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class UInt32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class UInt32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class UInt32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt32DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class UInt64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class UInt64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class UInt64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt64DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class UInt8ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class UInt8ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayClass */
    parent_class: NumericArrayClass
    static name: string
}
export abstract class UInt8DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt8DataTypeClass */
    parent_class: IntegerDataTypeClass
    static name: string
}
export abstract class UIntArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UIntArrayBuilderClass */
    parent_class: ArrayBuilderClass
    static name: string
}
export abstract class UnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.UnionArrayClass */
    parent_class: ArrayClass
    static name: string
}
export abstract class UnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UnionDataTypeClass */
    parent_class: DataTypeClass
    static name: string
}
export abstract class WritableFileInterface {
    static name: string
}
export abstract class WritableInterface {
    static name: string
}
export abstract class WriteOptionsClass {
    /* Fields of Arrow-1.0.Arrow.WriteOptionsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export type TimePoint = number