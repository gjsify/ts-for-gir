/**
 * Jsonrpc-1.0
 */

/// <reference types="node" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Jsonrpc {

export enum ClientError {
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
export interface ServerHandler {
    (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    ioStream?: Gio.IOStream
    useGvariant?: boolean
}
export class Client {
    /* Properties of Jsonrpc.Client */
    useGvariant: boolean
    /* Fields of Jsonrpc.Client */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc.Client */
    call(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* returnValue */ GLib.Variant | null ]
    callAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* returnValue */ GLib.Variant | null ]
    callWithIdAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* id */ GLib.Variant | null
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
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Jsonrpc.Client */
    vfuncFailed(): void
    vfuncHandleCall(method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfuncNotification(methodName: string, params: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Jsonrpc.Client */
    connect(sigName: "failed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "failed", callback: (($obj: Client) => void)): number
    emit(sigName: "failed"): void
    on(sigName: "failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-call", callback: (($obj: Client, method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    connect_after(sigName: "handle-call", callback: (($obj: Client, method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    emit(sigName: "handle-call", method: string, id: GLib.Variant, params?: GLib.Variant | null): void
    on(sigName: "handle-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notification", callback: (($obj: Client, method: string, params?: GLib.Variant | null) => void)): number
    connect_after(sigName: "notification", callback: (($obj: Client, method: string, params?: GLib.Variant | null) => void)): number
    emit(sigName: "notification", method: string, params?: GLib.Variant | null): void
    on(sigName: "notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class InputStream {
    /* Properties of Gio.DataInputStream */
    byteOrder: Gio.DataStreamByteOrder
    newlineType: Gio.DataStreamNewlineType
    /* Properties of Gio.BufferedInputStream */
    bufferSize: number
    /* Properties of Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Jsonrpc.InputStream */
    parentInstance: Gio.DataInputStream
    /* Fields of Gio.FilterInputStream */
    baseStream: Gio.InputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc.InputStream */
    readMessage(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean
    readMessageAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readMessageFinish(result: Gio.AsyncResult, message: GLib.Variant): boolean
    /* Methods of Gio.DataInputStream */
    getByteOrder(): Gio.DataStreamByteOrder
    getNewlineType(): Gio.DataStreamNewlineType
    readByte(cancellable?: Gio.Cancellable | null): number
    readInt16(cancellable?: Gio.Cancellable | null): number
    readInt32(cancellable?: Gio.Cancellable | null): number
    readInt64(cancellable?: Gio.Cancellable | null): number
    readLine(cancellable?: Gio.Cancellable | null): [ /* returnType */ any | null, /* length */ number | null ]
    readLineAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readLineFinish(result: Gio.AsyncResult): [ /* returnType */ any | null, /* length */ number | null ]
    readLineFinishUtf8(result: Gio.AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    readLineUtf8(cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    readUint16(cancellable?: Gio.Cancellable | null): number
    readUint32(cancellable?: Gio.Cancellable | null): number
    readUint64(cancellable?: Gio.Cancellable | null): number
    readUntil(stopChars: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUntilAsync(stopChars: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readUntilFinish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    readUpto(stopChars: string, stopCharsLen: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUptoAsync(stopChars: string, stopCharsLen: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readUptoFinish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    setByteOrder(order: Gio.DataStreamByteOrder): void
    setNewlineType(type: Gio.DataStreamNewlineType): void
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Gio.Cancellable | null): number
    fillAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fillFinish(result: Gio.AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: any, offset: number): number
    peekBuffer(): any
    setBufferSize(size: number): void
    /* Methods of Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Jsonrpc.InputStream */
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfuncFill(count: number, cancellable?: Gio.Cancellable | null): number
    vfuncFillAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncFillFinish(result: Gio.AsyncResult): number
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish(result: Gio.AsyncResult): boolean
    vfuncCloseFn(cancellable?: Gio.Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish(result: Gio.AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSkipFinish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class OutputStream {
    /* Properties of Jsonrpc.OutputStream */
    useGvariant: boolean
    /* Properties of Gio.DataOutputStream */
    byteOrder: Gio.DataStreamByteOrder
    /* Fields of Jsonrpc.OutputStream */
    parentInstance: Gio.DataOutputStream
    /* Fields of Gio.FilterOutputStream */
    baseStream: Gio.OutputStream
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc.OutputStream */
    getUseGvariant(): boolean
    setUseGvariant(useGvariant: boolean): void
    writeMessage(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    writeMessageAsync(message: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeMessageFinish(result: Gio.AsyncResult): boolean
    /* Methods of Gio.DataOutputStream */
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
    /* Methods of Gio.FilterOutputStream */
    getBaseStream(): Gio.OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio.OutputStream */
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
    write(buffer: any, cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: any, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Jsonrpc.OutputStream */
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish(result: Gio.AsyncResult): boolean
    vfuncCloseFn(cancellable?: Gio.Cancellable | null): boolean
    vfuncFlush(cancellable?: Gio.Cancellable | null): boolean
    vfuncFlushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncFlushFinish(result: Gio.AsyncResult): boolean
    vfuncSplice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfuncSpliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSpliceFinish(result: Gio.AsyncResult): number
    vfuncWriteAsync(buffer: any | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncWriteFinish(result: Gio.AsyncResult): number
    vfuncWriteFn(buffer: any | null, cancellable?: Gio.Cancellable | null): number
    vfuncWritevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncWritevFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export class Server {
    /* Fields of Jsonrpc.Server */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc.Server */
    acceptIoStream(ioStream: Gio.IOStream): void
    addHandler(method: string, handler: ServerHandler): number
    foreach(foreachFunc: GLib.Func): void
    removeHandler(handlerId: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Jsonrpc.Server */
    vfuncClientAccepted(client: Client): void
    vfuncClientClosed(client: Client): void
    vfuncHandleCall(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfuncNotification(client: Client, method: string, params: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Jsonrpc.Server */
    connect(sigName: "client-accepted", callback: (($obj: Server, client: Client) => void)): number
    connect_after(sigName: "client-accepted", callback: (($obj: Server, client: Client) => void)): number
    emit(sigName: "client-accepted", client: Client): void
    on(sigName: "client-accepted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "client-accepted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "client-accepted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "client-closed", callback: (($obj: Server, client: Client) => void)): number
    connect_after(sigName: "client-closed", callback: (($obj: Server, client: Client) => void)): number
    emit(sigName: "client-closed", client: Client): void
    on(sigName: "client-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "client-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "client-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-call", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-call", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    emit(sigName: "handle-call", client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
    on(sigName: "handle-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notification", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant) => void)): number
    connect_after(sigName: "notification", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant) => void)): number
    emit(sigName: "notification", client: Client, method: string, id: GLib.Variant): void
    on(sigName: "notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export abstract class ClientClass {
    /* Fields of Jsonrpc.ClientClass */
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
export abstract class InputStreamClass {
    /* Fields of Jsonrpc.InputStreamClass */
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
export class MessageAny {
    /* Fields of Jsonrpc.MessageAny */
    magic: MessageMagic
    static name: string
}
export class MessageGetBoolean {
    /* Fields of Jsonrpc.MessageGetBoolean */
    magic: MessageMagic
    valptr: boolean
    static name: string
}
export class MessageGetDict {
    /* Fields of Jsonrpc.MessageGetDict */
    magic: MessageMagic
    dictptr: GLib.VariantDict
    static name: string
}
export class MessageGetDouble {
    /* Fields of Jsonrpc.MessageGetDouble */
    magic: MessageMagic
    valptr: number
    static name: string
}
export class MessageGetInt32 {
    /* Fields of Jsonrpc.MessageGetInt32 */
    magic: MessageMagic
    valptr: number
    static name: string
}
export class MessageGetInt64 {
    /* Fields of Jsonrpc.MessageGetInt64 */
    magic: MessageMagic
    valptr: number
    static name: string
}
export class MessageGetIter {
    /* Fields of Jsonrpc.MessageGetIter */
    magic: MessageMagic
    static name: string
}
export class MessageGetString {
    /* Fields of Jsonrpc.MessageGetString */
    magic: MessageMagic
    valptr: string
    static name: string
}
export class MessageGetStrv {
    /* Fields of Jsonrpc.MessageGetStrv */
    magic: MessageMagic
    valptr: string
    static name: string
}
export class MessageGetVariant {
    /* Fields of Jsonrpc.MessageGetVariant */
    magic: MessageMagic
    variantptr: GLib.Variant
    static name: string
}
export class MessageMagic {
    /* Fields of Jsonrpc.MessageMagic */
    bytes: number[]
    static name: string
}
export class MessagePutBoolean {
    /* Fields of Jsonrpc.MessagePutBoolean */
    magic: MessageMagic
    val: boolean
    static name: string
}
export class MessagePutDouble {
    /* Fields of Jsonrpc.MessagePutDouble */
    magic: MessageMagic
    val: number
    static name: string
}
export class MessagePutInt32 {
    /* Fields of Jsonrpc.MessagePutInt32 */
    magic: MessageMagic
    val: number
    static name: string
}
export class MessagePutInt64 {
    /* Fields of Jsonrpc.MessagePutInt64 */
    magic: MessageMagic
    val: number
    static name: string
}
export class MessagePutString {
    /* Fields of Jsonrpc.MessagePutString */
    magic: MessageMagic
    val: string
    static name: string
}
export class MessagePutStrv {
    /* Fields of Jsonrpc.MessagePutStrv */
    magic: MessageMagic
    val: string
    static name: string
}
export abstract class OutputStreamClass {
    /* Fields of Jsonrpc.OutputStreamClass */
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
export abstract class ServerClass {
    /* Fields of Jsonrpc.ServerClass */
    parentClass: GObject.ObjectClass
    handleCall: (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    notification: (self: Server, client: Client, method: string, params: GLib.Variant) => void
    clientAccepted: (self: Server, client: Client) => void
    clientClosed: (self: Server, client: Client) => void
    static name: string
}
}