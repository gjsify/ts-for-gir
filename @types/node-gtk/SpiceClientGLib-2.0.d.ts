/**
 * SpiceClientGLib-2.0
 */

/// <reference types="node" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />

declare namespace SpiceClientGLib {

export enum ChannelEvent {
    NONE,
    OPENED,
    SWITCHING,
    CLOSED,
    ERROR_CONNECT,
    ERROR_TLS,
    ERROR_LINK,
    ERROR_AUTH,
    ERROR_IO,
}
export enum ClientError {
    FAILED,
    USB_DEVICE_REJECTED,
    USB_DEVICE_LOST,
    AUTH_NEEDS_PASSWORD,
    AUTH_NEEDS_USERNAME,
    AUTH_NEEDS_PASSWORD_AND_USERNAME,
    USB_SERVICE,
}
export enum QmpPortVmAction {
    QUIT,
    RESET,
    POWER_DOWN,
    PAUSE,
    CONTINUE,
    LAST,
}
export enum SessionMigration {
    NONE,
    SWITCHING,
    MIGRATING,
    CONNECTING,
}
export enum InputsLock {
    SCROLL_LOCK,
    NUM_LOCK,
    CAPS_LOCK,
}
export enum SessionVerify {
    PUBKEY,
    HOSTNAME,
    SUBJECT,
}
export const GTK_MAJOR_VERSION: number
export const GTK_MICRO_VERSION: number
export const GTK_MINOR_VERSION: number
export function clientErrorQuark(): GLib.Quark
export function displayChangePreferredCompression(channel: Channel, compression: number): void
export function displayChangePreferredVideoCodecType(channel: Channel, codecType: number): void
export function displayGetGlScanout(channel: DisplayChannel): GlScanout
export function displayGetPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
export function displayGlDrawDone(channel: DisplayChannel): void
export function getOptionGroup(): GLib.OptionGroup
export function inputsButtonPress(channel: InputsChannel, button: number, buttonState: number): void
export function inputsButtonRelease(channel: InputsChannel, button: number, buttonState: number): void
export function inputsKeyPress(channel: InputsChannel, scancode: number): void
export function inputsKeyPressAndRelease(channel: InputsChannel, scancode: number): void
export function inputsKeyRelease(channel: InputsChannel, scancode: number): void
export function inputsMotion(channel: InputsChannel, dx: number, dy: number, buttonState: number): void
export function inputsPosition(channel: InputsChannel, x: number, y: number, display: number, buttonState: number): void
export function inputsSetKeyLocks(channel: InputsChannel, locks: number): void
export function mainAgentTestCapability(channel: MainChannel, cap: number): boolean
export function mainClipboardGrab(channel: MainChannel, types: number, ntypes: number): void
export function mainClipboardNotify(channel: MainChannel, type: number, data: number, size: number): void
export function mainClipboardRelease(channel: MainChannel): void
export function mainClipboardRequest(channel: MainChannel, type: number): void
export function mainClipboardSelectionGrab(channel: MainChannel, selection: number, types: number, ntypes: number): void
export function mainClipboardSelectionNotify(channel: MainChannel, selection: number, type: number, data: number, size: number): void
export function mainClipboardSelectionRelease(channel: MainChannel, selection: number): void
export function mainClipboardSelectionRequest(channel: MainChannel, selection: number, type: number): void
export function mainFileCopyAsync(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
export function mainFileCopyFinish(channel: MainChannel, result: Gio.AsyncResult): boolean
export function mainRequestMouseMode(channel: MainChannel, mode: number): void
export function mainSendMonitorConfig(channel: MainChannel): boolean
export function mainSetDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void
export function mainSetDisplayEnabled(channel: MainChannel, id: number, enabled: boolean): void
export function mainUpdateDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void
export function mainUpdateDisplayEnabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void
export function portEvent(port: PortChannel, event: number): void
export function portWriteAsync(port: PortChannel, buffer: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function portWriteFinish(port: PortChannel, result: Gio.AsyncResult): number
export function recordSendData(channel: RecordChannel, data: object | null, bytes: number, time: number): void
export function setSessionOption(session: Session): void
export function utilGetDebug(): boolean
export function utilGetVersionString(): string
export function utilSetDebug(enabled: boolean): void
export function uuidToString(uuid: number): string
export interface msg_handler {
    (channel: Channel, in_: MsgIn): void
}
export interface Audio_ConstructProps extends GObject.Object_ConstructProps {
    mainContext?: GLib.MainContext
    session?: Session
}
export class Audio {
    /* Fields of SpiceClientGLib.Audio */
    parent: GObject.Object
    priv: AudioPrivate
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
    /* Virtual methods of SpiceClientGLib.Audio */
    vfuncConnectChannel(channel: Channel): boolean
    vfuncGetPlaybackVolumeInfoAsync(cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetPlaybackVolumeInfoFinish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean
    vfuncGetRecordVolumeInfoAsync(cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback?: Gio.AsyncReadyCallback | null): void
    vfuncGetRecordVolumeInfoFinish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Audio_ConstructProps)
    _init (config?: Audio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session, context?: GLib.MainContext | null, name?: string | null): Audio
    static get(session: Session, context?: GLib.MainContext | null): Audio
    static $gtype: GObject.Type
}
export interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    channelId?: number
    channelType?: number
    spiceSession?: Session
}
export class Channel {
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.Channel */
    parent: GObject.Object
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: Channel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: Channel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: Channel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: Channel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(s: Session, type: number, id: number): Channel
    static stringToType(str: string): number
    static typeToString(type: number): string
    static $gtype: GObject.Type
}
export interface CursorChannel_ConstructProps extends Channel_ConstructProps {
}
export class CursorChannel {
    /* Properties of SpiceClientGLib.CursorChannel */
    readonly cursor: CursorShape
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.CursorChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.CursorChannel */
    vfuncCursorHide(): void
    vfuncCursorMove(x: number, y: number): void
    vfuncCursorReset(): void
    vfuncCursorSet(width: number, height: number, hotX: number, hotY: number, rgba?: object | null): void
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.CursorChannel */
    connect(sigName: "cursor-hide", callback: (($obj: CursorChannel) => void)): number
    connect_after(sigName: "cursor-hide", callback: (($obj: CursorChannel) => void)): number
    emit(sigName: "cursor-hide"): void
    on(sigName: "cursor-hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-move", callback: (($obj: CursorChannel, x: number, y: number) => void)): number
    connect_after(sigName: "cursor-move", callback: (($obj: CursorChannel, x: number, y: number) => void)): number
    emit(sigName: "cursor-move", x: number, y: number): void
    on(sigName: "cursor-move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-move", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-reset", callback: (($obj: CursorChannel) => void)): number
    connect_after(sigName: "cursor-reset", callback: (($obj: CursorChannel) => void)): number
    emit(sigName: "cursor-reset"): void
    on(sigName: "cursor-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "cursor-set", callback: (($obj: CursorChannel, width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void)): number
    connect_after(sigName: "cursor-set", callback: (($obj: CursorChannel, width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void)): number
    emit(sigName: "cursor-set", width: number, height: number, hotX: number, hotY: number, rgba?: object | null): void
    on(sigName: "cursor-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cursor-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cursor-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: CursorChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: CursorChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: CursorChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: CursorChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CursorChannel_ConstructProps)
    _init (config?: CursorChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DisplayChannel_ConstructProps extends Channel_ConstructProps {
}
export class DisplayChannel {
    /* Properties of SpiceClientGLib.DisplayChannel */
    readonly glScanout: GlScanout
    readonly height: number
    readonly monitors: object[]
    readonly monitorsMax: number
    readonly width: number
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.DisplayChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.DisplayChannel */
    getGlScanout(): GlScanout
    glDrawDone(): void
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.DisplayChannel */
    connect(sigName: "display-invalidate", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "display-invalidate", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "display-invalidate", x: number, y: number, width: number, height: number): void
    on(sigName: "display-invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "display-invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "display-invalidate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "display-mark", callback: (($obj: DisplayChannel, mark: number) => void)): number
    connect_after(sigName: "display-mark", callback: (($obj: DisplayChannel, mark: number) => void)): number
    emit(sigName: "display-mark", mark: number): void
    on(sigName: "display-mark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "display-mark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "display-mark", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "display-primary-create", callback: (($obj: DisplayChannel, format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void)): number
    connect_after(sigName: "display-primary-create", callback: (($obj: DisplayChannel, format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void)): number
    emit(sigName: "display-primary-create", format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null): void
    on(sigName: "display-primary-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "display-primary-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "display-primary-create", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "display-primary-destroy", callback: (($obj: DisplayChannel) => void)): number
    connect_after(sigName: "display-primary-destroy", callback: (($obj: DisplayChannel) => void)): number
    emit(sigName: "display-primary-destroy"): void
    on(sigName: "display-primary-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "display-primary-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "display-primary-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "gl-draw", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "gl-draw", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "gl-draw", x: number, y: number, width: number, height: number): void
    on(sigName: "gl-draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "gl-draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "gl-draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "gst-video-overlay", callback: (($obj: DisplayChannel, pipeline: Gst.Pipeline) => boolean)): number
    connect_after(sigName: "gst-video-overlay", callback: (($obj: DisplayChannel, pipeline: Gst.Pipeline) => boolean)): number
    emit(sigName: "gst-video-overlay", pipeline: Gst.Pipeline): void
    on(sigName: "gst-video-overlay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "gst-video-overlay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "gst-video-overlay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "streaming-mode", callback: (($obj: DisplayChannel, streamingMode: boolean) => object | null)): number
    connect_after(sigName: "streaming-mode", callback: (($obj: DisplayChannel, streamingMode: boolean) => object | null)): number
    emit(sigName: "streaming-mode", streamingMode: boolean): void
    on(sigName: "streaming-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "streaming-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "streaming-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: DisplayChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: DisplayChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: DisplayChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: DisplayChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gl-scanout", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gl-scanout", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monitors", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitors", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monitors-max", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitors-max", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DisplayChannel_ConstructProps)
    _init (config?: DisplayChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static changePreferredCompression(channel: Channel, compression: number): void
    static changePreferredVideoCodecType(channel: Channel, codecType: number): void
    static getPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
    static $gtype: GObject.Type
}
export interface FileTransferTask_ConstructProps extends GObject.Object_ConstructProps {
    cancellable?: Gio.Cancellable
    channel?: MainChannel
    file?: Gio.File
    id?: number
}
export class FileTransferTask {
    /* Properties of SpiceClientGLib.FileTransferTask */
    readonly progress: number
    readonly totalBytes: number
    readonly transferredBytes: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.FileTransferTask */
    cancel(): void
    getFilename(): string
    getProgress(): number
    getTotalBytes(): number
    getTransferredBytes(): number
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
    /* Signals of SpiceClientGLib.FileTransferTask */
    connect(sigName: "finished", callback: (($obj: FileTransferTask, object: GLib.Error) => void)): number
    connect_after(sigName: "finished", callback: (($obj: FileTransferTask, object: GLib.Error) => void)): number
    emit(sigName: "finished", object: GLib.Error): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transferred-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transferred-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileTransferTask_ConstructProps)
    _init (config?: FileTransferTask_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputsChannel_ConstructProps extends Channel_ConstructProps {
}
export class InputsChannel {
    /* Properties of SpiceClientGLib.InputsChannel */
    readonly keyModifiers: number
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.InputsChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.InputsChannel */
    buttonPress(button: number, buttonState: number): void
    buttonRelease(button: number, buttonState: number): void
    keyPress(scancode: number): void
    keyPressAndRelease(scancode: number): void
    keyRelease(scancode: number): void
    motion(dx: number, dy: number, buttonState: number): void
    position(x: number, y: number, display: number, buttonState: number): void
    setKeyLocks(locks: number): void
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.InputsChannel */
    connect(sigName: "inputs-modifiers", callback: (($obj: InputsChannel) => void)): number
    connect_after(sigName: "inputs-modifiers", callback: (($obj: InputsChannel) => void)): number
    emit(sigName: "inputs-modifiers"): void
    on(sigName: "inputs-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "inputs-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "inputs-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: InputsChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: InputsChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: InputsChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: InputsChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-modifiers", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-modifiers", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputsChannel_ConstructProps)
    _init (config?: InputsChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MainChannel_ConstructProps extends Channel_ConstructProps {
    colorDepth?: number
    disableAnimation?: boolean
    disableDisplayAlign?: boolean
    disableDisplayPosition?: boolean
    disableFontSmooth?: boolean
    disableWallpaper?: boolean
    maxClipboard?: number
}
export class MainChannel {
    /* Properties of SpiceClientGLib.MainChannel */
    readonly agentCaps0: number
    readonly agentConnected: boolean
    colorDepth: number
    disableAnimation: boolean
    disableDisplayAlign: boolean
    disableDisplayPosition: boolean
    disableFontSmooth: boolean
    disableWallpaper: boolean
    maxClipboard: number
    readonly mouseMode: number
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.MainChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.MainChannel */
    agentTestCapability(cap: number): boolean
    clipboardSelectionGrab(selection: number, types: number, ntypes: number): void
    clipboardSelectionNotify(selection: number, type: number, data: number, size: number): void
    clipboardSelectionRelease(selection: number): void
    clipboardSelectionRequest(selection: number, type: number): void
    fileCopyAsync(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    fileCopyFinish(result: Gio.AsyncResult): boolean
    requestMouseMode(mode: number): void
    sendMonitorConfig(): boolean
    updateDisplay(id: number, x: number, y: number, width: number, height: number, update: boolean): void
    updateDisplayEnabled(id: number, enabled: boolean, update: boolean): void
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.MainChannel */
    connect(sigName: "main-agent-update", callback: (($obj: MainChannel) => void)): number
    connect_after(sigName: "main-agent-update", callback: (($obj: MainChannel) => void)): number
    emit(sigName: "main-agent-update"): void
    on(sigName: "main-agent-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-agent-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-agent-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard", callback: (($obj: MainChannel, type: number, data: object | null, size: number) => void)): number
    connect_after(sigName: "main-clipboard", callback: (($obj: MainChannel, type: number, data: object | null, size: number) => void)): number
    emit(sigName: "main-clipboard", type: number, data: object | null, size: number): void
    on(sigName: "main-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard-grab", callback: (($obj: MainChannel, types: object | null, ntypes: number) => boolean)): number
    connect_after(sigName: "main-clipboard-grab", callback: (($obj: MainChannel, types: object | null, ntypes: number) => boolean)): number
    emit(sigName: "main-clipboard-grab", types: object | null, ntypes: number): void
    on(sigName: "main-clipboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard-release", callback: (($obj: MainChannel) => void)): number
    connect_after(sigName: "main-clipboard-release", callback: (($obj: MainChannel) => void)): number
    emit(sigName: "main-clipboard-release"): void
    on(sigName: "main-clipboard-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard-request", callback: (($obj: MainChannel, types: number) => boolean)): number
    connect_after(sigName: "main-clipboard-request", callback: (($obj: MainChannel, types: number) => boolean)): number
    emit(sigName: "main-clipboard-request", types: number): void
    on(sigName: "main-clipboard-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard-selection", callback: (($obj: MainChannel, selection: number, type: number, data: object | null, size: number) => void)): number
    connect_after(sigName: "main-clipboard-selection", callback: (($obj: MainChannel, selection: number, type: number, data: object | null, size: number) => void)): number
    emit(sigName: "main-clipboard-selection", selection: number, type: number, data: object | null, size: number): void
    on(sigName: "main-clipboard-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard-selection-grab", callback: (($obj: MainChannel, selection: number, types: object | null, ntypes: number) => boolean)): number
    connect_after(sigName: "main-clipboard-selection-grab", callback: (($obj: MainChannel, selection: number, types: object | null, ntypes: number) => boolean)): number
    emit(sigName: "main-clipboard-selection-grab", selection: number, types: object | null, ntypes: number): void
    on(sigName: "main-clipboard-selection-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard-selection-release", callback: (($obj: MainChannel, selection: number) => void)): number
    connect_after(sigName: "main-clipboard-selection-release", callback: (($obj: MainChannel, selection: number) => void)): number
    emit(sigName: "main-clipboard-selection-release", selection: number): void
    on(sigName: "main-clipboard-selection-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-clipboard-selection-request", callback: (($obj: MainChannel, selection: number, types: number) => boolean)): number
    connect_after(sigName: "main-clipboard-selection-request", callback: (($obj: MainChannel, selection: number, types: number) => boolean)): number
    emit(sigName: "main-clipboard-selection-request", selection: number, types: number): void
    on(sigName: "main-clipboard-selection-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "main-mouse-update", callback: (($obj: MainChannel) => void)): number
    connect_after(sigName: "main-mouse-update", callback: (($obj: MainChannel) => void)): number
    emit(sigName: "main-mouse-update"): void
    on(sigName: "main-mouse-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "main-mouse-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "main-mouse-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "migration-started", callback: (($obj: MainChannel, session: GObject.Object) => void)): number
    connect_after(sigName: "migration-started", callback: (($obj: MainChannel, session: GObject.Object) => void)): number
    emit(sigName: "migration-started", session: GObject.Object): void
    on(sigName: "migration-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "migration-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "migration-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-file-transfer", callback: (($obj: MainChannel, task: GObject.Object) => void)): number
    connect_after(sigName: "new-file-transfer", callback: (($obj: MainChannel, task: GObject.Object) => void)): number
    emit(sigName: "new-file-transfer", task: GObject.Object): void
    on(sigName: "new-file-transfer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-file-transfer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-file-transfer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: MainChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: MainChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: MainChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: MainChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::agent-caps-0", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent-caps-0", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::agent-connected", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent-connected", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-animation", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-animation", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-display-align", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-display-align", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-display-position", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-display-position", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-font-smooth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-font-smooth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-wallpaper", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-wallpaper", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-clipboard", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-clipboard", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mouse-mode", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-mode", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MainChannel_ConstructProps)
    _init (config?: MainChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaybackChannel_ConstructProps extends Channel_ConstructProps {
    minLatency?: number
    mute?: boolean
    nchannels?: number
    volume?: object
}
export class PlaybackChannel {
    /* Properties of SpiceClientGLib.PlaybackChannel */
    minLatency: number
    mute: boolean
    nchannels: number
    volume: object
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.PlaybackChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.PlaybackChannel */
    setDelay(delayMs: number): void
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.PlaybackChannel */
    vfuncPlaybackData(data: object | null, size: number): void
    vfuncPlaybackStart(format: number, channels: number, freq: number): void
    vfuncPlaybackStop(): void
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.PlaybackChannel */
    connect(sigName: "playback-data", callback: (($obj: PlaybackChannel, data: object | null, dataSize: number) => void)): number
    connect_after(sigName: "playback-data", callback: (($obj: PlaybackChannel, data: object | null, dataSize: number) => void)): number
    emit(sigName: "playback-data", data: object | null, dataSize: number): void
    on(sigName: "playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "playback-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "playback-get-delay", callback: (($obj: PlaybackChannel) => void)): number
    connect_after(sigName: "playback-get-delay", callback: (($obj: PlaybackChannel) => void)): number
    emit(sigName: "playback-get-delay"): void
    on(sigName: "playback-get-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "playback-get-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "playback-get-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "playback-start", callback: (($obj: PlaybackChannel, format: number, channels: number, rate: number) => void)): number
    connect_after(sigName: "playback-start", callback: (($obj: PlaybackChannel, format: number, channels: number, rate: number) => void)): number
    emit(sigName: "playback-start", format: number, channels: number, rate: number): void
    on(sigName: "playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "playback-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "playback-stop", callback: (($obj: PlaybackChannel) => void)): number
    connect_after(sigName: "playback-stop", callback: (($obj: PlaybackChannel) => void)): number
    emit(sigName: "playback-stop"): void
    on(sigName: "playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "playback-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: PlaybackChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: PlaybackChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: PlaybackChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: PlaybackChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-latency", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nchannels", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nchannels", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlaybackChannel_ConstructProps)
    _init (config?: PlaybackChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PortChannel_ConstructProps extends Channel_ConstructProps {
}
export class PortChannel {
    /* Properties of SpiceClientGLib.PortChannel */
    readonly portName: string
    readonly portOpened: boolean
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.PortChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.PortChannel */
    event(event: number): void
    writeAsync(buffer: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): number
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.PortChannel */
    connect(sigName: "port-data", callback: (($obj: PortChannel, data: object | null, size: number) => void)): number
    connect_after(sigName: "port-data", callback: (($obj: PortChannel, data: object | null, size: number) => void)): number
    emit(sigName: "port-data", data: object | null, size: number): void
    on(sigName: "port-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "port-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "port-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "port-event", callback: (($obj: PortChannel, event: number) => void)): number
    connect_after(sigName: "port-event", callback: (($obj: PortChannel, event: number) => void)): number
    emit(sigName: "port-event", event: number): void
    on(sigName: "port-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "port-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "port-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: PortChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: PortChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: PortChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: PortChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-name", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-opened", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-opened", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PortChannel_ConstructProps)
    _init (config?: PortChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface QmpPort_ConstructProps extends GObject.Object_ConstructProps {
    channel?: PortChannel
}
export class QmpPort {
    /* Properties of SpiceClientGLib.QmpPort */
    readonly ready: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.QmpPort */
    queryStatusAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryStatusFinish(result: Gio.AsyncResult): QmpStatus
    vmActionAsync(action: QmpPortVmAction, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vmActionFinish(result: Gio.AsyncResult): boolean
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
    /* Signals of SpiceClientGLib.QmpPort */
    connect(sigName: "event", callback: (($obj: QmpPort, name: string, node?: object | null) => void)): number
    connect_after(sigName: "event", callback: (($obj: QmpPort, name: string, node?: object | null) => void)): number
    emit(sigName: "event", name: string, node?: object | null): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ready", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: QmpPort_ConstructProps)
    _init (config?: QmpPort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(channel: PortChannel): QmpPort
    static $gtype: GObject.Type
}
export interface RecordChannel_ConstructProps extends Channel_ConstructProps {
    mute?: boolean
    nchannels?: number
    volume?: object
}
export class RecordChannel {
    /* Properties of SpiceClientGLib.RecordChannel */
    mute: boolean
    nchannels: number
    volume: object
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.RecordChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.RecordChannel */
    sendData(data: object | null, bytes: number, time: number): void
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.RecordChannel */
    vfuncRecordData(data: object | null, size: number): void
    vfuncRecordStart(format: number, channels: number, freq: number): void
    vfuncRecordStop(): void
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.RecordChannel */
    connect(sigName: "record-start", callback: (($obj: RecordChannel, format: number, channels: number, rate: number) => void)): number
    connect_after(sigName: "record-start", callback: (($obj: RecordChannel, format: number, channels: number, rate: number) => void)): number
    emit(sigName: "record-start", format: number, channels: number, rate: number): void
    on(sigName: "record-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "record-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "record-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "record-stop", callback: (($obj: RecordChannel) => void)): number
    connect_after(sigName: "record-stop", callback: (($obj: RecordChannel) => void)): number
    emit(sigName: "record-stop"): void
    on(sigName: "record-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "record-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "record-stop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: RecordChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: RecordChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: RecordChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: RecordChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nchannels", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nchannels", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordChannel_ConstructProps)
    _init (config?: RecordChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    ca?: any
    caFile?: string
    cacheSize?: number
    certSubject?: string
    ciphers?: string
    clientSockets?: boolean
    colorDepth?: number
    disableEffects?: string[]
    enableAudio?: boolean
    enableSmartcard?: boolean
    enableUsbredir?: boolean
    glScanout?: boolean
    glzWindowSize?: number
    host?: string
    inhibitKeyboardGrab?: boolean
    password?: string
    port?: string
    protocol?: number
    proxy?: string
    pubkey?: any
    readOnly?: boolean
    secureChannels?: string[]
    shareDirRo?: boolean
    sharedDir?: string
    smartcardCertificates?: string[]
    smartcardDb?: string
    tlsPort?: string
    unixPath?: string
    uri?: string
    username?: string
    verify?: SessionVerify
}
export class Session {
    /* Properties of SpiceClientGLib.Session */
    ca: any
    caFile: string
    cacheSize: number
    certSubject: string
    ciphers: string
    clientSockets: boolean
    colorDepth: number
    disableEffects: string[]
    enableAudio: boolean
    enableSmartcard: boolean
    enableUsbredir: boolean
    glScanout: boolean
    glzWindowSize: number
    host: string
    inhibitKeyboardGrab: boolean
    readonly migrationState: SessionMigration
    readonly name: string
    password: string
    port: string
    protocol: number
    proxy: string
    pubkey: any
    readOnly: boolean
    secureChannels: string[]
    shareDirRo: boolean
    sharedDir: string
    smartcardCertificates: string[]
    smartcardDb: string
    tlsPort: string
    unixPath: string
    uri: string
    username: string
    readonly uuid: object
    verify: SessionVerify
    /* Fields of SpiceClientGLib.Session */
    parent: GObject.Object
    priv: SessionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.Session */
    connect(): boolean
    disconnect(): void
    getChannels(): Channel[]
    getProxyUri(): URI
    getReadOnly(): boolean
    hasChannelType(type: number): boolean
    isForMigration(): boolean
    openFd(fd: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Session */
    vfuncChannelDestroy(channel: Channel): void
    vfuncChannelNew(channel: Channel): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.Session */
    connect(sigName: "channel-destroy", callback: (($obj: Session, channel: Channel) => void)): number
    connect_after(sigName: "channel-destroy", callback: (($obj: Session, channel: Channel) => void)): number
    emit(sigName: "channel-destroy", channel: Channel): void
    on(sigName: "channel-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "channel-new", callback: (($obj: Session, channel: Channel) => void)): number
    connect_after(sigName: "channel-new", callback: (($obj: Session, channel: Channel) => void)): number
    emit(sigName: "channel-new", channel: Channel): void
    on(sigName: "channel-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "disconnected", callback: (($obj: Session) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Session) => void)): number
    emit(sigName: "disconnected"): void
    on(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mm-time-reset", callback: (($obj: Session) => void)): number
    connect_after(sigName: "mm-time-reset", callback: (($obj: Session) => void)): number
    emit(sigName: "mm-time-reset"): void
    on(sigName: "mm-time-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mm-time-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mm-time-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ca", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cert-subject", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cert-subject", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cert-subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cert-subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cert-subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ciphers", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ciphers", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ciphers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ciphers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ciphers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-sockets", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-sockets", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-sockets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-sockets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-sockets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-effects", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-effects", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-effects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-effects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-effects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-audio", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-audio", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-smartcard", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smartcard", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-usbredir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-usbredir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gl-scanout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gl-scanout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::glz-window-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::glz-window-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inhibit-keyboard-grab", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inhibit-keyboard-grab", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::migration-state", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::migration-state", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::migration-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::migration-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::migration-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pubkey", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pubkey", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pubkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pubkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pubkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secure-channels", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure-channels", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secure-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secure-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secure-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::share-dir-ro", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::share-dir-ro", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smartcard-certificates", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-certificates", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smartcard-db", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-db", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unix-path", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unix-path", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unix-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unix-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unix-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::verify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::verify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::verify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::verify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
export interface SmartcardChannel_ConstructProps extends Channel_ConstructProps {
}
export class SmartcardChannel {
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.SmartcardChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: SmartcardChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: SmartcardChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: SmartcardChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: SmartcardChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SmartcardChannel_ConstructProps)
    _init (config?: SmartcardChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SmartcardManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class SmartcardManager {
    /* Fields of SpiceClientGLib.SmartcardManager */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.SmartcardManager */
    getReaders(): SmartcardReader[]
    insertCard(): boolean
    removeCard(): boolean
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
    /* Virtual methods of SpiceClientGLib.SmartcardManager */
    vfuncCardInserted(reader: SmartcardReader): void
    vfuncCardRemoved(reader: SmartcardReader): void
    vfuncReaderAdded(reader: SmartcardReader): void
    vfuncReaderRemoved(reader: SmartcardReader): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.SmartcardManager */
    connect(sigName: "card-inserted", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "card-inserted", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "card-inserted", vreader: any): void
    on(sigName: "card-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "card-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "card-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "card-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "card-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "card-removed", vreader: any): void
    on(sigName: "card-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "card-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "card-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reader-added", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "reader-added", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "reader-added", vreader: any): void
    on(sigName: "reader-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reader-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reader-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reader-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "reader-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "reader-removed", vreader: any): void
    on(sigName: "reader-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reader-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reader-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SmartcardManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SmartcardManager, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SmartcardManager_ConstructProps)
    _init (config?: SmartcardManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): SmartcardManager
    static $gtype: GObject.Type
}
export interface URI_ConstructProps extends GObject.Object_ConstructProps {
    hostname?: string
    password?: string
    port?: number
    scheme?: string
    user?: string
}
export class URI {
    /* Properties of SpiceClientGLib.URI */
    hostname: string
    password: string
    port: number
    scheme: string
    user: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.URI */
    getHostname(): string
    getPassword(): string
    getPort(): number
    getScheme(): string
    getUser(): string
    setHostname(hostname: string): void
    setPassword(password: string): void
    setPort(port: number): void
    setScheme(scheme: string): void
    setUser(user: string): void
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hostname", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: URI_ConstructProps)
    _init (config?: URI_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UsbDeviceManager_ConstructProps extends GObject.Object_ConstructProps {
    autoConnect?: boolean
    autoConnectFilter?: string
    redirectOnConnect?: string
    session?: Session
}
export class UsbDeviceManager {
    /* Properties of SpiceClientGLib.UsbDeviceManager */
    autoConnect: boolean
    autoConnectFilter: string
    readonly freeChannels: number
    redirectOnConnect: string
    /* Fields of SpiceClientGLib.UsbDeviceManager */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.UsbDeviceManager */
    canRedirectDevice(device: UsbDevice): boolean
    connectDeviceAsync(device: UsbDevice, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectDeviceFinish(res: Gio.AsyncResult): boolean
    disconnectDevice(device: UsbDevice): void
    disconnectDeviceAsync(device: UsbDevice, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectDeviceFinish(res: Gio.AsyncResult): boolean
    getDevices(): UsbDevice[]
    getDevicesWithFilter(filter?: string | null): UsbDevice[]
    isDeviceConnected(device: UsbDevice): boolean
    isRedirecting(): boolean
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of SpiceClientGLib.UsbDeviceManager */
    vfuncAutoConnectFailed(device: UsbDevice, error: GLib.Error): void
    vfuncDeviceAdded(device: UsbDevice): void
    vfuncDeviceError(device: UsbDevice, error: GLib.Error): void
    vfuncDeviceRemoved(device: UsbDevice): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.UsbDeviceManager */
    connect(sigName: "auto-connect-failed", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    connect_after(sigName: "auto-connect-failed", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    emit(sigName: "auto-connect-failed", device: UsbDevice, error: GLib.Error): void
    on(sigName: "auto-connect-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "auto-connect-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "auto-connect-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-added", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    emit(sigName: "device-added", device: UsbDevice): void
    on(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-error", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    connect_after(sigName: "device-error", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    emit(sigName: "device-error", device: UsbDevice, error: GLib.Error): void
    on(sigName: "device-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "device-removed", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    emit(sigName: "device-removed", device: UsbDevice): void
    on(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-connect-filter", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect-filter", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::free-channels", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::free-channels", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::free-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::free-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::free-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::redirect-on-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redirect-on-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UsbDeviceManager_ConstructProps)
    _init (config?: UsbDeviceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(session: Session): UsbDeviceManager
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface UsbredirChannel_ConstructProps extends Channel_ConstructProps {
}
export class UsbredirChannel {
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.UsbredirChannel */
    parent: Channel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: UsbredirChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: UsbredirChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: UsbredirChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: UsbredirChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UsbredirChannel_ConstructProps)
    _init (config?: UsbredirChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebdavChannel_ConstructProps extends PortChannel_ConstructProps {
}
export class WebdavChannel {
    /* Properties of SpiceClientGLib.PortChannel */
    readonly portName: string
    readonly portOpened: boolean
    /* Properties of SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib.WebdavChannel */
    parent: PortChannel
    /* Fields of SpiceClientGLib.Channel */
    priv: ChannelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib.PortChannel */
    event(event: number): void
    writeAsync(buffer: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): number
    /* Methods of SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
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
    /* Virtual methods of SpiceClientGLib.Channel */
    vfuncChannelEvent(event: ChannelEvent): void
    vfuncChannelReset(migrating: boolean): void
    vfuncChannelSendMigrationHandshake(): void
    vfuncChannelUp(): void
    vfuncHandleMsg(msg: MsgIn): void
    vfuncIterateRead(): void
    vfuncIterateWrite(): void
    vfuncOpenFd(withTls: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib.PortChannel */
    connect(sigName: "port-data", callback: (($obj: WebdavChannel, data: object | null, size: number) => void)): number
    connect_after(sigName: "port-data", callback: (($obj: WebdavChannel, data: object | null, size: number) => void)): number
    emit(sigName: "port-data", data: object | null, size: number): void
    on(sigName: "port-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "port-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "port-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "port-event", callback: (($obj: WebdavChannel, event: number) => void)): number
    connect_after(sigName: "port-event", callback: (($obj: WebdavChannel, event: number) => void)): number
    emit(sigName: "port-event", event: number): void
    on(sigName: "port-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "port-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "port-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: WebdavChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: WebdavChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    on(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "open-fd", callback: (($obj: WebdavChannel, withTls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: WebdavChannel, withTls: number) => void)): number
    emit(sigName: "open-fd", withTls: number): void
    on(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-name", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-opened", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-opened", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebdavChannel_ConstructProps)
    _init (config?: WebdavChannel_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AudioClass {
    /* Fields of SpiceClientGLib.AudioClass */
    parentClass: GObject.ObjectClass
    connectChannel: (audio: Audio, channel: Channel) => boolean
    getPlaybackVolumeInfoAsync: (audio: Audio, cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback?: Gio.AsyncReadyCallback | null) => void
    getPlaybackVolumeInfoFinish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    getRecordVolumeInfoAsync: (audio: Audio, cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback?: Gio.AsyncReadyCallback | null) => void
    getRecordVolumeInfoFinish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    static name: string
}
export class AudioPrivate {
    static name: string
}
export abstract class ChannelClass {
    /* Fields of SpiceClientGLib.ChannelClass */
    parentClass: GObject.ObjectClass
    channelEvent: (channel: Channel, event: ChannelEvent) => void
    openFd: (channel: Channel, withTls: number) => void
    handleMsg: (channel: Channel, msg: MsgIn) => void
    channelUp: (channel: Channel) => void
    iterateWrite: (channel: Channel) => void
    iterateRead: (channel: Channel) => void
    channelReset: (channel: Channel, migrating: boolean) => void
    channelSendMigrationHandshake: (channel: Channel) => void
    static name: string
}
export class ChannelClassPrivate {
    static name: string
}
export class ChannelPrivate {
    static name: string
}
export abstract class CursorChannelClass {
    /* Fields of SpiceClientGLib.CursorChannelClass */
    parentClass: ChannelClass
    cursorSet: (channel: CursorChannel, width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void
    cursorMove: (channel: CursorChannel, x: number, y: number) => void
    cursorHide: (channel: CursorChannel) => void
    cursorReset: (channel: CursorChannel) => void
    static name: string
}
export class CursorChannelPrivate {
    static name: string
}
export class CursorShape {
    /* Fields of SpiceClientGLib.CursorShape */
    width: number
    height: number
    hotSpotX: number
    hotSpotY: number
    data: object
    static name: string
}
export abstract class DisplayChannelClass {
    /* Fields of SpiceClientGLib.DisplayChannelClass */
    parentClass: ChannelClass
    displayPrimaryCreate: (channel: Channel, format: number, width: number, height: number, stride: number, shmid: number, data: object) => void
    displayPrimaryDestroy: (channel: Channel) => void
    displayInvalidate: (channel: Channel, x: number, y: number, w: number, h: number) => void
    displayMark: (channel: Channel, mark: boolean) => void
    static name: string
}
export class DisplayChannelPrivate {
    static name: string
}
export class DisplayMonitorConfig {
    /* Fields of SpiceClientGLib.DisplayMonitorConfig */
    id: number
    surfaceId: number
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export class DisplayPrimary {
    /* Fields of SpiceClientGLib.DisplayPrimary */
    format: object
    width: number
    height: number
    stride: number
    shmid: number
    data: number
    marked: boolean
    static name: string
}
export abstract class FileTransferTaskClass {
    static name: string
}
export class GlScanout {
    /* Fields of SpiceClientGLib.GlScanout */
    fd: number
    width: number
    height: number
    stride: number
    format: number
    y0top: boolean
    /* Methods of SpiceClientGLib.GlScanout */
    free(): void
    static name: string
}
export abstract class InputsChannelClass {
    /* Fields of SpiceClientGLib.InputsChannelClass */
    parentClass: ChannelClass
    inputsModifiers: (channel: Channel) => void
    static name: string
}
export class InputsChannelPrivate {
    static name: string
}
export abstract class MainChannelClass {
    /* Fields of SpiceClientGLib.MainChannelClass */
    parentClass: ChannelClass
    mouseUpdate: (channel: Channel) => void
    agentUpdate: (channel: Channel) => void
    static name: string
}
export class MainChannelPrivate {
    static name: string
}
export class MsgIn {
    static name: string
}
export class MsgOut {
    static name: string
}
export abstract class PlaybackChannelClass {
    /* Fields of SpiceClientGLib.PlaybackChannelClass */
    parentClass: ChannelClass
    playbackStart: (channel: PlaybackChannel, format: number, channels: number, freq: number) => void
    playbackData: (channel: PlaybackChannel, data: object | null, size: number) => void
    playbackStop: (channel: PlaybackChannel) => void
    static name: string
}
export class PlaybackChannelPrivate {
    static name: string
}
export abstract class PortChannelClass {
    /* Fields of SpiceClientGLib.PortChannelClass */
    parentClass: ChannelClass
    static name: string
}
export class PortChannelPrivate {
    static name: string
}
export abstract class QmpPortClass {
    static name: string
}
export class QmpStatus {
    /* Fields of SpiceClientGLib.QmpStatus */
    version: number
    running: boolean
    singlestep: boolean
    status: string
    /* Methods of SpiceClientGLib.QmpStatus */
    ref(): QmpStatus
    unref(): void
    static name: string
}
export abstract class RecordChannelClass {
    /* Fields of SpiceClientGLib.RecordChannelClass */
    parentClass: ChannelClass
    recordStart: (channel: RecordChannel, format: number, channels: number, freq: number) => void
    recordData: (channel: RecordChannel, data: object | null, size: number) => void
    recordStop: (channel: RecordChannel) => void
    static name: string
}
export class RecordChannelPrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of SpiceClientGLib.SessionClass */
    parentClass: GObject.ObjectClass
    channelNew: (session: Session, channel: Channel) => void
    channelDestroy: (session: Session, channel: Channel) => void
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class SmartcardChannelClass {
    /* Fields of SpiceClientGLib.SmartcardChannelClass */
    parentClass: ChannelClass
    static name: string
}
export class SmartcardChannelPrivate {
    static name: string
}
export abstract class SmartcardManagerClass {
    /* Fields of SpiceClientGLib.SmartcardManagerClass */
    parentClass: GObject.ObjectClass
    readerAdded: (manager: SmartcardManager, reader: SmartcardReader) => void
    readerRemoved: (manager: SmartcardManager, reader: SmartcardReader) => void
    cardInserted: (manager: SmartcardManager, reader: SmartcardReader) => void
    cardRemoved: (manager: SmartcardManager, reader: SmartcardReader) => void
    static name: string
}
export class SmartcardManagerPrivate {
    static name: string
}
export class SmartcardReader {
    /* Methods of SpiceClientGLib.SmartcardReader */
    insertCard(): boolean
    isSoftware(): boolean
    removeCard(): boolean
    static name: string
}
export abstract class URIClass {
    static name: string
}
export class URIPrivate {
    static name: string
}
export class UsbDevice {
    /* Methods of SpiceClientGLib.UsbDevice */
    getDescription(format?: string | null): string
    getLibusbDevice(): object | null
    static name: string
}
export abstract class UsbDeviceManagerClass {
    /* Fields of SpiceClientGLib.UsbDeviceManagerClass */
    parentClass: GObject.ObjectClass
    deviceAdded: (manager: UsbDeviceManager, device: UsbDevice) => void
    deviceRemoved: (manager: UsbDeviceManager, device: UsbDevice) => void
    autoConnectFailed: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    deviceError: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    static name: string
}
export class UsbDeviceManagerPrivate {
    static name: string
}
export abstract class UsbredirChannelClass {
    /* Fields of SpiceClientGLib.UsbredirChannelClass */
    parentClass: ChannelClass
    static name: string
}
export class UsbredirChannelPrivate {
    static name: string
}
export abstract class WebdavChannelClass {
    /* Fields of SpiceClientGLib.WebdavChannelClass */
    parentClass: PortChannelClass
    static name: string
}
export class WebdavChannelPrivate {
    static name: string
}
}