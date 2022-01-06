/**
 * SocialWebClient-0.25
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace SocialWebClient {

interface ClientGetServicesCallback {
    (client: Client, services: string[]): void
}
interface ClientIsOnlineCallback {
    (client: Client, online: boolean): void
}
interface ClientServiceContactsQueryOpenViewCallback {
    (query: ClientService, contactView?: ClientContactView | null): void
}
interface ClientServiceGetCapabilitiesCallback {
    (service: ClientService, caps: string[], error: GLib.Error): void
}
interface ClientServiceQueryOpenViewCallback {
    (query: ClientService, itemView?: ClientItemView | null): void
}
interface ClientServiceUpdateStatusCallback {
    (service: ClientService, error: GLib.Error): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Fields of SocialWebClient-0.25.SocialWebClient.Client */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.Client */
    getService(serviceName: string): ClientService
    getServices(cb: ClientGetServicesCallback): void
    isOnline(cb: ClientIsOnlineCallback): void
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
    /* Signals of SocialWebClient-0.25.SocialWebClient.Client */
    connect(sigName: "online-changed", callback: (($obj: Client, object: boolean) => void)): number
    on(sigName: "online-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "online-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "online-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "online-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static $gtype: GObject.Type
}
export interface ClientContactView_ConstructProps extends GObject.Object_ConstructProps {
    objectPath?: string
}
class ClientContactView {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientContactView */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientContactView */
    close(): void
    refresh(): void
    start(): void
    stop(): void
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
    /* Signals of SocialWebClient-0.25.SocialWebClient.ClientContactView */
    connect(sigName: "contacts-added", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    on(sigName: "contacts-added", callback: (contacts: Contact[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-added", callback: (contacts: Contact[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-added", callback: (contacts: Contact[]) => void): NodeJS.EventEmitter
    emit(sigName: "contacts-added", contacts: Contact[]): void
    connect(sigName: "contacts-changed", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    on(sigName: "contacts-changed", callback: (contacts: Contact[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-changed", callback: (contacts: Contact[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-changed", callback: (contacts: Contact[]) => void): NodeJS.EventEmitter
    emit(sigName: "contacts-changed", contacts: Contact[]): void
    connect(sigName: "contacts-removed", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    on(sigName: "contacts-removed", callback: (contacts: Contact[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-removed", callback: (contacts: Contact[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-removed", callback: (contacts: Contact[]) => void): NodeJS.EventEmitter
    emit(sigName: "contacts-removed", contacts: Contact[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientContactView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ClientContactView_ConstructProps)
    _init (config?: ClientContactView_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientItemView_ConstructProps extends GObject.Object_ConstructProps {
    objectPath?: string
}
class ClientItemView {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientItemView */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientItemView */
    close(): void
    refresh(): void
    start(): void
    stop(): void
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
    /* Signals of SocialWebClient-0.25.SocialWebClient.ClientItemView */
    connect(sigName: "items-added", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    on(sigName: "items-added", callback: (items: Item[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-added", callback: (items: Item[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-added", callback: (items: Item[]) => void): NodeJS.EventEmitter
    emit(sigName: "items-added", items: Item[]): void
    connect(sigName: "items-changed", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    on(sigName: "items-changed", callback: (items: Item[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (items: Item[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (items: Item[]) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", items: Item[]): void
    connect(sigName: "items-removed", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    on(sigName: "items-removed", callback: (items: Item[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-removed", callback: (items: Item[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-removed", callback: (items: Item[]) => void): NodeJS.EventEmitter
    emit(sigName: "items-removed", items: Item[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientItemView, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ClientItemView_ConstructProps)
    _init (config?: ClientItemView_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientLastfm_ConstructProps extends GObject.Object_ConstructProps {
}
class ClientLastfm {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientLastfm */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientLastfm */
    nowPlaying(artist: string, album: string, track: string, length: number, tracknumber: number, musicbrainzId: string): void
    submitTrack(artist: string, album: string, track: string, time: number, source: string, rating: string, length: number, tracknumber: number, musicbrainzId: string): void
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
    connect(sigName: "notify", callback: (($obj: ClientLastfm, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ClientLastfm_ConstructProps)
    _init (config?: ClientLastfm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientLastfm
    static $gtype: GObject.Type
}
export interface ClientService_ConstructProps extends GObject.Object_ConstructProps {
}
class ClientService {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientService */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientService */
    banishableHideItem(uid: string): void
    contactsQueryOpenView(query: string, params: GLib.HashTable, cb: ClientServiceContactsQueryOpenViewCallback): void
    credentialsUpdated(): void
    getDisplayName(): string
    getDynamicCapabilities(cb: ClientServiceGetCapabilitiesCallback): void
    getName(): string
    getStaticCapabilities(cb: ClientServiceGetCapabilitiesCallback): void
    queryOpenView(query: string, params: GLib.HashTable, cb: ClientServiceQueryOpenViewCallback): void
    requestAvatar(): void
    updateStatus(cb: ClientServiceUpdateStatusCallback, statusMsg: string): void
    updateStatusWithFields(cb: ClientServiceUpdateStatusCallback, statusMsg: string, fields: GLib.HashTable): void
    uploadPhotoFinish(res: Gio.AsyncResult): boolean
    uploadVideoFinish(res: Gio.AsyncResult): boolean
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
    /* Signals of SocialWebClient-0.25.SocialWebClient.ClientService */
    connect(sigName: "avatar-retrieved", callback: (($obj: ClientService, object: string) => void)): number
    on(sigName: "avatar-retrieved", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "avatar-retrieved", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "avatar-retrieved", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "avatar-retrieved", object: string): void
    connect(sigName: "capabilities-changed", callback: (($obj: ClientService, object: string[]) => void)): number
    on(sigName: "capabilities-changed", callback: (object: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "capabilities-changed", callback: (object: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "capabilities-changed", callback: (object: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "capabilities-changed", object: string[]): void
    connect(sigName: "status-updated", callback: (($obj: ClientService, object: boolean) => void)): number
    on(sigName: "status-updated", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-updated", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-updated", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "status-updated", object: boolean): void
    connect(sigName: "user-changed", callback: (($obj: ClientService) => void)): number
    on(sigName: "user-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "user-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientService, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ClientService_ConstructProps)
    _init (config?: ClientService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static hasCap(caps: string[], cap: string): boolean
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ClientContactViewClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ClientItemViewClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ClientLastfmClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ClientServiceClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientServiceClass */
    parentClass: GObject.ObjectClass
    capabilitiesChanged: (service: ClientService, caps: string) => void
    userChanged: (service: ClientService) => void
    avatarRetrieved: (service: ClientService, path: string) => void
    statusUpdated: (service: ClientService, success: boolean) => void
    static name: string
}
class Contact {
    /* Fields of SocialWebClient-0.25.SocialWebClient.Contact */
    refcount: number
    service: string
    uuid: string
    date: GLib.TimeVal
    props: GLib.HashTable
    /* Methods of SocialWebClient-0.25.SocialWebClient.Contact */
    free(): void
    getValue(key: string): string
    getValueAll(key: string): string[]
    hasKey(key: string): boolean
    isFromCache(): boolean
    ref(): Contact
    unref(): void
    static name: string
    static new(): Contact
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Contact
}
class Item {
    /* Fields of SocialWebClient-0.25.SocialWebClient.Item */
    refcount: number
    service: string
    uuid: string
    date: GLib.TimeVal
    props: GLib.HashTable
    /* Methods of SocialWebClient-0.25.SocialWebClient.Item */
    free(): void
    getValue(key: string): string
    hasKey(key: string): boolean
    isFromCache(): boolean
    ref(): Item
    unref(): void
    static name: string
    static new(): Item
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Item
}
}
export default SocialWebClient