/**
 * GUPnP-1.0
 */

/// <reference types="node" />
/// <reference path="libxml2-2.0.d.ts" />
// WARN: Dependency not found: 'GstPbutils-0.10'
// WARN: Dependency not found: 'Gst-0.10'
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GUPnP {

export interface DLNADiscoverer_ConstructProps extends GstPbutils.Discoverer_ConstructProps {
    extendedMode?: boolean
    relaxedMode?: boolean
}
export class DLNADiscoverer {
    /* Properties of GstPbutils.Discoverer */
    timeout: number
    useCache: boolean
    /* Fields of GUPnP.DLNADiscoverer */
    parent: GstPbutils.Discoverer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.DLNADiscoverer */
    discoverUri(uri: string): boolean
    discoverUriSync(uri: string): DLNAInformation
    getExtendedMode(): boolean
    getProfile(name: string): DLNAProfile
    getRelaxedMode(): boolean
    listProfiles(): DLNAProfile[]
    /* Methods of GstPbutils.Discoverer */
    discoverUri(uri: string): GstPbutils.DiscovererInfo
    discoverUriAsync(uri: string): boolean
    start(): void
    stop(): void
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
    /* Virtual methods of GUPnP.DLNADiscoverer */
    vfuncDone(dlna: DLNAInformation, err: GLib.Error): void
    /* Virtual methods of GstPbutils.Discoverer */
    vfuncDiscovered(info: GstPbutils.DiscovererInfo, err: GLib.Error): void
    vfuncFinished(): void
    vfuncSourceSetup(source: Gst.Element): void
    vfuncStarting(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.DLNADiscoverer */
    connect(sigName: "done", callback: (($obj: DLNADiscoverer, dlna: DLNAInformation, err: GLib.Error) => void)): number
    connect_after(sigName: "done", callback: (($obj: DLNADiscoverer, dlna: DLNAInformation, err: GLib.Error) => void)): number
    emit(sigName: "done", dlna: DLNAInformation, err: GLib.Error): void
    on(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GstPbutils.Discoverer */
    connect(sigName: "discovered", callback: (($obj: DLNADiscoverer, info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "discovered", callback: (($obj: DLNADiscoverer, info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void)): number
    emit(sigName: "discovered", info: GstPbutils.DiscovererInfo, error?: GLib.Error | null): void
    on(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "finished", callback: (($obj: DLNADiscoverer) => void)): number
    connect_after(sigName: "finished", callback: (($obj: DLNADiscoverer) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-setup", callback: (($obj: DLNADiscoverer, source: Gst.Element) => void)): number
    connect_after(sigName: "source-setup", callback: (($obj: DLNADiscoverer, source: Gst.Element) => void)): number
    emit(sigName: "source-setup", source: Gst.Element): void
    on(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting", callback: (($obj: DLNADiscoverer) => void)): number
    connect_after(sigName: "starting", callback: (($obj: DLNADiscoverer) => void)): number
    emit(sigName: "starting"): void
    on(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DLNADiscoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DLNADiscoverer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: DLNADiscoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: DLNADiscoverer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-cache", callback: (($obj: DLNADiscoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-cache", callback: (($obj: DLNADiscoverer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DLNADiscoverer_ConstructProps)
    _init (config?: DLNADiscoverer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean): DLNADiscoverer
    static new(timeout: Gst.ClockTime): DLNADiscoverer
    static $gtype: GObject.Type
}
export interface DLNAInformation_ConstructProps extends GObject.Object_ConstructProps {
    info?: GstPbutils.DiscovererInfo
    mime?: string
    name?: string
}
export class DLNAInformation {
    /* Fields of GUPnP.DLNAInformation */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.DLNAInformation */
    getInfo(): GstPbutils.DiscovererInfo
    getMime(): string
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: DLNAInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DLNAInformation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DLNAInformation_ConstructProps)
    _init (config?: DLNAInformation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, mime: string, info: GstPbutils.DiscovererInfo): DLNAInformation
    static $gtype: GObject.Type
}
export interface DLNAProfile_ConstructProps extends GObject.Object_ConstructProps {
    extended?: boolean
    mime?: string
    name?: string
}
export class DLNAProfile {
    /* Properties of GUPnP.DLNAProfile */
    readonly encodingProfile: GstPbutils.EncodingProfile
    /* Fields of GUPnP.DLNAProfile */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.DLNAProfile */
    getEncodingProfile(): GstPbutils.EncodingProfile
    getExtended(): boolean
    getMime(): string
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding-profile", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding-profile", callback: (($obj: DLNAProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encoding-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encoding-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DLNAProfile_ConstructProps)
    _init (config?: DLNAProfile_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DLNADiscovererClass {
    /* Fields of GUPnP.DLNADiscovererClass */
    parentClass: GstPbutils.DiscovererClass
    done: (discoverer: DLNADiscoverer, dlna: DLNAInformation, err: GLib.Error) => void
    static name: string
}
export abstract class DLNAInformationClass {
    /* Fields of GUPnP.DLNAInformationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DLNAProfileClass {
    /* Fields of GUPnP.DLNAProfileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}ue: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.ContextManager */
    connect(sigName: "context-available", callback: (($obj: ContextManager, context: Context) => void)): number
    connect_after(sigName: "context-available", callback: (($obj: ContextManager, context: Context) => void)): number
    emit(sigName: "context-available", context: Context): void
    on(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "context-unavailable", callback: (($obj: ContextManager, context: Context) => void)): number
    connect_after(sigName: "context-unavailable", callback: (($obj: ContextManager, context: Context) => void)): number
    emit(sigName: "context-unavailable", context: Context): void
    on(sigName: "context-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(mainContext: GLib.MainContext | null, port: number): ContextManager
    static create(port: number): ContextManager
    static $gtype: GObject.Type
}
export interface ControlPoint_ConstructProps extends GSSDP.ResourceBrowser_ConstructProps {
    resourceFactory?: ResourceFactory
}
export class ControlPoint {
    /* Properties of GSSDP.ResourceBrowser */
    active: boolean
    mx: number
    target: string
    /* Fields of GUPnP.ControlPoint */
    parent: GSSDP.ResourceBrowser
    priv: ControlPointPrivate
    /* Fields of GSSDP.ResourceBrowser */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.ControlPoint */
    getContext(): Context
    getResourceFactory(): ResourceFactory
    listDeviceProxies(): DeviceProxy[]
    listServiceProxies(): ServiceProxy[]
    /* Methods of GSSDP.ResourceBrowser */
    getActive(): boolean
    getClient(): GSSDP.Client
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
    /* Virtual methods of GUPnP.ControlPoint */
    vfuncDeviceProxyAvailable(proxy: DeviceProxy): void
    vfuncDeviceProxyUnavailable(proxy: DeviceProxy): void
    vfuncServiceProxyAvailable(proxy: ServiceProxy): void
    vfuncServiceProxyUnavailable(proxy: ServiceProxy): void
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
    /* Signals of GUPnP.ControlPoint */
    connect(sigName: "device-proxy-available", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    connect_after(sigName: "device-proxy-available", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    emit(sigName: "device-proxy-available", proxy: DeviceProxy): void
    on(sigName: "device-proxy-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-proxy-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-proxy-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-proxy-unavailable", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    connect_after(sigName: "device-proxy-unavailable", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    emit(sigName: "device-proxy-unavailable", proxy: DeviceProxy): void
    on(sigName: "device-proxy-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-proxy-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-proxy-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-proxy-available", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    connect_after(sigName: "service-proxy-available", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    emit(sigName: "service-proxy-available", proxy: ServiceProxy): void
    on(sigName: "service-proxy-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-proxy-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-proxy-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-proxy-unavailable", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    connect_after(sigName: "service-proxy-unavailable", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    emit(sigName: "service-proxy-unavailable", proxy: ServiceProxy): void
    on(sigName: "service-proxy-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-proxy-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-proxy-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GSSDP.ResourceBrowser */
    connect(sigName: "resource-available", callback: (($obj: ControlPoint, usn: string, locations: string[]) => void)): number
    connect_after(sigName: "resource-available", callback: (($obj: ControlPoint, usn: string, locations: string[]) => void)): number
    emit(sigName: "resource-available", usn: string, locations: string[]): void
    on(sigName: "resource-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-unavailable", callback: (($obj: ControlPoint, usn: string) => void)): number
    connect_after(sigName: "resource-unavailable", callback: (($obj: ControlPoint, usn: string) => void)): number
    emit(sigName: "resource-unavailable", usn: string): void
    on(sigName: "resource-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "resource-update", callback: (($obj: ControlPoint, usn: string, bootId: number, nextBootId: number) => void)): number
    connect_after(sigName: "resource-update", callback: (($obj: ControlPoint, usn: string, bootId: number, nextBootId: number) => void)): number
    emit(sigName: "resource-update", usn: string, bootId: number, nextBootId: number): void
    on(sigName: "resource-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "resource-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "resource-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP.Device */
    parent: DeviceInfo
    priv: DevicePrivate
    /* Fields of GUPnP.DeviceInfo */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GUPnP.DeviceInfo */
    parent: GObject.Object
    priv: DeviceInfoPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
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
    connect(sigName: "notify", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceInfo_ConstructProps)
    _init (config?: DeviceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceProxy_ConstructProps extends DeviceInfo_ConstructProps {
}
export class DeviceProxy {
    /* Properties of GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP.DeviceProxy */
    parent: DeviceInfo
    priv: DeviceProxyPrivate
    /* Fields of GUPnP.DeviceInfo */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
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
    connect(sigName: "notify", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GUPnP.ResourceFactory */
    parent: GObject.Object
    priv: ResourceFactoryPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    connect(sigName: "notify", callback: (($obj: ResourceFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceFactory, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of GUPnP.RootDevice */
    available: boolean
    /* Properties of GUPnP.DeviceInfo */
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP.RootDevice */
    parent: Device
    priv: RootDevicePrivate
    /* Fields of GUPnP.Device */
    parentInstance: DeviceInfo
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.RootDevice */
    getAvailable(): boolean
    getDescriptionDir(): string
    getDescriptionPath(): string
    getRelativeLocation(): string
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    setAvailable(available: boolean): void
    /* Methods of GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
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
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface Service_ConstructProps extends ServiceInfo_ConstructProps {
    rootDevice?: RootDevice
}
export class Service {
    /* Fields of GUPnP.Service */
    parent: ServiceInfo
    priv: ServicePrivate
    /* Fields of GUPnP.ServiceInfo */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP.ServiceInfo */
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
    /* Methods of GObject.Object */
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
    /* Virtual methods of GUPnP.Service */
    vfuncActionInvoked(action: ServiceAction): void
    vfuncQueryVariable(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: Service, action: ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: Service, action: ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: ServiceAction): void
    on(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify-failed", callback: (($obj: Service, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: Service, callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    on(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-variable", callback: (($obj: Service, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: Service, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    on(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GUPnP.ServiceInfo */
    parent: GObject.Object
    priv: ServiceInfoPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.ServiceInfo */
    getContext(): Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospection(): ServiceIntrospection
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
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
    connect(sigName: "notify", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServiceInfo_ConstructProps)
    _init (config?: ServiceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ServiceIntrospection_ConstructProps extends GObject.Object_ConstructProps {
    scpd?: object
}
export class ServiceIntrospection {
    /* Fields of GUPnP.ServiceIntrospection */
    parent: GObject.Object
    priv: ServiceIntrospectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.ServiceIntrospection */
    getAction(actionName: string): ServiceActionInfo
    getStateVariable(variableName: string): ServiceStateVariableInfo
    listActionNames(): string[]
    listActions(): ServiceActionInfo[]
    listStateVariableNames(): string[]
    listStateVariables(): ServiceStateVariableInfo[]
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
    connect(sigName: "notify", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ServiceIntrospection_ConstructProps)
    _init (config?: ServiceIntrospection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ServiceProxy_ConstructProps extends ServiceInfo_ConstructProps {
    subscribed?: boolean
}
export class ServiceProxy {
    /* Properties of GUPnP.ServiceProxy */
    subscribed: boolean
    /* Fields of GUPnP.ServiceProxy */
    parent: ServiceInfo
    priv: ServiceProxyPrivate
    /* Fields of GUPnP.ServiceInfo */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.ServiceProxy */
    addNotify(variable: string, type: GObject.Type, callback: ServiceProxyNotifyCallback): boolean
    addRawNotify(callback: ServiceProxyNotifyCallback): boolean
    beginActionList(action: string, inNames: string[], inValues: any, callback: ServiceProxyActionCallback): ServiceProxyAction
    cancelAction(action: ServiceProxyAction): void
    endActionHash(action: ServiceProxyAction, hash: GLib.HashTable): [ /* returnType */ boolean, /* hash */ GLib.HashTable ]
    endActionList(action: ServiceProxyAction, outNames: string[], outTypes: any[]): [ /* returnType */ boolean, /* outValues */ any ]
    getSubscribed(): boolean
    removeNotify(variable: string, callback: ServiceProxyNotifyCallback): boolean
    removeRawNotify(callback: ServiceProxyNotifyCallback): boolean
    sendActionList(action: string, inNames: string[], inValues: any, outNames: string[], outTypes: any[]): [ /* returnType */ boolean, /* outValues */ any ]
    setSubscribed(subscribed: boolean): void
    /* Methods of GUPnP.ServiceInfo */
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
    /* Virtual methods of GUPnP.ServiceProxy */
    vfuncSubscriptionLost(reason: GLib.Error): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.ServiceProxy */
    connect(sigName: "subscription-lost", callback: (($obj: ServiceProxy, error: GLib.Error) => void)): number
    connect_after(sigName: "subscription-lost", callback: (($obj: ServiceProxy, error: GLib.Error) => void)): number
    emit(sigName: "subscription-lost", error: GLib.Error): void
    on(sigName: "subscription-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "subscription-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "subscription-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of GUPnP.WhiteList */
    enabled: boolean
    /* Fields of GUPnP.WhiteList */
    parent: GObject.Object
    priv: WhiteListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP.WhiteList */
    addEntry(entry: string): boolean
    addEntryv(entries: string[]): void
    checkContext(context: Context): boolean
    clear(): void
    getEnabled(): boolean
    getEntries(): string[]
    isEmpty(): boolean
    removeEntry(entry: string): boolean
    setEnabled(enable: boolean): void
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
    connect(sigName: "notify", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GUPnP.XMLDoc */
    parent: GObject.Object
    doc: libxml2.Doc
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: XMLDoc_ConstructProps)
    _init (config?: XMLDoc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(xmlDoc: libxml2.Doc): XMLDoc
    static newFromPath(path: string): XMLDoc
    static $gtype: GObject.Type
}
export abstract class AclInterface {
    /* Fields of GUPnP.AclInterface */
    parent: GObject.TypeInterface
    isAllowed: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null) => boolean
    isAllowedAsync: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: Acl, res: Gio.AsyncResult) => boolean
    canSync: (self: Acl) => boolean
    static name: string
}
export abstract class ContextClass {
    /* Fields of GUPnP.ContextClass */
    parentClass: GSSDP.ClientClass
    static name: string
}
export abstract class ContextManagerClass {
    /* Fields of GUPnP.ContextManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ContextManagerPrivate {
    static name: string
}
export class ContextPrivate {
    static name: string
}
export abstract class ControlPointClass {
    /* Fields of GUPnP.ControlPointClass */
    parentClass: GSSDP.ResourceBrowserClass
    deviceProxyAvailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    deviceProxyUnavailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    serviceProxyAvailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    serviceProxyUnavailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    static name: string
}
export class ControlPointPrivate {
    static name: string
}
export abstract class DeviceClass {
    /* Fields of GUPnP.DeviceClass */
    parentClass: DeviceInfoClass
    static name: string
}
export abstract class DeviceInfoClass {
    /* Fields of GUPnP.DeviceInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DeviceInfoPrivate {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class DeviceProxyClass {
    /* Fields of GUPnP.DeviceProxyClass */
    parentClass: DeviceInfoClass
    static name: string
}
export class DeviceProxyPrivate {
    static name: string
}
export abstract class ResourceFactoryClass {
    /* Fields of GUPnP.ResourceFactoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ResourceFactoryPrivate {
    static name: string
}
export abstract class RootDeviceClass {
    /* Fields of GUPnP.RootDeviceClass */
    parentClass: DeviceClass
    static name: string
}
export class RootDevicePrivate {
    static name: string
}
export class ServiceAction {
    /* Methods of GUPnP.ServiceAction */
    getArgumentCount(): number
    getValue(argument: string, type: GObject.Type): any
    getLocales(): string[]
    getMessage(): Soup.Message
    getName(): string
    getValues(argNames: string[], argTypes: any[]): any
    return(): void
    returnError(errorCode: number, errorDescription: string): void
    setValue(argument: string, value: any): void
    setValues(argNames: string[], argValues: any): void
    static name: string
}
export class ServiceActionArgInfo {
    /* Fields of GUPnP.ServiceActionArgInfo */
    name: string
    direction: ServiceActionArgDirection
    relatedStateVariable: string
    retval: boolean
    static name: string
}
export class ServiceActionInfo {
    /* Fields of GUPnP.ServiceActionInfo */
    name: string
    arguments_: ServiceActionArgInfo[]
    static name: string
}
export abstract class ServiceClass {
    /* Fields of GUPnP.ServiceClass */
    parentClass: ServiceInfoClass
    actionInvoked: (service: Service, action: ServiceAction) => void
    queryVariable: (service: Service, variable: string, value: any) => void
    static name: string
}
export abstract class ServiceInfoClass {
    /* Fields of GUPnP.ServiceInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ServiceInfoPrivate {
    static name: string
}
export abstract class ServiceIntrospectionClass {
    /* Fields of GUPnP.ServiceIntrospectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ServiceIntrospectionPrivate {
    static name: string
}
export class ServicePrivate {
    static name: string
}
export class ServiceProxyAction {
    static name: string
}
export abstract class ServiceProxyClass {
    /* Fields of GUPnP.ServiceProxyClass */
    parentClass: ServiceInfoClass
    subscriptionLost: (proxy: ServiceProxy, reason: GLib.Error) => void
    static name: string
}
export class ServiceProxyPrivate {
    static name: string
}
export class ServiceStateVariableInfo {
    /* Fields of GUPnP.ServiceStateVariableInfo */
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
    /* Fields of GUPnP.WhiteListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class WhiteListPrivate {
    static name: string
}
export abstract class XMLDocClass {
    /* Fields of GUPnP.XMLDocClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}