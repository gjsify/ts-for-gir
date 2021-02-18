/**
 * DMAP-3.0
 */

import "node"
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace DMAP {

export enum ConnectionState {
    GET_INFO,
    LOGIN,
    GET_REVISION_NUMBER,
    GET_DB_INFO,
    GET_SONGS,
    GET_PLAYLISTS,
    GET_PLAYLIST_ENTRIES,
    LOGOUT,
    DONE,
}
export enum ContentCode {
    CC_INVALID,
    RAW,
    CC_MDCL,
    CC_MSTT,
    CC_MIID,
    CC_MINM,
    CC_MIKD,
    CC_MPER,
    CC_MCON,
    CC_MCTI,
    CC_MPCO,
    CC_MSTS,
    CC_MIMC,
    CC_MCTC,
    CC_MRCO,
    CC_MTCO,
    CC_MLCL,
    CC_MLIT,
    CC_MBCL,
    CC_MSRV,
    CC_MSAU,
    CC_MSLR,
    CC_MPRO,
    CC_MSAL,
    CC_MSUP,
    CC_MSPI,
    CC_MSEX,
    CC_MSBR,
    CC_MSQY,
    CC_MSIX,
    CC_MSRS,
    CC_MSTM,
    CC_MSDC,
    CC_MCCR,
    CC_MCNM,
    CC_MCNA,
    CC_MCTY,
    CC_MLOG,
    CC_MLID,
    CC_MUPD,
    CC_MUSR,
    CC_MUTY,
    CC_MUDL,
    CC_MSMA,
    CC_FQUESCH,
    CC_APRO,
    CC_AVDB,
    CC_ABRO,
    CC_ABAL,
    CC_ABAR,
    CC_ABCP,
    CC_ABGN,
    CC_ADBS,
    CC_ASAL,
    CC_ASAI,
    CC_ASAA,
    CC_ASAR,
    CC_ASBT,
    CC_ASBR,
    CC_ASCM,
    CC_ASCO,
    CC_ASDA,
    CC_ASDM,
    CC_ASDC,
    CC_ASDN,
    CC_ASDB,
    CC_ASEQ,
    CC_ASFM,
    CC_ASGN,
    CC_ASDT,
    CC_ASRV,
    CC_ASSR,
    CC_ASSZ,
    CC_ASST,
    CC_ASSP,
    CC_ASTM,
    CC_ASTC,
    CC_ASTN,
    CC_ASUR,
    CC_ASYR,
    CC_ASDK,
    CC_ASUL,
    CC_ASSU,
    CC_ASSA,
    CC_APLY,
    CC_ABPL,
    CC_APSO,
    CC_PRSV,
    CC_ARIF,
    CC_MSAS,
    CC_AGRP,
    CC_AGAL,
    CC_ASCP,
    CC_PPRO,
    CC_PASP,
    CC_PFDT,
    CC_PICD,
    CC_PIMF,
    CC_PFMT,
    CC_PIFS,
    CC_PLSZ,
    CC_PHGT,
    CC_PWTH,
    CC_PRAT,
    CC_PCMT,
    CC_PRET,
    CC_AESV,
    CC_AEHV,
    CC_AESP,
    CC_AEPP,
    CC_AEPS,
    CC_AESG,
    CC_AEMK,
    CC_AEFP,
    CC_CMPA,
    CC_CMNM,
    CC_CMTY,
    CC_CMPG,
    CC_CACI,
    CC_CAPS,
    CC_CASH,
    CC_CARP,
    CC_CAAS,
    CC_CAAR,
    CC_CAIA,
    CC_CANP,
    CC_CANN,
    CC_CANA,
    CC_CANL,
    CC_CANG,
    CC_CANT,
    CC_CASP,
    CC_CASS,
    CC_CAST,
    CC_CASU,
    CC_CASG,
    CC_CACR,
    CC_CMCP,
    CC_CMGT,
    CC_CMIK,
    CC_CMSP,
    CC_CMST,
    CC_CMSV,
    CC_CMSR,
    CC_CMMK,
    CC_CMVO,
    CC_CMPR,
    CC_CAPR,
    CC_AEFR,
    CC_CAOV,
    CC_CMRL,
    CC_CAHP,
    CC_CAIV,
    CC_CAVC,
}
export enum MdnsBrowserError {
    NOT_RUNNING,
    FAILED,
}
export enum MdnsBrowserServiceType {
    INVALID,
    DAAP,
    DPAP,
    DACP,
    RAOP,
    LAST,
}
export enum MdnsBrowserTransportProtocol {
    TCP,
    UDP,
    LAST,
}
export enum MdnsPublisherError {
    NOT_RUNNING,
    FAILED,
}
export enum MediaKind {
    MUSIC,
    MOVIE,
    PODCAST,
    TV_SHOW,
}
export enum Type {
    BYTE,
    SIGNED_INT,
    SHORT,
    INT,
    INT64,
    STRING,
    DATE,
    VERSION,
    CONTAINER,
    POINTER,
}
export const HASH_SIZE: number
export const STATUS_OK: number
export function contentCodeDmapType(code: ContentCode): Type
export function contentCodeName(code: ContentCode): string
export function contentCodeReadFromBuffer(buf: string): ContentCode
export function contentCodeString(code: ContentCode): string
export function contentCodeStringAsInt32(str: string): number
export function contentCodes(number: number): ContentCodeDefinition
export function hashGenerate(versionMajor: number, url: number, hashSelect: number, out: number, requestId: number): void
export function hashProgressiveFinal(context: HashContext, digest: number): void
export function hashProgressiveInit(context: HashContext): void
export function hashProgressiveToString(digest: number, string: string): void
export function hashProgressiveUpdate(context: HashContext, buffer: number, length: number): void
export function mdnsBrowserErrorQuark(): GLib.Quark
export function mdnsPublisherErrorQuark(): GLib.Quark
export function mimeToFormat(transcodeMimetype: string): string
export function structureDestroy(structure: GLib.Node): void
export function structureGetSize(structure: GLib.Node): number
export function structureIncreaseByPredictedSize(structure: GLib.Node, size: number): void
export function structurePrint(structure: GLib.Node): void
export function structureSerialize(structure: GLib.Node, length: number): string
export interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string): boolean
}
export interface ResponseHandler {
    (connection: Connection, status: number, structure: GLib.Node): void
}
export class ContainerDb {
    /* Methods of DMAP.ContainerDb */
    add(record: ContainerRecord): void
    count(): number
    /* Virtual methods of DMAP.ContainerDb */
    vfuncAdd(record: ContainerRecord): void
    vfuncCount(): number
    static name: string
}
export class ContainerRecord {
    /* Properties of DMAP.ContainerRecord */
    name: string
    /* Methods of DMAP.ContainerRecord */
    addEntry(record: Record, id: number): void
    getEntryCount(): number
    getId(): number
    /* Virtual methods of DMAP.ContainerRecord */
    vfuncAddEntry(record: Record, id: number): void
    vfuncGetEntryCount(): number
    vfuncGetId(): number
    static name: string
}
export class Db {
    /* Methods of DMAP.Db */
    add(record: Record): number
    addPath(path: string): number
    addWithId(record: Record, id: number): number
    count(): number
    lookupIdByLocation(location: string): number
    /* Virtual methods of DMAP.Db */
    vfuncAdd(record: Record): number
    vfuncAddPath(path: string): number
    vfuncAddWithId(record: Record, id: number): number
    vfuncCount(): number
    vfuncLookupIdByLocation(location: string): number
    static name: string
}
export class Record {
    /* Methods of DMAP.Record */
    setFromBlob(blob: any[]): boolean
    /* Virtual methods of DMAP.Record */
    vfuncSetFromBlob(blob: any[]): boolean
    static name: string
}
export class RecordFactory {
    static name: string
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    baseUri?: object
    databaseId?: number
    db?: object
    dmapVersion?: number
    factory?: object
    host?: string
    name?: string
    password?: string
    port?: number
    revisionNumber?: number
    sessionId?: number
    username?: string
}
export class Connection {
    /* Properties of DMAP.Connection */
    baseUri: object
    databaseId: number
    dmapVersion: number
    password: string
    revisionNumber: number
    sessionId: number
    /* Fields of DMAP.Connection */
    parent: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP.Connection */
    authenticateMessage(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void
    getHeaders(uri: string): Soup.MessageHeaders
    isConnected(): boolean
    setup(): void
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
    /* Virtual methods of DMAP.Connection */
    vfuncAuthenticate(name: string): string
    vfuncConnected(): void
    vfuncConnecting(state: ConnectionState, progress: number): void
    vfuncDisconnected(): void
    vfuncGetProtocolVersionCc(): ContentCode
    vfuncGetQueryMetadata(): string
    vfuncOperationDone(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DMAP.Connection */
    connect(sigName: "authenticate", callback: (($obj: Connection, object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: Connection, object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void)): number
    emit(sigName: "authenticate", object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "connected", callback: (($obj: Connection) => void)): number
    emit(sigName: "connected"): void
    on(sigName: "connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "connecting", callback: (($obj: Connection, object: number, p0: number) => void)): number
    connect_after(sigName: "connecting", callback: (($obj: Connection, object: number, p0: number) => void)): number
    emit(sigName: "connecting", object: number, p0: number): void
    on(sigName: "connecting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "connecting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "connecting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    emit(sigName: "disconnected"): void
    on(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "operation-done", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "operation-done", callback: (($obj: Connection) => void)): number
    emit(sigName: "operation-done"): void
    on(sigName: "operation-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::base-uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dmap-version", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dmap-version", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dmap-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dmap-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dmap-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision-number", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface GstInputStream_ConstructProps extends Gio.InputStream_ConstructProps {
}
export class GstInputStream {
    /* Fields of DMAP.GstInputStream */
    parent: Gio.InputStream
    priv: GstInputStreamPrivate
    /* Fields of Gio.InputStream */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ any[] ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ any[], /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any[]
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any[]
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of DMAP.GstInputStream */
    vfuncKillPipeline(): void
    vfuncCanSeek(): boolean
    vfuncCanTruncate(): boolean
    vfuncSeek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfuncTell(): number
    vfuncTruncateFn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish(result: Gio.AsyncResult): boolean
    vfuncCloseFn(cancellable?: Gio.Cancellable | null): boolean
    vfuncReadAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any[] | null
    vfuncReadFinish(result: Gio.AsyncResult): number
    vfuncReadFn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkip(count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSkipFinish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GstInputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GstInputStream_ConstructProps)
    _init (config?: GstInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(transcodeMimetype: string, srcStream: Gio.InputStream): GstInputStream
    static $gtype: GObject.Type
}
export interface MdnsBrowser_ConstructProps extends GObject.Object_ConstructProps {
}
export class MdnsBrowser {
    /* Fields of DMAP.MdnsBrowser */
    object: GObject.Object
    priv: MdnsBrowserPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP.MdnsBrowser */
    getServiceType(): MdnsBrowserServiceType
    start(): boolean
    stop(): boolean
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
    /* Virtual methods of DMAP.MdnsBrowser */
    vfuncServiceAdded(service: MdnsBrowserService): void
    vfuncServiceRemoved(service: MdnsBrowserService): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DMAP.MdnsBrowser */
    connect(sigName: "service-added", callback: (($obj: MdnsBrowser, service: object) => void)): number
    connect_after(sigName: "service-added", callback: (($obj: MdnsBrowser, service: object) => void)): number
    emit(sigName: "service-added", service: object): void
    on(sigName: "service-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-removed", callback: (($obj: MdnsBrowser, object: string) => void)): number
    connect_after(sigName: "service-removed", callback: (($obj: MdnsBrowser, object: string) => void)): number
    emit(sigName: "service-removed", object: string): void
    on(sigName: "service-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MdnsBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MdnsBrowser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MdnsBrowser_ConstructProps)
    _init (config?: MdnsBrowser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: MdnsBrowserServiceType): MdnsBrowser
    static $gtype: GObject.Type
}
export interface MdnsPublisher_ConstructProps extends GObject.Object_ConstructProps {
}
export class MdnsPublisher {
    /* Fields of DMAP.MdnsPublisher */
    object: GObject.Object
    priv: MdnsPublisherPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP.MdnsPublisher */
    publish(name: string, port: number, typeOfService: string, passwordRequired: boolean, txtRecords: string): boolean
    renameAtPort(port: number, name: string): boolean
    withdraw(port: number): boolean
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
    /* Virtual methods of DMAP.MdnsPublisher */
    vfuncNameCollision(name: string): void
    vfuncPublished(name: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of DMAP.MdnsPublisher */
    connect(sigName: "name-collision", callback: (($obj: MdnsPublisher, object: string) => void)): number
    connect_after(sigName: "name-collision", callback: (($obj: MdnsPublisher, object: string) => void)): number
    emit(sigName: "name-collision", object: string): void
    on(sigName: "name-collision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-collision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-collision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "published", callback: (($obj: MdnsPublisher, object: string) => void)): number
    connect_after(sigName: "published", callback: (($obj: MdnsPublisher, object: string) => void)): number
    emit(sigName: "published", object: string): void
    on(sigName: "published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MdnsPublisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MdnsPublisher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MdnsPublisher_ConstructProps)
    _init (config?: MdnsPublisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MdnsPublisher
    static $gtype: GObject.Type
}
export interface Share_ConstructProps extends GObject.Object_ConstructProps {
    authMethod?: number
    containerDb?: object
    db?: object
    name?: string
    password?: string
    revisionNumber?: number
    transcodeMimetype?: string
    txtRecords?: string[]
}
export class Share {
    /* Properties of DMAP.Share */
    authMethod: number
    name: string
    password: string
    revisionNumber: number
    readonly serverIpv4: Soup.Server
    readonly serverIpv6: Soup.Server
    txtRecords: string[]
    /* Fields of DMAP.Share */
    parent: GObject.Object
    priv: SharePrivate
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
    /* Virtual methods of DMAP.Share */
    vfuncContentCodes(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfuncCtrlInt(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfuncDatabases(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfuncDatabasesBrowseXxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfuncDatabasesItemsXxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfuncGetDesiredPort(): number
    vfuncGetTypeOfService(): string
    vfuncLogin(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfuncLogout(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfuncMessageAddStandardHeaders(msg: Soup.Message): void
    vfuncNameCollision(publisher: MdnsPublisher, name: string): void
    vfuncPublished(publisher: MdnsPublisher, name: string): void
    vfuncServerInfo(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfuncUpdate(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-method", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-method", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision-number", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-ipv4", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv4", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-ipv6", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv6", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::txt-records", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::txt-records", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::txt-records", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::txt-records", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::txt-records", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Share_ConstructProps)
    _init (config?: Share_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ConnectionClass {
    /* Fields of DMAP.ConnectionClass */
    parent: GObject.ObjectClass
    getProtocolVersionCc: (connection: Connection) => ContentCode
    getQueryMetadata: (connection: Connection) => string
    connected: (connection: Connection) => void
    disconnected: (connection: Connection) => void
    authenticate: (connection: Connection, name: string) => string
    connecting: (connection: Connection, state: ConnectionState, progress: number) => void
    operationDone: (connection: Connection) => void
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
export abstract class ContainerDbIface {
    /* Fields of DMAP.ContainerDbIface */
    parent: GObject.TypeInterface
    add: (db: ContainerDb, record: ContainerRecord) => void
    count: (db: ContainerDb) => number
    static name: string
}
export abstract class ContainerRecordIface {
    /* Fields of DMAP.ContainerRecordIface */
    parent: GObject.TypeInterface
    getId: (record: ContainerRecord) => number
    addEntry: (containerRecord: ContainerRecord, record: Record, id: number) => void
    getEntryCount: (record: ContainerRecord) => number
    static name: string
}
export class ContentCodeDefinition {
    /* Fields of DMAP.ContentCodeDefinition */
    code: ContentCode
    intCode: number
    name: string
    string: string
    type: Type
    static name: string
}
export class DbFilterDefinition {
    /* Fields of DMAP.DbFilterDefinition */
    key: string
    value: string
    negate: boolean
    static name: string
}
export abstract class DbIface {
    /* Fields of DMAP.DbIface */
    parent: GObject.TypeInterface
    add: (db: Db, record: Record) => number
    addWithId: (db: Db, record: Record, id: number) => number
    addPath: (db: Db, path: string) => number
    lookupIdByLocation: (db: Db, location: string) => number
    count: (db: Db) => number
    static name: string
}
export abstract class GstInputStreamClass {
    /* Fields of DMAP.GstInputStreamClass */
    parent: Gio.InputStreamClass
    killPipeline: (arg0: GstInputStream) => void
    static name: string
}
export class GstInputStreamPrivate {
    static name: string
}
export class HashContext {
    /* Fields of DMAP.HashContext */
    buf: number[]
    bits: number[]
    in_: number[]
    version: number
    static name: string
}
export abstract class MdnsBrowserClass {
    /* Fields of DMAP.MdnsBrowserClass */
    parentClass: GObject.ObjectClass
    serviceAdded: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    serviceRemoved: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    static name: string
}
export class MdnsBrowserPrivate {
    static name: string
}
export class MdnsBrowserService {
    /* Fields of DMAP.MdnsBrowserService */
    serviceName: string
    name: string
    host: string
    port: number
    passwordProtected: boolean
    pair: string
    transportProtocol: MdnsBrowserTransportProtocol
    static name: string
}
export abstract class MdnsPublisherClass {
    /* Fields of DMAP.MdnsPublisherClass */
    parentClass: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string) => void
    nameCollision: (publisher: MdnsPublisher, name: string) => void
    static name: string
}
export class MdnsPublisherPrivate {
    static name: string
}
export class MetaDataMap {
    /* Fields of DMAP.MetaDataMap */
    tag: string
    md: number
    static name: string
}
export class Playlist {
    /* Fields of DMAP.Playlist */
    name: string
    id: number
    uris: object[]
    static name: string
}
export abstract class RecordFactoryIface {
    /* Fields of DMAP.RecordFactoryIface */
    parent: GObject.TypeInterface
    static name: string
}
export abstract class RecordIface {
    /* Fields of DMAP.RecordIface */
    parent: GObject.TypeInterface
    setFromBlob: (record: Record, blob: any[]) => boolean
    static name: string
}
export abstract class ShareClass {
    /* Fields of DMAP.ShareClass */
    parent: GObject.ObjectClass
    getDesiredPort: (share: Share) => number
    getTypeOfService: (share: Share) => string
    messageAddStandardHeaders: (share: Share, msg: Soup.Message) => void
    addEntryToMlcl: (id: object, record: Record, mb: object) => void
    databasesBrowseXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    databasesItemsXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    serverInfo: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    contentCodes: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    login: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    logout: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    update: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    ctrlInt: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    published: (share: Share, publisher: MdnsPublisher, name: string) => void
    nameCollision: (share: Share, publisher: MdnsPublisher, name: string) => void
    databases: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    static name: string
}
export class SharePrivate {
    static name: string
}
export class StructureItem {
    /* Fields of DMAP.StructureItem */
    contentCode: ContentCode
    content: any
    size: number
    static name: string
}
}