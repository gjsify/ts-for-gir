/**
 * TelepathyFarstream-0.6
 */

import "node"
import type { TelepathyGLib } from './TelepathyGLib-0.12';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gst } from './Gst-1.0';
import type { GModule } from './GModule-2.0';
import type { Farstream } from './Farstream-0.2';

export declare namespace TelepathyFarstream {

export interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    channel?: TelepathyGLib.Channel
}
export class Channel {
    /* Properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    readonly fsConferences: object[]
    readonly objectPath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    busMessage(message: Gst.Message): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    connect(sigName: "closed", callback: (($obj: Channel) => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "content-added", callback: (($obj: Channel, content: Content) => void)): number
    on(sigName: "content-added", callback: (content: Content) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-added", callback: (content: Content) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-added", callback: (content: Content) => void): NodeJS.EventEmitter
    emit(sigName: "content-added", content: Content): void
    connect(sigName: "content-removed", callback: (($obj: Channel, content: Content) => void)): number
    on(sigName: "content-removed", callback: (content: Content) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-removed", callback: (content: Content) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-removed", callback: (content: Content) => void): NodeJS.EventEmitter
    emit(sigName: "content-removed", content: Content): void
    connect(sigName: "fs-conference-added", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    on(sigName: "fs-conference-added", callback: (conf: Farstream.Conference) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "fs-conference-added", callback: (conf: Farstream.Conference) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "fs-conference-added", callback: (conf: Farstream.Conference) => void): NodeJS.EventEmitter
    emit(sigName: "fs-conference-added", conf: Farstream.Conference): void
    connect(sigName: "fs-conference-removed", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    on(sigName: "fs-conference-removed", callback: (conf: Farstream.Conference) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "fs-conference-removed", callback: (conf: Farstream.Conference) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "fs-conference-removed", callback: (conf: Farstream.Conference) => void): NodeJS.EventEmitter
    emit(sigName: "fs-conference-removed", conf: Farstream.Conference): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of TelepathyFarstream-0.6.TelepathyFarstream.Content */
    readonly fsConference: Farstream.Conference
    readonly fsSession: Farstream.Session
    readonly mediaType: Farstream.MediaType
    readonly objectPath: string
    readonly sinkPad: Gst.Pad
    readonly tfChannel: Channel
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyFarstream-0.6.TelepathyFarstream.Content */
    error(message: string): void
    iterateSrcPads(handles: number, handleCount: number): Gst.Iterator
    receivingFailed(handles: number, handleCount: number, message: string): void
    sendingFailed(message: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of TelepathyFarstream-0.6.TelepathyFarstream.Content */
    connect(sigName: "restart-source", callback: (($obj: Content) => void)): number
    on(sigName: "restart-source", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restart-source", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restart-source", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restart-source"): void
    connect(sigName: "src-pad-added", callback: (($obj: Content, handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void)): number
    on(sigName: "src-pad-added", callback: (handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "src-pad-added", callback: (handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "src-pad-added", callback: (handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void): NodeJS.EventEmitter
    emit(sigName: "src-pad-added", handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec): void
    connect(sigName: "start-receiving", callback: (($obj: Content, handles: object, handleCount: number) => boolean)): number
    on(sigName: "start-receiving", callback: (handles: object, handleCount: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start-receiving", callback: (handles: object, handleCount: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start-receiving", callback: (handles: object, handleCount: number) => void): NodeJS.EventEmitter
    emit(sigName: "start-receiving", handles: object, handleCount: number): void
    connect(sigName: "start-sending", callback: (($obj: Content) => boolean)): number
    on(sigName: "start-sending", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start-sending", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start-sending", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "start-sending"): void
    connect(sigName: "stop-receiving", callback: (($obj: Content, handles: object, handleCount: number) => void)): number
    on(sigName: "stop-receiving", callback: (handles: object, handleCount: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop-receiving", callback: (handles: object, handleCount: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop-receiving", callback: (handles: object, handleCount: number) => void): NodeJS.EventEmitter
    emit(sigName: "stop-receiving", handles: object, handleCount: number): void
    connect(sigName: "stop-sending", callback: (($obj: Content) => void)): number
    on(sigName: "stop-sending", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop-sending", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop-sending", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stop-sending"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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