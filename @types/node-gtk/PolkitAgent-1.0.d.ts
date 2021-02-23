/**
 * PolkitAgent-1.0
 */

import "node"
import type { Polkit } from './Polkit-1.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace PolkitAgent {

export enum RegisterFlags {
    NONE,
    RUN_IN_THREAD,
}
export function registerListener(listener: Listener, subject: Polkit.Subject, objectPath: string): boolean
export interface Listener_ConstructProps extends GObject.Object_ConstructProps {
}
export class Listener {
    /* Fields of PolkitAgent-1.0.PolkitAgent.Listener */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PolkitAgent-1.0.PolkitAgent.Listener */
    initiateAuthentication(actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiateAuthenticationFinish(res: Gio.AsyncResult): boolean
    register(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, cancellable?: Gio.Cancellable | null): object | null
    registerWithOptions(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): object | null
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Listener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Listener_ConstructProps)
    _init (config?: Listener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unregister(registrationHandle?: object | null): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    cookie?: string
    identity?: Polkit.Identity
}
export class Session {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PolkitAgent-1.0.PolkitAgent.Session */
    cancel(): void
    initiate(): void
    response(response: string): void
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Signals of PolkitAgent-1.0.PolkitAgent.Session */
    connect(sigName: "completed", callback: (($obj: Session, gainedAuthorization: boolean) => void)): number
    on(sigName: "completed", callback: (gainedAuthorization: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: (gainedAuthorization: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: (gainedAuthorization: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "completed", gainedAuthorization: boolean): void
    connect(sigName: "request", callback: (($obj: Session, request: string, echoOn: boolean) => void)): number
    on(sigName: "request", callback: (request: string, echoOn: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request", callback: (request: string, echoOn: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request", callback: (request: string, echoOn: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "request", request: string, echoOn: boolean): void
    connect(sigName: "show-error", callback: (($obj: Session, text: string) => void)): number
    on(sigName: "show-error", callback: (text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-error", callback: (text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-error", callback: (text: string) => void): NodeJS.EventEmitter
    emit(sigName: "show-error", text: string): void
    connect(sigName: "show-info", callback: (($obj: Session, text: string) => void)): number
    on(sigName: "show-info", callback: (text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-info", callback: (text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-info", callback: (text: string) => void): NodeJS.EventEmitter
    emit(sigName: "show-info", text: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(identity: Polkit.Identity, cookie: string): Session
    static $gtype: GObject.Type
}
export interface TextListener_ConstructProps extends Listener_ConstructProps {
}
export class TextListener {
    /* Fields of PolkitAgent-1.0.PolkitAgent.Listener */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PolkitAgent-1.0.PolkitAgent.Listener */
    initiateAuthentication(actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiateAuthenticationFinish(res: Gio.AsyncResult): boolean
    register(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, cancellable?: Gio.Cancellable | null): object | null
    registerWithOptions(flags: RegisterFlags, subject: Polkit.Subject, objectPath: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): object | null
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
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextListener, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TextListener_ConstructProps)
    _init (config?: TextListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): TextListener
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class ListenerClass {
    /* Fields of PolkitAgent-1.0.PolkitAgent.ListenerClass */
    parentClass: GObject.ObjectClass
    initiateAuthentication: (listener: Listener, actionId: string, message: string, iconName: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    initiateAuthenticationFinish: (listener: Listener, res: Gio.AsyncResult) => boolean
    static name: string
}
export abstract class SessionClass {
    static name: string
}
}