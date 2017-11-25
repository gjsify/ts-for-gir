/**
 * Notify-0.7
 */

import * as Gjs from './Gjs'
import * as GdkPixbuf from './GdkPixbuf'
import * as Gio from './Gio'
import * as GObject from './GObject'
import * as GLib from './GLib'
import * as GModule from './GModule'
export enum Urgency {
    LOW,
    NORMAL,
    CRITICAL,
}
export const EXPIRES_DEFAULT:number
export const EXPIRES_NEVER:number
export const VERSION_MAJOR:number
export const VERSION_MICRO:number
export const VERSION_MINOR:number
export function get_app_name(): string
export function get_server_caps(): GLib.List
export function get_server_info(): [ /* returnType */ boolean, /* ret_name */ string | null, /* ret_vendor */ string | null, /* ret_version */ string | null, /* ret_spec_version */ string | null ]
export function init(app_name: string): boolean
export function is_initted(): boolean
export function set_app_name(app_name: string): void
export function uninit(): void
export interface ActionCallback {
    (notification: Notification, action: string, user_data: object | null): void
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
    app_name?:string
    body?:string
    icon_name?:string
    id?:number
    summary?:string
}
export class Notification {
    /* Properties of Notify.Notification */
    app_name:string
    body:string
    readonly closed_reason:number
    icon_name:string
    id:number
    summary:string
    /* Fields of Notify.Notification */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Notify.Notification */
    add_action(action: string, label: string, callback: ActionCallback, user_data: object | null, free_func: GLib.DestroyNotify): void
    clear_actions(): void
    clear_hints(): void
    close(): boolean
    get_closed_reason(): number
    set_app_name(app_name: string): void
    set_category(category: string): void
    set_hint(key: string, value: GLib.Variant | null): void
    set_hint_byte(key: string, value: number): void
    set_hint_byte_array(key: string, value: Gjs.byteArray.ByteArray): void
    set_hint_double(key: string, value: number): void
    set_hint_int32(key: string, value: number): void
    set_hint_string(key: string, value: string): void
    set_hint_uint32(key: string, value: number): void
    set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void
    set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    set_timeout(timeout: number): void
    set_urgency(urgency: Urgency): void
    show(): boolean
    update(summary: string, body: string | null, icon: string | null): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
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
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Notify.Notification */
    vfunc_closed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Notify.Notification */
    connect(sigName: "closed", callback: ((obj: Notification) => void))
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::app-name", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::body", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed-reason", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::id", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::summary", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    static name: string
    static new (config?: Notification_ConstructProps): Notification
    static new(summary: string, body: string | null, icon: string | null): Notification
}
export class NotificationPrivate {
    static name: string
}