/**
 * PackageKitGlib-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PackageKitGlib {

enum AuthorizeEnum {
    UNKNOWN,
    YES,
    NO,
    INTERACTIVE,
    LAST,
}
enum ClientError {
    FAILED,
    FAILED_AUTH,
    NO_TID,
    ALREADY_TID,
    ROLE_UNKNOWN,
    CANNOT_START_DAEMON,
    INVALID_INPUT,
    INVALID_FILE,
    NOT_SUPPORTED,
    DECLINED_SIMULATION,
    DECLINED_INTERACTION,
    LAST,
}
enum ControlError {
    FAILED,
    CANNOT_START_DAEMON,
}
enum DistroUpgradeEnum {
    UNKNOWN,
    STABLE,
    UNSTABLE,
    LAST,
}
enum ErrorEnum {
    UNKNOWN,
    OOM,
    NO_NETWORK,
    NOT_SUPPORTED,
    INTERNAL_ERROR,
    GPG_FAILURE,
    PACKAGE_ID_INVALID,
    PACKAGE_NOT_INSTALLED,
    PACKAGE_NOT_FOUND,
    PACKAGE_ALREADY_INSTALLED,
    PACKAGE_DOWNLOAD_FAILED,
    GROUP_NOT_FOUND,
    GROUP_LIST_INVALID,
    DEP_RESOLUTION_FAILED,
    FILTER_INVALID,
    CREATE_THREAD_FAILED,
    TRANSACTION_ERROR,
    TRANSACTION_CANCELLED,
    NO_CACHE,
    REPO_NOT_FOUND,
    CANNOT_REMOVE_SYSTEM_PACKAGE,
    PROCESS_KILL,
    FAILED_INITIALIZATION,
    FAILED_FINALISE,
    FAILED_CONFIG_PARSING,
    CANNOT_CANCEL,
    CANNOT_GET_LOCK,
    NO_PACKAGES_TO_UPDATE,
    CANNOT_WRITE_REPO_CONFIG,
    LOCAL_INSTALL_FAILED,
    BAD_GPG_SIGNATURE,
    MISSING_GPG_SIGNATURE,
    CANNOT_INSTALL_SOURCE_PACKAGE,
    REPO_CONFIGURATION_ERROR,
    NO_LICENSE_AGREEMENT,
    FILE_CONFLICTS,
    PACKAGE_CONFLICTS,
    REPO_NOT_AVAILABLE,
    INVALID_PACKAGE_FILE,
    PACKAGE_INSTALL_BLOCKED,
    PACKAGE_CORRUPT,
    ALL_PACKAGES_ALREADY_INSTALLED,
    FILE_NOT_FOUND,
    NO_MORE_MIRRORS_TO_TRY,
    NO_DISTRO_UPGRADE_DATA,
    INCOMPATIBLE_ARCHITECTURE,
    NO_SPACE_ON_DEVICE,
    MEDIA_CHANGE_REQUIRED,
    NOT_AUTHORIZED,
    UPDATE_NOT_FOUND,
    CANNOT_INSTALL_REPO_UNSIGNED,
    CANNOT_UPDATE_REPO_UNSIGNED,
    CANNOT_GET_FILELIST,
    CANNOT_GET_REQUIRES,
    CANNOT_DISABLE_REPOSITORY,
    RESTRICTED_DOWNLOAD,
    PACKAGE_FAILED_TO_CONFIGURE,
    PACKAGE_FAILED_TO_BUILD,
    PACKAGE_FAILED_TO_INSTALL,
    PACKAGE_FAILED_TO_REMOVE,
    UPDATE_FAILED_DUE_TO_RUNNING_PROCESS,
    PACKAGE_DATABASE_CHANGED,
    PROVIDE_TYPE_NOT_SUPPORTED,
    INSTALL_ROOT_INVALID,
    CANNOT_FETCH_SOURCES,
    CANCELLED_PRIORITY,
    UNFINISHED_TRANSACTION,
    LOCK_REQUIRED,
    REPO_ALREADY_SET,
    LAST,
}
enum ExitEnum {
    UNKNOWN,
    SUCCESS,
    FAILED,
    CANCELLED,
    KEY_REQUIRED,
    EULA_REQUIRED,
    KILLED,
    MEDIA_CHANGE_REQUIRED,
    NEED_UNTRUSTED,
    CANCELLED_PRIORITY,
    SKIP_TRANSACTION,
    REPAIR_REQUIRED,
    LAST,
}
enum FilterEnum {
    UNKNOWN,
    NONE,
    INSTALLED,
    NOT_INSTALLED,
    DEVELOPMENT,
    NOT_DEVELOPMENT,
    GUI,
    NOT_GUI,
    FREE,
    NOT_FREE,
    VISIBLE,
    NOT_VISIBLE,
    SUPPORTED,
    NOT_SUPPORTED,
    BASENAME,
    NOT_BASENAME,
    NEWEST,
    NOT_NEWEST,
    ARCH,
    NOT_ARCH,
    SOURCE,
    NOT_SOURCE,
    COLLECTIONS,
    NOT_COLLECTIONS,
    APPLICATION,
    NOT_APPLICATION,
    DOWNLOADED,
    NOT_DOWNLOADED,
    LAST,
}
enum GroupEnum {
    UNKNOWN,
    ACCESSIBILITY,
    ACCESSORIES,
    ADMIN_TOOLS,
    COMMUNICATION,
    DESKTOP_GNOME,
    DESKTOP_KDE,
    DESKTOP_OTHER,
    DESKTOP_XFCE,
    EDUCATION,
    FONTS,
    GAMES,
    GRAPHICS,
    INTERNET,
    LEGACY,
    LOCALIZATION,
    MAPS,
    MULTIMEDIA,
    NETWORK,
    OFFICE,
    OTHER,
    POWER_MANAGEMENT,
    PROGRAMMING,
    PUBLISHING,
    REPOS,
    SECURITY,
    SERVERS,
    SYSTEM,
    VIRTUALIZATION,
    SCIENCE,
    DOCUMENTATION,
    ELECTRONICS,
    COLLECTIONS,
    VENDOR,
    NEWEST,
    LAST,
}
enum InfoEnum {
    UNKNOWN,
    INSTALLED,
    AVAILABLE,
    LOW,
    ENHANCEMENT,
    NORMAL,
    BUGFIX,
    IMPORTANT,
    SECURITY,
    BLOCKED,
    DOWNLOADING,
    UPDATING,
    INSTALLING,
    REMOVING,
    CLEANUP,
    OBSOLETING,
    COLLECTION_INSTALLED,
    COLLECTION_AVAILABLE,
    FINISHED,
    REINSTALLING,
    DOWNGRADING,
    PREPARING,
    DECOMPRESSING,
    UNTRUSTED,
    TRUSTED,
    UNAVAILABLE,
    CRITICAL,
    LAST,
}
enum MediaTypeEnum {
    UNKNOWN,
    CD,
    DVD,
    DISC,
    LAST,
}
enum NetworkEnum {
    UNKNOWN,
    OFFLINE,
    ONLINE,
    WIRED,
    WIFI,
    MOBILE,
    LAST,
}
enum OfflineAction {
    UNKNOWN,
    REBOOT,
    POWER_OFF,
    UNSET,
}
enum OfflineError {
    FAILED,
    INVALID_VALUE,
    NO_DATA,
}
enum PackageSackSortType {
    NAME,
    INFO,
    PACKAGE_ID,
    SUMMARY,
    LAST,
}
enum ProgressType {
    PACKAGE_ID,
    TRANSACTION_ID,
    PERCENTAGE,
    ALLOW_CANCEL,
    STATUS,
    ROLE,
    CALLER_ACTIVE,
    ELAPSED_TIME,
    REMAINING_TIME,
    SPEED,
    DOWNLOAD_SIZE_REMAINING,
    UID,
    PACKAGE,
    ITEM_PROGRESS,
    TRANSACTION_FLAGS,
    INVALID,
}
enum RestartEnum {
    UNKNOWN,
    NONE,
    APPLICATION,
    SESSION,
    SYSTEM,
    SECURITY_SESSION,
    SECURITY_SYSTEM,
    LAST,
}
enum RoleEnum {
    UNKNOWN,
    CANCEL,
    DEPENDS_ON,
    GET_DETAILS,
    GET_FILES,
    GET_PACKAGES,
    GET_REPO_LIST,
    REQUIRED_BY,
    GET_UPDATE_DETAIL,
    GET_UPDATES,
    INSTALL_FILES,
    INSTALL_PACKAGES,
    INSTALL_SIGNATURE,
    REFRESH_CACHE,
    REMOVE_PACKAGES,
    REPO_ENABLE,
    REPO_SET_DATA,
    RESOLVE,
    SEARCH_DETAILS,
    SEARCH_FILE,
    SEARCH_GROUP,
    SEARCH_NAME,
    UPDATE_PACKAGES,
    WHAT_PROVIDES,
    ACCEPT_EULA,
    DOWNLOAD_PACKAGES,
    GET_DISTRO_UPGRADES,
    GET_CATEGORIES,
    GET_OLD_TRANSACTIONS,
    REPAIR_SYSTEM,
    GET_DETAILS_LOCAL,
    GET_FILES_LOCAL,
    REPO_REMOVE,
    UPGRADE_SYSTEM,
    LAST,
}
enum SigTypeEnum {
    UNKNOWN,
    GPG,
    LAST,
}
enum StatusEnum {
    UNKNOWN,
    WAIT,
    SETUP,
    RUNNING,
    QUERY,
    INFO,
    REMOVE,
    REFRESH_CACHE,
    DOWNLOAD,
    INSTALL,
    UPDATE,
    CLEANUP,
    OBSOLETE,
    DEP_RESOLVE,
    SIG_CHECK,
    TEST_COMMIT,
    COMMIT,
    REQUEST,
    FINISHED,
    CANCEL,
    DOWNLOAD_REPOSITORY,
    DOWNLOAD_PACKAGELIST,
    DOWNLOAD_FILELIST,
    DOWNLOAD_CHANGELOG,
    DOWNLOAD_GROUP,
    DOWNLOAD_UPDATEINFO,
    REPACKAGING,
    LOADING_CACHE,
    SCAN_APPLICATIONS,
    GENERATE_PACKAGE_LIST,
    WAITING_FOR_LOCK,
    WAITING_FOR_AUTH,
    SCAN_PROCESS_LIST,
    CHECK_EXECUTABLE_FILES,
    CHECK_LIBRARIES,
    COPY_FILES,
    RUN_HOOK,
    LAST,
}
enum TransactionFlagEnum {
    NONE,
    ONLY_TRUSTED,
    SIMULATE,
    ONLY_DOWNLOAD,
    ALLOW_REINSTALL,
    JUST_REINSTALL,
    ALLOW_DOWNGRADE,
    LAST,
}
enum UpdateStateEnum {
    UNKNOWN,
    STABLE,
    UNSTABLE,
    TESTING,
    LAST,
}
enum UpgradeKindEnum {
    UNKNOWN,
    MINIMAL,
    DEFAULT,
    COMPLETE,
    LAST,
}
enum OfflineFlags {
    NONE,
    INTERACTIVE,
}
export const DBUS_INTERFACE: string
export const DBUS_INTERFACE_OFFLINE: string
export const DBUS_INTERFACE_TRANSACTION: string
export const DBUS_PATH: string
export const DBUS_SERVICE: string
export const DESKTOP_DEFAULT_APPLICATION_DIR: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const OFFLINE_DESTDIR: string
export const OFFLINE_RESULTS_GROUP: string
export const PACKAGE_IDS_DELIM: string
export const PACKAGE_ID_ARCH: number
export const PACKAGE_ID_DATA: number
export const PACKAGE_ID_NAME: number
export const PACKAGE_ID_VERSION: number
export const SYSTEM_PACKAGE_CACHE_FILENAME: string
export const SYSTEM_PACKAGE_LIST_FILENAME: string
function authorize_type_enum_from_string(authorize_type: string): AuthorizeEnum
function authorize_type_enum_to_string(authorize_type: AuthorizeEnum): string
function client_error_quark(): GLib.Quark
function control_error_quark(): GLib.Quark
function debug_add_log_domain(log_domain: string): void
function debug_is_verbose(): boolean
function debug_set_verbose(verbose: boolean): void
function distro_upgrade_enum_from_string(upgrade: string): DistroUpgradeEnum
function distro_upgrade_enum_to_string(upgrade: DistroUpgradeEnum): string
function enum_find_string(table: EnumMatch, value: number): string
function enum_find_value(table: EnumMatch, string: string): number
function error_enum_from_string(code: string): ErrorEnum
function error_enum_to_string(code: ErrorEnum): string
function exit_enum_from_string(exit: string): ExitEnum
function exit_enum_to_string(exit: ExitEnum): string
function filter_bitfield_from_string(filters: string): Bitfield
function filter_bitfield_to_string(filters: Bitfield): string
function filter_enum_from_string(filter: string): FilterEnum
function filter_enum_to_string(filter: FilterEnum): string
function get_distro_id(): string
function group_bitfield_from_string(groups: string): Bitfield
function group_bitfield_to_string(groups: Bitfield): string
function group_enum_from_string(group: string): GroupEnum
function group_enum_to_string(group: GroupEnum): string
function info_enum_from_string(info: string): InfoEnum
function info_enum_to_localised_past(info: InfoEnum): string
function info_enum_to_localised_present(info: InfoEnum): string
function info_enum_to_string(info: InfoEnum): string
function iso8601_from_date(date: GLib.Date): string
function iso8601_present(): string
function media_type_enum_from_string(media_type: string): MediaTypeEnum
function media_type_enum_to_string(media_type: MediaTypeEnum): string
function network_enum_from_string(network: string): NetworkEnum
function network_enum_to_string(network: NetworkEnum): string
function offline_action_from_string(action: string): OfflineAction
function offline_action_to_string(action: OfflineAction): string
function offline_auth_cancel(): boolean
function offline_auth_clear_results(): boolean
function offline_auth_invalidate(): boolean
function offline_auth_set_action(action: OfflineAction): boolean
function offline_auth_set_prepared_ids(package_ids: string): boolean
function offline_auth_set_prepared_upgrade(name: string, release_ver: string): boolean
function offline_auth_set_results(results: Results): boolean
function offline_auth_trigger(action: OfflineAction): boolean
function offline_auth_trigger_upgrade(action: OfflineAction): boolean
function offline_cancel(cancellable?: Gio.Cancellable | null): boolean
function offline_cancel_with_flags(flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function offline_clear_results(cancellable?: Gio.Cancellable | null): boolean
function offline_clear_results_with_flags(flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function offline_error_quark(): GLib.Quark
function offline_get_action(): OfflineAction
function offline_get_action_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
function offline_get_prepared_ids(): string[]
function offline_get_prepared_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
function offline_get_prepared_sack(): PackageSack
function offline_get_prepared_upgrade(name: string, release_ver: string): boolean
function offline_get_prepared_upgrade_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
function offline_get_prepared_upgrade_name(): string
function offline_get_prepared_upgrade_version(): string
function offline_get_results(): Results
function offline_get_results_mtime(): number
function offline_trigger(action: OfflineAction, cancellable?: Gio.Cancellable | null): boolean
function offline_trigger_upgrade(action: OfflineAction, cancellable?: Gio.Cancellable | null): boolean
function offline_trigger_upgrade_with_flags(action: OfflineAction, flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function offline_trigger_with_flags(action: OfflineAction, flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function polkit_agent_close(): void
function polkit_agent_open(): number
function ptr_array_to_strv(array: string[]): string[]
function restart_enum_from_string(restart: string): RestartEnum
function restart_enum_to_string(restart: RestartEnum): string
function role_bitfield_from_string(roles: string): Bitfield
function role_bitfield_to_string(roles: Bitfield): string
function role_enum_from_string(role: string): RoleEnum
function role_enum_to_localised_present(role: RoleEnum): string
function role_enum_to_string(role: RoleEnum): string
function sig_type_enum_from_string(sig_type: string): SigTypeEnum
function sig_type_enum_to_string(sig_type: SigTypeEnum): string
function status_enum_from_string(status: string): StatusEnum
function status_enum_to_localised_text(status: StatusEnum): string
function status_enum_to_string(status: StatusEnum): string
function transaction_flag_bitfield_from_string(transaction_flags: string): Bitfield
function transaction_flag_bitfield_to_string(transaction_flags: Bitfield): string
function transaction_flag_enum_from_string(transaction_flag: string): TransactionFlagEnum
function transaction_flag_enum_to_string(transaction_flag: TransactionFlagEnum): string
function update_state_enum_from_string(update_state: string): UpdateStateEnum
function update_state_enum_to_string(update_state: UpdateStateEnum): string
function upgrade_kind_enum_from_string(upgrade_kind: string): UpgradeKindEnum
function upgrade_kind_enum_to_string(upgrade_kind: UpgradeKindEnum): string
interface PackageSackFilterFunc {
    (package: Package): boolean
}
interface ProgressCallback {
    (progress: Progress, type: ProgressType): void
}
export interface Category_ConstructProps extends Source_ConstructProps {
    cat_id?: string
    icon?: string
    name?: string
    parent_id?: string
    summary?: string
}
class Category {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Category */
    cat_id: string
    icon: string
    name: string
    parent_id: string
    summary: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Category */
    parent: Source
    priv: CategoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Category */
    get_icon(): string
    get_id(): string
    get_name(): string
    get_parent_id(): string
    get_summary(): string
    set_icon(icon: string): void
    set_id(cat_id: string): void
    set_name(name: string): void
    set_parent_id(parent_id: string): void
    set_summary(summary: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cat-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cat-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Category
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    background?: boolean
    cache_age?: number
    interactive?: boolean
    locale?: string
}
class Client {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Client */
    background: boolean
    cache_age: number
    readonly idle: boolean
    interactive: boolean
    locale: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Client */
    parent: GObject.Object
    priv: ClientPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Client */
    accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    accept_eula_async(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    adopt(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    adopt_async(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    depends_on(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    download_packages(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    generic_finish(res: Gio.AsyncResult): Results
    get_background(): boolean
    get_cache_age(): number
    get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_details(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_details_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_details_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_distro_upgrades_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_files(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_files_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_files_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_idle(): boolean
    get_interactive(): boolean
    get_locale(): string
    get_old_transactions(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_old_transactions_async(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_packages(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_progress(transaction_id: string, cancellable?: Gio.Cancellable | null): Progress
    get_progress_async(transaction_id: string, cancellable?: Gio.Cancellable | null, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_progress_finish(res: Gio.AsyncResult): Progress
    get_repo_list(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_update_detail(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_updates(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_files(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_files_async(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_signature(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_signature_async(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    refresh_cache(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    remove_packages(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    remove_packages_async(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repair_system(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repair_system_async(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repo_enable(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repo_remove(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repo_remove_async(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repo_set_data(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repo_set_data_async(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    required_by(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_details(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_files(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_groups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_names(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    set_background(background: boolean): void
    set_cache_age(cache_age: number): void
    set_interactive(interactive: boolean): void
    set_locale(locale: string): void
    update_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    update_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    upgrade_system(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    upgrade_system_async(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    what_provides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of PackageKitGlib-1.0.PackageKitGlib.Client */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::background", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache-age", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-age", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static create_helper_argv_envp(argv: string, envp_out: string): boolean
    static $gtype: GObject.Type
}
export interface ClientHelper_ConstructProps extends GObject.Object_ConstructProps {
}
class ClientHelper {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelper */
    parent: GObject.Object
    priv: ClientHelperPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.ClientHelper */
    is_active(): boolean
    start(socket_filename: string, argv: string, envp: string): boolean
    start_with_socket(socket: Gio.Socket, argv: string, envp: string): boolean
    stop(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientHelper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientHelper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientHelper_ConstructProps)
    _init (config?: ClientHelper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientHelper
    static $gtype: GObject.Type
}
export interface Control_ConstructProps extends GObject.Object_ConstructProps {
    backend_author?: string
    backend_description?: string
    backend_name?: string
    connected?: boolean
    distro_id?: string
    filters?: number
    groups?: number
    locked?: boolean
    mime_types?: string[]
    network_state?: NetworkEnum
    provides?: number
    roles?: number
}
class Control {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Control */
    backend_author: string
    backend_description: string
    backend_name: string
    connected: boolean
    distro_id: string
    filters: number
    groups: number
    locked: boolean
    mime_types: string[]
    network_state: NetworkEnum
    provides: number
    roles: number
    readonly version_major: number
    readonly version_micro: number
    readonly version_minor: number
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Control */
    parent: GObject.Object
    priv: ControlPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Control */
    can_authorize_async(action_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    can_authorize_finish(res: Gio.AsyncResult): AuthorizeEnum
    get_daemon_state_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_daemon_state_finish(res: Gio.AsyncResult): string
    get_properties(cancellable?: Gio.Cancellable | null): boolean
    get_properties_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_properties_finish(res: Gio.AsyncResult): boolean
    get_tid_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_tid_finish(res: Gio.AsyncResult): string
    get_time_since_action_async(role: RoleEnum, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_time_since_action_finish(res: Gio.AsyncResult): number
    get_transaction_list(cancellable?: Gio.Cancellable | null): string[]
    get_transaction_list_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_transaction_list_finish(res: Gio.AsyncResult): string[]
    set_proxy(proxy_http: string, proxy_ftp: string, cancellable?: Gio.Cancellable | null): boolean
    set_proxy2(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string, cancellable?: Gio.Cancellable | null): boolean
    set_proxy2_async(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_proxy_async(proxy_http: string, proxy_ftp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_proxy_finish(res: Gio.AsyncResult): boolean
    suggest_daemon_quit(cancellable?: Gio.Cancellable | null): boolean
    suggest_daemon_quit_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    suggest_daemon_quit_finish(res: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of PackageKitGlib-1.0.PackageKitGlib.Control */
    vfunc_connection_changed(connected: boolean): void
    vfunc_locked(is_locked: boolean): void
    vfunc_network_state_changed(): void
    vfunc_repo_list_changed(): void
    vfunc_restart_schedule(): void
    vfunc_transaction_list_changed(transaction_ids: string): void
    vfunc_updates_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of PackageKitGlib-1.0.PackageKitGlib.Control */
    connect(sigName: "repo-list-changed", callback: (($obj: Control) => void)): number
    connect_after(sigName: "repo-list-changed", callback: (($obj: Control) => void)): number
    emit(sigName: "repo-list-changed"): void
    connect(sigName: "restart-schedule", callback: (($obj: Control) => void)): number
    connect_after(sigName: "restart-schedule", callback: (($obj: Control) => void)): number
    emit(sigName: "restart-schedule"): void
    connect(sigName: "transaction-list-changed", callback: (($obj: Control, transaction_ids: string[]) => void)): number
    connect_after(sigName: "transaction-list-changed", callback: (($obj: Control, transaction_ids: string[]) => void)): number
    emit(sigName: "transaction-list-changed", transaction_ids: string[]): void
    connect(sigName: "updates-changed", callback: (($obj: Control) => void)): number
    connect_after(sigName: "updates-changed", callback: (($obj: Control) => void)): number
    emit(sigName: "updates-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-author", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-author", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-description", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-description", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::distro-id", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distro-id", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::groups", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locked", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-types", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-state", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-state", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provides", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provides", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::roles", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version-major", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-major", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version-micro", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-micro", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version-minor", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-minor", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Control
    static $gtype: GObject.Type
}
export interface Desktop_ConstructProps extends GObject.Object_ConstructProps {
}
class Desktop {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Desktop */
    parent: GObject.Object
    priv: DesktopPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Desktop */
    get_files_for_package(package: string): string[]
    get_package_for_file(filename: string): string
    get_shown_for_package(package: string): string[]
    open_database(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Desktop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Desktop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Desktop_ConstructProps)
    _init (config?: Desktop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Desktop
    static $gtype: GObject.Type
}
export interface Details_ConstructProps extends Source_ConstructProps {
    description?: string
    download_size?: number
    group?: GroupEnum
    license?: string
    package_id?: string
    size?: number
    summary?: string
    url?: string
}
class Details {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Details */
    description: string
    download_size: number
    group: GroupEnum
    license: string
    package_id: string
    size: number
    summary: string
    url: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Details */
    parent: Source
    priv: DetailsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Details */
    get_description(): string
    get_download_size(): number
    get_group(): GroupEnum
    get_license(): string
    get_package_id(): string
    get_size(): number
    get_summary(): string
    get_url(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::download-size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Details_ConstructProps)
    _init (config?: Details_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Details
    static $gtype: GObject.Type
}
export interface DistroUpgrade_ConstructProps extends Source_ConstructProps {
    name?: string
    state?: DistroUpgradeEnum
    summary?: string
}
class DistroUpgrade {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade */
    name: string
    state: DistroUpgradeEnum
    summary: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade */
    parent: Source
    priv: DistroUpgradePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade */
    get_id(): string
    get_state(): DistroUpgradeEnum
    get_summary(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: DistroUpgrade, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DistroUpgrade_ConstructProps)
    _init (config?: DistroUpgrade_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DistroUpgrade
    static $gtype: GObject.Type
}
export interface Error_ConstructProps extends Source_ConstructProps {
    code?: ErrorEnum
    details?: string
}
class Error {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Error */
    code: ErrorEnum
    details: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Error */
    parent: Source
    priv: ErrorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Error */
    get_code(): ErrorEnum
    get_details(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::code", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::code", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::details", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Error, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Error_ConstructProps)
    _init (config?: Error_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Error
    static $gtype: GObject.Type
}
export interface EulaRequired_ConstructProps extends Source_ConstructProps {
    eula_id?: string
    license_agreement?: string
    package_id?: string
    vendor_name?: string
}
class EulaRequired {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired */
    eula_id: string
    license_agreement: string
    package_id: string
    vendor_name: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequired */
    parent: Source
    priv: EulaRequiredPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.EulaRequired */
    get_eula_id(): string
    get_license_agreement(): string
    get_package_id(): string
    get_vendor_name(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::eula-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eula-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license-agreement", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-agreement", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor-name", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-name", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: EulaRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EulaRequired_ConstructProps)
    _init (config?: EulaRequired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EulaRequired
    static $gtype: GObject.Type
}
export interface Files_ConstructProps extends Source_ConstructProps {
    files?: string[]
    package_id?: string
}
class Files {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Files */
    files: string[]
    package_id: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Files */
    parent: Source
    priv: FilesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Files */
    get_files(): string[]
    get_package_id(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::files", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Files_ConstructProps)
    _init (config?: Files_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Files
    static $gtype: GObject.Type
}
export interface ItemProgress_ConstructProps extends Source_ConstructProps {
    package_id?: string
    percentage?: number
    status?: number
}
class ItemProgress {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress */
    package_id: string
    percentage: number
    status: number
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgress */
    parent: Source
    priv: ItemProgressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.ItemProgress */
    get_package_id(): string
    get_percentage(): number
    get_status(): StatusEnum
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::package-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: ItemProgress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ItemProgress_ConstructProps)
    _init (config?: ItemProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ItemProgress
    static $gtype: GObject.Type
}
export interface MediaChangeRequired_ConstructProps extends Source_ConstructProps {
    media_id?: string
    media_text?: string
    media_type?: MediaTypeEnum
}
class MediaChangeRequired {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired */
    media_id: string
    media_text: string
    media_type: MediaTypeEnum
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired */
    parent: Source
    priv: MediaChangeRequiredPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::media-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-text", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-text", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-type", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: MediaChangeRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaChangeRequired_ConstructProps)
    _init (config?: MediaChangeRequired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaChangeRequired
    static $gtype: GObject.Type
}
export interface Package_ConstructProps extends Source_ConstructProps {
    description?: string
    group?: GroupEnum
    info?: InfoEnum
    license?: string
    size?: number
    summary?: string
    update_bugzilla_urls?: string[]
    update_changelog?: string
    update_cve_urls?: string[]
    update_issued?: string
    update_obsoletes?: string
    update_restart?: RestartEnum
    update_severity?: InfoEnum
    update_state?: UpdateStateEnum
    update_text?: string
    update_updated?: string
    update_updates?: string
    update_vendor_urls?: string[]
    url?: string
}
class Package {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Package */
    description: string
    group: GroupEnum
    info: InfoEnum
    license: string
    readonly package_id: string
    size: number
    summary: string
    update_bugzilla_urls: string[]
    update_changelog: string
    update_cve_urls: string[]
    update_issued: string
    update_obsoletes: string
    update_restart: RestartEnum
    update_severity: InfoEnum
    update_state: UpdateStateEnum
    update_text: string
    update_updated: string
    update_updates: string
    update_vendor_urls: string[]
    url: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Package */
    parent: Source
    priv: PackagePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Package */
    equal(package2: Package): boolean
    equal_id(package2: Package): boolean
    get_arch(): string
    get_data(): string
    get_id(): string
    get_info(): InfoEnum
    get_name(): string
    get_summary(): string
    get_update_severity(): InfoEnum
    get_version(): string
    parse(data: string): boolean
    print(): void
    set_id(package_id: string): boolean
    set_info(info: InfoEnum): void
    set_summary(summary: string): void
    set_update_severity(update_severity: InfoEnum): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of PackageKitGlib-1.0.PackageKitGlib.Package */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of PackageKitGlib-1.0.PackageKitGlib.Package */
    connect(sigName: "changed", callback: (($obj: Package) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Package) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::info", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-bugzilla-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-bugzilla-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-changelog", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-changelog", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-cve-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-cve-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-issued", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-issued", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-obsoletes", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-obsoletes", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-restart", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-restart", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-severity", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-severity", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-state", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-state", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-text", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-text", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-updated", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-updated", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-updates", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-updates", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-vendor-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-vendor-urls", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Package_ConstructProps)
    _init (config?: Package_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Package
    static id_build(name: string, version: string, arch: string, data: string): string
    static id_check(package_id: string): boolean
    static id_equal_fuzzy_arch(package_id1: string, package_id2: string): boolean
    static id_split(package_id: string): string[]
    static id_to_printable(package_id: string): string
    static ids_add_id(package_ids: string, package_id: string): string[]
    static ids_add_ids(package_ids: string, package_ids_new: string): string[]
    static ids_check(package_ids: string): boolean
    static ids_from_id(package_id: string): string[]
    static ids_from_string(package_id: string): string[]
    static ids_present_id(package_ids: string, package_id: string): boolean
    static ids_remove_id(package_ids: string, package_id: string): string[]
    static ids_to_string(package_ids: string): string
    static $gtype: GObject.Type
}
export interface PackageSack_ConstructProps extends GObject.Object_ConstructProps {
}
class PackageSack {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.PackageSack */
    parent: GObject.Object
    priv: PackageSackPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack */
    add_package(package: Package): boolean
    add_package_by_id(package_id: string): boolean
    add_packages_from_file(file: Gio.File): boolean
    clear(): void
    filter(filter_cb: PackageSackFilterFunc): PackageSack
    filter_by_info(info: InfoEnum): PackageSack
    find_by_id(package_id: string): Package
    find_by_id_name_arch(package_id: string): Package
    get_array(): Package[]
    get_details(cancellable?: Gio.Cancellable | null): boolean
    get_details_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback?: Gio.AsyncReadyCallback | null): void
    get_ids(): string[]
    get_size(): number
    get_total_bytes(): number
    get_update_detail(cancellable?: Gio.Cancellable | null): boolean
    get_update_detail_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback?: Gio.AsyncReadyCallback | null): void
    merge_generic_finish(res: Gio.AsyncResult): boolean
    remove_by_filter(filter_cb: PackageSackFilterFunc): boolean
    remove_package(package: Package): boolean
    remove_package_by_id(package_id: string): boolean
    resolve(cancellable?: Gio.Cancellable | null): boolean
    resolve_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback?: Gio.AsyncReadyCallback | null): void
    sort(type: PackageSackSortType): void
    to_file(file: Gio.File): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PackageSack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PackageSack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PackageSack_ConstructProps)
    _init (config?: PackageSack_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PackageSack
    static $gtype: GObject.Type
}
export interface Progress_ConstructProps extends GObject.Object_ConstructProps {
    allow_cancel?: boolean
    caller_active?: boolean
    download_size_remaining?: number
    elapsed_time?: number
    item_progress?: ItemProgress
    package?: Package
    package_id?: string
    percentage?: number
    remaining_time?: number
    role?: number
    speed?: number
    status?: number
    transaction_flags?: number
    transaction_id?: string
    uid?: number
}
class Progress {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Progress */
    allow_cancel: boolean
    caller_active: boolean
    download_size_remaining: number
    elapsed_time: number
    item_progress: ItemProgress
    package: Package
    package_id: string
    percentage: number
    remaining_time: number
    role: number
    speed: number
    status: number
    transaction_flags: number
    transaction_id: string
    uid: number
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Progress */
    parent: GObject.Object
    priv: ProgressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Progress */
    get_allow_cancel(): boolean
    get_caller_active(): boolean
    get_download_size_remaining(): number
    get_elapsed_time(): number
    get_item_progress(): ItemProgress
    get_package(): Package
    get_package_id(): string
    get_percentage(): number
    get_remaining_time(): number
    get_role(): RoleEnum
    get_speed(): number
    get_status(): StatusEnum
    get_transaction_flags(): number
    get_transaction_id(): string
    get_uid(): number
    set_allow_cancel(allow_cancel: boolean): boolean
    set_caller_active(caller_active: boolean): boolean
    set_download_size_remaining(download_size_remaining: number): boolean
    set_elapsed_time(elapsed_time: number): boolean
    set_item_progress(item_progress: ItemProgress): boolean
    set_package(package: Package): boolean
    set_package_id(package_id: string): boolean
    set_percentage(percentage: number): boolean
    set_remaining_time(remaining_time: number): boolean
    set_role(role: RoleEnum): boolean
    set_speed(speed: number): boolean
    set_status(status: StatusEnum): boolean
    set_transaction_flags(transaction_flags: number): boolean
    set_transaction_id(transaction_id: string): boolean
    set_uid(uid: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-cancel", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-cancel", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caller-active", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-active", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::download-size-remaining", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size-remaining", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::elapsed-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::elapsed-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::item-progress", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-progress", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::speed", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-flags", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-flags", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Progress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Progress_ConstructProps)
    _init (config?: Progress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Progress
    static $gtype: GObject.Type
}
export interface RepoDetail_ConstructProps extends Source_ConstructProps {
    description?: string
    enabled?: boolean
    repo_id?: string
}
class RepoDetail {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail */
    description: string
    enabled: boolean
    repo_id: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetail */
    parent: Source
    priv: RepoDetailPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.RepoDetail */
    get_description(): string
    get_enabled(): boolean
    get_id(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repo-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repo-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: RepoDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepoDetail_ConstructProps)
    _init (config?: RepoDetail_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RepoDetail
    static $gtype: GObject.Type
}
export interface RepoSignatureRequired_ConstructProps extends Source_ConstructProps {
    key_fingerprint?: string
    key_id?: string
    key_timestamp?: string
    key_url?: string
    key_userid?: string
    package_id?: string
    repository_name?: string
    type?: SigTypeEnum
}
class RepoSignatureRequired {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired */
    key_fingerprint: string
    key_id: string
    key_timestamp: string
    key_url: string
    key_userid: string
    package_id: string
    repository_name: string
    type: SigTypeEnum
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired */
    parent: Source
    priv: RepoSignatureRequiredPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key-fingerprint", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-fingerprint", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-timestamp", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-timestamp", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-url", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-url", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-userid", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-userid", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repository-name", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository-name", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: RepoSignatureRequired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepoSignatureRequired_ConstructProps)
    _init (config?: RepoSignatureRequired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RepoSignatureRequired
    static $gtype: GObject.Type
}
export interface RequireRestart_ConstructProps extends Source_ConstructProps {
    package_id?: string
    restart?: RestartEnum
}
class RequireRestart {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart */
    package_id: string
    restart: RestartEnum
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestart */
    parent: Source
    priv: RequireRestartPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::package-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restart", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restart", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: RequireRestart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RequireRestart_ConstructProps)
    _init (config?: RequireRestart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RequireRestart
    static $gtype: GObject.Type
}
export interface Results_ConstructProps extends GObject.Object_ConstructProps {
    inputs?: number
    progress?: Progress
    role?: RoleEnum
    transaction_flags?: number
}
class Results {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Results */
    inputs: number
    progress: Progress
    role: RoleEnum
    transaction_flags: number
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Results */
    parent: GObject.Object
    priv: ResultsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Results */
    add_category(item: Category): boolean
    add_details(item: Details): boolean
    add_distro_upgrade(item: DistroUpgrade): boolean
    add_eula_required(item: EulaRequired): boolean
    add_files(item: Files): boolean
    add_media_change_required(item: MediaChangeRequired): boolean
    add_package(item: Package): boolean
    add_repo_detail(item: RepoDetail): boolean
    add_repo_signature_required(item: RepoSignatureRequired): boolean
    add_require_restart(item: RequireRestart): boolean
    add_transaction(item: TransactionPast): boolean
    add_update_detail(item: UpdateDetail): boolean
    get_category_array(): Category[]
    get_details_array(): Details[]
    get_distro_upgrade_array(): DistroUpgrade[]
    get_error_code(): Error
    get_eula_required_array(): EulaRequired[]
    get_exit_code(): ExitEnum
    get_files_array(): Files[]
    get_media_change_required_array(): MediaChangeRequired[]
    get_package_array(): Package[]
    get_package_sack(): PackageSack
    get_repo_detail_array(): RepoDetail[]
    get_repo_signature_required_array(): RepoSignatureRequired[]
    get_require_restart_array(): RequireRestart[]
    get_require_restart_worst(): RestartEnum
    get_role(): RoleEnum
    get_transaction_array(): TransactionPast[]
    get_transaction_flags(): Bitfield
    get_update_detail_array(): UpdateDetail[]
    set_error_code(item: Error): boolean
    set_exit_code(exit_enum: ExitEnum): boolean
    set_role(role: RoleEnum): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::inputs", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inputs", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-flags", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-flags", callback: (($obj: Results, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Results_ConstructProps)
    _init (config?: Results_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Results
    static $gtype: GObject.Type
}
export interface Source_ConstructProps extends GObject.Object_ConstructProps {
    role?: RoleEnum
    transaction_id?: string
}
class Source {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    parent: GObject.Object
    priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::role", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Source
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends Client_ConstructProps {
    allow_downgrade?: boolean
    allow_reinstall?: boolean
    only_download?: boolean
    only_trusted?: boolean
    simulate?: boolean
}
class Task {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Task */
    allow_downgrade: boolean
    allow_reinstall: boolean
    only_download: boolean
    only_trusted: boolean
    simulate: boolean
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Client */
    background: boolean
    cache_age: number
    readonly idle: boolean
    interactive: boolean
    locale: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Task */
    parent: Client
    priv: TaskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Task */
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    depends_on_sync(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    download_packages_sync(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    generic_finish(res: Gio.AsyncResult): Results
    get_allow_downgrade(): boolean
    get_allow_reinstall(): boolean
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_categories_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_details_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_files_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_only_download(): boolean
    get_only_trusted(): boolean
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_packages_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_repo_list_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_simulate(): boolean
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_update_detail_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_updates_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_files_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_files_sync(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_packages_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_packages_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    refresh_cache_sync(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    remove_packages_async(package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    remove_packages_sync(package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repair_system_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repair_system_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repo_enable_sync(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    required_by_sync(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    resolve_sync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_details_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_files_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_groups_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    search_names_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    set_allow_downgrade(allow_downgrade: boolean): void
    set_allow_reinstall(allow_reinstall: boolean): void
    set_only_download(only_download: boolean): void
    set_only_trusted(only_trusted: boolean): void
    set_simulate(simulate: boolean): void
    update_packages_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    update_packages_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    upgrade_system_async(distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    upgrade_system_sync(distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    user_accepted(request: number): boolean
    user_declined(request: number): boolean
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    what_provides_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Client */
    accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    accept_eula_async(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    adopt(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    adopt_async(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    depends_on(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    download_packages(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_background(): boolean
    get_cache_age(): number
    get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_details(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_details_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_details_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_distro_upgrades_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_files(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_files_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_files_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_idle(): boolean
    get_interactive(): boolean
    get_locale(): string
    get_old_transactions(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_old_transactions_async(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_packages(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_progress(transaction_id: string, cancellable?: Gio.Cancellable | null): Progress
    get_progress_async(transaction_id: string, cancellable?: Gio.Cancellable | null, callback_ready?: Gio.AsyncReadyCallback | null): void
    get_progress_finish(res: Gio.AsyncResult): Progress
    get_repo_list(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_update_detail(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    get_updates(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_files(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_files_async(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    install_signature(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    install_signature_async(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    refresh_cache(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    remove_packages(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    remove_packages_async(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repair_system(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repair_system_async(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repo_enable(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repo_remove(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repo_remove_async(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    repo_set_data(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    repo_set_data_async(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    required_by(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_details(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_files(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_groups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    search_names(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    set_background(background: boolean): void
    set_cache_age(cache_age: number): void
    set_interactive(interactive: boolean): void
    set_locale(locale: string): void
    update_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    update_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    upgrade_system(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    upgrade_system_async(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, callback_ready?: Gio.AsyncReadyCallback | null): void
    what_provides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback): Results
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of PackageKitGlib-1.0.PackageKitGlib.Task */
    vfunc_eula_question(request: number, results: Results): void
    vfunc_key_question(request: number, results: Results): void
    vfunc_media_change_question(request: number, results: Results): void
    vfunc_repair_question(request: number, results: Results): void
    vfunc_simulate_question(request: number, results: Results): void
    vfunc_untrusted_question(request: number, results: Results): void
    /* Virtual methods of PackageKitGlib-1.0.PackageKitGlib.Client */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-downgrade", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-downgrade", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-reinstall", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-reinstall", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::only-download", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::only-download", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::only-trusted", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::only-trusted", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::simulate", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simulate", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache-age", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-age", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interactive", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Task
    static $gtype: GObject.Type
}
export interface TransactionList_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionList {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TransactionList */
    parent: GObject.Object
    priv: TransactionListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList */
    get_ids(): string[]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList */
    vfunc_added(tid: string): void
    vfunc_removed(tid: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList */
    connect(sigName: "added", callback: (($obj: TransactionList, tid: string) => void)): number
    connect_after(sigName: "added", callback: (($obj: TransactionList, tid: string) => void)): number
    emit(sigName: "added", tid: string): void
    connect(sigName: "removed", callback: (($obj: TransactionList, tid: string) => void)): number
    connect_after(sigName: "removed", callback: (($obj: TransactionList, tid: string) => void)): number
    emit(sigName: "removed", tid: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransactionList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransactionList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransactionList_ConstructProps)
    _init (config?: TransactionList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TransactionList
    static $gtype: GObject.Type
}
export interface TransactionPast_ConstructProps extends Source_ConstructProps {
    cmdline?: string
    data?: string
    duration?: number
    role?: RoleEnum
    succeeded?: boolean
    tid?: string
    timespec?: string
    uid?: number
}
class TransactionPast {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast */
    cmdline: string
    data: string
    duration: number
    role: RoleEnum
    succeeded: boolean
    tid: string
    timespec: string
    uid: number
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPast */
    parent: Source
    priv: TransactionPastPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.TransactionPast */
    get_cmdline(): string
    get_data(): string
    get_datetime(): GLib.DateTime
    get_duration(): number
    get_id(): string
    get_role(): RoleEnum
    get_succeeded(): boolean
    get_timespec(): string
    get_timestamp(): number
    get_uid(): number
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cmdline", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::succeeded", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::succeeded", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timespec", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timespec", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: TransactionPast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransactionPast_ConstructProps)
    _init (config?: TransactionPast_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TransactionPast
    static $gtype: GObject.Type
}
export interface UpdateDetail_ConstructProps extends Source_ConstructProps {
    bugzilla_urls?: string[]
    changelog?: string
    cve_urls?: string[]
    issued?: string
    obsoletes?: string[]
    package_id?: string
    restart?: RestartEnum
    state?: UpdateStateEnum
    update_text?: string
    updated?: string
    updates?: string[]
    vendor_urls?: string[]
}
class UpdateDetail {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail */
    bugzilla_urls: string[]
    changelog: string
    cve_urls: string[]
    issued: string
    obsoletes: string[]
    package_id: string
    restart: RestartEnum
    state: UpdateStateEnum
    update_text: string
    updated: string
    updates: string[]
    vendor_urls: string[]
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transaction_id: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail */
    parent: Source
    priv: UpdateDetailPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail */
    get_bugzilla_urls(): string[]
    get_changelog(): string
    get_cve_urls(): string[]
    get_issued(): string
    get_obsoletes(): string[]
    get_package_id(): string
    get_restart(): RestartEnum
    get_state(): UpdateStateEnum
    get_update_text(): string
    get_updated(): string
    get_updates(): string[]
    get_vendor_urls(): string[]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bugzilla-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bugzilla-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::changelog", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changelog", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cve-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cve-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::issued", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issued", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::obsoletes", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::obsoletes", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::package-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restart", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restart", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-text", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-text", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updates", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updates", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-urls", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transaction-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: (($obj: UpdateDetail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UpdateDetail_ConstructProps)
    _init (config?: UpdateDetail_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UpdateDetail
    static $gtype: GObject.Type
}
abstract class CategoryClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.CategoryClass */
    parent_class: SourceClass
    static name: string
}
class CategoryPrivate {
    static name: string
}
abstract class ClientClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ClientClass */
    parent_class: GObject.ObjectClass
    changed: (client: Client) => void
    static name: string
}
abstract class ClientHelperClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ClientHelperPrivate {
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class ControlClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ControlClass */
    parent_class: GObject.ObjectClass
    transaction_list_changed: (control: Control, transaction_ids: string) => void
    updates_changed: (control: Control) => void
    repo_list_changed: (control: Control) => void
    network_state_changed: (control: Control) => void
    restart_schedule: (control: Control) => void
    locked: (control: Control, is_locked: boolean) => void
    connection_changed: (control: Control, connected: boolean) => void
    static name: string
}
class ControlPrivate {
    static name: string
}
abstract class DesktopClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.DesktopClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class DesktopPrivate {
    static name: string
}
abstract class DetailsClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.DetailsClass */
    parent_class: SourceClass
    static name: string
}
class DetailsPrivate {
    static name: string
}
abstract class DistroUpgradeClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass */
    parent_class: SourceClass
    static name: string
}
class DistroUpgradePrivate {
    static name: string
}
class EnumMatch {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.EnumMatch */
    value: number
    string: string
    static name: string
}
abstract class ErrorClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ErrorClass */
    parent_class: SourceClass
    static name: string
}
class ErrorPrivate {
    static name: string
}
abstract class EulaRequiredClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass */
    parent_class: SourceClass
    static name: string
}
class EulaRequiredPrivate {
    static name: string
}
abstract class FilesClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.FilesClass */
    parent_class: SourceClass
    static name: string
}
class FilesPrivate {
    static name: string
}
abstract class ItemProgressClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass */
    parent_class: SourceClass
    static name: string
}
class ItemProgressPrivate {
    static name: string
}
abstract class MediaChangeRequiredClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass */
    parent_class: SourceClass
    static name: string
}
class MediaChangeRequiredPrivate {
    static name: string
}
abstract class PackageClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.PackageClass */
    parent_class: SourceClass
    changed: (package: Package) => void
    static name: string
}
class PackagePrivate {
    static name: string
}
abstract class PackageSackClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass */
    parent_class: GObject.ObjectClass
    changed: (sack: PackageSack) => void
    static name: string
}
class PackageSackPrivate {
    static name: string
}
class PackageSackResults {
    static name: string
}
abstract class ProgressClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ProgressClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ProgressPrivate {
    static name: string
}
abstract class RepoDetailClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass */
    parent_class: SourceClass
    static name: string
}
class RepoDetailPrivate {
    static name: string
}
abstract class RepoSignatureRequiredClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass */
    parent_class: SourceClass
    static name: string
}
class RepoSignatureRequiredPrivate {
    static name: string
}
abstract class RequireRestartClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass */
    parent_class: SourceClass
    static name: string
}
class RequireRestartPrivate {
    static name: string
}
abstract class ResultsClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ResultsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ResultsPrivate {
    static name: string
}
abstract class SourceClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.SourceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class SourcePrivate {
    static name: string
}
abstract class TaskClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TaskClass */
    parent_class: ClientClass
    untrusted_question: (task: Task, request: number, results: Results) => void
    key_question: (task: Task, request: number, results: Results) => void
    eula_question: (task: Task, request: number, results: Results) => void
    media_change_question: (task: Task, request: number, results: Results) => void
    simulate_question: (task: Task, request: number, results: Results) => void
    repair_question: (task: Task, request: number, results: Results) => void
    static name: string
}
class TaskPrivate {
    static name: string
}
abstract class TransactionListClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass */
    parent_class: GObject.ObjectClass
    added: (tlist: TransactionList, tid: string) => void
    removed: (tlist: TransactionList, tid: string) => void
    static name: string
}
class TransactionListPrivate {
    static name: string
}
abstract class TransactionPastClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass */
    parent_class: SourceClass
    static name: string
}
class TransactionPastPrivate {
    static name: string
}
abstract class UpdateDetailClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass */
    parent_class: SourceClass
    static name: string
}
class UpdateDetailPrivate {
    static name: string
}
type Bitfield = number
}
export default PackageKitGlib