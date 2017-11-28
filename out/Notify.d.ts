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
export function get_server_caps(): string[]
export function get_server_info(): [ /* returnType */ boolean, /* ret_name */ string | null, /* ret_vendor */ string | null, /* ret_version */ string | null, /* ret_spec_version */ string | null ]
export function init(app_name: string): boolean
export function is_initted(): boolean
export function set_app_name(app_name: string): void
export function uninit(): void
export interface ActionCallback {
    (notification: Notification, action: string): void
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
    app_name?:string
    body?:string
    icon_name?:string
    id?:number
    summary?:string
}
export class Notification extends GObject.Object {
    /* Properties of Notify.Notification */
    app_name:string
    body:string
    readonly closed_reason:number
    icon_name:string
    id:number
    summary:string
    /* Fields of Notify.Notification */
    /* Methods of Notify.Notification */
    add_action(action: string, label: string, callback: ActionCallback, free_func: GLib.DestroyNotify): void
    clear_actions(): void
    clear_hints(): void
    close(): boolean
    get_closed_reason(): number
    set_app_name(app_name: string): void
    set_category(category: string): void
    set_hint(key: string, value?: GLib.Variant | null): void
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
    update(summary: string, body?: string | null, icon?: string | null): boolean
    /* Virtual methods of Notify.Notification */
    vfunc_closed?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Notify.Notification */
    connect(sigName: "closed", callback: ((obj: Notification) => void))
    connect(sigName: "notify::app-name", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::body", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::closed-reason", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::icon-name", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::id", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: "notify::summary", callback: ((obj: Notification, pspec: GObject.ParamSpec) => void))
    connect(sigName: string, callback: any)
    static name: string
    static new (config?: Notification_ConstructProps): Notification
    constructor (config?: Notification_ConstructProps)
}
export class NotificationPrivate {
    static name: string
}