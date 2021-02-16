/**
 * RygelRenderer-2.6
 */

/// <reference types="node" />
/// <reference path="RygelCore-2.6.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gee-0.8.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GUPnP-1.2.d.ts" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="GSSDP-1.2.d.ts" />
/// <reference path="GUPnPAV-1.0.d.ts" />

declare namespace RygelRenderer {

export interface MediaPlayer_ConstructProps extends GObject.Object_ConstructProps {
    playbackState?: string
    playbackSpeed?: string
    uri?: string
    volume?: number
    metadata?: string
    mimeType?: string
    contentFeatures?: string
    userAgent?: string
}
export class MediaPlayer {
    /* Properties of RygelRenderer.MediaPlayer */
    playbackState: string
    readonly allowedPlaybackSpeeds: string[]
    playbackSpeed: string
    uri: string
    volume: number
    readonly duration: number
    readonly size: number
    metadata: string
    mimeType: string
    readonly canSeek: boolean
    readonly canSeekBytes: boolean
    contentFeatures: string
    readonly position: number
    readonly bytePosition: number
    userAgent: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelRenderer.MediaPlayer */
    seek(time: number): boolean
    seekBytes(bytes: number): boolean
    getProtocols(): string[]
    getMimeTypes(): string[]
    playSpeedToDouble(speed: string): number
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getAllowedPlaybackSpeeds(): string[]
    getPlaybackSpeed(): string
    setPlaybackSpeed(value: string): void
    getUri(): string | null
    setUri(value?: string | null): void
    getVolume(): number
    setVolume(value: number): void
    getDuration(): number
    getSize(): number
    getMetadata(): string | null
    setMetadata(value?: string | null): void
    getMimeType(): string | null
    setMimeType(value?: string | null): void
    getCanSeek(): boolean
    getCanSeekBytes(): boolean
    getContentFeatures(): string | null
    setContentFeatures(value?: string | null): void
    getDurationAsStr(): string
    getPosition(): number
    getBytePosition(): number
    getPositionAsStr(): string
    getUserAgent(): string | null
    setUserAgent(value?: string | null): void
    getProtocolInfo(): string
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
    /* Virtual methods of RygelRenderer.MediaPlayer */
    vfuncSeek(time: number): boolean
    vfuncSeekBytes(bytes: number): boolean
    vfuncGetProtocols(): string[]
    vfuncGetMimeTypes(): string[]
    vfuncGetPlaybackState(): string
    vfuncSetPlaybackState(value: string): void
    vfuncGetAllowedPlaybackSpeeds(): string[]
    vfuncGetPlaybackSpeed(): string
    vfuncSetPlaybackSpeed(value: string): void
    vfuncGetUri(): string | null
    vfuncSetUri(value?: string | null): void
    vfuncGetVolume(): number
    vfuncSetVolume(value: number): void
    vfuncGetDuration(): number
    vfuncGetSize(): number
    vfuncGetMetadata(): string | null
    vfuncSetMetadata(value?: string | null): void
    vfuncGetMimeType(): string | null
    vfuncSetMimeType(value?: string | null): void
    vfuncGetCanSeek(): boolean
    vfuncGetCanSeekBytes(): boolean
    vfuncGetContentFeatures(): string | null
    vfuncSetContentFeatures(value?: string | null): void
    vfuncGetPosition(): number
    vfuncGetBytePosition(): number
    vfuncGetUserAgent(): string | null
    vfuncSetUserAgent(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-state", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allowed-playback-speeds", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-playback-speeds", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-speed", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-speed", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek-bytes", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek-bytes", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-features", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-features", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::byte-position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaPlayer_ConstructProps)
    _init (config?: MediaPlayer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerController_ConstructProps extends GObject.Object_ConstructProps {
    playbackState?: string
    nTracks?: number
    track?: number
    uri?: string
    metadata?: string
    trackUri?: string
    trackMetadata?: string
    nextUri?: string
    nextMetadata?: string
    playMode?: string
}
export class PlayerController {
    /* Properties of RygelRenderer.PlayerController */
    playbackState: string
    nTracks: number
    track: number
    uri: string
    metadata: string
    trackUri: string
    trackMetadata: string
    nextUri: string
    nextMetadata: string
    readonly currentTransportActions: string
    playMode: string
    readonly canPause: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelRenderer.PlayerController */
    next(): boolean
    previous(): boolean
    setSinglePlayUri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    setPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    setNextSinglePlayUri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    setNextPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    isPlayModeValid(playMode: string): boolean
    unescape(input: string): string
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getNTracks(): number
    setNTracks(value: number): void
    getTrack(): number
    setTrack(value: number): void
    getUri(): string
    setUri(value: string): void
    getMetadata(): string
    setMetadata(value: string): void
    getTrackUri(): string
    setTrackUri(value: string): void
    getTrackMetadata(): string
    setTrackMetadata(value: string): void
    getNextUri(): string
    setNextUri(value: string): void
    getNextMetadata(): string
    setNextMetadata(value: string): void
    getCurrentTransportActions(): string
    getPlayMode(): string
    setPlayMode(value: string): void
    getCanPause(): boolean
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
    /* Virtual methods of RygelRenderer.PlayerController */
    vfuncNext(): boolean
    vfuncPrevious(): boolean
    vfuncSetSinglePlayUri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    vfuncSetPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    vfuncSetNextSinglePlayUri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    vfuncSetNextPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    vfuncIsPlayModeValid(playMode: string): boolean
    vfuncGetPlaybackState(): string
    vfuncSetPlaybackState(value: string): void
    vfuncGetNTracks(): number
    vfuncSetNTracks(value: number): void
    vfuncGetTrack(): number
    vfuncSetTrack(value: number): void
    vfuncGetUri(): string
    vfuncSetUri(value: string): void
    vfuncGetMetadata(): string
    vfuncSetMetadata(value: string): void
    vfuncGetTrackUri(): string
    vfuncSetTrackUri(value: string): void
    vfuncGetTrackMetadata(): string
    vfuncSetTrackMetadata(value: string): void
    vfuncGetNextUri(): string
    vfuncSetNextUri(value: string): void
    vfuncGetNextMetadata(): string
    vfuncSetNextMetadata(value: string): void
    vfuncGetCurrentTransportActions(): string
    vfuncGetPlayMode(): string
    vfuncSetPlayMode(value: string): void
    vfuncGetCanPause(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-state", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-tracks", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-tracks", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-transport-actions", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-transport-actions", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::play-mode", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play-mode", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::play-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::play-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::play-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-pause", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlayerController_ConstructProps)
    _init (config?: PlayerController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaRendererPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {
    supportedProfiles?: RygelCore.DLNAProfile[]
}
export class MediaRendererPlugin {
    /* Properties of RygelRenderer.MediaRendererPlugin */
    supportedProfiles: RygelCore.DLNAProfile[]
    /* Properties of RygelCore.Plugin */
    capabilities: RygelCore.PluginCapabilities
    title: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
    /* Fields of GUPnP.ResourceFactory */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelRenderer.MediaRendererPlugin */
    getPlayer(): MediaPlayer | null
    getController(): PlayerController
    getProtocolInfo(): string
    getSupportedProfiles(): RygelCore.DLNAProfile[]
    setSupportedProfiles(value: RygelCore.DLNAProfile[]): void
    /* Methods of RygelCore.Plugin */
    addResource(resourceInfo: RygelCore.ResourceInfo): void
    addIcon(iconInfo: RygelCore.IconInfo): void
    applyHacks(device: RygelCore.RootDevice, descriptionPath: string): void
    getCapabilities(): RygelCore.PluginCapabilities
    setCapabilities(value: RygelCore.PluginCapabilities): void
    getName(): string
    getTitle(): string
    setTitle(value: string): void
    getDescription(): string
    getDescPath(): string
    getActive(): boolean
    setActive(value: boolean): void
    getResourceInfos(): Gee.ArrayList
    getIconInfos(): Gee.ArrayList
    getDefaultIcons(): Gee.ArrayList
    /* Methods of GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    /* Virtual methods of RygelRenderer.MediaRendererPlugin */
    vfuncGetPlayer(): MediaPlayer | null
    vfuncGetController(): PlayerController
    /* Virtual methods of RygelCore.Plugin */
    vfuncApplyHacks(device: RygelCore.RootDevice, descriptionPath: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-profiles", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-icons", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaRendererPlugin_ConstructProps)
    _init (config?: MediaRendererPlugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin
    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin
    static new(): MediaRendererPlugin
    static $gtype: GObject.Type
}
export interface MediaRenderer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {
    player?: MediaPlayer
}
export class MediaRenderer {
    /* Properties of RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore.MediaDevice */
    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): RygelCore.Plugin
    setPlugin(value: RygelCore.Plugin): void
    getTitle(): string
    getCapabilities(): RygelCore.PluginCapabilities
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
    connect(sigName: "notify", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaRenderer_ConstructProps)
    _init (config?: MediaRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities): MediaRenderer
    static $gtype: GObject.Type
}
export abstract class MediaRendererPluginClass {
    /* Fields of RygelRenderer.MediaRendererPluginClass */
    getPlayer: () => MediaPlayer | null
    getController: () => PlayerController
    static name: string
}
export class MediaRendererPluginPrivate {
    static name: string
}
export abstract class MediaRendererClass {
    static name: string
}
export class MediaRendererPrivate {
    static name: string
}
export abstract class MediaPlayerIface {
    /* Fields of RygelRenderer.MediaPlayerIface */
    seek: (time: number) => boolean
    seekBytes: (bytes: number) => boolean
    getProtocols: () => string[]
    getMimeTypes: () => string[]
    getPlaybackState: () => string
    setPlaybackState: (value: string) => void
    getAllowedPlaybackSpeeds: () => string[]
    getPlaybackSpeed: () => string
    setPlaybackSpeed: (value: string) => void
    getUri: () => string | null
    setUri: (value?: string | null) => void
    getVolume: () => number
    setVolume: (value: number) => void
    getDuration: () => number
    getSize: () => number
    getMetadata: () => string | null
    setMetadata: (value?: string | null) => void
    getMimeType: () => string | null
    setMimeType: (value?: string | null) => void
    getCanSeek: () => boolean
    getCanSeekBytes: () => boolean
    getContentFeatures: () => string | null
    setContentFeatures: (value?: string | null) => void
    getPosition: () => number
    getBytePosition: () => number
    getUserAgent: () => string | null
    setUserAgent: (value?: string | null) => void
    static name: string
}
export abstract class PlayerControllerIface {
    /* Fields of RygelRenderer.PlayerControllerIface */
    next: () => boolean
    previous: () => boolean
    setSinglePlayUri: (uri: string, metadata: string, mime?: string | null, features?: string | null) => void
    setPlaylistUri: (uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    setNextSinglePlayUri: (uri: string, metadata: string, mime?: string | null, features?: string | null) => void
    setNextPlaylistUri: (uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    isPlayModeValid: (playMode: string) => boolean
    getPlaybackState: () => string
    setPlaybackState: (value: string) => void
    getNTracks: () => number
    setNTracks: (value: number) => void
    getTrack: () => number
    setTrack: (value: number) => void
    getUri: () => string
    setUri: (value: string) => void
    getMetadata: () => string
    setMetadata: (value: string) => void
    getTrackUri: () => string
    setTrackUri: (value: string) => void
    getTrackMetadata: () => string
    setTrackMetadata: (value: string) => void
    getNextUri: () => string
    setNextUri: (value: string) => void
    getNextMetadata: () => string
    setNextMetadata: (value: string) => void
    getCurrentTransportActions: () => string
    getPlayMode: () => string
    setPlayMode: (value: string) => void
    getCanPause: () => boolean
    static name: string
}
}