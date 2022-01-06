/**
 * Xdp-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Xdp {

enum ButtonState {
    RELEASED,
    PRESSED,
}
enum CameraFlags {
    NONE,
}
enum DiscreteAxis {
    HORIZONTAL_SCROLL,
    VERTICAL_SCROLL,
}
enum EmailFlags {
    NONE,
}
enum KeyState {
    RELEASED,
    PRESSED,
}
enum LocationAccuracy {
    NONE,
    COUNTRY,
    CITY,
    NEIGHBORHOOD,
    STREET,
    EXACT,
}
enum LocationMonitorFlags {
    NONE,
}
enum LoginSessionState {
    RUNNING,
    QUERY_END,
    ENDING,
}
enum NotificationFlags {
    NONE,
}
enum PersistMode {
    NONE,
    TRANSIENT,
    PERSISTENT,
}
enum PrintFlags {
    NONE,
}
enum SaveFileFlags {
    NONE,
}
enum SessionMonitorFlags {
    NONE,
}
enum SessionState {
    INITIAL,
    ACTIVE,
    CLOSED,
}
enum SessionType {
    SCREENCAST,
    REMOTE_DESKTOP,
}
enum UpdateInstallFlags {
    NONE,
}
enum UpdateMonitorFlags {
    NONE,
}
enum UpdateStatus {
    RUNNING,
    EMPTY,
    DONE,
    FAILED,
}
enum UserInformationFlags {
    NONE,
}
enum BackgroundFlags {
    NONE,
    AUTOSTART,
    ACTIVATABLE,
}
enum CursorMode {
    HIDDEN,
    EMBEDDED,
    METADATA,
}
enum DeviceType {
    NONE,
    KEYBOARD,
    POINTER,
    TOUCHSCREEN,
}
enum InhibitFlags {
    LOGOUT,
    USER_SWITCH,
    SUSPEND,
    IDLE,
}
enum OpenFileFlags {
    NONE,
    MULTIPLE,
}
enum OpenUriFlags {
    NONE,
    ASK,
    WRITABLE,
}
enum OutputType {
    MONITOR,
    WINDOW,
    VIRTUAL,
}
enum RemoteDesktopFlags {
    NONE,
    MULTIPLE,
}
enum ScreencastFlags {
    NONE,
    MULTIPLE,
}
enum ScreenshotFlags {
    NONE,
    INTERACTIVE,
}
enum SpawnFlags {
    NONE,
    CLEARENV,
    LATEST,
    SANDBOX,
    NO_NETWORK,
    WATCH,
}
enum WallpaperFlags {
    NONE,
    BACKGROUND,
    LOCKSCREEN,
    PREVIEW,
}
export const WALLPAPER_TARGET_BOTH: number
export interface Portal_ConstructProps extends GObject.Object_ConstructProps {
}
class Portal {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Xdp-1.0.Xdp.Portal */
    access_camera(parent: Parent | null, flags: CameraFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    access_camera_finish(result: Gio.AsyncResult): boolean
    add_notification(id: string, notification: GLib.Variant, flags: NotificationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_notification_finish(result: Gio.AsyncResult): boolean
    compose_email(parent: Parent | null, addresses: string[] | null, cc: string[] | null, bcc: string[] | null, subject: string | null, body: string | null, attachments: string[] | null, flags: EmailFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    compose_email_finish(result: Gio.AsyncResult): boolean
    create_remote_desktop_session(devices: DeviceType, outputs: OutputType, flags: RemoteDesktopFlags, cursor_mode: CursorMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_remote_desktop_session_finish(result: Gio.AsyncResult): Session
    create_screencast_session(outputs: OutputType, flags: ScreencastFlags, cursor_mode: CursorMode, persist_mode: PersistMode, restore_token?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_screencast_session_finish(result: Gio.AsyncResult): Session
    get_user_information(parent: Parent | null, reason: string | null, flags: UserInformationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_user_information_finish(result: Gio.AsyncResult): GLib.Variant
    is_camera_present(): boolean
    location_monitor_start(parent: Parent | null, distance_threshold: number, time_threshold: number, accuracy: LocationAccuracy, flags: LocationMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    location_monitor_start_finish(result: Gio.AsyncResult): boolean
    location_monitor_stop(): void
    open_directory(parent: Parent, uri: string, flags: OpenUriFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_directory_finish(result: Gio.AsyncResult): boolean
    open_file(parent: Parent | null, title: string, filters: GLib.Variant | null, current_filter: GLib.Variant | null, choices: GLib.Variant | null, flags: OpenFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_file_finish(result: Gio.AsyncResult): GLib.Variant
    open_pipewire_remote_for_camera(): number
    open_uri(parent: Parent, uri: string, flags: OpenUriFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_uri_finish(result: Gio.AsyncResult): boolean
    pick_color(parent?: Parent | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    pick_color_finish(result: Gio.AsyncResult): GLib.Variant
    prepare_print(parent: Parent | null, title: string, settings: GLib.Variant | null, page_setup: GLib.Variant | null, flags: PrintFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    prepare_print_finish(result: Gio.AsyncResult): GLib.Variant
    print_file(parent: Parent | null, title: string, token: number, file: string, flags: PrintFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    print_file_finish(result: Gio.AsyncResult): boolean
    remove_notification(id: string): void
    request_background(parent: Parent | null, reason: string | null, commandline: string[], flags: BackgroundFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    request_background_finish(result: Gio.AsyncResult): boolean
    save_file(parent: Parent | null, title: string, current_name: string | null, current_folder: string | null, current_file: string | null, filters: GLib.Variant | null, current_filter: GLib.Variant | null, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_file_finish(result: Gio.AsyncResult): GLib.Variant
    save_files(parent: Parent | null, title: string, current_name: string | null, current_folder: string | null, files: GLib.Variant, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_files_finish(result: Gio.AsyncResult): GLib.Variant
    session_inhibit(parent: Parent | null, reason: string | null, flags: InhibitFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    session_inhibit_finish(result: Gio.AsyncResult): number
    session_monitor_query_end_response(): void
    session_monitor_start(parent: Parent | null, flags: SessionMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    session_monitor_start_finish(result: Gio.AsyncResult): boolean
    session_monitor_stop(): void
    session_uninhibit(id: number): void
    set_wallpaper(parent: Parent, uri: string, flags: WallpaperFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_wallpaper_finish(result: Gio.AsyncResult): boolean
    spawn(cwd: string, argv: string[], fds: number[] | null, map_to: number[] | null, env: string[] | null, flags: SpawnFlags, sandbox_expose?: string[] | null, sandbox_expose_ro?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spawn_finish(result: Gio.AsyncResult): number
    spawn_signal(pid: number, signal: number, to_process_group: boolean): void
    take_screenshot(parent: Parent | null, flags: ScreenshotFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    take_screenshot_finish(result: Gio.AsyncResult): string | null
    trash_file(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trash_file_finish(result: Gio.AsyncResult): boolean
    update_install(parent: Parent, flags: UpdateInstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_install_finish(result: Gio.AsyncResult): boolean
    update_monitor_start(flags: UpdateMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_monitor_start_finish(result: Gio.AsyncResult): boolean
    update_monitor_stop(): void
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
    /* Signals of Xdp-1.0.Xdp.Portal */
    connect(sigName: "location-updated", callback: (($obj: Portal, latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestamp_s: number, timestamp_ms: number) => void)): number
    connect_after(sigName: "location-updated", callback: (($obj: Portal, latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestamp_s: number, timestamp_ms: number) => void)): number
    emit(sigName: "location-updated", latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestamp_s: number, timestamp_ms: number): void
    connect(sigName: "notification-action-invoked", callback: (($obj: Portal, id: string, action: string, parameter?: GLib.Variant | null) => void)): number
    connect_after(sigName: "notification-action-invoked", callback: (($obj: Portal, id: string, action: string, parameter?: GLib.Variant | null) => void)): number
    emit(sigName: "notification-action-invoked", id: string, action: string, parameter?: GLib.Variant | null): void
    connect(sigName: "session-state-changed", callback: (($obj: Portal, screensaver_active: boolean, session_state: LoginSessionState) => void)): number
    connect_after(sigName: "session-state-changed", callback: (($obj: Portal, screensaver_active: boolean, session_state: LoginSessionState) => void)): number
    emit(sigName: "session-state-changed", screensaver_active: boolean, session_state: LoginSessionState): void
    connect(sigName: "spawn-exited", callback: (($obj: Portal, pid: number, exit_status: number) => void)): number
    connect_after(sigName: "spawn-exited", callback: (($obj: Portal, pid: number, exit_status: number) => void)): number
    emit(sigName: "spawn-exited", pid: number, exit_status: number): void
    connect(sigName: "update-available", callback: (($obj: Portal, running_commit: string, local_commit: string, remote_commit: string) => void)): number
    connect_after(sigName: "update-available", callback: (($obj: Portal, running_commit: string, local_commit: string, remote_commit: string) => void)): number
    emit(sigName: "update-available", running_commit: string, local_commit: string, remote_commit: string): void
    connect(sigName: "update-progress", callback: (($obj: Portal, n_ops: number, op: number, progress: number, status: UpdateStatus, error: string, error_message: string) => void)): number
    connect_after(sigName: "update-progress", callback: (($obj: Portal, n_ops: number, op: number, progress: number, status: UpdateStatus, error: string, error_message: string) => void)): number
    emit(sigName: "update-progress", n_ops: number, op: number, progress: number, status: UpdateStatus, error: string, error_message: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Portal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Portal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Portal_ConstructProps)
    _init (config?: Portal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Portal
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
}
class Session {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Xdp-1.0.Xdp.Session */
    close(): void
    get_devices(): DeviceType
    get_persist_mode(): PersistMode
    get_restore_token(): string | null
    get_session_state(): SessionState
    get_session_type(): SessionType
    get_streams(): GLib.Variant
    keyboard_key(keysym: boolean, key: number, state: KeyState): void
    open_pipewire_remote(): number
    pointer_axis(finish: boolean, dx: number, dy: number): void
    pointer_axis_discrete(axis: DiscreteAxis, steps: number): void
    pointer_button(button: number, state: ButtonState): void
    pointer_motion(dx: number, dy: number): void
    pointer_position(stream: number, x: number, y: number): void
    start(parent?: Parent | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_finish(result: Gio.AsyncResult): boolean
    touch_down(stream: number, slot: number, x: number, y: number): void
    touch_position(stream: number, slot: number, x: number, y: number): void
    touch_up(slot: number): void
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
    /* Signals of Xdp-1.0.Xdp.Session */
    connect(sigName: "closed", callback: (($obj: Session) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Session) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
class Parent {
    /* Methods of Xdp-1.0.Xdp.Parent */
    copy(): Parent
    free(): void
    static name: string
}
abstract class PortalClass {
    /* Fields of Xdp-1.0.Xdp.PortalClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class SessionClass {
    /* Fields of Xdp-1.0.Xdp.SessionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
}
export default Xdp