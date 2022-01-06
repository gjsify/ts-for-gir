/**
 * Manette-0.2
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GUdev } from './GUdev-1.0';

export declare namespace Manette {

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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Manette-0.2.Manette.Device */
    getName(): string
    hasInput(type: number, code: number): boolean
    hasRumble(): boolean
    hasUserMapping(): boolean
    removeUserMapping(): void
    rumble(strongMagnitude: number, weakMagnitude: number, milliseconds: number): boolean
    saveUserMapping(mappingString: string): void
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
    /* Signals of Manette-0.2.Manette.Device */
    connect(sigName: "absolute-axis-event", callback: (($obj: Device, event: Event) => void)): number
    on(sigName: "absolute-axis-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "absolute-axis-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "absolute-axis-event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "absolute-axis-event", event: Event): void
    connect(sigName: "button-press-event", callback: (($obj: Device, event: Event) => void)): number
    on(sigName: "button-press-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Event): void
    connect(sigName: "button-release-event", callback: (($obj: Device, event: Event) => void)): number
    on(sigName: "button-release-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Event): void
    connect(sigName: "disconnected", callback: (($obj: Device) => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "event", callback: (($obj: Device, event: Event) => void)): number
    on(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Event): void
    connect(sigName: "hat-axis-event", callback: (($obj: Device, event: Event) => void)): number
    on(sigName: "hat-axis-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hat-axis-event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hat-axis-event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "hat-axis-event", event: Event): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class Monitor {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Manette-0.2.Manette.Monitor */
    iterate(): MonitorIter
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
    /* Signals of Manette-0.2.Manette.Monitor */
    connect(sigName: "device-connected", callback: (($obj: Monitor, device: Device) => void)): number
    on(sigName: "device-connected", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-connected", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-connected", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-connected", device: Device): void
    connect(sigName: "device-disconnected", callback: (($obj: Monitor, device: Device) => void)): number
    on(sigName: "device-disconnected", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-disconnected", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-disconnected", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-disconnected", device: Device): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Monitor
    static $gtype: GObject.Type
}
export abstract class DeviceClass {
    /* Fields of Manette-0.2.Manette.DeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MonitorClass {
    /* Fields of Manette-0.2.Manette.MonitorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MonitorIter {
    /* Methods of Manette-0.2.Manette.MonitorIter */
    next(): { returnType: boolean, device: Device | null }
    static name: string
}
export class Event {
    /* Methods of Manette-0.2.Manette.Event */
    getAbsolute(): { returnType: boolean, axis: number, value: number }
    getButton(): { returnType: boolean, button: number }
    getDevice(): Device
    getEventType(): EventType
    getHardwareCode(): number
    getHardwareIndex(): number
    getHardwareType(): number
    getHardwareValue(): number
    getHat(): { returnType: boolean, axis: number, value: number }
    getTime(): number
    static name: string
}
}