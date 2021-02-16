/**
 * GnomeDesktop-3.0
 */

/// <reference types="node" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="GDesktopEnums-3.0.d.ts" />

declare namespace GnomeDesktop {

export enum DesktopThumbnailSize {
    NORMAL,
    LARGE,
    XLARGE,
    XXLARGE,
}
export enum RRDpmsMode {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
export enum RRDpmsModeType {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
export enum RRError {
    UNKNOWN,
    NO_RANDR_EXTENSION,
    RANDR_ERROR,
    BOUNDS_ERROR,
    CRTC_ASSIGNMENT,
    NO_MATCHING_CONFIG,
    NO_DPMS_EXTENSION,
}
export enum RRRotation {
    ROTATION_NEXT,
    ROTATION_0,
    ROTATION_90,
    ROTATION_180,
    ROTATION_270,
    REFLECT_X,
    REFLECT_Y,
}
export const RR_CONNECTOR_TYPE_PANEL: string
export function desktopThumbnailIsValid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean
export function desktopThumbnailPathForUri(uri: string, size: DesktopThumbnailSize): string
export function getAllLocales(): string[]
export function getCountryFromCode(code: string, translation?: string | null): string
export function getCountryFromLocale(locale: string, translation?: string | null): string
export function getInputSourceFromLocale(locale: string): [ /* returnType */ boolean, /* type */ string, /* id */ string ]
export function getLanguageFromCode(code: string, translation?: string | null): string
export function getLanguageFromLocale(locale: string, translation?: string | null): string
export function getTranslatedModifier(modifier: string, translation?: string | null): string
export function languageHasTranslations(code: string): boolean
export function normalizeLocale(locale: string): string
export function parseLocale(locale: string): [ /* returnType */ boolean, /* languageCodep */ string | null, /* countryCodep */ string | null, /* codesetp */ string | null, /* modifierp */ string | null ]
export function rrErrorQuark(): GLib.Quark
export function startSystemdScope(name: string, pid: number, description?: string | null, connection?: Gio.DBusConnection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function startSystemdScopeFinish(res: Gio.AsyncResult): boolean
export interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, id: number): void
}
export interface BG_ConstructProps extends GObject.Object_ConstructProps {
}
export class BG {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.BG */
    changesWithTime(): boolean
    createFrameThumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, destWidth: number, destHeight: number, frameNum: number): GdkPixbuf.Pixbuf
    createSurface(window: Gdk.Window, width: number, height: number): cairo.Surface
    createThumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, destWidth: number, destHeight: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    getFilename(): string
    getImageSize(factory: DesktopThumbnailFactory, bestWidth: number, bestHeight: number, width: number, height: number): boolean
    getPlacement(): GDesktopEnums.BackgroundStyle
    getRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    hasMultipleSizes(): boolean
    isDark(destWidth: number, destHeight: number): boolean
    loadFromPreferences(settings: Gio.Settings): void
    saveToPreferences(settings: Gio.Settings): void
    setFilename(filename: string): void
    setPlacement(placement: GDesktopEnums.BackgroundStyle): void
    setRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
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
    /* Signals of GnomeDesktop.BG */
    connect(sigName: "changed", callback: (($obj: BG) => void)): number
    connect_after(sigName: "changed", callback: (($obj: BG) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitioned", callback: (($obj: BG) => void)): number
    connect_after(sigName: "transitioned", callback: (($obj: BG) => void)): number
    emit(sigName: "transitioned"): void
    on(sigName: "transitioned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitioned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitioned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BG, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BG, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BG_ConstructProps)
    _init (config?: BG_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BG
    static $gtype: GObject.Type
}
export interface BGCrossfade_ConstructProps extends GObject.Object_ConstructProps {
    height?: number
    width?: number
}
export class BGCrossfade {
    /* Fields of GnomeDesktop.BGCrossfade */
    parentObject: GObject.Object
    priv: BGCrossfadePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.BGCrossfade */
    isStarted(): boolean
    setEndSurface(surface: cairo.Surface): boolean
    setStartSurface(surface: cairo.Surface): boolean
    start(window: Gdk.Window): void
    stop(): void
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
    /* Virtual methods of GnomeDesktop.BGCrossfade */
    vfuncFinished(window: Gdk.Window): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GnomeDesktop.BGCrossfade */
    connect(sigName: "finished", callback: (($obj: BGCrossfade, window: GObject.Object) => void)): number
    connect_after(sigName: "finished", callback: (($obj: BGCrossfade, window: GObject.Object) => void)): number
    emit(sigName: "finished", window: GObject.Object): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BGCrossfade_ConstructProps)
    _init (config?: BGCrossfade_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number): BGCrossfade
    static $gtype: GObject.Type
}
export interface BGSlideShow_ConstructProps extends GObject.Object_ConstructProps {
    file?: Gio.File
}
export class BGSlideShow {
    /* Properties of GnomeDesktop.BGSlideShow */
    readonly hasMultipleSizes: boolean
    readonly startTime: number
    readonly totalDuration: number
    /* Fields of GnomeDesktop.BGSlideShow */
    parentObject: GObject.Object
    priv: BGSlideShowPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.BGSlideShow */
    getCurrentSlide(width: number, height: number): [ /* progress */ number | null, /* duration */ number | null, /* isFixed */ boolean | null, /* file1 */ string | null, /* file2 */ string | null ]
    getHasMultipleSizes(): boolean
    getNumSlides(): number
    getSlide(frameNumber: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number | null, /* duration */ number | null, /* isFixed */ boolean | null, /* file1 */ string | null, /* file2 */ string | null ]
    getStartTime(): number
    getTotalDuration(): number
    load(): boolean
    loadAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    connect(sigName: "notify", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BGSlideShow_ConstructProps)
    _init (config?: BGSlideShow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): BGSlideShow
    static $gtype: GObject.Type
}
export interface DesktopThumbnailFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class DesktopThumbnailFactory {
    /* Fields of GnomeDesktop.DesktopThumbnailFactory */
    parent: GObject.Object
    priv: DesktopThumbnailFactoryPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.DesktopThumbnailFactory */
    canThumbnail(uri: string, mimeType: string, mtime: number): boolean
    createFailedThumbnail(uri: string, mtime: number): void
    generateThumbnail(uri: string, mimeType: string): GdkPixbuf.Pixbuf
    hasValidFailedThumbnail(uri: string, mtime: number): boolean
    lookup(uri: string, mtime: number): string
    saveThumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, originalMtime: number): void
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
    connect(sigName: "notify", callback: (($obj: DesktopThumbnailFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DesktopThumbnailFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DesktopThumbnailFactory_ConstructProps)
    _init (config?: DesktopThumbnailFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(size: DesktopThumbnailSize): DesktopThumbnailFactory
    static $gtype: GObject.Type
}
export interface IdleMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class IdleMonitor {
    /* Fields of GnomeDesktop.IdleMonitor */
    parent: GObject.Object
    priv: IdleMonitorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.IdleMonitor */
    addIdleWatch(intervalMsec: number, callback: IdleMonitorWatchFunc | null): number
    addUserActiveWatch(callback: IdleMonitorWatchFunc | null): number
    getIdletime(): number
    removeWatch(id: number): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GnomeDesktop.IdleMonitor */
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: IdleMonitor_ConstructProps)
    _init (config?: IdleMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IdleMonitor
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface PnpIds_ConstructProps extends GObject.Object_ConstructProps {
}
export class PnpIds {
    /* Fields of GnomeDesktop.PnpIds */
    parent: GObject.Object
    priv: PnpIdsPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.PnpIds */
    getPnpId(pnpId: string): string
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
    connect(sigName: "notify", callback: (($obj: PnpIds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PnpIds, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PnpIds_ConstructProps)
    _init (config?: PnpIds_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PnpIds
    static $gtype: GObject.Type
}
export interface RRConfig_ConstructProps extends GObject.Object_ConstructProps {
    screen?: RRScreen
}
export class RRConfig {
    /* Fields of GnomeDesktop.RRConfig */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.RRConfig */
    applicable(screen: RRScreen): boolean
    apply(screen: RRScreen): boolean
    applyPersistent(screen: RRScreen): boolean
    ensurePrimary(): boolean
    equal(config2: RRConfig): boolean
    getClone(): boolean
    getOutputs(): RROutputInfo[]
    loadCurrent(): boolean
    match(config2: RRConfig): boolean
    sanitize(): void
    setClone(clone: boolean): void
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
    connect(sigName: "notify", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RRConfig_ConstructProps)
    _init (config?: RRConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newCurrent(screen: RRScreen): RRConfig
    static $gtype: GObject.Type
}
export interface RROutputInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class RROutputInfo {
    /* Fields of GnomeDesktop.RROutputInfo */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.RROutputInfo */
    getAspectRatio(): number
    getDisplayName(): string
    getGeometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getName(): string
    getPreferredHeight(): number
    getPreferredWidth(): number
    getPrimary(): boolean
    getProduct(): string
    getRefreshRate(): number
    getRotation(): RRRotation
    getSerial(): string
    getUnderscanning(): boolean
    getVendor(): string
    isActive(): boolean
    isConnected(): boolean
    isPrimaryTile(): boolean
    setActive(active: boolean): void
    setGeometry(x: number, y: number, width: number, height: number): void
    setPrimary(primary: boolean): void
    setRefreshRate(rate: number): void
    setRotation(rotation: RRRotation): void
    setUnderscanning(underscanning: boolean): void
    supportsRotation(rotation: RRRotation): boolean
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
    connect(sigName: "notify", callback: (($obj: RROutputInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RROutputInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RROutputInfo_ConstructProps)
    _init (config?: RROutputInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RRScreen_ConstructProps extends GObject.Object_ConstructProps {
    dpmsMode?: RRDpmsModeType
    gdkScreen?: Gdk.Screen
}
export class RRScreen {
    /* Properties of GnomeDesktop.RRScreen */
    dpmsMode: RRDpmsModeType
    /* Fields of GnomeDesktop.RRScreen */
    parent: GObject.Object
    priv: RRScreenPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.RRScreen */
    getCrtcById(id: number): RRCrtc
    getDpmsMode(): [ /* returnType */ boolean, /* mode */ RRDpmsMode ]
    getOutputById(id: number): RROutput
    getOutputByName(name: string): RROutput
    getRanges(): [ /* minWidth */ number, /* maxWidth */ number, /* minHeight */ number, /* maxHeight */ number ]
    listCloneModes(): RRMode[]
    listCrtcs(): RRCrtc[]
    listModes(): RRMode[]
    listOutputs(): RROutput[]
    refresh(): boolean
    setDpmsMode(mode: RRDpmsMode): boolean
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
    /* Virtual methods of GnomeDesktop.RRScreen */
    vfuncChanged(): void
    vfuncOutputConnected(output: RROutput): void
    vfuncOutputDisconnected(output: RROutput): void
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
    /* Signals of GnomeDesktop.RRScreen */
    connect(sigName: "changed", callback: (($obj: RRScreen) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RRScreen) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "output-connected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    connect_after(sigName: "output-connected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    emit(sigName: "output-connected", output?: object | null): void
    on(sigName: "output-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "output-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "output-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "output-disconnected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    connect_after(sigName: "output-disconnected", callback: (($obj: RRScreen, output?: object | null) => void)): number
    emit(sigName: "output-disconnected", output?: object | null): void
    on(sigName: "output-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "output-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "output-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dpms-mode", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpms-mode", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dpms-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dpms-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dpms-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RRScreen_ConstructProps)
    _init (config?: RRScreen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(screen: Gdk.Screen): RRScreen
    static newFinish(result: Gio.AsyncResult): RRScreen
    static newAsync(screen: Gdk.Screen, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface WallClock_ConstructProps extends GObject.Object_ConstructProps {
    timeOnly?: boolean
}
export class WallClock {
    /* Properties of GnomeDesktop.WallClock */
    readonly clock: string
    timeOnly: boolean
    readonly timezone: GLib.TimeZone
    /* Fields of GnomeDesktop.WallClock */
    parentObject: GObject.Object
    priv: WallClockPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.WallClock */
    getClock(): string
    getTimezone(): GLib.TimeZone
    stringForDatetime(now: GLib.DateTime, clockFormat: GDesktopEnums.ClockFormat, showWeekday: boolean, showFullDate: boolean, showSeconds: boolean): string
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
    connect(sigName: "notify", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-only", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-only", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timezone", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WallClock_ConstructProps)
    _init (config?: WallClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WallClock
    static $gtype: GObject.Type
}
export interface XkbInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class XkbInfo {
    /* Fields of GnomeDesktop.XkbInfo */
    parentObject: GObject.Object
    priv: XkbInfoPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop.XkbInfo */
    descriptionForGroup(groupId: string): string
    descriptionForOption(groupId: string, id: string): string
    getAllLayouts(): string[]
    getAllOptionGroups(): string[]
    getLanguagesForLayout(layoutId: string): string[]
    getLayoutInfo(id: string): [ /* returnType */ boolean, /* displayName */ string | null, /* shortName */ string | null, /* xkbLayout */ string | null, /* xkbVariant */ string | null ]
    getLayoutsForCountry(countryCode: string): string[]
    getLayoutsForLanguage(languageCode: string): string[]
    getOptionsForGroup(groupId: string): string[]
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
    connect(sigName: "notify", callback: (($obj: XkbInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XkbInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: XkbInfo_ConstructProps)
    _init (config?: XkbInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XkbInfo
    static $gtype: GObject.Type
}
export abstract class BGClass {
    static name: string
}
export abstract class BGCrossfadeClass {
    /* Fields of GnomeDesktop.BGCrossfadeClass */
    parentClass: GObject.ObjectClass
    finished: (fade: BGCrossfade, window: Gdk.Window) => void
    static name: string
}
export class BGCrossfadePrivate {
    static name: string
}
export abstract class BGSlideShowClass {
    /* Fields of GnomeDesktop.BGSlideShowClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class BGSlideShowPrivate {
    static name: string
}
export abstract class DesktopThumbnailFactoryClass {
    /* Fields of GnomeDesktop.DesktopThumbnailFactoryClass */
    parent: GObject.ObjectClass
    static name: string
}
export class DesktopThumbnailFactoryPrivate {
    static name: string
}
export abstract class IdleMonitorClass {
    /* Fields of GnomeDesktop.IdleMonitorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class IdleMonitorPrivate {
    static name: string
}
export abstract class PnpIdsClass {
    /* Fields of GnomeDesktop.PnpIdsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PnpIdsPrivate {
    static name: string
}
export class RRCTM {
    /* Fields of GnomeDesktop.RRCTM */
    matrix: number[]
    static name: string
}
export abstract class RRConfigClass {
    /* Fields of GnomeDesktop.RRConfigClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RRConfigPrivate {
    static name: string
}
export class RRCrtc {
    /* Methods of GnomeDesktop.RRCrtc */
    canDriveOutput(output: RROutput): boolean
    getCurrentMode(): RRMode
    getCurrentRotation(): RRRotation
    getGamma(size: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    getId(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getRotations(): RRRotation
    setGamma(size: number, red: number, green: number, blue: number): boolean
    supportsRotation(rotation: RRRotation): boolean
    static name: string
}
export class RRMode {
    /* Methods of GnomeDesktop.RRMode */
    getFreq(): number
    getFreqF(): number
    getHeight(): number
    getId(): number
    getIsInterlaced(): boolean
    getIsTiled(): boolean
    getWidth(): number
    static name: string
}
export class RROutput {
    /* Methods of GnomeDesktop.RROutput */
    canClone(clone: RROutput): boolean
    getBacklight(): number
    getCrtc(): RRCrtc
    getCurrentMode(): RRMode
    getDisplayName(): string
    getEdidData(size: number): number
    getId(): number
    getIdsFromEdid(): [ /* vendor */ string | null, /* product */ string | null, /* serial */ string | null ]
    getIsPrimary(): boolean
    getIsUnderscanning(): boolean
    getMinBacklightStep(): number
    getName(): string
    getPhysicalSize(): [ /* widthMm */ number | null, /* heightMm */ number | null ]
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPossibleCrtcs(): RRCrtc[]
    getPreferredMode(): RRMode
    isBuiltinDisplay(): boolean
    listModes(): RRMode[]
    setBacklight(value: number): boolean
    setColorTransform(value: RRCTM): boolean
    supportsColorTransform(): boolean
    supportsMode(mode: RRMode): boolean
    supportsUnderscanning(): boolean
    static name: string
}
export abstract class RROutputInfoClass {
    /* Fields of GnomeDesktop.RROutputInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class RROutputInfoPrivate {
    static name: string
}
export abstract class RRScreenClass {
    /* Fields of GnomeDesktop.RRScreenClass */
    parentClass: GObject.ObjectClass
    changed: (screen: RRScreen) => void
    outputConnected: (screen: RRScreen, output: RROutput) => void
    outputDisconnected: (screen: RRScreen, output: RROutput) => void
    static name: string
}
export class RRScreenPrivate {
    static name: string
}
export abstract class WallClockClass {
    /* Fields of GnomeDesktop.WallClockClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class WallClockPrivate {
    static name: string
}
export abstract class XkbInfoClass {
    /* Fields of GnomeDesktop.XkbInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class XkbInfoPrivate {
    static name: string
}
}