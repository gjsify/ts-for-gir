/**
 * GstVideo-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GstBase } from './GstBase-0.10';
import type { Gst } from './Gst-0.10';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstVideo {

export enum Format {
    UNKNOWN,
    I420,
    YV12,
    YUY2,
    UYVY,
    AYUV,
    RGBX,
    BGRX,
    XRGB,
    XBGR,
    RGBA,
    BGRA,
    ARGB,
    ABGR,
    RGB,
    BGR,
    Y41B,
    Y42B,
    YVYU,
    Y444,
    V210,
    V216,
    NV12,
    NV21,
}
export const BLUE_MASK_15: string
export const BLUE_MASK_15_INT: any
export const BLUE_MASK_16: string
export const BLUE_MASK_16_INT: any
export const BYTE1_MASK_24: string
export const BYTE1_MASK_24_INT: any
export const BYTE1_MASK_32: string
export const BYTE1_MASK_32_INT: any
export const BYTE2_MASK_24: string
export const BYTE2_MASK_24_INT: any
export const BYTE2_MASK_32: string
export const BYTE2_MASK_32_INT: any
export const BYTE3_MASK_24: string
export const BYTE3_MASK_24_INT: any
export const BYTE3_MASK_32: string
export const BYTE3_MASK_32_INT: any
export const BYTE4_MASK_32: string
export const BYTE4_MASK_32_INT: any
export const CAPS_RGB_15: string
export const CAPS_RGB_16: string
export const FPS_RANGE: string
export const GREEN_MASK_15: string
export const GREEN_MASK_15_INT: any
export const GREEN_MASK_16: string
export const GREEN_MASK_16_INT: any
export const RED_MASK_15: string
export const RED_MASK_15_INT: any
export const RED_MASK_16: string
export const RED_MASK_16_INT: any
export const SIZE_RANGE: string
export function calculateDisplayRatio(videoWidth: any, videoHeight: any, videoParN: any, videoParD: any, displayParN: any, displayParD: any): { returnType: any, darN: any, darD: any }
export function eventNewStillFrame(inStill: any): Gst.Event
export function eventParseStillFrame(event: Gst.Event): { returnType: any, inStill: any }
export function formatConvert(format: Format, width: any, height: any, fpsN: any, fpsD: any, srcFormat: Gst.Format, srcValue: any, destFormat: Gst.Format): { returnType: any, destValue: any }
export function formatFromFourcc(fourcc: any): Format
export function formatGetComponentHeight(format: Format, component: any, height: any): any
export function formatGetComponentOffset(format: Format, component: any, width: any, height: any): any
export function formatGetComponentWidth(format: Format, component: any, width: any): any
export function formatGetPixelStride(format: Format, component: any): any
export function formatGetRowStride(format: Format, component: any, width: any): any
export function formatGetSize(format: Format, width: any, height: any): any
export function formatHasAlpha(format: Format): any
export function formatIsRgb(format: Format): any
export function formatIsYuv(format: Format): any
export function formatNewCaps(format: Format, width: any, height: any, framerateN: any, framerateD: any, parN: any, parD: any): Gst.Caps
export function formatNewCapsInterlaced(format: Format, width: any, height: any, framerateN: any, framerateD: any, parN: any, parD: any, interlaced: any): Gst.Caps
export function formatParseCaps(caps: Gst.Caps, format: Format): { returnType: any, width: any, height: any }
export function formatParseCapsInterlaced(caps: Gst.Caps): { returnType: any, interlaced: any }
export function formatToFourcc(format: Format): any
export function frameRate(pad: Gst.Pad): any
export function getSize(pad: Gst.Pad): { returnType: any, width: any, height: any }
export function parseCapsChromaSite(caps: Gst.Caps): string
export function parseCapsColorMatrix(caps: Gst.Caps): string
export function parseCapsFramerate(caps: Gst.Caps): { returnType: any, fpsN: any, fpsD: any }
export function parseCapsPixelAspectRatio(caps: Gst.Caps): { returnType: any, parN: any, parD: any }
export interface Filter_ConstructProps extends GstBase.Transform_ConstructProps {
}
export class Filter {
    /* Properties of GstBase-0.10.GstBase.Transform */
    qos: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstVideo-0.10.GstVideo.Filter */
    element: GstBase.Transform
    inited: any
    /* Fields of GstBase-0.10.GstBase.Transform */
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    passthrough: any
    alwaysInPlace: any
    cacheCaps1: Gst.Caps
    cacheCaps1Size: any
    cacheCaps2: Gst.Caps
    cacheCaps2Size: any
    haveSameCaps: any
    delayConfigure: any
    pendingConfigure: any
    negotiated: any
    haveNewsegment: any
    segment: Gst.Segment
    transformLock: GLib.Mutex
    priv: Gst.BaseTransformPrivate
    gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Transform */
    setPassthrough(passthrough: any): void
    isPassthrough(): any
    setInPlace(inPlace: any): void
    isInPlace(): any
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    setQosEnabled(enabled: any): void
    isQosEnabled(): any
    setGapAware(gapAware: any): void
    suggest(caps: Gst.Caps, size: any): void
    reconfigure(): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Filter) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Filter, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Filter, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Filter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Filter, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Filter, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Filter, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Sink_ConstructProps extends GstBase.Sink_ConstructProps {
    showPrerollFrame?: any
}
export class Sink {
    /* Properties of GstVideo-0.10.GstVideo.Sink */
    showPrerollFrame: any
    /* Properties of GstBase-0.10.GstBase.Sink */
    async: any
    blocksize: any
    enableLastBuffer: any
    readonly lastBuffer: Gst.Buffer
    maxLateness: any
    prerollQueueLen: any
    qos: any
    renderDelay: any
    sync: any
    tsOffset: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstVideo-0.10.GstVideo.Sink */
    element: GstBase.Sink
    width: any
    height: any
    priv: SinkPrivate
    gstReserved: any[]
    /* Fields of GstBase-0.10.GstBase.Sink */
    sinkpad: Gst.Pad
    padMode: Gst.ActivateMode
    offset: any
    canActivatePull: any
    canActivatePush: any
    prerollQueue: GLib.Queue
    prerollQueueMaxLen: any
    prerollQueued: any
    buffersQueued: any
    eventsQueued: any
    eos: any
    eosQueued: any
    needPreroll: any
    havePreroll: any
    playingAsync: any
    haveNewsegment: any
    segment: Gst.Segment
    clockId: Gst.ClockID
    endTime: Gst.ClockTime
    flushing: any
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: any
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    numpads: any
    pads: any[]
    numsrcpads: any
    srcpads: any[]
    numsinkpads: any
    sinkpads: any[]
    padsCookie: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Sink */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    waitPreroll(): Gst.FlowReturn
    setSync(sync: any): void
    getSync(): any
    setMaxLateness(maxLateness: any): void
    getMaxLateness(): any
    setQosEnabled(enabled: any): void
    isQosEnabled(): any
    setAsyncEnabled(enabled: any): void
    isAsyncEnabled(): any
    setTsOffset(offset: Gst.ClockTimeDiff): void
    getTsOffset(): Gst.ClockTimeDiff
    getLastBuffer(): Gst.Buffer
    setLastBufferEnabled(enable: any): void
    isLastBufferEnabled(): any
    queryLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): { returnType: any, live: any, upstreamLive: any }
    getLatency(): Gst.ClockTime
    setRenderDelay(delay: Gst.ClockTime): void
    getRenderDelay(): Gst.ClockTime
    setBlocksize(blocksize: any): void
    getBlocksize(): any
    waitClock(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.ClockReturn
    waitEos(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.FlowReturn
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): any
    providesClock(): any
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): any
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): any
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): any
    removePad(pad: Gst.Pad): any
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): any
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: any, stopType: Gst.SeekType, stop: any): any
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): any
    postMessage(message: Gst.Message): any
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: any, text: string, debug: string, file: string, function_: string, line: any): void
    isLockedState(): any
    setLockedState(lockedState: any): any
    syncStateWithParent(): any
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State, pending: Gst.State }
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: any): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): any
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): any
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): any
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): any
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): any
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): any
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: any): any
    queryPosition(format: Gst.Format): { returnType: any, cur: any }
    queryDuration(format: Gst.Format): { returnType: any, duration: any }
    queryConvert(srcFormat: Gst.Format, srcVal: any, destFormat: Gst.Format): { returnType: any, destVal: any }
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): any
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): any
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): any
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Sink) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Sink, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Sink, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Sink, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Sink, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Sink, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Sink, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Sink_ConstructProps)
    _init (config?: Sink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static centerRect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: any): void
    static $gtype: GObject.Type
}
export abstract class FilterClass {
    /* Fields of GstVideo-0.10.GstVideo.FilterClass */
    parentClass: GstBase.TransformClass
    static name: string
}
export class Rectangle {
    /* Fields of GstVideo-0.10.GstVideo.Rectangle */
    x: any
    y: any
    w: any
    h: any
    static name: string
}
export abstract class SinkClass {
    /* Fields of GstVideo-0.10.GstVideo.SinkClass */
    parentClass: GstBase.SinkClass
    showFrame: (videoSink: Sink, buf: Gst.Buffer) => Gst.FlowReturn
    gstReserved: any[]
    static name: string
}
export class SinkPrivate {
    static name: string
}
}