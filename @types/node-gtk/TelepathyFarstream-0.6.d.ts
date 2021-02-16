/**
 * TelepathyFarstream-0.6
 */

/// <reference types="node" />
/// <reference path="TelepathyGLib-0.12.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Farstream-0.2.d.ts" />

declare namespace TelepathyFarstream {

export interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    channel?: TelepathyGLib.Channel
}
export class Channel {
    /* Properties of TelepathyFarstream.Channel */
    readonly fsConferences: object[]
    readonly objectPath: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyFarstream.Channel */
    busMessage(message: Gst.Message): boolean
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
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of TelepathyFarstream.Channel */
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of TelepathyFarstream.Channel */
    connect(sigName: "closed", callback: (($obj: Channel) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Channel) => void)): number
    emit(sigName: "closed"): void
    on(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "content-added", callback: (($obj: Channel, content: Content) => void)): number
    connect_after(sigName: "content-added", callback: (($obj: Channel, content: Content) => void)): number
    emit(sigName: "content-added", content: Content): void
    on(sigName: "content-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "content-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "content-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "content-removed", callback: (($obj: Channel, content: Content) => void)): number
    connect_after(sigName: "content-removed", callback: (($obj: Channel, content: Content) => void)): number
    emit(sigName: "content-removed", content: Content): void
    on(sigName: "content-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "content-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "content-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "fs-conference-added", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    connect_after(sigName: "fs-conference-added", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    emit(sigName: "fs-conference-added", conf: Farstream.Conference): void
    on(sigName: "fs-conference-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "fs-conference-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "fs-conference-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "fs-conference-removed", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    connect_after(sigName: "fs-conference-removed", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    emit(sigName: "fs-conference-removed", conf: Farstream.Conference): void
    on(sigName: "fs-conference-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "fs-conference-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "fs-conference-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fs-conferences", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-conferences", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fs-conferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fs-conferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fs-conferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newFinish(object: GObject.Object, result: Gio.AsyncResult): Channel
    static newAsync(channelProxy: TelepathyGLib.Channel, callback: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Content_ConstructProps extends GObject.Object_ConstructProps {
}
export class Content {
    /* Properties of TelepathyFarstream.Content */
    readonly fsConference: Farstream.Conference
    readonly fsSession: Farstream.Session
    readonly mediaType: Farstream.MediaType
    readonly objectPath: string
    readonly sinkPad: Gst.Pad
    readonly tfChannel: Channel
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyFarstream.Content */
    error(message: string): void
    iterateSrcPads(handles: number, handleCount: number): Gst.Iterator
    receivingFailed(handles: number, handleCount: number, message: string): void
    sendingFailed(message: string): void
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
    /* Signals of TelepathyFarstream.Content */
    connect(sigName: "restart-source", callback: (($obj: Content) => void)): number
    connect_after(sigName: "restart-source", callback: (($obj: Content) => void)): number
    emit(sigName: "restart-source"): void
    on(sigName: "restart-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "restart-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "restart-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "src-pad-added", callback: (($obj: Content, handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void)): number
    connect_after(sigName: "src-pad-added", callback: (($obj: Content, handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void)): number
    emit(sigName: "src-pad-added", handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec): void
    on(sigName: "src-pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "src-pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "src-pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "start-receiving", callback: (($obj: Content, handles: object, handleCount: number) => boolean)): number
    connect_after(sigName: "start-receiving", callback: (($obj: Content, handles: object, handleCount: number) => boolean)): number
    emit(sigName: "start-receiving", handles: object, handleCount: number): void
    on(sigName: "start-receiving", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "start-receiving", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "start-receiving", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "start-sending", callback: (($obj: Content) => boolean)): number
    connect_after(sigName: "start-sending", callback: (($obj: Content) => boolean)): number
    emit(sigName: "start-sending"): void
    on(sigName: "start-sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "start-sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "start-sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stop-receiving", callback: (($obj: Content, handles: object, handleCount: number) => void)): number
    connect_after(sigName: "stop-receiving", callback: (($obj: Content, handles: object, handleCount: number) => void)): number
    emit(sigName: "stop-receiving", handles: object, handleCount: number): void
    on(sigName: "stop-receiving", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stop-receiving", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stop-receiving", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stop-sending", callback: (($obj: Content) => void)): number
    connect_after(sigName: "stop-sending", callback: (($obj: Content) => void)): number
    emit(sigName: "stop-sending"): void
    on(sigName: "stop-sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stop-sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stop-sending", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fs-conference", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-conference", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fs-conference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fs-conference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fs-conference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fs-session", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-session", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fs-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fs-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fs-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-type", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sink-pad", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sink-pad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sink-pad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sink-pad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tf-channel", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tf-channel", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tf-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tf-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tf-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export abstract class ChannelClass {
    static name: string
}
export class ChannelPrivate {
    static name: string
}
export abstract class ContentClass {
    static name: string
}
export class ContentPrivate {
    static name: string
}
}