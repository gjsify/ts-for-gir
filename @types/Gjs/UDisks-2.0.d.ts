/**
 * UDisks-2.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

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
export function block_interface_info(): Gio.DBusInterfaceInfo
export function block_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function drive_ata_interface_info(): Gio.DBusInterfaceInfo
export function drive_ata_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function drive_interface_info(): Gio.DBusInterfaceInfo
export function drive_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function encrypted_interface_info(): Gio.DBusInterfaceInfo
export function encrypted_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function error_quark(): GLib.Quark
export function filesystem_interface_info(): Gio.DBusInterfaceInfo
export function filesystem_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function job_interface_info(): Gio.DBusInterfaceInfo
export function job_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function loop_interface_info(): Gio.DBusInterfaceInfo
export function loop_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function manager_interface_info(): Gio.DBusInterfaceInfo
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function mdraid_interface_info(): Gio.DBusInterfaceInfo
export function mdraid_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function partition_interface_info(): Gio.DBusInterfaceInfo
export function partition_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function partition_table_interface_info(): Gio.DBusInterfaceInfo
export function partition_table_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function swapspace_interface_info(): Gio.DBusInterfaceInfo
export function swapspace_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export class Block {
    /* Properties of UDisks-2.0.UDisks.Block */
    configuration: GLib.Variant
    crypto_backing_device: string
    device: string
    device_number: number
    drive: string
    hint_auto: boolean
    hint_icon_name: string
    hint_ignore: boolean
    hint_name: string
    hint_partitionable: boolean
    hint_symbolic_icon_name: string
    hint_system: boolean
    id: string
    id_label: string
    id_type: string
    id_usage: string
    id_uuid: string
    id_version: string
    mdraid: string
    mdraid_member: string
    preferred_device: string
    read_only: boolean
    size: number
    symlinks: string[]
    /* Methods of UDisks-2.0.UDisks.Block */
    call_add_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_add_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_format(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_format_finish(res: Gio.AsyncResult): boolean
    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_get_secret_configuration(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_secret_configuration_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    call_get_secret_configuration_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    call_open_for_backup(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_backup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_backup_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_benchmark(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_benchmark_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_benchmark_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_restore(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_restore_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_restore_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_remove_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_remove_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_rescan(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_rescan_finish(res: Gio.AsyncResult): boolean
    call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_update_configuration_item(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_update_configuration_item_sync(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void
    complete_format(invocation: Gio.DBusMethodInvocation): void
    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    complete_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void
    complete_rescan(invocation: Gio.DBusMethodInvocation): void
    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.Block */
    vfunc_handle_add_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_update_configuration_item(invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Block */
    connect(sigName: "handle-add-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-format", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-format", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-format", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-get-secret-configuration", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-get-secret-configuration", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-get-secret-configuration", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-backup", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-backup", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-backup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-benchmark", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-benchmark", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-benchmark", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-restore", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-restore", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-restore", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-remove-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-rescan", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-rescan", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-rescan", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-update-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-update-configuration-item", callback: (($obj: Block, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-update-configuration-item", invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Drive {
    /* Properties of UDisks-2.0.UDisks.Drive */
    can_power_off: boolean
    configuration: GLib.Variant
    connection_bus: string
    ejectable: boolean
    id: string
    media: string
    media_available: boolean
    media_change_detected: boolean
    media_compatibility: string[]
    media_removable: boolean
    model: string
    optical: boolean
    optical_blank: boolean
    optical_num_audio_tracks: number
    optical_num_data_tracks: number
    optical_num_sessions: number
    optical_num_tracks: number
    removable: boolean
    revision: string
    rotation_rate: number
    seat: string
    serial: string
    sibling_id: string
    size: number
    sort_key: string
    time_detected: number
    time_media_detected: number
    vendor: string
    wwn: string
    /* Methods of UDisks-2.0.UDisks.Drive */
    call_eject(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_eject_finish(res: Gio.AsyncResult): boolean
    call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_power_off(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_power_off_finish(res: Gio.AsyncResult): boolean
    call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_configuration(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_configuration_finish(res: Gio.AsyncResult): boolean
    call_set_configuration_sync(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_eject(invocation: Gio.DBusMethodInvocation): void
    complete_power_off(invocation: Gio.DBusMethodInvocation): void
    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.Drive */
    vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_configuration(invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Drive */
    connect(sigName: "handle-eject", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-eject", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-eject", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-power-off", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-power-off", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-power-off", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-configuration", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-configuration", callback: (($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-configuration", invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class DriveAta {
    /* Properties of UDisks-2.0.UDisks.DriveAta */
    aam_enabled: boolean
    aam_supported: boolean
    aam_vendor_recommended_value: number
    apm_enabled: boolean
    apm_supported: boolean
    pm_enabled: boolean
    pm_supported: boolean
    read_lookahead_enabled: boolean
    read_lookahead_supported: boolean
    security_enhanced_erase_unit_minutes: number
    security_erase_unit_minutes: number
    security_frozen: boolean
    smart_enabled: boolean
    smart_failing: boolean
    smart_num_attributes_failed_in_the_past: number
    smart_num_attributes_failing: number
    smart_num_bad_sectors: number
    smart_power_on_seconds: number
    smart_selftest_percent_remaining: number
    smart_selftest_status: string
    smart_supported: boolean
    smart_temperature: number
    smart_updated: number
    write_cache_enabled: boolean
    write_cache_supported: boolean
    /* Methods of UDisks-2.0.UDisks.DriveAta */
    call_pm_get_state(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_get_state_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_state */ number ]
    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_state */ number ]
    call_pm_standby(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_standby_finish(res: Gio.AsyncResult): boolean
    call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_pm_wakeup(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean
    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_security_erase_unit(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean
    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_get_attributes(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_get_attributes_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    call_smart_selftest_abort(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean
    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_selftest_start(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean
    call_smart_selftest_start_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_set_enabled(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean
    call_smart_set_enabled_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_update(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_update_finish(res: Gio.AsyncResult): boolean
    call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void
    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void
    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void
    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void
    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void
    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void
    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void
    complete_smart_update(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.DriveAta */
    vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_start(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_set_enabled(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.DriveAta */
    connect(sigName: "handle-pm-get-state", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-get-state", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-get-state", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-pm-standby", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-standby", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-standby", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-pm-wakeup", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-wakeup", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-wakeup", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-security-erase-unit", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-security-erase-unit", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-security-erase-unit", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-get-attributes", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-abort", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-start", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-set-enabled", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-update", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-update", callback: (($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-update", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Encrypted {
    /* Properties of UDisks-2.0.UDisks.Encrypted */
    child_configuration: GLib.Variant
    /* Methods of UDisks-2.0.UDisks.Encrypted */
    call_change_passphrase(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_change_passphrase_finish(res: Gio.AsyncResult): boolean
    call_change_passphrase_sync(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_lock(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_lock_finish(res: Gio.AsyncResult): boolean
    call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_unlock(arg_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_unlock_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    call_unlock_sync(arg_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void
    complete_lock(invocation: Gio.DBusMethodInvocation): void
    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void
    /* Virtual methods of UDisks-2.0.UDisks.Encrypted */
    vfunc_handle_change_passphrase(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): boolean
    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_unlock(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Encrypted */
    connect(sigName: "handle-change-passphrase", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-change-passphrase", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-change-passphrase", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-lock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-lock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-unlock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unlock", callback: (($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Filesystem {
    /* Properties of UDisks-2.0.UDisks.Filesystem */
    mount_points: string[]
    /* Methods of UDisks-2.0.UDisks.Filesystem */
    call_mount(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_mount_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_mount_path */ string ]
    call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_mount_path */ string ]
    call_set_label(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_label_finish(res: Gio.AsyncResult): boolean
    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_unmount(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_unmount_finish(res: Gio.AsyncResult): boolean
    call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void
    complete_set_label(invocation: Gio.DBusMethodInvocation): void
    complete_unmount(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.Filesystem */
    vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean
    vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Filesystem */
    connect(sigName: "handle-mount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-label", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-label", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-label", invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-unmount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unmount", callback: (($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unmount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Job {
    /* Properties of UDisks-2.0.UDisks.Job */
    bytes: number
    cancelable: boolean
    expected_end_time: number
    objects: string[]
    operation: string
    progress: number
    progress_valid: boolean
    rate: number
    start_time: number
    started_by_uid: number
    /* Methods of UDisks-2.0.UDisks.Job */
    call_cancel(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    emit_completed(arg_success: boolean, arg_message: string): void
    /* Virtual methods of UDisks-2.0.UDisks.Job */
    vfunc_completed(arg_success: boolean, arg_message: string): void
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Job */
    connect(sigName: "completed", callback: (($obj: Job, arg_success: boolean, arg_message: string) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Job, arg_success: boolean, arg_message: string) => void)): number
    emit(sigName: "completed", arg_success: boolean, arg_message: string): void
    connect(sigName: "handle-cancel", callback: (($obj: Job, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: Job, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Loop {
    /* Properties of UDisks-2.0.UDisks.Loop */
    autoclear: boolean
    backing_file: string
    setup_by_uid: number
    /* Methods of UDisks-2.0.UDisks.Loop */
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_autoclear(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_autoclear_finish(res: Gio.AsyncResult): boolean
    call_set_autoclear_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.Loop */
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_autoclear(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Loop */
    connect(sigName: "handle-delete", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-autoclear", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-autoclear", callback: (($obj: Loop, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-autoclear", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class MDRaid {
    /* Properties of UDisks-2.0.UDisks.MDRaid */
    active_devices: GLib.Variant
    bitmap_location: string
    child_configuration: GLib.Variant
    chunk_size: number
    degraded: number
    level: string
    name: string
    num_devices: number
    running: boolean
    size: number
    sync_action: string
    sync_completed: number
    sync_rate: number
    sync_remaining_time: number
    uuid: string
    /* Methods of UDisks-2.0.UDisks.MDRaid */
    call_add_device(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_device_finish(res: Gio.AsyncResult): boolean
    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_remove_device(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_device_finish(res: Gio.AsyncResult): boolean
    call_remove_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_request_sync_action(arg_sync_action: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_request_sync_action_finish(res: Gio.AsyncResult): boolean
    call_request_sync_action_sync(arg_sync_action: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_bitmap_location(arg_value: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean
    call_set_bitmap_location_sync(arg_value: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_start(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_stop(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_add_device(invocation: Gio.DBusMethodInvocation): void
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_remove_device(invocation: Gio.DBusMethodInvocation): void
    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void
    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.MDRaid */
    vfunc_handle_add_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_request_sync_action(invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_bitmap_location(invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): boolean
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.MDRaid */
    connect(sigName: "handle-add-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-delete", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-remove-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-device", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-request-sync-action", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-request-sync-action", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-request-sync-action", invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-bitmap-location", invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-start", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-stop", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Manager {
    /* Properties of UDisks-2.0.UDisks.Manager */
    supported_filesystems: string[]
    version: string
    /* Methods of UDisks-2.0.UDisks.Manager */
    call_enable_modules(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_modules_finish(res: Gio.AsyncResult): boolean
    call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_loop_setup(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_loop_setup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    call_loop_setup_sync(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    call_mdraid_create(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_mdraid_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    call_mdraid_create_sync(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void
    complete_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, resulting_device: string): void
    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void
    /* Virtual methods of UDisks-2.0.UDisks.Manager */
    vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_fd: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_mdraid_create(invocation: Gio.DBusMethodInvocation, arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Manager */
    connect(sigName: "handle-enable-modules", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-modules", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-enable-modules", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-loop-setup", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-loop-setup", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-loop-setup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-mdraid-create", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mdraid-create", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mdraid-create", invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Object {
    /* Properties of UDisks-2.0.UDisks.Object */
    block: Block
    drive: Drive
    drive_ata: DriveAta
    encrypted: Encrypted
    filesystem: Filesystem
    job: Job
    loop: Loop
    manager: Manager
    mdraid: MDRaid
    partition: Partition
    partition_table: PartitionTable
    swapspace: Swapspace
    /* Methods of UDisks-2.0.UDisks.Object */
    get_block(): Block
    get_drive(): Drive
    get_drive_ata(): DriveAta
    get_encrypted(): Encrypted
    get_filesystem(): Filesystem
    get_job(): Job
    get_loop(): Loop
    get_manager(): Manager
    get_mdraid(): MDRaid
    get_partition(): Partition
    get_partition_table(): PartitionTable
    get_swapspace(): Swapspace
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Virtual methods of Gio-2.0.Gio.DBusObject */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    static name: string
}
export class Partition {
    /* Properties of UDisks-2.0.UDisks.Partition */
    flags: number
    is_contained: boolean
    is_container: boolean
    name: string
    number: number
    offset: number
    size: number
    table: string
    type: string
    uuid: string
    /* Methods of UDisks-2.0.UDisks.Partition */
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_flags(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_flags_finish(res: Gio.AsyncResult): boolean
    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_name(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_name_finish(res: Gio.AsyncResult): boolean
    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_type(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_type_finish(res: Gio.AsyncResult): boolean
    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_set_flags(invocation: Gio.DBusMethodInvocation): void
    complete_set_name(invocation: Gio.DBusMethodInvocation): void
    complete_set_type(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.Partition */
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_flags(invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean
    vfunc_handle_set_name(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_type(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Partition */
    connect(sigName: "handle-delete", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-flags", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-flags", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-flags", invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-name", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-name", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-name", invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-type", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-type", callback: (($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-type", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class PartitionTable {
    /* Properties of UDisks-2.0.UDisks.PartitionTable */
    type: string
    /* Methods of UDisks-2.0.UDisks.PartitionTable */
    call_create_partition(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_partition_and_format(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_partition_and_format_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_and_format_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void
    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void
    /* Virtual methods of UDisks-2.0.UDisks.PartitionTable */
    vfunc_handle_create_partition(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_create_partition_and_format(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.PartitionTable */
    connect(sigName: "handle-create-partition", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition-and-format", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Swapspace {
    /* Properties of UDisks-2.0.UDisks.Swapspace */
    active: boolean
    /* Methods of UDisks-2.0.UDisks.Swapspace */
    call_start(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_stop(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.Swapspace */
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Signals of UDisks-2.0.UDisks.Swapspace */
    connect(sigName: "handle-start", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-stop", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export interface BlockProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    configuration?: GLib.Variant
    crypto_backing_device?: string
    device?: string
    device_number?: number
    drive?: string
    hint_auto?: boolean
    hint_icon_name?: string
    hint_ignore?: boolean
    hint_name?: string
    hint_partitionable?: boolean
    hint_symbolic_icon_name?: string
    hint_system?: boolean
    id?: string
    id_label?: string
    id_type?: string
    id_usage?: string
    id_uuid?: string
    id_version?: string
    mdraid?: string
    mdraid_member?: string
    preferred_device?: string
    read_only?: boolean
    size?: number
    symlinks?: string[]
}
export class BlockProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Block */
    configuration: GLib.Variant
    crypto_backing_device: string
    device: string
    device_number: number
    drive: string
    hint_auto: boolean
    hint_icon_name: string
    hint_ignore: boolean
    hint_name: string
    hint_partitionable: boolean
    hint_symbolic_icon_name: string
    hint_system: boolean
    id: string
    id_label: string
    id_type: string
    id_usage: string
    id_uuid: string
    id_version: string
    mdraid: string
    mdraid_member: string
    preferred_device: string
    read_only: boolean
    size: number
    symlinks: string[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Block */
    call_add_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_add_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_format(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_format_finish(res: Gio.AsyncResult): boolean
    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_get_secret_configuration(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_secret_configuration_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    call_get_secret_configuration_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    call_open_for_backup(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_backup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_backup_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_benchmark(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_benchmark_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_benchmark_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_restore(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_restore_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_restore_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_remove_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_remove_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_rescan(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_rescan_finish(res: Gio.AsyncResult): boolean
    call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_update_configuration_item(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_update_configuration_item_sync(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void
    complete_format(invocation: Gio.DBusMethodInvocation): void
    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    complete_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void
    complete_rescan(invocation: Gio.DBusMethodInvocation): void
    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.BlockProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_add_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_update_configuration_item(invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: BlockProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: BlockProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: BlockProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: BlockProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Block */
    connect(sigName: "handle-add-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-format", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-format", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-format", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-get-secret-configuration", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-get-secret-configuration", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-get-secret-configuration", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-backup", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-backup", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-backup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-benchmark", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-benchmark", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-benchmark", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-restore", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-restore", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-restore", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-remove-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-rescan", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-rescan", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-rescan", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-update-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-update-configuration-item", callback: (($obj: BlockProxy, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-update-configuration-item", invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::configuration", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::crypto-backing-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crypto-backing-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-number", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-number", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drive", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-auto", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-auto", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-ignore", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-ignore", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-partitionable", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-partitionable", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-system", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-system", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-label", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-label", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-usage", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-usage", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-uuid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-uuid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-version", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-version", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mdraid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mdraid-member", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid-member", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preferred-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::symlinks", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symlinks", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlockProxy_ConstructProps)
    _init (config?: BlockProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): BlockProxy
    static new_for_bus_finish(res: Gio.AsyncResult): BlockProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): BlockProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface BlockSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    configuration?: GLib.Variant
    crypto_backing_device?: string
    device?: string
    device_number?: number
    drive?: string
    hint_auto?: boolean
    hint_icon_name?: string
    hint_ignore?: boolean
    hint_name?: string
    hint_partitionable?: boolean
    hint_symbolic_icon_name?: string
    hint_system?: boolean
    id?: string
    id_label?: string
    id_type?: string
    id_usage?: string
    id_uuid?: string
    id_version?: string
    mdraid?: string
    mdraid_member?: string
    preferred_device?: string
    read_only?: boolean
    size?: number
    symlinks?: string[]
}
export class BlockSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Block */
    configuration: GLib.Variant
    crypto_backing_device: string
    device: string
    device_number: number
    drive: string
    hint_auto: boolean
    hint_icon_name: string
    hint_ignore: boolean
    hint_name: string
    hint_partitionable: boolean
    hint_symbolic_icon_name: string
    hint_system: boolean
    id: string
    id_label: string
    id_type: string
    id_usage: string
    id_uuid: string
    id_version: string
    mdraid: string
    mdraid_member: string
    preferred_device: string
    read_only: boolean
    size: number
    symlinks: string[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Block */
    call_add_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_add_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_format(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_format_finish(res: Gio.AsyncResult): boolean
    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_get_secret_configuration(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_secret_configuration_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    call_get_secret_configuration_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    call_open_for_backup(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_backup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_backup_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_benchmark(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_benchmark_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_benchmark_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_restore(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_for_restore_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_open_for_restore_sync(arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    call_remove_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_remove_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_rescan(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_rescan_finish(res: Gio.AsyncResult): boolean
    call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_update_configuration_item(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean
    call_update_configuration_item_sync(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void
    complete_format(invocation: Gio.DBusMethodInvocation): void
    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    complete_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void
    complete_rescan(invocation: Gio.DBusMethodInvocation): void
    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.BlockSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_add_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_update_configuration_item(invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Block */
    connect(sigName: "handle-add-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-format", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-format", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-format", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-get-secret-configuration", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-get-secret-configuration", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-get-secret-configuration", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-backup", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-backup", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-backup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-benchmark", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-benchmark", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-benchmark", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-open-for-restore", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-open-for-restore", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-open-for-restore", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): void
    connect(sigName: "handle-remove-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-rescan", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-rescan", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-rescan", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-update-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-update-configuration-item", callback: (($obj: BlockSkeleton, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-update-configuration-item", invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::configuration", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::crypto-backing-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crypto-backing-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-number", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-number", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drive", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-auto", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-auto", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-ignore", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-ignore", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-partitionable", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-partitionable", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-system", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-system", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-label", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-label", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-type", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-type", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-usage", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-usage", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-uuid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-uuid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-version", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-version", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mdraid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mdraid-member", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid-member", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preferred-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::symlinks", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symlinks", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlockSkeleton_ConstructProps)
    _init (config?: BlockSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BlockSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Properties of UDisks-2.0.UDisks.Client */
    readonly manager: Manager
    readonly object_manager: Gio.DBusObjectManager
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UDisks-2.0.UDisks.Client */
    get_all_blocks_for_mdraid(raid: MDRaid): Block[]
    get_block_for_dev(block_device_number: number): Block
    get_block_for_drive(drive: Drive, get_physical: boolean): Block
    get_block_for_label(label: string): Block[]
    get_block_for_mdraid(raid: MDRaid): Block
    get_block_for_uuid(uuid: string): Block[]
    get_cleartext_block(block: Block): Block
    get_drive_for_block(block: Block): Drive
    get_drive_info(drive: Drive): [ /* out_name */ string | null, /* out_description */ string | null, /* out_drive_icon */ Gio.Icon | null, /* out_media_description */ string | null, /* out_media_icon */ Gio.Icon | null ]
    get_drive_siblings(drive: Drive): Drive[]
    get_id_for_display(usage: string, type: string, version: string, long_string: boolean): string
    get_job_description(job: Job): string
    get_jobs_for_object(object: Object): Job[]
    get_loop_for_block(block: Block): Loop
    get_manager(): Manager
    get_mdraid_for_block(block: Block): MDRaid
    get_media_compat_for_display(media_compat: string): string
    get_members_for_mdraid(raid: MDRaid): Block[]
    get_object(object_path: string): Object
    get_object_info(object: Object): ObjectInfo
    get_object_manager(): Gio.DBusObjectManager
    get_partition_info(partition: Partition): string
    get_partition_table(partition: Partition): PartitionTable
    get_partition_table_subtype_for_display(partition_table_type: string, partition_table_subtype: string): string
    get_partition_table_subtypes(partition_table_type: string): string[]
    get_partition_table_type_for_display(partition_table_type: string): string
    get_partition_type_and_subtype_for_display(partition_table_type: string, partition_table_subtype: string, partition_type: string): string
    get_partition_type_for_display(partition_table_type: string, partition_type: string): string
    get_partition_type_infos(partition_table_type: string, partition_table_subtype?: string | null): PartitionTypeInfo[]
    get_partitions(table: PartitionTable): Partition[]
    get_size_for_display(size: number, use_pow2: boolean, long_string: boolean): string
    peek_object(object_path: string): Object
    queue_changed(): void
    settle(): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of UDisks-2.0.UDisks.Client */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Client */
    connect(sigName: "changed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Client) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): Client
    static new_sync(cancellable?: Gio.Cancellable | null): Client
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DriveAtaProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    aam_enabled?: boolean
    aam_supported?: boolean
    aam_vendor_recommended_value?: number
    apm_enabled?: boolean
    apm_supported?: boolean
    pm_enabled?: boolean
    pm_supported?: boolean
    read_lookahead_enabled?: boolean
    read_lookahead_supported?: boolean
    security_enhanced_erase_unit_minutes?: number
    security_erase_unit_minutes?: number
    security_frozen?: boolean
    smart_enabled?: boolean
    smart_failing?: boolean
    smart_num_attributes_failed_in_the_past?: number
    smart_num_attributes_failing?: number
    smart_num_bad_sectors?: number
    smart_power_on_seconds?: number
    smart_selftest_percent_remaining?: number
    smart_selftest_status?: string
    smart_supported?: boolean
    smart_temperature?: number
    smart_updated?: number
    write_cache_enabled?: boolean
    write_cache_supported?: boolean
}
export class DriveAtaProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.DriveAta */
    aam_enabled: boolean
    aam_supported: boolean
    aam_vendor_recommended_value: number
    apm_enabled: boolean
    apm_supported: boolean
    pm_enabled: boolean
    pm_supported: boolean
    read_lookahead_enabled: boolean
    read_lookahead_supported: boolean
    security_enhanced_erase_unit_minutes: number
    security_erase_unit_minutes: number
    security_frozen: boolean
    smart_enabled: boolean
    smart_failing: boolean
    smart_num_attributes_failed_in_the_past: number
    smart_num_attributes_failing: number
    smart_num_bad_sectors: number
    smart_power_on_seconds: number
    smart_selftest_percent_remaining: number
    smart_selftest_status: string
    smart_supported: boolean
    smart_temperature: number
    smart_updated: number
    write_cache_enabled: boolean
    write_cache_supported: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.DriveAta */
    call_pm_get_state(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_get_state_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_state */ number ]
    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_state */ number ]
    call_pm_standby(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_standby_finish(res: Gio.AsyncResult): boolean
    call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_pm_wakeup(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean
    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_security_erase_unit(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean
    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_get_attributes(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_get_attributes_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    call_smart_selftest_abort(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean
    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_selftest_start(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean
    call_smart_selftest_start_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_set_enabled(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean
    call_smart_set_enabled_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_update(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_update_finish(res: Gio.AsyncResult): boolean
    call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void
    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void
    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void
    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void
    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void
    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void
    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void
    complete_smart_update(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.DriveAtaProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_start(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_set_enabled(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DriveAtaProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DriveAtaProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: DriveAtaProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DriveAtaProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.DriveAta */
    connect(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-get-state", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-pm-standby", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-standby", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-standby", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-wakeup", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-security-erase-unit", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-get-attributes", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-abort", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-start", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-set-enabled", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-update", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-update", callback: (($obj: DriveAtaProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-update", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::aam-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::apm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-frozen", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-frozen", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-updated", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-updated", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DriveAtaProxy_ConstructProps)
    _init (config?: DriveAtaProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DriveAtaProxy
    static new_for_bus_finish(res: Gio.AsyncResult): DriveAtaProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DriveAtaProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface DriveAtaSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    aam_enabled?: boolean
    aam_supported?: boolean
    aam_vendor_recommended_value?: number
    apm_enabled?: boolean
    apm_supported?: boolean
    pm_enabled?: boolean
    pm_supported?: boolean
    read_lookahead_enabled?: boolean
    read_lookahead_supported?: boolean
    security_enhanced_erase_unit_minutes?: number
    security_erase_unit_minutes?: number
    security_frozen?: boolean
    smart_enabled?: boolean
    smart_failing?: boolean
    smart_num_attributes_failed_in_the_past?: number
    smart_num_attributes_failing?: number
    smart_num_bad_sectors?: number
    smart_power_on_seconds?: number
    smart_selftest_percent_remaining?: number
    smart_selftest_status?: string
    smart_supported?: boolean
    smart_temperature?: number
    smart_updated?: number
    write_cache_enabled?: boolean
    write_cache_supported?: boolean
}
export class DriveAtaSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.DriveAta */
    aam_enabled: boolean
    aam_supported: boolean
    aam_vendor_recommended_value: number
    apm_enabled: boolean
    apm_supported: boolean
    pm_enabled: boolean
    pm_supported: boolean
    read_lookahead_enabled: boolean
    read_lookahead_supported: boolean
    security_enhanced_erase_unit_minutes: number
    security_erase_unit_minutes: number
    security_frozen: boolean
    smart_enabled: boolean
    smart_failing: boolean
    smart_num_attributes_failed_in_the_past: number
    smart_num_attributes_failing: number
    smart_num_bad_sectors: number
    smart_power_on_seconds: number
    smart_selftest_percent_remaining: number
    smart_selftest_status: string
    smart_supported: boolean
    smart_temperature: number
    smart_updated: number
    write_cache_enabled: boolean
    write_cache_supported: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.DriveAta */
    call_pm_get_state(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_get_state_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_state */ number ]
    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_state */ number ]
    call_pm_standby(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_standby_finish(res: Gio.AsyncResult): boolean
    call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_pm_wakeup(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean
    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_security_erase_unit(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean
    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_get_attributes(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_get_attributes_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    call_smart_selftest_abort(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean
    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_selftest_start(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean
    call_smart_selftest_start_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_set_enabled(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean
    call_smart_set_enabled_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_smart_update(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_smart_update_finish(res: Gio.AsyncResult): boolean
    call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void
    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void
    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void
    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void
    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void
    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void
    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void
    complete_smart_update(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.DriveAtaSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_start(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_set_enabled(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.DriveAta */
    connect(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-get-state", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-get-state", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-pm-standby", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-standby", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-standby", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-pm-wakeup", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-pm-wakeup", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-security-erase-unit", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-security-erase-unit", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-get-attributes", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-get-attributes", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-abort", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-abort", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-selftest-start", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-selftest-start", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-set-enabled", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-set-enabled", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): void
    connect(sigName: "handle-smart-update", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-smart-update", callback: (($obj: DriveAtaSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-smart-update", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::aam-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::apm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-frozen", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-frozen", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smart-updated", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-updated", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DriveAtaSkeleton_ConstructProps)
    _init (config?: DriveAtaSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DriveAtaSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface DriveProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    can_power_off?: boolean
    configuration?: GLib.Variant
    connection_bus?: string
    ejectable?: boolean
    id?: string
    media?: string
    media_available?: boolean
    media_change_detected?: boolean
    media_compatibility?: string[]
    media_removable?: boolean
    model?: string
    optical?: boolean
    optical_blank?: boolean
    optical_num_audio_tracks?: number
    optical_num_data_tracks?: number
    optical_num_sessions?: number
    optical_num_tracks?: number
    removable?: boolean
    revision?: string
    rotation_rate?: number
    seat?: string
    serial?: string
    sibling_id?: string
    size?: number
    sort_key?: string
    time_detected?: number
    time_media_detected?: number
    vendor?: string
    wwn?: string
}
export class DriveProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Drive */
    can_power_off: boolean
    configuration: GLib.Variant
    connection_bus: string
    ejectable: boolean
    id: string
    media: string
    media_available: boolean
    media_change_detected: boolean
    media_compatibility: string[]
    media_removable: boolean
    model: string
    optical: boolean
    optical_blank: boolean
    optical_num_audio_tracks: number
    optical_num_data_tracks: number
    optical_num_sessions: number
    optical_num_tracks: number
    removable: boolean
    revision: string
    rotation_rate: number
    seat: string
    serial: string
    sibling_id: string
    size: number
    sort_key: string
    time_detected: number
    time_media_detected: number
    vendor: string
    wwn: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Drive */
    call_eject(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_eject_finish(res: Gio.AsyncResult): boolean
    call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_power_off(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_power_off_finish(res: Gio.AsyncResult): boolean
    call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_configuration(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_configuration_finish(res: Gio.AsyncResult): boolean
    call_set_configuration_sync(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_eject(invocation: Gio.DBusMethodInvocation): void
    complete_power_off(invocation: Gio.DBusMethodInvocation): void
    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.DriveProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_configuration(invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DriveProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DriveProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: DriveProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DriveProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Drive */
    connect(sigName: "handle-eject", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-eject", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-eject", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-power-off", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-power-off", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-power-off", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-configuration", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-configuration", callback: (($obj: DriveProxy, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-configuration", invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-power-off", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-power-off", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::configuration", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-bus", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-bus", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ejectable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ejectable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-available", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-available", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-change-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-change-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-compatibility", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-compatibility", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-blank", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-blank", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-sessions", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-sessions", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-rate", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-rate", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sibling-id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sibling-id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-key", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-key", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-media-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-media-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wwn", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwn", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DriveProxy_ConstructProps)
    _init (config?: DriveProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DriveProxy
    static new_for_bus_finish(res: Gio.AsyncResult): DriveProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DriveProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface DriveSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    can_power_off?: boolean
    configuration?: GLib.Variant
    connection_bus?: string
    ejectable?: boolean
    id?: string
    media?: string
    media_available?: boolean
    media_change_detected?: boolean
    media_compatibility?: string[]
    media_removable?: boolean
    model?: string
    optical?: boolean
    optical_blank?: boolean
    optical_num_audio_tracks?: number
    optical_num_data_tracks?: number
    optical_num_sessions?: number
    optical_num_tracks?: number
    removable?: boolean
    revision?: string
    rotation_rate?: number
    seat?: string
    serial?: string
    sibling_id?: string
    size?: number
    sort_key?: string
    time_detected?: number
    time_media_detected?: number
    vendor?: string
    wwn?: string
}
export class DriveSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Drive */
    can_power_off: boolean
    configuration: GLib.Variant
    connection_bus: string
    ejectable: boolean
    id: string
    media: string
    media_available: boolean
    media_change_detected: boolean
    media_compatibility: string[]
    media_removable: boolean
    model: string
    optical: boolean
    optical_blank: boolean
    optical_num_audio_tracks: number
    optical_num_data_tracks: number
    optical_num_sessions: number
    optical_num_tracks: number
    removable: boolean
    revision: string
    rotation_rate: number
    seat: string
    serial: string
    sibling_id: string
    size: number
    sort_key: string
    time_detected: number
    time_media_detected: number
    vendor: string
    wwn: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Drive */
    call_eject(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_eject_finish(res: Gio.AsyncResult): boolean
    call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_power_off(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_power_off_finish(res: Gio.AsyncResult): boolean
    call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_configuration(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_configuration_finish(res: Gio.AsyncResult): boolean
    call_set_configuration_sync(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_eject(invocation: Gio.DBusMethodInvocation): void
    complete_power_off(invocation: Gio.DBusMethodInvocation): void
    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.DriveSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_configuration(invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Drive */
    connect(sigName: "handle-eject", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-eject", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-eject", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-power-off", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-power-off", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-power-off", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-configuration", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-configuration", callback: (($obj: DriveSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-configuration", invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-power-off", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-power-off", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::configuration", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-bus", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-bus", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ejectable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ejectable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-available", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-available", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-change-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-change-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-compatibility", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-compatibility", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-blank", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-blank", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-sessions", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-sessions", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::optical-num-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::revision", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-rate", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-rate", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sibling-id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sibling-id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-key", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-key", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-media-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-media-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wwn", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwn", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DriveSkeleton_ConstructProps)
    _init (config?: DriveSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DriveSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface EncryptedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    child_configuration?: GLib.Variant
}
export class EncryptedProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Encrypted */
    child_configuration: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Encrypted */
    call_change_passphrase(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_change_passphrase_finish(res: Gio.AsyncResult): boolean
    call_change_passphrase_sync(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_lock(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_lock_finish(res: Gio.AsyncResult): boolean
    call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_unlock(arg_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_unlock_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    call_unlock_sync(arg_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void
    complete_lock(invocation: Gio.DBusMethodInvocation): void
    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void
    /* Virtual methods of UDisks-2.0.UDisks.EncryptedProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_change_passphrase(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): boolean
    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_unlock(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: EncryptedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: EncryptedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: EncryptedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: EncryptedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Encrypted */
    connect(sigName: "handle-change-passphrase", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-change-passphrase", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-change-passphrase", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-lock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-lock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-unlock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unlock", callback: (($obj: EncryptedProxy, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-configuration", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncryptedProxy_ConstructProps)
    _init (config?: EncryptedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): EncryptedProxy
    static new_for_bus_finish(res: Gio.AsyncResult): EncryptedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): EncryptedProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface EncryptedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    child_configuration?: GLib.Variant
}
export class EncryptedSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Encrypted */
    child_configuration: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Encrypted */
    call_change_passphrase(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_change_passphrase_finish(res: Gio.AsyncResult): boolean
    call_change_passphrase_sync(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_lock(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_lock_finish(res: Gio.AsyncResult): boolean
    call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_unlock(arg_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_unlock_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    call_unlock_sync(arg_passphrase: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void
    complete_lock(invocation: Gio.DBusMethodInvocation): void
    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void
    /* Virtual methods of UDisks-2.0.UDisks.EncryptedSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_change_passphrase(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): boolean
    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_unlock(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Encrypted */
    connect(sigName: "handle-change-passphrase", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-change-passphrase", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-change-passphrase", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-lock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-lock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-unlock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unlock", callback: (($obj: EncryptedSkeleton, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-configuration", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncryptedSkeleton_ConstructProps)
    _init (config?: EncryptedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EncryptedSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface FilesystemProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    mount_points?: string[]
}
export class FilesystemProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Filesystem */
    mount_points: string[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Filesystem */
    call_mount(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_mount_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_mount_path */ string ]
    call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_mount_path */ string ]
    call_set_label(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_label_finish(res: Gio.AsyncResult): boolean
    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_unmount(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_unmount_finish(res: Gio.AsyncResult): boolean
    call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void
    complete_set_label(invocation: Gio.DBusMethodInvocation): void
    complete_unmount(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.FilesystemProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean
    vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: FilesystemProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: FilesystemProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: FilesystemProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: FilesystemProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Filesystem */
    connect(sigName: "handle-mount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-label", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-label", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-label", invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-unmount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unmount", callback: (($obj: FilesystemProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unmount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilesystemProxy_ConstructProps)
    _init (config?: FilesystemProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): FilesystemProxy
    static new_for_bus_finish(res: Gio.AsyncResult): FilesystemProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): FilesystemProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface FilesystemSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    mount_points?: string[]
}
export class FilesystemSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Filesystem */
    mount_points: string[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Filesystem */
    call_mount(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_mount_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_mount_path */ string ]
    call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_mount_path */ string ]
    call_set_label(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_label_finish(res: Gio.AsyncResult): boolean
    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_unmount(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_unmount_finish(res: Gio.AsyncResult): boolean
    call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void
    complete_set_label(invocation: Gio.DBusMethodInvocation): void
    complete_unmount(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.FilesystemSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean
    vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Filesystem */
    connect(sigName: "handle-mount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-label", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-label", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-label", invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-unmount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-unmount", callback: (($obj: FilesystemSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-unmount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilesystemSkeleton_ConstructProps)
    _init (config?: FilesystemSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilesystemSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface JobProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    bytes?: number
    cancelable?: boolean
    expected_end_time?: number
    objects?: string[]
    operation?: string
    progress?: number
    progress_valid?: boolean
    rate?: number
    start_time?: number
    started_by_uid?: number
}
export class JobProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Job */
    bytes: number
    cancelable: boolean
    expected_end_time: number
    objects: string[]
    operation: string
    progress: number
    progress_valid: boolean
    rate: number
    start_time: number
    started_by_uid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Job */
    call_cancel(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    emit_completed(arg_success: boolean, arg_message: string): void
    /* Virtual methods of UDisks-2.0.UDisks.JobProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_completed(arg_success: boolean, arg_message: string): void
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: JobProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: JobProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: JobProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: JobProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Job */
    connect(sigName: "completed", callback: (($obj: JobProxy, arg_success: boolean, arg_message: string) => void)): number
    connect_after(sigName: "completed", callback: (($obj: JobProxy, arg_success: boolean, arg_message: string) => void)): number
    emit(sigName: "completed", arg_success: boolean, arg_message: string): void
    connect(sigName: "handle-cancel", callback: (($obj: JobProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: JobProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bytes", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cancelable", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expected-end-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expected-end-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::objects", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::objects", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operation", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-valid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-valid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::started-by-uid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::started-by-uid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobProxy_ConstructProps)
    _init (config?: JobProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): JobProxy
    static new_for_bus_finish(res: Gio.AsyncResult): JobProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): JobProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): JobProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): JobProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): JobProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface JobSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    bytes?: number
    cancelable?: boolean
    expected_end_time?: number
    objects?: string[]
    operation?: string
    progress?: number
    progress_valid?: boolean
    rate?: number
    start_time?: number
    started_by_uid?: number
}
export class JobSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Job */
    bytes: number
    cancelable: boolean
    expected_end_time: number
    objects: string[]
    operation: string
    progress: number
    progress_valid: boolean
    rate: number
    start_time: number
    started_by_uid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Job */
    call_cancel(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    emit_completed(arg_success: boolean, arg_message: string): void
    /* Virtual methods of UDisks-2.0.UDisks.JobSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_completed(arg_success: boolean, arg_message: string): void
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Job */
    connect(sigName: "completed", callback: (($obj: JobSkeleton, arg_success: boolean, arg_message: string) => void)): number
    connect_after(sigName: "completed", callback: (($obj: JobSkeleton, arg_success: boolean, arg_message: string) => void)): number
    emit(sigName: "completed", arg_success: boolean, arg_message: string): void
    connect(sigName: "handle-cancel", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: JobSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bytes", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cancelable", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expected-end-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expected-end-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::objects", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::objects", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operation", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-valid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-valid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::started-by-uid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::started-by-uid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobSkeleton_ConstructProps)
    _init (config?: JobSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): JobSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface LoopProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    autoclear?: boolean
    backing_file?: string
    setup_by_uid?: number
}
export class LoopProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Loop */
    autoclear: boolean
    backing_file: string
    setup_by_uid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Loop */
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_autoclear(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_autoclear_finish(res: Gio.AsyncResult): boolean
    call_set_autoclear_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.LoopProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_autoclear(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: LoopProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: LoopProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: LoopProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: LoopProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Loop */
    connect(sigName: "handle-delete", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-autoclear", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-autoclear", callback: (($obj: LoopProxy, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-autoclear", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoclear", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoclear", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backing-file", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backing-file", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::setup-by-uid", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup-by-uid", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LoopProxy_ConstructProps)
    _init (config?: LoopProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): LoopProxy
    static new_for_bus_finish(res: Gio.AsyncResult): LoopProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): LoopProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface LoopSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    autoclear?: boolean
    backing_file?: string
    setup_by_uid?: number
}
export class LoopSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Loop */
    autoclear: boolean
    backing_file: string
    setup_by_uid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Loop */
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_autoclear(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_autoclear_finish(res: Gio.AsyncResult): boolean
    call_set_autoclear_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.LoopSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_autoclear(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Loop */
    connect(sigName: "handle-delete", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-autoclear", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-autoclear", callback: (($obj: LoopSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-autoclear", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::autoclear", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoclear", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backing-file", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backing-file", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::setup-by-uid", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup-by-uid", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LoopSkeleton_ConstructProps)
    _init (config?: LoopSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LoopSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MDRaidProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    active_devices?: GLib.Variant
    bitmap_location?: string
    child_configuration?: GLib.Variant
    chunk_size?: number
    degraded?: number
    level?: string
    name?: string
    num_devices?: number
    running?: boolean
    size?: number
    sync_action?: string
    sync_completed?: number
    sync_rate?: number
    sync_remaining_time?: number
    uuid?: string
}
export class MDRaidProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.MDRaid */
    active_devices: GLib.Variant
    bitmap_location: string
    child_configuration: GLib.Variant
    chunk_size: number
    degraded: number
    level: string
    name: string
    num_devices: number
    running: boolean
    size: number
    sync_action: string
    sync_completed: number
    sync_rate: number
    sync_remaining_time: number
    uuid: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.MDRaid */
    call_add_device(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_device_finish(res: Gio.AsyncResult): boolean
    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_remove_device(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_device_finish(res: Gio.AsyncResult): boolean
    call_remove_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_request_sync_action(arg_sync_action: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_request_sync_action_finish(res: Gio.AsyncResult): boolean
    call_request_sync_action_sync(arg_sync_action: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_bitmap_location(arg_value: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean
    call_set_bitmap_location_sync(arg_value: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_start(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_stop(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_add_device(invocation: Gio.DBusMethodInvocation): void
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_remove_device(invocation: Gio.DBusMethodInvocation): void
    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void
    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.MDRaidProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_add_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_request_sync_action(invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_bitmap_location(invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): boolean
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: MDRaidProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MDRaidProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: MDRaidProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MDRaidProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.MDRaid */
    connect(sigName: "handle-add-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-delete", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-remove-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-device", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-request-sync-action", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-request-sync-action", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-request-sync-action", invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-bitmap-location", invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-start", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-stop", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: MDRaidProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitmap-location", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitmap-location", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-configuration", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chunk-size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::degraded", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::degraded", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::level", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-action", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-action", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-completed", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-completed", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-rate", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-rate", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MDRaidProxy_ConstructProps)
    _init (config?: MDRaidProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): MDRaidProxy
    static new_for_bus_finish(res: Gio.AsyncResult): MDRaidProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MDRaidProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MDRaidSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    active_devices?: GLib.Variant
    bitmap_location?: string
    child_configuration?: GLib.Variant
    chunk_size?: number
    degraded?: number
    level?: string
    name?: string
    num_devices?: number
    running?: boolean
    size?: number
    sync_action?: string
    sync_completed?: number
    sync_rate?: number
    sync_remaining_time?: number
    uuid?: string
}
export class MDRaidSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.MDRaid */
    active_devices: GLib.Variant
    bitmap_location: string
    child_configuration: GLib.Variant
    chunk_size: number
    degraded: number
    level: string
    name: string
    num_devices: number
    running: boolean
    size: number
    sync_action: string
    sync_completed: number
    sync_rate: number
    sync_remaining_time: number
    uuid: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.MDRaid */
    call_add_device(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_device_finish(res: Gio.AsyncResult): boolean
    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_remove_device(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_device_finish(res: Gio.AsyncResult): boolean
    call_remove_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_request_sync_action(arg_sync_action: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_request_sync_action_finish(res: Gio.AsyncResult): boolean
    call_request_sync_action_sync(arg_sync_action: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_bitmap_location(arg_value: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean
    call_set_bitmap_location_sync(arg_value: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_start(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_stop(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_add_device(invocation: Gio.DBusMethodInvocation): void
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_remove_device(invocation: Gio.DBusMethodInvocation): void
    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void
    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.MDRaidSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_add_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_request_sync_action(invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_bitmap_location(invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): boolean
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.MDRaid */
    connect(sigName: "handle-add-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-delete", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-remove-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-remove-device", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-remove-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-request-sync-action", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-request-sync-action", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-request-sync-action", invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-bitmap-location", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-bitmap-location", invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-start", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-stop", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: MDRaidSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bitmap-location", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitmap-location", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-configuration", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chunk-size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::degraded", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::degraded", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::level", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-action", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-action", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-completed", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-completed", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-rate", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-rate", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MDRaidSkeleton_ConstructProps)
    _init (config?: MDRaidSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MDRaidSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    supported_filesystems?: string[]
    version?: string
}
export class ManagerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Manager */
    supported_filesystems: string[]
    version: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Manager */
    call_enable_modules(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_modules_finish(res: Gio.AsyncResult): boolean
    call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_loop_setup(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_loop_setup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    call_loop_setup_sync(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    call_mdraid_create(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_mdraid_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    call_mdraid_create_sync(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void
    complete_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, resulting_device: string): void
    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void
    /* Virtual methods of UDisks-2.0.UDisks.ManagerProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_fd: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_mdraid_create(invocation: Gio.DBusMethodInvocation, arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Manager */
    connect(sigName: "handle-enable-modules", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-modules", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-enable-modules", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-loop-setup", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-loop-setup", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-loop-setup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-mdraid-create", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mdraid-create", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mdraid-create", invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-filesystems", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-filesystems", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ManagerProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    supported_filesystems?: string[]
    version?: string
}
export class ManagerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Manager */
    supported_filesystems: string[]
    version: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Manager */
    call_enable_modules(arg_enable: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_modules_finish(res: Gio.AsyncResult): boolean
    call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean
    call_loop_setup(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_loop_setup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    call_loop_setup_sync(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    call_mdraid_create(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_mdraid_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    call_mdraid_create_sync(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void
    complete_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, resulting_device: string): void
    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void
    /* Virtual methods of UDisks-2.0.UDisks.ManagerSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_fd: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_mdraid_create(invocation: Gio.DBusMethodInvocation, arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Manager */
    connect(sigName: "handle-enable-modules", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    connect_after(sigName: "handle-enable-modules", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean)): number
    emit(sigName: "handle-enable-modules", invocation: Gio.DBusMethodInvocation, arg_enable: boolean): void
    connect(sigName: "handle-loop-setup", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-loop-setup", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-loop-setup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant): void
    connect(sigName: "handle-mdraid-create", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-mdraid-create", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-mdraid-create", invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-filesystems", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-filesystems", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ManagerSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ObjectInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class ObjectInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UDisks-2.0.UDisks.ObjectInfo */
    get_description(): string
    get_icon(): Gio.Icon
    get_icon_symbolic(): Gio.Icon
    get_media_description(): string
    get_media_icon(): Gio.Icon
    get_media_icon_symbolic(): Gio.Icon
    get_name(): string
    get_object(): Object
    get_one_liner(): string
    get_sort_key(): string
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
    connect(sigName: "notify", callback: (($obj: ObjectInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectInfo_ConstructProps)
    _init (config?: ObjectInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
export class ObjectManagerClient {
    /* Properties of Gio-2.0.Gio.DBusObjectManagerClient */
    readonly name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectManagerClient */
    get_connection(): Gio.DBusConnection
    get_flags(): Gio.DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null
    get_object(object_path: string): Gio.DBusObject | null
    get_object_path(): string
    get_objects(): Gio.DBusObject[]
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of UDisks-2.0.UDisks.ObjectManagerClient */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null
    vfunc_get_object(object_path: string): Gio.DBusObject | null
    vfunc_get_object_path(): string
    vfunc_get_objects(): Gio.DBusObject[]
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_object_added(object: Gio.DBusObject): void
    vfunc_object_removed(object: Gio.DBusObject): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    connect(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectManagerClient_ConstructProps)
    _init (config?: ObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ObjectManagerClient
    static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name?: string | null, user_data?: object | null): GObject.Type
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ObjectProxy_ConstructProps extends Gio.DBusObjectProxy_ConstructProps {
    block?: Block
    drive?: Drive
    drive_ata?: DriveAta
    encrypted?: Encrypted
    filesystem?: Filesystem
    job?: Job
    loop?: Loop
    manager?: Manager
    mdraid?: MDRaid
    partition?: Partition
    partition_table?: PartitionTable
    swapspace?: Swapspace
}
export class ObjectProxy {
    /* Properties of UDisks-2.0.UDisks.Object */
    block: Block
    drive: Drive
    drive_ata: DriveAta
    encrypted: Encrypted
    filesystem: Filesystem
    job: Job
    loop: Loop
    manager: Manager
    mdraid: MDRaid
    partition: Partition
    partition_table: PartitionTable
    swapspace: Swapspace
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectProxy */
    get_connection(): Gio.DBusConnection
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Methods of UDisks-2.0.UDisks.Object */
    get_block(): Block
    get_drive(): Drive
    get_drive_ata(): DriveAta
    get_encrypted(): Encrypted
    get_filesystem(): Filesystem
    get_job(): Job
    get_loop(): Loop
    get_manager(): Manager
    get_mdraid(): MDRaid
    get_partition(): Partition
    get_partition_table(): PartitionTable
    get_swapspace(): Swapspace
    /* Virtual methods of UDisks-2.0.UDisks.ObjectProxy */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::block", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drive", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drive-ata", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-ata", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encrypted", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filesystem", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesystem", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::job", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::loop", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mdraid", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::partition", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::partition-table", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-table", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swapspace", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapspace", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectProxy_ConstructProps)
    _init (config?: ObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, object_path: string): ObjectProxy
    static $gtype: GObject.Type
}
export interface ObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
    block?: Block
    drive?: Drive
    drive_ata?: DriveAta
    encrypted?: Encrypted
    filesystem?: Filesystem
    job?: Job
    loop?: Loop
    manager?: Manager
    mdraid?: MDRaid
    partition?: Partition
    partition_table?: PartitionTable
    swapspace?: Swapspace
}
export class ObjectSkeleton {
    /* Properties of Gio-2.0.Gio.DBusObjectSkeleton */
    g_object_path: string
    /* Properties of UDisks-2.0.UDisks.Object */
    block: Block
    drive: Drive
    drive_ata: DriveAta
    encrypted: Encrypted
    filesystem: Filesystem
    job: Job
    loop: Loop
    manager: Manager
    mdraid: MDRaid
    partition: Partition
    partition_table: PartitionTable
    swapspace: Swapspace
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UDisks-2.0.UDisks.ObjectSkeleton */
    set_block(interface_?: Block | null): void
    set_drive(interface_?: Drive | null): void
    set_drive_ata(interface_?: DriveAta | null): void
    set_encrypted(interface_?: Encrypted | null): void
    set_filesystem(interface_?: Filesystem | null): void
    set_job(interface_?: Job | null): void
    set_loop(interface_?: Loop | null): void
    set_manager(interface_?: Manager | null): void
    set_mdraid(interface_?: MDRaid | null): void
    set_partition(interface_?: Partition | null): void
    set_partition_table(interface_?: PartitionTable | null): void
    set_swapspace(interface_?: Swapspace | null): void
    /* Methods of Gio-2.0.Gio.DBusObjectSkeleton */
    add_interface(interface_: Gio.DBusInterfaceSkeleton): void
    flush(): void
    remove_interface(interface_: Gio.DBusInterfaceSkeleton): void
    remove_interface_by_name(interface_name: string): void
    set_object_path(object_path: string): void
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Methods of UDisks-2.0.UDisks.Object */
    get_block(): Block
    get_drive(): Drive
    get_drive_ata(): DriveAta
    get_encrypted(): Encrypted
    get_filesystem(): Filesystem
    get_job(): Job
    get_loop(): Loop
    get_manager(): Manager
    get_mdraid(): MDRaid
    get_partition(): Partition
    get_partition_table(): PartitionTable
    get_swapspace(): Swapspace
    /* Virtual methods of UDisks-2.0.UDisks.ObjectSkeleton */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of Gio-2.0.Gio.DBusObjectSkeleton */
    vfunc_authorize_method(interface_: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::block", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drive", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drive-ata", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-ata", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encrypted", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filesystem", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesystem", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::job", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::loop", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mdraid", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::partition", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::partition-table", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-table", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swapspace", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapspace", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectSkeleton_ConstructProps)
    _init (config?: ObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object_path: string): ObjectSkeleton
    static $gtype: GObject.Type
}
export interface PartitionProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    flags?: number
    is_contained?: boolean
    is_container?: boolean
    name?: string
    number?: number
    offset?: number
    size?: number
    table?: string
    type?: string
    uuid?: string
}
export class PartitionProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Partition */
    flags: number
    is_contained: boolean
    is_container: boolean
    name: string
    number: number
    offset: number
    size: number
    table: string
    type: string
    uuid: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Partition */
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_flags(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_flags_finish(res: Gio.AsyncResult): boolean
    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_name(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_name_finish(res: Gio.AsyncResult): boolean
    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_type(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_type_finish(res: Gio.AsyncResult): boolean
    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_set_flags(invocation: Gio.DBusMethodInvocation): void
    complete_set_name(invocation: Gio.DBusMethodInvocation): void
    complete_set_type(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.PartitionProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_flags(invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean
    vfunc_handle_set_name(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_type(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: PartitionProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PartitionProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: PartitionProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PartitionProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Partition */
    connect(sigName: "handle-delete", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-flags", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-flags", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-flags", invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-name", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-name", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-name", invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-type", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-type", callback: (($obj: PartitionProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-type", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-contained", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-contained", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-container", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-container", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::table", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PartitionProxy_ConstructProps)
    _init (config?: PartitionProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): PartitionProxy
    static new_for_bus_finish(res: Gio.AsyncResult): PartitionProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PartitionProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PartitionSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    flags?: number
    is_contained?: boolean
    is_container?: boolean
    name?: string
    number?: number
    offset?: number
    size?: number
    table?: string
    type?: string
    uuid?: string
}
export class PartitionSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Partition */
    flags: number
    is_contained: boolean
    is_container: boolean
    name: string
    number: number
    offset: number
    size: number
    table: string
    type: string
    uuid: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Partition */
    call_delete(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_delete_finish(res: Gio.AsyncResult): boolean
    call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_flags(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_flags_finish(res: Gio.AsyncResult): boolean
    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_name(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_name_finish(res: Gio.AsyncResult): boolean
    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_set_type(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_set_type_finish(res: Gio.AsyncResult): boolean
    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    complete_set_flags(invocation: Gio.DBusMethodInvocation): void
    complete_set_name(invocation: Gio.DBusMethodInvocation): void
    complete_set_type(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.PartitionSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_flags(invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean
    vfunc_handle_set_name(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_type(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Partition */
    connect(sigName: "handle-delete", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-delete", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-flags", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-flags", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-flags", invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-name", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-name", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-name", invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-set-type", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-set-type", callback: (($obj: PartitionSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-set-type", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-contained", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-contained", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-container", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-container", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::table", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PartitionSkeleton_ConstructProps)
    _init (config?: PartitionSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PartitionSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PartitionTableProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    type?: string
}
export class PartitionTableProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.PartitionTable */
    type: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.PartitionTable */
    call_create_partition(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_partition_and_format(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_partition_and_format_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_and_format_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void
    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void
    /* Virtual methods of UDisks-2.0.UDisks.PartitionTableProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_create_partition(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_create_partition_and_format(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: PartitionTableProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PartitionTableProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: PartitionTableProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PartitionTableProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.PartitionTable */
    connect(sigName: "handle-create-partition", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableProxy, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition-and-format", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PartitionTableProxy_ConstructProps)
    _init (config?: PartitionTableProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): PartitionTableProxy
    static new_for_bus_finish(res: Gio.AsyncResult): PartitionTableProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PartitionTableProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PartitionTableSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    type?: string
}
export class PartitionTableSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.PartitionTable */
    type: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.PartitionTable */
    call_create_partition(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_partition_and_format(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_create_partition_and_format_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_and_format_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    call_create_partition_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void
    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void
    /* Virtual methods of UDisks-2.0.UDisks.PartitionTableSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_create_partition(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_create_partition_and_format(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.PartitionTable */
    connect(sigName: "handle-create-partition", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): void
    connect(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-create-partition-and-format", callback: (($obj: PartitionTableSkeleton, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-create-partition-and-format", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PartitionTableSkeleton_ConstructProps)
    _init (config?: PartitionTableSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PartitionTableSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface SwapspaceProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    active?: boolean
}
export class SwapspaceProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UDisks-2.0.UDisks.Swapspace */
    active: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UDisks-2.0.UDisks.Swapspace */
    call_start(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_stop(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.SwapspaceProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: SwapspaceProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: SwapspaceProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: SwapspaceProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: SwapspaceProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Swapspace */
    connect(sigName: "handle-start", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-stop", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: SwapspaceProxy, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SwapspaceProxy_ConstructProps)
    _init (config?: SwapspaceProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): SwapspaceProxy
    static new_for_bus_finish(res: Gio.AsyncResult): SwapspaceProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): SwapspaceProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface SwapspaceSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    active?: boolean
}
export class SwapspaceSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UDisks-2.0.UDisks.Swapspace */
    active: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UDisks-2.0.UDisks.Swapspace */
    call_start(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_finish(res: Gio.AsyncResult): boolean
    call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_stop(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_stop_finish(res: Gio.AsyncResult): boolean
    call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_start(invocation: Gio.DBusMethodInvocation): void
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UDisks-2.0.UDisks.SwapspaceSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UDisks-2.0.UDisks.Swapspace */
    connect(sigName: "handle-start", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-start", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "handle-stop", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-stop", callback: (($obj: SwapspaceSkeleton, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean)): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SwapspaceSkeleton_ConstructProps)
    _init (config?: SwapspaceSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SwapspaceSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export abstract class BlockIface {
    /* Fields of UDisks-2.0.UDisks.BlockIface */
    parent_iface: GObject.TypeInterface
    handle_add_configuration_item: (object: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean
    handle_format: (object: Block, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean
    handle_get_secret_configuration: (object: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_open_for_backup: (object: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant) => boolean
    handle_open_for_benchmark: (object: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant) => boolean
    handle_open_for_restore: (object: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant) => boolean
    handle_remove_configuration_item: (object: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean
    handle_rescan: (object: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_update_configuration_item: (object: Block, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean
    get_configuration: (object: Block) => GLib.Variant
    get_crypto_backing_device: (object: Block) => string
    get_device: (object: Block) => string
    get_device_number: (object: Block) => number
    get_drive: (object: Block) => string
    get_hint_auto: (object: Block) => boolean
    get_hint_icon_name: (object: Block) => string
    get_hint_ignore: (object: Block) => boolean
    get_hint_name: (object: Block) => string
    get_hint_partitionable: (object: Block) => boolean
    get_hint_system: (object: Block) => boolean
    get_id_label: (object: Block) => string
    get_id_type: (object: Block) => string
    get_id_usage: (object: Block) => string
    get_id_uuid: (object: Block) => string
    get_id_version: (object: Block) => string
    get_preferred_device: (object: Block) => string
    get_read_only: (object: Block) => boolean
    get_size: (object: Block) => number
    get_symlinks: (object: Block) => string[]
    get_hint_symbolic_icon_name: (object: Block) => string
    get_id: (object: Block) => string
    get_mdraid: (object: Block) => string
    get_mdraid_member: (object: Block) => string
    static name: string
}
export abstract class BlockProxyClass {
    /* Fields of UDisks-2.0.UDisks.BlockProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class BlockProxyPrivate {
    static name: string
}
export abstract class BlockSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.BlockSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class BlockSkeletonPrivate {
    static name: string
}
export abstract class DriveAtaIface {
    /* Fields of UDisks-2.0.UDisks.DriveAtaIface */
    parent_iface: GObject.TypeInterface
    handle_pm_get_state: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_pm_standby: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_pm_wakeup: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_security_erase_unit: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_smart_get_attributes: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_smart_selftest_abort: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_smart_selftest_start: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean
    handle_smart_update: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_aam_enabled: (object: DriveAta) => boolean
    get_aam_supported: (object: DriveAta) => boolean
    get_aam_vendor_recommended_value: (object: DriveAta) => number
    get_apm_enabled: (object: DriveAta) => boolean
    get_apm_supported: (object: DriveAta) => boolean
    get_pm_enabled: (object: DriveAta) => boolean
    get_pm_supported: (object: DriveAta) => boolean
    get_security_enhanced_erase_unit_minutes: (object: DriveAta) => number
    get_security_erase_unit_minutes: (object: DriveAta) => number
    get_security_frozen: (object: DriveAta) => boolean
    get_smart_enabled: (object: DriveAta) => boolean
    get_smart_failing: (object: DriveAta) => boolean
    get_smart_num_attributes_failed_in_the_past: (object: DriveAta) => number
    get_smart_num_attributes_failing: (object: DriveAta) => number
    get_smart_num_bad_sectors: (object: DriveAta) => number
    get_smart_power_on_seconds: (object: DriveAta) => number
    get_smart_selftest_percent_remaining: (object: DriveAta) => number
    get_smart_selftest_status: (object: DriveAta) => string
    get_smart_supported: (object: DriveAta) => boolean
    get_smart_temperature: (object: DriveAta) => number
    get_smart_updated: (object: DriveAta) => number
    handle_smart_set_enabled: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean
    get_write_cache_enabled: (object: DriveAta) => boolean
    get_write_cache_supported: (object: DriveAta) => boolean
    get_read_lookahead_enabled: (object: DriveAta) => boolean
    get_read_lookahead_supported: (object: DriveAta) => boolean
    static name: string
}
export abstract class DriveAtaProxyClass {
    /* Fields of UDisks-2.0.UDisks.DriveAtaProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class DriveAtaProxyPrivate {
    static name: string
}
export abstract class DriveAtaSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.DriveAtaSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DriveAtaSkeletonPrivate {
    static name: string
}
export abstract class DriveIface {
    /* Fields of UDisks-2.0.UDisks.DriveIface */
    parent_iface: GObject.TypeInterface
    handle_eject: (object: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_configuration: (object: Drive, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean
    get_configuration: (object: Drive) => GLib.Variant
    get_connection_bus: (object: Drive) => string
    get_ejectable: (object: Drive) => boolean
    get_id: (object: Drive) => string
    get_media: (object: Drive) => string
    get_media_available: (object: Drive) => boolean
    get_media_change_detected: (object: Drive) => boolean
    get_media_compatibility: (object: Drive) => string[]
    get_media_removable: (object: Drive) => boolean
    get_model: (object: Drive) => string
    get_optical: (object: Drive) => boolean
    get_optical_blank: (object: Drive) => boolean
    get_optical_num_audio_tracks: (object: Drive) => number
    get_optical_num_data_tracks: (object: Drive) => number
    get_optical_num_sessions: (object: Drive) => number
    get_optical_num_tracks: (object: Drive) => number
    get_removable: (object: Drive) => boolean
    get_revision: (object: Drive) => string
    get_rotation_rate: (object: Drive) => number
    get_seat: (object: Drive) => string
    get_serial: (object: Drive) => string
    get_size: (object: Drive) => number
    get_sort_key: (object: Drive) => string
    get_time_detected: (object: Drive) => number
    get_time_media_detected: (object: Drive) => number
    get_vendor: (object: Drive) => string
    get_wwn: (object: Drive) => string
    handle_power_off: (object: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_can_power_off: (object: Drive) => boolean
    get_sibling_id: (object: Drive) => string
    static name: string
}
export abstract class DriveProxyClass {
    /* Fields of UDisks-2.0.UDisks.DriveProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class DriveProxyPrivate {
    static name: string
}
export abstract class DriveSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.DriveSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DriveSkeletonPrivate {
    static name: string
}
export abstract class EncryptedIface {
    /* Fields of UDisks-2.0.UDisks.EncryptedIface */
    parent_iface: GObject.TypeInterface
    handle_change_passphrase: (object: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean
    handle_lock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_unlock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean
    get_child_configuration: (object: Encrypted) => GLib.Variant
    static name: string
}
export abstract class EncryptedProxyClass {
    /* Fields of UDisks-2.0.UDisks.EncryptedProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class EncryptedProxyPrivate {
    static name: string
}
export abstract class EncryptedSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.EncryptedSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class EncryptedSkeletonPrivate {
    static name: string
}
export abstract class FilesystemIface {
    /* Fields of UDisks-2.0.UDisks.FilesystemIface */
    parent_iface: GObject.TypeInterface
    handle_mount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_label: (object: Filesystem, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean
    handle_unmount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_mount_points: (object: Filesystem) => string[]
    static name: string
}
export abstract class FilesystemProxyClass {
    /* Fields of UDisks-2.0.UDisks.FilesystemProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class FilesystemProxyPrivate {
    static name: string
}
export abstract class FilesystemSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.FilesystemSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class FilesystemSkeletonPrivate {
    static name: string
}
export abstract class JobIface {
    /* Fields of UDisks-2.0.UDisks.JobIface */
    parent_iface: GObject.TypeInterface
    handle_cancel: (object: Job, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_cancelable: (object: Job) => boolean
    get_expected_end_time: (object: Job) => number
    get_objects: (object: Job) => string[]
    get_operation: (object: Job) => string
    get_progress: (object: Job) => number
    get_progress_valid: (object: Job) => boolean
    get_start_time: (object: Job) => number
    get_started_by_uid: (object: Job) => number
    completed: (object: Job, arg_success: boolean, arg_message: string) => void
    get_bytes: (object: Job) => number
    get_rate: (object: Job) => number
    static name: string
}
export abstract class JobProxyClass {
    /* Fields of UDisks-2.0.UDisks.JobProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class JobProxyPrivate {
    static name: string
}
export abstract class JobSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.JobSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class JobSkeletonPrivate {
    static name: string
}
export abstract class LoopIface {
    /* Fields of UDisks-2.0.UDisks.LoopIface */
    parent_iface: GObject.TypeInterface
    handle_delete: (object: Loop, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_autoclear: (object: Loop, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean
    get_autoclear: (object: Loop) => boolean
    get_backing_file: (object: Loop) => string
    get_setup_by_uid: (object: Loop) => number
    static name: string
}
export abstract class LoopProxyClass {
    /* Fields of UDisks-2.0.UDisks.LoopProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class LoopProxyPrivate {
    static name: string
}
export abstract class LoopSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.LoopSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class LoopSkeletonPrivate {
    static name: string
}
export abstract class MDRaidIface {
    /* Fields of UDisks-2.0.UDisks.MDRaidIface */
    parent_iface: GObject.TypeInterface
    handle_add_device: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean
    handle_delete: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_remove_device: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean
    handle_request_sync_action: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean
    handle_set_bitmap_location: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean
    handle_start: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_stop: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_active_devices: (object: MDRaid) => GLib.Variant
    get_bitmap_location: (object: MDRaid) => string
    get_child_configuration: (object: MDRaid) => GLib.Variant
    get_chunk_size: (object: MDRaid) => number
    get_degraded: (object: MDRaid) => number
    get_level: (object: MDRaid) => string
    get_name: (object: MDRaid) => string
    get_num_devices: (object: MDRaid) => number
    get_running: (object: MDRaid) => boolean
    get_size: (object: MDRaid) => number
    get_sync_action: (object: MDRaid) => string
    get_sync_completed: (object: MDRaid) => number
    get_sync_rate: (object: MDRaid) => number
    get_sync_remaining_time: (object: MDRaid) => number
    get_uuid: (object: MDRaid) => string
    static name: string
}
export abstract class MDRaidProxyClass {
    /* Fields of UDisks-2.0.UDisks.MDRaidProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class MDRaidProxyPrivate {
    static name: string
}
export abstract class MDRaidSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.MDRaidSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MDRaidSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of UDisks-2.0.UDisks.ManagerIface */
    parent_iface: GObject.TypeInterface
    handle_enable_modules: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean
    handle_loop_setup: (object: Manager, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean
    get_supported_filesystems: (object: Manager) => string[]
    get_version: (object: Manager) => string
    handle_mdraid_create: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of UDisks-2.0.UDisks.ManagerProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.ManagerSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class ObjectIface {
    /* Fields of UDisks-2.0.UDisks.ObjectIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ObjectManagerClientClass {
    /* Fields of UDisks-2.0.UDisks.ObjectManagerClientClass */
    parent_class: Gio.DBusObjectManagerClientClass
    static name: string
}
export class ObjectManagerClientPrivate {
    static name: string
}
export abstract class ObjectProxyClass {
    /* Fields of UDisks-2.0.UDisks.ObjectProxyClass */
    parent_class: Gio.DBusObjectProxyClass
    static name: string
}
export class ObjectProxyPrivate {
    static name: string
}
export abstract class ObjectSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.ObjectSkeletonClass */
    parent_class: Gio.DBusObjectSkeletonClass
    static name: string
}
export class ObjectSkeletonPrivate {
    static name: string
}
export abstract class PartitionIface {
    /* Fields of UDisks-2.0.UDisks.PartitionIface */
    parent_iface: GObject.TypeInterface
    handle_delete: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_flags: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean
    handle_set_name: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean
    handle_set_type: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean
    get_flags: (object: Partition) => number
    get_is_contained: (object: Partition) => boolean
    get_is_container: (object: Partition) => boolean
    get_name: (object: Partition) => string
    get_number: (object: Partition) => number
    get_offset: (object: Partition) => number
    get_size: (object: Partition) => number
    get_table: (object: Partition) => string
    get_type_: (object: Partition) => string
    get_uuid: (object: Partition) => string
    static name: string
}
export abstract class PartitionProxyClass {
    /* Fields of UDisks-2.0.UDisks.PartitionProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class PartitionProxyPrivate {
    static name: string
}
export abstract class PartitionSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.PartitionSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PartitionSkeletonPrivate {
    static name: string
}
export abstract class PartitionTableIface {
    /* Fields of UDisks-2.0.UDisks.PartitionTableIface */
    parent_iface: GObject.TypeInterface
    handle_create_partition: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean
    handle_create_partition_and_format: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean
    get_type_: (object: PartitionTable) => string
    static name: string
}
export abstract class PartitionTableProxyClass {
    /* Fields of UDisks-2.0.UDisks.PartitionTableProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class PartitionTableProxyPrivate {
    static name: string
}
export abstract class PartitionTableSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.PartitionTableSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PartitionTableSkeletonPrivate {
    static name: string
}
export class PartitionTypeInfo {
    /* Fields of UDisks-2.0.UDisks.PartitionTypeInfo */
    table_type: string
    table_subtype: string
    type: string
    flags: PartitionTypeInfoFlags
    /* Methods of UDisks-2.0.UDisks.PartitionTypeInfo */
    free(): void
    static name: string
}
export abstract class SwapspaceIface {
    /* Fields of UDisks-2.0.UDisks.SwapspaceIface */
    parent_iface: GObject.TypeInterface
    handle_start: (object: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_stop: (object: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_active: (object: Swapspace) => boolean
    static name: string
}
export abstract class SwapspaceProxyClass {
    /* Fields of UDisks-2.0.UDisks.SwapspaceProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class SwapspaceProxyPrivate {
    static name: string
}
export abstract class SwapspaceSkeletonClass {
    /* Fields of UDisks-2.0.UDisks.SwapspaceSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class SwapspaceSkeletonPrivate {
    static name: string
}