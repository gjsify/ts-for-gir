/**
 * GnomeRR-4.0
 */

import "node"
import type { GnomeDesktop } from './GnomeDesktop-4.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { GDesktopEnums } from './GDesktopEnums-3.0';
import type { Gdk } from './Gdk-4.0';
import type { cairo } from './cairo-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';

declare namespace GnomeRR {

enum DpmsMode {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
enum DpmsModeType {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
enum Error {
    UNKNOWN,
    NO_RANDR_EXTENSION,
    RANDR_ERROR,
    BOUNDS_ERROR,
    CRTC_ASSIGNMENT,
    NO_MATCHING_CONFIG,
    NO_DPMS_EXTENSION,
}
enum Rotation {
    ROTATION_NEXT,
    ROTATION_0,
    ROTATION_90,
    ROTATION_180,
    ROTATION_270,
    REFLECT_X,
    REFLECT_Y,
}
export const CONNECTOR_TYPE_PANEL: string
function errorQuark(): GLib.Quark
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
    screen?: Screen
}
class Config {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeRR-4.0.GnomeRR.Config */
    applicable(screen: Screen): boolean
    apply(screen: Screen): boolean
    applyPersistent(screen: Screen): boolean
    ensurePrimary(): boolean
    equal(config2: Config): boolean
    getClone(): boolean
    getOutputs(): OutputInfo[]
    loadCurrent(): boolean
    match(config2: Config): boolean
    sanitize(): void
    setClone(clone: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newCurrent(screen: Screen): Config
    static $gtype: GObject.Type
}
export interface OutputInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class OutputInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeRR-4.0.GnomeRR.OutputInfo */
    getAspectRatio(): number
    getDisplayName(): string
    getGeometry(): { x: number | null, y: number | null, width: number | null, height: number | null }
    getName(): string
    getPreferredHeight(): number
    getPreferredWidth(): number
    getPrimary(): boolean
    getProduct(): string
    getRefreshRate(): number
    getRotation(): Rotation
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
    setRotation(rotation: Rotation): void
    setUnderscanning(underscanning: boolean): void
    supportsRotation(rotation: Rotation): boolean
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
    connect(sigName: "notify", callback: (($obj: OutputInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: OutputInfo_ConstructProps)
    _init (config?: OutputInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Screen_ConstructProps extends GObject.Object_ConstructProps {
    dpmsMode?: DpmsModeType
    gdkDisplay?: Gdk.Display
}
class Screen {
    /* Properties of GnomeRR-4.0.GnomeRR.Screen */
    dpmsMode: DpmsModeType
    /* Fields of GnomeRR-4.0.GnomeRR.Screen */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeRR-4.0.GnomeRR.Screen */
    getCrtcById(id: number): Crtc
    getDpmsMode(): { returnType: boolean, mode: DpmsMode }
    getOutputById(id: number): Output
    getOutputByName(name: string): Output
    getRanges(): { minWidth: number, maxWidth: number, minHeight: number, maxHeight: number }
    listCloneModes(): Mode[]
    listCrtcs(): Crtc[]
    listModes(): Mode[]
    listOutputs(): Output[]
    refresh(): boolean
    setDpmsMode(mode: DpmsMode): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GnomeRR-4.0.GnomeRR.Screen */
    connect(sigName: "changed", callback: (($obj: Screen) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "output-connected", callback: (($obj: Screen, output: Output) => void)): number
    on(sigName: "output-connected", callback: (output: Output) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-connected", callback: (output: Output) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-connected", callback: (output: Output) => void): NodeJS.EventEmitter
    emit(sigName: "output-connected", output: Output): void
    connect(sigName: "output-disconnected", callback: (($obj: Screen, output: Output) => void)): number
    on(sigName: "output-disconnected", callback: (output: Output) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-disconnected", callback: (output: Output) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-disconnected", callback: (output: Output) => void): NodeJS.EventEmitter
    emit(sigName: "output-disconnected", output: Output): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dpms-mode", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpms-mode", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: Gdk.Display): Screen
    static newFinish(result: Gio.AsyncResult): Screen
    static newAsync(display: Gdk.Display, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
class CTM {
    static name: string
}
abstract class ConfigClass {
    /* Fields of GnomeRR-4.0.GnomeRR.ConfigClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class Crtc {
    /* Methods of GnomeRR-4.0.GnomeRR.Crtc */
    canDriveOutput(output: Output): boolean
    getCurrentMode(): Mode
    getCurrentRotation(): Rotation
    getGamma(size: number): { returnType: boolean, red: number, green: number, blue: number }
    getId(): number
    getPosition(): { x: number | null, y: number | null }
    getRotations(): Rotation
    setGamma(size: number, red: number, green: number, blue: number): boolean
    supportsRotation(rotation: Rotation): boolean
    static name: string
}
class Mode {
    /* Methods of GnomeRR-4.0.GnomeRR.Mode */
    getFreq(): number
    getFreqF(): number
    getHeight(): number
    getId(): number
    getIsInterlaced(): boolean
    getIsTiled(): boolean
    getWidth(): number
    static name: string
}
class Output {
    /* Methods of GnomeRR-4.0.GnomeRR.Output */
    canClone(clone: Output): boolean
    getBacklight(): number
    getCrtc(): Crtc
    getCurrentMode(): Mode
    getDisplayName(): string
    getEdidData(size: number): number
    getId(): number
    getIdsFromEdid(): { vendor: string | null, product: string | null, serial: string | null }
    getIsPrimary(): boolean
    getIsUnderscanning(): boolean
    getMinBacklightStep(): number
    getName(): string
    getPhysicalSize(): { widthMm: number | null, heightMm: number | null }
    getPosition(): { x: number | null, y: number | null }
    getPossibleCrtcs(): Crtc[]
    getPreferredMode(): Mode
    isBuiltinDisplay(): boolean
    listModes(): Mode[]
    setBacklight(value: number): boolean
    setColorTransform(ctm: CTM): boolean
    supportsColorTransform(): boolean
    supportsMode(mode: Mode): boolean
    supportsUnderscanning(): boolean
    static name: string
}
abstract class OutputInfoClass {
    /* Fields of GnomeRR-4.0.GnomeRR.OutputInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ScreenClass {
    /* Fields of GnomeRR-4.0.GnomeRR.ScreenClass */
    changed: (screen: Screen) => void
    outputConnected: (screen: Screen, output: Output) => void
    outputDisconnected: (screen: Screen, output: Output) => void
    static name: string
}
}
export default GnomeRR