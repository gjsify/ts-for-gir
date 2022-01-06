/**
 * Unique-3.0
 */

import "node"
import type { xlib } from './xlib-2.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gtk } from './Gtk-3.0';
import type { Gdk } from './Gdk-3.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';

declare namespace Unique {

enum Command {
    INVALID,
    ACTIVATE,
    NEW,
    OPEN,
    CLOSE,
}
enum Response {
    INVALID,
    OK,
    CANCEL,
    FAIL,
    PASSTHROUGH,
}
export interface App_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    screen?: Gdk.Screen
    startupId?: string
}
class App {
    /* Properties of Unique-3.0.Unique.App */
    readonly isRunning: boolean
    screen: Gdk.Screen
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unique-3.0.Unique.App */
    addCommand(commandName: string, commandId: number): void
    sendMessage(commandId: number, messageData?: MessageData | null): Response
    watchWindow(window: Gtk.Window): void
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
    /* Signals of Unique-3.0.Unique.App */
    connect(sigName: "message-received", callback: (($obj: App, command: number, messageData: MessageData, time: number) => Response)): number
    on(sigName: "message-received", callback: (command: number, messageData: MessageData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-received", callback: (command: number, messageData: MessageData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-received", callback: (command: number, messageData: MessageData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "message-received", command: number, messageData: MessageData, time: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, startupId?: string | null): App
    static $gtype: GObject.Type
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
class Backend {
    /* Fields of Unique-3.0.Unique.Backend */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unique-3.0.Unique.Backend */
    getName(): string
    getScreen(): Gdk.Screen
    getStartupId(): string
    getWorkspace(): number
    requestName(): boolean
    sendMessage(commandId: number, messageData: MessageData, time: number): Response
    setName(name: string): void
    setScreen(screen: Gdk.Screen): void
    setStartupId(startupId: string): void
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
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(): Backend
    static $gtype: GObject.Type
}
abstract class AppClass {
    /* Fields of Unique-3.0.Unique.AppClass */
    messageReceived: (app: App, command: number, messageData: MessageData, time: number) => Response
    static name: string
}
class AppPrivate {
    static name: string
}
abstract class BackendClass {
    /* Fields of Unique-3.0.Unique.BackendClass */
    requestName: (backend: Backend) => boolean
    sendMessage: (backend: Backend, commandId: number, messageData: MessageData, time: number) => Response
    static name: string
}
class MessageData {
    /* Methods of Unique-3.0.Unique.MessageData */
    copy(): MessageData
    free(): void
    get(): { returnType: number, length: number }
    getFilename(): string
    getScreen(): Gdk.Screen
    getStartupId(): string
    getText(): string
    getUris(): string[]
    getWorkspace(): number
    set(data: number | null, length: number): void
    setFilename(filename: string): void
    setText(str: string, length: number): boolean
    setUris(uris: string[]): boolean
    static name: string
    static new(): MessageData
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageData
}
}
export default Unique