/**
 * Notify-0.7
 */

import "node"
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace Notify {

export enum Urgency {
    LOW,
    NORMAL,
    CRITICAL,
}
export const EXPIRES_DEFAULT: number
export const EXPIRES_NEVER: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export function getAppName(): string
export function getServerCaps(): string[]
export function getServerInfo(): [ /* returnType */ boolean, /* retName */ string | null, /* retVendor */ string | null, /* retVersion */ string | null, /* retSpecVersion */ string | null ]
export function init(appName: string): boolean
export function isInitted(): boolean
export function setAppName(appName: string): void
export function uninit(): void
export interface ActionCallback {
    (notification: Notification, action: string): void
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
    appName?: string
    body?: string
    iconName?: string
    id?: number
    summary?: string
}
export class Notification {
    /* Properties of Notify.Notification */
    appName: string
    body: string
    readonly closedReason: number
    iconName: string
    id: number
    summary: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Notify.Notification */
    addAction(action: string, label: string, callback: ActionCallback): void
    clearActions(): void
    clearHints(): void
    close(): boolean
    getClosedReason(): number
    setAppName(appName: string): void
    setCategory(category: string): void
    setHint(key: string, value?: GLib.Variant | null): void
    setHintByte(key: string, value: number): void
    setHintByteArray(key: string, value: any[]): void
    setHintDouble(key: string, value: number): void
    setHintInt32(key: string, value: number): void
    setHintString(key: string, value: string): void
    setHintUint32(key: string, value: number): void
    setIconFromPixbuf(icon: GdkPixbuf.Pixbuf): void
    setImageFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setTimeout(timeout: number): void
    setUrgency(urgency: Urgency): void
    show(): boolean
    update(summary: string, body?: string | null, icon?: string | null): boolean
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
    /* Virtual methods of Notify.Notification */
    vfuncClosed(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Notify.Notification */
    connect(sigName: "closed", callback: (($obj: Notification) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Notification) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed-reason", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed-reason", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary: string, body?: string | null, icon?: string | null): Notification
    static $gtype: GObject.Type
}
export abstract class NotificationClass {
    /* Fields of Notify.NotificationClass */
    parentClass: GObject.ObjectClass
    closed: (notification: Notification) => void
    static name: string
}
export class NotificationPrivate {
    static name: string
}
}