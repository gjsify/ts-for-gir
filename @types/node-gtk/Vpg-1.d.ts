/**
 * Vpg-1
 */

import "node"
import type { Vda } from './Vda-1';
import type { GCalc } from './GCalc-1';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { Gee } from './Gee-0.8';

export declare namespace Vpg {

export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    parameters?: Vda.ConnectionParameters
}
export class Connection {
    /* Properties of Vda-1.Vda.Connection */
    readonly status: Vda.ConnectionStatus
    parameters: Vda.ConnectionParameters
    readonly isOpened: boolean
    readonly connectionString: string
    /* Fields of Vpg-1.Vpg.Connection */
    parentInstance: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Vda-1.Vda.Connection */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Vda-1.Vda.Connection */
    connect(sigName: "closed", callback: (($obj: Connection) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "opened", callback: (($obj: Connection) => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    connect(sigName: "closing", callback: (($obj: Connection) => void)): number
    on(sigName: "closing", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closing", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closing", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closing"): void
    connect(sigName: "canceled", callback: (($obj: Connection, message: string) => void)): number
    on(sigName: "canceled", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "canceled", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "canceled", callback: (message: string) => void): NodeJS.EventEmitter
    emit(sigName: "canceled", message: string): void
    connect(sigName: "timeout", callback: (($obj: Connection) => void)): number
    on(sigName: "timeout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timeout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timeout", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "timeout"): void
    connect(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static $gtype: GObject.Type
}
export abstract class ConnectionClass {
    /* Fields of Vpg-1.Vpg.ConnectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
}