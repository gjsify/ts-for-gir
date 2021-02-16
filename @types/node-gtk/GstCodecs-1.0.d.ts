/**
 * GstCodecs-1.0
 */

/// <reference types="node" />
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstCodecs {

export enum H264PictureField {
    FRAME,
    TOP_FIELD,
    BOTTOM_FIELD,
}
export enum H264PictureReference {
    NONE,
    SHORT_TERM,
    LONG_TERM,
}
export const H264_DPB_MAX_SIZE: number
export const H265_DPB_MAX_SIZE: number
export interface H264Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class H264Decoder {
    /* Properties of GstVideo.VideoDecoder */
    discardCorruptedFrames: boolean
    maxErrors: number
    minForceKeyUnitInterval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstCodecs.H264Decoder */
    getPicture(systemFrameNumber: number): H264Picture
    setProcessRefPicLists(process: boolean): void
    /* Methods of GstVideo.VideoDecoder */
    addToFrame(nBytes: number): void
    allocateOutputBuffer(): Gst.Buffer
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    getFrames(): GstVideo.VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    getNeedsFormat(): boolean
    getNeedsSyncPoint(): boolean
    getOldestFrame(): GstVideo.VideoCodecFrame
    getOutputState(): GstVideo.VideoCodecState
    getPacketized(): boolean
    getPendingFrameSize(): number
    getQosProportion(): number
    haveFrame(): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    setEstimateRate(enabled: boolean): void
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setNeedsFormat(enabled: boolean): void
    setNeedsSyncPoint(enabled: boolean): void
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setPacketized(packetized: boolean): void
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstCodecs.H264Decoder */
    vfuncDecodeSlice(picture: H264Picture, slice: H264Slice, refPicList0: H264Picture[], refPicList1: H264Picture[]): boolean
    vfuncEndPicture(picture: H264Picture): boolean
    vfuncGetPreferredOutputDelay(live: boolean): number
    vfuncNewFieldPicture(firstField: H264Picture, secondField: H264Picture): boolean
    vfuncNewPicture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): boolean
    vfuncOutputPicture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn
    vfuncStartPicture(picture: H264Picture, slice: H264Slice, dpb: H264Dpb): boolean
    /* Virtual methods of GstVideo.VideoDecoder */
    vfuncClose(): boolean
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncDrain(): Gst.FlowReturn
    vfuncFinish(): Gst.FlowReturn
    vfuncFlush(): boolean
    vfuncGetcaps(filter: Gst.Caps): Gst.Caps
    vfuncHandleFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfuncNegotiate(): boolean
    vfuncOpen(): boolean
    vfuncParse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean): Gst.FlowReturn
    vfuncProposeAllocation(query: Gst.Query): boolean
    vfuncReset(hard: boolean): boolean
    vfuncSetFormat(state: GstVideo.VideoCodecState): boolean
    vfuncSinkEvent(event: Gst.Event): boolean
    vfuncSinkQuery(query: Gst.Query): boolean
    vfuncSrcEvent(event: Gst.Event): boolean
    vfuncSrcQuery(query: Gst.Query): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncTransformMeta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Gst.Pad): void
    vfuncPadRemoved(pad: Gst.Pad): void
    vfuncPostMessage(message: Gst.Message): boolean
    vfuncProvideClock(): Gst.Clock | null
    vfuncQuery(query: Gst.Query): boolean
    vfuncReleasePad(pad: Gst.Pad): void
    vfuncRequestNewPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent(event: Gst.Event): boolean
    vfuncSetBus(bus?: Gst.Bus | null): void
    vfuncSetClock(clock?: Gst.Clock | null): boolean
    vfuncSetContext(context: Gst.Context): void
    vfuncSetState(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: H264Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: H264Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: H264Decoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: H264Decoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: H264Decoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: H264Decoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: H264Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: H264Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: H264Decoder_ConstructProps)
    _init (config?: H264Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface H265Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class H265Decoder {
    /* Properties of GstVideo.VideoDecoder */
    discardCorruptedFrames: boolean
    maxErrors: number
    minForceKeyUnitInterval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstCodecs.H265Decoder */
    getPicture(systemFrameNumber: number): H265Picture
    setProcessRefPicLists(process: boolean): void
    /* Methods of GstVideo.VideoDecoder */
    addToFrame(nBytes: number): void
    allocateOutputBuffer(): Gst.Buffer
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    getFrames(): GstVideo.VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    getNeedsFormat(): boolean
    getNeedsSyncPoint(): boolean
    getOldestFrame(): GstVideo.VideoCodecFrame
    getOutputState(): GstVideo.VideoCodecState
    getPacketized(): boolean
    getPendingFrameSize(): number
    getQosProportion(): number
    haveFrame(): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    setEstimateRate(enabled: boolean): void
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setNeedsFormat(enabled: boolean): void
    setNeedsSyncPoint(enabled: boolean): void
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setPacketized(packetized: boolean): void
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstCodecs.H265Decoder */
    vfuncEndPicture(picture: H265Picture): boolean
    vfuncNewPicture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): boolean
    vfuncOutputPicture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn
    vfuncStartPicture(picture: H265Picture, slice: H265Slice, dpb: H265Dpb): boolean
    /* Virtual methods of GstVideo.VideoDecoder */
    vfuncClose(): boolean
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncDrain(): Gst.FlowReturn
    vfuncFinish(): Gst.FlowReturn
    vfuncFlush(): boolean
    vfuncGetcaps(filter: Gst.Caps): Gst.Caps
    vfuncHandleFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfuncNegotiate(): boolean
    vfuncOpen(): boolean
    vfuncParse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean): Gst.FlowReturn
    vfuncProposeAllocation(query: Gst.Query): boolean
    vfuncReset(hard: boolean): boolean
    vfuncSetFormat(state: GstVideo.VideoCodecState): boolean
    vfuncSinkEvent(event: Gst.Event): boolean
    vfuncSinkQuery(query: Gst.Query): boolean
    vfuncSrcEvent(event: Gst.Event): boolean
    vfuncSrcQuery(query: Gst.Query): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncTransformMeta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Gst.Pad): void
    vfuncPadRemoved(pad: Gst.Pad): void
    vfuncPostMessage(message: Gst.Message): boolean
    vfuncProvideClock(): Gst.Clock | null
    vfuncQuery(query: Gst.Query): boolean
    vfuncReleasePad(pad: Gst.Pad): void
    vfuncRequestNewPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent(event: Gst.Event): boolean
    vfuncSetBus(bus?: Gst.Bus | null): void
    vfuncSetClock(clock?: Gst.Clock | null): boolean
    vfuncSetContext(context: Gst.Context): void
    vfuncSetState(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: H265Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: H265Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: H265Decoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: H265Decoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: H265Decoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: H265Decoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: H265Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: H265Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: H265Decoder_ConstructProps)
    _init (config?: H265Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Mpeg2Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class Mpeg2Decoder {
    /* Properties of GstVideo.VideoDecoder */
    discardCorruptedFrames: boolean
    maxErrors: number
    minForceKeyUnitInterval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo.VideoDecoder */
    addToFrame(nBytes: number): void
    allocateOutputBuffer(): Gst.Buffer
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    getFrames(): GstVideo.VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    getNeedsFormat(): boolean
    getNeedsSyncPoint(): boolean
    getOldestFrame(): GstVideo.VideoCodecFrame
    getOutputState(): GstVideo.VideoCodecState
    getPacketized(): boolean
    getPendingFrameSize(): number
    getQosProportion(): number
    haveFrame(): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    setEstimateRate(enabled: boolean): void
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setNeedsFormat(enabled: boolean): void
    setNeedsSyncPoint(enabled: boolean): void
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setPacketized(packetized: boolean): void
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstCodecs.Mpeg2Decoder */
    vfuncDecodeSlice(picture: Mpeg2Picture, slice: Mpeg2Slice): boolean
    vfuncEndPicture(picture: Mpeg2Picture): boolean
    vfuncNewFieldPicture(firstField: Mpeg2Picture, secondField: Mpeg2Picture): boolean
    vfuncNewPicture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): boolean
    vfuncOutputPicture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn
    vfuncStartPicture(picture: Mpeg2Picture, slice: Mpeg2Slice, prevPicture: Mpeg2Picture, nextPicture: Mpeg2Picture): boolean
    /* Virtual methods of GstVideo.VideoDecoder */
    vfuncClose(): boolean
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncDrain(): Gst.FlowReturn
    vfuncFinish(): Gst.FlowReturn
    vfuncFlush(): boolean
    vfuncGetcaps(filter: Gst.Caps): Gst.Caps
    vfuncHandleFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfuncNegotiate(): boolean
    vfuncOpen(): boolean
    vfuncParse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean): Gst.FlowReturn
    vfuncProposeAllocation(query: Gst.Query): boolean
    vfuncReset(hard: boolean): boolean
    vfuncSetFormat(state: GstVideo.VideoCodecState): boolean
    vfuncSinkEvent(event: Gst.Event): boolean
    vfuncSinkQuery(query: Gst.Query): boolean
    vfuncSrcEvent(event: Gst.Event): boolean
    vfuncSrcQuery(query: Gst.Query): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncTransformMeta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Gst.Pad): void
    vfuncPadRemoved(pad: Gst.Pad): void
    vfuncPostMessage(message: Gst.Message): boolean
    vfuncProvideClock(): Gst.Clock | null
    vfuncQuery(query: Gst.Query): boolean
    vfuncReleasePad(pad: Gst.Pad): void
    vfuncRequestNewPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent(event: Gst.Event): boolean
    vfuncSetBus(bus?: Gst.Bus | null): void
    vfuncSetClock(clock?: Gst.Clock | null): boolean
    vfuncSetContext(context: Gst.Context): void
    vfuncSetState(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Mpeg2Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Mpeg2Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: Mpeg2Decoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Mpeg2Decoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: Mpeg2Decoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Mpeg2Decoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Mpeg2Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Mpeg2Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Mpeg2Decoder_ConstructProps)
    _init (config?: Mpeg2Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Vp8Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class Vp8Decoder {
    /* Properties of GstVideo.VideoDecoder */
    discardCorruptedFrames: boolean
    maxErrors: number
    minForceKeyUnitInterval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo.VideoDecoder */
    addToFrame(nBytes: number): void
    allocateOutputBuffer(): Gst.Buffer
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    getFrames(): GstVideo.VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    getNeedsFormat(): boolean
    getNeedsSyncPoint(): boolean
    getOldestFrame(): GstVideo.VideoCodecFrame
    getOutputState(): GstVideo.VideoCodecState
    getPacketized(): boolean
    getPendingFrameSize(): number
    getQosProportion(): number
    haveFrame(): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    setEstimateRate(enabled: boolean): void
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setNeedsFormat(enabled: boolean): void
    setNeedsSyncPoint(enabled: boolean): void
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setPacketized(packetized: boolean): void
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstCodecs.Vp8Decoder */
    vfuncEndPicture(picture: Vp8Picture): boolean
    vfuncNewPicture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): boolean
    vfuncOutputPicture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn
    vfuncStartPicture(picture: Vp8Picture): boolean
    /* Virtual methods of GstVideo.VideoDecoder */
    vfuncClose(): boolean
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncDrain(): Gst.FlowReturn
    vfuncFinish(): Gst.FlowReturn
    vfuncFlush(): boolean
    vfuncGetcaps(filter: Gst.Caps): Gst.Caps
    vfuncHandleFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfuncNegotiate(): boolean
    vfuncOpen(): boolean
    vfuncParse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean): Gst.FlowReturn
    vfuncProposeAllocation(query: Gst.Query): boolean
    vfuncReset(hard: boolean): boolean
    vfuncSetFormat(state: GstVideo.VideoCodecState): boolean
    vfuncSinkEvent(event: Gst.Event): boolean
    vfuncSinkQuery(query: Gst.Query): boolean
    vfuncSrcEvent(event: Gst.Event): boolean
    vfuncSrcQuery(query: Gst.Query): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncTransformMeta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Gst.Pad): void
    vfuncPadRemoved(pad: Gst.Pad): void
    vfuncPostMessage(message: Gst.Message): boolean
    vfuncProvideClock(): Gst.Clock | null
    vfuncQuery(query: Gst.Query): boolean
    vfuncReleasePad(pad: Gst.Pad): void
    vfuncRequestNewPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent(event: Gst.Event): boolean
    vfuncSetBus(bus?: Gst.Bus | null): void
    vfuncSetClock(clock?: Gst.Clock | null): boolean
    vfuncSetContext(context: Gst.Context): void
    vfuncSetState(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Vp8Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Vp8Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: Vp8Decoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Vp8Decoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: Vp8Decoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Vp8Decoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Vp8Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Vp8Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Vp8Decoder_ConstructProps)
    _init (config?: Vp8Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Vp9Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
export class Vp9Decoder {
    /* Properties of GstVideo.VideoDecoder */
    discardCorruptedFrames: boolean
    maxErrors: number
    minForceKeyUnitInterval: number
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Element */
    object: Gst.Object
    stateLock: GLib.RecMutex
    stateCond: GLib.Cond
    stateCookie: number
    targetState: Gst.State
    currentState: Gst.State
    nextState: Gst.State
    pendingState: Gst.State
    lastReturn: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    baseTime: Gst.ClockTimeDiff
    startTime: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo.VideoDecoder */
    addToFrame(nBytes: number): void
    allocateOutputBuffer(): Gst.Buffer
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    getFrames(): GstVideo.VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    getNeedsFormat(): boolean
    getNeedsSyncPoint(): boolean
    getOldestFrame(): GstVideo.VideoCodecFrame
    getOutputState(): GstVideo.VideoCodecState
    getPacketized(): boolean
    getPendingFrameSize(): number
    getQosProportion(): number
    haveFrame(): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    setEstimateRate(enabled: boolean): void
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setNeedsFormat(enabled: boolean): void
    setNeedsSyncPoint(enabled: boolean): void
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    setPacketized(packetized: boolean): void
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any
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
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GstCodecs.Vp9Decoder */
    vfuncDecodePicture(picture: Vp9Picture, dpb: Vp9Dpb): boolean
    vfuncDuplicatePicture(picture: Vp9Picture): Vp9Picture
    vfuncEndPicture(picture: Vp9Picture): boolean
    vfuncNewPicture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): boolean
    vfuncOutputPicture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn
    vfuncStartPicture(picture: Vp9Picture): boolean
    /* Virtual methods of GstVideo.VideoDecoder */
    vfuncClose(): boolean
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncDrain(): Gst.FlowReturn
    vfuncFinish(): Gst.FlowReturn
    vfuncFlush(): boolean
    vfuncGetcaps(filter: Gst.Caps): Gst.Caps
    vfuncHandleFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    vfuncNegotiate(): boolean
    vfuncOpen(): boolean
    vfuncParse(frame: GstVideo.VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean): Gst.FlowReturn
    vfuncProposeAllocation(query: Gst.Query): boolean
    vfuncReset(hard: boolean): boolean
    vfuncSetFormat(state: GstVideo.VideoCodecState): boolean
    vfuncSinkEvent(event: Gst.Event): boolean
    vfuncSinkQuery(query: Gst.Query): boolean
    vfuncSrcEvent(event: Gst.Event): boolean
    vfuncSrcQuery(query: Gst.Query): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncTransformMeta(frame: GstVideo.VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst.Element */
    vfuncChangeState(transition: Gst.StateChange): Gst.StateChangeReturn
    vfuncGetState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfuncNoMorePads(): void
    vfuncPadAdded(pad: Gst.Pad): void
    vfuncPadRemoved(pad: Gst.Pad): void
    vfuncPostMessage(message: Gst.Message): boolean
    vfuncProvideClock(): Gst.Clock | null
    vfuncQuery(query: Gst.Query): boolean
    vfuncReleasePad(pad: Gst.Pad): void
    vfuncRequestNewPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfuncSendEvent(event: Gst.Event): boolean
    vfuncSetBus(bus?: Gst.Bus | null): void
    vfuncSetClock(clock?: Gst.Clock | null): boolean
    vfuncSetContext(context: Gst.Context): void
    vfuncSetState(state: Gst.State): Gst.StateChangeReturn
    vfuncStateChanged(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfuncDeepNotify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Vp9Decoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Vp9Decoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: Vp9Decoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Vp9Decoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: Vp9Decoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Vp9Decoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Vp9Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Vp9Decoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Vp9Decoder_ConstructProps)
    _init (config?: Vp9Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class H264DecoderClass {
    /* Fields of GstCodecs.H264DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => boolean
    newFieldPicture: (decoder: H264Decoder, firstField: H264Picture, secondField: H264Picture) => boolean
    startPicture: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, dpb: H264Dpb) => boolean
    decodeSlice: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, refPicList0: H264Picture[], refPicList1: H264Picture[]) => boolean
    endPicture: (decoder: H264Decoder, picture: H264Picture) => boolean
    outputPicture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => Gst.FlowReturn
    getPreferredOutputDelay: (decoder: H264Decoder, live: boolean) => number
    static name: string
}
export class H264DecoderPrivate {
    static name: string
}
export class H264Dpb {
    /* Methods of GstCodecs.H264Dpb */
    add(picture: H264Picture): void
    bump(drain: boolean): H264Picture | null
    clear(): void
    deleteUnused(): void
    free(): void
    getInterlaced(): boolean
    getLongRefByLongTermPicNum(longTermPicNum: number): H264Picture | null
    getLowestFrameNumShortRef(): H264Picture
    getMaxNumFrames(): number
    getPicture(systemFrameNumber: number): H264Picture
    getPicturesAll(): H264Picture[]
    getPicturesLongTermRef(includeSecondField: boolean): /* out */ H264Picture[]
    getPicturesShortTermRef(includeNonExisting: boolean, includeSecondField: boolean): /* out */ H264Picture[]
    getShortRefByPicNum(picNum: number): H264Picture | null
    getSize(): number
    markAllNonRef(): void
    needsBump(maxNumReorderFrames: number, lowLatency: boolean): boolean
    numRefFrames(): number
    setInterlaced(interlaced: boolean): void
    setMaxNumFrames(maxNumFrames: number): void
    static name: string
}
export class H264Picture {
    /* Methods of GstCodecs.H264Picture */
    getUserData(): object | null
    setReference(reference: H264PictureReference, otherField: boolean): void
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): H264Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): H264Picture
}
export class H264Slice {
    static name: string
}
export abstract class H265DecoderClass {
    /* Fields of GstCodecs.H265DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => boolean
    startPicture: (decoder: H265Decoder, picture: H265Picture, slice: H265Slice, dpb: H265Dpb) => boolean
    endPicture: (decoder: H265Decoder, picture: H265Picture) => boolean
    outputPicture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => Gst.FlowReturn
    static name: string
}
export class H265DecoderPrivate {
    static name: string
}
export class H265Dpb {
    /* Methods of GstCodecs.H265Dpb */
    add(picture: H265Picture): void
    bump(drain: boolean): H265Picture | null
    clear(): void
    deleteUnused(): void
    free(): void
    getLongRefByPoc(poc: number): H265Picture | null
    getMaxNumPics(): number
    getPicture(systemFrameNumber: number): H265Picture
    getPicturesAll(): H265Picture[]
    getRefByPoc(poc: number): H265Picture | null
    getRefByPocLsb(pocLsb: number): H265Picture | null
    getShortRefByPoc(poc: number): H265Picture | null
    getSize(): number
    isFull(): boolean
    markAllNonRef(): void
    needsBump(maxNumReorderPics: number, maxLatencyIncrease: number, maxDecPicBuffering: number): boolean
    numRefPictures(): number
    setMaxNumPics(maxNumPics: number): void
    static name: string
}
export class H265Picture {
    /* Methods of GstCodecs.H265Picture */
    getUserData(): object | null
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): H265Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): H265Picture
}
export class H265Slice {
    static name: string
}
export abstract class Mpeg2DecoderClass {
    /* Fields of GstCodecs.Mpeg2DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => boolean
    newFieldPicture: (decoder: Mpeg2Decoder, firstField: Mpeg2Picture, secondField: Mpeg2Picture) => boolean
    startPicture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice, prevPicture: Mpeg2Picture, nextPicture: Mpeg2Picture) => boolean
    decodeSlice: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice) => boolean
    endPicture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture) => boolean
    outputPicture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => Gst.FlowReturn
    static name: string
}
export class Mpeg2DecoderPrivate {
    static name: string
}
export class Mpeg2Dpb {
    /* Methods of GstCodecs.Mpeg2Dpb */
    add(picture: Mpeg2Picture): void
    bump(): Mpeg2Picture | null
    clear(): void
    free(): void
    getNeighbours(picture: Mpeg2Picture): [ /* prevPicturePtr */ Mpeg2Picture | null, /* nextPicturePtr */ Mpeg2Picture | null ]
    needBump(): boolean
    static name: string
}
export class Mpeg2Picture {
    /* Methods of GstCodecs.Mpeg2Picture */
    getUserData(): object | null
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Mpeg2Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Mpeg2Picture
}
export class Mpeg2Slice {
    static name: string
}
export abstract class Vp8DecoderClass {
    /* Fields of GstCodecs.Vp8DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => boolean
    startPicture: (decoder: Vp8Decoder, picture: Vp8Picture) => boolean
    endPicture: (decoder: Vp8Decoder, picture: Vp8Picture) => boolean
    outputPicture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => Gst.FlowReturn
    static name: string
}
export class Vp8DecoderPrivate {
    static name: string
}
export class Vp8Picture {
    /* Fields of GstCodecs.Vp8Picture */
    parent: Gst.MiniObject
    pts: Gst.ClockTime
    systemFrameNumber: number
    data: number
    size: number
    userData: object
    notify: GLib.DestroyNotify
    /* Methods of GstCodecs.Vp8Picture */
    getUserData(): object | null
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Vp8Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Vp8Picture
}
export abstract class Vp9DecoderClass {
    /* Fields of GstCodecs.Vp9DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => boolean
    duplicatePicture: (decoder: Vp9Decoder, picture: Vp9Picture) => Vp9Picture
    startPicture: (decoder: Vp9Decoder, picture: Vp9Picture) => boolean
    decodePicture: (decoder: Vp9Decoder, picture: Vp9Picture, dpb: Vp9Dpb) => boolean
    endPicture: (decoder: Vp9Decoder, picture: Vp9Picture) => boolean
    outputPicture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Gst.FlowReturn
    static name: string
}
export class Vp9DecoderPrivate {
    static name: string
}
export class Vp9Dpb {
    /* Fields of GstCodecs.Vp9Dpb */
    picList: Vp9Picture[]
    /* Methods of GstCodecs.Vp9Dpb */
    add(picture: Vp9Picture): void
    clear(): void
    free(): void
    static name: string
}
export class Vp9Picture {
    /* Methods of GstCodecs.Vp9Picture */
    getUserData(): object | null
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Vp9Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Vp9Picture
}
}