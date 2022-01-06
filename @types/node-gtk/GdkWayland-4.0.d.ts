/**
 * GdkWayland-4.0
 */

import "node"
import type { Gdk } from './Gdk-4.0';
import type { cairo } from './cairo-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GdkWayland {

export interface WaylandToplevelExported {
    (toplevel: WaylandToplevel, handle: string): void
}
export interface WaylandDevice_ConstructProps extends Gdk.Device_ConstructProps {
}
export class WaylandDevice {
    /* Properties of Gdk-4.0.Gdk.Device */
    readonly capsLockState: boolean
    readonly direction: Pango.Direction
    readonly hasBidiLayouts: boolean
    readonly modifierState: Gdk.ModifierType
    readonly nAxes: number
    readonly numLockState: boolean
    readonly scrollLockState: boolean
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandDevice */
    getNodePath(): string | null
    getXkbKeymap(): object | null
    /* Methods of Gdk-4.0.Gdk.Device */
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
    getSurfaceAtPosition(): { returnType: Gdk.Surface | null, winX: number | null, winY: number | null }
    getTimestamp(): number
    getVendorId(): string | null
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
    /* Signals of Gdk-4.0.Gdk.Device */
    connect(sigName: "changed", callback: (($obj: WaylandDevice) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: (($obj: WaylandDevice, tool: Gdk.DeviceTool) => void)): number
    on(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaylandDevice_ConstructProps)
    _init (config?: WaylandDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandDisplay_ConstructProps extends Gdk.Display_ConstructProps {
}
export class WaylandDisplay {
    /* Properties of Gdk-4.0.Gdk.Display */
    readonly composited: boolean
    readonly inputShapes: boolean
    readonly rgba: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandDisplay */
    getEglDisplay(): object | null
    getStartupNotificationId(): string | null
    queryRegistry(global: string): boolean
    setCursorTheme(name: string, size: number): void
    setStartupNotificationId(startupId: string): void
    /* Methods of Gdk-4.0.Gdk.Display */
    beep(): void
    close(): void
    createGlContext(): Gdk.GLContext
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
    isClosed(): boolean
    isComposited(): boolean
    isRgba(): boolean
    listSeats(): Gdk.Seat[]
    mapKeycode(keycode: number): { returnType: boolean, keys: Gdk.KeymapKey[] | null, keyvals: number[] | null }
    mapKeyval(keyval: number): { returnType: boolean, keys: Gdk.KeymapKey[] }
    notifyStartupComplete(startupId: string): void
    prepareGl(): boolean
    putEvent(event: Gdk.Event): void
    supportsInputShapes(): boolean
    sync(): void
    translateKey(keycode: number, state: Gdk.ModifierType, group: number): { returnType: boolean, keyval: number | null, effectiveGroup: number | null, level: number | null, consumed: Gdk.ModifierType | null }
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
    /* Signals of Gdk-4.0.Gdk.Display */
    connect(sigName: "closed", callback: (($obj: WaylandDisplay, isError: boolean) => void)): number
    on(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (isError: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "closed", isError: boolean): void
    connect(sigName: "opened", callback: (($obj: WaylandDisplay) => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    on(sigName: "seat-added", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (seat: Gdk.Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    connect(sigName: "seat-removed", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    on(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    connect(sigName: "setting-changed", callback: (($obj: WaylandDisplay, setting: string) => void)): number
    on(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (setting: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", setting: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaylandDisplay_ConstructProps)
    _init (config?: WaylandDisplay_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandGLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
export class WaylandGLContext {
    /* Properties of Gdk-4.0.Gdk.GLContext */
    allowedApis: Gdk.GLAPI
    readonly api: Gdk.GLAPI
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLContext */
    getAllowedApis(): Gdk.GLAPI
    getApi(): Gdk.GLAPI
    getDebugEnabled(): boolean
    getDisplay(): Gdk.Display | null
    getForwardCompatible(): boolean
    getRequiredVersion(): { major: number | null, minor: number | null }
    getSharedContext(): Gdk.GLContext | null
    getSurface(): Gdk.Surface | null
    getUseEs(): boolean
    getVersion(): { major: number, minor: number }
    isLegacy(): boolean
    isShared(other: Gdk.GLContext): boolean
    makeCurrent(): void
    realize(): boolean
    setAllowedApis(apis: Gdk.GLAPI): void
    setDebugEnabled(enabled: boolean): void
    setForwardCompatible(compatible: boolean): void
    setRequiredVersion(major: number, minor: number): void
    setUseEs(useEs: number): void
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    beginFrame(region: cairo.Region): void
    endFrame(): void
    getFrameRegion(): cairo.Region | null
    isInFrame(): boolean
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
    connect(sigName: "notify", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-apis", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::api", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandGLContext_ConstructProps)
    _init (config?: WaylandGLContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandMonitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
export class WaylandMonitor {
    /* Properties of Gdk-4.0.Gdk.Monitor */
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Monitor */
    getConnector(): string | null
    getDisplay(): Gdk.Display
    getGeometry(): { geometry: Gdk.Rectangle }
    getHeightMm(): number
    getManufacturer(): string | null
    getModel(): string | null
    getRefreshRate(): number
    getScaleFactor(): number
    getSubpixelLayout(): Gdk.SubpixelLayout
    getWidthMm(): number
    isValid(): boolean
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
    /* Signals of Gdk-4.0.Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: WaylandMonitor) => void)): number
    on(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaylandMonitor_ConstructProps)
    _init (config?: WaylandMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandPopup_ConstructProps extends WaylandSurface_ConstructProps {
    autohide?: boolean
    parent?: Gdk.Surface
}
export class WaylandPopup {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scaleFactor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    createCairoContext(): Gdk.CairoContext
    createGlContext(): Gdk.GLContext
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    createVulkanContext(): Gdk.VulkanContext
    destroy(): void
    getCursor(): Gdk.Cursor | null
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    getDevicePosition(device: Gdk.Device): { returnType: boolean, x: number | null, y: number | null, mask: Gdk.ModifierType | null }
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
    translateCoordinates(to: Gdk.Surface, x: number, y: number): { returnType: boolean, x: number, y: number }
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
    /* Methods of Gdk-4.0.Gdk.Popup */
    getAutohide(): boolean
    getParent(): Gdk.Surface
    getPositionX(): number
    getPositionY(): number
    getRectAnchor(): Gdk.Gravity
    getSurfaceAnchor(): Gdk.Gravity
    present(width: number, height: number, layout: Gdk.PopupLayout): boolean
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandPopup, event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandPopup, width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandPopup, region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaylandPopup_ConstructProps)
    _init (config?: WaylandPopup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandSeat_ConstructProps extends Gdk.Seat_ConstructProps {
}
export class WaylandSeat {
    /* Fields of Gdk-4.0.Gdk.Seat */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Seat */
    getCapabilities(): Gdk.SeatCapabilities
    getDevices(capabilities: Gdk.SeatCapabilities): Gdk.Device[]
    getDisplay(): Gdk.Display
    getKeyboard(): Gdk.Device | null
    getPointer(): Gdk.Device | null
    getTools(): Gdk.DeviceTool[]
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
    /* Signals of Gdk-4.0.Gdk.Seat */
    connect(sigName: "device-added", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    on(sigName: "device-added", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Gdk.Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Gdk.Device): void
    connect(sigName: "device-removed", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    on(sigName: "device-removed", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Gdk.Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Gdk.Device): void
    connect(sigName: "tool-added", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    on(sigName: "tool-added", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-added", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-added", callback: (tool: Gdk.DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-added", tool: Gdk.DeviceTool): void
    connect(sigName: "tool-removed", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    on(sigName: "tool-removed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-removed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-removed", callback: (tool: Gdk.DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-removed", tool: Gdk.DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandSeat, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaylandSeat_ConstructProps)
    _init (config?: WaylandSeat_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandSurface_ConstructProps extends Gdk.Surface_ConstructProps {
}
export class WaylandSurface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scaleFactor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    createCairoContext(): Gdk.CairoContext
    createGlContext(): Gdk.GLContext
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    createVulkanContext(): Gdk.VulkanContext
    destroy(): void
    getCursor(): Gdk.Cursor | null
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    getDevicePosition(device: Gdk.Device): { returnType: boolean, x: number | null, y: number | null, mask: Gdk.ModifierType | null }
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
    translateCoordinates(to: Gdk.Surface, x: number, y: number): { returnType: boolean, x: number, y: number }
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
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandSurface, event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandSurface, width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandSurface, region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WaylandSurface_ConstructProps)
    _init (config?: WaylandSurface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandToplevel_ConstructProps extends WaylandSurface_ConstructProps {
    decorated?: boolean
    deletable?: boolean
    fullscreenMode?: Gdk.FullscreenMode
    iconList?: object
    modal?: boolean
    startupId?: string
    title?: string
    transientFor?: Gdk.Surface
}
export class WaylandToplevel {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scaleFactor: number
    readonly width: number
    /* Properties of Gdk-4.0.Gdk.Toplevel */
    decorated: boolean
    deletable: boolean
    fullscreenMode: Gdk.FullscreenMode
    iconList: object
    modal: boolean
    readonly shortcutsInhibited: boolean
    startupId: string
    readonly state: Gdk.ToplevelState
    title: string
    transientFor: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandToplevel */
    exportHandle(callback: WaylandToplevelExported): boolean
    setApplicationId(applicationId: string): void
    setTransientForExported(parentHandleStr: string): boolean
    unexportHandle(): void
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    createCairoContext(): Gdk.CairoContext
    createGlContext(): Gdk.GLContext
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    createVulkanContext(): Gdk.VulkanContext
    destroy(): void
    getCursor(): Gdk.Cursor | null
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    getDevicePosition(device: Gdk.Device): { returnType: boolean, x: number | null, y: number | null, mask: Gdk.ModifierType | null }
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
    translateCoordinates(to: Gdk.Surface, x: number, y: number): { returnType: boolean, x: number, y: number }
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
    /* Methods of Gdk-4.0.Gdk.Toplevel */
    beginMove(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void
    beginResize(edge: Gdk.SurfaceEdge, device: Gdk.Device | null, button: number, x: number, y: number, timestamp: number): void
    focus(timestamp: number): void
    getState(): Gdk.ToplevelState
    inhibitSystemShortcuts(event?: Gdk.Event | null): void
    lower(): boolean
    minimize(): boolean
    present(layout: Gdk.ToplevelLayout): void
    restoreSystemShortcuts(): void
    setDecorated(decorated: boolean): void
    setDeletable(deletable: boolean): void
    setIconList(surfaces: Gdk.Texture[]): void
    setModal(modal: boolean): void
    setStartupId(startupId: string): void
    setTitle(title: string): void
    setTransientFor(parent: Gdk.Surface): void
    showWindowMenu(event: Gdk.Event): boolean
    supportsEdgeConstraints(): boolean
    titlebarGesture(gesture: Gdk.TitlebarGesture): boolean
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandToplevel, event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandToplevel, width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandToplevel, region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Toplevel */
    connect(sigName: "compute-size", callback: (($obj: WaylandToplevel) => void)): number
    on(sigName: "compute-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "compute-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "compute-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "compute-size"): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandToplevel_ConstructProps)
    _init (config?: WaylandToplevel_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class WaylandDeviceClass {
    static name: string
}
export abstract class WaylandDisplayClass {
    static name: string
}
export abstract class WaylandGLContextClass {
    static name: string
}
export abstract class WaylandMonitorClass {
    static name: string
}
export abstract class WaylandSeatClass {
    static name: string
}
}