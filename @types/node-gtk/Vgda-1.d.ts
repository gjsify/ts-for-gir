/**
 * Vgda-1
 */

/// <reference types="node" />
import type { Vda } from './Vda-1';
import type { GCalc } from './GCalc-1';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { Gee } from './Gee-0.8';

declare namespace Vgda {

export interface GProvider_ConstructProps extends GObject.Object_ConstructProps {
    parameters?: Vda.ConnectionParameters
}
export class GProvider {
    /* Properties of Vda.Connection */
    readonly status: Vda.ConnectionStatus
    parameters: Vda.ConnectionParameters
    readonly isOpened: boolean
    readonly connectionString: string
    /* Fields of Vgda.GProvider */
    parentInstance: GObject.Object
    priv: GProviderPrivate
    provider: string
    cncString: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Vda.Connection */
    close(callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): void
    open(callback?: Gio.AsyncReadyCallback | null): void
    openFinish(res: Gio.AsyncResult): Vda.ConnectionStatus
    openFromString(cncString: string, callback?: Gio.AsyncReadyCallback | null): void
    openFromStringFinish(res: Gio.AsyncResult): Vda.ConnectionStatus
    addSavepoint(name?: string | null): boolean
    deleteSavepoint(name?: string | null): boolean
    rollbackSavepoint(name?: string | null): boolean
    beginTransaction(name?: string | null): boolean
    commitTransaction(name?: string | null): boolean
    rollbackTransaction(name?: string | null): boolean
    parseString(sql: string): Vda.Query
    parseStringPrepared(name: string | null, sql: string): Vda.PreparedQuery | null
    getPreparedQuery(name: string): Vda.PreparedQuery | null
    queryFromCommand(cmd: Vda.SqlCommand, name?: string | null): Vda.PreparedQuery | null
    valueToQuotedString(v: Vda.SqlValue): string
    currentUser(): Vda.Role | null
    locale(category: string): string
    getStatus(): Vda.ConnectionStatus
    getParameters(): Vda.ConnectionParameters
    setParameters(value: Vda.ConnectionParameters): void
    getIsOpened(): boolean
    getConnectionString(): string
    /* Virtual methods of Vgda.GProvider */
    vfuncClose(callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish(res: Gio.AsyncResult): void
    vfuncOpen(callback?: Gio.AsyncReadyCallback | null): void
    vfuncOpenFinish(res: Gio.AsyncResult): Vda.ConnectionStatus
    vfuncOpenFromString(cncString: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncOpenFromStringFinish(res: Gio.AsyncResult): Vda.ConnectionStatus
    vfuncAddSavepoint(name?: string | null): boolean
    vfuncDeleteSavepoint(name?: string | null): boolean
    vfuncRollbackSavepoint(name?: string | null): boolean
    vfuncBeginTransaction(name?: string | null): boolean
    vfuncCommitTransaction(name?: string | null): boolean
    vfuncRollbackTransaction(name?: string | null): boolean
    vfuncParseString(sql: string): Vda.Query
    vfuncParseStringPrepared(name: string | null, sql: string): Vda.PreparedQuery | null
    vfuncGetPreparedQuery(name: string): Vda.PreparedQuery | null
    vfuncQueryFromCommand(cmd: Vda.SqlCommand, name?: string | null): Vda.PreparedQuery | null
    vfuncValueToQuotedString(v: Vda.SqlValue): string
    vfuncCurrentUser(): Vda.Role | null
    vfuncLocale(category: string): string
    vfuncGetStatus(): Vda.ConnectionStatus
    vfuncGetParameters(): Vda.ConnectionParameters
    vfuncSetParameters(value: Vda.ConnectionParameters): void
    vfuncGetIsOpened(): boolean
    vfuncGetConnectionString(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Vda.Connection */
    connect(sigName: "closed", callback: (($obj: GProvider) => void)): number
    connect_after(sigName: "closed", callback: (($obj: GProvider) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "opened", callback: (($obj: GProvider) => void)): number
    connect_after(sigName: "opened", callback: (($obj: GProvider) => void)): number
    emit(sigName: "opened"): void
    on(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closing", callback: (($obj: GProvider) => void)): number
    connect_after(sigName: "closing", callback: (($obj: GProvider) => void)): number
    emit(sigName: "closing"): void
    on(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "canceled", callback: (($obj: GProvider, message: string) => void)): number
    connect_after(sigName: "canceled", callback: (($obj: GProvider, message: string) => void)): number
    emit(sigName: "canceled", message: string): void
    on(sigName: "canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "timeout", callback: (($obj: GProvider) => void)): number
    connect_after(sigName: "timeout", callback: (($obj: GProvider) => void)): number
    emit(sigName: "timeout"): void
    on(sigName: "timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "disconnected", callback: (($obj: GProvider) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: GProvider) => void)): number
    emit(sigName: "disconnected"): void
    on(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-opened", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-opened", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection-string", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-string", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GProvider_ConstructProps)
    _init (config?: GProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GProvider
    static $gtype: GObject.Type
}
export abstract class GProviderClass {
    /* Fields of Vgda.GProviderClass */
    parentClass: GObject.ObjectClass
    currentUser: (self: GProvider) => Vda.Role | null
    static name: string
}
export class GProviderPrivate {
    static name: string
}
}