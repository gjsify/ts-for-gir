/**
 * Guestfs-1.0
 */

/// <reference types="node" />
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Guestfs {

export enum SessionEvent {
    CLOSE,
    SUBPROCESS_QUIT,
    LAUNCH_DONE,
    PROGRESS,
    APPLIANCE,
    LIBRARY,
    TRACE,
    ENTER,
    LIBVIRT_AUTH,
    WARNING,
}
export enum Tristate {
    FALSE,
    TRUE,
    NONE,
}
export interface AddDomain_ConstructProps extends GObject.Object_ConstructProps {
    allowuuid?: Tristate
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    iface?: string
    libvirturi?: string
    live?: Tristate
    readonly?: Tristate
    readonlydisk?: string
}
export class AddDomain {
    /* Properties of Guestfs.AddDomain */
    allowuuid: Tristate
    cachemode: string
    copyonread: Tristate
    discard: string
    iface: string
    libvirturi: string
    live: Tristate
    readonly: Tristate
    readonlydisk: string
    /* Fields of Guestfs.AddDomain */
    parent: GObject.Object
    priv: AddDomainPrivate
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
    connect(sigName: "notify", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allowuuid", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowuuid", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowuuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowuuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowuuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cachemode", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyonread", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iface", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::libvirturi", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libvirturi", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::libvirturi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::libvirturi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::libvirturi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::live", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonlydisk", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AddDomain_ConstructProps)
    _init (config?: AddDomain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDomain
    static $gtype: GObject.Type
}
export interface AddDrive_ConstructProps extends GObject.Object_ConstructProps {
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    format?: string
    iface?: string
    label?: string
    name?: string
    protocol?: string
    readonly?: Tristate
    secret?: string
    username?: string
}
export class AddDrive {
    /* Properties of Guestfs.AddDrive */
    cachemode: string
    copyonread: Tristate
    discard: string
    format: string
    iface: string
    label: string
    name: string
    protocol: string
    readonly: Tristate
    secret: string
    username: string
    /* Fields of Guestfs.AddDrive */
    parent: GObject.Object
    priv: AddDrivePrivate
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
    connect(sigName: "notify", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cachemode", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyonread", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iface", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secret", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AddDrive_ConstructProps)
    _init (config?: AddDrive_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDrive
    static $gtype: GObject.Type
}
export interface AddDriveScratch_ConstructProps extends GObject.Object_ConstructProps {
    label?: string
    name?: string
}
export class AddDriveScratch {
    /* Properties of Guestfs.AddDriveScratch */
    label: string
    name: string
    /* Fields of Guestfs.AddDriveScratch */
    parent: GObject.Object
    priv: AddDriveScratchPrivate
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
    connect(sigName: "notify", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AddDriveScratch_ConstructProps)
    _init (config?: AddDriveScratch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDriveScratch
    static $gtype: GObject.Type
}
export interface AddLibvirtDom_ConstructProps extends GObject.Object_ConstructProps {
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    iface?: string
    live?: Tristate
    readonly?: Tristate
    readonlydisk?: string
}
export class AddLibvirtDom {
    /* Properties of Guestfs.AddLibvirtDom */
    cachemode: string
    copyonread: Tristate
    discard: string
    iface: string
    live: Tristate
    readonly: Tristate
    readonlydisk: string
    /* Fields of Guestfs.AddLibvirtDom */
    parent: GObject.Object
    priv: AddLibvirtDomPrivate
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
    connect(sigName: "notify", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cachemode", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyonread", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iface", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::live", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonlydisk", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AddLibvirtDom_ConstructProps)
    _init (config?: AddLibvirtDom_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddLibvirtDom
    static $gtype: GObject.Type
}
export interface AugTransform_ConstructProps extends GObject.Object_ConstructProps {
    remove?: Tristate
}
export class AugTransform {
    /* Properties of Guestfs.AugTransform */
    remove: Tristate
    /* Fields of Guestfs.AugTransform */
    parent: GObject.Object
    priv: AugTransformPrivate
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
    connect(sigName: "notify", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remove", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AugTransform_ConstructProps)
    _init (config?: AugTransform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AugTransform
    static $gtype: GObject.Type
}
export interface BTRFSFilesystemDefragment_ConstructProps extends GObject.Object_ConstructProps {
    compress?: string
    flush?: Tristate
}
export class BTRFSFilesystemDefragment {
    /* Properties of Guestfs.BTRFSFilesystemDefragment */
    compress: string
    flush: Tristate
    /* Fields of Guestfs.BTRFSFilesystemDefragment */
    parent: GObject.Object
    priv: BTRFSFilesystemDefragmentPrivate
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
    connect(sigName: "notify", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compress", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flush", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSFilesystemDefragment_ConstructProps)
    _init (config?: BTRFSFilesystemDefragment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSFilesystemDefragment
    static $gtype: GObject.Type
}
export interface BTRFSFilesystemResize_ConstructProps extends GObject.Object_ConstructProps {
    size?: number
}
export class BTRFSFilesystemResize {
    /* Properties of Guestfs.BTRFSFilesystemResize */
    size: number
    /* Fields of Guestfs.BTRFSFilesystemResize */
    parent: GObject.Object
    priv: BTRFSFilesystemResizePrivate
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
    connect(sigName: "notify", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSFilesystemResize_ConstructProps)
    _init (config?: BTRFSFilesystemResize_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSFilesystemResize
    static $gtype: GObject.Type
}
export interface BTRFSImage_ConstructProps extends GObject.Object_ConstructProps {
    compresslevel?: number
}
export class BTRFSImage {
    /* Properties of Guestfs.BTRFSImage */
    compresslevel: number
    /* Fields of Guestfs.BTRFSImage */
    parent: GObject.Object
    priv: BTRFSImagePrivate
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
    connect(sigName: "notify", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compresslevel", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compresslevel", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compresslevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compresslevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compresslevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSImage_ConstructProps)
    _init (config?: BTRFSImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSImage
    static $gtype: GObject.Type
}
export interface BTRFSSubvolumeCreate_ConstructProps extends GObject.Object_ConstructProps {
    qgroupid?: string
}
export class BTRFSSubvolumeCreate {
    /* Properties of Guestfs.BTRFSSubvolumeCreate */
    qgroupid: string
    /* Fields of Guestfs.BTRFSSubvolumeCreate */
    parent: GObject.Object
    priv: BTRFSSubvolumeCreatePrivate
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
    connect(sigName: "notify", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSSubvolumeCreate_ConstructProps)
    _init (config?: BTRFSSubvolumeCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSSubvolumeCreate
    static $gtype: GObject.Type
}
export interface BTRFSSubvolumeSnapshot_ConstructProps extends GObject.Object_ConstructProps {
    qgroupid?: string
    ro?: Tristate
}
export class BTRFSSubvolumeSnapshot {
    /* Properties of Guestfs.BTRFSSubvolumeSnapshot */
    qgroupid: string
    ro: Tristate
    /* Fields of Guestfs.BTRFSSubvolumeSnapshot */
    parent: GObject.Object
    priv: BTRFSSubvolumeSnapshotPrivate
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
    connect(sigName: "notify", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ro", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ro", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSSubvolumeSnapshot_ConstructProps)
    _init (config?: BTRFSSubvolumeSnapshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSSubvolumeSnapshot
    static $gtype: GObject.Type
}
export interface BtrfsFsck_ConstructProps extends GObject.Object_ConstructProps {
    repair?: Tristate
    superblock?: number
}
export class BtrfsFsck {
    /* Properties of Guestfs.BtrfsFsck */
    repair: Tristate
    superblock: number
    /* Fields of Guestfs.BtrfsFsck */
    parent: GObject.Object
    priv: BtrfsFsckPrivate
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
    connect(sigName: "notify", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repair", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repair", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::superblock", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::superblock", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::superblock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::superblock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::superblock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BtrfsFsck_ConstructProps)
    _init (config?: BtrfsFsck_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BtrfsFsck
    static $gtype: GObject.Type
}
export interface CompressDeviceOut_ConstructProps extends GObject.Object_ConstructProps {
    level?: number
}
export class CompressDeviceOut {
    /* Properties of Guestfs.CompressDeviceOut */
    level: number
    /* Fields of Guestfs.CompressDeviceOut */
    parent: GObject.Object
    priv: CompressDeviceOutPrivate
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
    connect(sigName: "notify", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompressDeviceOut_ConstructProps)
    _init (config?: CompressDeviceOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompressDeviceOut
    static $gtype: GObject.Type
}
export interface CompressOut_ConstructProps extends GObject.Object_ConstructProps {
    level?: number
}
export class CompressOut {
    /* Properties of Guestfs.CompressOut */
    level: number
    /* Fields of Guestfs.CompressOut */
    parent: GObject.Object
    priv: CompressOutPrivate
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
    connect(sigName: "notify", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompressOut_ConstructProps)
    _init (config?: CompressOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompressOut
    static $gtype: GObject.Type
}
export interface CopyAttributes_ConstructProps extends GObject.Object_ConstructProps {
    all?: Tristate
    mode?: Tristate
    ownership?: Tristate
    xattributes?: Tristate
}
export class CopyAttributes {
    /* Properties of Guestfs.CopyAttributes */
    all: Tristate
    mode: Tristate
    ownership: Tristate
    xattributes: Tristate
    /* Fields of Guestfs.CopyAttributes */
    parent: GObject.Object
    priv: CopyAttributesPrivate
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
    connect(sigName: "notify", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ownership", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ownership", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ownership", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ownership", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ownership", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xattributes", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattributes", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xattributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xattributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xattributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyAttributes_ConstructProps)
    _init (config?: CopyAttributes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyAttributes
    static $gtype: GObject.Type
}
export interface CopyDeviceToDevice_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyDeviceToDevice {
    /* Properties of Guestfs.CopyDeviceToDevice */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyDeviceToDevice */
    parent: GObject.Object
    priv: CopyDeviceToDevicePrivate
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
    connect(sigName: "notify", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::append", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyDeviceToDevice_ConstructProps)
    _init (config?: CopyDeviceToDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyDeviceToDevice
    static $gtype: GObject.Type
}
export interface CopyDeviceToFile_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyDeviceToFile {
    /* Properties of Guestfs.CopyDeviceToFile */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyDeviceToFile */
    parent: GObject.Object
    priv: CopyDeviceToFilePrivate
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
    connect(sigName: "notify", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::append", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyDeviceToFile_ConstructProps)
    _init (config?: CopyDeviceToFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyDeviceToFile
    static $gtype: GObject.Type
}
export interface CopyFileToDevice_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyFileToDevice {
    /* Properties of Guestfs.CopyFileToDevice */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyFileToDevice */
    parent: GObject.Object
    priv: CopyFileToDevicePrivate
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
    connect(sigName: "notify", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::append", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyFileToDevice_ConstructProps)
    _init (config?: CopyFileToDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyFileToDevice
    static $gtype: GObject.Type
}
export interface CopyFileToFile_ConstructProps extends GObject.Object_ConstructProps {
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
export class CopyFileToFile {
    /* Properties of Guestfs.CopyFileToFile */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
    /* Fields of Guestfs.CopyFileToFile */
    parent: GObject.Object
    priv: CopyFileToFilePrivate
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
    connect(sigName: "notify", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::append", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyFileToFile_ConstructProps)
    _init (config?: CopyFileToFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyFileToFile
    static $gtype: GObject.Type
}
export interface CpioOut_ConstructProps extends GObject.Object_ConstructProps {
    format?: string
}
export class CpioOut {
    /* Properties of Guestfs.CpioOut */
    format: string
    /* Fields of Guestfs.CpioOut */
    parent: GObject.Object
    priv: CpioOutPrivate
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
    connect(sigName: "notify", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CpioOut_ConstructProps)
    _init (config?: CpioOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CpioOut
    static $gtype: GObject.Type
}
export interface DiskCreate_ConstructProps extends GObject.Object_ConstructProps {
    backingfile?: string
    backingformat?: string
    clustersize?: number
    compat?: string
    preallocation?: string
}
export class DiskCreate {
    /* Properties of Guestfs.DiskCreate */
    backingfile: string
    backingformat: string
    clustersize: number
    compat: string
    preallocation: string
    /* Fields of Guestfs.DiskCreate */
    parent: GObject.Object
    priv: DiskCreatePrivate
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
    connect(sigName: "notify", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backingfile", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingfile", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backingfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backingfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backingfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backingformat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingformat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backingformat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backingformat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backingformat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clustersize", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clustersize", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clustersize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clustersize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clustersize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preallocation", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preallocation", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preallocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preallocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preallocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DiskCreate_ConstructProps)
    _init (config?: DiskCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiskCreate
    static $gtype: GObject.Type
}
export interface DownloadBlocks_ConstructProps extends GObject.Object_ConstructProps {
    unallocated?: Tristate
}
export class DownloadBlocks {
    /* Properties of Guestfs.DownloadBlocks */
    unallocated: Tristate
    /* Fields of Guestfs.DownloadBlocks */
    parent: GObject.Object
    priv: DownloadBlocksPrivate
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
    connect(sigName: "notify", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unallocated", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unallocated", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unallocated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unallocated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unallocated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DownloadBlocks_ConstructProps)
    _init (config?: DownloadBlocks_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DownloadBlocks
    static $gtype: GObject.Type
}
export interface E2fsck_ConstructProps extends GObject.Object_ConstructProps {
    correct?: Tristate
    forceall?: Tristate
}
export class E2fsck {
    /* Properties of Guestfs.E2fsck */
    correct: Tristate
    forceall: Tristate
    /* Fields of Guestfs.E2fsck */
    parent: GObject.Object
    priv: E2fsckPrivate
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
    connect(sigName: "notify", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::correct", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::correct", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::correct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::correct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::correct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forceall", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forceall", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forceall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forceall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forceall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: E2fsck_ConstructProps)
    _init (config?: E2fsck_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): E2fsck
    static $gtype: GObject.Type
}
export interface Fstrim_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
    minimumfreeextent?: number
    offset?: number
}
export class Fstrim {
    /* Properties of Guestfs.Fstrim */
    length: number
    minimumfreeextent: number
    offset: number
    /* Fields of Guestfs.Fstrim */
    parent: GObject.Object
    priv: FstrimPrivate
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
    connect(sigName: "notify", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimumfreeextent", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimumfreeextent", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimumfreeextent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimumfreeextent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimumfreeextent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Fstrim_ConstructProps)
    _init (config?: Fstrim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Fstrim
    static $gtype: GObject.Type
}
export interface GlobExpand_ConstructProps extends GObject.Object_ConstructProps {
    directoryslash?: Tristate
}
export class GlobExpand {
    /* Properties of Guestfs.GlobExpand */
    directoryslash: Tristate
    /* Fields of Guestfs.GlobExpand */
    parent: GObject.Object
    priv: GlobExpandPrivate
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
    connect(sigName: "notify", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::directoryslash", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directoryslash", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::directoryslash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::directoryslash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::directoryslash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GlobExpand_ConstructProps)
    _init (config?: GlobExpand_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GlobExpand
    static $gtype: GObject.Type
}
export interface Grep_ConstructProps extends GObject.Object_ConstructProps {
    compressed?: Tristate
    extended?: Tristate
    fixed?: Tristate
    insensitive?: Tristate
}
export class Grep {
    /* Properties of Guestfs.Grep */
    compressed: Tristate
    extended: Tristate
    fixed: Tristate
    insensitive: Tristate
    /* Fields of Guestfs.Grep */
    parent: GObject.Object
    priv: GrepPrivate
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
    connect(sigName: "notify", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compressed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compressed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extended", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extended", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insensitive", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insensitive", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Grep_ConstructProps)
    _init (config?: Grep_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Grep
    static $gtype: GObject.Type
}
export interface HivexOpen_ConstructProps extends GObject.Object_ConstructProps {
    debug?: Tristate
    unsafe?: Tristate
    verbose?: Tristate
    write?: Tristate
}
export class HivexOpen {
    /* Properties of Guestfs.HivexOpen */
    debug: Tristate
    unsafe: Tristate
    verbose: Tristate
    write: Tristate
    /* Fields of Guestfs.HivexOpen */
    parent: GObject.Object
    priv: HivexOpenPrivate
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
    connect(sigName: "notify", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::debug", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unsafe", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsafe", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::verbose", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verbose", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::verbose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::verbose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::verbose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HivexOpen_ConstructProps)
    _init (config?: HivexOpen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HivexOpen
    static $gtype: GObject.Type
}
export interface InspectGetIcon_ConstructProps extends GObject.Object_ConstructProps {
    favicon?: Tristate
    highquality?: Tristate
}
export class InspectGetIcon {
    /* Properties of Guestfs.InspectGetIcon */
    favicon: Tristate
    highquality: Tristate
    /* Fields of Guestfs.InspectGetIcon */
    parent: GObject.Object
    priv: InspectGetIconPrivate
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
    connect(sigName: "notify", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::favicon", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highquality", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highquality", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highquality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highquality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highquality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InspectGetIcon_ConstructProps)
    _init (config?: InspectGetIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InspectGetIcon
    static $gtype: GObject.Type
}
export interface InternalTest_ConstructProps extends GObject.Object_ConstructProps {
    obool?: Tristate
    oint?: number
    oint64?: number
    ostring?: string
}
export class InternalTest {
    /* Properties of Guestfs.InternalTest */
    obool: Tristate
    oint: number
    oint64: number
    ostring: string
    /* Fields of Guestfs.InternalTest */
    parent: GObject.Object
    priv: InternalTestPrivate
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
    connect(sigName: "notify", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::obool", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::obool", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::obool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::obool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::obool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oint", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oint64", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint64", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oint64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oint64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oint64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ostring", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ostring", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ostring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ostring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ostring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InternalTest_ConstructProps)
    _init (config?: InternalTest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTest
    static $gtype: GObject.Type
}
export interface InternalTest63Optargs_ConstructProps extends GObject.Object_ConstructProps {
    opt1?: number
    opt10?: number
    opt11?: number
    opt12?: number
    opt13?: number
    opt14?: number
    opt15?: number
    opt16?: number
    opt17?: number
    opt18?: number
    opt19?: number
    opt2?: number
    opt20?: number
    opt21?: number
    opt22?: number
    opt23?: number
    opt24?: number
    opt25?: number
    opt26?: number
    opt27?: number
    opt28?: number
    opt29?: number
    opt3?: number
    opt30?: number
    opt31?: number
    opt32?: number
    opt33?: number
    opt34?: number
    opt35?: number
    opt36?: number
    opt37?: number
    opt38?: number
    opt39?: number
    opt4?: number
    opt40?: number
    opt41?: number
    opt42?: number
    opt43?: number
    opt44?: number
    opt45?: number
    opt46?: number
    opt47?: number
    opt48?: number
    opt49?: number
    opt5?: number
    opt50?: number
    opt51?: number
    opt52?: number
    opt53?: number
    opt54?: number
    opt55?: number
    opt56?: number
    opt57?: number
    opt58?: number
    opt59?: number
    opt6?: number
    opt60?: number
    opt61?: number
    opt62?: number
    opt63?: number
    opt7?: number
    opt8?: number
    opt9?: number
}
export class InternalTest63Optargs {
    /* Properties of Guestfs.InternalTest63Optargs */
    opt1: number
    opt10: number
    opt11: number
    opt12: number
    opt13: number
    opt14: number
    opt15: number
    opt16: number
    opt17: number
    opt18: number
    opt19: number
    opt2: number
    opt20: number
    opt21: number
    opt22: number
    opt23: number
    opt24: number
    opt25: number
    opt26: number
    opt27: number
    opt28: number
    opt29: number
    opt3: number
    opt30: number
    opt31: number
    opt32: number
    opt33: number
    opt34: number
    opt35: number
    opt36: number
    opt37: number
    opt38: number
    opt39: number
    opt4: number
    opt40: number
    opt41: number
    opt42: number
    opt43: number
    opt44: number
    opt45: number
    opt46: number
    opt47: number
    opt48: number
    opt49: number
    opt5: number
    opt50: number
    opt51: number
    opt52: number
    opt53: number
    opt54: number
    opt55: number
    opt56: number
    opt57: number
    opt58: number
    opt59: number
    opt6: number
    opt60: number
    opt61: number
    opt62: number
    opt63: number
    opt7: number
    opt8: number
    opt9: number
    /* Fields of Guestfs.InternalTest63Optargs */
    parent: GObject.Object
    priv: InternalTest63OptargsPrivate
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
    connect(sigName: "notify", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt1", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt1", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt10", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt10", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt10", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt10", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt10", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt11", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt11", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt11", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt11", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt11", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt12", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt12", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt12", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt12", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt12", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt13", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt13", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt13", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt13", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt13", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt14", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt14", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt14", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt14", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt14", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt15", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt15", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt15", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt15", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt15", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt16", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt16", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt16", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt16", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt16", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt17", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt17", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt17", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt17", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt17", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt18", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt18", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt18", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt18", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt18", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt19", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt19", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt19", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt19", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt19", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt2", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt2", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt20", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt20", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt20", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt20", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt20", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt21", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt21", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt21", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt21", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt21", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt22", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt22", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt22", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt22", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt22", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt23", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt23", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt23", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt23", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt23", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt24", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt24", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt24", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt24", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt24", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt25", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt25", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt25", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt25", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt25", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt26", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt26", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt26", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt26", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt26", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt27", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt27", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt27", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt27", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt27", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt28", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt28", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt28", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt28", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt28", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt29", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt29", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt29", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt29", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt29", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt3", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt3", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt30", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt30", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt30", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt30", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt30", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt31", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt31", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt31", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt31", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt31", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt32", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt32", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt32", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt32", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt32", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt33", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt33", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt33", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt33", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt33", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt34", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt34", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt34", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt34", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt34", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt35", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt35", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt35", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt35", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt35", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt36", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt36", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt36", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt36", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt36", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt37", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt37", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt37", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt37", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt37", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt38", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt38", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt38", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt38", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt38", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt39", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt39", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt39", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt39", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt39", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt4", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt4", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt40", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt40", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt40", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt40", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt40", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt41", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt41", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt41", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt41", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt41", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt42", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt42", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt42", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt42", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt42", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt43", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt43", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt43", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt43", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt43", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt44", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt44", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt44", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt44", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt44", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt45", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt45", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt45", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt45", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt45", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt46", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt46", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt46", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt46", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt46", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt47", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt47", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt47", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt47", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt47", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt48", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt48", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt48", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt48", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt48", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt49", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt49", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt49", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt49", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt49", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt5", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt5", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt50", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt50", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt50", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt50", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt50", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt51", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt51", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt51", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt51", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt51", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt52", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt52", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt52", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt52", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt52", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt53", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt53", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt53", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt53", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt53", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt54", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt54", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt54", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt54", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt54", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt55", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt55", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt55", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt55", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt55", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt56", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt56", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt56", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt56", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt56", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt57", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt57", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt57", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt57", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt57", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt58", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt58", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt58", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt58", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt58", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt59", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt59", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt59", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt59", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt59", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt6", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt6", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt60", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt60", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt60", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt60", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt60", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt61", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt61", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt61", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt61", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt61", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt62", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt62", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt62", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt62", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt62", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt63", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt63", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt63", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt63", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt63", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt7", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt7", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt7", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt7", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt7", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt8", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt8", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt9", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt9", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt9", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt9", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt9", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InternalTest63Optargs_ConstructProps)
    _init (config?: InternalTest63Optargs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTest63Optargs
    static $gtype: GObject.Type
}
export interface InternalTestOnlyOptargs_ConstructProps extends GObject.Object_ConstructProps {
    test?: number
}
export class InternalTestOnlyOptargs {
    /* Properties of Guestfs.InternalTestOnlyOptargs */
    test: number
    /* Fields of Guestfs.InternalTestOnlyOptargs */
    parent: GObject.Object
    priv: InternalTestOnlyOptargsPrivate
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
    connect(sigName: "notify", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::test", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::test", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::test", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::test", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::test", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InternalTestOnlyOptargs_ConstructProps)
    _init (config?: InternalTestOnlyOptargs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTestOnlyOptargs
    static $gtype: GObject.Type
}
export interface IsBlockdev_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsBlockdev {
    /* Properties of Guestfs.IsBlockdev */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsBlockdev */
    parent: GObject.Object
    priv: IsBlockdevPrivate
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
    connect(sigName: "notify", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsBlockdev_ConstructProps)
    _init (config?: IsBlockdev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsBlockdev
    static $gtype: GObject.Type
}
export interface IsChardev_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsChardev {
    /* Properties of Guestfs.IsChardev */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsChardev */
    parent: GObject.Object
    priv: IsChardevPrivate
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
    connect(sigName: "notify", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsChardev_ConstructProps)
    _init (config?: IsChardev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsChardev
    static $gtype: GObject.Type
}
export interface IsDir_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsDir {
    /* Properties of Guestfs.IsDir */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsDir */
    parent: GObject.Object
    priv: IsDirPrivate
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
    connect(sigName: "notify", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsDir_ConstructProps)
    _init (config?: IsDir_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsDir
    static $gtype: GObject.Type
}
export interface IsFifo_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsFifo {
    /* Properties of Guestfs.IsFifo */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsFifo */
    parent: GObject.Object
    priv: IsFifoPrivate
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
    connect(sigName: "notify", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsFifo_ConstructProps)
    _init (config?: IsFifo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsFifo
    static $gtype: GObject.Type
}
export interface IsFile_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsFile {
    /* Properties of Guestfs.IsFile */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsFile */
    parent: GObject.Object
    priv: IsFilePrivate
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
    connect(sigName: "notify", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsFile_ConstructProps)
    _init (config?: IsFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsFile
    static $gtype: GObject.Type
}
export interface IsSocket_ConstructProps extends GObject.Object_ConstructProps {
    followsymlinks?: Tristate
}
export class IsSocket {
    /* Properties of Guestfs.IsSocket */
    followsymlinks: Tristate
    /* Fields of Guestfs.IsSocket */
    parent: GObject.Object
    priv: IsSocketPrivate
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
    connect(sigName: "notify", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::followsymlinks", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsSocket_ConstructProps)
    _init (config?: IsSocket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsSocket
    static $gtype: GObject.Type
}
export interface MDCreate_ConstructProps extends GObject.Object_ConstructProps {
    chunk?: number
    level?: string
    missingbitmap?: number
    nrdevices?: number
    spare?: number
}
export class MDCreate {
    /* Properties of Guestfs.MDCreate */
    chunk: number
    level: string
    missingbitmap: number
    nrdevices: number
    spare: number
    /* Fields of Guestfs.MDCreate */
    parent: GObject.Object
    priv: MDCreatePrivate
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
    connect(sigName: "notify", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chunk", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::missingbitmap", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::missingbitmap", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::missingbitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::missingbitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::missingbitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nrdevices", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nrdevices", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nrdevices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nrdevices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nrdevices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spare", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spare", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spare", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spare", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spare", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MDCreate_ConstructProps)
    _init (config?: MDCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MDCreate
    static $gtype: GObject.Type
}
export interface Mke2fs_ConstructProps extends GObject.Object_ConstructProps {
    blockscount?: number
    blocksize?: number
    blockspergroup?: number
    bytesperinode?: number
    creatoros?: string
    discard?: Tristate
    extent?: Tristate
    filetype?: Tristate
    flexbg?: Tristate
    forcecreate?: Tristate
    fragsize?: number
    fstype?: string
    hasjournal?: Tristate
    inodesize?: number
    journaldev?: Tristate
    journaldevice?: string
    journalsize?: number
    label?: string
    largefile?: Tristate
    lastmounteddir?: string
    lazyitableinit?: Tristate
    lazyjournalinit?: Tristate
    maxonlineresize?: number
    mmpupdateinterval?: number
    numberofgroups?: number
    numberofinodes?: number
    quota?: Tristate
    quotatype?: Tristate
    reservedblockspercentage?: number
    resizeinode?: Tristate
    sparsesuper?: Tristate
    stridesize?: number
    stripewidth?: number
    testfs?: Tristate
    uninitbg?: Tristate
    usagetype?: string
    uuid?: string
    writesbandgrouponly?: Tristate
}
export class Mke2fs {
    /* Properties of Guestfs.Mke2fs */
    blockscount: number
    blocksize: number
    blockspergroup: number
    bytesperinode: number
    creatoros: string
    discard: Tristate
    extent: Tristate
    filetype: Tristate
    flexbg: Tristate
    forcecreate: Tristate
    fragsize: number
    fstype: string
    hasjournal: Tristate
    inodesize: number
    journaldev: Tristate
    journaldevice: string
    journalsize: number
    label: string
    largefile: Tristate
    lastmounteddir: string
    lazyitableinit: Tristate
    lazyjournalinit: Tristate
    maxonlineresize: number
    mmpupdateinterval: number
    numberofgroups: number
    numberofinodes: number
    quota: Tristate
    quotatype: Tristate
    reservedblockspercentage: number
    resizeinode: Tristate
    sparsesuper: Tristate
    stridesize: number
    stripewidth: number
    testfs: Tristate
    uninitbg: Tristate
    usagetype: string
    uuid: string
    writesbandgrouponly: Tristate
    /* Fields of Guestfs.Mke2fs */
    parent: GObject.Object
    priv: Mke2fsPrivate
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
    connect(sigName: "notify", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blockscount", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockscount", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blockspergroup", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockspergroup", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blockspergroup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blockspergroup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blockspergroup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytesperinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytesperinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytesperinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytesperinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytesperinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creatoros", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creatoros", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creatoros", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creatoros", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creatoros", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extent", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extent", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flexbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flexbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flexbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flexbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flexbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forcecreate", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcecreate", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forcecreate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forcecreate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forcecreate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fragsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fragsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fragsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fragsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fragsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fstype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fstype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fstype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fstype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hasjournal", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hasjournal", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hasjournal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hasjournal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hasjournal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inodesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inodesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::journaldev", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldev", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::journaldev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::journaldev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::journaldev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::journaldevice", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldevice", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::journaldevice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::journaldevice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::journaldevice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::journalsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journalsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::journalsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::journalsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::journalsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::largefile", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::largefile", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::largefile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::largefile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::largefile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lastmounteddir", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddir", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lastmounteddir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lastmounteddir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lastmounteddir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazyitableinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyitableinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazyitableinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazyitableinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazyitableinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazyjournalinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyjournalinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazyjournalinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazyjournalinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazyjournalinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxonlineresize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxonlineresize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxonlineresize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxonlineresize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxonlineresize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mmpupdateinterval", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mmpupdateinterval", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mmpupdateinterval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mmpupdateinterval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mmpupdateinterval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::numberofgroups", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofgroups", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::numberofgroups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::numberofgroups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::numberofgroups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::numberofinodes", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofinodes", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::numberofinodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::numberofinodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::numberofinodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quotatype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quotatype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quotatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quotatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quotatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reservedblockspercentage", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizeinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizeinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizeinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizeinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizeinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparsesuper", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparsesuper", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparsesuper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparsesuper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparsesuper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stridesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stridesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stridesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stridesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stridesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stripewidth", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stripewidth", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stripewidth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stripewidth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stripewidth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::testfs", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::testfs", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::testfs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::testfs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::testfs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uninitbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uninitbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uninitbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uninitbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uninitbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::usagetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usagetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::usagetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::usagetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::usagetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writesbandgrouponly", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writesbandgrouponly", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writesbandgrouponly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writesbandgrouponly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writesbandgrouponly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mke2fs_ConstructProps)
    _init (config?: Mke2fs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mke2fs
    static $gtype: GObject.Type
}
export interface Mkfs_ConstructProps extends GObject.Object_ConstructProps {
    blocksize?: number
    features?: string
    inode?: number
    label?: string
    sectorsize?: number
}
export class Mkfs {
    /* Properties of Guestfs.Mkfs */
    blocksize: number
    features: string
    inode: number
    label: string
    sectorsize: number
    /* Fields of Guestfs.Mkfs */
    parent: GObject.Object
    priv: MkfsPrivate
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
    connect(sigName: "notify", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::features", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inode", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inode", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sectorsize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mkfs_ConstructProps)
    _init (config?: Mkfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mkfs
    static $gtype: GObject.Type
}
export interface MkfsBtrfs_ConstructProps extends GObject.Object_ConstructProps {
    allocstart?: number
    bytecount?: number
    datatype?: string
    label?: string
    leafsize?: number
    metadata?: string
    nodesize?: number
    sectorsize?: number
}
export class MkfsBtrfs {
    /* Properties of Guestfs.MkfsBtrfs */
    allocstart: number
    bytecount: number
    datatype: string
    label: string
    leafsize: number
    metadata: string
    nodesize: number
    sectorsize: number
    /* Fields of Guestfs.MkfsBtrfs */
    parent: GObject.Object
    priv: MkfsBtrfsPrivate
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
    connect(sigName: "notify", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocstart", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocstart", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocstart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocstart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocstart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytecount", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytecount", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytecount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytecount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytecount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::datatype", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datatype", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::datatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::datatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::datatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leafsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leafsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leafsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leafsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leafsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nodesize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodesize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sectorsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MkfsBtrfs_ConstructProps)
    _init (config?: MkfsBtrfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MkfsBtrfs
    static $gtype: GObject.Type
}
export interface Mksquashfs_ConstructProps extends GObject.Object_ConstructProps {
    compress?: string
}
export class Mksquashfs {
    /* Properties of Guestfs.Mksquashfs */
    compress: string
    /* Fields of Guestfs.Mksquashfs */
    parent: GObject.Object
    priv: MksquashfsPrivate
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
    connect(sigName: "notify", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compress", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mksquashfs_ConstructProps)
    _init (config?: Mksquashfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mksquashfs
    static $gtype: GObject.Type
}
export interface Mkswap_ConstructProps extends GObject.Object_ConstructProps {
    label?: string
    uuid?: string
}
export class Mkswap {
    /* Properties of Guestfs.Mkswap */
    label: string
    uuid: string
    /* Fields of Guestfs.Mkswap */
    parent: GObject.Object
    priv: MkswapPrivate
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
    connect(sigName: "notify", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mkswap_ConstructProps)
    _init (config?: Mkswap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mkswap
    static $gtype: GObject.Type
}
export interface Mktemp_ConstructProps extends GObject.Object_ConstructProps {
    suffix?: string
}
export class Mktemp {
    /* Properties of Guestfs.Mktemp */
    suffix: string
    /* Fields of Guestfs.Mktemp */
    parent: GObject.Object
    priv: MktempPrivate
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
    connect(sigName: "notify", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suffix", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mktemp_ConstructProps)
    _init (config?: Mktemp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mktemp
    static $gtype: GObject.Type
}
export interface Mount9P_ConstructProps extends GObject.Object_ConstructProps {
    options?: string
}
export class Mount9P {
    /* Properties of Guestfs.Mount9P */
    options: string
    /* Fields of Guestfs.Mount9P */
    parent: GObject.Object
    priv: Mount9PPrivate
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
    connect(sigName: "notify", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::options", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mount9P_ConstructProps)
    _init (config?: Mount9P_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mount9P
    static $gtype: GObject.Type
}
export interface MountLocal_ConstructProps extends GObject.Object_ConstructProps {
    cachetimeout?: number
    debugcalls?: Tristate
    options?: string
    readonly?: Tristate
}
export class MountLocal {
    /* Properties of Guestfs.MountLocal */
    cachetimeout: number
    debugcalls: Tristate
    options: string
    readonly: Tristate
    /* Fields of Guestfs.MountLocal */
    parent: GObject.Object
    priv: MountLocalPrivate
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
    connect(sigName: "notify", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cachetimeout", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachetimeout", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachetimeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachetimeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachetimeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::debugcalls", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debugcalls", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debugcalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debugcalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debugcalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::options", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MountLocal_ConstructProps)
    _init (config?: MountLocal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MountLocal
    static $gtype: GObject.Type
}
export interface NTFSResizeOpts_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
    size?: number
}
export class NTFSResizeOpts {
    /* Properties of Guestfs.NTFSResizeOpts */
    force: Tristate
    size: number
    /* Fields of Guestfs.NTFSResizeOpts */
    parent: GObject.Object
    priv: NTFSResizeOptsPrivate
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
    connect(sigName: "notify", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NTFSResizeOpts_ConstructProps)
    _init (config?: NTFSResizeOpts_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NTFSResizeOpts
    static $gtype: GObject.Type
}
export interface NtfscloneOut_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
    ignorefscheck?: Tristate
    metadataonly?: Tristate
    preservetimestamps?: Tristate
    rescue?: Tristate
}
export class NtfscloneOut {
    /* Properties of Guestfs.NtfscloneOut */
    force: Tristate
    ignorefscheck: Tristate
    metadataonly: Tristate
    preservetimestamps: Tristate
    rescue: Tristate
    /* Fields of Guestfs.NtfscloneOut */
    parent: GObject.Object
    priv: NtfscloneOutPrivate
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
    connect(sigName: "notify", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignorefscheck", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignorefscheck", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignorefscheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignorefscheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignorefscheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadataonly", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadataonly", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadataonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadataonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadataonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preservetimestamps", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preservetimestamps", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preservetimestamps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preservetimestamps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preservetimestamps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rescue", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rescue", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rescue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rescue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rescue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NtfscloneOut_ConstructProps)
    _init (config?: NtfscloneOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NtfscloneOut
    static $gtype: GObject.Type
}
export interface Ntfsfix_ConstructProps extends GObject.Object_ConstructProps {
    clearbadsectors?: Tristate
}
export class Ntfsfix {
    /* Properties of Guestfs.Ntfsfix */
    clearbadsectors: Tristate
    /* Fields of Guestfs.Ntfsfix */
    parent: GObject.Object
    priv: NtfsfixPrivate
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
    connect(sigName: "notify", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clearbadsectors", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clearbadsectors", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clearbadsectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clearbadsectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clearbadsectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Ntfsfix_ConstructProps)
    _init (config?: Ntfsfix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Ntfsfix
    static $gtype: GObject.Type
}
export interface Remount_ConstructProps extends GObject.Object_ConstructProps {
    rw?: Tristate
}
export class Remount {
    /* Properties of Guestfs.Remount */
    rw: Tristate
    /* Fields of Guestfs.Remount */
    parent: GObject.Object
    priv: RemountPrivate
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
    connect(sigName: "notify", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rw", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rw", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Remount_ConstructProps)
    _init (config?: Remount_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Remount
    static $gtype: GObject.Type
}
export interface Rsync_ConstructProps extends GObject.Object_ConstructProps {
    archive?: Tristate
    deletedest?: Tristate
}
export class Rsync {
    /* Properties of Guestfs.Rsync */
    archive: Tristate
    deletedest: Tristate
    /* Fields of Guestfs.Rsync */
    parent: GObject.Object
    priv: RsyncPrivate
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
    connect(sigName: "notify", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::archive", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletedest", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Rsync_ConstructProps)
    _init (config?: Rsync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Rsync
    static $gtype: GObject.Type
}
export interface RsyncIn_ConstructProps extends GObject.Object_ConstructProps {
    archive?: Tristate
    deletedest?: Tristate
}
export class RsyncIn {
    /* Properties of Guestfs.RsyncIn */
    archive: Tristate
    deletedest: Tristate
    /* Fields of Guestfs.RsyncIn */
    parent: GObject.Object
    priv: RsyncInPrivate
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
    connect(sigName: "notify", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::archive", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletedest", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RsyncIn_ConstructProps)
    _init (config?: RsyncIn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RsyncIn
    static $gtype: GObject.Type
}
export interface RsyncOut_ConstructProps extends GObject.Object_ConstructProps {
    archive?: Tristate
    deletedest?: Tristate
}
export class RsyncOut {
    /* Properties of Guestfs.RsyncOut */
    archive: Tristate
    deletedest: Tristate
    /* Fields of Guestfs.RsyncOut */
    parent: GObject.Object
    priv: RsyncOutPrivate
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
    connect(sigName: "notify", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::archive", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletedest", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RsyncOut_ConstructProps)
    _init (config?: RsyncOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RsyncOut
    static $gtype: GObject.Type
}
export interface SelinuxRelabel_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
}
export class SelinuxRelabel {
    /* Properties of Guestfs.SelinuxRelabel */
    force: Tristate
    /* Fields of Guestfs.SelinuxRelabel */
    parent: GObject.Object
    priv: SelinuxRelabelPrivate
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
    connect(sigName: "notify", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SelinuxRelabel_ConstructProps)
    _init (config?: SelinuxRelabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SelinuxRelabel
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
}
export class Session {
    /* Fields of Guestfs.Session */
    parent: GObject.Object
    priv: SessionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Guestfs.Session */
    aclDeleteDefFile(dir: string): boolean
    aclGetFile(path: string, acltype: string): string
    aclSetFile(path: string, acltype: string, acl: string): boolean
    addCdrom(filename: string): boolean
    addDomain(dom: string, optargs?: AddDomain | null): number
    addDrive(filename: string, optargs?: AddDrive | null): boolean
    addDriveRo(filename: string): boolean
    addDriveRoWithIf(filename: string, iface: string): boolean
    addDriveScratch(size: number, optargs?: AddDriveScratch | null): boolean
    addDriveWithIf(filename: string, iface: string): boolean
    addLibvirtDom(dom?: object | null, optargs?: AddLibvirtDom | null): number
    augClear(augpath: string): boolean
    augClose(): boolean
    augDefnode(name: string, expr: string, val: string): IntBool
    augDefvar(name: string, expr?: string | null): number
    augGet(augpath: string): string
    augInit(root: string, flags: number): boolean
    augInsert(augpath: string, label: string, before: boolean): boolean
    augLabel(augpath: string): string
    augLoad(): boolean
    augLs(augpath: string): string[]
    augMatch(augpath: string): string[]
    augMv(src: string, dest: string): boolean
    augRm(augpath: string): number
    augSave(): boolean
    augSet(augpath: string, val: string): boolean
    augSetm(base: string, sub: string | null, val: string): number
    augTransform(lens: string, file: string, optargs?: AugTransform | null): boolean
    available(groups: string[]): boolean
    availableAllGroups(): string[]
    base64In(base64file: string, filename: string, cancellable?: Gio.Cancellable | null): boolean
    base64Out(filename: string, base64file: string, cancellable?: Gio.Cancellable | null): boolean
    blkdiscard(device: string): boolean
    blkdiscardzeroes(device: string): number
    blkid(device: string): GLib.HashTable
    blockdevFlushbufs(device: string): boolean
    blockdevGetbsz(device: string): number
    blockdevGetro(device: string): number
    blockdevGetsize64(device: string): number
    blockdevGetss(device: string): number
    blockdevGetsz(device: string): number
    blockdevRereadpt(device: string): boolean
    blockdevSetbsz(device: string, blocksize: number): boolean
    blockdevSetra(device: string, sectors: number): boolean
    blockdevSetro(device: string): boolean
    blockdevSetrw(device: string): boolean
    btrfsBalanceCancel(path: string): boolean
    btrfsBalancePause(path: string): boolean
    btrfsBalanceResume(path: string): boolean
    btrfsBalanceStatus(path: string): BTRFSBalance
    btrfsDeviceAdd(devices: string[], fs: string): boolean
    btrfsDeviceDelete(devices: string[], fs: string): boolean
    btrfsFilesystemBalance(fs: string): boolean
    btrfsFilesystemDefragment(path: string, optargs?: BTRFSFilesystemDefragment | null): boolean
    btrfsFilesystemResize(mountpoint: string, optargs?: BTRFSFilesystemResize | null): boolean
    btrfsFilesystemShow(device: string): string[]
    btrfsFilesystemSync(fs: string): boolean
    btrfsFsck(device: string, optargs?: BtrfsFsck | null): boolean
    btrfsImage(source: string[], image: string, optargs?: BTRFSImage | null): boolean
    btrfsQgroupAssign(src: string, dst: string, path: string): boolean
    btrfsQgroupCreate(qgroupid: string, subvolume: string): boolean
    btrfsQgroupDestroy(qgroupid: string, subvolume: string): boolean
    btrfsQgroupLimit(subvolume: string, size: number): boolean
    btrfsQgroupRemove(src: string, dst: string, path: string): boolean
    btrfsQgroupShow(path: string): BTRFSQgroup[]
    btrfsQuotaEnable(fs: string, enable: boolean): boolean
    btrfsQuotaRescan(fs: string): boolean
    btrfsReplace(srcdev: string, targetdev: string, mntpoint: string): boolean
    btrfsRescueChunkRecover(device: string): boolean
    btrfsRescueSuperRecover(device: string): boolean
    btrfsScrubCancel(path: string): boolean
    btrfsScrubResume(path: string): boolean
    btrfsScrubStart(path: string): boolean
    btrfsScrubStatus(path: string): BTRFSScrub
    btrfsSetSeeding(device: string, seeding: boolean): boolean
    btrfsSubvolumeCreate(dest: string, optargs?: BTRFSSubvolumeCreate | null): boolean
    btrfsSubvolumeDelete(subvolume: string): boolean
    btrfsSubvolumeGetDefault(fs: string): number
    btrfsSubvolumeList(fs: string): BTRFSSubvolume[]
    btrfsSubvolumeSetDefault(id: number, fs: string): boolean
    btrfsSubvolumeShow(subvolume: string): GLib.HashTable
    btrfsSubvolumeSnapshot(source: string, dest: string, optargs?: BTRFSSubvolumeSnapshot | null): boolean
    btrfstuneEnableExtendedInodeRefs(device: string): boolean
    btrfstuneEnableSkinnyMetadataExtentRefs(device: string): boolean
    btrfstuneSeeding(device: string, seeding: boolean): boolean
    cPointer(): number
    canonicalDeviceName(device: string): string
    capGetFile(path: string): string
    capSetFile(path: string, cap: string): boolean
    caseSensitivePath(path: string): string
    cat(path: string): string
    checksum(csumtype: string, path: string): string
    checksumDevice(csumtype: string, device: string): string
    checksumsOut(csumtype: string, directory: string, sumsfile: string, cancellable?: Gio.Cancellable | null): boolean
    chmod(mode: number, path: string): boolean
    chown(owner: number, group: number, path: string): boolean
    clearBackendSetting(name: string): number
    close(): boolean
    command(arguments_: string[]): string
    commandLines(arguments_: string[]): string[]
    compressDeviceOut(ctype: string, device: string, zdevice: string, optargs?: CompressDeviceOut | null, cancellable?: Gio.Cancellable | null): boolean
    compressOut(ctype: string, file: string, zfile: string, optargs?: CompressOut | null, cancellable?: Gio.Cancellable | null): boolean
    config(hvparam: string, hvvalue?: string | null): boolean
    copyAttributes(src: string, dest: string, optargs?: CopyAttributes | null): boolean
    copyDeviceToDevice(src: string, dest: string, optargs?: CopyDeviceToDevice | null): boolean
    copyDeviceToFile(src: string, dest: string, optargs?: CopyDeviceToFile | null): boolean
    copyFileToDevice(src: string, dest: string, optargs?: CopyFileToDevice | null): boolean
    copyFileToFile(src: string, dest: string, optargs?: CopyFileToFile | null): boolean
    copyIn(localpath: string, remotedir: string): boolean
    copyOut(remotepath: string, localdir: string): boolean
    copySize(src: string, dest: string, size: number): boolean
    cp(src: string, dest: string): boolean
    cpA(src: string, dest: string): boolean
    cpR(src: string, dest: string): boolean
    cpioOut(directory: string, cpiofile: string, optargs?: CpioOut | null, cancellable?: Gio.Cancellable | null): boolean
    dd(src: string, dest: string): boolean
    debug(subcmd: string, extraargs: string[]): string
    debugDrives(): string[]
    debugUpload(filename: string, tmpname: string, mode: number, cancellable?: Gio.Cancellable | null): boolean
    deviceIndex(device: string): number
    df(): string
    dfH(): string
    diskCreate(filename: string, format: string, size: number, optargs?: DiskCreate | null): boolean
    diskFormat(filename: string): string
    diskHasBackingFile(filename: string): number
    diskVirtualSize(filename: string): number
    dmesg(): string
    download(remotefilename: string, filename: string, cancellable?: Gio.Cancellable | null): boolean
    downloadBlocks(device: string, start: number, stop: number, filename: string, optargs?: DownloadBlocks | null, cancellable?: Gio.Cancellable | null): boolean
    downloadInode(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean
    downloadOffset(remotefilename: string, filename: string, offset: number, size: number, cancellable?: Gio.Cancellable | null): boolean
    dropCaches(whattodrop: number): boolean
    du(path: string): number
    e2fsck(device: string, optargs?: E2fsck | null): boolean
    e2fsckF(device: string): boolean
    echoDaemon(words: string[]): string
    egrep(regex: string, path: string): string[]
    egrepi(regex: string, path: string): string[]
    equal(file1: string, file2: string): number
    exists(path: string): number
    extlinux(directory: string): boolean
    f2fsExpand(device: string): boolean
    fallocate(path: string, len: number): boolean
    fallocate64(path: string, len: number): boolean
    featureAvailable(groups: string[]): number
    fgrep(pattern: string, path: string): string[]
    fgrepi(pattern: string, path: string): string[]
    file(path: string): string
    fileArchitecture(filename: string): string
    filesize(file: string): number
    filesystemAvailable(filesystem: string): number
    filesystemWalk(device: string, cancellable?: Gio.Cancellable | null): TSKDirent[]
    fill(c: number, len: number, path: string): boolean
    fillDir(dir: string, nr: number): boolean
    fillPattern(pattern: string, len: number, path: string): boolean
    find(directory: string): string[]
    find0(directory: string, files: string, cancellable?: Gio.Cancellable | null): boolean
    findInode(device: string, inode: number, cancellable?: Gio.Cancellable | null): TSKDirent[]
    findfsLabel(label: string): string
    findfsUuid(uuid: string): string
    fsck(fstype: string, device: string): number
    fstrim(mountpoint: string, optargs?: Fstrim | null): boolean
    getAppend(): string
    getAttachMethod(): string
    getAutosync(): number
    getBackend(): string
    getBackendSetting(name: string): string
    getBackendSettings(): string[]
    getCachedir(): string
    getDirect(): number
    getE2attrs(file: string): string
    getE2generation(file: string): number
    getE2label(device: string): string
    getE2uuid(device: string): string
    getHv(): string
    getIdentifier(): string
    getLibvirtRequestedCredentialChallenge(index: number): string
    getLibvirtRequestedCredentialDefresult(index: number): string
    getLibvirtRequestedCredentialPrompt(index: number): string
    getLibvirtRequestedCredentials(): string[]
    getMemsize(): number
    getNetwork(): number
    getPath(): string
    getPgroup(): number
    getPid(): number
    getProgram(): string
    getQemu(): string
    getRecoveryProc(): number
    getSelinux(): number
    getSmp(): number
    getSockdir(): string
    getState(): number
    getTmpdir(): string
    getTrace(): number
    getUmask(): number
    getVerbose(): number
    getcon(): string
    getxattr(path: string, name: string): any
    getxattrs(path: string): XAttr[]
    globExpand(pattern: string, optargs?: GlobExpand | null): string[]
    grep(regex: string, path: string, optargs?: Grep | null): string[]
    grepi(regex: string, path: string): string[]
    grubInstall(root: string, device: string): boolean
    head(path: string): string[]
    headN(nrlines: number, path: string): string[]
    hexdump(path: string): string
    hivexClose(): boolean
    hivexCommit(filename?: string | null): boolean
    hivexNodeAddChild(parent: number, name: string): number
    hivexNodeChildren(nodeh: number): HivexNode[]
    hivexNodeDeleteChild(nodeh: number): boolean
    hivexNodeGetChild(nodeh: number, name: string): number
    hivexNodeGetValue(nodeh: number, key: string): number
    hivexNodeName(nodeh: number): string
    hivexNodeParent(nodeh: number): number
    hivexNodeSetValue(nodeh: number, key: string, t: number, val: any): boolean
    hivexNodeValues(nodeh: number): HivexValue[]
    hivexOpen(filename: string, optargs?: HivexOpen | null): boolean
    hivexRoot(): number
    hivexValueKey(valueh: number): string
    hivexValueString(valueh: number): string
    hivexValueType(valueh: number): number
    hivexValueUtf8(valueh: number): string
    hivexValueValue(valueh: number): any
    initrdCat(initrdpath: string, filename: string): any
    initrdList(path: string): string[]
    inotifyAddWatch(path: string, mask: number): number
    inotifyClose(): boolean
    inotifyFiles(): string[]
    inotifyInit(maxevents: number): boolean
    inotifyRead(): INotifyEvent[]
    inotifyRmWatch(wd: number): boolean
    inspectGetArch(root: string): string
    inspectGetDistro(root: string): string
    inspectGetDriveMappings(root: string): GLib.HashTable
    inspectGetFilesystems(root: string): string[]
    inspectGetFormat(root: string): string
    inspectGetHostname(root: string): string
    inspectGetIcon(root: string, optargs?: InspectGetIcon | null): any
    inspectGetMajorVersion(root: string): number
    inspectGetMinorVersion(root: string): number
    inspectGetMountpoints(root: string): GLib.HashTable
    inspectGetOsinfo(root: string): string
    inspectGetPackageFormat(root: string): string
    inspectGetPackageManagement(root: string): string
    inspectGetProductName(root: string): string
    inspectGetProductVariant(root: string): string
    inspectGetRoots(): string[]
    inspectGetType(root: string): string
    inspectGetWindowsCurrentControlSet(root: string): string
    inspectGetWindowsSoftwareHive(root: string): string
    inspectGetWindowsSystemHive(root: string): string
    inspectGetWindowsSystemroot(root: string): string
    inspectIsLive(root: string): number
    inspectIsMultipart(root: string): number
    inspectIsNetinst(root: string): number
    inspectListApplications(root: string): Application[]
    inspectListApplications2(root: string): Application2[]
    inspectOs(): string[]
    internalExit(cancellable?: Gio.Cancellable | null): boolean
    internalTest(str: string, optstr: string | null, strlist: string[], b: boolean, integer: number, integer64: number, filein: string, fileout: string, bufferin: any, optargs?: InternalTest | null, cancellable?: Gio.Cancellable | null): boolean
    internalTest63Optargs(optargs?: InternalTest63Optargs | null, cancellable?: Gio.Cancellable | null): boolean
    internalTestCloseOutput(): boolean
    internalTestOnlyOptargs(optargs?: InternalTestOnlyOptargs | null, cancellable?: Gio.Cancellable | null): boolean
    internalTestRbool(val: string): number
    internalTestRboolerr(): number
    internalTestRbufferout(val: string): any
    internalTestRbufferouterr(): any
    internalTestRconstoptstring(val: string): string
    internalTestRconstoptstringerr(): string
    internalTestRconststring(val: string): string
    internalTestRconststringerr(): string
    internalTestRhashtable(val: string): GLib.HashTable
    internalTestRhashtableerr(): GLib.HashTable
    internalTestRint(val: string): number
    internalTestRint64(val: string): number
    internalTestRint64err(): number
    internalTestRinterr(): number
    internalTestRstring(val: string): string
    internalTestRstringerr(): string
    internalTestRstringlist(val: string): string[]
    internalTestRstringlisterr(): string[]
    internalTestRstruct(val: string): PV
    internalTestRstructerr(): PV
    internalTestRstructlist(val: string): PV[]
    internalTestRstructlisterr(): PV[]
    internalTestSetOutput(filename: string): boolean
    isBlockdev(path: string, optargs?: IsBlockdev | null): number
    isBusy(): number
    isChardev(path: string, optargs?: IsChardev | null): number
    isConfig(): number
    isDir(path: string, optargs?: IsDir | null): number
    isFifo(path: string, optargs?: IsFifo | null): number
    isFile(path: string, optargs?: IsFile | null): number
    isLaunching(): number
    isLv(mountable: string): number
    isReady(): number
    isSocket(path: string, optargs?: IsSocket | null): number
    isSymlink(path: string): number
    isWholeDevice(device: string): number
    isZero(path: string): number
    isZeroDevice(device: string): number
    isoinfo(isofile: string): ISOInfo
    isoinfoDevice(device: string): ISOInfo
    journalClose(): boolean
    journalGet(): XAttr[]
    journalGetDataThreshold(): number
    journalGetRealtimeUsec(): number
    journalNext(): number
    journalOpen(directory: string): boolean
    journalSetDataThreshold(threshold: number): boolean
    journalSkip(skip: number): number
    killSubprocess(): boolean
    launch(): boolean
    lchown(owner: number, group: number, path: string): boolean
    ldmtoolCreateAll(): boolean
    ldmtoolDiskgroupDisks(diskgroup: string): string[]
    ldmtoolDiskgroupName(diskgroup: string): string
    ldmtoolDiskgroupVolumes(diskgroup: string): string[]
    ldmtoolRemoveAll(): boolean
    ldmtoolScan(): string[]
    ldmtoolScanDevices(devices: string[]): string[]
    ldmtoolVolumeHint(diskgroup: string, volume: string): string
    ldmtoolVolumePartitions(diskgroup: string, volume: string): string[]
    ldmtoolVolumeType(diskgroup: string, volume: string): string
    lgetxattr(path: string, name: string): any
    lgetxattrs(path: string): XAttr[]
    list9p(): string[]
    listDevices(): string[]
    listDiskLabels(): GLib.HashTable
    listDmDevices(): string[]
    listFilesystems(): GLib.HashTable
    listLdmPartitions(): string[]
    listLdmVolumes(): string[]
    listMdDevices(): string[]
    listPartitions(): string[]
    ll(directory: string): string
    llz(directory: string): string
    ln(target: string, linkname: string): boolean
    lnF(target: string, linkname: string): boolean
    lnS(target: string, linkname: string): boolean
    lnSf(target: string, linkname: string): boolean
    lremovexattr(xattr: string, path: string): boolean
    ls(directory: string): string[]
    ls0(dir: string, filenames: string): boolean
    lsetxattr(xattr: string, val: string, vallen: number, path: string): boolean
    lstat(path: string): Stat
    lstatlist(path: string, names: string[]): Stat[]
    lstatns(path: string): StatNS
    lstatnslist(path: string, names: string[]): StatNS[]
    luksAddKey(device: string, key: string, newkey: string, keyslot: number): boolean
    luksClose(device: string): boolean
    luksFormat(device: string, key: string, keyslot: number): boolean
    luksFormatCipher(device: string, key: string, keyslot: number, cipher: string): boolean
    luksKillSlot(device: string, key: string, keyslot: number): boolean
    luksOpen(device: string, key: string, mapname: string): boolean
    luksOpenRo(device: string, key: string, mapname: string): boolean
    lvcreate(logvol: string, volgroup: string, mbytes: number): boolean
    lvcreateFree(logvol: string, volgroup: string, percent: number): boolean
    lvmCanonicalLvName(lvname: string): string
    lvmClearFilter(): boolean
    lvmRemoveAll(): boolean
    lvmScan(activate: boolean): boolean
    lvmSetFilter(devices: string[]): boolean
    lvremove(device: string): boolean
    lvrename(logvol: string, newlogvol: string): boolean
    lvresize(device: string, mbytes: number): boolean
    lvresizeFree(lv: string, percent: number): boolean
    lvs(): string[]
    lvsFull(): LV[]
    lvuuid(device: string): string
    lxattrlist(path: string, names: string[]): XAttr[]
    maxDisks(): number
    mdCreate(name: string, devices: string[], optargs?: MDCreate | null): boolean
    mdDetail(md: string): GLib.HashTable
    mdStat(md: string): MDStat[]
    mdStop(md: string): boolean
    mkdir(path: string): boolean
    mkdirMode(path: string, mode: number): boolean
    mkdirP(path: string): boolean
    mkdtemp(tmpl: string): string
    mke2fs(device: string, optargs?: Mke2fs | null): boolean
    mke2fsJ(fstype: string, blocksize: number, device: string, journal: string): boolean
    mke2fsJL(fstype: string, blocksize: number, device: string, label: string): boolean
    mke2fsJU(fstype: string, blocksize: number, device: string, uuid: string): boolean
    mke2journal(blocksize: number, device: string): boolean
    mke2journalL(blocksize: number, label: string, device: string): boolean
    mke2journalU(blocksize: number, uuid: string, device: string): boolean
    mkfifo(mode: number, path: string): boolean
    mkfs(fstype: string, device: string, optargs?: Mkfs | null): boolean
    mkfsB(fstype: string, blocksize: number, device: string): boolean
    mkfsBtrfs(devices: string[], optargs?: MkfsBtrfs | null): boolean
    mklostAndFound(mountpoint: string): boolean
    mkmountpoint(exemptpath: string): boolean
    mknod(mode: number, devmajor: number, devminor: number, path: string): boolean
    mknodB(mode: number, devmajor: number, devminor: number, path: string): boolean
    mknodC(mode: number, devmajor: number, devminor: number, path: string): boolean
    mksquashfs(path: string, filename: string, optargs?: Mksquashfs | null, cancellable?: Gio.Cancellable | null): boolean
    mkswap(device: string, optargs?: Mkswap | null): boolean
    mkswapL(label: string, device: string): boolean
    mkswapU(uuid: string, device: string): boolean
    mkswapFile(path: string): boolean
    mktemp(tmpl: string, optargs?: Mktemp | null): string
    modprobe(modulename: string): boolean
    mount(mountable: string, mountpoint: string): boolean
    mount9p(mounttag: string, mountpoint: string, optargs?: Mount9P | null): boolean
    mountLocal(localmountpoint: string, optargs?: MountLocal | null): boolean
    mountLocalRun(cancellable?: Gio.Cancellable | null): boolean
    mountLoop(file: string, mountpoint: string): boolean
    mountOptions(options: string, mountable: string, mountpoint: string): boolean
    mountRo(mountable: string, mountpoint: string): boolean
    mountVfs(options: string, vfstype: string, mountable: string, mountpoint: string): boolean
    mountableDevice(mountable: string): string
    mountableSubvolume(mountable: string): string
    mountpoints(): GLib.HashTable
    mounts(): string[]
    mv(src: string, dest: string): boolean
    nrDevices(): number
    ntfs3gProbe(rw: boolean, device: string): number
    ntfscatI(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean
    ntfscloneIn(backupfile: string, device: string, cancellable?: Gio.Cancellable | null): boolean
    ntfscloneOut(device: string, backupfile: string, optargs?: NtfscloneOut | null, cancellable?: Gio.Cancellable | null): boolean
    ntfsfix(device: string, optargs?: Ntfsfix | null): boolean
    ntfsresize(device: string, optargs?: NTFSResizeOpts | null): boolean
    ntfsresizeSize(device: string, size: number): boolean
    parseEnvironment(): boolean
    parseEnvironmentList(environment: string[]): boolean
    partAdd(device: string, prlogex: string, startsect: number, endsect: number): boolean
    partDel(device: string, partnum: number): boolean
    partDisk(device: string, parttype: string): boolean
    partExpandGpt(device: string): boolean
    partGetBootable(device: string, partnum: number): number
    partGetDiskGuid(device: string): string
    partGetGptAttributes(device: string, partnum: number): number
    partGetGptGuid(device: string, partnum: number): string
    partGetGptType(device: string, partnum: number): string
    partGetMbrId(device: string, partnum: number): number
    partGetMbrPartType(device: string, partnum: number): string
    partGetName(device: string, partnum: number): string
    partGetParttype(device: string): string
    partInit(device: string, parttype: string): boolean
    partList(device: string): Partition[]
    partResize(device: string, partnum: number, endsect: number): boolean
    partSetBootable(device: string, partnum: number, bootable: boolean): boolean
    partSetDiskGuid(device: string, guid: string): boolean
    partSetDiskGuidRandom(device: string): boolean
    partSetGptAttributes(device: string, partnum: number, attributes: number): boolean
    partSetGptGuid(device: string, partnum: number, guid: string): boolean
    partSetGptType(device: string, partnum: number, guid: string): boolean
    partSetMbrId(device: string, partnum: number, idbyte: number): boolean
    partSetName(device: string, partnum: number, name: string): boolean
    partToDev(partition: string): string
    partToPartnum(partition: string): number
    pingDaemon(): boolean
    pread(path: string, count: number, offset: number): any
    preadDevice(device: string, count: number, offset: number): any
    pvchangeUuid(device: string): boolean
    pvchangeUuidAll(): boolean
    pvcreate(device: string): boolean
    pvremove(device: string): boolean
    pvresize(device: string): boolean
    pvresizeSize(device: string, size: number): boolean
    pvs(): string[]
    pvsFull(): PV[]
    pvuuid(device: string): string
    pwrite(path: string, content: any, offset: number): number
    pwriteDevice(device: string, content: any, offset: number): number
    readFile(path: string): any
    readLines(path: string): string[]
    readdir(dir: string): Dirent[]
    readlink(path: string): string
    readlinklist(path: string, names: string[]): string[]
    realpath(path: string): string
    remount(mountpoint: string, optargs?: Remount | null): boolean
    removeDrive(label: string): boolean
    removexattr(xattr: string, path: string): boolean
    rename(oldpath: string, newpath: string): boolean
    resize2fs(device: string): boolean
    resize2fsM(device: string): boolean
    resize2fsSize(device: string, size: number): boolean
    rm(path: string): boolean
    rmF(path: string): boolean
    rmRf(path: string): boolean
    rmdir(path: string): boolean
    rmmountpoint(exemptpath: string): boolean
    rsync(src: string, dest: string, optargs?: Rsync | null): boolean
    rsyncIn(remote: string, dest: string, optargs?: RsyncIn | null): boolean
    rsyncOut(src: string, remote: string, optargs?: RsyncOut | null): boolean
    scrubDevice(device: string): boolean
    scrubFile(file: string): boolean
    scrubFreespace(dir: string): boolean
    selinuxRelabel(specfile: string, path: string, optargs?: SelinuxRelabel | null): boolean
    setAppend(append?: string | null): boolean
    setAttachMethod(backend: string): boolean
    setAutosync(autosync: boolean): boolean
    setBackend(backend: string): boolean
    setBackendSetting(name: string, val: string): boolean
    setBackendSettings(settings: string[]): boolean
    setCachedir(cachedir?: string | null): boolean
    setDirect(direct: boolean): boolean
    setE2attrs(file: string, attrs: string, optargs?: SetE2attrs | null): boolean
    setE2generation(file: string, generation: number): boolean
    setE2label(device: string, label: string): boolean
    setE2uuid(device: string, uuid: string): boolean
    setHv(hv: string): boolean
    setIdentifier(identifier: string): boolean
    setLabel(mountable: string, label: string): boolean
    setLibvirtRequestedCredential(index: number, cred: any): boolean
    setLibvirtSupportedCredentials(creds: string[]): boolean
    setMemsize(memsize: number): boolean
    setNetwork(network: boolean): boolean
    setPath(searchpath?: string | null): boolean
    setPgroup(pgroup: boolean): boolean
    setProgram(program: string): boolean
    setQemu(hv?: string | null): boolean
    setRecoveryProc(recoveryproc: boolean): boolean
    setSelinux(selinux: boolean): boolean
    setSmp(smp: number): boolean
    setTmpdir(tmpdir?: string | null): boolean
    setTrace(trace: boolean): boolean
    setUuid(device: string, uuid: string): boolean
    setUuidRandom(device: string): boolean
    setVerbose(verbose: boolean): boolean
    setcon(context: string): boolean
    setxattr(xattr: string, val: string, vallen: number, path: string): boolean
    sfdisk(device: string, cyls: number, heads: number, sectors: number, lines: string[]): boolean
    sfdiskM(device: string, lines: string[]): boolean
    sfdiskN(device: string, partnum: number, cyls: number, heads: number, sectors: number, line: string): boolean
    sfdiskDiskGeometry(device: string): string
    sfdiskKernelGeometry(device: string): string
    sfdiskL(device: string): string
    sh(command: string): string
    shLines(command: string): string[]
    shutdown(): boolean
    sleep(secs: number): boolean
    stat(path: string): Stat
    statns(path: string): StatNS
    statvfs(path: string): StatVFS
    strings(path: string): string[]
    stringsE(encoding: string, path: string): string[]
    swapoffDevice(device: string): boolean
    swapoffFile(file: string): boolean
    swapoffLabel(label: string): boolean
    swapoffUuid(uuid: string): boolean
    swaponDevice(device: string): boolean
    swaponFile(file: string): boolean
    swaponLabel(label: string): boolean
    swaponUuid(uuid: string): boolean
    sync(): boolean
    syslinux(device: string, optargs?: Syslinux | null): boolean
    tail(path: string): string[]
    tailN(nrlines: number, path: string): string[]
    tarIn(tarfile: string, directory: string, optargs?: TarIn | null, cancellable?: Gio.Cancellable | null): boolean
    tarOut(directory: string, tarfile: string, optargs?: TarOut | null, cancellable?: Gio.Cancellable | null): boolean
    tgzIn(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean
    tgzOut(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean
    touch(path: string): boolean
    truncate(path: string): boolean
    truncateSize(path: string, size: number): boolean
    tune2fs(device: string, optargs?: Tune2FS | null): boolean
    tune2fsL(device: string): GLib.HashTable
    txzIn(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean
    txzOut(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean
    umask(mask: number): number
    umount(pathordevice: string, optargs?: Umount | null): boolean
    umountAll(): boolean
    umountLocal(optargs?: UmountLocal | null): boolean
    upload(filename: string, remotefilename: string, cancellable?: Gio.Cancellable | null): boolean
    uploadOffset(filename: string, remotefilename: string, offset: number, cancellable?: Gio.Cancellable | null): boolean
    userCancel(): boolean
    utimens(path: string, atsecs: number, atnsecs: number, mtsecs: number, mtnsecs: number): boolean
    utsname(): UTSName
    version(): Version
    vfsLabel(mountable: string): string
    vfsMinimumSize(mountable: string): number
    vfsType(mountable: string): string
    vfsUuid(mountable: string): string
    vgActivate(activate: boolean, volgroups: string[]): boolean
    vgActivateAll(activate: boolean): boolean
    vgchangeUuid(vg: string): boolean
    vgchangeUuidAll(): boolean
    vgcreate(volgroup: string, physvols: string[]): boolean
    vglvuuids(vgname: string): string[]
    vgmeta(vgname: string): any
    vgpvuuids(vgname: string): string[]
    vgremove(vgname: string): boolean
    vgrename(volgroup: string, newvolgroup: string): boolean
    vgs(): string[]
    vgsFull(): VG[]
    vgscan(): boolean
    vguuid(vgname: string): string
    waitReady(): boolean
    wcC(path: string): number
    wcL(path: string): number
    wcW(path: string): number
    wipefs(device: string): boolean
    write(path: string, content: any): boolean
    writeAppend(path: string, content: any): boolean
    writeFile(path: string, content: string, size: number): boolean
    xfsAdmin(device: string, optargs?: XfsAdmin | null): boolean
    xfsGrowfs(path: string, optargs?: XfsGrowfs | null): boolean
    xfsInfo(pathordevice: string): XFSInfo
    xfsRepair(device: string, optargs?: XfsRepair | null): number
    yaraDestroy(): boolean
    yaraLoad(filename: string, cancellable?: Gio.Cancellable | null): boolean
    yaraScan(path: string, cancellable?: Gio.Cancellable | null): YaraDetection[]
    zegrep(regex: string, path: string): string[]
    zegrepi(regex: string, path: string): string[]
    zero(device: string): boolean
    zeroDevice(device: string): boolean
    zeroFreeSpace(directory: string): boolean
    zerofree(device: string): boolean
    zfgrep(pattern: string, path: string): string[]
    zfgrepi(pattern: string, path: string): string[]
    zfile(meth: string, path: string): string
    zgrep(regex: string, path: string): string[]
    zgrepi(regex: string, path: string): string[]
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
    /* Signals of Guestfs.Session */
    connect(sigName: "appliance", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "appliance", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "appliance", params: SessionEventParams): void
    on(sigName: "appliance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "appliance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "appliance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "close", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "close", params: SessionEventParams): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "enter", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "enter", params: SessionEventParams): void
    on(sigName: "enter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "launch-done", callback: (($obj: Session, object: SessionEventParams) => void)): number
    connect_after(sigName: "launch-done", callback: (($obj: Session, object: SessionEventParams) => void)): number
    emit(sigName: "launch-done", object: SessionEventParams): void
    on(sigName: "launch-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launch-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launch-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "library", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "library", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "library", params: SessionEventParams): void
    on(sigName: "library", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "library", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "library", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "libvirt-auth", callback: (($obj: Session, object: SessionEventParams) => void)): number
    connect_after(sigName: "libvirt-auth", callback: (($obj: Session, object: SessionEventParams) => void)): number
    emit(sigName: "libvirt-auth", object: SessionEventParams): void
    on(sigName: "libvirt-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "libvirt-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "libvirt-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "progress", params: SessionEventParams): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "subprocess-quit", callback: (($obj: Session, object: SessionEventParams) => void)): number
    connect_after(sigName: "subprocess-quit", callback: (($obj: Session, object: SessionEventParams) => void)): number
    emit(sigName: "subprocess-quit", object: SessionEventParams): void
    on(sigName: "subprocess-quit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "subprocess-quit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "subprocess-quit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "trace", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "trace", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "trace", params: SessionEventParams): void
    on(sigName: "trace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "trace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "trace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "warning", callback: (($obj: Session, params: SessionEventParams) => void)): number
    connect_after(sigName: "warning", callback: (($obj: Session, params: SessionEventParams) => void)): number
    emit(sigName: "warning", params: SessionEventParams): void
    on(sigName: "warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
export interface SetE2attrs_ConstructProps extends GObject.Object_ConstructProps {
    clear?: Tristate
}
export class SetE2attrs {
    /* Properties of Guestfs.SetE2attrs */
    clear: Tristate
    /* Fields of Guestfs.SetE2attrs */
    parent: GObject.Object
    priv: SetE2attrsPrivate
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
    connect(sigName: "notify", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clear", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SetE2attrs_ConstructProps)
    _init (config?: SetE2attrs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SetE2attrs
    static $gtype: GObject.Type
}
export interface Syslinux_ConstructProps extends GObject.Object_ConstructProps {
    directory?: string
}
export class Syslinux {
    /* Properties of Guestfs.Syslinux */
    directory: string
    /* Fields of Guestfs.Syslinux */
    parent: GObject.Object
    priv: SyslinuxPrivate
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
    connect(sigName: "notify", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::directory", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directory", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Syslinux_ConstructProps)
    _init (config?: Syslinux_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Syslinux
    static $gtype: GObject.Type
}
export interface TarIn_ConstructProps extends GObject.Object_ConstructProps {
    acls?: Tristate
    compress?: string
    selinux?: Tristate
    xattrs?: Tristate
}
export class TarIn {
    /* Properties of Guestfs.TarIn */
    acls: Tristate
    compress: string
    selinux: Tristate
    xattrs: Tristate
    /* Fields of Guestfs.TarIn */
    parent: GObject.Object
    priv: TarInPrivate
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
    connect(sigName: "notify", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::acls", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compress", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selinux", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xattrs", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TarIn_ConstructProps)
    _init (config?: TarIn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TarIn
    static $gtype: GObject.Type
}
export interface TarOut_ConstructProps extends GObject.Object_ConstructProps {
    acls?: Tristate
    compress?: string
    numericowner?: Tristate
    selinux?: Tristate
    xattrs?: Tristate
}
export class TarOut {
    /* Properties of Guestfs.TarOut */
    acls: Tristate
    compress: string
    numericowner: Tristate
    selinux: Tristate
    xattrs: Tristate
    /* Fields of Guestfs.TarOut */
    parent: GObject.Object
    priv: TarOutPrivate
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
    connect(sigName: "notify", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::acls", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compress", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::numericowner", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numericowner", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::numericowner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::numericowner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::numericowner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selinux", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xattrs", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TarOut_ConstructProps)
    _init (config?: TarOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TarOut
    static $gtype: GObject.Type
}
export interface Tune2FS_ConstructProps extends GObject.Object_ConstructProps {
    errorbehavior?: string
    force?: Tristate
    group?: number
    intervalbetweenchecks?: number
    lastmounteddirectory?: string
    maxmountcount?: number
    mountcount?: number
    reservedblockscount?: number
    reservedblockspercentage?: number
    user?: number
}
export class Tune2FS {
    /* Properties of Guestfs.Tune2FS */
    errorbehavior: string
    force: Tristate
    group: number
    intervalbetweenchecks: number
    lastmounteddirectory: string
    maxmountcount: number
    mountcount: number
    reservedblockscount: number
    reservedblockspercentage: number
    user: number
    /* Fields of Guestfs.Tune2FS */
    parent: GObject.Object
    priv: Tune2FSPrivate
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
    connect(sigName: "notify", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::errorbehavior", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::errorbehavior", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::errorbehavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::errorbehavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::errorbehavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::group", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::intervalbetweenchecks", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::intervalbetweenchecks", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::intervalbetweenchecks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::intervalbetweenchecks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::intervalbetweenchecks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lastmounteddirectory", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddirectory", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lastmounteddirectory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lastmounteddirectory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lastmounteddirectory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxmountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxmountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxmountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxmountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reservedblockscount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockscount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reservedblockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reservedblockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reservedblockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reservedblockspercentage", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tune2FS_ConstructProps)
    _init (config?: Tune2FS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tune2FS
    static $gtype: GObject.Type
}
export interface Umount_ConstructProps extends GObject.Object_ConstructProps {
    force?: Tristate
    lazyunmount?: Tristate
}
export class Umount {
    /* Properties of Guestfs.Umount */
    force: Tristate
    lazyunmount: Tristate
    /* Fields of Guestfs.Umount */
    parent: GObject.Object
    priv: UmountPrivate
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
    connect(sigName: "notify", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazyunmount", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyunmount", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazyunmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazyunmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazyunmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Umount_ConstructProps)
    _init (config?: Umount_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Umount
    static $gtype: GObject.Type
}
export interface UmountLocal_ConstructProps extends GObject.Object_ConstructProps {
    retry?: Tristate
}
export class UmountLocal {
    /* Properties of Guestfs.UmountLocal */
    retry: Tristate
    /* Fields of Guestfs.UmountLocal */
    parent: GObject.Object
    priv: UmountLocalPrivate
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
    connect(sigName: "notify", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::retry", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::retry", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::retry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::retry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::retry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UmountLocal_ConstructProps)
    _init (config?: UmountLocal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UmountLocal
    static $gtype: GObject.Type
}
export interface XfsAdmin_ConstructProps extends GObject.Object_ConstructProps {
    extunwritten?: Tristate
    imgfile?: Tristate
    label?: string
    lazycounter?: Tristate
    projid32bit?: Tristate
    uuid?: string
    v2log?: Tristate
}
export class XfsAdmin {
    /* Properties of Guestfs.XfsAdmin */
    extunwritten: Tristate
    imgfile: Tristate
    label: string
    lazycounter: Tristate
    projid32bit: Tristate
    uuid: string
    v2log: Tristate
    /* Fields of Guestfs.XfsAdmin */
    parent: GObject.Object
    priv: XfsAdminPrivate
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
    connect(sigName: "notify", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extunwritten", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extunwritten", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extunwritten", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extunwritten", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extunwritten", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imgfile", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imgfile", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imgfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imgfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imgfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazycounter", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazycounter", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazycounter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazycounter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazycounter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::projid32bit", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projid32bit", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::projid32bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::projid32bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::projid32bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::v2log", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v2log", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::v2log", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::v2log", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::v2log", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XfsAdmin_ConstructProps)
    _init (config?: XfsAdmin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsAdmin
    static $gtype: GObject.Type
}
export interface XfsGrowfs_ConstructProps extends GObject.Object_ConstructProps {
    datasec?: Tristate
    datasize?: number
    logsec?: Tristate
    logsize?: number
    maxpct?: number
    rtextsize?: number
    rtsec?: Tristate
    rtsize?: number
}
export class XfsGrowfs {
    /* Properties of Guestfs.XfsGrowfs */
    datasec: Tristate
    datasize: number
    logsec: Tristate
    logsize: number
    maxpct: number
    rtextsize: number
    rtsec: Tristate
    rtsize: number
    /* Fields of Guestfs.XfsGrowfs */
    parent: GObject.Object
    priv: XfsGrowfsPrivate
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
    connect(sigName: "notify", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::datasec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::datasec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::datasec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::datasec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::datasize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::datasize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::datasize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::datasize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxpct", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxpct", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxpct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxpct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxpct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtextsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtextsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtextsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtextsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtextsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XfsGrowfs_ConstructProps)
    _init (config?: XfsGrowfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsGrowfs
    static $gtype: GObject.Type
}
export interface XfsRepair_ConstructProps extends GObject.Object_ConstructProps {
    agstride?: number
    bhashsize?: number
    forcegeometry?: Tristate
    forcelogzero?: Tristate
    ihashsize?: number
    logdev?: string
    maxmem?: number
    nomodify?: Tristate
    noprefetch?: Tristate
    rtdev?: string
}
export class XfsRepair {
    /* Properties of Guestfs.XfsRepair */
    agstride: number
    bhashsize: number
    forcegeometry: Tristate
    forcelogzero: Tristate
    ihashsize: number
    logdev: string
    maxmem: number
    nomodify: Tristate
    noprefetch: Tristate
    rtdev: string
    /* Fields of Guestfs.XfsRepair */
    parent: GObject.Object
    priv: XfsRepairPrivate
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
    connect(sigName: "notify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::agstride", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agstride", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bhashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bhashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bhashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bhashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bhashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forcegeometry", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcegeometry", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forcegeometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forcegeometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forcegeometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forcelogzero", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcelogzero", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forcelogzero", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forcelogzero", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forcelogzero", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ihashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ihashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ihashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ihashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ihashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxmem", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmem", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxmem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxmem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxmem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nomodify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nomodify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nomodify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nomodify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nomodify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::noprefetch", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noprefetch", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::noprefetch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::noprefetch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::noprefetch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XfsRepair_ConstructProps)
    _init (config?: XfsRepair_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsRepair
    static $gtype: GObject.Type
}
export abstract class AddDomainClass {
    /* Fields of Guestfs.AddDomainClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AddDomainPrivate {
    static name: string
}
export abstract class AddDriveClass {
    /* Fields of Guestfs.AddDriveClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AddDrivePrivate {
    static name: string
}
export abstract class AddDriveScratchClass {
    /* Fields of Guestfs.AddDriveScratchClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AddDriveScratchPrivate {
    static name: string
}
export abstract class AddLibvirtDomClass {
    /* Fields of Guestfs.AddLibvirtDomClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AddLibvirtDomPrivate {
    static name: string
}
export class Application {
    /* Fields of Guestfs.Application */
    appName: string
    appDisplayName: string
    appEpoch: number
    appVersion: string
    appRelease: string
    appInstallPath: string
    appTransPath: string
    appPublisher: string
    appUrl: string
    appSourcePackage: string
    appSummary: string
    appDescription: string
    static name: string
}
export class Application2 {
    /* Fields of Guestfs.Application2 */
    app2Name: string
    app2DisplayName: string
    app2Epoch: number
    app2Version: string
    app2Release: string
    app2Arch: string
    app2InstallPath: string
    app2TransPath: string
    app2Publisher: string
    app2Url: string
    app2SourcePackage: string
    app2Summary: string
    app2Description: string
    app2Spare1: string
    app2Spare2: string
    app2Spare3: string
    app2Spare4: string
    static name: string
}
export abstract class AugTransformClass {
    /* Fields of Guestfs.AugTransformClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AugTransformPrivate {
    static name: string
}
export class BTRFSBalance {
    /* Fields of Guestfs.BTRFSBalance */
    btrfsbalanceStatus: string
    btrfsbalanceTotal: number
    btrfsbalanceBalanced: number
    btrfsbalanceConsidered: number
    btrfsbalanceLeft: number
    static name: string
}
export abstract class BTRFSFilesystemDefragmentClass {
    /* Fields of Guestfs.BTRFSFilesystemDefragmentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class BTRFSFilesystemDefragmentPrivate {
    static name: string
}
export abstract class BTRFSFilesystemResizeClass {
    /* Fields of Guestfs.BTRFSFilesystemResizeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class BTRFSFilesystemResizePrivate {
    static name: string
}
export abstract class BTRFSImageClass {
    /* Fields of Guestfs.BTRFSImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class BTRFSImagePrivate {
    static name: string
}
export class BTRFSQgroup {
    /* Fields of Guestfs.BTRFSQgroup */
    btrfsqgroupId: string
    btrfsqgroupRfer: number
    btrfsqgroupExcl: number
    static name: string
}
export class BTRFSScrub {
    /* Fields of Guestfs.BTRFSScrub */
    btrfsscrubDataExtentsScrubbed: number
    btrfsscrubTreeExtentsScrubbed: number
    btrfsscrubDataBytesScrubbed: number
    btrfsscrubTreeBytesScrubbed: number
    btrfsscrubReadErrors: number
    btrfsscrubCsumErrors: number
    btrfsscrubVerifyErrors: number
    btrfsscrubNoCsum: number
    btrfsscrubCsumDiscards: number
    btrfsscrubSuperErrors: number
    btrfsscrubMallocErrors: number
    btrfsscrubUncorrectableErrors: number
    btrfsscrubUnverifiedErrors: number
    btrfsscrubCorrectedErrors: number
    btrfsscrubLastPhysical: number
    static name: string
}
export class BTRFSSubvolume {
    /* Fields of Guestfs.BTRFSSubvolume */
    btrfssubvolumeId: number
    btrfssubvolumeTopLevelId: number
    btrfssubvolumePath: string
    static name: string
}
export abstract class BTRFSSubvolumeCreateClass {
    /* Fields of Guestfs.BTRFSSubvolumeCreateClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class BTRFSSubvolumeCreatePrivate {
    static name: string
}
export abstract class BTRFSSubvolumeSnapshotClass {
    /* Fields of Guestfs.BTRFSSubvolumeSnapshotClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class BTRFSSubvolumeSnapshotPrivate {
    static name: string
}
export abstract class BtrfsFsckClass {
    /* Fields of Guestfs.BtrfsFsckClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class BtrfsFsckPrivate {
    static name: string
}
export abstract class CompressDeviceOutClass {
    /* Fields of Guestfs.CompressDeviceOutClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CompressDeviceOutPrivate {
    static name: string
}
export abstract class CompressOutClass {
    /* Fields of Guestfs.CompressOutClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CompressOutPrivate {
    static name: string
}
export abstract class CopyAttributesClass {
    /* Fields of Guestfs.CopyAttributesClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CopyAttributesPrivate {
    static name: string
}
export abstract class CopyDeviceToDeviceClass {
    /* Fields of Guestfs.CopyDeviceToDeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CopyDeviceToDevicePrivate {
    static name: string
}
export abstract class CopyDeviceToFileClass {
    /* Fields of Guestfs.CopyDeviceToFileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CopyDeviceToFilePrivate {
    static name: string
}
export abstract class CopyFileToDeviceClass {
    /* Fields of Guestfs.CopyFileToDeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CopyFileToDevicePrivate {
    static name: string
}
export abstract class CopyFileToFileClass {
    /* Fields of Guestfs.CopyFileToFileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CopyFileToFilePrivate {
    static name: string
}
export abstract class CpioOutClass {
    /* Fields of Guestfs.CpioOutClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CpioOutPrivate {
    static name: string
}
export class Dirent {
    /* Fields of Guestfs.Dirent */
    ino: number
    ftyp: number
    name: string
    static name: string
}
export abstract class DiskCreateClass {
    /* Fields of Guestfs.DiskCreateClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DiskCreatePrivate {
    static name: string
}
export abstract class DownloadBlocksClass {
    /* Fields of Guestfs.DownloadBlocksClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DownloadBlocksPrivate {
    static name: string
}
export abstract class E2fsckClass {
    /* Fields of Guestfs.E2fsckClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class E2fsckPrivate {
    static name: string
}
export abstract class FstrimClass {
    /* Fields of Guestfs.FstrimClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class FstrimPrivate {
    static name: string
}
export abstract class GlobExpandClass {
    /* Fields of Guestfs.GlobExpandClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GlobExpandPrivate {
    static name: string
}
export abstract class GrepClass {
    /* Fields of Guestfs.GrepClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GrepPrivate {
    static name: string
}
export class HivexNode {
    /* Fields of Guestfs.HivexNode */
    hivexNodeH: number
    static name: string
}
export abstract class HivexOpenClass {
    /* Fields of Guestfs.HivexOpenClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class HivexOpenPrivate {
    static name: string
}
export class HivexValue {
    /* Fields of Guestfs.HivexValue */
    hivexValueH: number
    static name: string
}
export class INotifyEvent {
    /* Fields of Guestfs.INotifyEvent */
    inWd: number
    inMask: number
    inCookie: number
    inName: string
    static name: string
}
export class ISOInfo {
    /* Fields of Guestfs.ISOInfo */
    isoSystemId: string
    isoVolumeId: string
    isoVolumeSpaceSize: number
    isoVolumeSetSize: number
    isoVolumeSequenceNumber: number
    isoLogicalBlockSize: number
    isoVolumeSetId: string
    isoPublisherId: string
    isoDataPreparerId: string
    isoApplicationId: string
    isoCopyrightFileId: string
    isoAbstractFileId: string
    isoBibliographicFileId: string
    isoVolumeCreationT: number
    isoVolumeModificationT: number
    isoVolumeExpirationT: number
    isoVolumeEffectiveT: number
    static name: string
}
export abstract class InspectGetIconClass {
    /* Fields of Guestfs.InspectGetIconClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class InspectGetIconPrivate {
    static name: string
}
export class IntBool {
    /* Fields of Guestfs.IntBool */
    i: number
    b: number
    static name: string
}
export abstract class InternalTest63OptargsClass {
    /* Fields of Guestfs.InternalTest63OptargsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class InternalTest63OptargsPrivate {
    static name: string
}
export abstract class InternalTestClass {
    /* Fields of Guestfs.InternalTestClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class InternalTestOnlyOptargsClass {
    /* Fields of Guestfs.InternalTestOnlyOptargsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class InternalTestOnlyOptargsPrivate {
    static name: string
}
export class InternalTestPrivate {
    static name: string
}
export abstract class IsBlockdevClass {
    /* Fields of Guestfs.IsBlockdevClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IsBlockdevPrivate {
    static name: string
}
export abstract class IsChardevClass {
    /* Fields of Guestfs.IsChardevClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IsChardevPrivate {
    static name: string
}
export abstract class IsDirClass {
    /* Fields of Guestfs.IsDirClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IsDirPrivate {
    static name: string
}
export abstract class IsFifoClass {
    /* Fields of Guestfs.IsFifoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IsFifoPrivate {
    static name: string
}
export abstract class IsFileClass {
    /* Fields of Guestfs.IsFileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IsFilePrivate {
    static name: string
}
export abstract class IsSocketClass {
    /* Fields of Guestfs.IsSocketClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IsSocketPrivate {
    static name: string
}
export class LV {
    /* Fields of Guestfs.LV */
    lvName: string
    lvUuid: number[]
    lvAttr: string
    lvMajor: number
    lvMinor: number
    lvKernelMajor: number
    lvKernelMinor: number
    lvSize: number
    segCount: number
    origin: string
    snapPercent: number
    copyPercent: number
    movePv: string
    lvTags: string
    mirrorLog: string
    modules: string
    static name: string
}
export abstract class MDCreateClass {
    /* Fields of Guestfs.MDCreateClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MDCreatePrivate {
    static name: string
}
export class MDStat {
    /* Fields of Guestfs.MDStat */
    mdstatDevice: string
    mdstatIndex: number
    mdstatFlags: string
    static name: string
}
export abstract class Mke2fsClass {
    /* Fields of Guestfs.Mke2fsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Mke2fsPrivate {
    static name: string
}
export abstract class MkfsBtrfsClass {
    /* Fields of Guestfs.MkfsBtrfsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MkfsBtrfsPrivate {
    static name: string
}
export abstract class MkfsClass {
    /* Fields of Guestfs.MkfsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MkfsPrivate {
    static name: string
}
export abstract class MksquashfsClass {
    /* Fields of Guestfs.MksquashfsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MksquashfsPrivate {
    static name: string
}
export abstract class MkswapClass {
    /* Fields of Guestfs.MkswapClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MkswapPrivate {
    static name: string
}
export abstract class MktempClass {
    /* Fields of Guestfs.MktempClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MktempPrivate {
    static name: string
}
export abstract class Mount9PClass {
    /* Fields of Guestfs.Mount9PClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Mount9PPrivate {
    static name: string
}
export abstract class MountLocalClass {
    /* Fields of Guestfs.MountLocalClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MountLocalPrivate {
    static name: string
}
export abstract class NTFSResizeOptsClass {
    /* Fields of Guestfs.NTFSResizeOptsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class NTFSResizeOptsPrivate {
    static name: string
}
export abstract class NtfscloneOutClass {
    /* Fields of Guestfs.NtfscloneOutClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class NtfscloneOutPrivate {
    static name: string
}
export abstract class NtfsfixClass {
    /* Fields of Guestfs.NtfsfixClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class NtfsfixPrivate {
    static name: string
}
export class PV {
    /* Fields of Guestfs.PV */
    pvName: string
    pvUuid: number[]
    pvFmt: string
    pvSize: number
    devSize: number
    pvFree: number
    pvUsed: number
    pvAttr: string
    pvPeCount: number
    pvPeAllocCount: number
    pvTags: string
    peStart: number
    pvMdaCount: number
    pvMdaFree: number
    static name: string
}
export class Partition {
    /* Fields of Guestfs.Partition */
    partNum: number
    partStart: number
    partEnd: number
    partSize: number
    static name: string
}
export abstract class RemountClass {
    /* Fields of Guestfs.RemountClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RemountPrivate {
    static name: string
}
export abstract class RsyncClass {
    /* Fields of Guestfs.RsyncClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RsyncInClass {
    /* Fields of Guestfs.RsyncInClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RsyncInPrivate {
    static name: string
}
export abstract class RsyncOutClass {
    /* Fields of Guestfs.RsyncOutClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RsyncOutPrivate {
    static name: string
}
export class RsyncPrivate {
    static name: string
}
export abstract class SelinuxRelabelClass {
    /* Fields of Guestfs.SelinuxRelabelClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SelinuxRelabelPrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of Guestfs.SessionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SessionEventParams {
    /* Fields of Guestfs.SessionEventParams */
    event: SessionEvent
    flags: number
    buf: any
    array: number[]
    arrayLen: number
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class SetE2attrsClass {
    /* Fields of Guestfs.SetE2attrsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SetE2attrsPrivate {
    static name: string
}
export class Stat {
    /* Fields of Guestfs.Stat */
    dev: number
    ino: number
    mode: number
    nlink: number
    uid: number
    gid: number
    rdev: number
    size: number
    blksize: number
    blocks: number
    atime: number
    mtime: number
    ctime: number
    static name: string
}
export class StatNS {
    /* Fields of Guestfs.StatNS */
    stDev: number
    stIno: number
    stMode: number
    stNlink: number
    stUid: number
    stGid: number
    stRdev: number
    stSize: number
    stBlksize: number
    stBlocks: number
    stAtimeSec: number
    stAtimeNsec: number
    stMtimeSec: number
    stMtimeNsec: number
    stCtimeSec: number
    stCtimeNsec: number
    stSpare1: number
    stSpare2: number
    stSpare3: number
    stSpare4: number
    stSpare5: number
    stSpare6: number
    static name: string
}
export class StatVFS {
    /* Fields of Guestfs.StatVFS */
    bsize: number
    frsize: number
    blocks: number
    bfree: number
    bavail: number
    files: number
    ffree: number
    favail: number
    fsid: number
    flag: number
    namemax: number
    static name: string
}
export abstract class SyslinuxClass {
    /* Fields of Guestfs.SyslinuxClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SyslinuxPrivate {
    static name: string
}
export class TSKDirent {
    /* Fields of Guestfs.TSKDirent */
    tskInode: number
    tskType: number
    tskSize: number
    tskName: string
    tskFlags: number
    tskAtimeSec: number
    tskAtimeNsec: number
    tskMtimeSec: number
    tskMtimeNsec: number
    tskCtimeSec: number
    tskCtimeNsec: number
    tskCrtimeSec: number
    tskCrtimeNsec: number
    tskNlink: number
    tskLink: string
    tskSpare1: number
    static name: string
}
export abstract class TarInClass {
    /* Fields of Guestfs.TarInClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class TarInPrivate {
    static name: string
}
export abstract class TarOutClass {
    /* Fields of Guestfs.TarOutClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class TarOutPrivate {
    static name: string
}
export abstract class Tune2FSClass {
    /* Fields of Guestfs.Tune2FSClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Tune2FSPrivate {
    static name: string
}
export class UTSName {
    /* Fields of Guestfs.UTSName */
    utsSysname: string
    utsRelease: string
    utsVersion: string
    utsMachine: string
    static name: string
}
export abstract class UmountClass {
    /* Fields of Guestfs.UmountClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class UmountLocalClass {
    /* Fields of Guestfs.UmountLocalClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class UmountLocalPrivate {
    static name: string
}
export class UmountPrivate {
    static name: string
}
export class VG {
    /* Fields of Guestfs.VG */
    vgName: string
    vgUuid: number[]
    vgFmt: string
    vgAttr: string
    vgSize: number
    vgFree: number
    vgSysid: string
    vgExtentSize: number
    vgExtentCount: number
    vgFreeCount: number
    maxLv: number
    maxPv: number
    pvCount: number
    lvCount: number
    snapCount: number
    vgSeqno: number
    vgTags: string
    vgMdaCount: number
    vgMdaFree: number
    static name: string
}
export class Version {
    /* Fields of Guestfs.Version */
    major: number
    minor: number
    release: number
    extra: string
    static name: string
}
export class XAttr {
    /* Fields of Guestfs.XAttr */
    attrname: string
    attrval: any
    static name: string
}
export class XFSInfo {
    /* Fields of Guestfs.XFSInfo */
    xfsMntpoint: string
    xfsInodesize: number
    xfsAgcount: number
    xfsAgsize: number
    xfsSectsize: number
    xfsAttr: number
    xfsBlocksize: number
    xfsDatablocks: number
    xfsImaxpct: number
    xfsSunit: number
    xfsSwidth: number
    xfsDirversion: number
    xfsDirblocksize: number
    xfsCimode: number
    xfsLogname: string
    xfsLogblocksize: number
    xfsLogblocks: number
    xfsLogversion: number
    xfsLogsectsize: number
    xfsLogsunit: number
    xfsLazycount: number
    xfsRtname: string
    xfsRtextsize: number
    xfsRtblocks: number
    xfsRtextents: number
    static name: string
}
export abstract class XfsAdminClass {
    /* Fields of Guestfs.XfsAdminClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class XfsAdminPrivate {
    static name: string
}
export abstract class XfsGrowfsClass {
    /* Fields of Guestfs.XfsGrowfsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class XfsGrowfsPrivate {
    static name: string
}
export abstract class XfsRepairClass {
    /* Fields of Guestfs.XfsRepairClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class XfsRepairPrivate {
    static name: string
}
export class YaraDetection {
    /* Fields of Guestfs.YaraDetection */
    yaraName: string
    yaraRule: string
    static name: string
}
}