/**
 * Parquet-1.0
 */

import "node"
import type { Arrow } from './Arrow-1.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Parquet {

export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_TAG: string
export interface ArrowFileReader_ConstructProps extends GObject.Object_ConstructProps {
    arrowFileReader?: object
}
export class ArrowFileReader {
    /* Fields of Parquet-1.0.Parquet.ArrowFileReader */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Parquet-1.0.Parquet.ArrowFileReader */
    getNRowGroups(): number
    getSchema(): Arrow.Schema | null
    readColumnData(i: number): Arrow.ChunkedArray | null
    readRowGroup(rowGroupIndex: number, columnIndices: number[] | null): Arrow.Table | null
    readTable(): Arrow.Table | null
    setUseThreads(useThreads: boolean): void
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
    connect(sigName: "notify", callback: (($obj: ArrowFileReader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ArrowFileReader_ConstructProps)
    _init (config?: ArrowFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newArrow(source: Arrow.SeekableInputStream): ArrowFileReader
    static newPath(path: string): ArrowFileReader
    static $gtype: GObject.Type
}
export interface ArrowFileWriter_ConstructProps extends GObject.Object_ConstructProps {
    arrowFileWriter?: object
}
export class ArrowFileWriter {
    /* Fields of Parquet-1.0.Parquet.ArrowFileWriter */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Parquet-1.0.Parquet.ArrowFileWriter */
    close(): boolean
    writeTable(table: Arrow.Table, chunkSize: number): boolean
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
    connect(sigName: "notify", callback: (($obj: ArrowFileWriter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ArrowFileWriter_ConstructProps)
    _init (config?: ArrowFileWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newArrow(schema: Arrow.Schema, sink: Arrow.OutputStream, writerProperties?: WriterProperties | null): ArrowFileWriter
    static newPath(schema: Arrow.Schema, path: string, writerProperties?: WriterProperties | null): ArrowFileWriter
    static $gtype: GObject.Type
}
export interface WriterProperties_ConstructProps extends GObject.Object_ConstructProps {
}
export class WriterProperties {
    /* Fields of Parquet-1.0.Parquet.WriterProperties */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Parquet-1.0.Parquet.WriterProperties */
    disableDictionary(path?: string | null): void
    enableDictionary(path?: string | null): void
    getBatchSize(): number
    getCompressionPath(path: string): Arrow.CompressionType
    getDataPageSize(): number
    getDictionaryPageSizeLimit(): number
    getMaxRowGroupLength(): number
    isDictionaryEnabled(path: string): boolean
    setBatchSize(batchSize: number): void
    setCompression(compressionType: Arrow.CompressionType, path?: string | null): void
    setDataPageSize(dataPageSize: number): void
    setDictionaryPageSizeLimit(limit: number): void
    setMaxRowGroupLength(length: number): void
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
    connect(sigName: "notify", callback: (($obj: WriterProperties, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WriterProperties_ConstructProps)
    _init (config?: WriterProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WriterProperties
    static $gtype: GObject.Type
}
export abstract class ArrowFileReaderClass {
    /* Fields of Parquet-1.0.Parquet.ArrowFileReaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ArrowFileWriterClass {
    /* Fields of Parquet-1.0.Parquet.ArrowFileWriterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class WriterPropertiesClass {
    /* Fields of Parquet-1.0.Parquet.WriterPropertiesClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}