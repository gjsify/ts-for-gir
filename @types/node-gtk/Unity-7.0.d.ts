/**
 * Unity-7.0
 */

/// <reference types="node" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Dbusmenu-0.4.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="Dee-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />

declare namespace Unity {

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
export enum CategoryRenderer {
    DEFAULT,
    GRID,
    CAROUSEL,
    LIST,
    DYNAMIC,
    SPECIAL,
    VERTICAL_TILE,
    HORIZONTAL_TILE,
}
export enum CategoryContentType {
    DEFAULT,
    APPLICATIONS,
    MUSIC,
    VIDEO,
    PLACES,
    SOCIAL,
    WEATHER,
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
export enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
    PERFORM_SEARCH,
}
export enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
export enum ResultType {
    DEFAULT,
    PERSONAL,
    SEMI_PERSONAL,
}
export enum SerializationType {
    BINARY,
    JSON,
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
export enum PaymentPreviewType {
    APPLICATION,
    MUSIC,
    ERROR,
}
export enum SchemaFieldType {
    OPTIONAL,
    REQUIRED,
}
export enum AggregatorScopeSortFlags {
    ASCENDING,
    DESCENDING,
    CASE_INSENSITIVE,
}
export enum AggregatorScopeMergeMode {
    CATEGORY_ID,
    OWNER_SCOPE,
}
export const SCOPE_API_VERSION: number
export function categoryRendererFromString(rendererName: string): CategoryRenderer
export function categoryRendererToString(val: CategoryRenderer): string
export function categoryContentTypeFromString(contentType: string): CategoryContentType
export function categoryContentTypeToString(val: CategoryContentType): string
export function filterRendererToString(renderer: FilterRenderer): string
export function filterRendererFromString(rendererName: string): FilterRenderer
export function scopeModuleGetVersion(): number
export function scopeModuleLoadScopes(): AbstractScope[]
export function objectUnref(object?: object | null): void
export interface ScopeSearchBaseCallback {
    (instance: ScopeSearchBase): void
}
export interface AbstractPreviewCallback {
    (previewer: ResultPreviewer, preview: AbstractPreview | null): void
}
export interface AppInfoManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppInfoManager {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.AppInfoManager */
    lookup(id: string): Gio.AppInfo | null
    getCategories(id: string): string[] | null
    getKeywords(id: string): string[] | null
    getPath(id: string): string | null
    lookupAsync(id: string, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(res: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void
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
    /* Signals of Unity.AppInfoManager */
    connect(sigName: "changed", callback: (($obj: AppInfoManager, id: string, newAppinfo?: Gio.AppInfo | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AppInfoManager, id: string, newAppinfo?: Gio.AppInfo | null) => void)): number
    emit(sigName: "changed", id: string, newAppinfo?: Gio.AppInfo | null): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppInfoManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppInfoManager, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Unity.AnnotatedIcon */
    icon: Gio.Icon
    ribbon: string
    category: CategoryType
    sizeHint: IconSizeHint
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.AnnotatedIcon */
    setColorizeRgba(r: number, g: number, b: number, a: number): void
    toString(): string
    getIcon(): Gio.Icon
    setIcon(value: Gio.Icon): void
    getRibbon(): string
    setRibbon(value: string): void
    getCategory(): CategoryType
    setCategory(value: CategoryType): void
    getSizeHint(): IconSizeHint
    setSizeHint(value: IconSizeHint): void
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
    connect(sigName: "notify", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.Inspector */
    readonly unityRunning: boolean
    readonly unityBusName: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Inspector */
    getUnityRunning(): boolean
    getUnityBusName(): string | null
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
    connect(sigName: "notify", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.LauncherEntry */
    appUri: string
    count: number
    countVisible: boolean
    progress: number
    progressVisible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.LauncherEntry */
    getAppUri(): string
    setAppUri(value: string): void
    getCount(): number
    setCount(value: number): void
    getCountVisible(): boolean
    setCountVisible(value: boolean): void
    getProgress(): number
    setProgress(value: number): void
    getProgressVisible(): boolean
    setProgressVisible(value: boolean): void
    getUrgent(): boolean
    setUrgent(value: boolean): void
    getQuicklist(): Dbusmenu.Menuitem | null
    setQuicklist(value?: Dbusmenu.Menuitem | null): void
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.LauncherEntry */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.LauncherFavorites */
    hasAppInfo(appinfo: Gio.AppInfo): boolean
    hasAppId(appId: string): boolean
    lookup(appId: string): Gio.AppInfo | null
    enumerateIds(): string[]
    enumerateAppInfos(): Gio.AppInfo[]
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
    /* Signals of Unity.LauncherFavorites */
    connect(sigName: "changed", callback: (($obj: LauncherFavorites) => void)): number
    connect_after(sigName: "changed", callback: (($obj: LauncherFavorites) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherFavorites, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LauncherFavorites, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: LauncherFavorites_ConstructProps)
    _init (config?: LauncherFavorites_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): LauncherFavorites
    static $gtype: GObject.Type
}
export interface MetadataProvider_ConstructProps extends GObject.Object_ConstructProps {
}
export class MetadataProvider {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: MetadataProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetadataProvider, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MetadataProvider_ConstructProps)
    _init (config?: MetadataProvider_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProgressSourceProvider_ConstructProps extends MetadataProvider_ConstructProps {
    dbusName?: string
    dbusPath?: string
}
export class ProgressSourceProvider {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ProgressSourceProvider */
    getDbusName(): string
    getDbusPath(): string
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
    connect(sigName: "notify", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ProgressSourceProvider_ConstructProps)
    _init (config?: ProgressSourceProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusName: string, dbusPath: string): ProgressSourceProvider
    static $gtype: GObject.Type
}
export interface Category_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    name?: string
    iconHint?: Gio.Icon
    defaultRenderer?: CategoryRenderer
    contentType?: CategoryContentType
    rendererHint?: string
}
export class Category {
    /* Properties of Unity.Category */
    contentType: CategoryContentType
    rendererHint: string
    readonly renderer: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Category */
    addMetadataProvider(provider: MetadataProvider): void
    getId(): string
    getName(): string
    getIconHint(): Gio.Icon | null
    getDefaultRenderer(): CategoryRenderer
    getContentType(): CategoryContentType
    setContentType(value: CategoryContentType): void
    getRendererHint(): string
    setRendererHint(value: string): void
    getRenderer(): string
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
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-type", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::renderer-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::renderer-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::renderer-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::renderer-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(id: string, name: string, iconHint: Gio.Icon, renderer: CategoryRenderer): Category
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
    /* Properties of Unity.Filter */
    displayName: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Filter */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.Filter */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: Filter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Filter) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::collapsed", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
export interface FilterOption_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    displayName?: string
    iconHint?: Gio.Icon
    active?: boolean
}
export class FilterOption {
    /* Properties of Unity.FilterOption */
    active: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.FilterOption */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon
    getActive(): boolean
    setActive(value: boolean): void
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
    connect(sigName: "notify", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    showAllButton?: boolean
}
export class OptionsFilter {
    /* Properties of Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    showAllButton: boolean
    /* Properties of Unity.Filter */
    displayName: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    getSortType(): OptionsFilterSortType
    setSortType(value: OptionsFilterSortType): void
    getShowAllButton(): boolean
    setShowAllButton(value: boolean): void
    /* Methods of Unity.Filter */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: OptionsFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: OptionsFilter) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-all-button", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::collapsed", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    showAllButton: boolean
    /* Properties of Unity.Filter */
    displayName: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.RadioOptionFilter */
    getActiveOption(): FilterOption | null
    /* Methods of Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    getSortType(): OptionsFilterSortType
    setSortType(value: OptionsFilterSortType): void
    getShowAllButton(): boolean
    setShowAllButton(value: boolean): void
    /* Methods of Unity.Filter */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RadioOptionFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RadioOptionFilter) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-all-button", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::collapsed", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    showAllButton: boolean
    /* Properties of Unity.Filter */
    displayName: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    getSortType(): OptionsFilterSortType
    setSortType(value: OptionsFilterSortType): void
    getShowAllButton(): boolean
    setShowAllButton(value: boolean): void
    /* Methods of Unity.Filter */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CheckOptionFilter) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    showAllButton: boolean
    /* Properties of Unity.Filter */
    displayName: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    getSortType(): OptionsFilterSortType
    setSortType(value: OptionsFilterSortType): void
    getShowAllButton(): boolean
    setShowAllButton(value: boolean): void
    /* Methods of Unity.Filter */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilterCompact) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CheckOptionFilterCompact) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.RatingsFilter */
    rating: number
    /* Properties of Unity.Filter */
    displayName: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.RatingsFilter */
    getRating(): number
    /* Methods of Unity.Filter */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RatingsFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RatingsFilter) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::collapsed", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    showAllButton: boolean
    /* Properties of Unity.Filter */
    displayName: string
    visible: boolean
    collapsed: boolean
    filtering: boolean
    /* Fields of Unity.OptionsFilter */
    options: FilterOption[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.MultiRangeFilter */
    getFirstActive(): FilterOption | null
    getLastActive(): FilterOption | null
    /* Methods of Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    getSortType(): OptionsFilterSortType
    setSortType(value: OptionsFilterSortType): void
    getShowAllButton(): boolean
    setShowAllButton(value: boolean): void
    /* Methods of Unity.Filter */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean
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
    /* Virtual methods of Unity.Filter */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.Filter */
    connect(sigName: "changed", callback: (($obj: MultiRangeFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: MultiRangeFilter) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-all-button", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::collapsed", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    alwaysSearch?: string[]
    homeLensPriority?: string[]
    homeLensDefaultView?: string[]
    disabledScopes?: string[]
}
export class PreferencesManager {
    /* Properties of Unity.PreferencesManager */
    remoteContentSearch: PreferencesManagerRemoteContent
    alwaysSearch: string[]
    homeLensPriority: string[]
    homeLensDefaultView: string[]
    disabledScopes: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.PreferencesManager */
    getRemoteContentSearch(): PreferencesManagerRemoteContent
    setRemoteContentSearch(value: PreferencesManagerRemoteContent): void
    getAlwaysSearch(): string[]
    setAlwaysSearch(value: string[]): void
    getHomeLensPriority(): string[]
    setHomeLensPriority(value: string[]): void
    getHomeLensDefaultView(): string[]
    setHomeLensDefaultView(value: string[]): void
    getDisabledScopes(): string[]
    setDisabledScopes(value: string[]): void
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
    connect(sigName: "notify", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::always-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-lens-priority", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-priority", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-lens-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-lens-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-lens-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-lens-default-view", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-default-view", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-lens-default-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-lens-default-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-lens-default-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disabled-scopes", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disabled-scopes", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disabled-scopes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disabled-scopes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disabled-scopes", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface DeprecatedScopeSearch_ConstructProps extends ScopeSearchBase_ConstructProps {
    channelId?: string
    hints?: GLib.HashTable
    resultsModel?: Dee.SerializableModel
    owner?: DeprecatedScopeBase
}
export class DeprecatedScopeSearch {
    /* Properties of Unity.DeprecatedScopeSearch */
    readonly searchString: string
    readonly searchType: SearchType
    /* Fields of Unity.ScopeSearchBase */
    searchContext: SearchContext | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.DeprecatedScopeSearch */
    setReplyHint(key: string, variant: GLib.Variant): void
    getFilter(filterId: string): Filter | null
    equals(other: DeprecatedScopeSearch): boolean
    getChannelId(): string
    getSearchString(): string
    getSearchType(): SearchType
    getHints(): GLib.HashTable
    getResultsModel(): Dee.SerializableModel
    getOwner(): DeprecatedScopeBase
    /* Methods of Unity.ScopeSearchBase */
    run(): void
    runAsync(asyncCallback: ScopeSearchBaseCallback): void
    setSearchContext(ctx: SearchContext): void
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
    /* Virtual methods of Unity.ScopeSearchBase */
    vfuncRun(): void
    vfuncRunAsync(asyncCallback: ScopeSearchBaseCallback): void
    vfuncSetSearchContext(ctx: SearchContext): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScopeSearch */
    connect(sigName: "finished", callback: (($obj: DeprecatedScopeSearch) => void)): number
    connect_after(sigName: "finished", callback: (($obj: DeprecatedScopeSearch) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-string", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-string", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-type", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-type", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeprecatedScopeSearch_ConstructProps)
    _init (config?: DeprecatedScopeSearch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AggregatedScopeSearch_ConstructProps extends DeprecatedScopeSearch_ConstructProps {
}
export class AggregatedScopeSearch {
    /* Properties of Unity.DeprecatedScopeSearch */
    readonly searchString: string
    readonly searchType: SearchType
    /* Fields of Unity.ScopeSearchBase */
    searchContext: SearchContext | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.AggregatedScopeSearch */
    searchScope(scopeId: string, searchString: string, searchType: SearchType, hints?: GLib.HashTable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchScopeFinish(res: Gio.AsyncResult): GLib.HashTable
    pushResults(scopeId: string, resultsModel: Dee.SerializableModel, categoryIds: string[], callback?: Gio.AsyncReadyCallback | null): void
    pushResultsFinish(res: Gio.AsyncResult): void
    pushFilterSettings(filters: FilterSet): void
    /* Methods of Unity.DeprecatedScopeSearch */
    setReplyHint(key: string, variant: GLib.Variant): void
    getFilter(filterId: string): Filter | null
    equals(other: DeprecatedScopeSearch): boolean
    getChannelId(): string
    getSearchString(): string
    getSearchType(): SearchType
    getHints(): GLib.HashTable
    getResultsModel(): Dee.SerializableModel
    getOwner(): DeprecatedScopeBase
    /* Methods of Unity.ScopeSearchBase */
    run(): void
    runAsync(asyncCallback: ScopeSearchBaseCallback): void
    setSearchContext(ctx: SearchContext): void
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
    /* Virtual methods of Unity.ScopeSearchBase */
    vfuncRun(): void
    vfuncRunAsync(asyncCallback: ScopeSearchBaseCallback): void
    vfuncSetSearchContext(ctx: SearchContext): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.AggregatedScopeSearch */
    connect(sigName: "transaction-complete", callback: (($obj: AggregatedScopeSearch, originScopeId: string) => void)): number
    connect_after(sigName: "transaction-complete", callback: (($obj: AggregatedScopeSearch, originScopeId: string) => void)): number
    emit(sigName: "transaction-complete", originScopeId: string): void
    on(sigName: "transaction-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transaction-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transaction-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "category-order-changed", callback: (($obj: AggregatedScopeSearch, categoryIndices: number[]) => void)): number
    connect_after(sigName: "category-order-changed", callback: (($obj: AggregatedScopeSearch, categoryIndices: number[]) => void)): number
    emit(sigName: "category-order-changed", categoryIndices: number[]): void
    on(sigName: "category-order-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "category-order-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "category-order-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Unity.DeprecatedScopeSearch */
    connect(sigName: "finished", callback: (($obj: AggregatedScopeSearch) => void)): number
    connect_after(sigName: "finished", callback: (($obj: AggregatedScopeSearch) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-string", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-string", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-type", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-type", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AggregatedScopeSearch_ConstructProps)
    _init (config?: AggregatedScopeSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(owner: AggregatorScope, channelId: string, hints: GLib.HashTable, resultsModel: Dee.SerializableModel): AggregatedScopeSearch
    static $gtype: GObject.Type
}
export interface Preview_ConstructProps extends AbstractPreview_ConstructProps {
    title?: string
    subtitle?: string
    descriptionMarkup?: string
    imageSourceUri?: string
    image?: Gio.Icon
}
export class Preview {
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.Preview */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.PreviewAction */
    extraText: string
    readonly hints: GLib.HashTable
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.PreviewAction */
    getId(): string
    getDisplayName(): string
    getExtraText(): string
    setExtraText(value: string): void
    getIconHint(): Gio.Icon | null
    getLayoutHint(): LayoutHint
    getHints(): GLib.HashTable | null
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
    /* Methods of Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity.PreviewAction */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.PreviewAction */
    connect(sigName: "activated", callback: (($obj: PreviewAction, uri: string) => ActivationResponse)): number
    connect_after(sigName: "activated", callback: (($obj: PreviewAction, uri: string) => ActivationResponse)): number
    emit(sigName: "activated", uri: string): void
    on(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static withUri(uri: string, displayName: string, iconHint?: Gio.Icon | null): PreviewAction
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
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.InfoHint */
    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getData(): GLib.Variant
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
    connect(sigName: "notify", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Virtual methods of Unity.Preview */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.ApplicationPreview */
    appIcon: Gio.Icon
    license: string
    copyright: string
    lastUpdate: string
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ApplicationPreview */
    setRating(rating: number, numRatings: number): void
    getAppIcon(): Gio.Icon
    setAppIcon(value: Gio.Icon): void
    getLicense(): string
    setLicense(value: string): void
    getCopyright(): string
    setCopyright(value: string): void
    getLastUpdate(): string
    setLastUpdate(value: string): void
    /* Methods of Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Virtual methods of Unity.Preview */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
}
export class MusicPreview {
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.MusicPreview */
    addTrack(track: TrackMetadata): void
    /* Methods of Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Virtual methods of Unity.Preview */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface PaymentPreview_ConstructProps extends Preview_ConstructProps {
    header?: string
    email?: string
    paymentMethod?: string
    purchasePrize?: string
    purchaseType?: string
    previewType?: PaymentPreviewType
}
export class PaymentPreview {
    /* Properties of Unity.PaymentPreview */
    header: string
    email: string
    paymentMethod: string
    purchasePrize: string
    purchaseType: string
    previewType: PaymentPreviewType
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.PaymentPreview */
    getHeader(): string
    setHeader(value: string): void
    getEmail(): string
    setEmail(value: string): void
    getPaymentMethod(): string
    setPaymentMethod(value: string): void
    getPurchasePrize(): string
    setPurchasePrize(value: string): void
    getPurchaseType(): string
    setPurchaseType(value: string): void
    getPreviewType(): PaymentPreviewType
    setPreviewType(value: PaymentPreviewType): void
    /* Methods of Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Virtual methods of Unity.Preview */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::header", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::payment-method", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payment-method", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::payment-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::payment-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::payment-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::purchase-prize", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::purchase-prize", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::purchase-prize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::purchase-prize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::purchase-prize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::purchase-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::purchase-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::purchase-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::purchase-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::purchase-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preview-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preview-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preview-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preview-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PaymentPreview_ConstructProps)
    _init (config?: PaymentPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forType(title: string, subtitle: string, image: Gio.Icon | null, type: PaymentPreviewType): PaymentPreview
    static forApplication(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forMusic(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forError(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static $gtype: GObject.Type
}
export interface MoviePreview_ConstructProps extends Preview_ConstructProps {
    year?: string
}
export class MoviePreview {
    /* Properties of Unity.MoviePreview */
    year: string
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.MoviePreview */
    setRating(rating: number, numRatings: number): void
    getYear(): string
    setYear(value: string): void
    /* Methods of Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Virtual methods of Unity.Preview */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.SocialPreview */
    avatar: Gio.Icon
    content: string
    sender: string
    /* Properties of Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.SocialPreview */
    addComment(comment: SocialPreviewComment): void
    getAvatar(): Gio.Icon
    setAvatar(value: Gio.Icon): void
    getContent(): string
    setContent(value: string): void
    getSender(): string
    setSender(value: string): void
    /* Methods of Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Virtual methods of Unity.Preview */
    vfuncSerialize(): GLib.Variant
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.SocialPreviewComment */
    getId(): string
    getName(): string
    getText(): string
    getTime(): string
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
    connect(sigName: "notify", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SocialPreviewComment_ConstructProps)
    _init (config?: SocialPreviewComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    static $gtype: GObject.Type
}
export interface ActivationResponse_ConstructProps extends GObject.Object_ConstructProps {
    handled?: HandledType
    gotoUri?: string
}
export class ActivationResponse {
    /* Properties of Unity.ActivationResponse */
    gotoUri: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ActivationResponse */
    getHandled(): HandledType
    getGotoUri(): string
    setGotoUri(value: string): void
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
    connect(sigName: "notify", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static withSearch(searchString: string, filterSet?: FilterSet | null, searchMetadata?: SearchMetadata | null): ActivationResponse
    static withPreview(preview: Preview): ActivationResponse
    static $gtype: GObject.Type
}
export interface AggregatorActivation_ConstructProps extends GObject.Object_ConstructProps {
    channelId?: string
    scopeId?: string
    actionType?: number
    scopeResult?: ScopeResult
    hints?: GLib.HashTable
}
export class AggregatorActivation {
    /* Properties of Unity.AggregatorActivation */
    channelId: string
    scopeId: string
    actionType: number
    scopeResult: ScopeResult
    hints: GLib.HashTable
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.AggregatorActivation */
    getChannelId(): string
    setChannelId(value: string): void
    getScopeId(): string
    setScopeId(value: string): void
    getActionType(): number
    setActionType(value: number): void
    getScopeResult(): ScopeResult | null
    setScopeResult(value?: ScopeResult | null): void
    getHints(): GLib.HashTable
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
    connect(sigName: "notify", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-type", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-type", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-result", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-result", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hints", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AggregatorActivation_ConstructProps)
    _init (config?: AggregatorActivation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(channelId: string, scopeId: string, actionType: number, result?: ScopeResult | null): AggregatorActivation
    static $gtype: GObject.Type
}
export interface FilterSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class FilterSet {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.FilterSet */
    add(filter: Filter): void
    getFilterById(filterId: string): Filter | null
    getFilters(): Filter[]
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
    /* Virtual methods of Unity.FilterSet */
    vfuncAdd(filter: Filter): void
    vfuncGetFilterById(filterId: string): Filter | null
    vfuncGetFilters(): Filter[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FilterSet_ConstructProps)
    _init (config?: FilterSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterSet
    static $gtype: GObject.Type
}
export interface CategorySet_ConstructProps extends GObject.Object_ConstructProps {
}
export class CategorySet {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.CategorySet */
    add(category: Category): void
    getCategories(): Category[]
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
    /* Virtual methods of Unity.CategorySet */
    vfuncAdd(category: Category): void
    vfuncGetCategories(): Category[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CategorySet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CategorySet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CategorySet_ConstructProps)
    _init (config?: CategorySet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CategorySet
    static $gtype: GObject.Type
}
export interface Schema_ConstructProps extends GObject.Object_ConstructProps {
}
export class Schema {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Schema */
    addField(name: string, schema: string, type: SchemaFieldType): void
    getFields(): SchemaFieldInfo[]
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
    /* Virtual methods of Unity.Schema */
    vfuncAddField(name: string, schema: string, type: SchemaFieldType): void
    vfuncGetFields(): SchemaFieldInfo[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Schema_ConstructProps)
    _init (config?: Schema_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Schema
    static $gtype: GObject.Type
}
export interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cancellable {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Cancellable */
    cancel(): void
    isCancelled(): boolean
    getGcancellable(): Gio.Cancellable | null
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
    /* Virtual methods of Unity.Cancellable */
    vfuncCancel(): void
    vfuncIsCancelled(): boolean
    vfuncGetGcancellable(): Gio.Cancellable | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cancellable_ConstructProps)
    _init (config?: Cancellable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(): Cancellable
    static $gtype: GObject.Type
}
export interface ScopeSearchBase_ConstructProps extends GObject.Object_ConstructProps {
}
export class ScopeSearchBase {
    /* Fields of Unity.ScopeSearchBase */
    searchContext: SearchContext | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ScopeSearchBase */
    run(): void
    runAsync(asyncCallback: ScopeSearchBaseCallback): void
    setSearchContext(ctx: SearchContext): void
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
    /* Virtual methods of Unity.ScopeSearchBase */
    vfuncRun(): void
    vfuncRunAsync(asyncCallback: ScopeSearchBaseCallback): void
    vfuncSetSearchContext(ctx: SearchContext): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScopeSearchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScopeSearchBase, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ScopeSearchBase_ConstructProps)
    _init (config?: ScopeSearchBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class ResultSet {
    /* Fields of Unity.ResultSet */
    ttl: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ResultSet */
    addResult(result: ScopeResult): void
    addResultFromVariant(variant: GLib.Variant): void
    flush(): void
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
    /* Virtual methods of Unity.ResultSet */
    vfuncAddResult(result: ScopeResult): void
    vfuncAddResultFromVariant(variant: GLib.Variant): void
    vfuncFlush(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ResultSet_ConstructProps)
    _init (config?: ResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractPreview_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractPreview {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.AbstractPreview */
    serializeAs(serializationType: SerializationType): any
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
    /* Virtual methods of Unity.AbstractPreview */
    vfuncSerializeAs(serializationType: SerializationType): any
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractPreview, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractPreview_ConstructProps)
    _init (config?: AbstractPreview_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ResultPreviewer_ConstructProps extends GObject.Object_ConstructProps {
}
export class ResultPreviewer {
    /* Fields of Unity.ResultPreviewer */
    result: ScopeResult
    metadata: SearchMetadata
    cancellable: Cancellable
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ResultPreviewer */
    run(): AbstractPreview | null
    runAsync(asyncCallback: AbstractPreviewCallback): void
    setScopeResult(scopeResult: ScopeResult): void
    setSearchMetadata(searchMetadata: SearchMetadata): void
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
    /* Virtual methods of Unity.ResultPreviewer */
    vfuncRun(): AbstractPreview | null
    vfuncRunAsync(asyncCallback: AbstractPreviewCallback): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResultPreviewer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResultPreviewer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ResultPreviewer_ConstructProps)
    _init (config?: ResultPreviewer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SearchMetadata_ConstructProps extends GObject.Object_ConstructProps {
}
export class SearchMetadata {
    /* Properties of Unity.SearchMetadata */
    readonly locale: string
    readonly formFactor: string
    readonly location: GeoCoordinate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.SearchMetadata */
    getLocale(): string | null
    getFormFactor(): string | null
    getLocation(): GeoCoordinate | null
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
    connect(sigName: "notify", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::form-factor", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SearchMetadata_ConstructProps)
    _init (config?: SearchMetadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SearchMetadata
    static create(metadata?: GLib.HashTable | null): SearchMetadata
    static createFromVariant(metadata: GLib.Variant): SearchMetadata
    static $gtype: GObject.Type
}
export interface GeoCoordinate_ConstructProps extends GObject.Object_ConstructProps {
}
export class GeoCoordinate {
    /* Fields of Unity.GeoCoordinate */
    latitude: number
    longitude: number
    altitude: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.GeoCoordinate */
    hasValidAltitude(): boolean
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
    connect(sigName: "notify", callback: (($obj: GeoCoordinate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GeoCoordinate, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GeoCoordinate_ConstructProps)
    _init (config?: GeoCoordinate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number): GeoCoordinate
    static withAltitude(latitude: number, longitude: number, altitude: number): GeoCoordinate
    static $gtype: GObject.Type
}
export interface AbstractScope_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractScope {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.AbstractScope */
    createSearchForQuery(searchContext: SearchContext): ScopeSearchBase
    createPreviewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    getCategories(): CategorySet
    getFilters(): FilterSet
    getSchema(): Schema
    getSearchHint(): string
    getGroupName(): string
    getUniqueName(): string
    activate(result: ScopeResult, metadata: SearchMetadata, actionId?: string | null): ActivationResponse | null
    normalizeSearchQuery(searchQuery: string): string
    resultsInvalidated(searchType: SearchType): void
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
    /* Virtual methods of Unity.AbstractScope */
    vfuncCreateSearchForQuery(searchContext: SearchContext): ScopeSearchBase
    vfuncCreatePreviewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    vfuncGetCategories(): CategorySet
    vfuncGetFilters(): FilterSet
    vfuncGetSchema(): Schema
    vfuncGetSearchHint(): string
    vfuncGetGroupName(): string
    vfuncGetUniqueName(): string
    vfuncActivate(result: ScopeResult, metadata: SearchMetadata, actionId?: string | null): ActivationResponse | null
    vfuncNormalizeSearchQuery(searchQuery: string): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.AbstractScope */
    connect(sigName: "results-invalidated-internal", callback: (($obj: AbstractScope, searchType: SearchType) => void)): number
    connect_after(sigName: "results-invalidated-internal", callback: (($obj: AbstractScope, searchType: SearchType) => void)): number
    emit(sigName: "results-invalidated-internal", searchType: SearchType): void
    on(sigName: "results-invalidated-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "results-invalidated-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "results-invalidated-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractScope, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractScope_ConstructProps)
    _init (config?: AbstractScope_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ScopeDBusConnector_ConstructProps extends GObject.Object_ConstructProps {
    scope?: AbstractScope
}
export class ScopeDBusConnector {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ScopeDBusConnector */
    export(): void
    unexport(): void
    getScope(): AbstractScope
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
    connect(sigName: "notify", callback: (($obj: ScopeDBusConnector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScopeDBusConnector, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ScopeDBusConnector_ConstructProps)
    _init (config?: ScopeDBusConnector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(scope: AbstractScope): ScopeDBusConnector
    static run(): void
    static quit(): void
    static $gtype: GObject.Type
}
export interface DeprecatedScopeBase_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
    dbusPath?: string
    searchInGlobal?: boolean
    visible?: boolean
    isMaster?: boolean
    searchHint?: string
    sources?: OptionsFilter
    categories?: CategorySet
    filters?: FilterSet
    schema?: Schema
}
export class DeprecatedScopeBase {
    /* Properties of Unity.DeprecatedScopeBase */
    searchInGlobal: boolean
    visible: boolean
    searchHint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    getId(): string
    getDbusPath(): string
    getSearchInGlobal(): boolean
    setSearchInGlobal(value: boolean): void
    getVisible(): boolean
    setVisible(value: boolean): void
    getIsMaster(): boolean
    getSearchHint(): string
    setSearchHint(value: string): void
    getSources(): OptionsFilter
    getCategories(): CategorySet
    setCategories(value: CategorySet): void
    getFilters(): FilterSet
    setFilters(value: FilterSet): void
    getSchema(): Schema
    setSchema(value: Schema): void
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
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: DeprecatedScopeBase, activeIds: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: DeprecatedScopeBase, activeIds: string[]) => void)): number
    emit(sigName: "active-sources-changed", activeIds: string[]): void
    on(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-hint", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeprecatedScopeBase_ConstructProps)
    _init (config?: DeprecatedScopeBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeprecatedScope_ConstructProps extends DeprecatedScopeBase_ConstructProps {
}
export class DeprecatedScope {
    /* Properties of Unity.DeprecatedScopeBase */
    searchInGlobal: boolean
    visible: boolean
    searchHint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.DeprecatedScope */
    previewResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    previewResultFinish(res: Gio.AsyncResult): Preview | null
    activateResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    activateResultFinish(res: Gio.AsyncResult): ActivationResponse | null
    queueSearchChanged(searchType: SearchType): void
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    getId(): string
    getDbusPath(): string
    getSearchInGlobal(): boolean
    setSearchInGlobal(value: boolean): void
    getVisible(): boolean
    setVisible(value: boolean): void
    getIsMaster(): boolean
    getSearchHint(): string
    setSearchHint(value: string): void
    getSources(): OptionsFilter
    getCategories(): CategorySet
    setCategories(value: CategorySet): void
    getFilters(): FilterSet
    setFilters(value: FilterSet): void
    getSchema(): Schema
    setSchema(value: Schema): void
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
    /* Virtual methods of Unity.DeprecatedScope */
    vfuncPreviewResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    vfuncPreviewResultFinish(res: Gio.AsyncResult): Preview | null
    vfuncActivateResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    vfuncActivateResultFinish(res: Gio.AsyncResult): ActivationResponse | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScope */
    connect(sigName: "activate-uri", callback: (($obj: DeprecatedScope, uri: string) => ActivationResponse | null)): number
    connect_after(sigName: "activate-uri", callback: (($obj: DeprecatedScope, uri: string) => ActivationResponse | null)): number
    emit(sigName: "activate-uri", uri: string): void
    on(sigName: "activate-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "preview-uri", callback: (($obj: DeprecatedScope, uri: string) => Preview | null)): number
    connect_after(sigName: "preview-uri", callback: (($obj: DeprecatedScope, uri: string) => Preview | null)): number
    emit(sigName: "preview-uri", uri: string): void
    on(sigName: "preview-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "preview-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "preview-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "generate-search-key", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch) => string)): number
    connect_after(sigName: "generate-search-key", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch) => string)): number
    emit(sigName: "generate-search-key", search: DeprecatedScopeSearch): void
    on(sigName: "generate-search-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "generate-search-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "generate-search-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "search-changed", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void)): number
    connect_after(sigName: "search-changed", callback: (($obj: DeprecatedScope, search: DeprecatedScopeSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void)): number
    emit(sigName: "search-changed", search: DeprecatedScopeSearch, searchType: SearchType, cancellable: Gio.Cancellable): void
    on(sigName: "search-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "search-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "search-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: DeprecatedScope, activeIds: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: DeprecatedScope, activeIds: string[]) => void)): number
    emit(sigName: "active-sources-changed", activeIds: string[]): void
    on(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-hint", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeprecatedScope_ConstructProps)
    _init (config?: DeprecatedScope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusPath: string, id: string): DeprecatedScope
    static $gtype: GObject.Type
}
export interface AggregatorScope_ConstructProps extends DeprecatedScopeBase_ConstructProps {
    mergeMode?: AggregatorScopeMergeMode
    proxyFilterHints?: boolean
    automaticFlushing?: boolean
}
export class AggregatorScope {
    /* Properties of Unity.AggregatorScope */
    mergeMode: AggregatorScopeMergeMode
    proxyFilterHints: boolean
    automaticFlushing: boolean
    /* Properties of Unity.DeprecatedScopeBase */
    searchInGlobal: boolean
    visible: boolean
    searchHint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.AggregatorScope */
    categoryIndexForScopeId(scopeId: string): number
    addSorter(categoryIndex: number, field: string, flags: AggregatorScopeSortFlags): void
    addConstraint(categoryIndex: number, field: string): void
    search(scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): void
    activate(activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null): void
    activateFinish(res: Gio.AsyncResult): ActivationResponse | null
    getMergeMode(): AggregatorScopeMergeMode
    setMergeMode(value: AggregatorScopeMergeMode): void
    getProxyFilterHints(): boolean
    setProxyFilterHints(value: boolean): void
    getAutomaticFlushing(): boolean
    setAutomaticFlushing(value: boolean): void
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    getId(): string
    getDbusPath(): string
    getSearchInGlobal(): boolean
    setSearchInGlobal(value: boolean): void
    getVisible(): boolean
    setVisible(value: boolean): void
    getIsMaster(): boolean
    getSearchHint(): string
    setSearchHint(value: string): void
    getSources(): OptionsFilter
    getCategories(): CategorySet
    setCategories(value: CategorySet): void
    getFilters(): FilterSet
    setFilters(value: FilterSet): void
    getSchema(): Schema
    setSchema(value: Schema): void
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
    /* Virtual methods of Unity.AggregatorScope */
    vfuncCategoryIndexForScopeId(scopeId: string): number
    vfuncSearch(scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSearchFinish(res: Gio.AsyncResult): void
    vfuncActivate(activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null): void
    vfuncActivateFinish(res: Gio.AsyncResult): ActivationResponse | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: AggregatorScope, activeIds: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: AggregatorScope, activeIds: string[]) => void)): number
    emit(sigName: "active-sources-changed", activeIds: string[]): void
    on(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::merge-mode", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-mode", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-filter-hints", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-filter-hints", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-flushing", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-flushing", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-hint", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AggregatorScope_ConstructProps)
    _init (config?: AggregatorScope_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MasterScope_ConstructProps extends AggregatorScope_ConstructProps {
    noContentHint?: string
}
export class MasterScope {
    /* Properties of Unity.MasterScope */
    noContentHint: string
    /* Properties of Unity.AggregatorScope */
    mergeMode: AggregatorScopeMergeMode
    proxyFilterHints: boolean
    automaticFlushing: boolean
    /* Properties of Unity.DeprecatedScopeBase */
    searchInGlobal: boolean
    visible: boolean
    searchHint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.MasterScope */
    getNoContentHint(): string
    setNoContentHint(value: string): void
    /* Methods of Unity.AggregatorScope */
    categoryIndexForScopeId(scopeId: string): number
    addSorter(categoryIndex: number, field: string, flags: AggregatorScopeSortFlags): void
    addConstraint(categoryIndex: number, field: string): void
    search(scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): void
    activate(activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null): void
    activateFinish(res: Gio.AsyncResult): ActivationResponse | null
    getMergeMode(): AggregatorScopeMergeMode
    setMergeMode(value: AggregatorScopeMergeMode): void
    getProxyFilterHints(): boolean
    setProxyFilterHints(value: boolean): void
    getAutomaticFlushing(): boolean
    setAutomaticFlushing(value: boolean): void
    /* Methods of Unity.DeprecatedScopeBase */
    export(): void
    unexport(): void
    getId(): string
    getDbusPath(): string
    getSearchInGlobal(): boolean
    setSearchInGlobal(value: boolean): void
    getVisible(): boolean
    setVisible(value: boolean): void
    getIsMaster(): boolean
    getSearchHint(): string
    setSearchHint(value: string): void
    getSources(): OptionsFilter
    getCategories(): CategorySet
    setCategories(value: CategorySet): void
    getFilters(): FilterSet
    setFilters(value: FilterSet): void
    getSchema(): Schema
    setSchema(value: Schema): void
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
    /* Virtual methods of Unity.AggregatorScope */
    vfuncCategoryIndexForScopeId(scopeId: string): number
    vfuncSearch(scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSearchFinish(res: Gio.AsyncResult): void
    vfuncActivate(activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null): void
    vfuncActivateFinish(res: Gio.AsyncResult): ActivationResponse | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.DeprecatedScopeBase */
    connect(sigName: "active-sources-changed", callback: (($obj: MasterScope, activeIds: string[]) => void)): number
    connect_after(sigName: "active-sources-changed", callback: (($obj: MasterScope, activeIds: string[]) => void)): number
    emit(sigName: "active-sources-changed", activeIds: string[]): void
    on(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "active-sources-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-content-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-content-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-content-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-content-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-content-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::merge-mode", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-mode", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-filter-hints", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-filter-hints", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-flushing", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-flushing", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MasterScope_ConstructProps)
    _init (config?: MasterScope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusPath: string, id: string): MasterScope
    static $gtype: GObject.Type
}
export interface SimpleScope_ConstructProps extends AbstractScope_ConstructProps {
    filterSet?: FilterSet
    categorySet?: CategorySet
    schema?: Schema
    searchHint?: string
    groupName?: string
    uniqueName?: string
}
export class SimpleScope {
    /* Properties of Unity.SimpleScope */
    filterSet: FilterSet
    categorySet: CategorySet
    schema: Schema
    searchHint: string
    groupName: string
    uniqueName: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.SimpleScope */
    setSearchFunc(func: any): void
    setSearchAsyncFunc(func: any): void
    setActivateFunc(func: any): void
    setPreviewFunc(func: any): void
    setPreviewAsyncFunc(func: any): void
    getFilterSet(): FilterSet
    setFilterSet(value: FilterSet): void
    getCategorySet(): CategorySet
    setCategorySet(value: CategorySet): void
    getSchema(): Schema
    setSchema(value: Schema): void
    getSearchHint(): string
    setSearchHint(value: string): void
    getGroupName(): string
    setGroupName(value: string): void
    getUniqueName(): string
    setUniqueName(value: string): void
    /* Methods of Unity.AbstractScope */
    createSearchForQuery(searchContext: SearchContext): ScopeSearchBase
    createPreviewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    getCategories(): CategorySet
    getFilters(): FilterSet
    activate(result: ScopeResult, metadata: SearchMetadata, actionId?: string | null): ActivationResponse | null
    normalizeSearchQuery(searchQuery: string): string
    resultsInvalidated(searchType: SearchType): void
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
    /* Virtual methods of Unity.AbstractScope */
    vfuncCreateSearchForQuery(searchContext: SearchContext): ScopeSearchBase
    vfuncCreatePreviewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    vfuncGetCategories(): CategorySet
    vfuncGetFilters(): FilterSet
    vfuncGetSchema(): Schema
    vfuncGetSearchHint(): string
    vfuncGetGroupName(): string
    vfuncGetUniqueName(): string
    vfuncActivate(result: ScopeResult, metadata: SearchMetadata, actionId?: string | null): ActivationResponse | null
    vfuncNormalizeSearchQuery(searchQuery: string): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Unity.AbstractScope */
    connect(sigName: "results-invalidated-internal", callback: (($obj: SimpleScope, searchType: SearchType) => void)): number
    connect_after(sigName: "results-invalidated-internal", callback: (($obj: SimpleScope, searchType: SearchType) => void)): number
    emit(sigName: "results-invalidated-internal", searchType: SearchType): void
    on(sigName: "results-invalidated-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "results-invalidated-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "results-invalidated-internal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::category-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-hint", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::group-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unique-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleScope_ConstructProps)
    _init (config?: SimpleScope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleScope
    static $gtype: GObject.Type
}
export interface ScopeLoader_ConstructProps extends GObject.Object_ConstructProps {
}
export class ScopeLoader {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.ScopeLoader */
    getScopes(moduleName: string, moduleType?: string | null): AbstractScope[]
    exportScopes(scopes: AbstractScope[]): void
    loadGroup(groupName: string): void
    loadScope(scopeId: string): void
    loadModule(module: string, moduleType?: string | null): void
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
    /* Virtual methods of Unity.ScopeLoader */
    vfuncGetScopes(moduleName: string, moduleType?: string | null): AbstractScope[]
    vfuncExportScopes(scopes: AbstractScope[]): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScopeLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScopeLoader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ScopeLoader_ConstructProps)
    _init (config?: ScopeLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScopeLoader
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
    /* Properties of Unity.TrackMetadata */
    uri: string
    trackNo: number
    artist: string
    title: string
    album: string
    length: number
    artLocation: Gio.File
    artIcon: Gio.Icon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.TrackMetadata */
    getUri(): string
    setUri(value: string): void
    getTrackNo(): number
    setTrackNo(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getTitle(): string
    setTitle(value: string): void
    getAlbum(): string
    setAlbum(value: string): void
    getLength(): number
    setLength(value: number): void
    getArtLocation(): Gio.File
    setArtLocation(value: Gio.File): void
    getArtIcon(): Gio.Icon
    setArtIcon(value: Gio.Icon): void
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
    connect(sigName: "notify", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.Playlist */
    name: string
    icon: Gio.Icon
    creationDate: GLib.DateTime
    modificationDate: GLib.DateTime
    lastPlayDate: GLib.DateTime
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.Playlist */
    getId(): string
    getName(): string
    setName(value: string): void
    getIcon(): Gio.Icon
    setIcon(value: Gio.Icon): void
    getCreationDate(): GLib.DateTime
    setCreationDate(value: GLib.DateTime): void
    getModificationDate(): GLib.DateTime
    setModificationDate(value: GLib.DateTime): void
    getLastPlayDate(): GLib.DateTime
    setLastPlayDate(value: GLib.DateTime): void
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
    connect(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Unity.MusicPlayer */
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
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Unity.MusicPlayer */
    export(): void
    unexport(): void
    addPlaylist(p: Playlist): boolean
    removePlaylist(p: Playlist): boolean
    getPlaylists(): Playlist[]
    editPlaylistName(id: string, name: string): void
    getAppInfo(): Gio.AppInfo
    getDesktopFileName(): string
    getIsBlacklisted(): boolean
    setIsBlacklisted(value: boolean): void
    getTitle(): string
    setTitle(value: string): void
    getCanGoNext(): boolean
    setCanGoNext(value: boolean): void
    getCanGoPrevious(): boolean
    setCanGoPrevious(value: boolean): void
    getCanPlay(): boolean
    setCanPlay(value: boolean): void
    getCanPause(): boolean
    setCanPause(value: boolean): void
    getCurrentTrack(): TrackMetadata
    setCurrentTrack(value: TrackMetadata): void
    getPlaybackState(): PlaybackState
    setPlaybackState(value: PlaybackState): void
    getCurrentPlaylist(): Playlist
    setCurrentPlaylist(value: Playlist): void
    getTrackMenu(): Dbusmenu.Menuitem | null
    setTrackMenu(value?: Dbusmenu.Menuitem | null): void
    getPlayerMenu(): Dbusmenu.Menuitem | null
    setPlayerMenu(value?: Dbusmenu.Menuitem | null): void
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
    /* Signals of Unity.MusicPlayer */
    connect(sigName: "raise", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "raise", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "raise"): void
    on(sigName: "raise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "raise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "raise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "play-pause", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "play-pause", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "play-pause"): void
    on(sigName: "play-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "play-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "play-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "previous", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "previous", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "previous"): void
    on(sigName: "previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "next", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "next", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "next"): void
    on(sigName: "next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "activate-playlist", callback: (($obj: MusicPlayer, playlistId: any) => void)): number
    connect_after(sigName: "activate-playlist", callback: (($obj: MusicPlayer, playlistId: any) => void)): number
    emit(sigName: "activate-playlist", playlistId: any): void
    on(sigName: "activate-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static name: string
}
export class AppInfoManagerPrivate {
    static name: string
}
export abstract class AnnotatedIconClass {
    static name: string
}
export class AnnotatedIconPrivate {
    static name: string
}
export abstract class InspectorClass {
    static name: string
}
export class InspectorPrivate {
    static name: string
}
export abstract class LauncherEntryClass {
    static name: string
}
export class LauncherEntryPrivate {
    static name: string
}
export abstract class LauncherFavoritesClass {
    static name: string
}
export class LauncherFavoritesPrivate {
    static name: string
}
export abstract class MetadataProviderClass {
    /* Fields of Unity.MetadataProviderClass */
    updateHints: (self: MetadataProvider, hints: GLib.HashTable) => void
    static name: string
}
export class MetadataProviderPrivate {
    static name: string
}
export abstract class ProgressSourceProviderClass {
    static name: string
}
export class ProgressSourceProviderPrivate {
    static name: string
}
export abstract class CategoryClass {
    static name: string
}
export class CategoryPrivate {
    static name: string
}
export abstract class FilterClass {
    /* Fields of Unity.FilterClass */
    getHints: (self: Filter) => GLib.HashTable
    update: (self: Filter, properties: GLib.Variant) => void
    static name: string
}
export class FilterPrivate {
    static name: string
}
export abstract class FilterOptionClass {
    static name: string
}
export class FilterOptionPrivate {
    static name: string
}
export abstract class OptionsFilterClass {
    static name: string
}
export class OptionsFilterPrivate {
    static name: string
}
export abstract class RadioOptionFilterClass {
    static name: string
}
export class RadioOptionFilterPrivate {
    static name: string
}
export abstract class CheckOptionFilterClass {
    static name: string
}
export class CheckOptionFilterPrivate {
    static name: string
}
export abstract class CheckOptionFilterCompactClass {
    static name: string
}
export class CheckOptionFilterCompactPrivate {
    static name: string
}
export abstract class RatingsFilterClass {
    static name: string
}
export class RatingsFilterPrivate {
    static name: string
}
export abstract class MultiRangeFilterClass {
    static name: string
}
export class MultiRangeFilterPrivate {
    static name: string
}
export abstract class PreferencesManagerClass {
    static name: string
}
export class PreferencesManagerPrivate {
    static name: string
}
export abstract class DeprecatedScopeSearchClass {
    static name: string
}
export class DeprecatedScopeSearchPrivate {
    static name: string
}
export abstract class AggregatedScopeSearchClass {
    static name: string
}
export class AggregatedScopeSearchPrivate {
    static name: string
}
export abstract class PreviewClass {
    /* Fields of Unity.PreviewClass */
    createRaw: (self: Preview) => GObject.Object
    static name: string
}
export class PreviewPrivate {
    static name: string
}
export abstract class PreviewActionClass {
    static name: string
}
export class PreviewActionPrivate {
    static name: string
}
export abstract class InfoHintClass {
    static name: string
}
export class InfoHintPrivate {
    static name: string
}
export abstract class GenericPreviewClass {
    static name: string
}
export class GenericPreviewPrivate {
    static name: string
}
export abstract class ApplicationPreviewClass {
    static name: string
}
export class ApplicationPreviewPrivate {
    static name: string
}
export abstract class MusicPreviewClass {
    static name: string
}
export class MusicPreviewPrivate {
    static name: string
}
export abstract class PaymentPreviewClass {
    static name: string
}
export class PaymentPreviewPrivate {
    static name: string
}
export abstract class MoviePreviewClass {
    static name: string
}
export class MoviePreviewPrivate {
    static name: string
}
export abstract class SocialPreviewClass {
    static name: string
}
export class SocialPreviewPrivate {
    static name: string
}
export abstract class SocialPreviewCommentClass {
    static name: string
}
export class SocialPreviewCommentPrivate {
    static name: string
}
export abstract class ActivationResponseClass {
    static name: string
}
export class ActivationResponsePrivate {
    static name: string
}
export abstract class AggregatorActivationClass {
    static name: string
}
export class AggregatorActivationPrivate {
    static name: string
}
export abstract class FilterSetClass {
    /* Fields of Unity.FilterSetClass */
    add: (self: FilterSet, filter: Filter) => void
    getFilterById: (self: FilterSet, filterId: string) => Filter | null
    getFilters: (self: FilterSet) => Filter[]
    static name: string
}
export class FilterSetPrivate {
    static name: string
}
export abstract class CategorySetClass {
    /* Fields of Unity.CategorySetClass */
    add: (self: CategorySet, category: Category) => void
    getCategories: (self: CategorySet) => Category[]
    static name: string
}
export class CategorySetPrivate {
    static name: string
}
export abstract class SchemaClass {
    /* Fields of Unity.SchemaClass */
    addField: (self: Schema, name: string, schema: string, type: SchemaFieldType) => void
    getFields: (self: Schema) => SchemaFieldInfo[]
    static name: string
}
export class SchemaPrivate {
    static name: string
}
export class SchemaFieldInfo {
    /* Fields of Unity.SchemaFieldInfo */
    name: string
    schema: string
    type: SchemaFieldType
    static name: string
}
export abstract class CancellableClass {
    /* Fields of Unity.CancellableClass */
    cancel: (self: Cancellable) => void
    isCancelled: (self: Cancellable) => boolean
    getGcancellable: (self: Cancellable) => Gio.Cancellable | null
    static name: string
}
export class CancellablePrivate {
    static name: string
}
export abstract class ScopeSearchBaseClass {
    /* Fields of Unity.ScopeSearchBaseClass */
    run: (self: ScopeSearchBase) => void
    runAsync: (self: ScopeSearchBase, asyncCallback: ScopeSearchBaseCallback) => void
    setSearchContext: (self: ScopeSearchBase, ctx: SearchContext) => void
    static name: string
}
export class ScopeSearchBasePrivate {
    static name: string
}
export abstract class ResultSetClass {
    /* Fields of Unity.ResultSetClass */
    addResult: (self: ResultSet, result: ScopeResult) => void
    addResultFromVariant: (self: ResultSet, variant: GLib.Variant) => void
    flush: (self: ResultSet) => void
    static name: string
}
export class ResultSetPrivate {
    static name: string
}
export abstract class AbstractPreviewClass {
    /* Fields of Unity.AbstractPreviewClass */
    serializeAs: (self: AbstractPreview, serializationType: SerializationType) => any
    static name: string
}
export class AbstractPreviewPrivate {
    static name: string
}
export abstract class ResultPreviewerClass {
    /* Fields of Unity.ResultPreviewerClass */
    run: (self: ResultPreviewer) => AbstractPreview | null
    runAsync: (self: ResultPreviewer, asyncCallback: AbstractPreviewCallback) => void
    static name: string
}
export class ResultPreviewerPrivate {
    static name: string
}
export abstract class SearchMetadataClass {
    static name: string
}
export class SearchMetadataPrivate {
    static name: string
}
export abstract class GeoCoordinateClass {
    static name: string
}
export class GeoCoordinatePrivate {
    static name: string
}
export abstract class AbstractScopeClass {
    /* Fields of Unity.AbstractScopeClass */
    createSearchForQuery: (self: AbstractScope, searchContext: SearchContext) => ScopeSearchBase
    createPreviewer: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata) => ResultPreviewer
    getCategories: (self: AbstractScope) => CategorySet
    getFilters: (self: AbstractScope) => FilterSet
    getSchema: (self: AbstractScope) => Schema
    getSearchHint: (self: AbstractScope) => string
    getGroupName: (self: AbstractScope) => string
    getUniqueName: (self: AbstractScope) => string
    activate: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata, actionId?: string | null) => ActivationResponse | null
    normalizeSearchQuery: (self: AbstractScope, searchQuery: string) => string
    static name: string
}
export class AbstractScopePrivate {
    static name: string
}
export abstract class ScopeDBusConnectorClass {
    static name: string
}
export class ScopeDBusConnectorPrivate {
    static name: string
}
export abstract class DeprecatedScopeBaseClass {
    /* Fields of Unity.DeprecatedScopeBaseClass */
    createImpl: (self: DeprecatedScopeBase) => GObject.Object
    static name: string
}
export class DeprecatedScopeBasePrivate {
    static name: string
}
export abstract class DeprecatedScopeClass {
    /* Fields of Unity.DeprecatedScopeClass */
    previewResult: (self: DeprecatedScope, result: ScopeResult, callback?: Gio.AsyncReadyCallback | null) => void
    previewResultFinish: (self: DeprecatedScope, res: Gio.AsyncResult) => Preview | null
    activateResult: (self: DeprecatedScope, result: ScopeResult, callback?: Gio.AsyncReadyCallback | null) => void
    activateResultFinish: (self: DeprecatedScope, res: Gio.AsyncResult) => ActivationResponse | null
    static name: string
}
export class DeprecatedScopePrivate {
    static name: string
}
export abstract class AggregatorScopeClass {
    /* Fields of Unity.AggregatorScopeClass */
    categoryIndexForScopeId: (self: AggregatorScope, scopeId: string) => number
    search: (self: AggregatorScope, scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: AggregatorScope, res: Gio.AsyncResult) => void
    activate: (self: AggregatorScope, activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null) => void
    activateFinish: (self: AggregatorScope, res: Gio.AsyncResult) => ActivationResponse | null
    static name: string
}
export class AggregatorScopePrivate {
    static name: string
}
export abstract class MasterScopeClass {
    static name: string
}
export class MasterScopePrivate {
    static name: string
}
export abstract class SimpleScopeClass {
    static name: string
}
export class SimpleScopePrivate {
    static name: string
}
export abstract class ScopeLoaderClass {
    /* Fields of Unity.ScopeLoaderClass */
    getScopes: (self: ScopeLoader, moduleName: string, moduleType?: string | null) => AbstractScope[]
    exportScopes: (self: ScopeLoader, scopes: AbstractScope[]) => void
    static name: string
}
export class ScopeLoaderPrivate {
    static name: string
}
export abstract class TrackMetadataClass {
    static name: string
}
export class TrackMetadataPrivate {
    static name: string
}
export abstract class PlaylistClass {
    static name: string
}
export class PlaylistPrivate {
    static name: string
}
export abstract class MusicPlayerClass {
    static name: string
}
export class MusicPlayerPrivate {
    static name: string
}
export class ScopeResult {
    /* Fields of Unity.ScopeResult */
    uri: string
    iconHint: string
    category: number
    resultType: ResultType
    mimetype: string
    title: string
    comment: string
    dndUri: string
    metadata: GLib.HashTable | null
    static name: string
    /* Static methods and pseudo-constructors */
    static create(uri: string, iconHint: string | null, category: number, resultType: ResultType, mimetype: string, title: string, comment: string, dndUri: string, metadata: GLib.HashTable): ScopeResult | null
    static createFromVariant(variant: GLib.Variant): ScopeResult | null
}
export class SearchContext {
    /* Fields of Unity.SearchContext */
    searchQuery: string
    searchType: SearchType
    filterState: FilterSet
    searchMetadata: SearchMetadata
    resultSet: ResultSet
    cancellable: Cancellable
    /* Methods of Unity.SearchContext */
    setSearchMetadata(metadata: SearchMetadata): void
    static name: string
    /* Static methods and pseudo-constructors */
    static create(searchQuery: string, searchType: SearchType, filterState: FilterSet | null, metadata: GLib.HashTable | null, resultSet: ResultSet, cancellable?: Cancellable | null): SearchContext | null
}
export class PlaylistDetails {
    /* Fields of Unity.PlaylistDetails */
    id: string
    name: string
    iconName: string
    static name: string
}
export class ActivePlaylistContainer {
    /* Fields of Unity.ActivePlaylistContainer */
    valid: boolean
    details: PlaylistDetails
    static name: string
}
}