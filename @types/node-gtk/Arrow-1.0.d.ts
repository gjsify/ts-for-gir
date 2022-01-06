/**
 * Arrow-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Arrow {

enum CompareOperator {
    EQUAL,
    NOT_EQUAL,
    GREATER,
    GREATER_EQUAL,
    LESS,
    LESS_EQUAL,
}
enum CompressionType {
    UNCOMPRESSED,
    SNAPPY,
    GZIP,
    BROTLI,
    ZSTD,
    LZ4,
    LZO,
    BZ2,
}
enum CountMode {
    ALL,
    NULL,
}
enum Error {
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
enum FileMode {
    READ,
    WRITE,
    READWRITE,
}
enum FileType {
    NOT_FOUND,
    UNKNOWN,
    FILE,
    DIR,
}
enum FilterNullSelectionBehavior {
    DROP,
    EMIT_NULL,
}
enum JSONReadUnexpectedFieldBehavior {
    IGNORE,
    ERROR,
    INFER_TYPE,
}
enum MetadataVersion {
    V1,
    V2,
    V3,
}
enum SortOrder {
    ASCENDING,
    DESCENDING,
}
enum TimeUnit {
    SECOND,
    MILLI,
    MICRO,
    NANO,
}
enum Type {
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
function errorQuark(): GLib.Quark
class File {
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    static name: string
}
class FunctionOptions {
    static name: string
}
class Readable {
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    static name: string
}
class Writable {
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: any[]): boolean
    static name: string
}
class WritableFile {
    /* Methods of Arrow-1.0.Arrow.WritableFile */
    writeAt(position: number, data: any[]): boolean
    static name: string
}
export interface Array_ConstructProps extends GObject.Object_ConstructProps {
    array?: object
    buffer1?: Buffer
    buffer2?: Buffer
    nullBitmap?: Buffer
    parent?: Array
    valueDataType?: DataType
}
class Array {
    /* Fields of Arrow-1.0.Arrow.Array */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Array_ConstructProps)
    _init (config?: Array_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ArrayBuilder_ConstructProps extends GObject.Object_ConstructProps {
    arrayBuilder?: object
}
class ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ArrayBuilder_ConstructProps)
    _init (config?: ArrayBuilder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ArrayDatum_ConstructProps extends Datum_ConstructProps {
    value?: Array
}
class ArrayDatum {
    /* Fields of Arrow-1.0.Arrow.ArrayDatum */
    parentInstance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArrayDatum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class ArraySortOptions {
    /* Properties of Arrow-1.0.Arrow.ArraySortOptions */
    order: SortOrder
    /* Fields of Arrow-1.0.Arrow.ArraySortOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArraySortOptions */
    equal(otherOptions: ArraySortOptions): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::order", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ArraySortOptions_ConstructProps)
    _init (config?: ArraySortOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(order: SortOrder): ArraySortOptions
    static $gtype: GObject.Type
}
export interface BinaryArray_ConstructProps extends Array_ConstructProps {
}
class BinaryArray {
    /* Fields of Arrow-1.0.Arrow.BinaryArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BinaryArray_ConstructProps)
    _init (config?: BinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): BinaryArray
    static $gtype: GObject.Type
}
export interface BinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class BinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryArrayBuilder */
    append(value: any[]): boolean
    appendValue(value: any[]): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BinaryArrayBuilder_ConstructProps)
    _init (config?: BinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryArrayBuilder
    static $gtype: GObject.Type
}
export interface BinaryDataType_ConstructProps extends DataType_ConstructProps {
}
class BinaryDataType {
    /* Fields of Arrow-1.0.Arrow.BinaryDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BinaryDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BinaryDataType_ConstructProps)
    _init (config?: BinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryDataType
    static $gtype: GObject.Type
}
export interface BinaryDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class BinaryDictionaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder */
    appendArray(array: BinaryArray): boolean
    appendIndices(values: number[], isValids: boolean[] | null): boolean
    appendValue(value: any[]): boolean
    appendValueBytes(value: any): boolean
    finishDelta(): { returnType: boolean, outIndices: Array, outDelta: Array }
    getDictionaryLength(): number
    insertMemoValues(values: BinaryArray): boolean
    resetFull(): void
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BinaryDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BinaryDictionaryArrayBuilder_ConstructProps)
    _init (config?: BinaryDictionaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryDictionaryArrayBuilder
    static $gtype: GObject.Type
}
export interface BooleanArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
class BooleanArray {
    /* Fields of Arrow-1.0.Arrow.BooleanArray */
    parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BooleanArray */
    and(right: BooleanArray): BooleanArray
    getValue(i: number): boolean
    getValues(): boolean[]
    invert(): BooleanArray
    or(right: BooleanArray): BooleanArray
    xor(right: BooleanArray): BooleanArray
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BooleanArray_ConstructProps)
    _init (config?: BooleanArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): BooleanArray
    static $gtype: GObject.Type
}
export interface BooleanArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class BooleanArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BooleanArrayBuilder */
    append(value: boolean): boolean
    appendValue(value: boolean): boolean
    appendValues(values: boolean[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BooleanArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BooleanArrayBuilder_ConstructProps)
    _init (config?: BooleanArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BooleanArrayBuilder
    static $gtype: GObject.Type
}
export interface BooleanDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class BooleanDataType {
    /* Fields of Arrow-1.0.Arrow.BooleanDataType */
    parentInstance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BooleanDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BooleanDataType_ConstructProps)
    _init (config?: BooleanDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BooleanDataType
    static $gtype: GObject.Type
}
export interface Buffer_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: object
    data?: any
    parent?: Buffer
}
class Buffer {
    /* Fields of Arrow-1.0.Arrow.Buffer */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(otherBuffer: Buffer): boolean
    equalNBytes(otherBuffer: Buffer, nBytes: number): boolean
    getCapacity(): number
    getData(): any
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size: number): Buffer
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: any[]): Buffer
    static newBytes(data: any): Buffer
    static $gtype: GObject.Type
}
export interface BufferInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
    buffer?: Buffer
}
class BufferInputStream {
    /* Fields of Arrow-1.0.Arrow.BufferInputStream */
    parentInstance: SeekableInputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BufferInputStream */
    getBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BufferInputStream_ConstructProps)
    _init (config?: BufferInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer): BufferInputStream
    static $gtype: GObject.Type
}
export interface BufferOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
class BufferOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: any[]): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BufferOutputStream_ConstructProps)
    _init (config?: BufferOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: ResizableBuffer): BufferOutputStream
    static $gtype: GObject.Type
}
export interface CSVReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    allowNewlinesInValues?: boolean
    allowNullStrings?: boolean
    blockSize?: number
    checkUtf8?: boolean
    delimiter?: number
    escapeCharacter?: number
    generateColumnNames?: boolean
    ignoreEmptyLines?: boolean
    isDoubleQuoted?: boolean
    isEscaped?: boolean
    isQuoted?: boolean
    nSkipRows?: number
    quoteCharacter?: number
    useThreads?: boolean
}
class CSVReadOptions {
    /* Properties of Arrow-1.0.Arrow.CSVReadOptions */
    allowNewlinesInValues: boolean
    allowNullStrings: boolean
    blockSize: number
    checkUtf8: boolean
    delimiter: number
    escapeCharacter: number
    generateColumnNames: boolean
    ignoreEmptyLines: boolean
    isDoubleQuoted: boolean
    isEscaped: boolean
    isQuoted: boolean
    nSkipRows: number
    quoteCharacter: number
    useThreads: boolean
    /* Fields of Arrow-1.0.Arrow.CSVReadOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.CSVReadOptions */
    addColumnName(columnName: string): void
    addColumnType(name: string, dataType: DataType): void
    addFalseValue(falseValue: string): void
    addNullValue(nullValue: string): void
    addSchema(schema: Schema): void
    addTrueValue(trueValue: string): void
    getColumnNames(): string[] | null
    getColumnTypes(): GLib.HashTable
    getFalseValues(): string[] | null
    getNullValues(): string[] | null
    getTrueValues(): string[] | null
    setColumnNames(columnNames: string[]): void
    setFalseValues(falseValues: string[]): void
    setNullValues(nullValues: string[]): void
    setTrueValues(trueValues: string[]): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-newlines-in-values", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-null-strings", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-null-strings", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::block-size", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::check-utf8", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::check-utf8", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::check-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::check-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::check-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delimiter", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delimiter", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delimiter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delimiter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delimiter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::escape-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::escape-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::escape-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::escape-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::escape-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generate-column-names", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generate-column-names", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-empty-lines", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-empty-lines", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-double-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-double-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-escaped", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-escaped", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-escaped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-escaped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-escaped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-skip-rows", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-skip-rows", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quote-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quote-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quote-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quote-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quote-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CSVReadOptions_ConstructProps)
    _init (config?: CSVReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CSVReadOptions
    static $gtype: GObject.Type
}
export interface CSVReader_ConstructProps extends GObject.Object_ConstructProps {
    csvTableReader?: object
}
class CSVReader {
    /* Fields of Arrow-1.0.Arrow.CSVReader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.CSVReader */
    read(): Table | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CSVReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CSVReader_ConstructProps)
    _init (config?: CSVReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input: InputStream, options?: CSVReadOptions | null): CSVReader
    static $gtype: GObject.Type
}
export interface CastOptions_ConstructProps extends GObject.Object_ConstructProps {
    allowDecimalTruncate?: boolean
    allowFloatTruncate?: boolean
    allowIntOverflow?: boolean
    allowInvalidUtf8?: boolean
    allowTimeOverflow?: boolean
    allowTimeTruncate?: boolean
    toDataType?: DataType
}
class CastOptions {
    /* Properties of Arrow-1.0.Arrow.CastOptions */
    allowDecimalTruncate: boolean
    allowFloatTruncate: boolean
    allowIntOverflow: boolean
    allowInvalidUtf8: boolean
    allowTimeOverflow: boolean
    allowTimeTruncate: boolean
    toDataType: DataType
    /* Fields of Arrow-1.0.Arrow.CastOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-decimal-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-decimal-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-float-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-float-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-int-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-int-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-invalid-utf8", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-invalid-utf8", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-time-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-time-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::to-data-type", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-data-type", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::to-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::to-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::to-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CastOptions_ConstructProps)
    _init (config?: CastOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CastOptions
    static $gtype: GObject.Type
}
export interface ChunkedArray_ConstructProps extends GObject.Object_ConstructProps {
    chunkedArray?: object
}
class ChunkedArray {
    /* Fields of Arrow-1.0.Arrow.ChunkedArray */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ChunkedArray */
    equal(otherChunkedArray: ChunkedArray): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): ChunkedArray | null
    filterChunkedArray(filter: ChunkedArray, options?: FilterOptions | null): ChunkedArray | null
    getChunk(i: number): Array
    getChunks(): Array[]
    getLength(): number
    getNChunks(): number
    getNNulls(): number
    getNRows(): number
    getValueDataType(): DataType
    getValueType(): Type
    slice(offset: number, length: number): ChunkedArray
    sortIndices(order: SortOrder): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): ChunkedArray | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChunkedArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class ChunkedArrayDatum {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayDatum */
    parentInstance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChunkedArrayDatum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class Codec {
    /* Fields of Arrow-1.0.Arrow.Codec */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Codec */
    getCompressionLevel(): number
    getCompressionType(): CompressionType
    getName(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Codec, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class CompareOptions {
    /* Properties of Arrow-1.0.Arrow.CompareOptions */
    operator: CompareOperator
    /* Fields of Arrow-1.0.Arrow.CompareOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompareOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::operator", callback: (($obj: CompareOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CompareOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class CompressedInputStream {
    /* Fields of Arrow-1.0.Arrow.CompressedInputStream */
    parentInstance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class CompressedOutputStream {
    /* Fields of Arrow-1.0.Arrow.CompressedOutputStream */
    parentInstance: OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: any[]): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class CountOptions {
    /* Properties of Arrow-1.0.Arrow.CountOptions */
    mode: CountMode
    /* Fields of Arrow-1.0.Arrow.CountOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CountOptions_ConstructProps)
    _init (config?: CountOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CountOptions
    static $gtype: GObject.Type
}
export interface DataType_ConstructProps extends GObject.Object_ConstructProps {
    dataType?: object
}
class DataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataType_ConstructProps)
    _init (config?: DataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Date32Array_ConstructProps extends NumericArray_ConstructProps {
}
class Date32Array {
    /* Fields of Arrow-1.0.Arrow.Date32Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date32Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Date32Array_ConstructProps)
    _init (config?: Date32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date32Array
    static $gtype: GObject.Type
}
export interface Date32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Date32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Date32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Date32ArrayBuilder_ConstructProps)
    _init (config?: Date32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date32ArrayBuilder
    static $gtype: GObject.Type
}
export interface Date32DataType_ConstructProps extends DataType_ConstructProps {
}
class Date32DataType {
    /* Fields of Arrow-1.0.Arrow.Date32DataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Date32DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Date32DataType_ConstructProps)
    _init (config?: Date32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date32DataType
    static $gtype: GObject.Type
}
export interface Date64Array_ConstructProps extends NumericArray_ConstructProps {
}
class Date64Array {
    /* Fields of Arrow-1.0.Arrow.Date64Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date64Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Date64Array_ConstructProps)
    _init (config?: Date64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date64Array
    static $gtype: GObject.Type
}
export interface Date64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Date64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Date64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Date64ArrayBuilder_ConstructProps)
    _init (config?: Date64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date64ArrayBuilder
    static $gtype: GObject.Type
}
export interface Date64DataType_ConstructProps extends DataType_ConstructProps {
}
class Date64DataType {
    /* Fields of Arrow-1.0.Arrow.Date64DataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Date64DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class Datum {
    /* Fields of Arrow-1.0.Arrow.Datum */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Datum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Datum_ConstructProps)
    _init (config?: Datum_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Decimal128_ConstructProps extends GObject.Object_ConstructProps {
    decimal128?: object
}
class Decimal128 {
    /* Fields of Arrow-1.0.Arrow.Decimal128 */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128 */
    abs(): void
    copy(): Decimal128
    divide(right: Decimal128): { returnType: Decimal128 | null, remainder: Decimal128 | null }
    equal(otherDecimal: Decimal128): boolean
    greaterThan(otherDecimal: Decimal128): boolean
    greaterThanOrEqual(otherDecimal: Decimal128): boolean
    lessThan(otherDecimal: Decimal128): boolean
    lessThanOrEqual(otherDecimal: Decimal128): boolean
    minus(right: Decimal128): Decimal128
    multiply(right: Decimal128): Decimal128
    negate(): void
    notEqual(otherDecimal: Decimal128): boolean
    plus(right: Decimal128): Decimal128
    rescale(originalScale: number, newScale: number): Decimal128 | null
    toBytes(): any
    toInteger(): number
    toString(): string
    toStringScale(scale: number): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal128, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal128_ConstructProps)
    _init (config?: Decimal128_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newInteger(data: number): Decimal128
    static newString(data: string): Decimal128
    static $gtype: GObject.Type
}
export interface Decimal128Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}
class Decimal128Array {
    /* Fields of Arrow-1.0.Arrow.Decimal128Array */
    parentInstance: FixedSizeBinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128Array */
    formatValue(i: number): string
    getValue(i: number): Decimal128
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal128Array_ConstructProps)
    _init (config?: Decimal128Array_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Decimal128ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}
class Decimal128ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayBuilder */
    parentInstance: FixedSizeBinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128ArrayBuilder */
    append(value: Decimal128): boolean
    appendValue(value?: Decimal128 | null): boolean
    appendValues(values: Decimal128[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    appendValue(value: any[] | null): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal128ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal128ArrayBuilder_ConstructProps)
    _init (config?: Decimal128ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Decimal128DataType): Decimal128ArrayBuilder
    static new(dataType: FixedSizeBinaryDataType): Decimal128ArrayBuilder
    static $gtype: GObject.Type
}
export interface Decimal128DataType_ConstructProps extends DecimalDataType_ConstructProps {
}
class Decimal128DataType {
    /* Fields of Arrow-1.0.Arrow.Decimal128DataType */
    parentInstance: DecimalDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    getPrecision(): number
    getScale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal128DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal128DataType_ConstructProps)
    _init (config?: Decimal128DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): Decimal128DataType
    static new(byteWidth: number): Decimal128DataType
    static maxPrecision(): number
    static $gtype: GObject.Type
}
export interface Decimal256_ConstructProps extends GObject.Object_ConstructProps {
    decimal256?: object
}
class Decimal256 {
    /* Fields of Arrow-1.0.Arrow.Decimal256 */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256 */
    abs(): void
    copy(): Decimal256
    divide(right: Decimal256): { returnType: Decimal256 | null, remainder: Decimal256 | null }
    equal(otherDecimal: Decimal256): boolean
    greaterThan(otherDecimal: Decimal256): boolean
    greaterThanOrEqual(otherDecimal: Decimal256): boolean
    lessThan(otherDecimal: Decimal256): boolean
    lessThanOrEqual(otherDecimal: Decimal256): boolean
    multiply(right: Decimal256): Decimal256
    negate(): void
    notEqual(otherDecimal: Decimal256): boolean
    plus(right: Decimal256): Decimal256
    rescale(originalScale: number, newScale: number): Decimal256 | null
    toBytes(): any
    toString(): string
    toStringScale(scale: number): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal256, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal256_ConstructProps)
    _init (config?: Decimal256_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newInteger(data: number): Decimal256
    static newString(data: string): Decimal256
    static $gtype: GObject.Type
}
export interface Decimal256Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}
class Decimal256Array {
    /* Fields of Arrow-1.0.Arrow.Decimal256Array */
    parentInstance: FixedSizeBinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256Array */
    formatValue(i: number): string
    getValue(i: number): Decimal256
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal256Array_ConstructProps)
    _init (config?: Decimal256Array_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Decimal256ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}
class Decimal256ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayBuilder */
    parentInstance: FixedSizeBinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256ArrayBuilder */
    appendValue(value?: Decimal256 | null): boolean
    appendValues(values: Decimal256[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    appendValue(value: any[] | null): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal256ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal256ArrayBuilder_ConstructProps)
    _init (config?: Decimal256ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Decimal256DataType): Decimal256ArrayBuilder
    static new(dataType: FixedSizeBinaryDataType): Decimal256ArrayBuilder
    static $gtype: GObject.Type
}
export interface Decimal256DataType_ConstructProps extends DecimalDataType_ConstructProps {
}
class Decimal256DataType {
    /* Fields of Arrow-1.0.Arrow.Decimal256DataType */
    parentInstance: DecimalDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    getPrecision(): number
    getScale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decimal256DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decimal256DataType_ConstructProps)
    _init (config?: Decimal256DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): Decimal256DataType
    static new(byteWidth: number): Decimal256DataType
    static maxPrecision(): number
    static $gtype: GObject.Type
}
export interface DecimalDataType_ConstructProps extends FixedSizeBinaryDataType_ConstructProps {
}
class DecimalDataType {
    /* Fields of Arrow-1.0.Arrow.DecimalDataType */
    parentInstance: FixedSizeBinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    getPrecision(): number
    getScale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DecimalDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DecimalDataType_ConstructProps)
    _init (config?: DecimalDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): DecimalDataType
    static new(byteWidth: number): DecimalDataType
    static $gtype: GObject.Type
}
export interface DenseUnionArray_ConstructProps extends UnionArray_ConstructProps {
    valueOffsets?: Int32Array
}
class DenseUnionArray {
    /* Fields of Arrow-1.0.Arrow.DenseUnionArray */
    parentInstance: UnionArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    getField(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DenseUnionArray_ConstructProps)
    _init (config?: DenseUnionArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    static newDataType(dataType: DenseUnionDataType, typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    static $gtype: GObject.Type
}
export interface DenseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}
class DenseUnionDataType {
    /* Fields of Arrow-1.0.Arrow.DenseUnionDataType */
    parentInstance: UnionDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): any[]
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DenseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DenseUnionDataType_ConstructProps)
    _init (config?: DenseUnionDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[], typeCodes: any[]): DenseUnionDataType
    static $gtype: GObject.Type
}
export interface DictionaryArray_ConstructProps extends Array_ConstructProps {
    dictionary?: Array
    indices?: Array
}
class DictionaryArray {
    /* Fields of Arrow-1.0.Arrow.DictionaryArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DictionaryArray */
    getDictionary(): Array
    getDictionaryDataType(): DictionaryDataType
    getIndices(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DictionaryArray_ConstructProps)
    _init (config?: DictionaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, indices: Array, dictionary: Array): DictionaryArray
    static $gtype: GObject.Type
}
export interface DictionaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class DictionaryDataType {
    /* Fields of Arrow-1.0.Arrow.DictionaryDataType */
    parentInstance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DictionaryDataType */
    getIndexDataType(): DataType
    getValueDataType(): DataType
    isOrdered(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DictionaryDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DictionaryDataType_ConstructProps)
    _init (config?: DictionaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(indexDataType: DataType, valueDataType: DataType, ordered: boolean): DictionaryDataType
    static $gtype: GObject.Type
}
export interface DoubleArray_ConstructProps extends NumericArray_ConstructProps {
}
class DoubleArray {
    /* Fields of Arrow-1.0.Arrow.DoubleArray */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DoubleArray */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DoubleArray_ConstructProps)
    _init (config?: DoubleArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): DoubleArray
    static $gtype: GObject.Type
}
export interface DoubleArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class DoubleArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DoubleArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DoubleArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DoubleArrayBuilder_ConstructProps)
    _init (config?: DoubleArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DoubleArrayBuilder
    static $gtype: GObject.Type
}
export interface DoubleDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}
class DoubleDataType {
    /* Fields of Arrow-1.0.Arrow.DoubleDataType */
    parentInstance: FloatingPointDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DoubleDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DoubleDataType_ConstructProps)
    _init (config?: DoubleDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DoubleDataType
    static $gtype: GObject.Type
}
export interface ExecuteContext_ConstructProps extends GObject.Object_ConstructProps {
}
class ExecuteContext {
    /* Fields of Arrow-1.0.Arrow.ExecuteContext */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExecuteContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class ExtensionArray {
    /* Fields of Arrow-1.0.Arrow.ExtensionArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionArray */
    getStorage(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExtensionArray_ConstructProps)
    _init (config?: ExtensionArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtensionDataType_ConstructProps extends DataType_ConstructProps {
    storageDataType?: DataType
}
class ExtensionDataType {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionDataType */
    getExtensionName(): string
    wrapArray(storage: Array): ExtensionArray
    wrapChunkedArray(storage: ChunkedArray): ChunkedArray
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtensionDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExtensionDataType_ConstructProps)
    _init (config?: ExtensionDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtensionDataTypeRegistry_ConstructProps extends GObject.Object_ConstructProps {
    registry?: object
}
class ExtensionDataTypeRegistry {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistry */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionDataTypeRegistry */
    lookup(name: string): ExtensionDataType
    register(dataType: ExtensionDataType): boolean
    unregister(name: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtensionDataTypeRegistry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExtensionDataTypeRegistry_ConstructProps)
    _init (config?: ExtensionDataTypeRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static default(): ExtensionDataTypeRegistry
    static $gtype: GObject.Type
}
export interface FeatherFileReader_ConstructProps extends GObject.Object_ConstructProps {
    featherReader?: object
}
class FeatherFileReader {
    /* Fields of Arrow-1.0.Arrow.FeatherFileReader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FeatherFileReader */
    getVersion(): number
    read(): Table
    readIndices(indices: number[]): Table
    readNames(names: string[]): Table
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeatherFileReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class FeatherWriteProperties {
    /* Properties of Arrow-1.0.Arrow.FeatherWriteProperties */
    compression: CompressionType
    /* Fields of Arrow-1.0.Arrow.FeatherWriteProperties */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FeatherWriteProperties_ConstructProps)
    _init (config?: FeatherWriteProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeatherWriteProperties
    static $gtype: GObject.Type
}
export interface Field_ConstructProps extends GObject.Object_ConstructProps {
    dataType?: DataType
    field?: object
}
class Field {
    /* Fields of Arrow-1.0.Arrow.Field */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Field */
    equal(otherField: Field): boolean
    getDataType(): DataType
    getMetadata(): GLib.HashTable | null
    getName(): string
    hasMetadata(): boolean
    isNullable(): boolean
    removeMetadata(): Field
    toString(): string
    toStringMetadata(showMetadata: boolean): string
    withMergedMetadata(metadata: GLib.HashTable): Field
    withMetadata(metadata: GLib.HashTable): Field
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Field, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Field_ConstructProps)
    _init (config?: Field_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, dataType: DataType): Field
    static newFull(name: string, dataType: DataType, nullable: boolean): Field
    static $gtype: GObject.Type
}
export interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
    mtime?: number
    path?: string
    size?: number
    type?: FileType
}
class FileInfo {
    /* Properties of Arrow-1.0.Arrow.FileInfo */
    readonly baseName: string
    readonly dirName: string
    readonly extension: string
    mtime: number
    path: string
    size: number
    type: FileType
    /* Fields of Arrow-1.0.Arrow.FileInfo */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileInfo */
    equal(otherFileInfo: FileInfo): boolean
    isDir(): boolean
    isFile(): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dir-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dir-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dir-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dir-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dir-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtime", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileInfo_ConstructProps)
    _init (config?: FileInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileInfo
    static $gtype: GObject.Type
}
export interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
class FileOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: any[]): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileOutputStream_ConstructProps)
    _init (config?: FileOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, append: boolean): FileOutputStream
    static $gtype: GObject.Type
}
export interface FileSelector_ConstructProps extends GObject.Object_ConstructProps {
    allowNotFound?: boolean
    baseDir?: string
    maxRecursion?: number
    recursive?: boolean
}
class FileSelector {
    /* Properties of Arrow-1.0.Arrow.FileSelector */
    allowNotFound: boolean
    baseDir: string
    maxRecursion: number
    recursive: boolean
    /* Fields of Arrow-1.0.Arrow.FileSelector */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-not-found", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-not-found", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::base-dir", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-dir", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-recursion", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-recursion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileSelector_ConstructProps)
    _init (config?: FileSelector_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileSystem_ConstructProps extends GObject.Object_ConstructProps {
    fileSystem?: object
}
class FileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileSystem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileSystem_ConstructProps)
    _init (config?: FileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(uri: string): FileSystem | null
    static $gtype: GObject.Type
}
export interface FilterOptions_ConstructProps extends GObject.Object_ConstructProps {
    nullSelectionBehavior?: FilterNullSelectionBehavior
}
class FilterOptions {
    /* Properties of Arrow-1.0.Arrow.FilterOptions */
    nullSelectionBehavior: FilterNullSelectionBehavior
    /* Fields of Arrow-1.0.Arrow.FilterOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::null-selection-behavior", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-selection-behavior", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterOptions_ConstructProps)
    _init (config?: FilterOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterOptions
    static $gtype: GObject.Type
}
export interface FixedSizeBinaryArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
class FixedSizeBinaryArray {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FixedSizeBinaryArray_ConstructProps)
    _init (config?: FixedSizeBinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: FixedSizeBinaryDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FixedSizeBinaryArray
    static $gtype: GObject.Type
}
export interface FixedSizeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class FixedSizeBinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    appendValue(value: any[] | null): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FixedSizeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FixedSizeBinaryArrayBuilder_ConstructProps)
    _init (config?: FixedSizeBinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    static $gtype: GObject.Type
}
export interface FixedSizeBinaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class FixedSizeBinaryDataType {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FixedSizeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FixedSizeBinaryDataType_ConstructProps)
    _init (config?: FixedSizeBinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(byteWidth: number): FixedSizeBinaryDataType
    static $gtype: GObject.Type
}
export interface FixedWidthDataType_ConstructProps extends DataType_ConstructProps {
}
class FixedWidthDataType {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FixedWidthDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FixedWidthDataType_ConstructProps)
    _init (config?: FixedWidthDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FloatArray_ConstructProps extends NumericArray_ConstructProps {
}
class FloatArray {
    /* Fields of Arrow-1.0.Arrow.FloatArray */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FloatArray */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FloatArray_ConstructProps)
    _init (config?: FloatArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FloatArray
    static $gtype: GObject.Type
}
export interface FloatArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class FloatArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.FloatArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FloatArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FloatArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FloatArrayBuilder_ConstructProps)
    _init (config?: FloatArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FloatArrayBuilder
    static $gtype: GObject.Type
}
export interface FloatDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}
class FloatDataType {
    /* Fields of Arrow-1.0.Arrow.FloatDataType */
    parentInstance: FloatingPointDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FloatDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FloatDataType_ConstructProps)
    _init (config?: FloatDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FloatDataType
    static $gtype: GObject.Type
}
export interface FloatingPointDataType_ConstructProps extends NumericDataType_ConstructProps {
}
class FloatingPointDataType {
    /* Fields of Arrow-1.0.Arrow.FloatingPointDataType */
    parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FloatingPointDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FloatingPointDataType_ConstructProps)
    _init (config?: FloatingPointDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Function_ConstructProps extends GObject.Object_ConstructProps {
    "function"?: object
}
class Function {
    /* Fields of Arrow-1.0.Arrow.Function */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Function */
    execute(args: Datum[], options?: FunctionOptions | null, context?: ExecuteContext | null): Datum | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class GIOInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    parentInstance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.GIOInputStream */
    getRaw(): Gio.InputStream
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GIOInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GIOInputStream_ConstructProps)
    _init (config?: GIOInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gioInputStream: Gio.InputStream): GIOInputStream
    static $gtype: GObject.Type
}
export interface GIOOutputStream_ConstructProps extends OutputStream_ConstructProps {
    raw?: Gio.OutputStream
}
class GIOOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.GIOOutputStream */
    getRaw(): Gio.OutputStream
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: any[]): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GIOOutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GIOOutputStream_ConstructProps)
    _init (config?: GIOOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gioOutputStream: Gio.OutputStream): GIOOutputStream
    static $gtype: GObject.Type
}
export interface HDFSFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class HDFSFileSystem {
    /* Fields of Arrow-1.0.Arrow.HDFSFileSystem */
    parentInstance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HDFSFileSystem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HDFSFileSystem_ConstructProps)
    _init (config?: HDFSFileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends Gio.InputStream_ConstructProps {
    inputStream?: object
}
class InputStream {
    /* Fields of Arrow-1.0.Arrow.InputStream */
    parentInstance: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Int16Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int16Array {
    /* Fields of Arrow-1.0.Arrow.Int16Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int16Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int16Array_ConstructProps)
    _init (config?: Int16Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int16Array
    static $gtype: GObject.Type
}
export interface Int16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int16ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int16ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int16ArrayBuilder_ConstructProps)
    _init (config?: Int16ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int16ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int16DataType {
    /* Fields of Arrow-1.0.Arrow.Int16DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int16DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int16DataType_ConstructProps)
    _init (config?: Int16DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int16DataType
    static $gtype: GObject.Type
}
export interface Int32Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int32Array {
    /* Fields of Arrow-1.0.Arrow.Int32Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int32Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int32Array_ConstructProps)
    _init (config?: Int32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int32Array
    static $gtype: GObject.Type
}
export interface Int32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int32ArrayBuilder_ConstructProps)
    _init (config?: Int32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int32ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int32DataType {
    /* Fields of Arrow-1.0.Arrow.Int32DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int32DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int32DataType_ConstructProps)
    _init (config?: Int32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int32DataType
    static $gtype: GObject.Type
}
export interface Int64Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int64Array {
    /* Fields of Arrow-1.0.Arrow.Int64Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int64Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int64Array_ConstructProps)
    _init (config?: Int64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int64Array
    static $gtype: GObject.Type
}
export interface Int64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int64ArrayBuilder_ConstructProps)
    _init (config?: Int64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int64ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int64DataType {
    /* Fields of Arrow-1.0.Arrow.Int64DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int64DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int64DataType_ConstructProps)
    _init (config?: Int64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int64DataType
    static $gtype: GObject.Type
}
export interface Int8Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int8Array {
    /* Fields of Arrow-1.0.Arrow.Int8Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int8Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): any[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int8Array_ConstructProps)
    _init (config?: Int8Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int8Array
    static $gtype: GObject.Type
}
export interface Int8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int8ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int8ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int8ArrayBuilder_ConstructProps)
    _init (config?: Int8ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int8ArrayBuilder
    static $gtype: GObject.Type
}
export interface Int8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int8DataType {
    /* Fields of Arrow-1.0.Arrow.Int8DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Int8DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Int8DataType_ConstructProps)
    _init (config?: Int8DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int8DataType
    static $gtype: GObject.Type
}
export interface IntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class IntArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.IntArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IntArrayBuilder_ConstructProps)
    _init (config?: IntArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IntArrayBuilder
    static $gtype: GObject.Type
}
export interface IntegerDataType_ConstructProps extends NumericDataType_ConstructProps {
}
class IntegerDataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IntegerDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IntegerDataType_ConstructProps)
    _init (config?: IntegerDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface JSONReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    allowNewlinesInValues?: boolean
    blockSize?: number
    schema?: Schema
    unexpectedFieldBehavior?: JSONReadUnexpectedFieldBehavior
    useThreads?: boolean
}
class JSONReadOptions {
    /* Properties of Arrow-1.0.Arrow.JSONReadOptions */
    allowNewlinesInValues: boolean
    blockSize: number
    schema: Schema
    unexpectedFieldBehavior: JSONReadUnexpectedFieldBehavior
    useThreads: boolean
    /* Fields of Arrow-1.0.Arrow.JSONReadOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-newlines-in-values", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::block-size", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unexpected-field-behavior", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unexpected-field-behavior", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: JSONReadOptions_ConstructProps)
    _init (config?: JSONReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): JSONReadOptions
    static $gtype: GObject.Type
}
export interface JSONReader_ConstructProps extends GObject.Object_ConstructProps {
    jsonTableReader?: object
}
class JSONReader {
    /* Fields of Arrow-1.0.Arrow.JSONReader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.JSONReader */
    read(): Table | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: JSONReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: JSONReader_ConstructProps)
    _init (config?: JSONReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input: InputStream, options?: JSONReadOptions | null): JSONReader
    static $gtype: GObject.Type
}
export interface LargeBinaryArray_ConstructProps extends Array_ConstructProps {
}
class LargeBinaryArray {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeBinaryArray_ConstructProps)
    _init (config?: LargeBinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeBinaryArray
    static $gtype: GObject.Type
}
export interface LargeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class LargeBinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    appendValue(value: any[]): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeBinaryArrayBuilder_ConstructProps)
    _init (config?: LargeBinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeBinaryArrayBuilder
    static $gtype: GObject.Type
}
export interface LargeBinaryDataType_ConstructProps extends DataType_ConstructProps {
}
class LargeBinaryDataType {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeBinaryDataType_ConstructProps)
    _init (config?: LargeBinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeBinaryDataType
    static $gtype: GObject.Type
}
export interface LargeListArray_ConstructProps extends Array_ConstructProps {
    rawValues?: Array
}
class LargeListArray {
    /* Fields of Arrow-1.0.Arrow.LargeListArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListArray */
    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType
    getValues(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeListArray_ConstructProps)
    _init (config?: LargeListArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): LargeListArray
    static $gtype: GObject.Type
}
export interface LargeListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class LargeListArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListArrayBuilder */
    appendValue(): boolean
    getValueBuilder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeListArrayBuilder_ConstructProps)
    _init (config?: LargeListArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: LargeListDataType): LargeListArrayBuilder
    static $gtype: GObject.Type
}
export interface LargeListDataType_ConstructProps extends DataType_ConstructProps {
}
class LargeListDataType {
    /* Fields of Arrow-1.0.Arrow.LargeListDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListDataType */
    getField(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeListDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeListDataType_ConstructProps)
    _init (config?: LargeListDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(field: Field): LargeListDataType
    static $gtype: GObject.Type
}
export interface LargeStringArray_ConstructProps extends LargeBinaryArray_ConstructProps {
}
class LargeStringArray {
    /* Fields of Arrow-1.0.Arrow.LargeStringArray */
    parentInstance: LargeBinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeStringArray */
    getString(i: number): string
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeStringArray_ConstructProps)
    _init (config?: LargeStringArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeStringArray
    static $gtype: GObject.Type
}
export interface LargeStringArrayBuilder_ConstructProps extends LargeBinaryArrayBuilder_ConstructProps {
}
class LargeStringArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayBuilder */
    parentInstance: LargeBinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeStringArrayBuilder */
    appendString(value: string): boolean
    appendStrings(values: string[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    appendValue(value: any[]): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeStringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeStringArrayBuilder_ConstructProps)
    _init (config?: LargeStringArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeStringArrayBuilder
    static $gtype: GObject.Type
}
export interface LargeStringDataType_ConstructProps extends DataType_ConstructProps {
}
class LargeStringDataType {
    /* Fields of Arrow-1.0.Arrow.LargeStringDataType */
    parentInstance: LargeBinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LargeStringDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LargeStringDataType_ConstructProps)
    _init (config?: LargeStringDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeStringDataType
    static $gtype: GObject.Type
}
export interface ListArray_ConstructProps extends Array_ConstructProps {
    rawValues?: Array
}
class ListArray {
    /* Fields of Arrow-1.0.Arrow.ListArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListArray */
    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType
    getValues(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ListArray_ConstructProps)
    _init (config?: ListArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): ListArray
    static $gtype: GObject.Type
}
export interface ListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class ListArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ListArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListArrayBuilder */
    append(): boolean
    appendValue(): boolean
    getValueBuilder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ListArrayBuilder_ConstructProps)
    _init (config?: ListArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: ListDataType): ListArrayBuilder
    static $gtype: GObject.Type
}
export interface ListDataType_ConstructProps extends DataType_ConstructProps {
}
class ListDataType {
    /* Fields of Arrow-1.0.Arrow.ListDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListDataType */
    getField(): Field
    getValueField(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ListDataType_ConstructProps)
    _init (config?: ListDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(field: Field): ListDataType
    static $gtype: GObject.Type
}
export interface LocalFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class LocalFileSystem {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystem */
    parentInstance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocalFileSystem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocalFileSystem_ConstructProps)
    _init (config?: LocalFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options?: LocalFileSystemOptions | null): LocalFileSystem
    static $gtype: GObject.Type
}
export interface LocalFileSystemOptions_ConstructProps extends GObject.Object_ConstructProps {
    useMmap?: boolean
}
class LocalFileSystemOptions {
    /* Properties of Arrow-1.0.Arrow.LocalFileSystemOptions */
    useMmap: boolean
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-mmap", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-mmap", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class MapArray {
    /* Fields of Arrow-1.0.Arrow.MapArray */
    parentInstance: ListArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapArray */
    getItems(): Array
    getKeys(): Array
    /* Methods of Arrow-1.0.Arrow.ListArray */
    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType
    getValues(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapArray_ConstructProps)
    _init (config?: MapArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(offsets: Array, keys: Array, items: Array): MapArray
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): MapArray
    static $gtype: GObject.Type
}
export interface MapArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class MapArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.MapArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapArrayBuilder */
    appendValue(): boolean
    appendValues(offsets: number[], isValids: boolean[] | null): boolean
    getItemBuilder(): ArrayBuilder
    getKeyBuilder(): ArrayBuilder
    getValueBuilder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapArrayBuilder_ConstructProps)
    _init (config?: MapArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: MapDataType): MapArrayBuilder
    static $gtype: GObject.Type
}
export interface MapDataType_ConstructProps extends ListDataType_ConstructProps {
}
class MapDataType {
    /* Fields of Arrow-1.0.Arrow.MapDataType */
    parentInstance: ListDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapDataType */
    getItemType(): DataType
    getKeyType(): DataType
    /* Methods of Arrow-1.0.Arrow.ListDataType */
    getField(): Field
    getValueField(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapDataType_ConstructProps)
    _init (config?: MapDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(keyType: DataType, itemType: DataType): MapDataType
    static new(field: Field): MapDataType
    static $gtype: GObject.Type
}
export interface MemoryMappedInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
}
class MemoryMappedInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    parentInstance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryMappedInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MemoryMappedInputStream_ConstructProps)
    _init (config?: MemoryMappedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): MemoryMappedInputStream
    static $gtype: GObject.Type
}
export interface MockFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class MockFileSystem {
    /* Fields of Arrow-1.0.Arrow.MockFileSystem */
    parentInstance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MockFileSystem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MockFileSystem_ConstructProps)
    _init (config?: MockFileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MutableBuffer_ConstructProps extends Buffer_ConstructProps {
}
class MutableBuffer {
    /* Fields of Arrow-1.0.Arrow.MutableBuffer */
    parentInstance: Buffer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MutableBuffer */
    setData(offset: number, data: any[]): boolean
    slice(offset: number, size: number): MutableBuffer
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(otherBuffer: Buffer): boolean
    equalNBytes(otherBuffer: Buffer, nBytes: number): boolean
    getCapacity(): number
    getData(): any
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size: number): Buffer
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MutableBuffer_ConstructProps)
    _init (config?: MutableBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: any[]): MutableBuffer
    static newBytes(data: any): MutableBuffer
    static $gtype: GObject.Type
}
export interface NullArray_ConstructProps extends Array_ConstructProps {
}
class NullArray {
    /* Fields of Arrow-1.0.Arrow.NullArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NullArray_ConstructProps)
    _init (config?: NullArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number): NullArray
    static $gtype: GObject.Type
}
export interface NullArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class NullArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.NullArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NullArrayBuilder_ConstructProps)
    _init (config?: NullArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullArrayBuilder
    static $gtype: GObject.Type
}
export interface NullDataType_ConstructProps extends DataType_ConstructProps {
}
class NullDataType {
    /* Fields of Arrow-1.0.Arrow.NullDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NullDataType_ConstructProps)
    _init (config?: NullDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullDataType
    static $gtype: GObject.Type
}
export interface NumericArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
class NumericArray {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NumericArray_ConstructProps)
    _init (config?: NumericArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NumericDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class NumericDataType {
    /* Fields of Arrow-1.0.Arrow.NumericDataType */
    parentInstance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NumericDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NumericDataType_ConstructProps)
    _init (config?: NumericDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ORCFileReader_ConstructProps extends GObject.Object_ConstructProps {
    input?: SeekableInputStream
    orcFileReader?: object
}
class ORCFileReader {
    /* Fields of Arrow-1.0.Arrow.ORCFileReader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ORCFileReader */
    getFieldIndexes(): number[] | null
    getFieldIndices(): number[] | null
    getNRows(): number
    getNStripes(): number
    readStripe(i: number): RecordBatch | null
    readStripes(): Table | null
    readType(): Schema | null
    setFieldIndexes(fieldIndexes: number[] | null): void
    setFieldIndices(fieldIndices: number[] | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ORCFileReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ORCFileReader_ConstructProps)
    _init (config?: ORCFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): ORCFileReader
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
    outputStream?: object
}
class OutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: any[]): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PrimitiveArray_ConstructProps extends Array_ConstructProps {
}
class PrimitiveArray {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrimitiveArray_ConstructProps)
    _init (config?: PrimitiveArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    maxRecursionDepth?: number
    useThreads?: boolean
}
class ReadOptions {
    /* Properties of Arrow-1.0.Arrow.ReadOptions */
    maxRecursionDepth: number
    useThreads: boolean
    /* Fields of Arrow-1.0.Arrow.ReadOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ReadOptions */
    getIncludedFields(): number[]
    setIncludedFields(fields: number[]): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-recursion-depth", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReadOptions_ConstructProps)
    _init (config?: ReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ReadOptions
    static $gtype: GObject.Type
}
export interface RecordBatch_ConstructProps extends GObject.Object_ConstructProps {
    recordBatch?: object
}
class RecordBatch {
    /* Fields of Arrow-1.0.Arrow.RecordBatch */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatch */
    addColumn(i: number, field: Field, column: Array): RecordBatch | null
    equal(otherRecordBatch: RecordBatch): boolean
    equalMetadata(otherRecordBatch: RecordBatch, checkMetadata: boolean): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): RecordBatch | null
    getColumnData(i: number): Array | null
    getColumnName(i: number): string | null
    getNColumns(): number
    getNRows(): number
    getSchema(): Schema
    removeColumn(i: number): RecordBatch | null
    serialize(options?: WriteOptions | null): Buffer | null
    slice(offset: number, length: number): RecordBatch
    sortIndices(options: SortOptions): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): RecordBatch | null
    toString(): string | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatch_ConstructProps)
    _init (config?: RecordBatch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schema: Schema, nRows: number, columns: Array[]): RecordBatch
    static $gtype: GObject.Type
}
export interface RecordBatchBuilder_ConstructProps extends GObject.Object_ConstructProps {
    recordBatchBuilder?: object
}
class RecordBatchBuilder {
    /* Fields of Arrow-1.0.Arrow.RecordBatchBuilder */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchBuilder */
    flush(): RecordBatch
    getColumnBuilder(i: number): ArrayBuilder | null
    getField(i: number): ArrayBuilder | null
    getInitialCapacity(): number
    getNColumns(): number
    getNFields(): number
    getSchema(): Schema
    setInitialCapacity(capacity: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class RecordBatchDatum {
    /* Fields of Arrow-1.0.Arrow.RecordBatchDatum */
    parentInstance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchDatum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatchDatum_ConstructProps)
    _init (config?: RecordBatchDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: RecordBatch): RecordBatchDatum
    static $gtype: GObject.Type
}
export interface RecordBatchFileReader_ConstructProps extends GObject.Object_ConstructProps {
    recordBatchFileReader?: object
}
class RecordBatchFileReader {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchFileReader */
    getNRecordBatches(): number
    getRecordBatch(i: number): RecordBatch | null
    getSchema(): Schema
    getVersion(): MetadataVersion
    readRecordBatch(i: number): RecordBatch | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchFileReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatchFileReader_ConstructProps)
    _init (config?: RecordBatchFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): RecordBatchFileReader
    static $gtype: GObject.Type
}
export interface RecordBatchFileWriter_ConstructProps extends RecordBatchStreamWriter_ConstructProps {
}
class RecordBatchFileWriter {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    writeRecordBatch(recordBatch: RecordBatch): boolean
    writeTable(table: Table): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchFileWriter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class RecordBatchIterator {
    /* Fields of Arrow-1.0.Arrow.RecordBatchIterator */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchIterator */
    equal(otherIterator: RecordBatchIterator): boolean
    next(): RecordBatch | null
    toList(): RecordBatch[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatchIterator_ConstructProps)
    _init (config?: RecordBatchIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(recordBatches: RecordBatch[]): RecordBatchIterator
    static $gtype: GObject.Type
}
export interface RecordBatchReader_ConstructProps extends GObject.Object_ConstructProps {
    recordBatchReader?: object
}
class RecordBatchReader {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    getNextRecordBatch(): RecordBatch | null
    getSchema(): Schema
    readNext(): RecordBatch | null
    readNextRecordBatch(): RecordBatch | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatchReader_ConstructProps)
    _init (config?: RecordBatchReader_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RecordBatchStreamReader_ConstructProps extends RecordBatchReader_ConstructProps {
}
class RecordBatchStreamReader {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    getNextRecordBatch(): RecordBatch | null
    getSchema(): Schema
    readNext(): RecordBatch | null
    readNextRecordBatch(): RecordBatch | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchStreamReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatchStreamReader_ConstructProps)
    _init (config?: RecordBatchStreamReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: InputStream): RecordBatchStreamReader
    static $gtype: GObject.Type
}
export interface RecordBatchStreamWriter_ConstructProps extends RecordBatchWriter_ConstructProps {
}
class RecordBatchStreamWriter {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    writeRecordBatch(recordBatch: RecordBatch): boolean
    writeTable(table: Table): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchStreamWriter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatchStreamWriter_ConstructProps)
    _init (config?: RecordBatchStreamWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    static $gtype: GObject.Type
}
export interface RecordBatchWriter_ConstructProps extends GObject.Object_ConstructProps {
    recordBatchWriter?: object
}
class RecordBatchWriter {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    writeRecordBatch(recordBatch: RecordBatch): boolean
    writeTable(table: Table): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordBatchWriter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordBatchWriter_ConstructProps)
    _init (config?: RecordBatchWriter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResizableBuffer_ConstructProps extends MutableBuffer_ConstructProps {
}
class ResizableBuffer {
    /* Fields of Arrow-1.0.Arrow.ResizableBuffer */
    parentInstance: MutableBuffer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ResizableBuffer */
    reserve(newCapacity: number): boolean
    resize(newSize: number): boolean
    /* Methods of Arrow-1.0.Arrow.MutableBuffer */
    setData(offset: number, data: any[]): boolean
    slice(offset: number, size: number): MutableBuffer
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(otherBuffer: Buffer): boolean
    equalNBytes(otherBuffer: Buffer, nBytes: number): boolean
    getCapacity(): number
    getData(): any
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size: number): Buffer
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResizableBuffer_ConstructProps)
    _init (config?: ResizableBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(initialSize: number): ResizableBuffer
    static new(data: any[]): ResizableBuffer
    static $gtype: GObject.Type
}
export interface S3FileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class S3FileSystem {
    /* Fields of Arrow-1.0.Arrow.S3FileSystem */
    parentInstance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: S3FileSystem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: S3FileSystem_ConstructProps)
    _init (config?: S3FileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Schema_ConstructProps extends GObject.Object_ConstructProps {
    schema?: object
}
class Schema {
    /* Fields of Arrow-1.0.Arrow.Schema */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Schema */
    addField(i: number, field: Field): Schema | null
    equal(otherSchema: Schema): boolean
    getField(i: number): Field
    getFieldByName(name: string): Field
    getFieldIndex(name: string): number
    getFields(): Field[]
    getMetadata(): GLib.HashTable | null
    hasMetadata(): boolean
    nFields(): number
    removeField(i: number): Schema | null
    replaceField(i: number, field: Field): Schema | null
    toString(): string
    toStringMetadata(showMetadata: boolean): string
    withMetadata(metadata: GLib.HashTable): Schema
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Schema_ConstructProps)
    _init (config?: Schema_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[]): Schema
    static $gtype: GObject.Type
}
export interface SeekableInputStream_ConstructProps extends InputStream_ConstructProps {
}
class SeekableInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    parentInstance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SeekableInputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SeekableInputStream_ConstructProps)
    _init (config?: SeekableInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SlowFileSystem_ConstructProps extends FileSystem_ConstructProps {
    baseFileSystem?: FileSystem
}
class SlowFileSystem {
    /* Fields of Arrow-1.0.Arrow.SlowFileSystem */
    parentInstance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SlowFileSystem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SlowFileSystem_ConstructProps)
    _init (config?: SlowFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newAverageLatency(baseFileSystem: FileSystem, averageLatency: number): SlowFileSystem
    static newAverageLatencyAndSeed(baseFileSystem: FileSystem, averageLatency: number, seed: number): SlowFileSystem
    static $gtype: GObject.Type
}
export interface SortKey_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    order?: SortOrder
}
class SortKey {
    /* Properties of Arrow-1.0.Arrow.SortKey */
    name: string
    order: SortOrder
    /* Fields of Arrow-1.0.Arrow.SortKey */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SortKey */
    equal(otherSortKey: SortKey): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SortKey_ConstructProps)
    _init (config?: SortKey_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, order: SortOrder): SortKey
    static $gtype: GObject.Type
}
export interface SortOptions_ConstructProps extends GObject.Object_ConstructProps {
}
class SortOptions {
    /* Fields of Arrow-1.0.Arrow.SortOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SortOptions */
    addSortKey(sortKey: SortKey): void
    equal(otherOptions: SortOptions): boolean
    getSortKeys(): SortKey[]
    setSortKeys(sortKeys: SortKey[]): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SortOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SortOptions_ConstructProps)
    _init (config?: SortOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sortKeys?: SortKey[] | null): SortOptions
    static $gtype: GObject.Type
}
export interface SparseUnionArray_ConstructProps extends UnionArray_ConstructProps {
}
class SparseUnionArray {
    /* Fields of Arrow-1.0.Arrow.SparseUnionArray */
    parentInstance: UnionArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    getField(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparseUnionArray_ConstructProps)
    _init (config?: SparseUnionArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(typeIds: Int8Array, fields: Array[]): SparseUnionArray
    static newDataType(dataType: SparseUnionDataType, typeIds: Int8Array, fields: Array[]): SparseUnionArray
    static $gtype: GObject.Type
}
export interface SparseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}
class SparseUnionDataType {
    /* Fields of Arrow-1.0.Arrow.SparseUnionDataType */
    parentInstance: UnionDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): any[]
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparseUnionDataType_ConstructProps)
    _init (config?: SparseUnionDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[], typeCodes: any[]): SparseUnionDataType
    static $gtype: GObject.Type
}
export interface StringArray_ConstructProps extends BinaryArray_ConstructProps {
}
class StringArray {
    /* Fields of Arrow-1.0.Arrow.StringArray */
    parentInstance: BinaryArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringArray */
    getString(i: number): string
    /* Methods of Arrow-1.0.Arrow.BinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StringArray_ConstructProps)
    _init (config?: StringArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): StringArray
    static $gtype: GObject.Type
}
export interface StringArrayBuilder_ConstructProps extends BinaryArrayBuilder_ConstructProps {
}
class StringArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.StringArrayBuilder */
    parentInstance: BinaryArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringArrayBuilder */
    append(value: string): boolean
    appendString(value: string): boolean
    appendStrings(values: string[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.BinaryArrayBuilder */
    append(value: any[]): boolean
    appendValue(value: any[]): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StringArrayBuilder_ConstructProps)
    _init (config?: StringArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringArrayBuilder
    static $gtype: GObject.Type
}
export interface StringDataType_ConstructProps extends DataType_ConstructProps {
}
class StringDataType {
    /* Fields of Arrow-1.0.Arrow.StringDataType */
    parentInstance: BinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StringDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StringDataType_ConstructProps)
    _init (config?: StringDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringDataType
    static $gtype: GObject.Type
}
export interface StringDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class StringDictionaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringDictionaryArrayBuilder */
    appendArray(array: StringArray): boolean
    appendIndices(values: number[], isValids: boolean[] | null): boolean
    appendString(value: string): boolean
    finishDelta(): { returnType: boolean, outIndices: Array, outDelta: Array }
    getDictionaryLength(): number
    insertMemoValues(values: StringArray): boolean
    resetFull(): void
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StringDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StringDictionaryArrayBuilder_ConstructProps)
    _init (config?: StringDictionaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringDictionaryArrayBuilder
    static $gtype: GObject.Type
}
export interface StructArray_ConstructProps extends Array_ConstructProps {
}
class StructArray {
    /* Fields of Arrow-1.0.Arrow.StructArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructArray */
    flatten(): Array[]
    getField(i: number): Array
    getFields(): Array[]
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StructArray_ConstructProps)
    _init (config?: StructArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, length: number, fields: Array[], nullBitmap: Buffer | null, nNulls: number): StructArray
    static $gtype: GObject.Type
}
export interface StructArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class StructArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.StructArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructArrayBuilder */
    append(): boolean
    appendValue(): boolean
    getFieldBuilder(i: number): ArrayBuilder
    getFieldBuilders(): Array[]
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StructArrayBuilder_ConstructProps)
    _init (config?: StructArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: StructDataType): StructArrayBuilder
    static $gtype: GObject.Type
}
export interface StructDataType_ConstructProps extends DataType_ConstructProps {
}
class StructDataType {
    /* Fields of Arrow-1.0.Arrow.StructDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructDataType */
    getField(i: number): Field | null
    getFieldByName(name: string): Field | null
    getFieldIndex(name: string): number
    getFields(): Field[]
    getNFields(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StructDataType_ConstructProps)
    _init (config?: StructDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[]): StructDataType
    static $gtype: GObject.Type
}
export interface SubTreeFileSystem_ConstructProps extends FileSystem_ConstructProps {
    baseFileSystem?: FileSystem
}
class SubTreeFileSystem {
    /* Fields of Arrow-1.0.Arrow.SubTreeFileSystem */
    parentInstance: FileSystem
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubTreeFileSystem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SubTreeFileSystem_ConstructProps)
    _init (config?: SubTreeFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(basePath: string, baseFileSystem: FileSystem): SubTreeFileSystem
    static $gtype: GObject.Type
}
export interface Table_ConstructProps extends GObject.Object_ConstructProps {
    table?: object
}
class Table {
    /* Fields of Arrow-1.0.Arrow.Table */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Table */
    addColumn(i: number, field: Field, chunkedArray: ChunkedArray): Table | null
    combineChunks(): Table | null
    concatenate(otherTables: Table[]): Table | null
    equal(otherTable: Table): boolean
    equalMetadata(otherTable: Table, checkMetadata: boolean): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Table | null
    filterChunkedArray(filter: ChunkedArray, options?: FilterOptions | null): Table | null
    getColumnData(i: number): ChunkedArray | null
    getNColumns(): number
    getNRows(): number
    getSchema(): Schema
    removeColumn(i: number): Table | null
    replaceColumn(i: number, field: Field, chunkedArray: ChunkedArray): Table | null
    slice(offset: number, length: number): Table
    sortIndices(options: SortOptions): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Table | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): Table | null
    toString(): string | null
    writeAsFeather(sink: OutputStream, properties?: FeatherWriteProperties | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Table, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Table_ConstructProps)
    _init (config?: Table_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newArrays(schema: Schema, arrays: Array[]): Table
    static newChunkedArrays(schema: Schema, chunkedArrays: ChunkedArray[]): Table
    static newRecordBatches(schema: Schema, recordBatches: RecordBatch[]): Table
    static $gtype: GObject.Type
}
export interface TableBatchReader_ConstructProps extends RecordBatchReader_ConstructProps {
}
class TableBatchReader {
    /* Fields of Arrow-1.0.Arrow.TableBatchReader */
    parentInstance: RecordBatchReader
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    getNextRecordBatch(): RecordBatch | null
    getSchema(): Schema
    readNext(): RecordBatch | null
    readNextRecordBatch(): RecordBatch | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TableBatchReader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class TableDatum {
    /* Fields of Arrow-1.0.Arrow.TableDatum */
    parentInstance: Datum
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TableDatum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TableDatum_ConstructProps)
    _init (config?: TableDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Table): TableDatum
    static $gtype: GObject.Type
}
export interface TakeOptions_ConstructProps extends GObject.Object_ConstructProps {
}
class TakeOptions {
    /* Fields of Arrow-1.0.Arrow.TakeOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TakeOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
class Tensor {
    /* Fields of Arrow-1.0.Arrow.Tensor */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Tensor */
    equal(otherTensor: Tensor): boolean
    getBuffer(): Buffer
    getDimensionName(i: number): string
    getNDimensions(): number
    getShape(): number[]
    getSize(): number
    getStrides(): number[]
    getValueDataType(): DataType
    getValueType(): Type
    isColumnMajor(): boolean
    isContiguous(): boolean
    isMutable(): boolean
    isRowMajor(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tensor_ConstructProps)
    _init (config?: Tensor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, data: Buffer, shape: number[], strides: number[] | null, dimensionNames: string[] | null): Tensor
    static $gtype: GObject.Type
}
export interface Time32Array_ConstructProps extends NumericArray_ConstructProps {
}
class Time32Array {
    /* Fields of Arrow-1.0.Arrow.Time32Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time32Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time32Array_ConstructProps)
    _init (config?: Time32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time32DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time32Array
    static $gtype: GObject.Type
}
export interface Time32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Time32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Time32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time32ArrayBuilder_ConstructProps)
    _init (config?: Time32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time32DataType): Time32ArrayBuilder
    static $gtype: GObject.Type
}
export interface Time32DataType_ConstructProps extends TimeDataType_ConstructProps {
}
class Time32DataType {
    /* Fields of Arrow-1.0.Arrow.Time32DataType */
    parentInstance: TimeDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Time32DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time32DataType_ConstructProps)
    _init (config?: Time32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): Time32DataType
    static $gtype: GObject.Type
}
export interface Time64Array_ConstructProps extends NumericArray_ConstructProps {
}
class Time64Array {
    /* Fields of Arrow-1.0.Arrow.Time64Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time64Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time64Array_ConstructProps)
    _init (config?: Time64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time64DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time64Array
    static $gtype: GObject.Type
}
export interface Time64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Time64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Time64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time64ArrayBuilder_ConstructProps)
    _init (config?: Time64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time64DataType): Time64ArrayBuilder
    static $gtype: GObject.Type
}
export interface Time64DataType_ConstructProps extends TimeDataType_ConstructProps {
}
class Time64DataType {
    /* Fields of Arrow-1.0.Arrow.Time64DataType */
    parentInstance: TimeDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Time64DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time64DataType_ConstructProps)
    _init (config?: Time64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): Time64DataType
    static $gtype: GObject.Type
}
export interface TimeDataType_ConstructProps extends DataType_ConstructProps {
}
class TimeDataType {
    /* Fields of Arrow-1.0.Arrow.TimeDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimeDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimeDataType_ConstructProps)
    _init (config?: TimeDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TimestampArray_ConstructProps extends NumericArray_ConstructProps {
}
class TimestampArray {
    /* Fields of Arrow-1.0.Arrow.TimestampArray */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampArray */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimestampArray_ConstructProps)
    _init (config?: TimestampArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: TimestampDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): TimestampArray
    static $gtype: GObject.Type
}
export interface TimestampArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class TimestampArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimestampArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimestampArrayBuilder_ConstructProps)
    _init (config?: TimestampArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: TimestampDataType): TimestampArrayBuilder
    static $gtype: GObject.Type
}
export interface TimestampDataType_ConstructProps extends DataType_ConstructProps {
}
class TimestampDataType {
    /* Fields of Arrow-1.0.Arrow.TimestampDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimestampDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimestampDataType_ConstructProps)
    _init (config?: TimestampDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): TimestampDataType
    static $gtype: GObject.Type
}
export interface UInt16Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt16Array {
    /* Fields of Arrow-1.0.Arrow.UInt16Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt16Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt16Array_ConstructProps)
    _init (config?: UInt16Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt16Array
    static $gtype: GObject.Type
}
export interface UInt16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt16ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt16ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt16ArrayBuilder_ConstructProps)
    _init (config?: UInt16ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt16ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt16DataType {
    /* Fields of Arrow-1.0.Arrow.UInt16DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt16DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt16DataType_ConstructProps)
    _init (config?: UInt16DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt16DataType
    static $gtype: GObject.Type
}
export interface UInt32Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt32Array {
    /* Fields of Arrow-1.0.Arrow.UInt32Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt32Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt32Array_ConstructProps)
    _init (config?: UInt32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt32Array
    static $gtype: GObject.Type
}
export interface UInt32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt32ArrayBuilder_ConstructProps)
    _init (config?: UInt32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt32ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt32DataType {
    /* Fields of Arrow-1.0.Arrow.UInt32DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt32DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt32DataType_ConstructProps)
    _init (config?: UInt32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt32DataType
    static $gtype: GObject.Type
}
export interface UInt64Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt64Array {
    /* Fields of Arrow-1.0.Arrow.UInt64Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt64Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt64Array_ConstructProps)
    _init (config?: UInt64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt64Array
    static $gtype: GObject.Type
}
export interface UInt64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt64ArrayBuilder_ConstructProps)
    _init (config?: UInt64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt64ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt64DataType {
    /* Fields of Arrow-1.0.Arrow.UInt64DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt64DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt64DataType_ConstructProps)
    _init (config?: UInt64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt64DataType
    static $gtype: GObject.Type
}
export interface UInt8Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt8Array {
    /* Fields of Arrow-1.0.Arrow.UInt8Array */
    parentInstance: NumericArray
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt8Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): any[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt8Array_ConstructProps)
    _init (config?: UInt8Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt8Array
    static $gtype: GObject.Type
}
export interface UInt8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt8ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt8ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt8ArrayBuilder_ConstructProps)
    _init (config?: UInt8ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt8ArrayBuilder
    static $gtype: GObject.Type
}
export interface UInt8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt8DataType {
    /* Fields of Arrow-1.0.Arrow.UInt8DataType */
    parentInstance: IntegerDataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UInt8DataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UInt8DataType_ConstructProps)
    _init (config?: UInt8DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt8DataType
    static $gtype: GObject.Type
}
export interface UIntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UIntArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.UIntArrayBuilder */
    parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UIntArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UIntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UIntArrayBuilder_ConstructProps)
    _init (config?: UIntArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UIntArrayBuilder
    static $gtype: GObject.Type
}
export interface UnionArray_ConstructProps extends Array_ConstructProps {
    typeIds?: Int8Array
}
class UnionArray {
    /* Fields of Arrow-1.0.Arrow.UnionArray */
    parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    getField(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnionArray_ConstructProps)
    _init (config?: UnionArray_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UnionDataType_ConstructProps extends DataType_ConstructProps {
}
class UnionDataType {
    /* Fields of Arrow-1.0.Arrow.UnionDataType */
    parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): any[]
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnionDataType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnionDataType_ConstructProps)
    _init (config?: UnionDataType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WriteOptions_ConstructProps extends GObject.Object_ConstructProps {
    alignment?: number
    allow64bit?: boolean
    codec?: Codec
    maxRecursionDepth?: number
    useThreads?: boolean
    writeLegacyIpcFormat?: boolean
}
class WriteOptions {
    /* Properties of Arrow-1.0.Arrow.WriteOptions */
    alignment: number
    allow64bit: boolean
    codec: Codec
    maxRecursionDepth: number
    useThreads: boolean
    writeLegacyIpcFormat: boolean
    /* Fields of Arrow-1.0.Arrow.WriteOptions */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-64bit", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-64bit", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codec", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-recursion-depth", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-legacy-ipc-format", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-legacy-ipc-format", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WriteOptions_ConstructProps)
    _init (config?: WriteOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WriteOptions
    static $gtype: GObject.Type
}
abstract class ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ArrayClass {
    /* Fields of Arrow-1.0.Arrow.ArrayClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ArrayDatumClass {
    /* Fields of Arrow-1.0.Arrow.ArrayDatumClass */
    parentClass: DatumClass
    static name: string
}
abstract class ArraySortOptionsClass {
    /* Fields of Arrow-1.0.Arrow.ArraySortOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class BinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class BinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class BinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.BinaryDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class BinaryDictionaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class BooleanArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class BooleanArrayClass {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayClass */
    parentClass: PrimitiveArrayClass
    static name: string
}
abstract class BooleanDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.BooleanDataTypeClass */
    parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class BufferClass {
    /* Fields of Arrow-1.0.Arrow.BufferClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class BufferInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.BufferInputStreamClass */
    parentClass: SeekableInputStreamClass
    static name: string
}
abstract class BufferOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.BufferOutputStreamClass */
    parentClass: OutputStreamClass
    static name: string
}
abstract class CSVReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CSVReadOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class CSVReaderClass {
    /* Fields of Arrow-1.0.Arrow.CSVReaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class CastOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CastOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChunkedArrayClass {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChunkedArrayDatumClass {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayDatumClass */
    parentClass: DatumClass
    static name: string
}
abstract class CodecClass {
    /* Fields of Arrow-1.0.Arrow.CodecClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class CompareOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CompareOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class CompressedInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.CompressedInputStreamClass */
    parentClass: InputStreamClass
    static name: string
}
abstract class CompressedOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.CompressedOutputStreamClass */
    parentClass: OutputStreamClass
    static name: string
}
abstract class CountOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CountOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DataTypeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class Date32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Date32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Date32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Date32DataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class Date64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Date64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Date64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Date64DataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class DatumClass {
    /* Fields of Arrow-1.0.Arrow.DatumClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class Decimal128ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass */
    parentClass: FixedSizeBinaryArrayBuilderClass
    static name: string
}
abstract class Decimal128ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayClass */
    parentClass: FixedSizeBinaryArrayClass
    static name: string
}
abstract class Decimal128Class {
    /* Fields of Arrow-1.0.Arrow.Decimal128Class */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class Decimal128DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128DataTypeClass */
    parentClass: DecimalDataTypeClass
    static name: string
}
abstract class Decimal256ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass */
    parentClass: FixedSizeBinaryArrayBuilderClass
    static name: string
}
abstract class Decimal256ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayClass */
    parentClass: FixedSizeBinaryArrayClass
    static name: string
}
abstract class Decimal256Class {
    /* Fields of Arrow-1.0.Arrow.Decimal256Class */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class Decimal256DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256DataTypeClass */
    parentClass: DecimalDataTypeClass
    static name: string
}
abstract class DecimalDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DecimalDataTypeClass */
    parentClass: FixedSizeBinaryDataTypeClass
    static name: string
}
abstract class DenseUnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.DenseUnionArrayClass */
    parentClass: UnionArrayClass
    static name: string
}
abstract class DenseUnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DenseUnionDataTypeClass */
    parentClass: UnionDataTypeClass
    static name: string
}
abstract class DictionaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.DictionaryArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class DictionaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DictionaryDataTypeClass */
    parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class DoubleArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class DoubleArrayClass {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class DoubleDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DoubleDataTypeClass */
    parentClass: FloatingPointDataTypeClass
    static name: string
}
abstract class ExecuteContextClass {
    /* Fields of Arrow-1.0.Arrow.ExecuteContextClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ExtensionArrayClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class ExtensionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeClass */
    parentClass: DataTypeClass
    getExtensionName: (dataType: ExtensionDataType) => string
    equal: (dataType: ExtensionDataType, otherDataType: ExtensionDataType) => boolean
    serialize: (dataType: ExtensionDataType) => any
    getArrayGtype: (dataType: ExtensionDataType) => GObject.Type
    static name: string
}
abstract class ExtensionDataTypeRegistryClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FeatherFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.FeatherFileReaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FeatherWritePropertiesClass {
    /* Fields of Arrow-1.0.Arrow.FeatherWritePropertiesClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FieldClass {
    /* Fields of Arrow-1.0.Arrow.FieldClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileInfoClass {
    /* Fields of Arrow-1.0.Arrow.FileInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileInterface {
    static name: string
}
abstract class FileOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.FileOutputStreamClass */
    parentClass: OutputStreamClass
    static name: string
}
abstract class FileSelectorClass {
    /* Fields of Arrow-1.0.Arrow.FileSelectorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileSystemClass {
    /* Fields of Arrow-1.0.Arrow.FileSystemClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FilterOptionsClass {
    /* Fields of Arrow-1.0.Arrow.FilterOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FixedSizeBinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class FixedSizeBinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass */
    parentClass: PrimitiveArrayClass
    static name: string
}
abstract class FixedSizeBinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass */
    parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class FixedWidthDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class FloatArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.FloatArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class FloatArrayClass {
    /* Fields of Arrow-1.0.Arrow.FloatArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class FloatDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FloatDataTypeClass */
    parentClass: FloatingPointDataTypeClass
    static name: string
}
abstract class FloatingPointDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FloatingPointDataTypeClass */
    parentClass: NumericDataTypeClass
    static name: string
}
abstract class FunctionClass {
    /* Fields of Arrow-1.0.Arrow.FunctionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class FunctionOptionsInterface {
    static name: string
}
abstract class GIOInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.GIOInputStreamClass */
    parentClass: SeekableInputStreamClass
    static name: string
}
abstract class GIOOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.GIOOutputStreamClass */
    parentClass: OutputStreamClass
    static name: string
}
abstract class HDFSFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.HDFSFileSystemClass */
    parentClass: FileSystemClass
    static name: string
}
abstract class InputStreamClass {
    /* Fields of Arrow-1.0.Arrow.InputStreamClass */
    parentClass: Gio.InputStreamClass
    static name: string
}
abstract class Int16ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int16ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Int16DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int16DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class Int32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Int32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int32DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class Int64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Int64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int64DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class Int8ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int8ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Int8DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int8DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class IntArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.IntArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class IntegerDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.IntegerDataTypeClass */
    parentClass: NumericDataTypeClass
    static name: string
}
abstract class JSONReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.JSONReadOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class JSONReaderClass {
    /* Fields of Arrow-1.0.Arrow.JSONReaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class LargeBinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class LargeBinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class LargeBinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class LargeListArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class LargeListArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class LargeListDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeListDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class LargeStringArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayBuilderClass */
    parentClass: LargeBinaryArrayBuilderClass
    static name: string
}
abstract class LargeStringArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayClass */
    parentClass: LargeBinaryArrayClass
    static name: string
}
abstract class LargeStringDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringDataTypeClass */
    parentClass: LargeBinaryDataTypeClass
    static name: string
}
abstract class ListArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.ListArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class ListArrayClass {
    /* Fields of Arrow-1.0.Arrow.ListArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class ListDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.ListDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class LocalFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemClass */
    parentClass: FileSystemClass
    static name: string
}
abstract class LocalFileSystemOptionsClass {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class MapArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.MapArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class MapArrayClass {
    /* Fields of Arrow-1.0.Arrow.MapArrayClass */
    parentClass: ListArrayClass
    static name: string
}
abstract class MapDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.MapDataTypeClass */
    parentClass: ListDataTypeClass
    static name: string
}
abstract class MemoryMappedInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.MemoryMappedInputStreamClass */
    parentClass: SeekableInputStreamClass
    static name: string
}
abstract class MockFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.MockFileSystemClass */
    parentClass: FileSystemClass
    static name: string
}
abstract class MutableBufferClass {
    /* Fields of Arrow-1.0.Arrow.MutableBufferClass */
    parentClass: BufferClass
    static name: string
}
abstract class NullArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.NullArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class NullArrayClass {
    /* Fields of Arrow-1.0.Arrow.NullArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class NullDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.NullDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class NumericArrayClass {
    /* Fields of Arrow-1.0.Arrow.NumericArrayClass */
    parentClass: PrimitiveArrayClass
    static name: string
}
abstract class NumericDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.NumericDataTypeClass */
    parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class ORCFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.ORCFileReaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class OutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.OutputStreamClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class PrimitiveArrayClass {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class ReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.ReadOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ReadableInterface {
    static name: string
}
abstract class RecordBatchBuilderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchBuilderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchDatumClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchDatumClass */
    parentClass: DatumClass
    static name: string
}
abstract class RecordBatchFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchFileReaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchFileWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchFileWriterClass */
    parentClass: RecordBatchStreamWriterClass
    static name: string
}
abstract class RecordBatchIteratorClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchIteratorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchStreamReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchStreamReaderClass */
    parentClass: RecordBatchReaderClass
    static name: string
}
abstract class RecordBatchStreamWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchStreamWriterClass */
    parentClass: RecordBatchWriterClass
    static name: string
}
abstract class RecordBatchWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchWriterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ResizableBufferClass {
    /* Fields of Arrow-1.0.Arrow.ResizableBufferClass */
    parentClass: MutableBufferClass
    static name: string
}
abstract class S3FileSystemClass {
    /* Fields of Arrow-1.0.Arrow.S3FileSystemClass */
    parentClass: FileSystemClass
    static name: string
}
abstract class SchemaClass {
    /* Fields of Arrow-1.0.Arrow.SchemaClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SeekableInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStreamClass */
    parentClass: InputStreamClass
    static name: string
}
abstract class SlowFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.SlowFileSystemClass */
    parentClass: FileSystemClass
    static name: string
}
abstract class SortKeyClass {
    /* Fields of Arrow-1.0.Arrow.SortKeyClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SortOptionsClass {
    /* Fields of Arrow-1.0.Arrow.SortOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SparseUnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.SparseUnionArrayClass */
    parentClass: UnionArrayClass
    static name: string
}
abstract class SparseUnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.SparseUnionDataTypeClass */
    parentClass: UnionDataTypeClass
    static name: string
}
abstract class StringArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StringArrayBuilderClass */
    parentClass: BinaryArrayBuilderClass
    static name: string
}
abstract class StringArrayClass {
    /* Fields of Arrow-1.0.Arrow.StringArrayClass */
    parentClass: BinaryArrayClass
    static name: string
}
abstract class StringDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.StringDataTypeClass */
    parentClass: BinaryDataTypeClass
    static name: string
}
abstract class StringDictionaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class StructArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StructArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class StructArrayClass {
    /* Fields of Arrow-1.0.Arrow.StructArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class StructDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.StructDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class SubTreeFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.SubTreeFileSystemClass */
    parentClass: FileSystemClass
    static name: string
}
abstract class TableBatchReaderClass {
    /* Fields of Arrow-1.0.Arrow.TableBatchReaderClass */
    parentClass: RecordBatchReaderClass
    static name: string
}
abstract class TableClass {
    /* Fields of Arrow-1.0.Arrow.TableClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class TableDatumClass {
    /* Fields of Arrow-1.0.Arrow.TableDatumClass */
    parentClass: DatumClass
    static name: string
}
abstract class TakeOptionsClass {
    /* Fields of Arrow-1.0.Arrow.TakeOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class TensorClass {
    /* Fields of Arrow-1.0.Arrow.TensorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class Time32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Time32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Time32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Time32DataTypeClass */
    parentClass: TimeDataTypeClass
    static name: string
}
abstract class Time64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class Time64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class Time64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Time64DataTypeClass */
    parentClass: TimeDataTypeClass
    static name: string
}
abstract class TimeDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.TimeDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class TimestampArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class TimestampArrayClass {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class TimestampDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.TimestampDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class UInt16ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt16ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class UInt16DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt16DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UInt32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class UInt32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt32DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UInt64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class UInt64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt64DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UInt8ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt8ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayClass */
    parentClass: NumericArrayClass
    static name: string
}
abstract class UInt8DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt8DataTypeClass */
    parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UIntArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UIntArrayBuilderClass */
    parentClass: ArrayBuilderClass
    static name: string
}
abstract class UnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.UnionArrayClass */
    parentClass: ArrayClass
    static name: string
}
abstract class UnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UnionDataTypeClass */
    parentClass: DataTypeClass
    static name: string
}
abstract class WritableFileInterface {
    static name: string
}
abstract class WritableInterface {
    static name: string
}
abstract class WriteOptionsClass {
    /* Fields of Arrow-1.0.Arrow.WriteOptionsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
type TimePoint = number
}
export default Arrow