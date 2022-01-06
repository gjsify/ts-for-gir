/**
 * RygelServer-2.6
 */

import "node"
import type { RygelCore } from './RygelCore-2.6';
import type { GLib } from './GLib-2.0';
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GUPnP } from './GUPnP-1.2';
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { GSSDP } from './GSSDP-1.2';
import type { GUPnPAV } from './GUPnPAV-1.0';

export declare namespace RygelServer {

export enum LogicalOperator {
    AND,
    OR,
}
export enum ObjectEventType {
    ADDED,
    MODIFIED,
    DELETED,
}
export enum SerializerType {
    GENERIC_DIDL,
    DIDL_S,
    M3UEXT,
}
export enum WritableContainerError {
    NOT_IMPLEMENTED,
}
export enum MediaEngineError {
    NOT_FOUND,
}
export enum HTTPSeekRequestError {
    INVALID_RANGE,
    BAD_REQUEST,
    OUT_OF_RANGE,
}
export enum DataSourceError {
    GENERAL,
    SEEK_FAILED,
    PLAYSPEED_FAILED,
}
export enum HTTPRequestError {
    UNACCEPTABLE,
    BAD_REQUEST,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
}
export enum PlaySpeedError {
    INVALID_SPEED_FORMAT,
    SPEED_NOT_PRESENT,
}
export interface SearchableContainer_ConstructProps extends MediaContainer_ConstructProps {
    searchClasses?: Gee.ArrayList
}
export class SearchableContainer {
    /* Properties of RygelServer-2.6.RygelServer.SearchableContainer */
    searchClasses: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    simpleSearch(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    simpleSearchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    findObject(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    getSearchClasses(): Gee.ArrayList
    setSearchClasses(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
    getChildren(offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    updated(object: MediaObject | null, eventType: ObjectEventType, subTreeUpdate: boolean): void
    getChildCount(): number
    setChildCount(value: number): void
    getEmptyChildCount(): number
    setEmptyChildCount(value: number): void
    getAllChildCount(): number
    getCreateModeEnabled(): boolean
    setCreateModeEnabled(value: boolean): void
    getSortCriteria(): string
    setSortCriteria(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: SearchableContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: SearchableContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub-tree-updates-finished", subTreeRoot: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-classes", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-classes", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-criteria", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SearchableContainer_ConstructProps)
    _init (config?: SearchableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TrackableContainer_ConstructProps extends MediaContainer_ConstructProps {
}
export class TrackableContainer {
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.TrackableContainer */
    clear(callback?: Gio.AsyncReadyCallback | null): void
    clearFinish(res: Gio.AsyncResult): void
    addChild(object: MediaObject, callback?: Gio.AsyncReadyCallback | null): void
    addChildFinish(res: Gio.AsyncResult): void
    addChildTracked(object: MediaObject, callback?: Gio.AsyncReadyCallback | null): void
    addChildTrackedFinish(res: Gio.AsyncResult): void
    removeChild(object: MediaObject, callback?: Gio.AsyncReadyCallback | null): void
    removeChildFinish(res: Gio.AsyncResult): void
    removeChildTracked(object: MediaObject, callback?: Gio.AsyncReadyCallback | null): void
    removeChildTrackedFinish(res: Gio.AsyncResult): void
    getServiceResetToken(): string
    setServiceResetToken(token: string): void
    getSystemUpdateId(): number
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
    getChildren(offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    findObject(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, eventType: ObjectEventType, subTreeUpdate: boolean): void
    getChildCount(): number
    setChildCount(value: number): void
    getEmptyChildCount(): number
    setEmptyChildCount(value: number): void
    getAllChildCount(): number
    getCreateModeEnabled(): boolean
    setCreateModeEnabled(value: boolean): void
    getSortCriteria(): string
    setSortCriteria(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    /* Signals of RygelServer-2.6.RygelServer.TrackableContainer */
    connect(sigName: "child-added", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    on(sigName: "child-added", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: MediaObject): void
    connect(sigName: "child-removed", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    on(sigName: "child-removed", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: MediaObject): void
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: TrackableContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: TrackableContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub-tree-updates-finished", subTreeRoot: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-criteria", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackableContainer_ConstructProps)
    _init (config?: TrackableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TrackableItem_ConstructProps extends MediaItem_ConstructProps {
}
export class TrackableItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.TrackableItem */
    changed(): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackableItem_ConstructProps)
    _init (config?: TrackableItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VisualItem_ConstructProps extends MediaFileItem_ConstructProps {
    width?: number
    height?: number
    colorDepth?: number
    thumbnails?: Gee.ArrayList
}
export class VisualItem {
    /* Properties of RygelServer-2.6.RygelServer.VisualItem */
    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.VisualItem */
    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getThumbnails(): Gee.ArrayList
    setThumbnails(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::width", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnails", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VisualItem_ConstructProps)
    _init (config?: VisualItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WritableContainer_ConstructProps extends MediaContainer_ConstructProps {
    createClasses?: Gee.ArrayList
}
export class WritableContainer {
    /* Properties of RygelServer-2.6.RygelServer.WritableContainer */
    createClasses: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.WritableContainer */
    canCreate(upnpClass: string): boolean
    addItem(item: MediaFileItem, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addItemFinish(res: Gio.AsyncResult): void
    addContainer(container: MediaContainer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addContainerFinish(res: Gio.AsyncResult): void
    addReference(object: MediaObject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addReferenceFinish(res: Gio.AsyncResult): string
    removeItem(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeItemFinish(res: Gio.AsyncResult): void
    removeContainer(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContainerFinish(res: Gio.AsyncResult): void
    getCreateClasses(): Gee.ArrayList
    setCreateClasses(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
    getChildren(offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    findObject(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, eventType: ObjectEventType, subTreeUpdate: boolean): void
    getChildCount(): number
    setChildCount(value: number): void
    getEmptyChildCount(): number
    setEmptyChildCount(value: number): void
    getAllChildCount(): number
    getCreateModeEnabled(): boolean
    setCreateModeEnabled(value: boolean): void
    getSortCriteria(): string
    setSortCriteria(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: WritableContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: WritableContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub-tree-updates-finished", subTreeRoot: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::create-classes", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-classes", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-criteria", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WritableContainer_ConstructProps)
    _init (config?: WritableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataSource_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataSource {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.DataSource */
    preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null
    start(): void
    freeze(): void
    thaw(): void
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
    /* Signals of RygelServer-2.6.RygelServer.DataSource */
    connect(sigName: "data-available", callback: (($obj: DataSource, data: any[]) => void)): number
    on(sigName: "data-available", callback: (data: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-available", callback: (data: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-available", callback: (data: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "data-available", data: any[]): void
    connect(sigName: "done", callback: (($obj: DataSource) => void)): number
    on(sigName: "done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "done"): void
    connect(sigName: "error", callback: (($obj: DataSource, error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DataSource_ConstructProps)
    _init (config?: DataSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UpdatableObject_ConstructProps extends MediaObject_ConstructProps {
}
export class UpdatableObject {
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.UpdatableObject */
    commit(callback?: Gio.AsyncReadyCallback | null): void
    commitFinish(res: Gio.AsyncResult): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UpdatableObject_ConstructProps)
    _init (config?: UpdatableObject_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioItem_ConstructProps extends MediaFileItem_ConstructProps {
    duration?: number
    bitrate?: number
    sampleFreq?: number
    bitsPerSample?: number
    channels?: number
    album?: string
}
export class AudioItem {
    /* Properties of RygelServer-2.6.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.AudioItem */
    getDuration(): number
    setDuration(value: number): void
    getBitrate(): number
    setBitrate(value: number): void
    getSampleFreq(): number
    setSampleFreq(value: number): void
    getBitsPerSample(): number
    setBitsPerSample(value: number): void
    getChannels(): number
    setChannels(value: number): void
    getAlbum(): string
    setAlbum(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::duration", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitrate", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sample-freq", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits-per-sample", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channels", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioItem_ConstructProps)
    _init (config?: AudioItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): AudioItem
    static $gtype: GObject.Type
}
export interface ImageItem_ConstructProps extends MediaFileItem_ConstructProps {
    width?: number
    height?: number
    colorDepth?: number
    thumbnails?: Gee.ArrayList
}
export class ImageItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Properties of RygelServer-2.6.RygelServer.VisualItem */
    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    /* Methods of RygelServer-2.6.RygelServer.VisualItem */
    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getThumbnails(): Gee.ArrayList
    setThumbnails(value: Gee.ArrayList): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnails", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImageItem_ConstructProps)
    _init (config?: ImageItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): ImageItem
    static $gtype: GObject.Type
}
export class LogicalExpression {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpression */
    refCount: number
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.6.RygelServer.SearchExpression */
    satisfiedBy(mediaObject: MediaObject): boolean
    toString(): string
    static name: string
    static new(): LogicalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LogicalExpression
}
export interface MediaArtStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaArtStore {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaArtStore */
    lookupMediaArt(item: MusicItem): Thumbnail | null
    add(item: MusicItem, file: Gio.File, data: any[], mime: string): void
    searchMediaArtForFile(item: MusicItem, file: Gio.File): void
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
    connect(sigName: "notify", callback: (($obj: MediaArtStore, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MediaArtStore_ConstructProps)
    _init (config?: MediaArtStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): MediaArtStore | null
    static $gtype: GObject.Type
}
export interface MediaObjects_ConstructProps extends Gee.ArrayList_ConstructProps {
}
export class MediaObjects {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of Gee-0.8.Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaObjects */
    sortByCriteria(sortCriteria: string): void
    /* Methods of Gee-0.8.Gee.ArrayList */
    addAll(collection: Gee.Collection): boolean
    getEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    connect(sigName: "notify", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaObjects_ConstructProps)
    _init (config?: MediaObjects_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaObjects
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): MediaObjects
    static $gtype: GObject.Type
}
export interface MusicItem_ConstructProps extends AudioItem_ConstructProps {
    trackNumber?: number
    albumArt?: Thumbnail
}
export class MusicItem {
    /* Properties of RygelServer-2.6.RygelServer.MusicItem */
    trackNumber: number
    albumArt: Thumbnail
    /* Properties of RygelServer-2.6.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MusicItem */
    lookupAlbumArt(): void
    getTrackNumber(): number
    setTrackNumber(value: number): void
    getAlbumArt(): Thumbnail
    setAlbumArt(value: Thumbnail): void
    /* Methods of RygelServer-2.6.RygelServer.AudioItem */
    getDuration(): number
    setDuration(value: number): void
    getBitrate(): number
    setBitrate(value: number): void
    getSampleFreq(): number
    setSampleFreq(value: number): void
    getBitsPerSample(): number
    setBitsPerSample(value: number): void
    getChannels(): number
    setChannels(value: number): void
    getAlbum(): string
    setAlbum(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::track-number", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album-art", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitrate", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sample-freq", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits-per-sample", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channels", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicItem_ConstructProps)
    _init (config?: MusicItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): MusicItem
    static $gtype: GObject.Type
}
export interface PhotoItem_ConstructProps extends ImageItem_ConstructProps {
}
export class PhotoItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PhotoItem_ConstructProps)
    _init (config?: PhotoItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): PhotoItem
    static $gtype: GObject.Type
}
export class RelationalExpression {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpression */
    refCount: number
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.6.RygelServer.RelationalExpression */
    compareString(str?: string | null): boolean
    compareInt(integer: number): boolean
    compareUint(integer: number): boolean
    /* Methods of RygelServer-2.6.RygelServer.SearchExpression */
    satisfiedBy(mediaObject: MediaObject): boolean
    toString(): string
    static name: string
    static new(): RelationalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RelationalExpression
}
export interface SimpleContainer_ConstructProps extends MediaContainer_ConstructProps {
    searchClasses?: Gee.ArrayList
}
export class SimpleContainer {
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Properties of RygelServer-2.6.RygelServer.SearchableContainer */
    searchClasses: Gee.ArrayList
    /* Fields of RygelServer-2.6.RygelServer.SimpleContainer */
    children: MediaObjects
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.SimpleContainer */
    addChildItem(child: MediaItem): void
    getAllChildren(): MediaObjects
    addChildContainer(child: MediaContainer): void
    removeChild(child: MediaObject): void
    clear(): void
    isChildIdUnique(childId: string): boolean
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
    getChildren(offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    findObject(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, eventType: ObjectEventType, subTreeUpdate: boolean): void
    getChildCount(): number
    setChildCount(value: number): void
    getEmptyChildCount(): number
    setEmptyChildCount(value: number): void
    getAllChildCount(): number
    getCreateModeEnabled(): boolean
    setCreateModeEnabled(value: boolean): void
    getSortCriteria(): string
    setSortCriteria(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    /* Methods of RygelServer-2.6.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    simpleSearch(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    simpleSearchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    getSearchClasses(): Gee.ArrayList
    setSearchClasses(value: Gee.ArrayList): void
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: SimpleContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: SimpleContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub-tree-updates-finished", subTreeRoot: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-criteria", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-classes", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-classes", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleContainer_ConstructProps)
    _init (config?: SimpleContainer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer | null, title: string): SimpleContainer
    static root(title: string): SimpleContainer
    static $gtype: GObject.Type
}
export class Subtitle {
    /* Fields of RygelServer-2.6.RygelServer.Subtitle */
    refCount: number
    uri: string
    mimeType: string
    captionType: string
    fileExtension: string
    size: number
    /* Methods of RygelServer-2.6.RygelServer.Subtitle */
    getResource(protocol: string, index: number): MediaResource
    static name: string
    static new(mimeType: string, captionType: string, fileExtension: string): Subtitle
    constructor(mimeType: string, captionType: string, fileExtension: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string, captionType: string, fileExtension: string): Subtitle
}
export class Thumbnail {
    /* Fields of RygelServer-2.6.RygelServer.Thumbnail */
    dlnaProfile: string
    /* Fields of RygelCore-2.6.RygelCore.IconInfo */
    refCount: number
    mimeType: string
    uri: string
    fileExtension: string
    size: number
    width: number
    height: number
    depth: number
    /* Methods of RygelServer-2.6.RygelServer.Thumbnail */
    getResource(protocol: string, index: number): MediaResource
    static name: string
    static new(mimeType: string, dlnaProfile: string, fileExtension: string): Thumbnail
    constructor(mimeType: string, dlnaProfile: string, fileExtension: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string, dlnaProfile: string, fileExtension: string): Thumbnail
    static new(mimeType: string, fileExtension: string): Thumbnail
}
export interface VideoItem_ConstructProps extends AudioItem_ConstructProps {
    author?: string
    subtitles?: Gee.ArrayList
    width?: number
    height?: number
    colorDepth?: number
    thumbnails?: Gee.ArrayList
}
export class VideoItem {
    /* Properties of RygelServer-2.6.RygelServer.VideoItem */
    author: string
    subtitles: Gee.ArrayList
    /* Properties of RygelServer-2.6.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Properties of RygelServer-2.6.RygelServer.VisualItem */
    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.VideoItem */
    addSubtitleResources(httpServer: HTTPServer): void
    getAuthor(): string
    setAuthor(value: string): void
    getSubtitles(): Gee.ArrayList
    setSubtitles(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.6.RygelServer.AudioItem */
    getDuration(): number
    setDuration(value: number): void
    getBitrate(): number
    setBitrate(value: number): void
    getSampleFreq(): number
    setSampleFreq(value: number): void
    getBitsPerSample(): number
    setBitsPerSample(value: number): void
    getChannels(): number
    setChannels(value: number): void
    getAlbum(): string
    setAlbum(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    /* Methods of RygelServer-2.6.RygelServer.VisualItem */
    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getThumbnails(): Gee.ArrayList
    setThumbnails(value: Gee.ArrayList): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitles", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitles", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitrate", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sample-freq", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits-per-sample", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channels", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnails", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoItem_ConstructProps)
    _init (config?: VideoItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): VideoItem
    static $gtype: GObject.Type
}
export interface MediaContainer_ConstructProps extends MediaObject_ConstructProps {
    childCount?: number
    emptyChildCount?: number
    createModeEnabled?: boolean
    sortCriteria?: string
}
export class MediaContainer {
    /* Properties of RygelServer-2.6.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaContainer */
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaContainer */
    getChildren(offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    findObject(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, eventType: ObjectEventType, subTreeUpdate: boolean): void
    getChildCount(): number
    setChildCount(value: number): void
    getEmptyChildCount(): number
    setEmptyChildCount(value: number): void
    getAllChildCount(): number
    getCreateModeEnabled(): boolean
    setCreateModeEnabled(value: boolean): void
    getSortCriteria(): string
    setSortCriteria(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    /* Signals of RygelServer-2.6.RygelServer.MediaContainer */
    connect(sigName: "container-updated", callback: (($obj: MediaContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub-tree-updates-finished", callback: (($obj: MediaContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub-tree-updates-finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub-tree-updates-finished", subTreeRoot: MediaObject): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-criteria", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaContainer_ConstructProps)
    _init (config?: MediaContainer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static equalFunc(a: MediaContainer, b: MediaContainer): boolean
    static $gtype: GObject.Type
}
export interface MediaItem_ConstructProps extends MediaObject_ConstructProps {
    description?: string
}
export class MediaItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaItem_ConstructProps)
    _init (config?: MediaItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaFileItem_ConstructProps extends MediaItem_ConstructProps {
    mimeType?: string
    dlnaProfile?: string
    size?: number
    placeHolder?: boolean
}
export class MediaFileItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaFileItem_ConstructProps)
    _init (config?: MediaFileItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaObject_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    refId?: string
    upnpClass?: string
    date?: string
    creator?: string
    modified?: number
    objectUpdateId?: number
    artist?: string
    genre?: string
    parent?: MediaContainer
    parentRef?: MediaContainer
    title?: string
}
export class MediaObject {
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaObject_ConstructProps)
    _init (config?: MediaObject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static applyReplacements(replacementPairs: GLib.HashTable, sourceString?: string | null): string | null
    static $gtype: GObject.Type
}
export interface MediaResource_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
    importUri?: string
    extension?: string
    size?: number
    cleartextSize?: number
    duration?: number
    bitrate?: number
    bitsPerSample?: number
    colorDepth?: number
    width?: number
    height?: number
    audioChannels?: number
    sampleFreq?: number
    protocol?: string
    mimeType?: string
    dlnaProfile?: string
    network?: string
    dlnaConversion?: GUPnPAV.DLNAConversion
    dlnaFlags?: GUPnPAV.DLNAFlags
    dlnaOperation?: GUPnPAV.DLNAOperation
}
export class MediaResource {
    /* Properties of RygelServer-2.6.RygelServer.MediaResource */
    uri: string
    importUri: string
    extension: string
    size: number
    cleartextSize: number
    duration: number
    bitrate: number
    bitsPerSample: number
    colorDepth: number
    width: number
    height: number
    audioChannels: number
    sampleFreq: number
    protocol: string
    mimeType: string
    dlnaProfile: string
    network: string
    dlnaConversion: GUPnPAV.DLNAConversion
    dlnaFlags: GUPnPAV.DLNAFlags
    dlnaOperation: GUPnPAV.DLNAOperation
    /* Fields of RygelServer-2.6.RygelServer.MediaResource */
    playSpeeds: string[]
    playSpeedsLength1: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaResource */
    dup(): MediaResource
    getName(): string
    serialize(didlResource: GUPnPAV.DIDLLiteResource, replacements?: GLib.HashTable | null): GUPnPAV.DIDLLiteResource
    setProtocolInfo(pi: GUPnPAV.ProtocolInfo): void
    getProtocolInfo(replacements?: GLib.HashTable | null): GUPnPAV.ProtocolInfo
    supportsArbitraryByteSeek(): boolean
    supportsArbitraryTimeSeek(): boolean
    supportsLimitedByteSeek(): boolean
    supportsLimitedTimeSeek(): boolean
    supportsLimitedCleartextByteSeek(): boolean
    supportsFullCleartextByteSeek(): boolean
    isLinkProtectionEnabled(): boolean
    isDlnaContent(): boolean
    getDefaultTransferMode(): string
    supportsTransferMode(transferMode: string): boolean
    isStreamable(): boolean
    isCleartextRangeSupportEnabled(): boolean
    supportsPlayspeed(): boolean
    isDlnaProtocolFlagSet(flags: number): boolean
    isDlnaOperationModeSet(flags: number): boolean
    toString(): string
    getUri(): string
    setUri(value: string): void
    getImportUri(): string
    setImportUri(value: string): void
    getExtension(): string
    setExtension(value: string): void
    getSize(): number
    setSize(value: number): void
    getCleartextSize(): number
    setCleartextSize(value: number): void
    getDuration(): number
    setDuration(value: number): void
    getBitrate(): number
    setBitrate(value: number): void
    getBitsPerSample(): number
    setBitsPerSample(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getAudioChannels(): number
    setAudioChannels(value: number): void
    getSampleFreq(): number
    setSampleFreq(value: number): void
    getProtocol(): string
    setProtocol(value: string): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getNetwork(): string
    setNetwork(value: string): void
    getDlnaConversion(): GUPnPAV.DLNAConversion
    setDlnaConversion(value: GUPnPAV.DLNAConversion): void
    getDlnaFlags(): GUPnPAV.DLNAFlags
    setDlnaFlags(value: GUPnPAV.DLNAFlags): void
    getDlnaOperation(): GUPnPAV.DLNAOperation
    setDlnaOperation(value: GUPnPAV.DLNAOperation): void
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
    connect(sigName: "notify", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::import-uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::import-uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cleartext-size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cleartext-size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitrate", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits-per-sample", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-channels", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-channels", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sample-freq", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-conversion", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-conversion", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-flags", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-flags", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-operation", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-operation", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaResource_ConstructProps)
    _init (config?: MediaResource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): MediaResource
    static fromResource(name: string, that: MediaResource): MediaResource
    static fromDidlLiteResource(name: string, didlResource: GUPnPAV.DIDLLiteResource): MediaResource
    static $gtype: GObject.Type
}
export interface MediaServerPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {
    rootContainer?: MediaContainer
    uploadProfiles?: RygelCore.DLNAProfile[]
    supportedProfiles?: RygelCore.DLNAProfile[]
}
export class MediaServerPlugin {
    /* Properties of RygelServer-2.6.RygelServer.MediaServerPlugin */
    readonly searchCaps: string
    uploadProfiles: RygelCore.DLNAProfile[]
    supportedProfiles: RygelCore.DLNAProfile[]
    /* Properties of RygelCore-2.6.RygelCore.Plugin */
    capabilities: RygelCore.PluginCapabilities
    title: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
    /* Fields of GUPnP-1.2.GUPnP.ResourceFactory */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaServerPlugin */
    getRootContainer(): MediaContainer
    getSearchCaps(): string
    getUploadProfiles(): RygelCore.DLNAProfile[]
    setUploadProfiles(value: RygelCore.DLNAProfile[]): void
    getSupportedProfiles(): RygelCore.DLNAProfile[]
    setSupportedProfiles(value: RygelCore.DLNAProfile[]): void
    /* Methods of RygelCore-2.6.RygelCore.Plugin */
    addResource(resourceInfo: RygelCore.ResourceInfo): void
    addIcon(iconInfo: RygelCore.IconInfo): void
    applyHacks(device: RygelCore.RootDevice, descriptionPath: string): void
    getCapabilities(): RygelCore.PluginCapabilities
    setCapabilities(value: RygelCore.PluginCapabilities): void
    getName(): string
    getTitle(): string
    setTitle(value: string): void
    getDescription(): string
    getDescPath(): string
    getActive(): boolean
    setActive(value: boolean): void
    getResourceInfos(): Gee.ArrayList
    getIconInfos(): Gee.ArrayList
    getDefaultIcons(): Gee.ArrayList
    /* Methods of GUPnP-1.2.GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    connect(sigName: "notify", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-caps", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-caps", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upload-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upload-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upload-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upload-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upload-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-icons", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaServerPlugin_ConstructProps)
    _init (config?: MediaServerPlugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaServerPlugin
    static new(): MediaServerPlugin
    static $gtype: GObject.Type
}
export class SearchExpression {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpression */
    refCount: number
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.6.RygelServer.SearchExpression */
    satisfiedBy(mediaObject: MediaObject): boolean
    toString(): string
    static name: string
}
export interface MediaServer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {
    rootContainer?: MediaContainer
}
export class MediaServer {
    /* Properties of RygelCore-2.6.RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.MediaDevice */
    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): RygelCore.Plugin
    setPlugin(value: RygelCore.Plugin): void
    getTitle(): string
    getCapabilities(): RygelCore.PluginCapabilities
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
    connect(sigName: "notify", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::plugin", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaServer_ConstructProps)
    _init (config?: MediaServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, rootContainer: MediaContainer, capabilities: RygelCore.PluginCapabilities): MediaServer
    static $gtype: GObject.Type
}
export interface MediaEngine_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaEngine {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaEngine */
    getDlnaProfiles(): RygelCore.DLNAProfile[]
    getResourcesForItem(item: MediaObject, callback?: Gio.AsyncReadyCallback | null): void
    getResourcesForItemFinish(res: Gio.AsyncResult): Gee.List | null
    createDataSourceForResource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    createDataSourceForUri(uri: string): DataSource | null
    getInternalProtocolSchemes(): string[]
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
    /* Signals of RygelServer-2.6.RygelServer.MediaEngine */
    connect(sigName: "resource-changed", callback: (($obj: MediaEngine, mediaObjectUri: string) => void)): number
    on(sigName: "resource-changed", callback: (mediaObjectUri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-changed", callback: (mediaObjectUri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-changed", callback: (mediaObjectUri: string) => void): NodeJS.EventEmitter
    emit(sigName: "resource-changed", mediaObjectUri: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaEngine, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MediaEngine_ConstructProps)
    _init (config?: MediaEngine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static init(): void
    static getDefault(): MediaEngine
    static $gtype: GObject.Type
}
export interface HTTPSeekRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class HTTPSeekRequest {
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPSeekRequest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HTTPSeekRequest_ConstructProps)
    _init (config?: HTTPSeekRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaylistItem_ConstructProps extends MediaFileItem_ConstructProps {
}
export class PlaylistItem {
    /* Properties of RygelServer-2.6.RygelServer.MediaFileItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    /* Properties of RygelServer-2.6.RygelServer.MediaItem */
    description: string
    /* Properties of RygelServer-2.6.RygelServer.MediaObject */
    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItem */
    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap
    /* Fields of RygelServer-2.6.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.MediaFileItem */
    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback?: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    /* Methods of RygelServer-2.6.RygelServer.MediaItem */
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.6.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags
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
    connect(sigName: "notify", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ref-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-class", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-update-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::genre", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-ref", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ocm-flags", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlaylistItem_ConstructProps)
    _init (config?: PlaylistItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): PlaylistItem
    static $gtype: GObject.Type
}
export interface ContentDirectory_ConstructProps extends GUPnP.Service_ConstructProps {
}
export class ContentDirectory {
    /* Fields of RygelServer-2.6.RygelServer.ContentDirectory */
    featureList: string
    httpServer: HTTPServer
    rootContainer: MediaContainer
    cancellable: Gio.Cancellable
    systemUpdateId: number
    /* Fields of GUPnP-1.2.GUPnP.Service */
    parentInstance: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.2.GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: ContentDirectory, action: GUPnP.ServiceAction) => void)): number
    on(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (action: GUPnP.ServiceAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: ContentDirectory, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    on(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: ContentDirectory, variable: string, value: any) => void)): number
    on(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (variable: string, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ContentDirectory_ConstructProps)
    _init (config?: ContentDirectory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentDirectory
    static $gtype: GObject.Type
}
export interface HTTPByteSeekRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
    startByte?: number
    endByte?: number
    rangeLength?: number
    totalSize?: number
}
export class HTTPByteSeekRequest {
    /* Properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest */
    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPByteSeekRequest */
    getStartByte(): number
    setStartByte(value: number): void
    getEndByte(): number
    setEndByte(value: number): void
    getRangeLength(): number
    getTotalSize(): number
    setTotalSize(value: number): void
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
    connect(sigName: "notify", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPByteSeekRequest_ConstructProps)
    _init (config?: HTTPByteSeekRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: Soup.Message, handler: HTTPGetHandler): HTTPByteSeekRequest
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(msg: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface HTTPByteSeekResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    startByte?: number
    endByte?: number
    rangeLength?: number
    totalSize?: number
}
export class HTTPByteSeekResponse {
    /* Properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse */
    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPByteSeekResponse */
    getStartByte(): number
    setStartByte(value: number): void
    getEndByte(): number
    setEndByte(value: number): void
    getRangeLength(): number
    getTotalSize(): number
    setTotalSize(value: number): void
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    addResponseHeaders(request: HTTPRequest): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPByteSeekResponse_ConstructProps)
    _init (config?: HTTPByteSeekResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(startByte: number, endByte: number, totalSize: number): HTTPByteSeekResponse
    static fromRequest(request: HTTPByteSeekRequest): HTTPByteSeekResponse
    static $gtype: GObject.Type
}
export interface HTTPGetHandler_ConstructProps extends GObject.Object_ConstructProps {
    cancellable?: Gio.Cancellable
}
export class HTTPGetHandler {
    /* Properties of RygelServer-2.6.RygelServer.HTTPGetHandler */
    cancellable: Gio.Cancellable
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPGetHandler */
    addResponseHeaders(request: HTTPGet): void
    getDefaultTransferMode(): string
    supportsTransferMode(mode: string): boolean
    getResourceSize(): number
    getResourceDuration(): number
    supportsByteSeek(): boolean
    supportsTimeSeek(): boolean
    supportsPlayspeed(): boolean
    renderBody(request: HTTPGet): HTTPResponse
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void
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
    connect(sigName: "notify", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPGetHandler_ConstructProps)
    _init (config?: HTTPGetHandler_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HTTPGet_ConstructProps extends HTTPRequest_ConstructProps {
}
export class HTTPGet {
    /* Fields of RygelServer-2.6.RygelServer.HTTPGet */
    seek: HTTPSeekRequest
    speedRequest: PlaySpeedRequest
    handler: HTTPGetHandler
    /* Fields of RygelServer-2.6.RygelServer.HTTPRequest */
    httpServer: HTTPServer
    server: Soup.Server
    msg: Soup.Message
    uri: HTTPItemURI
    object: MediaObject
    hack: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPRequest */
    handle(callback?: Gio.AsyncReadyCallback | null): void
    handleFinish(res: Gio.AsyncResult): void
    findItem(callback?: Gio.AsyncReadyCallback | null): void
    findItemFinish(res: Gio.AsyncResult): void
    handleError(error: GLib.Error): void
    end(status: number, reason?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: HTTPGet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HTTPGet_ConstructProps)
    _init (config?: HTTPGet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(httpServer: HTTPServer, server: Soup.Server, msg: Soup.Message): HTTPGet
    static $gtype: GObject.Type
}
export interface HTTPItemURI_ConstructProps extends GObject.Object_ConstructProps {
    itemId?: string
    thumbnailIndex?: number
    subtitleIndex?: number
    resourceName?: string
    httpServer?: HTTPServer
    extension?: string
}
export class HTTPItemURI {
    /* Properties of RygelServer-2.6.RygelServer.HTTPItemURI */
    itemId: string
    thumbnailIndex: number
    subtitleIndex: number
    resourceName: string
    httpServer: HTTPServer
    extension: string
    /* Fields of RygelServer-2.6.RygelServer.HTTPItemURI */
    rygelHttpItemUriMimeToExt: Gee.HashMap
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPItemURI */
    toString(): string
    getItemId(): string
    setItemId(value: string): void
    getThumbnailIndex(): number
    setThumbnailIndex(value: number): void
    getSubtitleIndex(): number
    setSubtitleIndex(value: number): void
    getResourceName(): string | null
    setResourceName(value?: string | null): void
    getHttpServer(): HTTPServer
    setHttpServer(value: HTTPServer): void
    getExtension(): string
    setExtension(value: string): void
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
    connect(sigName: "notify", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::item-id", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-id", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::item-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::item-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::item-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnail-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnail-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnail-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnail-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-name", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-name", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-server", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-server", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPItemURI_ConstructProps)
    _init (config?: HTTPItemURI_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: MediaObject, httpServer: HTTPServer, thumbnailIndex: number, subtitleIndex: number, resourceName?: string | null): HTTPItemURI
    static fromString(uri: string, httpServer: HTTPServer): HTTPItemURI
    static $gtype: GObject.Type
}
export interface HTTPRequest_ConstructProps extends GObject.Object_ConstructProps {
    cancellable?: Gio.Cancellable
}
export class HTTPRequest {
    /* Properties of RygelCore-2.6.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of RygelServer-2.6.RygelServer.HTTPRequest */
    httpServer: HTTPServer
    server: Soup.Server
    msg: Soup.Message
    uri: HTTPItemURI
    object: MediaObject
    hack: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPRequest */
    handle(callback?: Gio.AsyncReadyCallback | null): void
    handleFinish(res: Gio.AsyncResult): void
    findItem(callback?: Gio.AsyncReadyCallback | null): void
    findItemFinish(res: Gio.AsyncResult): void
    handleError(error: GLib.Error): void
    end(status: number, reason?: string | null): void
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
    /* Methods of RygelCore-2.6.RygelCore.StateMachine */
    run(callback?: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: HTTPRequest) => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPRequest_ConstructProps)
    _init (config?: HTTPRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HTTPResponse_ConstructProps extends GObject.Object_ConstructProps {
    server?: Soup.Server
    cancellable?: Gio.Cancellable
}
export class HTTPResponse {
    /* Properties of RygelServer-2.6.RygelServer.HTTPResponse */
    server: Soup.Server
    readonly priority: number
    /* Properties of RygelCore-2.6.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of RygelServer-2.6.RygelServer.HTTPResponse */
    msg: Soup.Message
    seek: HTTPSeekRequest
    speed: PlaySpeedRequest
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponse */
    preroll(): Gee.List | null
    end(aborted: boolean, status: number): void
    getServer(): Soup.Server
    getPriority(): number
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
    /* Methods of RygelCore-2.6.RygelCore.StateMachine */
    run(callback?: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: HTTPResponse) => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    connect(sigName: "notify::server", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPResponse_ConstructProps)
    _init (config?: HTTPResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(request: HTTPGet, requestHandler: HTTPGetHandler, src: DataSource): HTTPResponse
    static $gtype: GObject.Type
}
export interface HTTPResponseElement_ConstructProps extends GObject.Object_ConstructProps {
}
export class HTTPResponseElement {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    addResponseHeaders(request: HTTPRequest): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: HTTPResponseElement, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HTTPResponseElement_ConstructProps)
    _init (config?: HTTPResponseElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HTTPServer_ConstructProps extends GObject.Object_ConstructProps {
    pathRoot?: string
    serverName?: string
    cancellable?: Gio.Cancellable
}
export class HTTPServer {
    /* Properties of RygelServer-2.6.RygelServer.HTTPServer */
    pathRoot: string
    serverName: string
    /* Properties of RygelCore-2.6.RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of RygelServer-2.6.RygelServer.HTTPServer */
    rootContainer: MediaContainer
    context: GUPnP.Context
    replacements: GLib.HashTable
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPServer */
    setResourceDeliveryOptions(res: MediaResource): void
    needProxy(uri: string): boolean
    getProtocol(): string
    getProtocolInfo(): Gee.ArrayList
    getReplacements(): GLib.HashTable
    isLocal(): boolean
    getPathRoot(): string
    getServerName(): string
    setServerName(value: string): void
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
    /* Methods of RygelCore-2.6.RygelCore.StateMachine */
    run(callback?: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore-2.6.RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: HTTPServer) => void)): number
    on(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "completed"): void
    connect(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-name", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-name", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPServer_ConstructProps)
    _init (config?: HTTPServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(contentDir: ContentDirectory, name: string): HTTPServer
    static $gtype: GObject.Type
}
export interface HTTPTimeSeekRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
}
export class HTTPTimeSeekRequest {
    /* Fields of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest */
    startTime: number
    endTime: number
    rangeDuration: number
    totalDuration: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest */
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: HTTPTimeSeekRequest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HTTPTimeSeekRequest_ConstructProps)
    _init (config?: HTTPTimeSeekRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface HTTPTimeSeekResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    startTime?: number
    endTime?: number
    rangeDuration?: number
    totalDuration?: number
    startByte?: number
    endByte?: number
    responseLength?: number
    totalSize?: number
}
export class HTTPTimeSeekResponse {
    /* Properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse */
    startTime: number
    endTime: number
    rangeDuration: number
    totalDuration: number
    startByte: number
    endByte: number
    responseLength: number
    totalSize: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse */
    getStartTime(): number
    getEndTime(): number
    getRangeDuration(): number
    getTotalDuration(): number
    getStartByte(): number
    getEndByte(): number
    getResponseLength(): number
    getTotalSize(): number
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    addResponseHeaders(request: HTTPRequest): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::range-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::range-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::range-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::range-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response-length", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-length", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-size", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPTimeSeekResponse_ConstructProps)
    _init (config?: HTTPTimeSeekResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number): HTTPTimeSeekResponse
    static timeOnly(startTime: number, endTime: number, totalDuration: number): HTTPTimeSeekResponse
    static withLength(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number, responseLength: number): HTTPTimeSeekResponse
    static fromRequest(timeSeekRequest: HTTPTimeSeekRequest, totalDuration: number): HTTPTimeSeekResponse
    static $gtype: GObject.Type
}
export interface Serializer_ConstructProps extends GObject.Object_ConstructProps {
    serializerType?: SerializerType
}
export class Serializer {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.Serializer */
    addItem(): GUPnPAV.DIDLLiteItem | null
    addContainer(): GUPnPAV.DIDLLiteContainer | null
    filter(filterString: string): void
    getString(): string
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
    connect(sigName: "notify", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Serializer_ConstructProps)
    _init (config?: Serializer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SerializerType): Serializer
    static $gtype: GObject.Type
}
export class PlaySpeed {
    /* Fields of RygelServer-2.6.RygelServer.PlaySpeed */
    refCount: number
    numerator: number
    denominator: number
    /* Methods of RygelServer-2.6.RygelServer.PlaySpeed */
    equals(that: PlaySpeed): boolean
    isPositive(): boolean
    isNormalRate(): boolean
    toString(): string
    toFloat(): number
    toDouble(): number
    static name: string
    static new(numerator: number, denominator: number): PlaySpeed
    constructor(numerator: number, denominator: number)
    /* Static methods and pseudo-constructors */
    static new(numerator: number, denominator: number): PlaySpeed
    static fromString(speed: string): PlaySpeed
}
export interface PlaySpeedRequest_ConstructProps extends GObject.Object_ConstructProps {
    speed?: PlaySpeed
}
export class PlaySpeedRequest {
    /* Properties of RygelServer-2.6.RygelServer.PlaySpeedRequest */
    speed: PlaySpeed
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.PlaySpeedRequest */
    equals(that: PlaySpeedRequest): boolean
    getSpeed(): PlaySpeed
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
    connect(sigName: "notify", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::speed", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlaySpeedRequest_ConstructProps)
    _init (config?: PlaySpeedRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(numerator: number, denominator: number): PlaySpeedRequest
    static fromString(speed: string): PlaySpeedRequest
    static supported(request: HTTPGet): boolean
    static $gtype: GObject.Type
}
export interface PlaySpeedResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
}
export class PlaySpeedResponse {
    /* Fields of RygelServer-2.6.RygelServer.PlaySpeedResponse */
    framerate: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.PlaySpeedResponse */
    equals(that: PlaySpeedRequest): boolean
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    addResponseHeaders(request: HTTPRequest): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: PlaySpeedResponse, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlaySpeedResponse_ConstructProps)
    _init (config?: PlaySpeedResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(numerator: number, denominator: number, framerate: number): PlaySpeedResponse
    static fromSpeed(speed: PlaySpeed, framerate: number): PlaySpeedResponse
    static fromString(speed: string, framerate: number): PlaySpeedResponse
    static $gtype: GObject.Type
}
export interface DTCPCleartextRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
    startByte?: number
    endByte?: number
    rangeLength?: number
    totalSize?: number
}
export class DTCPCleartextRequest {
    /* Properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest */
    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.DTCPCleartextRequest */
    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number
    getTotalSize(): number
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
    connect(sigName: "notify", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::range-length", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-size", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DTCPCleartextRequest_ConstructProps)
    _init (config?: DTCPCleartextRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(message: Soup.Message, handler: HTTPGetHandler): DTCPCleartextRequest
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface DTCPCleartextResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    startByte?: number
    endByte?: number
    rangeLength?: number
    totalSize?: number
    encryptedLength?: number
}
export class DTCPCleartextResponse {
    /* Properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse */
    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    encryptedLength: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.DTCPCleartextResponse */
    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number
    getTotalSize(): number
    getEncryptedLength(): number
    setEncryptedLength(value: number): void
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    addResponseHeaders(request: HTTPRequest): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::range-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-size", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encrypted-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encrypted-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encrypted-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encrypted-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DTCPCleartextResponse_ConstructProps)
    _init (config?: DTCPCleartextResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(startByte: number, endByte: number, totalSize: number, encryptedLength: number): DTCPCleartextResponse
    static fromRequest(request: DTCPCleartextRequest, encryptedLength: number): DTCPCleartextResponse
    static $gtype: GObject.Type
}
export interface DLNAAvailableSeekRangeRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
}
export class DLNAAvailableSeekRangeRequest {
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DLNAAvailableSeekRangeRequest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DLNAAvailableSeekRangeRequest_ConstructProps)
    _init (config?: DLNAAvailableSeekRangeRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
    static $gtype: GObject.Type
}
export interface DLNAAvailableSeekRangeResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
    mode?: number
    startTime?: number
    endTime?: number
    startByte?: number
    endByte?: number
    rangeLength?: number
}
export class DLNAAvailableSeekRangeResponse {
    /* Properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse */
    mode: number
    startTime: number
    endTime: number
    startByte: number
    endByte: number
    rangeLength: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse */
    getMode(): number
    getStartTime(): number
    getEndTime(): number
    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number
    /* Methods of RygelServer-2.6.RygelServer.HTTPResponseElement */
    addResponseHeaders(request: HTTPRequest): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::range-length", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DLNAAvailableSeekRangeResponse_ConstructProps)
    _init (config?: DLNAAvailableSeekRangeResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: number, startTime: number, endTime: number, startByte: number, endByte: number): DLNAAvailableSeekRangeResponse
    static timeOnly(mode: number, startTime: number, endTime: number): DLNAAvailableSeekRangeResponse
    static $gtype: GObject.Type
}
export abstract class AudioItemClass {
    static name: string
}
export class AudioItemPrivate {
    static name: string
}
export abstract class ImageItemClass {
    static name: string
}
export class ImageItemPrivate {
    static name: string
}
export abstract class LogicalExpressionClass {
    static name: string
}
export class LogicalExpressionPrivate {
    static name: string
}
export abstract class MediaArtStoreClass {
    static name: string
}
export class MediaArtStorePrivate {
    static name: string
}
export abstract class MediaObjectsClass {
    static name: string
}
export class MediaObjectsPrivate {
    static name: string
}
export abstract class MusicItemClass {
    static name: string
}
export class MusicItemPrivate {
    static name: string
}
export abstract class PhotoItemClass {
    static name: string
}
export class PhotoItemPrivate {
    static name: string
}
export abstract class RelationalExpressionClass {
    static name: string
}
export class RelationalExpressionPrivate {
    static name: string
}
export abstract class SimpleContainerClass {
    static name: string
}
export class SimpleContainerPrivate {
    static name: string
}
export abstract class SubtitleClass {
    /* Fields of RygelServer-2.6.RygelServer.SubtitleClass */
    getResource: (self: Subtitle, protocol: string, index: number) => MediaResource
    static name: string
}
export class SubtitlePrivate {
    static name: string
}
export abstract class ThumbnailClass {
    /* Fields of RygelServer-2.6.RygelServer.ThumbnailClass */
    getResource: (self: Thumbnail, protocol: string, index: number) => MediaResource
    static name: string
}
export class ThumbnailPrivate {
    static name: string
}
export abstract class VideoItemClass {
    /* Fields of RygelServer-2.6.RygelServer.VideoItemClass */
    addSubtitleResources: (self: VideoItem, httpServer: HTTPServer) => void
    static name: string
}
export class VideoItemPrivate {
    static name: string
}
export abstract class MediaContainerClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaContainerClass */
    getChildren: (self: MediaContainer, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    getChildrenFinish: (self: MediaContainer, res: Gio.AsyncResult) => MediaObjects | null
    findObject: (self: MediaContainer, id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    findObjectFinish: (self: MediaContainer, res: Gio.AsyncResult) => MediaObject | null
    static name: string
}
export class MediaContainerPrivate {
    static name: string
}
export abstract class MediaItemClass {
    static name: string
}
export class MediaItemPrivate {
    static name: string
}
export abstract class MediaFileItemClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaFileItemClass */
    getPrimaryResource: (self: MediaFileItem) => MediaResource
    getExtension: (self: MediaFileItem) => string
    addEngineResources: (self: MediaFileItem, callback?: Gio.AsyncReadyCallback | null) => void
    addEngineResourcesFinish: (self: MediaFileItem, res: Gio.AsyncResult) => void
    addAdditionalResources: (self: MediaFileItem, server: HTTPServer) => void
    static name: string
}
export class MediaFileItemPrivate {
    static name: string
}
export abstract class MediaObjectClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaObjectClass */
    addUri: (self: MediaObject, uri: string) => void
    serialize: (self: MediaObject, serializer: Serializer, httpServer: HTTPServer) => GUPnPAV.DIDLLiteObject | null
    createStreamSourceForResource: (self: MediaObject, request: HTTPRequest, resource: MediaResource) => DataSource | null
    applyDidlLite: (self: MediaObject, didlObject: GUPnPAV.DIDLLiteObject) => void
    compareByProperty: (self: MediaObject, mediaObject: MediaObject, property: string) => number
    static name: string
}
export class MediaObjectPrivate {
    static name: string
}
export abstract class MediaResourceClass {
    static name: string
}
export class MediaResourcePrivate {
    static name: string
}
export abstract class MediaServerPluginClass {
    static name: string
}
export class MediaServerPluginPrivate {
    static name: string
}
export abstract class SearchExpressionClass {
    /* Fields of RygelServer-2.6.RygelServer.SearchExpressionClass */
    satisfiedBy: (self: SearchExpression, mediaObject: MediaObject) => boolean
    toString: (self: SearchExpression) => string
    static name: string
}
export class SearchExpressionPrivate {
    static name: string
}
export abstract class MediaServerClass {
    static name: string
}
export class MediaServerPrivate {
    static name: string
}
export abstract class MediaEngineClass {
    /* Fields of RygelServer-2.6.RygelServer.MediaEngineClass */
    getDlnaProfiles: (self: MediaEngine) => RygelCore.DLNAProfile[]
    getResourcesForItem: (self: MediaEngine, item: MediaObject, callback?: Gio.AsyncReadyCallback | null) => void
    getResourcesForItemFinish: (self: MediaEngine, res: Gio.AsyncResult) => Gee.List | null
    createDataSourceForResource: (self: MediaEngine, item: MediaObject, resource: MediaResource, replacements: GLib.HashTable) => DataSource | null
    createDataSourceForUri: (self: MediaEngine, uri: string) => DataSource | null
    getInternalProtocolSchemes: (self: MediaEngine) => string[]
    static name: string
}
export class MediaEnginePrivate {
    static name: string
}
export abstract class HTTPSeekRequestClass {
    static name: string
}
export class HTTPSeekRequestPrivate {
    static name: string
}
export abstract class PlaylistItemClass {
    static name: string
}
export class PlaylistItemPrivate {
    static name: string
}
export abstract class ContentDirectoryClass {
    static name: string
}
export class ContentDirectoryPrivate {
    static name: string
}
export abstract class HTTPByteSeekRequestClass {
    static name: string
}
export class HTTPByteSeekRequestPrivate {
    static name: string
}
export abstract class HTTPByteSeekResponseClass {
    static name: string
}
export class HTTPByteSeekResponsePrivate {
    static name: string
}
export abstract class HTTPGetHandlerClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPGetHandlerClass */
    addResponseHeaders: (self: HTTPGetHandler, request: HTTPGet) => void
    getDefaultTransferMode: (self: HTTPGetHandler) => string
    supportsTransferMode: (self: HTTPGetHandler, mode: string) => boolean
    getResourceSize: (self: HTTPGetHandler) => number
    getResourceDuration: (self: HTTPGetHandler) => number
    supportsByteSeek: (self: HTTPGetHandler) => boolean
    supportsTimeSeek: (self: HTTPGetHandler) => boolean
    supportsPlayspeed: (self: HTTPGetHandler) => boolean
    renderBody: (self: HTTPGetHandler, request: HTTPGet) => HTTPResponse
    static name: string
}
export class HTTPGetHandlerPrivate {
    static name: string
}
export abstract class HTTPGetClass {
    static name: string
}
export class HTTPGetPrivate {
    static name: string
}
export abstract class HTTPItemURIClass {
    static name: string
}
export class HTTPItemURIPrivate {
    static name: string
}
export abstract class HTTPRequestClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPRequestClass */
    handle: (self: HTTPRequest, callback?: Gio.AsyncReadyCallback | null) => void
    handleFinish: (self: HTTPRequest, res: Gio.AsyncResult) => void
    findItem: (self: HTTPRequest, callback?: Gio.AsyncReadyCallback | null) => void
    findItemFinish: (self: HTTPRequest, res: Gio.AsyncResult) => void
    static name: string
}
export class HTTPRequestPrivate {
    static name: string
}
export abstract class HTTPResponseClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPResponseClass */
    end: (self: HTTPResponse, aborted: boolean, status: number) => void
    static name: string
}
export class HTTPResponsePrivate {
    static name: string
}
export abstract class HTTPResponseElementClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPResponseElementClass */
    addResponseHeaders: (self: HTTPResponseElement, request: HTTPRequest) => void
    toString: (self: HTTPResponseElement) => string
    static name: string
}
export class HTTPResponseElementPrivate {
    static name: string
}
export abstract class HTTPServerClass {
    /* Fields of RygelServer-2.6.RygelServer.HTTPServerClass */
    getProtocol: (self: HTTPServer) => string
    getProtocolInfo: (self: HTTPServer) => Gee.ArrayList
    static name: string
}
export class HTTPServerPrivate {
    static name: string
}
export abstract class HTTPTimeSeekRequestClass {
    static name: string
}
export class HTTPTimeSeekRequestPrivate {
    static name: string
}
export abstract class HTTPTimeSeekResponseClass {
    static name: string
}
export class HTTPTimeSeekResponsePrivate {
    static name: string
}
export abstract class SerializerClass {
    static name: string
}
export class SerializerPrivate {
    static name: string
}
export abstract class PlaySpeedClass {
    static name: string
}
export class PlaySpeedPrivate {
    static name: string
}
export abstract class PlaySpeedRequestClass {
    static name: string
}
export class PlaySpeedRequestPrivate {
    static name: string
}
export abstract class PlaySpeedResponseClass {
    static name: string
}
export class PlaySpeedResponsePrivate {
    static name: string
}
export abstract class DTCPCleartextRequestClass {
    static name: string
}
export class DTCPCleartextRequestPrivate {
    static name: string
}
export abstract class DTCPCleartextResponseClass {
    static name: string
}
export class DTCPCleartextResponsePrivate {
    static name: string
}
export abstract class DLNAAvailableSeekRangeRequestClass {
    static name: string
}
export class DLNAAvailableSeekRangeRequestPrivate {
    static name: string
}
export abstract class DLNAAvailableSeekRangeResponseClass {
    static name: string
}
export class DLNAAvailableSeekRangeResponsePrivate {
    static name: string
}
export abstract class SearchableContainerIface {
    /* Fields of RygelServer-2.6.RygelServer.SearchableContainerIface */
    search: (self: SearchableContainer, expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: SearchableContainer, res: Gio.AsyncResult) => { returnType: MediaObjects | null, totalMatches: number }
    getSearchClasses: (self: SearchableContainer) => Gee.ArrayList
    setSearchClasses: (self: SearchableContainer, value: Gee.ArrayList) => void
    static name: string
}
export abstract class TrackableContainerIface {
    /* Fields of RygelServer-2.6.RygelServer.TrackableContainerIface */
    addChild: (self: TrackableContainer, object: MediaObject, callback?: Gio.AsyncReadyCallback | null) => void
    addChildFinish: (self: TrackableContainer, res: Gio.AsyncResult) => void
    removeChild: (self: TrackableContainer, object: MediaObject, callback?: Gio.AsyncReadyCallback | null) => void
    removeChildFinish: (self: TrackableContainer, res: Gio.AsyncResult) => void
    getServiceResetToken: (self: TrackableContainer) => string
    setServiceResetToken: (self: TrackableContainer, token: string) => void
    getSystemUpdateId: (self: TrackableContainer) => number
    static name: string
}
export abstract class TrackableItemIface {
    static name: string
}
export abstract class VisualItemIface {
    /* Fields of RygelServer-2.6.RygelServer.VisualItemIface */
    getWidth: (self: VisualItem) => number
    setWidth: (self: VisualItem, value: number) => void
    getHeight: (self: VisualItem) => number
    setHeight: (self: VisualItem, value: number) => void
    getColorDepth: (self: VisualItem) => number
    setColorDepth: (self: VisualItem, value: number) => void
    getThumbnails: (self: VisualItem) => Gee.ArrayList
    setThumbnails: (self: VisualItem, value: Gee.ArrayList) => void
    static name: string
}
export abstract class WritableContainerIface {
    /* Fields of RygelServer-2.6.RygelServer.WritableContainerIface */
    addItem: (self: WritableContainer, item: MediaFileItem, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    addItemFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    addContainer: (self: WritableContainer, container: MediaContainer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    addContainerFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    addReference: (self: WritableContainer, object: MediaObject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    addReferenceFinish: (self: WritableContainer, res: Gio.AsyncResult) => string
    removeItem: (self: WritableContainer, id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    removeItemFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    removeContainer: (self: WritableContainer, id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    removeContainerFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    getCreateClasses: (self: WritableContainer) => Gee.ArrayList
    setCreateClasses: (self: WritableContainer, value: Gee.ArrayList) => void
    static name: string
}
export abstract class DataSourceIface {
    /* Fields of RygelServer-2.6.RygelServer.DataSourceIface */
    preroll: (self: DataSource, seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null) => Gee.List | null
    start: (self: DataSource) => void
    freeze: (self: DataSource) => void
    thaw: (self: DataSource) => void
    stop: (self: DataSource) => void
    static name: string
}
export abstract class UpdatableObjectIface {
    /* Fields of RygelServer-2.6.RygelServer.UpdatableObjectIface */
    commit: (self: UpdatableObject, callback?: Gio.AsyncReadyCallback | null) => void
    commitFinish: (self: UpdatableObject, res: Gio.AsyncResult) => void
    static name: string
}
}