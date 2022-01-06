/**
 * GstAudio-1.0
 */

import "node"
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstAudio {

export enum AudioBaseSinkDiscontReason {
    NO_DISCONT,
    NEW_CAPS,
    FLUSH,
    SYNC_LATENCY,
    ALIGNMENT,
    DEVICE_FAILURE,
}
export enum AudioBaseSinkSlaveMethod {
    RESAMPLE,
    SKEW,
    NONE,
    CUSTOM,
}
export enum AudioBaseSrcSlaveMethod {
    RESAMPLE,
    RE_TIMESTAMP,
    SKEW,
    NONE,
}
export enum AudioCdSrcMode {
    NORMAL,
    CONTINUOUS,
}
export enum AudioChannelPosition {
    NONE,
    MONO,
    INVALID,
    FRONT_LEFT,
    FRONT_RIGHT,
    FRONT_CENTER,
    LFE1,
    REAR_LEFT,
    REAR_RIGHT,
    FRONT_LEFT_OF_CENTER,
    FRONT_RIGHT_OF_CENTER,
    REAR_CENTER,
    LFE2,
    SIDE_LEFT,
    SIDE_RIGHT,
    TOP_FRONT_LEFT,
    TOP_FRONT_RIGHT,
    TOP_FRONT_CENTER,
    TOP_CENTER,
    TOP_REAR_LEFT,
    TOP_REAR_RIGHT,
    TOP_SIDE_LEFT,
    TOP_SIDE_RIGHT,
    TOP_REAR_CENTER,
    BOTTOM_FRONT_CENTER,
    BOTTOM_FRONT_LEFT,
    BOTTOM_FRONT_RIGHT,
    WIDE_LEFT,
    WIDE_RIGHT,
    SURROUND_LEFT,
    SURROUND_RIGHT,
}
export enum AudioDitherMethod {
    NONE,
    RPDF,
    TPDF,
    TPDF_HF,
}
export enum AudioFormat {
    UNKNOWN,
    ENCODED,
    S8,
    U8,
    S16LE,
    S16BE,
    U16LE,
    U16BE,
    S24_32LE,
    S24_32BE,
    U24_32LE,
    U24_32BE,
    S32LE,
    S32BE,
    U32LE,
    U32BE,
    S24LE,
    S24BE,
    U24LE,
    U24BE,
    S20LE,
    S20BE,
    U20LE,
    U20BE,
    S18LE,
    S18BE,
    U18LE,
    U18BE,
    F32LE,
    F32BE,
    F64LE,
    F64BE,
    S16,
    U16,
    S24_32,
    U24_32,
    S32,
    U32,
    S24,
    U24,
    S20,
    U20,
    S18,
    U18,
    F32,
    F64,
}
export enum AudioLayout {
    INTERLEAVED,
    NON_INTERLEAVED,
}
export enum AudioNoiseShapingMethod {
    NONE,
    ERROR_FEEDBACK,
    SIMPLE,
    MEDIUM,
    HIGH,
}
export enum AudioResamplerFilterInterpolation {
    NONE,
    LINEAR,
    CUBIC,
}
export enum AudioResamplerFilterMode {
    INTERPOLATED,
    FULL,
    AUTO,
}
export enum AudioResamplerMethod {
    NEAREST,
    LINEAR,
    CUBIC,
    BLACKMAN_NUTTALL,
    KAISER,
}
export enum AudioRingBufferFormatType {
    RAW,
    MU_LAW,
    A_LAW,
    IMA_ADPCM,
    MPEG,
    GSM,
    IEC958,
    AC3,
    EAC3,
    DTS,
    MPEG2_AAC,
    MPEG4_AAC,
    MPEG2_AAC_RAW,
    MPEG4_AAC_RAW,
    FLAC,
}
export enum AudioRingBufferState {
    STOPPED,
    PAUSED,
    STARTED,
    ERROR,
}
export enum StreamVolumeFormat {
    LINEAR,
    CUBIC,
    DB,
}
export enum AudioChannelMixerFlags {
    NONE,
    NON_INTERLEAVED_IN,
    NON_INTERLEAVED_OUT,
    UNPOSITIONED_IN,
    UNPOSITIONED_OUT,
}
export enum AudioConverterFlags {
    NONE,
    IN_WRITABLE,
    VARIABLE_RATE,
}
export enum AudioFlags {
    NONE,
    UNPOSITIONED,
}
export enum AudioFormatFlags {
    INTEGER,
    FLOAT,
    SIGNED,
    COMPLEX,
    UNPACK,
}
export enum AudioPackFlags {
    NONE,
    TRUNCATE_RANGE,
}
export enum AudioQuantizeFlags {
    NONE,
    NON_INTERLEAVED,
}
export enum AudioResamplerFlags {
    NONE,
    NON_INTERLEAVED_IN,
    NON_INTERLEAVED_OUT,
    VARIABLE_RATE,
}
export const AUDIO_CHANNELS_RANGE: string
export const AUDIO_CONVERTER_OPT_DITHER_METHOD: string
export const AUDIO_CONVERTER_OPT_MIX_MATRIX: string
export const AUDIO_CONVERTER_OPT_NOISE_SHAPING_METHOD: string
export const AUDIO_CONVERTER_OPT_QUANTIZATION: string
export const AUDIO_CONVERTER_OPT_RESAMPLER_METHOD: string
export const AUDIO_DECODER_MAX_ERRORS: number
export const AUDIO_DECODER_SINK_NAME: string
export const AUDIO_DECODER_SRC_NAME: string
export const AUDIO_DEF_CHANNELS: number
export const AUDIO_DEF_FORMAT: string
export const AUDIO_DEF_RATE: number
export const AUDIO_ENCODER_SINK_NAME: string
export const AUDIO_ENCODER_SRC_NAME: string
export const AUDIO_FORMATS_ALL: string
export const AUDIO_RATE_RANGE: string
export const AUDIO_RESAMPLER_OPT_CUBIC_B: string
export const AUDIO_RESAMPLER_OPT_CUBIC_C: string
export const AUDIO_RESAMPLER_OPT_CUTOFF: string
export const AUDIO_RESAMPLER_OPT_FILTER_INTERPOLATION: string
export const AUDIO_RESAMPLER_OPT_FILTER_MODE: string
export const AUDIO_RESAMPLER_OPT_FILTER_MODE_THRESHOLD: string
export const AUDIO_RESAMPLER_OPT_FILTER_OVERSAMPLE: string
export const AUDIO_RESAMPLER_OPT_MAX_PHASE_ERROR: string
export const AUDIO_RESAMPLER_OPT_N_TAPS: string
export const AUDIO_RESAMPLER_OPT_STOP_ATTENUATION: string
export const AUDIO_RESAMPLER_OPT_TRANSITION_BANDWIDTH: string
export const AUDIO_RESAMPLER_QUALITY_DEFAULT: number
export const AUDIO_RESAMPLER_QUALITY_MAX: number
export const AUDIO_RESAMPLER_QUALITY_MIN: number
export const META_TAG_AUDIO_CHANNELS_STR: string
export const META_TAG_AUDIO_RATE_STR: string
export const META_TAG_AUDIO_STR: string
export function audioBufferClip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer
export function audioBufferMap(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): { returnType: boolean, buffer: AudioBuffer }
export function audioBufferReorderChannels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
export function audioBufferTruncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer
export function audioChannelGetFallbackMask(channels: number): number
export function audioChannelPositionsFromMask(channelMask: number, position: AudioChannelPosition[]): boolean
export function audioChannelPositionsToMask(position: AudioChannelPosition[], forceOrder: boolean): { returnType: boolean, channelMask: number }
export function audioChannelPositionsToString(position: AudioChannelPosition[]): string
export function audioChannelPositionsToValidOrder(position: AudioChannelPosition[]): boolean
export function audioCheckValidChannelPositions(position: AudioChannelPosition[], forceOrder: boolean): boolean
export function audioClippingMetaApiGetType(): GObject.Type
export function audioClippingMetaGetInfo(): Gst.MetaInfo
export function audioDownmixMetaApiGetType(): GObject.Type
export function audioDownmixMetaGetInfo(): Gst.MetaInfo
export function audioFormatBuildInteger(sign: boolean, endianness: number, width: number, depth: number): AudioFormat
export function audioFormatFillSilence(info: AudioFormatInfo, dest: any[]): void
export function audioFormatFromString(format: string): AudioFormat
export function audioFormatGetInfo(format: AudioFormat): AudioFormatInfo
export function audioFormatInfoGetType(): GObject.Type
export function audioFormatToString(format: AudioFormat): string
export function audioFormatsRaw(): AudioFormat[]
export function audioGetChannelReorderMap(from: AudioChannelPosition[], to: AudioChannelPosition[], reorderMap: number[]): boolean
export function audioIec61937FrameSize(spec: AudioRingBufferSpec): number
export function audioIec61937Payload(src: any[], dst: any[], spec: AudioRingBufferSpec, endianness: number): boolean
export function audioInfoFromCaps(caps: Gst.Caps): { returnType: boolean, info: AudioInfo }
export function audioInfoInit(): { info: AudioInfo }
export function audioLevelMetaApiGetType(): GObject.Type
export function audioLevelMetaGetInfo(): Gst.MetaInfo
export function audioMakeRawCaps(formats: AudioFormat[] | null, layout: AudioLayout): Gst.Caps
export function audioMetaApiGetType(): GObject.Type
export function audioMetaGetInfo(): Gst.MetaInfo
export function audioReorderChannels(data: any[], format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
export function audioResamplerNew(method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, inRate: number, outRate: number, options: Gst.Structure): AudioResampler
export function audioResamplerOptionsSetQuality(method: AudioResamplerMethod, quality: number, inRate: number, outRate: number, options: Gst.Structure): void
export function bufferAddAudioClippingMeta(buffer: Gst.Buffer, format: Gst.Format, start: number, end: number): AudioClippingMeta
export function bufferAddAudioDownmixMeta(buffer: Gst.Buffer, fromPosition: AudioChannelPosition[], toPosition: AudioChannelPosition[], matrix: number): AudioDownmixMeta
export function bufferAddAudioLevelMeta(buffer: Gst.Buffer, level: number, voiceActivity: boolean): AudioLevelMeta | null
export function bufferAddAudioMeta(buffer: Gst.Buffer, info: AudioInfo, samples: number, offsets?: number | null): AudioMeta
export function bufferGetAudioDownmixMetaForChannels(buffer: Gst.Buffer, toPosition: AudioChannelPosition[]): AudioDownmixMeta
export function bufferGetAudioLevelMeta(buffer: Gst.Buffer): AudioLevelMeta | null
export function streamVolumeConvertVolume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
export interface AudioBaseSinkCustomSlavingCallback {
    (sink: AudioBaseSink, etime: Gst.ClockTime, itime: Gst.ClockTime, requestedSkew: Gst.ClockTimeDiff, discontReason: AudioBaseSinkDiscontReason): void
}
export interface AudioClockGetTimeFunc {
    (clock: Gst.Clock): Gst.ClockTime
}
export interface AudioFormatPack {
    (info: AudioFormatInfo, flags: AudioPackFlags, src: any[], data: any[], length: number): void
}
export interface AudioFormatUnpack {
    (info: AudioFormatInfo, flags: AudioPackFlags, dest: any[], data: any[], length: number): void
}
export interface AudioRingBufferCallback {
    (rbuf: AudioRingBuffer, data: any[]): void
}
export class StreamVolume {
    /* Properties of GstAudio-1.0.GstAudio.StreamVolume */
    mute: boolean
    volume: number
    /* Methods of GstAudio-1.0.GstAudio.StreamVolume */
    getMute(): boolean
    getVolume(format: StreamVolumeFormat): number
    setMute(mute: boolean): void
    setVolume(format: StreamVolumeFormat, val: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static convertVolume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
}
export interface AudioAggregator_ConstructProps extends GstBase.Aggregator_ConstructProps {
    alignmentThreshold?: number
    discontWait?: number
    ignoreInactivePads?: boolean
    outputBufferDuration?: number
    outputBufferDurationFraction?: Gst.Fraction
}
export class AudioAggregator {
    /* Properties of GstAudio-1.0.GstAudio.AudioAggregator */
    alignmentThreshold: number
    discontWait: number
    ignoreInactivePads: boolean
    outputBufferDuration: number
    outputBufferDurationFraction: Gst.Fraction
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    emitSignals: boolean
    latency: number
    minUpstreamLatency: number
    startTime: number
    startTimeSelection: GstBase.AggregatorStartTimeSelection
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregator */
    currentCaps: Gst.Caps
    /* Fields of GstBase-1.0.GstBase.Aggregator */
    srcpad: Gst.Pad
    /* Fields of Gst-1.0.Gst.Element */
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
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    padsCookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioAggregator */
    setSinkCaps(pad: AudioAggregatorPad, caps: Gst.Caps): void
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    finishBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    finishBufferList(bufferlist: Gst.BufferList): Gst.FlowReturn
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getBufferPool(): Gst.BufferPool | null
    getIgnoreInactivePads(): boolean
    getLatency(): Gst.ClockTime
    negotiate(): boolean
    peekNextSample(pad: GstBase.AggregatorPad): Gst.Sample | null
    selectedSamples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    setIgnoreInactivePads(ignore: boolean): void
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setSrcCaps(caps: Gst.Caps): void
    simpleGetNextTime(): Gst.ClockTime
    updateSegment(segment: Gst.Segment): void
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: (($obj: AudioAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    on(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void): NodeJS.EventEmitter
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioAggregator) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioAggregator, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioAggregator, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioAggregator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-inactive-pads", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-inactive-pads", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-inactive-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-inactive-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-inactive-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-buffer-duration", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-buffer-duration", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-buffer-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-buffer-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-buffer-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-buffer-duration-fraction", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-buffer-duration-fraction", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-buffer-duration-fraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-buffer-duration-fraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-buffer-duration-fraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time-selection", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioAggregator_ConstructProps)
    _init (config?: AudioAggregator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioAggregatorConvertPad_ConstructProps extends AudioAggregatorPad_ConstructProps {
    converterConfig?: Gst.Structure
}
export class AudioAggregatorConvertPad {
    /* Properties of GstAudio-1.0.GstAudio.AudioAggregatorConvertPad */
    converterConfig: Gst.Structure
    /* Properties of GstAudio-1.0.GstAudio.AudioAggregatorPad */
    qosMessages: boolean
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emitSignals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorPad */
    info: AudioInfo
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    object: Gst.Object
    elementPrivate: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): { returnType: Gst.FlowReturn, buffer: Gst.Buffer }
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    peerQueryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    peerQueryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): { returnType: Gst.FlowReturn, buffer: Gst.Buffer }
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: AudioAggregatorConvertPad, object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: AudioAggregatorConvertPad, peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: AudioAggregatorConvertPad, peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioAggregatorConvertPad, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::converter-config", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioAggregatorConvertPad_ConstructProps)
    _init (config?: AudioAggregatorConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioAggregatorPad_ConstructProps extends GstBase.AggregatorPad_ConstructProps {
    qosMessages?: boolean
}
export class AudioAggregatorPad {
    /* Properties of GstAudio-1.0.GstAudio.AudioAggregatorPad */
    qosMessages: boolean
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emitSignals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorPad */
    info: AudioInfo
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    object: Gst.Object
    elementPrivate: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): { returnType: Gst.FlowReturn, buffer: Gst.Buffer }
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    peerQueryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    peerQueryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): { returnType: Gst.FlowReturn, buffer: Gst.Buffer }
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: AudioAggregatorPad, object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: AudioAggregatorPad, peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: AudioAggregatorPad, peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioAggregatorPad, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos-messages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioAggregatorPad_ConstructProps)
    _init (config?: AudioAggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioBaseSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    alignmentThreshold?: number
    bufferTime?: number
    canActivatePull?: boolean
    discontWait?: number
    driftTolerance?: number
    latencyTime?: number
    provideClock?: boolean
    slaveMethod?: AudioBaseSinkSlaveMethod
}
export class AudioBaseSink {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSink */
    alignmentThreshold: number
    bufferTime: number
    canActivatePull: boolean
    discontWait: number
    driftTolerance: number
    latencyTime: number
    provideClock: boolean
    slaveMethod: AudioBaseSinkSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSink */
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
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSink */
    element: GstBase.BaseSink
    ringbuffer: AudioRingBuffer
    nextSample: number
    providedClock: Gst.Clock
    eosRendering: boolean
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    sinkpad: Gst.Pad
    padMode: Gst.PadMode
    offset: number
    canActivatePush: boolean
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    eos: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSink */
    createRingbuffer(): AudioRingBuffer
    getAlignmentThreshold(): Gst.ClockTime
    getDiscontWait(): Gst.ClockTime
    getDriftTolerance(): number
    getProvideClock(): boolean
    getSlaveMethod(): AudioBaseSinkSlaveMethod
    reportDeviceFailure(): void
    setAlignmentThreshold(alignmentThreshold: Gst.ClockTime): void
    setCustomSlavingCallback(callback: AudioBaseSinkCustomSlavingCallback): void
    setDiscontWait(discontWait: Gst.ClockTime): void
    setDriftTolerance(driftTolerance: number): void
    setProvideClock(provide: boolean): void
    setSlaveMethod(method: AudioBaseSinkSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSink */
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
    queryLatency(): { returnType: boolean, live: boolean | null, upstreamLive: boolean | null, minLatency: Gst.ClockTime | null, maxLatency: Gst.ClockTime | null }
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
    wait(time: Gst.ClockTime): { returnType: Gst.FlowReturn, jitter: Gst.ClockTimeDiff | null }
    waitClock(time: Gst.ClockTime): { returnType: Gst.ClockReturn, jitter: Gst.ClockTimeDiff | null }
    waitPreroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioBaseSink) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioBaseSink, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioBaseSink, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioBaseSink, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-activate-pull", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drift-tolerance", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slave-method", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioBaseSink_ConstructProps)
    _init (config?: AudioBaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioBaseSrc_ConstructProps extends GstBase.PushSrc_ConstructProps {
    bufferTime?: number
    latencyTime?: number
    provideClock?: boolean
    slaveMethod?: AudioBaseSrcSlaveMethod
}
export class AudioBaseSrc {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSrc */
    readonly actualBufferTime: number
    readonly actualLatencyTime: number
    bufferTime: number
    latencyTime: number
    provideClock: boolean
    slaveMethod: AudioBaseSrcSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSrc */
    element: GstBase.PushSrc
    ringbuffer: AudioRingBuffer
    nextSample: number
    clock: Gst.Clock
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: boolean
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
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSrc */
    createRingbuffer(): AudioRingBuffer
    getProvideClock(): boolean
    getSlaveMethod(): AudioBaseSrcSlaveMethod
    setProvideClock(provide: boolean): void
    setSlaveMethod(method: AudioBaseSrcSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getBlocksize(): number
    getBufferPool(): Gst.BufferPool | null
    getDoTimestamp(): boolean
    isAsync(): boolean
    negotiate(): boolean
    newSeamlessSegment(start: number, stop: number, time: number): boolean
    newSegment(segment: Gst.Segment): boolean
    queryLatency(): { returnType: boolean, live: boolean | null, minLatency: Gst.ClockTime | null, maxLatency: Gst.ClockTime | null }
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
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioBaseSrc) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioBaseSrc, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioBaseSrc, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioBaseSrc, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actual-buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actual-latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slave-method", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioBaseSrc_ConstructProps)
    _init (config?: AudioBaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioCdSrc_ConstructProps extends GstBase.PushSrc_ConstructProps {
    device?: string
    mode?: AudioCdSrcMode
    track?: number
}
export class AudioCdSrc {
    /* Properties of GstAudio-1.0.GstAudio.AudioCdSrc */
    device: string
    mode: AudioCdSrcMode
    track: number
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioCdSrc */
    pushsrc: GstBase.PushSrc
    tags: Gst.TagList
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    element: Gst.Element
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: boolean
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
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioCdSrc */
    addTrack(track: AudioCdSrcTrack): boolean
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getBlocksize(): number
    getBufferPool(): Gst.BufferPool | null
    getDoTimestamp(): boolean
    isAsync(): boolean
    negotiate(): boolean
    newSeamlessSegment(start: number, stop: number, time: number): boolean
    newSegment(segment: Gst.Segment): boolean
    queryLatency(): { returnType: boolean, live: boolean | null, minLatency: Gst.ClockTime | null, maxLatency: Gst.ClockTime | null }
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
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Methods of Gst-1.0.Gst.URIHandler */
    getProtocols(): string[] | null
    getUri(): string | null
    getUriType(): Gst.URIType
    setUri(uri: string): boolean
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioCdSrc) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioCdSrc, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioCdSrc, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioCdSrc, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioCdSrc_ConstructProps)
    _init (config?: AudioCdSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioClock_ConstructProps extends Gst.SystemClock_ConstructProps {
}
export class AudioClock {
    /* Properties of Gst-1.0.Gst.SystemClock */
    clockType: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioClock */
    clock: Gst.SystemClock
    func: AudioClockGetTimeFunc
    userData: object
    destroyNotify: GLib.DestroyNotify
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioClock */
    adjust(time: Gst.ClockTime): Gst.ClockTime
    getTime(): Gst.ClockTime
    invalidate(): void
    reset(time: Gst.ClockTime): void
    /* Methods of Gst-1.0.Gst.Clock */
    addObservation(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number }
    addObservationUnapplied(slave: Gst.ClockTime, master: Gst.ClockTime): { returnType: boolean, rSquared: number, internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    adjustUnlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjustWithCalibration(internalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    getCalibration(): { internal: Gst.ClockTime | null, external: Gst.ClockTime | null, rateNum: Gst.ClockTime | null, rateDenom: Gst.ClockTime | null }
    getInternalTime(): Gst.ClockTime
    getMaster(): Gst.Clock | null
    getResolution(): Gst.ClockTime
    getTimeout(): Gst.ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    newSingleShotId(time: Gst.ClockTime): Gst.ClockID
    periodicIdReinit(id: Gst.ClockID, startTime: Gst.ClockTime, interval: Gst.ClockTime): boolean
    setCalibration(internal: Gst.ClockTime, external: Gst.ClockTime, rateNum: Gst.ClockTime, rateDenom: Gst.ClockTime): void
    setMaster(master?: Gst.Clock | null): boolean
    setResolution(resolution: Gst.ClockTime): Gst.ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: Gst.ClockTime): void
    singleShotIdReinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjustUnlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjustWithCalibration(externalTarget: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    waitForSync(timeout: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: AudioClock, synced: boolean) => void)): number
    on(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "synced", callback: (synced: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioClock, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioClock_ConstructProps)
    _init (config?: AudioClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, func: AudioClockGetTimeFunc): AudioClock
    static $gtype: GObject.Type
}
export interface AudioDecoder_ConstructProps extends Gst.Element_ConstructProps {
    maxErrors?: number
    minLatency?: number
    plc?: boolean
    tolerance?: number
}
export class AudioDecoder {
    /* Properties of GstAudio-1.0.GstAudio.AudioDecoder */
    maxErrors: number
    minLatency: number
    plc: boolean
    tolerance: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioDecoder */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    streamLock: GLib.RecMutex
    inputSegment: Gst.Segment
    outputSegment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioDecoder */
    allocateOutputBuffer(size: number): Gst.Buffer
    finishFrame(buf: Gst.Buffer | null, frames: number): Gst.FlowReturn
    finishSubframe(buf?: Gst.Buffer | null): Gst.FlowReturn
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getAudioInfo(): AudioInfo
    getDelay(): number
    getDrainable(): boolean
    getEstimateRate(): number
    getLatency(): { min: Gst.ClockTime | null, max: Gst.ClockTime | null }
    getMaxErrors(): number
    getMinLatency(): Gst.ClockTime
    getNeedsFormat(): boolean
    getParseState(): { sync: boolean | null, eos: boolean | null }
    getPlc(): boolean
    getPlcAware(): number
    getTolerance(): Gst.ClockTime
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    setAllocationCaps(allocationCaps?: Gst.Caps | null): void
    setDrainable(enabled: boolean): void
    setEstimateRate(enabled: boolean): void
    setLatency(min: Gst.ClockTime, max: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setMinLatency(num: Gst.ClockTime): void
    setNeedsFormat(enabled: boolean): void
    setOutputCaps(caps: Gst.Caps): boolean
    setOutputFormat(info: AudioInfo): boolean
    setPlc(enabled: boolean): void
    setPlcAware(plc: boolean): void
    setTolerance(tolerance: Gst.ClockTime): void
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioDecoder) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioDecoder, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioDecoder, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioDecoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-errors", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-latency", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plc", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plc", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tolerance", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioDecoder_ConstructProps)
    _init (config?: AudioDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioEncoder_ConstructProps extends Gst.Element_ConstructProps {
    hardResync?: boolean
    perfectTimestamp?: boolean
    tolerance?: number
}
export class AudioEncoder {
    /* Properties of GstAudio-1.0.GstAudio.AudioEncoder */
    hardResync: boolean
    readonly markGranule: boolean
    perfectTimestamp: boolean
    tolerance: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioEncoder */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    streamLock: GLib.RecMutex
    inputSegment: Gst.Segment
    outputSegment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioEncoder */
    allocateOutputBuffer(size: number): Gst.Buffer
    finishFrame(buffer: Gst.Buffer | null, samples: number): Gst.FlowReturn
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getAudioInfo(): AudioInfo
    getDrainable(): boolean
    getFrameMax(): number
    getFrameSamplesMax(): number
    getFrameSamplesMin(): number
    getHardMin(): boolean
    getHardResync(): boolean
    getLatency(): { min: Gst.ClockTime | null, max: Gst.ClockTime | null }
    getLookahead(): number
    getMarkGranule(): boolean
    getPerfectTimestamp(): boolean
    getTolerance(): Gst.ClockTime
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    setAllocationCaps(allocationCaps?: Gst.Caps | null): void
    setDrainable(enabled: boolean): void
    setFrameMax(num: number): void
    setFrameSamplesMax(num: number): void
    setFrameSamplesMin(num: number): void
    setHardMin(enabled: boolean): void
    setHardResync(enabled: boolean): void
    setHeaders(headers: Gst.Buffer[]): void
    setLatency(min: Gst.ClockTime, max: Gst.ClockTime): void
    setLookahead(num: number): void
    setMarkGranule(enabled: boolean): void
    setOutputFormat(caps: Gst.Caps): boolean
    setPerfectTimestamp(enabled: boolean): void
    setTolerance(tolerance: Gst.ClockTime): void
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Methods of Gst-1.0.Gst.Preset */
    deletePreset(name: string): boolean
    getMeta(name: string, tag: string): { returnType: boolean, value: string }
    getPresetNames(): string[]
    getPropertyNames(): string[]
    isEditable(): boolean
    loadPreset(name: string): boolean
    renamePreset(oldName: string, newName: string): boolean
    savePreset(name: string): boolean
    setMeta(name: string, tag: string, value?: string | null): boolean
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioEncoder) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioEncoder, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioEncoder, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioEncoder, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hard-resync", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hard-resync", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hard-resync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hard-resync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hard-resync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mark-granule", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-granule", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mark-granule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mark-granule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mark-granule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perfect-timestamp", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-timestamp", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perfect-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perfect-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perfect-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tolerance", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioEncoder_ConstructProps)
    _init (config?: AudioEncoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getAppDir(): string | null
    static setAppDir(appDir: string): boolean
    static $gtype: GObject.Type
}
export interface AudioFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
export class AudioFilter {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioFilter */
    basetransform: GstBase.BaseTransform
    info: AudioInfo
    /* Fields of GstBase-1.0.GstBase.BaseTransform */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    haveSegment: boolean
    segment: Gst.Segment
    queuedBuf: Gst.Buffer
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getBufferPool(): Gst.BufferPool | null
    isInPlace(): boolean
    isPassthrough(): boolean
    isQosEnabled(): boolean
    reconfigure(): boolean
    reconfigureSink(): void
    reconfigureSrc(): void
    setGapAware(gapAware: boolean): void
    setInPlace(inPlace: boolean): void
    setPassthrough(passthrough: boolean): void
    setPreferPassthrough(preferPassthrough: boolean): void
    setQosEnabled(enabled: boolean): void
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    updateSrcCaps(updatedCaps: Gst.Caps): boolean
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioFilter) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioFilter, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioFilter, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioFilter, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioFilter_ConstructProps)
    _init (config?: AudioFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static addPadTemplates(klass: AudioFilter | Function | GObject.Type, allowedCaps: Gst.Caps): void
    static $gtype: GObject.Type
}
export interface AudioRingBuffer_ConstructProps extends Gst.Object_ConstructProps {
}
export class AudioRingBuffer {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioRingBuffer */
    object: Gst.Object
    cond: GLib.Cond
    open: boolean
    acquired: boolean
    memory: number
    size: number
    spec: AudioRingBufferSpec
    samplesPerSeg: number
    emptySeg: number
    state: number
    segdone: number
    segbase: number
    waiting: number
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioRingBuffer */
    acquire(spec: AudioRingBufferSpec): boolean
    activate(active: boolean): boolean
    advance(advance: number): void
    clear(segment: number): void
    clearAll(): void
    closeDevice(): boolean
    commit(sample: number, data: any[], outSamples: number, accum: number): { returnType: number, accum: number }
    convert(srcFmt: Gst.Format, srcVal: number, destFmt: Gst.Format): { returnType: boolean, destVal: number }
    delay(): number
    deviceIsOpen(): boolean
    isAcquired(): boolean
    isActive(): boolean
    isFlushing(): boolean
    mayStart(allowed: boolean): void
    openDevice(): boolean
    pause(): boolean
    prepareRead(): { returnType: boolean, segment: number, readptr: any[] }
    read(sample: number, data: any[]): { returnType: number, timestamp: Gst.ClockTime }
    release(): boolean
    samplesDone(): number
    setCallback(cb: AudioRingBufferCallback | null): void
    setChannelPositions(position: AudioChannelPosition[]): void
    setFlushing(flushing: boolean): void
    setSample(sample: number): void
    setTimestamp(readseg: number, timestamp: Gst.ClockTime): void
    start(): boolean
    stop(): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioRingBuffer, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioRingBuffer_ConstructProps)
    _init (config?: AudioRingBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static debugSpecBuff(spec: AudioRingBufferSpec): void
    static debugSpecCaps(spec: AudioRingBufferSpec): void
    static parseCaps(spec: AudioRingBufferSpec, caps: Gst.Caps): boolean
    static $gtype: GObject.Type
}
export interface AudioSink_ConstructProps extends AudioBaseSink_ConstructProps {
}
export class AudioSink {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSink */
    alignmentThreshold: number
    bufferTime: number
    canActivatePull: boolean
    discontWait: number
    driftTolerance: number
    latencyTime: number
    provideClock: boolean
    slaveMethod: AudioBaseSinkSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSink */
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
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioSink */
    element: AudioBaseSink
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSink */
    ringbuffer: AudioRingBuffer
    nextSample: number
    providedClock: Gst.Clock
    eosRendering: boolean
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    sinkpad: Gst.Pad
    padMode: Gst.PadMode
    offset: number
    canActivatePush: boolean
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    eos: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSink */
    createRingbuffer(): AudioRingBuffer
    getAlignmentThreshold(): Gst.ClockTime
    getDiscontWait(): Gst.ClockTime
    getDriftTolerance(): number
    getProvideClock(): boolean
    getSlaveMethod(): AudioBaseSinkSlaveMethod
    reportDeviceFailure(): void
    setAlignmentThreshold(alignmentThreshold: Gst.ClockTime): void
    setCustomSlavingCallback(callback: AudioBaseSinkCustomSlavingCallback): void
    setDiscontWait(discontWait: Gst.ClockTime): void
    setDriftTolerance(driftTolerance: number): void
    setProvideClock(provide: boolean): void
    setSlaveMethod(method: AudioBaseSinkSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSink */
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
    queryLatency(): { returnType: boolean, live: boolean | null, upstreamLive: boolean | null, minLatency: Gst.ClockTime | null, maxLatency: Gst.ClockTime | null }
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
    wait(time: Gst.ClockTime): { returnType: Gst.FlowReturn, jitter: Gst.ClockTimeDiff | null }
    waitClock(time: Gst.ClockTime): { returnType: Gst.ClockReturn, jitter: Gst.ClockTimeDiff | null }
    waitPreroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioSink) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioSink, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioSink, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioSink, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discont-wait", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioSink_ConstructProps)
    _init (config?: AudioSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioSrc_ConstructProps extends AudioBaseSrc_ConstructProps {
}
export class AudioSrc {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSrc */
    readonly actualBufferTime: number
    readonly actualLatencyTime: number
    bufferTime: number
    latencyTime: number
    provideClock: boolean
    slaveMethod: AudioBaseSrcSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioSrc */
    element: AudioBaseSrc
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSrc */
    ringbuffer: AudioRingBuffer
    nextSample: number
    clock: Gst.Clock
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: boolean
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
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSrc */
    createRingbuffer(): AudioRingBuffer
    getProvideClock(): boolean
    getSlaveMethod(): AudioBaseSrcSlaveMethod
    setProvideClock(provide: boolean): void
    setSlaveMethod(method: AudioBaseSrcSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    getAllocator(): { allocator: Gst.Allocator | null, params: Gst.AllocationParams | null }
    getBlocksize(): number
    getBufferPool(): Gst.BufferPool | null
    getDoTimestamp(): boolean
    isAsync(): boolean
    negotiate(): boolean
    newSeamlessSegment(start: number, stop: number, time: number): boolean
    newSegment(segment: Gst.Segment): boolean
    queryLatency(): { returnType: boolean, live: boolean | null, minLatency: Gst.ClockTime | null, maxLatency: Gst.ClockTime | null }
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
    /* Methods of Gst-1.0.Gst.Element */
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
    getState(timeout: Gst.ClockTime): { returnType: Gst.StateChangeReturn, state: Gst.State | null, pending: Gst.State | null }
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
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): { returnType: boolean, destVal: number }
    queryDuration(format: Gst.Format): { returnType: boolean, duration: number | null }
    queryPosition(format: Gst.Format): { returnType: boolean, cur: number | null }
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
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
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioSrc) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioSrc, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioSrc, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioSrc, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actual-buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actual-latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slave-method", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioSrc_ConstructProps)
    _init (config?: AudioSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AudioAggregatorClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorClass */
    parentClass: GstBase.AggregatorClass
    createOutputBuffer: (aagg: AudioAggregator, numFrames: number) => Gst.Buffer
    aggregateOneBuffer: (aagg: AudioAggregator, pad: AudioAggregatorPad, inbuf: Gst.Buffer, inOffset: number, outbuf: Gst.Buffer, outOffset: number, numFrames: number) => boolean
    static name: string
}
export abstract class AudioAggregatorConvertPadClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorConvertPadClass */
    parentClass: AudioAggregatorPadClass
    static name: string
}
export class AudioAggregatorConvertPadPrivate {
    static name: string
}
export abstract class AudioAggregatorPadClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorPadClass */
    parentClass: GstBase.AggregatorPadClass
    convertBuffer: (pad: AudioAggregatorPad, inInfo: AudioInfo, outInfo: AudioInfo, buffer: Gst.Buffer) => Gst.Buffer
    updateConversionInfo: (pad: AudioAggregatorPad) => void
    static name: string
}
export class AudioAggregatorPadPrivate {
    static name: string
}
export class AudioAggregatorPrivate {
    static name: string
}
export abstract class AudioBaseSinkClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSinkClass */
    parentClass: GstBase.BaseSinkClass
    createRingbuffer: (sink: AudioBaseSink) => AudioRingBuffer
    payload: (sink: AudioBaseSink, buffer: Gst.Buffer) => Gst.Buffer
    static name: string
}
export class AudioBaseSinkPrivate {
    static name: string
}
export abstract class AudioBaseSrcClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSrcClass */
    parentClass: GstBase.PushSrcClass
    createRingbuffer: (src: AudioBaseSrc) => AudioRingBuffer
    static name: string
}
export class AudioBaseSrcPrivate {
    static name: string
}
export class AudioBuffer {
    /* Fields of GstAudio-1.0.GstAudio.AudioBuffer */
    info: AudioInfo
    nSamples: number
    nPlanes: number
    planes: object
    buffer: Gst.Buffer
    /* Methods of GstAudio-1.0.GstAudio.AudioBuffer */
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer
    static map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): { returnType: boolean, buffer: AudioBuffer }
    static reorderChannels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
    static truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer
}
export abstract class AudioCdSrcClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioCdSrcClass */
    pushsrcClass: GstBase.PushSrcClass
    open: (src: AudioCdSrc, device: string) => boolean
    close: (src: AudioCdSrc) => void
    readSector: (src: AudioCdSrc, sector: number) => Gst.Buffer
    static name: string
}
export class AudioCdSrcPrivate {
    static name: string
}
export class AudioCdSrcTrack {
    /* Fields of GstAudio-1.0.GstAudio.AudioCdSrcTrack */
    isAudio: boolean
    num: number
    start: number
    end: number
    tags: Gst.TagList
    static name: string
}
export class AudioChannelMixer {
    /* Methods of GstAudio-1.0.GstAudio.AudioChannelMixer */
    free(): void
    isPassthrough(): boolean
    samples(in_: object | null, out: object | null, samples: number): void
    static name: string
}
export class AudioClippingMeta {
    /* Fields of GstAudio-1.0.GstAudio.AudioClippingMeta */
    meta: Gst.Meta
    format: Gst.Format
    start: number
    end: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
export abstract class AudioClockClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioClockClass */
    parentClass: Gst.SystemClockClass
    static name: string
}
export class AudioConverter {
    /* Methods of GstAudio-1.0.GstAudio.AudioConverter */
    convert(flags: AudioConverterFlags, in_: any[]): { returnType: boolean, out: any[] }
    free(): void
    getConfig(): { returnType: Gst.Structure, inRate: number | null, outRate: number | null }
    getInFrames(outFrames: number): number
    getMaxLatency(): number
    getOutFrames(inFrames: number): number
    isPassthrough(): boolean
    reset(): void
    samples(flags: AudioConverterFlags, in_: object | null, inFrames: number, out: object | null, outFrames: number): boolean
    supportsInplace(): boolean
    updateConfig(inRate: number, outRate: number, config?: Gst.Structure | null): boolean
    static name: string
    static new(flags: AudioConverterFlags, inInfo: AudioInfo, outInfo: AudioInfo, config?: Gst.Structure | null): AudioConverter
    constructor(flags: AudioConverterFlags, inInfo: AudioInfo, outInfo: AudioInfo, config?: Gst.Structure | null)
    /* Static methods and pseudo-constructors */
    static new(flags: AudioConverterFlags, inInfo: AudioInfo, outInfo: AudioInfo, config?: Gst.Structure | null): AudioConverter
}
export abstract class AudioDecoderClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioDecoderClass */
    elementClass: Gst.ElementClass
    start: (dec: AudioDecoder) => boolean
    stop: (dec: AudioDecoder) => boolean
    setFormat: (dec: AudioDecoder, caps: Gst.Caps) => boolean
    parse: (dec: AudioDecoder, adapter: GstBase.Adapter, offset: number, length: number) => Gst.FlowReturn
    handleFrame: (dec: AudioDecoder, buffer: Gst.Buffer) => Gst.FlowReturn
    flush: (dec: AudioDecoder, hard: boolean) => void
    prePush: (dec: AudioDecoder, buffer: Gst.Buffer) => Gst.FlowReturn
    sinkEvent: (dec: AudioDecoder, event: Gst.Event) => boolean
    srcEvent: (dec: AudioDecoder, event: Gst.Event) => boolean
    open: (dec: AudioDecoder) => boolean
    close: (dec: AudioDecoder) => boolean
    negotiate: (dec: AudioDecoder) => boolean
    decideAllocation: (dec: AudioDecoder, query: Gst.Query) => boolean
    proposeAllocation: (dec: AudioDecoder, query: Gst.Query) => boolean
    sinkQuery: (dec: AudioDecoder, query: Gst.Query) => boolean
    srcQuery: (dec: AudioDecoder, query: Gst.Query) => boolean
    getcaps: (dec: AudioDecoder, filter: Gst.Caps) => Gst.Caps
    transformMeta: (enc: AudioDecoder, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    static name: string
}
export class AudioDecoderPrivate {
    static name: string
}
export class AudioDownmixMeta {
    /* Fields of GstAudio-1.0.GstAudio.AudioDownmixMeta */
    meta: Gst.Meta
    fromPosition: AudioChannelPosition
    toPosition: AudioChannelPosition
    fromChannels: number
    toChannels: number
    matrix: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
export abstract class AudioEncoderClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioEncoderClass */
    elementClass: Gst.ElementClass
    start: (enc: AudioEncoder) => boolean
    stop: (enc: AudioEncoder) => boolean
    setFormat: (enc: AudioEncoder, info: AudioInfo) => boolean
    handleFrame: (enc: AudioEncoder, buffer: Gst.Buffer) => Gst.FlowReturn
    flush: (enc: AudioEncoder) => void
    prePush: (enc: AudioEncoder, buffer: Gst.Buffer) => Gst.FlowReturn
    sinkEvent: (enc: AudioEncoder, event: Gst.Event) => boolean
    srcEvent: (enc: AudioEncoder, event: Gst.Event) => boolean
    getcaps: (enc: AudioEncoder, filter: Gst.Caps) => Gst.Caps
    open: (enc: AudioEncoder) => boolean
    close: (enc: AudioEncoder) => boolean
    negotiate: (enc: AudioEncoder) => boolean
    decideAllocation: (enc: AudioEncoder, query: Gst.Query) => boolean
    proposeAllocation: (enc: AudioEncoder, query: Gst.Query) => boolean
    transformMeta: (enc: AudioEncoder, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    sinkQuery: (encoder: AudioEncoder, query: Gst.Query) => boolean
    srcQuery: (encoder: AudioEncoder, query: Gst.Query) => boolean
    static name: string
}
export class AudioEncoderPrivate {
    static name: string
}
export abstract class AudioFilterClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioFilterClass */
    basetransformclass: GstBase.BaseTransformClass
    setup: (filter: AudioFilter, info: AudioInfo) => boolean
    /* Methods of GstAudio-1.0.GstAudio.AudioFilterClass */
    addPadTemplates(klass: AudioFilter | Function | GObject.Type, allowedCaps: Gst.Caps): void
    static name: string
}
export class AudioFormatInfo {
    /* Fields of GstAudio-1.0.GstAudio.AudioFormatInfo */
    format: AudioFormat
    name: string
    description: string
    flags: AudioFormatFlags
    endianness: number
    width: number
    depth: number
    silence: any[]
    unpackFormat: AudioFormat
    unpackFunc: AudioFormatUnpack
    packFunc: AudioFormatPack
    /* Methods of GstAudio-1.0.GstAudio.AudioFormatInfo */
    fillSilence(dest: any[]): void
    static name: string
}
export class AudioInfo {
    /* Fields of GstAudio-1.0.GstAudio.AudioInfo */
    finfo: AudioFormatInfo
    flags: AudioFlags
    layout: AudioLayout
    rate: number
    channels: number
    bpf: number
    position: AudioChannelPosition[]
    /* Methods of GstAudio-1.0.GstAudio.AudioInfo */
    convert(srcFmt: Gst.Format, srcVal: number, destFmt: Gst.Format): { returnType: boolean, destVal: number }
    copy(): AudioInfo
    free(): void
    isEqual(other: AudioInfo): boolean
    setFormat(format: AudioFormat, rate: number, channels: number, position?: AudioChannelPosition[] | null): void
    toCaps(): Gst.Caps
    static name: string
    static new(): AudioInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AudioInfo
    static fromCaps(caps: Gst.Caps): { returnType: boolean, info: AudioInfo }
    static init(): { info: AudioInfo }
}
export class AudioLevelMeta {
    /* Fields of GstAudio-1.0.GstAudio.AudioLevelMeta */
    meta: Gst.Meta
    level: number
    voiceActivity: boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
export class AudioMeta {
    /* Fields of GstAudio-1.0.GstAudio.AudioMeta */
    meta: Gst.Meta
    info: AudioInfo
    samples: number
    offsets: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
export class AudioQuantize {
    /* Methods of GstAudio-1.0.GstAudio.AudioQuantize */
    free(): void
    reset(): void
    samples(in_: object | null, out: object | null, samples: number): void
    static name: string
}
export class AudioResampler {
    /* Methods of GstAudio-1.0.GstAudio.AudioResampler */
    free(): void
    getInFrames(outFrames: number): number
    getMaxLatency(): number
    getOutFrames(inFrames: number): number
    resample(in_: object | null, inFrames: number, out: object | null, outFrames: number): void
    reset(): void
    update(inRate: number, outRate: number, options: Gst.Structure): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static optionsSetQuality(method: AudioResamplerMethod, quality: number, inRate: number, outRate: number, options: Gst.Structure): void
}
export abstract class AudioRingBufferClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioRingBufferClass */
    parentClass: Gst.ObjectClass
    openDevice: (buf: AudioRingBuffer) => boolean
    acquire: (buf: AudioRingBuffer, spec: AudioRingBufferSpec) => boolean
    release: (buf: AudioRingBuffer) => boolean
    closeDevice: (buf: AudioRingBuffer) => boolean
    start: (buf: AudioRingBuffer) => boolean
    pause: (buf: AudioRingBuffer) => boolean
    resume: (buf: AudioRingBuffer) => boolean
    stop: (buf: AudioRingBuffer) => boolean
    delay: (buf: AudioRingBuffer) => number
    activate: (buf: AudioRingBuffer, active: boolean) => boolean
    commit: (buf: AudioRingBuffer, sample: number, data: any[], outSamples: number, accum: number) => { returnType: number, accum: number }
    clearAll: (buf: AudioRingBuffer) => void
    static name: string
}
export class AudioRingBufferSpec {
    /* Fields of GstAudio-1.0.GstAudio.AudioRingBufferSpec */
    caps: Gst.Caps
    type: AudioRingBufferFormatType
    info: AudioInfo
    latencyTime: number
    bufferTime: number
    segsize: number
    segtotal: number
    seglatency: number
    static name: string
}
export abstract class AudioSinkClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioSinkClass */
    parentClass: AudioBaseSinkClass
    open: (sink: AudioSink) => boolean
    prepare: (sink: AudioSink, spec: AudioRingBufferSpec) => boolean
    unprepare: (sink: AudioSink) => boolean
    close: (sink: AudioSink) => boolean
    write: (sink: AudioSink, data: object | null, length: number) => number
    delay: (sink: AudioSink) => number
    reset: (sink: AudioSink) => void
    pause: (sink: AudioSink) => void
    resume: (sink: AudioSink) => void
    stop: (sink: AudioSink) => void
    extension: AudioSinkClassExtension
    static name: string
}
export class AudioSinkClassExtension {
    /* Fields of GstAudio-1.0.GstAudio.AudioSinkClassExtension */
    clearAll: (sink: AudioSink) => void
    static name: string
}
export abstract class AudioSrcClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioSrcClass */
    parentClass: AudioBaseSrcClass
    open: (src: AudioSrc) => boolean
    prepare: (src: AudioSrc, spec: AudioRingBufferSpec) => boolean
    unprepare: (src: AudioSrc) => boolean
    close: (src: AudioSrc) => boolean
    read: (src: AudioSrc, data: object | null, length: number, timestamp: Gst.ClockTime) => number
    delay: (src: AudioSrc) => number
    reset: (src: AudioSrc) => void
    static name: string
}
export class AudioStreamAlign {
    /* Methods of GstAudio-1.0.GstAudio.AudioStreamAlign */
    copy(): AudioStreamAlign
    free(): void
    getAlignmentThreshold(): Gst.ClockTime
    getDiscontWait(): Gst.ClockTime
    getRate(): number
    getSamplesSinceDiscont(): number
    getTimestampAtDiscont(): Gst.ClockTime
    markDiscont(): void
    process(discont: boolean, timestamp: Gst.ClockTime, nSamples: number): { returnType: boolean, outTimestamp: Gst.ClockTime, outDuration: Gst.ClockTime, outSamplePosition: number }
    setAlignmentThreshold(alignmentThreshold: Gst.ClockTime): void
    setDiscontWait(discontWait: Gst.ClockTime): void
    setRate(rate: number): void
    static name: string
    static new(rate: number, alignmentThreshold: Gst.ClockTime, discontWait: Gst.ClockTime): AudioStreamAlign
    constructor(rate: number, alignmentThreshold: Gst.ClockTime, discontWait: Gst.ClockTime)
    /* Static methods and pseudo-constructors */
    static new(rate: number, alignmentThreshold: Gst.ClockTime, discontWait: Gst.ClockTime): AudioStreamAlign
}
export abstract class StreamVolumeInterface {
    /* Fields of GstAudio-1.0.GstAudio.StreamVolumeInterface */
    iface: GObject.TypeInterface
    static name: string
}
}