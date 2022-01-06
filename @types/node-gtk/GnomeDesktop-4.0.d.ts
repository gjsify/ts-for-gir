/**
 * GnomeDesktop-4.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { GDesktopEnums } from './GDesktopEnums-3.0';

declare namespace GnomeDesktop {

enum DesktopThumbnailSize {
    NORMAL,
    LARGE,
    XLARGE,
    XXLARGE,
}
function desktopThumbnailIsValid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean
function desktopThumbnailPathForUri(uri: string, size: DesktopThumbnailSize): string
function getAllLocales(): string[]
function getCountryFromCode(code: string, translation?: string | null): string
function getCountryFromLocale(locale: string, translation?: string | null): string
function getInputSourceFromLocale(locale: string): { returnType: boolean, type: string, id: string }
function getLanguageFromCode(code: string, translation?: string | null): string
function getLanguageFromLocale(locale: string, translation?: string | null): string
function getTranslatedModifier(modifier: string, translation?: string | null): string
function languageHasTranslations(code: string): boolean
function normalizeLocale(locale: string): string
function parseLocale(locale: string): { returnType: boolean, languageCodep: string | null, countryCodep: string | null, codesetp: string | null, modifierp: string | null }
function startSystemdScope(name: string, pid: number, description?: string | null, connection?: Gio.DBusConnection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function startSystemdScopeFinish(res: Gio.AsyncResult): boolean
interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, id: number): void
}
export interface DesktopThumbnailFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class DesktopThumbnailFactory {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory */
    parent: GObject.Object
    priv: DesktopThumbnailFactoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory */
    canThumbnail(uri: string, mimeType: string, mtime: number): boolean
    createFailedThumbnail(uri: string, mtime: number): void
    generateThumbnail(uri: string, mimeType: string): GdkPixbuf.Pixbuf
    hasValidFailedThumbnail(uri: string, mtime: number): boolean
    lookup(uri: string, mtime: number): string
    saveThumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, originalMtime: number): void
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
    connect(sigName: "notify", callback: (($obj: DesktopThumbnailFactory, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DesktopThumbnailFactory_ConstructProps)
    _init (config?: DesktopThumbnailFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(size: DesktopThumbnailSize): DesktopThumbnailFactory
    static $gtype: GObject.Type
}
export interface IdleMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
class IdleMonitor {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor */
    parent: GObject.Object
    priv: IdleMonitorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor */
    addIdleWatch(intervalMsec: number, callback: IdleMonitorWatchFunc | null): number
    addUserActiveWatch(callback: IdleMonitorWatchFunc | null): number
    getIdletime(): number
    removeWatch(id: number): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: IdleMonitor_ConstructProps)
    _init (config?: IdleMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IdleMonitor
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface PnpIds_ConstructProps extends GObject.Object_ConstructProps {
}
class PnpIds {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.PnpIds */
    parent: GObject.Object
    priv: PnpIdsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.PnpIds */
    getPnpId(pnpId: string): string
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
    connect(sigName: "notify", callback: (($obj: PnpIds, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PnpIds_ConstructProps)
    _init (config?: PnpIds_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PnpIds
    static $gtype: GObject.Type
}
export interface WallClock_ConstructProps extends GObject.Object_ConstructProps {
    timeOnly?: boolean
}
class WallClock {
    /* Properties of GnomeDesktop-4.0.GnomeDesktop.WallClock */
    readonly clock: string
    timeOnly: boolean
    readonly timezone: GLib.TimeZone
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.WallClock */
    parentObject: GObject.Object
    priv: WallClockPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.WallClock */
    getClock(): string
    getTimezone(): GLib.TimeZone
    stringForDatetime(now: GLib.DateTime, clockFormat: GDesktopEnums.ClockFormat, showWeekday: boolean, showFullDate: boolean, showSeconds: boolean): string
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
    connect(sigName: "notify", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
class XkbInfo {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfo */
    parentObject: GObject.Object
    priv: XkbInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeDesktop-4.0.GnomeDesktop.XkbInfo */
    descriptionForGroup(groupId: string): string
    descriptionForOption(groupId: string, id: string): string
    getAllLayouts(): string[]
    getAllOptionGroups(): string[]
    getLanguagesForLayout(layoutId: string): string[]
    getLayoutInfo(id: string): { returnType: boolean, displayName: string | null, shortName: string | null, xkbLayout: string | null, xkbVariant: string | null }
    getLayoutsForCountry(countryCode: string): string[]
    getLayoutsForLanguage(languageCode: string): string[]
    getOptionsForGroup(groupId: string): string[]
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
    /* Signals of GnomeDesktop-4.0.GnomeDesktop.XkbInfo */
    connect(sigName: "layouts-changed", callback: (($obj: XkbInfo) => void)): number
    on(sigName: "layouts-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layouts-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layouts-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "layouts-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XkbInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: XkbInfo_ConstructProps)
    _init (config?: XkbInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XkbInfo
    static $gtype: GObject.Type
}
abstract class DesktopThumbnailFactoryClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryClass */
    parent: GObject.ObjectClass
    static name: string
}
class DesktopThumbnailFactoryPrivate {
    static name: string
}
abstract class IdleMonitorClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class IdleMonitorPrivate {
    static name: string
}
abstract class PnpIdsClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.PnpIdsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class PnpIdsPrivate {
    static name: string
}
abstract class WallClockClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.WallClockClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class WallClockPrivate {
    static name: string
}
abstract class XkbInfoClass {
    /* Fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class XkbInfoPrivate {
    static name: string
}
}
export default GnomeDesktop