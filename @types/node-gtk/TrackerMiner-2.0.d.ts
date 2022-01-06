/**
 * TrackerMiner-2.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace TrackerMiner {

enum DecoratorError {
    EMPTY,
    PAUSED,
}
enum FilterPolicy {
    DENY,
    ACCEPT,
}
enum FilterType {
    FILE,
    DIRECTORY,
    PARENT_DIRECTORY,
}
enum MinerError {
    NAME_MISSING,
    NAME_UNAVAILABLE,
    PAUSED,
    PAUSED_ALREADY,
    INVALID_COOKIE,
}
enum MinerFSError {
    MINER_FS_ERROR_INIT,
}
enum MinerFSEventType {
    CREATED,
    UPDATED,
    DELETED,
    MOVED,
}
enum NetworkType {
    NONE,
    UNKNOWN,
    GPRS,
    EDGE,
    /* 3G (invalid, starts with a number) */
    LAN,
}
enum DirectoryFlags {
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
class DataProvider {
    /* Methods of TrackerMiner-2.0.TrackerMiner.DataProvider */
    begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    beginAsync(url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    beginFinish(result: Gio.AsyncResult): Gio.FileEnumerator
    static name: string
}
export interface Decorator_ConstructProps extends Miner_ConstructProps {
    classNames?: string[]
    commitBatchSize?: number
    dataSource?: string
    priorityRdfTypes?: string[]
}
class Decorator {
    /* Properties of TrackerMiner-2.0.TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner-2.0.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-2.0.TrackerMiner.Decorator */
    parentInstance: Miner
    priv: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-2.0.TrackerMiner.Decorator */
    deleteId(id: number): void
    getClassNames(): string[]
    getDataSource(): string
    getNItems(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    prependId(id: number, classNameId: number): void
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner-2.0.TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-2.0.TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: Decorator) => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    on(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-available", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-2.0.TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: Decorator) => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: Decorator) => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
class DecoratorFS {
    /* Properties of TrackerMiner-2.0.TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner-2.0.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-2.0.TrackerMiner.DecoratorFS */
    parentInstance: Decorator
    priv: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-2.0.TrackerMiner.DecoratorFS */
    prependFile(file: Gio.File): number
    /* Methods of TrackerMiner-2.0.TrackerMiner.Decorator */
    deleteId(id: number): void
    getClassNames(): string[]
    getDataSource(): string
    getNItems(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    prependId(id: number, classNameId: number): void
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner-2.0.TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-2.0.TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    on(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-available", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-2.0.TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
class IndexingTree {
    /* Properties of TrackerMiner-2.0.TrackerMiner.IndexingTree */
    filterHidden: boolean
    /* Fields of TrackerMiner-2.0.TrackerMiner.IndexingTree */
    parentInstance: GObject.Object
    priv: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-2.0.TrackerMiner.IndexingTree */
    add(directory: Gio.File, flags: DirectoryFlags): void
    addFilter(filter: FilterType, globString: string): void
    clearFilters(type: FilterType): void
    fileIsIndexable(file: Gio.File, fileType: Gio.FileType): boolean
    fileIsRoot(file: Gio.File): boolean
    fileMatchesFilter(type: FilterType, file: Gio.File): boolean
    getDefaultPolicy(filter: FilterType): FilterPolicy
    getFilterHidden(): boolean
    getMasterRoot(): Gio.File
    getRoot(file: Gio.File): { returnType: Gio.File, directoryFlags: DirectoryFlags }
    listRoots(): Gio.File[]
    notifyUpdate(file: Gio.File, recursive: boolean): boolean
    parentIsIndexable(parent: Gio.File, children: Gio.File[]): boolean
    remove(directory: Gio.File): void
    setDefaultPolicy(filter: FilterType, policy: FilterPolicy): void
    setFilterHidden(filterHidden: boolean): void
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
    /* Signals of TrackerMiner-2.0.TrackerMiner.IndexingTree */
    connect(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    on(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File): void
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    on(sigName: "directory-added", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-added", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-added", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-added", directory: Gio.File): void
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    on(sigName: "directory-removed", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-removed", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-removed", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-removed", directory: Gio.File): void
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    on(sigName: "directory-updated", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-updated", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-updated", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-updated", directory: Gio.File): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    progress?: number
    remainingTime?: number
    status?: string
}
class Miner {
    /* Properties of TrackerMiner-2.0.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-2.0.TrackerMiner.Miner */
    parentInstance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-2.0.TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-2.0.TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: Miner) => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (($obj: Miner) => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: Miner) => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Miner) => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    processingPoolReadyLimit?: number
    processingPoolWaitLimit?: number
    root?: Gio.File
    throttle?: number
}
class MinerFS {
    /* Properties of TrackerMiner-2.0.TrackerMiner.MinerFS */
    processingPoolReadyLimit: number
    processingPoolWaitLimit: number
    throttle: number
    /* Properties of TrackerMiner-2.0.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-2.0.TrackerMiner.MinerFS */
    parent: Miner
    priv: MinerFSPrivate
    /* Fields of TrackerMiner-2.0.TrackerMiner.Miner */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-2.0.TrackerMiner.MinerFS */
    checkFile(file: Gio.File, priority: number, checkParents: boolean): void
    getDataProvider(): DataProvider
    getIndexingTree(): IndexingTree
    getThrottle(): number
    getUrn(file: Gio.File): string | null
    hasItemsToProcess(): boolean
    notifyFinish(task: Gio.Task, sparql: string | null, error: GLib.Error): void
    queryUrn(file: Gio.File): string
    setThrottle(throttle: number): void
    /* Methods of TrackerMiner-2.0.TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-2.0.TrackerMiner.MinerFS */
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    on(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void): NodeJS.EventEmitter
    emit(sigName: "finished", elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    connect(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    on(sigName: "finished-root", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished-root", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished-root", callback: (file: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "finished-root", file: Gio.File): void
    connect(sigName: "move-file", callback: (($obj: MinerFS, object: Gio.File, p0: Gio.File, p1: boolean) => string)): number
    on(sigName: "move-file", callback: (object: Gio.File, p0: Gio.File, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-file", callback: (object: Gio.File, p0: Gio.File, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-file", callback: (object: Gio.File, p0: Gio.File, p1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "move-file", object: Gio.File, p0: Gio.File, p1: boolean): void
    connect(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Gio.Task) => boolean)): number
    on(sigName: "process-file", callback: (file: Gio.File, builder: Gio.Task) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file", callback: (file: Gio.File, builder: Gio.Task) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file", callback: (file: Gio.File, builder: Gio.Task) => void): NodeJS.EventEmitter
    emit(sigName: "process-file", file: Gio.File, builder: Gio.Task): void
    connect(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Gio.Task) => boolean)): number
    on(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Gio.Task) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Gio.Task) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Gio.Task) => void): NodeJS.EventEmitter
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Gio.Task): void
    connect(sigName: "remove-children", callback: (($obj: MinerFS, object: Gio.File) => string)): number
    on(sigName: "remove-children", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove-children", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove-children", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "remove-children", object: Gio.File): void
    connect(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File) => string)): number
    on(sigName: "remove-file", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove-file", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove-file", callback: (file: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "remove-file", file: Gio.File): void
    /* Signals of TrackerMiner-2.0.TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerFS) => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
class MinerOnline {
    /* Properties of TrackerMiner-2.0.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-2.0.TrackerMiner.MinerOnline */
    parentInstance: Miner
    /* Fields of TrackerMiner-2.0.TrackerMiner.Miner */
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-2.0.TrackerMiner.MinerOnline */
    getNetworkType(): NetworkType
    /* Methods of TrackerMiner-2.0.TrackerMiner.Miner */
    isPaused(): boolean
    isStarted(): boolean
    pause(): void
    resume(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-2.0.TrackerMiner.MinerOnline */
    connect(sigName: "connected", callback: (($obj: MinerOnline, type: any) => boolean)): number
    on(sigName: "connected", callback: (type: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: (type: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: (type: any) => void): NodeJS.EventEmitter
    emit(sigName: "connected", type: any): void
    connect(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    /* Signals of TrackerMiner-2.0.TrackerMiner.Miner */
    connect(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
export interface MinerProxy_ConstructProps extends GObject.Object_ConstructProps {
    dbusConnection?: Gio.DBusConnection
    dbusPath?: string
    miner?: Miner
}
class MinerProxy {
    /* Fields of TrackerMiner-2.0.TrackerMiner.MinerProxy */
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerProxy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MinerProxy_ConstructProps)
    _init (config?: MinerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(miner: Miner, connection: Gio.DBusConnection, dbusPath: string, cancellable?: Gio.Cancellable | null): MinerProxy
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class DataProviderIface {
    /* Fields of TrackerMiner-2.0.TrackerMiner.DataProviderIface */
    gIface: GObject.TypeInterface
    begin: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null) => Gio.FileEnumerator
    beginAsync: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    beginFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => Gio.FileEnumerator
    static name: string
}
abstract class DecoratorClass {
    /* Fields of TrackerMiner-2.0.TrackerMiner.DecoratorClass */
    parentClass: MinerClass
    itemsAvailable: (decorator: Decorator) => void
    finished: (decorator: Decorator) => void
    padding: object[]
    static name: string
}
abstract class DecoratorFSClass {
    /* Fields of TrackerMiner-2.0.TrackerMiner.DecoratorFSClass */
    parentClass: DecoratorClass
    padding: object[]
    static name: string
}
class DecoratorInfo {
    /* Methods of TrackerMiner-2.0.TrackerMiner.DecoratorInfo */
    complete(sparql: string): void
    completeError(error: GLib.Error): void
    getMimetype(): string
    getTask(): Gio.Task
    getUrl(): string
    getUrn(): string
    ref(): DecoratorInfo
    unref(): void
    static name: string
}
abstract class IndexingTreeClass {
    /* Fields of TrackerMiner-2.0.TrackerMiner.IndexingTreeClass */
    parentClass: GObject.ObjectClass
    directoryAdded: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryRemoved: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryUpdated: (indexingTree: IndexingTree, directory: Gio.File) => void
    childUpdated: (indexingTree: IndexingTree, root: Gio.File, child: Gio.File) => void
    padding: object[]
    static name: string
}
abstract class MinerClass {
    /* Fields of TrackerMiner-2.0.TrackerMiner.MinerClass */
    parentClass: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number, remainingTime: number) => void
    padding: object[]
    static name: string
}
abstract class MinerFSClass {
    /* Fields of TrackerMiner-2.0.TrackerMiner.MinerFSClass */
    parent: MinerClass
    processFile: (fs: MinerFS, file: Gio.File, task: Gio.Task) => boolean
    finished: (fs: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    processFileAttributes: (fs: MinerFS, file: Gio.File, task: Gio.Task) => boolean
    finishedRoot: (fs: MinerFS, root: Gio.File, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    removeFile: (fs: MinerFS, file: Gio.File) => string
    removeChildren: (fs: MinerFS, file: Gio.File) => string
    moveFile: (fs: MinerFS, dest: Gio.File, source: Gio.File, recursive: boolean) => string
    filterEvent: (fs: MinerFS, type: MinerFSEventType, file: Gio.File, sourceFile: Gio.File) => boolean
    padding: object[]
    static name: string
}
class MinerFSPrivate {
    static name: string
}
abstract class MinerOnlineClass {
    /* Fields of TrackerMiner-2.0.TrackerMiner.MinerOnlineClass */
    parentClass: MinerClass
    connected: (miner: MinerOnline, network: NetworkType) => boolean
    disconnected: (miner: MinerOnline) => void
    padding: object[]
    static name: string
}
class MinerPrivate {
    static name: string
}
abstract class MinerProxyClass {
    /* Fields of TrackerMiner-2.0.TrackerMiner.MinerProxyClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default TrackerMiner