/**
 * SocialWebClient-0.25
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export interface ClientGetServicesCallback {
    (client: Client, services: string[]): void
}
export interface ClientIsOnlineCallback {
    (client: Client, online: boolean): void
}
export interface ClientServiceContactsQueryOpenViewCallback {
    (query: ClientService, contact_view?: ClientContactView | null): void
}
export interface ClientServiceGetCapabilitiesCallback {
    (service: ClientService, caps: string[], error: GLib.Error): void
}
export interface ClientServiceQueryOpenViewCallback {
    (query: ClientService, item_view?: ClientItemView | null): void
}
export interface ClientServiceUpdateStatusCallback {
    (service: ClientService, error: GLib.Error): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Fields of SocialWebClient-0.25.SocialWebClient.Client */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.Client */
    get_service(service_name: string): ClientService
    get_services(cb: ClientGetServicesCallback): void
    is_online(cb: ClientIsOnlineCallback): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SocialWebClient-0.25.SocialWebClient.Client */
    connect(sigName: "online-changed", callback: (($obj: Client, object: boolean) => void)): number
    connect_after(sigName: "online-changed", callback: (($obj: Client, object: boolean) => void)): number
    emit(sigName: "online-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static $gtype: GObject.Type
}
export interface ClientContactView_ConstructProps extends GObject.Object_ConstructProps {
    object_path?: string
}
export class ClientContactView {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientContactView */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientContactView */
    close(): void
    refresh(): void
    start(): void
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SocialWebClient-0.25.SocialWebClient.ClientContactView */
    connect(sigName: "contacts-added", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    connect_after(sigName: "contacts-added", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    emit(sigName: "contacts-added", contacts: Contact[]): void
    connect(sigName: "contacts-changed", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    connect_after(sigName: "contacts-changed", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    emit(sigName: "contacts-changed", contacts: Contact[]): void
    connect(sigName: "contacts-removed", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    connect_after(sigName: "contacts-removed", callback: (($obj: ClientContactView, contacts: Contact[]) => void)): number
    emit(sigName: "contacts-removed", contacts: Contact[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientContactView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientContactView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientContactView_ConstructProps)
    _init (config?: ClientContactView_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientItemView_ConstructProps extends GObject.Object_ConstructProps {
    object_path?: string
}
export class ClientItemView {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientItemView */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientItemView */
    close(): void
    refresh(): void
    start(): void
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SocialWebClient-0.25.SocialWebClient.ClientItemView */
    connect(sigName: "items-added", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    connect_after(sigName: "items-added", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    emit(sigName: "items-added", items: Item[]): void
    connect(sigName: "items-changed", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    emit(sigName: "items-changed", items: Item[]): void
    connect(sigName: "items-removed", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    connect_after(sigName: "items-removed", callback: (($obj: ClientItemView, items: Item[]) => void)): number
    emit(sigName: "items-removed", items: Item[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientItemView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientItemView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientItemView_ConstructProps)
    _init (config?: ClientItemView_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientLastfm_ConstructProps extends GObject.Object_ConstructProps {
}
export class ClientLastfm {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientLastfm */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientLastfm */
    now_playing(artist: string, album: string, track: string, length: number, tracknumber: number, musicbrainz_id: string): void
    submit_track(artist: string, album: string, track: string, time: number, source: string, rating: string, length: number, tracknumber: number, musicbrainz_id: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientLastfm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientLastfm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientLastfm_ConstructProps)
    _init (config?: ClientLastfm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientLastfm
    static $gtype: GObject.Type
}
export interface ClientService_ConstructProps extends GObject.Object_ConstructProps {
}
export class ClientService {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientService */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of SocialWebClient-0.25.SocialWebClient.ClientService */
    banishable_hide_item(uid: string): void
    contacts_query_open_view(query: string, params: GLib.HashTable, cb: ClientServiceContactsQueryOpenViewCallback): void
    credentials_updated(): void
    get_display_name(): string
    get_dynamic_capabilities(cb: ClientServiceGetCapabilitiesCallback): void
    get_name(): string
    get_static_capabilities(cb: ClientServiceGetCapabilitiesCallback): void
    query_open_view(query: string, params: GLib.HashTable, cb: ClientServiceQueryOpenViewCallback): void
    request_avatar(): void
    update_status(cb: ClientServiceUpdateStatusCallback, status_msg: string): void
    update_status_with_fields(cb: ClientServiceUpdateStatusCallback, status_msg: string, fields: GLib.HashTable): void
    upload_photo_finish(res: Gio.AsyncResult): boolean
    upload_video_finish(res: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of SocialWebClient-0.25.SocialWebClient.ClientService */
    vfunc_avatar_retrieved(path: string): void
    vfunc_capabilities_changed(caps: string): void
    vfunc_status_updated(success: boolean): void
    vfunc_user_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SocialWebClient-0.25.SocialWebClient.ClientService */
    connect(sigName: "avatar-retrieved", callback: (($obj: ClientService, object: string) => void)): number
    connect_after(sigName: "avatar-retrieved", callback: (($obj: ClientService, object: string) => void)): number
    emit(sigName: "avatar-retrieved", object: string): void
    connect(sigName: "capabilities-changed", callback: (($obj: ClientService, object: string[]) => void)): number
    connect_after(sigName: "capabilities-changed", callback: (($obj: ClientService, object: string[]) => void)): number
    emit(sigName: "capabilities-changed", object: string[]): void
    connect(sigName: "status-updated", callback: (($obj: ClientService, object: boolean) => void)): number
    connect_after(sigName: "status-updated", callback: (($obj: ClientService, object: boolean) => void)): number
    emit(sigName: "status-updated", object: boolean): void
    connect(sigName: "user-changed", callback: (($obj: ClientService) => void)): number
    connect_after(sigName: "user-changed", callback: (($obj: ClientService) => void)): number
    emit(sigName: "user-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientService_ConstructProps)
    _init (config?: ClientService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static has_cap(caps: string[], cap: string): boolean
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ClientContactViewClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ClientItemViewClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ClientLastfmClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ClientServiceClass {
    /* Fields of SocialWebClient-0.25.SocialWebClient.ClientServiceClass */
    parent_class: GObject.ObjectClass
    capabilities_changed: (service: ClientService, caps: string) => void
    user_changed: (service: ClientService) => void
    avatar_retrieved: (service: ClientService, path: string) => void
    status_updated: (service: ClientService, success: boolean) => void
    static name: string
}
export class Contact {
    /* Fields of SocialWebClient-0.25.SocialWebClient.Contact */
    refcount: number
    service: string
    uuid: string
    date: GLib.TimeVal
    props: GLib.HashTable
    /* Methods of SocialWebClient-0.25.SocialWebClient.Contact */
    free(): void
    get_value(key: string): string
    get_value_all(key: string): string[]
    has_key(key: string): boolean
    is_from_cache(): boolean
    ref(): Contact
    unref(): void
    static name: string
    static new(): Contact
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Contact
}
export class Item {
    /* Fields of SocialWebClient-0.25.SocialWebClient.Item */
    refcount: number
    service: string
    uuid: string
    date: GLib.TimeVal
    props: GLib.HashTable
    /* Methods of SocialWebClient-0.25.SocialWebClient.Item */
    free(): void
    get_value(key: string): string
    has_key(key: string): boolean
    is_from_cache(): boolean
    ref(): Item
    unref(): void
    static name: string
    static new(): Item
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Item
}