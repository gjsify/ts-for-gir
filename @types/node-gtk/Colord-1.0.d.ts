/**
 * Colord-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Colord {

export enum ClientError {
    INTERNAL,
    ALREADY_EXISTS,
    FAILED_TO_AUTHENTICATE,
    NOT_SUPPORTED,
    NOT_FOUND,
    INPUT_INVALID,
    FILE_INVALID,
}
export enum ColorBlackbodyFlags {
    NONE,
    USE_PLANCKIAN,
}
export enum Colorspace {
    UNKNOWN,
    XYZ,
    LAB,
    LUV,
    YCBCR,
    YXY,
    RGB,
    GRAY,
    HSV,
    CMYK,
    CMY,
}
export enum DeviceError {
    INTERNAL,
    PROFILE_DOES_NOT_EXIST,
    PROFILE_ALREADY_ADDED,
    PROFILING,
    NOTHING_MATCHED,
    FAILED_TO_INHIBIT,
    FAILED_TO_UNINHIBIT,
    FAILED_TO_AUTHENTICATE,
    NOT_ENABLED,
}
export enum DeviceKind {
    UNKNOWN,
    DISPLAY,
    SCANNER,
    PRINTER,
    CAMERA,
    WEBCAM,
}
export enum DeviceMode {
    UNKNOWN,
    PHYSICAL,
    VIRTUAL,
}
export enum DeviceRelation {
    UNKNOWN,
    SOFT,
    HARD,
}
export enum IccError {
    FAILED_TO_OPEN,
    FAILED_TO_PARSE,
    INVALID_LOCALE,
    NO_DATA,
    FAILED_TO_SAVE,
    FAILED_TO_CREATE,
    INVALID_COLORSPACE,
    CORRUPTION_DETECTED,
    INTERNAL,
}
export enum IccSaveFlags {
    NONE,
}
export enum It8Error {
    FAILED,
    INVALID_FORMAT,
    UNKNOWN_KIND,
}
export enum It8Kind {
    UNKNOWN,
    TI1,
    TI3,
    CCMX,
    CAL,
    CCSS,
    SPECT,
    CMF,
}
export enum ObjectScope {
    UNKNOWN,
    NORMAL,
    TEMP,
    DISK,
}
export enum ProfileError {
    INTERNAL,
    ALREADY_INSTALLED,
    FAILED_TO_WRITE,
    FAILED_TO_PARSE,
    FAILED_TO_READ,
    FAILED_TO_AUTHENTICATE,
    PROPERTY_INVALID,
    FAILED_TO_GET_UID,
}
export enum ProfileKind {
    UNKNOWN,
    INPUT_DEVICE,
    DISPLAY_DEVICE,
    OUTPUT_DEVICE,
    DEVICELINK,
    COLORSPACE_CONVERSION,
    ABSTRACT,
    NAMED_COLOR,
}
export enum ProfileQuality {
    LOW,
    MEDIUM,
    HIGH,
}
export enum ProfileWarning {
    NONE,
    DESCRIPTION_MISSING,
    COPYRIGHT_MISSING,
    VCGT_NON_MONOTONIC,
    SCUM_DOT,
    GRAY_AXIS_INVALID,
    GRAY_AXIS_NON_MONOTONIC,
    PRIMARIES_INVALID,
    PRIMARIES_NON_ADDITIVE,
    PRIMARIES_UNLIKELY,
    WHITEPOINT_INVALID,
    WHITEPOINT_UNLIKELY,
}
export enum RenderingIntent {
    UNKNOWN,
    PERCEPTUAL,
    RELATIVE_COLORIMETRIC,
    SATURATION,
    ABSOLUTE_COLORIMETRIC,
}
export enum SensorCap {
    UNKNOWN,
    LCD,
    CRT,
    PRINTER,
    SPOT,
    PROJECTOR,
    AMBIENT,
    CALIBRATION,
    LED,
    PLASMA,
    LCD_CCFL,
    LCD_RGB_LED,
    LCD_WHITE_LED,
    WIDE_GAMUT_LCD_CCFL,
    WIDE_GAMUT_LCD_RGB_LED,
    SPECTRAL,
    CALIBRATION_DARK,
    CALIBRATION_IRRADIANCE,
}
export enum SensorError {
    NO_SUPPORT,
    NO_DATA,
    INTERNAL,
    ALREADY_LOCKED,
    NOT_LOCKED,
    IN_USE,
    FAILED_TO_AUTHENTICATE,
    REQUIRED_POSITION_CALIBRATE,
    REQUIRED_POSITION_SURFACE,
    REQUIRED_DARK_CALIBRATION,
    REQUIRED_IRRADIANCE_CALIBRATION,
}
export enum SensorKind {
    UNKNOWN,
    DUMMY,
    HUEY,
    COLOR_MUNKI_PHOTO,
    SPYDER,
    DTP20,
    DTP22,
    DTP41,
    DTP51,
    DTP94,
    SPECTRO_SCAN,
    I1_PRO,
    COLORIMTRE_HCFR,
    I1_DISPLAY3,
    COLORHUG,
    SPYDER2,
    SPYDER3,
    COLORHUG_PLUS,
    I1_DISPLAY1,
    I1_DISPLAY2,
    DTP92,
    I1_MONITOR,
    SPYDER4,
    COLOR_MUNKI_SMILE,
    COLORHUG2,
    SPYDER5,
    SPARK,
    SPYDERX,
}
export enum SensorState {
    UNKNOWN,
    STARTING,
    IDLE,
    MEASURING,
    BUSY,
}
export enum StandardSpace {
    UNKNOWN,
    SRGB,
    ADOBE_RGB,
    PROPHOTO_RGB,
}
export enum IccLoadFlags {
    NONE,
    NAMED_COLORS,
    TRANSLATIONS,
    METADATA,
    FALLBACK_MD5,
    PRIMARIES,
    CHARACTERIZATION,
    ALL,
}
export const CLIENT_PROPERTY_DAEMON_VERSION: string
export const CLIENT_PROPERTY_SYSTEM_MODEL: string
export const CLIENT_PROPERTY_SYSTEM_VENDOR: string
export const DEVICE_METADATA_OUTPUT_EDID_MD5: string
export const DEVICE_METADATA_OUTPUT_PRIORITY: string
export const DEVICE_METADATA_OUTPUT_PRIORITY_PRIMARY: string
export const DEVICE_METADATA_OUTPUT_PRIORITY_SECONDARY: string
export const DEVICE_METADATA_OWNER_CMDLINE: string
export const DEVICE_METADATA_XRANDR_NAME: string
export const DEVICE_PROPERTY_COLORSPACE: string
export const DEVICE_PROPERTY_CREATED: string
export const DEVICE_PROPERTY_EMBEDDED: string
export const DEVICE_PROPERTY_ENABLED: string
export const DEVICE_PROPERTY_FORMAT: string
export const DEVICE_PROPERTY_ID: string
export const DEVICE_PROPERTY_KIND: string
export const DEVICE_PROPERTY_METADATA: string
export const DEVICE_PROPERTY_MODE: string
export const DEVICE_PROPERTY_MODEL: string
export const DEVICE_PROPERTY_MODIFIED: string
export const DEVICE_PROPERTY_OWNER: string
export const DEVICE_PROPERTY_PROFILES: string
export const DEVICE_PROPERTY_PROFILING_INHIBITORS: string
export const DEVICE_PROPERTY_SCOPE: string
export const DEVICE_PROPERTY_SEAT: string
export const DEVICE_PROPERTY_SERIAL: string
export const DEVICE_PROPERTY_VENDOR: string
export const PIXEL_FORMAT_ARGB32: number
export const PIXEL_FORMAT_BGRA32: number
export const PIXEL_FORMAT_CMYK32: number
export const PIXEL_FORMAT_RGB24: number
export const PIXEL_FORMAT_RGBA32: number
export const PIXEL_FORMAT_UNKNOWN: number
export const PROFILE_METADATA_ACCURACY_DE76_AVG: string
export const PROFILE_METADATA_ACCURACY_DE76_MAX: string
export const PROFILE_METADATA_ACCURACY_DE76_RMS: string
export const PROFILE_METADATA_CMF_BINARY: string
export const PROFILE_METADATA_CMF_PRODUCT: string
export const PROFILE_METADATA_CMF_VERSION: string
export const PROFILE_METADATA_CONNECTION_TYPE: string
export const PROFILE_METADATA_CONNECTION_TYPE_DISPLAYPORT: string
export const PROFILE_METADATA_CONNECTION_TYPE_DVI: string
export const PROFILE_METADATA_CONNECTION_TYPE_HDMI: string
export const PROFILE_METADATA_CONNECTION_TYPE_INTERNAL: string
export const PROFILE_METADATA_CONNECTION_TYPE_VGA: string
export const PROFILE_METADATA_DATA_SOURCE: string
export const PROFILE_METADATA_DATA_SOURCE_CALIB: string
export const PROFILE_METADATA_DATA_SOURCE_EDID: string
export const PROFILE_METADATA_DATA_SOURCE_STANDARD: string
export const PROFILE_METADATA_DATA_SOURCE_TEST: string
export const PROFILE_METADATA_EDID_MD5: string
export const PROFILE_METADATA_EDID_MNFT: string
export const PROFILE_METADATA_EDID_MODEL: string
export const PROFILE_METADATA_EDID_SERIAL: string
export const PROFILE_METADATA_EDID_VENDOR: string
export const PROFILE_METADATA_FILE_CHECKSUM: string
export const PROFILE_METADATA_LICENSE: string
export const PROFILE_METADATA_MAPPING_DEVICE_ID: string
export const PROFILE_METADATA_MAPPING_FORMAT: string
export const PROFILE_METADATA_MAPPING_QUALIFIER: string
export const PROFILE_METADATA_MEASUREMENT_DEVICE: string
export const PROFILE_METADATA_QUALITY: string
export const PROFILE_METADATA_QUALITY_HIGH: string
export const PROFILE_METADATA_QUALITY_LOW: string
export const PROFILE_METADATA_QUALITY_MEDIUM: string
export const PROFILE_METADATA_SCREEN_BRIGHTNESS: string
export const PROFILE_METADATA_SCREEN_SURFACE: string
export const PROFILE_METADATA_SCREEN_SURFACE_GLOSSY: string
export const PROFILE_METADATA_SCREEN_SURFACE_MATTE: string
export const PROFILE_METADATA_STANDARD_SPACE: string
export const PROFILE_PROPERTY_COLORSPACE: string
export const PROFILE_PROPERTY_CREATED: string
export const PROFILE_PROPERTY_FILENAME: string
export const PROFILE_PROPERTY_FORMAT: string
export const PROFILE_PROPERTY_HAS_VCGT: string
export const PROFILE_PROPERTY_ID: string
export const PROFILE_PROPERTY_IS_SYSTEM_WIDE: string
export const PROFILE_PROPERTY_KIND: string
export const PROFILE_PROPERTY_METADATA: string
export const PROFILE_PROPERTY_OWNER: string
export const PROFILE_PROPERTY_QUALIFIER: string
export const PROFILE_PROPERTY_SCOPE: string
export const PROFILE_PROPERTY_TITLE: string
export const PROFILE_PROPERTY_WARNINGS: string
export const SENSOR_METADATA_IMAGE_ATTACH: string
export const SENSOR_METADATA_IMAGE_CALIBRATE: string
export const SENSOR_METADATA_IMAGE_SCREEN: string
export const SENSOR_PROPERTY_CAPABILITIES: string
export const SENSOR_PROPERTY_EMBEDDED: string
export const SENSOR_PROPERTY_ID: string
export const SENSOR_PROPERTY_KIND: string
export const SENSOR_PROPERTY_LOCKED: string
export const SENSOR_PROPERTY_METADATA: string
export const SENSOR_PROPERTY_MODE: string
export const SENSOR_PROPERTY_MODEL: string
export const SENSOR_PROPERTY_NATIVE: string
export const SENSOR_PROPERTY_OPTIONS: string
export const SENSOR_PROPERTY_SERIAL: string
export const SENSOR_PROPERTY_STATE: string
export const SENSOR_PROPERTY_VENDOR: string
export function colorGetBlackbodyRgb(temp: number, result: ColorRGB): boolean
export function colorGetBlackbodyRgbFull(temp: number, result: ColorRGB, flags: ColorBlackbodyFlags): boolean
export function colorRgb8ToRgb(src: ColorRGB8, dest: ColorRGB): void
export function colorRgbArrayInterpolate(array: ColorRGB[], newLength: number): ColorRGB[]
export function colorRgbArrayIsMonotonic(array: ColorRGB[]): boolean
export function colorRgbArrayNew(): ColorRGB[]
export function colorspaceFromString(colorspace: string): Colorspace
export function colorspaceToString(colorspace: Colorspace): string
export function mat33Clear(src: Mat3x3): void
export function mat33Copy(src: Mat3x3, dest: Mat3x3): void
export function mat33Determinant(src: Mat3x3): number
export function mat33GetData(src: Mat3x3): number
export function mat33Init(dest: Mat3x3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void
export function mat33IsFinite(mat: Mat3x3): boolean
export function mat33MatrixMultiply(matSrc1: Mat3x3, matSrc2: Mat3x3, matDest: Mat3x3): void
export function mat33Normalize(src: Mat3x3, dest: Mat3x3): void
export function mat33Reciprocal(src: Mat3x3, dest: Mat3x3): boolean
export function mat33ScalarMultiply(matSrc: Mat3x3, value: number, matDest: Mat3x3): void
export function mat33SetIdentity(src: Mat3x3): void
export function mat33ToString(src: Mat3x3): string
export function mat33VectorMultiply(matSrc: Mat3x3, vecSrc: Vec3, vecDest: Vec3): void
export function objectScopeFromString(objectScope: string): ObjectScope
export function objectScopeToString(objectScope: ObjectScope): string
export function pixelFormatFromString(pixelFormat: string): PixelFormat
export function pixelFormatToString(pixelFormat: PixelFormat): string
export function renderingIntentFromString(renderingIntent: string): RenderingIntent
export function renderingIntentToString(renderingIntent: RenderingIntent): string
export function standardSpaceFromString(standardSpace: string): StandardSpace
export function standardSpaceToString(standardSpace: StandardSpace): string
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Properties of Colord.Client */
    readonly connected: string
    readonly daemonVersion: string
    readonly systemModel: string
    readonly systemVendor: string
    /* Fields of Colord.Client */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Colord.Client */
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(res: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    createDevice(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createDeviceFinish(res: Gio.AsyncResult): Device
    createDeviceSync(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null): Device
    createProfile(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createProfileFinish(res: Gio.AsyncResult): Profile
    createProfileForIcc(icc: Icc, scope: ObjectScope, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createProfileForIccFinish(res: Gio.AsyncResult): Profile
    createProfileForIccSync(icc: Icc, scope: ObjectScope, cancellable?: Gio.Cancellable | null): Profile
    createProfileSync(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null): Profile
    deleteDevice(device: Device, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteDeviceFinish(res: Gio.AsyncResult): boolean
    deleteDeviceSync(device: Device, cancellable?: Gio.Cancellable | null): boolean
    deleteProfile(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteProfileFinish(res: Gio.AsyncResult): boolean
    deleteProfileSync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    findDevice(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findDeviceByProperty(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findDeviceByPropertyFinish(res: Gio.AsyncResult): Device
    findDeviceByPropertySync(key: string, value: string, cancellable?: Gio.Cancellable | null): Device
    findDeviceFinish(res: Gio.AsyncResult): Device
    findDeviceSync(id: string, cancellable?: Gio.Cancellable | null): Device
    findProfile(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findProfileByFilename(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findProfileByFilenameFinish(res: Gio.AsyncResult): Profile
    findProfileByFilenameSync(filename: string, cancellable?: Gio.Cancellable | null): Profile
    findProfileByProperty(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findProfileByPropertyFinish(res: Gio.AsyncResult): Profile
    findProfileByPropertySync(key: string, value: string, cancellable?: Gio.Cancellable | null): Profile
    findProfileFinish(res: Gio.AsyncResult): Profile
    findProfileSync(id: string, cancellable?: Gio.Cancellable | null): Profile
    findSensor(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findSensorFinish(res: Gio.AsyncResult): Sensor
    findSensorSync(id: string, cancellable?: Gio.Cancellable | null): Sensor
    getConnected(): boolean
    getDaemonVersion(): string
    getDevices(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDevicesByKind(kind: DeviceKind, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDevicesByKindFinish(res: Gio.AsyncResult): Device[]
    getDevicesByKindSync(kind: DeviceKind, cancellable?: Gio.Cancellable | null): Device[]
    getDevicesFinish(res: Gio.AsyncResult): Device[]
    getDevicesSync(cancellable?: Gio.Cancellable | null): Device[]
    getHasServer(): boolean
    getProfiles(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getProfilesFinish(res: Gio.AsyncResult): Profile[]
    getProfilesSync(cancellable?: Gio.Cancellable | null): Profile[]
    getSensors(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSensorsFinish(res: Gio.AsyncResult): Sensor[]
    getSensorsSync(cancellable?: Gio.Cancellable | null): Sensor[]
    getStandardSpace(standardSpace: StandardSpace, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getStandardSpaceFinish(res: Gio.AsyncResult): Profile
    getStandardSpaceSync(standardSpace: StandardSpace, cancellable?: Gio.Cancellable | null): Profile
    getSystemModel(): string
    getSystemVendor(): string
    importProfile(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    importProfileFinish(res: Gio.AsyncResult): Profile
    importProfileSync(file: Gio.File, cancellable?: Gio.Cancellable | null): Profile
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
    /* Virtual methods of Colord.Client */
    vfuncChanged(): void
    vfuncDeviceAdded(device: Device): void
    vfuncDeviceChanged(device: Device): void
    vfuncDeviceRemoved(device: Device): void
    vfuncProfileAdded(profile: Profile): void
    vfuncProfileChanged(profile: Profile): void
    vfuncProfileRemoved(profile: Profile): void
    vfuncSensorAdded(sensor: Sensor): void
    vfuncSensorChanged(sensor: Sensor): void
    vfuncSensorRemoved(sensor: Sensor): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Colord.Client */
    connect(sigName: "changed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Client) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-changed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-changed", device: Device): void
    on(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "profile-added", callback: (($obj: Client, profile: Profile) => void)): number
    connect_after(sigName: "profile-added", callback: (($obj: Client, profile: Profile) => void)): number
    emit(sigName: "profile-added", profile: Profile): void
    on(sigName: "profile-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "profile-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "profile-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "profile-changed", callback: (($obj: Client, profile: Profile) => void)): number
    connect_after(sigName: "profile-changed", callback: (($obj: Client, profile: Profile) => void)): number
    emit(sigName: "profile-changed", profile: Profile): void
    on(sigName: "profile-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "profile-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "profile-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "profile-removed", callback: (($obj: Client, profile: Profile) => void)): number
    connect_after(sigName: "profile-removed", callback: (($obj: Client, profile: Profile) => void)): number
    emit(sigName: "profile-removed", profile: Profile): void
    on(sigName: "profile-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "profile-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "profile-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sensor-added", callback: (($obj: Client, sensor: Sensor) => void)): number
    connect_after(sigName: "sensor-added", callback: (($obj: Client, sensor: Sensor) => void)): number
    emit(sigName: "sensor-added", sensor: Sensor): void
    on(sigName: "sensor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sensor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sensor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sensor-changed", callback: (($obj: Client, sensor: Sensor) => void)): number
    connect_after(sigName: "sensor-changed", callback: (($obj: Client, sensor: Sensor) => void)): number
    emit(sigName: "sensor-changed", sensor: Sensor): void
    on(sigName: "sensor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sensor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sensor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "sensor-removed", callback: (($obj: Client, sensor: Sensor) => void)): number
    connect_after(sigName: "sensor-removed", callback: (($obj: Client, sensor: Sensor) => void)): number
    emit(sigName: "sensor-removed", sensor: Sensor): void
    on(sigName: "sensor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "sensor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "sensor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connected", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-model", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-model", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-vendor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-vendor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static errorFromString(errorDesc: string): ClientError
    static errorQuark(): GLib.Quark
    static errorToString(errorEnum: ClientError): string
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    objectPath?: string
}
export class Device {
    /* Properties of Colord.Device */
    readonly colorspace: number
    readonly connected: string
    readonly created: number
    readonly embedded: string
    readonly enabled: boolean
    readonly format: string
    readonly id: string
    readonly kind: number
    readonly mode: number
    readonly model: string
    readonly modified: number
    objectPath: string
    readonly owner: number
    readonly profilingInhibitors: string[]
    readonly scope: number
    readonly seat: string
    readonly serial: string
    readonly vendor: string
    /* Fields of Colord.Device */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Colord.Device */
    addProfile(relation: DeviceRelation, profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addProfileFinish(res: Gio.AsyncResult): boolean
    addProfileSync(relation: DeviceRelation, profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(res: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    equal(device2: Device): boolean
    getColorspace(): Colorspace
    getConnected(): boolean
    getCreated(): number
    getDefaultProfile(): Profile
    getEmbedded(): boolean
    getEnabled(): boolean
    getFormat(): string
    getId(): string
    getKind(): DeviceKind
    getMetadata(): GLib.HashTable
    getMetadataItem(key: string): string
    getMode(): DeviceMode
    getModel(): string
    getModified(): number
    getObjectPath(): string
    getOwner(): number
    getProfileForQualifiers(qualifiers: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getProfileForQualifiersFinish(res: Gio.AsyncResult): Profile
    getProfileForQualifiersSync(qualifiers: string, cancellable?: Gio.Cancellable | null): Profile
    getProfileRelation(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getProfileRelationFinish(res: Gio.AsyncResult): DeviceRelation
    getProfileRelationSync(profile: Profile, cancellable?: Gio.Cancellable | null): DeviceRelation
    getProfiles(): Profile[]
    getProfilingInhibitors(): string[]
    getScope(): ObjectScope
    getSeat(): string
    getSerial(): string
    getVendor(): string
    makeProfileDefault(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    makeProfileDefaultFinish(res: Gio.AsyncResult): boolean
    makeProfileDefaultSync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    profilingInhibit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    profilingInhibitFinish(res: Gio.AsyncResult): boolean
    profilingInhibitSync(cancellable?: Gio.Cancellable | null): boolean
    profilingUninhibit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    profilingUninhibitFinish(res: Gio.AsyncResult): boolean
    profilingUninhibitSync(cancellable?: Gio.Cancellable | null): boolean
    removeProfile(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeProfileFinish(res: Gio.AsyncResult): boolean
    removeProfileSync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    setColorspaceSync(colorspace: Colorspace, cancellable?: Gio.Cancellable | null): boolean
    setEnabled(enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setEnabledFinish(res: Gio.AsyncResult): boolean
    setEnabledSync(enabled: boolean, cancellable?: Gio.Cancellable | null): boolean
    setKindSync(kind: DeviceKind, cancellable?: Gio.Cancellable | null): boolean
    setModeSync(mode: DeviceMode, cancellable?: Gio.Cancellable | null): boolean
    setModelSync(value: string, cancellable?: Gio.Cancellable | null): boolean
    setObjectPath(objectPath: string): void
    setProperty(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setPropertyFinish(res: Gio.AsyncResult): boolean
    setPropertySync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    setSerialSync(value: string, cancellable?: Gio.Cancellable | null): boolean
    setVendorSync(value: string, cancellable?: Gio.Cancellable | null): boolean
    toString(): string
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
    /* Virtual methods of Colord.Device */
    vfuncChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Colord.Device */
    connect(sigName: "changed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Device) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::colorspace", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connected", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::embedded", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::embedded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::embedded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::embedded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::profiling-inhibitors", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiling-inhibitors", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::profiling-inhibitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::profiling-inhibitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::profiling-inhibitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Device
    static newWithObjectPath(objectPath: string): Device
    static errorFromString(errorDesc: string): DeviceError
    static errorQuark(): GLib.Quark
    static errorToString(errorEnum: DeviceError): string
    static kindFromString(kind: string): DeviceKind
    static kindToProfileKind(deviceKind: DeviceKind): ProfileKind
    static kindToString(kindEnum: DeviceKind): string
    static modeFromString(deviceMode: string): DeviceMode
    static modeToString(deviceMode: DeviceMode): string
    static relationFromString(deviceRelation: string): DeviceRelation
    static relationToString(deviceRelation: DeviceRelation): string
    static $gtype: GObject.Type
}
export interface Edid_ConstructProps extends GObject.Object_ConstructProps {
}
export class Edid {
    /* Fields of Colord.Edid */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Colord.Edid */
    getBlue(): ColorYxy
    getChecksum(): string
    getEisaId(): string
    getGamma(): number
    getGreen(): ColorYxy
    getHeight(): number
    getMonitorName(): string
    getPnpId(): string
    getRed(): ColorYxy
    getSerialNumber(): string
    getVendorName(): string
    getWhite(): ColorYxy
    getWidth(): number
    parse(edidData: any): boolean
    reset(): void
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
    connect(sigName: "notify", callback: (($obj: Edid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Edid, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Edid_ConstructProps)
    _init (config?: Edid_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Edid
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Icc_ConstructProps extends GObject.Object_ConstructProps {
    colorspace?: number
    kind?: number
    version?: number
}
export class Icc {
    /* Properties of Colord.Icc */
    readonly blue: ColorXYZ
    readonly canDelete: boolean
    readonly checksum: string
    colorspace: number
    readonly filename: string
    readonly green: ColorXYZ
    kind: number
    readonly red: ColorXYZ
    readonly size: number
    readonly temperature: number
    version: number
    readonly white: ColorXYZ
    /* Fields of Colord.Icc */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Colord.Icc */
    addMetadata(key: string, value: string): void
    createDefault(): boolean
    createDefaultFull(flags: IccLoadFlags): boolean
    createFromEdid(gammaValue: number, red: ColorYxy, green: ColorYxy, blue: ColorYxy, white: ColorYxy): boolean
    createFromEdidData(edid: Edid): boolean
    getBlue(): ColorXYZ
    getCanDelete(): boolean
    getCharacterizationData(): string
    getChecksum(): string
    getColorspace(): Colorspace
    getContext(): object | null
    getCopyright(locale: string): string
    getCreated(): GLib.DateTime
    getDescription(locale: string): string
    getFilename(): string
    getGreen(): ColorXYZ
    getHandle(): object | null
    getKind(): ProfileKind
    getManufacturer(locale: string): string
    getMetadata(): GLib.HashTable
    getMetadataItem(key: string): string
    getModel(locale: string): string
    getNamedColors(): ColorSwatch[]
    getRed(): ColorXYZ
    getResponse(size: number): ColorRGB[]
    getSize(): number
    getTagData(tag: string): any
    getTags(): string[]
    getTemperature(): number
    getVcgt(size: number): ColorRGB[]
    getVersion(): number
    getWarnings(): ProfileWarning[]
    getWhite(): ColorXYZ
    loadData(data: any, flags: IccLoadFlags): boolean
    loadFd(fd: number, flags: IccLoadFlags): boolean
    loadFile(file: Gio.File, flags: IccLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    loadHandle(handle: object | null, flags: IccLoadFlags): boolean
    removeMetadata(key: string): void
    saveData(flags: IccSaveFlags): any
    saveDefault(flags: IccSaveFlags, cancellable?: Gio.Cancellable | null): boolean
    saveFile(file: Gio.File, flags: IccSaveFlags, cancellable?: Gio.Cancellable | null): boolean
    setCharacterizationData(data: string): void
    setColorspace(colorspace: Colorspace): void
    setCopyright(locale: string, value?: string | null): void
    setCopyrightItems(values: GLib.HashTable): void
    setCreated(creationTime: GLib.DateTime): void
    setDescription(locale: string, value?: string | null): void
    setDescriptionItems(values: GLib.HashTable): void
    setFilename(filename: string): void
    setKind(kind: ProfileKind): void
    setManufacturer(locale: string, value?: string | null): void
    setManufacturerItems(values: GLib.HashTable): void
    setModel(locale: string, value?: string | null): void
    setModelItems(values: GLib.HashTable): void
    setTagData(tag: string, data: any): boolean
    setVcgt(vcgt: ColorRGB[]): boolean
    setVersion(version: number): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blue", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blue", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-delete", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-delete", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::checksum", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::colorspace", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::green", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::green", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::green", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::green", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::green", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::red", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::red", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::red", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::red", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::red", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::temperature", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::white", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::white", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::white", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::white", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Icc_ConstructProps)
    _init (config?: Icc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Icc
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface It8_ConstructProps extends GObject.Object_ConstructProps {
    kind?: number
}
export class It8 {
    /* Properties of Colord.It8 */
    readonly instrument: string
    kind: number
    readonly normalized: boolean
    readonly originator: string
    readonly reference: string
    readonly spectral: boolean
    readonly title: string
    /* Fields of Colord.It8 */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Colord.It8 */
    addData(rgb: ColorRGB, xyz: ColorXYZ): void
    addOption(option: string): void
    addSpectrum(spectrum: Spectrum): void
    getDataItem(idx: number, rgb: ColorRGB, xyz: ColorXYZ): boolean
    getDataSize(): number
    getEnableCreated(): boolean
    getInstrument(): string
    getKind(): It8Kind
    getMatrix(): Mat3x3
    getNormalized(): boolean
    getOriginator(): string
    getReference(): string
    getSpectral(): boolean
    getSpectrumArray(): Spectrum[]
    getSpectrumById(id: string): Spectrum
    getTitle(): string
    getXyzForRgb(r: number, g: number, b: number, delta: number): ColorXYZ
    hasOption(option: string): boolean
    loadFromData(data: string[]): boolean
    loadFromFile(file: Gio.File): boolean
    saveToData(data: string[]): boolean
    saveToFile(file: Gio.File): boolean
    setEnableCreated(enableCreated: boolean): void
    setInstrument(instrument: string): void
    setKind(kind: It8Kind): void
    setMatrix(matrix: Mat3x3): void
    setNormalized(normalized: boolean): void
    setOriginator(originator: string): void
    setReference(reference: string): void
    setSpectral(spectral: boolean): void
    setSpectrumArray(data: Spectrum[]): void
    setTitle(title: string): void
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
    connect(sigName: "notify", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::instrument", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::instrument", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::instrument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::instrument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::instrument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::normalized", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::normalized", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::normalized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::normalized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::normalized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::originator", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::originator", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::originator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::originator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::originator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reference", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spectral", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spectral", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spectral", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spectral", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spectral", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: It8_ConstructProps)
    _init (config?: It8_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): It8
    static newWithKind(kind: It8Kind): It8
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    objectPath?: string
}
export class Profile {
    /* Properties of Colord.Profile */
    readonly colorspace: string
    readonly connected: string
    readonly created: number
    readonly filename: string
    readonly format: string
    readonly hasVcgt: string
    readonly id: string
    readonly isSystemWide: string
    readonly kind: string
    objectPath: string
    readonly owner: number
    readonly qualifier: string
    readonly scope: number
    readonly title: string
    readonly warnings: string[]
    /* Fields of Colord.Profile */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Colord.Profile */
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(res: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    equal(profile2: Profile): boolean
    getAge(): number
    getColorspace(): Colorspace
    getConnected(): boolean
    getCreated(): number
    getFilename(): string
    getFormat(): string
    getHasVcgt(): boolean
    getId(): string
    getIsSystemWide(): boolean
    getKind(): ProfileKind
    getMetadata(): GLib.HashTable
    getMetadataItem(key: string): string
    getObjectPath(): string
    getOwner(): number
    getQualifier(): string
    getScope(): ObjectScope
    getTitle(): string
    getWarnings(): string[]
    hasAccess(): boolean
    installSystemWide(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    installSystemWideFinish(res: Gio.AsyncResult): boolean
    installSystemWideSync(cancellable?: Gio.Cancellable | null): boolean
    loadIcc(flags: IccLoadFlags, cancellable?: Gio.Cancellable | null): Icc
    setObjectPath(objectPath: string): void
    setProperty(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setPropertyFinish(res: Gio.AsyncResult): boolean
    setPropertySync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    toString(): string
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
    /* Virtual methods of Colord.Profile */
    vfuncChanged(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Colord.Profile */
    connect(sigName: "changed", callback: (($obj: Profile) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Profile) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::colorspace", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connected", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-vcgt", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-vcgt", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-vcgt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-vcgt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-vcgt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-system-wide", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-system-wide", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-system-wide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-system-wide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-system-wide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qualifier", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qualifier", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qualifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qualifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qualifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warnings", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warnings", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warnings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warnings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warnings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Profile
    static newWithObjectPath(objectPath: string): Profile
    static errorFromString(errorDesc: string): ProfileError
    static errorQuark(): GLib.Quark
    static errorToString(errorEnum: ProfileError): string
    static kindFromString(profileKind: string): ProfileKind
    static kindToString(profileKind: ProfileKind): string
    static qualityFromString(quality: string): ProfileQuality
    static qualityToString(qualityEnum: ProfileQuality): string
    static warningFromString(type: string): ProfileWarning
    static warningToString(kindEnum: ProfileWarning): string
    static $gtype: GObject.Type
}
export interface Sensor_ConstructProps extends GObject.Object_ConstructProps {
    objectPath?: string
}
export class Sensor {
    /* Properties of Colord.Sensor */
    readonly connected: string
    readonly embedded: string
    readonly id: string
    readonly kind: string
    readonly locked: string
    readonly mode: string
    readonly model: string
    readonly native: string
    objectPath: string
    readonly serial: string
    readonly state: string
    readonly vendor: string
    /* Fields of Colord.Sensor */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Colord.Sensor */
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(res: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    equal(sensor2: Sensor): boolean
    getCaps(): number
    getConnected(): boolean
    getEmbedded(): boolean
    getId(): string
    getKind(): SensorKind
    getLocked(): boolean
    getMetadata(): GLib.HashTable
    getMetadataItem(key: string): string
    getMode(): SensorCap
    getModel(): string
    getNative(): boolean
    getObjectPath(): string
    getOption(key: string): string
    getOptions(): GLib.HashTable
    getSample(cap: SensorCap, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSampleFinish(res: Gio.AsyncResult): ColorXYZ
    getSampleSync(cap: SensorCap, cancellable?: Gio.Cancellable | null): ColorXYZ
    getSerial(): string
    getSpectrum(cap: SensorCap, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSpectrumFinish(res: Gio.AsyncResult): Spectrum
    getSpectrumSync(cap: SensorCap, cancellable?: Gio.Cancellable | null): Spectrum
    getState(): SensorState
    getVendor(): string
    hasCap(cap: SensorCap): boolean
    lock(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lockFinish(res: Gio.AsyncResult): boolean
    lockSync(cancellable?: Gio.Cancellable | null): boolean
    setObjectPath(objectPath: string): void
    setOptions(values: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setOptionsFinish(res: Gio.AsyncResult): boolean
    setOptionsSync(values: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    toString(): string
    unlock(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unlockFinish(res: Gio.AsyncResult): boolean
    unlockSync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Colord.Sensor */
    vfuncButtonPressed(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Colord.Sensor */
    connect(sigName: "button-pressed", callback: (($obj: Sensor) => void)): number
    connect_after(sigName: "button-pressed", callback: (($obj: Sensor) => void)): number
    emit(sigName: "button-pressed"): void
    on(sigName: "button-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-pressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connected", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::embedded", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::embedded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::embedded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::embedded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locked", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Sensor_ConstructProps)
    _init (config?: Sensor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Sensor
    static newWithObjectPath(objectPath: string): Sensor
    static capFromString(sensorCap: string): SensorCap
    static capToString(sensorCap: SensorCap): string
    static errorFromString(errorDesc: string): SensorError
    static errorQuark(): GLib.Quark
    static errorToString(errorEnum: SensorError): string
    static kindFromString(sensorKind: string): SensorKind
    static kindToString(sensorKind: SensorKind): string
    static stateFromString(sensorState: string): SensorState
    static stateToString(sensorState: SensorState): string
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of Colord.ClientClass */
    parentClass: GObject.ObjectClass
    deviceAdded: (client: Client, device: Device) => void
    deviceRemoved: (client: Client, device: Device) => void
    deviceChanged: (client: Client, device: Device) => void
    profileAdded: (client: Client, profile: Profile) => void
    profileRemoved: (client: Client, profile: Profile) => void
    profileChanged: (client: Client, profile: Profile) => void
    sensorAdded: (client: Client, sensor: Sensor) => void
    sensorRemoved: (client: Client, sensor: Sensor) => void
    sensorChanged: (client: Client, sensor: Sensor) => void
    changed: (client: Client) => void
    static name: string
}
export class ColorLab {
    /* Fields of Colord.ColorLab */
    l: number
    a: number
    b: number
    /* Methods of Colord.ColorLab */
    copy(dest: ColorLab): void
    deltaE76(p2: ColorLab): number
    dup(): ColorLab
    free(): void
    set(l: number, a: number, b: number): void
    static name: string
    static new(): ColorLab
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorLab
}
export class ColorRGB {
    /* Fields of Colord.ColorRGB */
    r: number
    g: number
    b: number
    /* Methods of Colord.ColorRGB */
    copy(dest: ColorRGB): void
    dup(): ColorRGB
    free(): void
    fromWavelength(wavelength: number): void
    interpolate(p2: ColorRGB, index: number, result: ColorRGB): void
    set(r: number, g: number, b: number): void
    toRgb8(dest: ColorRGB8): void
    static name: string
    static new(): ColorRGB
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorRGB
    static arrayInterpolate(array: ColorRGB[], newLength: number): ColorRGB[]
    static arrayIsMonotonic(array: ColorRGB[]): boolean
    static arrayNew(): ColorRGB[]
}
export class ColorRGB8 {
    /* Fields of Colord.ColorRGB8 */
    r: number
    g: number
    b: number
    static name: string
}
export class ColorSwatch {
    /* Methods of Colord.ColorSwatch */
    dup(): ColorSwatch
    free(): void
    getName(): string
    getValue(): ColorLab
    setName(name: string): void
    setValue(value: ColorLab): void
    static name: string
    static new(): ColorSwatch
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorSwatch
}
export class ColorUVW {
    /* Fields of Colord.ColorUVW */
    u: number
    v: number
    w: number
    /* Methods of Colord.ColorUVW */
    copy(dest: ColorUVW): void
    dup(): ColorUVW
    free(): void
    getChromaDifference(p2: ColorUVW): number
    set(u: number, v: number, w: number): void
    setPlanckianLocus(temp: number): void
    static name: string
    static new(): ColorUVW
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorUVW
}
export class ColorXYZ {
    /* Fields of Colord.ColorXYZ */
    x: number
    y: number
    z: number
    /* Methods of Colord.ColorXYZ */
    clear(): void
    copy(dest: ColorXYZ): void
    dup(): ColorXYZ
    free(): void
    normalize(max: number, dest: ColorXYZ): void
    set(x: number, y: number, z: number): void
    toCct(): number
    toUvw(whitepoint: ColorXYZ, dest: ColorUVW): void
    toYxy(dest: ColorYxy): void
    static name: string
    static new(): ColorXYZ
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorXYZ
}
export class ColorYxy {
    /* Fields of Colord.ColorYxy */
    y: number
    x: number
    /* Methods of Colord.ColorYxy */
    copy(dest: ColorYxy): void
    dup(): ColorYxy
    free(): void
    set(y: number, x: number, y: number): void
    toUvw(dest: ColorUVW): void
    toXyz(dest: ColorXYZ): void
    static name: string
    static new(): ColorYxy
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorYxy
}
export abstract class DeviceClass {
    /* Fields of Colord.DeviceClass */
    parentClass: GObject.ObjectClass
    changed: (device: Device) => void
    static name: string
}
export abstract class EdidClass {
    /* Fields of Colord.EdidClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class IccClass {
    /* Fields of Colord.IccClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class It8Class {
    /* Fields of Colord.It8Class */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Mat3x3 {
    /* Fields of Colord.Mat3x3 */
    m00: number
    m01: number
    m02: number
    m10: number
    m11: number
    m12: number
    m20: number
    m21: number
    m22: number
    static name: string
}
export abstract class ProfileClass {
    /* Fields of Colord.ProfileClass */
    parentClass: GObject.ObjectClass
    changed: (profile: Profile) => void
    static name: string
}
export abstract class SensorClass {
    /* Fields of Colord.SensorClass */
    parentClass: GObject.ObjectClass
    buttonPressed: (sensor: Sensor) => void
    static name: string
}
export class Spectrum {
    /* Methods of Colord.Spectrum */
    addValue(data: number): void
    dup(): Spectrum
    free(): void
    getData(): number[]
    getEnd(): number
    getId(): string
    getNorm(): number
    getResolution(): number
    getSize(): number
    getStart(): number
    getValue(idx: number): number
    getValueForNm(wavelength: number): number
    getValueMax(): number
    getValueMin(): number
    getValueRaw(idx: number): number
    getWavelength(idx: number): number
    getWavelengthCal(c1: number, c2: number, c3: number): void
    limitMax(value: number): void
    limitMin(value: number): void
    multiply(s2: Spectrum, resolution: number): Spectrum
    multiplyScalar(value: number): Spectrum
    normalize(wavelength: number, value: number): void
    normalizeMax(value: number): void
    resample(start: number, end: number, resolution: number): Spectrum
    resampleToSize(size: number): Spectrum
    setData(value: number[]): void
    setEnd(end: number): void
    setId(id: string): void
    setNorm(norm: number): void
    setStart(start: number): void
    setValue(idx: number, data: number): void
    setWavelengthCal(c1: number, c2: number, c3: number): void
    subtract(s2: Spectrum, resolution: number): Spectrum
    toString(maxWidth: number, maxHeight: number): string
    static name: string
    static new(): Spectrum
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Spectrum
    static planckianNew(temperature: number): Spectrum
    static planckianNewFull(temperature: number, start: number, end: number, resolution: number): Spectrum
    static sizedNew(reservedSize: number): Spectrum
}
export class Vec3 {
    /* Fields of Colord.Vec3 */
    v0: number
    v1: number
    v2: number
    /* Methods of Colord.Vec3 */
    add(src2: Vec3, dest: Vec3): void
    clear(): void
    copy(dest: Vec3): void
    getData(): number
    init(v0: number, v1: number, v2: number): void
    scalarMultiply(value: number, dest: Vec3): void
    squaredError(src2: Vec3): number
    subtract(src2: Vec3, dest: Vec3): void
    toString(): string
    static name: string
}
export type PixelFormat = number
}