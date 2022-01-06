/**
 * GstPlay-1.0
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

export declare namespace GstPlay {

export enum PlayColorBalanceType {
    HUE,
    BRIGHTNESS,
    SATURATION,
    CONTRAST,
}
export enum PlayError {
    FAILED,
}
export enum PlayMessage {
    URI_LOADED,
    POSITION_UPDATED,
    DURATION_CHANGED,
    STATE_CHANGED,
    BUFFERING,
    END_OF_STREAM,
    ERROR,
    WARNING,
    VIDEO_DIMENSIONS_CHANGED,
    MEDIA_INFO_UPDATED,
    VOLUME_CHANGED,
    MUTE_CHANGED,
    SEEK_DONE,
}
export enum PlaySnapshotFormat {
    RAW_NATIVE,
    RAW_XRGB,
    RAW_BGRX,
    JPG,
    PNG,
}
export enum PlayState {
    STOPPED,
    BUFFERING,
    PAUSED,
    PLAYING,
}
export function playColorBalanceTypeGetName(type: PlayColorBalanceType): string
export function playErrorGetName(error: PlayError): string
export function playErrorQuark(): GLib.Quark
export function playMessageGetName(messageType: PlayMessage): string
export function playMessageParseBufferingPercent(msg: Gst.Message): { percent: number | null }
export function playMessageParseDurationUpdated(msg: Gst.Message): { duration: Gst.ClockTime | null }
export function playMessageParseError(msg: Gst.Message): { error: GLib.Error | null, details: Gst.Structure | null }
export function playMessageParseMediaInfoUpdated(msg: Gst.Message): { info: PlayMediaInfo | null }
export function playMessageParseMutedChanged(msg: Gst.Message): { muted: boolean | null }
export function playMessageParsePositionUpdated(msg: Gst.Message): { position: Gst.ClockTime | null }
export function playMessageParseStateChanged(msg: Gst.Message): { state: PlayState | null }
export function playMessageParseType(msg: Gst.Message): { type: PlayMessage | null }
export function playMessageParseVideoDimensionsChanged(msg: Gst.Message): { width: number | null, height: number | null }
export function playMessageParseVolumeChanged(msg: Gst.Message): { volume: number | null }
export function playMessageParseWarning(msg: Gst.Message): { error: GLib.Error | null, details: Gst.Structure | null }
export function playStateGetName(state: PlayState): string
export class PlayVideoRenderer {
    static name: string
}
export interface Play_ConstructProps extends Gst.Object_ConstructProps {
    audioVideoOffset?: number
    mute?: boolean
    rate?: number
    subtitleVideoOffset?: number
    suburi?: string
    uri?: string
    videoMultiviewFlags?: GstVideo.VideoMultiviewFlags
    videoMultiviewMode?: GstVideo.VideoMultiviewFramePacking
    videoRenderer?: PlayVideoRenderer
    volume?: number
}
export class Play {
    /* Properties of GstPlay-1.0.GstPlay.Play */
    audioVideoOffset: number
    readonly currentAudioTrack: PlayAudioInfo
    readonly currentSubtitleTrack: PlaySubtitleInfo
    readonly currentVideoTrack: PlayVideoInfo
    readonly duration: number
    readonly mediaInfo: PlayMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    subtitleVideoOffset: number
    suburi: string
    uri: string
    videoMultiviewFlags: GstVideo.VideoMultiviewFlags
    videoMultiviewMode: GstVideo.VideoMultiviewFramePacking
    videoRenderer: PlayVideoRenderer
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
    /* Methods of GstPlay-1.0.GstPlay.Play */
    getAudioVideoOffset(): number
    getColorBalance(type: PlayColorBalanceType): number
    getConfig(): Gst.Structure
    getCurrentAudioTrack(): PlayAudioInfo | null
    getCurrentSubtitleTrack(): PlaySubtitleInfo | null
    getCurrentVideoTrack(): PlayVideoInfo | null
    getCurrentVisualization(): string | null
    getDuration(): Gst.ClockTime
    getMediaInfo(): PlayMediaInfo | null
    getMessageBus(): Gst.Bus
    getMultiviewFlags(): GstVideo.VideoMultiviewFlags
    getMultiviewMode(): GstVideo.VideoMultiviewFramePacking
    getMute(): boolean
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getRate(): number
    getSubtitleUri(): string | null
    getSubtitleVideoOffset(): number
    getUri(): string | null
    getVideoSnapshot(format: PlaySnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null
    getVolume(): number
    hasColorBalance(): boolean
    pause(): void
    play(): void
    seek(position: Gst.ClockTime): void
    setAudioTrack(streamIndex: number): boolean
    setAudioTrackEnabled(enabled: boolean): void
    setAudioVideoOffset(offset: number): void
    setColorBalance(type: PlayColorBalanceType, value: number): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Play, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-audio-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-audio-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-subtitle-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subtitle-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-video-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-video-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-video-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-video-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-video-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-info", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-info", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pipeline", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suburi", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suburi", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suburi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suburi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suburi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-multiview-flags", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-flags", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-multiview-mode", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-mode", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-renderer", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-renderer", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Play_ConstructProps)
    _init (config?: Play_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(videoRenderer?: PlayVideoRenderer | null): Play
    static configGetPositionUpdateInterval(config: Gst.Structure): number
    static configGetSeekAccurate(config: Gst.Structure): boolean
    static configGetUserAgent(config: Gst.Structure): string | null
    static configSetPositionUpdateInterval(config: Gst.Structure, interval: number): void
    static configSetSeekAccurate(config: Gst.Structure, accurate: boolean): void
    static configSetUserAgent(config: Gst.Structure, agent?: string | null): void
    static getAudioStreams(info: PlayMediaInfo): PlayAudioInfo[]
    static getSubtitleStreams(info: PlayMediaInfo): PlaySubtitleInfo[]
    static getVideoStreams(info: PlayMediaInfo): PlayVideoInfo[]
    static isPlayMessage(msg: Gst.Message): boolean
    static visualizationsFree(viss: PlayVisualization): void
    static visualizationsGet(): PlayVisualization[]
    static $gtype: GObject.Type
}
export interface PlayAudioInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}
export class PlayAudioInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayAudioInfo */
    getBitrate(): number
    getChannels(): number
    getLanguage(): string | null
    getMaxBitrate(): number
    getSampleRate(): number
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
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
    connect(sigName: "notify", callback: (($obj: PlayAudioInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayAudioInfo_ConstructProps)
    _init (config?: PlayAudioInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayMediaInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class PlayMediaInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayMediaInfo */
    getAudioStreams(): PlayAudioInfo[]
    getContainerFormat(): string | null
    getDuration(): Gst.ClockTime
    getImageSample(): Gst.Sample | null
    getNumberOfAudioStreams(): number
    getNumberOfStreams(): number
    getNumberOfSubtitleStreams(): number
    getNumberOfVideoStreams(): number
    getStreamList(): PlayStreamInfo[]
    getSubtitleStreams(): PlaySubtitleInfo[]
    getTags(): Gst.TagList | null
    getTitle(): string | null
    getUri(): string
    getVideoStreams(): PlayVideoInfo[]
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
    connect(sigName: "notify", callback: (($obj: PlayMediaInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayMediaInfo_ConstructProps)
    _init (config?: PlayMediaInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaySignalAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class PlaySignalAdapter {
    /* Properties of GstPlay-1.0.GstPlay.PlaySignalAdapter */
    readonly play: Play
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlaySignalAdapter */
    getPlay(): Play
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
    /* Signals of GstPlay-1.0.GstPlay.PlaySignalAdapter */
    connect(sigName: "buffering", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    on(sigName: "buffering", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffering", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffering", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "buffering", object: number): void
    connect(sigName: "duration-changed", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    on(sigName: "duration-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "duration-changed", object: number): void
    connect(sigName: "end-of-stream", callback: (($obj: PlaySignalAdapter) => void)): number
    on(sigName: "end-of-stream", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-of-stream"): void
    connect(sigName: "error", callback: (($obj: PlaySignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    on(sigName: "error", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (object: GLib.Error, p0: Gst.Structure) => void): NodeJS.EventEmitter
    emit(sigName: "error", object: GLib.Error, p0: Gst.Structure): void
    connect(sigName: "media-info-updated", callback: (($obj: PlaySignalAdapter, object: PlayMediaInfo) => void)): number
    on(sigName: "media-info-updated", callback: (object: PlayMediaInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-info-updated", callback: (object: PlayMediaInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-info-updated", callback: (object: PlayMediaInfo) => void): NodeJS.EventEmitter
    emit(sigName: "media-info-updated", object: PlayMediaInfo): void
    connect(sigName: "mute-changed", callback: (($obj: PlaySignalAdapter, object: boolean) => void)): number
    on(sigName: "mute-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mute-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mute-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mute-changed", object: boolean): void
    connect(sigName: "position-updated", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    on(sigName: "position-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "position-updated", object: number): void
    connect(sigName: "seek-done", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    on(sigName: "seek-done", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seek-done", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seek-done", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "seek-done", object: number): void
    connect(sigName: "state-changed", callback: (($obj: PlaySignalAdapter, object: PlayState) => void)): number
    on(sigName: "state-changed", callback: (object: PlayState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (object: PlayState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (object: PlayState) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", object: PlayState): void
    connect(sigName: "uri-loaded", callback: (($obj: PlaySignalAdapter, object: string) => void)): number
    on(sigName: "uri-loaded", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "uri-loaded", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "uri-loaded", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "uri-loaded", object: string): void
    connect(sigName: "video-dimensions-changed", callback: (($obj: PlaySignalAdapter, object: number, p0: number) => void)): number
    on(sigName: "video-dimensions-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-dimensions-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-dimensions-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "video-dimensions-changed", object: number, p0: number): void
    connect(sigName: "volume-changed", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    on(sigName: "volume-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "volume-changed", object: number): void
    connect(sigName: "warning", callback: (($obj: PlaySignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    on(sigName: "warning", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: (object: GLib.Error, p0: Gst.Structure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: (object: GLib.Error, p0: Gst.Structure) => void): NodeJS.EventEmitter
    emit(sigName: "warning", object: GLib.Error, p0: Gst.Structure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::play", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlaySignalAdapter_ConstructProps)
    _init (config?: PlaySignalAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(play: Play): PlaySignalAdapter
    static newSyncEmit(play: Play): PlaySignalAdapter
    static newWithMainContext(play: Play, context: GLib.MainContext): PlaySignalAdapter
    static $gtype: GObject.Type
}
export interface PlayStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class PlayStreamInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
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
    connect(sigName: "notify", callback: (($obj: PlayStreamInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayStreamInfo_ConstructProps)
    _init (config?: PlayStreamInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaySubtitleInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}
export class PlaySubtitleInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlaySubtitleInfo */
    getLanguage(): string | null
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
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
    connect(sigName: "notify", callback: (($obj: PlaySubtitleInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlaySubtitleInfo_ConstructProps)
    _init (config?: PlaySubtitleInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayVideoInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}
export class PlayVideoInfo {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayVideoInfo */
    getBitrate(): number
    getFramerate(): { fpsN: number, fpsD: number }
    getHeight(): number
    getMaxBitrate(): number
    getPixelAspectRatio(): { parN: number, parD: number }
    getWidth(): number
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
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
    connect(sigName: "notify", callback: (($obj: PlayVideoInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayVideoInfo_ConstructProps)
    _init (config?: PlayVideoInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayVideoOverlayVideoRenderer_ConstructProps extends GObject.Object_ConstructProps {
    videoSink?: Gst.Element
    windowHandle?: object
}
export class PlayVideoOverlayVideoRenderer {
    /* Properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer */
    videoSink: Gst.Element
    windowHandle: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer */
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
    connect(sigName: "notify", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::video-sink", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-handle", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-handle", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlayVideoOverlayVideoRenderer_ConstructProps)
    _init (config?: PlayVideoOverlayVideoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithSink(windowHandle: object | null, videoSink: Gst.Element): PlayVideoRenderer
    static $gtype: GObject.Type
}
export abstract class PlayAudioInfoClass {
    static name: string
}
export abstract class PlayClass {
    static name: string
}
export abstract class PlayMediaInfoClass {
    static name: string
}
export abstract class PlaySignalAdapterClass {
    static name: string
}
export abstract class PlayStreamInfoClass {
    static name: string
}
export abstract class PlaySubtitleInfoClass {
    static name: string
}
export abstract class PlayVideoInfoClass {
    static name: string
}
export abstract class PlayVideoOverlayVideoRendererClass {
    static name: string
}
export abstract class PlayVideoRendererInterface {
    /* Fields of GstPlay-1.0.GstPlay.PlayVideoRendererInterface */
    parentIface: GObject.TypeInterface
    static name: string
}
export class PlayVisualization {
    /* Fields of GstPlay-1.0.GstPlay.PlayVisualization */
    name: string
    description: string
    /* Methods of GstPlay-1.0.GstPlay.PlayVisualization */
    copy(): PlayVisualization
    free(): void
    static name: string
}
}