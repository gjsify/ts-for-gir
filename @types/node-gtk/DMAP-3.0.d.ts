/**
 * DMAP-3.0
 */

import "node"
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace DMAP {

enum ConnectionState {
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
enum ContentCode {
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
enum MdnsBrowserError {
    NOT_RUNNING,
    FAILED,
}
enum MdnsBrowserServiceType {
    INVALID,
    DAAP,
    DPAP,
    DACP,
    RAOP,
    LAST,
}
enum MdnsBrowserTransportProtocol {
    TCP,
    UDP,
    LAST,
}
enum MdnsPublisherError {
    NOT_RUNNING,
    FAILED,
}
enum MediaKind {
    MUSIC,
    MOVIE,
    PODCAST,
    TV_SHOW,
}
enum Type {
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
function contentCodeDmapType(code: ContentCode): Type
function contentCodeName(code: ContentCode): string
function contentCodeReadFromBuffer(buf: string): ContentCode
function contentCodeString(code: ContentCode): string
function contentCodeStringAsInt32(str: string): number
function contentCodes(number: number): ContentCodeDefinition
function hashGenerate(versionMajor: number, url: number, hashSelect: number, out: number, requestId: number): void
function hashProgressiveFinal(context: HashContext, digest: number): void
function hashProgressiveInit(context: HashContext): void
function hashProgressiveToString(digest: number, string: string): void
function hashProgressiveUpdate(context: HashContext, buffer: number, length: number): void
function mdnsBrowserErrorQuark(): GLib.Quark
function mdnsPublisherErrorQuark(): GLib.Quark
function mimeToFormat(transcodeMimetype: string): string
function structureDestroy(structure: GLib.Node): void
function structureGetSize(structure: GLib.Node): number
function structureIncreaseByPredictedSize(structure: GLib.Node, size: number): void
function structurePrint(structure: GLib.Node): void
function structureSerialize(structure: GLib.Node, length: number): string
interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string): boolean
}
interface ResponseHandler {
    (connection: Connection, status: number, structure: GLib.Node): void
}
class ContainerDb {
    /* Methods of DMAP-3.0.DMAP.ContainerDb */
    add(record: ContainerRecord): void
    count(): number
    static name: string
}
class ContainerRecord {
    /* Properties of DMAP-3.0.DMAP.ContainerRecord */
    name: string
    /* Methods of DMAP-3.0.DMAP.ContainerRecord */
    addEntry(record: Record, id: number): void
    getEntryCount(): number
    getId(): number
    static name: string
}
class Db {
    /* Methods of DMAP-3.0.DMAP.Db */
    add(record: Record): number
    addPath(path: string): number
    addWithId(record: Record, id: number): number
    count(): number
    lookupIdByLocation(location: string): number
    static name: string
}
class Record {
    /* Methods of DMAP-3.0.DMAP.Record */
    setFromBlob(blob: any[]): boolean
    static name: string
}
class RecordFactory {
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
class Connection {
    /* Properties of DMAP-3.0.DMAP.Connection */
    baseUri: object
    databaseId: number
    dmapVersion: number
    password: string
    revisionNumber: number
    sessionId: number
    /* Fields of DMAP-3.0.DMAP.Connection */
    parent: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP-3.0.DMAP.Connection */
    authenticateMessage(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void
    getHeaders(uri: string): Soup.MessageHeaders
    isConnected(): boolean
    setup(): void
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
    /* Signals of DMAP-3.0.DMAP.Connection */
    connect(sigName: "authenticate", callback: (($obj: Connection, object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void)): number
    on(sigName: "authenticate", callback: (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
    connect(sigName: "connected", callback: (($obj: Connection) => void)): number
    on(sigName: "connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "connected"): void
    connect(sigName: "connecting", callback: (($obj: Connection, object: number, p0: number) => void)): number
    on(sigName: "connecting", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connecting", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connecting", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "connecting", object: number, p0: number): void
    connect(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "operation-done", callback: (($obj: Connection) => void)): number
    on(sigName: "operation-done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "operation-done"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
class GstInputStream {
    /* Fields of DMAP-3.0.DMAP.GstInputStream */
    parent: Gio.InputStream
    priv: GstInputStreamPrivate
    /* Fields of Gio-2.0.Gio.InputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstInputStream, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GstInputStream_ConstructProps)
    _init (config?: GstInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(transcodeMimetype: string, srcStream: Gio.InputStream): GstInputStream
    static $gtype: GObject.Type
}
export interface MdnsBrowser_ConstructProps extends GObject.Object_ConstructProps {
}
class MdnsBrowser {
    /* Fields of DMAP-3.0.DMAP.MdnsBrowser */
    object: GObject.Object
    priv: MdnsBrowserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP-3.0.DMAP.MdnsBrowser */
    getServiceType(): MdnsBrowserServiceType
    start(): boolean
    stop(): boolean
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
    /* Signals of DMAP-3.0.DMAP.MdnsBrowser */
    connect(sigName: "service-added", callback: (($obj: MdnsBrowser, service: object) => void)): number
    on(sigName: "service-added", callback: (service: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-added", callback: (service: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-added", callback: (service: object) => void): NodeJS.EventEmitter
    emit(sigName: "service-added", service: object): void
    connect(sigName: "service-removed", callback: (($obj: MdnsBrowser, object: string) => void)): number
    on(sigName: "service-removed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "service-removed", object: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MdnsBrowser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MdnsBrowser_ConstructProps)
    _init (config?: MdnsBrowser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: MdnsBrowserServiceType): MdnsBrowser
    static $gtype: GObject.Type
}
export interface MdnsPublisher_ConstructProps extends GObject.Object_ConstructProps {
}
class MdnsPublisher {
    /* Fields of DMAP-3.0.DMAP.MdnsPublisher */
    object: GObject.Object
    priv: MdnsPublisherPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of DMAP-3.0.DMAP.MdnsPublisher */
    publish(name: string, port: number, typeOfService: string, passwordRequired: boolean, txtRecords: string): boolean
    renameAtPort(port: number, name: string): boolean
    withdraw(port: number): boolean
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
    /* Signals of DMAP-3.0.DMAP.MdnsPublisher */
    connect(sigName: "name-collision", callback: (($obj: MdnsPublisher, object: string) => void)): number
    on(sigName: "name-collision", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-collision", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-collision", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-collision", object: string): void
    connect(sigName: "published", callback: (($obj: MdnsPublisher, object: string) => void)): number
    on(sigName: "published", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "published", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "published", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "published", object: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MdnsPublisher, pspec: GObject.ParamSpec) => void)): number
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
class Share {
    /* Properties of DMAP-3.0.DMAP.Share */
    authMethod: number
    name: string
    password: string
    revisionNumber: number
    readonly serverIpv4: Soup.Server
    readonly serverIpv6: Soup.Server
    txtRecords: string[]
    /* Fields of DMAP-3.0.DMAP.Share */
    parent: GObject.Object
    priv: SharePrivate
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
    connect(sigName: "notify", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
abstract class ConnectionClass {
    /* Fields of DMAP-3.0.DMAP.ConnectionClass */
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
class ConnectionPrivate {
    static name: string
}
abstract class ContainerDbIface {
    /* Fields of DMAP-3.0.DMAP.ContainerDbIface */
    parent: GObject.TypeInterface
    add: (db: ContainerDb, record: ContainerRecord) => void
    count: (db: ContainerDb) => number
    static name: string
}
abstract class ContainerRecordIface {
    /* Fields of DMAP-3.0.DMAP.ContainerRecordIface */
    parent: GObject.TypeInterface
    getId: (record: ContainerRecord) => number
    addEntry: (containerRecord: ContainerRecord, record: Record, id: number) => void
    getEntryCount: (record: ContainerRecord) => number
    static name: string
}
class ContentCodeDefinition {
    /* Fields of DMAP-3.0.DMAP.ContentCodeDefinition */
    code: ContentCode
    intCode: number
    name: string
    string: string
    type: Type
    static name: string
}
class DbFilterDefinition {
    /* Fields of DMAP-3.0.DMAP.DbFilterDefinition */
    key: string
    value: string
    negate: boolean
    static name: string
}
abstract class DbIface {
    /* Fields of DMAP-3.0.DMAP.DbIface */
    parent: GObject.TypeInterface
    add: (db: Db, record: Record) => number
    addWithId: (db: Db, record: Record, id: number) => number
    addPath: (db: Db, path: string) => number
    lookupIdByLocation: (db: Db, location: string) => number
    count: (db: Db) => number
    static name: string
}
abstract class GstInputStreamClass {
    /* Fields of DMAP-3.0.DMAP.GstInputStreamClass */
    parent: Gio.InputStreamClass
    killPipeline: (arg0: GstInputStream) => void
    static name: string
}
class GstInputStreamPrivate {
    static name: string
}
class HashContext {
    /* Fields of DMAP-3.0.DMAP.HashContext */
    buf: number[]
    bits: number[]
    in_: number[]
    version: number
    static name: string
}
abstract class MdnsBrowserClass {
    /* Fields of DMAP-3.0.DMAP.MdnsBrowserClass */
    parentClass: GObject.ObjectClass
    serviceAdded: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    serviceRemoved: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    static name: string
}
class MdnsBrowserPrivate {
    static name: string
}
class MdnsBrowserService {
    /* Fields of DMAP-3.0.DMAP.MdnsBrowserService */
    serviceName: string
    name: string
    host: string
    port: number
    passwordProtected: boolean
    pair: string
    transportProtocol: MdnsBrowserTransportProtocol
    static name: string
}
abstract class MdnsPublisherClass {
    /* Fields of DMAP-3.0.DMAP.MdnsPublisherClass */
    parentClass: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string) => void
    nameCollision: (publisher: MdnsPublisher, name: string) => void
    static name: string
}
class MdnsPublisherPrivate {
    static name: string
}
class MetaDataMap {
    /* Fields of DMAP-3.0.DMAP.MetaDataMap */
    tag: string
    md: number
    static name: string
}
class Playlist {
    /* Fields of DMAP-3.0.DMAP.Playlist */
    name: string
    id: number
    uris: object[]
    static name: string
}
abstract class RecordFactoryIface {
    /* Fields of DMAP-3.0.DMAP.RecordFactoryIface */
    parent: GObject.TypeInterface
    static name: string
}
abstract class RecordIface {
    /* Fields of DMAP-3.0.DMAP.RecordIface */
    parent: GObject.TypeInterface
    setFromBlob: (record: Record, blob: any[]) => boolean
    static name: string
}
abstract class ShareClass {
    /* Fields of DMAP-3.0.DMAP.ShareClass */
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
class SharePrivate {
    static name: string
}
class StructureItem {
    /* Fields of DMAP-3.0.DMAP.StructureItem */
    contentCode: ContentCode
    content: any
    size: number
    static name: string
}
}
export default DMAP