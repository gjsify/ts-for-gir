/**
 * GdkX11-4.0
 */

import "node"
import type { xlib } from './xlib-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gdk } from './Gdk-4.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GdkX11 {

export enum X11DeviceType {
    LOGICAL,
    PHYSICAL,
    FLOATING,
}
export function x11DeviceGetId(device: X11DeviceXI2): number
export function x11DeviceManagerLookup(deviceManager: X11DeviceManagerXI2, deviceId: number): X11DeviceXI2 | null
export function x11FreeCompoundText(ctext: number): void
export function x11FreeTextList(list: string): void
export function x11GetServerTime(surface: X11Surface): number
export function x11GetXatomByNameForDisplay(display: X11Display, atomName: string): xlib.Atom
export function x11GetXatomNameForDisplay(display: X11Display, xatom: xlib.Atom): string
export function x11LookupXdisplay(xdisplay: xlib.Display): X11Display
export function x11SetSmClientId(smClientId?: string | null): void
export interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}
export class X11AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.AppLaunchContext */
    getDisplay(): Gdk.Display
    setDesktop(desktop: number): void
    setIcon(icon?: Gio.Icon | null): void
    setIconName(iconName?: string | null): void
    setTimestamp(timestamp: number): void
    /* Methods of Gio.AppLaunchContext */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    getEnvironment(): string[]
    getStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    launchFailed(startupNotifyId: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
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
    /* Virtual methods of Gio.AppLaunchContext */
    vfuncGetDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfuncGetStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfuncLaunchFailed(startupNotifyId: string): void
    vfuncLaunched(info: Gio.AppInfo, platformData: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startupNotifyId: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startupNotifyId: string) => void)): number
    emit(sigName: "launch-failed", startupNotifyId: string): void
    on(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platformData: GLib.Variant): void
    on(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "launched", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: X11AppLaunchContext_ConstructProps)
    _init (config?: X11AppLaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceManagerXI2_ConstructProps extends GObject.Object_ConstructProps {
    display?: Gdk.Display
    major?: number
    minor?: number
    opcode?: number
}
export class X11DeviceManagerXI2 {
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
    connect(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: X11DeviceManagerXI2_ConstructProps)
    _init (config?: X11DeviceManagerXI2_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11DeviceXI2_ConstructProps extends Gdk.Device_ConstructProps {
    deviceId?: number
}
export class X11DeviceXI2 {
    /* Properties of Gdk.Device */
    readonly capsLockState: boolean
    readonly direction: Pango.Direction
    readonly hasBidiLayouts: boolean
    readonly modifierState: Gdk.ModifierType
    readonly nAxes: number
    readonly numLockState: boolean
    readonly scrollLockState: boolean
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.Device */
    getCapsLockState(): boolean
    getDeviceTool(): Gdk.DeviceTool
    getDirection(): Pango.Direction
    getDisplay(): Gdk.Display
    getHasCursor(): boolean
    getModifierState(): Gdk.ModifierType
    getName(): string
    getNumLockState(): boolean
    getNumTouches(): number
    getProductId(): string | null
    getScrollLockState(): boolean
    getSeat(): Gdk.Seat
    getSource(): Gdk.InputSource
    getSurfaceAtPosition(): [ /* returnType */ Gdk.Surface | null, /* winX */ number | null, /* winY */ number | null ]
    getVendorId(): string | null
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
    /* Signals of Gdk.Device */
    connect(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    on(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DeviceXI2_ConstructProps)
    _init (config?: X11DeviceXI2_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Display_ConstructProps extends Gdk.Display_ConstructProps {
}
export class X11Display {
    /* Properties of Gdk.Display */
    readonly composited: boolean
    readonly inputShapes: boolean
    readonly rgba: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Display */
    errorTrapPop(): number
    errorTrapPopIgnored(): void
    errorTrapPush(): void
    getDefaultGroup(): Gdk.Surface
    getGlxVersion(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    getPrimaryMonitor(): Gdk.Monitor
    getScreen(): X11Screen
    getStartupNotificationId(): string
    getUserTime(): number
    getXcursor(cursor: Gdk.Cursor): xlib.Cursor
    getXdisplay(): xlib.Display
    getXrootwindow(): xlib.Window
    getXscreen(): xlib.Screen
    grab(): void
    setCursorTheme(theme: string | null, size: number): void
    setStartupNotificationId(startupId: string): void
    setSurfaceScale(scale: number): void
    stringToCompoundText(str: string): [ /* returnType */ number, /* encoding */ string, /* format */ number, /* ctext */ any ]
    textPropertyToTextList(encoding: string, format: number, text: number, length: number, list: string): number
    ungrab(): void
    utf8ToCompoundText(str: string): [ /* returnType */ boolean, /* encoding */ string, /* format */ number, /* ctext */ any ]
    /* Methods of Gdk.Display */
    beep(): void
    close(): void
    deviceIsGrabbed(device: Gdk.Device): boolean
    flush(): void
    getAppLaunchContext(): Gdk.AppLaunchContext
    getClipboard(): Gdk.Clipboard
    getDefaultSeat(): Gdk.Seat | null
    getMonitorAtSurface(surface: Gdk.Surface): Gdk.Monitor
    getMonitors(): Gio.ListModel
    getName(): string
    getPrimaryClipboard(): Gdk.Clipboard
    getSetting(name: string, value: any): boolean
    getStartupNotificationId(): string | null
    isClosed(): boolean
    isComposited(): boolean
    isRgba(): boolean
    listSeats(): Gdk.Seat[]
    mapKeycode(keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    mapKeyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    notifyStartupComplete(startupId: string): void
    putEvent(event: Gdk.Event): void
    supportsInputShapes(): boolean
    sync(): void
    translateKey(keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effectiveGroup */ number | null, /* level */ number | null, /* consumed */ Gdk.ModifierType | null ]
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
    /* Signals of GdkX11.X11Display */
    connect(sigName: "xevent", callback: (($obj: X11Display, xevent?: object | null) => boolean)): number
    connect_after(sigName: "xevent", callback: (($obj: X11Display, xevent?: object | null) => boolean)): number
    emit(sigName: "xevent", xevent?: object | null): void
    on(sigName: "xevent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "xevent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "xevent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdk.Display */
    connect(sigName: "closed", callback: (($obj: X11Display, isError: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: X11Display, isError: boolean) => void)): number
    emit(sigName: "closed", isError: boolean): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "opened", callback: (($obj: X11Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: X11Display) => void)): number
    emit(sigName: "opened"): void
    on(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    on(sigName: "seat-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    on(sigName: "seat-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "setting-changed", callback: (($obj: X11Display, setting: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: X11Display, setting: string) => void)): number
    emit(sigName: "setting-changed", setting: string): void
    on(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static open(displayName?: string | null): Gdk.Display | null
    static open(displayName: string): Gdk.Display | null
    static setProgramClass(display: Gdk.Display, programClass: string): void
    static $gtype: GObject.Type
}
export interface X11Drag_ConstructProps extends Gdk.Drag_ConstructProps {
}
export class X11Drag {
    /* Properties of Gdk.Drag */
    actions: Gdk.DragAction
    readonly display: Gdk.Display
    selectedAction: Gdk.DragAction
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.Drag */
    dropDone(success: boolean): void
    getActions(): Gdk.DragAction
    getContent(): Gdk.ContentProvider
    getDevice(): Gdk.Device
    getDisplay(): Gdk.Display
    getDragSurface(): Gdk.Surface | null
    getFormats(): Gdk.ContentFormats
    getSelectedAction(): Gdk.DragAction
    getSurface(): Gdk.Surface
    setHotspot(hotX: number, hotY: number): void
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
    /* Signals of Gdk.Drag */
    connect(sigName: "cancel", callback: (($obj: X11Drag, reason: Gdk.DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: X11Drag, reason: Gdk.DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: Gdk.DragCancelReason): void
    on(sigName: "cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "dnd-finished", callback: (($obj: X11Drag) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: X11Drag) => void)): number
    emit(sigName: "dnd-finished"): void
    on(sigName: "dnd-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "dnd-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "dnd-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drop-performed", callback: (($obj: X11Drag) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: X11Drag) => void)): number
    emit(sigName: "drop-performed"): void
    on(sigName: "drop-performed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drop-performed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drop-performed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Drag_ConstructProps)
    _init (config?: X11Drag_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
export class X11GLContext {
    /* Properties of Gdk.DrawContext */
    readonly display: Gdk.Display
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk.GLContext */
    getDebugEnabled(): boolean
    getDisplay(): Gdk.Display | null
    getForwardCompatible(): boolean
    getRequiredVersion(): [ /* major */ number | null, /* minor */ number | null ]
    getSharedContext(): Gdk.GLContext | null
    getSurface(): Gdk.Surface | null
    getUseEs(): boolean
    getVersion(): [ /* major */ number, /* minor */ number ]
    isLegacy(): boolean
    makeCurrent(): void
    realize(): boolean
    setDebugEnabled(enabled: boolean): void
    setForwardCompatible(compatible: boolean): void
    setRequiredVersion(major: number, minor: number): void
    setUseEs(useEs: number): void
    /* Methods of Gdk.DrawContext */
    beginFrame(region: cairo.Region): void
    endFrame(): void
    getFrameRegion(): cairo.Region | null
    isInFrame(): boolean
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
    connect(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11GLContext_ConstructProps)
    _init (config?: X11GLContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
export class X11Monitor {
    /* Properties of Gdk.Monitor */
    readonly connector: string
    readonly geometry: Gdk.Rectangle
    readonly heightMm: number
    readonly manufacturer: string
    readonly model: string
    readonly refreshRate: number
    readonly scaleFactor: number
    readonly subpixelLayout: Gdk.SubpixelLayout
    readonly valid: boolean
    readonly widthMm: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Monitor */
    getOutput(): xlib.XID
    getWorkarea(): /* workarea */ Gdk.Rectangle
    /* Methods of Gdk.Monitor */
    getConnector(): string | null
    getDisplay(): Gdk.Display
    getGeometry(): /* geometry */ Gdk.Rectangle
    getHeightMm(): number
    getManufacturer(): string | null
    getModel(): string | null
    getRefreshRate(): number
    getScaleFactor(): number
    getSubpixelLayout(): Gdk.SubpixelLayout
    getWidthMm(): number
    isValid(): boolean
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
    /* Signals of Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    emit(sigName: "invalidate"): void
    on(sigName: "invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Monitor_ConstructProps)
    _init (config?: X11Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Screen_ConstructProps extends GObject.Object_ConstructProps {
}
export class X11Screen {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Screen */
    getCurrentDesktop(): number
    getMonitorOutput(monitorNum: number): xlib.XID
    getNumberOfDesktops(): number
    getScreenNumber(): number
    getWindowManagerName(): string
    getXscreen(): xlib.Screen
    supportsNetWmHint(propertyName: string): boolean
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
    /* Signals of GdkX11.X11Screen */
    connect(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "window-manager-changed"): void
    on(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-manager-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: X11Screen_ConstructProps)
    _init (config?: X11Screen_ConstructProps): void
    static $gtype: GObject.Type
}
export interface X11Surface_ConstructProps extends Gdk.Surface_ConstructProps {
}
export class X11Surface {
    /* Properties of Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scaleFactor: number
    readonly width: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11.X11Surface */
    getDesktop(): number
    getGroup(): Gdk.Surface
    getXid(): xlib.Window
    moveToCurrentDesktop(): void
    moveToDesktop(desktop: number): void
    setFrameSyncEnabled(frameSyncEnabled: boolean): void
    setGroup(leader: Gdk.Surface): void
    setSkipPagerHint(skipsPager: boolean): void
    setSkipTaskbarHint(skipsTaskbar: boolean): void
    setThemeVariant(variant: string): void
    setUrgencyHint(urgent: boolean): void
    setUserTime(timestamp: number): void
    setUtf8Property(name: string, value?: string | null): void
    /* Methods of Gdk.Surface */
    beep(): void
    createCairoContext(): Gdk.CairoContext
    createGlContext(): Gdk.GLContext
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    createVulkanContext(): Gdk.VulkanContext
    destroy(): void
    getCursor(): Gdk.Cursor | null
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    getDevicePosition(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    getDisplay(): Gdk.Display
    getFrameClock(): Gdk.FrameClock
    getHeight(): number
    getMapped(): boolean
    getScaleFactor(): number
    getWidth(): number
    hide(): void
    isDestroyed(): boolean
    queueRender(): void
    requestLayout(): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setDeviceCursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    setInputRegion(region: cairo.Region): void
    setOpaqueRegion(region?: cairo.Region | null): void
    translateCoordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
    /* Signals of Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    on(sigName: "enter-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: X11Surface, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: X11Surface, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "layout", callback: (($obj: X11Surface, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: X11Surface, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    on(sigName: "layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    on(sigName: "leave-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "render", callback: (($obj: X11Surface, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: X11Surface, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    on(sigName: "render", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "render", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "render", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Surface_ConstructProps)
    _init (config?: X11Surface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static lookupForDisplay(display: X11Display, window: xlib.Window): X11Surface
    static $gtype: GObject.Type
}
export abstract class X11AppLaunchContextClass {
    static name: string
}
export abstract class X11DeviceManagerXI2Class {
    static name: string
}
export abstract class X11DeviceXI2Class {
    static name: string
}
export abstract class X11DisplayClass {
    static name: string
}
export abstract class X11DragClass {
    static name: string
}
export abstract class X11GLContextClass {
    static name: string
}
export abstract class X11MonitorClass {
    static name: string
}
export abstract class X11ScreenClass {
    static name: string
}
export abstract class X11SurfaceClass {
    static name: string
}
}