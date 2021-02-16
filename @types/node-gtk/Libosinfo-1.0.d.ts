/**
 * Libosinfo-1.0
 */

/// <reference types="node" />
import type { libxml2 } from './libxml2-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';

declare namespace Libosinfo {

export enum DeviceDriverSigningReq {
    NONE,
    STRICT,
    WARN,
}
export enum Error {
    GENERIC,
}
export enum InstallConfigParamPolicy {
    NONE,
    REQUIRED,
    OPTIONAL,
}
export enum InstallScriptInstallationSource {
    MEDIA,
    NETWORK,
}
export enum MediaError {
    NO_DESCRIPTORS,
    NO_PVD,
    NO_SVD,
    INSUFFICIENT_METADATA,
    NOT_BOOTABLE,
    NO_DIRECTORY_RECORD_EXTENT,
}
export enum PathFormat {
    UNIX,
    DOS,
}
export enum ProductRelationship {
    DERIVES_FROM,
    UPGRADES,
    CLONES,
}
export enum ReleaseStatus {
    RELEASED,
    SNAPSHOT,
    PRERELEASE,
    ROLLING,
}
export enum TreeError {
    NO_TREEINFO,
    NOT_SUPPORTED_PROTOCOL,
}
export enum InstallScriptInjectionMethod {
    CDROM,
    DISK,
    FLOPPY,
    INITRD,
    WEB,
}
export enum MediaDetectFlags {
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
export function errorQuark(): GLib.Quark
export function mediaErrorQuark(): GLib.Quark
export function treeErrorQuark(): GLib.Quark
export interface AvatarFormat_ConstructProps extends Entity_ConstructProps {
}
export class AvatarFormat {
    /* Properties of Libosinfo.AvatarFormat */
    readonly alpha: boolean
    readonly height: number
    readonly mimeTypes: string[]
    readonly width: number
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.AvatarFormat */
    parentInstance: Entity
    priv: AvatarFormatPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.AvatarFormat */
    getAlpha(): boolean
    getHeight(): number
    getMimeTypes(): string[]
    getWidth(): number
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alpha", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-types", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AvatarFormat, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AvatarFormat_ConstructProps)
    _init (config?: AvatarFormat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AvatarFormat
    static $gtype: GObject.Type
}
export interface Datamap_ConstructProps extends Entity_ConstructProps {
}
export class Datamap {
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Datamap */
    parentInstance: Entity
    priv: DatamapPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Datamap */
    insert(inval: string, outval: string): void
    lookup(inval: string): string
    reverseLookup(outval: string): string
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Datamap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Datamap_ConstructProps)
    _init (config?: Datamap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Datamap
    static $gtype: GObject.Type
}
export interface DatamapList_ConstructProps extends List_ConstructProps {
}
export class DatamapList {
    /* Fields of Libosinfo.DatamapList */
    parentInstance: List
    priv: DatamapListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DatamapList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DatamapList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DatamapList_ConstructProps)
    _init (config?: DatamapList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DatamapList
    static $gtype: GObject.Type
}
export interface Db_ConstructProps extends GObject.Object_ConstructProps {
}
export class Db {
    /* Fields of Libosinfo.Db */
    parentInstance: GObject.Object
    priv: DbPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Db */
    addDatamap(datamap: Datamap): void
    addDeployment(deployment: Deployment): void
    addDevice(device: Device): void
    addInstallScript(script: InstallScript): void
    addOs(os: Os): void
    addPlatform(platform: Platform): void
    findDeployment(os: Os, platform: Platform): Deployment
    getDatamap(id: string): Datamap
    getDatamapList(): DatamapList
    getDeployment(id: string): Deployment
    getDeploymentList(): DeploymentList
    getDevice(id: string): Device
    getDeviceList(): DeviceList
    getInstallScript(id: string): InstallScript
    getInstallScriptList(): InstallScriptList
    getOs(id: string): Os
    getOsList(): OsList
    getPlatform(id: string): Platform
    getPlatformList(): PlatformList
    guessOsFromMedia(media: Media): [ /* returnType */ Os, /* matchedMedia */ Media | null ]
    guessOsFromTree(tree: Tree): [ /* returnType */ Os, /* matchedTree */ Tree | null ]
    identifyMedia(media: Media): boolean
    identifyTree(tree: Tree): boolean
    uniqueValuesForOsRelationship(relshp: ProductRelationship): OsList
    uniqueValuesForPlatformRelationship(relshp: ProductRelationship): PlatformList
    uniqueValuesForPropertyInDeployment(propName: string): string[]
    uniqueValuesForPropertyInDevice(propName: string): string[]
    uniqueValuesForPropertyInOs(propName: string): string[]
    uniqueValuesForPropertyInPlatform(propName: string): string[]
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Db, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Db, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
export class Deployment {
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Deployment */
    parentInstance: Entity
    priv: DeploymentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Deployment */
    addDevice(dev: Device): DeviceLink
    getDeviceLinks(filter?: Filter | null): DeviceLinkList
    getDevices(filter?: Filter | null): DeviceList
    getOs(): Os
    getPlatform(): Platform
    getPreferredDevice(filter?: Filter | null): Device
    getPreferredDeviceLink(filter?: Filter | null): DeviceLink
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, os: Os, platform: Platform): Deployment
    static $gtype: GObject.Type
}
export interface DeploymentList_ConstructProps extends List_ConstructProps {
}
export class DeploymentList {
    /* Fields of Libosinfo.DeploymentList */
    parentInstance: List
    priv: DeploymentListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.DeploymentList */
    newCopy(): DeploymentList
    newFiltered(filter: Filter): DeploymentList
    newIntersection(sourceTwo: DeploymentList): DeploymentList
    newUnion(sourceTwo: DeploymentList): DeploymentList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeploymentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeploymentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeploymentList_ConstructProps)
    _init (config?: DeploymentList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeploymentList
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends Entity_ConstructProps {
}
export class Device {
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Device */
    parentInstance: Entity
    priv: DevicePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Device */
    getBusType(): string
    getClass(): string
    getName(): string
    getProduct(): string
    getProductId(): string
    getSubsystem(): string
    getVendor(): string
    getVendorId(): string
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Device
    static $gtype: GObject.Type
}
export interface DeviceDriver_ConstructProps extends Entity_ConstructProps {
}
export class DeviceDriver {
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.DeviceDriver */
    parentInstance: Entity
    priv: DeviceDriverPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.DeviceDriver */
    getArchitecture(): string
    getDevices(): DeviceList
    getFiles(): string[]
    getLocation(): string
    getPreInstallable(): boolean
    getPriority(): number
    getSigned(): boolean
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeviceDriver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceDriver_ConstructProps)
    _init (config?: DeviceDriver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceDriverList_ConstructProps extends List_ConstructProps {
}
export class DeviceDriverList {
    /* Fields of Libosinfo.DeviceDriverList */
    parentInstance: List
    priv: DeviceDriverListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceDriverList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceDriverList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
export class DeviceLink {
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.DeviceLink */
    parentInstance: Entity
    priv: DeviceLinkPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.DeviceLink */
    getDriver(): string
    getTarget(): Device
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeviceLink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceLink_ConstructProps)
    _init (config?: DeviceLink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target: Device): DeviceLink
    static $gtype: GObject.Type
}
export interface DeviceLinkFilter_ConstructProps extends Filter_ConstructProps {
    targetFilter?: Filter
}
export class DeviceLinkFilter {
    /* Fields of Libosinfo.DeviceLinkFilter */
    parentInstance: Filter
    priv: DeviceLinkFilterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.DeviceLinkFilter */
    getTargetFilter(): Filter
    /* Methods of Libosinfo.Filter */
    addConstraint(propName: string, propVal: string): void
    clearConstraint(propName: string): void
    clearConstraints(): void
    getConstraintKeys(): string[]
    getConstraintValues(propName: string): string[]
    matches(entity: Entity): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Libosinfo.Filter */
    vfuncMatches(entity: Entity): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceLinkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLinkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
export class DeviceLinkList {
    /* Fields of Libosinfo.DeviceLinkList */
    parentInstance: List
    priv: DeviceLinkListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.DeviceLinkList */
    getDevices(filter?: Filter | null): DeviceList
    newCopy(): DeviceLinkList
    newFiltered(filter: Filter): DeviceLinkList
    newIntersection(sourceTwo: DeviceLinkList): DeviceLinkList
    newUnion(sourceTwo: DeviceLinkList): DeviceLinkList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceLinkList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLinkList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceLinkList_ConstructProps)
    _init (config?: DeviceLinkList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceLinkList
    static $gtype: GObject.Type
}
export interface DeviceList_ConstructProps extends List_ConstructProps {
}
export class DeviceList {
    /* Fields of Libosinfo.DeviceList */
    parentInstance: List
    priv: DeviceListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.DeviceList */
    newCopy(): DeviceList
    newFiltered(filter: Filter): DeviceList
    newIntersection(sourceTwo: DeviceList): DeviceList
    newUnion(sourceTwo: DeviceList): DeviceList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
export class Entity {
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Entity */
    parentInstance: GObject.Object
    priv: EntityPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Filter_ConstructProps extends GObject.Object_ConstructProps {
}
export class Filter {
    /* Fields of Libosinfo.Filter */
    parentInstance: GObject.Object
    priv: FilterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Filter */
    addConstraint(propName: string, propVal: string): void
    clearConstraint(propName: string): void
    clearConstraints(): void
    getConstraintKeys(): string[]
    getConstraintValues(propName: string): string[]
    matches(entity: Entity): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Libosinfo.Filter */
    vfuncMatches(entity: Entity): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
export class Firmware {
    /* Properties of Libosinfo.Firmware */
    architecture: string
    type: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Firmware */
    parentInstance: Entity
    priv: FirmwarePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Firmware */
    getArchitecture(): string
    getFirmwareType(): string
    isSupported(): boolean
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::architecture", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Firmware, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Firmware_ConstructProps)
    _init (config?: Firmware_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string, type: string): Firmware
    static $gtype: GObject.Type
}
export interface FirmwareList_ConstructProps extends List_ConstructProps {
}
export class FirmwareList {
    /* Fields of Libosinfo.FirmwareList */
    parentInstance: List
    priv: FirmwareListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FirmwareList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FirmwareList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FirmwareList_ConstructProps)
    _init (config?: FirmwareList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FirmwareList
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends Entity_ConstructProps {
    architecture?: string
    cloudInit?: string
    format?: string
    url?: string
}
export class Image {
    /* Properties of Libosinfo.Image */
    architecture: string
    cloudInit: string
    format: string
    url: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Image */
    parentInstance: Entity
    priv: ImagePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Image */
    getArchitecture(): string
    getCloudInit(): boolean
    getFormat(): string
    getOs(): Os
    getOsVariants(): OsVariantList
    getUrl(): string
    setOs(os: Os): void
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::architecture", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cloud-init", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-init", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cloud-init", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cloud-init", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cloud-init", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string, format: string): Image
    static $gtype: GObject.Type
}
export interface ImageList_ConstructProps extends List_ConstructProps {
}
export class ImageList {
    /* Fields of Libosinfo.ImageList */
    parentInstance: List
    priv: ImageListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImageList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImageList_ConstructProps)
    _init (config?: ImageList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ImageList
    static $gtype: GObject.Type
}
export interface InstallConfig_ConstructProps extends Entity_ConstructProps {
}
export class InstallConfig {
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.InstallConfig */
    parentInstance: Entity
    priv: InstallConfigPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.InstallConfig */
    getAdminPassword(): string
    getAvatarDisk(): string
    getAvatarLocation(): string
    getDriverSigning(): boolean
    getHardwareArch(): string
    getHostname(): string
    getInstallationUrl(): string
    getL10nKeyboard(): string
    getL10nLanguage(): string
    getL10nTimezone(): string
    getPostInstallDriversDisk(): string
    getPostInstallDriversLocation(): string
    getPreInstallDriversDisk(): string
    getPreInstallDriversLocation(): string
    getRegLogin(): string
    getRegPassword(): string
    getRegProductKey(): string
    getScriptDisk(): string
    getTargetDisk(): string
    getUserAdministrator(): boolean
    getUserAutologin(): boolean
    getUserLogin(): string
    getUserPassword(): string
    getUserRealname(): string
    setAdminPassword(password: string): void
    setAvatarDisk(disk: string): void
    setAvatarLocation(location: string): void
    setDriverSigning(signing: boolean): void
    setHardwareArch(arch: string): void
    setHostname(hostname: string): void
    setInstallationUrl(url: string): void
    setL10nKeyboard(keyboard: string): void
    setL10nLanguage(language: string): void
    setL10nTimezone(timezone: string): void
    setPostInstallDriversDisk(disk: string): void
    setPostInstallDriversLocation(location: string): void
    setPreInstallDriversDisk(disk: string): void
    setPreInstallDriversLocation(location: string): void
    setRegLogin(name: string): void
    setRegPassword(password: string): void
    setRegProductKey(key: string): void
    setScriptDisk(disk: string): void
    setTargetDisk(disk: string): void
    setUserAdministrator(admin: boolean): void
    setUserAutologin(autologin: boolean): void
    setUserLogin(username: string): void
    setUserPassword(password: string): void
    setUserRealname(name: string): void
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallConfig, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallConfig_ConstructProps)
    _init (config?: InstallConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): InstallConfig
    static $gtype: GObject.Type
}
export interface InstallConfigParam_ConstructProps extends Entity_ConstructProps {
    name?: string
    valueMap?: Datamap
}
export class InstallConfigParam {
    /* Properties of Libosinfo.InstallConfigParam */
    readonly policy: InstallConfigParamPolicy
    valueMap: Datamap
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.InstallConfigParam */
    parentInstance: Entity
    priv: InstallConfigParamPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.InstallConfigParam */
    getName(): string
    getPolicy(): InstallConfigParamPolicy
    getValueMap(): Datamap
    isOptional(): boolean
    isRequired(): boolean
    setValueMap(datamap: Datamap): void
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::policy", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-map", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-map", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallConfigParam, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallConfigParam_ConstructProps)
    _init (config?: InstallConfigParam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): InstallConfigParam
    static $gtype: GObject.Type
}
export interface InstallConfigParamList_ConstructProps extends List_ConstructProps {
}
export class InstallConfigParamList {
    /* Fields of Libosinfo.InstallConfigParamList */
    parentInstance: List
    priv: InstallConfigParamListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InstallConfigParamList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallConfigParamList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallConfigParamList_ConstructProps)
    _init (config?: InstallConfigParamList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InstallConfigParamList
    static $gtype: GObject.Type
}
export interface InstallScript_ConstructProps extends Entity_ConstructProps {
    preferredInjectionMethod?: InstallScriptInjectionMethod
    profile?: string
    templateData?: string
    templateUri?: string
}
export class InstallScript {
    /* Properties of Libosinfo.InstallScript */
    readonly avatarFormat: AvatarFormat
    readonly installationSource: InstallScriptInstallationSource
    readonly pathFormat: PathFormat
    preferredInjectionMethod: InstallScriptInjectionMethod
    readonly productKeyFormat: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.InstallScript */
    parentInstance: Entity
    priv: InstallScriptPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.InstallScript */
    generate(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generateAsync(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateCommandLine(os: Os, config: InstallConfig): string
    generateCommandLineForMedia(media: Media, config: InstallConfig): string
    generateCommandLineForTree(tree: Tree, config: InstallConfig): string
    generateFinish(res: Gio.AsyncResult): string
    generateForMedia(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generateForMediaAsync(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateForMediaFinish(res: Gio.AsyncResult): string
    generateForTree(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generateForTreeAsync(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateForTreeFinish(res: Gio.AsyncResult): string
    generateOutput(os: Os, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generateOutputAsync(os: Os, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateOutputFinish(res: Gio.AsyncResult): Gio.File
    generateOutputForMedia(media: Media, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generateOutputForMediaAsync(media: Media, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateOutputForMediaFinish(res: Gio.AsyncResult): Gio.File
    generateOutputForTree(tree: Tree, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generateOutputForTreeAsync(tree: Tree, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateOutputForTreeFinish(res: Gio.AsyncResult): Gio.File
    getAvatarFormat(): AvatarFormat
    getCanPostInstallDrivers(): boolean
    getCanPreInstallDrivers(): boolean
    getConfigParam(name: string): InstallConfigParam
    getConfigParamList(): InstallScript[]
    getConfigParams(): InstallConfigParamList
    getExpectedFilename(): string
    getInjectionMethods(): InstallScriptInjectionMethod
    getInstallationSource(): InstallScriptInstallationSource
    getNeedsInternet(): boolean
    getOutputFilename(): string
    getOutputPrefix(): string
    getPathFormat(): PathFormat
    getPostInstallDriversSigningReq(): DeviceDriverSigningReq
    getPreInstallDriversSigningReq(): DeviceDriverSigningReq
    getPreferredInjectionMethod(): InstallScriptInjectionMethod
    getProductKeyFormat(): string
    getProfile(): string
    getTemplateData(): string
    getTemplateUri(): string
    hasConfigParam(configParam: InstallConfigParam): boolean
    hasConfigParamName(name: string): boolean
    setInstallationSource(source: InstallScriptInstallationSource): void
    setOutputPrefix(prefix: string): void
    setPreferredInjectionMethod(method: InstallScriptInjectionMethod): void
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::avatar-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installation-source", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installation-source", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installation-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installation-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installation-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preferred-injection-method", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-injection-method", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preferred-injection-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preferred-injection-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preferred-injection-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product-key-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-key-format", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product-key-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product-key-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product-key-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InstallScript, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallScript_ConstructProps)
    _init (config?: InstallScript_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): InstallScript
    static newData(id: string, profile: string, templateData: string): InstallScript
    static newUri(id: string, profile: string, templateUri: string): InstallScript
    static $gtype: GObject.Type
}
export interface InstallScriptList_ConstructProps extends List_ConstructProps {
}
export class InstallScriptList {
    /* Fields of Libosinfo.InstallScriptList */
    parentInstance: List
    priv: InstallScriptListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.InstallScriptList */
    newCopy(): InstallScriptList
    newFiltered(filter: Filter): InstallScriptList
    newIntersection(sourceTwo: InstallScriptList): InstallScriptList
    newUnion(sourceTwo: InstallScriptList): InstallScriptList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InstallScriptList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallScriptList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallScriptList_ConstructProps)
    _init (config?: InstallScriptList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InstallScriptList
    static $gtype: GObject.Type
}
export interface List_ConstructProps extends GObject.Object_ConstructProps {
    elementType?: GObject.Type
}
export class List {
    /* Fields of Libosinfo.List */
    parentInstance: GObject.Object
    priv: ListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: List_ConstructProps)
    _init (config?: List_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Loader_ConstructProps extends GObject.Object_ConstructProps {
}
export class Loader {
    /* Fields of Libosinfo.Loader */
    parentInstance: GObject.Object
    priv: LoaderPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Loader */
    getDb(): Db
    processDefaultPath(): void
    processLocalPath(): void
    processPath(path: string): void
    processSystemPath(): void
    processUri(uri: string): void
    processUserPath(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Loader_ConstructProps)
    _init (config?: Loader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Loader
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends Entity_ConstructProps {
    applicationId?: string
    architecture?: string
    ejectAfterInstall?: boolean
    initrdPath?: string
    installer?: boolean
    installerReboots?: number
    installerScript?: boolean
    kernelPath?: string
    live?: boolean
    os?: Os
    publisherId?: string
    systemId?: string
    url?: string
    volumeId?: string
    volumeSize?: number
}
export class Media {
    /* Properties of Libosinfo.Media */
    applicationId: string
    architecture: string
    ejectAfterInstall: boolean
    initrdPath: string
    installer: boolean
    installerReboots: number
    installerScript: boolean
    kernelPath: string
    readonly languages: string[]
    live: boolean
    os: Os
    publisherId: string
    systemId: string
    url: string
    volumeId: string
    volumeSize: number
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Media */
    parentInstance: Entity
    priv: MediaPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Media */
    addInstallScript(script: InstallScript): void
    getApplicationId(): string
    getArchitecture(): string
    getEjectAfterInstall(): boolean
    getInitrdPath(): string
    getInstallScriptList(): InstallScriptList
    getInstaller(): boolean
    getInstallerReboots(): number
    getKernelPath(): string
    getLanguages(): string[]
    getLive(): boolean
    getOs(): Os
    getOsVariants(): OsVariantList
    getPublisherId(): string
    getSystemId(): string
    getUrl(): string
    getVolumeId(): string
    getVolumeSize(): number
    isBootable(): boolean
    supportsInstallerScript(): boolean
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::architecture", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eject-after-install", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eject-after-install", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eject-after-install", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eject-after-install", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eject-after-install", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::initrd-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installer", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installer-reboots", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-reboots", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installer-reboots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installer-reboots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installer-reboots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installer-script", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-script", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installer-script", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installer-script", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installer-script", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kernel-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::languages", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::languages", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::languages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::languages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::languages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::live", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::os", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::publisher-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume-size", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-size", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Media
    static createFromLocation(location: string, cancellable?: Gio.Cancellable | null): Media
    static createFromLocationAsync(location: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFromLocationFinish(res: Gio.AsyncResult): Media
    static createFromLocationWithFlags(location: string, cancellable: Gio.Cancellable | null, flags: number): Media
    static createFromLocationWithFlagsAsync(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, flags: number): void
    static createFromLocationWithFlagsFinish(res: Gio.AsyncResult): Media
    static $gtype: GObject.Type
}
export interface MediaList_ConstructProps extends List_ConstructProps {
}
export class MediaList {
    /* Fields of Libosinfo.MediaList */
    parentInstance: List
    priv: MediaListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.MediaList */
    newCopy(): MediaList
    newFiltered(filter: Filter): MediaList
    newIntersection(sourceTwo: MediaList): MediaList
    newUnion(sourceTwo: MediaList): MediaList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaList_ConstructProps)
    _init (config?: MediaList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaList
    static $gtype: GObject.Type
}
export interface Os_ConstructProps extends Product_ConstructProps {
}
export class Os {
    /* Properties of Libosinfo.Os */
    readonly cloudImageUsername: string
    readonly distro: string
    readonly family: string
    readonly kernelUrlArgument: string
    /* Properties of Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly shortId: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Os */
    parentInstance: Product
    priv: OsPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Os */
    addDevice(dev: Device): DeviceLink
    addDeviceDriver(driver: DeviceDriver): void
    addFirmware(firmware: Firmware): void
    addImage(image: Image): void
    addInstallScript(script: InstallScript): void
    addMaximumResources(resources: Resources): void
    addMedia(media: Media): void
    addMinimumResources(resources: Resources): void
    addNetworkInstallResources(resources: Resources): void
    addRecommendedResources(resources: Resources): void
    addTree(tree: Tree): void
    addVariant(variant: OsVariant): void
    findInstallScript(profile: string): InstallScript
    getAllDeviceLinks(filter?: Filter | null): DeviceLinkList
    getAllDevices(filter?: Filter | null): DeviceList
    getCloudImageUsername(): string
    getDeviceDrivers(): DeviceDriverList
    getDeviceDriversPrioritized(): DeviceDriverList
    getDeviceLinks(filter?: Filter | null): DeviceLinkList
    getDevices(filter?: Filter | null): DeviceList
    getDevicesByProperty(property: string, value: string, inherited: boolean): DeviceList
    getDistro(): string
    getFamily(): string
    getFirmwareList(filter?: Filter | null): FirmwareList
    getImageList(): ImageList
    getInstallScriptList(): InstallScriptList
    getKernelUrlArgument(): string
    getMaximumResources(): ResourcesList
    getMediaList(): MediaList
    getMinimumResources(): ResourcesList
    getNetworkInstallResources(): ResourcesList
    getRecommendedResources(): ResourcesList
    getReleaseStatus(): ReleaseStatus
    getTreeList(): TreeList
    getVariantList(): OsVariantList
    /* Methods of Libosinfo.Product */
    addRelated(relshp: ProductRelationship, otherproduct: Product): void
    getCodename(): string
    getEolDate(): GLib.Date
    getEolDateString(): string
    getLogo(): string
    getName(): string
    getRelated(relshp: ProductRelationship): ProductList
    getReleaseDate(): GLib.Date
    getReleaseDateString(): string
    getShortId(): string
    getShortIdList(): string[]
    getVendor(): string
    getVersion(): string
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cloud-image-username", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-image-username", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cloud-image-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cloud-image-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cloud-image-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distro", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distro", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kernel-url-argument", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-url-argument", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kernel-url-argument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kernel-url-argument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kernel-url-argument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codename", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::short-id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Os, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Os_ConstructProps)
    _init (config?: Os_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Os
    static $gtype: GObject.Type
}
export interface OsList_ConstructProps extends ProductList_ConstructProps {
}
export class OsList {
    /* Fields of Libosinfo.OsList */
    parentInstance: ProductList
    priv: OsListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.OsList */
    newCopy(): OsList
    newFiltered(filter: Filter): OsList
    newIntersection(sourceTwo: OsList): OsList
    newUnion(sourceTwo: OsList): OsList
    /* Methods of Libosinfo.ProductList */
    newCopy(): ProductList
    newFiltered(filter: Filter): ProductList
    newIntersection(sourceTwo: ProductList): ProductList
    newUnion(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OsList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OsList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
export class OsVariant {
    /* Properties of Libosinfo.OsVariant */
    name: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.OsVariant */
    parentInstance: Entity
    priv: OsVariantPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.OsVariant */
    getName(): string
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OsVariant, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OsVariant_ConstructProps)
    _init (config?: OsVariant_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): OsVariant
    static $gtype: GObject.Type
}
export interface OsVariantList_ConstructProps extends List_ConstructProps {
}
export class OsVariantList {
    /* Fields of Libosinfo.OsVariantList */
    parentInstance: List
    priv: OsVariantListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OsVariantList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OsVariantList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OsVariantList_ConstructProps)
    _init (config?: OsVariantList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OsVariantList
    static $gtype: GObject.Type
}
export interface Platform_ConstructProps extends Product_ConstructProps {
}
export class Platform {
    /* Properties of Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly shortId: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Platform */
    parentInstance: Product
    priv: PlatformPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Platform */
    addDevice(dev: Device): DeviceLink
    getAllDevices(filter?: Filter | null): DeviceList
    getDeviceLinks(filter?: Filter | null): DeviceLinkList
    getDevices(filter?: Filter | null): DeviceList
    /* Methods of Libosinfo.Product */
    addRelated(relshp: ProductRelationship, otherproduct: Product): void
    getCodename(): string
    getEolDate(): GLib.Date
    getEolDateString(): string
    getLogo(): string
    getName(): string
    getRelated(relshp: ProductRelationship): ProductList
    getReleaseDate(): GLib.Date
    getReleaseDateString(): string
    getShortId(): string
    getShortIdList(): string[]
    getVendor(): string
    getVersion(): string
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codename", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::short-id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Platform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Platform_ConstructProps)
    _init (config?: Platform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Platform
    static $gtype: GObject.Type
}
export interface PlatformList_ConstructProps extends ProductList_ConstructProps {
}
export class PlatformList {
    /* Fields of Libosinfo.PlatformList */
    parentInstance: ProductList
    priv: PlatformListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.PlatformList */
    newCopy(): PlatformList
    newFiltered(filter: Filter): PlatformList
    newIntersection(sourceTwo: PlatformList): PlatformList
    newUnion(sourceTwo: PlatformList): PlatformList
    /* Methods of Libosinfo.ProductList */
    newCopy(): ProductList
    newFiltered(filter: Filter): ProductList
    newIntersection(sourceTwo: ProductList): ProductList
    newUnion(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlatformList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlatformList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlatformList_ConstructProps)
    _init (config?: PlatformList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PlatformList
    static $gtype: GObject.Type
}
export interface Product_ConstructProps extends Entity_ConstructProps {
}
export class Product {
    /* Properties of Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly shortId: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Product */
    parentInstance: Entity
    priv: ProductPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Product */
    addRelated(relshp: ProductRelationship, otherproduct: Product): void
    getCodename(): string
    getEolDate(): GLib.Date
    getEolDateString(): string
    getLogo(): string
    getName(): string
    getRelated(relshp: ProductRelationship): ProductList
    getReleaseDate(): GLib.Date
    getReleaseDateString(): string
    getShortId(): string
    getShortIdList(): string[]
    getVendor(): string
    getVersion(): string
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codename", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::short-id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Product, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Product_ConstructProps)
    _init (config?: Product_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProductFilter_ConstructProps extends Filter_ConstructProps {
}
export class ProductFilter {
    /* Fields of Libosinfo.ProductFilter */
    parentInstance: Filter
    priv: ProductFilterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.ProductFilter */
    addProductConstraint(relshp: ProductRelationship, product: Product): number
    addSupportDateConstraint(when: GLib.Date): void
    clearProductConstraint(relshp: ProductRelationship): void
    clearProductConstraints(): void
    getProductConstraintValues(relshp: ProductRelationship): Product[]
    /* Methods of Libosinfo.Filter */
    addConstraint(propName: string, propVal: string): void
    clearConstraint(propName: string): void
    clearConstraints(): void
    getConstraintKeys(): string[]
    getConstraintValues(propName: string): string[]
    matches(entity: Entity): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Libosinfo.Filter */
    vfuncMatches(entity: Entity): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProductFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProductFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProductFilter_ConstructProps)
    _init (config?: ProductFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProductFilter
    static $gtype: GObject.Type
}
export interface ProductList_ConstructProps extends List_ConstructProps {
}
export class ProductList {
    /* Fields of Libosinfo.ProductList */
    parentInstance: List
    priv: ProductListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.ProductList */
    newCopy(): ProductList
    newFiltered(filter: Filter): ProductList
    newIntersection(sourceTwo: ProductList): ProductList
    newUnion(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProductList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProductList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    nCpus?: number
    ram?: number
    storage?: number
}
export class Resources {
    /* Properties of Libosinfo.Resources */
    cpu: number
    nCpus: number
    ram: number
    storage: number
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Resources */
    parentInstance: Entity
    priv: ResourcesPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Resources */
    getArchitecture(): string
    getCpu(): number
    getNCpus(): number
    getRam(): number
    getStorage(): number
    setCpu(cpu: number): void
    setNCpus(nCpus: number): void
    setRam(ram: number): void
    setStorage(storage: number): void
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cpu", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cpu", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-cpus", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-cpus", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-cpus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-cpus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-cpus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ram", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ram", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ram", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ram", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ram", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::storage", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Resources, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Resources_ConstructProps)
    _init (config?: Resources_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Resources
    static $gtype: GObject.Type
}
export interface ResourcesList_ConstructProps extends List_ConstructProps {
}
export class ResourcesList {
    /* Fields of Libosinfo.ResourcesList */
    parentInstance: List
    priv: ResourcesListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.ResourcesList */
    newCopy(): ResourcesList
    newFiltered(filter: Filter): ResourcesList
    newIntersection(sourceTwo: ResourcesList): ResourcesList
    newUnion(sourceTwo: ResourcesList): ResourcesList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResourcesList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourcesList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourcesList_ConstructProps)
    _init (config?: ResourcesList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ResourcesList
    static $gtype: GObject.Type
}
export interface Tree_ConstructProps extends Entity_ConstructProps {
    architecture?: string
    bootIsoPath?: string
    hasTreeinfo?: boolean
    initrdPath?: string
    kernelPath?: string
    os?: Os
    treeinfoArch?: string
    treeinfoFamily?: string
    treeinfoVariant?: string
    treeinfoVersion?: string
    url?: string
}
export class Tree {
    /* Properties of Libosinfo.Tree */
    architecture: string
    bootIsoPath: string
    hasTreeinfo: boolean
    initrdPath: string
    kernelPath: string
    os: Os
    treeinfoArch: string
    treeinfoFamily: string
    treeinfoVariant: string
    treeinfoVersion: string
    url: string
    /* Properties of Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo.Tree */
    parentInstance: Entity
    priv: TreePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.Tree */
    getArchitecture(): string
    getBootIsoPath(): string
    getInitrdPath(): string
    getKernelPath(): string
    getOs(): Os
    getOsVariants(): OsVariantList
    getTreeinfoArch(): string
    getTreeinfoFamily(): string
    getTreeinfoVariant(): string
    getTreeinfoVersion(): string
    getUrl(): string
    setOs(os: Os): void
    /* Methods of Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::architecture", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::boot-iso-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-iso-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::boot-iso-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::boot-iso-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::boot-iso-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-treeinfo", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-treeinfo", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-treeinfo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-treeinfo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-treeinfo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::initrd-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kernel-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::os", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-arch", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-arch", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-family", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-family", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-variant", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-variant", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-version", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-version", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Tree, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Tree
    static createFromLocation(location: string, cancellable?: Gio.Cancellable | null): Tree
    static createFromLocationAsync(location: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFromLocationFinish(res: Gio.AsyncResult): Tree
    static createFromTreeinfo(treeinfo: string, location: string): Tree
    static $gtype: GObject.Type
}
export interface TreeList_ConstructProps extends List_ConstructProps {
}
export class TreeList {
    /* Fields of Libosinfo.TreeList */
    parentInstance: List
    priv: TreeListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo.TreeList */
    newCopy(): TreeList
    newFiltered(filter: Filter): TreeList
    newIntersection(sourceTwo: TreeList): TreeList
    newUnion(sourceTwo: TreeList): TreeList
    /* Methods of Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TreeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TreeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeList_ConstructProps)
    _init (config?: TreeList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TreeList
    static $gtype: GObject.Type
}
export abstract class AvatarFormatClass {
    /* Fields of Libosinfo.AvatarFormatClass */
    parentClass: EntityClass
    static name: string
}
export class AvatarFormatPrivate {
    static name: string
}
export abstract class DatamapClass {
    /* Fields of Libosinfo.DatamapClass */
    parentClass: EntityClass
    static name: string
}
export abstract class DatamapListClass {
    /* Fields of Libosinfo.DatamapListClass */
    parentClass: ListClass
    static name: string
}
export class DatamapListPrivate {
    static name: string
}
export class DatamapPrivate {
    static name: string
}
export abstract class DbClass {
    /* Fields of Libosinfo.DbClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DbPrivate {
    static name: string
}
export abstract class DeploymentClass {
    /* Fields of Libosinfo.DeploymentClass */
    parentClass: EntityClass
    static name: string
}
export abstract class DeploymentListClass {
    /* Fields of Libosinfo.DeploymentListClass */
    parentClass: ListClass
    static name: string
}
export class DeploymentListPrivate {
    static name: string
}
export class DeploymentPrivate {
    static name: string
}
export abstract class DeviceClass {
    /* Fields of Libosinfo.DeviceClass */
    parentClass: EntityClass
    static name: string
}
export abstract class DeviceDriverClass {
    /* Fields of Libosinfo.DeviceDriverClass */
    parentClass: EntityClass
    static name: string
}
export abstract class DeviceDriverListClass {
    /* Fields of Libosinfo.DeviceDriverListClass */
    parentClass: ListClass
    static name: string
}
export class DeviceDriverListPrivate {
    static name: string
}
export class DeviceDriverPrivate {
    static name: string
}
export abstract class DeviceLinkClass {
    /* Fields of Libosinfo.DeviceLinkClass */
    parentClass: EntityClass
    static name: string
}
export abstract class DeviceLinkFilterClass {
    /* Fields of Libosinfo.DeviceLinkFilterClass */
    parentClass: FilterClass
    static name: string
}
export class DeviceLinkFilterPrivate {
    static name: string
}
export abstract class DeviceLinkListClass {
    /* Fields of Libosinfo.DeviceLinkListClass */
    parentClass: ListClass
    static name: string
}
export class DeviceLinkListPrivate {
    static name: string
}
export class DeviceLinkPrivate {
    static name: string
}
export abstract class DeviceListClass {
    /* Fields of Libosinfo.DeviceListClass */
    parentClass: ListClass
    static name: string
}
export class DeviceListPrivate {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class EntityClass {
    /* Fields of Libosinfo.EntityClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class EntityPrivate {
    static name: string
}
export abstract class FilterClass {
    /* Fields of Libosinfo.FilterClass */
    parentClass: GObject.ObjectClass
    matches: (filter: Filter, entity: Entity) => boolean
    static name: string
}
export class FilterPrivate {
    static name: string
}
export abstract class FirmwareClass {
    /* Fields of Libosinfo.FirmwareClass */
    parentClass: EntityClass
    static name: string
}
export abstract class FirmwareListClass {
    /* Fields of Libosinfo.FirmwareListClass */
    parentClass: ListClass
    static name: string
}
export class FirmwareListPrivate {
    static name: string
}
export class FirmwarePrivate {
    static name: string
}
export abstract class ImageClass {
    /* Fields of Libosinfo.ImageClass */
    parentClass: EntityClass
    static name: string
}
export abstract class ImageListClass {
    /* Fields of Libosinfo.ImageListClass */
    parentClass: ListClass
    static name: string
}
export class ImageListPrivate {
    static name: string
}
export class ImagePrivate {
    static name: string
}
export abstract class InstallConfigClass {
    /* Fields of Libosinfo.InstallConfigClass */
    parentClass: EntityClass
    static name: string
}
export abstract class InstallConfigParamClass {
    /* Fields of Libosinfo.InstallConfigParamClass */
    parentClass: EntityClass
    static name: string
}
export abstract class InstallConfigParamListClass {
    /* Fields of Libosinfo.InstallConfigParamListClass */
    parentClass: ListClass
    static name: string
}
export class InstallConfigParamListPrivate {
    static name: string
}
export class InstallConfigParamPrivate {
    static name: string
}
export class InstallConfigPrivate {
    static name: string
}
export abstract class InstallScriptClass {
    /* Fields of Libosinfo.InstallScriptClass */
    parentClass: EntityClass
    static name: string
}
export abstract class InstallScriptListClass {
    /* Fields of Libosinfo.InstallScriptListClass */
    parentClass: ListClass
    static name: string
}
export class InstallScriptListPrivate {
    static name: string
}
export class InstallScriptPrivate {
    static name: string
}
export abstract class ListClass {
    /* Fields of Libosinfo.ListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ListPrivate {
    static name: string
}
export abstract class LoaderClass {
    /* Fields of Libosinfo.LoaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class LoaderPrivate {
    static name: string
}
export abstract class MediaClass {
    /* Fields of Libosinfo.MediaClass */
    parentClass: EntityClass
    static name: string
}
export abstract class MediaListClass {
    /* Fields of Libosinfo.MediaListClass */
    parentClass: ListClass
    static name: string
}
export class MediaListPrivate {
    static name: string
}
export class MediaPrivate {
    static name: string
}
export abstract class OsClass {
    /* Fields of Libosinfo.OsClass */
    parentClass: ProductClass
    static name: string
}
export abstract class OsListClass {
    /* Fields of Libosinfo.OsListClass */
    parentClass: ProductListClass
    static name: string
}
export class OsListPrivate {
    static name: string
}
export class OsPrivate {
    static name: string
}
export abstract class OsVariantClass {
    /* Fields of Libosinfo.OsVariantClass */
    parentClass: EntityClass
    static name: string
}
export abstract class OsVariantListClass {
    /* Fields of Libosinfo.OsVariantListClass */
    parentClass: ListClass
    static name: string
}
export class OsVariantListPrivate {
    static name: string
}
export class OsVariantPrivate {
    static name: string
}
export abstract class PlatformClass {
    /* Fields of Libosinfo.PlatformClass */
    parentClass: ProductClass
    static name: string
}
export abstract class PlatformListClass {
    /* Fields of Libosinfo.PlatformListClass */
    parentClass: ProductListClass
    static name: string
}
export class PlatformListPrivate {
    static name: string
}
export class PlatformPrivate {
    static name: string
}
export abstract class ProductClass {
    /* Fields of Libosinfo.ProductClass */
    parentClass: EntityClass
    static name: string
}
export abstract class ProductFilterClass {
    /* Fields of Libosinfo.ProductFilterClass */
    parentClass: FilterClass
    static name: string
}
export class ProductFilterPrivate {
    static name: string
}
export abstract class ProductListClass {
    /* Fields of Libosinfo.ProductListClass */
    parentClass: ListClass
    static name: string
}
export class ProductListPrivate {
    static name: string
}
export class ProductPrivate {
    static name: string
}
export abstract class ResourcesClass {
    /* Fields of Libosinfo.ResourcesClass */
    parentClass: EntityClass
    static name: string
}
export abstract class ResourcesListClass {
    /* Fields of Libosinfo.ResourcesListClass */
    parentClass: ListClass
    static name: string
}
export class ResourcesListPrivate {
    static name: string
}
export class ResourcesPrivate {
    static name: string
}
export abstract class TreeClass {
    /* Fields of Libosinfo.TreeClass */
    parentClass: EntityClass
    static name: string
}
export abstract class TreeListClass {
    /* Fields of Libosinfo.TreeListClass */
    parentClass: ListClass
    static name: string
}
export class TreeListPrivate {
    static name: string
}
export class TreePrivate {
    static name: string
}
}