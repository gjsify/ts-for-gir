/**
 * GjsDBus-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GjsDBus {

export interface Implementation_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    gInterfaceInfo?: Gio.DBusInterfaceInfo
}
export class Implementation {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GjsDBus.Implementation */
    parent: Gio.DBusInterfaceSkeleton
    priv: ImplementationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GjsDBus.Implementation */
    emitPropertyChanged(property: string, newvalue?: GLib.Variant | null): void
    emitSignal(signalName: string, parameters?: GLib.Variant | null): void
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of GjsDBus.Implementation */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GjsDBus.Implementation */
    connect(sigName: "handle-method-call", callback: (($obj: Implementation, object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void)): number
    connect_after(sigName: "handle-method-call", callback: (($obj: Implementation, object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void)): number
    emit(sigName: "handle-method-call", object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
    on(sigName: "handle-method-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-method-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-method-call", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-property-get", callback: (($obj: Implementation, object: string) => GLib.Variant)): number
    connect_after(sigName: "handle-property-get", callback: (($obj: Implementation, object: string) => GLib.Variant)): number
    emit(sigName: "handle-property-get", object: string): void
    on(sigName: "handle-property-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-property-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-property-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-property-set", callback: (($obj: Implementation, object: string, p0: GLib.Variant) => void)): number
    connect_after(sigName: "handle-property-set", callback: (($obj: Implementation, object: string, p0: GLib.Variant) => void)): number
    emit(sigName: "handle-property-set", object: string, p0: GLib.Variant): void
    on(sigName: "handle-property-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-property-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-property-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: Implementation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: Implementation, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Implementation_ConstructProps)
    _init (config?: Implementation_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ImplementationClass {
    /* Fields of GjsDBus.ImplementationClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ImplementationPrivate {
    static name: string
}
}