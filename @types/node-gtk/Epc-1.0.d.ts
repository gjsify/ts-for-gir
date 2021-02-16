/**
 * Epc-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Epc {

export enum AddressFamily {
    UNSPEC,
    IPV4,
    IPV6,
}
export enum CollisionHandling {
    IGNORE,
    CHANGE_NAME,
    UNIQUE_SERVICE,
}
export enum Protocol {
    UNKNOWN,
    HTTP,
    HTTPS,
}
export enum AuthFlags {
    DEFAULT,
    PASSWORD_TEXT_NEEDED,
}
export const SERVICE_TYPE_HTTP: string
export const SERVICE_TYPE_HTTPS: string
export const TLS_SECONDS_PER_DAY: number
export const TLS_SECONDS_PER_HOUR: number
export const TLS_SECONDS_PER_MINUTE: number
export function addressFamilyToString(value: AddressFamily): string
export function authFlagsToString(value: AuthFlags): string
export function avahiErrorQuark(): GLib.Quark
export function collisionHandlingToString(value: CollisionHandling): string
export function httpErrorQuark(): GLib.Quark
export function protocolBuildUri(protocol: Protocol, hostname: string, port: number, path: string): string
export function protocolFromName(name: string, fallback: Protocol): Protocol
export function protocolGetServiceType(protocol: Protocol): string
export function protocolGetUriScheme(protocol: Protocol): string
export function protocolToString(value: Protocol): string
export function serviceTypeGetBase(type: string): string
export function serviceTypeGetProtocol(serviceType: string): Protocol
export function serviceTypeNew(protocol: Protocol, application: string): string
export function shellGetDebugLevel(): number
export function shellGetHostName(): string
export function shellProgressBegin(title: string, message: string): void
export function shellProgressEnd(): void
export function shellProgressUpdate(percentage: number, message: string): void
export function shellRestartAvahiClient(strloc: string): void
export function shellSetProgressHooks(hooks: ShellProgressHooks, userData: object, destroyData: GLib.DestroyNotify): void
export function shellWatchRemove(id: number): void
export function tlsErrorQuark(): GLib.Quark
export function tlsGetCertificateFilename(hostname: string): string
export function tlsGetPrivateKeyFilename(hostname: string): string
export function tlsGetServerCredentials(hostname: string, crtfile: string, keyfile: string): boolean
export interface AuthHandler {
    (context: AuthContext, username: string): boolean
}
export interface ContentsHandler {
    (publisher: Publisher, key: string): Contents
}
export interface ContentsReadFunc {
    (contents: Contents, buffer: object, length: number): boolean
}
export interface Consumer_ConstructProps extends GObject.Object_ConstructProps {
    application?: string
    domain?: string
    hostname?: string
    name?: string
    password?: string
    path?: string
    port?: number
    protocol?: Protocol
    username?: string
}
export class Consumer {
    /* Properties of Epc.Consumer */
    password: string
    protocol: Protocol
    username: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Epc.Consumer */
    getPassword(): string
    getProtocol(): Protocol
    getUsername(): string
    isPublisherResolved(): boolean
    resolvePublisher(timeout: number): boolean
    setPassword(password: string): void
    setProtocol(protocol: Protocol): void
    setUsername(username: string): void
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
    /* Virtual methods of Epc.Consumer */
    vfuncAuthenticate(realm: string): void
    vfuncPublisherResolved(protocol: Protocol, hostname: string, port: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Epc.Consumer */
    connect(sigName: "authenticate", callback: (($obj: Consumer, object: string) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Consumer, object: string) => boolean)): number
    emit(sigName: "authenticate", object: string): void
    on(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "publisher-resolved", callback: (($obj: Consumer, object: Protocol, p0: string, p1: number) => void)): number
    connect_after(sigName: "publisher-resolved", callback: (($obj: Consumer, object: Protocol, p0: string, p1: number) => void)): number
    emit(sigName: "publisher-resolved", object: Protocol, p0: string, p1: number): void
    on(sigName: "publisher-resolved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "publisher-resolved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "publisher-resolved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Consumer_ConstructProps)
    _init (config?: Consumer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: ServiceInfo): Consumer
    static newForName(name: string): Consumer
    static newForNameFull(name: string, application: string, domain: string): Consumer
    static $gtype: GObject.Type
}
export interface Dispatcher_ConstructProps extends GObject.Object_ConstructProps {
    collisionHandling?: CollisionHandling
    cookie?: string
    name?: string
}
export class Dispatcher {
    /* Properties of Epc.Dispatcher */
    collisionHandling: CollisionHandling
    cookie: string
    name: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Epc.Dispatcher */
    addServiceSubtype(type: string, subtype: string): void
    getCollisionHandling(): CollisionHandling
    getCookie(): string
    getName(): string
    reset(): void
    run(): boolean
    setCollisionHandling(method: CollisionHandling): void
    setCookie(cookie: string): void
    setName(name: string): void
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
    connect(sigName: "notify", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collision-handling", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cookie", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cookie", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Dispatcher_ConstructProps)
    _init (config?: Dispatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Dispatcher
    static $gtype: GObject.Type
}
export interface Publisher_ConstructProps extends GObject.Object_ConstructProps {
    application?: string
    authFlags?: AuthFlags
    certificateFile?: string
    collisionHandling?: CollisionHandling
    contentsPath?: string
    privateKeyFile?: string
    protocol?: Protocol
    serviceCookie?: string
    serviceDomain?: string
    serviceName?: string
}
export class Publisher {
    /* Properties of Epc.Publisher */
    application: string
    authFlags: AuthFlags
    certificateFile: string
    collisionHandling: CollisionHandling
    contentsPath: string
    privateKeyFile: string
    protocol: Protocol
    serviceCookie: string
    serviceDomain: string
    serviceName: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Epc.Publisher */
    add(key: string, data: object, length: number): void
    addBookmark(key: string, label: string): void
    addFile(key: string, filename: string): void
    addHandler(key: string, handler: ContentsHandler): void
    getAuthFlags(): AuthFlags
    getCertificateFile(): string
    getCollisionHandling(): CollisionHandling
    getContentsPath(): string
    getPath(key: string): string
    getPrivateKeyFile(): string
    getProtocol(): Protocol
    getServiceCookie(): string
    getServiceDomain(): string
    getServiceName(): string
    getUri(key: string): string
    hasKey(key: string): boolean
    quit(): boolean
    remove(key: string): boolean
    run(): boolean
    runAsync(): boolean
    setAuthFlags(flags: AuthFlags): void
    setAuthHandler(key: string, handler: AuthHandler): void
    setCollisionHandling(method: CollisionHandling): void
    setContentsPath(path: string): void
    setCredentials(certfile: string, keyfile: string): void
    setProtocol(protocol: Protocol): void
    setServiceCookie(cookie: string): void
    setServiceName(name: string): void
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
    connect(sigName: "notify", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-flags", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-flags", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collision-handling", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents-path", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents-path", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-cookie", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-cookie", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-domain", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-domain", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-name", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Publisher_ConstructProps)
    _init (config?: Publisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, application: string, domain: string): Publisher
    static expandName(name: string): string
    static $gtype: GObject.Type
}
export interface ServiceMonitor_ConstructProps extends GObject.Object_ConstructProps {
    application?: string
    domain?: string
    serviceTypes?: string[]
    skipOurOwn?: boolean
}
export class ServiceMonitor {
    /* Properties of Epc.ServiceMonitor */
    skipOurOwn: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Epc.ServiceMonitor */
    getSkipOurOwn(): boolean
    setSkipOurOwn(setting: boolean): void
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
    /* Virtual methods of Epc.ServiceMonitor */
    vfuncScanningDone(type: string): void
    vfuncServiceFound(name: string, info: ServiceInfo): void
    vfuncServiceRemoved(name: string, type: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Epc.ServiceMonitor */
    connect(sigName: "scanning-done", callback: (($obj: ServiceMonitor, object: string) => void)): number
    connect_after(sigName: "scanning-done", callback: (($obj: ServiceMonitor, object: string) => void)): number
    emit(sigName: "scanning-done", object: string): void
    on(sigName: "scanning-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scanning-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scanning-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-found", callback: (($obj: ServiceMonitor, object: string, p0: ServiceInfo) => void)): number
    connect_after(sigName: "service-found", callback: (($obj: ServiceMonitor, object: string, p0: ServiceInfo) => void)): number
    emit(sigName: "service-found", object: string, p0: ServiceInfo): void
    on(sigName: "service-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-removed", callback: (($obj: ServiceMonitor, object: string, p0: string) => void)): number
    connect_after(sigName: "service-removed", callback: (($obj: ServiceMonitor, object: string, p0: string) => void)): number
    emit(sigName: "service-removed", object: string, p0: string): void
    on(sigName: "service-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::skip-our-own", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-our-own", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServiceMonitor_ConstructProps)
    _init (config?: ServiceMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForTypesStrv(domain: string, types: string): ServiceMonitor
    static $gtype: GObject.Type
}
export class AuthContext {
    /* Methods of Epc.AuthContext */
    checkPassword(password: string): boolean
    getKey(): string
    getPassword(): string
    static name: string
}
export abstract class ConsumerClass {
    /* Fields of Epc.ConsumerClass */
    authenticate: (consumer: Consumer, realm: string) => void
    publisherResolved: (consumer: Consumer, protocol: Protocol, hostname: string, port: number) => void
    static name: string
}
export class ConsumerPrivate {
    static name: string
}
export class Contents {
    /* Methods of Epc.Contents */
    getMimeType(): string
    isStream(): boolean
    ref(): Contents
    unref(): void
    static name: string
    static new(type: string, data: object, length: number, destroyData: GLib.DestroyNotify): Contents
    constructor(type: string, data: object, length: number, destroyData: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(type: string, data: object, length: number, destroyData: GLib.DestroyNotify): Contents
    static newDup(type: string, data: object, length: number): Contents
    static streamNew(type: string, callback: ContentsReadFunc): Contents
}
export abstract class DispatcherClass {
    static name: string
}
export class DispatcherPrivate {
    static name: string
}
export abstract class PublisherClass {
    static name: string
}
export class PublisherPrivate {
    static name: string
}
export class ServiceInfo {
    /* Methods of Epc.ServiceInfo */
    getAddressFamily(): AddressFamily
    getDetail(name: string): string
    getHost(): string
    getInterface(): string
    getPort(): number
    getServiceType(): string
    ref(): ServiceInfo
    unref(): void
    static name: string
}
export abstract class ServiceMonitorClass {
    /* Fields of Epc.ServiceMonitorClass */
    serviceFound: (monitor: ServiceMonitor, name: string, info: ServiceInfo) => void
    serviceRemoved: (monitor: ServiceMonitor, name: string, type: string) => void
    scanningDone: (monitor: ServiceMonitor, type: string) => void
    static name: string
}
export class ServiceMonitorPrivate {
    static name: string
}
export class ShellProgressHooks {
    /* Fields of Epc.ShellProgressHooks */
    begin: (title: string) => void
    update: (percentage: number, message: string) => void
    end: () => void
    static name: string
}
}