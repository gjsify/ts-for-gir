/**
 * Flatpak-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum Error {
    ALREADY_INSTALLED,
    NOT_INSTALLED,
    ONLY_PULLED,
    DIFFERENT_REMOTE,
    ABORTED,
    SKIPPED,
    NEED_NEW_FLATPAK,
    REMOTE_NOT_FOUND,
    RUNTIME_NOT_FOUND,
    DOWNGRADE,
    INVALID_REF,
    INVALID_DATA,
    UNTRUSTED,
    SETUP_FAILED,
    EXPORT_FAILED,
    REMOTE_USED,
    RUNTIME_USED,
    INVALID_NAME,
    OUT_OF_SPACE,
    WRONG_USER,
    NOT_CACHED,
    REF_NOT_FOUND,
    PERMISSION_DENIED,
    AUTHENTICATION_FAILED,
    NOT_AUTHORIZED,
}
export enum PortalError {
    FAILED,
    INVALID_ARGUMENT,
    NOT_FOUND,
    EXISTS,
    NOT_ALLOWED,
    CANCELLED,
    WINDOW_DESTROYED,
}
export enum RefKind {
    APP,
    RUNTIME,
}
export enum RemoteType {
    STATIC,
    USB,
    LAN,
}
export enum StorageType {
    DEFAULT,
    HARD_DISK,
    SDCARD,
    MMC,
    NETWORK,
}
export enum TransactionOperationType {
    INSTALL,
    UPDATE,
    INSTALL_BUNDLE,
    UNINSTALL,
    LAST_TYPE,
}
export enum TransactionRemoteReason {
    GENERIC_REPO,
    RUNTIME_DEPS,
}
export enum InstallFlags {
    NONE,
    NO_STATIC_DELTAS,
    NO_DEPLOY,
    NO_PULL,
    NO_TRIGGERS,
}
export enum LaunchFlags {
    NONE,
    DO_NOT_REAP,
}
export enum QueryFlags {
    NONE,
    ONLY_CACHED,
    ONLY_SIDELOADED,
}
export enum TransactionErrorDetails {
    FATAL,
}
export enum TransactionResult {
    CHANGE,
}
export enum UninstallFlags {
    NONE,
    NO_PRUNE,
    NO_TRIGGERS,
}
export enum UpdateFlags {
    NONE,
    NO_DEPLOY,
    NO_PULL,
    NO_STATIC_DELTAS,
    NO_PRUNE,
    NO_TRIGGERS,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function error_quark(): GLib.Quark
export function get_default_arch(): string
export function get_supported_arches(): string[]
export function get_system_installations(cancellable?: Gio.Cancellable | null): Installation[]
export function portal_error_quark(): GLib.Quark
export function transaction_operation_type_to_string(kind: TransactionOperationType): string
export interface ProgressCallback {
    (status: string, progress: number, estimating: boolean): void
}
export interface BundleRef_ConstructProps extends Ref_ConstructProps {
    file?: Gio.File
}
export class BundleRef {
    /* Fields of Flatpak.BundleRef */
    parent: Ref
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.BundleRef */
    get_appstream(): GLib.Bytes
    get_file(): Gio.File
    get_icon(size: number): GLib.Bytes
    get_installed_size(): number
    get_metadata(): GLib.Bytes
    get_origin(): string
    get_runtime_repo_url(): string
    /* Methods of Flatpak.Ref */
    format_ref(): string
    get_arch(): string
    get_branch(): string
    get_collection_id(): string
    get_commit(): string
    get_kind(): RefKind
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: BundleRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BundleRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BundleRef_ConstructProps)
    _init (config?: BundleRef_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): BundleRef
    static $gtype: GObject.Type
}
export interface Installation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Installation {
    /* Fields of Flatpak.Installation */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.Installation */
    add_remote(remote: Remote, if_needed: boolean, cancellable?: Gio.Cancellable | null): boolean
    cleanup_local_refs_sync(cancellable?: Gio.Cancellable | null): boolean
    create_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    drop_caches(cancellable?: Gio.Cancellable | null): boolean
    fetch_remote_metadata_sync(remote_name: string, ref: Ref, cancellable?: Gio.Cancellable | null): GLib.Bytes
    fetch_remote_ref_sync(remote_name: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): RemoteRef
    fetch_remote_ref_sync_full(remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, flags: QueryFlags, cancellable?: Gio.Cancellable | null): RemoteRef
    fetch_remote_size_sync(remote_name: string, ref: Ref, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* download_size */ number, /* installed_size */ number ]
    get_config(key: string, cancellable?: Gio.Cancellable | null): string
    get_current_installed_app(name: string, cancellable?: Gio.Cancellable | null): InstalledRef
    get_default_languages(): string[]
    get_default_locales(): string[]
    get_display_name(): string
    get_id(): string
    get_installed_ref(kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    get_is_user(): boolean
    get_min_free_space_bytes(): [ /* returnType */ boolean, /* out_bytes */ number ]
    get_no_interaction(): boolean
    get_path(): Gio.File
    get_priority(): number
    get_remote_by_name(name: string, cancellable?: Gio.Cancellable | null): Remote
    get_storage_type(): StorageType
    install(remote_name: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    install_bundle(file: Gio.File, cancellable?: Gio.Cancellable | null): InstalledRef
    install_full(flags: InstallFlags, remote_name: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, subpaths?: string[] | null, cancellable?: Gio.Cancellable | null): InstalledRef
    install_ref_file(ref_file_data: GLib.Bytes, cancellable?: Gio.Cancellable | null): RemoteRef
    launch(name: string, arch?: string | null, branch?: string | null, commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
    launch_full(flags: LaunchFlags, name: string, arch?: string | null, branch?: string | null, commit?: string | null, instance_out?: Instance | null, cancellable?: Gio.Cancellable | null): boolean
    list_installed_refs(cancellable?: Gio.Cancellable | null): InstalledRef[]
    list_installed_refs_by_kind(kind: RefKind, cancellable?: Gio.Cancellable | null): InstalledRef[]
    list_installed_refs_for_update(cancellable?: Gio.Cancellable | null): InstalledRef[]
    list_installed_related_refs_sync(remote_name: string, ref: string, cancellable?: Gio.Cancellable | null): RelatedRef[]
    list_remote_refs_sync(remote_or_uri: string, cancellable?: Gio.Cancellable | null): RemoteRef[]
    list_remote_refs_sync_full(remote_or_uri: string, flags: QueryFlags, cancellable?: Gio.Cancellable | null): RemoteRef[]
    list_remote_related_refs_sync(remote_name: string, ref: string, cancellable?: Gio.Cancellable | null): RelatedRef[]
    list_remotes(cancellable?: Gio.Cancellable | null): Remote[]
    list_remotes_by_type(types: RemoteType[], cancellable?: Gio.Cancellable | null): Remote[]
    list_unused_refs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[]
    load_app_overrides(app_id: string, cancellable?: Gio.Cancellable | null): string
    modify_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean
    prune_local_repo(cancellable?: Gio.Cancellable | null): boolean
    remove_local_ref_sync(remote_name: string, ref: string, cancellable?: Gio.Cancellable | null): boolean
    remove_remote(name: string, cancellable?: Gio.Cancellable | null): boolean
    run_triggers(cancellable?: Gio.Cancellable | null): boolean
    set_config_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    set_no_interaction(no_interaction: boolean): void
    uninstall(kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): boolean
    uninstall_full(flags: UninstallFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): boolean
    update(flags: UpdateFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    update_appstream_full_sync(remote_name: string, arch?: string | null, out_changed?: boolean | null, cancellable?: Gio.Cancellable | null): boolean
    update_appstream_sync(remote_name: string, arch?: string | null, out_changed?: boolean | null, cancellable?: Gio.Cancellable | null): boolean
    update_full(flags: UpdateFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, subpaths?: string[] | null, cancellable?: Gio.Cancellable | null): InstalledRef
    update_remote_sync(name: string, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Installation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Installation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Installation_ConstructProps)
    _init (config?: Installation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_path(path: Gio.File, user: boolean, cancellable?: Gio.Cancellable | null): Installation
    static new_system(cancellable?: Gio.Cancellable | null): Installation
    static new_system_with_id(id?: string | null, cancellable?: Gio.Cancellable | null): Installation
    static new_user(cancellable?: Gio.Cancellable | null): Installation
    static $gtype: GObject.Type
}
export interface InstalledRef_ConstructProps extends Ref_ConstructProps {
    appdata_content_rating?: GLib.HashTable
    appdata_content_rating_type?: string
    appdata_license?: string
    appdata_name?: string
    appdata_summary?: string
    appdata_version?: string
    deploy_dir?: string
    end_of_life?: string
    end_of_life_rebase?: string
    installed_size?: number
    is_current?: boolean
    latest_commit?: string
    origin?: string
    subpaths?: string[]
}
export class InstalledRef {
    /* Properties of Flatpak.InstalledRef */
    deploy_dir: string
    installed_size: number
    is_current: boolean
    latest_commit: string
    origin: string
    subpaths: string[]
    /* Fields of Flatpak.InstalledRef */
    parent: Ref
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.InstalledRef */
    get_appdata_content_rating(): GLib.HashTable | null
    get_appdata_content_rating_type(): string | null
    get_appdata_license(): string
    get_appdata_name(): string
    get_appdata_summary(): string
    get_appdata_version(): string
    get_deploy_dir(): string
    get_eol(): string
    get_eol_rebase(): string
    get_installed_size(): number
    get_is_current(): boolean
    get_latest_commit(): string | null
    get_origin(): string
    get_subpaths(): string[]
    load_appdata(cancellable?: Gio.Cancellable | null): GLib.Bytes
    load_metadata(cancellable?: Gio.Cancellable | null): GLib.Bytes
    /* Methods of Flatpak.Ref */
    format_ref(): string
    get_arch(): string
    get_branch(): string
    get_collection_id(): string
    get_commit(): string
    get_kind(): RefKind
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deploy-dir", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deploy-dir", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::installed-size", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installed-size", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-current", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-current", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latest-commit", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latest-commit", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::origin", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subpaths", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpaths", callback: (($obj: InstalledRef, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstalledRef_ConstructProps)
    _init (config?: InstalledRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Instance_ConstructProps extends GObject.Object_ConstructProps {
}
export class Instance {
    /* Fields of Flatpak.Instance */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.Instance */
    get_app(): string
    get_arch(): string
    get_branch(): string
    get_child_pid(): number
    get_commit(): string
    get_id(): string
    get_info(): GLib.KeyFile
    get_pid(): number
    get_runtime(): string
    get_runtime_commit(): string
    is_running(): boolean
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
    connect(sigName: "notify", callback: (($obj: Instance, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Instance, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Instance_ConstructProps)
    _init (config?: Instance_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_all(): Instance[]
    static $gtype: GObject.Type
}
export interface Ref_ConstructProps extends GObject.Object_ConstructProps {
    arch?: string
    branch?: string
    collection_id?: string
    commit?: string
    kind?: RefKind
    name?: string
}
export class Ref {
    /* Fields of Flatpak.Ref */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.Ref */
    format_ref(): string
    get_arch(): string
    get_branch(): string
    get_collection_id(): string
    get_commit(): string
    get_kind(): RefKind
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Ref_ConstructProps)
    _init (config?: Ref_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(ref: string): Ref
    static $gtype: GObject.Type
}
export interface RelatedRef_ConstructProps extends Ref_ConstructProps {
    should_autoprune?: boolean
    should_delete?: boolean
    should_download?: boolean
    subpaths?: string[]
}
export class RelatedRef {
    /* Fields of Flatpak.RelatedRef */
    parent: Ref
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.RelatedRef */
    get_subpaths(): string[]
    should_autoprune(): boolean
    should_delete(): boolean
    should_download(): boolean
    /* Methods of Flatpak.Ref */
    format_ref(): string
    get_arch(): string
    get_branch(): string
    get_collection_id(): string
    get_commit(): string
    get_kind(): RefKind
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: RelatedRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelatedRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RelatedRef_ConstructProps)
    _init (config?: RelatedRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Remote_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    type?: RemoteType
}
export class Remote {
    /* Properties of Flatpak.Remote */
    name: string
    /* Fields of Flatpak.Remote */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.Remote */
    get_appstream_dir(arch?: string | null): Gio.File
    get_appstream_timestamp(arch?: string | null): Gio.File
    get_collection_id(): string | null
    get_comment(): string
    get_default_branch(): string
    get_description(): string
    get_disabled(): boolean
    get_filter(): string
    get_gpg_verify(): boolean
    get_homepage(): string
    get_icon(): string
    get_main_ref(): string
    get_name(): string
    get_nodeps(): boolean
    get_noenumerate(): boolean
    get_prio(): number
    get_remote_type(): RemoteType
    get_title(): string
    get_url(): string
    set_collection_id(collection_id?: string | null): void
    set_comment(comment: string): void
    set_default_branch(default_branch: string): void
    set_description(description: string): void
    set_disabled(disabled: boolean): void
    set_filter(filter_path: string): void
    set_gpg_key(gpg_key: GLib.Bytes): void
    set_gpg_verify(gpg_verify: boolean): void
    set_homepage(homepage: string): void
    set_icon(icon: string): void
    set_main_ref(main_ref: string): void
    set_nodeps(nodeps: boolean): void
    set_noenumerate(noenumerate: boolean): void
    set_prio(prio: number): void
    set_title(title: string): void
    set_url(url: string): void
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
    connect(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Remote
    static new_from_file(name: string, data: GLib.Bytes): Remote
    static $gtype: GObject.Type
}
export interface RemoteRef_ConstructProps extends Ref_ConstructProps {
    download_size?: number
    end_of_life?: string
    end_of_life_rebase?: string
    installed_size?: number
    metadata?: GLib.Bytes
    remote_name?: string
}
export class RemoteRef {
    /* Fields of Flatpak.RemoteRef */
    parent: Ref
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.RemoteRef */
    get_download_size(): number
    get_eol(): string
    get_eol_rebase(): string
    get_installed_size(): number
    get_metadata(): GLib.Bytes | null
    get_remote_name(): string
    /* Methods of Flatpak.Ref */
    format_ref(): string
    get_arch(): string
    get_branch(): string
    get_collection_id(): string
    get_commit(): string
    get_kind(): RefKind
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: RemoteRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteRef_ConstructProps)
    _init (config?: RemoteRef_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transaction_ConstructProps extends GObject.Object_ConstructProps {
    installation?: Installation
}
export class Transaction {
    /* Fields of Flatpak.Transaction */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.Transaction */
    abort_webflow(id: number): void
    add_default_dependency_sources(): void
    add_dependency_source(installation: Installation): void
    add_install(remote: string, ref: string, subpaths?: string[] | null): boolean
    add_install_bundle(file: Gio.File, gpg_data?: GLib.Bytes | null): boolean
    add_install_flatpakref(flatpakref_data: GLib.Bytes): boolean
    add_rebase(remote: string, ref: string, subpaths?: string | null, previous_ids?: string[] | null): boolean
    add_sideload_repo(path: string): void
    add_uninstall(ref: string): boolean
    add_update(ref: string, subpaths?: string[] | null, commit?: string | null): boolean
    complete_basic_auth(id: number, user: string, password: string, options: GLib.Variant): void
    get_current_operation(): TransactionOperation
    get_installation(): Installation
    get_no_deploy(): boolean
    get_no_pull(): boolean
    get_operations(): TransactionOperation[]
    get_parent_window(): string
    is_empty(): boolean
    run(cancellable?: Gio.Cancellable | null): boolean
    set_default_arch(arch: string): void
    set_disable_dependencies(disable_dependencies: boolean): void
    set_disable_prune(disable_prune: boolean): void
    set_disable_related(disable_related: boolean): void
    set_disable_static_deltas(disable_static_deltas: boolean): void
    set_force_uninstall(force_uninstall: boolean): void
    set_no_deploy(no_deploy: boolean): void
    set_no_interaction(no_interaction: boolean): void
    set_no_pull(no_pull: boolean): void
    set_parent_window(parent_window: string): void
    set_reinstall(reinstall: boolean): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Flatpak.Transaction */
    vfunc_add_new_remote(reason: TransactionRemoteReason, from_id: string, remote_name: string, url: string): boolean
    vfunc_basic_auth_start(remote: string, realm: string, options: GLib.Variant, id: number): boolean
    vfunc_choose_remote_for_ref(for_ref: string, runtime_ref: string, remotes: string): number
    vfunc_end_of_lifed(ref: string, reason: string, rebase: string): void
    vfunc_end_of_lifed_with_rebase(remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string): boolean
    vfunc_install_authenticator(remote: string, authenticator_ref: string): void
    vfunc_new_operation(operation: TransactionOperation, progress: TransactionProgress): void
    vfunc_operation_done(operation: TransactionOperation, commit: string, details: TransactionResult): void
    vfunc_operation_error(operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails): boolean
    vfunc_ready(): boolean
    vfunc_run(cancellable?: Gio.Cancellable | null): boolean
    vfunc_webflow_done(options: GLib.Variant, id: number): void
    vfunc_webflow_start(remote: string, url: string, options: GLib.Variant, id: number): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Flatpak.Transaction */
    connect(sigName: "add-new-remote", callback: (($obj: Transaction, reason: TransactionRemoteReason, from_id: string, suggested_remote_name: string, url: string) => boolean)): number
    connect_after(sigName: "add-new-remote", callback: (($obj: Transaction, reason: TransactionRemoteReason, from_id: string, suggested_remote_name: string, url: string) => boolean)): number
    emit(sigName: "add-new-remote", reason: TransactionRemoteReason, from_id: string, suggested_remote_name: string, url: string): void
    connect(sigName: "basic-auth-start", callback: (($obj: Transaction, remote: string, realm: string, options: GLib.Variant, id: number) => boolean)): number
    connect_after(sigName: "basic-auth-start", callback: (($obj: Transaction, remote: string, realm: string, options: GLib.Variant, id: number) => boolean)): number
    emit(sigName: "basic-auth-start", remote: string, realm: string, options: GLib.Variant, id: number): void
    connect(sigName: "choose-remote-for-ref", callback: (($obj: Transaction, for_ref: string, runtime_ref: string, remotes: string[]) => number)): number
    connect_after(sigName: "choose-remote-for-ref", callback: (($obj: Transaction, for_ref: string, runtime_ref: string, remotes: string[]) => number)): number
    emit(sigName: "choose-remote-for-ref", for_ref: string, runtime_ref: string, remotes: string[]): void
    connect(sigName: "end-of-lifed", callback: (($obj: Transaction, ref: string, reason: string, rebase: string) => void)): number
    connect_after(sigName: "end-of-lifed", callback: (($obj: Transaction, ref: string, reason: string, rebase: string) => void)): number
    emit(sigName: "end-of-lifed", ref: string, reason: string, rebase: string): void
    connect(sigName: "end-of-lifed-with-rebase", callback: (($obj: Transaction, remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string[]) => boolean)): number
    connect_after(sigName: "end-of-lifed-with-rebase", callback: (($obj: Transaction, remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string[]) => boolean)): number
    emit(sigName: "end-of-lifed-with-rebase", remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string[]): void
    connect(sigName: "install-authenticator", callback: (($obj: Transaction, remote: string, authenticator_ref: string) => void)): number
    connect_after(sigName: "install-authenticator", callback: (($obj: Transaction, remote: string, authenticator_ref: string) => void)): number
    emit(sigName: "install-authenticator", remote: string, authenticator_ref: string): void
    connect(sigName: "new-operation", callback: (($obj: Transaction, operation: TransactionOperation, progress: TransactionProgress) => void)): number
    connect_after(sigName: "new-operation", callback: (($obj: Transaction, operation: TransactionOperation, progress: TransactionProgress) => void)): number
    emit(sigName: "new-operation", operation: TransactionOperation, progress: TransactionProgress): void
    connect(sigName: "operation-done", callback: (($obj: Transaction, operation: TransactionOperation, commit: string, result: TransactionResult) => void)): number
    connect_after(sigName: "operation-done", callback: (($obj: Transaction, operation: TransactionOperation, commit: string, result: TransactionResult) => void)): number
    emit(sigName: "operation-done", operation: TransactionOperation, commit: string, result: TransactionResult): void
    connect(sigName: "operation-error", callback: (($obj: Transaction, operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => boolean)): number
    connect_after(sigName: "operation-error", callback: (($obj: Transaction, operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => boolean)): number
    emit(sigName: "operation-error", operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails): void
    connect(sigName: "ready", callback: (($obj: Transaction) => boolean)): number
    connect_after(sigName: "ready", callback: (($obj: Transaction) => boolean)): number
    emit(sigName: "ready"): void
    connect(sigName: "webflow-done", callback: (($obj: Transaction, options: GLib.Variant, id: number) => void)): number
    connect_after(sigName: "webflow-done", callback: (($obj: Transaction, options: GLib.Variant, id: number) => void)): number
    emit(sigName: "webflow-done", options: GLib.Variant, id: number): void
    connect(sigName: "webflow-start", callback: (($obj: Transaction, remote: string, url: string, options: GLib.Variant, id: number) => boolean)): number
    connect_after(sigName: "webflow-start", callback: (($obj: Transaction, remote: string, url: string, options: GLib.Variant, id: number) => boolean)): number
    emit(sigName: "webflow-start", remote: string, url: string, options: GLib.Variant, id: number): void
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
    static new_for_installation(installation: Installation, cancellable?: Gio.Cancellable | null): Transaction
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface TransactionOperation_ConstructProps extends GObject.Object_ConstructProps {
}
export class TransactionOperation {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.TransactionOperation */
    get_bundle_path(): Gio.File
    get_commit(): string
    get_download_size(): number
    get_installed_size(): number
    get_is_skipped(): boolean
    get_metadata(): GLib.KeyFile
    get_old_metadata(): GLib.KeyFile
    get_operation_type(): TransactionOperationType
    get_ref(): string
    get_related_to_ops(): TransactionOperation[] | null
    get_remote(): string
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
    connect(sigName: "notify", callback: (($obj: TransactionOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransactionOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransactionOperation_ConstructProps)
    _init (config?: TransactionOperation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TransactionProgress_ConstructProps extends GObject.Object_ConstructProps {
}
export class TransactionProgress {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Flatpak.TransactionProgress */
    get_bytes_transferred(): number
    get_is_estimating(): boolean
    get_progress(): number
    get_start_time(): number
    get_status(): string
    set_update_frequency(update_interval: number): void
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
    /* Signals of Flatpak.TransactionProgress */
    connect(sigName: "changed", callback: (($obj: TransactionProgress) => void)): number
    connect_after(sigName: "changed", callback: (($obj: TransactionProgress) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransactionProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransactionProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransactionProgress_ConstructProps)
    _init (config?: TransactionProgress_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class BundleRefClass {
    /* Fields of Flatpak.BundleRefClass */
    parent_class: RefClass
    static name: string
}
export abstract class InstallationClass {
    /* Fields of Flatpak.InstallationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class InstalledRefClass {
    /* Fields of Flatpak.InstalledRefClass */
    parent_class: RefClass
    static name: string
}
export abstract class InstanceClass {
    /* Fields of Flatpak.InstanceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RefClass {
    /* Fields of Flatpak.RefClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RelatedRefClass {
    /* Fields of Flatpak.RelatedRefClass */
    parent_class: RefClass
    static name: string
}
export abstract class RemoteClass {
    /* Fields of Flatpak.RemoteClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RemoteRefClass {
    /* Fields of Flatpak.RemoteRefClass */
    parent_class: RefClass
    static name: string
}
export abstract class TransactionClass {
    /* Fields of Flatpak.TransactionClass */
    parent_class: GObject.ObjectClass
    new_operation: (transaction: Transaction, operation: TransactionOperation, progress: TransactionProgress) => void
    operation_done: (transaction: Transaction, operation: TransactionOperation, commit: string, details: TransactionResult) => void
    operation_error: (transaction: Transaction, operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails) => boolean
    choose_remote_for_ref: (transaction: Transaction, for_ref: string, runtime_ref: string, remotes: string) => number
    end_of_lifed: (transaction: Transaction, ref: string, reason: string, rebase: string) => void
    ready: (transaction: Transaction) => boolean
    add_new_remote: (transaction: Transaction, reason: TransactionRemoteReason, from_id: string, remote_name: string, url: string) => boolean
    run: (transaction: Transaction, cancellable?: Gio.Cancellable | null) => boolean
    end_of_lifed_with_rebase: (transaction: Transaction, remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string) => boolean
    webflow_start: (transaction: Transaction, remote: string, url: string, options: GLib.Variant, id: number) => boolean
    webflow_done: (transaction: Transaction, options: GLib.Variant, id: number) => void
    basic_auth_start: (transaction: Transaction, remote: string, realm: string, options: GLib.Variant, id: number) => boolean
    install_authenticator: (transaction: Transaction, remote: string, authenticator_ref: string) => void
    padding: object[]
    static name: string
}
export abstract class TransactionOperationClass {
    /* Fields of Flatpak.TransactionOperationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TransactionProgressClass {
    /* Fields of Flatpak.TransactionProgressClass */
    parent_class: GObject.ObjectClass
    static name: string
}