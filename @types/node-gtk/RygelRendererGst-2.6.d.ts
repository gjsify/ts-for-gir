/**
 * RygelRendererGst-2.6
 */

/// <reference types="node" />
import type { RygelRenderer } from './RygelRenderer-2.6';
import type { RygelCore } from './RygelCore-2.6';
import type { GLib } from './GLib-2.0';
import type { GObject } from './GObject-2.0';
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { GUPnP } from './GUPnP-1.2';
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { GSSDP } from './GSSDP-1.2';
import type { GUPnPAV } from './GUPnPAV-1.0';
import type { Gst } from './Gst-1.0';
import type { GModule } from './GModule-2.0';

declare namespace RygelRendererGst {

export enum PlaybinPlayerError {
    NO_ELEMENT,
}
export interface PlaybinPlayer_ConstructProps extends GObject.Object_ConstructProps {
    playbin?: Gst.Element
    playbackState?: string
    playbackSpeed?: string
    uri?: string
    volume?: number
    metadata?: string
    mimeType?: string
    contentFeatures?: string
    userAgent?: string
}
export class PlaybinPlayer {
    /* Properties of RygelRendererGst.PlaybinPlayer */
    playbin: Gst.Element
    readonly supportedProfiles: RygelCore.DLNAProfile[]
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
    /* Methods of RygelRendererGst.PlaybinPlayer */
    getPlaybin(): Gst.Element
    getSupportedProfiles(): RygelCore.DLNAProfile[]
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
    /* Virtual methods of RygelRendererGst.PlaybinPlayer */
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
    connect(sigName: "notify", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playbin", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playbin", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playbin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playbin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playbin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-profiles", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-state", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allowed-playback-speeds", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-playback-speeds", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-speed", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-speed", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek-bytes", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek-bytes", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-features", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-features", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::byte-position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlaybinPlayer_ConstructProps)
    _init (config?: PlaybinPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static instance(): PlaybinPlayer
    static $gtype: GObject.Type
}
export interface PlaybinRenderer_ConstructProps extends RygelRenderer.MediaRenderer_ConstructProps {
}
export class PlaybinRenderer {
    /* Properties of RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of RygelRendererGst.PlaybinRenderer */
    getPlaybin(): Gst.Element | null
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
    connect(sigName: "notify", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlaybinRenderer_ConstructProps)
    _init (config?: PlaybinRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string): PlaybinRenderer
    static new(title: string, player: RygelRenderer.MediaPlayer, capabilities: RygelCore.PluginCapabilities): PlaybinRenderer
    static $gtype: GObject.Type
}
export abstract class PlaybinPlayerClass {
    static name: string
}
export class PlaybinPlayerPrivate {
    static name: string
}
export abstract class PlaybinRendererClass {
    static name: string
}
export class PlaybinRendererPrivate {
    static name: string
}
}