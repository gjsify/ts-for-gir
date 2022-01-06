/**
 * Jsonrpc-1.0
 */

import "node"
import type { Json } from './Json-1.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Jsonrpc {

enum ClientError {
    PARSE_ERROR,
    INVALID_REQUEST,
    METHOD_NOT_FOUND,
    INVALID_PARAMS,
    INTERNAL_ERROR,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_S: string
interface ServerHandler {
    (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    ioStream?: Gio.IOStream
    useGvariant?: boolean
}
class Client {
    /* Properties of Jsonrpc-1.0.Jsonrpc.Client */
    useGvariant: boolean
    /* Fields of Jsonrpc-1.0.Jsonrpc.Client */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.Client */
    call(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): { returnType: boolean, returnValue: GLib.Variant | null }
    callAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(result: Gio.AsyncResult): { returnType: boolean, returnValue: GLib.Variant | null }
    callWithIdAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { id: GLib.Variant | null }
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    getUseGvariant(): boolean
    reply(id: GLib.Variant, result?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    replyAsync(id: GLib.Variant, result: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replyErrorAsync(id: GLib.Variant, code: number, message?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replyErrorFinish(result: Gio.AsyncResult): boolean
    replyFinish(result: Gio.AsyncResult): boolean
    sendNotification(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    sendNotificationAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendNotificationFinish(result: Gio.AsyncResult): boolean
    setUseGvariant(useGvariant: boolean): void
    startListening(): void
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
    /* Signals of Jsonrpc-1.0.Jsonrpc.Client */
    connect(sigName: "failed", callback: (($obj: Client) => void)): number
    on(sigName: "failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "failed"): void
    connect(sigName: "handle-call", callback: (($obj: Client, method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    on(sigName: "handle-call", callback: (method: string, id: GLib.Variant, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-call", callback: (method: string, id: GLib.Variant, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-call", callback: (method: string, id: GLib.Variant, params?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "handle-call", method: string, id: GLib.Variant, params?: GLib.Variant | null): void
    connect(sigName: "notification", callback: (($obj: Client, method: string, params?: GLib.Variant | null) => void)): number
    on(sigName: "notification", callback: (method: string, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification", callback: (method: string, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification", callback: (method: string, params?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "notification", method: string, params?: GLib.Variant | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ioStream: Gio.IOStream): Client
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends Gio.DataInputStream_ConstructProps {
}
class InputStream {
    /* Properties of Gio-2.0.Gio.DataInputStream */
    byteOrder: Gio.DataStreamByteOrder
    newlineType: Gio.DataStreamNewlineType
    /* Properties of Gio-2.0.Gio.BufferedInputStream */
    bufferSize: number
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Jsonrpc-1.0.Jsonrpc.InputStream */
    parentInstance: Gio.DataInputStream
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    baseStream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.InputStream */
    readMessage(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean
    readMessageAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readMessageFinish(result: Gio.AsyncResult, message: GLib.Variant): boolean
    /* Methods of Gio-2.0.Gio.DataInputStream */
    getByteOrder(): Gio.DataStreamByteOrder
    getNewlineType(): Gio.DataStreamNewlineType
    readByte(cancellable?: Gio.Cancellable | null): number
    readInt16(cancellable?: Gio.Cancellable | null): number
    readInt32(cancellable?: Gio.Cancellable | null): number
    readInt64(cancellable?: Gio.Cancellable | null): number
    readLine(cancellable?: Gio.Cancellable | null): { returnType: any[] | null, length: number | null }
    readLineAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readLineFinish(result: Gio.AsyncResult): { returnType: any[] | null, length: number | null }
    readLineFinishUtf8(result: Gio.AsyncResult): { returnType: string | null, length: number | null }
    readLineUtf8(cancellable?: Gio.Cancellable | null): { returnType: string | null, length: number | null }
    readUint16(cancellable?: Gio.Cancellable | null): number
    readUint32(cancellable?: Gio.Cancellable | null): number
    readUint64(cancellable?: Gio.Cancellable | null): number
    readUntil(stopChars: string, cancellable?: Gio.Cancellable | null): { returnType: string, length: number | null }
    readUntilAsync(stopChars: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readUntilFinish(result: Gio.AsyncResult): { returnType: string, length: number | null }
    readUpto(stopChars: string, stopCharsLen: number, cancellable?: Gio.Cancellable | null): { returnType: string, length: number | null }
    readUptoAsync(stopChars: string, stopCharsLen: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readUptoFinish(result: Gio.AsyncResult): { returnType: string, length: number | null }
    setByteOrder(order: Gio.DataStreamByteOrder): void
    setNewlineType(type: Gio.DataStreamNewlineType): void
    /* Methods of Gio-2.0.Gio.BufferedInputStream */
    fill(count: number, cancellable?: Gio.Cancellable | null): number
    fillAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fillFinish(result: Gio.AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: any[], offset: number): number
    peekBuffer(): any[]
    setBufferSize(size: number): void
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(baseStream: Gio.InputStream): InputStream
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends Gio.DataOutputStream_ConstructProps {
    useGvariant?: boolean
}
class OutputStream {
    /* Properties of Jsonrpc-1.0.Jsonrpc.OutputStream */
    useGvariant: boolean
    /* Properties of Gio-2.0.Gio.DataOutputStream */
    byteOrder: Gio.DataStreamByteOrder
    /* Fields of Jsonrpc-1.0.Jsonrpc.OutputStream */
    parentInstance: Gio.DataOutputStream
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    baseStream: Gio.OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.OutputStream */
    getUseGvariant(): boolean
    setUseGvariant(useGvariant: boolean): void
    writeMessage(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    writeMessageAsync(message: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeMessageFinish(result: Gio.AsyncResult): boolean
    /* Methods of Gio-2.0.Gio.DataOutputStream */
    getByteOrder(): Gio.DataStreamByteOrder
    putByte(data: number, cancellable?: Gio.Cancellable | null): boolean
    putInt16(data: number, cancellable?: Gio.Cancellable | null): boolean
    putInt32(data: number, cancellable?: Gio.Cancellable | null): boolean
    putInt64(data: number, cancellable?: Gio.Cancellable | null): boolean
    putString(str: string, cancellable?: Gio.Cancellable | null): boolean
    putUint16(data: number, cancellable?: Gio.Cancellable | null): boolean
    putUint32(data: number, cancellable?: Gio.Cancellable | null): boolean
    putUint64(data: number, cancellable?: Gio.Cancellable | null): boolean
    setByteOrder(order: Gio.DataStreamByteOrder): void
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    getBaseStream(): Gio.OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    spliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spliceFinish(result: Gio.AsyncResult): number
    write(buffer: any[], cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: any[], cancellable?: Gio.Cancellable | null): { returnType: boolean, bytesWritten: number | null }
    writeAllAsync(buffer: any[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesWritten: number | null }
    writeAsync(buffer: any[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): { returnType: boolean, bytesWritten: number | null }
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): { returnType: boolean, bytesWritten: number | null }
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesWritten: number | null }
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): { returnType: boolean, bytesWritten: number | null }
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(baseStream: Gio.OutputStream): OutputStream
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
}
class Server {
    /* Fields of Jsonrpc-1.0.Jsonrpc.Server */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.Server */
    acceptIoStream(ioStream: Gio.IOStream): void
    addHandler(method: string, handler: ServerHandler): number
    foreach(foreachFunc: GLib.Func): void
    removeHandler(handlerId: number): void
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
    /* Signals of Jsonrpc-1.0.Jsonrpc.Server */
    connect(sigName: "client-accepted", callback: (($obj: Server, client: Client) => void)): number
    on(sigName: "client-accepted", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-accepted", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-accepted", callback: (client: Client) => void): NodeJS.EventEmitter
    emit(sigName: "client-accepted", client: Client): void
    connect(sigName: "client-closed", callback: (($obj: Server, client: Client) => void)): number
    on(sigName: "client-closed", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-closed", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-closed", callback: (client: Client) => void): NodeJS.EventEmitter
    emit(sigName: "client-closed", client: Client): void
    connect(sigName: "handle-call", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    on(sigName: "handle-call", callback: (client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-call", callback: (client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-call", callback: (client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-call", client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
    connect(sigName: "notification", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant) => void)): number
    on(sigName: "notification", callback: (client: Client, method: string, id: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification", callback: (client: Client, method: string, id: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification", callback: (client: Client, method: string, id: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "notification", client: Client, method: string, id: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Server
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.ClientClass */
    parentClass: GObject.ObjectClass
    notification: (self: Client, methodName: string, params: GLib.Variant) => void
    handleCall: (self: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    failed: (self: Client) => void
    reserved2: object
    reserved3: object
    reserved4: object
    reserved5: object
    reserved6: object
    reserved7: object
    reserved8: object
    static name: string
}
abstract class InputStreamClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.InputStreamClass */
    parentClass: Gio.DataInputStreamClass
    reserved1: object
    reserved2: object
    reserved3: object
    reserved4: object
    reserved5: object
    reserved6: object
    reserved7: object
    reserved8: object
    static name: string
}
class MessageAny {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageAny */
    magic: MessageMagic
    static name: string
}
class MessageGetBoolean {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetBoolean */
    magic: MessageMagic
    valptr: boolean
    static name: string
}
class MessageGetDict {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetDict */
    magic: MessageMagic
    dictptr: GLib.VariantDict
    static name: string
}
class MessageGetDouble {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetDouble */
    magic: MessageMagic
    valptr: number
    static name: string
}
class MessageGetInt32 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt32 */
    magic: MessageMagic
    valptr: number
    static name: string
}
class MessageGetInt64 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt64 */
    magic: MessageMagic
    valptr: number
    static name: string
}
class MessageGetIter {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetIter */
    magic: MessageMagic
    static name: string
}
class MessageGetString {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetString */
    magic: MessageMagic
    valptr: string
    static name: string
}
class MessageGetStrv {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetStrv */
    magic: MessageMagic
    valptr: string
    static name: string
}
class MessageGetVariant {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetVariant */
    magic: MessageMagic
    variantptr: GLib.Variant
    static name: string
}
class MessageMagic {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageMagic */
    bytes: number[]
    static name: string
}
class MessagePutBoolean {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutBoolean */
    magic: MessageMagic
    val: boolean
    static name: string
}
class MessagePutDouble {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutDouble */
    magic: MessageMagic
    val: number
    static name: string
}
class MessagePutInt32 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt32 */
    magic: MessageMagic
    val: number
    static name: string
}
class MessagePutInt64 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt64 */
    magic: MessageMagic
    val: number
    static name: string
}
class MessagePutString {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutString */
    magic: MessageMagic
    val: string
    static name: string
}
class MessagePutStrv {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutStrv */
    magic: MessageMagic
    val: string
    static name: string
}
class MessagePutVariant {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutVariant */
    magic: MessageMagic
    val: GLib.Variant
    static name: string
}
abstract class OutputStreamClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.OutputStreamClass */
    parentClass: Gio.DataOutputStreamClass
    reserved1: object
    reserved2: object
    reserved3: object
    reserved4: object
    reserved5: object
    reserved6: object
    reserved7: object
    reserved8: object
    reserved9: object
    reserved10: object
    reserved11: object
    reserved12: object
    static name: string
}
abstract class ServerClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.ServerClass */
    parentClass: GObject.ObjectClass
    handleCall: (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    notification: (self: Server, client: Client, method: string, params: GLib.Variant) => void
    clientAccepted: (self: Server, client: Client) => void
    clientClosed: (self: Server, client: Client) => void
    static name: string
}
}
export default Jsonrpc