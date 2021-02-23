/**
 * GUPnP-1.2
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GSSDP } from './GSSDP-1.2';

export declare namespace GUPnP {

export enum ControlError {
    INVALID_ACTION,
    INVALID_ARGS,
    OUT_OF_SYNC,
    ACTION_FAILED,
}
export enum EventingError {
    SUBSCRIPTION_FAILED,
    SUBSCRIPTION_LOST,
    NOTIFY_FAILED,
}
export enum RootdeviceError {
    NO_CONTEXT,
    NO_DESCRIPTION_PATH,
    NO_DESCRIPTION_FOLDER,
    NO_NETWORK,
    FAIL,
}
export enum ServerError {
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    NOT_IMPLEMENTED,
    INVALID_RESPONSE,
    INVALID_URL,
    OTHER,
}
export enum ServiceActionArgDirection {
    IN,
    OUT,
}
export enum XMLError {
    PARSE,
    NO_NODE,
    EMPTY_NODE,
    INVALID_ATTRIBUTE,
    OTHER,
}
export function controlErrorQuark(): GLib.Quark
export function eventingErrorQuark(): GLib.Quark
export function getUuid(): string
export function rootdeviceErrorQuark(): GLib.Quark
export function serverErrorQuark(): GLib.Quark
export function xmlErrorQuark(): GLib.Quark
export interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection?: ServiceIntrospection | null, error?: GLib.Error | null): void
}
export interface ServiceProxyActionCallback {
    (proxy: ServiceProxy, action: ServiceProxyAction): void
}
export interface ServiceProxyNotifyCallback {
    (proxy: ServiceProxy, variable: string, value: any): void
}
export class Acl {
    /* Methods of GUPnP-1.2.GUPnP.Acl */
    canSync(): boolean
    isAllowed(device: object | null, service: object | null, path: string, address: string, agent?: string | null): boolean
    isAllowedAsync(device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean
    static name: string
}
export interface Context_ConstructProps extends GSSDP.Client_ConstructProps {
    acl?: Acl
    defaultLanguage?: string
    port?: number
    subscriptionTimeout?: number
}
export class Context {
    /* Properties of GUPnP-1.2.GUPnP.Context */
    acl: Acl
    defaultLanguage: string
    readonly server: Soup.Server
    readonly session: Soup.Session
    /* Properties of GSSDP-1.2.GSSDP.Client */
    active: boolean
    bootId: number
    configId: number
    hostIp: string
    hostMask: Gio.InetAddressMask
    network: string
    serverId: string
    /* Fields of GUPnP-1.2.GUPnP.Context */
    parentInstance: GSSDP.Client
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.Context */
    addServerHandler(useAcl: boolean, path: string, callback: Soup.ServerCallback): void
    getAcl(): Acl
    getDefaultLanguage(): string
    getPort(): number
    getServer(): Soup.Server
    getSession(): Soup.Session
    getSubscriptionTimeout(): number
    hostPath(localPath: string, serverPath: string): void
    hostPathForAgent(localPath: string, serverPath: string, userAgent: GLib.Regex): boolean
    removeServerHandler(path: string): void
    rewriteUri(uri: string): string
    setAcl(acl?: Acl | null): void
    setDefaultLanguage(language: string): void
    setSubscriptionTimeout(timeout: number): void
    unhostPath(serverPath: string): void
    /* Methods of GSSDP-1.2.GSSDP.Client */
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
    getUdaVersion(): GSSDP.UDAVersion
    guessUserAgent(ipAddress: string): string
    removeHeader(name: string): void
    setBootId(bootId: number): void
    setConfigId(configId: number): void
    setNetwork(network: string): void
    setServerId(serverId: string): void
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
    /* Signals of GSSDP-1.2.GSSDP.Client */
    connect(sigName: "message-received", callback: (($obj: Context, fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void)): number
    on(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void): NodeJS.EventEmitter
    emit(sigName: "message-received", fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::boot-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::config-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-mask", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-mask", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(iface: string | null, port: number): Context
    static new(iface?: string | null): Context
    static $gtype: GObject.Type
}
export interface ContextManager_ConstructProps extends GObject.Object_ConstructProps {
    family?: Gio.SocketFamily
    port?: number
    udaVersion?: GSSDP.UDAVersion
}
export class ContextManager {
    /* Properties of GUPnP-1.2.GUPnP.ContextManager */
    readonly whiteList: WhiteList
    /* Fields of GUPnP-1.2.GUPnP.ContextManager */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ContextManager */
    getPort(): number
    getSocketFamily(): Gio.SocketFamily
    getUdaVersion(): GSSDP.UDAVersion
    getWhiteList(): WhiteList
    manageControlPoint(controlPoint: ControlPoint): void
    manageRootDevice(rootDevice: RootDevice): void
    rescanControlPoints(): void
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
    /* Signals of GUPnP-1.2.GUPnP.ContextManager */
    connect(sigName: "context-available", callback: (($obj: ContextManager, context: Context) => void)): number
    on(sigName: "context-available", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (context: Context) => void): NodeJS.EventEmitter
    emit(sigName: "context-available", context: Context): void
    connect(sigName: "context-unavailable", callback: (($obj: ContextManager, context: Context) => void)): number
    on(sigName: "context-unavailable", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-unavailable", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-unavailable", callback: (context: Context) => void): NodeJS.EventEmitter
    emit(sigName: "context-unavailable", context: Context): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::white-list", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-list", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::white-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::white-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::white-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContextManager_ConstructProps)
    _init (config?: ContextManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(port: number): ContextManager
    static createFull(udaVersion: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager
    static $gtype: GObject.Type
}
export interface ControlPoint_ConstructProps extends GSSDP.ResourceBrowser_ConstructProps {
    resourceFactory?: ResourceFactory
}
export class ControlPoint {
    /* Properties of GSSDP-1.2.GSSDP.ResourceBrowser */
    active: boolean
    mx: number
    target: string
    /* Fields of GUPnP-1.2.GUPnP.ControlPoint */
    parentInstance: GSSDP.ResourceBrowser
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ControlPoint */
    getContext(): Context
    getResourceFactory(): ResourceFactory
    listDeviceProxies(): DeviceProxy[]
    listServiceProxies(): ServiceProxy[]
    /* Methods of GSSDP-1.2.GSSDP.ResourceBrowser */
    getActive(): boolean
    getClient(): GSSDP.Client
    getMx(): number
    getTarget(): string
    rescan(): boolean
    setActive(active: boolean): void
    setMx(mx: number): void
    setTarget(target: string): void
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
    /* Signals of GUPnP-1.2.GUPnP.ControlPoint */
    connect(sigName: "device-proxy-available", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    on(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "device-proxy-available", proxy: DeviceProxy): void
    connect(sigName: "device-proxy-unavailable", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    on(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "device-proxy-unavailable", proxy: DeviceProxy): void
    connect(sigName: "service-proxy-available", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    on(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "service-proxy-available", proxy: ServiceProxy): void
    connect(sigName: "service-proxy-unavailable", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    on(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "service-proxy-unavailable", proxy: ServiceProxy): void
    /* Signals of GSSDP-1.2.GSSDP.ResourceBrowser */
    connect(sigName: "resource-available", callback: (($obj: ControlPoint, usn: string, locations: string[]) => void)): number
    on(sigName: "resource-available", callback: (usn: string, locations: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-available", callback: (usn: string, locations: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-available", callback: (usn: string, locations: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "resource-available", usn: string, locations: string[]): void
    connect(sigName: "resource-unavailable", callback: (($obj: ControlPoint, usn: string) => void)): number
    on(sigName: "resource-unavailable", callback: (usn: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-unavailable", callback: (usn: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-unavailable", callback: (usn: string) => void): NodeJS.EventEmitter
    emit(sigName: "resource-unavailable", usn: string): void
    connect(sigName: "resource-update", callback: (($obj: ControlPoint, usn: string, bootId: number, nextBootId: number) => void)): number
    on(sigName: "resource-update", callback: (usn: string, bootId: number, nextBootId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-update", callback: (usn: string, bootId: number, nextBootId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-update", callback: (usn: string, bootId: number, nextBootId: number) => void): NodeJS.EventEmitter
    emit(sigName: "resource-update", usn: string, bootId: number, nextBootId: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mx", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ControlPoint_ConstructProps)
    _init (config?: ControlPoint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, target: string): ControlPoint
    static new(client: GSSDP.Client, target: string): ControlPoint
    static newFull(context: Context, factory: ResourceFactory, target: string): ControlPoint
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends DeviceInfo_ConstructProps {
    rootDevice?: RootDevice
}
export class Device {
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.Device */
    parentInstance: DeviceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): { returnType: string, mimeType: string | null, depth: number | null, width: number | null, height: number | null }
    getLocation(): string
    getManufacturer(): string
    getManufacturerUrl(): string
    getModelDescription(): string
    getModelName(): string
    getModelNumber(): string
    getModelUrl(): string
    getPresentationUrl(): string
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string
    getService(type: string): ServiceInfo
    getUdn(): string
    getUpc(): string
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[]
    listDevices(): DeviceInfo[]
    listDlnaCapabilities(): string[]
    listDlnaDeviceClassIdentifier(): string[]
    listServiceTypes(): string[]
    listServices(): ServiceInfo[]
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceInfo_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
    deviceType?: string
    document?: XMLDoc
    element?: object
    location?: string
    resourceFactory?: ResourceFactory
    udn?: string
    urlBase?: Soup.URI
}
export class DeviceInfo {
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.DeviceInfo */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): { returnType: string, mimeType: string | null, depth: number | null, width: number | null, height: number | null }
    getLocation(): string
    getManufacturer(): string
    getManufacturerUrl(): string
    getModelDescription(): string
    getModelName(): string
    getModelNumber(): string
    getModelUrl(): string
    getPresentationUrl(): string
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string
    getService(type: string): ServiceInfo
    getUdn(): string
    getUpc(): string
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[]
    listDevices(): DeviceInfo[]
    listDlnaCapabilities(): string[]
    listDlnaDeviceClassIdentifier(): string[]
    listServiceTypes(): string[]
    listServices(): ServiceInfo[]
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceInfo_ConstructProps)
    _init (config?: DeviceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceProxy_ConstructProps extends DeviceInfo_ConstructProps {
}
export class DeviceProxy {
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.DeviceProxy */
    parentInstance: DeviceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): { returnType: string, mimeType: string | null, depth: number | null, width: number | null, height: number | null }
    getLocation(): string
    getManufacturer(): string
    getManufacturerUrl(): string
    getModelDescription(): string
    getModelName(): string
    getModelNumber(): string
    getModelUrl(): string
    getPresentationUrl(): string
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string
    getService(type: string): ServiceInfo
    getUdn(): string
    getUpc(): string
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[]
    listDevices(): DeviceInfo[]
    listDlnaCapabilities(): string[]
    listDlnaDeviceClassIdentifier(): string[]
    listServiceTypes(): string[]
    listServices(): ServiceInfo[]
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceProxy_ConstructProps)
    _init (config?: DeviceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class ResourceFactory {
    /* Fields of GUPnP-1.2.GUPnP.ResourceFactory */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResourceFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ResourceFactory_ConstructProps)
    _init (config?: ResourceFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ResourceFactory
    static getDefault(): ResourceFactory
    static $gtype: GObject.Type
}
export interface RootDevice_ConstructProps extends Device_ConstructProps {
    available?: boolean
    descriptionDir?: string
    descriptionDoc?: XMLDoc
    descriptionPath?: string
}
export class RootDevice {
    /* Properties of GUPnP-1.2.GUPnP.RootDevice */
    available: boolean
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.RootDevice */
    parentInstance: Device
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.RootDevice */
    getAvailable(): boolean
    getDescriptionDir(): string
    getDescriptionPath(): string
    getRelativeLocation(): string
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    setAvailable(available: boolean): void
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): { returnType: string, mimeType: string | null, depth: number | null, width: number | null, height: number | null }
    getLocation(): string
    getManufacturer(): string
    getManufacturerUrl(): string
    getModelDescription(): string
    getModelName(): string
    getModelNumber(): string
    getModelUrl(): string
    getPresentationUrl(): string
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string
    getService(type: string): ServiceInfo
    getUdn(): string
    getUpc(): string
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[]
    listDevices(): DeviceInfo[]
    listDlnaCapabilities(): string[]
    listDlnaDeviceClassIdentifier(): string[]
    listServiceTypes(): string[]
    listServices(): ServiceInfo[]
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RootDevice_ConstructProps)
    _init (config?: RootDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, descriptionPath: string, descriptionDir: string): RootDevice
    static newFull(context: Context, factory: ResourceFactory, descriptionDoc: XMLDoc, descriptionPath: string, descriptionDir: string): RootDevice
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Service_ConstructProps extends ServiceInfo_ConstructProps {
    rootDevice?: RootDevice
}
export class Service {
    /* Fields of GUPnP-1.2.GUPnP.Service */
    parentInstance: ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): ServiceIntrospection
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GUPnP-1.2.GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: Service, action: ServiceAction) => void)): number
    on(sigName: "action-invoked", callback: (action: ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (action: ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (action: ServiceAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-invoked", action: ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: Service, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    on(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: Service, variable: string, value: any) => void)): number
    on(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (variable: string, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ServiceInfo_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
    document?: XMLDoc
    element?: object
    location?: string
    serviceType?: string
    udn?: string
    urlBase?: Soup.URI
}
export class ServiceInfo {
    /* Fields of GUPnP-1.2.GUPnP.ServiceInfo */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): ServiceIntrospection
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServiceInfo_ConstructProps)
    _init (config?: ServiceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ServiceIntrospection_ConstructProps extends GObject.Object_ConstructProps {
    scpd?: object
}
export class ServiceIntrospection {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ServiceIntrospection */
    getAction(actionName: string): ServiceActionInfo
    getStateVariable(variableName: string): ServiceStateVariableInfo
    listActionNames(): string[]
    listActions(): ServiceActionInfo[]
    listStateVariableNames(): string[]
    listStateVariables(): ServiceStateVariableInfo[]
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServiceIntrospection_ConstructProps)
    _init (config?: ServiceIntrospection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ServiceProxy_ConstructProps extends ServiceInfo_ConstructProps {
    subscribed?: boolean
}
export class ServiceProxy {
    /* Properties of GUPnP-1.2.GUPnP.ServiceProxy */
    subscribed: boolean
    /* Fields of GUPnP-1.2.GUPnP.ServiceProxy */
    parentInstance: ServiceInfo
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ServiceProxy */
    addNotify(variable: string, type: GObject.Type, callback: ServiceProxyNotifyCallback): boolean
    addRawNotify(callback: ServiceProxyNotifyCallback): boolean
    beginActionList(action: string, inNames: string[], inValues: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
    callAction(action: ServiceProxyAction, cancellable?: Gio.Cancellable | null): ServiceProxyAction
    callActionAsync(action: ServiceProxyAction, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callActionFinish(result: Gio.AsyncResult): ServiceProxyAction
    cancelAction(action: ServiceProxyAction): void
    endActionHash(action: ServiceProxyAction, hash: GLib.HashTable): { returnType: boolean, hash: GLib.HashTable }
    endActionList(action: ServiceProxyAction, outNames: string[], outTypes: GObject.Type[]): { returnType: boolean, outValues: any[] }
    getSubscribed(): boolean
    removeNotify(variable: string, callback: ServiceProxyNotifyCallback): boolean
    removeRawNotify(callback: ServiceProxyNotifyCallback): boolean
    sendActionList(action: string, inNames: string[], inValues: any[], outNames: string[], outTypes: GObject.Type[]): { returnType: boolean, outValues: any[] }
    setSubscribed(subscribed: boolean): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): ServiceIntrospection
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
    /* Signals of GUPnP-1.2.GUPnP.ServiceProxy */
    connect(sigName: "subscription-lost", callback: (($obj: ServiceProxy, error: GLib.Error) => void)): number
    on(sigName: "subscription-lost", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "subscription-lost", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "subscription-lost", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "subscription-lost", error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::subscribed", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscribed", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServiceProxy_ConstructProps)
    _init (config?: ServiceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WhiteList_ConstructProps extends GObject.Object_ConstructProps {
    enabled?: boolean
    entries?: string[]
}
export class WhiteList {
    /* Properties of GUPnP-1.2.GUPnP.WhiteList */
    enabled: boolean
    /* Fields of GUPnP-1.2.GUPnP.WhiteList */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.WhiteList */
    addEntry(entry: string): boolean
    addEntryv(entries: string[]): void
    checkContext(context: Context): boolean
    clear(): void
    getEnabled(): boolean
    getEntries(): string[]
    isEmpty(): boolean
    removeEntry(entry: string): boolean
    setEnabled(enable: boolean): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WhiteList_ConstructProps)
    _init (config?: WhiteList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WhiteList
    static $gtype: GObject.Type
}
export interface XMLDoc_ConstructProps extends GObject.Object_ConstructProps {
}
export class XMLDoc {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.XMLDoc */
    getDoc(): libxml2.Doc
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: XMLDoc_ConstructProps)
    _init (config?: XMLDoc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(xmlDoc: libxml2.Doc): XMLDoc
    static newFromPath(path: string): XMLDoc
    static $gtype: GObject.Type
}
export abstract class AclInterface {
    /* Fields of GUPnP-1.2.GUPnP.AclInterface */
    parent: GObject.TypeInterface
    isAllowed: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null) => boolean
    isAllowedAsync: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: Acl, res: Gio.AsyncResult) => boolean
    canSync: (self: Acl) => boolean
    static name: string
}
export abstract class ContextClass {
    /* Fields of GUPnP-1.2.GUPnP.ContextClass */
    parentClass: GSSDP.ClientClass
    static name: string
}
export abstract class ContextManagerClass {
    /* Fields of GUPnP-1.2.GUPnP.ContextManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ControlPointClass {
    /* Fields of GUPnP-1.2.GUPnP.ControlPointClass */
    parentClass: GSSDP.ResourceBrowserClass
    deviceProxyAvailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    deviceProxyUnavailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    serviceProxyAvailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    serviceProxyUnavailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    static name: string
}
export abstract class DeviceClass {
    /* Fields of GUPnP-1.2.GUPnP.DeviceClass */
    parentClass: DeviceInfoClass
    static name: string
}
export abstract class DeviceInfoClass {
    /* Fields of GUPnP-1.2.GUPnP.DeviceInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DeviceProxyClass {
    /* Fields of GUPnP-1.2.GUPnP.DeviceProxyClass */
    parentClass: DeviceInfoClass
    static name: string
}
export abstract class ResourceFactoryClass {
    /* Fields of GUPnP-1.2.GUPnP.ResourceFactoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RootDeviceClass {
    /* Fields of GUPnP-1.2.GUPnP.RootDeviceClass */
    parentClass: DeviceClass
    static name: string
}
export class ServiceAction {
    /* Methods of GUPnP-1.2.GUPnP.ServiceAction */
    getArgumentCount(): number
    getValue(argument: string, type: GObject.Type): any
    getLocales(): string[]
    getMessage(): Soup.Message
    getName(): string
    getValues(argNames: string[], argTypes: GObject.Type[]): any[]
    return(): void
    returnError(errorCode: number, errorDescription: string): void
    setValue(argument: string, value: any): void
    setValues(argNames: string[], argValues: any[]): void
    static name: string
}
export class ServiceActionArgInfo {
    /* Fields of GUPnP-1.2.GUPnP.ServiceActionArgInfo */
    name: string
    direction: ServiceActionArgDirection
    relatedStateVariable: string
    retval: boolean
    static name: string
}
export class ServiceActionInfo {
    /* Fields of GUPnP-1.2.GUPnP.ServiceActionInfo */
    name: string
    arguments_: ServiceActionArgInfo[]
    static name: string
}
export abstract class ServiceClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceClass */
    parentClass: ServiceInfoClass
    actionInvoked: (service: Service, action: ServiceAction) => void
    queryVariable: (service: Service, variable: string, value: any) => void
    static name: string
}
export abstract class ServiceInfoClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ServiceIntrospectionClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceIntrospectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ServiceProxyAction {
    /* Methods of GUPnP-1.2.GUPnP.ServiceProxyAction */
    getResultHash(outHash: GLib.HashTable): { returnType: boolean, outHash: GLib.HashTable }
    getResultList(outNames: string[], outTypes: GObject.Type[]): { returnType: boolean, outValues: any[] }
    ref(): ServiceProxyAction
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromList(action: string, inNames: string[], inValues: any[]): ServiceProxyAction
}
export abstract class ServiceProxyClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceProxyClass */
    parentClass: ServiceInfoClass
    subscriptionLost: (proxy: ServiceProxy, reason: GLib.Error) => void
    static name: string
}
export class ServiceStateVariableInfo {
    /* Fields of GUPnP-1.2.GUPnP.ServiceStateVariableInfo */
    name: string
    sendEvents: boolean
    isNumeric: boolean
    type: GObject.Type
    defaultValue: any
    minimum: any
    maximum: any
    step: any
    allowedValues: string[]
    static name: string
}
export abstract class WhiteListClass {
    /* Fields of GUPnP-1.2.GUPnP.WhiteListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class XMLDocClass {
    /* Fields of GUPnP-1.2.GUPnP.XMLDocClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}