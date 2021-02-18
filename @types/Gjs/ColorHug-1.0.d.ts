/**
 * ColorHug-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GUsb from './GUsb-1.0';
import type * as Colord from './Colord-1.0';

export enum ColorSelect {
    RED,
    WHITE,
    BLUE,
    GREEN,
}
export enum DeviceMode {
    UNKNOWN,
    LEGACY,
    BOOTLOADER,
    FIRMWARE,
    BOOTLOADER_PLUS,
    FIRMWARE_PLUS,
    FIRMWARE2,
    BOOTLOADER2,
    BOOTLOADER_ALS,
    FIRMWARE_ALS,
}
export enum Error {
    NONE,
    UNKNOWN_CMD,
    WRONG_UNLOCK_CODE,
    NOT_IMPLEMENTED,
    UNDERFLOW_SENSOR,
    NO_SERIAL,
    WATCHDOG,
    INVALID_ADDRESS,
    INVALID_LENGTH,
    INVALID_CHECKSUM,
    INVALID_VALUE,
    UNKNOWN_CMD_FOR_BOOTLOADER,
    NO_CALIBRATION,
    OVERFLOW_MULTIPLY,
    OVERFLOW_ADDITION,
    OVERFLOW_SENSOR,
    OVERFLOW_STACK,
    DEVICE_DEACTIVATED,
    INCOMPLETE_REQUEST,
    SELF_TEST_SENSOR,
    SELF_TEST_RED,
    SELF_TEST_GREEN,
    SELF_TEST_BLUE,
    SELF_TEST_COLOR_SELECT,
    SELF_TEST_MULTIPLIER,
    INVALID_CALIBRATION,
    SRAM_FAILED,
    OUT_OF_MEMORY,
    SELF_TEST_TEMPERATURE,
    SELF_TEST_I2C,
    SELF_TEST_ADC_VDD,
    SELF_TEST_ADC_VSS,
    SELF_TEST_ADC_VREF,
    I2C_SLAVE_ADDRESS,
    I2C_SLAVE_CONFIG,
    SELF_TEST_EEPROM,
}
export enum FreqScale {
    /* 0 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 100 (invalid, starts with a number) */
}
export enum MeasureMode {
    FREQUENCY,
    DURATION,
}
export enum SpectrumKind {
    RAW,
    DARK_CAL,
    TEMP_CAL,
    IRRADIANCE_CAL,
    LAST,
}
export enum DeviceQueueProcessFlags {
    NONE,
    CONTINUE_ERRORS,
    NONFATAL_ERRORS,
}
export enum Illuminant {
    NONE,
    A,
    UV,
}
export enum PcbErrata {
    NONE,
    SWAPPED_LEDS,
    NO_WELCOME,
}
export enum StatusLed {
    GREEN,
    RED,
    BLUE,
}
export const BUFFER_INPUT_CMD: number
export const BUFFER_INPUT_DATA: number
export const BUFFER_OUTPUT_CMD: number
export const BUFFER_OUTPUT_DATA: number
export const BUFFER_OUTPUT_RETVAL: number
export const CALIBRATION_DESCRIPTION_LEN: number
export const CALIBRATION_INDEX_CRT: number
export const CALIBRATION_INDEX_FACTORY_ONLY: number
export const CALIBRATION_INDEX_LCD: number
export const CALIBRATION_INDEX_LED: number
export const CALIBRATION_INDEX_MAX: number
export const CALIBRATION_INDEX_PROJECTOR: number
export const CALIBRATION_MAX: number
export const CALIBRATION_SPECTRAL: number
export const CALIBRATION_TYPE_ALL: number
export const CALIBRATION_TYPE_CRT: number
export const CALIBRATION_TYPE_LCD: number
export const CALIBRATION_TYPE_LED: number
export const CALIBRATION_TYPE_PROJECTOR: number
export const CCD_SPECTRAL_RESOLUTION: number
export const CMD_BOOT_FLASH: number
export const CMD_CLEAR_ERROR: number
export const CMD_ERASE_FLASH: number
export const CMD_GET_ADC_CALIBRATION_NEG: number
export const CMD_GET_ADC_CALIBRATION_POS: number
export const CMD_GET_CALIBRATION: number
export const CMD_GET_CALIBRATION_MAP: number
export const CMD_GET_CCD_CALIBRATION: number
export const CMD_GET_COLOR_SELECT: number
export const CMD_GET_DAC_VALUE: number
export const CMD_GET_DARK_OFFSETS: number
export const CMD_GET_ERROR: number
export const CMD_GET_FIRMWARE_VERSION: number
export const CMD_GET_HARDWARE_VERSION: number
export const CMD_GET_ILLUMINANTS: number
export const CMD_GET_INTEGRAL_TIME: number
export const CMD_GET_LEDS: number
export const CMD_GET_MEASURE_MODE: number
export const CMD_GET_MULTIPLIER: number
export const CMD_GET_OWNER_EMAIL: number
export const CMD_GET_OWNER_NAME: number
export const CMD_GET_PCB_ERRATA: number
export const CMD_GET_POST_SCALE: number
export const CMD_GET_PRE_SCALE: number
export const CMD_GET_REMOTE_HASH: number
export const CMD_GET_SERIAL_NUMBER: number
export const CMD_GET_TEMPERATURE: number
export const CMD_LOAD_SRAM: number
export const CMD_READ_FLASH: number
export const CMD_READ_SRAM: number
export const CMD_RESET: number
export const CMD_SAVE_SRAM: number
export const CMD_SELF_TEST: number
export const CMD_SET_CALIBRATION: number
export const CMD_SET_CALIBRATION_MAP: number
export const CMD_SET_CCD_CALIBRATION: number
export const CMD_SET_COLOR_SELECT: number
export const CMD_SET_CRYPTO_KEY: number
export const CMD_SET_DAC_VALUE: number
export const CMD_SET_DARK_OFFSETS: number
export const CMD_SET_FLASH_SUCCESS: number
export const CMD_SET_ILLUMINANTS: number
export const CMD_SET_INTEGRAL_TIME: number
export const CMD_SET_LEDS: number
export const CMD_SET_MEASURE_MODE: number
export const CMD_SET_MULTIPLIER: number
export const CMD_SET_OWNER_EMAIL: number
export const CMD_SET_OWNER_NAME: number
export const CMD_SET_PCB_ERRATA: number
export const CMD_SET_POST_SCALE: number
export const CMD_SET_PRE_SCALE: number
export const CMD_SET_REMOTE_HASH: number
export const CMD_SET_SERIAL_NUMBER: number
export const CMD_TAKE_READINGS: number
export const CMD_TAKE_READING_ARRAY: number
export const CMD_TAKE_READING_RAW: number
export const CMD_TAKE_READING_SPECTRAL: number
export const CMD_TAKE_READING_XYZ: number
export const CMD_WRITE_EEPROM: number
export const CMD_WRITE_FLASH: number
export const CMD_WRITE_SRAM: number
export const DEVICE_GUID_COLORHUG: string
export const DEVICE_GUID_COLORHUG2: string
export const DEVICE_GUID_COLORHUG_ALS: string
export const DEVICE_GUID_COLORHUG_PLUS: string
export const DEVICE_USB_TIMEOUT: number
export const EEPROM_ADDR_RUNCODE: number
export const EEPROM_ADDR_RUNCODE_ALS: number
export const EP0_TRANSFER_SIZE: number
export const EP0_TRANSFER_SIZE_V2: number
export const FIRMWARE_ID_TOKEN1: string
export const FIRMWARE_ID_TOKEN2: string
export const FIRMWARE_ID_TOKEN_ALS: string
export const FIRMWARE_ID_TOKEN_PLUS: string
export const FLASH_ERASE_BLOCK_SIZE: number
export const FLASH_RECONNECT_TIMEOUT: number
export const FLASH_TRANSFER_BLOCK_SIZE: number
export const FLASH_WRITE_BLOCK_SIZE: number
export const INTEGRAL_TIME_VALUE_100MS: number
export const INTEGRAL_TIME_VALUE_200MS: number
export const INTEGRAL_TIME_VALUE_50MS: number
export const INTEGRAL_TIME_VALUE_5MS: number
export const INTEGRAL_TIME_VALUE_MAX: number
export const OWNER_LENGTH_MAX: number
export const USB_CONFIG: number
export const USB_HID_EP: number
export const USB_HID_EP_IN: number
export const USB_HID_EP_OUT: number
export const USB_HID_EP_SIZE: number
export const USB_INTERFACE: number
export const USB_PID_BOOTLOADER: number
export const USB_PID_BOOTLOADER2: number
export const USB_PID_BOOTLOADER_ALS: number
export const USB_PID_BOOTLOADER_PLUS: number
export const USB_PID_FIRMWARE: number
export const USB_PID_FIRMWARE2: number
export const USB_PID_FIRMWARE_ALS: number
export const USB_PID_FIRMWARE_ALS_SENSOR_HID: number
export const USB_PID_FIRMWARE_PLUS: number
export const USB_PID_LEGACY: number
export const USB_VID: number
export const USB_VID_LEGACY: number
export const WRITE_EEPROM_MAGIC: string
export function color_select_to_string(color_select: ColorSelect): string
export function command_to_string(cmd: Cmd): string
export function device_check_firmware(device: GUsb.Device, data: number, data_len: number): boolean
export function device_close(device: GUsb.Device): boolean
export function device_error_quark(): GLib.Quark
export function device_get_adc_calibration_neg(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function device_get_adc_calibration_pos(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function device_get_ccd_calibration(device: GUsb.Device, nm_start: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
export function device_get_error(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* status */ Error, /* cmd */ Cmd ]
export function device_get_guid(device: GUsb.Device): string
export function device_get_illuminants(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ Illuminant ]
export function device_get_integral_time(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function device_get_leds(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ StatusLed ]
export function device_get_mode(device: GUsb.Device): DeviceMode
export function device_get_pcb_errata(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ PcbErrata ]
export function device_get_runcode_address(device: GUsb.Device): number
export function device_get_serial_number(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function device_get_spectrum(device: GUsb.Device, cancellable?: Gio.Cancellable | null): Colord.Spectrum
export function device_get_spectrum_full(device: GUsb.Device, kind: SpectrumKind, cancellable?: Gio.Cancellable | null): Colord.Spectrum
export function device_get_temperature(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function device_is_colorhug(device: GUsb.Device): boolean
export function device_load_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function device_mode_from_firmware(data: number, data_len: number): DeviceMode
export function device_mode_to_string(device_mode: DeviceMode): string
export function device_open(device: GUsb.Device): boolean
export function device_open_full(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function device_read_sram(device: GUsb.Device, addr: number, len: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
export function device_save_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function device_self_test(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function device_set_ccd_calibration(device: GUsb.Device, nm_start: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
export function device_set_crypto_key(device: GUsb.Device, keys: number, cancellable?: Gio.Cancellable | null): boolean
export function device_set_illuminants(device: GUsb.Device, value: Illuminant, cancellable?: Gio.Cancellable | null): boolean
export function device_set_integral_time(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
export function device_set_leds(device: GUsb.Device, value: StatusLed, cancellable?: Gio.Cancellable | null): boolean
export function device_set_pcb_errata(device: GUsb.Device, value: PcbErrata, cancellable?: Gio.Cancellable | null): boolean
export function device_set_serial_number(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
export function device_set_spectrum_full(device: GUsb.Device, kind: SpectrumKind, sp: Colord.Spectrum, cancellable?: Gio.Cancellable | null): boolean
export function device_take_reading_spectral(device: GUsb.Device, value: SpectrumKind, cancellable?: Gio.Cancellable | null): boolean
export function device_take_reading_xyz(device: GUsb.Device, calibration_idx: number, cancellable?: Gio.Cancellable | null): Colord.ColorXYZ
export function device_write_command(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number, cancellable?: Gio.Cancellable | null): boolean
export function device_write_command_async(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function device_write_command_finish(device: GUsb.Device, res: Gio.AsyncResult): boolean
export function device_write_sram(device: GUsb.Device, addr: number, data: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
export function measure_mode_to_string(measure_mode: MeasureMode): string
export function multiplier_to_string(multiplier: FreqScale): string
export function sha1_parse(value: string, sha1: Sha1): boolean
export function strerror(error_enum: Error): string
export interface DeviceQueue_ConstructProps extends GObject.Object_ConstructProps {
}
export class DeviceQueue {
    /* Fields of ColorHug.DeviceQueue */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ColorHug.DeviceQueue */
    add(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number): void
    boot_flash(device: GUsb.Device): void
    clear_calibration(device: GUsb.Device, calibration_index: number): void
    erase_flash(device: GUsb.Device, address: number, len: number): void
    get_adc_vref_neg(device: GUsb.Device, vref: number): void
    get_adc_vref_pos(device: GUsb.Device, vref: number): void
    get_calibration(device: GUsb.Device, calibration_index: number, calibration: Colord.Mat3x3, types: number, description: string): void
    get_calibration_map(device: GUsb.Device, calibration_map: number): void
    get_ccd_calibration(device: GUsb.Device, indexes: number): void
    get_color_select(device: GUsb.Device, color_select: ColorSelect): void
    get_dac_value(device: GUsb.Device, dac_value: number): void
    get_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void
    get_firmware_ver(device: GUsb.Device, major: number, minor: number, micro: number): void
    get_hardware_version(device: GUsb.Device, hw_version: number): void
    get_integral_time(device: GUsb.Device, integral_time: number): void
    get_leds(device: GUsb.Device, leds: number): void
    get_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void
    get_multiplier(device: GUsb.Device, multiplier: FreqScale): void
    get_owner_email(device: GUsb.Device, email: string): void
    get_owner_name(device: GUsb.Device, name: string): void
    get_pcb_errata(device: GUsb.Device, pcb_errata: number): void
    get_post_scale(device: GUsb.Device, post_scale: number): void
    get_pre_scale(device: GUsb.Device, pre_scale: number): void
    get_remote_hash(device: GUsb.Device, remote_hash: Sha1): void
    get_serial_number(device: GUsb.Device, serial_number: number): void
    get_temperature(device: GUsb.Device, temperature: number): void
    process(process_flags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null): boolean
    process_async(process_flags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    process_finish(res: Gio.AsyncResult): boolean
    read_firmware(device: GUsb.Device, data: number, len: number): void
    read_flash(device: GUsb.Device, address: number, data: number, len: number): void
    read_sram(device: GUsb.Device, address: number, data: number, len: number): void
    reset(device: GUsb.Device): void
    self_test(device: GUsb.Device): void
    set_calibration(device: GUsb.Device, calibration_index: number, calibration: Colord.Mat3x3, types: number, description: string): void
    set_calibration_ccmx(device: GUsb.Device, calibration_index: number, ccmx: Colord.It8): boolean
    set_calibration_map(device: GUsb.Device, calibration_map: number): void
    set_ccd_calibration(device: GUsb.Device, indexes: number): void
    set_color_select(device: GUsb.Device, color_select: ColorSelect): void
    set_dac_value(device: GUsb.Device, dac_value: number): void
    set_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void
    set_flash_success(device: GUsb.Device, value: number): void
    set_integral_time(device: GUsb.Device, integral_time: number): void
    set_leds(device: GUsb.Device, leds: number, repeat: number, on_time: number, off_time: number): void
    set_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void
    set_multiplier(device: GUsb.Device, multiplier: FreqScale): void
    set_owner_email(device: GUsb.Device, email: string): void
    set_owner_name(device: GUsb.Device, name: string): void
    set_pcb_errata(device: GUsb.Device, pcb_errata: number): void
    set_post_scale(device: GUsb.Device, post_scale: number): void
    set_pre_scale(device: GUsb.Device, pre_scale: number): void
    set_remote_hash(device: GUsb.Device, remote_hash: Sha1): void
    set_serial_number(device: GUsb.Device, serial_number: number): void
    take_reading_array(device: GUsb.Device, reading_array: number): void
    take_reading_raw(device: GUsb.Device, take_reading: number): void
    take_reading_spectral(device: GUsb.Device, sram_addr: number): void
    take_readings(device: GUsb.Device, value: Colord.ColorRGB): void
    take_readings_xyz(device: GUsb.Device, calibration_index: number, value: Colord.ColorXYZ): void
    verify_firmware(device: GUsb.Device, data: number, len: number): void
    verify_flash(device: GUsb.Device, address: number, data: number, len: number): void
    write_eeprom(device: GUsb.Device, magic: string): void
    write_firmware(device: GUsb.Device, data: number, len: number): void
    write_flash(device: GUsb.Device, address: number, data: number, len: number): void
    write_sram(device: GUsb.Device, address: number, data: number, len: number): void
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
    /* Virtual methods of ColorHug.DeviceQueue */
    vfunc_device_failed(device: GUsb.Device, error_message: string): void
    vfunc_progress_changed(percentage: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ColorHug.DeviceQueue */
    connect(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    connect_after(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    emit(sigName: "device-failed", object: GObject.Object, p0: string): void
    connect(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    connect_after(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    emit(sigName: "progress-changed", object: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceQueue_ConstructProps)
    _init (config?: DeviceQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceQueue
    static $gtype: GObject.Type
}
export abstract class DeviceQueueClass {
    /* Fields of ColorHug.DeviceQueueClass */
    parent_class: GObject.ObjectClass
    device_failed: (device_queue: DeviceQueue, device: GUsb.Device, error_message: string) => void
    progress_changed: (device_queue: DeviceQueue, percentage: number) => void
    static name: string
}
export class Sha1 {
    /* Fields of ColorHug.Sha1 */
    bytes: Uint8Array[]
    /* Methods of ColorHug.Sha1 */
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(value: string, sha1: Sha1): boolean
}
export type Cmd = number