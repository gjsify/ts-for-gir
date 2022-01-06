/**
 * GoVirt-1.0
 */

import "node"
import type { Rest } from './Rest-0.7';
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GoVirt {

enum ProxyError {
    PARSING_FAILED,
    ACTION_FAILED,
    FAULT,
}
enum RestCallError {
    XML,
}
enum VmDisplayType {
    SPICE,
    VNC,
}
enum VmState {
    DOWN,
    UP,
    REBOOTING,
}
function proxyErrorQuark(): GLib.Quark
function restCallErrorQuark(): GLib.Quark
export interface Proxy_ConstructProps extends Rest.Proxy_ConstructProps {
    admin?: boolean
    caCert?: object[]
}
class Proxy {
    /* Properties of GoVirt-1.0.GoVirt.Proxy */
    admin: boolean
    caCert: object[]
    /* Properties of Rest-0.7.Rest.Proxy */
    bindingRequired: boolean
    password: string
    sslCaFile: string
    sslStrict: boolean
    urlFormat: string
    userAgent: string
    username: string
    /* Fields of GoVirt-1.0.GoVirt.Proxy */
    parent: Rest.Proxy
    priv: ProxyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GoVirt-1.0.GoVirt.Proxy */
    fetchCaCertificate(): boolean
    fetchCaCertificateAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchCaCertificateFinish(result: Gio.AsyncResult): any[]
    fetchVms(): boolean
    fetchVmsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchVmsFinish(result: Gio.AsyncResult): Vm[]
    getVms(): Vm[]
    lookupVm(vmName: string): Vm
    /* Methods of Rest-0.7.Rest.Proxy */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    newCall(): Rest.ProxyCall
    setUserAgent(userAgent: string): void
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
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: Proxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::admin", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::admin", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::admin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::admin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::admin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ca-cert", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-cert", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca-cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca-cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca-cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): Proxy
    static new(urlFormat: string, bindingRequired: boolean): Proxy
    static $gtype: GObject.Type
}
export interface Vm_ConstructProps extends GObject.Object_ConstructProps {
    display?: VmDisplay
    href?: string
    name?: string
    state?: VmState
    uuid?: string
}
class Vm {
    /* Properties of GoVirt-1.0.GoVirt.Vm */
    display: VmDisplay
    href: string
    name: string
    state: VmState
    uuid: string
    /* Fields of GoVirt-1.0.GoVirt.Vm */
    parent: GObject.Object
    priv: VmPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GoVirt-1.0.GoVirt.Vm */
    getTicket(proxy: Proxy): boolean
    getTicketAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getTicketFinish(result: Gio.AsyncResult): boolean
    start(proxy: Proxy): boolean
    startAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(proxy: Proxy): boolean
    stopAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    stopFinish(result: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::href", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::href", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::href", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::href", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::href", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Vm_ConstructProps)
    _init (config?: Vm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Vm
    static $gtype: GObject.Type
}
export interface VmDisplay_ConstructProps extends GObject.Object_ConstructProps {
    address?: string
    expiry?: number
    monitorCount?: number
    port?: number
    securePort?: number
    ticket?: string
    type?: VmDisplayType
}
class VmDisplay {
    /* Properties of GoVirt-1.0.GoVirt.VmDisplay */
    address: string
    expiry: number
    monitorCount: number
    port: number
    securePort: number
    ticket: string
    type: VmDisplayType
    /* Fields of GoVirt-1.0.GoVirt.VmDisplay */
    parent: GObject.Object
    priv: VmDisplayPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expiry", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monitor-count", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-count", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monitor-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monitor-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monitor-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secure-port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure-port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secure-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secure-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secure-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticket", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticket", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VmDisplay_ConstructProps)
    _init (config?: VmDisplay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VmDisplay
    static $gtype: GObject.Type
}
abstract class ProxyClass {
    /* Fields of GoVirt-1.0.GoVirt.ProxyClass */
    parentClass: Rest.ProxyClass
    static name: string
}
class ProxyPrivate {
    static name: string
}
abstract class VmClass {
    /* Fields of GoVirt-1.0.GoVirt.VmClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
abstract class VmDisplayClass {
    /* Fields of GoVirt-1.0.GoVirt.VmDisplayClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
class VmDisplayPrivate {
    static name: string
}
class VmPrivate {
    static name: string
}
}
export default GoVirt