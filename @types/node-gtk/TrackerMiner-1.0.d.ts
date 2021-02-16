/**
 * TrackerMiner-1.0
 */

/// <reference types="node" />
/// <reference path="Tracker-1.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace TrackerMiner {

export enum DecoratorError {
    EMPTY,
    PAUSED,
}
export enum FilterPolicy {
    DENY,
    ACCEPT,
}
export enum FilterType {
    FILE,
    DIRECTORY,
    PARENT_DIRECTORY,
}
export enum MinerError {
    NAME_MISSING,
    NAME_UNAVAILABLE,
    PAUSED,
    PAUSED_ALREADY,
    INVALID_COOKIE,
}
export enum MinerFSError {
    MINER_FS_ERROR_INIT,
}
export enum NetworkType {
    NONE,
    UNKNOWN,
    GPRS,
    EDGE,
    /* 3G (invalid, starts with a number) */
    LAN,
}
export enum DirectoryFlags {
    NONE,
    RECURSE,
    CHECK_MTIME,
    MONITOR,
    IGNORE,
    PRESERVE,
    PRIORITY,
    NO_STAT,
    CHECK_DELETED,
}
export const MINER_DBUS_INTERFACE: string
export const MINER_DBUS_NAME_PREFIX: string
export const MINER_DBUS_PATH_PREFIX: string
export const MINER_ERROR_DOMAIN: string
export class DataProvider {
    /* Methods of TrackerMiner.DataProvider */
    begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Enumerator
    beginAsync(url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    beginFinish(result: Gio.AsyncResult): Enumerator
    end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean
    endAsync(enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    endFinish(result: Gio.AsyncResult): boolean
    /* Virtual methods of TrackerMiner.DataProvider */
    vfuncBegin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Enumerator
    vfuncBeginAsync(url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncBeginFinish(result: Gio.AsyncResult): Enumerator
    vfuncEnd(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean
    vfuncEndAsync(enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncEndFinish(result: Gio.AsyncResult): boolean
    static name: string
}
export class Enumerator {
    /* Methods of TrackerMiner.Enumerator */
    next(cancellable?: Gio.Cancellable | null): object | null
    nextAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): object | null
    /* Virtual methods of TrackerMiner.Enumerator */
    vfuncNext(cancellable?: Gio.Cancellable | null): object | null
    vfuncNextAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncNextFinish(result: Gio.AsyncResult): object | null
    static name: string
}
export interface Decorator_ConstructProps extends Miner_ConstructProps {
    classNames?: string[]
    commitBatchSize?: number
    dataSource?: string
    priorityRdfTypes?: string[]
}
export class Decorator {
    /* Properties of TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner.Decorator */
    parentInstance: Miner
    priv: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.Decorator */
    deleteId(id: number): void
    getClassNames(): string[]
    getDataSource(): string
    getNItems(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    prependId(id: number, classNameId: number): void
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.Decorator */
    vfuncFinished(): void
    vfuncItemsAvailable(): void
    /* Virtual methods of TrackerMiner.Miner */
    vfuncPaused(): void
    vfuncProgress(status: string, progress: number, remainingTime: number): void
    vfuncResumed(): void
    vfuncStarted(): void
    vfuncStopped(): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Decorator) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    emit(sigName: "items-available"): void
    on(sigName: "items-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Decorator) => void)): number
    emit(sigName: "paused"): void
    on(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    emit(sigName: "resumed"): void
    on(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "started", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "started", callback: (($obj: Decorator) => void)): number
    emit(sigName: "started"): void
    on(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decorator_ConstructProps)
    _init (config?: Decorator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DecoratorFS_ConstructProps extends Decorator_ConstructProps {
}
export class DecoratorFS {
    /* Properties of TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner.DecoratorFS */
    parentInstance: Decorator
    priv: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.DecoratorFS */
    prependFile(file: Gio.File): number
    /* Methods of TrackerMiner.Decorator */
    deleteId(id: number): void
    getClassNames(): string[]
    getDataSource(): string
    getNItems(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    prependId(id: number, classNameId: number): void
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.Decorator */
    vfuncFinished(): void
    vfuncItemsAvailable(): void
    /* Virtual methods of TrackerMiner.Miner */
    vfuncPaused(): void
    vfuncProgress(status: string, progress: number, remainingTime: number): void
    vfuncResumed(): void
    vfuncStarted(): void
    vfuncStopped(): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "items-available"): void
    on(sigName: "items-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "paused"): void
    on(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "resumed"): void
    on(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "started"): void
    on(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DecoratorFS_ConstructProps)
    _init (config?: DecoratorFS_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    filterHidden?: boolean
    root?: Gio.File
}
export class IndexingTree {
    /* Properties of TrackerMiner.IndexingTree */
    filterHidden: boolean
    /* Fields of TrackerMiner.IndexingTree */
    parentInstance: GObject.Object
    priv: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.IndexingTree */
    add(directory: Gio.File, flags: DirectoryFlags): void
    addFilter(filter: FilterType, globString: string): void
    clearFilters(type: FilterType): void
    fileIsIndexable(file: Gio.File, fileType: Gio.FileType): boolean
    fileIsRoot(file: Gio.File): boolean
    fileMatchesFilter(type: FilterType, file: Gio.File): boolean
    getDefaultPolicy(filter: FilterType): FilterPolicy
    getFilterHidden(): boolean
    getMasterRoot(): Gio.File
    getRoot(file: Gio.File): [ /* returnType */ Gio.File, /* directoryFlags */ DirectoryFlags ]
    listRoots(): Gio.File[]
    notifyUpdate(file: Gio.File, recursive: boolean): boolean
    parentIsIndexable(parent: Gio.File, children: Gio.File[]): boolean
    remove(directory: Gio.File): void
    setDefaultPolicy(filter: FilterType, policy: FilterPolicy): void
    setFilterHidden(filterHidden: boolean): void
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
    /* Virtual methods of TrackerMiner.IndexingTree */
    vfuncChildUpdated(root: Gio.File, child: Gio.File): void
    vfuncDirectoryAdded(directory: Gio.File): void
    vfuncDirectoryRemoved(directory: Gio.File): void
    vfuncDirectoryUpdated(directory: Gio.File): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.IndexingTree */
    connect(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    connect_after(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File): void
    on(sigName: "child-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-added", directory: Gio.File): void
    on(sigName: "directory-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "directory-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "directory-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-removed", directory: Gio.File): void
    on(sigName: "directory-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "directory-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "directory-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-updated", directory: Gio.File): void
    on(sigName: "directory-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "directory-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "directory-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IndexingTree_ConstructProps)
    _init (config?: IndexingTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndexingTree
    static newWithRoot(root: Gio.File): IndexingTree
    static $gtype: GObject.Type
}
export interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    introspectionHandler?: object
    introspectionXml?: string
    name?: string
    progress?: number
    remainingTime?: number
    status?: string
}
export class Miner {
    /* Properties of TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner.Miner */
    parentInstance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.Miner */
    getConnection(): Tracker.SparqlConnection
    getDbusConnection(): Gio.DBusConnection
    getDbusFullName(): string
    getDbusFullPath(): string
    getNPauseReasons(): number
    ignoreNextUpdate(urls: string[]): void
    isPaused(): boolean
    isStarted(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.Miner */
    vfuncIgnoreNextUpdate(urls: string[]): void
    vfuncPaused(): void
    vfuncProgress(status: string, progress: number): void
    vfuncResumed(): void
    vfuncStarted(): void
    vfuncStopped(): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    on(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paused", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Miner) => void)): number
    emit(sigName: "paused"): void
    on(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resumed", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Miner) => void)): number
    emit(sigName: "resumed"): void
    on(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "started", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "started", callback: (($obj: Miner) => void)): number
    emit(sigName: "started"): void
    on(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stopped", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Miner) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Miner_ConstructProps)
    _init (config?: Miner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface MinerFS_ConstructProps extends Miner_ConstructProps {
    dataProvider?: DataProvider
    initialCrawling?: boolean
    mtimeChecking?: boolean
    processingPoolReadyLimit?: number
    processingPoolWaitLimit?: number
    root?: Gio.File
    throttle?: number
}
export class MinerFS {
    /* Properties of TrackerMiner.MinerFS */
    initialCrawling: boolean
    mtimeChecking: boolean
    processingPoolReadyLimit: number
    processingPoolWaitLimit: number
    throttle: number
    /* Properties of TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner.MinerFS */
    parent: Miner
    priv: MinerFSPrivate
    /* Fields of TrackerMiner.Miner */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerFS */
    addDirectoryWithoutParent(file: Gio.File): void
    checkDirectory(file: Gio.File, checkParents: boolean): void
    checkDirectoryWithPriority(file: Gio.File, priority: number, checkParents: boolean): void
    checkFile(file: Gio.File, checkParents: boolean): void
    checkFileWithPriority(file: Gio.File, priority: number, checkParents: boolean): void
    directoryAdd(file: Gio.File, recurse: boolean): void
    directoryRemove(file: Gio.File): boolean
    directoryRemoveFull(file: Gio.File): boolean
    fileNotify(file: Gio.File, error: GLib.Error): void
    forceMtimeChecking(directory: Gio.File): void
    forceRecheck(): void
    getDataProvider(): DataProvider
    getIndexingTree(): IndexingTree
    getInitialCrawling(): boolean
    getMtimeChecking(): boolean
    getParentUrn(file: Gio.File): string | null
    getThrottle(): number
    getUrn(file: Gio.File): string | null
    hasItemsToProcess(): boolean
    queryUrn(file: Gio.File): string
    setInitialCrawling(doInitialCrawling: boolean): void
    setMtimeChecking(mtimeChecking: boolean): void
    setThrottle(throttle: number): void
    writebackFile(file: Gio.File, rdfTypes: string[], results: any): void
    writebackNotify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerFS */
    vfuncFinished(elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    vfuncFinishedRoot(root: Gio.File, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    vfuncIgnoreNextUpdateFile(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfuncProcessFile(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfuncProcessFileAttributes(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfuncRemoveFile(file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder): boolean
    /* Virtual methods of TrackerMiner.Miner */
    vfuncPaused(): void
    vfuncProgress(status: string, progress: number, remainingTime: number): void
    vfuncResumed(): void
    vfuncStarted(): void
    vfuncStopped(): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.MinerFS */
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    connect_after(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    emit(sigName: "finished", elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    connect_after(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    emit(sigName: "finished-root", file: Gio.File): void
    on(sigName: "finished-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "ignore-next-update-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    on(sigName: "ignore-next-update-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ignore-next-update-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ignore-next-update-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    on(sigName: "process-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "process-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "process-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    on(sigName: "process-file-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "process-file-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "process-file-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    connect_after(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    emit(sigName: "remove-file", file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder): void
    on(sigName: "remove-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdfTypes: string[], results: any, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdfTypes: string[], results: any, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "writeback-file", file: Gio.File, rdfTypes: string[], results: any, cancellable?: Gio.Cancellable | null): void
    on(sigName: "writeback-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "writeback-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "writeback-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "paused"): void
    on(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "resumed"): void
    on(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "started", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "started"): void
    on(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MinerFS_ConstructProps)
    _init (config?: MinerFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface MinerOnline_ConstructProps extends Miner_ConstructProps {
}
export class MinerOnline {
    /* Properties of TrackerMiner.MinerOnline */
    readonly networkType: NetworkType
    /* Properties of TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner.MinerOnline */
    parentInstance: Miner
    /* Fields of TrackerMiner.Miner */
    priv: MinerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerOnline */
    getNetworkType(): NetworkType
    /* Methods of TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerOnline */
    vfuncConnected(network: NetworkType): boolean
    vfuncDisconnected(): void
    /* Virtual methods of TrackerMiner.Miner */
    vfuncPaused(): void
    vfuncProgress(status: string, progress: number, remainingTime: number): void
    vfuncResumed(): void
    vfuncStarted(): void
    vfuncStopped(): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.MinerOnline */
    connect(sigName: "connected", callback: (($obj: MinerOnline, type: NetworkType) => boolean)): number
    connect_after(sigName: "connected", callback: (($obj: MinerOnline, type: NetworkType) => boolean)): number
    emit(sigName: "connected", type: NetworkType): void
    on(sigName: "connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "disconnected"): void
    on(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "paused"): void
    on(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "resumed"): void
    on(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "started"): void
    on(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MinerOnline_ConstructProps)
    _init (config?: MinerOnline_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DataProviderIface {
    /* Fields of TrackerMiner.DataProviderIface */
    gIface: GObject.TypeInterface
    begin: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null) => Enumerator
    beginAsync: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    beginFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => Enumerator
    end: (dataProvider: DataProvider, enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => boolean
    endAsync: (dataProvider: DataProvider, enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    endFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => boolean
    static name: string
}
export abstract class DecoratorClass {
    /* Fields of TrackerMiner.DecoratorClass */
    parentClass: MinerClass
    itemsAvailable: (decorator: Decorator) => void
    finished: (decorator: Decorator) => void
    padding: object[]
    static name: string
}
export abstract class DecoratorFSClass {
    /* Fields of TrackerMiner.DecoratorFSClass */
    parentClass: DecoratorClass
    padding: object[]
    static name: string
}
export class DecoratorInfo {
    /* Methods of TrackerMiner.DecoratorInfo */
    getMimetype(): string
    getSparql(): Tracker.SparqlBuilder
    getTask(): Gio.Task
    getUrl(): string
    getUrn(): string
    ref(): DecoratorInfo
    unref(): void
    static name: string
}
export abstract class EnumeratorIface {
    /* Fields of TrackerMiner.EnumeratorIface */
    gIface: GObject.TypeInterface
    next: (enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => object | null
    nextAsync: (enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    nextFinish: (enumerator: Enumerator, result: Gio.AsyncResult) => object | null
    static name: string
}
export abstract class IndexingTreeClass {
    /* Fields of TrackerMiner.IndexingTreeClass */
    parentClass: GObject.ObjectClass
    directoryAdded: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryRemoved: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryUpdated: (indexingTree: IndexingTree, directory: Gio.File) => void
    childUpdated: (indexingTree: IndexingTree, root: Gio.File, child: Gio.File) => void
    padding: object[]
    static name: string
}
export abstract class MinerClass {
    /* Fields of TrackerMiner.MinerClass */
    parentClass: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number) => void
    ignoreNextUpdate: (miner: Miner, urls: string[]) => void
    padding: object[]
    static name: string
}
export abstract class MinerFSClass {
    /* Fields of TrackerMiner.MinerFSClass */
    parent: MinerClass
    processFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    ignoreNextUpdateFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finished: (fs: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    processFileAttributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finishedRoot: (fs: MinerFS, root: Gio.File, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    removeFile: (fs: MinerFS, file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean
    padding: object[]
    static name: string
}
export class MinerFSPrivate {
    static name: string
}
export abstract class MinerOnlineClass {
    /* Fields of TrackerMiner.MinerOnlineClass */
    parentClass: MinerClass
    connected: (miner: MinerOnline, network: NetworkType) => boolean
    disconnected: (miner: MinerOnline) => void
    padding: object[]
    static name: string
}
export class MinerPrivate {
    static name: string
}
}