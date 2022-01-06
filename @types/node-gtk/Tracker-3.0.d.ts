/**
 * Tracker-3.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Tracker {

export enum NotifierEventType {
    CREATE,
    DELETE,
    UPDATE,
}
export enum SparqlError {
    ERROR_CONSTRAINT,
    ERROR_INTERNAL,
    ERROR_NO_SPACE,
    ERROR_ONTOLOGY_NOT_FOUND,
    ERROR_OPEN_ERROR,
    ERROR_PARSE,
    ERROR_QUERY_FAILED,
    ERROR_TYPE,
    ERROR_UNKNOWN_CLASS,
    ERROR_UNKNOWN_GRAPH,
    ERROR_UNKNOWN_PROPERTY,
    ERROR_UNSUPPORTED,
    ERROR_MISSING_LAST_MODIFIED_HEADER,
    ERROR_INCOMPLETE_PROPERTY_DEFINITION,
    N_ERRORS,
}
export enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
export enum SparqlConnectionFlags {
    NONE,
    READONLY,
    FTS_ENABLE_STEMMER,
    FTS_ENABLE_UNACCENT,
    FTS_ENABLE_STOP_WORDS,
    FTS_IGNORE_NUMBERS,
    ANONYMOUS_BNODES,
}
export const PREFIX_DC: string
export const PREFIX_MFO: string
export const PREFIX_NAO: string
export const PREFIX_NCO: string
export const PREFIX_NFO: string
export const PREFIX_NIE: string
export const PREFIX_NMM: string
export const PREFIX_NRL: string
export const PREFIX_OSINFO: string
export const PREFIX_RDF: string
export const PREFIX_RDFS: string
export const PREFIX_SLO: string
export const PREFIX_TRACKER: string
export const PREFIX_XSD: string
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
export function sparqlErrorQuark(): GLib.Quark
export function sparqlEscapeString(literal: string): string
export function sparqlEscapeUri(uri: string): string
export function sparqlGetOntologyNepomuk(): Gio.File
export function sparqlGetUuidUrn(): string
export interface Batch_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
}
export class Batch {
    /* Fields of Tracker-3.0.Tracker.Batch */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Batch */
    addResource(graph: string, resource: Resource): void
    addSparql(sparql: string): void
    execute(cancellable?: Gio.Cancellable | null): boolean
    executeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(res: Gio.AsyncResult): boolean
    getConnection(): SparqlConnection
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
    connect(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Batch_ConstructProps)
    _init (config?: Batch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
    sparqlConnection?: SparqlConnection
}
export class Endpoint {
    /* Fields of Tracker-3.0.Tracker.Endpoint */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Endpoint */
    getSparqlConnection(): SparqlConnection
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
    connect(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Endpoint_ConstructProps)
    _init (config?: Endpoint_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EndpointDBus_ConstructProps extends Endpoint_ConstructProps {
    dbusConnection?: Gio.DBusConnection
    objectPath?: string
}
export class EndpointDBus {
    /* Fields of Tracker-3.0.Tracker.Endpoint */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Endpoint */
    getSparqlConnection(): SparqlConnection
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
    connect(sigName: "notify", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EndpointDBus_ConstructProps)
    _init (config?: EndpointDBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sparqlConnection: SparqlConnection, dbusConnection: Gio.DBusConnection, objectPath?: string | null, cancellable?: Gio.Cancellable | null): EndpointDBus
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface EndpointHttp_ConstructProps extends Endpoint_ConstructProps {
    httpCertificate?: Gio.TlsCertificate
    httpPort?: number
}
export class EndpointHttp {
    /* Fields of Tracker-3.0.Tracker.Endpoint */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Endpoint */
    getSparqlConnection(): SparqlConnection
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
    /* Signals of Tracker-3.0.Tracker.EndpointHttp */
    connect(sigName: "block-remote-address", callback: (($obj: EndpointHttp, object: Gio.SocketAddress) => boolean)): number
    on(sigName: "block-remote-address", callback: (object: Gio.SocketAddress) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "block-remote-address", callback: (object: Gio.SocketAddress) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "block-remote-address", callback: (object: Gio.SocketAddress) => void): NodeJS.EventEmitter
    emit(sigName: "block-remote-address", object: Gio.SocketAddress): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EndpointHttp_ConstructProps)
    _init (config?: EndpointHttp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sparqlConnection: SparqlConnection, port: number, certificate: Gio.TlsCertificate, cancellable?: Gio.Cancellable | null): EndpointHttp
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface NamespaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class NamespaceManager {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.NamespaceManager */
    addPrefix(prefix: string, ns: string): void
    compressUri(uri: string): string
    expandUri(compactUri: string): string
    foreach(func: GLib.HFunc): void
    hasPrefix(prefix: string): boolean
    lookupPrefix(prefix: string): string | null
    printTurtle(): string
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
    connect(sigName: "notify", callback: (($obj: NamespaceManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NamespaceManager_ConstructProps)
    _init (config?: NamespaceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NamespaceManager
    static getDefault(): NamespaceManager
    static $gtype: GObject.Type
}
export interface Notifier_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
}
export class Notifier {
    /* Fields of Tracker-3.0.Tracker.Notifier */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Notifier */
    signalSubscribe(connection: Gio.DBusConnection, service: string, objectPath?: string | null, graph?: string | null): number
    signalUnsubscribe(handlerId: number): void
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
    /* Signals of Tracker-3.0.Tracker.Notifier */
    connect(sigName: "events", callback: (($obj: Notifier, service: string, graph: string, events: NotifierEvent[]) => void)): number
    on(sigName: "events", callback: (service: string, graph: string, events: NotifierEvent[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events", callback: (service: string, graph: string, events: NotifierEvent[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events", callback: (service: string, graph: string, events: NotifierEvent[]) => void): NodeJS.EventEmitter
    emit(sigName: "events", service: string, graph: string, events: NotifierEvent[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Notifier_ConstructProps)
    _init (config?: Notifier_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Resource_ConstructProps extends GObject.Object_ConstructProps {
    identifier?: string
}
export class Resource {
    /* Properties of Tracker-3.0.Tracker.Resource */
    identifier: string
    /* Fields of Tracker-3.0.Tracker.Resource */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Resource */
    addBoolean(propertyUri: string, value: boolean): void
    addDatetime(propertyUri: string, value: GLib.DateTime): void
    addDouble(propertyUri: string, value: number): void
    addGvalue(propertyUri: string, value: any): void
    addInt(propertyUri: string, value: number): void
    addInt64(propertyUri: string, value: number): void
    addRelation(propertyUri: string, resource: Resource): void
    addString(propertyUri: string, value: string): void
    addUri(propertyUri: string, value: string): void
    getFirstBoolean(propertyUri: string): boolean
    getFirstDatetime(propertyUri: string): GLib.DateTime
    getFirstDouble(propertyUri: string): number
    getFirstInt(propertyUri: string): number
    getFirstInt64(propertyUri: string): number
    getFirstRelation(propertyUri: string): Resource
    getFirstString(propertyUri: string): string
    getFirstUri(propertyUri: string): string
    getIdentifier(): string
    getProperties(): string[]
    getPropertyOverwrite(propertyUri: string): boolean
    getValues(propertyUri: string): any[]
    identifierCompareFunc(identifier: string): number
    printJsonld(namespaces?: NamespaceManager | null): string
    printSparqlUpdate(namespaces?: NamespaceManager | null, graphId?: string | null): string
    printTurtle(namespaces?: NamespaceManager | null): string
    serialize(): GLib.Variant
    setBoolean(propertyUri: string, value: boolean): void
    setDatetime(propertyUri: string, value: GLib.DateTime): void
    setDouble(propertyUri: string, value: number): void
    setGvalue(propertyUri: string, value: any): void
    setIdentifier(identifier?: string | null): void
    setInt(propertyUri: string, value: number): void
    setInt64(propertyUri: string, value: number): void
    setRelation(propertyUri: string, resource: Resource): void
    setString(propertyUri: string, value: string): void
    setUri(propertyUri: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Resource_ConstructProps)
    _init (config?: Resource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(identifier?: string | null): Resource
    static deserialize(variant: GLib.Variant): Resource
    static $gtype: GObject.Type
}
export interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SparqlConnection {
    /* Fields of Tracker-3.0.Tracker.SparqlConnection */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.SparqlConnection */
    close(): void
    closeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): boolean
    createBatch(): Batch
    createNotifier(): Notifier
    getNamespaceManager(): NamespaceManager
    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    queryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(res: Gio.AsyncResult): SparqlCursor
    queryStatement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null
    update(sparql: string, cancellable?: Gio.Cancellable | null): void
    updateArrayAsync(sparql: string, sparqlLength: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateArrayFinish(res: Gio.AsyncResult): boolean
    updateAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateBlank(sparql: string, cancellable?: Gio.Cancellable | null): GLib.Variant
    updateBlankAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant
    updateFinish(res: Gio.AsyncResult): void
    updateResource(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null): boolean
    updateResourceAsync(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateResourceFinish(res: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SparqlConnection_ConstructProps)
    _init (config?: SparqlConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static busNew(serviceName: string, objectPath?: string | null, dbusConnection?: Gio.DBusConnection | null): SparqlConnection
    static busNewFinish(result: Gio.AsyncResult): SparqlConnection
    static new(flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null): SparqlConnection
    static newFinish(result: Gio.AsyncResult): SparqlConnection
    static remoteNew(uriBase: string): SparqlConnection
    static busNewAsync(serviceName: string, objectPath?: string | null, dbusConnection?: Gio.DBusConnection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newAsync(flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
}
export class SparqlCursor {
    /* Properties of Tracker-3.0.Tracker.SparqlCursor */
    readonly nColumns: number
    /* Fields of Tracker-3.0.Tracker.SparqlCursor */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.SparqlCursor */
    close(): void
    getBoolean(column: number): boolean
    getConnection(): SparqlConnection
    getDatetime(column: number): GLib.DateTime | null
    getDouble(column: number): number
    getInteger(column: number): number
    getNColumns(): number
    getString(column: number): { returnType: string | null, length: number | null }
    getValueType(column: number): SparqlValueType
    getVariableName(column: number): string
    isBound(column: number): boolean
    next(cancellable?: Gio.Cancellable | null): boolean
    nextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(res: Gio.AsyncResult): boolean
    rewind(): void
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
    connect(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparqlCursor_ConstructProps)
    _init (config?: SparqlCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SparqlStatement_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
    sparql?: string
}
export class SparqlStatement {
    /* Fields of Tracker-3.0.Tracker.SparqlStatement */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.SparqlStatement */
    bindBoolean(name: string, value: boolean): void
    bindDatetime(name: string, value: GLib.DateTime): void
    bindDouble(name: string, value: number): void
    bindInt(name: string, value: number): void
    bindString(name: string, value: string): void
    clearBindings(): void
    execute(cancellable?: Gio.Cancellable | null): SparqlCursor
    executeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(res: Gio.AsyncResult): SparqlCursor
    getConnection(): SparqlConnection
    getSparql(): string
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
    connect(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SparqlStatement_ConstructProps)
    _init (config?: SparqlStatement_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class BatchClass {
    static name: string
}
export abstract class EndpointClass {
    static name: string
}
export abstract class NamespaceManagerClass {
    /* Fields of Tracker-3.0.Tracker.NamespaceManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class NotifierClass {
    static name: string
}
export class NotifierEvent {
    /* Methods of Tracker-3.0.Tracker.NotifierEvent */
    getEventType(): NotifierEventType
    getId(): number
    getUrn(): string
    static name: string
}
export abstract class ResourceClass {
    static name: string
}
export abstract class SparqlConnectionClass {
    static name: string
}
export abstract class SparqlCursorClass {
    static name: string
}
export abstract class SparqlStatementClass {
    static name: string
}
}