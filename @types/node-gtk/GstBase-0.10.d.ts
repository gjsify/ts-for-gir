/**
 * GstBase-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gst } from './Gst-0.10';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstBase {

export enum SrcFlags {
    STARTED,
    FLAG_LAST,
}
export const TRANSFORM_SINK_NAME: string
export const TRANSFORM_SRC_NAME: string
export function gstTypeFindHelper(src: Gst.Pad, size: any): Gst.Caps
export function gstTypeFindHelperForBuffer(obj: Gst.Object, buf: Gst.Buffer, prob: Gst.TypeFindProbability): Gst.Caps
export function gstTypeFindHelperForExtension(obj: Gst.Object, extension: string): Gst.Caps
export function gstTypeFindHelperGetRange(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: any, prob: Gst.TypeFindProbability): Gst.Caps
export function gstTypeFindHelperGetRangeExt(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: any, extension: string, prob: Gst.TypeFindProbability): Gst.Caps
export interface GstCollectDataDestroyNotify {
    (data: Gst.CollectData): void
}
export interface GstCollectPadsClipFunction {
    (pads: Gst.CollectPads, data: Gst.CollectData, buffer: Gst.Buffer): Gst.Buffer
}
export interface GstCollectPadsFunction {
    (pads: Gst.CollectPads): Gst.FlowReturn
}
export interface GstDataQueueCheckFullFunction {
    (queue: Gst.DataQueue, visible: any, bytes: any, time: any, checkdata: any): any
}
export interface GstDataQueueEmptyCallback {
    (queue: Gst.DataQueue, checkdata: any): void
}
export interface GstDataQueueFullCallback {
    (queue: Gst.DataQueue, checkdata: any): void
}
export interface GstTypeFindHelperGetRangeFunction {
    (obj: Gst.Object, offset: any, length: any, buffer: Gst.Buffer): Gst.FlowReturn
}
export interface GstAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class GstAdapter {
    /* Fields of GstBase-0.10.GstBase.GstAdapter */
    object: GObject.Object
    buflist: any[]
    size: any
    skip: any
    assembledData: any
    assembledSize: any
    assembledLen: any
    buflistEnd: any[]
    priv: Gst.AdapterPrivate
    gstReserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.GstAdapter */
    clear(): void
    push(buf: Gst.Buffer): void
    peek(size: any): any[]
    copy(dest: any[], offset: any, size: any): void
    flush(flush: any): void
    take(nbytes: any): any[]
    takeBuffer(nbytes: any): Gst.Buffer
    available(): any
    availableFast(): any
    prevTimestamp(): { returnType: Gst.ClockTime, distance: any }
    maskedScanUint32(mask: any, pattern: any, offset: any, size: any): any
    maskedScanUint32Peek(mask: any, pattern: any, offset: any, size: any): { returnType: any, value: any }
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstAdapter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GstAdapter_ConstructProps)
    _init (config?: GstAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GstAdapter
    static $gtype: GObject.Type
}
export interface GstCollectPads_ConstructProps extends Gst.Object_ConstructProps {
}
export class GstCollectPads {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.GstCollectPads */
    object: Gst.Object
    data: any[]
    cookie: any
    cond: GLib.Cond
    func: Gst.CollectPadsFunction
    userData: any
    numpads: any
    queuedpads: any
    eospads: any
    started: any
    /* Fields of Gst-0.10.Gst.Object */
    refcount: any
    lock: GLib.Mutex
    namePrefix: string
    parent: Gst.Object
    flags: any
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.GstCollectPads */
    setFunction(func: Gst.CollectPadsFunction, userData: any): void
    setClipFunction(clipfunc: Gst.CollectPadsClipFunction, userData: any): void
    addPad(pad: Gst.Pad, size: any): Gst.CollectData
    addPadFull(pad: Gst.Pad, size: any, destroyNotify: Gst.CollectDataDestroyNotify): Gst.CollectData
    removePad(pad: Gst.Pad): any
    isActive(pad: Gst.Pad): any
    collect(): Gst.FlowReturn
    collectRange(offset: any, length: any): Gst.FlowReturn
    start(): void
    stop(): void
    setFlushing(flushing: any): void
    peek(data: Gst.CollectData): Gst.Buffer
    pop(data: Gst.CollectData): Gst.Buffer
    available(): any
    read(data: Gst.CollectData, size: any): { returnType: any, bytes: any }
    readBuffer(data: Gst.CollectData, size: any): Gst.Buffer
    takeBuffer(data: Gst.CollectData, size: any): Gst.Buffer
    flush(data: Gst.CollectData, size: any): any
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GstCollectPads, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: GstCollectPads, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: GstCollectPads, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: GstCollectPads, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstCollectPads, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GstCollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GstCollectPads, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GstCollectPads_ConstructProps)
    _init (config?: GstCollectPads_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GstCollectPads
    static $gtype: GObject.Type
}
export interface GstDataQueue_ConstructProps extends GObject.Object_ConstructProps {
}
export class GstDataQueue {
    /* Properties of GstBase-0.10.GstBase.GstDataQueue */
    readonly currentLevelBytes: any
    readonly currentLevelTime: any
    readonly currentLevelVisible: any
    /* Fields of GstBase-0.10.GstBase.GstDataQueue */
    object: GObject.Object
    queue: GLib.Queue
    curLevel: Gst.DataQueueSize
    checkfull: Gst.DataQueueCheckFullFunction
    checkdata: any
    qlock: GLib.Mutex
    itemAdd: GLib.Cond
    itemDel: GLib.Cond
    flushing: any
    fullcallback: Gst.DataQueueFullCallback
    emptycallback: Gst.DataQueueEmptyCallback
    gstReserved: any[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.GstDataQueue */
    push(item: Gst.DataQueueItem): any
    pop(item: Gst.DataQueueItem): any
    flush(): void
    setFlushing(flushing: any): void
    dropHead(type: GObject.Type): any
    isFull(): any
    isEmpty(): any
    getLevel(level: Gst.DataQueueSize): void
    limitsChanged(): void
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
    /* Signals of GstBase-0.10.GstBase.GstDataQueue */
    connect(sigName: "empty", callback: (($obj: GstDataQueue) => void)): number
    on(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "empty", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (($obj: GstDataQueue) => void)): number
    on(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "full", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-time", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-visible", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GstDataQueue_ConstructProps)
    _init (config?: GstDataQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(checkfull: Gst.DataQueueCheckFullFunction): GstDataQueue
    static newFull(checkfull: Gst.DataQueueCheckFullFunction, fullcallback: Gst.DataQueueFullCallback, emptycallback: Gst.DataQueueEmptyCallback): GstDataQueue
    static $gtype: GObject.Type
}
export interface GstPushSrc_ConstructProps extends Src_ConstructProps {
}
export class GstPushSrc {
    /* Properties of GstBase-0.10.GstBase.Src */
    blocksize: any
    doTimestamp: any
    numBuffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.GstPushSrc */
    parent: Gst.BaseSrc
    gstReserved: any[]
    /* Fields of GstBase-0.10.GstBase.Src */
    element: Gst.Element
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: any
    liveRunning: any
    canActivatePush: any
    padMode: Gst.ActivateMode
    seekable: any
    randomAccess: any
    clockId: Gst.ClockID
    endTime: Gst.ClockTime
    segment: Gst.Segment
    needNewsegment: any
    offset: any
    size: any
    numBuffersLeft: any
    priv: Gst.BaseSrcPrivate
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
    flags: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Src */
    waitPlaying(): Gst.FlowReturn
    setLive(live: any): void
    setFormat(format: Gst.Format): void
    queryLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): { returnType: any, live: any }
    setBlocksize(blocksize: any): void
    getBlocksize(): any
    setDoTimestamp(timestamp: any): void
    getDoTimestamp(): any
    newSeamlessSegment(start: any, stop: any, position: any): any
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
    connect(sigName: "no-more-pads", callback: (($obj: GstPushSrc) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: GstPushSrc, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: GstPushSrc, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GstPushSrc, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: GstPushSrc, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: GstPushSrc, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: GstPushSrc, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GstPushSrc_ConstructProps)
    _init (config?: GstPushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Sink_ConstructProps extends Gst.Element_ConstructProps {
    async?: any
    blocksize?: any
    enableLastBuffer?: any
    maxLateness?: any
    prerollQueueLen?: any
    qos?: any
    renderDelay?: any
    sync?: any
    tsOffset?: any
}
export class Sink {
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
    /* Fields of GstBase-0.10.GstBase.Sink */
    element: Gst.Element
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
    priv: Gst.BaseSinkPrivate
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
    gstReserved: any
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
    static $gtype: GObject.Type
}
export interface Src_ConstructProps extends Gst.Element_ConstructProps {
    blocksize?: any
    doTimestamp?: any
    numBuffers?: any
    typefind?: any
}
export class Src {
    /* Properties of GstBase-0.10.GstBase.Src */
    blocksize: any
    doTimestamp: any
    numBuffers: any
    typefind: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.Src */
    element: Gst.Element
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: any
    liveRunning: any
    canActivatePush: any
    padMode: Gst.ActivateMode
    seekable: any
    randomAccess: any
    clockId: Gst.ClockID
    endTime: Gst.ClockTime
    segment: Gst.Segment
    needNewsegment: any
    offset: any
    size: any
    numBuffersLeft: any
    priv: Gst.BaseSrcPrivate
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
    gstReserved: any
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-0.10.GstBase.Src */
    waitPlaying(): Gst.FlowReturn
    setLive(live: any): void
    setFormat(format: Gst.Format): void
    queryLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): { returnType: any, live: any }
    setBlocksize(blocksize: any): void
    getBlocksize(): any
    setDoTimestamp(timestamp: any): void
    getDoTimestamp(): any
    newSeamlessSegment(start: any, stop: any, position: any): any
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
    connect(sigName: "no-more-pads", callback: (($obj: Src) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Src, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Src, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Src, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Src, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Src, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Src, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Src_ConstructProps)
    _init (config?: Src_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transform_ConstructProps extends Gst.Element_ConstructProps {
    qos?: any
}
export class Transform {
    /* Properties of GstBase-0.10.GstBase.Transform */
    qos: any
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GstBase-0.10.GstBase.Transform */
    element: Gst.Element
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
    connect(sigName: "no-more-pads", callback: (($obj: Transform) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Transform, object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Transform, object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transform, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Transform, object: any) => void)): number
    on(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: any) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: any): void
    connect(sigName: "parent-set", callback: (($obj: Transform, object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Transform, object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Transform_ConstructProps)
    _init (config?: Transform_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class GstAdapterClass {
    /* Fields of GstBase-0.10.GstBase.GstAdapterClass */
    parentClass: GObject.ObjectClass
    gstReserved: any[]
    static name: string
}
export class GstAdapterPrivate {
    static name: string
}
export class GstBitReader {
    /* Fields of GstBase-0.10.GstBase.GstBitReader */
    data: any
    size: any
    byte: any
    bit: any
    /* Methods of GstBase-0.10.GstBase.GstBitReader */
    free(): void
    init(data: any[], size: any): void
    initFromBuffer(buffer: Gst.Buffer): void
    setPos(pos: any): any
    getPos(): any
    getRemaining(): any
    getSize(): any
    skip(nbits: any): any
    skipToByte(): any
    getBitsUint8(val: any[], nbits: any): any
    getBitsUint16(nbits: any): { returnType: any, val: any }
    getBitsUint32(nbits: any): { returnType: any, val: any }
    getBitsUint64(nbits: any): { returnType: any, val: any }
    peekBitsUint8(val: any[], nbits: any): any
    peekBitsUint16(nbits: any): { returnType: any, val: any }
    peekBitsUint32(nbits: any): { returnType: any, val: any }
    peekBitsUint64(nbits: any): { returnType: any, val: any }
    static name: string
    static new(data: any[], size: any): GstBitReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): GstBitReader
    static newFromBuffer(buffer: Gst.Buffer): GstBitReader
}
export class GstByteReader {
    /* Fields of GstBase-0.10.GstBase.GstByteReader */
    data: any
    size: any
    byte: any
    /* Methods of GstBase-0.10.GstBase.GstByteReader */
    free(): void
    init(data: any[], size: any): void
    initFromBuffer(buffer: Gst.Buffer): void
    setPos(pos: any): any
    getPos(): any
    getRemaining(): any
    getSize(): any
    skip(nbytes: any): any
    getUint8(val: any[]): any
    getInt8(): { returnType: any, val: any }
    getUint16Le(): { returnType: any, val: any }
    getInt16Le(): { returnType: any, val: any }
    getUint16Be(): { returnType: any, val: any }
    getInt16Be(): { returnType: any, val: any }
    getUint24Le(): { returnType: any, val: any }
    getInt24Le(): { returnType: any, val: number }
    getUint24Be(): { returnType: any, val: any }
    getInt24Be(): { returnType: any, val: number }
    getUint32Le(): { returnType: any, val: any }
    getInt32Le(): { returnType: any, val: number }
    getUint32Be(): { returnType: any, val: any }
    getInt32Be(): { returnType: any, val: number }
    getUint64Le(): { returnType: any, val: any }
    getInt64Le(): { returnType: any, val: any }
    getUint64Be(): { returnType: any, val: any }
    getInt64Be(): { returnType: any, val: any }
    peekUint8(val: any[]): any
    peekInt8(): { returnType: any, val: any }
    peekUint16Le(): { returnType: any, val: any }
    peekInt16Le(): { returnType: any, val: any }
    peekUint16Be(): { returnType: any, val: any }
    peekInt16Be(): { returnType: any, val: any }
    peekUint24Le(): { returnType: any, val: any }
    peekInt24Le(): { returnType: any, val: number }
    peekUint24Be(): { returnType: any, val: any }
    peekInt24Be(): { returnType: any, val: number }
    peekUint32Le(): { returnType: any, val: any }
    peekInt32Le(): { returnType: any, val: number }
    peekUint32Be(): { returnType: any, val: any }
    peekInt32Be(): { returnType: any, val: number }
    peekUint64Le(): { returnType: any, val: any }
    peekInt64Le(): { returnType: any, val: any }
    peekUint64Be(): { returnType: any, val: any }
    peekInt64Be(): { returnType: any, val: any }
    getFloat32Le(): { returnType: any, val: any }
    getFloat32Be(): { returnType: any, val: any }
    getFloat64Le(): { returnType: any, val: number }
    getFloat64Be(): { returnType: any, val: number }
    peekFloat32Le(): { returnType: any, val: any }
    peekFloat32Be(): { returnType: any, val: any }
    peekFloat64Le(): { returnType: any, val: number }
    peekFloat64Be(): { returnType: any, val: number }
    dupData(size: any): { returnType: any, val: any }
    getData(size: any): { returnType: any, val: any }
    peekData(size: any): { returnType: any, val: any }
    dupStringUtf8(str: string[]): any
    dupStringUtf16(): { returnType: any, str: any }
    dupStringUtf32(): { returnType: any, str: any }
    skipStringUtf8(): any
    skipStringUtf16(): any
    skipStringUtf32(): any
    getStringUtf8(str: string[]): any
    peekStringUtf8(str: string[]): any
    maskedScanUint32(mask: any, pattern: any, offset: any, size: any): any
    static name: string
    static new(data: any[], size: any): GstByteReader
    constructor(data: any[], size: any)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: any): GstByteReader
    static newFromBuffer(buffer: Gst.Buffer): GstByteReader
}
export class GstByteWriter {
    /* Fields of GstBase-0.10.GstBase.GstByteWriter */
    parent: Gst.ByteReader
    allocSize: any
    fixed: any
    owned: any
    /* Methods of GstBase-0.10.GstBase.GstByteWriter */
    init(): void
    initWithSize(size: any, fixed: any): void
    initWithData(data: any[], size: any, initialized: any): void
    initWithBuffer(buffer: Gst.Buffer, initialized: any): void
    free(): void
    freeAndGetData(): any[]
    freeAndGetBuffer(): Gst.Buffer
    reset(): void
    resetAndGetData(): any[]
    resetAndGetBuffer(): Gst.Buffer
    getRemaining(): any
    ensureFreeSpace(size: any): any
    putUint8(val: any): any
    putInt8(val: any): any
    putUint16Be(val: any): any
    putUint16Le(val: any): any
    putInt16Be(val: any): any
    putInt16Le(val: any): any
    putUint24Be(val: any): any
    putUint24Le(val: any): any
    putInt24Be(val: number): any
    putInt24Le(val: number): any
    putUint32Be(val: any): any
    putUint32Le(val: any): any
    putInt32Be(val: number): any
    putInt32Le(val: number): any
    putUint64Be(val: any): any
    putUint64Le(val: any): any
    putInt64Be(val: any): any
    putInt64Le(val: any): any
    putFloat32Be(val: any): any
    putFloat32Le(val: any): any
    putFloat64Be(val: number): any
    putFloat64Le(val: number): any
    putData(data: any[], size: any): any
    fill(value: any, size: any): any
    putStringUtf8(data: string): any
    putStringUtf16(): { returnType: any, data: any }
    putStringUtf32(): { returnType: any, data: any }
    static name: string
    static new(): GstByteWriter
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GstByteWriter
    static newWithSize(size: any, fixed: any): GstByteWriter
    static newWithData(data: any[], size: any, initialized: any): GstByteWriter
    static newWithBuffer(buffer: Gst.Buffer, initialized: any): GstByteWriter
}
export class GstCollectData {
    /* Fields of GstBase-0.10.GstBase.GstCollectData */
    collect: Gst.CollectPads
    pad: Gst.Pad
    buffer: Gst.Buffer
    pos: any
    segment: Gst.Segment
    static name: string
}
export abstract class GstCollectPadsClass {
    /* Fields of GstBase-0.10.GstBase.GstCollectPadsClass */
    parentClass: Gst.ObjectClass
    gstReserved: any[]
    static name: string
}
export class GstCollectPadsPrivate {
    static name: string
}
export abstract class GstDataQueueClass {
    /* Fields of GstBase-0.10.GstBase.GstDataQueueClass */
    parentClass: GObject.ObjectClass
    empty: (queue: Gst.DataQueue) => void
    full: (queue: Gst.DataQueue) => void
    gstReserved: any[]
    static name: string
}
export class GstDataQueueItem {
    /* Fields of GstBase-0.10.GstBase.GstDataQueueItem */
    object: Gst.MiniObject
    size: any
    duration: any
    visible: any
    destroy: GLib.DestroyNotify
    static name: string
}
export class GstDataQueueSize {
    /* Fields of GstBase-0.10.GstBase.GstDataQueueSize */
    visible: any
    bytes: any
    time: any
    static name: string
}
export abstract class GstPushSrcClass {
    /* Fields of GstBase-0.10.GstBase.GstPushSrcClass */
    parentClass: Gst.BaseSrcClass
    create: (src: Gst.PushSrc, buf: Gst.Buffer) => Gst.FlowReturn
    gstReserved: any[]
    static name: string
}
export abstract class SinkClass {
    /* Fields of GstBase-0.10.GstBase.SinkClass */
    parentClass: Gst.ElementClass
    getCaps: (sink: Gst.BaseSink) => Gst.Caps
    setCaps: (sink: Gst.BaseSink, caps: Gst.Caps) => any
    bufferAlloc: (sink: Gst.BaseSink, offset: any, size: any, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    getTimes: (sink: Gst.BaseSink, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    start: (sink: Gst.BaseSink) => any
    stop: (sink: Gst.BaseSink) => any
    unlock: (sink: Gst.BaseSink) => any
    event: (sink: Gst.BaseSink, event: Gst.Event) => any
    preroll: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    render: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    asyncPlay: (sink: Gst.BaseSink) => Gst.StateChangeReturn
    activatePull: (sink: Gst.BaseSink, active: any) => any
    fixate: (sink: Gst.BaseSink, caps: Gst.Caps) => void
    unlockStop: (sink: Gst.BaseSink) => any
    renderList: (sink: Gst.BaseSink, bufferList: Gst.BufferList) => Gst.FlowReturn
    gstReserved: any[]
    static name: string
}
export class SinkPrivate {
    static name: string
}
export abstract class SrcClass {
    /* Fields of GstBase-0.10.GstBase.SrcClass */
    parentClass: Gst.ElementClass
    getCaps: (src: Gst.BaseSrc) => Gst.Caps
    setCaps: (src: Gst.BaseSrc, caps: Gst.Caps) => any
    negotiate: (src: Gst.BaseSrc) => any
    newsegment: (src: Gst.BaseSrc) => any
    start: (src: Gst.BaseSrc) => any
    stop: (src: Gst.BaseSrc) => any
    getTimes: (src: Gst.BaseSrc, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    getSize: (src: Gst.BaseSrc) => { returnType: any, size: any }
    isSeekable: (src: Gst.BaseSrc) => any
    unlock: (src: Gst.BaseSrc) => any
    event: (src: Gst.BaseSrc, event: Gst.Event) => any
    create: (src: Gst.BaseSrc, offset: any, size: any, buf: Gst.Buffer) => Gst.FlowReturn
    doSeek: (src: Gst.BaseSrc, segment: Gst.Segment) => any
    query: (src: Gst.BaseSrc, query: Gst.Query) => any
    checkGetRange: (src: Gst.BaseSrc) => any
    fixate: (src: Gst.BaseSrc, caps: Gst.Caps) => void
    unlockStop: (src: Gst.BaseSrc) => any
    prepareSeekSegment: (src: Gst.BaseSrc, seek: Gst.Event, segment: Gst.Segment) => any
    gstReserved: any[]
    static name: string
}
export class SrcPrivate {
    static name: string
}
export abstract class TransformClass {
    /* Fields of GstBase-0.10.GstBase.TransformClass */
    parentClass: Gst.ElementClass
    transformCaps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => Gst.Caps
    fixateCaps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps) => void
    transformSize: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, size: any, othercaps: Gst.Caps) => { returnType: any, othersize: any }
    getUnitSize: (trans: Gst.BaseTransform, caps: Gst.Caps) => { returnType: any, size: any }
    setCaps: (trans: Gst.BaseTransform, incaps: Gst.Caps, outcaps: Gst.Caps) => any
    start: (trans: Gst.BaseTransform) => any
    stop: (trans: Gst.BaseTransform) => any
    event: (trans: Gst.BaseTransform, event: Gst.Event) => any
    transform: (trans: Gst.BaseTransform, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => Gst.FlowReturn
    transformIp: (trans: Gst.BaseTransform, buf: Gst.Buffer) => Gst.FlowReturn
    passthroughOnSameCaps: any
    prepareOutputBuffer: (trans: Gst.BaseTransform, input: Gst.Buffer, size: any, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    srcEvent: (trans: Gst.BaseTransform, event: Gst.Event) => any
    beforeTransform: (trans: Gst.BaseTransform, buffer: Gst.Buffer) => void
    acceptCaps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => any
    gstReserved: any[]
    static name: string
}
export class TransformPrivate {
    static name: string
}
}