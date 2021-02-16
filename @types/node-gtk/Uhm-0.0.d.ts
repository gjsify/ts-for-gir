/**
 * Uhm-0.0
 */

/// <reference types="node" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Uhm {

export enum ServerError {
    SERVER_ERROR_MESSAGE_MISMATCH,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export interface Resolver_ConstructProps extends Gio.Resolver_ConstructProps {
}
export class Resolver {
    /* Fields of Gio.Resolver */
    parentInstance: GObject.Object
    priv: Gio.ResolverPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Uhm.Resolver */
    addA(hostname: string, addr: string): boolean
    addSRV(service: string, protocol: string, domain: string, addr: string, port: number): boolean
    reset(): void
    /* Methods of Gio.Resolver */
    lookupByAddress(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null): string
    lookupByAddressAsync(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupByAddressFinish(result: Gio.AsyncResult): string
    lookupByName(hostname: string, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    lookupByNameAsync(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupByNameFinish(result: Gio.AsyncResult): Gio.InetAddress[]
    lookupByNameWithFlags(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    lookupByNameWithFlagsAsync(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupByNameWithFlagsFinish(result: Gio.AsyncResult): Gio.InetAddress[]
    lookupRecords(rrname: string, recordType: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null): GLib.Variant[]
    lookupRecordsAsync(rrname: string, recordType: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupRecordsFinish(result: Gio.AsyncResult): GLib.Variant[]
    lookupService(service: string, protocol: string, domain: string, cancellable?: Gio.Cancellable | null): Gio.SrvTarget[]
    lookupServiceAsync(service: string, protocol: string, domain: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupServiceFinish(result: Gio.AsyncResult): Gio.SrvTarget[]
    setDefault(): void
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
    /* Virtual methods of Gio.Resolver */
    vfuncLookupByAddress(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null): string
    vfuncLookupByAddressAsync(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLookupByAddressFinish(result: Gio.AsyncResult): string
    vfuncLookupByName(hostname: string, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    vfuncLookupByNameAsync(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLookupByNameFinish(result: Gio.AsyncResult): Gio.InetAddress[]
    vfuncLookupByNameWithFlags(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    vfuncLookupByNameWithFlagsAsync(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLookupByNameWithFlagsFinish(result: Gio.AsyncResult): Gio.InetAddress[]
    vfuncLookupRecords(rrname: string, recordType: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null): GLib.Variant[]
    vfuncLookupRecordsAsync(rrname: string, recordType: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLookupRecordsFinish(result: Gio.AsyncResult): GLib.Variant[]
    vfuncLookupServiceAsync(rrname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLookupServiceFinish(result: Gio.AsyncResult): Gio.SrvTarget[]
    vfuncReload(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Resolver */
    connect(sigName: "reload", callback: (($obj: Resolver) => void)): number
    connect_after(sigName: "reload", callback: (($obj: Resolver) => void)): number
    emit(sigName: "reload"): void
    on(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Resolver_ConstructProps)
    _init (config?: Resolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Resolver
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    enableLogging?: boolean
    enableOnline?: boolean
    tlsCertificate?: Gio.TlsCertificate
    traceDirectory?: Gio.File
}
export class Server {
    /* Properties of Uhm.Server */
    readonly address: string
    enableLogging: boolean
    enableOnline: boolean
    readonly port: number
    readonly resolver: Resolver
    tlsCertificate: Gio.TlsCertificate
    traceDirectory: Gio.File
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Uhm.Server */
    compareMessagesRemoveFilter(filterId: number): void
    endTrace(): void
    filterIgnoreParameterValues(parameterNames: string[]): number
    getAddress(): string | null
    getEnableLogging(): boolean
    getEnableOnline(): boolean
    getPort(): number
    getResolver(): Resolver | null
    getTlsCertificate(): Gio.TlsCertificate | null
    getTraceDirectory(): Gio.File | null
    loadTrace(traceFile: Gio.File, cancellable?: Gio.Cancellable | null): void
    loadTraceAsync(traceFile: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadTraceFinish(result: Gio.AsyncResult): void
    receivedMessageChunk(messageChunk: string, messageChunkLength: number): void
    receivedMessageChunkWithDirection(direction: number, data: string, dataLength: number): void
    run(): void
    setDefaultTlsCertificate(): Gio.TlsCertificate
    setEnableLogging(enableLogging: boolean): void
    setEnableOnline(enableOnline: boolean): void
    setExpectedDomainNames(domainNames?: string[] | null): void
    setTlsCertificate(tlsCertificate?: Gio.TlsCertificate | null): void
    setTraceDirectory(traceDirectory?: Gio.File | null): void
    startTrace(traceName: string): void
    startTraceFull(traceFile: Gio.File): void
    stop(): void
    unloadTrace(): void
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
    /* Virtual methods of Uhm.Server */
    vfuncCompareMessages(expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext): boolean
    vfuncHandleMessage(message: Soup.Message, client: Soup.ClientContext): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Uhm.Server */
    connect(sigName: "compare-messages", callback: (($obj: Server, expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => boolean)): number
    connect_after(sigName: "compare-messages", callback: (($obj: Server, expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => boolean)): number
    emit(sigName: "compare-messages", expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext): void
    on(sigName: "compare-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "compare-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "compare-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-message", callback: (($obj: Server, message: Soup.Message, client: Soup.ClientContext) => boolean)): number
    connect_after(sigName: "handle-message", callback: (($obj: Server, message: Soup.Message, client: Soup.ClientContext) => boolean)): number
    emit(sigName: "handle-message", message: Soup.Message, client: Soup.ClientContext): void
    on(sigName: "handle-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-logging", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-logging", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-logging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-logging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-logging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-online", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-online", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolver", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolver", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trace-directory", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trace-directory", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trace-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trace-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trace-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static errorQuark(): GLib.Quark
    static receivedMessageChunkFromSoup(logger: Soup.Logger, level: Soup.LoggerLogLevel, direction: number, data: string, userData?: object | null): void
    static $gtype: GObject.Type
}
export abstract class ResolverClass {
    static name: string
}
export class ResolverPrivate {
    static name: string
}
export abstract class ServerClass {
    /* Fields of Uhm.ServerClass */
    handleMessage: (self: Server, message: Soup.Message, client: Soup.ClientContext) => boolean
    compareMessages: (self: Server, expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => boolean
    static name: string
}
export class ServerPrivate {
    static name: string
}
}