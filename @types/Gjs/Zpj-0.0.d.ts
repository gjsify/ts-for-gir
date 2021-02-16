/**
 * Zpj-0.0
 */

import type * as Gjs from './Gjs';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Rest from './Rest-0.7';
import type * as Json from './Json-1.0';

export enum Error {
    REQUEST_URL_INVALID,
    UNKNOWN,
}
export enum SkydriveEntryType {
    FILE,
    FOLDER,
    PHOTO,
    VIDEO,
    INVALID,
}
export enum ThumbnailSize {
    SMALL,
    NORMAL,
}
export const SKYDRIVE_FOLDER_MY_DOCUMENTS: string
export const SKYDRIVE_FOLDER_MY_PHOTOS: string
export const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string
export const SKYDRIVE_FOLDER_SKYDRIVE: string
export function error_quark(): GLib.Quark
export class Authorizer {
    /* Methods of Zpj.Authorizer */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    process_message(domain: AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of Zpj.Authorizer */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    vfunc_process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    vfunc_process_message(domain: AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    static name: string
}
export interface AuthorizationDomain_ConstructProps extends GObject.Object_ConstructProps {
    scope?: string
    service_name?: string
}
export class AuthorizationDomain {
    /* Fields of Zpj.AuthorizationDomain */
    parent_instance: GObject.Object
    priv: AuthorizationDomainPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zpj.AuthorizationDomain */
    get_scope(): string
    get_service_name(): string
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthorizationDomain_ConstructProps)
    _init (config?: AuthorizationDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
}
export class GoaAuthorizer {
    /* Fields of Zpj.GoaAuthorizer */
    parent_instance: GObject.Object
    priv: GoaAuthorizerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Zpj.Authorizer */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    process_message(domain: AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of Zpj.GoaAuthorizer */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    vfunc_process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    vfunc_process_message(domain: AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Skydrive_ConstructProps extends GObject.Object_ConstructProps {
    authorizer?: Authorizer
}
export class Skydrive {
    /* Properties of Zpj.Skydrive */
    authorizer: Authorizer
    /* Fields of Zpj.Skydrive */
    parent_instance: GObject.Object
    priv: SkydrivePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zpj.Skydrive */
    create_folder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean
    create_folder_from_name(name: string, parent_id: string, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_id(entry_id: string, cancellable?: Gio.Cancellable | null): boolean
    download_file_id_to_path(file_id: string, path: string, cancellable?: Gio.Cancellable | null): boolean
    download_file_id_to_stream(file_id: string, cancellable?: Gio.Cancellable | null): Gio.InputStream
    download_file_id_to_stream_async(file_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    download_file_id_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream
    download_file_to_path(file: SkydriveFile, path: string, cancellable?: Gio.Cancellable | null): boolean
    download_file_to_stream(file: SkydriveFile, cancellable?: Gio.Cancellable | null): Gio.InputStream
    download_file_to_stream_async(file: SkydriveFile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    download_file_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream
    get_authorizer(): Authorizer
    list_folder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): SkydriveEntry[]
    list_folder_id(folder_id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry[]
    list_folder_id_async(folder_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_folder_id_finish(res: Gio.AsyncResult): SkydriveEntry[]
    query_info_from_id(id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry
    query_info_from_id_async(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_info_from_id_finish(res: Gio.AsyncResult): SkydriveEntry
    set_authorizer(authorizer: Authorizer): void
    thumbnail_file_id_to_stream(file_id: string, size: ThumbnailSize, cancellable?: Gio.Cancellable | null): Gio.InputStream
    upload_path_to_folder(path: string, folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean
    upload_path_to_folder_id(path: string, folder_id: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Skydrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Skydrive_ConstructProps)
    _init (config?: Skydrive_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer: Authorizer): Skydrive
    static $gtype: GObject.Type
}
export interface SkydriveEntry_ConstructProps extends GObject.Object_ConstructProps {
    json?: Json.Node
}
export class SkydriveEntry {
    /* Properties of Zpj.SkydriveEntry */
    readonly created_time: GLib.DateTime
    readonly description: string
    readonly from_id: string
    readonly from_name: string
    readonly id: string
    readonly name: string
    readonly parent_id: string
    readonly type: SkydriveEntryType
    readonly updated_time: GLib.DateTime
    /* Fields of Zpj.SkydriveEntry */
    parent_instance: GObject.Object
    priv: SkydriveEntryPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zpj.SkydriveEntry */
    get_created_time(): GLib.DateTime
    get_description(): string
    get_from_id(): string
    get_from_name(): string
    get_id(): string
    get_name(): string
    get_parent_id(): string
    get_updated_time(): GLib.DateTime
    is_folder(): boolean
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
    /* Virtual methods of Zpj.SkydriveEntry */
    vfunc_parse_json_node(node: Json.Node): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SkydriveEntry_ConstructProps)
    _init (config?: SkydriveEntry_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SkydriveFile_ConstructProps extends SkydriveEntry_ConstructProps {
}
export class SkydriveFile {
    /* Properties of Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj.SkydriveEntry */
    readonly created_time: GLib.DateTime
    readonly description: string
    readonly from_id: string
    readonly from_name: string
    readonly id: string
    readonly name: string
    readonly parent_id: string
    readonly type: SkydriveEntryType
    readonly updated_time: GLib.DateTime
    /* Fields of Zpj.SkydriveFile */
    parent_instance: SkydriveEntry
    priv: SkydriveFilePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zpj.SkydriveFile */
    get_size(): number
    /* Methods of Zpj.SkydriveEntry */
    get_created_time(): GLib.DateTime
    get_description(): string
    get_from_id(): string
    get_from_name(): string
    get_id(): string
    get_name(): string
    get_parent_id(): string
    get_updated_time(): GLib.DateTime
    is_folder(): boolean
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
    /* Virtual methods of Zpj.SkydriveEntry */
    vfunc_parse_json_node(node: Json.Node): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SkydriveFile_ConstructProps)
    _init (config?: SkydriveFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveFile
    static $gtype: GObject.Type
}
export interface SkydriveFolder_ConstructProps extends SkydriveEntry_ConstructProps {
}
export class SkydriveFolder {
    /* Properties of Zpj.SkydriveEntry */
    readonly created_time: GLib.DateTime
    readonly description: string
    readonly from_id: string
    readonly from_name: string
    readonly id: string
    readonly name: string
    readonly parent_id: string
    readonly type: SkydriveEntryType
    readonly updated_time: GLib.DateTime
    /* Fields of Zpj.SkydriveFolder */
    parent_instance: SkydriveEntry
    /* Fields of Zpj.SkydriveEntry */
    priv: SkydriveEntryPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zpj.SkydriveEntry */
    get_created_time(): GLib.DateTime
    get_description(): string
    get_from_id(): string
    get_from_name(): string
    get_id(): string
    get_name(): string
    get_parent_id(): string
    get_updated_time(): GLib.DateTime
    is_folder(): boolean
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
    /* Virtual methods of Zpj.SkydriveEntry */
    vfunc_parse_json_node(node: Json.Node): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SkydriveFolder_ConstructProps)
    _init (config?: SkydriveFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveFolder
    static $gtype: GObject.Type
}
export interface SkydrivePhoto_ConstructProps extends SkydriveFile_ConstructProps {
}
export class SkydrivePhoto {
    /* Properties of Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj.SkydriveEntry */
    readonly created_time: GLib.DateTime
    readonly description: string
    readonly from_id: string
    readonly from_name: string
    readonly id: string
    readonly name: string
    readonly parent_id: string
    readonly type: SkydriveEntryType
    readonly updated_time: GLib.DateTime
    /* Fields of Zpj.SkydrivePhoto */
    parent_instance: SkydriveFile
    /* Fields of Zpj.SkydriveFile */
    priv: SkydriveFilePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zpj.SkydriveFile */
    get_size(): number
    /* Methods of Zpj.SkydriveEntry */
    get_created_time(): GLib.DateTime
    get_description(): string
    get_from_id(): string
    get_from_name(): string
    get_id(): string
    get_name(): string
    get_parent_id(): string
    get_updated_time(): GLib.DateTime
    is_folder(): boolean
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
    /* Virtual methods of Zpj.SkydriveEntry */
    vfunc_parse_json_node(node: Json.Node): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydrivePhoto, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SkydrivePhoto_ConstructProps)
    _init (config?: SkydrivePhoto_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydrivePhoto
    static $gtype: GObject.Type
}
export interface SkydriveVideo_ConstructProps extends SkydriveFile_ConstructProps {
}
export class SkydriveVideo {
    /* Properties of Zpj.SkydriveVideo */
    readonly bitrate: number
    readonly duration: number
    readonly height: number
    readonly width: number
    /* Properties of Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj.SkydriveEntry */
    readonly created_time: GLib.DateTime
    readonly description: string
    readonly from_id: string
    readonly from_name: string
    readonly id: string
    readonly name: string
    readonly parent_id: string
    readonly type: SkydriveEntryType
    readonly updated_time: GLib.DateTime
    /* Fields of Zpj.SkydriveVideo */
    parent_instance: SkydriveFile
    priv: SkydriveVideoPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Zpj.SkydriveVideo */
    get_bitrate(): number
    get_duration(): number
    get_height(): number
    get_width(): number
    /* Methods of Zpj.SkydriveFile */
    get_size(): number
    /* Methods of Zpj.SkydriveEntry */
    get_created_time(): GLib.DateTime
    get_description(): string
    get_from_id(): string
    get_from_name(): string
    get_id(): string
    get_name(): string
    get_parent_id(): string
    get_updated_time(): GLib.DateTime
    is_folder(): boolean
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
    /* Virtual methods of Zpj.SkydriveEntry */
    vfunc_parse_json_node(node: Json.Node): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bitrate", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from-name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: SkydriveVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SkydriveVideo_ConstructProps)
    _init (config?: SkydriveVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveVideo
    static $gtype: GObject.Type
}
export abstract class AuthorizationDomainClass {
    /* Fields of Zpj.AuthorizationDomainClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AuthorizationDomainPrivate {
    static name: string
}
export abstract class AuthorizerInterface {
    /* Fields of Zpj.AuthorizerInterface */
    parent_iface: GObject.TypeInterface
    is_authorized_for_domain: (iface: Authorizer, domain: AuthorizationDomain) => boolean
    process_call: (iface: Authorizer, domain: AuthorizationDomain | null, call: Rest.ProxyCall) => void
    process_message: (iface: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    refresh_authorization: (iface: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export abstract class GoaAuthorizerClass {
    /* Fields of Zpj.GoaAuthorizerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GoaAuthorizerPrivate {
    static name: string
}
export abstract class SkydriveClass {
    /* Fields of Zpj.SkydriveClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SkydriveEntryClass {
    /* Fields of Zpj.SkydriveEntryClass */
    parent_class: GObject.ObjectClass
    parse_json_node: (self: SkydriveEntry, node: Json.Node) => void
    static name: string
}
export class SkydriveEntryPrivate {
    static name: string
}
export abstract class SkydriveFileClass {
    /* Fields of Zpj.SkydriveFileClass */
    parent_class: SkydriveEntryClass
    static name: string
}
export class SkydriveFilePrivate {
    static name: string
}
export abstract class SkydriveFolderClass {
    /* Fields of Zpj.SkydriveFolderClass */
    parent_class: SkydriveEntryClass
    static name: string
}
export abstract class SkydrivePhotoClass {
    /* Fields of Zpj.SkydrivePhotoClass */
    parent_class: SkydriveFileClass
    static name: string
}
export class SkydrivePrivate {
    static name: string
}
export abstract class SkydriveVideoClass {
    /* Fields of Zpj.SkydriveVideoClass */
    parent_class: SkydriveFileClass
    static name: string
}
export class SkydriveVideoPrivate {
    static name: string
}