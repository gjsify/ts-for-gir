/**
 * EDataBook-1.2
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { EDataServer } from './EDataServer-1.2';
import type { Soup } from './Soup-2.4';
import type { GData } from './GData-0.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';
import type { Camel } from './Camel-1.2';
import type { EBookContacts } from './EBookContacts-1.2';
import type { EBackend } from './EBackend-1.2';

export declare namespace EDataBook {

export enum BookCacheCursorOrigin {
    CURRENT,
    BEGIN,
    END,
}
export enum BookSqliteError {
    ENGINE,
    CONSTRAINT,
    CONTACT_NOT_FOUND,
    INVALID_QUERY,
    UNSUPPORTED_QUERY,
    UNSUPPORTED_FIELD,
    END_OF_LIST,
    LOAD,
}
export enum bSqlChangeType {
    CONTACT_ADDED,
    LOCALE_CHANGED,
    LAST,
}
export enum bSqlCursorOrigin {
    CURRENT,
    BEGIN,
    END,
}
export enum bSqlLockType {
    READ,
    WRITE,
}
export enum bSqlUnlockAction {
    NONE,
    COMMIT,
    ROLLBACK,
}
export enum BookCacheCursorStepFlags {
    MOVE,
    FETCH,
}
export enum bSqlCursorStepFlags {
    MOVE,
    FETCH,
}
export const BOOK_SQL_IS_POPULATED_KEY: string
export const BOOK_SQL_SYNC_DATA_KEY: string
export const EDS_ADDRESS_BOOK_MODULES: string
export const EDS_SUBPROCESS_BOOK_PATH: string
export const XIMIAN_VCARD: string
export function bookCacheSearchDataFree(data?: object | null): void
export function bookMetaBackendInfoFree(ptr?: object | null): void
export function ebsqlGetContactExtraUnlocked(ebsql: BookSqlite, uid: string): [ /* returnType */ boolean, /* retExtra */ string ]
export function ebsqlGetContactUnlocked(ebsql: BookSqlite, uid: string, metaContact: boolean): [ /* returnType */ boolean, /* contact */ EBookContacts.Contact ]
export function ebsqlGetVcardUnlocked(ebsql: BookSqlite, uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retVcard */ string ]
export interface BookBackendCustomOpFunc {
    (bookBackend: BookBackend, cancellable?: Gio.Cancellable | null): void
}
export interface BookBackendForeachViewFunc {
    (backend: BookBackend, view: DataBookView): boolean
}
export interface BookCacheSearchFunc {
    (bookCache: BookCache, uid: string, revision: string, object: string, extra: string, customFlags: number, offlineState: EBackend.OfflineState): boolean
}
export interface DataBookCursorCompareContactFunc {
    (cursor: DataBookCursor, contact: EBookContacts.Contact): number
}
export interface DataBookCursorGetPositionFunc {
    (cursor: DataBookCursor, cancellable?: Gio.Cancellable | null): boolean
}
export interface DataBookCursorLoadLocaleFunc {
    (cursor: DataBookCursor): boolean
}
export interface DataBookCursorSetAlphabetIndexFunc {
    (cursor: DataBookCursor, index: number, locale: string): boolean
}
export interface DataBookCursorSetSexpFunc {
    (cursor: DataBookCursor, sexp?: string | null): boolean
}
export interface DataBookCursorStepFunc {
    (cursor: DataBookCursor, revisionGuard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): number
}
export interface bSqlChangeCallback {
    (changeType: bSqlChangeType, uid: string, extra: string, vcard: string): void
}
export interface bSqlVCardCallback {
    (uid: string, extra: string): string
}
export interface BookBackend_ConstructProps extends EBackend.Backend_ConstructProps {
    cacheDir?: string
    registry?: EDataServer.SourceRegistry
    writable?: boolean
}
export class BookBackend {
    /* Properties of EDataBook.BookBackend */
    cacheDir: string
    readonly proxyResolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.BookBackend */
    addView(view: DataBookView): void
    configureDirect(config: string): void
    createContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createContactsFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
    createContactsSync(vcards: string, opflags: number, outContacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    createCursor(sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number): DataBookCursor
    deleteCursor(cursor: DataBookCursor): boolean
    dupCacheDir(): string
    dupLocale(): string
    foreachView(): boolean
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
    getBackendProperty(propName: string): string
    getCacheDir(): string
    getContact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactFinish(result: Gio.AsyncResult): EBookContacts.Contact
    getContactList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactListFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
    getContactListSync(query: string, outContacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactListUidsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
    getContactListUidsSync(query: string, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getContactSync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    getDirectBook(): DataBookDirect | null
    getRegistry(): EDataServer.SourceRegistry
    getWritable(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    listViews(): DataBookView[]
    modifyContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyContactsFinish(result: Gio.AsyncResult): boolean
    modifyContactsSync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    notifyComplete(): void
    notifyError(message: string): void
    notifyPropertyChanged(propName: string, propValue?: string | null): void
    notifyRemove(id: string): void
    notifyUpdate(contact: EBookContacts.Contact): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(cancellable?: Gio.Cancellable | null): boolean
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
    refDataBook(): DataBook | null
    refProxyResolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    removeContacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContactsFinish(result: Gio.AsyncResult): boolean
    removeContactsSync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    removeView(view: DataBookView): void
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    setCacheDir(cacheDir: string): void
    setDataBook(dataBook: DataBook): void
    setLocale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    setWritable(writable: boolean): void
    startView(view: DataBookView): void
    stopView(view: DataBookView): void
    sync(): void
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
    /* Virtual methods of EDataBook.BookBackend */
    vfuncClosed(sender: string): void
    vfuncImplConfigureDirect(config: string): void
    vfuncImplCreateContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfuncImplDeleteCursor(cursor: DataBookCursor): boolean
    vfuncImplDupLocale(): string
    vfuncImplGetBackendProperty(propName: string): string
    vfuncImplGetContact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfuncImplGetContactList(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfuncImplGetContactListUids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfuncImplModifyContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfuncImplNotifyUpdate(contact: EBookContacts.Contact): void
    vfuncImplOpen(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfuncImplRefresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfuncImplRemoveContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfuncImplSetLocale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncImplStartView(view: DataBookView): void
    vfuncImplStopView(view: DataBookView): void
    vfuncShutdown(): void
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
    /* Signals of EDataBook.BookBackend */
    connect(sigName: "closed", callback: (($obj: BookBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "shutdown", callback: (($obj: BookBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookBackend) => void)): number
    emit(sigName: "shutdown"): void
    on(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackend, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookBackend_ConstructProps)
    _init (config?: BookBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}
export class BookBackendFactory {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.BackendFactory */
    getHashKey(): string
    getModuleFilename(): string
    newBackend(source: EDataServer.Source): EBackend.Backend
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
    vfuncNewBackend(source: EDataServer.Source): EBackend.Backend
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookBackendFactory_ConstructProps)
    _init (config?: BookBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}
export class BookBackendSExp {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.BookBackendSExp */
    lock(): void
    matchContact(contact: EBookContacts.Contact): boolean
    matchVcard(vcard: string): boolean
    text(): string
    unlock(): void
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
    connect(sigName: "notify", callback: (($obj: BookBackendSExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendSExp, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookBackendSExp_ConstructProps)
    _init (config?: BookBackendSExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): BookBackendSExp
    static $gtype: GObject.Type
}
export interface BookBackendSync_ConstructProps extends BookBackend_ConstructProps {
}
export class BookBackendSync {
    /* Properties of EDataBook.BookBackend */
    cacheDir: string
    readonly proxyResolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.BookBackendSync */
    createContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    getContact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    getContactList(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    modifyContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    open(cancellable?: Gio.Cancellable | null): boolean
    refresh(cancellable?: Gio.Cancellable | null): boolean
    removeContacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRemovedUids */ string[] ]
    /* Methods of EDataBook.BookBackend */
    addView(view: DataBookView): void
    configureDirect(config: string): void
    createContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createContactsFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
    createContactsSync(vcards: string, opflags: number, outContacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    createCursor(sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number): DataBookCursor
    deleteCursor(cursor: DataBookCursor): boolean
    dupCacheDir(): string
    dupLocale(): string
    foreachView(): boolean
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
    getBackendProperty(propName: string): string
    getCacheDir(): string
    getContact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactFinish(result: Gio.AsyncResult): EBookContacts.Contact
    getContactList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactListFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
    getContactListSync(query: string, outContacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactListUidsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
    getContactListUidsSync(query: string, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getContactSync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    getDirectBook(): DataBookDirect | null
    getRegistry(): EDataServer.SourceRegistry
    getWritable(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    listViews(): DataBookView[]
    modifyContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyContactsFinish(result: Gio.AsyncResult): boolean
    modifyContactsSync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    notifyComplete(): void
    notifyError(message: string): void
    notifyPropertyChanged(propName: string, propValue?: string | null): void
    notifyRemove(id: string): void
    notifyUpdate(contact: EBookContacts.Contact): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(cancellable?: Gio.Cancellable | null): boolean
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
    refDataBook(): DataBook | null
    refProxyResolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    removeContacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContactsFinish(result: Gio.AsyncResult): boolean
    removeContactsSync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    removeView(view: DataBookView): void
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    setCacheDir(cacheDir: string): void
    setDataBook(dataBook: DataBook): void
    setLocale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    setWritable(writable: boolean): void
    startView(view: DataBookView): void
    stopView(view: DataBookView): void
    sync(): void
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
    /* Virtual methods of EDataBook.BookBackendSync */
    vfuncOpenSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook.BookBackend */
    vfuncClosed(sender: string): void
    vfuncImplConfigureDirect(config: string): void
    vfuncImplCreateContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfuncImplDeleteCursor(cursor: DataBookCursor): boolean
    vfuncImplDupLocale(): string
    vfuncImplGetBackendProperty(propName: string): string
    vfuncImplGetContact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfuncImplGetContactList(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfuncImplGetContactListUids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfuncImplModifyContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfuncImplNotifyUpdate(contact: EBookContacts.Contact): void
    vfuncImplOpen(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfuncImplRefresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfuncImplRemoveContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfuncImplSetLocale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncImplStartView(view: DataBookView): void
    vfuncImplStopView(view: DataBookView): void
    vfuncShutdown(): void
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
    /* Signals of EDataBook.BookBackend */
    connect(sigName: "closed", callback: (($obj: BookBackendSync, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookBackendSync, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "shutdown", callback: (($obj: BookBackendSync) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookBackendSync) => void)): number
    emit(sigName: "shutdown"): void
    on(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookBackendSync, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookBackendSync_ConstructProps)
    _init (config?: BookBackendSync_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookCache_ConstructProps extends EBackend.Cache_ConstructProps {
}
export class BookCache {
    /* Properties of EDataBook.BookCache */
    readonly locale: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.BookCache */
    cursorCalculate(cursor: BookCacheCursor, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTotal */ number | null, /* outPosition */ number | null ]
    cursorCompareContact(cursor: BookCacheCursor, contact: EBookContacts.Contact): [ /* returnType */ number, /* outMatchesSexp */ boolean | null ]
    cursorFree(cursor: BookCacheCursor): void
    cursorSetSexp(cursor: BookCacheCursor, sexp: string): boolean
    cursorSetTargetAlphabeticIndex(cursor: BookCacheCursor, idx: number): void
    cursorStep(cursor: BookCacheCursor, flags: BookCacheCursorStepFlags, origin: BookCacheCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* outResults */ BookCacheSearchData[] | null ]
    dupContactRevision(contact: EBookContacts.Contact): string
    dupLocale(): string
    getContact(uid: string, metaContact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact ]
    getContactCustomFlags(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCustomFlags */ number ]
    getContactExtra(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExtra */ string ]
    getUidsWithExtra(extra: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    getVcard(uid: string, metaContact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outVcard */ string ]
    putContact(contact: EBookContacts.Contact, extra: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    putContacts(contacts: EBookContacts.Contact[], extras: string[] | null, customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    refCollator(): EDataServer.Collator
    refSource(): EDataServer.Source
    removeContact(uid: string, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    removeContacts(uids: string[], customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    search(sexp: string | null, metaContacts: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outList */ BookCacheSearchData[] ]
    searchUids(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outList */ string[] ]
    searchWithCallback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    setContactCustomFlags(uid: string, customFlags: number, cancellable?: Gio.Cancellable | null): boolean
    setContactExtra(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean
    setLocale(lcCollate: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EBackend.Cache */
    changeRevision(): void
    clearOfflineChanges(cancellable?: Gio.Cancellable | null): boolean
    contains(uid: string, deletedFlag: EBackend.CacheDeletedFlag): boolean
    copyMissingToColumnValues(columnNames: string[], columnValues: string[], otherColumns: EBackend.CacheColumnValues): /* otherColumns */ EBackend.CacheColumnValues
    dupKey(key: string): string
    dupRevision(): string
    erase(): void
    foreach(deletedFlag: EBackend.CacheDeletedFlag, whereClause: string | null, func: EBackend.CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    foreachUpdate(deletedFlag: EBackend.CacheDeletedFlag, whereClause: string | null, func: EBackend.CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    freezeRevisionChange(): void
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ EBackend.CacheColumnValues | null ]
    getCount(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    getFilename(): string
    getKeyInt(key: string): number
    getObjectIncludeDeleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ EBackend.CacheColumnValues | null ]
    getObjects(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ string[], /* outRevisions */ string[] | null ]
    getOfflineChanges(cancellable?: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    getOfflineState(uid: string, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    getSqlitedb(): object | null
    getUids(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[], /* outRevisions */ string[] | null ]
    getVersion(): number
    initializeSync(filename: string, otherColumns?: EBackend.CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    isRevisionChangeFrozen(): boolean
    lock(lockType: EBackend.CacheLockType): void
    put(uid: string, revision: string | null, object: string, otherColumns: EBackend.CacheColumnValues | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove(uid: string, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    removeAll(cancellable?: Gio.Cancellable | null): boolean
    setKey(key: string, value?: string | null): boolean
    setKeyInt(key: string, value: number): boolean
    setOfflineState(uid: string, state: EBackend.OfflineState, cancellable?: Gio.Cancellable | null): boolean
    setRevision(revision?: string | null): void
    setVersion(version: number): void
    sqliteExec(sqlStmt: string, cancellable?: Gio.Cancellable | null): boolean
    sqliteMaybeVacuum(cancellable?: Gio.Cancellable | null): boolean
    sqliteSelect(sqlStmt: string, func: EBackend.CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    thawRevisionChange(): void
    unlock(action: EBackend.CacheUnlockAction): void
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
    /* Virtual methods of EDataBook.BookCache */
    vfuncDupContactRevision(contact: EBookContacts.Contact): string
    vfuncE164Changed(contact: EBookContacts.Contact, isReplace: boolean): void
    /* Virtual methods of EBackend.Cache */
    vfuncBeforePut(uid: string, revision: string, object: string, otherColumns: EBackend.CacheColumnValues, isReplace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfuncBeforeRemove(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncClearOfflineChangesLocked(cancellable?: Gio.Cancellable | null): boolean
    vfuncErase(): void
    vfuncPutLocked(uid: string, revision: string, object: string, otherColumns: EBackend.CacheColumnValues, offlineState: EBackend.OfflineState, isReplace: boolean, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of EDataBook.BookCache */
    connect(sigName: "dup-contact-revision", callback: (($obj: BookCache, object: EBookContacts.Contact) => string)): number
    connect_after(sigName: "dup-contact-revision", callback: (($obj: BookCache, object: EBookContacts.Contact) => string)): number
    emit(sigName: "dup-contact-revision", object: EBookContacts.Contact): void
    on(sigName: "dup-contact-revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dup-contact-revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dup-contact-revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "e164-changed", callback: (($obj: BookCache, object: EBookContacts.Contact, p0: boolean) => void)): number
    connect_after(sigName: "e164-changed", callback: (($obj: BookCache, object: EBookContacts.Contact, p0: boolean) => void)): number
    emit(sigName: "e164-changed", object: EBookContacts.Contact, p0: boolean): void
    on(sigName: "e164-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "e164-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "e164-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of EBackend.Cache */
    connect(sigName: "before-put", callback: (($obj: BookCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    connect_after(sigName: "before-put", callback: (($obj: BookCache, object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    on(sigName: "before-put", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-put", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-put", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "before-remove", callback: (($obj: BookCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    connect_after(sigName: "before-remove", callback: (($obj: BookCache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    on(sigName: "before-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "revision-changed", callback: (($obj: BookCache) => void)): number
    connect_after(sigName: "revision-changed", callback: (($obj: BookCache) => void)): number
    emit(sigName: "revision-changed"): void
    on(sigName: "revision-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "revision-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "revision-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookCache, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BookCache_ConstructProps)
    _init (config?: BookCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, source?: EDataServer.Source | null, cancellable?: Gio.Cancellable | null): BookCache
    static newFull(filename: string, source?: EDataServer.Source | null, setup?: EBookContacts.SourceBackendSummarySetup | null, cancellable?: Gio.Cancellable | null): BookCache
    static $gtype: GObject.Type
}
export interface BookMetaBackend_ConstructProps extends BookBackendSync_ConstructProps {
    cache?: BookCache
}
export class BookMetaBackend {
    /* Properties of EDataBook.BookMetaBackend */
    cache: BookCache
    /* Properties of EDataBook.BookBackend */
    cacheDir: string
    readonly proxyResolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.BookMetaBackend */
    connectSync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync(cancellable?: Gio.Cancellable | null): boolean
    dupSyncTag(): string | null
    emptyCacheSync(cancellable?: Gio.Cancellable | null): boolean
    ensureConnectedSync(cancellable?: Gio.Cancellable | null): boolean
    getCapabilities(): string
    getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    getConnectedWritable(): boolean
    getEverConnected(): boolean
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    inlineLocalPhotosSync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean
    listExistingSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ BookMetaBackendInfo[] ]
    loadContactSync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string ]
    processChangesSync(createdObjects?: BookMetaBackendInfo[] | null, modifiedObjects?: BookMetaBackendInfo[] | null, removedObjects?: BookMetaBackendInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    refCache(): BookCache
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    removeContactSync(conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    requiresReconnect(): boolean
    saveContactSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    scheduleRefresh(): void
    searchSync(expr: string | null, metaContact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    searchUidsSync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    setCache(cache: BookCache): void
    setConnectedWritable(value: boolean): void
    setEverConnected(value: boolean): void
    splitChangesSync(objects: BookMetaBackendInfo[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ BookMetaBackendInfo[], /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] | null ]
    storeInlinePhotosSync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataBook.BookBackendSync */
    createContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    getContact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    getContactList(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    modifyContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    open(cancellable?: Gio.Cancellable | null): boolean
    refresh(cancellable?: Gio.Cancellable | null): boolean
    removeContacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRemovedUids */ string[] ]
    /* Methods of EDataBook.BookBackend */
    addView(view: DataBookView): void
    configureDirect(config: string): void
    createContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createContactsFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
    createContactsSync(vcards: string, opflags: number, outContacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    createCursor(sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number): DataBookCursor
    deleteCursor(cursor: DataBookCursor): boolean
    dupCacheDir(): string
    dupLocale(): string
    foreachView(): boolean
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
    getBackendProperty(propName: string): string
    getCacheDir(): string
    getContact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactFinish(result: Gio.AsyncResult): EBookContacts.Contact
    getContactList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactListFinish(result: Gio.AsyncResult, outContacts: GLib.Queue): boolean
    getContactListSync(query: string, outContacts: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getContactListUids(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactListUidsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
    getContactListUidsSync(query: string, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getContactSync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact
    getDirectBook(): DataBookDirect | null
    getRegistry(): EDataServer.SourceRegistry
    getWritable(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    listViews(): DataBookView[]
    modifyContacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyContactsFinish(result: Gio.AsyncResult): boolean
    modifyContactsSync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    notifyComplete(): void
    notifyError(message: string): void
    notifyPropertyChanged(propName: string, propValue?: string | null): void
    notifyRemove(id: string): void
    notifyUpdate(contact: EBookContacts.Contact): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(cancellable?: Gio.Cancellable | null): boolean
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
    refDataBook(): DataBook | null
    refProxyResolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    removeContacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContactsFinish(result: Gio.AsyncResult): boolean
    removeContactsSync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    removeView(view: DataBookView): void
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: BookBackendCustomOpFunc): void
    setCacheDir(cacheDir: string): void
    setDataBook(dataBook: DataBook): void
    setLocale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    setWritable(writable: boolean): void
    startView(view: DataBookView): void
    stopView(view: DataBookView): void
    sync(): void
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
    /* Virtual methods of EDataBook.BookMetaBackend */
    vfuncConnectSync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    vfuncDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncGetChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    vfuncGetSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    vfuncListExistingSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ BookMetaBackendInfo[] ]
    vfuncLoadContactSync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string ]
    vfuncRemoveContactSync(conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    vfuncRequiresReconnect(): boolean
    vfuncSaveContactSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    vfuncSearchSync(expr: string | null, metaContact: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    vfuncSearchUidsSync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    vfuncSourceChanged(): void
    /* Virtual methods of EDataBook.BookBackendSync */
    vfuncOpenSync(cancellable?: Gio.Cancellable | null): boolean
    vfuncRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataBook.BookBackend */
    vfuncClosed(sender: string): void
    vfuncImplConfigureDirect(config: string): void
    vfuncImplCreateContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfuncImplDeleteCursor(cursor: DataBookCursor): boolean
    vfuncImplDupLocale(): string
    vfuncImplGetBackendProperty(propName: string): string
    vfuncImplGetContact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void
    vfuncImplGetContactList(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfuncImplGetContactListUids(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string): void
    vfuncImplModifyContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number): void
    vfuncImplNotifyUpdate(contact: EBookContacts.Contact): void
    vfuncImplOpen(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfuncImplRefresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void
    vfuncImplRemoveContacts(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number): void
    vfuncImplSetLocale(locale: string, cancellable?: Gio.Cancellable | null): boolean
    vfuncImplStartView(view: DataBookView): void
    vfuncImplStopView(view: DataBookView): void
    vfuncShutdown(): void
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
    /* Signals of EDataBook.BookMetaBackend */
    connect(sigName: "refresh-completed", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "refresh-completed", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "refresh-completed"): void
    on(sigName: "refresh-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "refresh-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "refresh-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-changed", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "source-changed", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "source-changed"): void
    on(sigName: "source-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of EDataBook.BookBackend */
    connect(sigName: "closed", callback: (($obj: BookMetaBackend, sender: string) => void)): number
    connect_after(sigName: "closed", callback: (($obj: BookMetaBackend, sender: string) => void)): number
    emit(sigName: "closed", sender: string): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "shutdown", callback: (($obj: BookMetaBackend) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: BookMetaBackend) => void)): number
    emit(sigName: "shutdown"): void
    on(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: BookMetaBackend, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookMetaBackend_ConstructProps)
    _init (config?: BookMetaBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BookSqlite_ConstructProps extends GObject.Object_ConstructProps {
}
export class BookSqlite {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.BookSqlite */
    addContact(contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    addContacts(contacts: EBookContacts.Contact[], extra: string[] | null, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    getContact(uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retContact */ EBookContacts.Contact ]
    getContactExtra(uid: string): [ /* returnType */ boolean, /* retExtra */ string ]
    getKeyValue(key: string): [ /* returnType */ boolean, /* value */ string ]
    getKeyValueInt(key: string): [ /* returnType */ boolean, /* value */ number ]
    getLocale(): [ /* returnType */ boolean, /* localeOut */ string ]
    getVcard(uid: string, metaContact: boolean): [ /* returnType */ boolean, /* retVcard */ string ]
    hasContact(uid: string): [ /* returnType */ boolean, /* exists */ boolean ]
    lock(lockType: bSqlLockType, cancellable?: Gio.Cancellable | null): boolean
    refCollator(): EDataServer.Collator
    refSource(): EDataServer.Source
    removeContact(uid: string, cancellable?: Gio.Cancellable | null): boolean
    removeContacts(uids: string[], cancellable?: Gio.Cancellable | null): boolean
    search(sexp: string | null, metaContacts: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* retList */ bSqlSearchData[] ]
    searchUids(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* retList */ string[] ]
    setContactExtra(uid: string, extra?: string | null): boolean
    setKeyValue(key: string, value: string): boolean
    setKeyValueInt(key: string, value: number): boolean
    setLocale(lcCollate: string, cancellable?: Gio.Cancellable | null): boolean
    unlock(action: bSqlUnlockAction): boolean
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
    /* Virtual methods of EDataBook.BookSqlite */
    vfuncBeforeInsertContact(db: object | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfuncBeforeRemoveContact(db: object | null, contactUid: string, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataBook.BookSqlite */
    connect(sigName: "before-insert-contact", callback: (($obj: BookSqlite, object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null) => boolean)): number
    connect_after(sigName: "before-insert-contact", callback: (($obj: BookSqlite, object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null) => boolean)): number
    emit(sigName: "before-insert-contact", object: object | null, p0: EBookContacts.Contact, p1: string, p2: boolean, p3: GObject.Object, p4?: object | null): void
    on(sigName: "before-insert-contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-insert-contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-insert-contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "before-remove-contact", callback: (($obj: BookSqlite, object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null) => boolean)): number
    connect_after(sigName: "before-remove-contact", callback: (($obj: BookSqlite, object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null) => boolean)): number
    emit(sigName: "before-remove-contact", object: object | null, p0: string, p1?: Gio.Cancellable | null, p2?: object | null): void
    on(sigName: "before-remove-contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "before-remove-contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "before-remove-contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BookSqlite, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookSqlite_ConstructProps)
    _init (config?: BookSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, source: EDataServer.Source, cancellable?: Gio.Cancellable | null): BookSqlite
    static newFull(path: string, source: EDataServer.Source, setup?: EBookContacts.SourceBackendSummarySetup | null, vcardCallback?: bSqlVCardCallback | null, changeCallback?: bSqlChangeCallback | null, cancellable?: Gio.Cancellable | null): BookSqlite
    static errorQuark(): GLib.Quark
    static searchDataFree(data: bSqlSearchData): void
    static $gtype: GObject.Type
}
export interface DataBook_ConstructProps extends GObject.Object_ConstructProps {
    backend?: BookBackend
    connection?: Gio.DBusConnection
    objectPath?: string
}
export class DataBook {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.DataBook */
    getConnection(): Gio.DBusConnection
    getObjectPath(): string
    refBackend(): BookBackend
    reportBackendPropertyChanged(propName: string, propValue: string): void
    reportError(message: string): void
    respondCreateContacts(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void
    respondGetContact(opid: number, error?: GLib.Error | null, contact?: EBookContacts.Contact | null): void
    respondGetContactList(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void
    respondGetContactListUids(opid: number, error: GLib.Error, uids?: string[] | null): void
    respondModifyContacts(opid: number, error: GLib.Error, contacts?: EBookContacts.Contact[] | null): void
    respondOpen(opid: number, error: GLib.Error): void
    respondRefresh(opid: number, error: GLib.Error): void
    respondRemoveContacts(opid: number, error: GLib.Error, ids?: string[] | null): void
    setLocale(locale: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of EDataBook.DataBook */
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
    connect(sigName: "notify", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBook, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DataBook_ConstructProps)
    _init (config?: DataBook_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, connection: Gio.DBusConnection, objectPath: string): DataBook
    static stringSlistToCommaString(strings: string[]): string
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DataBookCursor_ConstructProps extends GObject.Object_ConstructProps {
    backend?: BookBackend
}
export class DataBookCursor {
    /* Properties of EDataBook.DataBookCursor */
    readonly position: number
    readonly total: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookCursor */
    contactAdded(contact: EBookContacts.Contact): void
    contactRemoved(contact: EBookContacts.Contact): void
    getBackend(): BookBackend
    getPosition(): number
    getTotal(): number
    loadLocale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    registerGdbusObject(connection: Gio.DBusConnection, objectPath: string): boolean
    setAlphabeticIndex(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    setSexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    step(revisionGuard: string, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    /* Virtual methods of EDataBook.DataBookCursor */
    vfuncCompareContact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matchesSexp */ boolean | null ]
    vfuncGetPosition(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfuncLoadLocale(): [ /* returnType */ boolean, /* locale */ string ]
    vfuncSetAlphabeticIndex(index: number, locale: string): boolean
    vfuncSetSexp(sexp?: string | null): boolean
    vfuncStep(revisionGuard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataBookCursor_ConstructProps)
    _init (config?: DataBookCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataBookCursorCache_ConstructProps extends DataBookCursor_ConstructProps {
    bookCache?: BookCache
    cursor?: object
}
export class DataBookCursorCache {
    /* Properties of EDataBook.DataBookCursor */
    readonly position: number
    readonly total: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookCursor */
    contactAdded(contact: EBookContacts.Contact): void
    contactRemoved(contact: EBookContacts.Contact): void
    getBackend(): BookBackend
    getPosition(): number
    getTotal(): number
    loadLocale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    registerGdbusObject(connection: Gio.DBusConnection, objectPath: string): boolean
    setAlphabeticIndex(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    setSexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    step(revisionGuard: string, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    /* Virtual methods of EDataBook.DataBookCursor */
    vfuncCompareContact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matchesSexp */ boolean | null ]
    vfuncGetPosition(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfuncLoadLocale(): [ /* returnType */ boolean, /* locale */ string ]
    vfuncSetAlphabeticIndex(index: number, locale: string): boolean
    vfuncSetSexp(sexp?: string | null): boolean
    vfuncStep(revisionGuard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorCache, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataBookCursorCache_ConstructProps)
    _init (config?: DataBookCursorCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bookBackend: BookBackend, bookCache: BookCache, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): DataBookCursorCache
    static $gtype: GObject.Type
}
export interface DataBookCursorSqlite_ConstructProps extends DataBookCursor_ConstructProps {
    cursor?: object
    ebsql?: BookSqlite
    revisionKey?: string
}
export class DataBookCursorSqlite {
    /* Properties of EDataBook.DataBookCursor */
    readonly position: number
    readonly total: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookCursor */
    contactAdded(contact: EBookContacts.Contact): void
    contactRemoved(contact: EBookContacts.Contact): void
    getBackend(): BookBackend
    getPosition(): number
    getTotal(): number
    loadLocale(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* locale */ string | null ]
    recalculate(cancellable?: Gio.Cancellable | null): boolean
    registerGdbusObject(connection: Gio.DBusConnection, objectPath: string): boolean
    setAlphabeticIndex(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean
    setSexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    step(revisionGuard: string, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
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
    /* Virtual methods of EDataBook.DataBookCursor */
    vfuncCompareContact(contact: EBookContacts.Contact): [ /* returnType */ number, /* matchesSexp */ boolean | null ]
    vfuncGetPosition(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* total */ number, /* position */ number ]
    vfuncLoadLocale(): [ /* returnType */ boolean, /* locale */ string ]
    vfuncSetAlphabeticIndex(index: number, locale: string): boolean
    vfuncSetSexp(sexp?: string | null): boolean
    vfuncStep(revisionGuard: string | null, flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* results */ string[] | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: DataBookCursorSqlite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataBookCursorSqlite_ConstructProps)
    _init (config?: DataBookCursorSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, ebsql: BookSqlite, revisionKey: string, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): DataBookCursorSqlite
    static $gtype: GObject.Type
}
export interface DataBookDirect_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataBookDirect {
    /* Fields of EDataBook.DataBookDirect */
    parent: GObject.Object
    priv: DataBookDirectPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookDirect */
    registerGdbusObject(connection: Gio.DBusConnection, objectPath: string): boolean
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
    connect(sigName: "notify", callback: (($obj: DataBookDirect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookDirect, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DataBookDirect_ConstructProps)
    _init (config?: DataBookDirect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backendPath: string, backendFactoryName: string, config: string): DataBookDirect
    static $gtype: GObject.Type
}
export interface DataBookFactory_ConstructProps extends EBackend.DataFactory_ConstructProps {
}
export class DataBookFactory {
    /* Properties of EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of EDataBook.DataBookFactory */
    parent: EBackend.DataFactory
    priv: DataBookFactoryPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.DataFactory */
    backendClosed(backend: EBackend.Backend): void
    backendClosedBySender(backend: EBackend.Backend, sender: string): void
    constructPath(): string
    createBackend(backendFactory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend
    getBackendPerProcess(): number
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    listOpenedBackends(): EBackend.Backend[]
    openBackend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    refBackendFactory(backendName: string, extensionName: string): EBackend.BackendFactory
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean
    /* Methods of EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: EBackend.DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): EBackend.DBusServerExitCode
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
    vfuncCreateBackend(backendFactory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend
    vfuncOpenBackend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend.DBusServer */
    vfuncBusAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameAcquired(connection: Gio.DBusConnection): void
    vfuncBusNameLost(connection: Gio.DBusConnection): void
    vfuncQuitServer(code: EBackend.DBusServerExitCode): void
    vfuncRunServer(): EBackend.DBusServerExitCode
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "bus-name-lost", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DataBookFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    on(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "quit-server", callback: (($obj: DataBookFactory, code: EBackend.DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DataBookFactory, code: EBackend.DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: EBackend.DBusServerExitCode): void
    on(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "run-server", callback: (($obj: DataBookFactory) => EBackend.DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DataBookFactory) => EBackend.DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    on(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "run-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataBookFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DataBookFactory_ConstructProps)
    _init (config?: DataBookFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backendPerProcess: number, cancellable?: Gio.Cancellable | null): DataBookFactory
    static $gtype: GObject.Type
}
export interface DataBookView_ConstructProps extends GObject.Object_ConstructProps {
    backend?: BookBackend
    connection?: Gio.DBusConnection
    objectPath?: string
    sexp?: BookBackendSExp
}
export class DataBookView {
    /* Fields of EDataBook.DataBookView */
    parent: GObject.Object
    priv: DataBookViewPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.DataBookView */
    getConnection(): Gio.DBusConnection
    getFieldsOfInterest(): GLib.HashTable | null
    getFlags(): EBookContacts.BookClientViewFlags
    getObjectPath(): string
    getSexp(): BookBackendSExp
    isCompleted(): boolean
    notifyComplete(error: GLib.Error): void
    notifyProgress(percent: number, message: string): void
    notifyRemove(id: string): void
    notifyUpdate(contact: EBookContacts.Contact): void
    notifyUpdatePrefilteredVcard(id: string, vcard: string): void
    notifyUpdateVcard(id: string, vcard: string): void
    refBackend(): BookBackend | null
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
    /* Virtual methods of EDataBook.DataBookView */
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
    connect(sigName: "notify", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataBookView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DataBookView_ConstructProps)
    _init (config?: DataBookView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: BookBackend, sexp: BookBackendSExp, connection: Gio.DBusConnection, objectPath: string): DataBookView
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SubprocessBookFactory_ConstructProps extends EBackend.SubprocessFactory_ConstructProps {
}
export class SubprocessBookFactory {
    /* Properties of EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of EDataBook.SubprocessBookFactory */
    parent: EBackend.SubprocessFactory
    priv: SubprocessBookFactoryPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend.SubprocessFactory */
    callBackendsPrepareShutdown(): void
    getBackendsList(): EBackend.Backend[]
    getRegistry(): EDataServer.SourceRegistry
    openBackend(connection: Gio.DBusConnection, uid: string, backendFactoryTypeName: string, moduleFilename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    refInitableBackend(uid: string, backendFactoryTypeName: string, moduleFilename: string, cancellable?: Gio.Cancellable | null): EBackend.Backend | null
    setBackendCallbacks(backend: EBackend.Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
    vfuncBackendClosed(backend: EBackend.Backend): void
    vfuncBackendCreated(backend: EBackend.Backend): void
    vfuncOpenData(backend: EBackend.Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null): string
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
    connect(sigName: "notify", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessBookFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SubprocessBookFactory_ConstructProps)
    _init (config?: SubprocessBookFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): SubprocessBookFactory
    static $gtype: GObject.Type
}
export interface SystemLocaleWatcher_ConstructProps extends GObject.Object_ConstructProps {
}
export class SystemLocaleWatcher {
    /* Properties of EDataBook.SystemLocaleWatcher */
    readonly locale: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataBook.SystemLocaleWatcher */
    dupLocale(): string | null
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
    connect(sigName: "notify", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: SystemLocaleWatcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SystemLocaleWatcher_ConstructProps)
    _init (config?: SystemLocaleWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SystemLocaleWatcher
    static $gtype: GObject.Type
}
export abstract class BookBackendClass {
    /* Fields of EDataBook.BookBackendClass */
    useSerialDispatchQueue: boolean
    implGetBackendProperty: (backend: BookBackend, propName: string) => string
    implOpen: (backend: BookBackend, book: DataBook, opid: number, cancellable?: Gio.Cancellable | null) => void
    implRefresh: (backend: BookBackend, book: DataBook, opid: number, cancellable?: Gio.Cancellable | null) => void
    implCreateContacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    implModifyContacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, vcards: string, opflags: number) => void
    implRemoveContacts: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, uids: string, opflags: number) => void
    implGetContact: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string) => void
    implGetContactList: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    implGetContactListUids: (backend: BookBackend, book: DataBook, opid: number, cancellable: Gio.Cancellable | null, query: string) => void
    implStartView: (backend: BookBackend, view: DataBookView) => void
    implStopView: (backend: BookBackend, view: DataBookView) => void
    implNotifyUpdate: (backend: BookBackend, contact: EBookContacts.Contact) => void
    implConfigureDirect: (backend: BookBackend, config: string) => void
    implSetLocale: (backend: BookBackend, locale: string, cancellable?: Gio.Cancellable | null) => boolean
    implDupLocale: (backend: BookBackend) => string
    implDeleteCursor: (backend: BookBackend, cursor: DataBookCursor) => boolean
    closed: (backend: BookBackend, sender: string) => void
    shutdown: (backend: BookBackend) => void
    reservedPadding: object[]
    static name: string
}
export abstract class BookBackendFactoryClass {
    /* Fields of EDataBook.BookBackendFactoryClass */
    factoryName: string
    backendType: GObject.Type
    static name: string
}
export class BookBackendFactoryPrivate {
    static name: string
}
export class BookBackendPrivate {
    static name: string
}
export abstract class BookBackendSExpClass {
    static name: string
}
export class BookBackendSExpPrivate {
    static name: string
}
export abstract class BookBackendSyncClass {
    /* Fields of EDataBook.BookBackendSyncClass */
    openSync: (backend: BookBackendSync, cancellable?: Gio.Cancellable | null) => boolean
    refreshSync: (backend: BookBackendSync, cancellable?: Gio.Cancellable | null) => boolean
    reservedPadding: object[]
    static name: string
}
export class BookBackendSyncPrivate {
    static name: string
}
export abstract class BookCacheClass {
    /* Fields of EDataBook.BookCacheClass */
    e164Changed: (bookCache: BookCache, contact: EBookContacts.Contact, isReplace: boolean) => void
    dupContactRevision: (bookCache: BookCache, contact: EBookContacts.Contact) => string
    static name: string
}
export class BookCacheCursor {
    static name: string
    static new(bookCache: BookCache, sexp: string, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): BookCacheCursor
    constructor(bookCache: BookCache, sexp: string, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[])
    /* Static methods and pseudo-constructors */
    static new(bookCache: BookCache, sexp: string, sortFields: EBookContacts.ContactField[], sortTypes: EBookContacts.BookCursorSortType[]): BookCacheCursor
}
export class BookCachePrivate {
    static name: string
}
export class BookCacheSearchData {
    /* Fields of EDataBook.BookCacheSearchData */
    uid: string
    vcard: string
    extra: string
    /* Methods of EDataBook.BookCacheSearchData */
    copy(): BookCacheSearchData
    static name: string
    static new(uid: string, vcard: string, extra?: string | null): BookCacheSearchData
    constructor(uid: string, vcard: string, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, vcard: string, extra?: string | null): BookCacheSearchData
    static free(data?: object | null): void
}
export abstract class BookMetaBackendClass {
    /* Fields of EDataBook.BookMetaBackendClass */
    connectSync: (metaBackend: BookMetaBackend, credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync: (metaBackend: BookMetaBackend, cancellable?: Gio.Cancellable | null) => boolean
    getChangesSync: (metaBackend: BookMetaBackend, lastSyncTag: string | null, isRepeat: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ BookMetaBackendInfo[], /* outModifiedObjects */ BookMetaBackendInfo[], /* outRemovedObjects */ BookMetaBackendInfo[] ]
    listExistingSync: (metaBackend: BookMetaBackend, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ BookMetaBackendInfo[] ]
    loadContactSync: (metaBackend: BookMetaBackend, uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outContact */ EBookContacts.Contact, /* outExtra */ string ]
    saveContactSync: (metaBackend: BookMetaBackend, overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, contact: EBookContacts.Contact, extra: string | null, opflags: number, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    removeContactSync: (metaBackend: BookMetaBackend, conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: number, cancellable?: Gio.Cancellable | null) => boolean
    searchSync: (metaBackend: BookMetaBackend, expr: string | null, metaContact: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outContacts */ EBookContacts.Contact[] ]
    searchUidsSync: (metaBackend: BookMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outUids */ string[] ]
    requiresReconnect: (metaBackend: BookMetaBackend) => boolean
    sourceChanged: (metaBackend: BookMetaBackend) => void
    getSslErrorDetails: (metaBackend: BookMetaBackend) => [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    static name: string
}
export class BookMetaBackendInfo {
    /* Fields of EDataBook.BookMetaBackendInfo */
    uid: string
    revision: string
    object: string
    extra: string
    /* Methods of EDataBook.BookMetaBackendInfo */
    copy(): BookMetaBackendInfo
    static name: string
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): BookMetaBackendInfo
    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): BookMetaBackendInfo
    static free(ptr?: object | null): void
}
export class BookMetaBackendPrivate {
    static name: string
}
export abstract class BookSqliteClass {
    /* Fields of EDataBook.BookSqliteClass */
    beforeInsertContact: (ebsql: BookSqlite, db: object | null, contact: EBookContacts.Contact, extra: string, replace: boolean, cancellable?: Gio.Cancellable | null) => boolean
    beforeRemoveContact: (ebsql: BookSqlite, db: object | null, contactUid: string, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export class BookSqlitePrivate {
    static name: string
}
export abstract class DataBookClass {
    static name: string
}
export abstract class DataBookCursorCacheClass {
    static name: string
}
export class DataBookCursorCachePrivate {
    static name: string
}
export abstract class DataBookCursorClass {
    /* Fields of EDataBook.DataBookCursorClass */
    setSexp: DataBookCursorSetSexpFunc
    step: DataBookCursorStepFunc
    setAlphabeticIndex: DataBookCursorSetAlphabetIndexFunc
    getPosition: DataBookCursorGetPositionFunc
    compareContact: DataBookCursorCompareContactFunc
    loadLocale: DataBookCursorLoadLocaleFunc
    static name: string
}
export class DataBookCursorPrivate {
    static name: string
}
export abstract class DataBookCursorSqliteClass {
    static name: string
}
export class DataBookCursorSqlitePrivate {
    static name: string
}
export abstract class DataBookDirectClass {
    /* Fields of EDataBook.DataBookDirectClass */
    parent: GObject.ObjectClass
    static name: string
}
export class DataBookDirectPrivate {
    static name: string
}
export abstract class DataBookFactoryClass {
    /* Fields of EDataBook.DataBookFactoryClass */
    parentClass: EBackend.DataFactoryClass
    static name: string
}
export class DataBookFactoryPrivate {
    static name: string
}
export class DataBookPrivate {
    static name: string
}
export abstract class DataBookViewClass {
    /* Fields of EDataBook.DataBookViewClass */
    parent: GObject.ObjectClass
    static name: string
}
export class DataBookViewPrivate {
    static name: string
}
export abstract class SubprocessBookFactoryClass {
    /* Fields of EDataBook.SubprocessBookFactoryClass */
    parentClass: EBackend.SubprocessFactoryClass
    static name: string
}
export class SubprocessBookFactoryPrivate {
    static name: string
}
export abstract class SystemLocaleWatcherClass {
    /* Fields of EDataBook.SystemLocaleWatcherClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SystemLocaleWatcherPrivate {
    static name: string
}
export class bSqlCursor {
    static name: string
}
export class bSqlSearchData {
    /* Fields of EDataBook.bSqlSearchData */
    uid: string
    vcard: string
    extra: string
    static name: string
}
}