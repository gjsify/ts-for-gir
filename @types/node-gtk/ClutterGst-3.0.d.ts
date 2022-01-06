/**
 * ClutterGst-3.0
 */

import "node"
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstPbutils } from './GstPbutils-1.0';
import type { GstAudio } from './GstAudio-1.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { Gio } from './Gio-2.0';
import type { Cogl } from './Cogl-1.0';
import type { GL } from './GL-1.0';
import type { Clutter } from './Clutter-1.0';
import type { cairo } from './cairo-1.0';
import type { Json } from './Json-1.0';
import type { CoglPango } from './CoglPango-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Atk } from './Atk-1.0';

declare namespace ClutterGst {

enum BufferingMode {
    STREAM,
    DOWNLOAD,
}
enum SeekFlags {
    NONE,
    ACCURATE,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION: number
export const VERSION_HEX: number
export const VERSION_S: string
function createVideoSink(): Gst.Element
function init(argv?: string[] | null): { returnType: Clutter.InitError, argv: string[] | null }
function initWithArgs(argv: string[] | null, parameterString: string, entries: GLib.OptionEntry, translationDomain: string): { returnType: Clutter.InitError, argv: string[] | null }
class Player {
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    audioVolume: number
    readonly idle: boolean
    playing: boolean
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    getAudioVolume(): number
    getFrame(): Frame
    getIdle(): boolean
    getPipeline(): Gst.Element
    getPlaying(): boolean
    getVideoSink(): VideoSink
    setAudioVolume(volume: number): void
    setPlaying(playing: boolean): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    connect(sigName: "eos", callback: (($obj: Player) => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "new-frame", callback: (($obj: Player, frame: Frame) => void)): number
    on(sigName: "new-frame", callback: (frame: Frame) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-frame", callback: (frame: Frame) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-frame", callback: (frame: Frame) => void): NodeJS.EventEmitter
    emit(sigName: "new-frame", frame: Frame): void
    connect(sigName: "ready", callback: (($obj: Player) => void)): number
    on(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "ready"): void
    connect(sigName: "size-change", callback: (($obj: Player, width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    static name: string
}
export interface Aspectratio_ConstructProps extends Content_ConstructProps {
    fillAllocation?: boolean
    paintBorders?: boolean
}
class Aspectratio {
    /* Properties of ClutterGst-3.0.ClutterGst.Aspectratio */
    fillAllocation: boolean
    paintBorders: boolean
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paintFrame: boolean
    paintOverlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    getFrame(): Frame
    getOverlays(): Overlays
    getPlayer(): Player
    getSink(): VideoSink
    setFrame(frame: Frame): void
    setPlayer(player: Player): void
    setSink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    getPreferredSize(): { returnType: boolean, width: number, height: number }
    invalidate(): void
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    connect(sigName: "size-change", callback: (($obj: Aspectratio, width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    on(sigName: "attached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "attached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "attached", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    on(sigName: "detached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "detached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "detached", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Aspectratio_ConstructProps)
    _init (config?: Aspectratio_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Camera_ConstructProps extends GObject.Object_ConstructProps {
    device?: CameraDevice
    audioVolume?: number
    playing?: boolean
}
class Camera {
    /* Properties of ClutterGst-3.0.ClutterGst.Camera */
    device: CameraDevice
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    audioVolume: number
    readonly idle: boolean
    playing: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Camera */
    getBrightness(curValue: number): boolean
    getBrightnessRange(minValue: number, maxValue: number, defaultValue: number): boolean
    getCameraDevice(): CameraDevice
    getColorBalanceProperty(property: string, curValue: number): boolean
    getColorBalancePropertyRange(property: string, minValue: number, maxValue: number, defaultValue: number): boolean
    getContrast(curValue: number): boolean
    getContrastRange(minValue: number, maxValue: number, defaultValue: number): boolean
    getFilter(): Gst.Element
    getGamma(curValue: number): boolean
    getGammaRange(minValue: number, maxValue: number, defaultValue: number): boolean
    getHue(curValue: number): boolean
    getHueRange(minValue: number, maxValue: number, defaultValue: number): boolean
    getSaturation(curValue: number): boolean
    getSaturationRange(minValue: number, maxValue: number, defaultValue: number): boolean
    isReadyForCapture(): boolean
    isRecordingVideo(): boolean
    removeFilter(): boolean
    setBrightness(value: number): boolean
    setCameraDevice(device: CameraDevice): boolean
    setColorBalanceProperty(property: string, value: number): boolean
    setContrast(value: number): boolean
    setFilter(filter: Gst.Element): boolean
    setGamma(value: number): boolean
    setHue(value: number): boolean
    setPhotoProfile(profile: GstPbutils.EncodingProfile): void
    setSaturation(value: number): boolean
    setVideoProfile(profile: GstPbutils.EncodingProfile): void
    startVideoRecording(filename: string): boolean
    stopVideoRecording(): void
    supportsColorBalance(): boolean
    supportsGammaCorrection(): boolean
    takePhoto(filename: string): boolean
    takePhotoPixbuf(): boolean
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
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    getAudioVolume(): number
    getFrame(): Frame
    getIdle(): boolean
    getPipeline(): Gst.Element
    getPlaying(): boolean
    getVideoSink(): VideoSink
    setAudioVolume(volume: number): void
    setPlaying(playing: boolean): void
    /* Signals of ClutterGst-3.0.ClutterGst.Camera */
    connect(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    on(sigName: "photo-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-saved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "photo-saved"): void
    connect(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    on(sigName: "photo-taken", callback: (pixbuf: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-taken", callback: (pixbuf: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-taken", callback: (pixbuf: GdkPixbuf.Pixbuf) => void): NodeJS.EventEmitter
    emit(sigName: "photo-taken", pixbuf: GdkPixbuf.Pixbuf): void
    connect(sigName: "ready-for-capture", callback: (($obj: Camera, ready: boolean) => void)): number
    on(sigName: "ready-for-capture", callback: (ready: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready-for-capture", callback: (ready: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready-for-capture", callback: (ready: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "ready-for-capture", ready: boolean): void
    connect(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    on(sigName: "video-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-saved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "video-saved"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    connect(sigName: "eos", callback: (($obj: Camera) => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: Camera, error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "new-frame", callback: (($obj: Camera, frame: Frame) => void)): number
    on(sigName: "new-frame", callback: (frame: Frame) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-frame", callback: (frame: Frame) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-frame", callback: (frame: Frame) => void): NodeJS.EventEmitter
    emit(sigName: "new-frame", frame: Frame): void
    connect(sigName: "ready", callback: (($obj: Camera) => void)): number
    on(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "ready"): void
    connect(sigName: "size-change", callback: (($obj: Camera, width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    connect(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Camera_ConstructProps)
    _init (config?: Camera_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Camera
    static $gtype: GObject.Type
}
export interface CameraDevice_ConstructProps extends GObject.Object_ConstructProps {
    elementFactory?: Gst.ElementFactory
    name?: string
    node?: string
}
class CameraDevice {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.CameraDevice */
    getCaptureResolution(): { width: number, height: number }
    getName(): string
    getNode(): string
    getSupportedResolutions(): VideoResolution[]
    setCaptureResolution(width: number, height: number): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.CameraDevice */
    connect(sigName: "capture-resolution-changed", callback: (($obj: CameraDevice, width: number, height: number) => void)): number
    on(sigName: "capture-resolution-changed", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "capture-resolution-changed", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "capture-resolution-changed", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "capture-resolution-changed", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CameraDevice_ConstructProps)
    _init (config?: CameraDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CameraManager_ConstructProps extends GObject.Object_ConstructProps {
}
class CameraManager {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.CameraManager */
    getCameraDevices(): CameraDevice[]
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
    /* Signals of ClutterGst-3.0.ClutterGst.CameraManager */
    connect(sigName: "camera-added", callback: (($obj: CameraManager, cameraDevice: CameraDevice) => void)): number
    on(sigName: "camera-added", callback: (cameraDevice: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "camera-added", callback: (cameraDevice: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "camera-added", callback: (cameraDevice: CameraDevice) => void): NodeJS.EventEmitter
    emit(sigName: "camera-added", cameraDevice: CameraDevice): void
    connect(sigName: "camera-removed", callback: (($obj: CameraManager, cameraDevice: CameraDevice) => void)): number
    on(sigName: "camera-removed", callback: (cameraDevice: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "camera-removed", callback: (cameraDevice: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "camera-removed", callback: (cameraDevice: CameraDevice) => void): NodeJS.EventEmitter
    emit(sigName: "camera-removed", cameraDevice: CameraDevice): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CameraManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CameraManager_ConstructProps)
    _init (config?: CameraManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): CameraManager
    static $gtype: GObject.Type
}
export interface Content_ConstructProps extends GObject.Object_ConstructProps {
    frame?: Frame
    paintFrame?: boolean
    paintOverlays?: boolean
    player?: GObject.Object
    sink?: VideoSink
}
class Content {
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paintFrame: boolean
    paintOverlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    getFrame(): Frame
    getOverlays(): Overlays
    getPlayer(): Player
    getSink(): VideoSink
    setFrame(frame: Frame): void
    setPlayer(player: Player): void
    setSink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    getPreferredSize(): { returnType: boolean, width: number, height: number }
    invalidate(): void
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    connect(sigName: "size-change", callback: (($obj: Content, width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    on(sigName: "attached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "attached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "attached", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    on(sigName: "detached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "detached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "detached", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Content_ConstructProps)
    _init (config?: Content_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithSink(sink: VideoSink): Clutter.Content
    static $gtype: GObject.Type
}
export interface Crop_ConstructProps extends Content_ConstructProps {
    cullBackface?: boolean
    inputRegion?: Box
    outputRegion?: Box
    paintBorders?: boolean
}
class Crop {
    /* Properties of ClutterGst-3.0.ClutterGst.Crop */
    cullBackface: boolean
    inputRegion: Box
    outputRegion: Box
    paintBorders: boolean
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paintFrame: boolean
    paintOverlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    getFrame(): Frame
    getOverlays(): Overlays
    getPlayer(): Player
    getSink(): VideoSink
    setFrame(frame: Frame): void
    setPlayer(player: Player): void
    setSink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    getPreferredSize(): { returnType: boolean, width: number, height: number }
    invalidate(): void
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    connect(sigName: "size-change", callback: (($obj: Crop, width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    on(sigName: "attached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "attached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "attached", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    on(sigName: "detached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "detached", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "detached", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cull-backface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cull-backface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cull-backface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Crop_ConstructProps)
    _init (config?: Crop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Crop
    static $gtype: GObject.Type
}
export interface Playback_ConstructProps extends GObject.Object_ConstructProps {
    audioStream?: number
    progress?: number
    seekFlags?: SeekFlags
    subtitleFontName?: string
    subtitleTrack?: number
    subtitleUri?: string
    uri?: string
    userAgent?: string
    audioVolume?: number
    playing?: boolean
}
class Playback {
    /* Properties of ClutterGst-3.0.ClutterGst.Playback */
    audioStream: number
    readonly audioStreams: object
    readonly bufferFill: number
    readonly canSeek: boolean
    readonly duration: number
    readonly inSeek: boolean
    progress: number
    seekFlags: SeekFlags
    subtitleFontName: string
    subtitleTrack: number
    readonly subtitleTracks: object
    subtitleUri: string
    uri: string
    userAgent: string
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    audioVolume: number
    readonly idle: boolean
    playing: boolean
    /* Fields of ClutterGst-3.0.ClutterGst.Playback */
    parent: GObject.Object
    priv: PlaybackPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Playback */
    getAudioStream(): number
    getAudioStreams(): string[]
    getBufferDuration(): number
    getBufferFill(): number
    getBufferSize(): number
    getBufferingMode(): BufferingMode
    getDuration(): number
    getInSeek(): boolean
    getPosition(): number
    getProgress(): number
    getSeekFlags(): SeekFlags
    getSubtitleFontName(): string
    getSubtitleTrack(): number
    getSubtitleTracks(): string[]
    getSubtitleUri(): string
    getUri(): string
    getUserAgent(): string
    isLiveMedia(): boolean
    setAudioStream(index: number): void
    setBufferDuration(duration: number): void
    setBufferSize(size: number): void
    setBufferingMode(mode: BufferingMode): void
    setFilename(filename: string): void
    setProgress(progress: number): void
    setSeekFlags(flags: SeekFlags): void
    setSubtitleFontName(fontName: string): void
    setSubtitleTrack(index: number): void
    setSubtitleUri(uri: string): void
    setUri(uri: string): void
    setUserAgent(userAgent: string): void
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
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    getAudioVolume(): number
    getFrame(): Frame
    getIdle(): boolean
    getPipeline(): Gst.Element
    getPlaying(): boolean
    getVideoSink(): VideoSink
    setAudioVolume(volume: number): void
    setPlaying(playing: boolean): void
    /* Signals of ClutterGst-3.0.ClutterGst.Playback */
    connect(sigName: "should-buffer", callback: (($obj: Playback, query: Gst.Query) => boolean)): number
    on(sigName: "should-buffer", callback: (query: Gst.Query) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "should-buffer", callback: (query: Gst.Query) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "should-buffer", callback: (query: Gst.Query) => void): NodeJS.EventEmitter
    emit(sigName: "should-buffer", query: Gst.Query): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    connect(sigName: "eos", callback: (($obj: Playback) => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: Playback, error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "new-frame", callback: (($obj: Playback, frame: Frame) => void)): number
    on(sigName: "new-frame", callback: (frame: Frame) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-frame", callback: (frame: Frame) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-frame", callback: (frame: Frame) => void): NodeJS.EventEmitter
    emit(sigName: "new-frame", frame: Frame): void
    connect(sigName: "ready", callback: (($obj: Playback) => void)): number
    on(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "ready"): void
    connect(sigName: "size-change", callback: (($obj: Playback, width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    connect(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Playback_ConstructProps)
    _init (config?: Playback_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Playback
    static $gtype: GObject.Type
}
export interface VideoSink_ConstructProps extends GstVideo.VideoSink_ConstructProps {
    updatePriority?: number
}
class VideoSink {
    /* Properties of ClutterGst-3.0.ClutterGst.VideoSink */
    updatePriority: number
    /* Properties of GstVideo-1.0.GstVideo.VideoSink */
    showPrerollFrame: boolean
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enableLastSample: boolean
    readonly lastSample: Gst.Sample
    maxBitrate: number
    maxLateness: number
    processingDeadline: number
    qos: boolean
    renderDelay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttleTime: number
    tsOffset: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstVideo-1.0.GstVideo.VideoSink */
    element: GstBase.BaseSink
    width: number
    height: number
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    sinkpad: Gst.Pad
    padMode: Gst.PadMode
    offset: number
    canActivatePull: boolean
    canActivatePush: boolean
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    eos: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.VideoSink */
    getFrame(): Frame
    getOverlays(): Overlays
    isReady(): boolean
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    getBlocksize(): number
    getDropOutOfSegment(): boolean
    getLastSample(): Gst.Sample | null
    getLatency(): Gst.ClockTime
    getMaxBitrate(): number
    getMaxLateness(): number
    getProcessingDeadline(): Gst.ClockTime
    getRenderDelay(): Gst.ClockTime
    getStats(): Gst.Structure
    getSync(): boolean
    getThrottleTime(): number
    getTsOffset(): Gst.ClockTimeDiff
    isAsyncEnabled(): boolean
    isLastSampleEnabled(): boolean
    isQosEnabled(): boolean
    queryLatency(): { returnType: boolean, live: boolean | null, upstreamLive: boolean | null, minLatency: Gst.ClockTime | null, maxLatency: Gst.ClockTime | null }
    setAsyncEnabled(enabled: boolean): void
    setBlocksize(blocksize: number): void
    setDropOutOfSegment(dropOutOfSegment: boolean): void
    setLastSampleEnabled(enabled: boolean): void
    setMaxBitrate(maxBitrate: number): void
    setMaxLateness(maxLateness: number): void
    setProcessingDeadline(processingDeadline: Gst.ClockTime): void
    setQosEnabled(enabled: boolean): void
    setRenderDelay(delay: Gst.ClockTime): void
    setSync(sync: boolean): void
    setThrottleTime(throttle: number): void
    setTsOffset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): { returnType: Gst.FlowReturn, jitter: Gst.ClockTimeDiff | null }
    waitClock(time: Gst.ClockTime): { returnType: Gst.ClockReturn, jitter: Gst.ClockTimeDiff | null }
    waitPreroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Methods of GstVideo-1.0.GstVideo.ColorBalance */
    getBalanceType(): GstVideo.ColorBalanceType
    getValue(channel: GstVideo.ColorBalanceChannel): number
    listChannels(): GstVideo.ColorBalanceChannel[]
    setValue(channel: GstVideo.ColorBalanceChannel, value: number): void
    valueChanged(channel: GstVideo.ColorBalanceChannel, value: number): void
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    sendCommand(command: GstVideo.NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    sendKeyEvent(event: string, key: string): void
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    sendMouseScrollEvent(x: number, y: number, deltaX: number, deltaY: number): void
    /* Signals of ClutterGst-3.0.ClutterGst.VideoSink */
    connect(sigName: "new-frame", callback: (($obj: VideoSink) => void)): number
    on(sigName: "new-frame", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-frame", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-frame", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-frame"): void
    connect(sigName: "new-overlays", callback: (($obj: VideoSink) => void)): number
    on(sigName: "new-overlays", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-overlays", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-overlays", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-overlays"): void
    connect(sigName: "pipeline-ready", callback: (($obj: VideoSink) => void)): number
    on(sigName: "pipeline-ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pipeline-ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pipeline-ready", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pipeline-ready"): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoSink, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoSink, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoSink, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GstVideo-1.0.GstVideo.ColorBalance */
    connect(sigName: "value-changed", callback: (($obj: VideoSink, channel: GstVideo.ColorBalanceChannel, value: number) => void)): number
    on(sigName: "value-changed", callback: (channel: GstVideo.ColorBalanceChannel, value: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (channel: GstVideo.ColorBalanceChannel, value: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (channel: GstVideo.ColorBalanceChannel, value: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", channel: GstVideo.ColorBalanceChannel, value: number): void
    connect(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoSink
    static eventGetType(event: Gst.Event): GstVideo.NavigationEventType
    static eventParseCommand(event: Gst.Event): { returnType: boolean, command: GstVideo.NavigationCommand | null }
    static eventParseKeyEvent(event: Gst.Event): { returnType: boolean, key: string | null }
    static eventParseMouseButtonEvent(event: Gst.Event): { returnType: boolean, button: number | null, x: number | null, y: number | null }
    static eventParseMouseMoveEvent(event: Gst.Event): { returnType: boolean, x: number | null, y: number | null }
    static eventParseMouseScrollEvent(event: Gst.Event): { returnType: boolean, x: number | null, y: number | null, deltaX: number | null, deltaY: number | null }
    static messageGetType(message: Gst.Message): GstVideo.NavigationMessageType
    static messageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
    static messageNewCommandsChanged(src: Gst.Object): Gst.Message
    static messageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
    static messageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
    static messageParseAnglesChanged(message: Gst.Message): { returnType: boolean, curAngle: number | null, nAngles: number | null }
    static messageParseEvent(message: Gst.Message): { returnType: boolean, event: Gst.Event | null }
    static messageParseMouseOver(message: Gst.Message): { returnType: boolean, active: boolean | null }
    static queryGetType(query: Gst.Query): GstVideo.NavigationQueryType
    static queryNewAngles(): Gst.Query
    static queryNewCommands(): Gst.Query
    static queryParseAngles(query: Gst.Query): { returnType: boolean, curAngle: number | null, nAngles: number | null }
    static queryParseCommandsLength(query: Gst.Query): { returnType: boolean, nCmds: number | null }
    static queryParseCommandsNth(query: Gst.Query, nth: number): { returnType: boolean, cmd: GstVideo.NavigationCommand | null }
    static querySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
    static querySetCommandsv(query: Gst.Query, cmds: GstVideo.NavigationCommand[]): void
    static $gtype: GObject.Type
}
abstract class AspectratioClass {
    static name: string
}
class AspectratioPrivate {
    static name: string
}
class Box {
    /* Fields of ClutterGst-3.0.ClutterGst.Box */
    x1: number
    y1: number
    x2: number
    y2: number
    /* Methods of ClutterGst-3.0.ClutterGst.Box */
    getHeight(): number
    getWidth(): number
    static name: string
}
abstract class CameraClass {
    /* Fields of ClutterGst-3.0.ClutterGst.CameraClass */
    readyForCapture: (self: Camera, ready: boolean) => void
    photoSaved: (self: Camera) => void
    photoTaken: (self: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    videoSaved: (self: Camera) => void
    static name: string
}
abstract class CameraDeviceClass {
    /* Fields of ClutterGst-3.0.ClutterGst.CameraDeviceClass */
    captureResolutionChanged: (device: CameraDevice, width: number, height: number) => void
    static name: string
}
class CameraDevicePrivate {
    static name: string
}
abstract class CameraManagerClass {
    static name: string
}
class CameraManagerPrivate {
    static name: string
}
class CameraPrivate {
    static name: string
}
abstract class ContentClass {
    /* Fields of ClutterGst-3.0.ClutterGst.ContentClass */
    hasPaintingContent: (self: Content) => boolean
    static name: string
}
class ContentPrivate {
    static name: string
}
abstract class CropClass {
    static name: string
}
class CropPrivate {
    static name: string
}
class Frame {
    /* Fields of ClutterGst-3.0.ClutterGst.Frame */
    resolution: VideoResolution
    static name: string
}
class Overlay {
    /* Fields of ClutterGst-3.0.ClutterGst.Overlay */
    position: Box
    static name: string
}
class Overlays {
    /* Fields of ClutterGst-3.0.ClutterGst.Overlays */
    overlays: object[]
    static name: string
}
abstract class PlaybackClass {
    /* Fields of ClutterGst-3.0.ClutterGst.PlaybackClass */
    shouldBuffer: (self: Playback, query: Gst.Query) => boolean
    static name: string
}
class PlaybackPrivate {
    static name: string
}
abstract class PlayerIface {
    /* Fields of ClutterGst-3.0.ClutterGst.PlayerIface */
    getFrame: (self: Player) => Frame
    getPipeline: (self: Player) => Gst.Element
    getVideoSink: (self: Player) => VideoSink
    getIdle: (self: Player) => boolean
    getAudioVolume: (self: Player) => number
    setAudioVolume: (self: Player, volume: number) => void
    getPlaying: (self: Player) => boolean
    setPlaying: (self: Player, playing: boolean) => void
    newFrame: (self: Player, frame: Frame) => void
    ready: (self: Player) => void
    eos: (self: Player) => void
    error: (self: Player, error: GLib.Error) => void
    sizeChange: (self: Player, width: number, height: number) => void
    static name: string
}
class PlayerIfacePrivate {
    static name: string
}
class VideoResolution {
    /* Fields of ClutterGst-3.0.ClutterGst.VideoResolution */
    width: number
    height: number
    parN: number
    parD: number
    static name: string
}
abstract class VideoSinkClass {
    /* Fields of ClutterGst-3.0.ClutterGst.VideoSinkClass */
    newFrame: (sink: VideoSink) => void
    pipelineReady: (sink: VideoSink) => void
    newOverlays: (sink: VideoSink) => void
    static name: string
}
class VideoSinkPrivate {
    static name: string
}
}
export default ClutterGst