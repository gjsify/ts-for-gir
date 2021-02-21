/**
 * RygelServer-2.4
 */

import "node"
import type { RygelCore } from './RygelCore-2.4';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { Gee } from './Gee-0.8';
import type { GUPnP } from './GUPnP-1.0';
import type { libxml2 } from './libxml2-2.0';
// WARN: Dependency not found: 'GstPbutils-0.10'
// WARN: Dependency not found: 'Gst-0.10'
import type { GModule } from './GModule-2.0';
import type { Soup } from './Soup-2.4';
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
export enum HTTPSeekType {
    BYTE,
    TIME,
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
export enum HTTPSeekError {
    INVALID_RANGE,
    OUT_OF_RANGE,
}
export enum DataSourceError {
    GENERAL,
    SEEK_FAILED,
}
export interface SearchableContainer_ConstructProps extends MediaContainer_ConstructProps {
    searchClasses?: Gee.ArrayList
}
export class SearchableContainer {
    /* Properties of RygelServer-2.4.RygelServer.SearchableContainer */
    searchClasses: Gee.ArrayList
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parentInstance: MediaObject
    priv: MediaContainerPrivate
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    simpleSearch(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    simpleSearchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    findObject(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    getSearchClasses(): Gee.ArrayList
    setSearchClasses(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: SearchableContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: SearchableContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub_tree_updates_finished", subTreeRoot: MediaObject): void
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
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parentInstance: MediaObject
    priv: MediaContainerPrivate
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.TrackableContainer */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Signals of RygelServer-2.4.RygelServer.TrackableContainer */
    connect(sigName: "child_added", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    on(sigName: "child_added", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child_added", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child_added", callback: (object: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "child_added", object: MediaObject): void
    connect(sigName: "child_removed", callback: (($obj: TrackableContainer, object: MediaObject) => void)): number
    on(sigName: "child_removed", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child_removed", callback: (object: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child_removed", callback: (object: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "child_removed", object: MediaObject): void
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: TrackableContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: TrackableContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub_tree_updates_finished", subTreeRoot: MediaObject): void
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
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    parentInstance: MediaObject
    priv: MediaItemPrivate
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.TrackableItem */
    changed(): void
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface VisualItem_ConstructProps extends MediaItem_ConstructProps {
    width?: number
    height?: number
    colorDepth?: number
    thumbnails?: Gee.ArrayList
}
export class VisualItem {
    /* Properties of RygelServer-2.4.RygelServer.VisualItem */
    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    parentInstance: MediaObject
    priv: MediaItemPrivate
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.VisualItem */
    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getThumbnails(): Gee.ArrayList
    setThumbnails(value: Gee.ArrayList): void
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Properties of RygelServer-2.4.RygelServer.WritableContainer */
    createClasses: Gee.ArrayList
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parentInstance: MediaObject
    priv: MediaContainerPrivate
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.WritableContainer */
    canCreate(upnpClass: string): boolean
    addItem(item: MediaItem, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: WritableContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: WritableContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub_tree_updates_finished", subTreeRoot: MediaObject): void
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
    /* Methods of RygelServer-2.4.RygelServer.DataSource */
    start(offsets?: HTTPSeek | null): void
    freeze(): void
    thaw(): void
    stop(): void
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
    /* Signals of RygelServer-2.4.RygelServer.DataSource */
    connect(sigName: "data_available", callback: (($obj: DataSource, data: any[]) => void)): number
    on(sigName: "data_available", callback: (data: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data_available", callback: (data: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data_available", callback: (data: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "data_available", data: any[]): void
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
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentInstance: GObject.Object
    priv: MediaObjectPrivate
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.UpdatableObject */
    commit(callback?: Gio.AsyncReadyCallback | null): void
    commitFinish(res: Gio.AsyncResult): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
export interface AudioItem_ConstructProps extends MediaItem_ConstructProps {
    duration?: number
    bitrate?: number
    sampleFreq?: number
    bitsPerSample?: number
    channels?: number
    album?: string
}
export class AudioItem {
    /* Properties of RygelServer-2.4.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.AudioItem */
    parentInstance: MediaItem
    priv: AudioItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.AudioItem */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
export interface ImageItem_ConstructProps extends MediaItem_ConstructProps {
    width?: number
    height?: number
    colorDepth?: number
    thumbnails?: Gee.ArrayList
}
export class ImageItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Properties of RygelServer-2.4.RygelServer.VisualItem */
    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.ImageItem */
    parentInstance: MediaItem
    priv: ImageItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Methods of RygelServer-2.4.RygelServer.VisualItem */
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
export interface MediaArtStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaArtStore {
    /* Fields of RygelServer-2.4.RygelServer.MediaArtStore */
    parentInstance: GObject.Object
    priv: MediaArtStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaArtStore */
    findMediaArt(item: MusicItem, simple: boolean): Thumbnail | null
    findMediaArtAny(item: MusicItem): Thumbnail | null
    getMediaArtFile(type: string, item: MusicItem, simple: boolean): Gio.File | null
    add(item: MusicItem, file: Gio.File, data: any[] | null): void
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
    /* Fields of RygelServer-2.4.RygelServer.MediaObjects */
    parentInstance: Gee.ArrayList
    priv: MediaObjectsPrivate
    /* Fields of Gee-0.8.Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaObjects */
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
    /* Properties of RygelServer-2.4.RygelServer.MusicItem */
    trackNumber: number
    albumArt: Thumbnail
    /* Properties of RygelServer-2.4.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MusicItem */
    parentInstance: AudioItem
    priv: MusicItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MusicItem */
    lookupAlbumArt(): void
    getTrackNumber(): number
    setTrackNumber(value: number): void
    getAlbumArt(): Thumbnail
    setAlbumArt(value: Thumbnail): void
    /* Methods of RygelServer-2.4.RygelServer.AudioItem */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.PhotoItem */
    parentInstance: ImageItem
    priv: PhotoItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
export interface SimpleContainer_ConstructProps extends MediaContainer_ConstructProps {
    searchClasses?: Gee.ArrayList
}
export class SimpleContainer {
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Properties of RygelServer-2.4.RygelServer.SearchableContainer */
    searchClasses: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.SimpleContainer */
    parentInstance: MediaContainer
    priv: SimpleContainerPrivate
    children: MediaObjects
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.SimpleContainer */
    addChildItem(child: MediaItem): void
    getAllChildren(): MediaObjects
    addChildContainer(child: MediaContainer): void
    removeChild(child: MediaObject): void
    clear(): void
    isChildIdUnique(childId: string): boolean
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Methods of RygelServer-2.4.RygelServer.SearchableContainer */
    search(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    simpleSearch(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    simpleSearchFinish(res: Gio.AsyncResult): { returnType: MediaObjects | null, totalMatches: number }
    getSearchClasses(): Gee.ArrayList
    setSearchClasses(value: Gee.ArrayList): void
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: SimpleContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: SimpleContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub_tree_updates_finished", subTreeRoot: MediaObject): void
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
export interface VideoItem_ConstructProps extends AudioItem_ConstructProps {
    author?: string
    width?: number
    height?: number
    colorDepth?: number
    thumbnails?: Gee.ArrayList
}
export class VideoItem {
    /* Properties of RygelServer-2.4.RygelServer.VideoItem */
    author: string
    /* Properties of RygelServer-2.4.RygelServer.AudioItem */
    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Properties of RygelServer-2.4.RygelServer.VisualItem */
    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.VideoItem */
    parentInstance: AudioItem
    priv: VideoItemPrivate
    subtitles: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.VideoItem */
    getAuthor(): string
    setAuthor(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.AudioItem */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Methods of RygelServer-2.4.RygelServer.VisualItem */
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
    /* Properties of RygelServer-2.4.RygelServer.MediaContainer */
    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaContainer */
    parentInstance: MediaObject
    priv: MediaContainerPrivate
    updateId: number
    storageUsed: number
    totalDeletedChildCount: number
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaContainer */
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
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Signals of RygelServer-2.4.RygelServer.MediaContainer */
    connect(sigName: "container_updated", callback: (($obj: MediaContainer, container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void)): number
    on(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container_updated", callback: (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "container_updated", container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    connect(sigName: "sub_tree_updates_finished", callback: (($obj: MediaContainer, subTreeRoot: MediaObject) => void)): number
    on(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub_tree_updates_finished", callback: (subTreeRoot: MediaObject) => void): NodeJS.EventEmitter
    emit(sigName: "sub_tree_updates_finished", subTreeRoot: MediaObject): void
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
    static $gtype: GObject.Type
}
export interface MediaItem_ConstructProps extends MediaObject_ConstructProps {
    mimeType?: string
    dlnaProfile?: string
    size?: number
    placeHolder?: boolean
    description?: string
}
export class MediaItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    parentInstance: MediaObject
    priv: MediaItemPrivate
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mime-type", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::place-holder", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentInstance: GObject.Object
    priv: MediaObjectPrivate
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    static $gtype: GObject.Type
}
export interface MediaServerPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {
    rootContainer?: MediaContainer
    uploadProfiles?: any[]
    supportedProfiles?: any[]
}
export class MediaServerPlugin {
    /* Properties of RygelServer-2.4.RygelServer.MediaServerPlugin */
    readonly searchCaps: string
    uploadProfiles: any[]
    supportedProfiles: any[]
    /* Properties of RygelCore-2.4.RygelCore.Plugin */
    capabilities: RygelCore.PluginCapabilities
    title: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
    /* Fields of RygelServer-2.4.RygelServer.MediaServerPlugin */
    parentInstance: RygelCore.Plugin
    priv: MediaServerPluginPrivate
    /* Fields of GUPnP-1.0.GUPnP.ResourceFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaServerPlugin */
    getRootContainer(): MediaContainer
    getSearchCaps(): string
    getUploadProfiles(): any[]
    setUploadProfiles(value: any[]): void
    getSupportedProfiles(): any[]
    setSupportedProfiles(value: any[]): void
    /* Methods of RygelCore-2.4.RygelCore.Plugin */
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
    /* Methods of GUPnP-1.0.GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
export interface TranscodeManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class TranscodeManager {
    /* Fields of RygelServer-2.4.RygelServer.TranscodeManager */
    parentInstance: GObject.Object
    priv: TranscodeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.TranscodeManager */
    createUriForItem(item: MediaItem, thumbnailIndex: number, subtitleIndex: number, transcodeTarget?: string | null, playlistTarget?: string | null): string
    addResources(didlItem: GUPnPAV.DIDLLiteItem, item: MediaItem): void
    getTranscoder(target: string): Transcoder
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TranscodeManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TranscodeManager_ConstructProps)
    _init (config?: TranscodeManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transcoder_ConstructProps extends GObject.Object_ConstructProps {
    mimeType?: string
    dlnaProfile?: string
    extension?: string
}
export class Transcoder {
    /* Fields of RygelServer-2.4.RygelServer.Transcoder */
    parentInstance: GObject.Object
    priv: TranscoderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.Transcoder */
    createSource(item: MediaItem, src: DataSource): DataSource
    addResource(didlItem: GUPnPAV.DIDLLiteItem, item: MediaItem, manager: TranscodeManager): GUPnPAV.DIDLLiteResource | null
    canHandle(target: string): boolean
    getDistance(item: MediaItem): number
    mimeTypeIsA(mimeType1: string, mimeType2: string): boolean
    getMimeType(): string
    getDlnaProfile(): string
    getExtension(): string
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Transcoder_ConstructProps)
    _init (config?: Transcoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaServer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {
    rootContainer?: MediaContainer
}
export class MediaServer {
    /* Properties of RygelCore-2.4.RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of RygelServer-2.4.RygelServer.MediaServer */
    parentInstance: RygelCore.MediaDevice
    priv: MediaServerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.4.RygelCore.MediaDevice */
    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): RygelCore.Plugin
    setPlugin(value: RygelCore.Plugin): void
    getTitle(): string
    getCapabilities(): RygelCore.PluginCapabilities
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
    /* Fields of RygelServer-2.4.RygelServer.MediaEngine */
    parentInstance: GObject.Object
    priv: MediaEnginePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaEngine */
    getDlnaProfiles(): any[]
    getTranscoders(): Transcoder[] | null
    createDataSource(uri: string): DataSource | null
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
export interface HTTPSeek_ConstructProps extends GObject.Object_ConstructProps {
    seekType?: HTTPSeekType
    msg?: Soup.Message
    start?: number
    stop?: number
    step?: number
    length?: number
    totalLength?: number
}
export class HTTPSeek {
    /* Properties of RygelServer-2.4.RygelServer.HTTPSeek */
    seekType: HTTPSeekType
    msg: Soup.Message
    start: number
    stop: number
    step: number
    length: number
    totalLength: number
    /* Fields of RygelServer-2.4.RygelServer.HTTPSeek */
    parentInstance: GObject.Object
    priv: HTTPSeekPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.HTTPSeek */
    addResponseHeaders(): void
    getSeekType(): HTTPSeekType
    setSeekType(value: HTTPSeekType): void
    getMsg(): Soup.Message
    getStart(): number
    getStop(): number
    getStep(): number
    getLength(): number
    getTotalLength(): number
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::seek-type", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-type", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seek-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seek-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seek-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::msg", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::msg", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::msg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::msg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::msg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stop", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::step", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-length", callback: (($obj: HTTPSeek, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HTTPSeek_ConstructProps)
    _init (config?: HTTPSeek_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaylistItem_ConstructProps extends MediaItem_ConstructProps {
}
export class PlaylistItem {
    /* Properties of RygelServer-2.4.RygelServer.MediaItem */
    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean
    description: string
    /* Properties of RygelServer-2.4.RygelServer.MediaObject */
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
    /* Fields of RygelServer-2.4.RygelServer.PlaylistItem */
    parentInstance: MediaItem
    priv: PlaylistItemPrivate
    /* Fields of RygelServer-2.4.RygelServer.MediaItem */
    rygelMediaItemAddressRegex: GLib.Regex
    /* Fields of RygelServer-2.4.RygelServer.MediaObject */
    parentPtr: MediaContainer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.MediaItem */
    createStreamSource(hostIp?: string | null): DataSource | null
    isLiveStream(): boolean
    streamable(): boolean
    getProtocolInfo(uri: string | null, protocol: string): GUPnPAV.ProtocolInfo
    addResources(didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void
    getDescription(): string
    setDescription(value: string): void
    /* Methods of RygelServer-2.4.RygelServer.MediaObject */
    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
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
    /* Fields of RygelServer-2.4.RygelServer.ContentDirectory */
    parentInstance: GUPnP.Service
    priv: ContentDirectoryPrivate
    featureList: string
    rootContainer: MediaContainer
    systemUpdateId: number
    /* Fields of GUPnP-1.0.GUPnP.Service */
    parent: GUPnP.ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    getContext(): GUPnP.Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospection(): GUPnP.ServiceIntrospection
    getIntrospectionAsync(callback: GUPnP.ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GUPnP-1.0.GUPnP.Service */
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
export interface HTTPServer_ConstructProps extends TranscodeManager_ConstructProps {
    pathRoot?: string
}
export class HTTPServer {
    /* Properties of RygelServer-2.4.RygelServer.HTTPServer */
    pathRoot: string
    /* Fields of RygelServer-2.4.RygelServer.HTTPServer */
    parentInstance: TranscodeManager
    priv: HTTPServerPrivate
    rootContainer: MediaContainer
    context: GUPnP.Context
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.HTTPServer */
    needProxy(uri: string): boolean
    getPathRoot(): string
    /* Methods of RygelServer-2.4.RygelServer.TranscodeManager */
    createUriForItem(item: MediaItem, thumbnailIndex: number, subtitleIndex: number, transcodeTarget?: string | null, playlistTarget?: string | null): string
    addResources(didlItem: GUPnPAV.DIDLLiteItem, item: MediaItem): void
    getTranscoder(target: string): Transcoder
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Serializer_ConstructProps extends GObject.Object_ConstructProps {
    serializerType?: SerializerType
}
export class Serializer {
    /* Fields of RygelServer-2.4.RygelServer.Serializer */
    parentInstance: GObject.Object
    priv: SerializerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelServer-2.4.RygelServer.Serializer */
    addItem(): GUPnPAV.DIDLLiteItem | null
    addContainer(): GUPnPAV.DIDLLiteContainer | null
    filter(filterString: string): void
    getString(): string
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
export abstract class AudioItemClass {
    /* Fields of RygelServer-2.4.RygelServer.AudioItemClass */
    parentClass: MediaItemClass
    static name: string
}
export class AudioItemPrivate {
    static name: string
}
export abstract class ImageItemClass {
    /* Fields of RygelServer-2.4.RygelServer.ImageItemClass */
    parentClass: MediaItemClass
    static name: string
}
export class ImageItemPrivate {
    static name: string
}
export class LogicalExpression {
    static name: string
    static new(): LogicalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LogicalExpression
}
export abstract class MediaArtStoreClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaArtStoreClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MediaArtStorePrivate {
    static name: string
}
export abstract class MediaObjectsClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaObjectsClass */
    parentClass: Gee.ArrayListClass
    static name: string
}
export class MediaObjectsPrivate {
    static name: string
}
export abstract class MusicItemClass {
    /* Fields of RygelServer-2.4.RygelServer.MusicItemClass */
    parentClass: AudioItemClass
    static name: string
}
export class MusicItemPrivate {
    static name: string
}
export abstract class PhotoItemClass {
    /* Fields of RygelServer-2.4.RygelServer.PhotoItemClass */
    parentClass: ImageItemClass
    static name: string
}
export class PhotoItemPrivate {
    static name: string
}
export class RelationalExpression {
    /* Methods of RygelServer-2.4.RygelServer.RelationalExpression */
    compareString(str?: string | null): boolean
    compareInt(integer: number): boolean
    compareUint(integer: number): boolean
    static name: string
    static new(): RelationalExpression
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RelationalExpression
}
export abstract class SimpleContainerClass {
    /* Fields of RygelServer-2.4.RygelServer.SimpleContainerClass */
    parentClass: MediaContainerClass
    static name: string
}
export class SimpleContainerPrivate {
    static name: string
}
export class Subtitle {
    /* Fields of RygelServer-2.4.RygelServer.Subtitle */
    uri: string
    mimeType: string
    captionType: string
    size: number
    static name: string
    static new(mimeType: string, captionType: string): Subtitle
    constructor(mimeType: string, captionType: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string, captionType: string): Subtitle
}
export class Thumbnail {
    /* Fields of RygelServer-2.4.RygelServer.Thumbnail */
    dlnaProfile: string
    static name: string
    static new(mimeType: string, dlnaProfile: string, fileExtension: string): Thumbnail
    constructor(mimeType: string, dlnaProfile: string, fileExtension: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string, dlnaProfile: string, fileExtension: string): Thumbnail
}
export abstract class VideoItemClass {
    /* Fields of RygelServer-2.4.RygelServer.VideoItemClass */
    parentClass: AudioItemClass
    static name: string
}
export class VideoItemPrivate {
    static name: string
}
export abstract class MediaContainerClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaContainerClass */
    parentClass: MediaObjectClass
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
    /* Fields of RygelServer-2.4.RygelServer.MediaItemClass */
    parentClass: MediaObjectClass
    createStreamSource: (self: MediaItem, hostIp?: string | null) => DataSource | null
    streamable: (self: MediaItem) => boolean
    addProxyResources: (self: MediaItem, server: HTTPServer, didlItem: GUPnPAV.DIDLLiteItem) => void
    getProtocolInfo: (self: MediaItem, uri: string | null, protocol: string) => GUPnPAV.ProtocolInfo
    addResources: (self: MediaItem, didlItem: GUPnPAV.DIDLLiteItem, allowInternal: boolean) => void
    static name: string
}
export class MediaItemPrivate {
    static name: string
}
export abstract class MediaObjectClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaObjectClass */
    parentClass: GObject.ObjectClass
    addUri: (self: MediaObject, uri: string) => void
    serialize: (self: MediaObject, serializer: Serializer, httpServer: HTTPServer) => GUPnPAV.DIDLLiteObject | null
    applyDidlLite: (self: MediaObject, didlObject: GUPnPAV.DIDLLiteObject) => void
    compareByProperty: (self: MediaObject, mediaObject: MediaObject, property: string) => number
    addResource: (self: MediaObject, object: GUPnPAV.DIDLLiteObject, uri: string | null, protocol: string, importUri?: string | null) => GUPnPAV.DIDLLiteResource
    static name: string
}
export class MediaObjectPrivate {
    static name: string
}
export abstract class MediaServerPluginClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaServerPluginClass */
    parentClass: RygelCore.PluginClass
    static name: string
}
export class MediaServerPluginPrivate {
    static name: string
}
export class SearchExpression {
    /* Fields of RygelServer-2.4.RygelServer.SearchExpression */
    op: object | null
    operand1: object | null
    operand2: object | null
    /* Methods of RygelServer-2.4.RygelServer.SearchExpression */
    satisfiedBy(mediaObject: MediaObject): boolean
    toString(): string
    static name: string
}
export abstract class TranscodeManagerClass {
    /* Fields of RygelServer-2.4.RygelServer.TranscodeManagerClass */
    parentClass: GObject.ObjectClass
    createUriForItem: (self: TranscodeManager, item: MediaItem, thumbnailIndex: number, subtitleIndex: number, transcodeTarget?: string | null, playlistTarget?: string | null) => string
    getProtocol: (self: TranscodeManager) => string
    getProtocolInfo: (self: TranscodeManager) => Gee.ArrayList
    static name: string
}
export class TranscodeManagerPrivate {
    static name: string
}
export abstract class TranscoderClass {
    /* Fields of RygelServer-2.4.RygelServer.TranscoderClass */
    parentClass: GObject.ObjectClass
    createSource: (self: Transcoder, item: MediaItem, src: DataSource) => DataSource
    addResource: (self: Transcoder, didlItem: GUPnPAV.DIDLLiteItem, item: MediaItem, manager: TranscodeManager) => GUPnPAV.DIDLLiteResource | null
    getDistance: (self: Transcoder, item: MediaItem) => number
    static name: string
}
export class TranscoderPrivate {
    static name: string
}
export abstract class MediaServerClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaServerClass */
    parentClass: RygelCore.MediaDeviceClass
    static name: string
}
export class MediaServerPrivate {
    static name: string
}
export abstract class MediaEngineClass {
    /* Fields of RygelServer-2.4.RygelServer.MediaEngineClass */
    parentClass: GObject.ObjectClass
    getDlnaProfiles: (self: MediaEngine) => any[]
    getTranscoders: (self: MediaEngine) => Transcoder[] | null
    createDataSource: (self: MediaEngine, uri: string) => DataSource | null
    static name: string
}
export class MediaEnginePrivate {
    static name: string
}
export abstract class HTTPSeekClass {
    /* Fields of RygelServer-2.4.RygelServer.HTTPSeekClass */
    parentClass: GObject.ObjectClass
    addResponseHeaders: (self: HTTPSeek) => void
    static name: string
}
export class HTTPSeekPrivate {
    static name: string
}
export abstract class PlaylistItemClass {
    /* Fields of RygelServer-2.4.RygelServer.PlaylistItemClass */
    parentClass: MediaItemClass
    static name: string
}
export class PlaylistItemPrivate {
    static name: string
}
export abstract class ContentDirectoryClass {
    /* Fields of RygelServer-2.4.RygelServer.ContentDirectoryClass */
    parentClass: GUPnP.ServiceClass
    static name: string
}
export class ContentDirectoryPrivate {
    static name: string
}
export abstract class HTTPServerClass {
    /* Fields of RygelServer-2.4.RygelServer.HTTPServerClass */
    parentClass: TranscodeManagerClass
    static name: string
}
export class HTTPServerPrivate {
    static name: string
}
export abstract class SerializerClass {
    /* Fields of RygelServer-2.4.RygelServer.SerializerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SerializerPrivate {
    static name: string
}
export abstract class SearchableContainerIface {
    /* Fields of RygelServer-2.4.RygelServer.SearchableContainerIface */
    parentIface: GObject.TypeInterface
    search: (self: SearchableContainer, expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: SearchableContainer, res: Gio.AsyncResult) => { returnType: MediaObjects | null, totalMatches: number }
    getSearchClasses: (self: SearchableContainer) => Gee.ArrayList
    setSearchClasses: (self: SearchableContainer, value: Gee.ArrayList) => void
    static name: string
}
export abstract class TrackableContainerIface {
    /* Fields of RygelServer-2.4.RygelServer.TrackableContainerIface */
    parentIface: GObject.TypeInterface
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
    /* Fields of RygelServer-2.4.RygelServer.TrackableItemIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class VisualItemIface {
    /* Fields of RygelServer-2.4.RygelServer.VisualItemIface */
    parentIface: GObject.TypeInterface
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
    /* Fields of RygelServer-2.4.RygelServer.WritableContainerIface */
    parentIface: GObject.TypeInterface
    addItem: (self: WritableContainer, item: MediaItem, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
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
    /* Fields of RygelServer-2.4.RygelServer.DataSourceIface */
    parentIface: GObject.TypeInterface
    start: (self: DataSource, offsets?: HTTPSeek | null) => void
    freeze: (self: DataSource) => void
    thaw: (self: DataSource) => void
    stop: (self: DataSource) => void
    static name: string
}
export abstract class UpdatableObjectIface {
    /* Fields of RygelServer-2.4.RygelServer.UpdatableObjectIface */
    parentIface: GObject.TypeInterface
    commit: (self: UpdatableObject, callback?: Gio.AsyncReadyCallback | null) => void
    commitFinish: (self: UpdatableObject, res: Gio.AsyncResult) => void
    static name: string
}
}