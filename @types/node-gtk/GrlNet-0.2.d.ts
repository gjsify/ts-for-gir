/**
 * GrlNet-0.2
 */

import "node"
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GrlNet {

enum WcError {
    UNAVAILABLE,
    PROTOCOL_ERROR,
    AUTHENTICATION_REQUIRED,
    NOT_FOUND,
    CONFLICT,
    FORBIDDEN,
    NETWORK_ERROR,
    PROXY_ERROR,
    CANCELLED,
}
export interface Wc_ConstructProps extends GObject.Object_ConstructProps {
    cache?: boolean
    cacheSize?: number
    loglevel?: number
    throttling?: number
    userAgent?: string
}
class Wc {
    /* Properties of GrlNet-0.2.GrlNet.Wc */
    cache: boolean
    cacheSize: number
    loglevel: number
    throttling: number
    userAgent: string
    /* Fields of GrlNet-0.2.GrlNet.Wc */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GrlNet-0.2.GrlNet.Wc */
    flushDelayedRequests(): void
    requestAsync(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    requestFinish(result: Gio.AsyncResult): { returnType: boolean, content: string | null, length: number | null }
    requestWithHeadersAsync(uri: string, headers?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setCache(useCache: boolean): void
    setCacheSize(cacheSize: number): void
    setLogLevel(logLevel: number): void
    setThrottling(throttling: number): void
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
    connect(sigName: "notify", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-size", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-size", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::loglevel", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loglevel", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loglevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loglevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loglevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttling", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttling", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Wc_ConstructProps)
    _init (config?: Wc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Wc
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
abstract class WcClass {
    /* Fields of GrlNet-0.2.GrlNet.WcClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class WcPrivate {
    static name: string
}
}
export default GrlNet