/**
 * GUPnPIgd-1.0
 */

/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GUPnPIgd {

export enum SimpleIgdError {
    SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
}
export interface SimpleIgd_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleIgd {
    /* Properties of GUPnPIgd.SimpleIgd */
    readonly mainContext: object
    /* Fields of GUPnPIgd.SimpleIgd */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPIgd.SimpleIgd */
    addPort(protocol: string, externalPort: number, localIp: string, localPort: number, leaseDuration: number, description: string): void
    deleteAllMappings(): boolean
    removePort(protocol: string, externalPort: number): void
    removePortLocal(protocol: string, localIp: string, localPort: number): void
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
    /* Signals of GUPnPIgd.SimpleIgd */
    connect(sigName: "context-available", callback: (($obj: SimpleIgd, context: GObject.Object) => boolean)): number
    connect_after(sigName: "context-available", callback: (($obj: SimpleIgd, context: GObject.Object) => boolean)): number
    emit(sigName: "context-available", context: GObject.Object): void
    on(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "error-mapping-port", callback: (($obj: SimpleIgd, error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    connect_after(sigName: "error-mapping-port", callback: (($obj: SimpleIgd, error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string): void
    on(sigName: "error-mapping-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error-mapping-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error-mapping-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mapped-external-port", callback: (($obj: SimpleIgd, proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    connect_after(sigName: "mapped-external-port", callback: (($obj: SimpleIgd, proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    emit(sigName: "mapped-external-port", proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string): void
    on(sigName: "mapped-external-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mapped-external-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mapped-external-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleIgd_ConstructProps)
    _init (config?: SimpleIgd_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleIgd
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface SimpleIgdThread_ConstructProps extends SimpleIgd_ConstructProps {
}
export class SimpleIgdThread {
    /* Properties of GUPnPIgd.SimpleIgd */
    readonly mainContext: object
    /* Fields of GUPnPIgd.SimpleIgdThread */
    parent: SimpleIgd
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPIgd.SimpleIgd */
    addPort(protocol: string, externalPort: number, localIp: string, localPort: number, leaseDuration: number, description: string): void
    deleteAllMappings(): boolean
    removePort(protocol: string, externalPort: number): void
    removePortLocal(protocol: string, localIp: string, localPort: number): void
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
    /* Signals of GUPnPIgd.SimpleIgd */
    connect(sigName: "context-available", callback: (($obj: SimpleIgdThread, context: GObject.Object) => boolean)): number
    connect_after(sigName: "context-available", callback: (($obj: SimpleIgdThread, context: GObject.Object) => boolean)): number
    emit(sigName: "context-available", context: GObject.Object): void
    on(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "error-mapping-port", callback: (($obj: SimpleIgdThread, error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    connect_after(sigName: "error-mapping-port", callback: (($obj: SimpleIgdThread, error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string): void
    on(sigName: "error-mapping-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error-mapping-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error-mapping-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mapped-external-port", callback: (($obj: SimpleIgdThread, proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    connect_after(sigName: "mapped-external-port", callback: (($obj: SimpleIgdThread, proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    emit(sigName: "mapped-external-port", proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string): void
    on(sigName: "mapped-external-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mapped-external-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mapped-external-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleIgdThread_ConstructProps)
    _init (config?: SimpleIgdThread_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleIgdThread
    static $gtype: GObject.Type
}
export abstract class SimpleIgdClass {
    static name: string
}
export class SimpleIgdPrivate {
    static name: string
}
export abstract class SimpleIgdThreadClass {
    static name: string
}
export class SimpleIgdThreadPrivate {
    static name: string
}
}