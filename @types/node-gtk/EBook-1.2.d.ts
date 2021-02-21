/**
 * EBook-1.2
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { EDataServer } from './EDataServer-1.2';
import type { Soup } from './Soup-2.4';
import type { GData } from './GData-0.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';
import type { Camel } from './Camel-1.2';
import type { EBookContacts } from './EBookContacts-1.2';

export declare namespace EBook {

export enum BookStatus {
    OK,
    INVALID_ARG,
    BUSY,
    REPOSITORY_OFFLINE,
    NO_SUCH_BOOK,
    NO_SELF_CONTACT,
    SOURCE_NOT_LOADED,
    SOURCE_ALREADY_LOADED,
    PERMISSION_DENIED,
    CONTACT_NOT_FOUND,
    CONTACT_ID_ALREADY_EXISTS,
    PROTOCOL_NOT_SUPPORTED,
    CANCELLED,
    COULD_NOT_CANCEL,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    TLS_NOT_AVAILABLE,
    DBUS_EXCEPTION,
    NO_SUCH_SOURCE,
    OFFLINE_UNAVAILABLE,
    OTHER_ERROR,
    INVALID_SERVER_VERSION,
    UNSUPPORTED_AUTHENTICATION_METHOD,
    NO_SPACE,
    NOT_SUPPORTED,
}
export function bookErrorQuark(): GLib.Quark
export function bookUtilsGetRecipientCertificatesSync(registry: EDataServer.SourceRegistry, onlyClients: BookClient[] | null, flags: number, recipients: string[], cancellable?: Gio.Cancellable | null): { returnType: boolean, outCertificates: string[] }
export interface BookClient_ConstructProps extends EDataServer.Client_ConstructProps {
}
export class BookClient {
    /* Properties of EBook-1.2.EBook.BookClient */
    readonly locale: string
    /* Properties of EDataServer-1.2.EDataServer.Client */
    readonly capabilities: object
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClient */
    addContact(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addContactFinish(result: Gio.AsyncResult): { returnType: boolean, outAddedUid: string }
    addContactSync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outAddedUid: string }
    addContacts(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addContactsFinish(result: Gio.AsyncResult): { returnType: boolean, outAddedUids: string[] | null }
    addContactsSync(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outAddedUids: string[] | null }
    getContact(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactFinish(result: Gio.AsyncResult): { returnType: boolean, outContact: EBookContacts.Contact }
    getContactSync(uid: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outContact: EBookContacts.Contact }
    getContacts(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactsFinish(result: Gio.AsyncResult): { returnType: boolean, outContacts: EBookContacts.Contact[] }
    getContactsSync(sexp: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outContacts: EBookContacts.Contact[] }
    getContactsUids(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getContactsUidsFinish(result: Gio.AsyncResult): { returnType: boolean, outContactUids: string[] }
    getContactsUidsSync(sexp: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outContactUids: string[] }
    getCursor(sexp: string, sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCursorFinish(result: Gio.AsyncResult): { returnType: boolean, outCursor: BookClientCursor }
    getCursorSync(sexp: string, sortFields: EBookContacts.ContactField, sortTypes: EBookContacts.BookCursorSortType, nFields: number, cancellable?: Gio.Cancellable | null): { returnType: boolean, outCursor: BookClientCursor }
    getLocale(): string
    getView(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getViewFinish(result: Gio.AsyncResult): { returnType: boolean, outView: BookClientView }
    getViewSync(sexp: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, outView: BookClientView }
    modifyContact(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyContactFinish(result: Gio.AsyncResult): boolean
    modifyContactSync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    modifyContacts(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyContactsFinish(result: Gio.AsyncResult): boolean
    modifyContactsSync(contacts: EBookContacts.Contact[], opflags: number, cancellable?: Gio.Cancellable | null): boolean
    removeContact(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContactByUid(uid: string, opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContactByUidFinish(result: Gio.AsyncResult): boolean
    removeContactByUidSync(uid: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    removeContactFinish(result: Gio.AsyncResult): boolean
    removeContactSync(contact: EBookContacts.Contact, opflags: number, cancellable?: Gio.Cancellable | null): boolean
    removeContacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeContactsFinish(result: Gio.AsyncResult): boolean
    removeContactsSync(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null): boolean
    setSelf(contact: EBookContacts.Contact): boolean
    /* Methods of EDataServer-1.2.EDataServer.Client */
    cancelAll(): void
    checkCapability(capability: string): boolean
    checkRefreshSupported(): boolean
    dupBusName(): string
    getBackendProperty(propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBackendPropertyFinish(result: Gio.AsyncResult): { returnType: boolean, propValue: string }
    getBackendPropertySync(propName: string, cancellable?: Gio.Cancellable | null): { returnType: boolean, propValue: string }
    getCapabilities(): string[]
    getSource(): EDataServer.Source
    isOnline(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    open(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null): boolean
    refMainContext(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    retrieveCapabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): { returnType: boolean, capabilities: string }
    retrieveCapabilitiesSync(cancellable?: Gio.Cancellable | null): { returnType: boolean, capabilities: string }
    retrieveProperties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrievePropertiesFinish(result: Gio.AsyncResult): boolean
    retrievePropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    setBackendProperty(propName: string, propValue: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    setBackendPropertySync(propName: string, propValue: string, cancellable?: Gio.Cancellable | null): boolean
    setBusName(busName: string): void
    unwrapDbusError(dbusError: GLib.Error): void
    waitForConnected(timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    waitForConnectedFinish(result: Gio.AsyncResult): boolean
    waitForConnectedSync(timeoutSeconds: number, cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: BookClient) => void)): number
    on(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: BookClient, object: string) => void)): number
    on(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: BookClient, object: string, p0: string) => void)): number
    on(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: BookClient, object: GLib.Error) => void)): number
    on(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "opened", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: BookClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BookClient_ConstructProps)
    _init (config?: BookClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source): BookClient
    static connect(source: EDataServer.Source, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static connectDirect(source: EDataServer.Source, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static connectDirectFinish(result: Gio.AsyncResult): BookClient
    static connectDirectSync(registry: EDataServer.SourceRegistry, source: EDataServer.Source, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null): BookClient
    static connectFinish(result: Gio.AsyncResult): BookClient
    static connectSync(source: EDataServer.Source, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null): BookClient
    static getSelf(registry: EDataServer.SourceRegistry): { returnType: boolean, outContact: EBookContacts.Contact, outClient: BookClient }
    static isSelf(contact: EBookContacts.Contact): boolean
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface BookClientCursor_ConstructProps extends GObject.Object_ConstructProps {
    client?: BookClient
    connection?: Gio.DBusConnection
    context?: GLib.MainContext
    objectPath?: string
    sortFields?: string[]
}
export class BookClientCursor {
    /* Properties of EBook-1.2.EBook.BookClientCursor */
    readonly alphabet: string[]
    readonly position: number
    readonly total: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClientCursor */
    getAlphabet(): { returnType: string[], nLabels: number | null, underflow: number | null, inflow: number | null, overflow: number | null }
    getContactAlphabeticIndex(contact: EBookContacts.Contact): number
    getPosition(): number
    getTotal(): number
    refClient(): object | null
    setAlphabeticIndex(index: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAlphabeticIndexFinish(result: Gio.AsyncResult): boolean
    setAlphabeticIndexSync(index: number, cancellable?: Gio.Cancellable | null): boolean
    setSexp(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setSexpFinish(result: Gio.AsyncResult): boolean
    setSexpSync(sexp: string, cancellable?: Gio.Cancellable | null): boolean
    step(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stepFinish(result: Gio.AsyncResult): { returnType: number, outContacts: EBookContacts.Contact[] | null }
    stepSync(flags: EBookContacts.BookCursorStepFlags, origin: EBookContacts.BookCursorOrigin, count: number, cancellable?: Gio.Cancellable | null): { returnType: number, outContacts: EBookContacts.Contact[] | null }
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of EBook-1.2.EBook.BookClientCursor */
    connect(sigName: "refresh", callback: (($obj: BookClientCursor) => void)): number
    on(sigName: "refresh", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "refresh"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alphabet", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alphabet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alphabet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alphabet", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total", callback: (($obj: BookClientCursor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookClientCursor_ConstructProps)
    _init (config?: BookClientCursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface BookClientView_ConstructProps extends GObject.Object_ConstructProps {
    client?: BookClient
    connection?: Gio.DBusConnection
    objectPath?: string
}
export class BookClientView {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.BookClientView */
    getClient(): object | null
    getConnection(): Gio.DBusConnection
    getObjectPath(): string
    isRunning(): boolean
    refClient(): object | null
    setFieldsOfInterest(fieldsOfInterest: string[]): void
    setFlags(flags: EBookContacts.BookClientViewFlags): void
    start(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of EBook-1.2.EBook.BookClientView */
    connect(sigName: "complete", callback: (($obj: BookClientView, object: GLib.Error) => void)): number
    on(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "complete", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: BookClientView, object?: object | null) => void)): number
    on(sigName: "objects-added", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "objects-added", object?: object | null): void
    connect(sigName: "objects-modified", callback: (($obj: BookClientView, object?: object | null) => void)): number
    on(sigName: "objects-modified", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "objects-modified", object?: object | null): void
    connect(sigName: "objects-removed", callback: (($obj: BookClientView, object?: object | null) => void)): number
    on(sigName: "objects-removed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "objects-removed", object?: object | null): void
    connect(sigName: "progress", callback: (($obj: BookClientView, object: number, p0: string) => void)): number
    on(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (object: number, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "progress", object: number, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BookClientView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BookClientView_ConstructProps)
    _init (config?: BookClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Destination_ConstructProps extends GObject.Object_ConstructProps {
}
export class Destination {
    /* Fields of EBook-1.2.EBook.Destination */
    object: GObject.Object
    priv: DestinationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBook-1.2.EBook.Destination */
    copy(): Destination
    empty(): boolean
    equal(b: Destination): boolean
    export(): string
    exportToVcardAttribute(attr: EBookContacts.VCardAttribute): void
    getAddress(): string | null
    getContact(): EBookContacts.Contact | null
    getContactUid(): string | null
    getEmail(): string
    getEmailNum(): number
    getHtmlMailPref(): boolean
    getName(): string | null
    getSourceUid(): string | null
    getTextrep(includeEmail: boolean): string
    isAutoRecipient(): boolean
    isEvolutionList(): boolean
    isIgnored(): boolean
    listGetDests(): Destination[]
    listGetRootDests(): Destination[]
    listShowAddresses(): boolean
    setAutoRecipient(value: boolean): void
    setClient(client: BookClient): void
    setContact(contact: EBookContacts.Contact, emailNum: number): void
    setContactUid(uid: string, emailNum: number): void
    setEmail(email: string): void
    setHtmlMailPref(flag: boolean): void
    setIgnored(ignored: boolean): void
    setName(name: string): void
    setRaw(raw: string): void
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
    /* Signals of EBook-1.2.EBook.Destination */
    connect(sigName: "changed", callback: (($obj: Destination) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Destination, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Destination_ConstructProps)
    _init (config?: Destination_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Destination
    static exportv(destv: Destination[]): string
    static freev(destv: Destination[]): void
    static getTextrepv(destv: Destination[]): string
    static import(str: string): Destination | null
    static importv(str: string): Destination[]
    static $gtype: GObject.Type
}
export abstract class BookClientClass {
    static name: string
}
export abstract class BookClientCursorClass {
    /* Fields of EBook-1.2.EBook.BookClientCursorClass */
    refresh: (cursor: BookClientCursor) => void
    static name: string
}
export class BookClientCursorPrivate {
    static name: string
}
export class BookClientPrivate {
    static name: string
}
export abstract class BookClientViewClass {
    /* Fields of EBook-1.2.EBook.BookClientViewClass */
    progress: (clientView: BookClientView, percent: number, message: string) => void
    complete: (clientView: BookClientView, error: GLib.Error) => void
    static name: string
}
export class BookClientViewPrivate {
    static name: string
}
export abstract class DestinationClass {
    /* Fields of EBook-1.2.EBook.DestinationClass */
    parentClass: GObject.ObjectClass
    changed: (destination: Destination) => void
    static name: string
}
export class DestinationPrivate {
    static name: string
}
}