/**
 * GVnc-1.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace GVnc {

export enum AudioFormatType {
    U8,
    S8,
    U16,
    S16,
    U32,
    S32,
}
export enum ConnectionAuth {
    INVALID,
    NONE,
    VNC,
    RA2,
    RA2NE,
    TIGHT,
    ULTRA,
    TLS,
    VENCRYPT,
    SASL,
    ARD,
    MSLOGONII,
    MSLOGON,
}
export enum ConnectionAuthVencrypt {
    PLAIN,
    TLSNONE,
    TLSVNC,
    TLSPLAIN,
    X509NONE,
    X509VNC,
    X509PLAIN,
    X509SASL,
    TLSSASL,
}
export enum ConnectionCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
export enum ConnectionEncoding {
    RAW,
    COPY_RECT,
    RRE,
    CORRE,
    HEXTILE,
    TIGHT,
    ZRLE,
    TIGHT_JPEG0,
    TIGHT_JPEG1,
    TIGHT_JPEG2,
    TIGHT_JPEG3,
    TIGHT_JPEG4,
    TIGHT_JPEG5,
    TIGHT_JPEG6,
    TIGHT_JPEG7,
    TIGHT_JPEG8,
    TIGHT_JPEG9,
    DESKTOP_RESIZE,
    LAST_RECT,
    WMVI,
    CURSOR_POS,
    RICH_CURSOR,
    XCURSOR,
    POINTER_CHANGE,
    EXT_KEY_EVENT,
    AUDIO,
    LED_STATE,
    DESKTOP_NAME,
    EXTENDED_DESKTOP_RESIZE,
    XVP,
    ALPHA_CURSOR,
}
export enum ConnectionPowerAction {
    SHUTDOWN,
    REBOOT,
    RESET,
}
export enum ConnectionResizeStatus {
    UNSUPPORTED,
    OK,
    ADMIN_PROHIBITED,
    OUT_OF_RESOURCES,
    INVALID_LAOUT,
    FORWARDED,
}
export const LEDSTATE_CAPS_LOCK: number
export const LEDSTATE_NUM_LOCK: number
export const LEDSTATE_SCROLL_LOCK: number
export const PADDING: number
export const PADDING_LARGE: number
export function utilCheckVersion(major: number, minor: number, micro: number): boolean
export function utilGetDebug(): boolean
export function utilGetVersion(): number
export function utilGetVersionString(): string
export function utilSetDebug(enabled: boolean): void
export class Audio {
    /* Methods of GVnc.Audio */
    playbackData(sample: AudioSample): void
    playbackStart(format: AudioFormat): void
    playbackStop(): void
    /* Virtual methods of GVnc.Audio */
    vfuncPlaybackData(sample: AudioSample): boolean
    vfuncPlaybackStart(format: AudioFormat): boolean
    vfuncPlaybackStop(): boolean
    static name: string
}
export class Framebuffer {
    /* Methods of GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: any, x: number, y: number, width: number, height: number): void
    getBuffer(): any
    getHeight(): number
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    getRowstride(): number
    getWidth(): number
    perfectFormatMatch(): boolean
    rgb24Blt(src: any, rowstride: number, x: number, y: number, width: number, height: number): void
    setColorMap(map: ColorMap): void
    setPixelAt(src: any, x: number, y: number): void
    /* Virtual methods of GVnc.Framebuffer */
    vfuncBlt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    vfuncCopyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    vfuncFill(src: any, x: number, y: number, width: number, height: number): void
    vfuncGetBuffer(): number
    vfuncGetHeight(): number
    vfuncGetLocalFormat(): PixelFormat
    vfuncGetRemoteFormat(): PixelFormat
    vfuncGetRowstride(): number
    vfuncGetWidth(): number
    vfuncPerfectFormatMatch(): boolean
    vfuncRgb24Blt(src: any, rowstride: number, x: number, y: number, width: number, height: number): void
    vfuncSetColorMap(map: ColorMap): void
    vfuncSetPixelAt(src: any, x: number, y: number): void
    static name: string
}
export interface BaseAudio_ConstructProps extends GObject.Object_ConstructProps {
}
export class BaseAudio {
    /* Fields of GVnc.BaseAudio */
    parent: GObject.Object
    priv: BaseAudioPrivate
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
    /* Methods of GVnc.Audio */
    playbackData(sample: AudioSample): void
    playbackStart(format: AudioFormat): void
    playbackStop(): void
    /* Virtual methods of GVnc.BaseAudio */
    vfuncPlaybackData(sample: AudioSample): boolean
    vfuncPlaybackStart(format: AudioFormat): boolean
    vfuncPlaybackStop(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GVnc.BaseAudio */
    connect(sigName: "vnc-audio-playback-data", callback: (($obj: BaseAudio, object: AudioSample) => void)): number
    connect_after(sigName: "vnc-audio-playback-data", callback: (($obj: BaseAudio, object: AudioSample) => void)): number
    emit(sigName: "vnc-audio-playback-data", object: AudioSample): void
    on(sigName: "vnc-audio-playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-audio-playback-start", callback: (($obj: BaseAudio, object: AudioFormat) => void)): number
    connect_after(sigName: "vnc-audio-playback-start", callback: (($obj: BaseAudio, object: AudioFormat) => void)): number
    emit(sigName: "vnc-audio-playback-start", object: AudioFormat): void
    on(sigName: "vnc-audio-playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-audio-playback-stop", callback: (($obj: BaseAudio) => void)): number
    connect_after(sigName: "vnc-audio-playback-stop", callback: (($obj: BaseAudio) => void)): number
    emit(sigName: "vnc-audio-playback-stop"): void
    on(sigName: "vnc-audio-playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseAudio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseAudio, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BaseAudio_ConstructProps)
    _init (config?: BaseAudio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BaseAudio
    static $gtype: GObject.Type
}
export interface BaseFramebuffer_ConstructProps extends GObject.Object_ConstructProps {
    buffer?: object
    colorMap?: ColorMap
    height?: number
    localFormat?: PixelFormat
    remoteFormat?: PixelFormat
    rowstride?: number
    width?: number
}
export class BaseFramebuffer {
    /* Properties of GVnc.BaseFramebuffer */
    colorMap: ColorMap
    /* Fields of GVnc.BaseFramebuffer */
    parent: GObject.Object
    priv: BaseFramebufferPrivate
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
    /* Methods of GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: any, x: number, y: number, width: number, height: number): void
    getBuffer(): any
    getHeight(): number
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    getRowstride(): number
    getWidth(): number
    perfectFormatMatch(): boolean
    rgb24Blt(src: any, rowstride: number, x: number, y: number, width: number, height: number): void
    setColorMap(map: ColorMap): void
    setPixelAt(src: any, x: number, y: number): void
    /* Virtual methods of GVnc.BaseFramebuffer */
    vfuncBlt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    vfuncCopyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    vfuncFill(src: any, x: number, y: number, width: number, height: number): void
    vfuncGetBuffer(): number
    vfuncGetHeight(): number
    vfuncGetLocalFormat(): PixelFormat
    vfuncGetRemoteFormat(): PixelFormat
    vfuncGetRowstride(): number
    vfuncGetWidth(): number
    vfuncPerfectFormatMatch(): boolean
    vfuncRgb24Blt(src: any, rowstride: number, x: number, y: number, width: number, height: number): void
    vfuncSetColorMap(map: ColorMap): void
    vfuncSetPixelAt(src: any, x: number, y: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-map", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: (($obj: BaseFramebuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseFramebuffer_ConstructProps)
    _init (config?: BaseFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: any, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer
    static $gtype: GObject.Type
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    framebuffer?: Framebuffer
}
export class Connection {
    /* Properties of GVnc.Connection */
    framebuffer: Framebuffer
    /* Fields of GVnc.Connection */
    parent: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GVnc.Connection */
    audioDisable(): boolean
    audioEnable(): boolean
    clientCutText(data: object | null, length: number): boolean
    framebufferUpdateRequest(incremental: boolean, x: number, y: number, width: number, height: number): boolean
    getAbsPointer(): boolean
    getAudioFormat(): AudioFormat
    getCursor(): Cursor
    getExtKeyEvent(): boolean
    getHeight(): number
    getLedstate(): number
    getName(): string
    getPixelFormat(): PixelFormat
    getPowerControl(): boolean
    getShared(): boolean
    getWidth(): number
    hasError(): boolean
    isInitialized(): boolean
    isOpen(): boolean
    keyEvent(downFlag: boolean, key: number, scancode: number): boolean
    openAddr(addr: Gio.SocketAddress, hostname?: string | null): boolean
    openFd(fd: number): boolean
    openFdWithHostname(fd: number, hostname?: string | null): boolean
    openHost(host: string, port: string): boolean
    pointerEvent(buttonMask: number, x: number, y: number): boolean
    powerControl(action: ConnectionPowerAction): boolean
    setAudio(audio: Audio): boolean
    setAudioFormat(fmt: AudioFormat): boolean
    setAuthSubtype(type: number): boolean
    setAuthType(type: number): boolean
    setCredential(type: number, data: string): boolean
    setEncodings(encoding: number[]): boolean
    setFramebuffer(fb: Framebuffer): boolean
    setPixelFormat(fmt: PixelFormat): boolean
    setShared(sharedFlag: boolean): boolean
    setSize(width: number, height: number): ConnectionResizeStatus
    shutdown(): void
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
    /* Virtual methods of GVnc.Connection */
    vfuncVncAuthChooseSubtype(type: number, subtypes: GObject.ValueArray): void
    vfuncVncAuthChooseType(types: GObject.ValueArray): void
    vfuncVncAuthCredential(creds: GObject.ValueArray): void
    vfuncVncAuthFailure(reason: string): void
    vfuncVncAuthUnsupported(authType: number): void
    vfuncVncBell(): void
    vfuncVncConnected(): void
    vfuncVncCursorChanged(cursor: Cursor): void
    vfuncVncDesktopRename(name: string): void
    vfuncVncDesktopResize(width: number, height: number): void
    vfuncVncDisconnected(): void
    vfuncVncError(message: string): void
    vfuncVncFramebufferUpdate(x: number, y: number, width: number, height: number): void
    vfuncVncInitialized(): void
    vfuncVncLedState(): void
    vfuncVncPixelFormatChanged(format: PixelFormat): void
    vfuncVncPointerModeChanged(absPointer: boolean): void
    vfuncVncPowerControlFailed(): void
    vfuncVncPowerControlInitialized(): void
    vfuncVncServerCutText(text: GLib.String): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GVnc.Connection */
    connect(sigName: "vnc-auth-choose-subtype", callback: (($obj: Connection, object: number, p0: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-choose-subtype", callback: (($obj: Connection, object: number, p0: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-choose-subtype", object: number, p0: GObject.ValueArray): void
    on(sigName: "vnc-auth-choose-subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-auth-choose-type", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-choose-type", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-choose-type", object: GObject.ValueArray): void
    on(sigName: "vnc-auth-choose-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-auth-credential", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    connect_after(sigName: "vnc-auth-credential", callback: (($obj: Connection, object: GObject.ValueArray) => void)): number
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray): void
    on(sigName: "vnc-auth-credential", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-credential", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-credential", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-auth-failure", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-auth-failure", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-auth-failure", object: string): void
    on(sigName: "vnc-auth-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-auth-unsupported", callback: (($obj: Connection, object: number) => void)): number
    connect_after(sigName: "vnc-auth-unsupported", callback: (($obj: Connection, object: number) => void)): number
    emit(sigName: "vnc-auth-unsupported", object: number): void
    on(sigName: "vnc-auth-unsupported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-auth-unsupported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-auth-unsupported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-bell", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-bell", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-bell"): void
    on(sigName: "vnc-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-bell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-connected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-connected", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-connected"): void
    on(sigName: "vnc-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-cursor-changed", callback: (($obj: Connection, object: Cursor) => void)): number
    connect_after(sigName: "vnc-cursor-changed", callback: (($obj: Connection, object: Cursor) => void)): number
    emit(sigName: "vnc-cursor-changed", object: Cursor): void
    on(sigName: "vnc-cursor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-cursor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-cursor-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-desktop-rename", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-desktop-rename", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-desktop-rename", object: string): void
    on(sigName: "vnc-desktop-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-desktop-resize", callback: (($obj: Connection, object: number, p0: number) => void)): number
    connect_after(sigName: "vnc-desktop-resize", callback: (($obj: Connection, object: number, p0: number) => void)): number
    emit(sigName: "vnc-desktop-resize", object: number, p0: number): void
    on(sigName: "vnc-desktop-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-disconnected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-disconnected", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-disconnected"): void
    on(sigName: "vnc-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-error", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-error", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-error", object: string): void
    on(sigName: "vnc-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-framebuffer-update", callback: (($obj: Connection, object: number, p0: number, p1: number, p2: number) => void)): number
    connect_after(sigName: "vnc-framebuffer-update", callback: (($obj: Connection, object: number, p0: number, p1: number, p2: number) => void)): number
    emit(sigName: "vnc-framebuffer-update", object: number, p0: number, p1: number, p2: number): void
    on(sigName: "vnc-framebuffer-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-framebuffer-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-framebuffer-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-initialized", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-initialized", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-initialized"): void
    on(sigName: "vnc-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-led-state", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-led-state", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-led-state"): void
    on(sigName: "vnc-led-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-led-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-led-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-pixel-format-changed", callback: (($obj: Connection, object?: object | null) => void)): number
    connect_after(sigName: "vnc-pixel-format-changed", callback: (($obj: Connection, object?: object | null) => void)): number
    emit(sigName: "vnc-pixel-format-changed", object?: object | null): void
    on(sigName: "vnc-pixel-format-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-pixel-format-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-pixel-format-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-pointer-mode-changed", callback: (($obj: Connection, object: boolean) => void)): number
    connect_after(sigName: "vnc-pointer-mode-changed", callback: (($obj: Connection, object: boolean) => void)): number
    emit(sigName: "vnc-pointer-mode-changed", object: boolean): void
    on(sigName: "vnc-pointer-mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-mode-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-power-control-failed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-power-control-failed", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-power-control-failed"): void
    on(sigName: "vnc-power-control-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-power-control-initialized", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "vnc-power-control-initialized", callback: (($obj: Connection) => void)): number
    emit(sigName: "vnc-power-control-initialized"): void
    on(sigName: "vnc-power-control-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "vnc-server-cut-text", callback: (($obj: Connection, object: string) => void)): number
    connect_after(sigName: "vnc-server-cut-text", callback: (($obj: Connection, object: string) => void)): number
    emit(sigName: "vnc-server-cut-text", object: string): void
    on(sigName: "vnc-server-cut-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "vnc-server-cut-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "vnc-server-cut-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::framebuffer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::framebuffer", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static $gtype: GObject.Type
}
export interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    data?: object
    height?: number
    hotx?: number
    hoty?: number
    width?: number
}
export class Cursor {
    /* Properties of GVnc.Cursor */
    data: object
    height: number
    hotx: number
    hoty: number
    width: number
    /* Fields of GVnc.Cursor */
    parent: GObject.Object
    priv: CursorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GVnc.Cursor */
    getData(): any
    getHeight(): number
    getHotx(): number
    getHoty(): number
    getWidth(): number
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
    connect(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hotx", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hotx", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hoty", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hoty", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: any, hotx: number, hoty: number, width: number, height: number): Cursor
    static $gtype: GObject.Type
}
export class AudioFormat {
    /* Fields of GVnc.AudioFormat */
    format: number
    nchannels: number
    frequency: number
    /* Methods of GVnc.AudioFormat */
    copy(): AudioFormat
    free(): void
    static name: string
    static new(): AudioFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AudioFormat
}
export abstract class AudioInterface {
    /* Fields of GVnc.AudioInterface */
    parent: GObject.TypeInterface
    playbackStart: (audio: Audio, format: AudioFormat) => boolean
    playbackStop: (audio: Audio) => boolean
    playbackData: (audio: Audio, sample: AudioSample) => boolean
    static name: string
}
export class AudioSample {
    /* Fields of GVnc.AudioSample */
    data: number
    length: number
    capacity: number
    /* Methods of GVnc.AudioSample */
    copy(): AudioSample
    free(): void
    static name: string
    static new(capacity: number): AudioSample
    constructor(capacity: number)
    /* Static methods and pseudo-constructors */
    static new(capacity: number): AudioSample
}
export abstract class BaseAudioClass {
    /* Fields of GVnc.BaseAudioClass */
    parentClass: GObject.ObjectClass
    playbackStart: (audio: BaseAudio, format: AudioFormat) => boolean
    playbackStop: (audio: BaseAudio) => boolean
    playbackData: (audio: BaseAudio, sample: AudioSample) => boolean
    static name: string
}
export class BaseAudioPrivate {
    static name: string
}
export abstract class BaseFramebufferClass {
    /* Fields of GVnc.BaseFramebufferClass */
    parentClass: GObject.ObjectClass
    vncReserved: object[]
    static name: string
}
export class BaseFramebufferPrivate {
    static name: string
}
export class ColorMap {
    /* Fields of GVnc.ColorMap */
    offset: number
    size: number
    colors: ColorMapEntry
    /* Methods of GVnc.ColorMap */
    copy(): ColorMap
    free(): void
    lookup(idx: number, red: number, green: number, blue: number): boolean
    set(idx: number, red: number, green: number, blue: number): boolean
    static name: string
    static new(offset: number, size: number): ColorMap
    constructor(offset: number, size: number)
    /* Static methods and pseudo-constructors */
    static new(offset: number, size: number): ColorMap
}
export class ColorMapEntry {
    /* Fields of GVnc.ColorMapEntry */
    red: number
    green: number
    blue: number
    static name: string
}
export abstract class ConnectionClass {
    /* Fields of GVnc.ConnectionClass */
    parentClass: GObject.ObjectClass
    vncCursorChanged: (conn: Connection, cursor: Cursor) => void
    vncPointerModeChanged: (conn: Connection, absPointer: boolean) => void
    vncBell: (conn: Connection) => void
    vncServerCutText: (conn: Connection, text: GLib.String) => void
    vncFramebufferUpdate: (conn: Connection, x: number, y: number, width: number, height: number) => void
    vncDesktopResize: (conn: Connection, width: number, height: number) => void
    vncPixelFormatChanged: (conn: Connection, format: PixelFormat) => void
    vncAuthFailure: (conn: Connection, reason: string) => void
    vncAuthUnsupported: (conn: Connection, authType: number) => void
    vncAuthCredential: (conn: Connection, creds: GObject.ValueArray) => void
    vncAuthChooseType: (conn: Connection, types: GObject.ValueArray) => void
    vncAuthChooseSubtype: (conn: Connection, type: number, subtypes: GObject.ValueArray) => void
    vncConnected: (conn: Connection) => void
    vncInitialized: (conn: Connection) => void
    vncDisconnected: (conn: Connection) => void
    vncLedState: (conn: Connection) => void
    vncError: (conn: Connection, message: string) => void
    vncPowerControlInitialized: (conn: Connection) => void
    vncPowerControlFailed: (conn: Connection) => void
    vncDesktopRename: (conn: Connection, name: string) => void
    vncReserved: object[]
    static name: string
}
export class ConnectionPrivate {
    static name: string
}
export abstract class CursorClass {
    /* Fields of GVnc.CursorClass */
    parentClass: GObject.ObjectClass
    vncReserved: object[]
    static name: string
}
export class CursorPrivate {
    static name: string
}
export abstract class FramebufferInterface {
    /* Fields of GVnc.FramebufferInterface */
    parent: GObject.TypeInterface
    getWidth: (fb: Framebuffer) => number
    getHeight: (fb: Framebuffer) => number
    getRowstride: (fb: Framebuffer) => number
    getBuffer: (fb: Framebuffer) => number
    getLocalFormat: (fb: Framebuffer) => PixelFormat
    getRemoteFormat: (fb: Framebuffer) => PixelFormat
    perfectFormatMatch: (fb: Framebuffer) => boolean
    setPixelAt: (fb: Framebuffer, src: any, x: number, y: number) => void
    fill: (fb: Framebuffer, src: any, x: number, y: number, width: number, height: number) => void
    copyrect: (fb: Framebuffer, srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number) => void
    blt: (fb: Framebuffer, src: number, rowstride: number, x: number, y: number, width: number, height: number) => void
    rgb24Blt: (fb: Framebuffer, src: any, rowstride: number, x: number, y: number, width: number, height: number) => void
    setColorMap: (fb: Framebuffer, map: ColorMap) => void
    static name: string
}
export class PixelFormat {
    /* Fields of GVnc.PixelFormat */
    bitsPerPixel: number
    depth: number
    byteOrder: number
    trueColorFlag: number
    redMax: number
    greenMax: number
    blueMax: number
    redShift: number
    greenShift: number
    blueShift: number
    /* Methods of GVnc.PixelFormat */
    copy(): PixelFormat
    free(): void
    match(other: PixelFormat): boolean
    static name: string
    static new(): PixelFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PixelFormat
}
}