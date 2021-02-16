/**
 * SecretUnstable-0
 */

/// <reference types="node" />
import type { Secret } from './Secret-1';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace SecretUnstable {

export enum CollectionCreateFlags {
    COLLECTION_CREATE_NONE,
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
export interface Collection_ConstructProps extends Gio.DBusProxy_ConstructProps {
    created?: number
    label?: string
    modified?: number
    service?: Service
}
export class Collection {
    /* Properties of SecretUnstable.Collection */
    created: number
    label: string
    readonly locked: boolean
    modified: number
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of SecretUnstable.Collection */
    parent: Gio.DBusProxy
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SecretUnstable.Collection */
    delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(cancellable?: Gio.Cancellable | null): boolean
    getCreated(): number
    getFlags(): CollectionFlags
    getItems(): Item[]
    getLabel(): string
    getLocked(): boolean
    getModified(): number
    getService(): Service
    loadItems(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    loadItemsFinish(result: Gio.AsyncResult): boolean
    loadItemsSync(cancellable?: Gio.Cancellable | null): boolean
    refresh(): void
    search(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(result: Gio.AsyncResult): Item[]
    searchForDbusPaths(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchForDbusPathsFinish(result: Gio.AsyncResult): string[]
    searchForDbusPathsSync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): string[]
    searchSync(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    setLabel(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setLabelFinish(result: Gio.AsyncResult): boolean
    setLabelSync(label: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of SecretUnstable.Collection */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Collection, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Collection, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: Collection, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Collection, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newForDbusPathFinish(result: Gio.AsyncResult): Collection
    static newForDbusPathSync(service: Service | null, collectionPath: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null): Collection
    static create(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static createFinish(result: Gio.AsyncResult): Collection
    static createSync(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null): Collection
    static forAlias(service: Service | null, alias: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static forAliasFinish(result: Gio.AsyncResult): Collection
    static forAliasSync(service: Service | null, alias: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null): Collection
    static newForDbusPath(service: Service | null, collectionPath: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Item_ConstructProps extends Gio.DBusProxy_ConstructProps {
    attributes?: GLib.HashTable
    created?: number
    label?: string
    modified?: number
    service?: Service
}
export class Item {
    /* Properties of SecretUnstable.Item */
    attributes: GLib.HashTable
    created: number
    label: string
    readonly locked: boolean
    modified: number
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of SecretUnstable.Item */
    parentInstance: Gio.DBusProxy
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SecretUnstable.Item */
    delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(cancellable?: Gio.Cancellable | null): boolean
    getAttributes(): GLib.HashTable
    getCreated(): number
    getFlags(): ItemFlags
    getLabel(): string
    getLocked(): boolean
    getModified(): number
    getSchemaName(): string
    getSecret(): Value
    getService(): Service
    loadSecret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    loadSecretFinish(result: Gio.AsyncResult): boolean
    loadSecretSync(cancellable?: Gio.Cancellable | null): boolean
    refresh(): void
    setAttributes(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setAttributesFinish(result: Gio.AsyncResult): boolean
    setAttributesSync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    setLabel(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setLabelFinish(result: Gio.AsyncResult): boolean
    setLabelSync(label: string, cancellable?: Gio.Cancellable | null): boolean
    setSecret(value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setSecretFinish(result: Gio.AsyncResult): boolean
    setSecretSync(value: Value, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of SecretUnstable.Item */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Item, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Item, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: Item, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Item, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newForDbusPathFinish(result: Gio.AsyncResult): Item
    static newForDbusPathSync(service: Service, itemPath: string, flags: ItemFlags, cancellable?: Gio.Cancellable | null): Item
    static create(collection: Collection, schema: Secret.Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static createFinish(result: Gio.AsyncResult): Item
    static createSync(collection: Collection, schema: Secret.Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): Item
    static loadSecrets(items: Item[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static loadSecretsFinish(result: Gio.AsyncResult): boolean
    static loadSecretsSync(items: Item[], cancellable?: Gio.Cancellable | null): boolean
    static newForDbusPath(service: Service | null, itemPath: string, flags: ItemFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Prompt_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class Prompt {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of SecretUnstable.Prompt */
    parentInstance: Gio.DBusProxy
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SecretUnstable.Prompt */
    perform(windowId: number, returnType: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    performFinish(result: Gio.AsyncResult): GLib.Variant
    performSync(windowId: number, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    run(windowId: number, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of SecretUnstable.Prompt */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Prompt, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Prompt, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: Prompt, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Prompt, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
}
export class Service {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of SecretUnstable.Service */
    parent: Gio.DBusProxy
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SecretUnstable.Service */
    clear(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    clearFinish(result: Gio.AsyncResult): boolean
    clearSync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    createCollectionDbusPath(properties: GLib.HashTable, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    createCollectionDbusPathFinish(result: Gio.AsyncResult): string
    createCollectionDbusPathSync(properties: GLib.HashTable, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null): string
    createItemDbusPath(collectionPath: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    createItemDbusPathFinish(result: Gio.AsyncResult): string
    createItemDbusPathSync(collectionPath: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): string
    deleteItemDbusPath(itemPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteItemDbusPathFinish(result: Gio.AsyncResult): boolean
    deleteItemDbusPathSync(itemPath: string, cancellable?: Gio.Cancellable | null): boolean
    ensureSession(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    ensureSessionFinish(result: Gio.AsyncResult): boolean
    ensureSessionSync(cancellable?: Gio.Cancellable | null): boolean
    getCollectionGtype(): GObject.Type
    getCollections(): Collection[]
    getFlags(): ServiceFlags
    getItemGtype(): GObject.Type
    getSecretForDbusPath(itemPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getSecretForDbusPathFinish(result: Gio.AsyncResult): Value
    getSecretForDbusPathSync(itemPath: string, cancellable?: Gio.Cancellable | null): Value
    getSecretsForDbusPaths(itemPaths: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getSecretsForDbusPathsFinish(result: Gio.AsyncResult): GLib.HashTable
    getSecretsForDbusPathsSync(itemPaths: string, cancellable?: Gio.Cancellable | null): GLib.HashTable
    getSessionAlgorithms(): string
    getSessionDbusPath(): string
    loadCollections(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    loadCollectionsFinish(result: Gio.AsyncResult): boolean
    loadCollectionsSync(cancellable?: Gio.Cancellable | null): boolean
    lock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    lockDbusPaths(paths: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    lockDbusPathsFinish(result: Gio.AsyncResult): [ /* returnType */ number, /* locked */ string[] | null ]
    lockDbusPathsSync(paths: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* locked */ string[] | null ]
    lockFinish(result: Gio.AsyncResult): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
    lockSync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
    lookup(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): Value
    lookupSync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): Value
    prompt(prompt: Prompt, returnType: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    promptAtDbusPath(promptPath: string, returnType: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    promptAtDbusPathFinish(result: Gio.AsyncResult): GLib.Variant
    promptAtDbusPathSync(promptPath: string, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    promptFinish(result: Gio.AsyncResult): GLib.Variant
    promptSync(prompt: Prompt, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    readAliasDbusPath(alias: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readAliasDbusPathFinish(result: Gio.AsyncResult): string
    readAliasDbusPathSync(alias: string, cancellable?: Gio.Cancellable | null): string
    search(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(result: Gio.AsyncResult): Item[]
    searchForDbusPaths(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchForDbusPathsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* unlocked */ string[] | null, /* locked */ string[] | null ]
    searchForDbusPathsSync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* unlocked */ string[] | null, /* locked */ string[] | null ]
    searchSync(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    setAlias(alias: string, collection: Collection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setAliasFinish(result: Gio.AsyncResult): boolean
    setAliasSync(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null): boolean
    setAliasToDbusPath(alias: string, collectionPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setAliasToDbusPathFinish(result: Gio.AsyncResult): boolean
    setAliasToDbusPathSync(alias: string, collectionPath?: string | null, cancellable?: Gio.Cancellable | null): boolean
    store(schema: Secret.Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    storeFinish(result: Gio.AsyncResult): boolean
    storeSync(schema: Secret.Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null): boolean
    unlock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    unlockDbusPaths(paths: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    unlockDbusPathsFinish(result: Gio.AsyncResult): [ /* returnType */ number, /* unlocked */ string[] | null ]
    unlockDbusPathsSync(paths: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ string[] | null ]
    unlockFinish(result: Gio.AsyncResult): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]
    unlockSync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of SecretUnstable.Service */
    vfuncGetCollectionGtype(): GObject.Type
    vfuncGetItemGtype(): GObject.Type
    vfuncPromptAsync(prompt: Prompt, returnType: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    vfuncPromptFinish(result: Gio.AsyncResult): GLib.Variant
    vfuncPromptSync(prompt: Prompt, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType): GLib.Variant
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Service, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Service, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: Service, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Service, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static get(flags: ServiceFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static getFinish(result: Gio.AsyncResult): Service
    static getSync(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    static open(serviceGtype: GObject.Type, serviceBusName: string | null, flags: ServiceFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static openFinish(result: Gio.AsyncResult): Service
    static openSync(serviceGtype: GObject.Type, serviceBusName: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class CollectionClass {
    /* Fields of SecretUnstable.CollectionClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class CollectionPrivate {
    static name: string
}
export abstract class ItemClass {
    /* Fields of SecretUnstable.ItemClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ItemPrivate {
    static name: string
}
export abstract class PromptClass {
    /* Fields of SecretUnstable.PromptClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class PromptPrivate {
    static name: string
}
export abstract class ServiceClass {
    /* Fields of SecretUnstable.ServiceClass */
    parentClass: Gio.DBusProxyClass
    collectionGtype: GObject.Type
    itemGtype: GObject.Type
    promptSync: (self: Service, prompt: Prompt, cancellable: Gio.Cancellable | null, returnType: GLib.VariantType) => GLib.Variant
    promptAsync: (self: Service, prompt: Prompt, returnType: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    promptFinish: (self: Service, result: Gio.AsyncResult) => GLib.Variant
    getCollectionGtype: (self: Service) => GObject.Type
    getItemGtype: (self: Service) => GObject.Type
    static name: string
}
export class ServicePrivate {
    static name: string
}
export class Value {
    /* Methods of SecretUnstable.Value */
    get(): any
    getContentType(): string
    getText(): string
    ref(): Value
    unref(): void
    static name: string
    static new(secret: string, length: number, contentType: string): Value
    constructor(secret: string, length: number, contentType: string)
    /* Static methods and pseudo-constructors */
    static new(secret: string, length: number, contentType: string): Value
    static newFull(secret: string, length: number, contentType: string, destroy: GLib.DestroyNotify): Value
}
}