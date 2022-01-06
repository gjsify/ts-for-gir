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
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.Application */
    parent: View
    priv: ApplicationPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Application */
    getApplicationMenu(): { returnType: boolean, name: string, objectPath: string }
    getApplicationType(): string
    getDesktopFile(): string
    getFocusableChild(): View
    getShowMenuStubs(): boolean
    getSupportedMimeTypes(): string[]
    getWindowForXid(xid: number): Window
    getWindows(): Window[]
    getXids(): number[]
    /* Methods of Bamf-3.Bamf.View */
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
    /* Signals of Bamf-3.Bamf.Application */
    connect(sigName: "desktop-file-updated", callback: (($obj: Application, object: string) => void)): number
    on(sigName: "desktop-file-updated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "desktop-file-updated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "desktop-file-updated", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "desktop-file-updated", object: string): void
    connect(sigName: "window-added", callback: (($obj: Application, object: Window) => void)): number
    on(sigName: "window-added", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (object: Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-added", object: Window): void
    connect(sigName: "window-removed", callback: (($obj: Application, object: Window) => void)): number
    on(sigName: "window-removed", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (object: Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-removed", object: Window): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Application, object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Application, object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Application, object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Application, object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Application) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Application, object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Application, object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Application, object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Application, object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Application, object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Application, object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of Bamf-3.Bamf.Control */
    parent: GObject.Object
    priv: ControlPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Control */
    createLocalDesktopFile(application: Application): void
    insertDesktopFile(desktopFile: string): void
    registerApplicationForPid(desktopFile: string, pid: number): void
    setApproverBehavior(behavior: number): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Control
    static $gtype: GObject.Type
}
export interface Matcher_ConstructProps extends GObject.Object_ConstructProps {
}
export class Matcher {
    /* Fields of Bamf-3.Bamf.Matcher */
    parent: GObject.Object
    priv: MatcherPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Matcher */
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
    /* Signals of Bamf-3.Bamf.Matcher */
    connect(sigName: "active-application-changed", callback: (($obj: Matcher, object: Application, p0: Application) => void)): number
    on(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void): NodeJS.EventEmitter
    emit(sigName: "active-application-changed", object: Application, p0: Application): void
    connect(sigName: "active-window-changed", callback: (($obj: Matcher, object: Window, p0: Window) => void)): number
    on(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void): NodeJS.EventEmitter
    emit(sigName: "active-window-changed", object: Window, p0: Window): void
    connect(sigName: "stacking-order-changed", callback: (($obj: Matcher) => void)): number
    on(sigName: "stacking-order-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stacking-order-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stacking-order-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stacking-order-changed"): void
    connect(sigName: "view-closed", callback: (($obj: Matcher, object: View) => void)): number
    on(sigName: "view-closed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-closed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-closed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "view-closed", object: View): void
    connect(sigName: "view-opened", callback: (($obj: Matcher, object: View) => void)): number
    on(sigName: "view-opened", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-opened", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-opened", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "view-opened", object: View): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Matcher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Matcher_ConstructProps)
    _init (config?: Matcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Matcher
    static $gtype: GObject.Type
}
export interface Tab_ConstructProps extends View_ConstructProps {
}
export class Tab {
    /* Properties of Bamf-3.Bamf.Tab */
    readonly desktopId: string
    readonly isForegroundTab: boolean
    readonly location: string
    readonly xid: number
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.Tab */
    parent: View
    priv: TabPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Tab */
    close(): boolean
    getDesktopName(): string
    getIsForegroundTab(): boolean
    getLocation(): string
    getXid(): number
    raise(): boolean
    requestPreview(callback: TabPreviewReadyCallback): void
    /* Methods of Bamf-3.Bamf.View */
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
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Tab, object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Tab, object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Tab, object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Tab, object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Tab) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Tab, object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Tab, object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Tab, object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Tab, object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Tab, object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Tab, object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.View */
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
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: View, object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: View, object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: View, object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: View, object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: View) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: View, object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: View, object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: View, object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: View, object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: View, object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: View, object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.Window */
    parent: View
    priv: WindowPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Window */
    getMonitor(): number
    getPid(): number
    getTransient(): Window
    getUtf8Prop(prop: string): string
    getWindowType(): WindowType
    getXid(): number
    lastActive(): number
    maximized(): WindowMaximizationType
    /* Methods of Bamf-3.Bamf.View */
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
    /* Signals of Bamf-3.Bamf.Window */
    connect(sigName: "maximized-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    on(sigName: "maximized-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximized-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximized-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "maximized-changed", object: number, p0: number): void
    connect(sigName: "monitor-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    on(sigName: "monitor-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-changed", object: number, p0: number): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Window, object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Window, object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Window, object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Window, object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Window) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Window, object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Window, object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Window, object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Window, object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Window, object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Window, object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of Bamf-3.Bamf.ApplicationClass */
    parentClass: ViewClass
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class ControlClass {
    /* Fields of Bamf-3.Bamf.ControlClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ControlPrivate {
    static name: string
}
export abstract class MatcherClass {
    /* Fields of Bamf-3.Bamf.MatcherClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MatcherPrivate {
    static name: string
}
export abstract class TabClass {
    /* Fields of Bamf-3.Bamf.TabClass */
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
    /* Fields of Bamf-3.Bamf.ViewClass */
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
    /* Fields of Bamf-3.Bamf.WindowClass */
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