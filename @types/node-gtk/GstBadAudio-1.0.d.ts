/**
 * GstBadAudio-1.0
 */

/// <reference types="node" />
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstAudio } from './GstAudio-1.0';

declare namespace GstBadAudio {

export enum NonstreamAudioOutputMode {
    LOOPING,
    STEADY,
}
export enum NonstreamAudioSubsongMode {
    SINGLE,
    ALL,
    DECODER_DEFAULT,
}
export const NONSTREAM_AUDIO_DECODER_SINK_NAME: string
export const NONSTREAM_AUDIO_DECODER_SRC_NAME: string
export interface NonstreamAudioDecoder_ConstructProps extends Gst.Element_ConstructProps {
    currentSubsong?: number
    numLoops?: number
}
export class NonstreamAudioDecoder {
    /* Properties of GstBadAudio.NonstreamAudioDecoder */
    currentSubsong: number
    numLoops: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBadAudio.NonstreamAudioDecoder */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    upstreamSize: number
    loadedMode: boolean
    inputDataAdapter: GstBase.Adapter
    subsongMode: NonstreamAudioSubsongMode
    subsongDuration: Gst.ClockTime
    outputMode: NonstreamAudioOutputMode
    outputFormatChanged: boolean
    outputAudioInfo: GstAudio.AudioInfo
    curPosInSamples: number
    numDecodedSamples: number
    curSegment: Gst.Segment
    discont: boolean
    toc: Gst.Toc
    allocator: Gst.Allocator
    allocationParams: Gst.AllocationParams
    mutex: GLib.Mutex
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
    /* Methods of GstBadAudio.NonstreamAudioDecoder */
    allocateOutputBuffer(size: number): Gst.Buffer
    getDownstreamInfo(format: GstAudio.AudioFormat, sampleRate: number, numChannels: number): void
    handleLoop(newPosition: Gst.ClockTime): void
    setOutputFormat(audioInfo: GstAudio.AudioInfo): boolean
    setOutputFormatSimple(sampleRate: number, sampleFormat: GstAudio.AudioFormat, numChannels: number): boolean
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
    /* Virtual methods of GstBadAudio.NonstreamAudioDecoder */
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncDecode(buffer: Gst.Buffer, numSamples: number): boolean
    vfuncGetCurrentSubsong(): number
    vfuncGetMainTags(): Gst.TagList
    vfuncGetNumLoops(): number
    vfuncGetNumSubsongs(): number
    vfuncGetSubsongDuration(subsong: number): Gst.ClockTime
    vfuncGetSubsongTags(subsong: number): Gst.TagList
    vfuncGetSupportedOutputModes(): number
    vfuncLoadFromBuffer(sourceData: Gst.Buffer, initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number): boolean
    vfuncLoadFromCustom(initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number): boolean
    vfuncNegotiate(): boolean
    vfuncProposeAllocation(query: Gst.Query): boolean
    vfuncSeek(newPosition: Gst.ClockTime): boolean
    vfuncSetCurrentSubsong(subsong: number, initialPosition: Gst.ClockTime): boolean
    vfuncSetNumLoops(numLoops: number): boolean
    vfuncSetOutputMode(mode: NonstreamAudioOutputMode, currentPosition: Gst.ClockTime): boolean
    vfuncSetSubsongMode(mode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime): boolean
    vfuncTell(): Gst.ClockTime
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
    connect(sigName: "no-more-pads", callback: (($obj: NonstreamAudioDecoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: NonstreamAudioDecoder) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: NonstreamAudioDecoder, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: NonstreamAudioDecoder, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: NonstreamAudioDecoder, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: NonstreamAudioDecoder, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: NonstreamAudioDecoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NonstreamAudioDecoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-subsong", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subsong", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-subsong", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-subsong", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-subsong", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-loops", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-loops", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-loops", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-loops", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-loops", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NonstreamAudioDecoder_ConstructProps)
    _init (config?: NonstreamAudioDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlanarAudioAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class PlanarAudioAdapter {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBadAudio.PlanarAudioAdapter */
    available(): number
    clear(): void
    configure(info: GstAudio.AudioInfo): void
    distanceFromDiscont(): number
    dtsAtDiscont(): Gst.ClockTime
    flush(toFlush: number): void
    getBuffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null
    offsetAtDiscont(): number
    prevDts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prevOffset(): [ /* returnType */ number, /* distance */ number | null ]
    prevPts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    ptsAtDiscont(): Gst.ClockTime
    push(buf: Gst.Buffer): void
    takeBuffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null
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
    connect(sigName: "notify", callback: (($obj: PlanarAudioAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlanarAudioAdapter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PlanarAudioAdapter_ConstructProps)
    _init (config?: PlanarAudioAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PlanarAudioAdapter
    static $gtype: GObject.Type
}
export abstract class NonstreamAudioDecoderClass {
    /* Fields of GstBadAudio.NonstreamAudioDecoderClass */
    elementClass: Gst.ElementClass
    loadsFromSinkpad: boolean
    seek: (dec: NonstreamAudioDecoder, newPosition: Gst.ClockTime) => boolean
    tell: (dec: NonstreamAudioDecoder) => Gst.ClockTime
    loadFromBuffer: (dec: NonstreamAudioDecoder, sourceData: Gst.Buffer, initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number) => boolean
    loadFromCustom: (dec: NonstreamAudioDecoder, initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number) => boolean
    getMainTags: (dec: NonstreamAudioDecoder) => Gst.TagList
    setCurrentSubsong: (dec: NonstreamAudioDecoder, subsong: number, initialPosition: Gst.ClockTime) => boolean
    getCurrentSubsong: (dec: NonstreamAudioDecoder) => number
    getNumSubsongs: (dec: NonstreamAudioDecoder) => number
    getSubsongDuration: (dec: NonstreamAudioDecoder, subsong: number) => Gst.ClockTime
    getSubsongTags: (dec: NonstreamAudioDecoder, subsong: number) => Gst.TagList
    setSubsongMode: (dec: NonstreamAudioDecoder, mode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime) => boolean
    setNumLoops: (dec: NonstreamAudioDecoder, numLoops: number) => boolean
    getNumLoops: (dec: NonstreamAudioDecoder) => number
    getSupportedOutputModes: (dec: NonstreamAudioDecoder) => number
    setOutputMode: (dec: NonstreamAudioDecoder, mode: NonstreamAudioOutputMode, currentPosition: Gst.ClockTime) => boolean
    decode: (dec: NonstreamAudioDecoder, buffer: Gst.Buffer, numSamples: number) => boolean
    negotiate: (dec: NonstreamAudioDecoder) => boolean
    decideAllocation: (dec: NonstreamAudioDecoder, query: Gst.Query) => boolean
    proposeAllocation: (dec: NonstreamAudioDecoder, query: Gst.Query) => boolean
    static name: string
}
export abstract class PlanarAudioAdapterClass {
    static name: string
}
}