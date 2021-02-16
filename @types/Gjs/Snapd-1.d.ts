/**
 * Snapd-1
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AliasStatus {
    UNKNOWN,
    DEFAULT,
    ENABLED,
    DISABLED,
    AUTO,
    MANUAL,
}
export enum ChangeFilter {
    ALL,
    IN_PROGRESS,
    READY,
}
export enum Confinement {
    UNKNOWN,
    STRICT,
    DEVMODE,
    CLASSIC,
}
export enum DaemonType {
    NONE,
    UNKNOWN,
    SIMPLE,
    FORKING,
    ONESHOT,
    DBUS,
    NOTIFY,
}
export enum Error {
    CONNECTION_FAILED,
    WRITE_FAILED,
    READ_FAILED,
    BAD_REQUEST,
    BAD_RESPONSE,
    AUTH_DATA_REQUIRED,
    AUTH_DATA_INVALID,
    TWO_FACTOR_REQUIRED,
    TWO_FACTOR_INVALID,
    PERMISSION_DENIED,
    FAILED,
    TERMS_NOT_ACCEPTED,
    PAYMENT_NOT_SETUP,
    PAYMENT_DECLINED,
    ALREADY_INSTALLED,
    NOT_INSTALLED,
    NO_UPDATE_AVAILABLE,
    PASSWORD_POLICY_ERROR,
    NEEDS_DEVMODE,
    NEEDS_CLASSIC,
    NEEDS_CLASSIC_SYSTEM,
    BAD_QUERY,
    NETWORK_TIMEOUT,
    NOT_FOUND,
    NOT_IN_STORE,
    AUTH_CANCELLED,
    NOT_CLASSIC,
    REVISION_NOT_AVAILABLE,
    CHANNEL_NOT_AVAILABLE,
    NOT_A_SNAP,
    DNS_FAILURE,
    OPTION_NOT_FOUND,
}
export enum MaintenanceKind {
    UNKNOWN,
    DAEMON_RESTART,
    SYSTEM_RESTART,
}
export enum MarkdownNodeType {
    TEXT,
    PARAGRAPH,
    UNORDERED_LIST,
    LIST_ITEM,
    CODE_BLOCK,
    CODE_SPAN,
    EMPHASIS,
    STRONG_EMPHASIS,
    URL,
}
export enum MarkdownVersion {
    /* 0 (invalid, starts with a number) */
}
export enum PublisherValidation {
    UNKNOWN,
    UNPROVEN,
    VERIFIED,
}
export enum SnapStatus {
    UNKNOWN,
    AVAILABLE,
    PRICED,
    INSTALLED,
    ACTIVE,
}
export enum SnapType {
    UNKNOWN,
    APP,
    KERNEL,
    GADGET,
    OS,
    CORE,
    BASE,
    SNAPD,
}
export enum SystemConfinement {
    UNKNOWN,
    STRICT,
    PARTIAL,
}
export enum CreateUserFlags {
    NONE,
    SUDO,
    KNOWN,
}
export enum FindFlags {
    NONE,
    MATCH_NAME,
    SELECT_PRIVATE,
    SELECT_REFRESH,
    SCOPE_WIDE,
    MATCH_COMMON_ID,
}
export enum GetAppsFlags {
    NONE,
    SELECT_SERVICES,
}
export enum GetConnectionsFlags {
    NONE,
    SELECT_ALL,
}
export enum GetInterfacesFlags {
    NONE,
    INCLUDE_DOCS,
    INCLUDE_PLUGS,
    INCLUDE_SLOTS,
    ONLY_CONNECTED,
}
export enum GetSnapsFlags {
    NONE,
    INCLUDE_INACTIVE,
}
export enum InstallFlags {
    NONE,
    CLASSIC,
    DANGEROUS,
    DEVMODE,
    JAILMODE,
}
export enum RemoveFlags {
    NONE,
    PURGE,
}
export function error_quark(): GLib.Quark
export function login_async(username: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function login_finish(result: Gio.AsyncResult): AuthData
export function login_sync(username: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): AuthData
export interface ProgressCallback {
    (client: Client, change: Change, deprecated?: object | null): void
}
export interface Alias_ConstructProps extends GObject.Object_ConstructProps {
    app_auto?: string
    app_manual?: string
    command?: string
    name?: string
    snap?: string
    status?: AliasStatus
}
export class Alias {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Alias */
    get_app(): string | null
    get_app_auto(): string | null
    get_app_manual(): string | null
    get_command(): string
    get_name(): string
    get_snap(): string
    get_status(): AliasStatus
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
    connect(sigName: "notify", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Alias_ConstructProps)
    _init (config?: Alias_ConstructProps): void
    static $gtype: GObject.Type
}
export interface App_ConstructProps extends GObject.Object_ConstructProps {
    active?: boolean
    aliases?: string[]
    common_id?: string
    daemon_type?: DaemonType
    desktop_file?: string
    enabled?: boolean
    name?: string
    snap?: string
}
export class App {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.App */
    get_active(): boolean
    get_aliases(): string[]
    get_common_id(): string | null
    get_daemon_type(): DaemonType | null
    get_desktop_file(): string | null
    get_enabled(): boolean
    get_name(): string
    get_snap(): string
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
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Assertion_ConstructProps extends GObject.Object_ConstructProps {
    content?: string
}
export class Assertion {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Assertion */
    get_body(): string | null
    get_header(name: string): string | null
    get_headers(): string[]
    get_signature(): string
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
    connect(sigName: "notify", callback: (($obj: Assertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Assertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Assertion_ConstructProps)
    _init (config?: Assertion_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(content: string): Assertion
    static $gtype: GObject.Type
}
export interface AuthData_ConstructProps extends GObject.Object_ConstructProps {
    discharges?: string[]
    macaroon?: string
}
export class AuthData {
    /* Properties of Snapd.AuthData */
    discharges: string[]
    macaroon: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.AuthData */
    get_discharges(): string[]
    get_macaroon(): string
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
    connect(sigName: "notify", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::discharges", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discharges", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::macaroon", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::macaroon", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthData_ConstructProps)
    _init (config?: AuthData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(macaroon: string, discharges: string[]): AuthData
    static $gtype: GObject.Type
}
export interface Change_ConstructProps extends GObject.Object_ConstructProps {
    error?: string
    id?: string
    kind?: string
    ready?: boolean
    ready_time?: GLib.DateTime
    spawn_time?: GLib.DateTime
    status?: string
    summary?: string
    tasks?: object[]
}
export class Change {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Change */
    get_error(): string | null
    get_id(): string
    get_kind(): string
    get_ready(): boolean
    get_ready_time(): GLib.DateTime | null
    get_spawn_time(): GLib.DateTime
    get_status(): string
    get_summary(): string
    get_tasks(): Task[]
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
    connect(sigName: "notify", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Change_ConstructProps)
    _init (config?: Change_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    confinement?: Confinement
    epoch?: string
    name?: string
    released_at?: GLib.DateTime
    revision?: string
    size?: number
    version?: string
}
export class Channel {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Channel */
    get_branch(): string | null
    get_confinement(): Confinement
    get_epoch(): string
    get_name(): string
    get_released_at(): GLib.DateTime | null
    get_revision(): string
    get_risk(): string
    get_size(): number
    get_track(): string
    get_version(): string
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
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Fields of Snapd.Client */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Client */
    abort_change_async(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    abort_change_finish(result: Gio.AsyncResult): Change
    abort_change_sync(id: string, cancellable?: Gio.Cancellable | null): Change
    add_assertions_async(assertions: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_assertions_finish(result: Gio.AsyncResult): boolean
    add_assertions_sync(assertions: string[], cancellable?: Gio.Cancellable | null): boolean
    alias_async(snap: string, app: string, alias: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    alias_finish(result: Gio.AsyncResult): boolean
    alias_sync(snap: string, app: string, alias: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    buy_async(id: string, amount: number, currency: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    buy_finish(result: Gio.AsyncResult): boolean
    buy_sync(id: string, amount: number, currency: string, cancellable?: Gio.Cancellable | null): boolean
    check_buy_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    check_buy_finish(result: Gio.AsyncResult): boolean
    check_buy_sync(cancellable?: Gio.Cancellable | null): boolean
    connect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_interface_async(plug_snap: string, plug_name: string, slot_snap: string, slot_name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_interface_finish(result: Gio.AsyncResult): boolean
    connect_interface_sync(plug_snap: string, plug_name: string, slot_snap: string, slot_name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    create_user_async(email: string, flags: CreateUserFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_user_finish(result: Gio.AsyncResult): UserInformation
    create_user_sync(email: string, flags: CreateUserFlags, cancellable?: Gio.Cancellable | null): UserInformation
    create_users_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_users_finish(result: Gio.AsyncResult): UserInformation[]
    create_users_sync(cancellable?: Gio.Cancellable | null): UserInformation[]
    disable_aliases_async(snap: string, aliases: string[], progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disable_aliases_finish(result: Gio.AsyncResult): boolean
    disable_aliases_sync(snap: string, aliases: string[], progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    disable_async(name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disable_finish(result: Gio.AsyncResult): boolean
    disable_sync(name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    disconnect_interface_async(plug_snap: string, plug_name: string, slot_snap: string, slot_name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_interface_finish(result: Gio.AsyncResult): boolean
    disconnect_interface_sync(plug_snap: string, plug_name: string, slot_snap: string, slot_name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    download_async(name: string, channel?: string | null, revision?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    download_finish(result: Gio.AsyncResult): GLib.Bytes
    download_sync(name: string, channel?: string | null, revision?: string | null, cancellable?: Gio.Cancellable | null): GLib.Bytes
    enable_aliases_async(snap: string, aliases: string[], progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enable_aliases_finish(result: Gio.AsyncResult): boolean
    enable_aliases_sync(snap: string, aliases: string[], progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    enable_async(name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enable_finish(result: Gio.AsyncResult): boolean
    enable_sync(name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    find_async(flags: FindFlags, query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_finish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    find_refreshable_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_refreshable_finish(result: Gio.AsyncResult): Snap[]
    find_refreshable_sync(cancellable?: Gio.Cancellable | null): Snap[]
    find_section_async(flags: FindFlags, section?: string | null, query?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_section_finish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    find_section_sync(flags: FindFlags, section?: string | null, query?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    find_sync(flags: FindFlags, query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    get_aliases_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_aliases_finish(result: Gio.AsyncResult): Alias[]
    get_aliases_sync(cancellable?: Gio.Cancellable | null): Alias[]
    get_allow_interaction(): boolean
    get_apps2_async(flags: GetAppsFlags, snaps?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_apps2_finish(result: Gio.AsyncResult): App[]
    get_apps2_sync(flags: GetAppsFlags, snaps?: string[] | null, cancellable?: Gio.Cancellable | null): App[]
    get_apps_async(flags: GetAppsFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_apps_finish(result: Gio.AsyncResult): App[]
    get_apps_sync(flags: GetAppsFlags, cancellable?: Gio.Cancellable | null): App[]
    get_assertions_async(type: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_assertions_finish(result: Gio.AsyncResult): string[]
    get_assertions_sync(type: string, cancellable?: Gio.Cancellable | null): string[]
    get_auth_data(): AuthData | null
    get_change_async(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_change_finish(result: Gio.AsyncResult): Change
    get_change_sync(id: string, cancellable?: Gio.Cancellable | null): Change
    get_changes_async(filter: ChangeFilter, snap_name?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_changes_finish(result: Gio.AsyncResult): Change[]
    get_changes_sync(filter: ChangeFilter, snap_name?: string | null, cancellable?: Gio.Cancellable | null): Change[]
    get_connections2_async(flags: GetConnectionsFlags, snap?: string | null, interface?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_connections2_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    get_connections2_sync(flags: GetConnectionsFlags, snap?: string | null, interface?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    get_connections_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_connections_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    get_connections_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    get_icon_async(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_icon_finish(result: Gio.AsyncResult): Icon
    get_icon_sync(name: string, cancellable?: Gio.Cancellable | null): Icon
    get_interfaces2_async(flags: GetInterfacesFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_interfaces2_finish(result: Gio.AsyncResult): Interface[]
    get_interfaces2_sync(flags: GetInterfacesFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null): Interface[]
    get_interfaces_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_interfaces_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    get_interfaces_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    get_maintenance(): Maintenance | null
    get_sections_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_sections_finish(result: Gio.AsyncResult): string[]
    get_sections_sync(cancellable?: Gio.Cancellable | null): string[]
    get_snap_async(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_snap_conf_async(name: string, keys?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_snap_conf_finish(result: Gio.AsyncResult): GLib.HashTable
    get_snap_conf_sync(name: string, keys?: string[] | null, cancellable?: Gio.Cancellable | null): GLib.HashTable
    get_snap_finish(result: Gio.AsyncResult): Snap
    get_snap_sync(name: string, cancellable?: Gio.Cancellable | null): Snap
    get_snaps_async(flags: GetSnapsFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_snaps_finish(result: Gio.AsyncResult): Snap[]
    get_snaps_sync(flags: GetSnapsFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null): Snap[]
    get_socket_path(): string
    get_system_information_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_system_information_finish(result: Gio.AsyncResult): SystemInformation
    get_system_information_sync(cancellable?: Gio.Cancellable | null): SystemInformation
    get_user_agent(): string | null
    get_users_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_users_finish(result: Gio.AsyncResult): UserInformation[]
    get_users_sync(cancellable?: Gio.Cancellable | null): UserInformation[]
    install2_async(flags: InstallFlags, name: string, channel?: string | null, revision?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install2_finish(result: Gio.AsyncResult): boolean
    install2_sync(flags: InstallFlags, name: string, channel?: string | null, revision?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    install_async(name: string, channel?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install_finish(result: Gio.AsyncResult): boolean
    install_stream_async(flags: InstallFlags, stream: Gio.InputStream, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install_stream_finish(result: Gio.AsyncResult): boolean
    install_stream_sync(flags: InstallFlags, stream: Gio.InputStream, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    install_sync(name: string, channel?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    list_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_finish(result: Gio.AsyncResult): Snap[]
    list_one_async(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_one_finish(result: Gio.AsyncResult): Snap
    list_one_sync(name: string, cancellable?: Gio.Cancellable | null): Snap
    list_sync(cancellable?: Gio.Cancellable | null): Snap[]
    login2_async(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    login2_finish(result: Gio.AsyncResult): UserInformation
    login2_sync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): UserInformation
    login_async(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    login_finish(result: Gio.AsyncResult): AuthData
    login_sync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): AuthData
    logout_async(id: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    logout_finish(result: Gio.AsyncResult): boolean
    logout_sync(id: number, cancellable?: Gio.Cancellable | null): boolean
    prefer_async(snap: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    prefer_finish(result: Gio.AsyncResult): boolean
    prefer_sync(snap: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    refresh_all_async(progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_all_finish(result: Gio.AsyncResult): string[]
    refresh_all_sync(progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): string[]
    refresh_async(name: string, channel?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(name: string, channel?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    remove2_async(flags: RemoveFlags, name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove2_finish(result: Gio.AsyncResult): boolean
    remove2_sync(flags: RemoveFlags, name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    remove_async(name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    remove_sync(name: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    reset_aliases_async(snap: string, aliases: string[], progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_aliases_finish(result: Gio.AsyncResult): boolean
    reset_aliases_sync(snap: string, aliases: string[], progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    run_snapctl_async(context_id: string, args: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_snapctl_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* stdout_output */ string | null, /* stderr_output */ string | null ]
    run_snapctl_sync(context_id: string, args: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* stdout_output */ string[] | null, /* stderr_output */ string[] | null ]
    set_allow_interaction(allow_interaction: boolean): void
    set_auth_data(auth_data?: AuthData | null): void
    set_snap_conf_async(name: string, key_values: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_snap_conf_finish(result: Gio.AsyncResult): boolean
    set_snap_conf_sync(name: string, key_values: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    set_socket_path(socket_path?: string | null): void
    set_user_agent(user_agent?: string | null): void
    switch_async(name: string, channel: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    switch_finish(result: Gio.AsyncResult): boolean
    switch_sync(name: string, channel: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    try_async(path: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_finish(result: Gio.AsyncResult): boolean
    try_sync(path: string, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    unalias_async(snap?: string | null, alias?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unalias_finish(result: Gio.AsyncResult): boolean
    unalias_sync(snap?: string | null, alias?: string | null, progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
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
    static new_from_socket(socket: Gio.Socket): Client
    static $gtype: GObject.Type
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    gadget?: boolean
    interface?: string
    manual?: boolean
    name?: string
    plug?: PlugRef
    plug_attrs?: GLib.HashTable
    slot?: SlotRef
    slot_attrs?: GLib.HashTable
    snap?: string
}
export class Connection {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Connection */
    get_gadget(): boolean
    get_interface(): string
    get_manual(): boolean
    get_name(): string
    get_plug(): PlugRef
    get_plug_attribute(name: string): GLib.Variant | null
    get_plug_attribute_names(): [ /* returnType */ string[], /* length */ number | null ]
    get_slot(): SlotRef
    get_slot_attribute(name: string): GLib.Variant | null
    get_slot_attribute_names(): [ /* returnType */ string[], /* length */ number | null ]
    get_snap(): string
    has_plug_attribute(name: string): boolean
    has_slot_attribute(name: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Icon_ConstructProps extends GObject.Object_ConstructProps {
    data?: GLib.Bytes
    mime_type?: string
}
export class Icon {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Icon */
    get_data(): GLib.Bytes
    get_mime_type(): string
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
    connect(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Icon_ConstructProps)
    _init (config?: Icon_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Interface_ConstructProps extends GObject.Object_ConstructProps {
    doc_url?: string
    name?: string
    plugs?: object[]
    slots?: object[]
    summary?: string
}
export class Interface {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Interface */
    get_doc_url(): string
    get_name(): string
    get_plugs(): Plug[]
    get_slots(): Slot[]
    get_summary(): string
    make_label(): string
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
    connect(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Maintenance_ConstructProps extends GObject.Object_ConstructProps {
    kind?: MaintenanceKind
    message?: string
}
export class Maintenance {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Maintenance */
    get_kind(): MaintenanceKind
    get_message(): string
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
    connect(sigName: "notify", callback: (($obj: Maintenance, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Maintenance, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Maintenance_ConstructProps)
    _init (config?: Maintenance_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MarkdownNode_ConstructProps extends GObject.Object_ConstructProps {
    children?: object[]
    node_type?: MarkdownNodeType
    text?: string
}
export class MarkdownNode {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.MarkdownNode */
    get_children(): MarkdownNode[]
    get_node_type(): MarkdownNodeType
    get_text(): string
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
    connect(sigName: "notify", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MarkdownNode_ConstructProps)
    _init (config?: MarkdownNode_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MarkdownParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class MarkdownParser {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.MarkdownParser */
    get_preserve_whitespace(): boolean
    parse(text: string): MarkdownNode[]
    set_preserve_whitespace(preserve_whitespace: boolean): void
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
    connect(sigName: "notify", callback: (($obj: MarkdownParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MarkdownParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MarkdownParser_ConstructProps)
    _init (config?: MarkdownParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(version: MarkdownVersion): MarkdownParser
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends GObject.Object_ConstructProps {
    height?: number
    type?: string
    url?: string
    width?: number
}
export class Media {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Media */
    get_height(): number
    get_media_type(): string
    get_url(): string
    get_width(): number
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
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plug_ConstructProps extends GObject.Object_ConstructProps {
    attributes?: GLib.HashTable
    connections?: object[]
    interface?: string
    label?: string
    name?: string
    snap?: string
}
export class Plug {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Plug */
    get_attribute(name: string): GLib.Variant | null
    get_attribute_names(): [ /* returnType */ string[], /* length */ number | null ]
    get_connected_slots(): SlotRef[]
    get_connections(): Connection[]
    get_interface(): string
    get_label(): string
    get_name(): string
    get_snap(): string
    has_attribute(name: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plug_ConstructProps)
    _init (config?: Plug_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlugRef_ConstructProps extends GObject.Object_ConstructProps {
    plug?: string
    snap?: string
}
export class PlugRef {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.PlugRef */
    get_plug(): string
    get_snap(): string
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
    connect(sigName: "notify", callback: (($obj: PlugRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlugRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlugRef_ConstructProps)
    _init (config?: PlugRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Price_ConstructProps extends GObject.Object_ConstructProps {
    amount?: number
    currency?: string
}
export class Price {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Price */
    get_amount(): number
    get_currency(): string
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
    connect(sigName: "notify", callback: (($obj: Price, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Price, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Price_ConstructProps)
    _init (config?: Price_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
    height?: number
    url?: string
    width?: number
}
export class Screenshot {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Screenshot */
    get_height(): number
    get_url(): string
    get_width(): number
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
    connect(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Slot_ConstructProps extends GObject.Object_ConstructProps {
    attributes?: GLib.HashTable
    connections?: object[]
    interface?: string
    label?: string
    name?: string
    snap?: string
}
export class Slot {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Slot */
    get_attribute(name: string): GLib.Variant | null
    get_attribute_names(): [ /* returnType */ string[], /* length */ number | null ]
    get_connected_plugs(): PlugRef[]
    get_connections(): Connection[]
    get_interface(): string
    get_label(): string
    get_name(): string
    get_snap(): string
    has_attribute(name: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Slot_ConstructProps)
    _init (config?: Slot_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SlotRef_ConstructProps extends GObject.Object_ConstructProps {
    slot?: string
    snap?: string
}
export class SlotRef {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.SlotRef */
    get_slot(): string
    get_snap(): string
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
    connect(sigName: "notify", callback: (($obj: SlotRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SlotRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SlotRef_ConstructProps)
    _init (config?: SlotRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Snap_ConstructProps extends GObject.Object_ConstructProps {
    apps?: object[]
    base?: string
    broken?: string
    channel?: string
    channels?: object[]
    common_ids?: string[]
    confinement?: Confinement
    contact?: string
    description?: string
    developer?: string
    devmode?: boolean
    download_size?: number
    icon?: string
    id?: string
    install_date?: GLib.DateTime
    installed_size?: number
    jailmode?: boolean
    license?: string
    media?: object[]
    mounted_from?: string
    name?: string
    prices?: object[]
    private?: boolean
    publisher_display_name?: string
    publisher_id?: string
    publisher_username?: string
    publisher_validation?: PublisherValidation
    revision?: string
    screenshots?: object[]
    snap_type?: SnapType
    status?: SnapStatus
    summary?: string
    title?: string
    tracking_channel?: string
    tracks?: string[]
    trymode?: boolean
    version?: string
    website?: string
}
export class Snap {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Snap */
    get_apps(): App[]
    get_base(): string | null
    get_broken(): string | null
    get_channel(): string
    get_channels(): Channel[]
    get_common_ids(): string[]
    get_confinement(): Confinement
    get_contact(): string
    get_description(): string
    get_developer(): string
    get_devmode(): boolean
    get_download_size(): number
    get_icon(): string
    get_id(): string
    get_install_date(): GLib.DateTime | null
    get_installed_size(): number
    get_jailmode(): boolean
    get_license(): string | null
    get_media(): Media[]
    get_mounted_from(): string | null
    get_name(): string
    get_prices(): Price[]
    get_private(): boolean
    get_publisher_display_name(): string
    get_publisher_id(): string
    get_publisher_username(): string
    get_publisher_validation(): PublisherValidation
    get_revision(): string
    get_screenshots(): Screenshot[]
    get_snap_type(): SnapType
    get_status(): SnapStatus
    get_summary(): string
    get_title(): string | null
    get_tracking_channel(): string
    get_tracks(): string[]
    get_trymode(): boolean
    get_version(): string
    get_website(): string
    match_channel(name: string): Channel | null
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
    connect(sigName: "notify", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Snap_ConstructProps)
    _init (config?: Snap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SystemInformation_ConstructProps extends GObject.Object_ConstructProps {
    binaries_directory?: string
    build_id?: string
    confinement?: SystemConfinement
    kernel_version?: string
    managed?: boolean
    mount_directory?: string
    on_classic?: boolean
    os_id?: string
    os_version?: string
    refresh_hold?: GLib.DateTime
    refresh_last?: GLib.DateTime
    refresh_next?: GLib.DateTime
    refresh_schedule?: string
    refresh_timer?: string
    sandbox_features?: object
    series?: string
    store?: string
    version?: string
}
export class SystemInformation {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.SystemInformation */
    get_binaries_directory(): string
    get_build_id(): string
    get_confinement(): SystemConfinement
    get_kernel_version(): string
    get_managed(): boolean
    get_mount_directory(): string
    get_on_classic(): boolean
    get_os_id(): string
    get_os_version(): string
    get_refresh_hold(): GLib.DateTime | null
    get_refresh_last(): GLib.DateTime | null
    get_refresh_next(): GLib.DateTime | null
    get_refresh_schedule(): string | null
    get_refresh_timer(): string | null
    get_sandbox_features(): GLib.HashTable
    get_series(): string
    get_store(): string | null
    get_version(): string
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
    connect(sigName: "notify", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemInformation_ConstructProps)
    _init (config?: SystemInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    kind?: string
    progress_done?: number
    progress_label?: string
    progress_total?: number
    ready?: boolean
    ready_time?: GLib.DateTime
    spawn_time?: GLib.DateTime
    status?: string
    summary?: string
}
export class Task {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.Task */
    get_id(): string
    get_kind(): string
    get_progress_done(): number
    get_progress_label(): string
    get_progress_total(): number
    get_ready(): boolean
    get_ready_time(): GLib.DateTime | null
    get_spawn_time(): GLib.DateTime
    get_status(): string
    get_summary(): string
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
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UserInformation_ConstructProps extends GObject.Object_ConstructProps {
    auth_data?: AuthData
    email?: string
    id?: number
    ssh_keys?: string[]
    username?: string
}
export class UserInformation {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Snapd.UserInformation */
    get_auth_data(): AuthData | null
    get_email(): string
    get_id(): number
    get_ssh_keys(): string[]
    get_username(): string
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
    connect(sigName: "notify", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserInformation_ConstructProps)
    _init (config?: UserInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AliasClass {
    /* Fields of Snapd.AliasClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AppClass {
    /* Fields of Snapd.AppClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AssertionClass {
    /* Fields of Snapd.AssertionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AuthDataClass {
    /* Fields of Snapd.AuthDataClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ChangeClass {
    /* Fields of Snapd.ChangeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ChannelClass {
    /* Fields of Snapd.ChannelClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ClientClass {
    static name: string
}
export abstract class ConnectionClass {
    /* Fields of Snapd.ConnectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class IconClass {
    /* Fields of Snapd.IconClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class InterfaceClass {
    /* Fields of Snapd.InterfaceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MaintenanceClass {
    /* Fields of Snapd.MaintenanceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MarkdownNodeClass {
    /* Fields of Snapd.MarkdownNodeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MarkdownParserClass {
    /* Fields of Snapd.MarkdownParserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MediaClass {
    /* Fields of Snapd.MediaClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PlugClass {
    /* Fields of Snapd.PlugClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PlugRefClass {
    /* Fields of Snapd.PlugRefClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PriceClass {
    /* Fields of Snapd.PriceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ScreenshotClass {
    /* Fields of Snapd.ScreenshotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SlotClass {
    /* Fields of Snapd.SlotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SlotRefClass {
    /* Fields of Snapd.SlotRefClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SnapClass {
    /* Fields of Snapd.SnapClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SystemInformationClass {
    /* Fields of Snapd.SystemInformationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TaskClass {
    /* Fields of Snapd.TaskClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class UserInformationClass {
    /* Fields of Snapd.UserInformationClass */
    parent_class: GObject.ObjectClass
    static name: string
}