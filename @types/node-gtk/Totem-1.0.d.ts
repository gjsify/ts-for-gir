/**
 * Totem-1.0
 */

import "node"
import type { TotemPlParser } from './TotemPlParser-1.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';

export declare namespace Totem {

export enum RemoteCommand {
    UNKNOWN,
    PLAY,
    PAUSE,
    STOP,
    PLAY_PAUSE,
    NEXT,
    PREVIOUS,
    SEEK_FORWARD,
    SEEK_BACKWARD,
    VOLUME_UP,
    VOLUME_DOWN,
    FULLSCREEN,
    QUIT,
    ENQUEUE,
    REPLACE,
    SHOW,
    UP,
    DOWN,
    LEFT,
    RIGHT,
    SELECT,
    DVD_MENU,
    ZOOM_UP,
    ZOOM_DOWN,
    EJECT,
    PLAY_DVD,
    MUTE,
    TOGGLE_ASPECT_RATIO,
}
export enum RemoteSetting {
    REPEAT,
}
export const GSETTINGS_SCHEMA: string
export function getPluginPaths(): string[]
export function interfaceCreateHeaderButton(header: Gtk.Widget, button: Gtk.Widget, iconName: string, packType: Gtk.PackType): Gtk.Widget
export function interfaceError(title: string, reason: string, parent: Gtk.Window): void
export function interfaceErrorBlocking(title: string, reason: string, parent: Gtk.Window): void
export function interfaceErrorWithLink(title: string, reason: string, uri: string, label: string, parent: Gtk.Window): void
export function interfaceGetFullPath(name: string): string
export function interfaceLoad(name: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
export function interfaceLoadPixbuf(name: string): GdkPixbuf.Pixbuf
export function interfaceLoadWithFullPath(filename: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
export function pluginFindFile(pluginName: string, file: string): string
export function pluginLoadInterface(pluginName: string, name: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
export function remoteCommandQuark(): GLib.Quark
export function remoteSettingQuark(): GLib.Quark
export interface Object_ConstructProps extends Gtk.Application_ConstructProps {
}
export class Object {
    /* Properties of Totem.Object */
    readonly currentContentType: string
    readonly currentDisplayName: string
    readonly currentMrl: string
    readonly currentTime: number
    readonly fullscreen: boolean
    readonly mainPage: string
    readonly playing: boolean
    readonly seekable: boolean
    readonly streamLength: number
    /* Properties of Gtk.Application */
    readonly activeWindow: Gtk.Window
    appMenu: Gio.MenuModel
    menubar: Gio.MenuModel
    registerSession: boolean
    readonly screensaverActive: boolean
    /* Properties of Gio.Application */
    actionGroup: Gio.ActionGroup
    applicationId: string
    flags: Gio.ApplicationFlags
    inactivityTimeout: number
    readonly isBusy: boolean
    readonly isRegistered: boolean
    readonly isRemote: boolean
    resourceBasePath: string
    /* Fields of Gtk.Application */
    parent: Gio.Application
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Totem.Object */
    addToPlaylist(uri: string, displayName: string, play: boolean): void
    addToView(file: Gio.File, title: string): void
    canSeekNext(): boolean
    canSeekPrevious(): boolean
    clearPlaylist(): void
    emptyMenuSection(id: string): void
    exit(): void
    getCurrentMrl(): string
    getCurrentTime(): number
    getMainWindow(): Gtk.Window
    getMenuSection(id: string): Gio.Menu | null
    getPlaylistLength(): number
    getPlaylistPos(): number
    getRate(): number
    getShortTitle(): string
    getTitleAtPlaylistPos(playlistIndex: number): string
    getVideoWidget(): Gtk.Widget
    getVolume(): number
    isFullscreen(): boolean
    isPaused(): boolean
    isPlaying(): boolean
    isSeekable(): boolean
    nextAngle(): void
    pause(): void
    play(): void
    playPause(): void
    remoteCommand(cmd: RemoteCommand, url: string): void
    remoteGetSetting(setting: RemoteSetting): boolean
    remoteSetSetting(setting: RemoteSetting, value: boolean): void
    seekNext(): void
    seekPrevious(): void
    seekRelative(offset: number, accurate: boolean): void
    seekTime(msec: number, accurate: boolean): void
    setCurrentSubtitle(subtitleUri: string): void
    setRate(rate: number): boolean
    setVolume(volume: number): void
    showError(title: string, reason: string): void
    stop(): void
    /* Methods of Gtk.Application */
    addAccelerator(accelerator: string, actionName: string, parameter?: GLib.Variant | null): void
    addWindow(window: Gtk.Window): void
    getAccelsForAction(detailedActionName: string): string[]
    getActionsForAccel(accel: string): string[]
    getActiveWindow(): Gtk.Window | null
    getAppMenu(): Gio.MenuModel | null
    getMenuById(id: string): Gio.Menu
    getMenubar(): Gio.MenuModel
    getWindowById(id: number): Gtk.Window | null
    getWindows(): Gtk.Window[]
    inhibit(window: Gtk.Window | null, flags: Gtk.ApplicationInhibitFlags, reason?: string | null): number
    isInhibited(flags: Gtk.ApplicationInhibitFlags): boolean
    listActionDescriptions(): string[]
    prefersAppMenu(): boolean
    removeAccelerator(actionName: string, parameter?: GLib.Variant | null): void
    removeWindow(window: Gtk.Window): void
    setAccelsForAction(detailedActionName: string, accels: string[]): void
    setAppMenu(appMenu?: Gio.MenuModel | null): void
    setMenubar(menubar?: Gio.MenuModel | null): void
    uninhibit(cookie: number): void
    /* Methods of Gio.Application */
    activate(): void
    addMainOption(longName: string, shortName: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, argDescription?: string | null): void
    addMainOptionEntries(entries: GLib.OptionEntry[]): void
    addOptionGroup(group: GLib.OptionGroup): void
    bindBusyProperty(object: GObject.Object, property: string): void
    getApplicationId(): string | null
    getDbusConnection(): Gio.DBusConnection | null
    getDbusObjectPath(): string | null
    getFlags(): Gio.ApplicationFlags
    getInactivityTimeout(): number
    getIsBusy(): boolean
    getIsRegistered(): boolean
    getIsRemote(): boolean
    getResourceBasePath(): string | null
    hold(): void
    markBusy(): void
    open(files: Gio.File[], hint: string): void
    quit(): void
    register(cancellable?: Gio.Cancellable | null): boolean
    release(): void
    run(argv?: string[] | null): number
    sendNotification(id: string | null, notification: Gio.Notification): void
    setActionGroup(actionGroup?: Gio.ActionGroup | null): void
    setApplicationId(applicationId?: string | null): void
    setDefault(): void
    setFlags(flags: Gio.ApplicationFlags): void
    setInactivityTimeout(inactivityTimeout: number): void
    setOptionContextDescription(description?: string | null): void
    setOptionContextParameterString(parameterString?: string | null): void
    setOptionContextSummary(summary?: string | null): void
    setResourceBasePath(resourcePath?: string | null): void
    unbindBusyProperty(object: GObject.Object, property: string): void
    unmarkBusy(): void
    withdrawNotification(id: string): void
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
    /* Methods of Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    addAction(action: Gio.Action): void
    addActionEntries(entries: Gio.ActionEntry[], userData?: object | null): void
    lookupAction(actionName: string): Gio.Action | null
    removeAction(actionName: string): void
    /* Virtual methods of Totem.Object */
    vfuncFileClosed(): void
    vfuncFileHasPlayed(mrl: string): void
    vfuncFileOpened(mrl: string): void
    vfuncGetTextSubtitle(mrl: string): string
    vfuncGetUserAgent(mrl: string): string
    vfuncMetadataUpdated(artist: string, title: string, album: string, trackNum: number): void
    /* Virtual methods of Gtk.Application */
    vfuncWindowAdded(window: Gtk.Window): void
    vfuncWindowRemoved(window: Gtk.Window): void
    vfuncActionAdded(actionName: string): void
    vfuncActionEnabledChanged(actionName: string, enabled: boolean): void
    vfuncActionRemoved(actionName: string): void
    vfuncActionStateChanged(actionName: string, state: GLib.Variant): void
    vfuncActivateAction(actionName: string, parameter?: GLib.Variant | null): void
    vfuncChangeActionState(actionName: string, value: GLib.Variant): void
    vfuncGetActionEnabled(actionName: string): boolean
    vfuncGetActionParameterType(actionName: string): GLib.VariantType | null
    vfuncGetActionState(actionName: string): GLib.Variant | null
    vfuncGetActionStateHint(actionName: string): GLib.Variant | null
    vfuncGetActionStateType(actionName: string): GLib.VariantType | null
    vfuncHasAction(actionName: string): boolean
    vfuncListActions(): string[]
    vfuncQueryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfuncAddAction(action: Gio.Action): void
    vfuncLookupAction(actionName: string): Gio.Action | null
    vfuncRemoveAction(actionName: string): void
    /* Virtual methods of Gio.Application */
    vfuncActivate(): void
    vfuncAddPlatformData(builder: GLib.VariantBuilder): void
    vfuncAfterEmit(platformData: GLib.Variant): void
    vfuncBeforeEmit(platformData: GLib.Variant): void
    vfuncCommandLine(commandLine: Gio.ApplicationCommandLine): number
    vfuncDbusRegister(connection: Gio.DBusConnection, objectPath: string): boolean
    vfuncDbusUnregister(connection: Gio.DBusConnection, objectPath: string): void
    vfuncHandleLocalOptions(options: GLib.VariantDict): number
    vfuncLocalCommandLine(arguments_: string[]): [ /* returnType */ boolean, /* arguments_ */ string[], /* exitStatus */ number ]
    vfuncNameLost(): boolean
    vfuncOpen(files: Gio.File[], hint: string): void
    vfuncQuitMainloop(): void
    vfuncRunMainloop(): void
    vfuncShutdown(): void
    vfuncStartup(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Totem.Object */
    connect(sigName: "file-closed", callback: (($obj: Object) => void)): number
    connect_after(sigName: "file-closed", callback: (($obj: Object) => void)): number
    emit(sigName: "file-closed"): void
    on(sigName: "file-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "file-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "file-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "file-has-played", callback: (($obj: Object, mrl: string) => void)): number
    connect_after(sigName: "file-has-played", callback: (($obj: Object, mrl: string) => void)): number
    emit(sigName: "file-has-played", mrl: string): void
    on(sigName: "file-has-played", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "file-has-played", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "file-has-played", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "file-opened", callback: (($obj: Object, mrl: string) => void)): number
    connect_after(sigName: "file-opened", callback: (($obj: Object, mrl: string) => void)): number
    emit(sigName: "file-opened", mrl: string): void
    on(sigName: "file-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "file-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "file-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "get-text-subtitle", callback: (($obj: Object, mrl: string) => string)): number
    connect_after(sigName: "get-text-subtitle", callback: (($obj: Object, mrl: string) => string)): number
    emit(sigName: "get-text-subtitle", mrl: string): void
    on(sigName: "get-text-subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "get-text-subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "get-text-subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "get-user-agent", callback: (($obj: Object, mrl: string) => string)): number
    connect_after(sigName: "get-user-agent", callback: (($obj: Object, mrl: string) => string)): number
    emit(sigName: "get-user-agent", mrl: string): void
    on(sigName: "get-user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "get-user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "get-user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "metadata-updated", callback: (($obj: Object, artist: string, title: string, album: string, trackNumber: number) => void)): number
    connect_after(sigName: "metadata-updated", callback: (($obj: Object, artist: string, title: string, album: string, trackNumber: number) => void)): number
    emit(sigName: "metadata-updated", artist: string, title: string, album: string, trackNumber: number): void
    on(sigName: "metadata-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "metadata-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "metadata-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Application */
    connect(sigName: "query-end", callback: (($obj: Object) => void)): number
    connect_after(sigName: "query-end", callback: (($obj: Object) => void)): number
    emit(sigName: "query-end"): void
    on(sigName: "query-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-added", callback: (($obj: Object, window: Gtk.Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Object, window: Gtk.Window) => void)): number
    emit(sigName: "window-added", window: Gtk.Window): void
    on(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-removed", callback: (($obj: Object, window: Gtk.Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Object, window: Gtk.Window) => void)): number
    emit(sigName: "window-removed", window: Gtk.Window): void
    on(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.Application */
    connect(sigName: "activate", callback: (($obj: Object) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Object) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "command-line", callback: (($obj: Object, commandLine: Gio.ApplicationCommandLine) => number)): number
    connect_after(sigName: "command-line", callback: (($obj: Object, commandLine: Gio.ApplicationCommandLine) => number)): number
    emit(sigName: "command-line", commandLine: Gio.ApplicationCommandLine): void
    on(sigName: "command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-local-options", callback: (($obj: Object, options: GLib.VariantDict) => number)): number
    connect_after(sigName: "handle-local-options", callback: (($obj: Object, options: GLib.VariantDict) => number)): number
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    on(sigName: "handle-local-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-local-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-local-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-lost", callback: (($obj: Object) => boolean)): number
    connect_after(sigName: "name-lost", callback: (($obj: Object) => boolean)): number
    emit(sigName: "name-lost"): void
    on(sigName: "name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-lost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open", callback: (($obj: Object, files: Gio.File[], hint: string) => void)): number
    connect_after(sigName: "open", callback: (($obj: Object, files: Gio.File[], hint: string) => void)): number
    emit(sigName: "open", files: Gio.File[], hint: string): void
    on(sigName: "open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "shutdown", callback: (($obj: Object) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: Object) => void)): number
    emit(sigName: "shutdown"): void
    on(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "startup", callback: (($obj: Object) => void)): number
    connect_after(sigName: "startup", callback: (($obj: Object) => void)): number
    emit(sigName: "startup"): void
    on(sigName: "startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: Object, actionName: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: Object, actionName: string) => void)): number
    emit(sigName: "action-added", actionName: string): void
    on(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-enabled-changed", callback: (($obj: Object, actionName: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: Object, actionName: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    on(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-removed", callback: (($obj: Object, actionName: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: Object, actionName: string) => void)): number
    emit(sigName: "action-removed", actionName: string): void
    on(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "action-state-changed", callback: (($obj: Object, actionName: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: Object, actionName: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    on(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-content-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-content-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-display-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-display-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-mrl", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-mrl", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreen", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-page", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-page", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seekable", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seekable", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-length", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-length", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-window", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-menu", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::menubar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::register-session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screensaver-active", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-group", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-busy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-registered", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-remote", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-base-path", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getSupportedContentTypes(): string[]
    static getSupportedUriSchemes(): string[]
    static $gtype: GObject.Type
}
export abstract class ObjectClass {
    /* Fields of Totem.ObjectClass */
    parentClass: Gtk.ApplicationClass
    fileOpened: (totem: Object, mrl: string) => void
    fileClosed: (totem: Object) => void
    fileHasPlayed: (totem: Object, mrl: string) => void
    metadataUpdated: (totem: Object, artist: string, title: string, album: string, trackNum: number) => void
    getUserAgent: (totem: Object, mrl: string) => string
    getTextSubtitle: (totem: Object, mrl: string) => string
    static name: string
}
}