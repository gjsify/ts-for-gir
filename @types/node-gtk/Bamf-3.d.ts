/**
 * Bamf-3
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Bamf {

export enum ClickBehavior {
    NONE,
    OPEN,
    FOCUS,
    FOCUS_ALL,
    MINIMIZE,
    RESTORE,
    RESTORE_ALL,
    PICKER,
}
export enum WindowMaximizationType {
    FLOATING,
    HORIZONTAL_MAXIMIZED,
    VERTICAL_MAXIMIZED,
    MAXIMIZED,
}
export enum WindowType {
    NORMAL,
    DESKTOP,
    DOCK,
    DIALOG,
    TOOLBAR,
    MENU,
    UTILITY,
    SPLASHSCREEN,
    UNKNOWN,
}
export const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string
export const APPLICATION_SIGNAL_WINDOW_ADDED: string
export const APPLICATION_SIGNAL_WINDOW_REMOVED: string
export const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string
export const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string
export const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string
export const MATCHER_SIGNAL_VIEW_CLOSED: string
export const MATCHER_SIGNAL_VIEW_OPENED: string
export const VIEW_SIGNAL_ACTIVE_CHANGED: string
export const VIEW_SIGNAL_CHILD_ADDED: string
export const VIEW_SIGNAL_CHILD_MOVED: string
export const VIEW_SIGNAL_CHILD_REMOVED: string
export const VIEW_SIGNAL_CLOSED: string
export const VIEW_SIGNAL_ICON_CHANGED: string
export const VIEW_SIGNAL_NAME_CHANGED: string
export const VIEW_SIGNAL_RUNNING_CHANGED: string
export const VIEW_SIGNAL_STARTING_CHANGED: string
export const VIEW_SIGNAL_URGENT_CHANGED: string
export const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string
export const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string
export const WINDOW_SIGNAL_MONITOR_CHANGED: string
export interface TabPreviewReadyCallback {
    (self: Tab, previewData: string): void
}
export interface Application_ConstructProps extends View_ConstructProps {
}
export class Application {
    /* Properties of Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf.Application */
    parent: View
    priv: ApplicationPrivate
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf.Application */
    getApplicationMenu(): [ /* returnType */ boolean, /* name */ string, /* objectPath */ string ]
    getApplicationType(): string
    getDesktopFile(): string
    getFocusableChild(): View
    getShowMenuStubs(): boolean
    getSupportedMimeTypes(): string[]
    getWindowForXid(xid: number): Window
    getWindows(): Window[]
    getXids(): number[]
    /* Methods of Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
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
    /* Virtual methods of Bamf.View */
    vfuncActiveChanged(active: boolean): void
    vfuncChildAdded(child: View): void
    vfuncChildMoved(child: View): void
    vfuncChildRemoved(child: View): void
    vfuncClickBehavior(): ClickBehavior
    vfuncClosed(): void
    vfuncGetChildren(): View[]
    vfuncGetIcon(): string
    vfuncGetName(): string
    vfuncIconChanged(icon: string): void
    vfuncIsActive(): boolean
    vfuncIsRunning(): boolean
    vfuncIsStarting(): boolean
    vfuncIsUrgent(): boolean
    vfuncIsUserVisible(): boolean
    vfuncNameChanged(oldName: string, newName: string): void
    vfuncRunningChanged(running: boolean): void
    vfuncSetPath(path: string): void
    vfuncSetSticky(value: boolean): void
    vfuncStartingChanged(starting: boolean): void
    vfuncUrgentChanged(urgent: boolean): void
    vfuncUserVisibleChanged(userVisible: boolean): void
    vfuncViewType(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Bamf.Application */
    connect(sigName: "desktop-file-updated", callback: (($obj: Application, object: string) => void)): number
    connect_after(sigName: "desktop-file-updated", callback: (($obj: Application, object: string) => void)): number
    emit(sigName: "desktop-file-updated", object: string): void
    on(sigName: "desktop-file-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "desktop-file-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "desktop-file-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-added", callback: (($obj: Application, object: Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Application, object: Window) => void)): number
    emit(sigName: "window-added", object: Window): void
    on(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-removed", callback: (($obj: Application, object: Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Application, object: Window) => void)): number
    emit(sigName: "window-removed", object: Window): void
    on(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    on(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Application) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-changed", callback: (($obj: Application, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Application, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    on(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-changed", callback: (($obj: Application, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Application, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "running-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    on(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    on(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "urgent-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    on(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "user-visible-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    on(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Control_ConstructProps extends GObject.Object_ConstructProps {
}
export class Control {
    /* Fields of Bamf.Control */
    parent: GObject.Object
    priv: ControlPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf.Control */
    createLocalDesktopFile(application: Application): void
    insertDesktopFile(desktopFile: string): void
    registerApplicationForPid(desktopFile: string, pid: number): void
    setApproverBehavior(behavior: number): void
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
    connect(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Control
    static $gtype: GObject.Type
}
export interface Matcher_ConstructProps extends GObject.Object_ConstructProps {
}
export class Matcher {
    /* Fields of Bamf.Matcher */
    parent: GObject.Object
    priv: MatcherPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf.Matcher */
    applicationIsRunning(desktopFile: string): boolean
    getActiveApplication(): Application
    getActiveWindow(): Window
    getApplicationForDesktopFile(desktopFilePath: string, createIfNotFound: boolean): Application
    getApplicationForWindow(window: Window): Application
    getApplicationForXid(xid: number): Application
    getApplications(): Application[]
    getRunningApplications(): Application[]
    getTabs(): Tab[]
    getWindowForXid(xid: number): Window
    getWindowStackForMonitor(monitor: number): Window[]
    getWindows(): Window[]
    getXidsForApplication(desktopFile: string): number[]
    registerFavorites(favorites: string[]): void
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
    /* Signals of Bamf.Matcher */
    connect(sigName: "active-application-changed", callback: (($obj: Matcher, object: Application, p0: Application) => void)): number
    connect_after(sigName: "active-application-changed", callback: (($obj: Matcher, object: Application, p0: Application) => void)): number
    emit(sigName: "active-application-changed", object: Application, p0: Application): void
    on(sigName: "active-application-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-application-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-application-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "active-window-changed", callback: (($obj: Matcher, object: Window, p0: Window) => void)): number
    connect_after(sigName: "active-window-changed", callback: (($obj: Matcher, object: Window, p0: Window) => void)): number
    emit(sigName: "active-window-changed", object: Window, p0: Window): void
    on(sigName: "active-window-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stacking-order-changed", callback: (($obj: Matcher) => void)): number
    connect_after(sigName: "stacking-order-changed", callback: (($obj: Matcher) => void)): number
    emit(sigName: "stacking-order-changed"): void
    on(sigName: "stacking-order-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stacking-order-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stacking-order-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "view-closed", callback: (($obj: Matcher, object: View) => void)): number
    connect_after(sigName: "view-closed", callback: (($obj: Matcher, object: View) => void)): number
    emit(sigName: "view-closed", object: View): void
    on(sigName: "view-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "view-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "view-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "view-opened", callback: (($obj: Matcher, object: View) => void)): number
    connect_after(sigName: "view-opened", callback: (($obj: Matcher, object: View) => void)): number
    emit(sigName: "view-opened", object: View): void
    on(sigName: "view-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "view-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "view-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Matcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Matcher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Matcher_ConstructProps)
    _init (config?: Matcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Matcher
    static $gtype: GObject.Type
}
export interface Tab_ConstructProps extends View_ConstructProps {
}
export class Tab {
    /* Properties of Bamf.Tab */
    readonly desktopId: string
    readonly isForegroundTab: boolean
    readonly location: string
    readonly xid: number
    /* Properties of Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf.Tab */
    parent: View
    priv: TabPrivate
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf.Tab */
    close(): boolean
    getDesktopName(): string
    getIsForegroundTab(): boolean
    getLocation(): string
    getXid(): number
    raise(): boolean
    requestPreview(callback: TabPreviewReadyCallback): void
    /* Methods of Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
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
    /* Virtual methods of Bamf.Tab */
    vfuncGetDesktopName(): string
    vfuncGetIsForegroundTab(): boolean
    vfuncGetLocation(): string
    vfuncGetXid(): number
    /* Virtual methods of Bamf.View */
    vfuncActiveChanged(active: boolean): void
    vfuncChildAdded(child: View): void
    vfuncChildMoved(child: View): void
    vfuncChildRemoved(child: View): void
    vfuncClickBehavior(): ClickBehavior
    vfuncClosed(): void
    vfuncGetChildren(): View[]
    vfuncGetIcon(): string
    vfuncGetName(): string
    vfuncIconChanged(icon: string): void
    vfuncIsActive(): boolean
    vfuncIsRunning(): boolean
    vfuncIsStarting(): boolean
    vfuncIsUrgent(): boolean
    vfuncIsUserVisible(): boolean
    vfuncNameChanged(oldName: string, newName: string): void
    vfuncRunningChanged(running: boolean): void
    vfuncSetPath(path: string): void
    vfuncSetSticky(value: boolean): void
    vfuncStartingChanged(starting: boolean): void
    vfuncUrgentChanged(urgent: boolean): void
    vfuncUserVisibleChanged(userVisible: boolean): void
    vfuncViewType(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    on(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closed", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Tab) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-changed", callback: (($obj: Tab, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Tab, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    on(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-changed", callback: (($obj: Tab, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Tab, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "running-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    on(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    on(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "urgent-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    on(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "user-visible-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    on(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tab_ConstructProps)
    _init (config?: Tab_ConstructProps): void
    static $gtype: GObject.Type
}
export interface View_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class View {
    /* Properties of Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
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
    /* Virtual methods of Bamf.View */
    vfuncActiveChanged(active: boolean): void
    vfuncChildAdded(child: View): void
    vfuncChildMoved(child: View): void
    vfuncChildRemoved(child: View): void
    vfuncClickBehavior(): ClickBehavior
    vfuncClosed(): void
    vfuncGetChildren(): View[]
    vfuncGetIcon(): string
    vfuncGetName(): string
    vfuncIconChanged(icon: string): void
    vfuncIsActive(): boolean
    vfuncIsRunning(): boolean
    vfuncIsStarting(): boolean
    vfuncIsUrgent(): boolean
    vfuncIsUserVisible(): boolean
    vfuncNameChanged(oldName: string, newName: string): void
    vfuncRunningChanged(running: boolean): void
    vfuncSetPath(path: string): void
    vfuncSetSticky(value: boolean): void
    vfuncStartingChanged(starting: boolean): void
    vfuncUrgentChanged(urgent: boolean): void
    vfuncUserVisibleChanged(userVisible: boolean): void
    vfuncViewType(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    on(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closed", callback: (($obj: View) => void)): number
    connect_after(sigName: "closed", callback: (($obj: View) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-changed", callback: (($obj: View, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: View, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    on(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-changed", callback: (($obj: View, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: View, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "running-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    on(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    on(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "urgent-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    on(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "user-visible-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    on(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends View_ConstructProps {
}
export class Window {
    /* Properties of Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf.Window */
    parent: View
    priv: WindowPrivate
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf.Window */
    getMonitor(): number
    getPid(): number
    getTransient(): Window
    getUtf8Prop(prop: string): string
    getWindowType(): WindowType
    getXid(): number
    lastActive(): number
    maximized(): WindowMaximizationType
    /* Methods of Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
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
    /* Virtual methods of Bamf.Window */
    vfuncGetMonitor(): number
    vfuncGetPid(): number
    vfuncGetTransient(): Window
    vfuncGetUtf8Prop(prop: string): string
    vfuncGetWindowType(): WindowType
    vfuncGetXid(): number
    vfuncLastActive(): number
    vfuncMaximized(): WindowMaximizationType
    vfuncMaximizedChanged(oldValue: number, newValue: number): void
    vfuncMonitorChanged(oldValue: number, newValue: number): void
    /* Virtual methods of Bamf.View */
    vfuncActiveChanged(active: boolean): void
    vfuncChildAdded(child: View): void
    vfuncChildMoved(child: View): void
    vfuncChildRemoved(child: View): void
    vfuncClickBehavior(): ClickBehavior
    vfuncClosed(): void
    vfuncGetChildren(): View[]
    vfuncGetIcon(): string
    vfuncGetName(): string
    vfuncIconChanged(icon: string): void
    vfuncIsActive(): boolean
    vfuncIsRunning(): boolean
    vfuncIsStarting(): boolean
    vfuncIsUrgent(): boolean
    vfuncIsUserVisible(): boolean
    vfuncNameChanged(oldName: string, newName: string): void
    vfuncRunningChanged(running: boolean): void
    vfuncSetPath(path: string): void
    vfuncSetSticky(value: boolean): void
    vfuncStartingChanged(starting: boolean): void
    vfuncUrgentChanged(urgent: boolean): void
    vfuncUserVisibleChanged(userVisible: boolean): void
    vfuncViewType(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Bamf.Window */
    connect(sigName: "maximized-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    connect_after(sigName: "maximized-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    emit(sigName: "maximized-changed", object: number, p0: number): void
    on(sigName: "maximized-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "maximized-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "maximized-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "monitor-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    connect_after(sigName: "monitor-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    emit(sigName: "monitor-changed", object: number, p0: number): void
    on(sigName: "monitor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "monitor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "monitor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    on(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "closed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Window) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "icon-changed", callback: (($obj: Window, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Window, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    on(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "name-changed", callback: (($obj: Window, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Window, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    on(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "running-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    on(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    on(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "urgent-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    on(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "user-visible-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    on(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ApplicationClass {
    /* Fields of Bamf.ApplicationClass */
    parentClass: ViewClass
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class ControlClass {
    /* Fields of Bamf.ControlClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ControlPrivate {
    static name: string
}
export abstract class MatcherClass {
    /* Fields of Bamf.MatcherClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MatcherPrivate {
    static name: string
}
export abstract class TabClass {
    /* Fields of Bamf.TabClass */
    parentClass: ViewClass
    getDesktopName: (self: Tab) => string
    getLocation: (self: Tab) => string
    getXid: (self: Tab) => number
    getIsForegroundTab: (self: Tab) => boolean
    static name: string
}
export class TabPrivate {
    static name: string
}
export abstract class ViewClass {
    /* Fields of Bamf.ViewClass */
    parentClass: GObject.InitiallyUnownedClass
    getChildren: (view: View) => View[]
    isActive: (view: View) => boolean
    isRunning: (view: View) => boolean
    isUrgent: (view: View) => boolean
    isUserVisible: (view: View) => boolean
    getName: (view: View) => string
    getIcon: (view: View) => string
    viewType: (view: View) => string
    setPath: (view: View, path: string) => void
    setSticky: (view: View, value: boolean) => void
    clickBehavior: (view: View) => ClickBehavior
    activeChanged: (view: View, active: boolean) => void
    closed: (view: View) => void
    childAdded: (view: View, child: View) => void
    childRemoved: (view: View, child: View) => void
    runningChanged: (view: View, running: boolean) => void
    urgentChanged: (view: View, urgent: boolean) => void
    userVisibleChanged: (view: View, userVisible: boolean) => void
    nameChanged: (view: View, oldName: string, newName: string) => void
    iconChanged: (view: View, icon: string) => void
    childMoved: (view: View, child: View) => void
    isStarting: (view: View) => boolean
    startingChanged: (view: View, starting: boolean) => void
    static name: string
}
export class ViewPrivate {
    static name: string
}
export abstract class WindowClass {
    /* Fields of Bamf.WindowClass */
    parentClass: ViewClass
    getTransient: (self: Window) => Window
    getWindowType: (self: Window) => WindowType
    getXid: (self: Window) => number
    getPid: (self: Window) => number
    getMonitor: (self: Window) => number
    getUtf8Prop: (self: Window, prop: string) => string
    maximized: (self: Window) => WindowMaximizationType
    lastActive: (self: Window) => number
    monitorChanged: (window: Window, oldValue: number, newValue: number) => void
    maximizedChanged: (window: Window, oldValue: number, newValue: number) => void
    static name: string
}
export class WindowPrivate {
    static name: string
}
}