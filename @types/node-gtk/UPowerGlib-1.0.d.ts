/**
 * UPowerGlib-1.0
 */

/// <reference types="node" />
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace UPowerGlib {

export enum DeviceKind {
    UNKNOWN,
    LINE_POWER,
    BATTERY,
    UPS,
    MONITOR,
    MOUSE,
    KEYBOARD,
    PDA,
    PHONE,
    MEDIA_PLAYER,
    TABLET,
    COMPUTER,
    LAST,
}
export enum DeviceLevel {
    UNKNOWN,
    NONE,
    DISCHARGING,
    LOW,
    CRITICAL,
    ACTION,
    LAST,
}
export enum DeviceState {
    UNKNOWN,
    CHARGING,
    DISCHARGING,
    EMPTY,
    FULLY_CHARGED,
    PENDING_CHARGE,
    PENDING_DISCHARGE,
    LAST,
}
export enum DeviceTechnology {
    UNKNOWN,
    LITHIUM_ION,
    LITHIUM_POLYMER,
    LITHIUM_IRON_PHOSPHATE,
    LEAD_ACID,
    NICKEL_CADMIUM,
    NICKEL_METAL_HYDRIDE,
    LAST,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function clientGlueInterfaceInfo(): Gio.DBusInterfaceInfo
export function clientGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function deviceGlueInterfaceInfo(): Gio.DBusInterfaceInfo
export function deviceGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function wakeupsGlueInterfaceInfo(): Gio.DBusInterfaceInfo
export function wakeupsGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export class ClientGlue {
    /* Properties of UPowerGlib.ClientGlue */
    daemonVersion: string
    lidIsClosed: boolean
    lidIsPresent: boolean
    onBattery: boolean
    /* Methods of UPowerGlib.ClientGlue */
    callEnumerateDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnumerateDevicesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevices */ string ]
    callEnumerateDevicesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevices */ string ]
    callGetCriticalAction(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetCriticalActionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAction */ string ]
    callGetCriticalActionSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAction */ string ]
    callGetDisplayDevice(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDisplayDeviceFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevice */ string ]
    callGetDisplayDeviceSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevice */ string ]
    completeEnumerateDevices(invocation: Gio.DBusMethodInvocation, devices: string): void
    completeGetCriticalAction(invocation: Gio.DBusMethodInvocation, action: string): void
    completeGetDisplayDevice(invocation: Gio.DBusMethodInvocation, device: string): void
    emitDeviceAdded(argDevice: string): void
    emitDeviceRemoved(argDevice: string): void
    /* Virtual methods of UPowerGlib.ClientGlue */
    vfuncDeviceAdded(argDevice: string): void
    vfuncDeviceRemoved(argDevice: string): void
    vfuncHandleEnumerateDevices(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetCriticalAction(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetDisplayDevice(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: (($obj: ClientGlue, argDevice: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlue, argDevice: string) => void)): number
    emit(sigName: "device-added", argDevice: string): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: ClientGlue, argDevice: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlue, argDevice: string) => void)): number
    emit(sigName: "device-removed", argDevice: string): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class DeviceGlue {
    /* Properties of UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    type: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
    /* Methods of UPowerGlib.DeviceGlue */
    callGetHistory(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetHistoryFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetHistorySync(argType: string, argTimespan: number, argResolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatistics(argType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetStatisticsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatisticsSync(argType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callRefresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRefreshFinish(res: Gio.AsyncResult): boolean
    callRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetHistory(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetStatistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeRefresh(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UPowerGlib.DeviceGlue */
    vfuncHandleGetHistory(invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): boolean
    vfuncHandleGetStatistics(invocation: Gio.DBusMethodInvocation, argType: string): boolean
    vfuncHandleRefresh(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): void
    on(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, argType: string): void
    on(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class WakeupsGlue {
    /* Properties of UPowerGlib.WakeupsGlue */
    hasCapability: boolean
    /* Methods of UPowerGlib.WakeupsGlue */
    callGetData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDataFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetDataSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetTotal(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTotalFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outValue */ number ]
    callGetTotalSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ number ]
    completeGetData(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetTotal(invocation: Gio.DBusMethodInvocation, value: number): void
    emitDataChanged(): void
    emitTotalChanged(argValue: number): void
    /* Virtual methods of UPowerGlib.WakeupsGlue */
    vfuncDataChanged(): void
    vfuncHandleGetData(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetTotal(invocation: Gio.DBusMethodInvocation): boolean
    vfuncTotalChanged(argValue: number): void
    /* Signals of UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlue) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlue) => void)): number
    emit(sigName: "data-changed"): void
    on(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlue, argValue: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlue, argValue: number) => void)): number
    emit(sigName: "total-changed", argValue: number): void
    on(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Properties of UPowerGlib.Client */
    readonly daemonVersion: string
    readonly lidIsClosed: boolean
    readonly lidIsPresent: boolean
    readonly onBattery: boolean
    /* Fields of UPowerGlib.Client */
    parent: GObject.Object
    priv: ClientPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib.Client */
    getCriticalAction(): string
    getDaemonVersion(): string
    getDevices(): Device[]
    getDisplayDevice(): Device
    getLidIsClosed(): boolean
    getLidIsPresent(): boolean
    getOnBattery(): boolean
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
    /* Virtual methods of UPowerGlib.Client */
    vfuncDeviceAdded(device: Device): void
    vfuncDeviceRemoved(objectPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.Client */
    connect(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: Client, objectPath: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, objectPath: string) => void)): number
    emit(sigName: "device-removed", objectPath: string): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static $gtype: GObject.Type
}
export interface ClientGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    daemonVersion?: string
    lidIsClosed?: boolean
    lidIsPresent?: boolean
    onBattery?: boolean
}
export class ClientGlueProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UPowerGlib.ClientGlue */
    daemonVersion: string
    lidIsClosed: boolean
    lidIsPresent: boolean
    onBattery: boolean
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
    /* Methods of UPowerGlib.ClientGlue */
    callEnumerateDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnumerateDevicesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevices */ string ]
    callEnumerateDevicesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevices */ string ]
    callGetCriticalAction(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetCriticalActionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAction */ string ]
    callGetCriticalActionSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAction */ string ]
    callGetDisplayDevice(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDisplayDeviceFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevice */ string ]
    callGetDisplayDeviceSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevice */ string ]
    completeEnumerateDevices(invocation: Gio.DBusMethodInvocation, devices: string): void
    completeGetCriticalAction(invocation: Gio.DBusMethodInvocation, action: string): void
    completeGetDisplayDevice(invocation: Gio.DBusMethodInvocation, device: string): void
    emitDeviceAdded(argDevice: string): void
    emitDeviceRemoved(argDevice: string): void
    /* Virtual methods of UPowerGlib.ClientGlueProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncDeviceAdded(argDevice: string): void
    vfuncDeviceRemoved(argDevice: string): void
    vfuncHandleEnumerateDevices(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetCriticalAction(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetDisplayDevice(invocation: Gio.DBusMethodInvocation): boolean
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
    connect(sigName: "g-properties-changed", callback: (($obj: ClientGlueProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ClientGlueProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ClientGlueProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ClientGlueProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: (($obj: ClientGlueProxy, argDevice: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlueProxy, argDevice: string) => void)): number
    emit(sigName: "device-added", argDevice: string): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: ClientGlueProxy, argDevice: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlueProxy, argDevice: string) => void)): number
    emit(sigName: "device-removed", argDevice: string): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientGlueProxy_ConstructProps)
    _init (config?: ClientGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ClientGlueProxy
    static newForBusFinish(res: Gio.AsyncResult): ClientGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface ClientGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    daemonVersion?: string
    lidIsClosed?: boolean
    lidIsPresent?: boolean
    onBattery?: boolean
}
export class ClientGlueSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib.ClientGlue */
    daemonVersion: string
    lidIsClosed: boolean
    lidIsPresent: boolean
    onBattery: boolean
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
    /* Methods of UPowerGlib.ClientGlue */
    callEnumerateDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnumerateDevicesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevices */ string ]
    callEnumerateDevicesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevices */ string ]
    callGetCriticalAction(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetCriticalActionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAction */ string ]
    callGetCriticalActionSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAction */ string ]
    callGetDisplayDevice(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDisplayDeviceFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevice */ string ]
    callGetDisplayDeviceSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevice */ string ]
    completeEnumerateDevices(invocation: Gio.DBusMethodInvocation, devices: string): void
    completeGetCriticalAction(invocation: Gio.DBusMethodInvocation, action: string): void
    completeGetDisplayDevice(invocation: Gio.DBusMethodInvocation, device: string): void
    emitDeviceAdded(argDevice: string): void
    emitDeviceRemoved(argDevice: string): void
    /* Virtual methods of UPowerGlib.ClientGlueSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncDeviceAdded(argDevice: string): void
    vfuncDeviceRemoved(argDevice: string): void
    vfuncHandleEnumerateDevices(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetCriticalAction(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetDisplayDevice(invocation: Gio.DBusMethodInvocation): boolean
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
    connect(sigName: "g-authorize-method", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: (($obj: ClientGlueSkeleton, argDevice: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlueSkeleton, argDevice: string) => void)): number
    emit(sigName: "device-added", argDevice: string): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: ClientGlueSkeleton, argDevice: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlueSkeleton, argDevice: string) => void)): number
    emit(sigName: "device-removed", argDevice: string): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enumerate-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-critical-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-display-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientGlueSkeleton_ConstructProps)
    _init (config?: ClientGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientGlueSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    capacity?: number
    energy?: number
    energyEmpty?: number
    energyFull?: number
    energyFullDesign?: number
    energyRate?: number
    hasHistory?: boolean
    hasStatistics?: boolean
    iconName?: string
    isPresent?: boolean
    isRechargeable?: boolean
    kind?: number
    luminosity?: number
    model?: string
    nativePath?: string
    online?: boolean
    percentage?: number
    powerSupply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    timeToEmpty?: number
    timeToFull?: number
    updateTime?: number
    vendor?: string
    voltage?: number
    warningLevel?: number
}
export class Device {
    /* Properties of UPowerGlib.Device */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    kind: number
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
    /* Fields of UPowerGlib.Device */
    parent: GObject.Object
    priv: DevicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib.Device */
    getHistorySync(type: string, timespec: number, resolution: number, cancellable?: Gio.Cancellable | null): HistoryItem[]
    getObjectPath(): string
    getStatisticsSync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[]
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    setObjectPathSync(objectPath: string, cancellable?: Gio.Cancellable | null): boolean
    toText(): string
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
    connect(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(): Device
    static kindFromString(type: string): DeviceKind
    static kindToString(typeEnum: DeviceKind): string
    static levelFromString(level: string): DeviceLevel
    static levelToString(levelEnum: DeviceLevel): string
    static stateFromString(state: string): DeviceState
    static stateToString(stateEnum: DeviceState): string
    static technologyFromString(technology: string): DeviceTechnology
    static technologyToString(technologyEnum: DeviceTechnology): string
    static $gtype: GObject.Type
}
export interface DeviceGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    capacity?: number
    energy?: number
    energyEmpty?: number
    energyFull?: number
    energyFullDesign?: number
    energyRate?: number
    hasHistory?: boolean
    hasStatistics?: boolean
    iconName?: string
    isPresent?: boolean
    isRechargeable?: boolean
    luminosity?: number
    model?: string
    nativePath?: string
    online?: boolean
    percentage?: number
    powerSupply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    timeToEmpty?: number
    timeToFull?: number
    type?: number
    updateTime?: number
    vendor?: string
    voltage?: number
    warningLevel?: number
}
export class DeviceGlueProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    type: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
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
    /* Methods of UPowerGlib.DeviceGlue */
    callGetHistory(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetHistoryFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetHistorySync(argType: string, argTimespan: number, argResolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatistics(argType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetStatisticsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatisticsSync(argType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callRefresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRefreshFinish(res: Gio.AsyncResult): boolean
    callRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetHistory(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetStatistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeRefresh(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UPowerGlib.DeviceGlueProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleGetHistory(invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): boolean
    vfuncHandleGetStatistics(invocation: Gio.DBusMethodInvocation, argType: string): boolean
    vfuncHandleRefresh(invocation: Gio.DBusMethodInvocation): boolean
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
    connect(sigName: "g-properties-changed", callback: (($obj: DeviceGlueProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DeviceGlueProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: DeviceGlueProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DeviceGlueProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): void
    on(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, argType: string): void
    on(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceGlueProxy_ConstructProps)
    _init (config?: DeviceGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DeviceGlueProxy
    static newForBusFinish(res: Gio.AsyncResult): DeviceGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface DeviceGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    capacity?: number
    energy?: number
    energyEmpty?: number
    energyFull?: number
    energyFullDesign?: number
    energyRate?: number
    hasHistory?: boolean
    hasStatistics?: boolean
    iconName?: string
    isPresent?: boolean
    isRechargeable?: boolean
    luminosity?: number
    model?: string
    nativePath?: string
    online?: boolean
    percentage?: number
    powerSupply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    timeToEmpty?: number
    timeToFull?: number
    type?: number
    updateTime?: number
    vendor?: string
    voltage?: number
    warningLevel?: number
}
export class DeviceGlueSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    type: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
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
    /* Methods of UPowerGlib.DeviceGlue */
    callGetHistory(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetHistoryFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetHistorySync(argType: string, argTimespan: number, argResolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatistics(argType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetStatisticsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatisticsSync(argType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callRefresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRefreshFinish(res: Gio.AsyncResult): boolean
    callRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetHistory(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetStatistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeRefresh(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UPowerGlib.DeviceGlueSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleGetHistory(invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): boolean
    vfuncHandleGetStatistics(invocation: Gio.DBusMethodInvocation, argType: string): boolean
    vfuncHandleRefresh(invocation: Gio.DBusMethodInvocation): boolean
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
    connect(sigName: "g-authorize-method", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): void
    on(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, argType: string): void
    on(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-refresh", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceGlueSkeleton_ConstructProps)
    _init (config?: DeviceGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceGlueSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface HistoryItem_ConstructProps extends GObject.Object_ConstructProps {
    state?: number
    time?: number
    value?: number
}
export class HistoryItem {
    /* Properties of UPowerGlib.HistoryItem */
    state: number
    time: number
    value: number
    /* Fields of UPowerGlib.HistoryItem */
    parent: GObject.Object
    priv: HistoryItemPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib.HistoryItem */
    getState(): DeviceState
    getTime(): number
    getValue(): number
    setFromString(text: string): boolean
    setState(state: DeviceState): void
    setTime(time: number): void
    setTimeToPresent(): void
    setValue(value: number): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HistoryItem_ConstructProps)
    _init (config?: HistoryItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HistoryItem
    static $gtype: GObject.Type
}
export interface StatsItem_ConstructProps extends GObject.Object_ConstructProps {
    accuracy?: number
    value?: number
}
export class StatsItem {
    /* Properties of UPowerGlib.StatsItem */
    accuracy: number
    value: number
    /* Fields of UPowerGlib.StatsItem */
    parent: GObject.Object
    priv: StatsItemPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib.StatsItem */
    getAccuracy(): number
    getValue(): number
    setAccuracy(accuracy: number): void
    setValue(value: number): void
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
    connect(sigName: "notify", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StatsItem_ConstructProps)
    _init (config?: StatsItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StatsItem
    static $gtype: GObject.Type
}
export interface WakeupItem_ConstructProps extends GObject.Object_ConstructProps {
    cmdline?: string
    details?: string
    id?: number
    isUserspace?: boolean
    old?: number
    value?: number
}
export class WakeupItem {
    /* Properties of UPowerGlib.WakeupItem */
    cmdline: string
    details: string
    id: number
    isUserspace: boolean
    old: number
    value: number
    /* Fields of UPowerGlib.WakeupItem */
    parent: GObject.Object
    priv: WakeupItemPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib.WakeupItem */
    getCmdline(): string
    getDetails(): string
    getId(): number
    getIsUserspace(): boolean
    getOld(): number
    getValue(): number
    setCmdline(cmdline: string): void
    setDetails(details: string): void
    setId(id: number): void
    setIsUserspace(isUserspace: boolean): void
    setOld(old: number): void
    setValue(value: number): void
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
    connect(sigName: "notify", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-userspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-userspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-userspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::old", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::old", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::old", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WakeupItem_ConstructProps)
    _init (config?: WakeupItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupItem
    static $gtype: GObject.Type
}
export interface Wakeups_ConstructProps extends GObject.Object_ConstructProps {
}
export class Wakeups {
    /* Fields of UPowerGlib.Wakeups */
    parent: GObject.Object
    priv: WakeupsPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib.Wakeups */
    getDataSync(cancellable?: Gio.Cancellable | null): WakeupItem[]
    getHasCapability(): boolean
    getPropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    getTotalSync(cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of UPowerGlib.Wakeups */
    vfuncDataChanged(): void
    vfuncTotalChanged(value: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.Wakeups */
    connect(sigName: "data-changed", callback: (($obj: Wakeups) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: Wakeups) => void)): number
    emit(sigName: "data-changed"): void
    on(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "total-changed", callback: (($obj: Wakeups, object: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: Wakeups, object: number) => void)): number
    emit(sigName: "total-changed", object: number): void
    on(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Wakeups, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Wakeups, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Wakeups_ConstructProps)
    _init (config?: Wakeups_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Wakeups
    static $gtype: GObject.Type
}
export interface WakeupsGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    hasCapability?: boolean
}
export class WakeupsGlueProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UPowerGlib.WakeupsGlue */
    hasCapability: boolean
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
    /* Methods of UPowerGlib.WakeupsGlue */
    callGetData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDataFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetDataSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetTotal(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTotalFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outValue */ number ]
    callGetTotalSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ number ]
    completeGetData(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetTotal(invocation: Gio.DBusMethodInvocation, value: number): void
    emitDataChanged(): void
    emitTotalChanged(argValue: number): void
    /* Virtual methods of UPowerGlib.WakeupsGlueProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncDataChanged(): void
    vfuncHandleGetData(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetTotal(invocation: Gio.DBusMethodInvocation): boolean
    vfuncTotalChanged(argValue: number): void
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
    connect(sigName: "g-properties-changed", callback: (($obj: WakeupsGlueProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: WakeupsGlueProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: WakeupsGlueProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: WakeupsGlueProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlueProxy) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlueProxy) => void)): number
    emit(sigName: "data-changed"): void
    on(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlueProxy, argValue: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlueProxy, argValue: number) => void)): number
    emit(sigName: "total-changed", argValue: number): void
    on(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WakeupsGlueProxy_ConstructProps)
    _init (config?: WakeupsGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): WakeupsGlueProxy
    static newForBusFinish(res: Gio.AsyncResult): WakeupsGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface WakeupsGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    hasCapability?: boolean
}
export class WakeupsGlueSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib.WakeupsGlue */
    hasCapability: boolean
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
    /* Methods of UPowerGlib.WakeupsGlue */
    callGetData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDataFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetDataSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetTotal(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTotalFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outValue */ number ]
    callGetTotalSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ number ]
    completeGetData(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetTotal(invocation: Gio.DBusMethodInvocation, value: number): void
    emitDataChanged(): void
    emitTotalChanged(argValue: number): void
    /* Virtual methods of UPowerGlib.WakeupsGlueSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncDataChanged(): void
    vfuncHandleGetData(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleGetTotal(invocation: Gio.DBusMethodInvocation): boolean
    vfuncTotalChanged(argValue: number): void
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
    connect(sigName: "g-authorize-method", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlueSkeleton) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlueSkeleton) => void)): number
    emit(sigName: "data-changed"): void
    on(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlueSkeleton, argValue: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlueSkeleton, argValue: number) => void)): number
    emit(sigName: "total-changed", argValue: number): void
    on(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WakeupsGlueSkeleton_ConstructProps)
    _init (config?: WakeupsGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupsGlueSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of UPowerGlib.ClientClass */
    parentClass: GObject.ObjectClass
    deviceAdded: (client: Client, device: Device) => void
    deviceRemoved: (client: Client, objectPath: string) => void
    static name: string
}
export abstract class ClientGlueIface {
    /* Fields of UPowerGlib.ClientGlueIface */
    parentIface: GObject.TypeInterface
    handleEnumerateDevices: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handleGetCriticalAction: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handleGetDisplayDevice: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    getDaemonVersion: (object: ClientGlue) => string
    getLidIsClosed: (object: ClientGlue) => boolean
    getLidIsPresent: (object: ClientGlue) => boolean
    getOnBattery: (object: ClientGlue) => boolean
    deviceAdded: (object: ClientGlue, argDevice: string) => void
    deviceRemoved: (object: ClientGlue, argDevice: string) => void
    static name: string
}
export abstract class ClientGlueProxyClass {
    /* Fields of UPowerGlib.ClientGlueProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ClientGlueProxyPrivate {
    static name: string
}
export abstract class ClientGlueSkeletonClass {
    /* Fields of UPowerGlib.ClientGlueSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ClientGlueSkeletonPrivate {
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class DeviceClass {
    /* Fields of UPowerGlib.DeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DeviceGlueIface {
    /* Fields of UPowerGlib.DeviceGlueIface */
    parentIface: GObject.TypeInterface
    handleGetHistory: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean
    handleGetStatistics: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string) => boolean
    handleRefresh: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean
    getCapacity: (object: DeviceGlue) => number
    getEnergy: (object: DeviceGlue) => number
    getEnergyEmpty: (object: DeviceGlue) => number
    getEnergyFull: (object: DeviceGlue) => number
    getEnergyFullDesign: (object: DeviceGlue) => number
    getEnergyRate: (object: DeviceGlue) => number
    getHasHistory: (object: DeviceGlue) => boolean
    getHasStatistics: (object: DeviceGlue) => boolean
    getIconName: (object: DeviceGlue) => string
    getIsPresent: (object: DeviceGlue) => boolean
    getIsRechargeable: (object: DeviceGlue) => boolean
    getLuminosity: (object: DeviceGlue) => number
    getModel: (object: DeviceGlue) => string
    getNativePath: (object: DeviceGlue) => string
    getOnline: (object: DeviceGlue) => boolean
    getPercentage: (object: DeviceGlue) => number
    getPowerSupply: (object: DeviceGlue) => boolean
    getSerial: (object: DeviceGlue) => string
    getState: (object: DeviceGlue) => number
    getTechnology: (object: DeviceGlue) => number
    getTemperature: (object: DeviceGlue) => number
    getTimeToEmpty: (object: DeviceGlue) => number
    getTimeToFull: (object: DeviceGlue) => number
    getType: (object: DeviceGlue) => number
    getUpdateTime: (object: DeviceGlue) => number
    getVendor: (object: DeviceGlue) => string
    getVoltage: (object: DeviceGlue) => number
    getWarningLevel: (object: DeviceGlue) => number
    static name: string
}
export abstract class DeviceGlueProxyClass {
    /* Fields of UPowerGlib.DeviceGlueProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class DeviceGlueProxyPrivate {
    static name: string
}
export abstract class DeviceGlueSkeletonClass {
    /* Fields of UPowerGlib.DeviceGlueSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DeviceGlueSkeletonPrivate {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class HistoryItemClass {
    /* Fields of UPowerGlib.HistoryItemClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class HistoryItemPrivate {
    static name: string
}
export abstract class StatsItemClass {
    /* Fields of UPowerGlib.StatsItemClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class StatsItemPrivate {
    static name: string
}
export abstract class WakeupItemClass {
    /* Fields of UPowerGlib.WakeupItemClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class WakeupItemPrivate {
    static name: string
}
export abstract class WakeupsClass {
    /* Fields of UPowerGlib.WakeupsClass */
    parentClass: GObject.ObjectClass
    dataChanged: (wakeups: Wakeups) => void
    totalChanged: (wakeups: Wakeups, value: number) => void
    static name: string
}
export abstract class WakeupsGlueIface {
    /* Fields of UPowerGlib.WakeupsGlueIface */
    parentIface: GObject.TypeInterface
    handleGetData: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handleGetTotal: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    getHasCapability: (object: WakeupsGlue) => boolean
    dataChanged: (object: WakeupsGlue) => void
    totalChanged: (object: WakeupsGlue, argValue: number) => void
    static name: string
}
export abstract class WakeupsGlueProxyClass {
    /* Fields of UPowerGlib.WakeupsGlueProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class WakeupsGlueProxyPrivate {
    static name: string
}
export abstract class WakeupsGlueSkeletonClass {
    /* Fields of UPowerGlib.WakeupsGlueSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class WakeupsGlueSkeletonPrivate {
    static name: string
}
export class WakeupsPrivate {
    static name: string
}
}