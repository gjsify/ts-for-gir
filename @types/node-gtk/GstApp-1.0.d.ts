/**
 * GstApp-1.0
 */

/// <reference types="node" />
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstApp {

export enum AppStreamType {
    STREAM,
    SEEKABLE,
    RANDOM_ACCESS,
}
export interface AppSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    bufferList?: boolean
    caps?: Gst.Caps
    drop?: boolean
    emitSignals?: boolean
    maxBuffers?: number
    waitOnEos?: boolean
}
export class AppSink {
    /* Properties of GstApp.AppSink */
    bufferList: boolean
    caps: Gst.Caps
    drop: boolean
    emitSignals: boolean
    readonly eos: boolean
    maxBuffers: number
    waitOnEos: boolean
    /* Properties of GstBase.BaseSink */
    async: boolean
    blocksize: number
    enableLastSample: boolean
    readonly lastSample: Gst.Sample
    maxBitrate: number
    maxLateness: number
    processingDeadline: number
    qos: boolean
    renderDelay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttleTime: number
    tsOffset: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstApp.AppSink */
    basesink: GstBase.BaseSink
    /* Fields of GstBase.BaseSink */
    element: Gst.Element
    sinkpad: Gst.Pad
    padMode: Gst.PadMode
    offset: number
    canActivatePull: boolean
    canActivatePush: boolean
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
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
    /* Methods of GstApp.AppSink */
    getBufferListSupport(): boolean
    getCaps(): Gst.Caps
    getDrop(): boolean
    getEmitSignals(): boolean
    getMaxBuffers(): number
    getWaitOnEos(): boolean
    isEos(): boolean
    pullPreroll(): Gst.Sample
    pullSample(): Gst.Sample
    setBufferListSupport(enableLists: boolean): void
    setCaps(caps?: Gst.Caps | null): void
    setDrop(drop: boolean): void
    setEmitSignals(emit: boolean): void
    setMaxBuffers(max: number): void
    setWaitOnEos(wait: boolean): void
    tryPullPreroll(timeout: Gst.ClockTime): Gst.Sample
    tryPullSample(timeout: Gst.ClockTime): Gst.Sample
    /* Methods of GstBase.BaseSink */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    getBlocksize(): number
    getDropOutOfSegment(): boolean
    getLastSample(): Gst.Sample | null
    getLatency(): Gst.ClockTime
    getMaxBitrate(): number
    getMaxLateness(): number
    getProcessingDeadline(): Gst.ClockTime
    getRenderDelay(): Gst.ClockTime
    getStats(): Gst.Structure
    getSync(): boolean
    getThrottleTime(): number
    getTsOffset(): Gst.ClockTimeDiff
    isAsyncEnabled(): boolean
    isLastSampleEnabled(): boolean
    isQosEnabled(): boolean
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstreamLive */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    setAsyncEnabled(enabled: boolean): void
    setBlocksize(blocksize: number): void
    setDropOutOfSegment(dropOutOfSegment: boolean): void
    setLastSampleEnabled(enabled: boolean): void
    setMaxBitrate(maxBitrate: number): void
    setMaxLateness(maxLateness: number): void
    setProcessingDeadline(processingDeadline: Gst.ClockTime): void
    setQosEnabled(enabled: boolean): void
    setRenderDelay(delay: Gst.ClockTime): void
    setSync(sync: boolean): void
    setThrottleTime(throttle: number): void
    setTsOffset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitClock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitPreroll(): Gst.FlowReturn
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
    /* Methods of Gst.URIHandler */
    getProtocols(): string[] | null
    getUri(): string | null
    getUriType(): Gst.URIType
    setUri(uri: string): boolean
    /* Virtual methods of GstApp.AppSink */
    vfuncEos(): void
    vfuncNewPreroll(): Gst.FlowReturn
    vfuncNewSample(): Gst.FlowReturn
    vfuncPullPreroll(): Gst.Sample
    vfuncPullSample(): Gst.Sample
    vfuncTryPullPreroll(timeout: Gst.ClockTime): Gst.Sample
    vfuncTryPullSample(timeout: Gst.ClockTime): Gst.Sample
    vfuncGetUri(): string | null
    vfuncSetUri(uri: string): boolean
    /* Virtual methods of GstBase.BaseSink */
    vfuncActivatePull(active: boolean): boolean
    vfuncEvent(event: Gst.Event): boolean
    vfuncFixate(caps: Gst.Caps): Gst.Caps
    vfuncGetCaps(filter: Gst.Caps): Gst.Caps
    vfuncGetTimes(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfuncPrepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncPrepareList(bufferList: Gst.BufferList): Gst.FlowReturn
    vfuncPreroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncProposeAllocation(query: Gst.Query): boolean
    vfuncQuery(query: Gst.Query): boolean
    vfuncRender(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncRenderList(bufferList: Gst.BufferList): Gst.FlowReturn
    vfuncSetCaps(caps: Gst.Caps): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncUnlock(): boolean
    vfuncUnlockStop(): boolean
    vfuncWaitEvent(event: Gst.Event): Gst.FlowReturn
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
    /* Signals of GstApp.AppSink */
    connect(sigName: "eos", callback: (($obj: AppSink) => void)): number
    connect_after(sigName: "eos", callback: (($obj: AppSink) => void)): number
    emit(sigName: "eos"): void
    on(sigName: "eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-preroll", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    connect_after(sigName: "new-preroll", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    emit(sigName: "new-preroll"): void
    on(sigName: "new-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "new-sample", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    connect_after(sigName: "new-sample", callback: (($obj: AppSink) => Gst.FlowReturn)): number
    emit(sigName: "new-sample"): void
    on(sigName: "new-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "new-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "new-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pull-preroll", callback: (($obj: AppSink) => Gst.Sample)): number
    connect_after(sigName: "pull-preroll", callback: (($obj: AppSink) => Gst.Sample)): number
    emit(sigName: "pull-preroll"): void
    on(sigName: "pull-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pull-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pull-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pull-sample", callback: (($obj: AppSink) => Gst.Sample)): number
    connect_after(sigName: "pull-sample", callback: (($obj: AppSink) => Gst.Sample)): number
    emit(sigName: "pull-sample"): void
    on(sigName: "pull-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pull-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pull-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "try-pull-preroll", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    connect_after(sigName: "try-pull-preroll", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    emit(sigName: "try-pull-preroll", timeout: number): void
    on(sigName: "try-pull-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "try-pull-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "try-pull-preroll", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "try-pull-sample", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    connect_after(sigName: "try-pull-sample", callback: (($obj: AppSink, timeout: number) => Gst.Sample)): number
    emit(sigName: "try-pull-sample", timeout: number): void
    on(sigName: "try-pull-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "try-pull-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "try-pull-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AppSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AppSink) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: AppSink, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AppSink, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: AppSink, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AppSink, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AppSink, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AppSink, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-list", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drop", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-buffers", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-buffers", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wait-on-eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wait-on-eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AppSink_ConstructProps)
    _init (config?: AppSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AppSrc_ConstructProps extends GstBase.BaseSrc_ConstructProps {
    block?: boolean
    caps?: Gst.Caps
    duration?: number
    emitSignals?: boolean
    format?: Gst.Format
    handleSegmentChange?: boolean
    isLive?: boolean
    maxBytes?: number
    maxLatency?: number
    minLatency?: number
    minPercent?: number
    size?: number
    streamType?: AppStreamType
}
export class AppSrc {
    /* Properties of GstApp.AppSrc */
    block: boolean
    caps: Gst.Caps
    readonly currentLevelBytes: number
    duration: number
    emitSignals: boolean
    format: Gst.Format
    handleSegmentChange: boolean
    isLive: boolean
    maxBytes: number
    maxLatency: number
    minLatency: number
    minPercent: number
    size: number
    streamType: AppStreamType
    /* Properties of GstBase.BaseSrc */
    blocksize: number
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstApp.AppSrc */
    basesrc: GstBase.BaseSrc
    /* Fields of GstBase.BaseSrc */
    element: Gst.Element
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    liveRunning: boolean
    canActivatePush: boolean
    randomAccess: boolean
    clockId: Gst.ClockID
    segment: Gst.Segment
    needNewsegment: boolean
    numBuffersLeft: number
    running: boolean
    pendingSeek: Gst.Event
    priv: GstBase.BaseSrcPrivate
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
    /* Methods of GstApp.AppSrc */
    endOfStream(): Gst.FlowReturn
    getCaps(): Gst.Caps
    getCurrentLevelBytes(): number
    getDuration(): Gst.ClockTime
    getEmitSignals(): boolean
    getLatency(): [ /* min */ number, /* max */ number ]
    getMaxBytes(): number
    getSize(): number
    getStreamType(): AppStreamType
    pushBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    pushBufferList(bufferList: Gst.BufferList): Gst.FlowReturn
    pushSample(sample: Gst.Sample): Gst.FlowReturn
    setCaps(caps?: Gst.Caps | null): void
    setDuration(duration: Gst.ClockTime): void
    setEmitSignals(emit: boolean): void
    setLatency(min: number, max: number): void
    setMaxBytes(max: number): void
    setSize(size: number): void
    setStreamType(type: AppStreamType): void
    /* Methods of GstBase.BaseSrc */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBlocksize(): number
    getBufferPool(): Gst.BufferPool | null
    getDoTimestamp(): boolean
    isAsync(): boolean
    negotiate(): boolean
    newSeamlessSegment(start: number, stop: number, time: number): boolean
    newSegment(segment: Gst.Segment): boolean
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    setAsync(async: boolean): void
    setAutomaticEos(automaticEos: boolean): void
    setBlocksize(blocksize: number): void
    setCaps(caps: Gst.Caps): boolean
    setDoTimestamp(timestamp: boolean): void
    setDynamicSize(dynamic: boolean): void
    setFormat(format: Gst.Format): void
    setLive(live: boolean): void
    startComplete(ret: Gst.FlowReturn): void
    startWait(): Gst.FlowReturn
    submitBufferList(bufferList: Gst.BufferList): void
    waitPlaying(): Gst.FlowReturn
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
    /* Methods of Gst.URIHandler */
    getProtocols(): string[] | null
    getUri(): string | null
    getUriType(): Gst.URIType
    setUri(uri: string): boolean
    /* Virtual methods of GstApp.AppSrc */
    vfuncEndOfStream(): Gst.FlowReturn
    vfuncEnoughData(): void
    vfuncNeedData(length: number): void
    vfuncPushBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfuncPushBufferList(bufferList: Gst.BufferList): Gst.FlowReturn
    vfuncPushSample(sample: Gst.Sample): Gst.FlowReturn
    vfuncSeekData(offset: number): boolean
    vfuncGetUri(): string | null
    vfuncSetUri(uri: string): boolean
    /* Virtual methods of GstBase.BaseSrc */
    vfuncAlloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfuncCreate(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncDoSeek(segment: Gst.Segment): boolean
    vfuncEvent(event: Gst.Event): boolean
    vfuncFill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfuncFixate(caps: Gst.Caps): Gst.Caps
    vfuncGetCaps(filter?: Gst.Caps | null): Gst.Caps
    vfuncGetSize(size: number): boolean
    vfuncGetTimes(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfuncIsSeekable(): boolean
    vfuncNegotiate(): boolean
    vfuncPrepareSeekSegment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfuncQuery(query: Gst.Query): boolean
    vfuncSetCaps(caps: Gst.Caps): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncUnlock(): boolean
    vfuncUnlockStop(): boolean
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
    /* Signals of GstApp.AppSrc */
    connect(sigName: "end-of-stream", callback: (($obj: AppSrc) => Gst.FlowReturn)): number
    connect_after(sigName: "end-of-stream", callback: (($obj: AppSrc) => Gst.FlowReturn)): number
    emit(sigName: "end-of-stream"): void
    on(sigName: "end-of-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enough-data", callback: (($obj: AppSrc) => void)): number
    connect_after(sigName: "enough-data", callback: (($obj: AppSrc) => void)): number
    emit(sigName: "enough-data"): void
    on(sigName: "enough-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enough-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enough-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "need-data", callback: (($obj: AppSrc, length: number) => void)): number
    connect_after(sigName: "need-data", callback: (($obj: AppSrc, length: number) => void)): number
    emit(sigName: "need-data", length: number): void
    on(sigName: "need-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "need-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "need-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "push-buffer", callback: (($obj: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn)): number
    connect_after(sigName: "push-buffer", callback: (($obj: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn)): number
    emit(sigName: "push-buffer", buffer: Gst.Buffer): void
    on(sigName: "push-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "push-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "push-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "push-buffer-list", callback: (($obj: AppSrc, bufferList: Gst.BufferList) => Gst.FlowReturn)): number
    connect_after(sigName: "push-buffer-list", callback: (($obj: AppSrc, bufferList: Gst.BufferList) => Gst.FlowReturn)): number
    emit(sigName: "push-buffer-list", bufferList: Gst.BufferList): void
    on(sigName: "push-buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "push-buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "push-buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "push-sample", callback: (($obj: AppSrc, sample: Gst.Sample) => Gst.FlowReturn)): number
    connect_after(sigName: "push-sample", callback: (($obj: AppSrc, sample: Gst.Sample) => Gst.FlowReturn)): number
    emit(sigName: "push-sample", sample: Gst.Sample): void
    on(sigName: "push-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "push-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "push-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "seek-data", callback: (($obj: AppSrc, offset: number) => boolean)): number
    connect_after(sigName: "seek-data", callback: (($obj: AppSrc, offset: number) => boolean)): number
    emit(sigName: "seek-data", offset: number): void
    on(sigName: "seek-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "seek-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "seek-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AppSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AppSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: AppSrc, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AppSrc, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: AppSrc, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AppSrc, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AppSrc, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AppSrc, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::block", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::handle-segment-change", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-segment-change", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-live", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-live", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-percent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-percent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-percent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-percent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-percent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AppSrc_ConstructProps)
    _init (config?: AppSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export class AppSinkCallbacks {
    /* Fields of GstApp.AppSinkCallbacks */
    eos: (appsink: AppSink) => void
    newPreroll: (appsink: AppSink) => Gst.FlowReturn
    newSample: (appsink: AppSink) => Gst.FlowReturn
    static name: string
}
export abstract class AppSinkClass {
    /* Fields of GstApp.AppSinkClass */
    basesinkClass: GstBase.BaseSinkClass
    eos: (appsink: AppSink) => void
    newPreroll: (appsink: AppSink) => Gst.FlowReturn
    newSample: (appsink: AppSink) => Gst.FlowReturn
    pullPreroll: (appsink: AppSink) => Gst.Sample
    pullSample: (appsink: AppSink) => Gst.Sample
    tryPullPreroll: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample
    tryPullSample: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample
    static name: string
}
export class AppSinkPrivate {
    static name: string
}
export class AppSrcCallbacks {
    /* Fields of GstApp.AppSrcCallbacks */
    needData: (src: AppSrc, length: number) => void
    enoughData: (src: AppSrc) => void
    seekData: (src: AppSrc, offset: number) => boolean
    static name: string
}
export abstract class AppSrcClass {
    /* Fields of GstApp.AppSrcClass */
    basesrcClass: GstBase.BaseSrcClass
    needData: (appsrc: AppSrc, length: number) => void
    enoughData: (appsrc: AppSrc) => void
    seekData: (appsrc: AppSrc, offset: number) => boolean
    pushBuffer: (appsrc: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn
    endOfStream: (appsrc: AppSrc) => Gst.FlowReturn
    pushSample: (appsrc: AppSrc, sample: Gst.Sample) => Gst.FlowReturn
    pushBufferList: (appsrc: AppSrc, bufferList: Gst.BufferList) => Gst.FlowReturn
    static name: string
}
export class AppSrcPrivate {
    static name: string
}
}