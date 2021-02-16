/**
 * GUPnPDLNA-1.0
 */

/// <reference types="node" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="GstPbutils-1.0.d.ts" />
/// <reference path="GstVideo-1.0.d.ts" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="GstAudio-1.0.d.ts" />

declare namespace GUPnPDLNA {

export interface Discoverer_ConstructProps extends GstPbutils.Discoverer_ConstructProps {
    extendedMode?: boolean
    relaxedMode?: boolean
}
export class Discoverer {
    /* Properties of GstPbutils.Discoverer */
    timeout: number
    useCache: boolean
    /* Fields of GUPnPDLNA.Discoverer */
    parent: GstPbutils.Discoverer
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA.Discoverer */
    discoverUri(uri: string): boolean
    discoverUriSync(uri: string): Information
    getExtendedMode(): boolean
    getProfile(name: string): Profile
    getRelaxedMode(): boolean
    listProfiles(): Profile[]
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
    /* Virtual methods of GUPnPDLNA.Discoverer */
    vfuncDone(dlna: Information, err: GLib.Error): void
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
    /* Signals of GUPnPDLNA.Discoverer */
    connect(sigName: "done", callback: (($obj: Discoverer, dlna: Information, err: GLib.Error) => void)): number
    connect_after(sigName: "done", callback: (($obj: Discoverer, dlna: Information, err: GLib.Error) => void)): number
    emit(sigName: "done", dlna: Information, err: GLib.Error): void
    on(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GstPbutils.Discoverer */
    connect(sigName: "discovered", callback: (($obj: Discoverer, info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "discovered", callback: (($obj: Discoverer, info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void)): number
    emit(sigName: "discovered", info: GstPbutils.DiscovererInfo, error?: GLib.Error | null): void
    on(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "finished", callback: (($obj: Discoverer) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Discoverer) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-setup", callback: (($obj: Discoverer, source: Gst.Element) => void)): number
    connect_after(sigName: "source-setup", callback: (($obj: Discoverer, source: Gst.Element) => void)): number
    emit(sigName: "source-setup", source: Gst.Element): void
    on(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting", callback: (($obj: Discoverer) => void)): number
    connect_after(sigName: "starting", callback: (($obj: Discoverer) => void)): number
    emit(sigName: "starting"): void
    on(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-cache", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-cache", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Discoverer_ConstructProps)
    _init (config?: Discoverer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean): Discoverer
    static new(timeout: Gst.ClockTime): Discoverer
    static $gtype: GObject.Type
}
export interface Information_ConstructProps extends GObject.Object_ConstructProps {
    info?: GstPbutils.DiscovererInfo
    mime?: string
    name?: string
}
export class Information {
    /* Fields of GUPnPDLNA.Information */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA.Information */
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
    connect(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Information_ConstructProps)
    _init (config?: Information_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, mime: string, info: GstPbutils.DiscovererInfo): Information
    static $gtype: GObject.Type
}
export interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    extended?: boolean
    mime?: string
    name?: string
}
export class Profile {
    /* Properties of GUPnPDLNA.Profile */
    readonly encodingProfile: GstPbutils.EncodingProfile
    /* Fields of GUPnPDLNA.Profile */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA.Profile */
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
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding-profile", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding-profile", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class DiscovererClass {
    /* Fields of GUPnPDLNA.DiscovererClass */
    parentClass: GstPbutils.DiscovererClass
    done: (discoverer: Discoverer, dlna: Information, err: GLib.Error) => void
    static name: string
}
export abstract class InformationClass {
    /* Fields of GUPnPDLNA.InformationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ProfileClass {
    /* Fields of GUPnPDLNA.ProfileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}