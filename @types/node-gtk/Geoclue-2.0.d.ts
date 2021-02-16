/**
 * Geoclue-2.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Geoclue {

export enum AccuracyLevel {
    NONE,
    COUNTRY,
    CITY,
    NEIGHBORHOOD,
    STREET,
    EXACT,
}
export enum ClientProxyCreateFlags {
    NONE,
    AUTO_DELETE,
}
export function clientInterfaceInfo(): Gio.DBusInterfaceInfo
export function clientOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function locationInterfaceInfo(): Gio.DBusInterfaceInfo
export function locationOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function managerInterfaceInfo(): Gio.DBusInterfaceInfo
export function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export class Client {
    /* Properties of Geoclue.Client */
    active: boolean
    desktopId: string
    distanceThreshold: number
    location: string
    requestedAccuracyLevel: number
    timeThreshold: number
    /* Methods of Geoclue.Client */
    callStart(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(cancellable?: Gio.Cancellable | null): boolean
    callStop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    emitLocationUpdated(argOld: string, argNew: string): void
    /* Virtual methods of Geoclue.Client */
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation): boolean
    vfuncLocationUpdated(argOld: string, argNew: string): void
    /* Signals of Geoclue.Client */
    connect(sigName: "handle-start", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: Client, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "location-updated", callback: (($obj: Client, argOld: string, argNew: string) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: Client, argOld: string, argNew: string) => void)): number
    emit(sigName: "location-updated", argOld: string, argNew: string): void
    on(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Location {
    /* Properties of Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Manager {
    /* Properties of Geoclue.Manager */
    availableAccuracyLevel: number
    inUse: boolean
    /* Methods of Geoclue.Manager */
    callAddAgent(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAgentFinish(res: Gio.AsyncResult): boolean
    callAddAgentSync(argId: string, cancellable?: Gio.Cancellable | null): boolean
    callCreateClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreateClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callCreateClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    callDeleteClient(argClient: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteClientFinish(res: Gio.AsyncResult): boolean
    callDeleteClientSync(argClient: string, cancellable?: Gio.Cancellable | null): boolean
    callGetClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callGetClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    completeAddAgent(invocation: Gio.DBusMethodInvocation): void
    completeCreateClient(invocation: Gio.DBusMethodInvocation, client: string): void
    completeDeleteClient(invocation: Gio.DBusMethodInvocation): void
    completeGetClient(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Virtual methods of Geoclue.Manager */
    vfuncHandleAddAgent(invocation: Gio.DBusMethodInvocation, argId: string): boolean
    vfuncHandleCreateClient(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleDeleteClient(invocation: Gio.DBusMethodInvocation, argClient: string): boolean
    vfuncHandleGetClient(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    connect_after(sigName: "handle-add-agent", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, argId: string): void
    on(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-create-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-create-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-delete-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    connect_after(sigName: "handle-delete-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, argClient: string): void
    on(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-client", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export interface ClientProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    active?: boolean
    desktopId?: string
    distanceThreshold?: number
    location?: string
    requestedAccuracyLevel?: number
    timeThreshold?: number
}
export class ClientProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Geoclue.Client */
    active: boolean
    desktopId: string
    distanceThreshold: number
    location: string
    requestedAccuracyLevel: number
    timeThreshold: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Geoclue.Client */
    callStart(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(cancellable?: Gio.Cancellable | null): boolean
    callStop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    emitLocationUpdated(argOld: string, argNew: string): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Geoclue.ClientProxy */
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation): boolean
    vfuncLocationUpdated(argOld: string, argNew: string): void
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ClientProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ClientProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ClientProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ClientProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Geoclue.Client */
    connect(sigName: "handle-start", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: ClientProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "location-updated", callback: (($obj: ClientProxy, argOld: string, argNew: string) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: ClientProxy, argOld: string, argNew: string) => void)): number
    emit(sigName: "location-updated", argOld: string, argNew: string): void
    on(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desktop-id", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distance-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientProxy_ConstructProps)
    _init (config?: ClientProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ClientProxy
    static newForBusFinish(res: Gio.AsyncResult): ClientProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static create(desktopId: string, accuracyLevel: AccuracyLevel, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFinish(result: Gio.AsyncResult): ClientProxy
    static createFull(desktopId: string, accuracyLevel: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFullFinish(result: Gio.AsyncResult): ClientProxy
    static createFullSync(desktopId: string, accuracyLevel: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null): ClientProxy
    static createSync(desktopId: string, accuracyLevel: AccuracyLevel, cancellable?: Gio.Cancellable | null): ClientProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ClientSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    active?: boolean
    desktopId?: string
    distanceThreshold?: number
    location?: string
    requestedAccuracyLevel?: number
    timeThreshold?: number
}
export class ClientSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue.Client */
    active: boolean
    desktopId: string
    distanceThreshold: number
    location: string
    requestedAccuracyLevel: number
    timeThreshold: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Geoclue.Client */
    callStart(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(cancellable?: Gio.Cancellable | null): boolean
    callStop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    emitLocationUpdated(argOld: string, argNew: string): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Geoclue.ClientSkeleton */
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation): boolean
    vfuncLocationUpdated(argOld: string, argNew: string): void
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
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Geoclue.Client */
    connect(sigName: "handle-start", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: ClientSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "location-updated", callback: (($obj: ClientSkeleton, argOld: string, argNew: string) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: ClientSkeleton, argOld: string, argNew: string) => void)): number
    emit(sigName: "location-updated", argOld: string, argNew: string): void
    on(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desktop-id", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distance-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientSkeleton_ConstructProps)
    _init (config?: ClientSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface LocationProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    accuracy?: number
    altitude?: number
    description?: string
    heading?: number
    latitude?: number
    longitude?: number
    speed?: number
    timestamp?: GLib.Variant
}
export class LocationProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Geoclue.LocationProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: LocationProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: LocationProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: LocationProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: LocationProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accuracy", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::altitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::heading", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocationProxy_ConstructProps)
    _init (config?: LocationProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): LocationProxy
    static newForBusFinish(res: Gio.AsyncResult): LocationProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface LocationSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    accuracy?: number
    altitude?: number
    description?: string
    heading?: number
    latitude?: number
    longitude?: number
    speed?: number
    timestamp?: GLib.Variant
}
export class LocationSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Virtual methods of Geoclue.LocationSkeleton */
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
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: LocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: LocationSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accuracy", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::altitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::heading", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocationSkeleton_ConstructProps)
    _init (config?: LocationSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LocationSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    availableAccuracyLevel?: number
    inUse?: boolean
}
export class ManagerProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Geoclue.Manager */
    availableAccuracyLevel: number
    inUse: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Geoclue.Manager */
    callAddAgent(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAgentFinish(res: Gio.AsyncResult): boolean
    callAddAgentSync(argId: string, cancellable?: Gio.Cancellable | null): boolean
    callCreateClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreateClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callCreateClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    callDeleteClient(argClient: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteClientFinish(res: Gio.AsyncResult): boolean
    callDeleteClientSync(argClient: string, cancellable?: Gio.Cancellable | null): boolean
    callGetClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callGetClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    completeAddAgent(invocation: Gio.DBusMethodInvocation): void
    completeCreateClient(invocation: Gio.DBusMethodInvocation, client: string): void
    completeDeleteClient(invocation: Gio.DBusMethodInvocation): void
    completeGetClient(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Geoclue.ManagerProxy */
    vfuncHandleAddAgent(invocation: Gio.DBusMethodInvocation, argId: string): boolean
    vfuncHandleCreateClient(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleDeleteClient(invocation: Gio.DBusMethodInvocation, argClient: string): boolean
    vfuncHandleGetClient(invocation: Gio.DBusMethodInvocation): boolean
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    connect_after(sigName: "handle-add-agent", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, argId: string): void
    on(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-create-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-create-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-delete-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    connect_after(sigName: "handle-delete-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, argClient: string): void
    on(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-client", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-use", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    availableAccuracyLevel?: number
    inUse?: boolean
}
export class ManagerSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue.Manager */
    availableAccuracyLevel: number
    inUse: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Geoclue.Manager */
    callAddAgent(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAgentFinish(res: Gio.AsyncResult): boolean
    callAddAgentSync(argId: string, cancellable?: Gio.Cancellable | null): boolean
    callCreateClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreateClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callCreateClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    callDeleteClient(argClient: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteClientFinish(res: Gio.AsyncResult): boolean
    callDeleteClientSync(argClient: string, cancellable?: Gio.Cancellable | null): boolean
    callGetClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callGetClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    completeAddAgent(invocation: Gio.DBusMethodInvocation): void
    completeCreateClient(invocation: Gio.DBusMethodInvocation, client: string): void
    completeDeleteClient(invocation: Gio.DBusMethodInvocation): void
    completeGetClient(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Geoclue.ManagerSkeleton */
    vfuncHandleAddAgent(invocation: Gio.DBusMethodInvocation, argId: string): boolean
    vfuncHandleCreateClient(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleDeleteClient(invocation: Gio.DBusMethodInvocation, argClient: string): boolean
    vfuncHandleGetClient(invocation: Gio.DBusMethodInvocation): boolean
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
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    connect_after(sigName: "handle-add-agent", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, argId: string): void
    on(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-create-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-create-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-delete-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    connect_after(sigName: "handle-delete-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, argClient: string): void
    on(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-client", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-use", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ManagerSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface Simple_ConstructProps extends GObject.Object_ConstructProps {
    accuracyLevel?: AccuracyLevel
    desktopId?: string
    distanceThreshold?: number
    timeThreshold?: number
}
export class Simple {
    /* Properties of Geoclue.Simple */
    readonly client: ClientProxy
    readonly location: LocationProxy
    /* Fields of Geoclue.Simple */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Geoclue.Simple */
    getClient(): ClientProxy
    getLocation(): Location
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Geoclue.Simple */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Simple_ConstructProps)
    _init (config?: Simple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(result: Gio.AsyncResult): Simple
    static newSync(desktopId: string, accuracyLevel: AccuracyLevel, cancellable?: Gio.Cancellable | null): Simple
    static newWithThresholdsSync(desktopId: string, accuracyLevel: AccuracyLevel, timeThreshold: number, distanceThreshold: number, cancellable?: Gio.Cancellable | null): Simple
    static newWithThresholds(desktopId: string, accuracyLevel: AccuracyLevel, timeThreshold: number, distanceThreshold: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export abstract class ClientIface {
    /* Fields of Geoclue.ClientIface */
    parentIface: GObject.TypeInterface
    handleStart: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    handleStop: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    getActive: (object: Client) => boolean
    getDesktopId: (object: Client) => string | null
    getDistanceThreshold: (object: Client) => number
    getLocation: (object: Client) => string | null
    getRequestedAccuracyLevel: (object: Client) => number
    getTimeThreshold: (object: Client) => number
    locationUpdated: (object: Client, argOld: string, argNew: string) => void
    static name: string
}
export abstract class ClientProxyClass {
    /* Fields of Geoclue.ClientProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ClientProxyPrivate {
    static name: string
}
export abstract class ClientSkeletonClass {
    /* Fields of Geoclue.ClientSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ClientSkeletonPrivate {
    static name: string
}
export abstract class LocationIface {
    /* Fields of Geoclue.LocationIface */
    parentIface: GObject.TypeInterface
    getAccuracy: (object: Location) => number
    getAltitude: (object: Location) => number
    getDescription: (object: Location) => string | null
    getHeading: (object: Location) => number
    getLatitude: (object: Location) => number
    getLongitude: (object: Location) => number
    getSpeed: (object: Location) => number
    getTimestamp: (object: Location) => GLib.Variant | null
    static name: string
}
export abstract class LocationProxyClass {
    /* Fields of Geoclue.LocationProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class LocationProxyPrivate {
    static name: string
}
export abstract class LocationSkeletonClass {
    /* Fields of Geoclue.LocationSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class LocationSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of Geoclue.ManagerIface */
    parentIface: GObject.TypeInterface
    handleAddAgent: (object: Manager, invocation: Gio.DBusMethodInvocation, argId: string) => boolean
    handleCreateClient: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handleDeleteClient: (object: Manager, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean
    handleGetClient: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    getAvailableAccuracyLevel: (object: Manager) => number
    getInUse: (object: Manager) => boolean
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of Geoclue.ManagerProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of Geoclue.ManagerSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class SimpleClass {
    /* Fields of Geoclue.SimpleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SimplePrivate {
    static name: string
}
}