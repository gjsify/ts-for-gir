/**
 * GUPnPDLNA-1.0
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GstPbutils } from './GstPbutils-1.0';
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstAudio } from './GstAudio-1.0';

export declare namespace GUPnPDLNA {

export interface Discoverer_ConstructProps extends GstPbutils.Discoverer_ConstructProps {
    extendedMode?: boolean
    relaxedMode?: boolean
}
export class Discoverer {
    /* Properties of GstPbutils-1.0.GstPbutils.Discoverer */
    timeout: number
    useCache: boolean
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer */
    parent: GstPbutils.Discoverer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer */
    discoverUri(uri: string): boolean
    discoverUriSync(uri: string): Information
    getExtendedMode(): boolean
    getProfile(name: string): Profile
    getRelaxedMode(): boolean
    listProfiles(): Profile[]
    /* Methods of GstPbutils-1.0.GstPbutils.Discoverer */
    discoverUri(uri: string): GstPbutils.DiscovererInfo
    discoverUriAsync(uri: string): boolean
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
    /* Signals of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer */
    connect(sigName: "done", callback: (($obj: Discoverer, dlna: Information, err: GLib.Error) => void)): number
    on(sigName: "done", callback: (dlna: Information, err: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: (dlna: Information, err: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: (dlna: Information, err: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "done", dlna: Information, err: GLib.Error): void
    /* Signals of GstPbutils-1.0.GstPbutils.Discoverer */
    connect(sigName: "discovered", callback: (($obj: Discoverer, info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void)): number
    on(sigName: "discovered", callback: (info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "discovered", callback: (info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "discovered", callback: (info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void): NodeJS.EventEmitter
    emit(sigName: "discovered", info: GstPbutils.DiscovererInfo, error?: GLib.Error | null): void
    connect(sigName: "finished", callback: (($obj: Discoverer) => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "source-setup", callback: (($obj: Discoverer, source: Gst.Element) => void)): number
    on(sigName: "source-setup", callback: (source: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-setup", callback: (source: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-setup", callback: (source: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "source-setup", source: Gst.Element): void
    connect(sigName: "starting", callback: (($obj: Discoverer) => void)): number
    on(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "starting"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.Information */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-1.0.GUPnPDLNA.Information */
    getInfo(): GstPbutils.DiscovererInfo
    getMime(): string
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile */
    readonly encodingProfile: GstPbutils.EncodingProfile
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.Profile */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-1.0.GUPnPDLNA.Profile */
    getEncodingProfile(): GstPbutils.EncodingProfile
    getExtended(): boolean
    getMime(): string
    getName(): string
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
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.DiscovererClass */
    parentClass: GstPbutils.DiscovererClass
    done: (discoverer: Discoverer, dlna: Information, err: GLib.Error) => void
    static name: string
}
export abstract class InformationClass {
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.InformationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ProfileClass {
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.ProfileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}