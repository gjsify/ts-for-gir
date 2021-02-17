/**
 * EBackend-1.2
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { EDataServer } from './EDataServer-1.2';
import type { GData } from './GData-0.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';
import type { Camel } from './Camel-1.2';

export declare namespace EBackend {

export enum AuthenticationSessionResult {
    ERROR,
    SUCCESS,
    DISMISSED,
}
export enum CacheDeletedFlag {
    EXCLUDE_DELETED,
    INCLUDE_DELETED,
}
export enum CacheError {
    ENGINE,
    CONSTRAINT,
    NOT_FOUND,
    INVALID_QUERY,
    UNSUPPORTED_FIELD,
    UNSUPPORTED_QUERY,
    END_OF_LIST,
    LOAD,
}
export enum CacheLockType {
    READ,
    WRITE,
}
export enum CacheOfflineFlag {
    OFFLINE_UNKNOWN,
    IS_ONLINE,
    IS_OFFLINE,
}
export enum CacheUnlockAction {
    NONE,
    COMMIT,
    ROLLBACK,
}
export enum DBusServerExitCode {
    NONE,
    NORMAL,
    RELOAD,
}
export enum OfflineState {
    UNKNOWN,
    SYNCED,
    LOCALLY_CREATED,
    LOCALLY_MODIFIED,
    LOCALLY_DELETED,
}
export enum CollectionBackendParts {
    NONE,
    CALENDAR,
    CONTACTS,
    MAIL,
    ANY,
}
export enum SourcePermissionFlags {
    NONE,
    WRITABLE,
    REMOVABLE,
}
export const CACHE_COLUMN_OBJECT: string
export const CACHE_COLUMN_REVISION: string
export const CACHE_COLUMN_STATE: string
export const CACHE_COLUMN_UID: string
export const CACHE_TABLE_KEYS: string
export const CACHE_TABLE_OBJECTS: string
export const EDS_REGISTRY_MODULES: string
export const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string
export const USER_PROMPTER_SERVER_OBJECT_PATH: string
export function cacheColumnInfoFree(info?: object | null): void
export function cacheOfflineChangeFree(change?: object | null): void
export function sqlite3VfsInit(): void
export interface CacheForeachFunc {
    (cache: Cache, uid: string, revision: string, object: string, offlineState: OfflineState, columnNames: string[], columnValues: string[]): boolean
}
export interface CacheSelectFunc {
    (cache: Cache, columnNames: string[], columnValues: string[]): boolean
}
export interface CacheUpdateFunc {
    (cache: Cache, uid: string, revision: string, object: string, offlineState: OfflineState, columnNames: string[], columnValues: string[]): boolean
}
export class OAuth2Support {
    /* Methods of EBackend.OAuth2Support */
    getAccessToken(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getAccessTokenSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    /* Virtual methods of EBackend.OAuth2Support */
    vfuncGetAccessToken(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetAccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    vfuncGetAccessTokenSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    static name: string
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
    connectable?: Gio.SocketConnectable
    online?: boolean
    source?: EDataServer.Source
}
export class Backend {
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: UserPrompter
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.Backend */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    ensureSourceStatusConnected(): void
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    getOnline(): boolean
    getSource(): EDataServer.Source
    getUserPrompter(): object | null
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    prepareShutdown(): void
    refConnectable(): Gio.SocketConnectable | null
    refMainContext(): GLib.MainContext
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    setConnectable(connectable: Gio.SocketConnectable): void
    setOnline(online: boolean): void
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EBackend.Backend */
    vfuncAuthenticateSync(credentials: EDataServer.NamedParameters, outCertificatePem: string, outCertificateErrors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfuncGetDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfuncPrepareShutdown(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackendFactory_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class BackendFactory {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.BackendFactory */
    getHashKey(): string
    getModuleFilename(): string
    newBackend(source: EDataServer.Source): Backend
    shareSubprocess(): boolean
    /* Methods of EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend.BackendFactory */
    vfuncGetHashKey(): string
    vfuncNewBackend(source: EDataServer.Source): Backend
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackendFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BackendFactory_ConstructProps)
    _init (config?: BackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Cache_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cache {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.Cache */
    changeRevision(): void
    clearOfflineChanges(cancellable?: Gio.Cancellable | null): boolean
    contains(uid: string, deletedFlag: CacheDeletedFlag): boolean
    copyMissingToColumnValues(columnNames: string[], columnValues: string[], otherColumns: CacheColumnValues): /* otherColumns */ CacheColumnValues
    dupKey(key: string): string
    dupRevision(): string
    erase(): void
    foreach(deletedFlag: CacheDeletedFlag, whereClause: string | null, func: CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    foreachUpdate(deletedFlag: CacheDeletedFlag, whereClause: string | null, func: CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    freezeRevisionChange(): void
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ CacheColumnValues | null ]
    getCount(deletedFlag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    getFilename(): string
    getKeyInt(key: string): number
    getObjectIncludeDeleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ CacheColumnValues | null ]
    getObjects(deletedFlag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ string[], /* outRevisions */ string[] | null ]
    getOfflineChanges(cancellable?: Gio.Cancellable | null): CacheOfflineChange[]
    getOfflineState(uid: string, cancellable?: Gio.Cancellable | null): OfflineState
    getSqlitedb(): object | null
    getUids(deletedFlag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[], /* outRevisions */ string[] | null ]
    getVersion(): number
    initializeSync(filename: string, otherColumns?: CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    isRevisionChangeFrozen(): boolean
    lock(lockType: CacheLockType): void
    put(uid: string, revision: string | null, object: string, otherColumns: CacheColumnValues | null, offlineFlag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove(uid: string, offlineFlag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    removeAll(cancellable?: Gio.Cancellable | null): boolean
    setKey(key: string, value?: string | null): boolean
    setKeyInt(key: string, value: number): boolean
    setOfflineState(uid: string, state: OfflineState, cancellable?: Gio.Cancellable | null): boolean
    setRevision(revision?: string | null): void
    setVersion(version: number): void
    sqliteExec(sqlStmt: string, cancellable?: Gio.Cancellable | null): boolean
    sqliteMaybeVacuum(cancellable?: Gio.Cancellable | null): boolean
    sqliteSelect(sqlStmt: string, func: CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    thawRevisionChange(): void
    unlock(action: CacheUnlockAction): void
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
    /* Virtual methods of EBackend.Cache */
    vfuncBeforePut(uid: string, revision: string, object: string, otherColumns: CacheColumnValues, isReplace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfuncBeforeRemove(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncClearOfflineChangesLocked(cancellable?: Gio.Cancellable | null): boolean
    vfuncErase(): void
    vfuncPutLocked(uid: string, revision: string, object: string, otherColumns: CacheColumnValues, offlineState: OfflineState, isReplace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfuncRemoveLocked(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncRevisionChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.Cache */
    connect(sigName: "before-put", callback: (($obj: Cache, object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    connect_after(sigName: "before-put", callback: (($obj: Cache, object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    on(sigName: "before-put", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-put", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-put", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "before-remove", callback: (($obj: Cache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    connect_after(sigName: "before-remove", callback: (($obj: Cache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    on(sigName: "before-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "revision-changed", callback: (($obj: Cache) => void)): number
    connect_after(sigName: "revision-changed", callback: (($obj: Cache) => void)): number
    emit(sigName: "revision-changed"): void
    on(sigName: "revision-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "revision-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "revision-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static sqliteStmtFree(stmt: string): void
    static $gtype: GObject.Type
}
export interface CacheReaper_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class CacheReaper {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.CacheReaper */
    addPrivateDirectory(name: string): void
    removePrivateDirectory(name: string): void
    /* Methods of EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
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
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CacheReaper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CacheReaper, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CacheReaper_ConstructProps)
    _init (config?: CacheReaper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static typeRegister(typeModule: GObject.TypeModule): void
    static $gtype: GObject.Type
}
export interface CollectionBackend_ConstructProps extends Backend_ConstructProps {
    server?: SourceRegistryServer
}
export class CollectionBackend {
    /* Properties of EBackend.CollectionBackend */
    readonly proxyResolver: Gio.ProxyResolver
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: UserPrompter
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.CollectionBackend */
    authenticateChildren(credentials: EDataServer.NamedParameters): void
    claimAllResources(): EDataServer.Source[]
    createResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createResourceFinish(result: Gio.AsyncResult): boolean
    createResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    deleteResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteResourceFinish(result: Gio.AsyncResult): boolean
    deleteResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    dupResourceId(childSource: EDataServer.Source): string
    freezePopulate(): boolean
    getCacheDir(): string
    getPartEnabled(parts: CollectionBackendParts): boolean
    getPopulateFrozen(): boolean
    isNewSource(source: EDataServer.Source): boolean
    listCalendarSources(): EDataServer.Source[]
    listContactsSources(): EDataServer.Source[]
    listMailSources(): EDataServer.Source[]
    newChild(resourceId: string): EDataServer.Source
    refProxyResolver(): Gio.ProxyResolver | null
    refServer(): SourceRegistryServer
    schedulePopulate(): void
    thawPopulate(): void
    /* Methods of EBackend.Backend */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    ensureSourceStatusConnected(): void
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    getOnline(): boolean
    getSource(): EDataServer.Source
    getUserPrompter(): object | null
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    prepareShutdown(): void
    refConnectable(): Gio.SocketConnectable | null
    refMainContext(): GLib.MainContext
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    setConnectable(connectable: Gio.SocketConnectable): void
    setOnline(online: boolean): void
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EBackend.CollectionBackend */
    vfuncChildAdded(childSource: EDataServer.Source): void
    vfuncChildRemoved(childSource: EDataServer.Source): void
    vfuncCreateResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCreateResourceFinish(result: Gio.AsyncResult): boolean
    vfuncCreateResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfuncDeleteResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncDeleteResourceFinish(result: Gio.AsyncResult): boolean
    vfuncDeleteResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfuncDupResourceId(childSource: EDataServer.Source): string
    vfuncPopulate(): void
    /* Virtual methods of EBackend.Backend */
    vfuncAuthenticateSync(credentials: EDataServer.NamedParameters, outCertificatePem: string, outCertificateErrors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfuncGetDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfuncPrepareShutdown(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.CollectionBackend */
    connect(sigName: "child-added", callback: (($obj: CollectionBackend, childSource: ServerSideSource) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CollectionBackend, childSource: ServerSideSource) => void)): number
    emit(sigName: "child-added", childSource: ServerSideSource): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CollectionBackend, childSource: ServerSideSource) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CollectionBackend, childSource: ServerSideSource) => void)): number
    emit(sigName: "child-removed", childSource: ServerSideSource): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CollectionBackend_ConstructProps)
    _init (config?: CollectionBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CollectionBackendFactory_ConstructProps extends BackendFactory_ConstructProps {
}
export class CollectionBackendFactory {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.CollectionBackendFactory */
    prepareMail(mailAccountSource: EDataServer.Source, mailIdentitySource: EDataServer.Source, mailTransportSource: EDataServer.Source): void
    /* Methods of EBackend.BackendFactory */
    getHashKey(): string
    getModuleFilename(): string
    newBackend(source: EDataServer.Source): Backend
    shareSubprocess(): boolean
    /* Methods of EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend.CollectionBackendFactory */
    vfuncPrepareMail(mailAccountSource: EDataServer.Source, mailIdentitySource: EDataServer.Source, mailTransportSource: EDataServer.Source): void
    /* Virtual methods of EBackend.BackendFactory */
    vfuncGetHashKey(): string
    vfuncNewBackend(source: EDataServer.Source): Backend
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectionBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectionBackendFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CollectionBackendFactory_ConstructProps)
    _init (config?: CollectionBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusServer {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Virtual methods of EBackend.DBusServer */
    vfuncBusAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameLost(connection: Gio.DBusConnection): void
    vfuncQuitServer(code: DBusServerExitCode): void
    vfuncRunServer(): DBusServerExitCode
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-lost", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "quit-server", callback: (($obj: DBusServer, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DBusServer, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    on(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-server", callback: (($obj: DBusServer) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DBusServer) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    on(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DBusServer_ConstructProps)
    _init (config?: DBusServer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataFactory_ConstructProps extends DBusServer_ConstructProps {
    backendPerProcess?: number
    reloadSupported?: boolean
}
export class DataFactory {
    /* Properties of EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.DataFactory */
    backendClosed(backend: Backend): void
    backendClosedBySender(backend: Backend, sender: string): void
    constructPath(): string
    createBackend(backendFactory: BackendFactory, source: EDataServer.Source): Backend
    getBackendPerProcess(): number
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    listOpenedBackends(): Backend[]
    openBackend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    refBackendFactory(backendName: string, extensionName: string): BackendFactory
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean
    /* Methods of EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.DataFactory */
    vfuncCompleteOpen(invocation: Gio.DBusMethodInvocation, objectPath: string, busName: string, extensionName: string): void
    vfuncCreateBackend(backendFactory: BackendFactory, source: EDataServer.Source): Backend
    vfuncOpenBackend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.DBusServer */
    vfuncBusAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameLost(connection: Gio.DBusConnection): void
    vfuncQuitServer(code: DBusServerExitCode): void
    vfuncRunServer(): DBusServerExitCode
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-lost", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "quit-server", callback: (($obj: DataFactory, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DataFactory, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    on(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-server", callback: (($obj: DataFactory) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DataFactory) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    on(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataFactory_ConstructProps)
    _init (config?: DataFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface FileCache_ConstructProps extends GObject.Object_ConstructProps {
    filename?: string
}
export class FileCache {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.FileCache */
    addObject(key: string, value: string): boolean
    clean(): boolean
    freezeChanges(): void
    getFilename(): string
    getKeys(): string[]
    getObject(key: string): string
    getObjects(): string[]
    remove(): boolean
    removeObject(key: string): boolean
    replaceObject(key: string, newValue: string): boolean
    thawChanges(): void
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
    connect(sigName: "notify", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileCache_ConstructProps)
    _init (config?: FileCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): FileCache
    static $gtype: GObject.Type
}
export interface ServerSideSource_ConstructProps extends EDataServer.Source_ConstructProps {
    file?: Gio.File
    oauth2Support?: OAuth2Support
    remoteCreatable?: boolean
    remoteDeletable?: boolean
    removable?: boolean
    server?: SourceRegistryServer
    writable?: boolean
    writeDirectory?: string
}
export class ServerSideSource {
    /* Properties of EBackend.ServerSideSource */
    readonly exported: boolean
    oauth2Support: OAuth2Support
    remoteCreatable: boolean
    remoteDeletable: boolean
    removable: boolean
    writable: boolean
    writeDirectory: string
    /* Properties of EDataServer.Source */
    readonly connectionStatus: EDataServer.SourceConnectionStatus
    displayName: string
    enabled: boolean
    parent: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.ServerSideSource */
    getExported(): boolean
    getFile(): Gio.File | null
    getNode(): GLib.Node | null
    getServer(): SourceRegistryServer
    getWriteDirectory(): string
    load(cancellable?: Gio.Cancellable | null): boolean
    refOauth2Support(): OAuth2Support | null
    setOauth2Support(oauth2Support: OAuth2Support): void
    setRemoteCreatable(remoteCreatable: boolean): void
    setRemoteDeletable(remoteDeletable: boolean): void
    setRemovable(removable: boolean): void
    setWritable(writable: boolean): void
    setWriteDirectory(writeDirectory: string): void
    /* Methods of EDataServer.Source */
    camelConfigureService(service: Camel.Service): void
    changed(): void
    compareByDisplayName(source2: EDataServer.Source): number
    deletePassword(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deletePasswordFinish(result: Gio.AsyncResult): boolean
    deletePasswordSync(cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupParent(): string
    dupSecretLabel(): string
    dupUid(): string
    emitCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null): void
    equal(source2: EDataServer.Source): boolean
    getConnectionStatus(): EDataServer.SourceConnectionStatus
    getDisplayName(): string
    getEnabled(): boolean
    getExtension(extensionName: string): EDataServer.SourceExtension
    getLastCredentialsRequiredArguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outReason */ EDataServer.SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    getLastCredentialsRequiredArgumentsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReason */ EDataServer.SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    getOauth2AccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getOauth2AccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getOauth2AccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getParent(): string
    getRemoteCreatable(): boolean
    getRemoteDeletable(): boolean
    getRemovable(): boolean
    getUid(): string
    getWritable(): boolean
    hasExtension(extensionName: string): boolean
    hash(): number
    invokeAuthenticate(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeAuthenticateFinish(result: Gio.AsyncResult): boolean
    invokeAuthenticateSync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): boolean
    invokeCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeCredentialsRequiredFinish(result: Gio.AsyncResult): boolean
    invokeCredentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    lookupPassword(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupPasswordFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string ]
    lookupPasswordSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string ]
    mailSignatureLoad(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureLoadFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mailSignatureLoadSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mailSignatureReplace(contents: string, length: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureReplaceFinish(result: Gio.AsyncResult): boolean
    mailSignatureReplaceSync(contents: string, length: number, cancellable?: Gio.Cancellable | null): boolean
    mailSignatureSymlink(symlinkTarget: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureSymlinkFinish(result: Gio.AsyncResult): boolean
    mailSignatureSymlinkSync(symlinkTarget: string, cancellable?: Gio.Cancellable | null): boolean
    proxyLookup(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    proxyLookupFinish(result: Gio.AsyncResult): string[]
    proxyLookupSync(uri: string, cancellable?: Gio.Cancellable | null): string[]
    refDbusObject(): Gio.DBusObject
    refMainContext(): GLib.MainContext
    refreshAddTimeout(context: GLib.MainContext | null, callback: EDataServer.SourceRefreshFunc): number
    refreshForceTimeout(): void
    refreshRemoveTimeout(refreshTimeoutId: number): boolean
    refreshRemoveTimeoutsByData(userData?: object | null): number
    remoteCreate(scratchSource: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remoteCreateFinish(result: Gio.AsyncResult): boolean
    remoteCreateSync(scratchSource: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    remoteDelete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remoteDeleteFinish(result: Gio.AsyncResult): boolean
    remoteDeleteSync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    setConnectionStatus(connectionStatus: EDataServer.SourceConnectionStatus): void
    setDisplayName(displayName: string): void
    setEnabled(enabled: boolean): void
    setParent(parent?: string | null): void
    storePassword(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storePasswordFinish(result: Gio.AsyncResult): boolean
    storePasswordSync(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    toString(length?: number | null): string
    unsetLastCredentialsRequiredArguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unsetLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): boolean
    unsetLastCredentialsRequiredArgumentsSync(cancellable?: Gio.Cancellable | null): boolean
    write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): boolean
    writeSync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): string[]
    /* Virtual methods of EDataServer.Source */
    vfuncAuthenticate(credentials: EDataServer.NamedParameters): void
    vfuncChanged(): void
    vfuncCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error): void
    vfuncGetOauth2AccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetOauth2AccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    vfuncGetOauth2AccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    vfuncInvokeAuthenticateImpl(dbusSource: object | null, argCredentials: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncInvokeCredentialsRequiredImpl(dbusSource: object | null, argReason: string, argCertificatePem: string, argCertificateErrors: string, argDbusErrorName: string, argDbusErrorMessage: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncRemoteCreate(scratchSource: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemoteCreateFinish(result: Gio.AsyncResult): boolean
    vfuncRemoteCreateSync(scratchSource: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfuncRemoteDelete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemoteDeleteFinish(result: Gio.AsyncResult): boolean
    vfuncRemoteDeleteSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemoveFinish(result: Gio.AsyncResult): boolean
    vfuncRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncUnsetLastCredentialsRequiredArgumentsImpl(cancellable?: Gio.Cancellable | null): boolean
    vfuncWrite(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncWriteFinish(result: Gio.AsyncResult): boolean
    vfuncWriteSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncIsSupported(): boolean
    vfuncLookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    vfuncLookupAsync(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncLookupFinish(result: Gio.AsyncResult): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer.Source */
    connect(sigName: "authenticate", callback: (($obj: ServerSideSource, credentials: EDataServer.NamedParameters) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: ServerSideSource, credentials: EDataServer.NamedParameters) => void)): number
    emit(sigName: "authenticate", credentials: EDataServer.NamedParameters): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: ServerSideSource) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ServerSideSource) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "credentials-required", callback: (($obj: ServerSideSource, reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    connect_after(sigName: "credentials-required", callback: (($obj: ServerSideSource, reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    emit(sigName: "credentials-required", reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error): void
    on(sigName: "credentials-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exported", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth2-support", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-support", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-creatable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-creatable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-deletable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-deletable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::removable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-directory", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-directory", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection-status", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServerSideSource_ConstructProps)
    _init (config?: ServerSideSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(server: SourceRegistryServer, file: Gio.File): ServerSideSource
    static new(dbusObject?: Gio.DBusObject | null, mainContext?: GLib.MainContext | null): ServerSideSource
    static newMemoryOnly(server: SourceRegistryServer, uid: string): ServerSideSource
    static getUserDir(): string
    static newUserFile(uid: string): Gio.File
    static uidFromFile(file: Gio.File): string
    static $gtype: GObject.Type
}
export interface ServerSideSourceCredentialsProvider_ConstructProps extends EDataServer.SourceCredentialsProvider_ConstructProps {
}
export class ServerSideSourceCredentialsProvider {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer.SourceCredentialsProvider */
    canPrompt(source: EDataServer.Source): boolean
    canStore(source: EDataServer.Source): boolean
    delete(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    lookup(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCredentials */ EDataServer.NamedParameters ]
    lookupSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ EDataServer.NamedParameters ]
    refCredentialsSource(source: EDataServer.Source): EDataServer.Source
    refRegistry(): GObject.Object
    refSource(uid: string): EDataServer.Source
    registerImpl(providerImpl: EDataServer.SourceCredentialsProviderImpl): boolean
    store(source: EDataServer.Source, credentials: EDataServer.NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storeFinish(result: Gio.AsyncResult): boolean
    storeSync(source: EDataServer.Source, credentials: EDataServer.NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    unregisterImpl(providerImpl: EDataServer.SourceCredentialsProviderImpl): void
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
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Virtual methods of EDataServer.SourceCredentialsProvider */
    vfuncRefSource(uid: string): EDataServer.Source
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerSideSourceCredentialsProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerSideSourceCredentialsProvider, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServerSideSourceCredentialsProvider_ConstructProps)
    _init (config?: ServerSideSourceCredentialsProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: SourceRegistryServer): ServerSideSourceCredentialsProvider
    static new(registry: EDataServer.SourceRegistry): ServerSideSourceCredentialsProvider
    static $gtype: GObject.Type
}
export interface SourceRegistryServer_ConstructProps extends DataFactory_ConstructProps {
}
export class SourceRegistryServer {
    /* Properties of EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.SourceRegistryServer */
    addSource(source: EDataServer.Source): void
    findExtension(source: EDataServer.Source, extensionName: string): EDataServer.Source | null
    getOauth2Services(): EDataServer.OAuth2Services
    listSources(extensionName: string): EDataServer.Source[]
    loadDirectory(path: string, flags: SourcePermissionFlags): boolean
    loadError(file: Gio.File, error: GLib.Error): void
    loadFile(file: Gio.File, flags: SourcePermissionFlags): EDataServer.Source | null
    loadResource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags): boolean
    refBackend(source: EDataServer.Source): CollectionBackend | null
    refBackendFactory(source: EDataServer.Source): CollectionBackendFactory | null
    refCredentialsProvider(): EDataServer.SourceCredentialsProvider
    refOauth2Support(): OAuth2Support | null
    refSource(uid: string): EDataServer.Source | null
    removeSource(source: EDataServer.Source): void
    /* Methods of EBackend.DataFactory */
    backendClosed(backend: Backend): void
    backendClosedBySender(backend: Backend, sender: string): void
    constructPath(): string
    createBackend(backendFactory: BackendFactory, source: EDataServer.Source): Backend
    getBackendPerProcess(): number
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    listOpenedBackends(): Backend[]
    openBackend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    refBackendFactory(backendName: string, extensionName: string): BackendFactory
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean
    /* Methods of EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    /* Methods of EBackend.OAuth2Support */
    getAccessToken(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getAccessTokenSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.SourceRegistryServer */
    vfuncFilesLoaded(): void
    vfuncLoadError(file: Gio.File, error: GLib.Error): void
    vfuncSourceAdded(source: EDataServer.Source): void
    vfuncSourceRemoved(source: EDataServer.Source): void
    vfuncTweakKeyFile(keyFile: GLib.KeyFile, uid: string): boolean
    vfuncGetAccessToken(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetAccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    vfuncGetAccessTokenSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    /* Virtual methods of EBackend.DataFactory */
    vfuncCompleteOpen(invocation: Gio.DBusMethodInvocation, objectPath: string, busName: string, extensionName: string): void
    vfuncCreateBackend(backendFactory: BackendFactory, source: EDataServer.Source): Backend
    vfuncOpenBackend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.DBusServer */
    vfuncBusAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameLost(connection: Gio.DBusConnection): void
    vfuncQuitServer(code: DBusServerExitCode): void
    vfuncRunServer(): DBusServerExitCode
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.SourceRegistryServer */
    connect(sigName: "files-loaded", callback: (($obj: SourceRegistryServer) => void)): number
    connect_after(sigName: "files-loaded", callback: (($obj: SourceRegistryServer) => void)): number
    emit(sigName: "files-loaded"): void
    on(sigName: "files-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "files-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "files-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "load-error", callback: (($obj: SourceRegistryServer, file: Gio.File, error: GLib.Error) => void)): number
    connect_after(sigName: "load-error", callback: (($obj: SourceRegistryServer, file: Gio.File, error: GLib.Error) => void)): number
    emit(sigName: "load-error", file: Gio.File, error: GLib.Error): void
    on(sigName: "load-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-added", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    emit(sigName: "source-added", source: ServerSideSource): void
    on(sigName: "source-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-removed", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    emit(sigName: "source-removed", source: ServerSideSource): void
    on(sigName: "source-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "tweak-key-file", callback: (($obj: SourceRegistryServer, keyFile: GLib.KeyFile, uid: string) => boolean)): number
    connect_after(sigName: "tweak-key-file", callback: (($obj: SourceRegistryServer, keyFile: GLib.KeyFile, uid: string) => boolean)): number
    emit(sigName: "tweak-key-file", keyFile: GLib.KeyFile, uid: string): void
    on(sigName: "tweak-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "tweak-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "tweak-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-lost", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "quit-server", callback: (($obj: SourceRegistryServer, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: SourceRegistryServer, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    on(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-server", callback: (($obj: SourceRegistryServer) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: SourceRegistryServer) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    on(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceRegistryServer_ConstructProps)
    _init (config?: SourceRegistryServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SourceRegistryServer
    static $gtype: GObject.Type
}
export interface SubprocessFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class SubprocessFactory {
    /* Properties of EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.SubprocessFactory */
    callBackendsPrepareShutdown(): void
    getBackendsList(): Backend[]
    getRegistry(): EDataServer.SourceRegistry
    openBackend(connection: Gio.DBusConnection, uid: string, backendFactoryTypeName: string, moduleFilename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    refInitableBackend(uid: string, backendFactoryTypeName: string, moduleFilename: string, cancellable?: Gio.Cancellable | null): Backend | null
    setBackendCallbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
    /* Virtual methods of EBackend.SubprocessFactory */
    vfuncBackendClosed(backend: Backend): void
    vfuncBackendCreated(backend: Backend): void
    vfuncOpenData(backend: Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null): string
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SubprocessFactory_ConstructProps)
    _init (config?: SubprocessFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static constructPath(): string
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface UserPrompter_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserPrompter {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.UserPrompter */
    extensionPrompt(dialogName: string, inParameters?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    extensionPromptFinish(result: Gio.AsyncResult, outValues?: EDataServer.NamedParameters | null): number
    extensionPromptSync(dialogName: string, inParameters?: EDataServer.NamedParameters | null, outValues?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): number
    prompt(type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    promptFinish(result: Gio.AsyncResult): number
    promptSync(type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null, cancellable?: Gio.Cancellable | null): number
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
    connect(sigName: "notify", callback: (($obj: UserPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserPrompter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UserPrompter_ConstructProps)
    _init (config?: UserPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserPrompter
    static $gtype: GObject.Type
}
export interface UserPrompterServer_ConstructProps extends DBusServer_ConstructProps {
}
export class UserPrompterServer {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.UserPrompterServer */
    register(extension: EDataServer.Extension, dialogName: string): boolean
    response(promptId: number, response: number, extensionValues?: EDataServer.NamedParameters | null): void
    /* Methods of EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Virtual methods of EBackend.DBusServer */
    vfuncBusAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameLost(connection: Gio.DBusConnection): void
    vfuncQuitServer(code: DBusServerExitCode): void
    vfuncRunServer(): DBusServerExitCode
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.UserPrompterServer */
    connect(sigName: "prompt", callback: (($obj: UserPrompterServer, promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null) => void)): number
    connect_after(sigName: "prompt", callback: (($obj: UserPrompterServer, promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null) => void)): number
    emit(sigName: "prompt", promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null): void
    on(sigName: "prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-lost", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "quit-server", callback: (($obj: UserPrompterServer, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: UserPrompterServer, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    on(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-server", callback: (($obj: UserPrompterServer) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: UserPrompterServer) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    on(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserPrompterServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserPrompterServer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UserPrompterServer_ConstructProps)
    _init (config?: UserPrompterServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserPrompterServer
    static $gtype: GObject.Type
}
export interface UserPrompterServerExtension_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class UserPrompterServerExtension {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.UserPrompterServerExtension */
    prompt(promptId: number, dialogName: string, parameters?: EDataServer.NamedParameters | null): boolean
    response(promptId: number, response: number, values?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend.UserPrompterServerExtension */
    vfuncPrompt(promptId: number, dialogName: string, parameters?: EDataServer.NamedParameters | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserPrompterServerExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserPrompterServerExtension, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UserPrompterServerExtension_ConstructProps)
    _init (config?: UserPrompterServerExtension_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebDAVCollectionBackend_ConstructProps extends CollectionBackend_ConstructProps {
}
export class WebDAVCollectionBackend {
    /* Properties of EBackend.CollectionBackend */
    readonly proxyResolver: Gio.ProxyResolver
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: UserPrompter
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.WebDAVCollectionBackend */
    discoverSync(calendarUrl: string | null, contactsUrl: string | null, credentials: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): [ /* returnType */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags | null ]
    getResourceId(source: EDataServer.Source): string | null
    isCustomSource(source: EDataServer.Source): boolean
    /* Methods of EBackend.CollectionBackend */
    authenticateChildren(credentials: EDataServer.NamedParameters): void
    claimAllResources(): EDataServer.Source[]
    createResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createResourceFinish(result: Gio.AsyncResult): boolean
    createResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    deleteResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteResourceFinish(result: Gio.AsyncResult): boolean
    deleteResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    dupResourceId(childSource: EDataServer.Source): string
    freezePopulate(): boolean
    getCacheDir(): string
    getPartEnabled(parts: CollectionBackendParts): boolean
    getPopulateFrozen(): boolean
    isNewSource(source: EDataServer.Source): boolean
    listCalendarSources(): EDataServer.Source[]
    listContactsSources(): EDataServer.Source[]
    listMailSources(): EDataServer.Source[]
    newChild(resourceId: string): EDataServer.Source
    refProxyResolver(): Gio.ProxyResolver | null
    refServer(): SourceRegistryServer
    schedulePopulate(): void
    thawPopulate(): void
    /* Methods of EBackend.Backend */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    ensureSourceStatusConnected(): void
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    getOnline(): boolean
    getSource(): EDataServer.Source
    getUserPrompter(): object | null
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    prepareShutdown(): void
    refConnectable(): Gio.SocketConnectable | null
    refMainContext(): GLib.MainContext
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    setConnectable(connectable: Gio.SocketConnectable): void
    setOnline(online: boolean): void
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EBackend.WebDAVCollectionBackend */
    vfuncGetResourceId(source: EDataServer.Source): string | null
    vfuncIsCustomSource(source: EDataServer.Source): boolean
    /* Virtual methods of EBackend.CollectionBackend */
    vfuncChildAdded(childSource: EDataServer.Source): void
    vfuncChildRemoved(childSource: EDataServer.Source): void
    vfuncCreateResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCreateResourceFinish(result: Gio.AsyncResult): boolean
    vfuncCreateResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfuncDeleteResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncDeleteResourceFinish(result: Gio.AsyncResult): boolean
    vfuncDeleteResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfuncDupResourceId(childSource: EDataServer.Source): string
    vfuncPopulate(): void
    /* Virtual methods of EBackend.Backend */
    vfuncAuthenticateSync(credentials: EDataServer.NamedParameters, outCertificatePem: string, outCertificateErrors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfuncGetDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfuncPrepareShutdown(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.CollectionBackend */
    connect(sigName: "child-added", callback: (($obj: WebDAVCollectionBackend, childSource: ServerSideSource) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: WebDAVCollectionBackend, childSource: ServerSideSource) => void)): number
    emit(sigName: "child-added", childSource: ServerSideSource): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: WebDAVCollectionBackend, childSource: ServerSideSource) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: WebDAVCollectionBackend, childSource: ServerSideSource) => void)): number
    emit(sigName: "child-removed", childSource: ServerSideSource): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebDAVCollectionBackend_ConstructProps)
    _init (config?: WebDAVCollectionBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class BackendClass {
    /* Fields of EBackend.BackendClass */
    getDestinationAddress: (backend: Backend) => [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    prepareShutdown: (backend: Backend) => void
    authenticateSync: (backend: Backend, credentials: EDataServer.NamedParameters, outCertificatePem: string, outCertificateErrors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null) => EDataServer.SourceAuthenticationResult
    static name: string
}
export abstract class BackendFactoryClass {
    /* Fields of EBackend.BackendFactoryClass */
    getHashKey: (factory: BackendFactory) => string
    newBackend: (factory: BackendFactory, source: EDataServer.Source) => Backend
    eModule: object
    shareSubprocess: boolean
    static name: string
}
export class BackendFactoryPrivate {
    static name: string
}
export class BackendPrivate {
    static name: string
}
export abstract class CacheClass {
    /* Fields of EBackend.CacheClass */
    putLocked: (cache: Cache, uid: string, revision: string, object: string, otherColumns: CacheColumnValues, offlineState: OfflineState, isReplace: boolean, cancellable?: Gio.Cancellable | null) => boolean
    removeLocked: (cache: Cache, uid: string, cancellable?: Gio.Cancellable | null) => boolean
    clearOfflineChangesLocked: (cache: Cache, cancellable?: Gio.Cancellable | null) => boolean
    erase: (cache: Cache) => void
    beforePut: (cache: Cache, uid: string, revision: string, object: string, otherColumns: CacheColumnValues, isReplace: boolean, cancellable?: Gio.Cancellable | null) => boolean
    beforeRemove: (cache: Cache, uid: string, cancellable?: Gio.Cancellable | null) => boolean
    revisionChanged: (cache: Cache) => void
    static name: string
}
export class CacheColumnInfo {
    /* Fields of EBackend.CacheColumnInfo */
    name: string
    type: string
    indexName: string
    /* Methods of EBackend.CacheColumnInfo */
    copy(): CacheColumnInfo
    static name: string
    static new(name: string, type: string, indexName?: string | null): CacheColumnInfo
    constructor(name: string, type: string, indexName?: string | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, type: string, indexName?: string | null): CacheColumnInfo
    static free(info?: object | null): void
}
export class CacheColumnValues {
    /* Methods of EBackend.CacheColumnValues */
    contains(name: string): boolean
    copy(): CacheColumnValues
    free(): void
    getSize(): number
    initIter(iter: GLib.HashTableIter): void
    lookup(name: string): string
    put(name: string, value?: string | null): void
    remove(name: string): boolean
    removeAll(): void
    take(name: string, value?: string | null): void
    takeValue(name: string, value?: string | null): void
    static name: string
    static new(): CacheColumnValues
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): CacheColumnValues
}
export class CacheOfflineChange {
    /* Fields of EBackend.CacheOfflineChange */
    uid: string
    revision: string
    object: string
    state: OfflineState
    /* Methods of EBackend.CacheOfflineChange */
    copy(): CacheOfflineChange
    static name: string
    static new(uid: string, revision: string | null, object: string | null, state: OfflineState): CacheOfflineChange
    constructor(uid: string, revision: string | null, object: string | null, state: OfflineState)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision: string | null, object: string | null, state: OfflineState): CacheOfflineChange
    static free(change?: object | null): void
}
export class CachePrivate {
    static name: string
}
export abstract class CacheReaperClass {
    static name: string
}
export abstract class CollectionBackendClass {
    /* Fields of EBackend.CollectionBackendClass */
    populate: (backend: CollectionBackend) => void
    dupResourceId: (backend: CollectionBackend, childSource: EDataServer.Source) => string
    childAdded: (backend: CollectionBackend, childSource: EDataServer.Source) => void
    childRemoved: (backend: CollectionBackend, childSource: EDataServer.Source) => void
    createResourceSync: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null) => boolean
    createResource: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    createResourceFinish: (backend: CollectionBackend, result: Gio.AsyncResult) => boolean
    deleteResourceSync: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null) => boolean
    deleteResource: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    deleteResourceFinish: (backend: CollectionBackend, result: Gio.AsyncResult) => boolean
    static name: string
}
export abstract class CollectionBackendFactoryClass {
    /* Fields of EBackend.CollectionBackendFactoryClass */
    prepareMail: (factory: CollectionBackendFactory, mailAccountSource: EDataServer.Source, mailIdentitySource: EDataServer.Source, mailTransportSource: EDataServer.Source) => void
    static name: string
}
export class CollectionBackendFactoryPrivate {
    static name: string
}
export class CollectionBackendPrivate {
    static name: string
}
export abstract class DBusServerClass {
    /* Fields of EBackend.DBusServerClass */
    parentClass: GObject.ObjectClass
    busName: string
    moduleDirectory: string
    busAcquired: (server: DBusServer, connection: Gio.DBusConnection) => void
    busNameAcquired: (server: DBusServer, connection: Gio.DBusConnection) => void
    busNameLost: (server: DBusServer, connection: Gio.DBusConnection) => void
    runServer: (server: DBusServer) => DBusServerExitCode
    quitServer: (server: DBusServer, code: DBusServerExitCode) => void
    reserved: object[]
    static name: string
}
export class DBusServerPrivate {
    static name: string
}
export abstract class DataFactoryClass {
    /* Fields of EBackend.DataFactoryClass */
    parentClass: DBusServerClass
    backendFactoryType: GObject.Type
    factoryObjectPath: string
    dataObjectPathPrefix: string
    subprocessObjectPathPrefix: string
    subprocessBusNamePrefix: string
    getFactoryName: (backendFactory: BackendFactory) => string
    completeOpen: (dataFactory: DataFactory, invocation: Gio.DBusMethodInvocation, objectPath: string, busName: string, extensionName: string) => void
    createBackend: (dataFactory: DataFactory, backendFactory: BackendFactory, source: EDataServer.Source) => Backend
    openBackend: (dataFactory: DataFactory, backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null) => string
    reserved: object[]
    static name: string
}
export class DataFactoryPrivate {
    static name: string
}
export abstract class FileCacheClass {
    /* Fields of EBackend.FileCacheClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class FileCachePrivate {
    static name: string
}
export abstract class OAuth2SupportInterface {
    /* Fields of EBackend.OAuth2SupportInterface */
    getAccessTokenSync: (support: OAuth2Support, source: EDataServer.Source, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getAccessToken: (support: OAuth2Support, source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    getAccessTokenFinish: (support: OAuth2Support, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    static name: string
}
export abstract class ServerSideSourceClass {
    /* Fields of EBackend.ServerSideSourceClass */
    parentClass: EDataServer.SourceClass
    static name: string
}
export abstract class ServerSideSourceCredentialsProviderClass {
    /* Fields of EBackend.ServerSideSourceCredentialsProviderClass */
    parentClass: EDataServer.SourceCredentialsProviderClass
    static name: string
}
export class ServerSideSourceCredentialsProviderPrivate {
    static name: string
}
export class ServerSideSourcePrivate {
    static name: string
}
export abstract class SourceRegistryServerClass {
    /* Fields of EBackend.SourceRegistryServerClass */
    parentClass: DataFactoryClass
    loadError: (server: SourceRegistryServer, file: Gio.File, error: GLib.Error) => void
    filesLoaded: (server: SourceRegistryServer) => void
    sourceAdded: (server: SourceRegistryServer, source: EDataServer.Source) => void
    sourceRemoved: (server: SourceRegistryServer, source: EDataServer.Source) => void
    tweakKeyFile: (server: SourceRegistryServer, keyFile: GLib.KeyFile, uid: string) => boolean
    reserved: object[]
    static name: string
}
export class SourceRegistryServerPrivate {
    static name: string
}
export abstract class SubprocessFactoryClass {
    /* Fields of EBackend.SubprocessFactoryClass */
    parentClass: GObject.ObjectClass
    openData: (subprocessFactory: SubprocessFactory, backend: Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null) => string
    backendCreated: (subprocessFactory: SubprocessFactory, backend: Backend) => void
    backendClosed: (subprocessFactory: SubprocessFactory, backend: Backend) => void
    static name: string
}
export class SubprocessFactoryPrivate {
    static name: string
}
export abstract class UserPrompterClass {
    /* Fields of EBackend.UserPrompterClass */
    parent: GObject.ObjectClass
    static name: string
}
export class UserPrompterPrivate {
    static name: string
}
export abstract class UserPrompterServerClass {
    /* Fields of EBackend.UserPrompterServerClass */
    parentClass: DBusServerClass
    static name: string
}
export abstract class UserPrompterServerExtensionClass {
    /* Fields of EBackend.UserPrompterServerExtensionClass */
    parentClass: EDataServer.ExtensionClass
    registerDialogs: (extension: EDataServer.Extension, server: object) => void
    prompt: (extension: UserPrompterServerExtension, promptId: number, dialogName: string, parameters?: EDataServer.NamedParameters | null) => boolean
    static name: string
}
export class UserPrompterServerExtensionPrivate {
    static name: string
}
export class UserPrompterServerPrivate {
    static name: string
}
export abstract class WebDAVCollectionBackendClass {
    /* Fields of EBackend.WebDAVCollectionBackendClass */
    parentClass: CollectionBackendClass
    getResourceId: (webdavBackend: WebDAVCollectionBackend, source: EDataServer.Source) => string | null
    isCustomSource: (webdavBackend: WebDAVCollectionBackend, source: EDataServer.Source) => boolean
    static name: string
}
export class WebDAVCollectionBackendPrivate {
    static name: string
}
}