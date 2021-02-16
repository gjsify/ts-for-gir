/**
 * Tracker-2.0
 */

/// <reference types="node" />
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Tracker {

export enum NotifierEventType {
    CREATE,
    DELETE,
    UPDATE,
}
export enum SparqlConnectionFlags {
    NONE,
    READONLY,
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
export enum Error {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
export enum SparqlBuilderState {
    UPDATE,
    INSERT,
    DELETE,
    SUBJECT,
    PREDICATE,
    OBJECT,
    BLANK,
    WHERE,
    EMBEDDED_INSERT,
    GRAPH,
}
export enum NotifierFlags {
    NONE,
    QUERY_URN,
    QUERY_LOCATION,
    NOTIFY_UNEXTRACTED,
}
export const DBUS_SERVICE: string
export const DBUS_INTERFACE_RESOURCES: string
export const DBUS_OBJECT_RESOURCES: string
export const DBUS_INTERFACE_STATISTICS: string
export const DBUS_OBJECT_STATISTICS: string
export const DBUS_INTERFACE_STATUS: string
export const DBUS_OBJECT_STATUS: string
export const DBUS_INTERFACE_STEROIDS: string
export const DBUS_OBJECT_STEROIDS: string
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
export function sparqlEscapeUri(uri: string): string
export function sparqlEscapeString(literal: string): string
export function sparqlGetUuidUrn(): string
export interface NamespaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class NamespaceManager {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker.NamespaceManager */
    addPrefix(prefix: string, ns: string): void
    expandUri(compactUri: string): string
    foreach(func: GLib.HFunc): void
    hasPrefix(prefix: string): boolean
    lookupPrefix(prefix: string): string
    printTurtle(): string
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamespaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamespaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    classes?: string[]
}
export class Notifier {
    /* Fields of Tracker.Notifier */
    parentInstance: GObject.Object
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Tracker.Notifier */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Tracker.Notifier */
    connect(sigName: "events", callback: (($obj: Notifier, events: NotifierEvent[]) => void)): number
    connect_after(sigName: "events", callback: (($obj: Notifier, events: NotifierEvent[]) => void)): number
    emit(sigName: "events", events: NotifierEvent[]): void
    on(sigName: "events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(classes: string[] | null, flags: NotifierFlags, cancellable?: Gio.Cancellable | null): Notifier
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Resource_ConstructProps extends GObject.Object_ConstructProps {
    identifier?: string
}
export class Resource {
    /* Properties of Tracker.Resource */
    identifier: string
    /* Fields of Tracker.Resource */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker.Resource */
    addBoolean(propertyUri: string, value: boolean): void
    addDouble(propertyUri: string, value: number): void
    addGvalue(propertyUri: string, value: any): void
    addInt(propertyUri: string, value: number): void
    addInt64(propertyUri: string, value: number): void
    addRelation(propertyUri: string, resource: Resource): void
    addString(propertyUri: string, value: string): void
    addUri(propertyUri: string, value: string): void
    getFirstBoolean(propertyUri: string): boolean
    getFirstDouble(propertyUri: string): number
    getFirstInt(propertyUri: string): number
    getFirstInt64(propertyUri: string): number
    getFirstRelation(propertyUri: string): Resource
    getFirstString(propertyUri: string): string
    getFirstUri(propertyUri: string): string
    getIdentifier(): string
    getValues(propertyUri: string): any
    identifierCompareFunc(identifier: string): number
    printJsonld(namespaces?: NamespaceManager | null): string
    printSparqlUpdate(namespaces?: NamespaceManager | null, graphId?: string | null): string
    printTurtle(namespaces?: NamespaceManager | null): string
    setBoolean(propertyUri: string, value: boolean): void
    setDouble(propertyUri: string, value: number): void
    setGvalue(propertyUri: string, value: any): void
    setIdentifier(identifier?: string | null): void
    setInt(propertyUri: string, value: number): void
    setInt64(propertyUri: string, value: number): void
    setRelation(propertyUri: string, resource: Resource): void
    setString(propertyUri: string, value: string): void
    setUri(propertyUri: string, value: string): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(identifier: string): Resource
    static $gtype: GObject.Type
}
export interface SparqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class SparqlBuilder {
    /* Properties of Tracker.SparqlBuilder */
    readonly result: string
    length: number
    readonly state: Tracker_Vala.SparqlBuilderState
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker.SparqlBuilder */
    insertOpen(graph?: string | null): void
    insertSilentOpen(graph?: string | null): void
    insertClose(): void
    deleteOpen(graph?: string | null): void
    deleteClose(): void
    graphOpen(graph: string): void
    graphClose(): void
    whereOpen(): void
    whereClose(): void
    subjectVariable(varName: string): void
    objectVariable(varName: string): void
    subjectIri(iri: string): void
    subject(s: string): void
    predicateIri(iri: string): void
    predicate(s: string): void
    objectIri(iri: string): void
    object(s: string): void
    objectString(literal: string): void
    objectUnvalidated(value: string): void
    objectBoolean(literal: boolean): void
    objectInt64(literal: number): void
    objectDate(literal: number): /* literal */ number
    objectDouble(literal: number): void
    objectBlankOpen(): void
    objectBlankClose(): void
    prepend(raw: string): void
    append(raw: string): void
    getResult(): string
    getLength(): number
    getState(): Tracker_Vala.SparqlBuilderState
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparqlBuilder_ConstructProps)
    _init (config?: SparqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static update(): SparqlBuilder
    static embeddedInsert(): SparqlBuilder
    static new(): SparqlBuilder
    static $gtype: GObject.Type
}
export interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SparqlConnection {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker.SparqlConnection */
    query(sparql: string, cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor
    queryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlCursor
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    updateAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateFinish(res: Gio.AsyncResult): void
    updateArrayAsync(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateArrayFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlError[] | null
    updateBlank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    updateBlankAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    loadAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor | null
    statisticsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    statisticsFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlCursor | null
    getNamespaceManager(): NamespaceManager | null
    queryStatement(sparql: string, cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlStatement | null
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
    /* Virtual methods of Tracker.SparqlConnection */
    vfuncQuery(sparql: string, cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor
    vfuncQueryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncQueryFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlCursor
    vfuncUpdate(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    vfuncUpdateAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncUpdateFinish(res: Gio.AsyncResult): void
    vfuncUpdateArrayAsync(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncUpdateArrayFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlError[] | null
    vfuncUpdateBlank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    vfuncUpdateBlankAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncUpdateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    vfuncLoad(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    vfuncLoadAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLoadFinish(res: Gio.AsyncResult): void
    vfuncStatistics(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor | null
    vfuncStatisticsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncStatisticsFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlCursor | null
    vfuncGetNamespaceManager(): NamespaceManager | null
    vfuncQueryStatement(sparql: string, cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlStatement | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static getAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlConnection
    static get(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlConnection
    static remoteNew(uriBase: string): Tracker_Vala.SparqlConnection
    static localNew(flags: Tracker_Vala.SparqlConnectionFlags, store: Gio.File, journal?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlConnection
    static localNewAsync(flags: Tracker_Vala.SparqlConnectionFlags, store: Gio.File, journal?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static localNewFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlConnection
    static setDomain(domain?: string | null): void
    static getDomain(): string | null
    static setDbusConnection(dbusConnection: Gio.DBusConnection): void
    static getDbusConnection(): Gio.DBusConnection | null
    static $gtype: GObject.Type
}
export interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    connection?: Tracker_Vala.SparqlConnection
}
export class SparqlCursor {
    /* Properties of Tracker.SparqlCursor */
    connection: Tracker_Vala.SparqlConnection
    readonly nColumns: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker.SparqlCursor */
    getValueType(column: number): Tracker_Vala.SparqlValueType
    getVariableName(column: number): string | null
    getString(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable?: Gio.Cancellable | null): boolean
    nextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(res: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    getInteger(column: number): number
    getDouble(column: number): number
    getBoolean(column: number): boolean
    isBound(column: number): boolean
    getConnection(): Tracker_Vala.SparqlConnection
    setConnection(value: Tracker_Vala.SparqlConnection): void
    getNColumns(): number
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
    /* Virtual methods of Tracker.SparqlCursor */
    vfuncGetValueType(column: number): Tracker_Vala.SparqlValueType
    vfuncGetVariableName(column: number): string | null
    vfuncGetString(column: number): [ /* returnType */ string | null, /* length */ number ]
    vfuncNext(cancellable?: Gio.Cancellable | null): boolean
    vfuncNextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncNextFinish(res: Gio.AsyncResult): boolean
    vfuncRewind(): void
    vfuncClose(): void
    vfuncGetInteger(column: number): number
    vfuncGetDouble(column: number): number
    vfuncGetBoolean(column: number): boolean
    vfuncIsBound(column: number): boolean
    vfuncGetNColumns(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    sparql?: string
    connection?: Tracker_Vala.SparqlConnection
}
export class SparqlStatement {
    /* Properties of Tracker.SparqlStatement */
    sparql: string
    connection: Tracker_Vala.SparqlConnection
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker.SparqlStatement */
    bindInt(name: string, value: number): void
    bindBoolean(name: string, value: boolean): void
    bindString(name: string, value: string): void
    bindDouble(name: string, value: number): void
    execute(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor
    executeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlCursor
    getSparql(): string
    setSparql(value: string): void
    getConnection(): Tracker_Vala.SparqlConnection
    setConnection(value: Tracker_Vala.SparqlConnection): void
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
    /* Virtual methods of Tracker.SparqlStatement */
    vfuncBindInt(name: string, value: number): void
    vfuncBindBoolean(name: string, value: boolean): void
    vfuncBindString(name: string, value: string): void
    vfuncBindDouble(name: string, value: number): void
    vfuncExecute(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor
    vfuncExecuteAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncExecuteFinish(res: Gio.AsyncResult): Tracker_Vala.SparqlCursor
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export abstract class NamespaceManagerClass {
    /* Fields of Tracker.NamespaceManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class NotifierClass {
    /* Fields of Tracker.NotifierClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
export class NotifierEvent {
    /* Methods of Tracker.NotifierEvent */
    getEventType(): NotifierEventType
    getId(): number
    getLocation(): string | null
    getType(): string
    getUrn(): string
    static name: string
}
export abstract class ResourceClass {
    /* Fields of Tracker.ResourceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class SparqlBuilderClass {
    static name: string
}
export class SparqlBuilderPrivate {
    static name: string
}
export abstract class SparqlConnectionClass {
    /* Fields of Tracker.SparqlConnectionClass */
    query: (sparql: string, cancellable?: Gio.Cancellable | null) => Tracker_Vala.SparqlCursor
    queryAsync: (sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    queryFinish: (res: Gio.AsyncResult) => Tracker_Vala.SparqlCursor
    update: (sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => void
    updateAsync: (sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateFinish: (res: Gio.AsyncResult) => void
    updateArrayAsync: (sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateArrayFinish: (res: Gio.AsyncResult) => Tracker_Vala.SparqlError[] | null
    updateBlank: (sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => GLib.Variant | null
    updateBlankAsync: (sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateBlankFinish: (res: Gio.AsyncResult) => GLib.Variant | null
    load: (file: Gio.File, cancellable?: Gio.Cancellable | null) => void
    loadAsync: (file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    loadFinish: (res: Gio.AsyncResult) => void
    statistics: (cancellable?: Gio.Cancellable | null) => Tracker_Vala.SparqlCursor | null
    statisticsAsync: (cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    statisticsFinish: (res: Gio.AsyncResult) => Tracker_Vala.SparqlCursor | null
    getNamespaceManager: () => NamespaceManager | null
    queryStatement: (sparql: string, cancellable?: Gio.Cancellable | null) => Tracker_Vala.SparqlStatement | null
    static name: string
}
export class SparqlConnectionPrivate {
    static name: string
}
export abstract class SparqlCursorClass {
    /* Fields of Tracker.SparqlCursorClass */
    getValueType: (column: number) => Tracker_Vala.SparqlValueType
    getVariableName: (column: number) => string | null
    getString: (column: number) => [ /* returnType */ string | null, /* length */ number ]
    next: (cancellable?: Gio.Cancellable | null) => boolean
    nextAsync: (cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    nextFinish: (res: Gio.AsyncResult) => boolean
    rewind: () => void
    close: () => void
    getInteger: (column: number) => number
    getDouble: (column: number) => number
    getBoolean: (column: number) => boolean
    isBound: (column: number) => boolean
    static name: string
}
export class SparqlCursorPrivate {
    static name: string
}
export abstract class SparqlStatementClass {
    /* Fields of Tracker.SparqlStatementClass */
    bindInt: (name: string, value: number) => void
    bindBoolean: (name: string, value: boolean) => void
    bindString: (name: string, value: string) => void
    bindDouble: (name: string, value: number) => void
    execute: (cancellable?: Gio.Cancellable | null) => Tracker_Vala.SparqlCursor
    executeAsync: (cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeFinish: (res: Gio.AsyncResult) => Tracker_Vala.SparqlCursor
    static name: string
}
export class SparqlStatementPrivate {
    static name: string
}
}