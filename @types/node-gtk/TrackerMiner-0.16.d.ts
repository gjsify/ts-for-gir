/**
 * TrackerMiner-0.16
 */

<<<<<<< HEAD
import "node"
import type { Tracker } from './Tracker-0.16';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace TrackerMiner {
=======
/// <reference types="node" />
import type { Tracker } from './Tracker-0.16';
import type { GLib } from './GLib-2.0';
import type { GObject } from './GObject-2.0';
import type { Gio } from './Gio-2.0';
import type { GModule } from './GModule-2.0';

declare namespace TrackerMiner {
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))

export enum FilterPolicy {
    DENY,
    ACCEPT,
}
export enum FilterType {
    FILE,
    DIRECTORY,
    PARENT_DIRECTORY,
}
export enum MinerManagerError {
    NOT_AVAILABLE,
    NOENT,
}
export enum MinerWebError {
    WRONG_CREDENTIALS,
    TOKEN_EXPIRED,
    NO_CREDENTIALS,
    KEYRING,
    SERVICE,
    TRACKER,
}
export enum DirectoryFlags {
    NONE,
    RECURSE,
    CHECK_MTIME,
    MONITOR,
    IGNORE,
    PRESERVE,
}
export const MAX_TIMEOUT_INTERVAL: number
export const MINER_DBUS_INTERFACE: string
export const MINER_DBUS_NAME_PREFIX: string
export const MINER_DBUS_PATH_PREFIX: string
export const MINER_ERROR_DOMAIN: string
export const MINER_WEB_DBUS_INTERFACE: string
export const MINER_WEB_ERROR_DOMAIN: string
export function accumulatorCheckFile(hint: GObject.SignalInvocationHint, returnAccumulator: any, handlerReturn: any, accumulatorData: object): boolean
export function marshalBOOLEANOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalBOOLEANOBJECTBOXEDBOXEDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalBOOLEANOBJECTOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalBOOLEANOBJECTOBJECTOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalBOOLEANOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDDOUBLEUINTUINTUINTUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDOBJECTBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDOBJECTOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDOBJECTOBJECTBOOLEANBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDOBJECTPOINTERUINTUINTUINTUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDOBJECTUINTUINTUINTUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDSTRINGDOUBLEINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDSTRINGSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDSTRINGSTRINGBOOLEANBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDSTRINGSTRINGDOUBLEINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function marshalVOIDSTRINGSTRINGSTRINGBOOLEANBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
export function mediaArtQueueEmpty(connection: Tracker.SparqlConnection): void
export function mediaArtQueueRemove(uri: string, mimeType: string): boolean
export function thumbnailerCleanup(uriPrefix: string): boolean
export function thumbnailerInit(): boolean
export function thumbnailerMoveAdd(fromUri: string, mimeType: string, toUri: string): boolean
export function thumbnailerRemoveAdd(uri: string, mimeType: string): boolean
export function thumbnailerSend(): void
export function thumbnailerShutdown(): void
export interface Crawler_ConstructProps extends GObject.Object_ConstructProps {
}
export class Crawler {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.Crawler */
    parent: GObject.Object
    priv: CrawlerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.Crawler */
=======
    /* Fields of TrackerMiner.Crawler */
    parent: GObject.Object
    priv: CrawlerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.Crawler */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getFileAttributes(): string
    getFileInfo(file: Gio.File): Gio.FileInfo
    pause(): void
    resume(): void
    setFileAttributes(fileAttributes: string): void
    setThrottle(throttle: number): void
    start(file: Gio.File, recurse: boolean): boolean
    stop(): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.Crawler */
    connect(sigName: "check-directory", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    on(sigName: "check-directory", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-directory", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-directory", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "check-directory", object: Gio.File): void
    connect(sigName: "check-directory-contents", callback: (($obj: Crawler, object: Gio.File, p0: object) => boolean)): number
    on(sigName: "check-directory-contents", callback: (object: Gio.File, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-directory-contents", callback: (object: Gio.File, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-directory-contents", callback: (object: Gio.File, p0: object) => void): NodeJS.EventEmitter
    emit(sigName: "check-directory-contents", object: Gio.File, p0: object): void
    connect(sigName: "check-file", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    on(sigName: "check-file", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-file", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-file", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "check-file", object: Gio.File): void
    connect(sigName: "directory-crawled", callback: (($obj: Crawler, object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void)): number
    on(sigName: "directory-crawled", callback: (object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-crawled", callback: (object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-crawled", callback: (object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void): NodeJS.EventEmitter
    emit(sigName: "directory-crawled", object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number): void
    connect(sigName: "finished", callback: (($obj: Crawler, object: boolean) => void)): number
    on(sigName: "finished", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "finished", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Crawler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of TrackerMiner.Crawler */
    vfuncCheckDirectory(file: Gio.File): boolean
    vfuncCheckFile(file: Gio.File): boolean
    vfuncDirectoryCrawled(directory: Gio.File, tree: GLib.Node, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    vfuncFinished(interrupted: boolean): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.Crawler */
    connect(sigName: "check-directory", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    connect_after(sigName: "check-directory", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    emit(sigName: "check-directory", object: Gio.File): void
    on(sigName: "check-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-directory-contents", callback: (($obj: Crawler, object: Gio.File, p0: object) => boolean)): number
    connect_after(sigName: "check-directory-contents", callback: (($obj: Crawler, object: Gio.File, p0: object) => boolean)): number
    emit(sigName: "check-directory-contents", object: Gio.File, p0: object): void
    on(sigName: "check-directory-contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-directory-contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-directory-contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-file", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    connect_after(sigName: "check-file", callback: (($obj: Crawler, object: Gio.File) => boolean)): number
    emit(sigName: "check-file", object: Gio.File): void
    on(sigName: "check-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "directory-crawled", callback: (($obj: Crawler, object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void)): number
    connect_after(sigName: "directory-crawled", callback: (($obj: Crawler, object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number) => void)): number
    emit(sigName: "directory-crawled", object: Gio.File, p0: object, p1: number, p2: number, p3: number, p4: number): void
    on(sigName: "directory-crawled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "directory-crawled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "directory-crawled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "finished", callback: (($obj: Crawler, object: boolean) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Crawler, object: boolean) => void)): number
    emit(sigName: "finished", object: boolean): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Crawler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Crawler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Crawler_ConstructProps)
    _init (config?: Crawler_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Crawler
    static $gtype: GObject.Type
}
export interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    filterHidden?: boolean
}
export class IndexingTree {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.IndexingTree */
    filterHidden: boolean
    /* Fields of TrackerMiner-0.16.TrackerMiner.IndexingTree */
    parentInstance: GObject.Object
    priv: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.IndexingTree */
=======
    /* Properties of TrackerMiner.IndexingTree */
    filterHidden: boolean
    /* Fields of TrackerMiner.IndexingTree */
    parentInstance: GObject.Object
    priv: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.IndexingTree */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    add(directory: Gio.File, flags: DirectoryFlags): void
    addFilter(filter: FilterType, globString: string): void
    clearFilters(type: FilterType): void
    fileIsIndexable(file: Gio.File, fileType: Gio.FileType): boolean
    fileIsRoot(file: Gio.File): boolean
    fileMatchesFilter(type: FilterType, file: Gio.File): boolean
    getDefaultPolicy(filter: FilterType): FilterPolicy
    getFilterHidden(): boolean
<<<<<<< HEAD
    getRoot(file: Gio.File): { returnType: Gio.File, directoryFlags: DirectoryFlags }
=======
    getRoot(file: Gio.File): [ /* returnType */ Gio.File, /* directoryFlags */ DirectoryFlags ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    listRoots(): Gio.File[]
    parentIsIndexable(parent: Gio.File, children: Gio.File[]): boolean
    remove(directory: Gio.File): void
    setDefaultPolicy(filter: FilterType, policy: FilterPolicy): void
    setFilterHidden(filterHidden: boolean): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.IndexingTree */
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    on(sigName: "directory-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-added", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-added", object: Gio.File): void
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    on(sigName: "directory-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-removed", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-removed", object: Gio.File): void
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    on(sigName: "directory-updated", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-updated", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-updated", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-updated", object: Gio.File): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of TrackerMiner.IndexingTree */
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
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    connect_after(sigName: "directory-added", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    emit(sigName: "directory-added", object: Gio.File): void
    on(sigName: "directory-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "directory-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "directory-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    connect_after(sigName: "directory-removed", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    emit(sigName: "directory-removed", object: Gio.File): void
    on(sigName: "directory-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "directory-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "directory-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    connect_after(sigName: "directory-updated", callback: (($obj: IndexingTree, object: Gio.File) => void)): number
    emit(sigName: "directory-updated", object: Gio.File): void
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    static $gtype: GObject.Type
}
export interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    progress?: number
    remainingTime?: number
    status?: string
}
export class Miner {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-0.16.TrackerMiner.Miner */
    parentInstance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.Miner */
=======
    /* Properties of TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner.Miner */
    parentInstance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.Miner */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-0.16.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
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
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    initialCrawling?: boolean
    mtimeChecking?: boolean
    processingPoolReadyLimit?: number
    processingPoolWaitLimit?: number
    throttle?: number
}
export class MinerFS {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.MinerFS */
=======
    /* Properties of TrackerMiner.MinerFS */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    initialCrawling: boolean
    mtimeChecking: boolean
    processingPoolReadyLimit: number
    processingPoolWaitLimit: number
    throttle: number
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerFS */
    parent: Miner
    priv: MinerFSPrivate
    /* Fields of TrackerMiner-0.16.TrackerMiner.Miner */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.MinerFS */
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    getIndexingTree(): IndexingTree
    getInitialCrawling(): boolean
    getMtimeChecking(): boolean
    getParentUrn(file: Gio.File): string
    getThrottle(): number
    getUrn(file: Gio.File): string
    hasItemsToProcess(): boolean
    queryUrn(file: Gio.File): string
    setInitialCrawling(doInitialCrawling: boolean): void
    setMtimeChecking(mtimeChecking: boolean): void
    setThrottle(throttle: number): void
<<<<<<< HEAD
    writebackFile(file: Gio.File, rdfTypes: string[], results: any[]): void
    writebackNotify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner-0.16.TrackerMiner.Miner */
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    writebackFile(file: Gio.File, rdfTypes: string[], results: any): void
    writebackNotify(file: Gio.File, error: GLib.Error): void
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-0.16.TrackerMiner.MinerFS */
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    on(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void): NodeJS.EventEmitter
    emit(sigName: "finished", elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    connect(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "process-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "writeback-file", file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null): void
    /* Signals of TrackerMiner-0.16.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
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
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerFS */
    vfuncFinished(): void
    vfuncIgnoreNextUpdateFile(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfuncProcessFile(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfuncProcessFileAttributes(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of TrackerMiner.MinerFS */
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    connect_after(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    emit(sigName: "finished", elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdfTypes: string[], results: any, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdfTypes: string[], results: any, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "writeback-file", file: Gio.File, rdfTypes: string[], results: any, cancellable?: Gio.Cancellable | null): void
    on(sigName: "writeback-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "writeback-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "writeback-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    on(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    static $gtype: GObject.Type
}
export interface MinerManager_ConstructProps extends GObject.Object_ConstructProps {
    autoStart?: boolean
}
export class MinerManager {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerManager */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.MinerManager */
=======
    /* Fields of TrackerMiner.MinerManager */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerManager */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getAvailable(): string[]
    getDescription(miner: string): string
    getDisplayName(miner: string): string
    getRunning(): string[]
<<<<<<< HEAD
    getStatus(miner: string): { returnType: boolean, status: string | null, progress: number | null, remainingTime: number | null }
=======
    getStatus(miner: string): [ /* returnType */ boolean, /* status */ string | null, /* progress */ number | null, /* remainingTime */ number | null ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    ignoreNextUpdate(miner: string, urls: string): boolean
    indexFile(file: Gio.File): boolean
    indexFileAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    indexFileFinish(result: Gio.AsyncResult): boolean
    isActive(miner: string): boolean
<<<<<<< HEAD
    isPaused(miner: string): { returnType: boolean, applications: string[] | null, reasons: string[] | null }
    pause(miner: string, reason: string): { returnType: boolean, cookie: number | null }
    pauseForProcess(miner: string, reason: string): { returnType: boolean, cookie: number | null }
    reindexByMimetype(mimetypes: string[]): boolean
    resume(miner: string, cookie: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    isPaused(miner: string): [ /* returnType */ boolean, /* applications */ string[] | null, /* reasons */ string[] | null ]
    pause(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    pauseForProcess(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    reindexByMimetype(mimetypes: string[]): boolean
    resume(miner: string, cookie: number): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-0.16.TrackerMiner.MinerManager */
    connect(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-activated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-activated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-activated", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-activated", miner: string): void
    connect(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-deactivated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-deactivated", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-deactivated", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-deactivated", miner: string): void
    connect(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-paused", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-paused", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-paused", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-paused", miner: string): void
    connect(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "miner-progress", callback: (miner: string, status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-progress", callback: (miner: string, status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-progress", callback: (miner: string, status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "miner-progress", miner: string, status: string, progress: number, remainingTime: number): void
    connect(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    on(sigName: "miner-resumed", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-resumed", callback: (miner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-resumed", callback: (miner: string) => void): NodeJS.EventEmitter
    emit(sigName: "miner-resumed", miner: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerManager */
    vfuncMinerActivated(minerName: string): void
    vfuncMinerDeactivated(minerName: string): void
    vfuncMinerPaused(minerName: string): void
    vfuncMinerProgress(minerName: string, status: string, progress: number): void
    vfuncMinerResumed(minerName: string): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner.MinerManager */
    connect(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-activated", miner: string): void
    on(sigName: "miner-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-deactivated", miner: string): void
    on(sigName: "miner-deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-deactivated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-paused", miner: string): void
    on(sigName: "miner-paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "miner-progress", miner: string, status: string, progress: number, remainingTime: number): void
    on(sigName: "miner-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-resumed", miner: string): void
    on(sigName: "miner-resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "miner-resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "miner-resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MinerManager_ConstructProps)
    _init (config?: MinerManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MinerManager
    static newFull(autoStart: boolean): MinerManager
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface MinerWeb_ConstructProps extends Miner_ConstructProps {
    associated?: boolean
}
export class MinerWeb {
<<<<<<< HEAD
    /* Properties of TrackerMiner-0.16.TrackerMiner.MinerWeb */
    associated: boolean
    /* Properties of TrackerMiner-0.16.TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerWeb */
    parentInstance: Miner
    priv: MinerWebPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-0.16.TrackerMiner.MinerWeb */
=======
    /* Properties of TrackerMiner.MinerWeb */
    associated: boolean
    /* Properties of TrackerMiner.Miner */
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner.MinerWeb */
    parentInstance: Miner
    priv: MinerWebPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner.MinerWeb */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    associate(associationData: GLib.HashTable): void
    authenticate(): void
    dissociate(): void
    getAssociationData(): GLib.HashTable
<<<<<<< HEAD
    /* Methods of TrackerMiner-0.16.TrackerMiner.Miner */
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of TrackerMiner-0.16.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerWeb, urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (($obj: MinerWeb) => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerWeb, status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (($obj: MinerWeb) => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerWeb) => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerWeb) => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner.MinerWeb */
    vfuncAssociate(associationData: GLib.HashTable): void
    vfuncAuthenticate(): void
    vfuncDissociate(): void
    vfuncGetAssociationData(): GLib.HashTable
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
    connect(sigName: "ignore-next-update", callback: (($obj: MinerWeb, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerWeb, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    on(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paused", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "paused"): void
    on(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: MinerWeb, status: string, progress: number, remainingTime: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerWeb, status: string, progress: number, remainingTime: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resumed", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "resumed"): void
    on(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resumed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "started", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "started"): void
    on(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stopped", callback: (($obj: MinerWeb) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerWeb) => void)): number
    emit(sigName: "stopped"): void
    on(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::associated", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::associated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::associated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::associated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerWeb, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MinerWeb_ConstructProps)
    _init (config?: MinerWeb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export abstract class CrawlerClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.CrawlerClass */
=======
    /* Fields of TrackerMiner.CrawlerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent: GObject.ObjectClass
    checkDirectory: (crawler: Crawler, file: Gio.File) => boolean
    checkFile: (crawler: Crawler, file: Gio.File) => boolean
    directoryCrawled: (crawler: Crawler, directory: Gio.File, tree: GLib.Node, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    finished: (crawler: Crawler, interrupted: boolean) => void
    static name: string
}
export class CrawlerPrivate {
    static name: string
}
export abstract class IndexingTreeClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.IndexingTreeClass */
=======
    /* Fields of TrackerMiner.IndexingTreeClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    directoryAdded: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryRemoved: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryUpdated: (indexingTree: IndexingTree, directory: Gio.File) => void
    static name: string
}
export abstract class MinerClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerClass */
=======
    /* Fields of TrackerMiner.MinerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number) => void
    ignoreNextUpdate: (miner: Miner, urls: string[]) => void
    static name: string
}
export abstract class MinerFSClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerFSClass */
=======
    /* Fields of TrackerMiner.MinerFSClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parent: MinerClass
    processFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    ignoreNextUpdateFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finished: (fs: MinerFS) => void
    processFileAttributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export class MinerFSPrivate {
    static name: string
}
export abstract class MinerManagerClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerManagerClass */
=======
    /* Fields of TrackerMiner.MinerManagerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    minerProgress: (manager: MinerManager, minerName: string, status: string, progress: number) => void
    minerPaused: (manager: MinerManager, minerName: string) => void
    minerResumed: (manager: MinerManager, minerName: string) => void
    minerActivated: (manager: MinerManager, minerName: string) => void
    minerDeactivated: (manager: MinerManager, minerName: string) => void
    static name: string
}
export class MinerPrivate {
    static name: string
}
export abstract class MinerWebClass {
<<<<<<< HEAD
    /* Fields of TrackerMiner-0.16.TrackerMiner.MinerWebClass */
=======
    /* Fields of TrackerMiner.MinerWebClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: MinerClass
    authenticate: (miner: MinerWeb) => void
    getAssociationData: (miner: MinerWeb) => GLib.HashTable
    associate: (miner: MinerWeb, associationData: GLib.HashTable) => void
    dissociate: (miner: MinerWeb) => void
    static name: string
}
export class MinerWebPrivate {
    static name: string
}
}