/**
 * Manette-0.2
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GUdev-1.0.d.ts" />

declare namespace Manette {

export enum EventType {
    EVENT_NOTHING,
    EVENT_BUTTON_PRESS,
    EVENT_BUTTON_RELEASE,
    EVENT_ABSOLUTE,
    EVENT_HAT,
}
export function getResource(): Gio.Resource
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
export class Device {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Manette.Device */
    getName(): string
    hasInput(type: number, code: number): boolean
    hasRumble(): boolean
    hasUserMapping(): boolean
    removeUserMapping(): void
    rumble(strongMagnitude: number, weakMagnitude: number, milliseconds: number): boolean
    saveUserMapping(mappingString: string): void
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
    /* Signals of Manette.Device */
    connect(sigName: "absolute-axis-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "absolute-axis-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "absolute-axis-event", event: Event): void
    on(sigName: "absolute-axis-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "absolute-axis-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "absolute-axis-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "button-press-event", event: Event): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "button-release-event", event: Event): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "disconnected", callback: (($obj: Device) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Device) => void)): number
    emit(sigName: "disconnected"): void
    on(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "event", event: Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hat-axis-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "hat-axis-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "hat-axis-event", event: Event): void
    on(sigName: "hat-axis-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hat-axis-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hat-axis-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class Monitor {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Manette.Monitor */
    iterate(): MonitorIter
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
    /* Signals of Manette.Monitor */
    connect(sigName: "device-connected", callback: (($obj: Monitor, device: Device) => void)): number
    connect_after(sigName: "device-connected", callback: (($obj: Monitor, device: Device) => void)): number
    emit(sigName: "device-connected", device: Device): void
    on(sigName: "device-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-disconnected", callback: (($obj: Monitor, device: Device) => void)): number
    connect_after(sigName: "device-disconnected", callback: (($obj: Monitor, device: Device) => void)): number
    emit(sigName: "device-disconnected", device: Device): void
    on(sigName: "device-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Monitor
    static $gtype: GObject.Type
}
export abstract class DeviceClass {
    /* Fields of Manette.DeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MonitorClass {
    /* Fields of Manette.MonitorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MonitorIter {
    /* Methods of Manette.MonitorIter */
    next(): [ /* returnType */ boolean, /* device */ Device | null ]
    static name: string
}
export class Event {
    /* Methods of Manette.Event */
    getAbsolute(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    getButton(): [ /* returnType */ boolean, /* button */ number ]
    getDevice(): Device
    getEventType(): EventType
    getHardwareCode(): number
    getHardwareIndex(): number
    getHardwareType(): number
    getHardwareValue(): number
    getHat(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    getTime(): number
    static name: string
}
}