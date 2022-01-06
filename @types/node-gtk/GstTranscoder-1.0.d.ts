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

declare namespace GstTranscoder {

enum TranscoderError {
    FAILED,
}
enum TranscoderMessage {
    POSITION_UPDATED,
    DURATION_CHANGED,
    STATE_CHANGED,
    DONE,
    ERROR,
    WARNING,
}
enum TranscoderState {
    STOPPED,
    PAUSED,
    PLAYING,
}
function transcoderErrorGetName(error: TranscoderError): string
function transcoderErrorQuark(): GLib.Quark
function transcoderMessageGetName(message: TranscoderMessage): string
function transcoderMessageParseDuration(msg: Gst.Message): { duration: Gst.ClockTime }
function transcoderMessageParseError(msg: Gst.Message): { error: GLib.Error, details: Gst.Structure }
function transcoderMessageParsePosition(msg: Gst.Message): { position: Gst.ClockTime }
function transcoderMessageParseState(msg: Gst.Message): { state: TranscoderState }
function transcoderMessageParseWarning(msg: Gst.Message): { error: GLib.Error, details: Gst.Structure }
function transcoderStateGetName(state: TranscoderState): string
export interface Transcoder_ConstructProps extends Gst.Object_ConstructProps {
    avoidReencoding?: boolean
    destUri?: string
    positionUpdateInterval?: number
    profile?: GstPbutils.EncodingProfile
    srcUri?: string
}
class Transcoder {
    /* Properties of GstTranscoder-1.0.GstTranscoder.Transcoder */
    avoidReencoding: boolean
    readonly duration: number
    readonly pipeline: Gst.Element
    readonly position: number
    positionUpdateInterval: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstTranscoder-1.0.GstTranscoder.Transcoder */
    getAvoidReencoding(): boolean
    getDestUri(): string
    getDuration(): Gst.ClockTime
    getMessageBus(): Gst.Bus
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getPositionUpdateInterval(): number
    getSignalAdapter(context?: GLib.MainContext | null): TranscoderSignalAdapter | null
    getSourceUri(): string
    getSyncSignalAdapter(): TranscoderSignalAdapter
    run(): boolean
    runAsync(): void
    setAvoidReencoding(avoidReencoding: boolean): void
    setCpuUsage(cpuUsage: number): void
    setPositionUpdateInterval(interval: number): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transcoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    static newFull(sourceUri: string, destUri: string, profile: GstPbutils.EncodingProfile): Transcoder
    static isTranscoderMessage(msg: Gst.Message): boolean
    static $gtype: GObject.Type
}
export interface TranscoderSignalAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
class TranscoderSignalAdapter {
    /* Properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter */
    readonly transcoder: Transcoder
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter */
    getTranscoder(): Transcoder | null
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
    /* Signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter */
    connect(sigName: "done", callback: (($obj: TranscoderSignalAdapter) => void)): number
    on(sigName: "done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "done"): void
    connect(sigName: "duration-changed", callback: (($obj: TranscoderSignalAdapter, object: number) => void)): number
    on(sigName: "duration-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "duration-changed", object: number): void
    connect(sigName: "error", callback: (($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    on(sigName: "error", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (object: GLib.Error, p0: Gst.Structure) => void): NodeJS.EventEmitter
    emit(sigName: "error", object: GLib.Error, p0: Gst.Structure): void
    connect(sigName: "position-updated", callback: (($obj: TranscoderSignalAdapter, object: number) => void)): number
    on(sigName: "position-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "position-updated", object: number): void
    connect(sigName: "state-changed", callback: (($obj: TranscoderSignalAdapter, object: TranscoderState) => void)): number
    on(sigName: "state-changed", callback: (object: TranscoderState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (object: TranscoderState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (object: TranscoderState) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", object: TranscoderState): void
    connect(sigName: "warning", callback: (($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    on(sigName: "warning", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: (object: GLib.Error, p0: Gst.Structure) => void): NodeJS.EventEmitter
    emit(sigName: "warning", object: GLib.Error, p0: Gst.Structure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::transcoder", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transcoder", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transcoder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transcoder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transcoder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TranscoderSignalAdapter_ConstructProps)
    _init (config?: TranscoderSignalAdapter_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class TranscoderClass {
    /* Fields of GstTranscoder-1.0.GstTranscoder.TranscoderClass */
    parentClass: Gst.ObjectClass
    static name: string
}
abstract class TranscoderSignalAdapterClass {
    /* Fields of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default GstTranscoder