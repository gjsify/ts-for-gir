/**
 * ColorHug-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GUsb } from './GUsb-1.0';
import type { Colord } from './Colord-1.0';

export declare namespace ColorHug {

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
export function colorSelectToString(colorSelect: ColorSelect): string
export function commandToString(cmd: Cmd): string
export function deviceCheckFirmware(device: GUsb.Device, data: number, dataLen: number): boolean
export function deviceClose(device: GUsb.Device): boolean
export function deviceErrorQuark(): GLib.Quark
export function deviceGetAdcCalibrationNeg(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function deviceGetAdcCalibrationPos(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function deviceGetCcdCalibration(device: GUsb.Device, nmStart: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
export function deviceGetError(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* status */ Error, /* cmd */ Cmd ]
export function deviceGetGuid(device: GUsb.Device): string
export function deviceGetIlluminants(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ Illuminant ]
export function deviceGetIntegralTime(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function deviceGetLeds(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ StatusLed ]
export function deviceGetMode(device: GUsb.Device): DeviceMode
export function deviceGetPcbErrata(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ PcbErrata ]
export function deviceGetRuncodeAddress(device: GUsb.Device): number
export function deviceGetSerialNumber(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function deviceGetSpectrum(device: GUsb.Device, cancellable?: Gio.Cancellable | null): Colord.Spectrum
export function deviceGetSpectrumFull(device: GUsb.Device, kind: SpectrumKind, cancellable?: Gio.Cancellable | null): Colord.Spectrum
export function deviceGetTemperature(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
export function deviceIsColorhug(device: GUsb.Device): boolean
export function deviceLoadSram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function deviceModeFromFirmware(data: number, dataLen: number): DeviceMode
export function deviceModeToString(deviceMode: DeviceMode): string
export function deviceOpen(device: GUsb.Device): boolean
export function deviceOpenFull(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function deviceReadSram(device: GUsb.Device, addr: number, len: number, cancellable?: Gio.Cancellable | null): any
export function deviceSaveSram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function deviceSelfTest(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetCcdCalibration(device: GUsb.Device, nmStart: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetCryptoKey(device: GUsb.Device, keys: number, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetIlluminants(device: GUsb.Device, value: Illuminant, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetIntegralTime(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetLeds(device: GUsb.Device, value: StatusLed, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetPcbErrata(device: GUsb.Device, value: PcbErrata, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetSerialNumber(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
export function deviceSetSpectrumFull(device: GUsb.Device, kind: SpectrumKind, sp: Colord.Spectrum, cancellable?: Gio.Cancellable | null): boolean
export function deviceTakeReadingSpectral(device: GUsb.Device, value: SpectrumKind, cancellable?: Gio.Cancellable | null): boolean
export function deviceTakeReadingXyz(device: GUsb.Device, calibrationIdx: number, cancellable?: Gio.Cancellable | null): Colord.ColorXYZ
export function deviceWriteCommand(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number, cancellable?: Gio.Cancellable | null): boolean
export function deviceWriteCommandAsync(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function deviceWriteCommandFinish(device: GUsb.Device, res: Gio.AsyncResult): boolean
export function deviceWriteSram(device: GUsb.Device, addr: number, data: any, cancellable?: Gio.Cancellable | null): boolean
export function measureModeToString(measureMode: MeasureMode): string
export function multiplierToString(multiplier: FreqScale): string
export function sha1Parse(value: string, sha1: Sha1): boolean
export function strerror(errorEnum: Error): string
export interface DeviceQueue_ConstructProps extends GObject.Object_ConstructProps {
}
export class DeviceQueue {
    /* Fields of ColorHug.DeviceQueue */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ColorHug.DeviceQueue */
    add(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number): void
    bootFlash(device: GUsb.Device): void
    clearCalibration(device: GUsb.Device, calibrationIndex: number): void
    eraseFlash(device: GUsb.Device, address: number, len: number): void
    getAdcVrefNeg(device: GUsb.Device, vref: number): void
    getAdcVrefPos(device: GUsb.Device, vref: number): void
    getCalibration(device: GUsb.Device, calibrationIndex: number, calibration: Colord.Mat3x3, types: number, description: string): void
    getCalibrationMap(device: GUsb.Device, calibrationMap: number): void
    getCcdCalibration(device: GUsb.Device, indexes: number): void
    getColorSelect(device: GUsb.Device, colorSelect: ColorSelect): void
    getDacValue(device: GUsb.Device, dacValue: number): void
    getDarkOffsets(device: GUsb.Device, value: Colord.ColorRGB): void
    getFirmwareVer(device: GUsb.Device, major: number, minor: number, micro: number): void
    getHardwareVersion(device: GUsb.Device, hwVersion: number): void
    getIntegralTime(device: GUsb.Device, integralTime: number): void
    getLeds(device: GUsb.Device, leds: number): void
    getMeasureMode(device: GUsb.Device, measureMode: MeasureMode): void
    getMultiplier(device: GUsb.Device, multiplier: FreqScale): void
    getOwnerEmail(device: GUsb.Device, email: string): void
    getOwnerName(device: GUsb.Device, name: string): void
    getPcbErrata(device: GUsb.Device, pcbErrata: number): void
    getPostScale(device: GUsb.Device, postScale: number): void
    getPreScale(device: GUsb.Device, preScale: number): void
    getRemoteHash(device: GUsb.Device, remoteHash: Sha1): void
    getSerialNumber(device: GUsb.Device, serialNumber: number): void
    getTemperature(device: GUsb.Device, temperature: number): void
    process(processFlags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null): boolean
    processAsync(processFlags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    processFinish(res: Gio.AsyncResult): boolean
    readFirmware(device: GUsb.Device, data: number, len: number): void
    readFlash(device: GUsb.Device, address: number, data: number, len: number): void
    readSram(device: GUsb.Device, address: number, data: number, len: number): void
    reset(device: GUsb.Device): void
    selfTest(device: GUsb.Device): void
    setCalibration(device: GUsb.Device, calibrationIndex: number, calibration: Colord.Mat3x3, types: number, description: string): void
    setCalibrationCcmx(device: GUsb.Device, calibrationIndex: number, ccmx: Colord.It8): boolean
    setCalibrationMap(device: GUsb.Device, calibrationMap: number): void
    setCcdCalibration(device: GUsb.Device, indexes: number): void
    setColorSelect(device: GUsb.Device, colorSelect: ColorSelect): void
    setDacValue(device: GUsb.Device, dacValue: number): void
    setDarkOffsets(device: GUsb.Device, value: Colord.ColorRGB): void
    setFlashSuccess(device: GUsb.Device, value: number): void
    setIntegralTime(device: GUsb.Device, integralTime: number): void
    setLeds(device: GUsb.Device, leds: number, repeat: number, onTime: number, offTime: number): void
    setMeasureMode(device: GUsb.Device, measureMode: MeasureMode): void
    setMultiplier(device: GUsb.Device, multiplier: FreqScale): void
    setOwnerEmail(device: GUsb.Device, email: string): void
    setOwnerName(device: GUsb.Device, name: string): void
    setPcbErrata(device: GUsb.Device, pcbErrata: number): void
    setPostScale(device: GUsb.Device, postScale: number): void
    setPreScale(device: GUsb.Device, preScale: number): void
    setRemoteHash(device: GUsb.Device, remoteHash: Sha1): void
    setSerialNumber(device: GUsb.Device, serialNumber: number): void
    takeReadingArray(device: GUsb.Device, readingArray: number): void
    takeReadingRaw(device: GUsb.Device, takeReading: number): void
    takeReadingSpectral(device: GUsb.Device, sramAddr: number): void
    takeReadings(device: GUsb.Device, value: Colord.ColorRGB): void
    takeReadingsXyz(device: GUsb.Device, calibrationIndex: number, value: Colord.ColorXYZ): void
    verifyFirmware(device: GUsb.Device, data: number, len: number): void
    verifyFlash(device: GUsb.Device, address: number, data: number, len: number): void
    writeEeprom(device: GUsb.Device, magic: string): void
    writeFirmware(device: GUsb.Device, data: number, len: number): void
    writeFlash(device: GUsb.Device, address: number, data: number, len: number): void
    writeSram(device: GUsb.Device, address: number, data: number, len: number): void
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
    /* Virtual methods of ColorHug.DeviceQueue */
    vfuncDeviceFailed(device: GUsb.Device, errorMessage: string): void
    vfuncProgressChanged(percentage: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of ColorHug.DeviceQueue */
    connect(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    connect_after(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    emit(sigName: "device-failed", object: GObject.Object, p0: string): void
    on(sigName: "device-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    connect_after(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    emit(sigName: "progress-changed", object: number): void
    on(sigName: "progress-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DeviceQueue_ConstructProps)
    _init (config?: DeviceQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceQueue
    static $gtype: GObject.Type
}
export abstract class DeviceQueueClass {
    /* Fields of ColorHug.DeviceQueueClass */
    parentClass: GObject.ObjectClass
    deviceFailed: (deviceQueue: DeviceQueue, device: GUsb.Device, errorMessage: string) => void
    progressChanged: (deviceQueue: DeviceQueue, percentage: number) => void
    static name: string
}
export class Sha1 {
    /* Fields of ColorHug.Sha1 */
    bytes: any
    /* Methods of ColorHug.Sha1 */
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(value: string, sha1: Sha1): boolean
}
export type Cmd = number
}