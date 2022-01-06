/**
 * Secret-1
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Secret {

export enum BackendFlags {
    NONE,
    OPEN_SESSION,
    LOAD_COLLECTIONS,
}
export enum Error {
    PROTOCOL,
    IS_LOCKED,
    NO_SUCH_OBJECT,
    ALREADY_EXISTS,
    INVALID_FILE_FORMAT,
}
export enum SchemaAttributeType {
    STRING,
    INTEGER,
    BOOLEAN,
}
export enum SchemaType {
    NOTE,
    COMPAT_NETWORK,
}
export enum CollectionCreateFlags {
    NONE,
}
export enum CollectionFlags {
    NONE,
    LOAD_ITEMS,
}
export enum ItemCreateFlags {
    NONE,
    REPLACE,
}
export enum ItemFlags {
    NONE,
    LOAD_SECRET,
}
export enum SchemaFlags {
    NONE,
    DONT_MATCH_NAME,
}
export enum SearchFlags {
    NONE,
    ALL,
    UNLOCK,
    LOAD_SECRETS,
}
export enum ServiceFlags {
    NONE,
    OPEN_SESSION,
    LOAD_COLLECTIONS,
}
export const BACKEND_EXTENSION_POINT_NAME: string
export const COLLECTION_DEFAULT: string
export const COLLECTION_SESSION: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function backendGet(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function backendGetFinish(result: Gio.AsyncResult): Backend
export function errorGetQuark(): GLib.Quark
export function getSchema(type: SchemaType): Schema
export function passwordClearFinish(result: Gio.AsyncResult): boolean
export function passwordClear(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function passwordClearSync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
export function passwordLookupFinish(result: Gio.AsyncResult): string
export function passwordLookup(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function passwordLookupSync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): string
export function passwordSearchFinish(result: Gio.AsyncResult): Retrievable[]
export function passwordSearch(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function passwordSearchSync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Retrievable[]
export function passwordStoreFinish(result: Gio.AsyncResult): boolean
export function passwordStore(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function passwordStoreBinary(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function passwordStoreBinarySync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null): boolean
export function passwordStoreSync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable?: Gio.Cancellable | null): boolean
export function passwordWipe(password?: string | null): void
export class Backend {
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    static name: string
    /* Static methods and pseudo-constructors */
    static get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(result: Gio.AsyncResult): Backend
}
export class Retrievable {
    /* Properties of Secret-1.Secret.Retrievable */
    attributes: GLib.HashTable
    created: number
    label: string
    modified: number
    /* Methods of Secret-1.Secret.Retrievable */
    getAttributes(): GLib.HashTable
    getCreated(): number
    getLabel(): string
    getModified(): number
    retrieveSecret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieveSecretFinish(result: Gio.AsyncResult): Value | null
    retrieveSecretSync(cancellable?: Gio.Cancellable | null): Value | null
    static name: string
}
export interface Collection_ConstructProps extends Gio.DBusProxy_ConstructProps {
    created?: number
    flags?: CollectionFlags
    label?: string
    modified?: number
    service?: Service
}
export class Collection {
    /* Properties of Secret-1.Secret.Collection */
    created: number
    label: string
    readonly locked: boolean
    modified: number
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Secret-1.Secret.Collection */
    parent: Gio.DBusProxy
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Collection */
    delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(cancellable?: Gio.Cancellable | null): boolean
    getCreated(): number
    getFlags(): CollectionFlags
    getItems(): Item[]
    getLabel(): string
    getLocked(): boolean
    getModified(): number
    getService(): Service
    loadItems(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadItemsFinish(result: Gio.AsyncResult): boolean
    loadItemsSync(cancellable?: Gio.Cancellable | null): boolean
    refresh(): void
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(result: Gio.AsyncResult): Item[]
    searchSync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    setLabel(label: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setLabelFinish(result: Gio.AsyncResult): boolean
    setLabelSync(label: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Collection, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Collection, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Collection_ConstructProps)
    _init (config?: Collection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFinish(result: Gio.AsyncResult): Collection
    static createSync(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null): Collection
    static forAlias(service: Service | null, alias: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static forAliasFinish(result: Gio.AsyncResult): Collection
    static forAliasSync(service: Service | null, alias: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null): Collection
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Item_ConstructProps extends Gio.DBusProxy_ConstructProps {
    flags?: ItemFlags
    service?: Service
    attributes?: GLib.HashTable
    created?: number
    label?: string
    modified?: number
}
export class Item {
    /* Properties of Secret-1.Secret.Item */
    readonly locked: boolean
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Secret-1.Secret.Retrievable */
    attributes: GLib.HashTable
    created: number
    label: string
    modified: number
    /* Fields of Secret-1.Secret.Item */
    parentInstance: Gio.DBusProxy
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Item */
    delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(cancellable?: Gio.Cancellable | null): boolean
    getAttributes(): GLib.HashTable
    getCreated(): number
    getFlags(): ItemFlags
    getLabel(): string
    getLocked(): boolean
    getModified(): number
    getSchemaName(): string | null
    getSecret(): Value | null
    getService(): Service
    loadSecret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadSecretFinish(result: Gio.AsyncResult): boolean
    loadSecretSync(cancellable?: Gio.Cancellable | null): boolean
    refresh(): void
    setAttributes(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAttributesFinish(result: Gio.AsyncResult): boolean
    setAttributesSync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    setLabel(label: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setLabelFinish(result: Gio.AsyncResult): boolean
    setLabelSync(label: string, cancellable?: Gio.Cancellable | null): boolean
    setSecret(value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setSecretFinish(result: Gio.AsyncResult): boolean
    setSecretSync(value: Value, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Secret-1.Secret.Retrievable */
    retrieveSecret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieveSecretFinish(result: Gio.AsyncResult): Value | null
    retrieveSecretSync(cancellable?: Gio.Cancellable | null): Value | null
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Item, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Item, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Item_ConstructProps)
    _init (config?: Item_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFinish(result: Gio.AsyncResult): Item
    static createSync(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): Item
    static loadSecrets(items: Item[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static loadSecretsFinish(result: Gio.AsyncResult): boolean
    static loadSecretsSync(items: Item[], cancellable?: Gio.Cancellable | null): boolean
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Prompt_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class Prompt {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Secret-1.Secret.Prompt */
    parentInstance: Gio.DBusProxy
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Prompt */
    perform(windowId: string | null, returnType: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    performFinish(result: Gio.AsyncResult): GLib.Variant
    performSync(windowId: string | null, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    run(windowId: string | null, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Prompt, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Prompt, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Prompt_ConstructProps)
    _init (config?: Prompt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Service_ConstructProps extends Gio.DBusProxy_ConstructProps {
    flags?: ServiceFlags
}
export class Service {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of Secret-1.Secret.Service */
    parent: Gio.DBusProxy
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Service */
    clear(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    clearFinish(result: Gio.AsyncResult): boolean
    clearSync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    createItemDbusPathSync(collectionPath: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): string
    decodeDbusSecret(value: GLib.Variant): Value
    encodeDbusSecret(value: Value): GLib.Variant
    ensureSession(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    ensureSessionFinish(result: Gio.AsyncResult): boolean
    ensureSessionSync(cancellable?: Gio.Cancellable | null): boolean
    getCollectionGtype(): GObject.Type
    getCollections(): Collection[] | null
    getFlags(): ServiceFlags
    getItemGtype(): GObject.Type
    getSessionAlgorithms(): string | null
    getSessionDbusPath(): string | null
    loadCollections(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadCollectionsFinish(result: Gio.AsyncResult): boolean
    loadCollectionsSync(cancellable?: Gio.Cancellable | null): boolean
    lock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lockFinish(result: Gio.AsyncResult): { returnType: number, locked: Gio.DBusProxy[] | null }
    lockSync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): { returnType: number, locked: Gio.DBusProxy[] | null }
    lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): Value
    lookupSync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): Value
    prompt(prompt: Prompt, returnType?: GLib.VariantType | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    promptFinish(result: Gio.AsyncResult): GLib.Variant
    promptSync(prompt: Prompt, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(result: Gio.AsyncResult): Item[]
    searchSync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    setAlias(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setAliasFinish(result: Gio.AsyncResult): boolean
    setAliasSync(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null): boolean
    store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storeFinish(result: Gio.AsyncResult): boolean
    storeSync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null): boolean
    unlock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unlockFinish(result: Gio.AsyncResult): { returnType: number, unlocked: Gio.DBusProxy[] | null }
    unlockSync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): { returnType: number, unlocked: Gio.DBusProxy[] | null }
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): { returnType: GLib.Variant, outFdList: Gio.UnixFDList | null }
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Service, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Service, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static disconnect(): void
    static get(flags: ServiceFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(result: Gio.AsyncResult): Service
    static getFinish(result: Gio.AsyncResult): Backend
    static getSync(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    static open(serviceGtype: GObject.Type, serviceBusName: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static openFinish(result: Gio.AsyncResult): Service
    static openSync(serviceGtype: GObject.Type, serviceBusName: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class BackendInterface {
    /* Fields of Secret-1.Secret.BackendInterface */
    parentIface: GObject.TypeInterface
    ensureForFlags: (self: Backend, flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    ensureForFlagsFinish: (self: Backend, result: Gio.AsyncResult) => boolean
    store: (self: Backend, schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    storeFinish: (self: Backend, result: Gio.AsyncResult) => boolean
    lookup: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    lookupFinish: (self: Backend, result: Gio.AsyncResult) => Value
    clear: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    clearFinish: (self: Backend, result: Gio.AsyncResult) => boolean
    search: (self: Backend, schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    static name: string
}
export abstract class CollectionClass {
    /* Fields of Secret-1.Secret.CollectionClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class CollectionPrivate {
    static name: string
}
export abstract class ItemClass {
    /* Fields of Secret-1.Secret.ItemClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ItemPrivate {
    static name: string
}
export abstract class PromptClass {
    /* Fields of Secret-1.Secret.PromptClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class PromptPrivate {
    static name: string
}
export abstract class RetrievableInterface {
    /* Fields of Secret-1.Secret.RetrievableInterface */
    parentIface: GObject.TypeInterface
    retrieveSecret: (self: Retrievable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    retrieveSecretFinish: (self: Retrievable, result: Gio.AsyncResult) => Value | null
    static name: string
}
export class Schema {
    /* Fields of Secret-1.Secret.Schema */
    name: string
    flags: SchemaFlags
    attributes: SchemaAttribute[]
    /* Methods of Secret-1.Secret.Schema */
    ref(): Schema
    unref(): void
    static name: string
    static new(name: string, flags: SchemaFlags, attributeNamesAndTypes: GLib.HashTable): Schema
    constructor(name: string, flags: SchemaFlags, attributeNamesAndTypes: GLib.HashTable)
    /* Static methods and pseudo-constructors */
    static new(name: string, flags: SchemaFlags, attributeNamesAndTypes: GLib.HashTable): Schema
}
export class SchemaAttribute {
    /* Fields of Secret-1.Secret.SchemaAttribute */
    name: string
    type: SchemaAttributeType
    static name: string
}
export abstract class ServiceClass {
    /* Fields of Secret-1.Secret.ServiceClass */
    parentClass: Gio.DBusProxyClass
    collectionGtype: GObject.Type
    itemGtype: GObject.Type
    promptSync: (self: Service, prompt: Prompt, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType) => GLib.Variant
    promptAsync: (self: Service, prompt: Prompt, returnType: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    promptFinish: (self: Service, result: Gio.AsyncResult) => GLib.Variant
    getCollectionGtype: (self: Service) => GObject.Type
    getItemGtype: (self: Service) => GObject.Type
    static name: string
}
export class ServicePrivate {
    static name: string
}
export class Value {
    /* Methods of Secret-1.Secret.Value */
    get(): any[]
    getContentType(): string
    getText(): string | null
    ref(): Value
    unref(): void
    unrefToPassword(length: number): string
    static name: string
    static new(secret: string, length: number, contentType: string): Value
    constructor(secret: string, length: number, contentType: string)
    /* Static methods and pseudo-constructors */
    static new(secret: string, length: number, contentType: string): Value
    static newFull(secret: string, length: number, contentType: string, destroy: GLib.DestroyNotify): Value
}
}