/**
 * PackageKitPlugin-1.0
 */

import type * as Gjs from './Gjs';
import type * as PackageKitGlib from './PackageKitGlib-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum BackendJobSignal {
    ALLOW_CANCEL,
    DETAILS,
    ERROR_CODE,
    DISTRO_UPGRADE,
    FINISHED,
    PACKAGE,
    ITEM_PROGRESS,
    FILES,
    PERCENTAGE,
    REMAINING,
    SPEED,
    DOWNLOAD_SIZE_REMAINING,
    REPO_DETAIL,
    REPO_SIGNATURE_REQUIRED,
    EULA_REQUIRED,
    MEDIA_CHANGE_REQUIRED,
    REQUIRE_RESTART,
    STATUS_CHANGED,
    LOCKED_CHANGED,
    UPDATE_DETAIL,
    CATEGORY,
    LAST,
}
export enum HintEnum {
    FALSE,
    TRUE,
    UNSET,
    INVALID,
    LAST,
}
export enum PluginPhase {
    INIT,
    TRANSACTION_CONTENT_TYPES,
    TRANSACTION_RUN,
    TRANSACTION_STARTED,
    TRANSACTION_FINISHED_RESULTS,
    TRANSACTION_FINISHED_END,
    DESTROY,
    STATE_CHANGED,
    UNKNOWN,
}
export enum TransactionState {
    NEW,
    WAITING_FOR_AUTH,
    COMMITTED,
    READY,
    RUNNING,
    FINISHED,
    UNKNOWN,
}
export const BACKEND_PERCENTAGE_INVALID: number
export const TRANSACTION_ALL_BACKEND_SIGNALS: number
export const TRANSACTION_NO_BACKEND_SIGNALS: number
export function directory_remove_contents(directory: string): boolean
export function get_resource(): Gio.Resource
export function hint_enum_from_string(hint: string): HintEnum
export function hint_enum_to_string(hint: HintEnum): string
export function load_introspection(filename: string): Gio.DBusNodeInfo
export function plugin_get_description(): string
export function strlen(text: string, len: number): number
export function strtoint(text: string, value: number): boolean
export function strtouint(text: string, value: number): boolean
export function strtouint64(text: string, value: number): boolean
export function strzero(text: string): boolean
export interface BackendFileChanged {
    (backend: Backend, data: object): void
}
export interface BackendJobThreadFunc {
    (job: BackendJob, params: GLib.Variant): void
}
export interface BackendJobVFunc {
    (job: BackendJob, object: object): void
}
export interface PluginFunc {
    (plugin: Plugin): void
}
export interface PluginGetActionFunc {
    (plugin: Plugin, transaction: Transaction, action_id: string): string
}
export interface PluginGetDescFunc {
    (): string
}
export interface PluginTransactionFunc {
    (plugin: Plugin, transaction: Transaction): void
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
export class Backend {
    /* Fields of PackageKitPlugin.Backend */
    parent: GObject.Object
    priv: BackendPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitPlugin.Backend */
    accept_eula(eula_id: string): void
    cancel(job: BackendJob): void
    depends_on(job: BackendJob, filters: PackageKitGlib.Bitfield, package_ids: string, recursive: boolean): void
    destroy(): void
    download_packages(job: BackendJob, package_ids: string, directory: string): void
    get_accepted_eula_string(): string
    get_author(): string
    get_categories(job: BackendJob): void
    get_description(): string
    get_details(job: BackendJob, package_ids: string): void
    get_details_local(job: BackendJob, files: string): void
    get_distro_upgrades(job: BackendJob): void
    get_files(job: BackendJob, package_ids: string): void
    get_files_local(job: BackendJob, files: string): void
    get_filters(): PackageKitGlib.Bitfield
    get_groups(): PackageKitGlib.Bitfield
    get_mime_types(): string[]
    get_name(): string
    get_packages(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    get_repo_list(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    get_roles(): PackageKitGlib.Bitfield
    get_update_detail(job: BackendJob, package_ids: string): void
    get_updates(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    implement(role: PackageKitGlib.RoleEnum): void
    install_files(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, full_paths: string): void
    install_packages(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, package_ids: string): void
    install_signature(job: BackendJob, type: PackageKitGlib.SigTypeEnum, key_id: string, package_id: string): void
    is_eula_valid(eula_id: string): boolean
    is_implemented(role: PackageKitGlib.RoleEnum): boolean
    is_online(): boolean
    load(): boolean
    refresh_cache(job: BackendJob, force: boolean): void
    remove_packages(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, package_ids: string, allow_deps: boolean, autoremove: boolean): void
    repair_system(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield): void
    repo_enable(job: BackendJob, repo_id: string, enabled: boolean): void
    repo_list_changed(): boolean
    repo_remove(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, repo_id: string, autoremove: boolean): void
    repo_set_data(job: BackendJob, repo_id: string, parameter: string, value: string): void
    required_by(job: BackendJob, filters: PackageKitGlib.Bitfield, package_ids: string, recursive: boolean): void
    reset_job(job: BackendJob): void
    resolve(job: BackendJob, filters: PackageKitGlib.Bitfield, packages: string): void
    search_details(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    search_files(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    search_groups(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    search_names(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    start_job(job: BackendJob): void
    stop_job(job: BackendJob): void
    supports_parallelization(): boolean
    thread_start(job: BackendJob, func: object): void
    thread_stop(job: BackendJob, func: object): void
    unload(): boolean
    update_packages(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, package_ids: string): void
    watch_file(filename: string, func: BackendFileChanged): boolean
    what_provides(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
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
    static new(conf: GLib.KeyFile): Backend
    static bool_to_string(value: boolean): string
    static initialize(conf: GLib.KeyFile, backend: Backend): void
    static $gtype: GObject.Type
}
export interface BackendJob_ConstructProps extends GObject.Object_ConstructProps {
}
export class BackendJob {
    /* Fields of PackageKitPlugin.BackendJob */
    parent: GObject.Object
    priv: BackendJobPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitPlugin.BackendJob */
    category(parent_id: string, cat_id: string, name: string, summary: string, icon: string): void
    details(package_id: string, summary: string, license: string, group: PackageKitGlib.GroupEnum, description: string, url: string, size: number): void
    distro_upgrade(type: PackageKitGlib.DistroUpgradeEnum, name: string, summary: string): void
    eula_required(eula_id: string, package_id: string, vendor_name: string, license_agreement: string): void
    files(package_id: string, files: string): void
    finished(): void
    get_allow_cancel(): boolean
    get_backend(): object
    get_background(): HintEnum
    get_cache_age(): number
    get_cmdline(): string
    get_exit_code(): PackageKitGlib.ExitEnum
    get_frontend_socket(): string
    get_interactive(): HintEnum
    get_is_error_set(): boolean
    get_is_finished(): boolean
    get_locale(): string
    get_locked(): boolean
    get_no_proxy(): string
    get_pac(): string
    get_parameters(): GLib.Variant
    get_proxy_ftp(): string
    get_proxy_http(): string
    get_proxy_https(): string
    get_proxy_socks(): string
    get_role(): PackageKitGlib.RoleEnum
    get_runtime(): number
    get_started(): boolean
    get_transaction_flags(): PackageKitGlib.Bitfield
    get_uid(): number
    get_user_data(): object
    get_vfunc_enabled(signal_kind: BackendJobSignal): boolean
    has_set_error_code(): boolean
    media_change_required(media_type: PackageKitGlib.MediaTypeEnum, media_id: string, media_text: string): void
    not_implemented_yet(method: string): void
    package(info: PackageKitGlib.InfoEnum, package_id: string, summary: string): void
    repo_detail(repo_id: string, description: string, enabled: boolean): void
    repo_signature_required(package_id: string, repository_name: string, key_url: string, key_userid: string, key_id: string, key_fingerprint: string, key_timestamp: string, type: PackageKitGlib.SigTypeEnum): void
    require_restart(restart: PackageKitGlib.RestartEnum, package_id: string): void
    reset(): void
    set_allow_cancel(allow_cancel: boolean): void
    set_backend(backend: object): void
    set_background(background: HintEnum): void
    set_cache_age(cache_age: number): void
    set_cmdline(cmdline: string): void
    set_download_size_remaining(download_size_remaining: number): void
    set_exit_code(exit: PackageKitGlib.ExitEnum): void
    set_frontend_socket(frontend_socket: string): void
    set_interactive(interactive: HintEnum): void
    set_item_progress(package_id: string, status: PackageKitGlib.StatusEnum, percentage: number): void
    set_locale(code: string): void
    set_locked(locked: boolean): void
    set_parameters(params: GLib.Variant): void
    set_percentage(percentage: number): void
    set_proxy(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string): void
    set_role(role: PackageKitGlib.RoleEnum): void
    set_speed(speed: number): void
    set_started(started: boolean): void
    set_status(status: PackageKitGlib.StatusEnum): void
    set_transaction_flags(transaction_flags: PackageKitGlib.Bitfield): void
    set_uid(uid: number): void
    set_user_data(user_data: object): void
    set_vfunc(signal_kind: BackendJobSignal, vfunc: BackendJobVFunc): void
    thread_create(func: BackendJobThreadFunc): boolean
    update_detail(package_id: string, updates: string, obsoletes: string, vendor_urls: string, bugzilla_urls: string, cve_urls: string, restart: PackageKitGlib.RestartEnum, update_text: string, changelog: string, state: PackageKitGlib.UpdateStateEnum, issued: string, updated: string): void
    use_background(): boolean
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
    connect(sigName: "notify", callback: (($obj: BackendJob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackendJob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackendJob_ConstructProps)
    _init (config?: BackendJob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(conf: GLib.KeyFile): BackendJob
    static $gtype: GObject.Type
}
export interface Transaction_ConstructProps extends GObject.Object_ConstructProps {
}
export class Transaction {
    /* Fields of PackageKitPlugin.Transaction */
    parent: GObject.Object
    priv: TransactionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitPlugin.Transaction */
    add_supported_content_type(mime_type: string): void
    cancel_bg(): void
    get_backend_job(): BackendJob
    get_conf(): GLib.KeyFile
    get_full_paths(): string[]
    get_package_ids(): string[]
    get_results(): PackageKitGlib.Results
    get_role(): PackageKitGlib.RoleEnum
    get_state(): TransactionState
    get_tid(): string
    get_transaction_flags(): PackageKitGlib.Bitfield
    get_uid(): number
    get_values(): string[]
    is_exclusive(): boolean
    is_finished_with_lock_required(): boolean
    make_exclusive(): void
    reset_after_lock_error(): void
    run(): boolean
    set_backend(backend: Backend): void
    set_full_paths(full_paths: string): void
    set_package_ids(package_ids: string): void
    set_state(state: TransactionState): boolean
    signals_reset(job: BackendJob): void
    skip_auth_checks(skip_checks: boolean): void
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
    /* Signals of PackageKitPlugin.Transaction */
    connect(sigName: "finished", callback: (($obj: Transaction) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Transaction) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transaction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(conf: GLib.KeyFile, introspection: Gio.DBusNodeInfo): Transaction
    static error_quark(): GLib.Quark
    static state_to_string(state: TransactionState): string
    static $gtype: GObject.Type
}
export abstract class BackendClass {
    /* Fields of PackageKitPlugin.BackendClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BackendJobClass {
    /* Fields of PackageKitPlugin.BackendJobClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BackendJobPrivate {
    static name: string
}
export class BackendPrivate {
    static name: string
}
export class Plugin {
    /* Fields of PackageKitPlugin.Plugin */
    backend: Backend
    job: BackendJob
    priv: PluginPrivate
    /* Methods of PackageKitPlugin.Plugin */
    destroy(): void
    initialize(): void
    state_changed(): void
    transaction_content_types(transaction: Transaction): void
    transaction_finished_end(transaction: Transaction): void
    transaction_finished_results(transaction: Transaction): void
    transaction_get_action(transaction: Transaction, action_id: string): string
    transaction_run(transaction: Transaction): void
    transaction_started(transaction: Transaction): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get_description(): string
}
export class PluginPrivate {
    static name: string
}
export abstract class TransactionClass {
    /* Fields of PackageKitPlugin.TransactionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TransactionPrivate {
    static name: string
}