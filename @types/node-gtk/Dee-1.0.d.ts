/**
 * Dee-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Dee {

export enum ICUError {
    BAD_RULE,
    BAD_ID,
    UNKNOWN,
}
export enum SharedModelAccessMode {
    WORLD_WRITABLE,
    LEADER_WRITABLE,
}
export enum SharedModelError {
    SHARED_MODEL_ERROR_LEADER_INVALIDATED,
}
export enum SharedModelFlushMode {
    AUTOMATIC,
    MANUAL,
}
export enum TransactionError {
    CONCURRENT_MODIFICATION,
    COMMITTED,
}
export enum TermMatchFlag {
    EXACT,
    PREFIX,
}
export const PEER_DBUS_IFACE: string
export const SEQUENCE_MODEL_DBUS_IFACE: string
export const SHARED_MODEL_DBUS_IFACE: string
export function filterNew(mapFunc: FilterMapFunc, mapNotify: FilterMapNotify): /* outFilter */ Filter
export function filterNewCollator(column: number): /* outFilter */ Filter
export function filterNewCollatorDesc(column: number): /* outFilter */ Filter
export function filterNewForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
export function filterNewForKeyColumn(column: number, key: string): /* outFilter */ Filter
export function filterNewRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
export function filterNewSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
export function icuErrorQuark(): GLib.Quark
export function modelReaderNew(readerFunc: ModelReaderFunc): /* outReader */ ModelReader
export function modelReaderNewForInt32Column(column: number): /* outReader */ ModelReader
export function modelReaderNewForStringColumn(column: number): /* outReader */ ModelReader
export function modelReaderNewForUint32Column(column: number): /* outReader */ ModelReader
export function resourceManagerGetDefault(): ResourceManager
export function serializableParse(data: GLib.Variant, type: GObject.Type): GObject.Object
export function serializableParseExternal(data: GLib.Variant): GObject.Object
export interface CollatorFunc {
    (input: string): string
}
export interface CompareRowFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
export interface CompareRowSizedFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
export interface FilterMapFunc {
    (origModel: Model, filterModel: FilterModel): void
}
export interface FilterMapNotify {
    (origModel: Model, origIter: ModelIter, filterModel: FilterModel): boolean
}
export interface IndexIterFunc {
    (key: string, rows: ResultSet): boolean
}
export interface ModelReaderFunc {
    (model: Model, iter: ModelIter): string
}
export interface SerializableParseFunc {
    (data: GLib.Variant): GObject.Object
}
export interface TermFilterFunc {
    (termsIn: TermList, termsOut: TermList): void
}
export class Model {
    /* Methods of Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Virtual methods of Dee.Model */
    vfuncAppendRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncBeginChangeset(): void
    vfuncChangesetFinished(): void
    vfuncChangesetStarted(): void
    vfuncClear(): void
    vfuncEndChangeset(): void
    vfuncFindRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    vfuncGetBool(iter: ModelIter, column: number): boolean
    vfuncGetColumnIndex(columnName: string): number
    vfuncGetColumnNames(): string[]
    vfuncGetColumnSchema(column: number): string
    vfuncGetDouble(iter: ModelIter, column: number): number
    vfuncGetFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    vfuncGetFirstIter(): ModelIter
    vfuncGetInt32(iter: ModelIter, column: number): number
    vfuncGetInt64(iter: ModelIter, column: number): number
    vfuncGetIterAtRow(row: number): ModelIter
    vfuncGetLastIter(): ModelIter
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetPosition(iter: ModelIter): number
    vfuncGetRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    vfuncGetSchema(): string[]
    vfuncGetString(iter: ModelIter, column: number): string
    vfuncGetTag(iter: ModelIter, tag: ModelTag): object | null
    vfuncGetUchar(iter: ModelIter, column: number): number
    vfuncGetUint32(iter: ModelIter, column: number): number
    vfuncGetUint64(iter: ModelIter, column: number): number
    vfuncGetValue(iter: ModelIter, column: number): GLib.Variant
    vfuncGetValueByName(iter: ModelIter, columnName: string): GLib.Variant
    vfuncGetVardictSchema(numColumn: number): GLib.HashTable
    vfuncInsertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    vfuncIsFirst(iter: ModelIter): boolean
    vfuncIsLast(iter: ModelIter): boolean
    vfuncNext(iter: ModelIter): ModelIter
    vfuncPrependRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncPrev(iter: ModelIter): ModelIter
    vfuncRegisterTag(tagDestroy: GLib.DestroyNotify): ModelTag
    vfuncRegisterVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    vfuncRemove(iter: ModelIter): void
    vfuncRowAdded(iter: ModelIter): void
    vfuncRowChanged(iter: ModelIter): void
    vfuncRowRemoved(iter: ModelIter): void
    vfuncSetColumnNamesFull(columnNames: string[]): void
    vfuncSetRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    vfuncSetSchemaFull(columnSchemas: string[]): void
    vfuncSetTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfuncSetValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: Model) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: Model) => void)): number
    emit(sigName: "changeset-finished"): void
    on(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changeset-started", callback: (($obj: Model) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: Model) => void)): number
    emit(sigName: "changeset-started"): void
    on(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-added", callback: (($obj: Model, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: Model, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    on(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-changed", callback: (($obj: Model, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: Model, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    on(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-removed", callback: (($obj: Model, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: Model, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    on(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class ResourceManager {
    /* Methods of Dee.ResourceManager */
    load(resourceName: string): GObject.Object
    store(resource: Serializable, resourceName: string): boolean
    /* Virtual methods of Dee.ResourceManager */
    vfuncLoad(resourceName: string): GObject.Object
    vfuncStore(resource: Serializable, resourceName: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): ResourceManager
}
export class ResultSet {
    /* Methods of Dee.ResultSet */
    getModel(): Model
    getNRows(): number
    hasNext(): boolean
    next(): ModelIter
    peek(): ModelIter
    seek(pos: number): void
    tell(): number
    /* Virtual methods of Dee.ResultSet */
    vfuncGetModel(): Model
    vfuncGetNRows(): number
    vfuncHasNext(): boolean
    vfuncNext(): ModelIter
    vfuncPeek(): ModelIter
    vfuncSeek(pos: number): void
    vfuncTell(): number
    static name: string
}
export class Serializable {
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.Serializable */
    vfuncSerialize(): GLib.Variant
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
}
export interface Analyzer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Analyzer {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Analyzer */
    addTermFilter(filterFunc: TermFilterFunc): void
    analyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    collateCmp(key1: string, key2: string): number
    collateKey(data: string): string
    tokenize(data: string, termsOut: TermList): void
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
    /* Virtual methods of Dee.Analyzer */
    vfuncAddTermFilter(filterFunc: TermFilterFunc): void
    vfuncAnalyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    vfuncCollateCmp(key1: string, key2: string): number
    vfuncCollateKey(data: string): string
    vfuncTokenize(data: string, termsOut: TermList): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Analyzer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Analyzer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Analyzer_ConstructProps)
    _init (config?: Analyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Analyzer
    static collateCmpFunc(key1: string, key2: string, analyzer?: object | null): number
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends Peer_ConstructProps {
    busAddress?: string
}
export class Client {
    /* Properties of Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Peer */
    getConnections(): Gio.DBusConnection[]
    getSwarmLeader(): string
    getSwarmName(): string
    isSwarmLeader(): boolean
    isSwarmOwner(): boolean
    listPeers(): string[]
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
    /* Virtual methods of Dee.Peer */
    vfuncConnectionAcquired(connection: Gio.DBusConnection): void
    vfuncConnectionClosed(connection: Gio.DBusConnection): void
    vfuncGetConnections(): Gio.DBusConnection[]
    vfuncGetSwarmLeader(): string
    vfuncIsSwarmLeader(): boolean
    vfuncListPeers(): string[]
    vfuncPeerFound(name: string): void
    vfuncPeerLost(name: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.Peer */
    connect(sigName: "connection-acquired", callback: (($obj: Client, object: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-acquired", callback: (($obj: Client, object: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    on(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-closed", callback: (($obj: Client, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Client, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    on(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "peer-found", callback: (($obj: Client, name: string) => void)): number
    connect_after(sigName: "peer-found", callback: (($obj: Client, name: string) => void)): number
    emit(sigName: "peer-found", name: string): void
    on(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "peer-lost", callback: (($obj: Client, name: string) => void)): number
    connect_after(sigName: "peer-lost", callback: (($obj: Client, name: string) => void)): number
    emit(sigName: "peer-lost", name: string): void
    on(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-leader", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Client
    static newForAddress(swarmName: string, busAddress: string): Client
    static $gtype: GObject.Type
}
export interface FileResourceManager_ConstructProps extends GObject.Object_ConstructProps {
    primaryPath?: string
}
export class FileResourceManager {
    /* Fields of Dee.FileResourceManager */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.FileResourceManager */
    addSearchPath(path: string): void
    getPrimaryPath(): string
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
    /* Methods of Dee.ResourceManager */
    load(resourceName: string): GObject.Object
    store(resource: Serializable, resourceName: string): boolean
    /* Virtual methods of Dee.FileResourceManager */
    vfuncLoad(resourceName: string): GObject.Object
    vfuncStore(resource: Serializable, resourceName: string): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileResourceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileResourceManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileResourceManager_ConstructProps)
    _init (config?: FileResourceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(primaryPath: string): FileResourceManager
    static getDefault(): ResourceManager
    static $gtype: GObject.Type
}
export interface FilterModel_ConstructProps extends ProxyModel_ConstructProps {
    filter?: Filter
}
export class FilterModel {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.FilterModel */
    appendIter(iter: ModelIter): ModelIter
    contains(iter: ModelIter): boolean
    insertIter(iter: ModelIter, pos: number): ModelIter
    insertIterBefore(iter: ModelIter, pos: ModelIter): ModelIter
    insertIterWithOriginalOrder(iter: ModelIter): ModelIter
    prependIter(iter: ModelIter): ModelIter
    /* Methods of Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfuncAppendRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncBeginChangeset(): void
    vfuncChangesetFinished(): void
    vfuncChangesetStarted(): void
    vfuncClear(): void
    vfuncEndChangeset(): void
    vfuncFindRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    vfuncGetBool(iter: ModelIter, column: number): boolean
    vfuncGetColumnIndex(columnName: string): number
    vfuncGetColumnNames(): string[]
    vfuncGetColumnSchema(column: number): string
    vfuncGetDouble(iter: ModelIter, column: number): number
    vfuncGetFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    vfuncGetFirstIter(): ModelIter
    vfuncGetInt32(iter: ModelIter, column: number): number
    vfuncGetInt64(iter: ModelIter, column: number): number
    vfuncGetIterAtRow(row: number): ModelIter
    vfuncGetLastIter(): ModelIter
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetPosition(iter: ModelIter): number
    vfuncGetRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    vfuncGetSchema(): string[]
    vfuncGetString(iter: ModelIter, column: number): string
    vfuncGetTag(iter: ModelIter, tag: ModelTag): object | null
    vfuncGetUchar(iter: ModelIter, column: number): number
    vfuncGetUint32(iter: ModelIter, column: number): number
    vfuncGetUint64(iter: ModelIter, column: number): number
    vfuncGetValue(iter: ModelIter, column: number): GLib.Variant
    vfuncGetValueByName(iter: ModelIter, columnName: string): GLib.Variant
    vfuncGetVardictSchema(numColumn: number): GLib.HashTable
    vfuncInsertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    vfuncIsFirst(iter: ModelIter): boolean
    vfuncIsLast(iter: ModelIter): boolean
    vfuncNext(iter: ModelIter): ModelIter
    vfuncPrependRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncPrev(iter: ModelIter): ModelIter
    vfuncRegisterTag(tagDestroy: GLib.DestroyNotify): ModelTag
    vfuncRegisterVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    vfuncRemove(iter: ModelIter): void
    vfuncRowAdded(iter: ModelIter): void
    vfuncRowChanged(iter: ModelIter): void
    vfuncRowRemoved(iter: ModelIter): void
    vfuncSetColumnNamesFull(columnNames: string[]): void
    vfuncSetRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    vfuncSetSchemaFull(columnSchemas: string[]): void
    vfuncSetTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfuncSetValue(iter: ModelIter, column: number, value: GLib.Variant): void
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: FilterModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: FilterModel) => void)): number
    emit(sigName: "changeset-finished"): void
    on(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changeset-started", callback: (($obj: FilterModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: FilterModel) => void)): number
    emit(sigName: "changeset-started"): void
    on(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-added", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    on(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-changed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    on(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-removed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: FilterModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    on(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterModel_ConstructProps)
    _init (config?: FilterModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(origModel: Model, filter: Filter): FilterModel
    static $gtype: GObject.Type
}
export interface GListResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class GListResultSet {
    /* Fields of Dee.GListResultSet */
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
    /* Methods of Dee.ResultSet */
    getModel(): Model
    getNRows(): number
    hasNext(): boolean
    next(): ModelIter
    peek(): ModelIter
    seek(pos: number): void
    tell(): number
    /* Virtual methods of Dee.GListResultSet */
    vfuncGetModel(): Model
    vfuncGetNRows(): number
    vfuncHasNext(): boolean
    vfuncNext(): ModelIter
    vfuncPeek(): ModelIter
    vfuncSeek(pos: number): void
    vfuncTell(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListResultSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GListResultSet_ConstructProps)
    _init (config?: GListResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HashIndex_ConstructProps extends Index_ConstructProps {
}
export class HashIndex {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Index */
    foreach(startTerm: string, func: IndexIterFunc): void
    getAnalyzer(): Analyzer
    getModel(): Model
    getNRows(): number
    getNRowsForTerm(term: string): number
    getNTerms(): number
    getReader(): ModelReader
    getSupportedTermMatchFlags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookupOne(term: string): ModelIter
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
    /* Virtual methods of Dee.Index */
    vfuncForeach(startTerm: string, func: IndexIterFunc): void
    vfuncGetNRows(): number
    vfuncGetNRowsForTerm(term: string): number
    vfuncGetNTerms(): number
    vfuncGetSupportedTermMatchFlags(): number
    vfuncLookup(term: string, flags: TermMatchFlag): ResultSet
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HashIndex, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: HashIndex_ConstructProps)
    _init (config?: HashIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends GObject.Object_ConstructProps {
    analyzer?: Analyzer
    model?: Model
    reader?: ModelReader
}
export class Index {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Index */
    foreach(startTerm: string, func: IndexIterFunc): void
    getAnalyzer(): Analyzer
    getModel(): Model
    getNRows(): number
    getNRowsForTerm(term: string): number
    getNTerms(): number
    getReader(): ModelReader
    getSupportedTermMatchFlags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookupOne(term: string): ModelIter
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
    /* Virtual methods of Dee.Index */
    vfuncForeach(startTerm: string, func: IndexIterFunc): void
    vfuncGetNRows(): number
    vfuncGetNRowsForTerm(term: string): number
    vfuncGetNTerms(): number
    vfuncGetSupportedTermMatchFlags(): number
    vfuncLookup(term: string, flags: TermMatchFlag): ResultSet
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Peer_ConstructProps extends GObject.Object_ConstructProps {
    swarmName?: string
    swarmOwner?: boolean
}
export class Peer {
    /* Properties of Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Peer */
    getConnections(): Gio.DBusConnection[]
    getSwarmLeader(): string
    getSwarmName(): string
    isSwarmLeader(): boolean
    isSwarmOwner(): boolean
    listPeers(): string[]
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
    /* Virtual methods of Dee.Peer */
    vfuncConnectionAcquired(connection: Gio.DBusConnection): void
    vfuncConnectionClosed(connection: Gio.DBusConnection): void
    vfuncGetConnections(): Gio.DBusConnection[]
    vfuncGetSwarmLeader(): string
    vfuncIsSwarmLeader(): boolean
    vfuncListPeers(): string[]
    vfuncPeerFound(name: string): void
    vfuncPeerLost(name: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.Peer */
    connect(sigName: "connection-acquired", callback: (($obj: Peer, object: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-acquired", callback: (($obj: Peer, object: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    on(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-closed", callback: (($obj: Peer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Peer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    on(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "peer-found", callback: (($obj: Peer, name: string) => void)): number
    connect_after(sigName: "peer-found", callback: (($obj: Peer, name: string) => void)): number
    emit(sigName: "peer-found", name: string): void
    on(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "peer-lost", callback: (($obj: Peer, name: string) => void)): number
    connect_after(sigName: "peer-lost", callback: (($obj: Peer, name: string) => void)): number
    emit(sigName: "peer-lost", name: string): void
    on(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-leader", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Peer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Peer_ConstructProps)
    _init (config?: Peer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Peer
    static $gtype: GObject.Type
}
export interface ProxyModel_ConstructProps extends SerializableModel_ConstructProps {
    backEnd?: Model
    inheritSeqnums?: boolean
    proxySignals?: boolean
}
export class ProxyModel {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfuncAppendRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncBeginChangeset(): void
    vfuncChangesetFinished(): void
    vfuncChangesetStarted(): void
    vfuncClear(): void
    vfuncEndChangeset(): void
    vfuncFindRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    vfuncGetBool(iter: ModelIter, column: number): boolean
    vfuncGetColumnIndex(columnName: string): number
    vfuncGetColumnNames(): string[]
    vfuncGetColumnSchema(column: number): string
    vfuncGetDouble(iter: ModelIter, column: number): number
    vfuncGetFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    vfuncGetFirstIter(): ModelIter
    vfuncGetInt32(iter: ModelIter, column: number): number
    vfuncGetInt64(iter: ModelIter, column: number): number
    vfuncGetIterAtRow(row: number): ModelIter
    vfuncGetLastIter(): ModelIter
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetPosition(iter: ModelIter): number
    vfuncGetRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    vfuncGetSchema(): string[]
    vfuncGetString(iter: ModelIter, column: number): string
    vfuncGetTag(iter: ModelIter, tag: ModelTag): object | null
    vfuncGetUchar(iter: ModelIter, column: number): number
    vfuncGetUint32(iter: ModelIter, column: number): number
    vfuncGetUint64(iter: ModelIter, column: number): number
    vfuncGetValue(iter: ModelIter, column: number): GLib.Variant
    vfuncGetValueByName(iter: ModelIter, columnName: string): GLib.Variant
    vfuncGetVardictSchema(numColumn: number): GLib.HashTable
    vfuncInsertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    vfuncIsFirst(iter: ModelIter): boolean
    vfuncIsLast(iter: ModelIter): boolean
    vfuncNext(iter: ModelIter): ModelIter
    vfuncPrependRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncPrev(iter: ModelIter): ModelIter
    vfuncRegisterTag(tagDestroy: GLib.DestroyNotify): ModelTag
    vfuncRegisterVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    vfuncRemove(iter: ModelIter): void
    vfuncRowAdded(iter: ModelIter): void
    vfuncRowChanged(iter: ModelIter): void
    vfuncRowRemoved(iter: ModelIter): void
    vfuncSetColumnNamesFull(columnNames: string[]): void
    vfuncSetRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    vfuncSetSchemaFull(columnSchemas: string[]): void
    vfuncSetTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfuncSetValue(iter: ModelIter, column: number, value: GLib.Variant): void
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: ProxyModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: ProxyModel) => void)): number
    emit(sigName: "changeset-finished"): void
    on(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changeset-started", callback: (($obj: ProxyModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: ProxyModel) => void)): number
    emit(sigName: "changeset-started"): void
    on(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-added", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    on(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-changed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    on(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-removed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: ProxyModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    on(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyModel_ConstructProps)
    _init (config?: ProxyModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SequenceModel_ConstructProps extends SerializableModel_ConstructProps {
}
export class SequenceModel {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfuncAppendRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncBeginChangeset(): void
    vfuncChangesetFinished(): void
    vfuncChangesetStarted(): void
    vfuncClear(): void
    vfuncEndChangeset(): void
    vfuncFindRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    vfuncGetBool(iter: ModelIter, column: number): boolean
    vfuncGetColumnIndex(columnName: string): number
    vfuncGetColumnNames(): string[]
    vfuncGetColumnSchema(column: number): string
    vfuncGetDouble(iter: ModelIter, column: number): number
    vfuncGetFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    vfuncGetFirstIter(): ModelIter
    vfuncGetInt32(iter: ModelIter, column: number): number
    vfuncGetInt64(iter: ModelIter, column: number): number
    vfuncGetIterAtRow(row: number): ModelIter
    vfuncGetLastIter(): ModelIter
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetPosition(iter: ModelIter): number
    vfuncGetRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    vfuncGetSchema(): string[]
    vfuncGetString(iter: ModelIter, column: number): string
    vfuncGetTag(iter: ModelIter, tag: ModelTag): object | null
    vfuncGetUchar(iter: ModelIter, column: number): number
    vfuncGetUint32(iter: ModelIter, column: number): number
    vfuncGetUint64(iter: ModelIter, column: number): number
    vfuncGetValue(iter: ModelIter, column: number): GLib.Variant
    vfuncGetValueByName(iter: ModelIter, columnName: string): GLib.Variant
    vfuncGetVardictSchema(numColumn: number): GLib.HashTable
    vfuncInsertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    vfuncIsFirst(iter: ModelIter): boolean
    vfuncIsLast(iter: ModelIter): boolean
    vfuncNext(iter: ModelIter): ModelIter
    vfuncPrependRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncPrev(iter: ModelIter): ModelIter
    vfuncRegisterTag(tagDestroy: GLib.DestroyNotify): ModelTag
    vfuncRegisterVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    vfuncRemove(iter: ModelIter): void
    vfuncRowAdded(iter: ModelIter): void
    vfuncRowChanged(iter: ModelIter): void
    vfuncRowRemoved(iter: ModelIter): void
    vfuncSetColumnNamesFull(columnNames: string[]): void
    vfuncSetRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    vfuncSetSchemaFull(columnSchemas: string[]): void
    vfuncSetTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfuncSetValue(iter: ModelIter, column: number, value: GLib.Variant): void
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SequenceModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SequenceModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: SequenceModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: SequenceModel) => void)): number
    emit(sigName: "changeset-finished"): void
    on(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changeset-started", callback: (($obj: SequenceModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: SequenceModel) => void)): number
    emit(sigName: "changeset-started"): void
    on(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-added", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    on(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-changed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    on(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-removed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: SequenceModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    on(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SequenceModel_ConstructProps)
    _init (config?: SequenceModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SequenceModel
    static $gtype: GObject.Type
}
export interface SerializableModel_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableModel {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfuncAppendRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncBeginChangeset(): void
    vfuncChangesetFinished(): void
    vfuncChangesetStarted(): void
    vfuncClear(): void
    vfuncEndChangeset(): void
    vfuncFindRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    vfuncGetBool(iter: ModelIter, column: number): boolean
    vfuncGetColumnIndex(columnName: string): number
    vfuncGetColumnNames(): string[]
    vfuncGetColumnSchema(column: number): string
    vfuncGetDouble(iter: ModelIter, column: number): number
    vfuncGetFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    vfuncGetFirstIter(): ModelIter
    vfuncGetInt32(iter: ModelIter, column: number): number
    vfuncGetInt64(iter: ModelIter, column: number): number
    vfuncGetIterAtRow(row: number): ModelIter
    vfuncGetLastIter(): ModelIter
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetPosition(iter: ModelIter): number
    vfuncGetRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    vfuncGetSchema(): string[]
    vfuncGetString(iter: ModelIter, column: number): string
    vfuncGetTag(iter: ModelIter, tag: ModelTag): object | null
    vfuncGetUchar(iter: ModelIter, column: number): number
    vfuncGetUint32(iter: ModelIter, column: number): number
    vfuncGetUint64(iter: ModelIter, column: number): number
    vfuncGetValue(iter: ModelIter, column: number): GLib.Variant
    vfuncGetValueByName(iter: ModelIter, columnName: string): GLib.Variant
    vfuncGetVardictSchema(numColumn: number): GLib.HashTable
    vfuncInsertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    vfuncIsFirst(iter: ModelIter): boolean
    vfuncIsLast(iter: ModelIter): boolean
    vfuncNext(iter: ModelIter): ModelIter
    vfuncPrependRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncPrev(iter: ModelIter): ModelIter
    vfuncRegisterTag(tagDestroy: GLib.DestroyNotify): ModelTag
    vfuncRegisterVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    vfuncRemove(iter: ModelIter): void
    vfuncRowAdded(iter: ModelIter): void
    vfuncRowChanged(iter: ModelIter): void
    vfuncRowRemoved(iter: ModelIter): void
    vfuncSetColumnNamesFull(columnNames: string[]): void
    vfuncSetRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    vfuncSetSchemaFull(columnSchemas: string[]): void
    vfuncSetTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfuncSetValue(iter: ModelIter, column: number, value: GLib.Variant): void
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: SerializableModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: SerializableModel) => void)): number
    emit(sigName: "changeset-finished"): void
    on(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changeset-started", callback: (($obj: SerializableModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: SerializableModel) => void)): number
    emit(sigName: "changeset-started"): void
    on(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-added", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    on(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-changed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    on(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-removed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: SerializableModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    on(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableModel_ConstructProps)
    _init (config?: SerializableModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends Peer_ConstructProps {
    busAddress?: string
    sameUserOnly?: boolean
}
export class Server {
    /* Properties of Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Server */
    getClientAddress(): string
    /* Methods of Dee.Peer */
    getConnections(): Gio.DBusConnection[]
    getSwarmLeader(): string
    getSwarmName(): string
    isSwarmLeader(): boolean
    isSwarmOwner(): boolean
    listPeers(): string[]
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
    /* Virtual methods of Dee.Peer */
    vfuncConnectionAcquired(connection: Gio.DBusConnection): void
    vfuncConnectionClosed(connection: Gio.DBusConnection): void
    vfuncGetConnections(): Gio.DBusConnection[]
    vfuncGetSwarmLeader(): string
    vfuncIsSwarmLeader(): boolean
    vfuncListPeers(): string[]
    vfuncPeerFound(name: string): void
    vfuncPeerLost(name: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.Peer */
    connect(sigName: "connection-acquired", callback: (($obj: Server, object: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-acquired", callback: (($obj: Server, object: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    on(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connection-closed", callback: (($obj: Server, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Server, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    on(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "peer-found", callback: (($obj: Server, name: string) => void)): number
    connect_after(sigName: "peer-found", callback: (($obj: Server, name: string) => void)): number
    emit(sigName: "peer-found", name: string): void
    on(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "peer-lost", callback: (($obj: Server, name: string) => void)): number
    connect_after(sigName: "peer-lost", callback: (($obj: Server, name: string) => void)): number
    emit(sigName: "peer-lost", name: string): void
    on(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-leader", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Server
    static newForAddress(swarmName: string, busAddress: string): Server
    static busAddressForName(name: string, includeUsername: boolean): string
    static $gtype: GObject.Type
}
export interface SharedModel_ConstructProps extends ProxyModel_ConstructProps {
    accessMode?: SharedModelAccessMode
    flushMode?: SharedModelFlushMode
    peer?: Peer
}
export class SharedModel {
    /* Properties of Dee.SharedModel */
    flushMode: SharedModelFlushMode
    readonly synchronized: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.SharedModel */
    flushRevisionQueue(): number
    flushRevisionQueueSync(): number
    getFlushMode(): SharedModelFlushMode
    getPeer(): Peer
    getSwarmName(): string
    isLeader(): boolean
    isSynchronized(): boolean
    setFlushMode(mode: SharedModelFlushMode): void
    /* Methods of Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfuncAppendRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncBeginChangeset(): void
    vfuncChangesetFinished(): void
    vfuncChangesetStarted(): void
    vfuncClear(): void
    vfuncEndChangeset(): void
    vfuncFindRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    vfuncGetBool(iter: ModelIter, column: number): boolean
    vfuncGetColumnIndex(columnName: string): number
    vfuncGetColumnNames(): string[]
    vfuncGetColumnSchema(column: number): string
    vfuncGetDouble(iter: ModelIter, column: number): number
    vfuncGetFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    vfuncGetFirstIter(): ModelIter
    vfuncGetInt32(iter: ModelIter, column: number): number
    vfuncGetInt64(iter: ModelIter, column: number): number
    vfuncGetIterAtRow(row: number): ModelIter
    vfuncGetLastIter(): ModelIter
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetPosition(iter: ModelIter): number
    vfuncGetRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    vfuncGetSchema(): string[]
    vfuncGetString(iter: ModelIter, column: number): string
    vfuncGetTag(iter: ModelIter, tag: ModelTag): object | null
    vfuncGetUchar(iter: ModelIter, column: number): number
    vfuncGetUint32(iter: ModelIter, column: number): number
    vfuncGetUint64(iter: ModelIter, column: number): number
    vfuncGetValue(iter: ModelIter, column: number): GLib.Variant
    vfuncGetValueByName(iter: ModelIter, columnName: string): GLib.Variant
    vfuncGetVardictSchema(numColumn: number): GLib.HashTable
    vfuncInsertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    vfuncIsFirst(iter: ModelIter): boolean
    vfuncIsLast(iter: ModelIter): boolean
    vfuncNext(iter: ModelIter): ModelIter
    vfuncPrependRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncPrev(iter: ModelIter): ModelIter
    vfuncRegisterTag(tagDestroy: GLib.DestroyNotify): ModelTag
    vfuncRegisterVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    vfuncRemove(iter: ModelIter): void
    vfuncRowAdded(iter: ModelIter): void
    vfuncRowChanged(iter: ModelIter): void
    vfuncRowRemoved(iter: ModelIter): void
    vfuncSetColumnNamesFull(columnNames: string[]): void
    vfuncSetRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    vfuncSetSchemaFull(columnSchemas: string[]): void
    vfuncSetTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfuncSetValue(iter: ModelIter, column: number, value: GLib.Variant): void
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Dee.SharedModel */
    connect(sigName: "begin-transaction", callback: (($obj: SharedModel, beginSeqnum: number, endSeqnum: number) => void)): number
    connect_after(sigName: "begin-transaction", callback: (($obj: SharedModel, beginSeqnum: number, endSeqnum: number) => void)): number
    emit(sigName: "begin-transaction", beginSeqnum: number, endSeqnum: number): void
    on(sigName: "begin-transaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "begin-transaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "begin-transaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "end-transaction", callback: (($obj: SharedModel, beginSeqnum: number, endSeqnum: number) => void)): number
    connect_after(sigName: "end-transaction", callback: (($obj: SharedModel, beginSeqnum: number, endSeqnum: number) => void)): number
    emit(sigName: "end-transaction", beginSeqnum: number, endSeqnum: number): void
    on(sigName: "end-transaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "end-transaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "end-transaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: SharedModel) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: SharedModel) => void)): number
    emit(sigName: "changeset-finished"): void
    on(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changeset-started", callback: (($obj: SharedModel) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: SharedModel) => void)): number
    emit(sigName: "changeset-started"): void
    on(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-added", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    on(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-changed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    on(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-removed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: SharedModel, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    on(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flush-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-mode", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::synchronized", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::synchronized", callback: (($obj: SharedModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SharedModel_ConstructProps)
    _init (config?: SharedModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): SharedModel
    static newForPeer(peer: Peer): SharedModel
    static newWithBackEnd(name: string, backEnd: Model): SharedModel
    static $gtype: GObject.Type
}
export interface TermList_ConstructProps extends GObject.Object_ConstructProps {
}
export class TermList {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.TermList */
    addTerm(term: string): TermList
    clear(): TermList
    clone(): TermList
    getTerm(n: number): string
    numTerms(): number
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
    /* Virtual methods of Dee.TermList */
    vfuncAddTerm(term: string): TermList
    vfuncClear(): TermList
    vfuncClone(): TermList
    vfuncGetTerm(n: number): string
    vfuncNumTerms(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TermList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TermList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TermList_ConstructProps)
    _init (config?: TermList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TextAnalyzer_ConstructProps extends Analyzer_ConstructProps {
}
export class TextAnalyzer {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Analyzer */
    addTermFilter(filterFunc: TermFilterFunc): void
    analyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    collateCmp(key1: string, key2: string): number
    collateKey(data: string): string
    tokenize(data: string, termsOut: TermList): void
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
    /* Virtual methods of Dee.Analyzer */
    vfuncAddTermFilter(filterFunc: TermFilterFunc): void
    vfuncAnalyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    vfuncCollateCmp(key1: string, key2: string): number
    vfuncCollateKey(data: string): string
    vfuncTokenize(data: string, termsOut: TermList): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextAnalyzer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextAnalyzer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TextAnalyzer_ConstructProps)
    _init (config?: TextAnalyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextAnalyzer
    static $gtype: GObject.Type
}
export interface Transaction_ConstructProps extends SerializableModel_ConstructProps {
    target?: Model
}
export class Transaction {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Transaction */
    commit(): boolean
    getTarget(): Model
    isCommitted(): boolean
    /* Methods of Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Dee.SerializableModel */
    vfuncAppendRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncBeginChangeset(): void
    vfuncChangesetFinished(): void
    vfuncChangesetStarted(): void
    vfuncClear(): void
    vfuncEndChangeset(): void
    vfuncFindRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    vfuncGetBool(iter: ModelIter, column: number): boolean
    vfuncGetColumnIndex(columnName: string): number
    vfuncGetColumnNames(): string[]
    vfuncGetColumnSchema(column: number): string
    vfuncGetDouble(iter: ModelIter, column: number): number
    vfuncGetFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    vfuncGetFirstIter(): ModelIter
    vfuncGetInt32(iter: ModelIter, column: number): number
    vfuncGetInt64(iter: ModelIter, column: number): number
    vfuncGetIterAtRow(row: number): ModelIter
    vfuncGetLastIter(): ModelIter
    vfuncGetNColumns(): number
    vfuncGetNRows(): number
    vfuncGetPosition(iter: ModelIter): number
    vfuncGetRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    vfuncGetSchema(): string[]
    vfuncGetString(iter: ModelIter, column: number): string
    vfuncGetTag(iter: ModelIter, tag: ModelTag): object | null
    vfuncGetUchar(iter: ModelIter, column: number): number
    vfuncGetUint32(iter: ModelIter, column: number): number
    vfuncGetUint64(iter: ModelIter, column: number): number
    vfuncGetValue(iter: ModelIter, column: number): GLib.Variant
    vfuncGetValueByName(iter: ModelIter, columnName: string): GLib.Variant
    vfuncGetVardictSchema(numColumn: number): GLib.HashTable
    vfuncInsertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    vfuncInsertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    vfuncIsFirst(iter: ModelIter): boolean
    vfuncIsLast(iter: ModelIter): boolean
    vfuncNext(iter: ModelIter): ModelIter
    vfuncPrependRow(rowMembers: GLib.Variant[]): ModelIter
    vfuncPrev(iter: ModelIter): ModelIter
    vfuncRegisterTag(tagDestroy: GLib.DestroyNotify): ModelTag
    vfuncRegisterVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    vfuncRemove(iter: ModelIter): void
    vfuncRowAdded(iter: ModelIter): void
    vfuncRowChanged(iter: ModelIter): void
    vfuncRowRemoved(iter: ModelIter): void
    vfuncSetColumnNamesFull(columnNames: string[]): void
    vfuncSetRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    vfuncSetSchemaFull(columnSchemas: string[]): void
    vfuncSetTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    vfuncSetValue(iter: ModelIter, column: number, value: GLib.Variant): void
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Dee.Model */
    connect(sigName: "changeset-finished", callback: (($obj: Transaction) => void)): number
    connect_after(sigName: "changeset-finished", callback: (($obj: Transaction) => void)): number
    emit(sigName: "changeset-finished"): void
    on(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changeset-started", callback: (($obj: Transaction) => void)): number
    connect_after(sigName: "changeset-started", callback: (($obj: Transaction) => void)): number
    emit(sigName: "changeset-started"): void
    on(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-added", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    connect_after(sigName: "row-added", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    emit(sigName: "row-added", iter: ModelIter): void
    on(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-changed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    emit(sigName: "row-changed", iter: ModelIter): void
    on(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "row-removed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    connect_after(sigName: "row-removed", callback: (($obj: Transaction, iter: ModelIter) => void)): number
    emit(sigName: "row-removed", iter: ModelIter): void
    on(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target: Model): Transaction
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface TreeIndex_ConstructProps extends Index_ConstructProps {
}
export class TreeIndex {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Dee.Index */
    foreach(startTerm: string, func: IndexIterFunc): void
    getAnalyzer(): Analyzer
    getModel(): Model
    getNRows(): number
    getNRowsForTerm(term: string): number
    getNTerms(): number
    getReader(): ModelReader
    getSupportedTermMatchFlags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookupOne(term: string): ModelIter
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
    /* Virtual methods of Dee.Index */
    vfuncForeach(startTerm: string, func: IndexIterFunc): void
    vfuncGetNRows(): number
    vfuncGetNRowsForTerm(term: string): number
    vfuncGetNTerms(): number
    vfuncGetSupportedTermMatchFlags(): number
    vfuncLookup(term: string, flags: TermMatchFlag): ResultSet
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeIndex, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TreeIndex_ConstructProps)
    _init (config?: TreeIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex
    static $gtype: GObject.Type
}
export abstract class AnalyzerClass {
    /* Fields of Dee.AnalyzerClass */
    analyze: (self: Analyzer, data: string, termsOut?: TermList | null, colkeysOut?: TermList | null) => void
    tokenize: (self: Analyzer, data: string, termsOut: TermList) => void
    addTermFilter: (self: Analyzer, filterFunc: TermFilterFunc) => void
    collateKey: (self: Analyzer, data: string) => string
    collateCmp: (self: Analyzer, key1: string, key2: string) => number
    static name: string
}
export class AnalyzerPrivate {
    static name: string
}
export abstract class ClientClass {
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class FileResourceManagerClass {
    /* Fields of Dee.FileResourceManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Filter {
    /* Fields of Dee.Filter */
    mapFunc: FilterMapFunc
    mapNotify: FilterMapNotify
    destroy: GLib.DestroyNotify
    userdata: object
    /* Methods of Dee.Filter */
    map(origModel: Model, filterModel: FilterModel): void
    notify(origIter: ModelIter, origModel: Model, filterModel: FilterModel): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newCollator(column: number): /* outFilter */ Filter
    static newCollatorDesc(column: number): /* outFilter */ Filter
    static newForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
    static newForKeyColumn(column: number, key: string): /* outFilter */ Filter
    static newRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
    static newSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
}
export abstract class FilterModelClass {
    static name: string
}
export class FilterModelPrivate {
    static name: string
}
export abstract class GListResultSetClass {
    /* Fields of Dee.GListResultSetClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class HashIndexClass {
    /* Fields of Dee.HashIndexClass */
    parentClass: IndexClass
    static name: string
}
export class HashIndexPrivate {
    static name: string
}
export class ICUTermFilter {
    /* Methods of Dee.ICUTermFilter */
    apply(text: string): string
    destroy(): void
    static name: string
}
export abstract class IndexClass {
    /* Fields of Dee.IndexClass */
    parentClass: GObject.ObjectClass
    lookup: (self: Index, term: string, flags: TermMatchFlag) => ResultSet
    foreach: (self: Index, startTerm: string, func: IndexIterFunc) => void
    getNTerms: (self: Index) => number
    getNRows: (self: Index) => number
    getNRowsForTerm: (self: Index, term: string) => number
    getSupportedTermMatchFlags: (self: Index) => number
    static name: string
}
export class IndexPrivate {
    static name: string
}
export abstract class ModelIface {
    /* Fields of Dee.ModelIface */
    gIface: GObject.TypeInterface
    rowAdded: (self: Model, iter: ModelIter) => void
    rowRemoved: (self: Model, iter: ModelIter) => void
    rowChanged: (self: Model, iter: ModelIter) => void
    setSchemaFull: (self: Model, columnSchemas: string[]) => void
    getSchema: (self: Model) => string[]
    getColumnSchema: (self: Model, column: number) => string
    getFieldSchema: (self: Model, fieldName: string) => [ /* returnType */ string, /* outColumn */ number ]
    getColumnIndex: (self: Model, columnName: string) => number
    setColumnNamesFull: (self: Model, columnNames: string[]) => void
    getColumnNames: (self: Model) => string[]
    registerVardictSchema: (self: Model, numColumn: number, schemas: GLib.HashTable) => void
    getVardictSchema: (self: Model, numColumn: number) => GLib.HashTable
    getNColumns: (self: Model) => number
    getNRows: (self: Model) => number
    appendRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    prependRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    insertRow: (self: Model, pos: number, rowMembers: GLib.Variant[]) => ModelIter
    insertRowBefore: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => ModelIter
    insertRowSorted: (self: Model, rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc) => ModelIter
    findRowSorted: (self: Model, rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc) => [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    remove: (self: Model, iter: ModelIter) => void
    clear: (self: Model) => void
    setValue: (self: Model, iter: ModelIter, column: number, value: GLib.Variant) => void
    setRow: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => void
    getValue: (self: Model, iter: ModelIter, column: number) => GLib.Variant
    getValueByName: (self: Model, iter: ModelIter, columnName: string) => GLib.Variant
    getFirstIter: (self: Model) => ModelIter
    getLastIter: (self: Model) => ModelIter
    getIterAtRow: (self: Model, row: number) => ModelIter
    getBool: (self: Model, iter: ModelIter, column: number) => boolean
    getUchar: (self: Model, iter: ModelIter, column: number) => number
    getInt32: (self: Model, iter: ModelIter, column: number) => number
    getUint32: (self: Model, iter: ModelIter, column: number) => number
    getInt64: (self: Model, iter: ModelIter, column: number) => number
    getUint64: (self: Model, iter: ModelIter, column: number) => number
    getDouble: (self: Model, iter: ModelIter, column: number) => number
    getString: (self: Model, iter: ModelIter, column: number) => string
    next: (self: Model, iter: ModelIter) => ModelIter
    prev: (self: Model, iter: ModelIter) => ModelIter
    isFirst: (self: Model, iter: ModelIter) => boolean
    isLast: (self: Model, iter: ModelIter) => boolean
    getPosition: (self: Model, iter: ModelIter) => number
    registerTag: (self: Model, tagDestroy: GLib.DestroyNotify) => ModelTag
    getTag: (self: Model, iter: ModelIter, tag: ModelTag) => object | null
    setTag: (self: Model, iter: ModelIter, tag: ModelTag, value?: object | null) => void
    getRow: (self: Model, iter: ModelIter, outRowMembers: GLib.Variant) => GLib.Variant
    beginChangeset: (self: Model) => void
    endChangeset: (self: Model) => void
    changesetStarted: (self: Model) => void
    changesetFinished: (self: Model) => void
    static name: string
}
export class ModelIter {
    static name: string
}
export class ModelReader {
    /* Fields of Dee.ModelReader */
    readerFunc: ModelReaderFunc
    userdata: object
    destroy: GLib.DestroyNotify
    /* Methods of Dee.ModelReader */
    read(model: Model, iter: ModelIter): string
    static name: string
    /* Static methods and pseudo-constructors */
    static newForInt32Column(column: number): /* outReader */ ModelReader
    static newForStringColumn(column: number): /* outReader */ ModelReader
    static newForUint32Column(column: number): /* outReader */ ModelReader
}
export class ModelTag {
    static name: string
}
export abstract class PeerClass {
    /* Fields of Dee.PeerClass */
    peerFound: (self: Peer, name: string) => void
    peerLost: (self: Peer, name: string) => void
    connectionAcquired: (self: Peer, connection: Gio.DBusConnection) => void
    connectionClosed: (self: Peer, connection: Gio.DBusConnection) => void
    getSwarmLeader: (self: Peer) => string
    isSwarmLeader: (self: Peer) => boolean
    getConnections: (self: Peer) => Gio.DBusConnection[]
    listPeers: (self: Peer) => string[]
    static name: string
}
export class PeerPrivate {
    static name: string
}
export abstract class ProxyModelClass {
    static name: string
}
export class ProxyModelPrivate {
    static name: string
}
export abstract class ResourceManagerIface {
    /* Fields of Dee.ResourceManagerIface */
    gIface: GObject.TypeInterface
    store: (self: ResourceManager, resource: Serializable, resourceName: string) => boolean
    load: (self: ResourceManager, resourceName: string) => GObject.Object
    static name: string
}
export abstract class ResultSetIface {
    /* Fields of Dee.ResultSetIface */
    gIface: GObject.TypeInterface
    getNRows: (self: ResultSet) => number
    next: (self: ResultSet) => ModelIter
    hasNext: (self: ResultSet) => boolean
    peek: (self: ResultSet) => ModelIter
    seek: (self: ResultSet, pos: number) => void
    tell: (self: ResultSet) => number
    getModel: (self: ResultSet) => Model
    static name: string
}
export abstract class SequenceModelClass {
    static name: string
}
export class SequenceModelPrivate {
    static name: string
}
export abstract class SerializableIface {
    /* Fields of Dee.SerializableIface */
    gIface: GObject.TypeInterface
    serialize: (self: Serializable) => GLib.Variant
    static name: string
}
export abstract class SerializableModelClass {
    /* Fields of Dee.SerializableModelClass */
    getSeqnum: (self: Model) => number
    setSeqnum: (self: Model, seqnum: number) => void
    incSeqnum: (self: Model) => number
    static name: string
}
export class SerializableModelPrivate {
    static name: string
}
export abstract class ServerClass {
    static name: string
}
export class ServerPrivate {
    static name: string
}
export abstract class SharedModelClass {
    static name: string
}
export class SharedModelPrivate {
    static name: string
}
export abstract class TermListClass {
    /* Fields of Dee.TermListClass */
    parentClass: GObject.ObjectClass
    getTerm: (self: TermList, n: number) => string
    addTerm: (self: TermList, term: string) => TermList
    numTerms: (self: TermList) => number
    clear: (self: TermList) => TermList
    clone: (self: TermList) => TermList
    static name: string
}
export class TermListPrivate {
    static name: string
}
export abstract class TextAnalyzerClass {
    static name: string
}
export class TextAnalyzerPrivate {
    static name: string
}
export abstract class TransactionClass {
    static name: string
}
export class TransactionPrivate {
    static name: string
}
export abstract class TreeIndexClass {
    /* Fields of Dee.TreeIndexClass */
    parentClass: IndexClass
    static name: string
}
export class TreeIndexPrivate {
    static name: string
}
}