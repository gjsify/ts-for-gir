/**
 * EBackend-1.2
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as EDataServer from './EDataServer-1.2';
import type * as GData from './GData-0.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';
import type * as Camel from './Camel-1.2';

export enum AuthenticationSessionResult {
    ERROR,
    SUCCESS,
    DISMISSED,
}
export enum CacheDeletedFlag {
    EXCLUDE_DELETED,
    INCLUDE_DELETED,
}
export enum CacheError {
    ENGINE,
    CONSTRAINT,
    NOT_FOUND,
    INVALID_QUERY,
    UNSUPPORTED_FIELD,
    UNSUPPORTED_QUERY,
    END_OF_LIST,
    LOAD,
}
export enum CacheLockType {
    READ,
    WRITE,
}
export enum CacheOfflineFlag {
    OFFLINE_UNKNOWN,
    IS_ONLINE,
    IS_OFFLINE,
}
export enum CacheUnlockAction {
    NONE,
    COMMIT,
    ROLLBACK,
}
export enum DBusServerExitCode {
    NONE,
    NORMAL,
    RELOAD,
}
export enum OfflineState {
    UNKNOWN,
    SYNCED,
    LOCALLY_CREATED,
    LOCALLY_MODIFIED,
    LOCALLY_DELETED,
}
export enum CollectionBackendParts {
    NONE,
    CALENDAR,
    CONTACTS,
    MAIL,
    ANY,
}
export enum SourcePermissionFlags {
    NONE,
    WRITABLE,
    REMOVABLE,
}
export const CACHE_COLUMN_OBJECT: string
export const CACHE_COLUMN_REVISION: string
export const CACHE_COLUMN_STATE: string
export const CACHE_COLUMN_UID: string
export const CACHE_TABLE_KEYS: string
export const CACHE_TABLE_OBJECTS: string
export const EDS_REGISTRY_MODULES: string
export const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string
export const USER_PROMPTER_SERVER_OBJECT_PATH: string
export function cache_column_info_free(info?: object | null): void
export function cache_offline_change_free(change?: object | null): void
export function sqlite3_vfs_init(): void
export interface CacheForeachFunc {
    (cache: Cache, uid: string, revision: string, object: string, offline_state: OfflineState, column_names: string[], column_values: string[]): boolean
}
export interface CacheSelectFunc {
    (cache: Cache, column_names: string[], column_values: string[]): boolean
}
export interface CacheUpdateFunc {
    (cache: Cache, uid: string, revision: string, object: string, offline_state: OfflineState, column_names: string[], column_values: string[]): boolean
}
export class OAuth2Support {
    /* Methods of EBackend-1.2.EBackend.OAuth2Support */
    get_access_token(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_access_token_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    /* Virtual methods of EBackend-1.2.EBackend.OAuth2Support */
    vfunc_get_access_token(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_get_access_token_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    static name: string
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
    connectable?: Gio.SocketConnectable
    online?: boolean
    source?: EDataServer.Source
}
export class Backend {
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.Backend */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentials_required_finish(result: Gio.AsyncResult): boolean
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    ensure_source_status_connected(): void
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    get_online(): boolean
    get_source(): EDataServer.Source
    get_user_prompter(): object | null
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    prepare_shutdown(): void
    ref_connectable(): Gio.SocketConnectable | null
    ref_main_context(): GLib.MainContext
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    set_connectable(connectable: Gio.SocketConnectable): void
    set_online(online: boolean): void
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connectable", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackendFactory_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class BackendFactory {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    get_hash_key(): string
    get_module_filename(): string
    new_backend(source: EDataServer.Source): Backend
    share_subprocess(): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend-1.2.EBackend.BackendFactory */
    vfunc_get_hash_key(): string
    vfunc_new_backend(source: EDataServer.Source): Backend
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackendFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackendFactory_ConstructProps)
    _init (config?: BackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Cache_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cache {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.Cache */
    change_revision(): void
    clear_offline_changes(cancellable?: Gio.Cancellable | null): boolean
    contains(uid: string, deleted_flag: CacheDeletedFlag): boolean
    copy_missing_to_column_values(column_names: string[], column_values: string[], other_columns: CacheColumnValues): /* other_columns */ CacheColumnValues
    dup_key(key: string): string
    dup_revision(): string
    erase(): void
    foreach(deleted_flag: CacheDeletedFlag, where_clause: string | null, func: CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    foreach_update(deleted_flag: CacheDeletedFlag, where_clause: string | null, func: CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    freeze_revision_change(): void
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* out_revision */ string | null, /* out_other_columns */ CacheColumnValues | null ]
    get_count(deleted_flag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    get_filename(): string
    get_key_int(key: string): number
    get_object_include_deleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* out_revision */ string | null, /* out_other_columns */ CacheColumnValues | null ]
    get_objects(deleted_flag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects */ string[], /* out_revisions */ string[] | null ]
    get_offline_changes(cancellable?: Gio.Cancellable | null): CacheOfflineChange[]
    get_offline_state(uid: string, cancellable?: Gio.Cancellable | null): OfflineState
    get_sqlitedb(): object | null
    get_uids(deleted_flag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[], /* out_revisions */ string[] | null ]
    get_version(): number
    initialize_sync(filename: string, other_columns?: CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    is_revision_change_frozen(): boolean
    lock(lock_type: CacheLockType): void
    put(uid: string, revision: string | null, object: string, other_columns: CacheColumnValues | null, offline_flag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove(uid: string, offline_flag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove_all(cancellable?: Gio.Cancellable | null): boolean
    set_key(key: string, value?: string | null): boolean
    set_key_int(key: string, value: number): boolean
    set_offline_state(uid: string, state: OfflineState, cancellable?: Gio.Cancellable | null): boolean
    set_revision(revision?: string | null): void
    set_version(version: number): void
    sqlite_exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean
    sqlite_maybe_vacuum(cancellable?: Gio.Cancellable | null): boolean
    sqlite_select(sql_stmt: string, func: CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    thaw_revision_change(): void
    unlock(action: CacheUnlockAction): void
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
    /* Virtual methods of EBackend-1.2.EBackend.Cache */
    vfunc_before_put(uid: string, revision: string, object: string, other_columns: CacheColumnValues, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_before_remove(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_clear_offline_changes_locked(cancellable?: Gio.Cancellable | null): boolean
    vfunc_erase(): void
    vfunc_put_locked(uid: string, revision: string, object: string, other_columns: CacheColumnValues, offline_state: OfflineState, is_replace: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove_locked(uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_revision_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.Cache */
    connect(sigName: "before-put", callback: (($obj: Cache, object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    connect_after(sigName: "before-put", callback: (($obj: Cache, object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    connect(sigName: "before-remove", callback: (($obj: Cache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    connect_after(sigName: "before-remove", callback: (($obj: Cache, object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    connect(sigName: "revision-changed", callback: (($obj: Cache) => void)): number
    connect_after(sigName: "revision-changed", callback: (($obj: Cache) => void)): number
    emit(sigName: "revision-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static sqlite_stmt_free(stmt: string): void
    static $gtype: GObject.Type
}
export interface CacheReaper_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class CacheReaper {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.CacheReaper */
    add_private_directory(name: string): void
    remove_private_directory(name: string): void
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CacheReaper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CacheReaper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CacheReaper_ConstructProps)
    _init (config?: CacheReaper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static type_register(type_module: GObject.TypeModule): void
    static $gtype: GObject.Type
}
export interface CollectionBackend_ConstructProps extends Backend_ConstructProps {
    server?: SourceRegistryServer
}
export class CollectionBackend {
    /* Properties of EBackend-1.2.EBackend.CollectionBackend */
    readonly proxy_resolver: Gio.ProxyResolver
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.CollectionBackend */
    authenticate_children(credentials: EDataServer.NamedParameters): void
    claim_all_resources(): EDataServer.Source[]
    create_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_resource_finish(result: Gio.AsyncResult): boolean
    create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    delete_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_resource_finish(result: Gio.AsyncResult): boolean
    delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    dup_resource_id(child_source: EDataServer.Source): string
    freeze_populate(): boolean
    get_cache_dir(): string
    get_part_enabled(parts: CollectionBackendParts): boolean
    get_populate_frozen(): boolean
    is_new_source(source: EDataServer.Source): boolean
    list_calendar_sources(): EDataServer.Source[]
    list_contacts_sources(): EDataServer.Source[]
    list_mail_sources(): EDataServer.Source[]
    new_child(resource_id: string): EDataServer.Source
    ref_proxy_resolver(): Gio.ProxyResolver | null
    ref_server(): SourceRegistryServer
    schedule_populate(): void
    thaw_populate(): void
    /* Methods of EBackend-1.2.EBackend.Backend */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentials_required_finish(result: Gio.AsyncResult): boolean
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    ensure_source_status_connected(): void
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    get_online(): boolean
    get_source(): EDataServer.Source
    get_user_prompter(): object | null
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    prepare_shutdown(): void
    ref_connectable(): Gio.SocketConnectable | null
    ref_main_context(): GLib.MainContext
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    set_connectable(connectable: Gio.SocketConnectable): void
    set_online(online: boolean): void
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EBackend-1.2.EBackend.CollectionBackend */
    vfunc_child_added(child_source: EDataServer.Source): void
    vfunc_child_removed(child_source: EDataServer.Source): void
    vfunc_create_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_create_resource_finish(result: Gio.AsyncResult): boolean
    vfunc_create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_delete_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_resource_finish(result: Gio.AsyncResult): boolean
    vfunc_delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_dup_resource_id(child_source: EDataServer.Source): string
    vfunc_populate(): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.CollectionBackend */
    connect(sigName: "child-added", callback: (($obj: CollectionBackend, child_source: ServerSideSource) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CollectionBackend, child_source: ServerSideSource) => void)): number
    emit(sigName: "child-added", child_source: ServerSideSource): void
    connect(sigName: "child-removed", callback: (($obj: CollectionBackend, child_source: ServerSideSource) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CollectionBackend, child_source: ServerSideSource) => void)): number
    emit(sigName: "child-removed", child_source: ServerSideSource): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CollectionBackend_ConstructProps)
    _init (config?: CollectionBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CollectionBackendFactory_ConstructProps extends BackendFactory_ConstructProps {
}
export class CollectionBackendFactory {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.CollectionBackendFactory */
    prepare_mail(mail_account_source: EDataServer.Source, mail_identity_source: EDataServer.Source, mail_transport_source: EDataServer.Source): void
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    get_hash_key(): string
    get_module_filename(): string
    new_backend(source: EDataServer.Source): Backend
    share_subprocess(): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend-1.2.EBackend.CollectionBackendFactory */
    vfunc_prepare_mail(mail_account_source: EDataServer.Source, mail_identity_source: EDataServer.Source, mail_transport_source: EDataServer.Source): void
    /* Virtual methods of EBackend-1.2.EBackend.BackendFactory */
    vfunc_get_hash_key(): string
    vfunc_new_backend(source: EDataServer.Source): Backend
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectionBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectionBackendFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CollectionBackendFactory_ConstructProps)
    _init (config?: CollectionBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusServer {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    load_modules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(wait_for_client: boolean): DBusServerExitCode
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EBackend-1.2.EBackend.DBusServer */
    vfunc_bus_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_lost(connection: Gio.DBusConnection): void
    vfunc_quit_server(code: DBusServerExitCode): void
    vfunc_run_server(): DBusServerExitCode
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-lost", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DBusServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    connect(sigName: "quit-server", callback: (($obj: DBusServer, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DBusServer, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (($obj: DBusServer) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DBusServer) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusServer_ConstructProps)
    _init (config?: DBusServer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DataFactory_ConstructProps extends DBusServer_ConstructProps {
    backend_per_process?: number
    reload_supported?: boolean
}
export class DataFactory {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DataFactory */
    backend_closed(backend: Backend): void
    backend_closed_by_sender(backend: Backend, sender: string): void
    construct_path(): string
    create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend
    get_backend_per_process(): number
    get_registry(): EDataServer.SourceRegistry
    get_reload_supported(): boolean
    list_opened_backends(): Backend[]
    open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    ref_backend_factory(backend_name: string, extension_name: string): BackendFactory
    spawn_subprocess_backend(invocation: Gio.DBusMethodInvocation, uid: string, extension_name: string, subprocess_path: string): void
    use_backend_per_process(): boolean
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    load_modules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(wait_for_client: boolean): DBusServerExitCode
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend-1.2.EBackend.DataFactory */
    vfunc_complete_open(invocation: Gio.DBusMethodInvocation, object_path: string, bus_name: string, extension_name: string): void
    vfunc_create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend
    vfunc_open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend-1.2.EBackend.DBusServer */
    vfunc_bus_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_lost(connection: Gio.DBusConnection): void
    vfunc_quit_server(code: DBusServerExitCode): void
    vfunc_run_server(): DBusServerExitCode
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-lost", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: DataFactory, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    connect(sigName: "quit-server", callback: (($obj: DataFactory, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: DataFactory, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (($obj: DataFactory) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: DataFactory) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataFactory_ConstructProps)
    _init (config?: DataFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface FileCache_ConstructProps extends GObject.Object_ConstructProps {
    filename?: string
}
export class FileCache {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.FileCache */
    add_object(key: string, value: string): boolean
    clean(): boolean
    freeze_changes(): void
    get_filename(): string
    get_keys(): string[]
    get_object(key: string): string
    get_objects(): string[]
    remove(): boolean
    remove_object(key: string): boolean
    replace_object(key: string, new_value: string): boolean
    thaw_changes(): void
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
    connect(sigName: "notify", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileCache_ConstructProps)
    _init (config?: FileCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): FileCache
    static $gtype: GObject.Type
}
export interface ServerSideSource_ConstructProps extends EDataServer.Source_ConstructProps {
    file?: Gio.File
    oauth2_support?: OAuth2Support
    remote_creatable?: boolean
    remote_deletable?: boolean
    removable?: boolean
    server?: SourceRegistryServer
    writable?: boolean
    write_directory?: string
}
export class ServerSideSource {
    /* Properties of EBackend-1.2.EBackend.ServerSideSource */
    readonly exported: boolean
    oauth2_support: OAuth2Support
    remote_creatable: boolean
    remote_deletable: boolean
    removable: boolean
    writable: boolean
    write_directory: string
    /* Properties of EDataServer-1.2.EDataServer.Source */
    readonly connection_status: EDataServer.SourceConnectionStatus
    display_name: string
    enabled: boolean
    parent: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.ServerSideSource */
    get_exported(): boolean
    get_file(): Gio.File | null
    get_node(): GLib.Node | null
    get_server(): SourceRegistryServer
    get_write_directory(): string
    load(cancellable?: Gio.Cancellable | null): boolean
    ref_oauth2_support(): OAuth2Support | null
    set_oauth2_support(oauth2_support: OAuth2Support): void
    set_remote_creatable(remote_creatable: boolean): void
    set_remote_deletable(remote_deletable: boolean): void
    set_removable(removable: boolean): void
    set_writable(writable: boolean): void
    set_write_directory(write_directory: string): void
    /* Methods of EDataServer-1.2.EDataServer.Source */
    camel_configure_service(service: Camel.Service): void
    changed(): void
    compare_by_display_name(source2: EDataServer.Source): number
    delete_password(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_password_finish(result: Gio.AsyncResult): boolean
    delete_password_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_parent(): string
    dup_secret_label(): string
    dup_uid(): string
    emit_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null): void
    equal(source2: EDataServer.Source): boolean
    get_connection_status(): EDataServer.SourceConnectionStatus
    get_display_name(): string
    get_enabled(): boolean
    get_extension(extension_name: string): EDataServer.SourceExtension
    get_last_credentials_required_arguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_last_credentials_required_arguments_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reason */ EDataServer.SourceCredentialsReason, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags, /* out_op_error */ GLib.Error ]
    get_last_credentials_required_arguments_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reason */ EDataServer.SourceCredentialsReason, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags, /* out_op_error */ GLib.Error ]
    get_oauth2_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_oauth2_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_oauth2_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_parent(): string
    get_remote_creatable(): boolean
    get_remote_deletable(): boolean
    get_removable(): boolean
    get_uid(): string
    get_writable(): boolean
    has_extension(extension_name: string): boolean
    hash(): number
    invoke_authenticate(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_authenticate_finish(result: Gio.AsyncResult): boolean
    invoke_authenticate_sync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): boolean
    invoke_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_credentials_required_finish(result: Gio.AsyncResult): boolean
    invoke_credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    lookup_password(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_password_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_password */ string ]
    lookup_password_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_password */ string ]
    mail_signature_load(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mail_signature_load_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mail_signature_load_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mail_signature_replace(contents: string, length: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mail_signature_replace_finish(result: Gio.AsyncResult): boolean
    mail_signature_replace_sync(contents: string, length: number, cancellable?: Gio.Cancellable | null): boolean
    mail_signature_symlink(symlink_target: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mail_signature_symlink_finish(result: Gio.AsyncResult): boolean
    mail_signature_symlink_sync(symlink_target: string, cancellable?: Gio.Cancellable | null): boolean
    proxy_lookup(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    proxy_lookup_finish(result: Gio.AsyncResult): string[]
    proxy_lookup_sync(uri: string, cancellable?: Gio.Cancellable | null): string[]
    ref_dbus_object(): Gio.DBusObject
    ref_main_context(): GLib.MainContext
    refresh_add_timeout(context: GLib.MainContext | null, callback: EDataServer.SourceRefreshFunc): number
    refresh_force_timeout(): void
    refresh_remove_timeout(refresh_timeout_id: number): boolean
    refresh_remove_timeouts_by_data(user_data?: object | null): number
    remote_create(scratch_source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remote_create_finish(result: Gio.AsyncResult): boolean
    remote_create_sync(scratch_source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    remote_delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remote_delete_finish(result: Gio.AsyncResult): boolean
    remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    set_connection_status(connection_status: EDataServer.SourceConnectionStatus): void
    set_display_name(display_name: string): void
    set_enabled(enabled: boolean): void
    set_parent(parent?: string | null): void
    store_password(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_password_finish(result: Gio.AsyncResult): boolean
    store_password_sync(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    to_string(length?: number | null): string
    unset_last_credentials_required_arguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unset_last_credentials_required_arguments_finish(result: Gio.AsyncResult): boolean
    unset_last_credentials_required_arguments_sync(cancellable?: Gio.Cancellable | null): boolean
    write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_finish(result: Gio.AsyncResult): boolean
    write_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.ProxyResolver */
    is_supported(): boolean
    lookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    lookup_async(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_finish(result: Gio.AsyncResult): string[]
    /* Virtual methods of EDataServer-1.2.EDataServer.Source */
    vfunc_authenticate(credentials: EDataServer.NamedParameters): void
    vfunc_changed(): void
    vfunc_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error): void
    vfunc_get_oauth2_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_oauth2_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_get_oauth2_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_invoke_authenticate_impl(dbus_source: object | null, arg_credentials: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_invoke_credentials_required_impl(dbus_source: object | null, arg_reason: string, arg_certificate_pem: string, arg_certificate_errors: string, arg_dbus_error_name: string, arg_dbus_error_message: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remote_create(scratch_source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remote_create_finish(result: Gio.AsyncResult): boolean
    vfunc_remote_create_sync(scratch_source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remote_delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remote_delete_finish(result: Gio.AsyncResult): boolean
    vfunc_remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_unset_last_credentials_required_arguments_impl(cancellable?: Gio.Cancellable | null): boolean
    vfunc_write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_finish(result: Gio.AsyncResult): boolean
    vfunc_write_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_is_supported(): boolean
    vfunc_lookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_lookup_async(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): string[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer-1.2.EDataServer.Source */
    connect(sigName: "authenticate", callback: (($obj: ServerSideSource, credentials: EDataServer.NamedParameters) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: ServerSideSource, credentials: EDataServer.NamedParameters) => void)): number
    emit(sigName: "authenticate", credentials: EDataServer.NamedParameters): void
    connect(sigName: "changed", callback: (($obj: ServerSideSource) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ServerSideSource) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "credentials-required", callback: (($obj: ServerSideSource, reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    connect_after(sigName: "credentials-required", callback: (($obj: ServerSideSource, reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    emit(sigName: "credentials-required", reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::exported", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::oauth2-support", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-support", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-creatable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-creatable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-deletable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-deletable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::removable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-directory", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-directory", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-status", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ServerSideSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerSideSource_ConstructProps)
    _init (config?: ServerSideSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(server: SourceRegistryServer, file: Gio.File): ServerSideSource
    static new(dbus_object?: Gio.DBusObject | null, main_context?: GLib.MainContext | null): ServerSideSource
    static new_memory_only(server: SourceRegistryServer, uid: string): ServerSideSource
    static get_user_dir(): string
    static new_user_file(uid: string): Gio.File
    static uid_from_file(file: Gio.File): string
    static $gtype: GObject.Type
}
export interface ServerSideSourceCredentialsProvider_ConstructProps extends EDataServer.SourceCredentialsProvider_ConstructProps {
}
export class ServerSideSourceCredentialsProvider {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider */
    can_prompt(source: EDataServer.Source): boolean
    can_store(source: EDataServer.Source): boolean
    delete(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(result: Gio.AsyncResult): boolean
    delete_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    lookup(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_credentials */ EDataServer.NamedParameters ]
    lookup_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ EDataServer.NamedParameters ]
    ref_credentials_source(source: EDataServer.Source): EDataServer.Source
    ref_registry(): GObject.Object
    ref_source(uid: string): EDataServer.Source
    register_impl(provider_impl: EDataServer.SourceCredentialsProviderImpl): boolean
    store(source: EDataServer.Source, credentials: EDataServer.NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_finish(result: Gio.AsyncResult): boolean
    store_sync(source: EDataServer.Source, credentials: EDataServer.NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    unregister_impl(provider_impl: EDataServer.SourceCredentialsProviderImpl): void
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider */
    vfunc_ref_source(uid: string): EDataServer.Source
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServerSideSourceCredentialsProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerSideSourceCredentialsProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerSideSourceCredentialsProvider_ConstructProps)
    _init (config?: ServerSideSourceCredentialsProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: SourceRegistryServer): ServerSideSourceCredentialsProvider
    static new(registry: EDataServer.SourceRegistry): ServerSideSourceCredentialsProvider
    static $gtype: GObject.Type
}
export interface SourceRegistryServer_ConstructProps extends DataFactory_ConstructProps {
}
export class SourceRegistryServer {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SourceRegistryServer */
    add_source(source: EDataServer.Source): void
    find_extension(source: EDataServer.Source, extension_name: string): EDataServer.Source | null
    get_oauth2_services(): EDataServer.OAuth2Services
    list_sources(extension_name: string): EDataServer.Source[]
    load_directory(path: string, flags: SourcePermissionFlags): boolean
    load_error(file: Gio.File, error: GLib.Error): void
    load_file(file: Gio.File, flags: SourcePermissionFlags): EDataServer.Source | null
    load_resource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags): boolean
    ref_backend(source: EDataServer.Source): CollectionBackend | null
    ref_backend_factory(source: EDataServer.Source): CollectionBackendFactory | null
    ref_credentials_provider(): EDataServer.SourceCredentialsProvider
    ref_oauth2_support(): OAuth2Support | null
    ref_source(uid: string): EDataServer.Source | null
    remove_source(source: EDataServer.Source): void
    /* Methods of EBackend-1.2.EBackend.DataFactory */
    backend_closed(backend: Backend): void
    backend_closed_by_sender(backend: Backend, sender: string): void
    construct_path(): string
    create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend
    get_backend_per_process(): number
    get_registry(): EDataServer.SourceRegistry
    get_reload_supported(): boolean
    list_opened_backends(): Backend[]
    open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    ref_backend_factory(backend_name: string, extension_name: string): BackendFactory
    spawn_subprocess_backend(invocation: Gio.DBusMethodInvocation, uid: string, extension_name: string, subprocess_path: string): void
    use_backend_per_process(): boolean
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    load_modules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(wait_for_client: boolean): DBusServerExitCode
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
    /* Methods of EBackend-1.2.EBackend.OAuth2Support */
    get_access_token(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_access_token_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend-1.2.EBackend.SourceRegistryServer */
    vfunc_files_loaded(): void
    vfunc_load_error(file: Gio.File, error: GLib.Error): void
    vfunc_source_added(source: EDataServer.Source): void
    vfunc_source_removed(source: EDataServer.Source): void
    vfunc_tweak_key_file(key_file: GLib.KeyFile, uid: string): boolean
    vfunc_get_access_token(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_get_access_token_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    /* Virtual methods of EBackend-1.2.EBackend.DataFactory */
    vfunc_complete_open(invocation: Gio.DBusMethodInvocation, object_path: string, bus_name: string, extension_name: string): void
    vfunc_create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend
    vfunc_open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend-1.2.EBackend.DBusServer */
    vfunc_bus_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_lost(connection: Gio.DBusConnection): void
    vfunc_quit_server(code: DBusServerExitCode): void
    vfunc_run_server(): DBusServerExitCode
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.SourceRegistryServer */
    connect(sigName: "files-loaded", callback: (($obj: SourceRegistryServer) => void)): number
    connect_after(sigName: "files-loaded", callback: (($obj: SourceRegistryServer) => void)): number
    emit(sigName: "files-loaded"): void
    connect(sigName: "load-error", callback: (($obj: SourceRegistryServer, file: Gio.File, error: GLib.Error) => void)): number
    connect_after(sigName: "load-error", callback: (($obj: SourceRegistryServer, file: Gio.File, error: GLib.Error) => void)): number
    emit(sigName: "load-error", file: Gio.File, error: GLib.Error): void
    connect(sigName: "source-added", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    emit(sigName: "source-added", source: ServerSideSource): void
    connect(sigName: "source-removed", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: SourceRegistryServer, source: ServerSideSource) => void)): number
    emit(sigName: "source-removed", source: ServerSideSource): void
    connect(sigName: "tweak-key-file", callback: (($obj: SourceRegistryServer, key_file: GLib.KeyFile, uid: string) => boolean)): number
    connect_after(sigName: "tweak-key-file", callback: (($obj: SourceRegistryServer, key_file: GLib.KeyFile, uid: string) => boolean)): number
    emit(sigName: "tweak-key-file", key_file: GLib.KeyFile, uid: string): void
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-lost", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: SourceRegistryServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    connect(sigName: "quit-server", callback: (($obj: SourceRegistryServer, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: SourceRegistryServer, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (($obj: SourceRegistryServer) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: SourceRegistryServer) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SourceRegistryServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceRegistryServer_ConstructProps)
    _init (config?: SourceRegistryServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SourceRegistryServer
    static $gtype: GObject.Type
}
export interface SubprocessFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class SubprocessFactory {
    /* Properties of EBackend-1.2.EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SubprocessFactory */
    call_backends_prepare_shutdown(): void
    get_backends_list(): Backend[]
    get_registry(): EDataServer.SourceRegistry
    open_backend(connection: Gio.DBusConnection, uid: string, backend_factory_type_name: string, module_filename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    ref_initable_backend(uid: string, backend_factory_type_name: string, module_filename: string, cancellable?: Gio.Cancellable | null): Backend | null
    set_backend_callbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EBackend-1.2.EBackend.SubprocessFactory */
    vfunc_backend_closed(backend: Backend): void
    vfunc_backend_created(backend: Backend): void
    vfunc_open_data(backend: Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null): string
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubprocessFactory_ConstructProps)
    _init (config?: SubprocessFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static construct_path(): string
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface UserPrompter_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserPrompter {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.UserPrompter */
    extension_prompt(dialog_name: string, in_parameters?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    extension_prompt_finish(result: Gio.AsyncResult, out_values?: EDataServer.NamedParameters | null): number
    extension_prompt_sync(dialog_name: string, in_parameters?: EDataServer.NamedParameters | null, out_values?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): number
    prompt(type: string | null, title: string | null, primary_text: string | null, secondary_text: string | null, use_markup: boolean, button_captions?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    prompt_finish(result: Gio.AsyncResult): number
    prompt_sync(type: string | null, title: string | null, primary_text: string | null, secondary_text: string | null, use_markup: boolean, button_captions?: string[] | null, cancellable?: Gio.Cancellable | null): number
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
    connect(sigName: "notify", callback: (($obj: UserPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserPrompter_ConstructProps)
    _init (config?: UserPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserPrompter
    static $gtype: GObject.Type
}
export interface UserPrompterServer_ConstructProps extends DBusServer_ConstructProps {
}
export class UserPrompterServer {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.UserPrompterServer */
    register(extension: EDataServer.Extension, dialog_name: string): boolean
    response(prompt_id: number, response: number, extension_values?: EDataServer.NamedParameters | null): void
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    load_modules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(wait_for_client: boolean): DBusServerExitCode
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EBackend-1.2.EBackend.DBusServer */
    vfunc_bus_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_acquired(connection: Gio.DBusConnection): void
    vfunc_bus_name_lost(connection: Gio.DBusConnection): void
    vfunc_quit_server(code: DBusServerExitCode): void
    vfunc_run_server(): DBusServerExitCode
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.UserPrompterServer */
    connect(sigName: "prompt", callback: (($obj: UserPrompterServer, prompt_id: number, type: string | null, title: string | null, primary_text: string | null, secondary_text: string | null, use_markup: boolean, button_captions?: string[] | null) => void)): number
    connect_after(sigName: "prompt", callback: (($obj: UserPrompterServer, prompt_id: number, type: string | null, title: string | null, primary_text: string | null, secondary_text: string | null, use_markup: boolean, button_captions?: string[] | null) => void)): number
    emit(sigName: "prompt", prompt_id: number, type: string | null, title: string | null, primary_text: string | null, secondary_text: string | null, use_markup: boolean, button_captions?: string[] | null): void
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-acquired", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-lost", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    connect_after(sigName: "bus-name-lost", callback: (($obj: UserPrompterServer, connection: Gio.DBusConnection) => void)): number
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    connect(sigName: "quit-server", callback: (($obj: UserPrompterServer, code: DBusServerExitCode) => void)): number
    connect_after(sigName: "quit-server", callback: (($obj: UserPrompterServer, code: DBusServerExitCode) => void)): number
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (($obj: UserPrompterServer) => DBusServerExitCode)): number
    connect_after(sigName: "run-server", callback: (($obj: UserPrompterServer) => DBusServerExitCode)): number
    emit(sigName: "run-server"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserPrompterServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserPrompterServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserPrompterServer_ConstructProps)
    _init (config?: UserPrompterServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserPrompterServer
    static $gtype: GObject.Type
}
export interface UserPrompterServerExtension_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class UserPrompterServerExtension {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.UserPrompterServerExtension */
    prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean
    response(prompt_id: number, response: number, values?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EBackend-1.2.EBackend.UserPrompterServerExtension */
    vfunc_prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserPrompterServerExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserPrompterServerExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserPrompterServerExtension_ConstructProps)
    _init (config?: UserPrompterServerExtension_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebDAVCollectionBackend_ConstructProps extends CollectionBackend_ConstructProps {
}
export class WebDAVCollectionBackend {
    /* Properties of EBackend-1.2.EBackend.CollectionBackend */
    readonly proxy_resolver: Gio.ProxyResolver
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly main_context: GLib.MainContext
    online: boolean
    readonly user_prompter: UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.WebDAVCollectionBackend */
    discover_sync(calendar_url: string | null, contacts_url: string | null, credentials: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): [ /* returnType */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags | null ]
    get_resource_id(source: EDataServer.Source): string | null
    is_custom_source(source: EDataServer.Source): boolean
    /* Methods of EBackend-1.2.EBackend.CollectionBackend */
    authenticate_children(credentials: EDataServer.NamedParameters): void
    claim_all_resources(): EDataServer.Source[]
    create_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_resource_finish(result: Gio.AsyncResult): boolean
    create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    delete_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_resource_finish(result: Gio.AsyncResult): boolean
    delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    dup_resource_id(child_source: EDataServer.Source): string
    freeze_populate(): boolean
    get_cache_dir(): string
    get_part_enabled(parts: CollectionBackendParts): boolean
    get_populate_frozen(): boolean
    is_new_source(source: EDataServer.Source): boolean
    list_calendar_sources(): EDataServer.Source[]
    list_contacts_sources(): EDataServer.Source[]
    list_mail_sources(): EDataServer.Source[]
    new_child(resource_id: string): EDataServer.Source
    ref_proxy_resolver(): Gio.ProxyResolver | null
    ref_server(): SourceRegistryServer
    schedule_populate(): void
    thaw_populate(): void
    /* Methods of EBackend-1.2.EBackend.Backend */
    credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentials_required_finish(result: Gio.AsyncResult): boolean
    credentials_required_sync(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void
    ensure_source_status_connected(): void
    get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    get_online(): boolean
    get_source(): EDataServer.Source
    get_user_prompter(): object | null
    is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean
    prepare_shutdown(): void
    ref_connectable(): Gio.SocketConnectable | null
    ref_main_context(): GLib.MainContext
    schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void
    schedule_credentials_required(reason: EDataServer.SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, who_calls?: string | null): void
    set_connectable(connectable: Gio.SocketConnectable): void
    set_online(online: boolean): void
    trust_prompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trust_prompt_sync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Virtual methods of EBackend-1.2.EBackend.WebDAVCollectionBackend */
    vfunc_get_resource_id(source: EDataServer.Source): string | null
    vfunc_is_custom_source(source: EDataServer.Source): boolean
    /* Virtual methods of EBackend-1.2.EBackend.CollectionBackend */
    vfunc_child_added(child_source: EDataServer.Source): void
    vfunc_child_removed(child_source: EDataServer.Source): void
    vfunc_create_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_create_resource_finish(result: Gio.AsyncResult): boolean
    vfunc_create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_delete_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_resource_finish(result: Gio.AsyncResult): boolean
    vfunc_delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_dup_resource_id(child_source: EDataServer.Source): string
    vfunc_populate(): void
    /* Virtual methods of EBackend-1.2.EBackend.Backend */
    vfunc_authenticate_sync(credentials: EDataServer.NamedParameters, out_certificate_pem: string, out_certificate_errors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null): EDataServer.SourceAuthenticationResult
    vfunc_get_destination_address(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    vfunc_prepare_shutdown(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EBackend-1.2.EBackend.CollectionBackend */
    connect(sigName: "child-added", callback: (($obj: WebDAVCollectionBackend, child_source: ServerSideSource) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: WebDAVCollectionBackend, child_source: ServerSideSource) => void)): number
    emit(sigName: "child-added", child_source: ServerSideSource): void
    connect(sigName: "child-removed", callback: (($obj: WebDAVCollectionBackend, child_source: ServerSideSource) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: WebDAVCollectionBackend, child_source: ServerSideSource) => void)): number
    emit(sigName: "child-removed", child_source: ServerSideSource): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectable", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-prompter", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: WebDAVCollectionBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebDAVCollectionBackend_ConstructProps)
    _init (config?: WebDAVCollectionBackend_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class BackendClass {
    /* Fields of EBackend-1.2.EBackend.BackendClass */
    get_destination_address: (backend: Backend) => [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    prepare_shutdown: (backend: Backend) => void
    authenticate_sync: any
    static name: string
}
export abstract class BackendFactoryClass {
    /* Fields of EBackend-1.2.EBackend.BackendFactoryClass */
    get_hash_key: (factory: BackendFactory) => string
    new_backend: any
    e_module: object
    share_subprocess: boolean
    static name: string
}
export class BackendFactoryPrivate {
    static name: string
}
export class BackendPrivate {
    static name: string
}
export abstract class CacheClass {
    /* Fields of EBackend-1.2.EBackend.CacheClass */
    put_locked: any
    remove_locked: any
    clear_offline_changes_locked: any
    erase: (cache: Cache) => void
    before_put: any
    before_remove: any
    revision_changed: (cache: Cache) => void
    static name: string
}
export class CacheColumnInfo {
    /* Fields of EBackend-1.2.EBackend.CacheColumnInfo */
    name: string
    type: string
    index_name: string
    /* Methods of EBackend-1.2.EBackend.CacheColumnInfo */
    copy(): CacheColumnInfo
    static name: string
    static new(name: string, type: string, index_name?: string | null): CacheColumnInfo
    constructor(name: string, type: string, index_name?: string | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, type: string, index_name?: string | null): CacheColumnInfo
    static free(info?: object | null): void
}
export class CacheColumnValues {
    /* Methods of EBackend-1.2.EBackend.CacheColumnValues */
    contains(name: string): boolean
    copy(): CacheColumnValues
    free(): void
    get_size(): number
    init_iter(iter: GLib.HashTableIter): void
    lookup(name: string): string
    put(name: string, value?: string | null): void
    remove(name: string): boolean
    remove_all(): void
    take(name: string, value?: string | null): void
    take_value(name: string, value?: string | null): void
    static name: string
    static new(): CacheColumnValues
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): CacheColumnValues
}
export class CacheOfflineChange {
    /* Fields of EBackend-1.2.EBackend.CacheOfflineChange */
    uid: string
    revision: string
    object: string
    state: OfflineState
    /* Methods of EBackend-1.2.EBackend.CacheOfflineChange */
    copy(): CacheOfflineChange
    static name: string
    static new(uid: string, revision: string | null, object: string | null, state: OfflineState): CacheOfflineChange
    constructor(uid: string, revision: string | null, object: string | null, state: OfflineState)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision: string | null, object: string | null, state: OfflineState): CacheOfflineChange
    static free(change?: object | null): void
}
export class CachePrivate {
    static name: string
}
export abstract class CacheReaperClass {
    static name: string
}
export abstract class CollectionBackendClass {
    /* Fields of EBackend-1.2.EBackend.CollectionBackendClass */
    populate: (backend: CollectionBackend) => void
    dup_resource_id: any
    child_added: any
    child_removed: any
    create_resource_sync: any
    create_resource: any
    create_resource_finish: any
    delete_resource_sync: any
    delete_resource: any
    delete_resource_finish: any
    static name: string
}
export abstract class CollectionBackendFactoryClass {
    /* Fields of EBackend-1.2.EBackend.CollectionBackendFactoryClass */
    prepare_mail: any
    static name: string
}
export class CollectionBackendFactoryPrivate {
    static name: string
}
export class CollectionBackendPrivate {
    static name: string
}
export abstract class DBusServerClass {
    /* Fields of EBackend-1.2.EBackend.DBusServerClass */
    parent_class: GObject.ObjectClass
    bus_name: string
    module_directory: string
    bus_acquired: any
    bus_name_acquired: any
    bus_name_lost: any
    run_server: (server: DBusServer) => DBusServerExitCode
    quit_server: (server: DBusServer, code: DBusServerExitCode) => void
    reserved: object[]
    static name: string
}
export class DBusServerPrivate {
    static name: string
}
export abstract class DataFactoryClass {
    /* Fields of EBackend-1.2.EBackend.DataFactoryClass */
    parent_class: DBusServerClass
    backend_factory_type: GObject.Type
    factory_object_path: string
    data_object_path_prefix: string
    subprocess_object_path_prefix: string
    subprocess_bus_name_prefix: string
    get_factory_name: (backend_factory: BackendFactory) => string
    complete_open: any
    create_backend: any
    open_backend: any
    reserved: object[]
    static name: string
}
export class DataFactoryPrivate {
    static name: string
}
export abstract class FileCacheClass {
    /* Fields of EBackend-1.2.EBackend.FileCacheClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FileCachePrivate {
    static name: string
}
export abstract class OAuth2SupportInterface {
    /* Fields of EBackend-1.2.EBackend.OAuth2SupportInterface */
    get_access_token_sync: any
    get_access_token: any
    get_access_token_finish: any
    static name: string
}
export abstract class ServerSideSourceClass {
    /* Fields of EBackend-1.2.EBackend.ServerSideSourceClass */
    parent_class: EDataServer.SourceClass
    static name: string
}
export abstract class ServerSideSourceCredentialsProviderClass {
    /* Fields of EBackend-1.2.EBackend.ServerSideSourceCredentialsProviderClass */
    parent_class: EDataServer.SourceCredentialsProviderClass
    static name: string
}
export class ServerSideSourceCredentialsProviderPrivate {
    static name: string
}
export class ServerSideSourcePrivate {
    static name: string
}
export abstract class SourceRegistryServerClass {
    /* Fields of EBackend-1.2.EBackend.SourceRegistryServerClass */
    parent_class: DataFactoryClass
    load_error: any
    files_loaded: (server: SourceRegistryServer) => void
    source_added: any
    source_removed: any
    tweak_key_file: any
    reserved: object[]
    static name: string
}
export class SourceRegistryServerPrivate {
    static name: string
}
export abstract class SubprocessFactoryClass {
    /* Fields of EBackend-1.2.EBackend.SubprocessFactoryClass */
    parent_class: GObject.ObjectClass
    open_data: any
    backend_created: (subprocess_factory: SubprocessFactory, backend: Backend) => void
    backend_closed: (subprocess_factory: SubprocessFactory, backend: Backend) => void
    static name: string
}
export class SubprocessFactoryPrivate {
    static name: string
}
export abstract class UserPrompterClass {
    /* Fields of EBackend-1.2.EBackend.UserPrompterClass */
    parent: GObject.ObjectClass
    static name: string
}
export class UserPrompterPrivate {
    static name: string
}
export abstract class UserPrompterServerClass {
    /* Fields of EBackend-1.2.EBackend.UserPrompterServerClass */
    parent_class: DBusServerClass
    static name: string
}
export abstract class UserPrompterServerExtensionClass {
    /* Fields of EBackend-1.2.EBackend.UserPrompterServerExtensionClass */
    parent_class: EDataServer.ExtensionClass
    register_dialogs: any
    prompt: any
    static name: string
}
export class UserPrompterServerExtensionPrivate {
    static name: string
}
export class UserPrompterServerPrivate {
    static name: string
}
export abstract class WebDAVCollectionBackendClass {
    /* Fields of EBackend-1.2.EBackend.WebDAVCollectionBackendClass */
    parent_class: CollectionBackendClass
    get_resource_id: any
    is_custom_source: any
    static name: string
}
export class WebDAVCollectionBackendPrivate {
    static name: string
}