/**
 * Xdp-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Xdp {

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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xdp-1.0.Xdp.Portal */
    accessCamera(parent: Parent | null, flags: CameraFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    accessCameraFinish(result: Gio.AsyncResult): boolean
    addNotification(id: string, notification: GLib.Variant, flags: NotificationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addNotificationFinish(result: Gio.AsyncResult): boolean
    composeEmail(parent: Parent | null, addresses: string[] | null, cc: string[] | null, bcc: string[] | null, subject: string | null, body: string | null, attachments: string[] | null, flags: EmailFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    composeEmailFinish(result: Gio.AsyncResult): boolean
    createRemoteDesktopSession(devices: DeviceType, outputs: OutputType, flags: RemoteDesktopFlags, cursorMode: CursorMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createRemoteDesktopSessionFinish(result: Gio.AsyncResult): Session
    createScreencastSession(outputs: OutputType, flags: ScreencastFlags, cursorMode: CursorMode, persistMode: PersistMode, restoreToken?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createScreencastSessionFinish(result: Gio.AsyncResult): Session
    getUserInformation(parent: Parent | null, reason: string | null, flags: UserInformationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUserInformationFinish(result: Gio.AsyncResult): GLib.Variant
    isCameraPresent(): boolean
    locationMonitorStart(parent: Parent | null, distanceThreshold: number, timeThreshold: number, accuracy: LocationAccuracy, flags: LocationMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    locationMonitorStartFinish(result: Gio.AsyncResult): boolean
    locationMonitorStop(): void
    openDirectory(parent: Parent, uri: string, flags: OpenUriFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openDirectoryFinish(result: Gio.AsyncResult): boolean
    openFile(parent: Parent | null, title: string, filters: GLib.Variant | null, currentFilter: GLib.Variant | null, choices: GLib.Variant | null, flags: OpenFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFileFinish(result: Gio.AsyncResult): GLib.Variant
    openPipewireRemoteForCamera(): number
    openUri(parent: Parent, uri: string, flags: OpenUriFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openUriFinish(result: Gio.AsyncResult): boolean
    pickColor(parent?: Parent | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    pickColorFinish(result: Gio.AsyncResult): GLib.Variant
    preparePrint(parent: Parent | null, title: string, settings: GLib.Variant | null, pageSetup: GLib.Variant | null, flags: PrintFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    preparePrintFinish(result: Gio.AsyncResult): GLib.Variant
    printFile(parent: Parent | null, title: string, token: number, file: string, flags: PrintFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    printFileFinish(result: Gio.AsyncResult): boolean
    removeNotification(id: string): void
    requestBackground(parent: Parent | null, reason: string | null, commandline: string[], flags: BackgroundFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    requestBackgroundFinish(result: Gio.AsyncResult): boolean
    saveFile(parent: Parent | null, title: string, currentName: string | null, currentFolder: string | null, currentFile: string | null, filters: GLib.Variant | null, currentFilter: GLib.Variant | null, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFileFinish(result: Gio.AsyncResult): GLib.Variant
    saveFiles(parent: Parent | null, title: string, currentName: string | null, currentFolder: string | null, files: GLib.Variant, choices: GLib.Variant | null, flags: SaveFileFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFilesFinish(result: Gio.AsyncResult): GLib.Variant
    sessionInhibit(parent: Parent | null, reason: string | null, flags: InhibitFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sessionInhibitFinish(result: Gio.AsyncResult): number
    sessionMonitorQueryEndResponse(): void
    sessionMonitorStart(parent: Parent | null, flags: SessionMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sessionMonitorStartFinish(result: Gio.AsyncResult): boolean
    sessionMonitorStop(): void
    sessionUninhibit(id: number): void
    setWallpaper(parent: Parent, uri: string, flags: WallpaperFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setWallpaperFinish(result: Gio.AsyncResult): boolean
    spawn(cwd: string, argv: string[], fds: number[] | null, mapTo: number[] | null, env: string[] | null, flags: SpawnFlags, sandboxExpose?: string[] | null, sandboxExposeRo?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spawnFinish(result: Gio.AsyncResult): number
    spawnSignal(pid: number, signal: number, toProcessGroup: boolean): void
    takeScreenshot(parent: Parent | null, flags: ScreenshotFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    takeScreenshotFinish(result: Gio.AsyncResult): string | null
    trashFile(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trashFileFinish(result: Gio.AsyncResult): boolean
    updateInstall(parent: Parent, flags: UpdateInstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateInstallFinish(result: Gio.AsyncResult): boolean
    updateMonitorStart(flags: UpdateMonitorFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateMonitorStartFinish(result: Gio.AsyncResult): boolean
    updateMonitorStop(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Xdp-1.0.Xdp.Portal */
    connect(sigName: "location-updated", callback: (($obj: Portal, latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestampS: number, timestampMs: number) => void)): number
    on(sigName: "location-updated", callback: (latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestampS: number, timestampMs: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: (latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestampS: number, timestampMs: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: (latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestampS: number, timestampMs: number) => void): NodeJS.EventEmitter
    emit(sigName: "location-updated", latitude: number, longitude: number, altitude: number, accuracy: number, speed: number, heading: number, description: string, timestampS: number, timestampMs: number): void
    connect(sigName: "notification-action-invoked", callback: (($obj: Portal, id: string, action: string, parameter?: GLib.Variant | null) => void)): number
    on(sigName: "notification-action-invoked", callback: (id: string, action: string, parameter?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification-action-invoked", callback: (id: string, action: string, parameter?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification-action-invoked", callback: (id: string, action: string, parameter?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "notification-action-invoked", id: string, action: string, parameter?: GLib.Variant | null): void
    connect(sigName: "session-state-changed", callback: (($obj: Portal, screensaverActive: boolean, sessionState: LoginSessionState) => void)): number
    on(sigName: "session-state-changed", callback: (screensaverActive: boolean, sessionState: LoginSessionState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-state-changed", callback: (screensaverActive: boolean, sessionState: LoginSessionState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-state-changed", callback: (screensaverActive: boolean, sessionState: LoginSessionState) => void): NodeJS.EventEmitter
    emit(sigName: "session-state-changed", screensaverActive: boolean, sessionState: LoginSessionState): void
    connect(sigName: "spawn-exited", callback: (($obj: Portal, pid: number, exitStatus: number) => void)): number
    on(sigName: "spawn-exited", callback: (pid: number, exitStatus: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "spawn-exited", callback: (pid: number, exitStatus: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "spawn-exited", callback: (pid: number, exitStatus: number) => void): NodeJS.EventEmitter
    emit(sigName: "spawn-exited", pid: number, exitStatus: number): void
    connect(sigName: "update-available", callback: (($obj: Portal, runningCommit: string, localCommit: string, remoteCommit: string) => void)): number
    on(sigName: "update-available", callback: (runningCommit: string, localCommit: string, remoteCommit: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-available", callback: (runningCommit: string, localCommit: string, remoteCommit: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-available", callback: (runningCommit: string, localCommit: string, remoteCommit: string) => void): NodeJS.EventEmitter
    emit(sigName: "update-available", runningCommit: string, localCommit: string, remoteCommit: string): void
    connect(sigName: "update-progress", callback: (($obj: Portal, nOps: number, op: number, progress: number, status: UpdateStatus, error: string, errorMessage: string) => void)): number
    on(sigName: "update-progress", callback: (nOps: number, op: number, progress: number, status: UpdateStatus, error: string, errorMessage: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-progress", callback: (nOps: number, op: number, progress: number, status: UpdateStatus, error: string, errorMessage: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-progress", callback: (nOps: number, op: number, progress: number, status: UpdateStatus, error: string, errorMessage: string) => void): NodeJS.EventEmitter
    emit(sigName: "update-progress", nOps: number, op: number, progress: number, status: UpdateStatus, error: string, errorMessage: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Portal, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Xdp-1.0.Xdp.Session */
    close(): void
    getDevices(): DeviceType
    getPersistMode(): PersistMode
    getRestoreToken(): string | null
    getSessionState(): SessionState
    getSessionType(): SessionType
    getStreams(): GLib.Variant
    keyboardKey(keysym: boolean, key: number, state: KeyState): void
    openPipewireRemote(): number
    pointerAxis(finish: boolean, dx: number, dy: number): void
    pointerAxisDiscrete(axis: DiscreteAxis, steps: number): void
    pointerButton(button: number, state: ButtonState): void
    pointerMotion(dx: number, dy: number): void
    pointerPosition(stream: number, x: number, y: number): void
    start(parent?: Parent | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    touchDown(stream: number, slot: number, x: number, y: number): void
    touchPosition(stream: number, slot: number, x: number, y: number): void
    touchUp(slot: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Xdp-1.0.Xdp.Session */
    connect(sigName: "closed", callback: (($obj: Session) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SessionClass {
    /* Fields of Xdp-1.0.Xdp.SessionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default Xdp