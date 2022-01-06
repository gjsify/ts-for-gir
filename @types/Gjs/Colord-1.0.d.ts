/**
 * Colord-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Colord {

enum ClientError {
    INTERNAL,
    ALREADY_EXISTS,
    FAILED_TO_AUTHENTICATE,
    NOT_SUPPORTED,
    NOT_FOUND,
    INPUT_INVALID,
    FILE_INVALID,
}
enum ColorBlackbodyFlags {
    NONE,
    USE_PLANCKIAN,
}
enum Colorspace {
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
enum DeviceError {
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
enum DeviceKind {
    UNKNOWN,
    DISPLAY,
    SCANNER,
    PRINTER,
    CAMERA,
    WEBCAM,
}
enum DeviceMode {
    UNKNOWN,
    PHYSICAL,
    VIRTUAL,
}
enum DeviceRelation {
    UNKNOWN,
    SOFT,
    HARD,
}
enum IccError {
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
enum IccSaveFlags {
    NONE,
}
enum It8Error {
    FAILED,
    INVALID_FORMAT,
    UNKNOWN_KIND,
}
enum It8Kind {
    UNKNOWN,
    TI1,
    TI3,
    CCMX,
    CAL,
    CCSS,
    SPECT,
    CMF,
}
enum ObjectScope {
    UNKNOWN,
    NORMAL,
    TEMP,
    DISK,
}
enum ProfileError {
    INTERNAL,
    ALREADY_INSTALLED,
    FAILED_TO_WRITE,
    FAILED_TO_PARSE,
    FAILED_TO_READ,
    FAILED_TO_AUTHENTICATE,
    PROPERTY_INVALID,
    FAILED_TO_GET_UID,
}
enum ProfileKind {
    UNKNOWN,
    INPUT_DEVICE,
    DISPLAY_DEVICE,
    OUTPUT_DEVICE,
    DEVICELINK,
    COLORSPACE_CONVERSION,
    ABSTRACT,
    NAMED_COLOR,
}
enum ProfileQuality {
    LOW,
    MEDIUM,
    HIGH,
}
enum ProfileWarning {
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
enum RenderingIntent {
    UNKNOWN,
    PERCEPTUAL,
    RELATIVE_COLORIMETRIC,
    SATURATION,
    ABSOLUTE_COLORIMETRIC,
}
enum SensorCap {
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
enum SensorError {
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
enum SensorKind {
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
enum SensorState {
    UNKNOWN,
    STARTING,
    IDLE,
    MEASURING,
    BUSY,
}
enum StandardSpace {
    UNKNOWN,
    SRGB,
    ADOBE_RGB,
    PROPHOTO_RGB,
}
enum IccLoadFlags {
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
function color_get_blackbody_rgb(temp: number, result: ColorRGB): boolean
function color_get_blackbody_rgb_full(temp: number, result: ColorRGB, flags: ColorBlackbodyFlags): boolean
function color_rgb8_to_rgb(src: ColorRGB8, dest: ColorRGB): void
function color_rgb_array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[]
function color_rgb_array_is_monotonic(array: ColorRGB[]): boolean
function color_rgb_array_new(): ColorRGB[]
function colorspace_from_string(colorspace: string): Colorspace
function colorspace_to_string(colorspace: Colorspace): string
function mat33_clear(src: Mat3x3): void
function mat33_copy(src: Mat3x3, dest: Mat3x3): void
function mat33_determinant(src: Mat3x3): number
function mat33_get_data(src: Mat3x3): number
function mat33_init(dest: Mat3x3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void
function mat33_is_finite(mat: Mat3x3): boolean
function mat33_matrix_multiply(mat_src1: Mat3x3, mat_src2: Mat3x3, mat_dest: Mat3x3): void
function mat33_normalize(src: Mat3x3, dest: Mat3x3): void
function mat33_reciprocal(src: Mat3x3, dest: Mat3x3): boolean
function mat33_scalar_multiply(mat_src: Mat3x3, value: number, mat_dest: Mat3x3): void
function mat33_set_identity(src: Mat3x3): void
function mat33_to_string(src: Mat3x3): string
function mat33_vector_multiply(mat_src: Mat3x3, vec_src: Vec3, vec_dest: Vec3): void
function object_scope_from_string(object_scope: string): ObjectScope
function object_scope_to_string(object_scope: ObjectScope): string
function pixel_format_from_string(pixel_format: string): PixelFormat
function pixel_format_to_string(pixel_format: PixelFormat): string
function rendering_intent_from_string(rendering_intent: string): RenderingIntent
function rendering_intent_to_string(rendering_intent: RenderingIntent): string
function standard_space_from_string(standard_space: string): StandardSpace
function standard_space_to_string(standard_space: StandardSpace): string
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Properties of Colord-1.0.Colord.Client */
    readonly connected: string
    readonly daemon_version: string
    readonly system_model: string
    readonly system_vendor: string
    /* Fields of Colord-1.0.Colord.Client */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Colord-1.0.Colord.Client */
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(res: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    create_device(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_device_finish(res: Gio.AsyncResult): Device
    create_device_sync(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null): Device
    create_profile(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_profile_finish(res: Gio.AsyncResult): Profile
    create_profile_for_icc(icc: Icc, scope: ObjectScope, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_profile_for_icc_finish(res: Gio.AsyncResult): Profile
    create_profile_for_icc_sync(icc: Icc, scope: ObjectScope, cancellable?: Gio.Cancellable | null): Profile
    create_profile_sync(id: string, scope: ObjectScope, properties?: GLib.HashTable | null, cancellable?: Gio.Cancellable | null): Profile
    delete_device(device: Device, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_device_finish(res: Gio.AsyncResult): boolean
    delete_device_sync(device: Device, cancellable?: Gio.Cancellable | null): boolean
    delete_profile(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_profile_finish(res: Gio.AsyncResult): boolean
    delete_profile_sync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    find_device(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_device_by_property(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_device_by_property_finish(res: Gio.AsyncResult): Device
    find_device_by_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): Device
    find_device_finish(res: Gio.AsyncResult): Device
    find_device_sync(id: string, cancellable?: Gio.Cancellable | null): Device
    find_profile(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_profile_by_filename(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_profile_by_filename_finish(res: Gio.AsyncResult): Profile
    find_profile_by_filename_sync(filename: string, cancellable?: Gio.Cancellable | null): Profile
    find_profile_by_property(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_profile_by_property_finish(res: Gio.AsyncResult): Profile
    find_profile_by_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): Profile
    find_profile_finish(res: Gio.AsyncResult): Profile
    find_profile_sync(id: string, cancellable?: Gio.Cancellable | null): Profile
    find_sensor(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_sensor_finish(res: Gio.AsyncResult): Sensor
    find_sensor_sync(id: string, cancellable?: Gio.Cancellable | null): Sensor
    get_connected(): boolean
    get_daemon_version(): string
    get_devices(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_devices_by_kind(kind: DeviceKind, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_devices_by_kind_finish(res: Gio.AsyncResult): Device[]
    get_devices_by_kind_sync(kind: DeviceKind, cancellable?: Gio.Cancellable | null): Device[]
    get_devices_finish(res: Gio.AsyncResult): Device[]
    get_devices_sync(cancellable?: Gio.Cancellable | null): Device[]
    get_has_server(): boolean
    get_profiles(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_profiles_finish(res: Gio.AsyncResult): Profile[]
    get_profiles_sync(cancellable?: Gio.Cancellable | null): Profile[]
    get_sensors(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_sensors_finish(res: Gio.AsyncResult): Sensor[]
    get_sensors_sync(cancellable?: Gio.Cancellable | null): Sensor[]
    get_standard_space(standard_space: StandardSpace, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_standard_space_finish(res: Gio.AsyncResult): Profile
    get_standard_space_sync(standard_space: StandardSpace, cancellable?: Gio.Cancellable | null): Profile
    get_system_model(): string
    get_system_vendor(): string
    import_profile(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    import_profile_finish(res: Gio.AsyncResult): Profile
    import_profile_sync(file: Gio.File, cancellable?: Gio.Cancellable | null): Profile
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
    /* Virtual methods of Colord-1.0.Colord.Client */
    vfunc_changed(): void
    vfunc_device_added(device: Device): void
    vfunc_device_changed(device: Device): void
    vfunc_device_removed(device: Device): void
    vfunc_profile_added(profile: Profile): void
    vfunc_profile_changed(profile: Profile): void
    vfunc_profile_removed(profile: Profile): void
    vfunc_sensor_added(sensor: Sensor): void
    vfunc_sensor_changed(sensor: Sensor): void
    vfunc_sensor_removed(sensor: Sensor): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Colord-1.0.Colord.Client */
    connect(sigName: "changed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Client) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-changed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-changed", device: Device): void
    connect(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    connect(sigName: "profile-added", callback: (($obj: Client, profile: Profile) => void)): number
    connect_after(sigName: "profile-added", callback: (($obj: Client, profile: Profile) => void)): number
    emit(sigName: "profile-added", profile: Profile): void
    connect(sigName: "profile-changed", callback: (($obj: Client, profile: Profile) => void)): number
    connect_after(sigName: "profile-changed", callback: (($obj: Client, profile: Profile) => void)): number
    emit(sigName: "profile-changed", profile: Profile): void
    connect(sigName: "profile-removed", callback: (($obj: Client, profile: Profile) => void)): number
    connect_after(sigName: "profile-removed", callback: (($obj: Client, profile: Profile) => void)): number
    emit(sigName: "profile-removed", profile: Profile): void
    connect(sigName: "sensor-added", callback: (($obj: Client, sensor: Sensor) => void)): number
    connect_after(sigName: "sensor-added", callback: (($obj: Client, sensor: Sensor) => void)): number
    emit(sigName: "sensor-added", sensor: Sensor): void
    connect(sigName: "sensor-changed", callback: (($obj: Client, sensor: Sensor) => void)): number
    connect_after(sigName: "sensor-changed", callback: (($obj: Client, sensor: Sensor) => void)): number
    emit(sigName: "sensor-changed", sensor: Sensor): void
    connect(sigName: "sensor-removed", callback: (($obj: Client, sensor: Sensor) => void)): number
    connect_after(sigName: "sensor-removed", callback: (($obj: Client, sensor: Sensor) => void)): number
    emit(sigName: "sensor-removed", sensor: Sensor): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connected", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-model", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-model", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-vendor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-vendor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static error_from_string(error_desc: string): ClientError
    static error_quark(): GLib.Quark
    static error_to_string(error_enum: ClientError): string
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    object_path?: string
}
class Device {
    /* Properties of Colord-1.0.Colord.Device */
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
    object_path: string
    readonly owner: number
    readonly profiling_inhibitors: string[]
    readonly scope: number
    readonly seat: string
    readonly serial: string
    readonly vendor: string
    /* Fields of Colord-1.0.Colord.Device */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Colord-1.0.Colord.Device */
    add_profile(relation: DeviceRelation, profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_profile_finish(res: Gio.AsyncResult): boolean
    add_profile_sync(relation: DeviceRelation, profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(res: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    equal(device2: Device): boolean
    get_colorspace(): Colorspace
    get_connected(): boolean
    get_created(): number
    get_default_profile(): Profile
    get_embedded(): boolean
    get_enabled(): boolean
    get_format(): string
    get_id(): string
    get_kind(): DeviceKind
    get_metadata(): GLib.HashTable
    get_metadata_item(key: string): string
    get_mode(): DeviceMode
    get_model(): string
    get_modified(): number
    get_object_path(): string
    get_owner(): number
    get_profile_for_qualifiers(qualifiers: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_profile_for_qualifiers_finish(res: Gio.AsyncResult): Profile
    get_profile_for_qualifiers_sync(qualifiers: string, cancellable?: Gio.Cancellable | null): Profile
    get_profile_relation(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_profile_relation_finish(res: Gio.AsyncResult): DeviceRelation
    get_profile_relation_sync(profile: Profile, cancellable?: Gio.Cancellable | null): DeviceRelation
    get_profiles(): Profile[]
    get_profiling_inhibitors(): string[]
    get_scope(): ObjectScope
    get_seat(): string
    get_serial(): string
    get_vendor(): string
    make_profile_default(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    make_profile_default_finish(res: Gio.AsyncResult): boolean
    make_profile_default_sync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    profiling_inhibit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    profiling_inhibit_finish(res: Gio.AsyncResult): boolean
    profiling_inhibit_sync(cancellable?: Gio.Cancellable | null): boolean
    profiling_uninhibit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    profiling_uninhibit_finish(res: Gio.AsyncResult): boolean
    profiling_uninhibit_sync(cancellable?: Gio.Cancellable | null): boolean
    remove_profile(profile: Profile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_profile_finish(res: Gio.AsyncResult): boolean
    remove_profile_sync(profile: Profile, cancellable?: Gio.Cancellable | null): boolean
    set_colorspace_sync(colorspace: Colorspace, cancellable?: Gio.Cancellable | null): boolean
    set_enabled(enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_enabled_finish(res: Gio.AsyncResult): boolean
    set_enabled_sync(enabled: boolean, cancellable?: Gio.Cancellable | null): boolean
    set_kind_sync(kind: DeviceKind, cancellable?: Gio.Cancellable | null): boolean
    set_mode_sync(mode: DeviceMode, cancellable?: Gio.Cancellable | null): boolean
    set_model_sync(value: string, cancellable?: Gio.Cancellable | null): boolean
    set_object_path(object_path: string): void
    set_property(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_property_finish(res: Gio.AsyncResult): boolean
    set_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    set_serial_sync(value: string, cancellable?: Gio.Cancellable | null): boolean
    set_vendor_sync(value: string, cancellable?: Gio.Cancellable | null): boolean
    to_string(): string
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
    /* Virtual methods of Colord-1.0.Colord.Device */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Colord-1.0.Colord.Device */
    connect(sigName: "changed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Device) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::colorspace", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::embedded", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiling-inhibitors", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiling-inhibitors", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
    static new_with_object_path(object_path: string): Device
    static error_from_string(error_desc: string): DeviceError
    static error_quark(): GLib.Quark
    static error_to_string(error_enum: DeviceError): string
    static kind_from_string(kind: string): DeviceKind
    static kind_to_profile_kind(device_kind: DeviceKind): ProfileKind
    static kind_to_string(kind_enum: DeviceKind): string
    static mode_from_string(device_mode: string): DeviceMode
    static mode_to_string(device_mode: DeviceMode): string
    static relation_from_string(device_relation: string): DeviceRelation
    static relation_to_string(device_relation: DeviceRelation): string
    static $gtype: GObject.Type
}
export interface Edid_ConstructProps extends GObject.Object_ConstructProps {
}
class Edid {
    /* Fields of Colord-1.0.Colord.Edid */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Colord-1.0.Colord.Edid */
    get_blue(): ColorYxy
    get_checksum(): string
    get_eisa_id(): string
    get_gamma(): number
    get_green(): ColorYxy
    get_height(): number
    get_monitor_name(): string
    get_pnp_id(): string
    get_red(): ColorYxy
    get_serial_number(): string
    get_vendor_name(): string
    get_white(): ColorYxy
    get_width(): number
    parse(edid_data: GLib.Bytes): boolean
    reset(): void
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
    connect(sigName: "notify", callback: (($obj: Edid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Edid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Edid_ConstructProps)
    _init (config?: Edid_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Edid
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Icc_ConstructProps extends GObject.Object_ConstructProps {
    colorspace?: number
    kind?: number
    version?: number
}
class Icc {
    /* Properties of Colord-1.0.Colord.Icc */
    readonly blue: ColorXYZ
    readonly can_delete: boolean
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
    /* Fields of Colord-1.0.Colord.Icc */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Colord-1.0.Colord.Icc */
    add_metadata(key: string, value: string): void
    create_default(): boolean
    create_default_full(flags: IccLoadFlags): boolean
    create_from_edid(gamma_value: number, red: ColorYxy, green: ColorYxy, blue: ColorYxy, white: ColorYxy): boolean
    create_from_edid_data(edid: Edid): boolean
    get_blue(): ColorXYZ
    get_can_delete(): boolean
    get_characterization_data(): string
    get_checksum(): string
    get_colorspace(): Colorspace
    get_context(): object | null
    get_copyright(locale: string): string
    get_created(): GLib.DateTime
    get_description(locale: string): string
    get_filename(): string
    get_green(): ColorXYZ
    get_handle(): object | null
    get_kind(): ProfileKind
    get_manufacturer(locale: string): string
    get_metadata(): GLib.HashTable
    get_metadata_item(key: string): string
    get_model(locale: string): string
    get_named_colors(): ColorSwatch[]
    get_red(): ColorXYZ
    get_response(size: number): ColorRGB[]
    get_size(): number
    get_tag_data(tag: string): GLib.Bytes
    get_tags(): string[]
    get_temperature(): number
    get_vcgt(size: number): ColorRGB[]
    get_version(): number
    get_warnings(): ProfileWarning[]
    get_white(): ColorXYZ
    load_data(data: Uint8Array[], flags: IccLoadFlags): boolean
    load_fd(fd: number, flags: IccLoadFlags): boolean
    load_file(file: Gio.File, flags: IccLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    load_handle(handle: object | null, flags: IccLoadFlags): boolean
    remove_metadata(key: string): void
    save_data(flags: IccSaveFlags): GLib.Bytes
    save_default(flags: IccSaveFlags, cancellable?: Gio.Cancellable | null): boolean
    save_file(file: Gio.File, flags: IccSaveFlags, cancellable?: Gio.Cancellable | null): boolean
    set_characterization_data(data: string): void
    set_colorspace(colorspace: Colorspace): void
    set_copyright(locale: string, value?: string | null): void
    set_copyright_items(values: GLib.HashTable): void
    set_created(creation_time: GLib.DateTime): void
    set_description(locale: string, value?: string | null): void
    set_description_items(values: GLib.HashTable): void
    set_filename(filename: string): void
    set_kind(kind: ProfileKind): void
    set_manufacturer(locale: string, value?: string | null): void
    set_manufacturer_items(values: GLib.HashTable): void
    set_model(locale: string, value?: string | null): void
    set_model_items(values: GLib.HashTable): void
    set_tag_data(tag: string, data: GLib.Bytes): boolean
    set_vcgt(vcgt: ColorRGB[]): boolean
    set_version(version: number): void
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blue", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blue", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-delete", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-delete", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::checksum", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::colorspace", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::green", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::green", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::red", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::red", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::temperature", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::white", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white", callback: (($obj: Icc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Icc_ConstructProps)
    _init (config?: Icc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Icc
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface It8_ConstructProps extends GObject.Object_ConstructProps {
    kind?: number
}
class It8 {
    /* Properties of Colord-1.0.Colord.It8 */
    readonly instrument: string
    kind: number
    readonly normalized: boolean
    readonly originator: string
    readonly reference: string
    readonly spectral: boolean
    readonly title: string
    /* Fields of Colord-1.0.Colord.It8 */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Colord-1.0.Colord.It8 */
    add_data(rgb: ColorRGB, xyz: ColorXYZ): void
    add_option(option: string): void
    add_spectrum(spectrum: Spectrum): void
    get_data_item(idx: number, rgb: ColorRGB, xyz: ColorXYZ): boolean
    get_data_size(): number
    get_enable_created(): boolean
    get_instrument(): string
    get_kind(): It8Kind
    get_matrix(): Mat3x3
    get_normalized(): boolean
    get_originator(): string
    get_reference(): string
    get_spectral(): boolean
    get_spectrum_array(): Spectrum[]
    get_spectrum_by_id(id: string): Spectrum
    get_title(): string
    get_xyz_for_rgb(R: number, G: number, B: number, delta: number): ColorXYZ
    has_option(option: string): boolean
    load_from_data(data: string[]): boolean
    load_from_file(file: Gio.File): boolean
    save_to_data(data: string[]): boolean
    save_to_file(file: Gio.File): boolean
    set_enable_created(enable_created: boolean): void
    set_instrument(instrument: string): void
    set_kind(kind: It8Kind): void
    set_matrix(matrix: Mat3x3): void
    set_normalized(normalized: boolean): void
    set_originator(originator: string): void
    set_reference(reference: string): void
    set_spectral(spectral: boolean): void
    set_spectrum_array(data: Spectrum[]): void
    set_title(title: string): void
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
    connect(sigName: "notify", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::instrument", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::instrument", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::normalized", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::normalized", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::originator", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::originator", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reference", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spectral", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spectral", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: It8, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: It8_ConstructProps)
    _init (config?: It8_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): It8
    static new_with_kind(kind: It8Kind): It8
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    object_path?: string
}
class Profile {
    /* Properties of Colord-1.0.Colord.Profile */
    readonly colorspace: string
    readonly connected: string
    readonly created: number
    readonly filename: string
    readonly format: string
    readonly has_vcgt: string
    readonly id: string
    readonly is_system_wide: string
    readonly kind: string
    object_path: string
    readonly owner: number
    readonly qualifier: string
    readonly scope: number
    readonly title: string
    readonly warnings: string[]
    /* Fields of Colord-1.0.Colord.Profile */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Colord-1.0.Colord.Profile */
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(res: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    equal(profile2: Profile): boolean
    get_age(): number
    get_colorspace(): Colorspace
    get_connected(): boolean
    get_created(): number
    get_filename(): string
    get_format(): string
    get_has_vcgt(): boolean
    get_id(): string
    get_is_system_wide(): boolean
    get_kind(): ProfileKind
    get_metadata(): GLib.HashTable
    get_metadata_item(key: string): string
    get_object_path(): string
    get_owner(): number
    get_qualifier(): string
    get_scope(): ObjectScope
    get_title(): string
    get_warnings(): string[]
    has_access(): boolean
    install_system_wide(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install_system_wide_finish(res: Gio.AsyncResult): boolean
    install_system_wide_sync(cancellable?: Gio.Cancellable | null): boolean
    load_icc(flags: IccLoadFlags, cancellable?: Gio.Cancellable | null): Icc
    set_object_path(object_path: string): void
    set_property(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_property_finish(res: Gio.AsyncResult): boolean
    set_property_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    to_string(): string
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
    /* Virtual methods of Colord-1.0.Colord.Profile */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Colord-1.0.Colord.Profile */
    connect(sigName: "changed", callback: (($obj: Profile) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Profile) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::colorspace", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-vcgt", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-vcgt", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-system-wide", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-system-wide", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qualifier", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qualifier", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warnings", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warnings", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Profile
    static new_with_object_path(object_path: string): Profile
    static error_from_string(error_desc: string): ProfileError
    static error_quark(): GLib.Quark
    static error_to_string(error_enum: ProfileError): string
    static kind_from_string(profile_kind: string): ProfileKind
    static kind_to_string(profile_kind: ProfileKind): string
    static quality_from_string(quality: string): ProfileQuality
    static quality_to_string(quality_enum: ProfileQuality): string
    static warning_from_string(type: string): ProfileWarning
    static warning_to_string(kind_enum: ProfileWarning): string
    static $gtype: GObject.Type
}
export interface Sensor_ConstructProps extends GObject.Object_ConstructProps {
    object_path?: string
}
class Sensor {
    /* Properties of Colord-1.0.Colord.Sensor */
    readonly connected: string
    readonly embedded: string
    readonly id: string
    readonly kind: string
    readonly locked: string
    readonly mode: string
    readonly model: string
    readonly native: string
    object_path: string
    readonly serial: string
    readonly state: string
    readonly vendor: string
    /* Fields of Colord-1.0.Colord.Sensor */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Colord-1.0.Colord.Sensor */
    connect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(res: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    equal(sensor2: Sensor): boolean
    get_caps(): number
    get_connected(): boolean
    get_embedded(): boolean
    get_id(): string
    get_kind(): SensorKind
    get_locked(): boolean
    get_metadata(): GLib.HashTable
    get_metadata_item(key: string): string
    get_mode(): SensorCap
    get_model(): string
    get_native(): boolean
    get_object_path(): string
    get_option(key: string): string
    get_options(): GLib.HashTable
    get_sample(cap: SensorCap, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_sample_finish(res: Gio.AsyncResult): ColorXYZ
    get_sample_sync(cap: SensorCap, cancellable?: Gio.Cancellable | null): ColorXYZ
    get_serial(): string
    get_spectrum(cap: SensorCap, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_spectrum_finish(res: Gio.AsyncResult): Spectrum
    get_spectrum_sync(cap: SensorCap, cancellable?: Gio.Cancellable | null): Spectrum
    get_state(): SensorState
    get_vendor(): string
    has_cap(cap: SensorCap): boolean
    lock(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lock_finish(res: Gio.AsyncResult): boolean
    lock_sync(cancellable?: Gio.Cancellable | null): boolean
    set_object_path(object_path: string): void
    set_options(values: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_options_finish(res: Gio.AsyncResult): boolean
    set_options_sync(values: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    to_string(): string
    unlock(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unlock_finish(res: Gio.AsyncResult): boolean
    unlock_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Colord-1.0.Colord.Sensor */
    vfunc_button_pressed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Colord-1.0.Colord.Sensor */
    connect(sigName: "button-pressed", callback: (($obj: Sensor) => void)): number
    connect_after(sigName: "button-pressed", callback: (($obj: Sensor) => void)): number
    emit(sigName: "button-pressed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connected", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::embedded", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locked", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Sensor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sensor_ConstructProps)
    _init (config?: Sensor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Sensor
    static new_with_object_path(object_path: string): Sensor
    static cap_from_string(sensor_cap: string): SensorCap
    static cap_to_string(sensor_cap: SensorCap): string
    static error_from_string(error_desc: string): SensorError
    static error_quark(): GLib.Quark
    static error_to_string(error_enum: SensorError): string
    static kind_from_string(sensor_kind: string): SensorKind
    static kind_to_string(sensor_kind: SensorKind): string
    static state_from_string(sensor_state: string): SensorState
    static state_to_string(sensor_state: SensorState): string
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Colord-1.0.Colord.ClientClass */
    parent_class: GObject.ObjectClass
    device_added: (client: Client, device: Device) => void
    device_removed: (client: Client, device: Device) => void
    device_changed: (client: Client, device: Device) => void
    profile_added: (client: Client, profile: Profile) => void
    profile_removed: (client: Client, profile: Profile) => void
    profile_changed: (client: Client, profile: Profile) => void
    sensor_added: (client: Client, sensor: Sensor) => void
    sensor_removed: (client: Client, sensor: Sensor) => void
    sensor_changed: (client: Client, sensor: Sensor) => void
    changed: (client: Client) => void
    static name: string
}
class ColorLab {
    /* Fields of Colord-1.0.Colord.ColorLab */
    L: number
    a: number
    b: number
    /* Methods of Colord-1.0.Colord.ColorLab */
    copy(dest: ColorLab): void
    delta_e76(p2: ColorLab): number
    dup(): ColorLab
    free(): void
    set(L: number, a: number, b: number): void
    static name: string
    static new(): ColorLab
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorLab
}
class ColorRGB {
    /* Fields of Colord-1.0.Colord.ColorRGB */
    R: number
    G: number
    B: number
    /* Methods of Colord-1.0.Colord.ColorRGB */
    copy(dest: ColorRGB): void
    dup(): ColorRGB
    free(): void
    from_wavelength(wavelength: number): void
    interpolate(p2: ColorRGB, index: number, result: ColorRGB): void
    set(R: number, G: number, B: number): void
    to_rgb8(dest: ColorRGB8): void
    static name: string
    static new(): ColorRGB
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorRGB
    static array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[]
    static array_is_monotonic(array: ColorRGB[]): boolean
    static array_new(): ColorRGB[]
}
class ColorRGB8 {
    /* Fields of Colord-1.0.Colord.ColorRGB8 */
    R: number
    G: number
    B: number
    static name: string
}
class ColorSwatch {
    /* Methods of Colord-1.0.Colord.ColorSwatch */
    dup(): ColorSwatch
    free(): void
    get_name(): string
    get_value(): ColorLab
    set_name(name: string): void
    set_value(value: ColorLab): void
    static name: string
    static new(): ColorSwatch
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorSwatch
}
class ColorUVW {
    /* Fields of Colord-1.0.Colord.ColorUVW */
    U: number
    V: number
    W: number
    /* Methods of Colord-1.0.Colord.ColorUVW */
    copy(dest: ColorUVW): void
    dup(): ColorUVW
    free(): void
    get_chroma_difference(p2: ColorUVW): number
    set(U: number, V: number, W: number): void
    set_planckian_locus(temp: number): void
    static name: string
    static new(): ColorUVW
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorUVW
}
class ColorXYZ {
    /* Fields of Colord-1.0.Colord.ColorXYZ */
    X: number
    Y: number
    Z: number
    /* Methods of Colord-1.0.Colord.ColorXYZ */
    clear(): void
    copy(dest: ColorXYZ): void
    dup(): ColorXYZ
    free(): void
    normalize(max: number, dest: ColorXYZ): void
    set(X: number, Y: number, Z: number): void
    to_cct(): number
    to_uvw(whitepoint: ColorXYZ, dest: ColorUVW): void
    to_yxy(dest: ColorYxy): void
    static name: string
    static new(): ColorXYZ
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorXYZ
}
class ColorYxy {
    /* Fields of Colord-1.0.Colord.ColorYxy */
    Y: number
    x: number
    y: number
    /* Methods of Colord-1.0.Colord.ColorYxy */
    copy(dest: ColorYxy): void
    dup(): ColorYxy
    free(): void
    set(Y: number, x: number, y: number): void
    to_uvw(dest: ColorUVW): void
    to_xyz(dest: ColorXYZ): void
    static name: string
    static new(): ColorYxy
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ColorYxy
}
abstract class DeviceClass {
    /* Fields of Colord-1.0.Colord.DeviceClass */
    parent_class: GObject.ObjectClass
    changed: (device: Device) => void
    static name: string
}
abstract class EdidClass {
    /* Fields of Colord-1.0.Colord.EdidClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class IccClass {
    /* Fields of Colord-1.0.Colord.IccClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class It8Class {
    /* Fields of Colord-1.0.Colord.It8Class */
    parent_class: GObject.ObjectClass
    static name: string
}
class Mat3x3 {
    /* Fields of Colord-1.0.Colord.Mat3x3 */
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
abstract class ProfileClass {
    /* Fields of Colord-1.0.Colord.ProfileClass */
    parent_class: GObject.ObjectClass
    changed: (profile: Profile) => void
    static name: string
}
abstract class SensorClass {
    /* Fields of Colord-1.0.Colord.SensorClass */
    parent_class: GObject.ObjectClass
    button_pressed: (sensor: Sensor) => void
    static name: string
}
class Spectrum {
    /* Methods of Colord-1.0.Colord.Spectrum */
    add_value(data: number): void
    dup(): Spectrum
    free(): void
    get_data(): number[]
    get_end(): number
    get_id(): string
    get_norm(): number
    get_resolution(): number
    get_size(): number
    get_start(): number
    get_value(idx: number): number
    get_value_for_nm(wavelength: number): number
    get_value_max(): number
    get_value_min(): number
    get_value_raw(idx: number): number
    get_wavelength(idx: number): number
    get_wavelength_cal(c1: number, c2: number, c3: number): void
    limit_max(value: number): void
    limit_min(value: number): void
    multiply(s2: Spectrum, resolution: number): Spectrum
    multiply_scalar(value: number): Spectrum
    normalize(wavelength: number, value: number): void
    normalize_max(value: number): void
    resample(start: number, end: number, resolution: number): Spectrum
    resample_to_size(size: number): Spectrum
    set_data(value: number[]): void
    set_end(end: number): void
    set_id(id: string): void
    set_norm(norm: number): void
    set_start(start: number): void
    set_value(idx: number, data: number): void
    set_wavelength_cal(c1: number, c2: number, c3: number): void
    subtract(s2: Spectrum, resolution: number): Spectrum
    to_string(max_width: number, max_height: number): string
    static name: string
    static new(): Spectrum
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Spectrum
    static planckian_new(temperature: number): Spectrum
    static planckian_new_full(temperature: number, start: number, end: number, resolution: number): Spectrum
    static sized_new(reserved_size: number): Spectrum
}
class Vec3 {
    /* Fields of Colord-1.0.Colord.Vec3 */
    v0: number
    v1: number
    v2: number
    /* Methods of Colord-1.0.Colord.Vec3 */
    add(src2: Vec3, dest: Vec3): void
    clear(): void
    copy(dest: Vec3): void
    get_data(): number
    init(v0: number, v1: number, v2: number): void
    scalar_multiply(value: number, dest: Vec3): void
    squared_error(src2: Vec3): number
    subtract(src2: Vec3, dest: Vec3): void
    to_string(): string
    static name: string
}
type PixelFormat = number
}
export default Colord