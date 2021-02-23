/**
 * GFBGraph-0.2
 */

import "node"
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Rest } from './Rest-0.7';
import type { Json } from './Json-1.0';

export declare namespace GFBGraph {

export enum NodeError {
    CONNECTIONABLE,
    CONNECTABLE,
}
export function newRestCall(authorizer: Authorizer): Rest.ProxyCall
export class Authorizer {
    /* Methods of GFBGraph-0.2.GFBGraph.Authorizer */
    processCall(call: Rest.ProxyCall): void
    processMessage(message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    static name: string
}
export interface Connectable_ConstructProps extends Node_ConstructProps {
}
export class Connectable {
    /* Properties of GFBGraph-0.2.GFBGraph.Node */
    createdTime: string
    id: string
    link: string
    updatedTime: string
    /* Fields of GFBGraph-0.2.GFBGraph.Node */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GFBGraph-0.2.GFBGraph.Connectable */
    defaultParseConnectedData(payload: string): Node[]
    getConnectionPath(nodeType: GObject.Type): string
    getConnectionPostParams(nodeType: GObject.Type): GLib.HashTable
    isConnectableTo(nodeType: GObject.Type): boolean
    parseConnectedData(payload: string): Node[]
    /* Methods of GFBGraph-0.2.GFBGraph.Node */
    appendConnection(connectNode: Node, authorizer: Authorizer): boolean
    getConnectionNodes(nodeType: GObject.Type, authorizer: Authorizer): Node[]
    getConnectionNodesAsync(nodeType: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConnectionNodesAsyncFinish(result: Gio.AsyncResult): Node[]
    getCreatedTime(): string
    getId(): string
    getLink(): string
    getUpdatedTime(): string
    setId(id: string): void
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
    connect(sigName: "notify", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::link", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connectable_ConstructProps)
    _init (config?: Connectable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Album_ConstructProps extends Node_ConstructProps {
    count?: number
    coverPhoto?: string
    description?: string
    name?: string
}
export class Album {
    /* Properties of GFBGraph-0.2.GFBGraph.Album */
    count: number
    coverPhoto: string
    description: string
    name: string
    /* Properties of GFBGraph-0.2.GFBGraph.Node */
    createdTime: string
    id: string
    link: string
    updatedTime: string
    /* Fields of GFBGraph-0.2.GFBGraph.Album */
    parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GFBGraph-0.2.GFBGraph.Album */
    getCount(): number
    getCoverPhotoId(): string
    getDescription(): string
    getName(): string
    setDescription(description: string): void
    setName(name: string): void
    /* Methods of GFBGraph-0.2.GFBGraph.Node */
    appendConnection(connectNode: Node, authorizer: Authorizer): boolean
    getConnectionNodes(nodeType: GObject.Type, authorizer: Authorizer): Node[]
    getConnectionNodesAsync(nodeType: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConnectionNodesAsyncFinish(result: Gio.AsyncResult): Node[]
    getCreatedTime(): string
    getId(): string
    getLink(): string
    getUpdatedTime(): string
    setId(id: string): void
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
    /* Methods of GFBGraph-0.2.GFBGraph.Connectable */
    defaultParseConnectedData(payload: string): Node[]
    getConnectionPath(nodeType: GObject.Type): string
    getConnectionPostParams(nodeType: GObject.Type): GLib.HashTable
    isConnectableTo(nodeType: GObject.Type): boolean
    parseConnectedData(payload: string): Node[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::count", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cover-photo", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cover-photo", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cover-photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cover-photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cover-photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::link", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Album_ConstructProps)
    _init (config?: Album_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Album
    static newFromId(authorizer: Authorizer, id: string): Album
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.Type): Album
    static $gtype: GObject.Type
}
export interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
}
export class GoaAuthorizer {
    /* Fields of GFBGraph-0.2.GFBGraph.GoaAuthorizer */
    parent: GObject.Object
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
    /* Methods of GFBGraph-0.2.GFBGraph.Authorizer */
    processCall(call: Rest.ProxyCall): void
    processMessage(message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    createdTime?: string
    id?: string
    link?: string
    updatedTime?: string
}
export class Node {
    /* Properties of GFBGraph-0.2.GFBGraph.Node */
    createdTime: string
    id: string
    link: string
    updatedTime: string
    /* Fields of GFBGraph-0.2.GFBGraph.Node */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GFBGraph-0.2.GFBGraph.Node */
    appendConnection(connectNode: Node, authorizer: Authorizer): boolean
    getConnectionNodes(nodeType: GObject.Type, authorizer: Authorizer): Node[]
    getConnectionNodesAsync(nodeType: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConnectionNodesAsyncFinish(result: Gio.AsyncResult): Node[]
    getCreatedTime(): string
    getId(): string
    getLink(): string
    getUpdatedTime(): string
    setId(id: string): void
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
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::link", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Node
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.Type): Node
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Photo_ConstructProps extends Node_ConstructProps {
    height?: number
    images?: object
    name?: string
    source?: string
    width?: number
}
export class Photo {
    /* Properties of GFBGraph-0.2.GFBGraph.Photo */
    height: number
    images: object
    name: string
    source: string
    width: number
    /* Properties of GFBGraph-0.2.GFBGraph.Node */
    createdTime: string
    id: string
    link: string
    updatedTime: string
    /* Fields of GFBGraph-0.2.GFBGraph.Photo */
    parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GFBGraph-0.2.GFBGraph.Photo */
    downloadDefaultSize(authorizer: Authorizer): Gio.InputStream
    getDefaultHeight(): number
    getDefaultSourceUri(): string
    getDefaultWidth(): number
    getImageHires(): PhotoImage
    getImageNearHeight(height: number): PhotoImage
    getImageNearWidth(width: number): PhotoImage
    getImages(): PhotoImage[]
    getName(): string
    /* Methods of GFBGraph-0.2.GFBGraph.Node */
    appendConnection(connectNode: Node, authorizer: Authorizer): boolean
    getConnectionNodes(nodeType: GObject.Type, authorizer: Authorizer): Node[]
    getConnectionNodesAsync(nodeType: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConnectionNodesAsyncFinish(result: Gio.AsyncResult): Node[]
    getCreatedTime(): string
    getId(): string
    getLink(): string
    getUpdatedTime(): string
    setId(id: string): void
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
    /* Methods of GFBGraph-0.2.GFBGraph.Connectable */
    defaultParseConnectedData(payload: string): Node[]
    getConnectionPath(nodeType: GObject.Type): string
    getConnectionPostParams(nodeType: GObject.Type): GLib.HashTable
    isConnectableTo(nodeType: GObject.Type): boolean
    parseConnectedData(payload: string): Node[]
    /* Methods of Json-1.0.Json.Serializable */
    defaultDeserializeProperty(propertyName: string, value: any, pspec: GObject.ParamSpec, propertyNode: Json.Node): boolean
    defaultSerializeProperty(propertyName: string, value: any, pspec: GObject.ParamSpec): Json.Node | null
    deserializeProperty(propertyName: string, pspec: GObject.ParamSpec, propertyNode: Json.Node): { returnType: boolean, value: any }
    findProperty(name: string): GObject.ParamSpec | null
    getProperty(pspec: GObject.ParamSpec): { value: any }
    listProperties(): GObject.ParamSpec[]
    serializeProperty(propertyName: string, value: any, pspec: GObject.ParamSpec): Json.Node
    setProperty(pspec: GObject.ParamSpec, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::height", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::images", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::images", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::link", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Photo_ConstructProps)
    _init (config?: Photo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Photo
    static newFromId(authorizer: Authorizer, id: string): Photo
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.Type): Photo
    static $gtype: GObject.Type
}
export interface SimpleAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
    accessToken?: string
}
export class SimpleAuthorizer {
    /* Properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizer */
    accessToken: string
    /* Fields of GFBGraph-0.2.GFBGraph.SimpleAuthorizer */
    parent: GObject.Object
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
    /* Methods of GFBGraph-0.2.GFBGraph.Authorizer */
    processCall(call: Rest.ProxyCall): void
    processMessage(message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleAuthorizer_ConstructProps)
    _init (config?: SimpleAuthorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(accessToken: string): SimpleAuthorizer
    static $gtype: GObject.Type
}
export interface User_ConstructProps extends Node_ConstructProps {
    email?: string
    name?: string
}
export class User {
    /* Properties of GFBGraph-0.2.GFBGraph.User */
    email: string
    name: string
    /* Properties of GFBGraph-0.2.GFBGraph.Node */
    createdTime: string
    id: string
    link: string
    updatedTime: string
    /* Fields of GFBGraph-0.2.GFBGraph.User */
    parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GFBGraph-0.2.GFBGraph.User */
    getAlbums(authorizer: Authorizer): Album[]
    getAlbumsAsync(authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAlbumsAsyncFinish(result: Gio.AsyncResult): Album[]
    getEmail(): string
    getName(): string
    /* Methods of GFBGraph-0.2.GFBGraph.Node */
    appendConnection(connectNode: Node, authorizer: Authorizer): boolean
    getConnectionNodes(nodeType: GObject.Type, authorizer: Authorizer): Node[]
    getConnectionNodesAsync(nodeType: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConnectionNodesAsyncFinish(result: Gio.AsyncResult): Node[]
    getCreatedTime(): string
    getId(): string
    getLink(): string
    getUpdatedTime(): string
    setId(id: string): void
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
    connect(sigName: "notify", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::link", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: User_ConstructProps)
    _init (config?: User_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): User
    static newFromId(authorizer: Authorizer, id: string): User
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.Type): User
    static getMe(authorizer: Authorizer): User
    static getMeAsync(authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getMeAsyncFinish(authorizer: Authorizer, result: Gio.AsyncResult): User
    static $gtype: GObject.Type
}
export abstract class AlbumClass {
    /* Fields of GFBGraph-0.2.GFBGraph.AlbumClass */
    parentClass: NodeClass
    static name: string
}
export class AlbumPrivate {
    static name: string
}
export abstract class AuthorizerInterface {
    /* Fields of GFBGraph-0.2.GFBGraph.AuthorizerInterface */
    parent: GObject.TypeInterface
    processCall: (iface: Authorizer, call: Rest.ProxyCall) => void
    processMessage: (iface: Authorizer, message: Soup.Message) => void
    refreshAuthorization: (iface: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export abstract class ConnectableInterface {
    /* Fields of GFBGraph-0.2.GFBGraph.ConnectableInterface */
    parent: GObject.TypeInterface
    connections: GLib.HashTable
    getConnectionPostParams: (self: Connectable, nodeType: GObject.Type) => GLib.HashTable
    parseConnectedData: (self: Connectable, payload: string) => Node[]
    static name: string
}
export abstract class GoaAuthorizerClass {
    /* Fields of GFBGraph-0.2.GFBGraph.GoaAuthorizerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GoaAuthorizerPrivate {
    static name: string
}
export abstract class NodeClass {
    /* Fields of GFBGraph-0.2.GFBGraph.NodeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class NodePrivate {
    static name: string
}
export abstract class PhotoClass {
    /* Fields of GFBGraph-0.2.GFBGraph.PhotoClass */
    parentClass: NodeClass
    static name: string
}
export class PhotoImage {
    /* Fields of GFBGraph-0.2.GFBGraph.PhotoImage */
    width: number
    height: number
    source: string
    static name: string
}
export class PhotoPrivate {
    static name: string
}
export abstract class SimpleAuthorizerClass {
    /* Fields of GFBGraph-0.2.GFBGraph.SimpleAuthorizerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SimpleAuthorizerPrivate {
    static name: string
}
export abstract class UserClass {
    /* Fields of GFBGraph-0.2.GFBGraph.UserClass */
    parentClass: NodeClass
    static name: string
}
export class UserPrivate {
    static name: string
}
}