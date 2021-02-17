/**
 * Unique-3.0
 */

import type * as Gjs from './Gjs';
import type * as xlib from './xlib-2.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gtk from './Gtk-3.0';
import type * as Gdk from './Gdk-3.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';

export enum Command {
    INVALID,
    ACTIVATE,
    NEW,
    OPEN,
    CLOSE,
}
export enum Response {
    INVALID,
    OK,
    CANCEL,
    FAIL,
    PASSTHROUGH,
}
export interface App_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    screen?: Gdk.Screen
    startup_id?: string
}
export class App {
    /* Properties of Unique.App */
    readonly is_running: boolean
    screen: Gdk.Screen
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unique.App */
    add_command(command_name: string, command_id: number): void
    send_message(command_id: number, message_data?: MessageData | null): Response
    watch_window(window: Gtk.Window): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Unique.App */
    vfunc_message_received(command: number, message_data: MessageData, time_: number): Response
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unique.App */
    connect(sigName: "message-received", callback: (($obj: App, command: number, message_data: MessageData, time_: number) => Response)): number
    connect_after(sigName: "message-received", callback: (($obj: App, command: number, message_data: MessageData, time_: number) => Response)): number
    emit(sigName: "message-received", command: number, message_data: MessageData, time_: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, startup_id?: string | null): App
    static $gtype: GObject.Type
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
export class Backend {
    /* Fields of Unique.Backend */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unique.Backend */
    get_name(): string
    get_screen(): Gdk.Screen
    get_startup_id(): string
    get_workspace(): number
    request_name(): boolean
    send_message(command_id: number, message_data: MessageData, time_: number): Response
    set_name(name: string): void
    set_screen(screen: Gdk.Screen): void
    set_startup_id(startup_id: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Unique.Backend */
    vfunc_request_name(): boolean
    vfunc_send_message(command_id: number, message_data: MessageData, time_: number): Response
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(): Backend
    static $gtype: GObject.Type
}
export abstract class AppClass {
    /* Fields of Unique.AppClass */
    message_received: (app: App, command: number, message_data: MessageData, time_: number) => Response
    static name: string
}
export class AppPrivate {
    static name: string
}
export abstract class BackendClass {
    /* Fields of Unique.BackendClass */
    request_name: (backend: Backend) => boolean
    send_message: (backend: Backend, command_id: number, message_data: MessageData, time_: number) => Response
    static name: string
}
export class MessageData {
    /* Methods of Unique.MessageData */
    copy(): MessageData
    free(): void
    get(): [ /* returnType */ number, /* length */ number ]
    get_filename(): string
    get_screen(): Gdk.Screen
    get_startup_id(): string
    get_text(): string
    get_uris(): string[]
    get_workspace(): number
    set(data: number | null, length: number): void
    set_filename(filename: string): void
    set_text(str: string, length: number): boolean
    set_uris(uris: string[]): boolean
    static name: string
    static new(): MessageData
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageData
}