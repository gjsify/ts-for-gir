/**
 * GSSDP-1.2
 */

/// <reference types="node" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace GSSDP {

export enum Error {
    NO_IP_ADDRESS,
    FAILED,
}
export enum UDAVersion {
    VERSION_UNSPECIFIED,
    VERSION_1_0,
    VERSION_1_1,
}
export const ALL_RESOURCES: string
export function errorQuark(): GLib.Quark
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    active?: boolean
    addressFamily?: Gio.SocketFamily
    bootId?: number
    configId?: number
    hostIp?: string
    hostMask?: Gio.InetAddressMask
    interface?: string
    msearchPort?: number
    network?: string
    serverId?: string
    socketTtl?: number
    udaVersion?: UDAVersion
}
export class Client {
    /* Properties of GSSDP.Client */
    active: boolean
    bootId: number
    configId: number
    hostIp: string
    hostMask: Gio.InetAddressMask
    network: string
    serverId: string
    /* Fields of GSSDP.Client */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSSDP.Client */
    addCacheEntry(ipAddress: string, userAgent: string): void
    appendHeader(name: string, value: string): void
    clearHeaders(): void
    getActive(): boolean
    getAddress(): Gio.InetAddress
    getAddressMask(): Gio.InetAddressMask
    getFamily(): Gio.SocketFamily
    getHostIp(): string
    getIndex(): number
    getInterface(): string
    getNetwork(): string
    getServerId(): string
    getUdaVersion(): UDAVersion
    guessUserAgent(ipAddress: string): string
    removeHeader(name: string): void
    setBootId(bootId: number): void
    setConfigId(configId: number): void
    setNetwork(network: string): void
    setServerId(serverId: string): void
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
    /* Virtual methods of GSSDP.Client */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GSSDP.Client */
    connect(sigName: "message-received", callback: (($obj: Client, fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void)): number
    connect_after(sigName: "message-received", callback: (($obj: Client, fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void)): number
    emit(sigName: "message-received", fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders): void
    on(sigName: "message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::boot-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::config-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-mask", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-mask", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(iface?: string | null): Client
    static newWithPort(iface: string | null, msearchPort: number): Client
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ResourceBrowser_ConstructProps extends GObject.Object_ConstructProps {
    active?: boolean
    client?: Client
    mx?: number
    target?: string
}
export class ResourceBrowser {
    /* Properties of GSSDP.ResourceBrowser */
    active: boolean
    mx: number
    target: string
    /* Fields of GSSDP.ResourceBrowser */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSSDP.ResourceBrowser */
    getActive(): boolean
    getClient(): Client
    getMx(): number
    getTarget(): string
    rescan(): boolean
    setActive(active: boolean): void
    setMx(mx: number): void
    setTarget(target: string): void
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
    /* Virtual methods of GSSDP.ResourceBrowser */
    vfuncResourceUnavailable(usn: string): void
    vfuncResourceUpdate(usn: string, bootId: number, nextBootId: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GSSDP.ResourceBrowser */
    connect(sigName: "resource-available", callback: (($obj: ResourceBrowser, usn: string, locations: string[]) => void)): number
    connect_after(sigName: "resource-available", callback: (($obj: ResourceBrowser, usn: string, locations: string[]) => void)): number
    emit(sigName: "resource-available", usn: string, locations: string[]): void
    on(sigName: "resource-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-unavailable", callback: (($obj: ResourceBrowser, usn: string) => void)): number
    connect_after(sigName: "resource-unavailable", callback: (($obj: ResourceBrowser, usn: string) => void)): number
    emit(sigName: "resource-unavailable", usn: string): void
    on(sigName: "resource-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-update", callback: (($obj: ResourceBrowser, usn: string, bootId: number, nextBootId: number) => void)): number
    connect_after(sigName: "resource-update", callback: (($obj: ResourceBrowser, usn: string, bootId: number, nextBootId: number) => void)): number
    emit(sigName: "resource-update", usn: string, bootId: number, nextBootId: number): void
    on(sigName: "resource-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mx", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourceBrowser_ConstructProps)
    _init (config?: ResourceBrowser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client, target: string): ResourceBrowser
    static $gtype: GObject.Type
}
export interface ResourceGroup_ConstructProps extends GObject.Object_ConstructProps {
    available?: boolean
    client?: Client
    maxAge?: number
    messageDelay?: number
}
export class ResourceGroup {
    /* Properties of GSSDP.ResourceGroup */
    available: boolean
    maxAge: number
    messageDelay: number
    /* Fields of GSSDP.ResourceGroup */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSSDP.ResourceGroup */
    addResource(target: string, usn: string, locations: string[]): number
    addResourceSimple(target: string, usn: string, location: string): number
    getAvailable(): boolean
    getClient(): Client
    getMaxAge(): number
    getMessageDelay(): number
    removeResource(resourceId: number): void
    setAvailable(available: boolean): void
    setMaxAge(maxAge: number): void
    setMessageDelay(messageDelay: number): void
    update(newBootId: number): void
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
    connect(sigName: "notify", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-age", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-delay", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-delay", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourceGroup_ConstructProps)
    _init (config?: ResourceGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client): ResourceGroup
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of GSSDP.ClientClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ResourceBrowserClass {
    /* Fields of GSSDP.ResourceBrowserClass */
    parentClass: GObject.ObjectClass
    resourceUpdate: (resourceBrowser: ResourceBrowser, usn: string, bootId: number, nextBootId: number) => void
    resourceUnavailable: (resourceBrowser: ResourceBrowser, usn: string) => void
    static name: string
}
export abstract class ResourceGroupClass {
    /* Fields of GSSDP.ResourceGroupClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}