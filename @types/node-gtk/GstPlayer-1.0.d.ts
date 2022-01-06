/**
 * GstPlayer-1.0
 */

import "node"
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstTag } from './GstTag-1.0';
import type { GstPbutils } from './GstPbutils-1.0';
import type { GstAudio } from './GstAudio-1.0';

declare namespace GstPlayer {

enum PlayerColorBalanceType {
    HUE,
    BRIGHTNESS,
    SATURATION,
    CONTRAST,
}
enum PlayerError {
    FAILED,
}
enum PlayerSnapshotFormat {
    RAW_NATIVE,
    RAW_XRGB,
    RAW_BGRX,
    JPG,
    PNG,
}
enum PlayerState {
    STOPPED,
    BUFFERING,
    PAUSED,
    PLAYING,
}
function playerColorBalanceTypeGetName(type: PlayerColorBalanceType): string
function playerErrorGetName(error: PlayerError): string
function playerErrorQuark(): GLib.Quark
function playerStateGetName(state: PlayerState): string
interface PlayerSignalDispatcherFunc {
    (data?: object | null): void
}
class PlayerSignalDispatcher {
    static name: string
}
class PlayerVideoRenderer {
    static name: string
}
export interface Player_ConstructProps extends Gst.Object_ConstructProps {
    audioVideoOffset?: number
    mute?: boolean
    rate?: number
    signalDispatcher?: PlayerSignalDispatcher
    subtitleVideoOffset?: number
    suburi?: string
    uri?: string
    videoMultiviewFlags?: GstVideo.VideoMultiviewFlags
    videoMultiviewMode?: GstVideo.VideoMultiviewFramePacking
    volume?: number
}
class Player {
    /* Properties of GstPlayer-1.0.GstPlayer.Player */
    audioVideoOffset: number
    readonly currentAudioTrack: PlayerAudioInfo
    readonly currentSubtitleTrack: PlayerSubtitleInfo
    readonly currentVideoTrack: PlayerVideoInfo
    readonly duration: number
    readonly mediaInfo: PlayerMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    subtitleVideoOffset: number
    suburi: string
    uri: string
    videoMultiviewFlags: GstVideo.VideoMultiviewFlags
    videoMultiviewMode: GstVideo.VideoMultiviewFramePacking
    readonly videoRenderer: PlayerVideoRenderer
    volume: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.Player */
    getAudioVideoOffset(): number
    getColorBalance(type: PlayerColorBalanceType): number
    getConfig(): Gst.Structure
    getCurrentAudioTrack(): PlayerAudioInfo | null
    getCurrentSubtitleTrack(): PlayerSubtitleInfo | null
    getCurrentVideoTrack(): PlayerVideoInfo | null
    getCurrentVisualization(): string | null
    getDuration(): Gst.ClockTime
    getMediaInfo(): PlayerMediaInfo | null
    getMultiviewFlags(): GstVideo.VideoMultiviewFlags
    getMultiviewMode(): GstVideo.VideoMultiviewFramePacking
    getMute(): boolean
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getRate(): number
    getSubtitleUri(): string | null
    getSubtitleVideoOffset(): number
    getUri(): string | null
    getVideoSnapshot(format: PlayerSnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null
    getVolume(): number
    hasColorBalance(): boolean
    pause(): void
    play(): void
    seek(position: Gst.ClockTime): void
    setAudioTrack(streamIndex: number): boolean
    setAudioTrackEnabled(enabled: boolean): void
    setAudioVideoOffset(offset: number): void
    setColorBalance(type: PlayerColorBalanceType, value: number): void
    setConfig(config: Gst.Structure): boolean
    setMultiviewFlags(flags: GstVideo.VideoMultiviewFlags): void
    setMultiviewMode(mode: GstVideo.VideoMultiviewFramePacking): void
    setMute(val: boolean): void
    setRate(rate: number): void
    setSubtitleTrack(streamIndex: number): boolean
    setSubtitleTrackEnabled(enabled: boolean): void
    setSubtitleUri(uri?: string | null): void
    setSubtitleVideoOffset(offset: number): void
    setUri(uri?: string | null): void
    setVideoTrack(streamIndex: number): boolean
    setVideoTrackEnabled(enabled: boolean): void
    setVisualization(name?: string | null): boolean
    setVisualizationEnabled(enabled: boolean): void
    setVolume(val: number): void
    stop(): void
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
    /* Signals of GstPlayer-1.0.GstPlayer.Player */
    connect(sigName: "buffering", callback: (($obj: Player, object: number) => void)): number
    on(sigName: "buffering", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffering", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffering", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "buffering", object: number): void
    connect(sigName: "duration-changed", callback: (($obj: Player, object: number) => void)): number
    on(sigName: "duration-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "duration-changed", object: number): void
    connect(sigName: "end-of-stream", callback: (($obj: Player) => void)): number
    on(sigName: "end-of-stream", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-of-stream"): void
    connect(sigName: "error", callback: (($obj: Player, object: GLib.Error) => void)): number
    on(sigName: "error", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", object: GLib.Error): void
    connect(sigName: "media-info-updated", callback: (($obj: Player, object: PlayerMediaInfo) => void)): number
    on(sigName: "media-info-updated", callback: (object: PlayerMediaInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-info-updated", callback: (object: PlayerMediaInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-info-updated", callback: (object: PlayerMediaInfo) => void): NodeJS.EventEmitter
    emit(sigName: "media-info-updated", object: PlayerMediaInfo): void
    connect(sigName: "mute-changed", callback: (($obj: Player) => void)): number
    on(sigName: "mute-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mute-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mute-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "mute-changed"): void
    connect(sigName: "position-updated", callback: (($obj: Player, object: number) => void)): number
    on(sigName: "position-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "position-updated", object: number): void
    connect(sigName: "seek-done", callback: (($obj: Player, object: number) => void)): number
    on(sigName: "seek-done", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seek-done", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seek-done", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "seek-done", object: number): void
    connect(sigName: "state-changed", callback: (($obj: Player, object: PlayerState) => void)): number
    on(sigName: "state-changed", callback: (object: PlayerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (object: PlayerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (object: PlayerState) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", object: PlayerState): void
    connect(sigName: "uri-loaded", callback: (($obj: Player, object: string) => void)): number
    on(sigName: "uri-loaded", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "uri-loaded", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "uri-loaded", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "uri-loaded", object: string): void
    connect(sigName: "video-dimensions-changed", callback: (($obj: Player, object: number, p0: number) => void)): number
    on(sigName: "video-dimensions-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-dimensions-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-dimensions-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "video-dimensions-changed", object: number, p0: number): void
    connect(sigName: "volume-changed", callback: (($obj: Player) => void)): number
    on(sigName: "volume-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "volume-changed"): void
    connect(sigName: "warning", callback: (($obj: Player, object: GLib.Error) => void)): number
    on(sigName: "warning", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "warning", object: GLib.Error): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Player, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-audio-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-audio-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-video-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-video-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-video-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-video-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-video-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-info", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-info", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pipeline", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suburi", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suburi", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suburi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suburi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suburi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-multiview-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-multiview-mode", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-mode", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-renderer", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-renderer", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Player_ConstructProps)
    _init (config?: Player_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(videoRenderer?: PlayerVideoRenderer | null, signalDispatcher?: PlayerSignalDispatcher | null): Player
    static configGetPositionUpdateInterval(config: Gst.Structure): number
    static configGetSeekAccurate(config: Gst.Structure): boolean
    static configGetUserAgent(config: Gst.Structure): string | null
    static configSetPositionUpdateInterval(config: Gst.Structure, interval: number): void
    static configSetSeekAccurate(config: Gst.Structure, accurate: boolean): void
    static configSetUserAgent(config: Gst.Structure, agent?: string | null): void
    static getAudioStreams(info: PlayerMediaInfo): PlayerAudioInfo[]
    static getSubtitleStreams(info: PlayerMediaInfo): PlayerSubtitleInfo[]
    static getVideoStreams(info: PlayerMediaInfo): PlayerVideoInfo[]
    static visualizationsFree(viss: PlayerVisualization): void
    static visualizationsGet(): PlayerVisualization[]
    static $gtype: GObject.Type
}
export interface PlayerAudioInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}
class PlayerAudioInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerAudioInfo */
    getBitrate(): number
    getChannels(): number
    getLanguage(): string | null
    getMaxBitrate(): number
    getSampleRate(): number
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    getCaps(): Gst.Caps | null
    getCodec(): string | null
    getIndex(): number
    getStreamType(): string
    getTags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerAudioInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayerAudioInfo_ConstructProps)
    _init (config?: PlayerAudioInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerGMainContextSignalDispatcher_ConstructProps extends GObject.Object_ConstructProps {
    applicationContext?: GLib.MainContext
}
class PlayerGMainContextSignalDispatcher {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: PlayerGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayerGMainContextSignalDispatcher_ConstructProps)
    _init (config?: PlayerGMainContextSignalDispatcher_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerMediaInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class PlayerMediaInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerMediaInfo */
    getAudioStreams(): PlayerAudioInfo[]
    getContainerFormat(): string | null
    getDuration(): Gst.ClockTime
    getImageSample(): Gst.Sample | null
    getNumberOfAudioStreams(): number
    getNumberOfStreams(): number
    getNumberOfSubtitleStreams(): number
    getNumberOfVideoStreams(): number
    getStreamList(): PlayerStreamInfo[]
    getSubtitleStreams(): PlayerSubtitleInfo[]
    getTags(): Gst.TagList | null
    getTitle(): string | null
    getUri(): string
    getVideoStreams(): PlayerVideoInfo[]
    isLive(): boolean
    isSeekable(): boolean
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
    connect(sigName: "notify", callback: (($obj: PlayerMediaInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayerMediaInfo_ConstructProps)
    _init (config?: PlayerMediaInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class PlayerStreamInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    getCaps(): Gst.Caps | null
    getCodec(): string | null
    getIndex(): number
    getStreamType(): string
    getTags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerStreamInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayerStreamInfo_ConstructProps)
    _init (config?: PlayerStreamInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerSubtitleInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}
class PlayerSubtitleInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo */
    getLanguage(): string | null
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    getCaps(): Gst.Caps | null
    getCodec(): string | null
    getIndex(): number
    getStreamType(): string
    getTags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerSubtitleInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayerSubtitleInfo_ConstructProps)
    _init (config?: PlayerSubtitleInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerVideoInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}
class PlayerVideoInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerVideoInfo */
    getBitrate(): number
    getFramerate(): { fpsN: number, fpsD: number }
    getHeight(): number
    getMaxBitrate(): number
    getPixelAspectRatio(): { parN: number, parD: number }
    getWidth(): number
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    getCaps(): Gst.Caps | null
    getCodec(): string | null
    getIndex(): number
    getStreamType(): string
    getTags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerVideoInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayerVideoInfo_ConstructProps)
    _init (config?: PlayerVideoInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerVideoOverlayVideoRenderer_ConstructProps extends GObject.Object_ConstructProps {
    videoSink?: Gst.Element
    windowHandle?: object
}
class PlayerVideoOverlayVideoRenderer {
    /* Properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer */
    videoSink: Gst.Element
    windowHandle: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer */
    expose(): void
    getRenderRectangle(): { x: number | null, y: number | null, width: number | null, height: number | null }
    getWindowHandle(): object | null
    setRenderRectangle(x: number, y: number, width: number, height: number): void
    setWindowHandle(windowHandle?: object | null): void
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
    connect(sigName: "notify", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::video-sink", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-handle", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-handle", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlayerVideoOverlayVideoRenderer_ConstructProps)
    _init (config?: PlayerVideoOverlayVideoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithSink(windowHandle: object | null, videoSink: Gst.Element): PlayerVideoRenderer
    static $gtype: GObject.Type
}
abstract class PlayerAudioInfoClass {
    static name: string
}
abstract class PlayerClass {
    static name: string
}
abstract class PlayerGMainContextSignalDispatcherClass {
    static name: string
}
abstract class PlayerMediaInfoClass {
    static name: string
}
abstract class PlayerSignalDispatcherInterface {
    /* Fields of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcherInterface */
    parentIface: GObject.TypeInterface
    dispatch: (self: PlayerSignalDispatcher, player: Player, emitter: PlayerSignalDispatcherFunc) => void
    static name: string
}
abstract class PlayerStreamInfoClass {
    static name: string
}
abstract class PlayerSubtitleInfoClass {
    static name: string
}
abstract class PlayerVideoInfoClass {
    static name: string
}
abstract class PlayerVideoOverlayVideoRendererClass {
    static name: string
}
abstract class PlayerVideoRendererInterface {
    /* Fields of GstPlayer-1.0.GstPlayer.PlayerVideoRendererInterface */
    parentIface: GObject.TypeInterface
    static name: string
}
class PlayerVisualization {
    /* Fields of GstPlayer-1.0.GstPlayer.PlayerVisualization */
    name: string
    description: string
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerVisualization */
    copy(): PlayerVisualization
    free(): void
    static name: string
}
}
export default GstPlayer