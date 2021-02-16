/**
 * UDisks-2.0
 */

/// <reference types="node" />
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace UDisks {

export enum Error {
    FAILED,
    CANCELLED,
    ALREADY_CANCELLED,
    NOT_AUTHORIZED,
    NOT_AUTHORIZED_CAN_OBTAIN,
    NOT_AUTHORIZED_DISMISSED,
    ALREADY_MOUNTED,
    NOT_MOUNTED,
    OPTION_NOT_PERMITTED,
    MOUNTED_BY_OTHER_USER,
    ALREADY_UNMOUNTING,
    NOT_SUPPORTED,
    TIMED_OUT,
    WOULD_WAKEUP,
    DEVICE_BUSY,
    ISCSI_DAEMON_TRANSPORT_FAILED,
    ISCSI_HOST_NOT_FOUND,
    ISCSI_IDMB,
    ISCSI_LOGIN_FAILED,
    ISCSI_LOGIN_AUTH_FAILED,
    ISCSI_LOGIN_FATAL,
    ISCSI_LOGOUT_FAILED,
    ISCSI_NO_FIRMWARE,
    ISCSI_NO_OBJECTS_FOUND,
    ISCSI_NOT_CONNECTED,
    ISCSI_TRANSPORT_FAILED,
    ISCSI_UNKNOWN_DISCOVERY_TYPE,
}
export enum PartitionTypeInfoFlags {
    NONE,
    SWAP,
    RAID,
    HIDDEN,
    CREATE_ONLY,
    SYSTEM,
}
export const ERROR_NUM_ENTRIES: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function blockInterfaceInfo(): Gio.DBusInterfaceInfo
export function blockOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function driveAtaInterfaceInfo(): Gio.DBusInterfaceInfo
export function driveAtaOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function driveInterfaceInfo(): Gio.DBusInterfaceInfo
export function driveOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function encryptedInterfaceInfo(): Gio.DBusInterfaceInfo
export function encryptedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function errorQuark(): GLib.Quark
export function filesystemInterfaceInfo(): Gio.DBusInterfaceInfo
export function filesystemOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function jobInterfaceInfo(): Gio.DBusInterfaceInfo
export function jobOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function loopInterfaceInfo(): Gio.DBusInterfaceInfo
export function loopOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function managerInterfaceInfo(): Gio.DBusInterfaceInfo
export function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function mdraidInterfaceInfo(): Gio.DBusInterfaceInfo
export function mdraidOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function partitionInterfaceInfo(): Gio.DBusInterfaceInfo
export function partitionOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function partitionTableInterfaceInfo(): Gio.DBusInterfaceInfo
export function partitionTableOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function swapspaceInterfaceInfo(): Gio.DBusInterfaceInfo
export function swapspaceOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export class Block {
    /* Properties of UDisks.Block */
    configuration: GLib.Variant
    cryptoBackingDevice: string
    device: string
    deviceNumber: number
    drive: string
    hintAuto: boolean
    hintIconName: string
    hintIgnore: boolean
    hintName: string
    hintPartitionable: boolean
    hintSymbolicIconName: string
    hintSystem: boolean
    id: string
    idLabel: string
    idType: string
    idUsage: string
    idUuid: string
    idVersion: string
    mdraid: string
    mdraidMember: string
    preferredDevice: string
    readOnly: boolean
    size: number
    symlinks: string[]
    /* Methods of UDisks.Block */
    callAddConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callAddConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callFormat(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFormatFinish(res: Gio.AsyncResult): boolean
    callFormatSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callGetSecretConfiguration(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetSecretConfigurationFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    callGetSecretConfigurationSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    callOpenForBackup(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForBackupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBackupSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBenchmark(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForBenchmarkFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBenchmarkSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForRestore(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForRestoreFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForRestoreSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callRemoveConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callRemoveConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRescan(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRescanFinish(res: Gio.AsyncResult): boolean
    callRescanSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUpdateConfigurationItem(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUpdateConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callUpdateConfigurationItemSync(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeAddConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    completeFormat(invocation: Gio.DBusMethodInvocation): void
    completeGetSecretConfiguration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    completeOpenForBackup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeOpenForBenchmark(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeOpenForRestore(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeRemoveConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    completeRescan(invocation: Gio.DBusMethodInvocation): void
    completeUpdateConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.Block */
    vfuncHandleAddConfigurationItem(invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleFormat(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    vfuncHandleGetSecretConfiguration(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForBackup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForBenchmark(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForRestore(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleRemoveConfigurationItem(invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleRescan(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleUpdateConfigurationItem(invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Block */
    connect(sigName: "handle-add-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-configuration-item", invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-format", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-format", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-format", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-secret-configuration", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-get-secret-configuration", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-get-secret-configuration", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-backup", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-backup", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-backup", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-benchmark", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-benchmark", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-benchmark", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-restore", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-restore", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-restore", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-configuration-item", invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-rescan", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-rescan", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-rescan", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-update-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-update-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-update-configuration-item", invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Drive {
    /* Properties of UDisks.Drive */
    canPowerOff: boolean
    configuration: GLib.Variant
    connectionBus: string
    ejectable: boolean
    id: string
    media: string
    mediaAvailable: boolean
    mediaChangeDetected: boolean
    mediaCompatibility: string[]
    mediaRemovable: boolean
    model: string
    optical: boolean
    opticalBlank: boolean
    opticalNumAudioTracks: number
    opticalNumDataTracks: number
    opticalNumSessions: number
    opticalNumTracks: number
    removable: boolean
    revision: string
    rotationRate: number
    seat: string
    serial: string
    siblingId: string
    size: number
    sortKey: string
    timeDetected: number
    timeMediaDetected: number
    vendor: string
    wwn: string
    /* Methods of UDisks.Drive */
    callEject(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEjectFinish(res: Gio.AsyncResult): boolean
    callEjectSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callPowerOff(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPowerOffFinish(res: Gio.AsyncResult): boolean
    callPowerOffSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetConfiguration(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetConfigurationFinish(res: Gio.AsyncResult): boolean
    callSetConfigurationSync(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeEject(invocation: Gio.DBusMethodInvocation): void
    completePowerOff(invocation: Gio.DBusMethodInvocation): void
    completeSetConfiguration(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.Drive */
    vfuncHandleEject(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePowerOff(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetConfiguration(invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Drive */
    connect(sigName: "handle-eject", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-eject", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-eject", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-power-off", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-power-off", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-power-off", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-configuration", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-configuration", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-configuration", invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class DriveAta {
    /* Properties of UDisks.DriveAta */
    aamEnabled: boolean
    aamSupported: boolean
    aamVendorRecommendedValue: number
    apmEnabled: boolean
    apmSupported: boolean
    pmEnabled: boolean
    pmSupported: boolean
    readLookaheadEnabled: boolean
    readLookaheadSupported: boolean
    securityEnhancedEraseUnitMinutes: number
    securityEraseUnitMinutes: number
    securityFrozen: boolean
    smartEnabled: boolean
    smartFailing: boolean
    smartNumAttributesFailedInThePast: number
    smartNumAttributesFailing: number
    smartNumBadSectors: number
    smartPowerOnSeconds: number
    smartSelftestPercentRemaining: number
    smartSelftestStatus: string
    smartSupported: boolean
    smartTemperature: number
    smartUpdated: number
    writeCacheEnabled: boolean
    writeCacheSupported: boolean
    /* Methods of UDisks.DriveAta */
    callPmGetState(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmGetStateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outState */ number ]
    callPmGetStateSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outState */ number ]
    callPmStandby(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmStandbyFinish(res: Gio.AsyncResult): boolean
    callPmStandbySync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callPmWakeup(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmWakeupFinish(res: Gio.AsyncResult): boolean
    callPmWakeupSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSecurityEraseUnit(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecurityEraseUnitFinish(res: Gio.AsyncResult): boolean
    callSecurityEraseUnitSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartGetAttributes(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartGetAttributesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    callSmartGetAttributesSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    callSmartSelftestAbort(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSelftestAbortFinish(res: Gio.AsyncResult): boolean
    callSmartSelftestAbortSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartSelftestStart(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSelftestStartFinish(res: Gio.AsyncResult): boolean
    callSmartSelftestStartSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartSetEnabled(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSetEnabledFinish(res: Gio.AsyncResult): boolean
    callSmartSetEnabledSync(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartUpdate(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartUpdateFinish(res: Gio.AsyncResult): boolean
    callSmartUpdateSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completePmGetState(invocation: Gio.DBusMethodInvocation, state: number): void
    completePmStandby(invocation: Gio.DBusMethodInvocation): void
    completePmWakeup(invocation: Gio.DBusMethodInvocation): void
    completeSecurityEraseUnit(invocation: Gio.DBusMethodInvocation): void
    completeSmartGetAttributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    completeSmartSelftestAbort(invocation: Gio.DBusMethodInvocation): void
    completeSmartSelftestStart(invocation: Gio.DBusMethodInvocation): void
    completeSmartSetEnabled(invocation: Gio.DBusMethodInvocation): void
    completeSmartUpdate(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.DriveAta */
    vfuncHandlePmGetState(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePmStandby(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePmWakeup(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSecurityEraseUnit(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartGetAttributes(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSelftestAbort(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSelftestStart(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSetEnabled(invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
    vfuncHandleSmartUpdate(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.DriveAta */
    connect(sigName: "handle-pm-get-state", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-get-state", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-get-state", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-pm-standby", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-standby", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-standby", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-pm-wakeup", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-wakeup", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-wakeup", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-security-erase-unit", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-security-erase-unit", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-security-erase-unit", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-get-attributes", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-abort", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-start", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-set-enabled", invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-update", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-update", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-update", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Encrypted {
    /* Properties of UDisks.Encrypted */
    childConfiguration: GLib.Variant
    /* Methods of UDisks.Encrypted */
    callChangePassphrase(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChangePassphraseFinish(res: Gio.AsyncResult): boolean
    callChangePassphraseSync(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callLock(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callLockFinish(res: Gio.AsyncResult): boolean
    callLockSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUnlock(argPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUnlockFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    callUnlockSync(argPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    completeChangePassphrase(invocation: Gio.DBusMethodInvocation): void
    completeLock(invocation: Gio.DBusMethodInvocation): void
    completeUnlock(invocation: Gio.DBusMethodInvocation, cleartextDevice: string): void
    /* Virtual methods of UDisks.Encrypted */
    vfuncHandleChangePassphrase(invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant): boolean
    vfuncHandleLock(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleUnlock(invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Encrypted */
    connect(sigName: "handle-change-passphrase", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-change-passphrase", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-change-passphrase", invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant): void
    on(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-lock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-lock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-unlock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unlock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant): void
    on(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Filesystem {
    /* Properties of UDisks.Filesystem */
    mountPoints: string[]
    /* Methods of UDisks.Filesystem */
    callMount(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callMountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outMountPath */ string ]
    callMountSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outMountPath */ string ]
    callSetLabel(argLabel: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetLabelFinish(res: Gio.AsyncResult): boolean
    callSetLabelSync(argLabel: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUnmount(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUnmountFinish(res: Gio.AsyncResult): boolean
    callUnmountSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeMount(invocation: Gio.DBusMethodInvocation, mountPath: string): void
    completeSetLabel(invocation: Gio.DBusMethodInvocation): void
    completeUnmount(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.Filesystem */
    vfuncHandleMount(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetLabel(invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant): boolean
    vfuncHandleUnmount(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Filesystem */
    connect(sigName: "handle-mount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mount", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-label", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-label", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-label", invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-unmount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unmount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unmount", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Job {
    /* Properties of UDisks.Job */
    bytes: number
    cancelable: boolean
    expectedEndTime: number
    objects: string[]
    operation: string
    progress: number
    progressValid: boolean
    rate: number
    startTime: number
    startedByUid: number
    /* Methods of UDisks.Job */
    callCancel(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    emitCompleted(argSuccess: boolean, argMessage: string): void
    /* Virtual methods of UDisks.Job */
    vfuncCompleted(argSuccess: boolean, argMessage: string): void
    vfuncHandleCancel(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Job */
    connect(sigName: "completed", callback: (($obj: Job, argSuccess: boolean, argMessage: string) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Job, argSuccess: boolean, argMessage: string) => void)): number
    emit(sigName: "completed", argSuccess: boolean, argMessage: string): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-cancel", callback: (($obj: Job, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: Job, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Loop {
    /* Properties of UDisks.Loop */
    autoclear: boolean
    backingFile: string
    setupByUid: number
    /* Methods of UDisks.Loop */
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetAutoclear(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetAutoclearFinish(res: Gio.AsyncResult): boolean
    callSetAutoclearSync(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeSetAutoclear(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.Loop */
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetAutoclear(invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Loop */
    connect(sigName: "handle-delete", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-autoclear", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-autoclear", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-autoclear", invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): void
    on(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class MDRaid {
    /* Properties of UDisks.MDRaid */
    activeDevices: GLib.Variant
    bitmapLocation: string
    childConfiguration: GLib.Variant
    chunkSize: number
    degraded: number
    level: string
    name: string
    numDevices: number
    running: boolean
    size: number
    syncAction: string
    syncCompleted: number
    syncRate: number
    syncRemainingTime: number
    uuid: string
    /* Methods of UDisks.MDRaid */
    callAddDevice(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddDeviceFinish(res: Gio.AsyncResult): boolean
    callAddDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRemoveDevice(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveDeviceFinish(res: Gio.AsyncResult): boolean
    callRemoveDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRequestSyncAction(argSyncAction: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRequestSyncActionFinish(res: Gio.AsyncResult): boolean
    callRequestSyncActionSync(argSyncAction: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetBitmapLocation(argValue: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetBitmapLocationFinish(res: Gio.AsyncResult): boolean
    callSetBitmapLocationSync(argValue: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStart(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStop(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeAddDevice(invocation: Gio.DBusMethodInvocation): void
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeRemoveDevice(invocation: Gio.DBusMethodInvocation): void
    completeRequestSyncAction(invocation: Gio.DBusMethodInvocation): void
    completeSetBitmapLocation(invocation: Gio.DBusMethodInvocation): void
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.MDRaid */
    vfuncHandleAddDevice(invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleRemoveDevice(invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
    vfuncHandleRequestSyncAction(invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant): boolean
    vfuncHandleSetBitmapLocation(invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant): boolean
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.MDRaid */
    connect(sigName: "handle-add-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-device", invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): void
    on(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-delete", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-device", invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): void
    on(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-request-sync-action", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-request-sync-action", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-request-sync-action", invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant): void
    on(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-bitmap-location", invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-start", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Manager {
    /* Properties of UDisks.Manager */
    supportedFilesystems: string[]
    version: string
    /* Methods of UDisks.Manager */
    callEnableModules(argEnable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableModulesFinish(res: Gio.AsyncResult): boolean
    callEnableModulesSync(argEnable: boolean, cancellable?: Gio.Cancellable | null): boolean
    callLoopSetup(argFd: GLib.Variant, argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callLoopSetupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    callLoopSetupSync(argFd: GLib.Variant, argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    callMdraidCreate(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callMdraidCreateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingArray */ string ]
    callMdraidCreateSync(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingArray */ string ]
    completeEnableModules(invocation: Gio.DBusMethodInvocation): void
    completeLoopSetup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, resultingDevice: string): void
    completeMdraidCreate(invocation: Gio.DBusMethodInvocation, resultingArray: string): void
    /* Virtual methods of UDisks.Manager */
    vfuncHandleEnableModules(invocation: Gio.DBusMethodInvocation, argEnable: boolean): boolean
    vfuncHandleLoopSetup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argFd: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleMdraidCreate(invocation: Gio.DBusMethodInvocation, argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Manager */
    connect(sigName: "handle-enable-modules", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-modules", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean)): number
    emit(sigName: "handle-enable-modules", invocation: Gio.DBusMethodInvocation, argEnable: boolean): void
    on(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-loop-setup", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-loop-setup", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-loop-setup", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-mdraid-create", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mdraid-create", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mdraid-create", invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant): void
    on(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Object {
    /* Properties of UDisks.Object */
    block: Block
    drive: Drive
    driveAta: DriveAta
    encrypted: Encrypted
    filesystem: Filesystem
    job: Job
    loop: Loop
    manager: Manager
    mdraid: MDRaid
    partition: Partition
    partitionTable: PartitionTable
    swapspace: Swapspace
    /* Methods of UDisks.Object */
    getBlock(): Block
    getDrive(): Drive
    getDriveAta(): DriveAta
    getEncrypted(): Encrypted
    getFilesystem(): Filesystem
    getJob(): Job
    getLoop(): Loop
    getManager(): Manager
    getMdraid(): MDRaid
    getPartition(): Partition
    getPartitionTable(): PartitionTable
    getSwapspace(): Swapspace
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Virtual methods of Gio.DBusObject */
    vfuncGetInterface(interfaceName: string): Gio.DBusInterface | null
    vfuncGetInterfaces(): Gio.DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(interface: Gio.DBusInterface): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
}
export class Partition {
    /* Properties of UDisks.Partition */
    flags: number
    isContained: boolean
    isContainer: boolean
    name: string
    number: number
    offset: number
    size: number
    table: string
    type: string
    uuid: string
    /* Methods of UDisks.Partition */
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetFlags(argFlags: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetFlagsFinish(res: Gio.AsyncResult): boolean
    callSetFlagsSync(argFlags: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetName(argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetNameFinish(res: Gio.AsyncResult): boolean
    callSetNameSync(argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetType(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetTypeFinish(res: Gio.AsyncResult): boolean
    callSetTypeSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeSetFlags(invocation: Gio.DBusMethodInvocation): void
    completeSetName(invocation: Gio.DBusMethodInvocation): void
    completeSetType(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.Partition */
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetFlags(invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant): boolean
    vfuncHandleSetName(invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant): boolean
    vfuncHandleSetType(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Partition */
    connect(sigName: "handle-delete", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-flags", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-flags", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-flags", invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant): void
    on(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-name", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-name", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-name", invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-type", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-type", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-type", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class PartitionTable {
    /* Properties of UDisks.PartitionTable */
    type: string
    /* Methods of UDisks.PartitionTable */
    callCreatePartition(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreatePartitionAndFormat(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreatePartitionAndFormatFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionAndFormatSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    completeCreatePartition(invocation: Gio.DBusMethodInvocation, createdPartition: string): void
    completeCreatePartitionAndFormat(invocation: Gio.DBusMethodInvocation, createdPartition: string): void
    /* Virtual methods of UDisks.PartitionTable */
    vfuncHandleCreatePartition(invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant): boolean
    vfuncHandleCreatePartitionAndFormat(invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant): boolean
    /* Signals of UDisks.PartitionTable */
    connect(sigName: "handle-create-partition", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition", invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant): void
    on(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition-and-format", invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant): void
    on(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Swapspace {
    /* Properties of UDisks.Swapspace */
    active: boolean
    /* Methods of UDisks.Swapspace */
    callStart(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStop(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.Swapspace */
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Signals of UDisks.Swapspace */
    connect(sigName: "handle-start", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export interface BlockProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    configuration?: GLib.Variant
    cryptoBackingDevice?: string
    device?: string
    deviceNumber?: number
    drive?: string
    hintAuto?: boolean
    hintIconName?: string
    hintIgnore?: boolean
    hintName?: string
    hintPartitionable?: boolean
    hintSymbolicIconName?: string
    hintSystem?: boolean
    id?: string
    idLabel?: string
    idType?: string
    idUsage?: string
    idUuid?: string
    idVersion?: string
    mdraid?: string
    mdraidMember?: string
    preferredDevice?: string
    readOnly?: boolean
    size?: number
    symlinks?: string[]
}
export class BlockProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Block */
    configuration: GLib.Variant
    cryptoBackingDevice: string
    device: string
    deviceNumber: number
    drive: string
    hintAuto: boolean
    hintIconName: string
    hintIgnore: boolean
    hintName: string
    hintPartitionable: boolean
    hintSymbolicIconName: string
    hintSystem: boolean
    id: string
    idLabel: string
    idType: string
    idUsage: string
    idUuid: string
    idVersion: string
    mdraid: string
    mdraidMember: string
    preferredDevice: string
    readOnly: boolean
    size: number
    symlinks: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Block */
    callAddConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callAddConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callFormat(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFormatFinish(res: Gio.AsyncResult): boolean
    callFormatSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callGetSecretConfiguration(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetSecretConfigurationFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    callGetSecretConfigurationSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    callOpenForBackup(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForBackupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBackupSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBenchmark(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForBenchmarkFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBenchmarkSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForRestore(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForRestoreFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForRestoreSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callRemoveConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callRemoveConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRescan(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRescanFinish(res: Gio.AsyncResult): boolean
    callRescanSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUpdateConfigurationItem(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUpdateConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callUpdateConfigurationItemSync(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeAddConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    completeFormat(invocation: Gio.DBusMethodInvocation): void
    completeGetSecretConfiguration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    completeOpenForBackup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeOpenForBenchmark(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeOpenForRestore(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeRemoveConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    completeRescan(invocation: Gio.DBusMethodInvocation): void
    completeUpdateConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.BlockProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleAddConfigurationItem(invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleFormat(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    vfuncHandleGetSecretConfiguration(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForBackup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForBenchmark(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForRestore(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleRemoveConfigurationItem(invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleRescan(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleUpdateConfigurationItem(invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: BlockProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: BlockProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: BlockProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: BlockProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Block */
    connect(sigName: "handle-add-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-configuration-item", invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-format", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-format", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-format", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-secret-configuration", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-get-secret-configuration", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-get-secret-configuration", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-backup", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-backup", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-backup", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-benchmark", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-benchmark", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-benchmark", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-restore", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-restore", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-restore", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-configuration-item", invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-rescan", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-rescan", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-rescan", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-update-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-update-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-update-configuration-item", invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::configuration", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::crypto-backing-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crypto-backing-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-number", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-number", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drive", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-auto", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-auto", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-ignore", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-ignore", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-partitionable", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-partitionable", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-system", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-system", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-label", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-label", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-usage", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-usage", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-uuid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-uuid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-version", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-version", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mdraid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mdraid-member", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid-member", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preferred-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::symlinks", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symlinks", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BlockProxy_ConstructProps)
    _init (config?: BlockProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): BlockProxy
    static newForBusFinish(res: Gio.AsyncResult): BlockProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface BlockSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    configuration?: GLib.Variant
    cryptoBackingDevice?: string
    device?: string
    deviceNumber?: number
    drive?: string
    hintAuto?: boolean
    hintIconName?: string
    hintIgnore?: boolean
    hintName?: string
    hintPartitionable?: boolean
    hintSymbolicIconName?: string
    hintSystem?: boolean
    id?: string
    idLabel?: string
    idType?: string
    idUsage?: string
    idUuid?: string
    idVersion?: string
    mdraid?: string
    mdraidMember?: string
    preferredDevice?: string
    readOnly?: boolean
    size?: number
    symlinks?: string[]
}
export class BlockSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Block */
    configuration: GLib.Variant
    cryptoBackingDevice: string
    device: string
    deviceNumber: number
    drive: string
    hintAuto: boolean
    hintIconName: string
    hintIgnore: boolean
    hintName: string
    hintPartitionable: boolean
    hintSymbolicIconName: string
    hintSystem: boolean
    id: string
    idLabel: string
    idType: string
    idUsage: string
    idUuid: string
    idVersion: string
    mdraid: string
    mdraidMember: string
    preferredDevice: string
    readOnly: boolean
    size: number
    symlinks: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Block */
    callAddConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callAddConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callFormat(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFormatFinish(res: Gio.AsyncResult): boolean
    callFormatSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callGetSecretConfiguration(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetSecretConfigurationFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    callGetSecretConfigurationSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    callOpenForBackup(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForBackupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBackupSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBenchmark(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForBenchmarkFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForBenchmarkSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForRestore(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenForRestoreFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callOpenForRestoreSync(argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    callRemoveConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callRemoveConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRescan(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRescanFinish(res: Gio.AsyncResult): boolean
    callRescanSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUpdateConfigurationItem(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUpdateConfigurationItemFinish(res: Gio.AsyncResult): boolean
    callUpdateConfigurationItemSync(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeAddConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    completeFormat(invocation: Gio.DBusMethodInvocation): void
    completeGetSecretConfiguration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    completeOpenForBackup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeOpenForBenchmark(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeOpenForRestore(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    completeRemoveConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    completeRescan(invocation: Gio.DBusMethodInvocation): void
    completeUpdateConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.BlockSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleAddConfigurationItem(invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleFormat(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    vfuncHandleGetSecretConfiguration(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForBackup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForBenchmark(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleOpenForRestore(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant): boolean
    vfuncHandleRemoveConfigurationItem(invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleRescan(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleUpdateConfigurationItem(invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Block */
    connect(sigName: "handle-add-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-configuration-item", invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-format", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-format", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-format", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-secret-configuration", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-get-secret-configuration", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-get-secret-configuration", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-secret-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-backup", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-backup", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-backup", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-benchmark", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-benchmark", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-benchmark", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-benchmark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-for-restore", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-restore", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-restore", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): void
    on(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-for-restore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-configuration-item", invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-rescan", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-rescan", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-rescan", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-rescan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-update-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-update-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-update-configuration-item", invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-update-configuration-item", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::configuration", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::crypto-backing-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crypto-backing-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-number", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-number", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drive", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-auto", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-auto", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-ignore", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-ignore", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-partitionable", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-partitionable", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-system", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-system", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-label", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-label", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-type", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-type", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-usage", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-usage", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-uuid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-uuid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-version", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-version", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mdraid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mdraid-member", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid-member", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preferred-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::symlinks", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symlinks", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BlockSkeleton_ConstructProps)
    _init (config?: BlockSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BlockSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Properties of UDisks.Client */
    readonly manager: Manager
    readonly objectManager: Gio.DBusObjectManager
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UDisks.Client */
    getAllBlocksForMdraid(raid: MDRaid): Block[]
    getBlockForDev(blockDeviceNumber: number): Block
    getBlockForDrive(drive: Drive, getPhysical: boolean): Block
    getBlockForLabel(label: string): Block[]
    getBlockForMdraid(raid: MDRaid): Block
    getBlockForUuid(uuid: string): Block[]
    getCleartextBlock(block: Block): Block
    getDriveForBlock(block: Block): Drive
    getDriveInfo(drive: Drive): [ /* outName */ string | null, /* outDescription */ string | null, /* outDriveIcon */ Gio.Icon | null, /* outMediaDescription */ string | null, /* outMediaIcon */ Gio.Icon | null ]
    getDriveSiblings(drive: Drive): Drive[]
    getIdForDisplay(usage: string, type: string, version: string, longString: boolean): string
    getJobDescription(job: Job): string
    getJobsForObject(object: Object): Job[]
    getLoopForBlock(block: Block): Loop
    getManager(): Manager
    getMdraidForBlock(block: Block): MDRaid
    getMediaCompatForDisplay(mediaCompat: string): string
    getMembersForMdraid(raid: MDRaid): Block[]
    getObject(objectPath: string): Object
    getObjectInfo(object: Object): ObjectInfo
    getObjectManager(): Gio.DBusObjectManager
    getPartitionInfo(partition: Partition): string
    getPartitionTable(partition: Partition): PartitionTable
    getPartitionTableSubtypeForDisplay(partitionTableType: string, partitionTableSubtype: string): string
    getPartitionTableSubtypes(partitionTableType: string): string[]
    getPartitionTableTypeForDisplay(partitionTableType: string): string
    getPartitionTypeAndSubtypeForDisplay(partitionTableType: string, partitionTableSubtype: string, partitionType: string): string
    getPartitionTypeForDisplay(partitionTableType: string, partitionType: string): string
    getPartitionTypeInfos(partitionTableType: string, partitionTableSubtype?: string | null): PartitionTypeInfo[]
    getPartitions(table: PartitionTable): Partition[]
    getSizeForDisplay(size: number, usePow2: boolean, longString: boolean): string
    peekObject(objectPath: string): Object
    queueChanged(): void
    settle(): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of UDisks.Client */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of UDisks.Client */
    connect(sigName: "changed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Client) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newFinish(res: Gio.AsyncResult): Client
    static newSync(cancellable?: Gio.Cancellable | null): Client
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DriveAtaProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    aamEnabled?: boolean
    aamSupported?: boolean
    aamVendorRecommendedValue?: number
    apmEnabled?: boolean
    apmSupported?: boolean
    pmEnabled?: boolean
    pmSupported?: boolean
    readLookaheadEnabled?: boolean
    readLookaheadSupported?: boolean
    securityEnhancedEraseUnitMinutes?: number
    securityEraseUnitMinutes?: number
    securityFrozen?: boolean
    smartEnabled?: boolean
    smartFailing?: boolean
    smartNumAttributesFailedInThePast?: number
    smartNumAttributesFailing?: number
    smartNumBadSectors?: number
    smartPowerOnSeconds?: number
    smartSelftestPercentRemaining?: number
    smartSelftestStatus?: string
    smartSupported?: boolean
    smartTemperature?: number
    smartUpdated?: number
    writeCacheEnabled?: boolean
    writeCacheSupported?: boolean
}
export class DriveAtaProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.DriveAta */
    aamEnabled: boolean
    aamSupported: boolean
    aamVendorRecommendedValue: number
    apmEnabled: boolean
    apmSupported: boolean
    pmEnabled: boolean
    pmSupported: boolean
    readLookaheadEnabled: boolean
    readLookaheadSupported: boolean
    securityEnhancedEraseUnitMinutes: number
    securityEraseUnitMinutes: number
    securityFrozen: boolean
    smartEnabled: boolean
    smartFailing: boolean
    smartNumAttributesFailedInThePast: number
    smartNumAttributesFailing: number
    smartNumBadSectors: number
    smartPowerOnSeconds: number
    smartSelftestPercentRemaining: number
    smartSelftestStatus: string
    smartSupported: boolean
    smartTemperature: number
    smartUpdated: number
    writeCacheEnabled: boolean
    writeCacheSupported: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.DriveAta */
    callPmGetState(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmGetStateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outState */ number ]
    callPmGetStateSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outState */ number ]
    callPmStandby(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmStandbyFinish(res: Gio.AsyncResult): boolean
    callPmStandbySync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callPmWakeup(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmWakeupFinish(res: Gio.AsyncResult): boolean
    callPmWakeupSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSecurityEraseUnit(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecurityEraseUnitFinish(res: Gio.AsyncResult): boolean
    callSecurityEraseUnitSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartGetAttributes(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartGetAttributesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    callSmartGetAttributesSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    callSmartSelftestAbort(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSelftestAbortFinish(res: Gio.AsyncResult): boolean
    callSmartSelftestAbortSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartSelftestStart(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSelftestStartFinish(res: Gio.AsyncResult): boolean
    callSmartSelftestStartSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartSetEnabled(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSetEnabledFinish(res: Gio.AsyncResult): boolean
    callSmartSetEnabledSync(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartUpdate(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartUpdateFinish(res: Gio.AsyncResult): boolean
    callSmartUpdateSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completePmGetState(invocation: Gio.DBusMethodInvocation, state: number): void
    completePmStandby(invocation: Gio.DBusMethodInvocation): void
    completePmWakeup(invocation: Gio.DBusMethodInvocation): void
    completeSecurityEraseUnit(invocation: Gio.DBusMethodInvocation): void
    completeSmartGetAttributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    completeSmartSelftestAbort(invocation: Gio.DBusMethodInvocation): void
    completeSmartSelftestStart(invocation: Gio.DBusMethodInvocation): void
    completeSmartSetEnabled(invocation: Gio.DBusMethodInvocation): void
    completeSmartUpdate(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.DriveAtaProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandlePmGetState(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePmStandby(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePmWakeup(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSecurityEraseUnit(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartGetAttributes(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSelftestAbort(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSelftestStart(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSetEnabled(invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
    vfuncHandleSmartUpdate(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DriveAtaProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DriveAtaProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: DriveAtaProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DriveAtaProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.DriveAta */
    connect(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-get-state", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-pm-standby", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-standby", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-standby", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-wakeup", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-security-erase-unit", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-get-attributes", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-abort", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-start", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-set-enabled", invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-update", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-update", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-update", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aam-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security-frozen", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-frozen", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-updated", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-updated", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DriveAtaProxy_ConstructProps)
    _init (config?: DriveAtaProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DriveAtaProxy
    static newForBusFinish(res: Gio.AsyncResult): DriveAtaProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface DriveAtaSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    aamEnabled?: boolean
    aamSupported?: boolean
    aamVendorRecommendedValue?: number
    apmEnabled?: boolean
    apmSupported?: boolean
    pmEnabled?: boolean
    pmSupported?: boolean
    readLookaheadEnabled?: boolean
    readLookaheadSupported?: boolean
    securityEnhancedEraseUnitMinutes?: number
    securityEraseUnitMinutes?: number
    securityFrozen?: boolean
    smartEnabled?: boolean
    smartFailing?: boolean
    smartNumAttributesFailedInThePast?: number
    smartNumAttributesFailing?: number
    smartNumBadSectors?: number
    smartPowerOnSeconds?: number
    smartSelftestPercentRemaining?: number
    smartSelftestStatus?: string
    smartSupported?: boolean
    smartTemperature?: number
    smartUpdated?: number
    writeCacheEnabled?: boolean
    writeCacheSupported?: boolean
}
export class DriveAtaSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.DriveAta */
    aamEnabled: boolean
    aamSupported: boolean
    aamVendorRecommendedValue: number
    apmEnabled: boolean
    apmSupported: boolean
    pmEnabled: boolean
    pmSupported: boolean
    readLookaheadEnabled: boolean
    readLookaheadSupported: boolean
    securityEnhancedEraseUnitMinutes: number
    securityEraseUnitMinutes: number
    securityFrozen: boolean
    smartEnabled: boolean
    smartFailing: boolean
    smartNumAttributesFailedInThePast: number
    smartNumAttributesFailing: number
    smartNumBadSectors: number
    smartPowerOnSeconds: number
    smartSelftestPercentRemaining: number
    smartSelftestStatus: string
    smartSupported: boolean
    smartTemperature: number
    smartUpdated: number
    writeCacheEnabled: boolean
    writeCacheSupported: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.DriveAta */
    callPmGetState(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmGetStateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outState */ number ]
    callPmGetStateSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outState */ number ]
    callPmStandby(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmStandbyFinish(res: Gio.AsyncResult): boolean
    callPmStandbySync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callPmWakeup(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPmWakeupFinish(res: Gio.AsyncResult): boolean
    callPmWakeupSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSecurityEraseUnit(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecurityEraseUnitFinish(res: Gio.AsyncResult): boolean
    callSecurityEraseUnitSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartGetAttributes(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartGetAttributesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    callSmartGetAttributesSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    callSmartSelftestAbort(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSelftestAbortFinish(res: Gio.AsyncResult): boolean
    callSmartSelftestAbortSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartSelftestStart(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSelftestStartFinish(res: Gio.AsyncResult): boolean
    callSmartSelftestStartSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartSetEnabled(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartSetEnabledFinish(res: Gio.AsyncResult): boolean
    callSmartSetEnabledSync(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSmartUpdate(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSmartUpdateFinish(res: Gio.AsyncResult): boolean
    callSmartUpdateSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completePmGetState(invocation: Gio.DBusMethodInvocation, state: number): void
    completePmStandby(invocation: Gio.DBusMethodInvocation): void
    completePmWakeup(invocation: Gio.DBusMethodInvocation): void
    completeSecurityEraseUnit(invocation: Gio.DBusMethodInvocation): void
    completeSmartGetAttributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    completeSmartSelftestAbort(invocation: Gio.DBusMethodInvocation): void
    completeSmartSelftestStart(invocation: Gio.DBusMethodInvocation): void
    completeSmartSetEnabled(invocation: Gio.DBusMethodInvocation): void
    completeSmartUpdate(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.DriveAtaSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandlePmGetState(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePmStandby(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePmWakeup(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSecurityEraseUnit(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartGetAttributes(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSelftestAbort(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSelftestStart(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    vfuncHandleSmartSetEnabled(invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
    vfuncHandleSmartUpdate(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.DriveAta */
    connect(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-get-state", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-get-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-pm-standby", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-standby", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-standby", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-standby", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-wakeup", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-pm-wakeup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-security-erase-unit", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-security-erase-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-get-attributes", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-get-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-abort", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-abort", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-start", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-set-enabled", invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-set-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-smart-update", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-update", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-update", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-smart-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aam-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security-frozen", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-frozen", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-updated", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-updated", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DriveAtaSkeleton_ConstructProps)
    _init (config?: DriveAtaSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DriveAtaSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface DriveProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    canPowerOff?: boolean
    configuration?: GLib.Variant
    connectionBus?: string
    ejectable?: boolean
    id?: string
    media?: string
    mediaAvailable?: boolean
    mediaChangeDetected?: boolean
    mediaCompatibility?: string[]
    mediaRemovable?: boolean
    model?: string
    optical?: boolean
    opticalBlank?: boolean
    opticalNumAudioTracks?: number
    opticalNumDataTracks?: number
    opticalNumSessions?: number
    opticalNumTracks?: number
    removable?: boolean
    revision?: string
    rotationRate?: number
    seat?: string
    serial?: string
    siblingId?: string
    size?: number
    sortKey?: string
    timeDetected?: number
    timeMediaDetected?: number
    vendor?: string
    wwn?: string
}
export class DriveProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Drive */
    canPowerOff: boolean
    configuration: GLib.Variant
    connectionBus: string
    ejectable: boolean
    id: string
    media: string
    mediaAvailable: boolean
    mediaChangeDetected: boolean
    mediaCompatibility: string[]
    mediaRemovable: boolean
    model: string
    optical: boolean
    opticalBlank: boolean
    opticalNumAudioTracks: number
    opticalNumDataTracks: number
    opticalNumSessions: number
    opticalNumTracks: number
    removable: boolean
    revision: string
    rotationRate: number
    seat: string
    serial: string
    siblingId: string
    size: number
    sortKey: string
    timeDetected: number
    timeMediaDetected: number
    vendor: string
    wwn: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Drive */
    callEject(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEjectFinish(res: Gio.AsyncResult): boolean
    callEjectSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callPowerOff(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPowerOffFinish(res: Gio.AsyncResult): boolean
    callPowerOffSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetConfiguration(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetConfigurationFinish(res: Gio.AsyncResult): boolean
    callSetConfigurationSync(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeEject(invocation: Gio.DBusMethodInvocation): void
    completePowerOff(invocation: Gio.DBusMethodInvocation): void
    completeSetConfiguration(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.DriveProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleEject(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePowerOff(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetConfiguration(invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DriveProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DriveProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: DriveProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DriveProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Drive */
    connect(sigName: "handle-eject", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-eject", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-eject", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-power-off", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-power-off", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-power-off", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-configuration", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-configuration", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-configuration", invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-power-off", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-power-off", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::configuration", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection-bus", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-bus", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ejectable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ejectable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-available", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-available", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-change-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-change-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-compatibility", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-compatibility", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-blank", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-blank", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-sessions", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-sessions", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-rate", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-rate", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sibling-id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sibling-id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-key", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-key", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-media-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-media-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wwn", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwn", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DriveProxy_ConstructProps)
    _init (config?: DriveProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DriveProxy
    static newForBusFinish(res: Gio.AsyncResult): DriveProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface DriveSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    canPowerOff?: boolean
    configuration?: GLib.Variant
    connectionBus?: string
    ejectable?: boolean
    id?: string
    media?: string
    mediaAvailable?: boolean
    mediaChangeDetected?: boolean
    mediaCompatibility?: string[]
    mediaRemovable?: boolean
    model?: string
    optical?: boolean
    opticalBlank?: boolean
    opticalNumAudioTracks?: number
    opticalNumDataTracks?: number
    opticalNumSessions?: number
    opticalNumTracks?: number
    removable?: boolean
    revision?: string
    rotationRate?: number
    seat?: string
    serial?: string
    siblingId?: string
    size?: number
    sortKey?: string
    timeDetected?: number
    timeMediaDetected?: number
    vendor?: string
    wwn?: string
}
export class DriveSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Drive */
    canPowerOff: boolean
    configuration: GLib.Variant
    connectionBus: string
    ejectable: boolean
    id: string
    media: string
    mediaAvailable: boolean
    mediaChangeDetected: boolean
    mediaCompatibility: string[]
    mediaRemovable: boolean
    model: string
    optical: boolean
    opticalBlank: boolean
    opticalNumAudioTracks: number
    opticalNumDataTracks: number
    opticalNumSessions: number
    opticalNumTracks: number
    removable: boolean
    revision: string
    rotationRate: number
    seat: string
    serial: string
    siblingId: string
    size: number
    sortKey: string
    timeDetected: number
    timeMediaDetected: number
    vendor: string
    wwn: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Drive */
    callEject(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEjectFinish(res: Gio.AsyncResult): boolean
    callEjectSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callPowerOff(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callPowerOffFinish(res: Gio.AsyncResult): boolean
    callPowerOffSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetConfiguration(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetConfigurationFinish(res: Gio.AsyncResult): boolean
    callSetConfigurationSync(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeEject(invocation: Gio.DBusMethodInvocation): void
    completePowerOff(invocation: Gio.DBusMethodInvocation): void
    completeSetConfiguration(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.DriveSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleEject(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandlePowerOff(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetConfiguration(invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Drive */
    connect(sigName: "handle-eject", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-eject", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-eject", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-eject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-power-off", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-power-off", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-power-off", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-configuration", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-configuration", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-configuration", invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-power-off", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-power-off", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::configuration", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection-bus", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-bus", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ejectable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ejectable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-available", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-available", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-change-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-change-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-compatibility", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-compatibility", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-blank", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-blank", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-sessions", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-sessions", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::optical-num-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-rate", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-rate", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sibling-id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sibling-id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-key", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-key", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-media-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-media-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wwn", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwn", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DriveSkeleton_ConstructProps)
    _init (config?: DriveSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DriveSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface EncryptedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    childConfiguration?: GLib.Variant
}
export class EncryptedProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Encrypted */
    childConfiguration: GLib.Variant
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Encrypted */
    callChangePassphrase(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChangePassphraseFinish(res: Gio.AsyncResult): boolean
    callChangePassphraseSync(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callLock(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callLockFinish(res: Gio.AsyncResult): boolean
    callLockSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUnlock(argPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUnlockFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    callUnlockSync(argPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    completeChangePassphrase(invocation: Gio.DBusMethodInvocation): void
    completeLock(invocation: Gio.DBusMethodInvocation): void
    completeUnlock(invocation: Gio.DBusMethodInvocation, cleartextDevice: string): void
    /* Virtual methods of UDisks.EncryptedProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleChangePassphrase(invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant): boolean
    vfuncHandleLock(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleUnlock(invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: EncryptedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: EncryptedProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: EncryptedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: EncryptedProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Encrypted */
    connect(sigName: "handle-change-passphrase", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-change-passphrase", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-change-passphrase", invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant): void
    on(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-lock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-lock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-unlock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unlock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant): void
    on(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-configuration", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncryptedProxy_ConstructProps)
    _init (config?: EncryptedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): EncryptedProxy
    static newForBusFinish(res: Gio.AsyncResult): EncryptedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface EncryptedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    childConfiguration?: GLib.Variant
}
export class EncryptedSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Encrypted */
    childConfiguration: GLib.Variant
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Encrypted */
    callChangePassphrase(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChangePassphraseFinish(res: Gio.AsyncResult): boolean
    callChangePassphraseSync(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callLock(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callLockFinish(res: Gio.AsyncResult): boolean
    callLockSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUnlock(argPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUnlockFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    callUnlockSync(argPassphrase: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    completeChangePassphrase(invocation: Gio.DBusMethodInvocation): void
    completeLock(invocation: Gio.DBusMethodInvocation): void
    completeUnlock(invocation: Gio.DBusMethodInvocation, cleartextDevice: string): void
    /* Virtual methods of UDisks.EncryptedSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleChangePassphrase(invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant): boolean
    vfuncHandleLock(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleUnlock(invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Encrypted */
    connect(sigName: "handle-change-passphrase", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-change-passphrase", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-change-passphrase", invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant): void
    on(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-change-passphrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-lock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-lock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-lock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-unlock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unlock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant): void
    on(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-unlock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-configuration", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncryptedSkeleton_ConstructProps)
    _init (config?: EncryptedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EncryptedSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface FilesystemProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    mountPoints?: string[]
}
export class FilesystemProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Filesystem */
    mountPoints: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Filesystem */
    callMount(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callMountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outMountPath */ string ]
    callMountSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outMountPath */ string ]
    callSetLabel(argLabel: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetLabelFinish(res: Gio.AsyncResult): boolean
    callSetLabelSync(argLabel: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUnmount(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUnmountFinish(res: Gio.AsyncResult): boolean
    callUnmountSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeMount(invocation: Gio.DBusMethodInvocation, mountPath: string): void
    completeSetLabel(invocation: Gio.DBusMethodInvocation): void
    completeUnmount(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.FilesystemProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleMount(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetLabel(invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant): boolean
    vfuncHandleUnmount(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: FilesystemProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: FilesystemProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: FilesystemProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: FilesystemProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Filesystem */
    connect(sigName: "handle-mount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mount", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-label", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-label", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-label", invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-unmount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unmount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unmount", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mount-points", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilesystemProxy_ConstructProps)
    _init (config?: FilesystemProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): FilesystemProxy
    static newForBusFinish(res: Gio.AsyncResult): FilesystemProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface FilesystemSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    mountPoints?: string[]
}
export class FilesystemSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Filesystem */
    mountPoints: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Filesystem */
    callMount(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callMountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outMountPath */ string ]
    callMountSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outMountPath */ string ]
    callSetLabel(argLabel: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetLabelFinish(res: Gio.AsyncResult): boolean
    callSetLabelSync(argLabel: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callUnmount(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callUnmountFinish(res: Gio.AsyncResult): boolean
    callUnmountSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeMount(invocation: Gio.DBusMethodInvocation, mountPath: string): void
    completeSetLabel(invocation: Gio.DBusMethodInvocation): void
    completeUnmount(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.FilesystemSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleMount(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetLabel(invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant): boolean
    vfuncHandleUnmount(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Filesystem */
    connect(sigName: "handle-mount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mount", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-mount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-label", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-label", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-label", invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-unmount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unmount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unmount", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-unmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mount-points", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilesystemSkeleton_ConstructProps)
    _init (config?: FilesystemSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilesystemSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface JobProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    bytes?: number
    cancelable?: boolean
    expectedEndTime?: number
    objects?: string[]
    operation?: string
    progress?: number
    progressValid?: boolean
    rate?: number
    startTime?: number
    startedByUid?: number
}
export class JobProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Job */
    bytes: number
    cancelable: boolean
    expectedEndTime: number
    objects: string[]
    operation: string
    progress: number
    progressValid: boolean
    rate: number
    startTime: number
    startedByUid: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Job */
    callCancel(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    emitCompleted(argSuccess: boolean, argMessage: string): void
    /* Virtual methods of UDisks.JobProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncCompleted(argSuccess: boolean, argMessage: string): void
    vfuncHandleCancel(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: JobProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: JobProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: JobProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: JobProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Job */
    connect(sigName: "completed", callback: (($obj: JobProxy, argSuccess: boolean, argMessage: string) => void)): number
    connect_after(sigName: "completed", callback: (($obj: JobProxy, argSuccess: boolean, argMessage: string) => void)): number
    emit(sigName: "completed", argSuccess: boolean, argMessage: string): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-cancel", callback: (($obj: JobProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: JobProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytes", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancelable", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expected-end-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expected-end-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::objects", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::objects", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operation", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress-valid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-valid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::started-by-uid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::started-by-uid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: JobProxy_ConstructProps)
    _init (config?: JobProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): JobProxy
    static newForBusFinish(res: Gio.AsyncResult): JobProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): JobProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): JobProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): JobProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): JobProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface JobSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    bytes?: number
    cancelable?: boolean
    expectedEndTime?: number
    objects?: string[]
    operation?: string
    progress?: number
    progressValid?: boolean
    rate?: number
    startTime?: number
    startedByUid?: number
}
export class JobSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Job */
    bytes: number
    cancelable: boolean
    expectedEndTime: number
    objects: string[]
    operation: string
    progress: number
    progressValid: boolean
    rate: number
    startTime: number
    startedByUid: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Job */
    callCancel(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    emitCompleted(argSuccess: boolean, argMessage: string): void
    /* Virtual methods of UDisks.JobSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncCompleted(argSuccess: boolean, argMessage: string): void
    vfuncHandleCancel(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Job */
    connect(sigName: "completed", callback: (($obj: JobSkeleton, argSuccess: boolean, argMessage: string) => void)): number
    connect_after(sigName: "completed", callback: (($obj: JobSkeleton, argSuccess: boolean, argMessage: string) => void)): number
    emit(sigName: "completed", argSuccess: boolean, argMessage: string): void
    on(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-cancel", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytes", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancelable", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expected-end-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expected-end-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::objects", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::objects", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operation", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress-valid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-valid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::started-by-uid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::started-by-uid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: JobSkeleton_ConstructProps)
    _init (config?: JobSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): JobSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface LoopProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    autoclear?: boolean
    backingFile?: string
    setupByUid?: number
}
export class LoopProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Loop */
    autoclear: boolean
    backingFile: string
    setupByUid: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Loop */
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetAutoclear(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetAutoclearFinish(res: Gio.AsyncResult): boolean
    callSetAutoclearSync(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeSetAutoclear(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.LoopProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetAutoclear(invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: LoopProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: LoopProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: LoopProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: LoopProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Loop */
    connect(sigName: "handle-delete", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-autoclear", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-autoclear", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-autoclear", invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): void
    on(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoclear", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoclear", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backing-file", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backing-file", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::setup-by-uid", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup-by-uid", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LoopProxy_ConstructProps)
    _init (config?: LoopProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): LoopProxy
    static newForBusFinish(res: Gio.AsyncResult): LoopProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface LoopSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    autoclear?: boolean
    backingFile?: string
    setupByUid?: number
}
export class LoopSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Loop */
    autoclear: boolean
    backingFile: string
    setupByUid: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Loop */
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetAutoclear(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetAutoclearFinish(res: Gio.AsyncResult): boolean
    callSetAutoclearSync(argValue: boolean, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeSetAutoclear(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.LoopSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetAutoclear(invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Loop */
    connect(sigName: "handle-delete", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-autoclear", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-autoclear", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-autoclear", invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): void
    on(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoclear", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoclear", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backing-file", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backing-file", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::setup-by-uid", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup-by-uid", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LoopSkeleton_ConstructProps)
    _init (config?: LoopSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LoopSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface MDRaidProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    activeDevices?: GLib.Variant
    bitmapLocation?: string
    childConfiguration?: GLib.Variant
    chunkSize?: number
    degraded?: number
    level?: string
    name?: string
    numDevices?: number
    running?: boolean
    size?: number
    syncAction?: string
    syncCompleted?: number
    syncRate?: number
    syncRemainingTime?: number
    uuid?: string
}
export class MDRaidProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.MDRaid */
    activeDevices: GLib.Variant
    bitmapLocation: string
    childConfiguration: GLib.Variant
    chunkSize: number
    degraded: number
    level: string
    name: string
    numDevices: number
    running: boolean
    size: number
    syncAction: string
    syncCompleted: number
    syncRate: number
    syncRemainingTime: number
    uuid: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.MDRaid */
    callAddDevice(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddDeviceFinish(res: Gio.AsyncResult): boolean
    callAddDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRemoveDevice(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveDeviceFinish(res: Gio.AsyncResult): boolean
    callRemoveDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRequestSyncAction(argSyncAction: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRequestSyncActionFinish(res: Gio.AsyncResult): boolean
    callRequestSyncActionSync(argSyncAction: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetBitmapLocation(argValue: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetBitmapLocationFinish(res: Gio.AsyncResult): boolean
    callSetBitmapLocationSync(argValue: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStart(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStop(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeAddDevice(invocation: Gio.DBusMethodInvocation): void
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeRemoveDevice(invocation: Gio.DBusMethodInvocation): void
    completeRequestSyncAction(invocation: Gio.DBusMethodInvocation): void
    completeSetBitmapLocation(invocation: Gio.DBusMethodInvocation): void
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.MDRaidProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleAddDevice(invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleRemoveDevice(invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
    vfuncHandleRequestSyncAction(invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant): boolean
    vfuncHandleSetBitmapLocation(invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant): boolean
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: MDRaidProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MDRaidProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: MDRaidProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MDRaidProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.MDRaid */
    connect(sigName: "handle-add-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-device", invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): void
    on(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-delete", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-device", invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): void
    on(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-request-sync-action", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-request-sync-action", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-request-sync-action", invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant): void
    on(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-bitmap-location", invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-start", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitmap-location", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitmap-location", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-configuration", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chunk-size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::degraded", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::degraded", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-action", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-action", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-completed", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-completed", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-rate", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-rate", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MDRaidProxy_ConstructProps)
    _init (config?: MDRaidProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): MDRaidProxy
    static newForBusFinish(res: Gio.AsyncResult): MDRaidProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface MDRaidSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    activeDevices?: GLib.Variant
    bitmapLocation?: string
    childConfiguration?: GLib.Variant
    chunkSize?: number
    degraded?: number
    level?: string
    name?: string
    numDevices?: number
    running?: boolean
    size?: number
    syncAction?: string
    syncCompleted?: number
    syncRate?: number
    syncRemainingTime?: number
    uuid?: string
}
export class MDRaidSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.MDRaid */
    activeDevices: GLib.Variant
    bitmapLocation: string
    childConfiguration: GLib.Variant
    chunkSize: number
    degraded: number
    level: string
    name: string
    numDevices: number
    running: boolean
    size: number
    syncAction: string
    syncCompleted: number
    syncRate: number
    syncRemainingTime: number
    uuid: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.MDRaid */
    callAddDevice(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddDeviceFinish(res: Gio.AsyncResult): boolean
    callAddDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRemoveDevice(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveDeviceFinish(res: Gio.AsyncResult): boolean
    callRemoveDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRequestSyncAction(argSyncAction: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRequestSyncActionFinish(res: Gio.AsyncResult): boolean
    callRequestSyncActionSync(argSyncAction: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetBitmapLocation(argValue: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetBitmapLocationFinish(res: Gio.AsyncResult): boolean
    callSetBitmapLocationSync(argValue: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStart(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStop(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeAddDevice(invocation: Gio.DBusMethodInvocation): void
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeRemoveDevice(invocation: Gio.DBusMethodInvocation): void
    completeRequestSyncAction(invocation: Gio.DBusMethodInvocation): void
    completeSetBitmapLocation(invocation: Gio.DBusMethodInvocation): void
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.MDRaidSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleAddDevice(invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleRemoveDevice(invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
    vfuncHandleRequestSyncAction(invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant): boolean
    vfuncHandleSetBitmapLocation(invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant): boolean
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.MDRaid */
    connect(sigName: "handle-add-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-device", invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): void
    on(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-add-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-delete", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-remove-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-device", invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): void
    on(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-remove-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-request-sync-action", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-request-sync-action", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-request-sync-action", invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant): void
    on(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-request-sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-bitmap-location", invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-start", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitmap-location", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitmap-location", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-configuration", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chunk-size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::degraded", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::degraded", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-action", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-action", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-completed", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-completed", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-rate", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-rate", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MDRaidSkeleton_ConstructProps)
    _init (config?: MDRaidSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MDRaidSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    supportedFilesystems?: string[]
    version?: string
}
export class ManagerProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Manager */
    supportedFilesystems: string[]
    version: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Manager */
    callEnableModules(argEnable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableModulesFinish(res: Gio.AsyncResult): boolean
    callEnableModulesSync(argEnable: boolean, cancellable?: Gio.Cancellable | null): boolean
    callLoopSetup(argFd: GLib.Variant, argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callLoopSetupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    callLoopSetupSync(argFd: GLib.Variant, argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    callMdraidCreate(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callMdraidCreateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingArray */ string ]
    callMdraidCreateSync(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingArray */ string ]
    completeEnableModules(invocation: Gio.DBusMethodInvocation): void
    completeLoopSetup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, resultingDevice: string): void
    completeMdraidCreate(invocation: Gio.DBusMethodInvocation, resultingArray: string): void
    /* Virtual methods of UDisks.ManagerProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleEnableModules(invocation: Gio.DBusMethodInvocation, argEnable: boolean): boolean
    vfuncHandleLoopSetup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argFd: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleMdraidCreate(invocation: Gio.DBusMethodInvocation, argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Manager */
    connect(sigName: "handle-enable-modules", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-modules", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean)): number
    emit(sigName: "handle-enable-modules", invocation: Gio.DBusMethodInvocation, argEnable: boolean): void
    on(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-loop-setup", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-loop-setup", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-loop-setup", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-mdraid-create", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mdraid-create", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mdraid-create", invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant): void
    on(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-filesystems", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-filesystems", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    supportedFilesystems?: string[]
    version?: string
}
export class ManagerSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Manager */
    supportedFilesystems: string[]
    version: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Manager */
    callEnableModules(argEnable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableModulesFinish(res: Gio.AsyncResult): boolean
    callEnableModulesSync(argEnable: boolean, cancellable?: Gio.Cancellable | null): boolean
    callLoopSetup(argFd: GLib.Variant, argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callLoopSetupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    callLoopSetupSync(argFd: GLib.Variant, argOptions: GLib.Variant, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    callMdraidCreate(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callMdraidCreateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingArray */ string ]
    callMdraidCreateSync(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingArray */ string ]
    completeEnableModules(invocation: Gio.DBusMethodInvocation): void
    completeLoopSetup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, resultingDevice: string): void
    completeMdraidCreate(invocation: Gio.DBusMethodInvocation, resultingArray: string): void
    /* Virtual methods of UDisks.ManagerSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleEnableModules(invocation: Gio.DBusMethodInvocation, argEnable: boolean): boolean
    vfuncHandleLoopSetup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argFd: GLib.Variant, argOptions: GLib.Variant): boolean
    vfuncHandleMdraidCreate(invocation: Gio.DBusMethodInvocation, argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Manager */
    connect(sigName: "handle-enable-modules", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-modules", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean)): number
    emit(sigName: "handle-enable-modules", invocation: Gio.DBusMethodInvocation, argEnable: boolean): void
    on(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enable-modules", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-loop-setup", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-loop-setup", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-loop-setup", invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant): void
    on(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-loop-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-mdraid-create", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mdraid-create", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mdraid-create", invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant): void
    on(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-mdraid-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-filesystems", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-filesystems", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ManagerSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface ObjectInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UDisks.ObjectInfo */
    getDescription(): string
    getIcon(): Gio.Icon
    getIconSymbolic(): Gio.Icon
    getMediaDescription(): string
    getMediaIcon(): Gio.Icon
    getMediaIconSymbolic(): Gio.Icon
    getName(): string
    getObject(): Object
    getOneLiner(): string
    getSortKey(): string
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
    connect(sigName: "notify", callback: (($obj: ObjectInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ObjectInfo_ConstructProps)
    _init (config?: ObjectInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
export class ObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly nameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    getConnection(): Gio.DBusConnection
    getFlags(): Gio.DBusObjectManagerClientFlags
    getName(): string
    getNameOwner(): string | null
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): Gio.DBusInterface
    getObject(objectPath: string): Gio.DBusObject
    getObjectPath(): string
    getObjects(): Gio.DBusObject[]
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of UDisks.ObjectManagerClient */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncGetInterface(objectPath: string, interfaceName: string): Gio.DBusInterface
    vfuncGetObject(objectPath: string): Gio.DBusObject
    vfuncGetObjectPath(): string
    vfuncGetObjects(): Gio.DBusObject[]
    vfuncInterfaceAdded(object: Gio.DBusObject, interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(object: Gio.DBusObject, interface: Gio.DBusInterface): void
    vfuncObjectAdded(object: Gio.DBusObject): void
    vfuncObjectRemoved(object: Gio.DBusObject): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfuncInterfaceProxyPropertiesChanged(objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncInterfaceProxySignal(objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    on(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-proxy-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    on(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    on(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectManagerClient_ConstructProps)
    _init (config?: ObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ObjectManagerClient
    static newForBusFinish(res: Gio.AsyncResult): ObjectManagerClient
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string, interfaceName?: string | null, userData?: object | null): GObject.Type
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ObjectProxy_ConstructProps extends Gio.DBusObjectProxy_ConstructProps {
    block?: Block
    drive?: Drive
    driveAta?: DriveAta
    encrypted?: Encrypted
    filesystem?: Filesystem
    job?: Job
    loop?: Loop
    manager?: Manager
    mdraid?: MDRaid
    partition?: Partition
    partitionTable?: PartitionTable
    swapspace?: Swapspace
}
export class ObjectProxy {
    /* Properties of UDisks.Object */
    block: Block
    drive: Drive
    driveAta: DriveAta
    encrypted: Encrypted
    filesystem: Filesystem
    job: Job
    loop: Loop
    manager: Manager
    mdraid: MDRaid
    partition: Partition
    partitionTable: PartitionTable
    swapspace: Swapspace
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    getConnection(): Gio.DBusConnection
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
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Methods of UDisks.Object */
    getBlock(): Block
    getDrive(): Drive
    getDriveAta(): DriveAta
    getEncrypted(): Encrypted
    getFilesystem(): Filesystem
    getJob(): Job
    getLoop(): Loop
    getManager(): Manager
    getMdraid(): MDRaid
    getPartition(): Partition
    getPartitionTable(): PartitionTable
    getSwapspace(): Swapspace
    /* Virtual methods of UDisks.ObjectProxy */
    vfuncGetInterface(interfaceName: string): Gio.DBusInterface | null
    vfuncGetInterfaces(): Gio.DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(interface: Gio.DBusInterface): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::block", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drive", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drive-ata", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-ata", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encrypted", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filesystem", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesystem", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::job", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::loop", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mdraid", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::partition", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::partition-table", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-table", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swapspace", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapspace", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectProxy_ConstructProps)
    _init (config?: ObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, objectPath: string): ObjectProxy
    static $gtype: GObject.Type
}
export interface ObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
    block?: Block
    drive?: Drive
    driveAta?: DriveAta
    encrypted?: Encrypted
    filesystem?: Filesystem
    job?: Job
    loop?: Loop
    manager?: Manager
    mdraid?: MDRaid
    partition?: Partition
    partitionTable?: PartitionTable
    swapspace?: Swapspace
}
export class ObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    gObjectPath: string
    /* Properties of UDisks.Object */
    block: Block
    drive: Drive
    driveAta: DriveAta
    encrypted: Encrypted
    filesystem: Filesystem
    job: Job
    loop: Loop
    manager: Manager
    mdraid: MDRaid
    partition: Partition
    partitionTable: PartitionTable
    swapspace: Swapspace
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of UDisks.ObjectSkeleton */
    setBlock(interface?: Block | null): void
    setDrive(interface?: Drive | null): void
    setDriveAta(interface?: DriveAta | null): void
    setEncrypted(interface?: Encrypted | null): void
    setFilesystem(interface?: Filesystem | null): void
    setJob(interface?: Job | null): void
    setLoop(interface?: Loop | null): void
    setManager(interface?: Manager | null): void
    setMdraid(interface?: MDRaid | null): void
    setPartition(interface?: Partition | null): void
    setPartitionTable(interface?: PartitionTable | null): void
    setSwapspace(interface?: Swapspace | null): void
    /* Methods of Gio.DBusObjectSkeleton */
    addInterface(interface: Gio.DBusInterfaceSkeleton): void
    flush(): void
    removeInterface(interface: Gio.DBusInterfaceSkeleton): void
    removeInterfaceByName(interfaceName: string): void
    setObjectPath(objectPath: string): void
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
    /* Methods of Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Methods of UDisks.Object */
    getBlock(): Block
    getDrive(): Drive
    getDriveAta(): DriveAta
    getEncrypted(): Encrypted
    getFilesystem(): Filesystem
    getJob(): Job
    getLoop(): Loop
    getManager(): Manager
    getMdraid(): MDRaid
    getPartition(): Partition
    getPartitionTable(): PartitionTable
    getSwapspace(): Swapspace
    /* Virtual methods of UDisks.ObjectSkeleton */
    vfuncGetInterface(interfaceName: string): Gio.DBusInterface | null
    vfuncGetInterfaces(): Gio.DBusInterface[]
    vfuncGetObjectPath(): string
    vfuncInterfaceAdded(interface: Gio.DBusInterface): void
    vfuncInterfaceRemoved(interface: Gio.DBusInterface): void
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfuncAuthorizeMethod(interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    on(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    on(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    on(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::block", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drive", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drive-ata", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-ata", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encrypted", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filesystem", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesystem", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::job", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::loop", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mdraid", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::partition", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::partition-table", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-table", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swapspace", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapspace", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectSkeleton_ConstructProps)
    _init (config?: ObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string): ObjectSkeleton
    static $gtype: GObject.Type
}
export interface PartitionProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    flags?: number
    isContained?: boolean
    isContainer?: boolean
    name?: string
    number?: number
    offset?: number
    size?: number
    table?: string
    type?: string
    uuid?: string
}
export class PartitionProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Partition */
    flags: number
    isContained: boolean
    isContainer: boolean
    name: string
    number: number
    offset: number
    size: number
    table: string
    type: string
    uuid: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Partition */
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetFlags(argFlags: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetFlagsFinish(res: Gio.AsyncResult): boolean
    callSetFlagsSync(argFlags: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetName(argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetNameFinish(res: Gio.AsyncResult): boolean
    callSetNameSync(argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetType(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetTypeFinish(res: Gio.AsyncResult): boolean
    callSetTypeSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeSetFlags(invocation: Gio.DBusMethodInvocation): void
    completeSetName(invocation: Gio.DBusMethodInvocation): void
    completeSetType(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.PartitionProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetFlags(invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant): boolean
    vfuncHandleSetName(invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant): boolean
    vfuncHandleSetType(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: PartitionProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PartitionProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: PartitionProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PartitionProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Partition */
    connect(sigName: "handle-delete", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-flags", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-flags", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-flags", invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant): void
    on(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-name", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-name", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-name", invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-type", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-type", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-type", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-contained", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-contained", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-container", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-container", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::table", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PartitionProxy_ConstructProps)
    _init (config?: PartitionProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): PartitionProxy
    static newForBusFinish(res: Gio.AsyncResult): PartitionProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface PartitionSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    flags?: number
    isContained?: boolean
    isContainer?: boolean
    name?: string
    number?: number
    offset?: number
    size?: number
    table?: string
    type?: string
    uuid?: string
}
export class PartitionSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Partition */
    flags: number
    isContained: boolean
    isContainer: boolean
    name: string
    number: number
    offset: number
    size: number
    table: string
    type: string
    uuid: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Partition */
    callDelete(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteFinish(res: Gio.AsyncResult): boolean
    callDeleteSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetFlags(argFlags: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetFlagsFinish(res: Gio.AsyncResult): boolean
    callSetFlagsSync(argFlags: number, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetName(argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetNameFinish(res: Gio.AsyncResult): boolean
    callSetNameSync(argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callSetType(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSetTypeFinish(res: Gio.AsyncResult): boolean
    callSetTypeSync(argType: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    completeSetFlags(invocation: Gio.DBusMethodInvocation): void
    completeSetName(invocation: Gio.DBusMethodInvocation): void
    completeSetType(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.PartitionSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleDelete(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleSetFlags(invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant): boolean
    vfuncHandleSetName(invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant): boolean
    vfuncHandleSetType(invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Partition */
    connect(sigName: "handle-delete", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-flags", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-flags", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-flags", invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant): void
    on(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-name", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-name", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-name", invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-set-type", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-type", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-type", invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): void
    on(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-set-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-contained", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-contained", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-container", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-container", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::table", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PartitionSkeleton_ConstructProps)
    _init (config?: PartitionSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PartitionSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface PartitionTableProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    type?: string
}
export class PartitionTableProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.PartitionTable */
    type: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.PartitionTable */
    callCreatePartition(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreatePartitionAndFormat(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreatePartitionAndFormatFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionAndFormatSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    completeCreatePartition(invocation: Gio.DBusMethodInvocation, createdPartition: string): void
    completeCreatePartitionAndFormat(invocation: Gio.DBusMethodInvocation, createdPartition: string): void
    /* Virtual methods of UDisks.PartitionTableProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleCreatePartition(invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant): boolean
    vfuncHandleCreatePartitionAndFormat(invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: PartitionTableProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PartitionTableProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: PartitionTableProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PartitionTableProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.PartitionTable */
    connect(sigName: "handle-create-partition", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition", invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant): void
    on(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition-and-format", invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant): void
    on(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PartitionTableProxy_ConstructProps)
    _init (config?: PartitionTableProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): PartitionTableProxy
    static newForBusFinish(res: Gio.AsyncResult): PartitionTableProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface PartitionTableSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    type?: string
}
export class PartitionTableSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.PartitionTable */
    type: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.PartitionTable */
    callCreatePartition(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreatePartitionAndFormat(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreatePartitionAndFormatFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionAndFormatSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    callCreatePartitionSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    completeCreatePartition(invocation: Gio.DBusMethodInvocation, createdPartition: string): void
    completeCreatePartitionAndFormat(invocation: Gio.DBusMethodInvocation, createdPartition: string): void
    /* Virtual methods of UDisks.PartitionTableSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleCreatePartition(invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant): boolean
    vfuncHandleCreatePartitionAndFormat(invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.PartitionTable */
    connect(sigName: "handle-create-partition", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition", invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant): void
    on(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition-and-format", invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant): void
    on(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-create-partition-and-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PartitionTableSkeleton_ConstructProps)
    _init (config?: PartitionTableSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PartitionTableSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface SwapspaceProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    active?: boolean
}
export class SwapspaceProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UDisks.Swapspace */
    active: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks.Swapspace */
    callStart(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStop(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.SwapspaceProxy */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: SwapspaceProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: SwapspaceProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: SwapspaceProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: SwapspaceProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Swapspace */
    connect(sigName: "handle-start", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SwapspaceProxy_ConstructProps)
    _init (config?: SwapspaceProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): SwapspaceProxy
    static newForBusFinish(res: Gio.AsyncResult): SwapspaceProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface SwapspaceSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    active?: boolean
}
export class SwapspaceSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks.Swapspace */
    active: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of UDisks.Swapspace */
    callStart(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callStop(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(argOptions: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks.SwapspaceSkeleton */
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncHandleStart(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    vfuncHandleStop(invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of UDisks.Swapspace */
    connect(sigName: "handle-start", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-stop", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): void
    on(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SwapspaceSkeleton_ConstructProps)
    _init (config?: SwapspaceSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SwapspaceSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export abstract class BlockIface {
    /* Fields of UDisks.BlockIface */
    parentIface: GObject.TypeInterface
    handleAddConfigurationItem: (object: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean
    handleFormat: (object: Block, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean
    handleGetSecretConfiguration: (object: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleOpenForBackup: (object: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant) => boolean
    handleOpenForBenchmark: (object: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant) => boolean
    handleOpenForRestore: (object: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant) => boolean
    handleRemoveConfigurationItem: (object: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean
    handleRescan: (object: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleUpdateConfigurationItem: (object: Block, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean
    getConfiguration: (object: Block) => GLib.Variant
    getCryptoBackingDevice: (object: Block) => string
    getDevice: (object: Block) => string
    getDeviceNumber: (object: Block) => number
    getDrive: (object: Block) => string
    getHintAuto: (object: Block) => boolean
    getHintIconName: (object: Block) => string
    getHintIgnore: (object: Block) => boolean
    getHintName: (object: Block) => string
    getHintPartitionable: (object: Block) => boolean
    getHintSystem: (object: Block) => boolean
    getIdLabel: (object: Block) => string
    getIdType: (object: Block) => string
    getIdUsage: (object: Block) => string
    getIdUuid: (object: Block) => string
    getIdVersion: (object: Block) => string
    getPreferredDevice: (object: Block) => string
    getReadOnly: (object: Block) => boolean
    getSize: (object: Block) => number
    getSymlinks: (object: Block) => string[]
    getHintSymbolicIconName: (object: Block) => string
    getId: (object: Block) => string
    getMdraid: (object: Block) => string
    getMdraidMember: (object: Block) => string
    static name: string
}
export abstract class BlockProxyClass {
    /* Fields of UDisks.BlockProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class BlockProxyPrivate {
    static name: string
}
export abstract class BlockSkeletonClass {
    /* Fields of UDisks.BlockSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class BlockSkeletonPrivate {
    static name: string
}
export abstract class DriveAtaIface {
    /* Fields of UDisks.DriveAtaIface */
    parentIface: GObject.TypeInterface
    handlePmGetState: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handlePmStandby: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handlePmWakeup: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSecurityEraseUnit: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSmartGetAttributes: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSmartSelftestAbort: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSmartSelftestStart: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean
    handleSmartUpdate: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getAamEnabled: (object: DriveAta) => boolean
    getAamSupported: (object: DriveAta) => boolean
    getAamVendorRecommendedValue: (object: DriveAta) => number
    getApmEnabled: (object: DriveAta) => boolean
    getApmSupported: (object: DriveAta) => boolean
    getPmEnabled: (object: DriveAta) => boolean
    getPmSupported: (object: DriveAta) => boolean
    getSecurityEnhancedEraseUnitMinutes: (object: DriveAta) => number
    getSecurityEraseUnitMinutes: (object: DriveAta) => number
    getSecurityFrozen: (object: DriveAta) => boolean
    getSmartEnabled: (object: DriveAta) => boolean
    getSmartFailing: (object: DriveAta) => boolean
    getSmartNumAttributesFailedInThePast: (object: DriveAta) => number
    getSmartNumAttributesFailing: (object: DriveAta) => number
    getSmartNumBadSectors: (object: DriveAta) => number
    getSmartPowerOnSeconds: (object: DriveAta) => number
    getSmartSelftestPercentRemaining: (object: DriveAta) => number
    getSmartSelftestStatus: (object: DriveAta) => string
    getSmartSupported: (object: DriveAta) => boolean
    getSmartTemperature: (object: DriveAta) => number
    getSmartUpdated: (object: DriveAta) => number
    handleSmartSetEnabled: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean
    getWriteCacheEnabled: (object: DriveAta) => boolean
    getWriteCacheSupported: (object: DriveAta) => boolean
    getReadLookaheadEnabled: (object: DriveAta) => boolean
    getReadLookaheadSupported: (object: DriveAta) => boolean
    static name: string
}
export abstract class DriveAtaProxyClass {
    /* Fields of UDisks.DriveAtaProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class DriveAtaProxyPrivate {
    static name: string
}
export abstract class DriveAtaSkeletonClass {
    /* Fields of UDisks.DriveAtaSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DriveAtaSkeletonPrivate {
    static name: string
}
export abstract class DriveIface {
    /* Fields of UDisks.DriveIface */
    parentIface: GObject.TypeInterface
    handleEject: (object: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetConfiguration: (object: Drive, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean
    getConfiguration: (object: Drive) => GLib.Variant
    getConnectionBus: (object: Drive) => string
    getEjectable: (object: Drive) => boolean
    getId: (object: Drive) => string
    getMedia: (object: Drive) => string
    getMediaAvailable: (object: Drive) => boolean
    getMediaChangeDetected: (object: Drive) => boolean
    getMediaCompatibility: (object: Drive) => string[]
    getMediaRemovable: (object: Drive) => boolean
    getModel: (object: Drive) => string
    getOptical: (object: Drive) => boolean
    getOpticalBlank: (object: Drive) => boolean
    getOpticalNumAudioTracks: (object: Drive) => number
    getOpticalNumDataTracks: (object: Drive) => number
    getOpticalNumSessions: (object: Drive) => number
    getOpticalNumTracks: (object: Drive) => number
    getRemovable: (object: Drive) => boolean
    getRevision: (object: Drive) => string
    getRotationRate: (object: Drive) => number
    getSeat: (object: Drive) => string
    getSerial: (object: Drive) => string
    getSize: (object: Drive) => number
    getSortKey: (object: Drive) => string
    getTimeDetected: (object: Drive) => number
    getTimeMediaDetected: (object: Drive) => number
    getVendor: (object: Drive) => string
    getWwn: (object: Drive) => string
    handlePowerOff: (object: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getCanPowerOff: (object: Drive) => boolean
    getSiblingId: (object: Drive) => string
    static name: string
}
export abstract class DriveProxyClass {
    /* Fields of UDisks.DriveProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class DriveProxyPrivate {
    static name: string
}
export abstract class DriveSkeletonClass {
    /* Fields of UDisks.DriveSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DriveSkeletonPrivate {
    static name: string
}
export abstract class EncryptedIface {
    /* Fields of UDisks.EncryptedIface */
    parentIface: GObject.TypeInterface
    handleChangePassphrase: (object: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean
    handleLock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleUnlock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean
    getChildConfiguration: (object: Encrypted) => GLib.Variant
    static name: string
}
export abstract class EncryptedProxyClass {
    /* Fields of UDisks.EncryptedProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class EncryptedProxyPrivate {
    static name: string
}
export abstract class EncryptedSkeletonClass {
    /* Fields of UDisks.EncryptedSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class EncryptedSkeletonPrivate {
    static name: string
}
export abstract class FilesystemIface {
    /* Fields of UDisks.FilesystemIface */
    parentIface: GObject.TypeInterface
    handleMount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetLabel: (object: Filesystem, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean
    handleUnmount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getMountPoints: (object: Filesystem) => string[]
    static name: string
}
export abstract class FilesystemProxyClass {
    /* Fields of UDisks.FilesystemProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class FilesystemProxyPrivate {
    static name: string
}
export abstract class FilesystemSkeletonClass {
    /* Fields of UDisks.FilesystemSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class FilesystemSkeletonPrivate {
    static name: string
}
export abstract class JobIface {
    /* Fields of UDisks.JobIface */
    parentIface: GObject.TypeInterface
    handleCancel: (object: Job, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getCancelable: (object: Job) => boolean
    getExpectedEndTime: (object: Job) => number
    getObjects: (object: Job) => string[]
    getOperation: (object: Job) => string
    getProgress: (object: Job) => number
    getProgressValid: (object: Job) => boolean
    getStartTime: (object: Job) => number
    getStartedByUid: (object: Job) => number
    completed: (object: Job, argSuccess: boolean, argMessage: string) => void
    getBytes: (object: Job) => number
    getRate: (object: Job) => number
    static name: string
}
export abstract class JobProxyClass {
    /* Fields of UDisks.JobProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class JobProxyPrivate {
    static name: string
}
export abstract class JobSkeletonClass {
    /* Fields of UDisks.JobSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class JobSkeletonPrivate {
    static name: string
}
export abstract class LoopIface {
    /* Fields of UDisks.LoopIface */
    parentIface: GObject.TypeInterface
    handleDelete: (object: Loop, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetAutoclear: (object: Loop, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean
    getAutoclear: (object: Loop) => boolean
    getBackingFile: (object: Loop) => string
    getSetupByUid: (object: Loop) => number
    static name: string
}
export abstract class LoopProxyClass {
    /* Fields of UDisks.LoopProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class LoopProxyPrivate {
    static name: string
}
export abstract class LoopSkeletonClass {
    /* Fields of UDisks.LoopSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class LoopSkeletonPrivate {
    static name: string
}
export abstract class MDRaidIface {
    /* Fields of UDisks.MDRaidIface */
    parentIface: GObject.TypeInterface
    handleAddDevice: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean
    handleDelete: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleRemoveDevice: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean
    handleRequestSyncAction: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean
    handleSetBitmapLocation: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean
    handleStart: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleStop: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getActiveDevices: (object: MDRaid) => GLib.Variant
    getBitmapLocation: (object: MDRaid) => string
    getChildConfiguration: (object: MDRaid) => GLib.Variant
    getChunkSize: (object: MDRaid) => number
    getDegraded: (object: MDRaid) => number
    getLevel: (object: MDRaid) => string
    getName: (object: MDRaid) => string
    getNumDevices: (object: MDRaid) => number
    getRunning: (object: MDRaid) => boolean
    getSize: (object: MDRaid) => number
    getSyncAction: (object: MDRaid) => string
    getSyncCompleted: (object: MDRaid) => number
    getSyncRate: (object: MDRaid) => number
    getSyncRemainingTime: (object: MDRaid) => number
    getUuid: (object: MDRaid) => string
    static name: string
}
export abstract class MDRaidProxyClass {
    /* Fields of UDisks.MDRaidProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class MDRaidProxyPrivate {
    static name: string
}
export abstract class MDRaidSkeletonClass {
    /* Fields of UDisks.MDRaidSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MDRaidSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of UDisks.ManagerIface */
    parentIface: GObject.TypeInterface
    handleEnableModules: (object: Manager, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean
    handleLoopSetup: (object: Manager, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean
    getSupportedFilesystems: (object: Manager) => string[]
    getVersion: (object: Manager) => string
    handleMdraidCreate: (object: Manager, invocation: Gio.DBusMethodInvocation, argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of UDisks.ManagerProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of UDisks.ManagerSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class ObjectIface {
    /* Fields of UDisks.ObjectIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ObjectManagerClientClass {
    /* Fields of UDisks.ObjectManagerClientClass */
    parentClass: Gio.DBusObjectManagerClientClass
    static name: string
}
export class ObjectManagerClientPrivate {
    static name: string
}
export abstract class ObjectProxyClass {
    /* Fields of UDisks.ObjectProxyClass */
    parentClass: Gio.DBusObjectProxyClass
    static name: string
}
export class ObjectProxyPrivate {
    static name: string
}
export abstract class ObjectSkeletonClass {
    /* Fields of UDisks.ObjectSkeletonClass */
    parentClass: Gio.DBusObjectSkeletonClass
    static name: string
}
export class ObjectSkeletonPrivate {
    static name: string
}
export abstract class PartitionIface {
    /* Fields of UDisks.PartitionIface */
    parentIface: GObject.TypeInterface
    handleDelete: (object: Partition, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetFlags: (object: Partition, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean
    handleSetName: (object: Partition, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean
    handleSetType: (object: Partition, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean
    getFlags: (object: Partition) => number
    getIsContained: (object: Partition) => boolean
    getIsContainer: (object: Partition) => boolean
    getName: (object: Partition) => string
    getNumber: (object: Partition) => number
    getOffset: (object: Partition) => number
    getSize: (object: Partition) => number
    getTable: (object: Partition) => string
    getType: (object: Partition) => string
    getUuid: (object: Partition) => string
    static name: string
}
export abstract class PartitionProxyClass {
    /* Fields of UDisks.PartitionProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class PartitionProxyPrivate {
    static name: string
}
export abstract class PartitionSkeletonClass {
    /* Fields of UDisks.PartitionSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PartitionSkeletonPrivate {
    static name: string
}
export abstract class PartitionTableIface {
    /* Fields of UDisks.PartitionTableIface */
    parentIface: GObject.TypeInterface
    handleCreatePartition: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean
    handleCreatePartitionAndFormat: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean
    getType: (object: PartitionTable) => string
    static name: string
}
export abstract class PartitionTableProxyClass {
    /* Fields of UDisks.PartitionTableProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class PartitionTableProxyPrivate {
    static name: string
}
export abstract class PartitionTableSkeletonClass {
    /* Fields of UDisks.PartitionTableSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PartitionTableSkeletonPrivate {
    static name: string
}
export class PartitionTypeInfo {
    /* Fields of UDisks.PartitionTypeInfo */
    tableType: string
    tableSubtype: string
    type: string
    flags: PartitionTypeInfoFlags
    /* Methods of UDisks.PartitionTypeInfo */
    free(): void
    static name: string
}
export abstract class SwapspaceIface {
    /* Fields of UDisks.SwapspaceIface */
    parentIface: GObject.TypeInterface
    handleStart: (object: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleStop: (object: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getActive: (object: Swapspace) => boolean
    static name: string
}
export abstract class SwapspaceProxyClass {
    /* Fields of UDisks.SwapspaceProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class SwapspaceProxyPrivate {
    static name: string
}
export abstract class SwapspaceSkeletonClass {
    /* Fields of UDisks.SwapspaceSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class SwapspaceSkeletonPrivate {
    static name: string
}
}