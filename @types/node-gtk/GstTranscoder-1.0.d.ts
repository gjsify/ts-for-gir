/**
 * GstTranscoder-1.0
 */

import "node"
import type { GstPbutils } from './GstPbutils-1.0';
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstAudio } from './GstAudio-1.0';

export declare namespace GstTranscoder {

export enum TranscoderError {
    FAILED,
}
export function transcoderErrorGetName(error: TranscoderError): string
export function transcoderErrorQuark(): GLib.Quark
export class TranscoderSignalDispatcher {
    /* Virtual methods of GstTranscoder.TranscoderSignalDispatcher */
    vfuncDispatch(transcoder: Transcoder, emitter: object | null, data: object | null, destroy: GLib.DestroyNotify): void
    static name: string
}
export interface Transcoder_ConstructProps extends Gst.Object_ConstructProps {
    avoidReencoding?: boolean
    destUri?: string
    positionUpdateInterval?: number
    profile?: GstPbutils.EncodingProfile
    signalDispatcher?: TranscoderSignalDispatcher
    srcUri?: string
}
export class Transcoder {
    /* Properties of GstTranscoder.Transcoder */
    avoidReencoding: boolean
    readonly duration: number
    readonly pipeline: Gst.Element
    readonly position: number
    positionUpdateInterval: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstTranscoder.Transcoder */
    getAvoidReencoding(): boolean
    getDestUri(): string
    getDuration(): Gst.ClockTime
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getPositionUpdateInterval(): number
    getSourceUri(): string
    run(): boolean
    runAsync(): void
    setAvoidReencoding(avoidReencoding: boolean): void
    setCpuUsage(cpuUsage: number): void
    setPositionUpdateInterval(interval: number): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstTranscoder.Transcoder */
    connect(sigName: "done", callback: (($obj: Transcoder) => void)): number
    connect_after(sigName: "done", callback: (($obj: Transcoder) => void)): number
    emit(sigName: "done"): void
    on(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "duration-changed", callback: (($obj: Transcoder, object: number) => void)): number
    connect_after(sigName: "duration-changed", callback: (($obj: Transcoder, object: number) => void)): number
    emit(sigName: "duration-changed", object: number): void
    on(sigName: "duration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "error", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "error", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "error", object: GLib.Error, p0: Gst.Structure): void
    on(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "position-updated", callback: (($obj: Transcoder, object: number) => void)): number
    connect_after(sigName: "position-updated", callback: (($obj: Transcoder, object: number) => void)): number
    emit(sigName: "position-updated", object: number): void
    on(sigName: "position-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "warning", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "warning", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "warning", object: GLib.Error, p0: Gst.Structure): void
    on(sigName: "warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transcoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Transcoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::avoid-reencoding", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avoid-reencoding", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avoid-reencoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avoid-reencoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avoid-reencoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pipeline", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position-update-interval", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-update-interval", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Transcoder_ConstructProps)
    _init (config?: Transcoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceUri: string, destUri: string, encodingProfile: string): Transcoder
    static newFull(sourceUri: string, destUri: string, profile: GstPbutils.EncodingProfile, signalDispatcher: TranscoderSignalDispatcher): Transcoder
    static $gtype: GObject.Type
}
export interface TranscoderGMainContextSignalDispatcher_ConstructProps extends GObject.Object_ConstructProps {
    applicationContext?: GLib.MainContext
}
export class TranscoderGMainContextSignalDispatcher {
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
    /* Virtual methods of GstTranscoder.TranscoderGMainContextSignalDispatcher */
    vfuncDispatch(transcoder: Transcoder, emitter: object | null, data: object | null, destroy: GLib.DestroyNotify): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TranscoderGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TranscoderGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TranscoderGMainContextSignalDispatcher_ConstructProps)
    _init (config?: TranscoderGMainContextSignalDispatcher_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class TranscoderClass {
    static name: string
}
export abstract class TranscoderGMainContextSignalDispatcherClass {
    static name: string
}
export class TranscoderPrivate {
    static name: string
}
export abstract class TranscoderSignalDispatcherInterface {
    /* Fields of GstTranscoder.TranscoderSignalDispatcherInterface */
    parentIface: GObject.TypeInterface
    dispatch: (self: TranscoderSignalDispatcher, transcoder: Transcoder, emitter: object | null, data: object | null, destroy: GLib.DestroyNotify) => void
    static name: string
}
}