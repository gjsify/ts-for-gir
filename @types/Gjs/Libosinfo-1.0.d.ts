/**
 * Libosinfo-1.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Libosinfo {

enum DeviceDriverSigningReq {
    NONE,
    STRICT,
    WARN,
}
enum Error {
    GENERIC,
}
enum InstallConfigParamPolicy {
    NONE,
    REQUIRED,
    OPTIONAL,
}
enum InstallScriptInstallationSource {
    MEDIA,
    NETWORK,
}
enum MediaError {
    NO_DESCRIPTORS,
    NO_PVD,
    NO_SVD,
    INSUFFICIENT_METADATA,
    NOT_BOOTABLE,
    NO_DIRECTORY_RECORD_EXTENT,
}
enum PathFormat {
    UNIX,
    DOS,
}
enum ProductRelationship {
    DERIVES_FROM,
    UPGRADES,
    CLONES,
}
enum ReleaseStatus {
    RELEASED,
    SNAPSHOT,
    PRERELEASE,
    ROLLING,
}
enum TreeError {
    NO_TREEINFO,
    NOT_SUPPORTED_PROTOCOL,
}
enum InstallScriptInjectionMethod {
    CDROM,
    DISK,
    FLOPPY,
    INITRD,
    WEB,
}
enum MediaDetectFlags {
    BOOTABLE,
}
export const ARCHITECTURE_ALL: string
export const AVATAR_FORMAT_PROP_ALPHA: string
export const AVATAR_FORMAT_PROP_HEIGHT: string
export const AVATAR_FORMAT_PROP_MIME_TYPE: string
export const AVATAR_FORMAT_PROP_WIDTH: string
export const DEVICELINK_PROP_DRIVER: string
export const DEVICELINK_PROP_SUPPORTED: string
export const DEVICE_DRIVER_DEFAULT_PRIORITY: number
export const DEVICE_DRIVER_PROP_ARCHITECTURE: string
export const DEVICE_DRIVER_PROP_DEVICE: string
export const DEVICE_DRIVER_PROP_FILE: string
export const DEVICE_DRIVER_PROP_LOCATION: string
export const DEVICE_DRIVER_PROP_PRE_INSTALLABLE: string
export const DEVICE_DRIVER_PROP_PRIORITY: string
export const DEVICE_DRIVER_PROP_SIGNED: string
export const DEVICE_PROP_BUS_TYPE: string
export const DEVICE_PROP_CLASS: string
export const DEVICE_PROP_NAME: string
export const DEVICE_PROP_PRODUCT: string
export const DEVICE_PROP_PRODUCT_ID: string
export const DEVICE_PROP_SUBSYSTEM: string
export const DEVICE_PROP_VENDOR: string
export const DEVICE_PROP_VENDOR_ID: string
export const ENTITY_PROP_ID: string
export const FIRMWARE_PROP_ARCHITECTURE: string
export const FIRMWARE_PROP_SUPPORTED: string
export const FIRMWARE_PROP_TYPE: string
export const GIBIBYTES: number
export const IMAGE_PROP_ARCHITECTURE: string
export const IMAGE_PROP_CLOUD_INIT: string
export const IMAGE_PROP_FORMAT: string
export const IMAGE_PROP_URL: string
export const IMAGE_PROP_VARIANT: string
export const INSTALL_CONFIG_PARAM_PROP_DATAMAP: string
export const INSTALL_CONFIG_PARAM_PROP_NAME: string
export const INSTALL_CONFIG_PARAM_PROP_POLICY: string
export const INSTALL_CONFIG_PROP_ADMIN_PASSWORD: string
export const INSTALL_CONFIG_PROP_AVATAR_DISK: string
export const INSTALL_CONFIG_PROP_AVATAR_LOCATION: string
export const INSTALL_CONFIG_PROP_DRIVER_SIGNING: string
export const INSTALL_CONFIG_PROP_HARDWARE_ARCH: string
export const INSTALL_CONFIG_PROP_HOSTNAME: string
export const INSTALL_CONFIG_PROP_INSTALLATION_URL: string
export const INSTALL_CONFIG_PROP_L10N_KEYBOARD: string
export const INSTALL_CONFIG_PROP_L10N_LANGUAGE: string
export const INSTALL_CONFIG_PROP_L10N_TIMEZONE: string
export const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_DISK: string
export const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_LOCATION: string
export const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_DISK: string
export const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_LOCATION: string
export const INSTALL_CONFIG_PROP_REG_LOGIN: string
export const INSTALL_CONFIG_PROP_REG_PASSWORD: string
export const INSTALL_CONFIG_PROP_REG_PRODUCTKEY: string
export const INSTALL_CONFIG_PROP_SCRIPT_DISK: string
export const INSTALL_CONFIG_PROP_TARGET_DISK: string
export const INSTALL_CONFIG_PROP_USER_ADMIN: string
export const INSTALL_CONFIG_PROP_USER_AUTOLOGIN: string
export const INSTALL_CONFIG_PROP_USER_LOGIN: string
export const INSTALL_CONFIG_PROP_USER_PASSWORD: string
export const INSTALL_CONFIG_PROP_USER_REALNAME: string
export const INSTALL_SCRIPT_PROFILE_DESKTOP: string
export const INSTALL_SCRIPT_PROFILE_JEOS: string
export const INSTALL_SCRIPT_PROP_CAN_POST_INSTALL_DRIVERS: string
export const INSTALL_SCRIPT_PROP_CAN_PRE_INSTALL_DRIVERS: string
export const INSTALL_SCRIPT_PROP_EXPECTED_FILENAME: string
export const INSTALL_SCRIPT_PROP_INJECTION_METHOD: string
export const INSTALL_SCRIPT_PROP_INSTALLATION_SOURCE: string
export const INSTALL_SCRIPT_PROP_NEEDS_INTERNET: string
export const INSTALL_SCRIPT_PROP_PATH_FORMAT: string
export const INSTALL_SCRIPT_PROP_POST_INSTALL_DRIVERS_SIGNING_REQ: string
export const INSTALL_SCRIPT_PROP_PREFERRED_INJECTION_METHOD: string
export const INSTALL_SCRIPT_PROP_PRE_INSTALL_DRIVERS_SIGNING_REQ: string
export const INSTALL_SCRIPT_PROP_PRODUCT_KEY_FORMAT: string
export const INSTALL_SCRIPT_PROP_PROFILE: string
export const INSTALL_SCRIPT_PROP_TEMPLATE_DATA: string
export const INSTALL_SCRIPT_PROP_TEMPLATE_URI: string
export const KIBIBYTES: number
export const MAJOR_VERSION: number
export const MEBIBYTES: number
export const MEDIA_PROP_APPLICATION_ID: string
export const MEDIA_PROP_ARCHITECTURE: string
export const MEDIA_PROP_BOOTABLE: string
export const MEDIA_PROP_EJECT_AFTER_INSTALL: string
export const MEDIA_PROP_INITRD: string
export const MEDIA_PROP_INSTALLER: string
export const MEDIA_PROP_INSTALLER_REBOOTS: string
export const MEDIA_PROP_INSTALLER_SCRIPT: string
export const MEDIA_PROP_KERNEL: string
export const MEDIA_PROP_LANG: string
export const MEDIA_PROP_LANG_MAP: string
export const MEDIA_PROP_LANG_REGEX: string
export const MEDIA_PROP_LIVE: string
export const MEDIA_PROP_PUBLISHER_ID: string
export const MEDIA_PROP_SYSTEM_ID: string
export const MEDIA_PROP_URL: string
export const MEDIA_PROP_VARIANT: string
export const MEDIA_PROP_VOLUME_ID: string
export const MEDIA_PROP_VOLUME_SIZE: string
export const MEGAHERTZ: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const OS_PROP_CLOUD_IMAGE_USERNAME: string
export const OS_PROP_DISTRO: string
export const OS_PROP_FAMILY: string
export const OS_PROP_KERNEL_URL_ARGUMENT: string
export const OS_PROP_RELEASE_STATUS: string
export const OS_VARIANT_PROP_NAME: string
export const PRODUCT_PROP_CODENAME: string
export const PRODUCT_PROP_EOL_DATE: string
export const PRODUCT_PROP_LOGO: string
export const PRODUCT_PROP_NAME: string
export const PRODUCT_PROP_RELEASE_DATE: string
export const PRODUCT_PROP_SHORT_ID: string
export const PRODUCT_PROP_VENDOR: string
export const PRODUCT_PROP_VERSION: string
export const RESOURCES_PROP_ARCHITECTURE: string
export const RESOURCES_PROP_CPU: string
export const RESOURCES_PROP_N_CPUS: string
export const RESOURCES_PROP_RAM: string
export const RESOURCES_PROP_STORAGE: string
export const TREE_PROP_ARCHITECTURE: string
export const TREE_PROP_BOOT_ISO: string
export const TREE_PROP_HAS_TREEINFO: string
export const TREE_PROP_INITRD: string
export const TREE_PROP_KERNEL: string
export const TREE_PROP_TREEINFO_ARCH: string
export const TREE_PROP_TREEINFO_FAMILY: string
export const TREE_PROP_TREEINFO_VARIANT: string
export const TREE_PROP_TREEINFO_VERSION: string
export const TREE_PROP_URL: string
export const TREE_PROP_VARIANT: string
function error_quark(): GLib.Quark
function media_error_quark(): GLib.Quark
function tree_error_quark(): GLib.Quark
export interface AvatarFormat_ConstructProps extends Entity_ConstructProps {
}
class AvatarFormat {
    /* Properties of Libosinfo-1.0.Libosinfo.AvatarFormat */
    readonly alpha: boolean
    readonly height: number
    readonly mime_types: string[]
    readonly width: number
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.AvatarFormat */
    parent_instance: Entity
    priv: AvatarFormatPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.AvatarFormat */
    get_alpha(): boolean
    get_height(): number
    get_mime_types(): string[]
    get_width(): number
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alpha", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-types", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AvatarFormat_ConstructProps)
    _init (config?: AvatarFormat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AvatarFormat
    static $gtype: GObject.Type
}
export interface Datamap_ConstructProps extends Entity_ConstructProps {
}
class Datamap {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Datamap */
    parent_instance: Entity
    priv: DatamapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Datamap */
    insert(inval: string, outval: string): void
    lookup(inval: string): string
    reverse_lookup(outval: string): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Datamap_ConstructProps)
    _init (config?: Datamap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Datamap
    static $gtype: GObject.Type
}
export interface DatamapList_ConstructProps extends List_ConstructProps {
}
class DatamapList {
    /* Fields of Libosinfo-1.0.Libosinfo.DatamapList */
    parent_instance: List
    priv: DatamapListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: DatamapList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DatamapList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DatamapList_ConstructProps)
    _init (config?: DatamapList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DatamapList
    static $gtype: GObject.Type
}
export interface Db_ConstructProps extends GObject.Object_ConstructProps {
}
class Db {
    /* Fields of Libosinfo-1.0.Libosinfo.Db */
    parent_instance: GObject.Object
    priv: DbPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Db */
    add_datamap(datamap: Datamap): void
    add_deployment(deployment: Deployment): void
    add_device(device: Device): void
    add_install_script(script: InstallScript): void
    add_os(os: Os): void
    add_platform(platform: Platform): void
    find_deployment(os: Os, platform: Platform): Deployment
    get_datamap(id: string): Datamap
    get_datamap_list(): DatamapList
    get_deployment(id: string): Deployment
    get_deployment_list(): DeploymentList
    get_device(id: string): Device
    get_device_list(): DeviceList
    get_install_script(id: string): InstallScript
    get_install_script_list(): InstallScriptList
    get_os(id: string): Os
    get_os_list(): OsList
    get_platform(id: string): Platform
    get_platform_list(): PlatformList
    guess_os_from_media(media: Media): [ /* returnType */ Os, /* matched_media */ Media | null ]
    guess_os_from_tree(tree: Tree): [ /* returnType */ Os, /* matched_tree */ Tree | null ]
    identify_media(media: Media): boolean
    identify_tree(tree: Tree): boolean
    unique_values_for_os_relationship(relshp: ProductRelationship): OsList
    unique_values_for_platform_relationship(relshp: ProductRelationship): PlatformList
    unique_values_for_property_in_deployment(propName: string): string[]
    unique_values_for_property_in_device(propName: string): string[]
    unique_values_for_property_in_os(propName: string): string[]
    unique_values_for_property_in_platform(propName: string): string[]
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
    connect(sigName: "notify", callback: (($obj: Db, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Db, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Db_ConstructProps)
    _init (config?: Db_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Db
    static $gtype: GObject.Type
}
export interface Deployment_ConstructProps extends Entity_ConstructProps {
    os?: Os
    platform?: Platform
}
class Deployment {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Deployment */
    parent_instance: Entity
    priv: DeploymentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Deployment */
    add_device(dev: Device): DeviceLink
    get_device_links(filter?: Filter | null): DeviceLinkList
    get_devices(filter?: Filter | null): DeviceList
    get_os(): Os
    get_platform(): Platform
    get_preferred_device(filter?: Filter | null): Device
    get_preferred_device_link(filter?: Filter | null): DeviceLink
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, os: Os, platform: Platform): Deployment
    static $gtype: GObject.Type
}
export interface DeploymentList_ConstructProps extends List_ConstructProps {
}
class DeploymentList {
    /* Fields of Libosinfo-1.0.Libosinfo.DeploymentList */
    parent_instance: List
    priv: DeploymentListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeploymentList */
    new_copy(): DeploymentList
    new_filtered(filter: Filter): DeploymentList
    new_intersection(sourceTwo: DeploymentList): DeploymentList
    new_union(sourceTwo: DeploymentList): DeploymentList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: DeploymentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeploymentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeploymentList_ConstructProps)
    _init (config?: DeploymentList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeploymentList
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends Entity_ConstructProps {
}
class Device {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Device */
    parent_instance: Entity
    priv: DevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Device */
    get_bus_type(): string
    get_class(): string
    get_name(): string
    get_product(): string
    get_product_id(): string
    get_subsystem(): string
    get_vendor(): string
    get_vendor_id(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Device
    static $gtype: GObject.Type
}
export interface DeviceDriver_ConstructProps extends Entity_ConstructProps {
}
class DeviceDriver {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceDriver */
    parent_instance: Entity
    priv: DeviceDriverPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceDriver */
    get_architecture(): string
    get_devices(): DeviceList
    get_files(): string[]
    get_location(): string
    get_pre_installable(): boolean
    get_priority(): number
    get_signed(): boolean
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceDriver_ConstructProps)
    _init (config?: DeviceDriver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceDriverList_ConstructProps extends List_ConstructProps {
}
class DeviceDriverList {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceDriverList */
    parent_instance: List
    priv: DeviceDriverListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: DeviceDriverList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceDriverList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceDriverList_ConstructProps)
    _init (config?: DeviceDriverList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceDriverList
    static $gtype: GObject.Type
}
export interface DeviceLink_ConstructProps extends Entity_ConstructProps {
    target?: Device
}
class DeviceLink {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLink */
    parent_instance: Entity
    priv: DeviceLinkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceLink */
    get_driver(): string
    get_target(): Device
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceLink_ConstructProps)
    _init (config?: DeviceLink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target: Device): DeviceLink
    static $gtype: GObject.Type
}
export interface DeviceLinkFilter_ConstructProps extends Filter_ConstructProps {
    target_filter?: Filter
}
class DeviceLinkFilter {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkFilter */
    parent_instance: Filter
    priv: DeviceLinkFilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceLinkFilter */
    get_target_filter(): Filter
    /* Methods of Libosinfo-1.0.Libosinfo.Filter */
    add_constraint(propName: string, propVal: string): void
    clear_constraint(propName: string): void
    clear_constraints(): void
    get_constraint_keys(): string[]
    get_constraint_values(propName: string): string[]
    matches(entity: Entity): boolean
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
    /* Virtual methods of Libosinfo-1.0.Libosinfo.Filter */
    vfunc_matches(entity: Entity): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceLinkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLinkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceLinkFilter_ConstructProps)
    _init (config?: DeviceLinkFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filter: Filter): DeviceLinkFilter
    static new(): DeviceLinkFilter
    static $gtype: GObject.Type
}
export interface DeviceLinkList_ConstructProps extends List_ConstructProps {
}
class DeviceLinkList {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkList */
    parent_instance: List
    priv: DeviceLinkListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceLinkList */
    get_devices(filter?: Filter | null): DeviceList
    new_copy(): DeviceLinkList
    new_filtered(filter: Filter): DeviceLinkList
    new_intersection(sourceTwo: DeviceLinkList): DeviceLinkList
    new_union(sourceTwo: DeviceLinkList): DeviceLinkList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: DeviceLinkList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLinkList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceLinkList_ConstructProps)
    _init (config?: DeviceLinkList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceLinkList
    static $gtype: GObject.Type
}
export interface DeviceList_ConstructProps extends List_ConstructProps {
}
class DeviceList {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceList */
    parent_instance: List
    priv: DeviceListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceList */
    new_copy(): DeviceList
    new_filtered(filter: Filter): DeviceList
    new_intersection(sourceTwo: DeviceList): DeviceList
    new_union(sourceTwo: DeviceList): DeviceList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceList_ConstructProps)
    _init (config?: DeviceList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceList
    static $gtype: GObject.Type
}
export interface Entity_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
}
class Entity {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    parent_instance: GObject.Object
    priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Filter_ConstructProps extends GObject.Object_ConstructProps {
}
class Filter {
    /* Fields of Libosinfo-1.0.Libosinfo.Filter */
    parent_instance: GObject.Object
    priv: FilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Filter */
    add_constraint(propName: string, propVal: string): void
    clear_constraint(propName: string): void
    clear_constraints(): void
    get_constraint_keys(): string[]
    get_constraint_values(propName: string): string[]
    matches(entity: Entity): boolean
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
    /* Virtual methods of Libosinfo-1.0.Libosinfo.Filter */
    vfunc_matches(entity: Entity): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Filter
    static $gtype: GObject.Type
}
export interface Firmware_ConstructProps extends Entity_ConstructProps {
    architecture?: string
    type?: string
}
class Firmware {
    /* Properties of Libosinfo-1.0.Libosinfo.Firmware */
    architecture: string
    type: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Firmware */
    parent_instance: Entity
    priv: FirmwarePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Firmware */
    get_architecture(): string
    get_firmware_type(): string
    is_supported(): boolean
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::architecture", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Firmware_ConstructProps)
    _init (config?: Firmware_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string, type: string): Firmware
    static $gtype: GObject.Type
}
export interface FirmwareList_ConstructProps extends List_ConstructProps {
}
class FirmwareList {
    /* Fields of Libosinfo-1.0.Libosinfo.FirmwareList */
    parent_instance: List
    priv: FirmwareListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: FirmwareList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FirmwareList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FirmwareList_ConstructProps)
    _init (config?: FirmwareList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FirmwareList
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends Entity_ConstructProps {
    architecture?: string
    cloud_init?: string
    format?: string
    url?: string
}
class Image {
    /* Properties of Libosinfo-1.0.Libosinfo.Image */
    architecture: string
    cloud_init: string
    format: string
    url: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Image */
    parent_instance: Entity
    priv: ImagePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Image */
    get_architecture(): string
    get_cloud_init(): boolean
    get_format(): string
    get_os(): Os
    get_os_variants(): OsVariantList
    get_url(): string
    set_os(os: Os): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::architecture", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cloud-init", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-init", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string, format: string): Image
    static $gtype: GObject.Type
}
export interface ImageList_ConstructProps extends List_ConstructProps {
}
class ImageList {
    /* Fields of Libosinfo-1.0.Libosinfo.ImageList */
    parent_instance: List
    priv: ImageListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: ImageList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImageList_ConstructProps)
    _init (config?: ImageList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ImageList
    static $gtype: GObject.Type
}
export interface InstallConfig_ConstructProps extends Entity_ConstructProps {
}
class InstallConfig {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfig */
    parent_instance: Entity
    priv: InstallConfigPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallConfig */
    get_admin_password(): string
    get_avatar_disk(): string
    get_avatar_location(): string
    get_driver_signing(): boolean
    get_hardware_arch(): string
    get_hostname(): string
    get_installation_url(): string
    get_l10n_keyboard(): string
    get_l10n_language(): string
    get_l10n_timezone(): string
    get_post_install_drivers_disk(): string
    get_post_install_drivers_location(): string
    get_pre_install_drivers_disk(): string
    get_pre_install_drivers_location(): string
    get_reg_login(): string
    get_reg_password(): string
    get_reg_product_key(): string
    get_script_disk(): string
    get_target_disk(): string
    get_user_administrator(): boolean
    get_user_autologin(): boolean
    get_user_login(): string
    get_user_password(): string
    get_user_realname(): string
    set_admin_password(password: string): void
    set_avatar_disk(disk: string): void
    set_avatar_location(location: string): void
    set_driver_signing(signing: boolean): void
    set_hardware_arch(arch: string): void
    set_hostname(hostname: string): void
    set_installation_url(url: string): void
    set_l10n_keyboard(keyboard: string): void
    set_l10n_language(language: string): void
    set_l10n_timezone(timezone: string): void
    set_post_install_drivers_disk(disk: string): void
    set_post_install_drivers_location(location: string): void
    set_pre_install_drivers_disk(disk: string): void
    set_pre_install_drivers_location(location: string): void
    set_reg_login(name: string): void
    set_reg_password(password: string): void
    set_reg_product_key(key: string): void
    set_script_disk(disk: string): void
    set_target_disk(disk: string): void
    set_user_administrator(admin: boolean): void
    set_user_autologin(autologin: boolean): void
    set_user_login(username: string): void
    set_user_password(password: string): void
    set_user_realname(name: string): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstallConfig_ConstructProps)
    _init (config?: InstallConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): InstallConfig
    static $gtype: GObject.Type
}
export interface InstallConfigParam_ConstructProps extends Entity_ConstructProps {
    name?: string
    value_map?: Datamap
}
class InstallConfigParam {
    /* Properties of Libosinfo-1.0.Libosinfo.InstallConfigParam */
    readonly policy: InstallConfigParamPolicy
    value_map: Datamap
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigParam */
    parent_instance: Entity
    priv: InstallConfigParamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallConfigParam */
    get_name(): string
    get_policy(): InstallConfigParamPolicy
    get_value_map(): Datamap
    is_optional(): boolean
    is_required(): boolean
    set_value_map(datamap: Datamap): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::policy", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-map", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-map", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstallConfigParam_ConstructProps)
    _init (config?: InstallConfigParam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): InstallConfigParam
    static $gtype: GObject.Type
}
export interface InstallConfigParamList_ConstructProps extends List_ConstructProps {
}
class InstallConfigParamList {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigParamList */
    parent_instance: List
    priv: InstallConfigParamListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: InstallConfigParamList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallConfigParamList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstallConfigParamList_ConstructProps)
    _init (config?: InstallConfigParamList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InstallConfigParamList
    static $gtype: GObject.Type
}
export interface InstallScript_ConstructProps extends Entity_ConstructProps {
    preferred_injection_method?: InstallScriptInjectionMethod
    profile?: string
    template_data?: string
    template_uri?: string
}
class InstallScript {
    /* Properties of Libosinfo-1.0.Libosinfo.InstallScript */
    readonly avatar_format: AvatarFormat
    readonly installation_source: InstallScriptInstallationSource
    readonly path_format: PathFormat
    preferred_injection_method: InstallScriptInjectionMethod
    readonly product_key_format: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.InstallScript */
    parent_instance: Entity
    priv: InstallScriptPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallScript */
    generate(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generate_async(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generate_command_line(os: Os, config: InstallConfig): string
    generate_command_line_for_media(media: Media, config: InstallConfig): string
    generate_command_line_for_tree(tree: Tree, config: InstallConfig): string
    generate_finish(res: Gio.AsyncResult): string
    generate_for_media(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generate_for_media_async(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generate_for_media_finish(res: Gio.AsyncResult): string
    generate_for_tree(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generate_for_tree_async(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generate_for_tree_finish(res: Gio.AsyncResult): string
    generate_output(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generate_output_async(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generate_output_finish(res: Gio.AsyncResult): Gio.File
    generate_output_for_media(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generate_output_for_media_async(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generate_output_for_media_finish(res: Gio.AsyncResult): Gio.File
    generate_output_for_tree(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generate_output_for_tree_async(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generate_output_for_tree_finish(res: Gio.AsyncResult): Gio.File
    get_avatar_format(): AvatarFormat
    get_can_post_install_drivers(): boolean
    get_can_pre_install_drivers(): boolean
    get_config_param(name: string): InstallConfigParam
    get_config_param_list(): InstallScript[]
    get_config_params(): InstallConfigParamList
    get_expected_filename(): string
    get_injection_methods(): InstallScriptInjectionMethod
    get_installation_source(): InstallScriptInstallationSource
    get_needs_internet(): boolean
    get_output_filename(): string
    get_output_prefix(): string
    get_path_format(): PathFormat
    get_post_install_drivers_signing_req(): DeviceDriverSigningReq
    get_pre_install_drivers_signing_req(): DeviceDriverSigningReq
    get_preferred_injection_method(): InstallScriptInjectionMethod
    get_product_key_format(): string
    get_profile(): string
    get_template_data(): string
    get_template_uri(): string
    has_config_param(config_param: InstallConfigParam): boolean
    has_config_param_name(name: string): boolean
    set_installation_source(source: InstallScriptInstallationSource): void
    set_output_prefix(prefix: string): void
    set_preferred_injection_method(method: InstallScriptInjectionMethod): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::avatar-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::installation-source", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installation-source", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preferred-injection-method", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-injection-method", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product-key-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-key-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstallScript_ConstructProps)
    _init (config?: InstallScript_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): InstallScript
    static new_data(id: string, profile: string, templateData: string): InstallScript
    static new_uri(id: string, profile: string, templateUri: string): InstallScript
    static $gtype: GObject.Type
}
export interface InstallScriptList_ConstructProps extends List_ConstructProps {
}
class InstallScriptList {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallScriptList */
    parent_instance: List
    priv: InstallScriptListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallScriptList */
    new_copy(): InstallScriptList
    new_filtered(filter: Filter): InstallScriptList
    new_intersection(sourceTwo: InstallScriptList): InstallScriptList
    new_union(sourceTwo: InstallScriptList): InstallScriptList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: InstallScriptList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallScriptList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstallScriptList_ConstructProps)
    _init (config?: InstallScriptList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InstallScriptList
    static $gtype: GObject.Type
}
export interface List_ConstructProps extends GObject.Object_ConstructProps {
    element_type?: GObject.Type
}
class List {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    parent_instance: GObject.Object
    priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: List_ConstructProps)
    _init (config?: List_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Loader_ConstructProps extends GObject.Object_ConstructProps {
}
class Loader {
    /* Fields of Libosinfo-1.0.Libosinfo.Loader */
    parent_instance: GObject.Object
    priv: LoaderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Loader */
    get_db(): Db
    process_default_path(): void
    process_local_path(): void
    process_path(path: string): void
    process_system_path(): void
    process_uri(uri: string): void
    process_user_path(): void
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
    connect(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Loader_ConstructProps)
    _init (config?: Loader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Loader
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends Entity_ConstructProps {
    application_id?: string
    architecture?: string
    eject_after_install?: boolean
    initrd_path?: string
    installer?: boolean
    installer_reboots?: number
    installer_script?: boolean
    kernel_path?: string
    live?: boolean
    os?: Os
    publisher_id?: string
    system_id?: string
    url?: string
    volume_id?: string
    volume_size?: number
}
class Media {
    /* Properties of Libosinfo-1.0.Libosinfo.Media */
    application_id: string
    architecture: string
    eject_after_install: boolean
    initrd_path: string
    installer: boolean
    installer_reboots: number
    installer_script: boolean
    kernel_path: string
    readonly languages: string[]
    live: boolean
    os: Os
    publisher_id: string
    system_id: string
    url: string
    volume_id: string
    volume_size: number
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Media */
    parent_instance: Entity
    priv: MediaPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Media */
    add_install_script(script: InstallScript): void
    get_application_id(): string
    get_architecture(): string
    get_eject_after_install(): boolean
    get_initrd_path(): string
    get_install_script_list(): InstallScriptList
    get_installer(): boolean
    get_installer_reboots(): number
    get_kernel_path(): string
    get_languages(): string[]
    get_live(): boolean
    get_os(): Os
    get_os_variants(): OsVariantList
    get_publisher_id(): string
    get_system_id(): string
    get_url(): string
    get_volume_id(): string
    get_volume_size(): number
    is_bootable(): boolean
    supports_installer_script(): boolean
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::architecture", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eject-after-install", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eject-after-install", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initrd-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::installer", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::installer-reboots", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-reboots", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::installer-script", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-script", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kernel-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::languages", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::languages", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::live", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::os", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::publisher-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume-size", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-size", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Media
    static create_from_location(location: string, cancellable?: Gio.Cancellable | null): Media
    static create_from_location_async(location: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static create_from_location_finish(res: Gio.AsyncResult): Media
    static create_from_location_with_flags(location: string, cancellable: Gio.Cancellable | null, flags: number): Media
    static create_from_location_with_flags_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, flags: number): void
    static create_from_location_with_flags_finish(res: Gio.AsyncResult): Media
    static $gtype: GObject.Type
}
export interface MediaList_ConstructProps extends List_ConstructProps {
}
class MediaList {
    /* Fields of Libosinfo-1.0.Libosinfo.MediaList */
    parent_instance: List
    priv: MediaListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.MediaList */
    new_copy(): MediaList
    new_filtered(filter: Filter): MediaList
    new_intersection(sourceTwo: MediaList): MediaList
    new_union(sourceTwo: MediaList): MediaList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: MediaList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaList_ConstructProps)
    _init (config?: MediaList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaList
    static $gtype: GObject.Type
}
export interface Os_ConstructProps extends Product_ConstructProps {
}
class Os {
    /* Properties of Libosinfo-1.0.Libosinfo.Os */
    readonly cloud_image_username: string
    readonly distro: string
    readonly family: string
    readonly kernel_url_argument: string
    /* Properties of Libosinfo-1.0.Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly short_id: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Os */
    parent_instance: Product
    priv: OsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Os */
    add_device(dev: Device): DeviceLink
    add_device_driver(driver: DeviceDriver): void
    add_firmware(firmware: Firmware): void
    add_image(image: Image): void
    add_install_script(script: InstallScript): void
    add_maximum_resources(resources: Resources): void
    add_media(media: Media): void
    add_minimum_resources(resources: Resources): void
    add_network_install_resources(resources: Resources): void
    add_recommended_resources(resources: Resources): void
    add_tree(tree: Tree): void
    add_variant(variant: OsVariant): void
    find_install_script(profile: string): InstallScript
    get_all_device_links(filter?: Filter | null): DeviceLinkList
    get_all_devices(filter?: Filter | null): DeviceList
    get_cloud_image_username(): string
    get_device_drivers(): DeviceDriverList
    get_device_drivers_prioritized(): DeviceDriverList
    get_device_links(filter?: Filter | null): DeviceLinkList
    get_devices(filter?: Filter | null): DeviceList
    get_devices_by_property(property: string, value: string, inherited: boolean): DeviceList
    get_distro(): string
    get_family(): string
    get_firmware_list(filter?: Filter | null): FirmwareList
    get_image_list(): ImageList
    get_install_script_list(): InstallScriptList
    get_kernel_url_argument(): string
    get_maximum_resources(): ResourcesList
    get_media_list(): MediaList
    get_minimum_resources(): ResourcesList
    get_network_install_resources(): ResourcesList
    get_recommended_resources(): ResourcesList
    get_release_status(): ReleaseStatus
    get_tree_list(): TreeList
    get_variant_list(): OsVariantList
    /* Methods of Libosinfo-1.0.Libosinfo.Product */
    add_related(relshp: ProductRelationship, otherproduct: Product): void
    get_codename(): string
    get_eol_date(): GLib.Date
    get_eol_date_string(): string
    get_logo(): string
    get_name(): string
    get_related(relshp: ProductRelationship): ProductList
    get_release_date(): GLib.Date
    get_release_date_string(): string
    get_short_id(): string
    get_short_id_list(): string[]
    get_vendor(): string
    get_version(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cloud-image-username", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-image-username", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::distro", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distro", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kernel-url-argument", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-url-argument", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codename", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::short-id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Os_ConstructProps)
    _init (config?: Os_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Os
    static $gtype: GObject.Type
}
export interface OsList_ConstructProps extends ProductList_ConstructProps {
}
class OsList {
    /* Fields of Libosinfo-1.0.Libosinfo.OsList */
    parent_instance: ProductList
    priv: OsListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.OsList */
    new_copy(): OsList
    new_filtered(filter: Filter): OsList
    new_intersection(sourceTwo: OsList): OsList
    new_union(sourceTwo: OsList): OsList
    /* Methods of Libosinfo-1.0.Libosinfo.ProductList */
    new_copy(): ProductList
    new_filtered(filter: Filter): ProductList
    new_intersection(sourceTwo: ProductList): ProductList
    new_union(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: OsList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OsList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OsList_ConstructProps)
    _init (config?: OsList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OsList
    static $gtype: GObject.Type
}
export interface OsVariant_ConstructProps extends Entity_ConstructProps {
    name?: string
}
class OsVariant {
    /* Properties of Libosinfo-1.0.Libosinfo.OsVariant */
    name: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.OsVariant */
    parent_instance: Entity
    priv: OsVariantPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.OsVariant */
    get_name(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OsVariant_ConstructProps)
    _init (config?: OsVariant_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): OsVariant
    static $gtype: GObject.Type
}
export interface OsVariantList_ConstructProps extends List_ConstructProps {
}
class OsVariantList {
    /* Fields of Libosinfo-1.0.Libosinfo.OsVariantList */
    parent_instance: List
    priv: OsVariantListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: OsVariantList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OsVariantList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OsVariantList_ConstructProps)
    _init (config?: OsVariantList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OsVariantList
    static $gtype: GObject.Type
}
export interface Platform_ConstructProps extends Product_ConstructProps {
}
class Platform {
    /* Properties of Libosinfo-1.0.Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly short_id: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Platform */
    parent_instance: Product
    priv: PlatformPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Platform */
    add_device(dev: Device): DeviceLink
    get_all_devices(filter?: Filter | null): DeviceList
    get_device_links(filter?: Filter | null): DeviceLinkList
    get_devices(filter?: Filter | null): DeviceList
    /* Methods of Libosinfo-1.0.Libosinfo.Product */
    add_related(relshp: ProductRelationship, otherproduct: Product): void
    get_codename(): string
    get_eol_date(): GLib.Date
    get_eol_date_string(): string
    get_logo(): string
    get_name(): string
    get_related(relshp: ProductRelationship): ProductList
    get_release_date(): GLib.Date
    get_release_date_string(): string
    get_short_id(): string
    get_short_id_list(): string[]
    get_vendor(): string
    get_version(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::codename", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::short-id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Platform_ConstructProps)
    _init (config?: Platform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Platform
    static $gtype: GObject.Type
}
export interface PlatformList_ConstructProps extends ProductList_ConstructProps {
}
class PlatformList {
    /* Fields of Libosinfo-1.0.Libosinfo.PlatformList */
    parent_instance: ProductList
    priv: PlatformListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.PlatformList */
    new_copy(): PlatformList
    new_filtered(filter: Filter): PlatformList
    new_intersection(sourceTwo: PlatformList): PlatformList
    new_union(sourceTwo: PlatformList): PlatformList
    /* Methods of Libosinfo-1.0.Libosinfo.ProductList */
    new_copy(): ProductList
    new_filtered(filter: Filter): ProductList
    new_intersection(sourceTwo: ProductList): ProductList
    new_union(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: PlatformList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlatformList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlatformList_ConstructProps)
    _init (config?: PlatformList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PlatformList
    static $gtype: GObject.Type
}
export interface Product_ConstructProps extends Entity_ConstructProps {
}
class Product {
    /* Properties of Libosinfo-1.0.Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly short_id: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Product */
    parent_instance: Entity
    priv: ProductPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Product */
    add_related(relshp: ProductRelationship, otherproduct: Product): void
    get_codename(): string
    get_eol_date(): GLib.Date
    get_eol_date_string(): string
    get_logo(): string
    get_name(): string
    get_related(relshp: ProductRelationship): ProductList
    get_release_date(): GLib.Date
    get_release_date_string(): string
    get_short_id(): string
    get_short_id_list(): string[]
    get_vendor(): string
    get_version(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::codename", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::short-id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Product_ConstructProps)
    _init (config?: Product_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProductFilter_ConstructProps extends Filter_ConstructProps {
}
class ProductFilter {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductFilter */
    parent_instance: Filter
    priv: ProductFilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.ProductFilter */
    add_product_constraint(relshp: ProductRelationship, product: Product): number
    add_support_date_constraint(when: GLib.Date): void
    clear_product_constraint(relshp: ProductRelationship): void
    clear_product_constraints(): void
    get_product_constraint_values(relshp: ProductRelationship): Product[]
    /* Methods of Libosinfo-1.0.Libosinfo.Filter */
    add_constraint(propName: string, propVal: string): void
    clear_constraint(propName: string): void
    clear_constraints(): void
    get_constraint_keys(): string[]
    get_constraint_values(propName: string): string[]
    matches(entity: Entity): boolean
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
    /* Virtual methods of Libosinfo-1.0.Libosinfo.Filter */
    vfunc_matches(entity: Entity): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProductFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProductFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProductFilter_ConstructProps)
    _init (config?: ProductFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProductFilter
    static $gtype: GObject.Type
}
export interface ProductList_ConstructProps extends List_ConstructProps {
}
class ProductList {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductList */
    parent_instance: List
    priv: ProductListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.ProductList */
    new_copy(): ProductList
    new_filtered(filter: Filter): ProductList
    new_intersection(sourceTwo: ProductList): ProductList
    new_union(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: ProductList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProductList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProductList_ConstructProps)
    _init (config?: ProductList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProductList
    static $gtype: GObject.Type
}
export interface Resources_ConstructProps extends Entity_ConstructProps {
    architecture?: string
    cpu?: number
    n_cpus?: number
    ram?: number
    storage?: number
}
class Resources {
    /* Properties of Libosinfo-1.0.Libosinfo.Resources */
    cpu: number
    n_cpus: number
    ram: number
    storage: number
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Resources */
    parent_instance: Entity
    priv: ResourcesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Resources */
    get_architecture(): string
    get_cpu(): number
    get_n_cpus(): number
    get_ram(): number
    get_storage(): number
    set_cpu(cpu: number): void
    set_n_cpus(n_cpus: number): void
    set_ram(ram: number): void
    set_storage(storage: number): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cpu", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cpu", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-cpus", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-cpus", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ram", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ram", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Resources_ConstructProps)
    _init (config?: Resources_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Resources
    static $gtype: GObject.Type
}
export interface ResourcesList_ConstructProps extends List_ConstructProps {
}
class ResourcesList {
    /* Fields of Libosinfo-1.0.Libosinfo.ResourcesList */
    parent_instance: List
    priv: ResourcesListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.ResourcesList */
    new_copy(): ResourcesList
    new_filtered(filter: Filter): ResourcesList
    new_intersection(sourceTwo: ResourcesList): ResourcesList
    new_union(sourceTwo: ResourcesList): ResourcesList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: ResourcesList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourcesList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResourcesList_ConstructProps)
    _init (config?: ResourcesList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ResourcesList
    static $gtype: GObject.Type
}
export interface Tree_ConstructProps extends Entity_ConstructProps {
    architecture?: string
    boot_iso_path?: string
    has_treeinfo?: boolean
    initrd_path?: string
    kernel_path?: string
    os?: Os
    treeinfo_arch?: string
    treeinfo_family?: string
    treeinfo_variant?: string
    treeinfo_version?: string
    url?: string
}
class Tree {
    /* Properties of Libosinfo-1.0.Libosinfo.Tree */
    architecture: string
    boot_iso_path: string
    has_treeinfo: boolean
    initrd_path: string
    kernel_path: string
    os: Os
    treeinfo_arch: string
    treeinfo_family: string
    treeinfo_variant: string
    treeinfo_version: string
    url: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Tree */
    parent_instance: Entity
    priv: TreePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Tree */
    get_architecture(): string
    get_boot_iso_path(): string
    get_initrd_path(): string
    get_kernel_path(): string
    get_os(): Os
    get_os_variants(): OsVariantList
    get_treeinfo_arch(): string
    get_treeinfo_family(): string
    get_treeinfo_variant(): string
    get_treeinfo_version(): string
    get_url(): string
    set_os(os: Os): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    add_param(key: string, value: string): void
    clear_param(key: string): void
    get_id(): string
    get_param_keys(): string[]
    get_param_value(key: string): string
    get_param_value_boolean(key: string): boolean
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean
    get_param_value_enum(key: string, enum_type: GObject.Type, default_value: number): number
    get_param_value_int64(key: string): number
    get_param_value_int64_with_default(key: string, default_value: number): number
    get_param_value_list(key: string): string[]
    set_param(key: string, value: string): void
    set_param_boolean(key: string, value: boolean): void
    set_param_enum(key: string, value: number, enum_type: GObject.Type): void
    set_param_int64(key: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::architecture", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::boot-iso-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-iso-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-treeinfo", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-treeinfo", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initrd-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kernel-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::os", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::treeinfo-arch", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-arch", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::treeinfo-family", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-family", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::treeinfo-variant", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-variant", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::treeinfo-version", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-version", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Tree
    static create_from_location(location: string, cancellable?: Gio.Cancellable | null): Tree
    static create_from_location_async(location: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static create_from_location_finish(res: Gio.AsyncResult): Tree
    static create_from_treeinfo(treeinfo: string, location: string): Tree
    static $gtype: GObject.Type
}
export interface TreeList_ConstructProps extends List_ConstructProps {
}
class TreeList {
    /* Fields of Libosinfo-1.0.Libosinfo.TreeList */
    parent_instance: List
    priv: TreeListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.TreeList */
    new_copy(): TreeList
    new_filtered(filter: Filter): TreeList
    new_intersection(sourceTwo: TreeList): TreeList
    new_union(sourceTwo: TreeList): TreeList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    add_all(source: List): void
    add_filtered(source: List, filter: Filter): void
    add_intersection(sourceOne: List, sourceTwo: List): void
    add_union(sourceOne: List, sourceTwo: List): void
    find_by_id(id: string): Entity
    get_element_type(): GObject.Type
    get_elements(): Entity[]
    get_length(): number
    get_nth(idx: number): Entity
    new_copy(): List
    new_filtered(filter: Filter): List
    new_intersection(sourceTwo: List): List
    new_union(sourceTwo: List): List
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
    connect(sigName: "notify", callback: (($obj: TreeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TreeList_ConstructProps)
    _init (config?: TreeList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TreeList
    static $gtype: GObject.Type
}
abstract class AvatarFormatClass {
    /* Fields of Libosinfo-1.0.Libosinfo.AvatarFormatClass */
    parent_class: EntityClass
    static name: string
}
class AvatarFormatPrivate {
    static name: string
}
abstract class DatamapClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DatamapClass */
    parent_class: EntityClass
    static name: string
}
abstract class DatamapListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DatamapListClass */
    parent_class: ListClass
    static name: string
}
class DatamapListPrivate {
    static name: string
}
class DatamapPrivate {
    static name: string
}
abstract class DbClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DbClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class DbPrivate {
    static name: string
}
abstract class DeploymentClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeploymentClass */
    parent_class: EntityClass
    static name: string
}
abstract class DeploymentListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeploymentListClass */
    parent_class: ListClass
    static name: string
}
class DeploymentListPrivate {
    static name: string
}
class DeploymentPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceClass */
    parent_class: EntityClass
    static name: string
}
abstract class DeviceDriverClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceDriverClass */
    parent_class: EntityClass
    static name: string
}
abstract class DeviceDriverListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceDriverListClass */
    parent_class: ListClass
    static name: string
}
class DeviceDriverListPrivate {
    static name: string
}
class DeviceDriverPrivate {
    static name: string
}
abstract class DeviceLinkClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkClass */
    parent_class: EntityClass
    static name: string
}
abstract class DeviceLinkFilterClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkFilterClass */
    parent_class: FilterClass
    static name: string
}
class DeviceLinkFilterPrivate {
    static name: string
}
abstract class DeviceLinkListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkListClass */
    parent_class: ListClass
    static name: string
}
class DeviceLinkListPrivate {
    static name: string
}
class DeviceLinkPrivate {
    static name: string
}
abstract class DeviceListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceListClass */
    parent_class: ListClass
    static name: string
}
class DeviceListPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class EntityClass {
    /* Fields of Libosinfo-1.0.Libosinfo.EntityClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class EntityPrivate {
    static name: string
}
abstract class FilterClass {
    /* Fields of Libosinfo-1.0.Libosinfo.FilterClass */
    parent_class: GObject.ObjectClass
    matches: (filter: Filter, entity: Entity) => boolean
    static name: string
}
class FilterPrivate {
    static name: string
}
abstract class FirmwareClass {
    /* Fields of Libosinfo-1.0.Libosinfo.FirmwareClass */
    parent_class: EntityClass
    static name: string
}
abstract class FirmwareListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.FirmwareListClass */
    parent_class: ListClass
    static name: string
}
class FirmwareListPrivate {
    static name: string
}
class FirmwarePrivate {
    static name: string
}
abstract class ImageClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ImageClass */
    parent_class: EntityClass
    static name: string
}
abstract class ImageListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ImageListClass */
    parent_class: ListClass
    static name: string
}
class ImageListPrivate {
    static name: string
}
class ImagePrivate {
    static name: string
}
abstract class InstallConfigClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigClass */
    parent_class: EntityClass
    static name: string
}
abstract class InstallConfigParamClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigParamClass */
    parent_class: EntityClass
    static name: string
}
abstract class InstallConfigParamListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigParamListClass */
    parent_class: ListClass
    static name: string
}
class InstallConfigParamListPrivate {
    static name: string
}
class InstallConfigParamPrivate {
    static name: string
}
class InstallConfigPrivate {
    static name: string
}
abstract class InstallScriptClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallScriptClass */
    parent_class: EntityClass
    static name: string
}
abstract class InstallScriptListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallScriptListClass */
    parent_class: ListClass
    static name: string
}
class InstallScriptListPrivate {
    static name: string
}
class InstallScriptPrivate {
    static name: string
}
abstract class ListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ListPrivate {
    static name: string
}
abstract class LoaderClass {
    /* Fields of Libosinfo-1.0.Libosinfo.LoaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class LoaderPrivate {
    static name: string
}
abstract class MediaClass {
    /* Fields of Libosinfo-1.0.Libosinfo.MediaClass */
    parent_class: EntityClass
    static name: string
}
abstract class MediaListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.MediaListClass */
    parent_class: ListClass
    static name: string
}
class MediaListPrivate {
    static name: string
}
class MediaPrivate {
    static name: string
}
abstract class OsClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsClass */
    parent_class: ProductClass
    static name: string
}
abstract class OsListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsListClass */
    parent_class: ProductListClass
    static name: string
}
class OsListPrivate {
    static name: string
}
class OsPrivate {
    static name: string
}
abstract class OsVariantClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsVariantClass */
    parent_class: EntityClass
    static name: string
}
abstract class OsVariantListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsVariantListClass */
    parent_class: ListClass
    static name: string
}
class OsVariantListPrivate {
    static name: string
}
class OsVariantPrivate {
    static name: string
}
abstract class PlatformClass {
    /* Fields of Libosinfo-1.0.Libosinfo.PlatformClass */
    parent_class: ProductClass
    static name: string
}
abstract class PlatformListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.PlatformListClass */
    parent_class: ProductListClass
    static name: string
}
class PlatformListPrivate {
    static name: string
}
class PlatformPrivate {
    static name: string
}
abstract class ProductClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductClass */
    parent_class: EntityClass
    static name: string
}
abstract class ProductFilterClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductFilterClass */
    parent_class: FilterClass
    static name: string
}
class ProductFilterPrivate {
    static name: string
}
abstract class ProductListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductListClass */
    parent_class: ListClass
    static name: string
}
class ProductListPrivate {
    static name: string
}
class ProductPrivate {
    static name: string
}
abstract class ResourcesClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ResourcesClass */
    parent_class: EntityClass
    static name: string
}
abstract class ResourcesListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ResourcesListClass */
    parent_class: ListClass
    static name: string
}
class ResourcesListPrivate {
    static name: string
}
class ResourcesPrivate {
    static name: string
}
abstract class TreeClass {
    /* Fields of Libosinfo-1.0.Libosinfo.TreeClass */
    parent_class: EntityClass
    static name: string
}
abstract class TreeListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.TreeListClass */
    parent_class: ListClass
    static name: string
}
class TreeListPrivate {
    static name: string
}
class TreePrivate {
    static name: string
}
}
export default Libosinfo