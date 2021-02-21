/**
 * GstNet-1.0
 */

import "node"
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { Gio } from './Gio-2.0';

export declare namespace GstNet {

export const NET_TIME_PACKET_SIZE: number
export const PTP_CLOCK_ID_NONE: number
export const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string
export const PTP_STATISTICS_NEW_DOMAIN_FOUND: string
export const PTP_STATISTICS_PATH_DELAY_MEASURED: string
export const PTP_STATISTICS_TIME_UPDATED: string
export function bufferAddNetAddressMeta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta
export function bufferAddNetControlMessageMeta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta
export function bufferGetNetAddressMeta(buffer: Gst.Buffer): NetAddressMeta
export function netAddressMetaApiGetType(): GObject.Type
export function netAddressMetaGetInfo(): Gst.MetaInfo
export function netControlMessageMetaApiGetType(): GObject.Type
export function netControlMessageMetaGetInfo(): Gst.MetaInfo
export function netTimePacketReceive(socket: Gio.Socket): { returnType: NetTimePacket, srcAddress: Gio.SocketAddress }
export function netUtilsSetSocketTos(socket: Gio.Socket, qosDscp: number): boolean
export function ptpDeinit(): void
export function ptpInit(clockId: number, interfaces?: string[] | null): boolean
export function ptpIsInitialized(): boolean
export function ptpIsSupported(): boolean
export function ptpStatisticsCallbackAdd(callback: PtpStatisticsCallback): number
export function ptpStatisticsCallbackRemove(id: number): void
export interface PtpStatisticsCallback {
    (domain: number, stats: Gst.Structure): boolean
}
export interface NetClientClock_ConstructProps extends Gst.SystemClock_ConstructProps {
    address?: string
    baseTime?: number
    bus?: Gst.Bus
    minimumUpdateInterval?: number
    port?: number
    qosDscp?: number
    roundTripLimit?: number
}
export class NetClientClock {
    /* Properties of GstNet-1.0.GstNet.NetClientClock */
    address: string
    bus: Gst.Bus
    readonly internalClock: Gst.Clock
    minimumUpdateInterval: number
    port: number
    qosDscp: number
    roundTripLimit: number
    /* Properties of Gst-1.0.Gst.SystemClock */
    clockType: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstNet-1.0.GstNet.NetClientClock */
    clock: Gst.SystemClock
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    addObservation(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number }
    addObservationUnapplied(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number, internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    adjustUnlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjustWithCalibration(internalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    getCalibration(): { internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    getInternalTime(): Gst.ClockTime
    getMaster(): Gst.Clock | null
    getResolution(): Gst.ClockTime
    getTime(): Gst.ClockTime
    getTimeout(): Gst.ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    newSingleShotId(time: Gst.ClockTime): Gst.ClockID
    periodicIdReinit(id: Gst.ClockID, startTime: Gst.ClockTime, interval: Gst.ClockTime): boolean
    setCalibration(internal: Gst.ClockTime, external: Gst.ClockTime, rateNum: Gst.ClockTime, rateDenom: Gst.ClockTime): void
    setMaster(master?: Gst.Clock | null): boolean
    setResolution(resolution: Gst.ClockTime): Gst.ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: Gst.ClockTime): void
    singleShotIdReinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjustUnlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjustWithCalibration(externalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    waitForSync(timeout: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: NetClientClock, synced: boolean) => void)): number
    on(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "synced", callback: (synced: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: NetClientClock, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NetClientClock_ConstructProps)
    _init (config?: NetClientClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, remoteAddress: string, remotePort: number, baseTime: Gst.ClockTime): NetClientClock
    static $gtype: GObject.Type
}
export interface NetTimeProvider_ConstructProps extends Gst.Object_ConstructProps {
    active?: boolean
    address?: string
    clock?: Gst.Clock
    port?: number
    qosDscp?: number
}
export class NetTimeProvider {
    /* Properties of GstNet-1.0.GstNet.NetTimeProvider */
    active: boolean
    qosDscp: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: NetTimeProvider, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NetTimeProvider_ConstructProps)
    _init (config?: NetTimeProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(clock: Gst.Clock, address: string | null, port: number): NetTimeProvider
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface NtpClock_ConstructProps extends NetClientClock_ConstructProps {
}
export class NtpClock {
    /* Properties of GstNet-1.0.GstNet.NetClientClock */
    address: string
    bus: Gst.Bus
    readonly internalClock: Gst.Clock
    minimumUpdateInterval: number
    port: number
    qosDscp: number
    roundTripLimit: number
    /* Properties of Gst-1.0.Gst.SystemClock */
    clockType: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstNet-1.0.GstNet.NtpClock */
    clock: Gst.SystemClock
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    addObservation(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number }
    addObservationUnapplied(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number, internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    adjustUnlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjustWithCalibration(internalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    getCalibration(): { internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    getInternalTime(): Gst.ClockTime
    getMaster(): Gst.Clock | null
    getResolution(): Gst.ClockTime
    getTime(): Gst.ClockTime
    getTimeout(): Gst.ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    newSingleShotId(time: Gst.ClockTime): Gst.ClockID
    periodicIdReinit(id: Gst.ClockID, startTime: Gst.ClockTime, interval: Gst.ClockTime): boolean
    setCalibration(internal: Gst.ClockTime, external: Gst.ClockTime, rateNum: Gst.ClockTime, rateDenom: Gst.ClockTime): void
    setMaster(master?: Gst.Clock | null): boolean
    setResolution(resolution: Gst.ClockTime): Gst.ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: Gst.ClockTime): void
    singleShotIdReinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjustUnlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjustWithCalibration(externalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    waitForSync(timeout: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: NtpClock, synced: boolean) => void)): number
    on(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "synced", callback: (synced: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: NtpClock, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NtpClock_ConstructProps)
    _init (config?: NtpClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, remoteAddress: string, remotePort: number, baseTime: Gst.ClockTime): NtpClock
    static $gtype: GObject.Type
}
export interface PtpClock_ConstructProps extends Gst.SystemClock_ConstructProps {
    domain?: number
}
export class PtpClock {
    /* Properties of GstNet-1.0.GstNet.PtpClock */
    readonly grandmasterClockId: number
    readonly internalClock: Gst.Clock
    readonly masterClockId: number
    /* Properties of Gst-1.0.Gst.SystemClock */
    clockType: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstNet-1.0.GstNet.PtpClock */
    clock: Gst.SystemClock
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    addObservation(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number }
    addObservationUnapplied(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number, internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    adjustUnlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjustWithCalibration(internalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    getCalibration(): { internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    getInternalTime(): Gst.ClockTime
    getMaster(): Gst.Clock | null
    getResolution(): Gst.ClockTime
    getTime(): Gst.ClockTime
    getTimeout(): Gst.ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    newSingleShotId(time: Gst.ClockTime): Gst.ClockID
    periodicIdReinit(id: Gst.ClockID, startTime: Gst.ClockTime, interval: Gst.ClockTime): boolean
    setCalibration(internal: Gst.ClockTime, external: Gst.ClockTime, rateNum: Gst.ClockTime, rateDenom: Gst.ClockTime): void
    setMaster(master?: Gst.Clock | null): boolean
    setResolution(resolution: Gst.ClockTime): Gst.ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: Gst.ClockTime): void
    singleShotIdReinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjustUnlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjustWithCalibration(externalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    waitForSync(timeout: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: GObject.Closure): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: PtpClock, synced: boolean) => void)): number
    on(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "synced", callback: (synced: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PtpClock, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::grandmaster-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::grandmaster-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::grandmaster-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PtpClock_ConstructProps)
    _init (config?: PtpClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, domain: number): PtpClock
    static $gtype: GObject.Type
}
export class NetAddressMeta {
    /* Fields of GstNet-1.0.GstNet.NetAddressMeta */
    meta: Gst.Meta
    addr: Gio.SocketAddress
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
export abstract class NetClientClockClass {
    /* Fields of GstNet-1.0.GstNet.NetClientClockClass */
    parentClass: Gst.SystemClockClass
    static name: string
}
export class NetClientClockPrivate {
    static name: string
}
export class NetControlMessageMeta {
    /* Fields of GstNet-1.0.GstNet.NetControlMessageMeta */
    meta: Gst.Meta
    message: Gio.SocketControlMessage
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
export class NetTimePacket {
    /* Fields of GstNet-1.0.GstNet.NetTimePacket */
    localTime: Gst.ClockTime
    remoteTime: Gst.ClockTime
    /* Methods of GstNet-1.0.GstNet.NetTimePacket */
    copy(): NetTimePacket
    free(): void
    send(socket: Gio.Socket, destAddress: Gio.SocketAddress): boolean
    serialize(): number
    static name: string
    static new(buffer: any[]): NetTimePacket
    constructor(buffer: any[])
    /* Static methods and pseudo-constructors */
    static new(buffer: any[]): NetTimePacket
    static receive(socket: Gio.Socket): { returnType: NetTimePacket, srcAddress: Gio.SocketAddress }
}
export abstract class NetTimeProviderClass {
    /* Fields of GstNet-1.0.GstNet.NetTimeProviderClass */
    parentClass: Gst.ObjectClass
    gstReserved: object[]
    static name: string
}
export class NetTimeProviderPrivate {
    static name: string
}
export abstract class NtpClockClass {
    /* Fields of GstNet-1.0.GstNet.NtpClockClass */
    parentClass: Gst.SystemClockClass
    static name: string
}
export abstract class PtpClockClass {
    /* Fields of GstNet-1.0.GstNet.PtpClockClass */
    parentClass: Gst.SystemClockClass
    static name: string
}
export class PtpClockPrivate {
    static name: string
}
}