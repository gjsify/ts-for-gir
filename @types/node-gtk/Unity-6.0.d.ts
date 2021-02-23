/**
 * Unity-6.0
 */

import "node"
import type { GLib } from './GLib-2.0';
import type { Dbusmenu } from './Dbusmenu-0.4';
import type { GObject } from './GObject-2.0';
import type { Dee } from './Dee-1.0';
import type { Gio } from './Gio-2.0';

export declare namespace Unity {

export enum CategoryType {
    NONE,
    APPLICATION,
    BOOK,
    MUSIC,
    MOVIE,
    GAMES,
    ELECTRONICS,
    COMPUTERS,
    OFFICE,
    HOME,
    GARDEN,
    PETS,
    TOYS,
    CHILDREN,
    BABY,
    CLOTHES,
    SHOES,
    WATCHES,
    SPORTS,
    OUTDOORS,
    GROCERY,
    HEALTH,
    BEAUTY,
    DIY,
    TOOLS,
    CAR,
    N_CATEGORIES,
}
export enum IconSizeHint {
    DEFAULT,
    SMALL,
    LARGE,
}
export enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
}
export enum CategoryRenderer {
    VERTICAL_TILE,
    HORIZONTAL_TILE,
    LIST_TILE,
    FLOW,
}
export enum FilterRenderer {
    CHECK_OPTIONS,
    RADIO_OPTIONS,
    MULTIRANGE,
    RATINGS,
    CHECK_OPTIONS_COMPACT,
}
export enum LayoutHint {
    NONE,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
export enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
export enum PlaybackState {
    PLAYING,
    PAUSED,
}
export enum OptionsFilterSortType {
    MANUAL,
    DISPLAY_NAME,
    ID,
}
export enum PreferencesManagerRemoteContent {
    ALL,
    NONE,
}
export enum MusicPreviewTrackState {
    STOPPED,
    PLAYING,
    PAUSED,
}
export function ioReadStreamAsync(input: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function ioReadStreamFinish(res: Gio.AsyncResult): { data: any[], size: number }
export function ioOpenFromDirs(filename: string, dirs: string[], callback?: Gio.AsyncReadyCallback | null): void
export function ioOpenFromDirsFinish(res: Gio.AsyncResult): Gio.FileInputStream | null
export function ioOpenFromDataDirs(filename: string, callback?: Gio.AsyncReadyCallback | null): void
export function ioOpenFromDataDirsFinish(res: Gio.AsyncResult): Gio.FileInputStream | null
export function ioGetSystemDataDirs(): string[]
export interface MergeStrategy_ConstructProps extends GObject.Object_ConstructProps {
}
export class MergeStrategy {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MergeStrategy */
    mergeResult(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MergeStrategy, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MergeStrategy_ConstructProps)
    _init (config?: MergeStrategy_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AppInfoManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppInfoManager {
    /* Fields of Unity-6.0.Unity.AppInfoManager */
    parentInstance: GObject.Object
    priv: AppInfoManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AppInfoManager */
    lookup(id: string): Gio.AppInfo | null
    getCategories(id: string): string[] | null
    getKeywords(id: string): string[] | null
    getPath(id: string): string | null
    lookupAsync(id: string, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(res: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.AppInfoManager */
    connect(sigName: "changed", callback: (($obj: AppInfoManager, id: string, newAppinfo?: Gio.AppInfo | null) => void)): number
    on(sigName: "changed", callback: (id: string, newAppinfo?: Gio.AppInfo | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (id: string, newAppinfo?: Gio.AppInfo | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (id: string, newAppinfo?: Gio.AppInfo | null) => void): NodeJS.EventEmitter
    emit(sigName: "changed", id: string, newAppinfo?: Gio.AppInfo | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppInfoManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AppInfoManager_ConstructProps)
    _init (config?: AppInfoManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getInstance(): AppInfoManager
    static getDefault(): AppInfoManager
    static $gtype: GObject.Type
}
export interface AnnotatedIcon_ConstructProps extends GObject.Object_ConstructProps {
    icon?: Gio.Icon
    ribbon?: string
    category?: CategoryType
    sizeHint?: IconSizeHint
}
export class AnnotatedIcon {
    /* Properties of Unity-6.0.Unity.AnnotatedIcon */
    icon: Gio.Icon
    ribbon: string
    category: CategoryType
    sizeHint: IconSizeHint
    /* Fields of Unity-6.0.Unity.AnnotatedIcon */
    parentInstance: GObject.Object
    priv: AnnotatedIconPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AnnotatedIcon */
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ribbon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ribbon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ribbon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotatedIcon_ConstructProps)
    _init (config?: AnnotatedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseIcon: Gio.Icon): AnnotatedIcon
    static $gtype: GObject.Type
}
export interface Inspector_ConstructProps extends GObject.Object_ConstructProps {
}
export class Inspector {
    /* Properties of Unity-6.0.Unity.Inspector */
    readonly unityRunning: boolean
    readonly unityBusName: string
    /* Fields of Unity-6.0.Unity.Inspector */
    parentInstance: GObject.Object
    priv: InspectorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unity-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unity-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unity-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Inspector_ConstructProps)
    _init (config?: Inspector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Inspector
    static $gtype: GObject.Type
}
export interface LauncherEntry_ConstructProps extends GObject.Object_ConstructProps {
    appUri?: string
    count?: number
    countVisible?: boolean
    progress?: number
    progressVisible?: boolean
    urgent?: boolean
    quicklist?: Dbusmenu.Menuitem
}
export class LauncherEntry {
    /* Properties of Unity-6.0.Unity.LauncherEntry */
    appUri: string
    count: number
    countVisible: boolean
    progress: number
    progressVisible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem
    /* Fields of Unity-6.0.Unity.LauncherEntry */
    parentInstance: GObject.Object
    priv: LauncherEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::count-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::count-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::count-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quicklist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quicklist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quicklist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LauncherEntry_ConstructProps)
    _init (config?: LauncherEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getForAppUri(appUri: string): LauncherEntry
    static getForDesktopId(desktopId: string): LauncherEntry
    static getForDesktopFile(desktopFile: string): LauncherEntry
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface LauncherFavorites_ConstructProps extends GObject.Object_ConstructProps {
}
export class LauncherFavorites {
    /* Fields of Unity-6.0.Unity.LauncherFavorites */
    parentInstance: GObject.Object
    priv: LauncherFavoritesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.LauncherFavorites */
    hasAppInfo(appinfo: Gio.AppInfo): boolean
    hasAppId(appId: string): boolean
    lookup(appId: string): Gio.AppInfo | null
    enumerateIds(): string[]
    enumerateAppInfos(): Gio.AppInfo[]
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.LauncherFavorites */
    connect(sigName: "changed", callback: (($obj: LauncherFavorites) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherFavorites, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LauncherFavorites_ConstructProps)
    _init (config?: LauncherFavorites_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): LauncherFavorites
    static $gtype: GObject.Type
}
export interface ActivationResponse_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    handled?: HandledType
    gotoUri?: string
}
export class ActivationResponse {
    /* Properties of Unity-6.0.Unity.ActivationResponse */
    gotoUri: string
    /* Fields of Unity-6.0.Unity.ActivationResponse */
    parentInstance: GObject.InitiallyUnowned
    priv: ActivationResponsePrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::goto-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::goto-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::goto-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ActivationResponse_ConstructProps)
    _init (config?: ActivationResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(handled: HandledType, gotoUri: string): ActivationResponse
    static withPreview(preview: Preview): ActivationResponse
    static $gtype: GObject.Type
}
export interface Category_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    iconHint?: Gio.Icon
    defaultRenderer?: CategoryRenderer
}
export class Category {
    /* Fields of Unity-6.0.Unity.Category */
    parentInstance: GObject.Object
    priv: CategoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, iconHint: Gio.Icon, renderer: CategoryRenderer): Category
    static $gtype: GObject.Type
}
export interface Filter_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    displayName?: string
    iconHint?: Gio.Icon
    renderer?: FilterRenderer
    visible?: boolean
    collapsed?: boolean
    filtering?: boolean
}
export class Filter {
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.Filter */
    parentInstance: GObject.Object
    priv: FilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: Filter) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilterOption_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    displayName?: string
    iconHint?: Gio.Icon
    active?: boolean
}
export class FilterOption {
    /* Properties of Unity-6.0.Unity.FilterOption */
    active: boolean
    /* Fields of Unity-6.0.Unity.FilterOption */
    parentInstance: GObject.Object
    priv: FilterOptionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterOption_ConstructProps)
    _init (config?: FilterOption_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, active: boolean): FilterOption
    static $gtype: GObject.Type
}
export interface OptionsFilter_ConstructProps extends Filter_ConstructProps {
    sortType?: OptionsFilterSortType
}
export class OptionsFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    parentInstance: Filter
    priv: OptionsFilterPrivate
    options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: OptionsFilter) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OptionsFilter_ConstructProps)
    _init (config?: OptionsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OptionsFilter
    static $gtype: GObject.Type
}
export interface RadioOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
export class RadioOptionFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.RadioOptionFilter */
    parentInstance: OptionsFilter
    priv: RadioOptionFilterPrivate
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.RadioOptionFilter */
    getActiveOption(): FilterOption | null
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RadioOptionFilter) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RadioOptionFilter_ConstructProps)
    _init (config?: RadioOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter
    static new(): RadioOptionFilter
    static $gtype: GObject.Type
}
export interface CheckOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
export class CheckOptionFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.CheckOptionFilter */
    parentInstance: OptionsFilter
    priv: CheckOptionFilterPrivate
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilter) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CheckOptionFilter_ConstructProps)
    _init (config?: CheckOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter
    static new(): CheckOptionFilter
    static $gtype: GObject.Type
}
export interface CheckOptionFilterCompact_ConstructProps extends OptionsFilter_ConstructProps {
}
export class CheckOptionFilterCompact {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.CheckOptionFilterCompact */
    parentInstance: OptionsFilter
    priv: CheckOptionFilterCompactPrivate
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilterCompact) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CheckOptionFilterCompact_ConstructProps)
    _init (config?: CheckOptionFilterCompact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact
    static new(): CheckOptionFilterCompact
    static $gtype: GObject.Type
}
export interface RatingsFilter_ConstructProps extends Filter_ConstructProps {
    rating?: number
}
export class RatingsFilter {
    /* Properties of Unity-6.0.Unity.RatingsFilter */
    rating: number
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.RatingsFilter */
    parentInstance: Filter
    priv: RatingsFilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RatingsFilter) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RatingsFilter_ConstructProps)
    _init (config?: RatingsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    static $gtype: GObject.Type
}
export interface MultiRangeFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
export class MultiRangeFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.MultiRangeFilter */
    parentInstance: OptionsFilter
    priv: MultiRangeFilterPrivate
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MultiRangeFilter */
    getFirstActive(): FilterOption | null
    getLastActive(): FilterOption | null
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: MultiRangeFilter) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultiRangeFilter_ConstructProps)
    _init (config?: MultiRangeFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter
    static new(): MultiRangeFilter
    static $gtype: GObject.Type
}
export interface PreferencesManager_ConstructProps extends GObject.Object_ConstructProps {
    remoteContentSearch?: PreferencesManagerRemoteContent
}
export class PreferencesManager {
    /* Properties of Unity-6.0.Unity.PreferencesManager */
    remoteContentSearch: PreferencesManagerRemoteContent
    /* Fields of Unity-6.0.Unity.PreferencesManager */
    parentInstance: GObject.Object
    priv: PreferencesManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PreferencesManager_ConstructProps)
    _init (config?: PreferencesManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): PreferencesManager
    static $gtype: GObject.Type
}
export interface LensSearch_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    searchString?: string
    hints?: GLib.HashTable
    resultsModel?: Dee.SerializableModel
}
export class LensSearch {
    /* Fields of Unity-6.0.Unity.LensSearch */
    parentInstance: GObject.InitiallyUnowned
    priv: LensSearchPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.LensSearch */
    emitFinished(): void
    equals(other?: LensSearch | null): boolean
    setReplyHint(key: string, variant: GLib.Variant): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.LensSearch */
    connect(sigName: "finished", callback: (($obj: LensSearch) => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LensSearch_ConstructProps)
    _init (config?: LensSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(searchString: string, hints: GLib.HashTable, resultsModel: Dee.SerializableModel): LensSearch
    static $gtype: GObject.Type
}
export interface Lens_ConstructProps extends GObject.Object_ConstructProps {
    active?: boolean
    visible?: boolean
    searching?: boolean
    exported?: boolean
    searchInGlobal?: boolean
    homeLensDefaultName?: string
    id?: string
    dbusPath?: string
    searchHint?: string
    filters?: Filter[]
    categories?: Category[]
    mergeStrategy?: MergeStrategy
    globalMergeStrategy?: MergeStrategy
    sourcesDisplayName?: string
}
export class Lens {
    /* Properties of Unity-6.0.Unity.Lens */
    active: boolean
    visible: boolean
    searching: boolean
    exported: boolean
    searchInGlobal: boolean
    homeLensDefaultName: string
    searchHint: string
    filters: Filter[]
    categories: Category[]
    mergeStrategy: MergeStrategy
    globalMergeStrategy: MergeStrategy
    sourcesDisplayName: string
    /* Fields of Unity-6.0.Unity.Lens */
    parentInstance: GObject.Object
    priv: LensPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Lens */
    export(): void
    addLocalScope(scope: Scope): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::searching", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searching", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::searching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::searching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::searching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exported", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-lens-default-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-default-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-hint", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::global-merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources-display-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources-display-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Lens_ConstructProps)
    _init (config?: Lens_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusPath: string, id: string): Lens
    static $gtype: GObject.Type
}
export interface Preview_ConstructProps extends GObject.Object_ConstructProps {
    title?: string
    subtitle?: string
    descriptionMarkup?: string
    imageSourceUri?: string
    image?: Gio.Icon
}
export class Preview {
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    parentInstance: GObject.Object
    priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: Preview) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Preview_ConstructProps)
    _init (config?: Preview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface PreviewAction_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    displayName?: string
    extraText?: string
    iconHint?: Gio.Icon
    layoutHint?: LayoutHint
}
export class PreviewAction {
    /* Properties of Unity-6.0.Unity.PreviewAction */
    extraText: string
    readonly hints: GLib.HashTable
    /* Fields of Unity-6.0.Unity.PreviewAction */
    parentInstance: GObject.Object
    priv: PreviewActionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of Unity-6.0.Unity.PreviewAction */
    connect(sigName: "activated", callback: (($obj: PreviewAction, uri: string) => ActivationResponse)): number
    on(sigName: "activated", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "activated", uri: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PreviewAction_ConstructProps)
    _init (config?: PreviewAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint?: Gio.Icon | null): PreviewAction
    static withLayoutHint(id: string, displayName: string, iconHint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface InfoHint_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    id?: string
    displayName?: string
    iconHint?: Gio.Icon
    data?: GLib.Variant
}
export class InfoHint {
    /* Fields of Unity-6.0.Unity.InfoHint */
    parentInstance: GObject.InitiallyUnowned
    priv: InfoHintPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: InfoHint_ConstructProps)
    _init (config?: InfoHint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, data: string): InfoHint
    static withVariant(id: string, displayName: string, iconHint: Gio.Icon | null, data: GLib.Variant): InfoHint
    static $gtype: GObject.Type
}
export interface GenericPreview_ConstructProps extends Preview_ConstructProps {
}
export class GenericPreview {
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.GenericPreview */
    parentInstance: Preview
    priv: GenericPreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: GenericPreview) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GenericPreview_ConstructProps)
    _init (config?: GenericPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, description: string, image?: Gio.Icon | null): GenericPreview
    static $gtype: GObject.Type
}
export interface ApplicationPreview_ConstructProps extends Preview_ConstructProps {
    appIcon?: Gio.Icon
    license?: string
    copyright?: string
    lastUpdate?: string
}
export class ApplicationPreview {
    /* Properties of Unity-6.0.Unity.ApplicationPreview */
    appIcon: Gio.Icon
    license: string
    copyright: string
    lastUpdate: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.ApplicationPreview */
    parentInstance: Preview
    priv: ApplicationPreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.ApplicationPreview */
    setRating(rating: number, numRatings: number): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: ApplicationPreview) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ApplicationPreview_ConstructProps)
    _init (config?: ApplicationPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    static $gtype: GObject.Type
}
export interface MusicPreview_ConstructProps extends Preview_ConstructProps {
    currentTrackUri?: string
    currentProgress?: number
    currentTrackState?: MusicPreviewTrackState
}
export class MusicPreview {
    /* Properties of Unity-6.0.Unity.MusicPreview */
    currentTrackUri: string
    currentProgress: number
    currentTrackState: MusicPreviewTrackState
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.MusicPreview */
    parentInstance: Preview
    priv: MusicPreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MusicPreview */
    addTrack(track: TrackMetadata): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.MusicPreview */
    connect(sigName: "play", callback: (($obj: MusicPreview, uri: string) => void)): number
    on(sigName: "play", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "play", uri: string): void
    connect(sigName: "pause", callback: (($obj: MusicPreview, uri: string) => void)): number
    on(sigName: "pause", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pause", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pause", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "pause", uri: string): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: MusicPreview) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-track-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-progress", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-progress", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-track-state", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-state", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-track-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-track-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-track-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicPreview_ConstructProps)
    _init (config?: MusicPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, image?: Gio.Icon | null): MusicPreview
    static $gtype: GObject.Type
}
export interface MoviePreview_ConstructProps extends Preview_ConstructProps {
    year?: string
}
export class MoviePreview {
    /* Properties of Unity-6.0.Unity.MoviePreview */
    year: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.MoviePreview */
    parentInstance: Preview
    priv: MoviePreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MoviePreview */
    setRating(rating: number, numRatings: number): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: MoviePreview) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::year", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::year", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::year", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MoviePreview_ConstructProps)
    _init (config?: MoviePreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, image?: Gio.Icon | null): MoviePreview
    static $gtype: GObject.Type
}
export interface SocialPreview_ConstructProps extends Preview_ConstructProps {
    avatar?: Gio.Icon
    content?: string
    sender?: string
}
export class SocialPreview {
    /* Properties of Unity-6.0.Unity.SocialPreview */
    avatar: Gio.Icon
    content: string
    sender: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.SocialPreview */
    parentInstance: Preview
    priv: SocialPreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.SocialPreview */
    addComment(comment: SocialPreviewComment): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: SocialPreview) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocialPreview_ConstructProps)
    _init (config?: SocialPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null): SocialPreview
    static $gtype: GObject.Type
}
export interface SocialPreviewComment_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    id?: string
    name?: string
    text?: string
    time?: string
}
export class SocialPreviewComment {
    /* Fields of Unity-6.0.Unity.SocialPreviewComment */
    parentInstance: GObject.InitiallyUnowned
    priv: CommentPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SocialPreviewComment_ConstructProps)
    _init (config?: SocialPreviewComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    static $gtype: GObject.Type
}
export interface AsyncPreview_ConstructProps extends Preview_ConstructProps {
    cancellable?: Gio.Cancellable
}
export class AsyncPreview {
    /* Properties of Unity-6.0.Unity.AsyncPreview */
    cancellable: Gio.Cancellable
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.AsyncPreview */
    parentInstance: Preview
    priv: AsyncPreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AsyncPreview */
    emitPreviewReady(preview?: Preview | null): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.AsyncPreview */
    connect(sigName: "preview_ready", callback: (($obj: AsyncPreview, preview: Preview) => void)): number
    on(sigName: "preview_ready", callback: (preview: Preview) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview_ready", callback: (preview: Preview) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview_ready", callback: (preview: Preview) => void): NodeJS.EventEmitter
    emit(sigName: "preview_ready", preview: Preview): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: AsyncPreview) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancellable", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AsyncPreview_ConstructProps)
    _init (config?: AsyncPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AsyncPreview
    static withCancellable(cancellable: Gio.Cancellable): AsyncPreview
    static $gtype: GObject.Type
}
export interface Scope_ConstructProps extends GObject.Object_ConstructProps {
    active?: boolean
    exported?: boolean
    searchInGlobal?: boolean
    providesPersonalContent?: boolean
    dbusPath?: string
    sources?: OptionsFilter
}
export class Scope {
    /* Properties of Unity-6.0.Unity.Scope */
    active: boolean
    exported: boolean
    searchInGlobal: boolean
    providesPersonalContent: boolean
    sources: OptionsFilter
    readonly filters: Filter[]
    readonly resultsModel: Dee.SerializableModel
    readonly globalResultsModel: Dee.SerializableModel
    /* Fields of Unity-6.0.Unity.Scope */
    parentInstance: GObject.Object
    priv: ScopePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Scope */
    export(): void
    getFilter(id: string): Filter | null
    queueSearchChanged(searchType: SearchType): void
    invalidateSearch(searchType: SearchType): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.Scope */
    connect(sigName: "activate_uri", callback: (($obj: Scope, uri: string) => ActivationResponse | null)): number
    on(sigName: "activate_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate_uri", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "activate_uri", uri: string): void
    connect(sigName: "preview_uri", callback: (($obj: Scope, uri: string) => Preview | null)): number
    on(sigName: "preview_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview_uri", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "preview_uri", uri: string): void
    connect(sigName: "filters_changed", callback: (($obj: Scope) => void)): number
    on(sigName: "filters_changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filters_changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filters_changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "filters_changed"): void
    connect(sigName: "active_sources_changed", callback: (($obj: Scope, activeIds: string[]) => void)): number
    on(sigName: "active_sources_changed", callback: (activeIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active_sources_changed", callback: (activeIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active_sources_changed", callback: (activeIds: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "active_sources_changed", activeIds: string[]): void
    connect(sigName: "search_changed", callback: (($obj: Scope, search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void)): number
    on(sigName: "search_changed", callback: (search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "search_changed", callback: (search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "search_changed", callback: (search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void): NodeJS.EventEmitter
    emit(sigName: "search_changed", search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable): void
    connect(sigName: "generate_search_key", callback: (($obj: Scope, search: LensSearch) => string)): number
    on(sigName: "generate_search_key", callback: (search: LensSearch) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate_search_key", callback: (search: LensSearch) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate_search_key", callback: (search: LensSearch) => void): NodeJS.EventEmitter
    emit(sigName: "generate_search_key", search: LensSearch): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exported", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provides-personal-content", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provides-personal-content", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::global-results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::global-results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::global-results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::global-results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Scope_ConstructProps)
    _init (config?: Scope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusPath: string): Scope
    static $gtype: GObject.Type
}
export interface TrackMetadata_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
    trackNo?: number
    artist?: string
    title?: string
    album?: string
    length?: number
    artLocation?: Gio.File
    artIcon?: Gio.Icon
}
export class TrackMetadata {
    /* Properties of Unity-6.0.Unity.TrackMetadata */
    uri: string
    trackNo: number
    artist: string
    title: string
    album: string
    length: number
    artLocation: Gio.File
    artIcon: Gio.Icon
    /* Fields of Unity-6.0.Unity.TrackMetadata */
    parentInstance: GObject.Object
    priv: TrackMetadataPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-no", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-no", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-no", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::art-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::art-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::art-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::art-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::art-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::art-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackMetadata_ConstructProps)
    _init (config?: TrackMetadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TrackMetadata
    static full(uri: string, trackNo: number, title: string, artist: string, album: string, length: number): TrackMetadata
    static $gtype: GObject.Type
}
export interface Playlist_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    name?: string
    icon?: Gio.Icon
    creationDate?: GLib.DateTime
    modificationDate?: GLib.DateTime
    lastPlayDate?: GLib.DateTime
}
export class Playlist {
    /* Properties of Unity-6.0.Unity.Playlist */
    name: string
    icon: Gio.Icon
    creationDate: GLib.DateTime
    modificationDate: GLib.DateTime
    lastPlayDate: GLib.DateTime
    /* Fields of Unity-6.0.Unity.Playlist */
    parentInstance: GObject.Object
    priv: PlaylistPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modification-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modification-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modification-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-play-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-play-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-play-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Playlist
    static $gtype: GObject.Type
}
export interface MusicPlayer_ConstructProps extends GObject.Object_ConstructProps {
    appInfo?: Gio.AppInfo
    desktopFileName?: string
    isBlacklisted?: boolean
    title?: string
    canGoNext?: boolean
    canGoPrevious?: boolean
    canPlay?: boolean
    canPause?: boolean
    currentTrack?: TrackMetadata
    playbackState?: PlaybackState
    currentPlaylist?: Playlist
    trackMenu?: Dbusmenu.Menuitem
    playerMenu?: Dbusmenu.Menuitem
}
export class MusicPlayer {
    /* Properties of Unity-6.0.Unity.MusicPlayer */
    isBlacklisted: boolean
    title: string
    canGoNext: boolean
    canGoPrevious: boolean
    canPlay: boolean
    canPause: boolean
    currentTrack: TrackMetadata
    playbackState: PlaybackState
    currentPlaylist: Playlist
    trackMenu: Dbusmenu.Menuitem
    playerMenu: Dbusmenu.Menuitem
    /* Fields of Unity-6.0.Unity.MusicPlayer */
    parentInstance: GObject.Object
    priv: MusicPlayerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MusicPlayer */
    export(): void
    unexport(): void
    addPlaylist(p: Playlist): boolean
    removePlaylist(p: Playlist): boolean
    getPlaylists(): Playlist[]
    editPlaylistName(id: string, name: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of Unity-6.0.Unity.MusicPlayer */
    connect(sigName: "raise", callback: (($obj: MusicPlayer) => void)): number
    on(sigName: "raise", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "raise", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "raise", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "raise"): void
    connect(sigName: "play_pause", callback: (($obj: MusicPlayer) => void)): number
    on(sigName: "play_pause", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play_pause", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play_pause", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "play_pause"): void
    connect(sigName: "previous", callback: (($obj: MusicPlayer) => void)): number
    on(sigName: "previous", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "previous", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "previous", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "previous"): void
    connect(sigName: "next", callback: (($obj: MusicPlayer) => void)): number
    on(sigName: "next", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "next", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "next", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "next"): void
    connect(sigName: "activate_playlist", callback: (($obj: MusicPlayer, playlistId: string) => void)): number
    on(sigName: "activate_playlist", callback: (playlistId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate_playlist", callback: (playlistId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate_playlist", callback: (playlistId: string) => void): NodeJS.EventEmitter
    emit(sigName: "activate_playlist", playlistId: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-go-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-go-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-go-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::player-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::player-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::player-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicPlayer_ConstructProps)
    _init (config?: MusicPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desktop: string): MusicPlayer
    static $gtype: GObject.Type
}
export abstract class AppInfoManagerClass {
    /* Fields of Unity-6.0.Unity.AppInfoManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AppInfoManagerPrivate {
    static name: string
}
export abstract class AnnotatedIconClass {
    /* Fields of Unity-6.0.Unity.AnnotatedIconClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AnnotatedIconPrivate {
    static name: string
}
export abstract class InspectorClass {
    /* Fields of Unity-6.0.Unity.InspectorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class InspectorPrivate {
    static name: string
}
export abstract class LauncherEntryClass {
    /* Fields of Unity-6.0.Unity.LauncherEntryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class LauncherEntryPrivate {
    static name: string
}
export abstract class LauncherFavoritesClass {
    /* Fields of Unity-6.0.Unity.LauncherFavoritesClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class LauncherFavoritesPrivate {
    static name: string
}
export abstract class ActivationResponseClass {
    /* Fields of Unity-6.0.Unity.ActivationResponseClass */
    parentClass: GObject.InitiallyUnownedClass
    static name: string
}
export class ActivationResponsePrivate {
    static name: string
}
export abstract class CategoryClass {
    /* Fields of Unity-6.0.Unity.CategoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CategoryPrivate {
    static name: string
}
export abstract class FilterClass {
    /* Fields of Unity-6.0.Unity.FilterClass */
    parentClass: GObject.ObjectClass
    getHints: (self: Filter) => GLib.HashTable
    update: (self: Filter, properties: GLib.Variant) => void
    static name: string
}
export class FilterPrivate {
    static name: string
}
export abstract class FilterOptionClass {
    /* Fields of Unity-6.0.Unity.FilterOptionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class FilterOptionPrivate {
    static name: string
}
export abstract class OptionsFilterClass {
    /* Fields of Unity-6.0.Unity.OptionsFilterClass */
    parentClass: FilterClass
    static name: string
}
export class OptionsFilterPrivate {
    static name: string
}
export abstract class RadioOptionFilterClass {
    /* Fields of Unity-6.0.Unity.RadioOptionFilterClass */
    parentClass: OptionsFilterClass
    static name: string
}
export class RadioOptionFilterPrivate {
    static name: string
}
export abstract class CheckOptionFilterClass {
    /* Fields of Unity-6.0.Unity.CheckOptionFilterClass */
    parentClass: OptionsFilterClass
    static name: string
}
export class CheckOptionFilterPrivate {
    static name: string
}
export abstract class CheckOptionFilterCompactClass {
    /* Fields of Unity-6.0.Unity.CheckOptionFilterCompactClass */
    parentClass: OptionsFilterClass
    static name: string
}
export class CheckOptionFilterCompactPrivate {
    static name: string
}
export abstract class RatingsFilterClass {
    /* Fields of Unity-6.0.Unity.RatingsFilterClass */
    parentClass: FilterClass
    static name: string
}
export class RatingsFilterPrivate {
    static name: string
}
export abstract class MultiRangeFilterClass {
    /* Fields of Unity-6.0.Unity.MultiRangeFilterClass */
    parentClass: OptionsFilterClass
    static name: string
}
export class MultiRangeFilterPrivate {
    static name: string
}
export abstract class PreferencesManagerClass {
    /* Fields of Unity-6.0.Unity.PreferencesManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PreferencesManagerPrivate {
    static name: string
}
export abstract class LensSearchClass {
    /* Fields of Unity-6.0.Unity.LensSearchClass */
    parentClass: GObject.InitiallyUnownedClass
    static name: string
}
export class LensSearchPrivate {
    static name: string
}
export abstract class LensClass {
    /* Fields of Unity-6.0.Unity.LensClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class LensPrivate {
    static name: string
}
export abstract class PreviewClass {
    /* Fields of Unity-6.0.Unity.PreviewClass */
    parentClass: GObject.ObjectClass
    createRaw: (self: Preview) => GObject.Object
    updateProperty: (self: Preview, values: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null) => void
    updatePropertyFinish: (self: Preview, res: Gio.AsyncResult) => GLib.HashTable
    dummy1: (self: Preview) => void
    dummy2: (self: Preview) => void
    dummy3: (self: Preview) => void
    dummy4: (self: Preview) => void
    static name: string
}
export class PreviewPrivate {
    static name: string
}
export abstract class PreviewActionClass {
    /* Fields of Unity-6.0.Unity.PreviewActionClass */
    parentClass: GObject.ObjectClass
    dummy1: (self: PreviewAction) => void
    dummy2: (self: PreviewAction) => void
    dummy3: (self: PreviewAction) => void
    dummy4: (self: PreviewAction) => void
    static name: string
}
export class PreviewActionPrivate {
    static name: string
}
export abstract class InfoHintClass {
    /* Fields of Unity-6.0.Unity.InfoHintClass */
    parentClass: GObject.InitiallyUnownedClass
    static name: string
}
export class InfoHintPrivate {
    static name: string
}
export abstract class GenericPreviewClass {
    /* Fields of Unity-6.0.Unity.GenericPreviewClass */
    parentClass: PreviewClass
    static name: string
}
export class GenericPreviewPrivate {
    static name: string
}
export abstract class ApplicationPreviewClass {
    /* Fields of Unity-6.0.Unity.ApplicationPreviewClass */
    parentClass: PreviewClass
    static name: string
}
export class ApplicationPreviewPrivate {
    static name: string
}
export abstract class MusicPreviewClass {
    /* Fields of Unity-6.0.Unity.MusicPreviewClass */
    parentClass: PreviewClass
    static name: string
}
export class MusicPreviewPrivate {
    static name: string
}
export abstract class MoviePreviewClass {
    /* Fields of Unity-6.0.Unity.MoviePreviewClass */
    parentClass: PreviewClass
    static name: string
}
export class MoviePreviewPrivate {
    static name: string
}
export abstract class SocialPreviewClass {
    /* Fields of Unity-6.0.Unity.SocialPreviewClass */
    parentClass: PreviewClass
    static name: string
}
export class SocialPreviewPrivate {
    static name: string
}
export abstract class CommentClass {
    /* Fields of Unity-6.0.Unity.CommentClass */
    parentClass: GObject.InitiallyUnownedClass
    static name: string
}
export class CommentPrivate {
    static name: string
}
export abstract class AsyncPreviewClass {
    /* Fields of Unity-6.0.Unity.AsyncPreviewClass */
    parentClass: PreviewClass
    static name: string
}
export class AsyncPreviewPrivate {
    static name: string
}
export abstract class ScopeClass {
    /* Fields of Unity-6.0.Unity.ScopeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ScopePrivate {
    static name: string
}
export abstract class TrackMetadataClass {
    /* Fields of Unity-6.0.Unity.TrackMetadataClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class TrackMetadataPrivate {
    static name: string
}
export abstract class PlaylistClass {
    /* Fields of Unity-6.0.Unity.PlaylistClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PlaylistPrivate {
    static name: string
}
export abstract class MusicPlayerClass {
    /* Fields of Unity-6.0.Unity.MusicPlayerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class MusicPlayerPrivate {
    static name: string
}
export abstract class MergeStrategyIface {
    /* Fields of Unity-6.0.Unity.MergeStrategyIface */
    parentIface: GObject.TypeInterface
    mergeResult: (self: MergeStrategy, target: Dee.Model, row: GLib.Variant[]) => Dee.ModelIter | null
    static name: string
}
export class PlaylistDetails {
    /* Fields of Unity-6.0.Unity.PlaylistDetails */
    id: string
    name: string
    iconName: string
    static name: string
}
export class ActivePlaylistContainer {
    /* Fields of Unity-6.0.Unity.ActivePlaylistContainer */
    valid: boolean
    details: PlaylistDetails
    static name: string
}
}