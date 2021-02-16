/**
 * GstPbutils-1.0
 */

/// <reference types="node" />
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstAudio } from './GstAudio-1.0';

declare namespace GstPbutils {

export enum AudioVisualizerShader {
    NONE,
    FADE,
    FADE_AND_MOVE_UP,
    FADE_AND_MOVE_DOWN,
    FADE_AND_MOVE_LEFT,
    FADE_AND_MOVE_RIGHT,
    FADE_AND_MOVE_HORIZ_OUT,
    FADE_AND_MOVE_HORIZ_IN,
    FADE_AND_MOVE_VERT_OUT,
    FADE_AND_MOVE_VERT_IN,
}
export enum DiscovererResult {
    OK,
    URI_INVALID,
    ERROR,
    TIMEOUT,
    BUSY,
    MISSING_PLUGINS,
}
export enum InstallPluginsReturn {
    SUCCESS,
    NOT_FOUND,
    ERROR,
    PARTIAL_SUCCESS,
    USER_ABORT,
    CRASHED,
    INVALID,
    STARTED_OK,
    INTERNAL_FAILURE,
    HELPER_MISSING,
    INSTALL_IN_PROGRESS,
}
export enum DiscovererSerializeFlags {
    BASIC,
    CAPS,
    TAGS,
    MISC,
    ALL,
}
export const ENCODING_CATEGORY_CAPTURE: string
export const ENCODING_CATEGORY_DEVICE: string
export const ENCODING_CATEGORY_FILE_EXTENSION: string
export const ENCODING_CATEGORY_ONLINE_SERVICE: string
export const ENCODING_CATEGORY_STORAGE_EDITING: string
export const PLUGINS_BASE_VERSION_MAJOR: number
export const PLUGINS_BASE_VERSION_MICRO: number
export const PLUGINS_BASE_VERSION_MINOR: number
export const PLUGINS_BASE_VERSION_NANO: number
export function codecUtilsAacCapsSetLevelAndProfile(caps: Gst.Caps, audioConfig: any): boolean
export function codecUtilsAacGetChannels(audioConfig: any): number
export function codecUtilsAacGetIndexFromSampleRate(rate: number): number
export function codecUtilsAacGetLevel(audioConfig: any): string
export function codecUtilsAacGetProfile(audioConfig: any): string
export function codecUtilsAacGetSampleRate(audioConfig: any): number
export function codecUtilsAacGetSampleRateFromIndex(srIdx: number): number
export function codecUtilsH264CapsSetLevelAndProfile(caps: Gst.Caps, sps: any): boolean
export function codecUtilsH264GetLevel(sps: any): string
export function codecUtilsH264GetLevelIdc(level: string): number
export function codecUtilsH264GetProfile(sps: any): string
export function codecUtilsH265CapsSetLevelTierAndProfile(caps: Gst.Caps, profileTierLevel: any): boolean
export function codecUtilsH265GetLevel(profileTierLevel: any): string
export function codecUtilsH265GetLevelIdc(level: string): number
export function codecUtilsH265GetProfile(profileTierLevel: any): string
export function codecUtilsH265GetTier(profileTierLevel: any): string
export function codecUtilsMpeg4videoCapsSetLevelAndProfile(caps: Gst.Caps, visObjSeq: any): boolean
export function codecUtilsMpeg4videoGetLevel(visObjSeq: any): string
export function codecUtilsMpeg4videoGetProfile(visObjSeq: any): string
export function codecUtilsOpusCreateCaps(rate: number, channels: number, channelMappingFamily: number, streamCount: number, coupledCount: number, channelMapping?: any | null): Gst.Caps
export function codecUtilsOpusCreateCapsFromHeader(header: Gst.Buffer, comments?: Gst.Buffer | null): Gst.Caps
export function codecUtilsOpusCreateHeader(rate: number, channels: number, channelMappingFamily: number, streamCount: number, coupledCount: number, channelMapping: any | null, preSkip: number, outputGain: number): Gst.Buffer
export function codecUtilsOpusParseCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* rate */ number, /* channels */ number, /* channelMappingFamily */ number, /* streamCount */ number, /* coupledCount */ number, /* channelMapping */ any ]
export function codecUtilsOpusParseHeader(header: Gst.Buffer): [ /* returnType */ boolean, /* rate */ number, /* channels */ number, /* channelMappingFamily */ number, /* streamCount */ number, /* coupledCount */ number, /* channelMapping */ any, /* preSkip */ number, /* outputGain */ number ]
export function encodingListAllTargets(categoryname?: string | null): EncodingTarget[]
export function encodingListAvailableCategories(): string[]
export function installPluginsAsync(details: string[], ctx: InstallPluginsContext | null, func: InstallPluginsResultFunc): InstallPluginsReturn
export function installPluginsInstallationInProgress(): boolean
export function installPluginsReturnGetName(ret: InstallPluginsReturn): string
export function installPluginsSupported(): boolean
export function installPluginsSync(details: string[], ctx?: InstallPluginsContext | null): InstallPluginsReturn
export function isMissingPluginMessage(msg: Gst.Message): boolean
export function missingDecoderInstallerDetailNew(decodeCaps: Gst.Caps): string
export function missingDecoderMessageNew(element: Gst.Element, decodeCaps: Gst.Caps): Gst.Message
export function missingElementInstallerDetailNew(factoryName: string): string
export function missingElementMessageNew(element: Gst.Element, factoryName: string): Gst.Message
export function missingEncoderInstallerDetailNew(encodeCaps: Gst.Caps): string
export function missingEncoderMessageNew(element: Gst.Element, encodeCaps: Gst.Caps): Gst.Message
export function missingPluginMessageGetDescription(msg: Gst.Message): string
export function missingPluginMessageGetInstallerDetail(msg: Gst.Message): string
export function missingUriSinkInstallerDetailNew(protocol: string): string
export function missingUriSinkMessageNew(element: Gst.Element, protocol: string): Gst.Message
export function missingUriSourceInstallerDetailNew(protocol: string): string
export function missingUriSourceMessageNew(element: Gst.Element, protocol: string): Gst.Message
export function pbUtilsAddCodecDescriptionToTagList(taglist: Gst.TagList, codecTag: string | null, caps: Gst.Caps): boolean
export function pbUtilsGetCodecDescription(caps: Gst.Caps): string
export function pbUtilsGetDecoderDescription(caps: Gst.Caps): string
export function pbUtilsGetElementDescription(factoryName: string): string
export function pbUtilsGetEncoderDescription(caps: Gst.Caps): string
export function pbUtilsGetSinkDescription(protocol: string): string
export function pbUtilsGetSourceDescription(protocol: string): string
export function pbUtilsInit(): void
export function pluginsBaseVersion(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
export function pluginsBaseVersionString(): string
export interface AudioVisualizerShaderFunc {
    (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame): void
}
export interface InstallPluginsResultFunc {
    (result: InstallPluginsReturn): void
}
export interface AudioVisualizer_ConstructProps extends Gst.Element_ConstructProps {
    shadeAmount?: number
    shader?: AudioVisualizerShader
}
export class AudioVisualizer {
    /* Properties of GstPbutils.AudioVisualizer */
    shadeAmount: number
    shader: AudioVisualizerShader
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstPbutils.AudioVisualizer */
    reqSpf: number
    vinfo: GstVideo.VideoInfo
    ainfo: GstAudio.AudioInfo
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
    /* Virtual methods of GstPbutils.AudioVisualizer */
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncRender(audio: Gst.Buffer, video: GstVideo.VideoFrame): boolean
    vfuncSetup(): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: AudioVisualizer) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioVisualizer) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: AudioVisualizer, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioVisualizer, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: AudioVisualizer, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioVisualizer, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioVisualizer, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioVisualizer, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shade-amount", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shade-amount", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shade-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shade-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shade-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shader", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shader", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioVisualizer_ConstructProps)
    _init (config?: AudioVisualizer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Discoverer_ConstructProps extends GObject.Object_ConstructProps {
    timeout?: number
    useCache?: boolean
}
export class Discoverer {
    /* Properties of GstPbutils.Discoverer */
    timeout: number
    useCache: boolean
    /* Fields of GstPbutils.Discoverer */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.Discoverer */
    discoverUri(uri: string): DiscovererInfo
    discoverUriAsync(uri: string): boolean
    start(): void
    stop(): void
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
    /* Virtual methods of GstPbutils.Discoverer */
    vfuncDiscovered(info: DiscovererInfo, err: GLib.Error): void
    vfuncFinished(): void
    vfuncSourceSetup(source: Gst.Element): void
    vfuncStarting(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstPbutils.Discoverer */
    connect(sigName: "discovered", callback: (($obj: Discoverer, info: DiscovererInfo, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "discovered", callback: (($obj: Discoverer, info: DiscovererInfo, error?: GLib.Error | null) => void)): number
    emit(sigName: "discovered", info: DiscovererInfo, error?: GLib.Error | null): void
    on(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "discovered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "finished", callback: (($obj: Discoverer) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Discoverer) => void)): number
    emit(sigName: "finished"): void
    on(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "source-setup", callback: (($obj: Discoverer, source: Gst.Element) => void)): number
    connect_after(sigName: "source-setup", callback: (($obj: Discoverer, source: Gst.Element) => void)): number
    emit(sigName: "source-setup", source: Gst.Element): void
    on(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "source-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "starting", callback: (($obj: Discoverer) => void)): number
    connect_after(sigName: "starting", callback: (($obj: Discoverer) => void)): number
    emit(sigName: "starting"): void
    on(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-cache", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-cache", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Discoverer_ConstructProps)
    _init (config?: Discoverer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(timeout: Gst.ClockTime): Discoverer
    static $gtype: GObject.Type
}
export interface DiscovererAudioInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
export class DiscovererAudioInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.DiscovererAudioInfo */
    getBitrate(): number
    getChannelMask(): number
    getChannels(): number
    getDepth(): number
    getLanguage(): string
    getMaxBitrate(): number
    getSampleRate(): number
    /* Methods of GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererAudioInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererAudioInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DiscovererAudioInfo_ConstructProps)
    _init (config?: DiscovererAudioInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DiscovererContainerInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
export class DiscovererContainerInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.DiscovererContainerInfo */
    getStreams(): DiscovererStreamInfo[]
    /* Methods of GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererContainerInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererContainerInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DiscovererContainerInfo_ConstructProps)
    _init (config?: DiscovererContainerInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DiscovererInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class DiscovererInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.DiscovererInfo */
    copy(): DiscovererInfo
    getAudioStreams(): DiscovererStreamInfo[]
    getContainerStreams(): DiscovererStreamInfo[]
    getDuration(): Gst.ClockTime
    getLive(): boolean
    getMisc(): Gst.Structure
    getMissingElementsInstallerDetails(): string[]
    getResult(): DiscovererResult
    getSeekable(): boolean
    getStreamInfo(): DiscovererStreamInfo
    getStreamList(): DiscovererStreamInfo[]
    getStreams(streamtype: GObject.Type): DiscovererStreamInfo[]
    getSubtitleStreams(): DiscovererStreamInfo[]
    getTags(): Gst.TagList
    getToc(): Gst.Toc
    getUri(): string
    getVideoStreams(): DiscovererStreamInfo[]
    toVariant(flags: DiscovererSerializeFlags): GLib.Variant
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
    connect(sigName: "notify", callback: (($obj: DiscovererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DiscovererInfo_ConstructProps)
    _init (config?: DiscovererInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromVariant(variant: GLib.Variant): DiscovererInfo
    static $gtype: GObject.Type
}
export interface DiscovererStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class DiscovererStreamInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererStreamInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererStreamInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DiscovererStreamInfo_ConstructProps)
    _init (config?: DiscovererStreamInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listFree(infos: DiscovererStreamInfo[]): void
    static $gtype: GObject.Type
}
export interface DiscovererSubtitleInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
export class DiscovererSubtitleInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.DiscovererSubtitleInfo */
    getLanguage(): string
    /* Methods of GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererSubtitleInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererSubtitleInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DiscovererSubtitleInfo_ConstructProps)
    _init (config?: DiscovererSubtitleInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DiscovererVideoInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
export class DiscovererVideoInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.DiscovererVideoInfo */
    getBitrate(): number
    getDepth(): number
    getFramerateDenom(): number
    getFramerateNum(): number
    getHeight(): number
    getMaxBitrate(): number
    getParDenom(): number
    getParNum(): number
    getWidth(): number
    isImage(): boolean
    isInterlaced(): boolean
    /* Methods of GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererVideoInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererVideoInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DiscovererVideoInfo_ConstructProps)
    _init (config?: DiscovererVideoInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EncodingAudioProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
export class EncodingAudioProfile {
    /* Properties of GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingAudioProfile_ConstructProps)
    _init (config?: EncodingAudioProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingAudioProfile
    static $gtype: GObject.Type
}
export interface EncodingContainerProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
export class EncodingContainerProfile {
    /* Properties of GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.EncodingContainerProfile */
    addProfile(profile: EncodingProfile): boolean
    containsProfile(profile: EncodingProfile): boolean
    getProfiles(): EncodingProfile[]
    /* Methods of GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingContainerProfile_ConstructProps)
    _init (config?: EncodingContainerProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, description: string | null, format: Gst.Caps, preset?: string | null): EncodingContainerProfile
    static $gtype: GObject.Type
}
export interface EncodingProfile_ConstructProps extends GObject.Object_ConstructProps {
    elementProperties?: Gst.Structure
    restrictionCaps?: Gst.Caps
}
export class EncodingProfile {
    /* Properties of GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingProfile_ConstructProps)
    _init (config?: EncodingProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(targetname: string, profilename?: string | null, category?: string | null): EncodingProfile
    static fromDiscoverer(info: DiscovererInfo): EncodingProfile
    static $gtype: GObject.Type
}
export interface EncodingTarget_ConstructProps extends GObject.Object_ConstructProps {
}
export class EncodingTarget {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.EncodingTarget */
    addProfile(profile: EncodingProfile): boolean
    getCategory(): string
    getDescription(): string
    getName(): string
    getPath(): string
    getProfile(name: string): EncodingProfile
    getProfiles(): EncodingProfile[]
    save(): boolean
    saveToFile(filepath: string): boolean
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
    connect(sigName: "notify", callback: (($obj: EncodingTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingTarget, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: EncodingTarget_ConstructProps)
    _init (config?: EncodingTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, category: string, description: string, profiles: EncodingProfile[]): EncodingTarget
    static load(name: string, category?: string | null): EncodingTarget
    static loadFromFile(filepath: string): EncodingTarget
    static $gtype: GObject.Type
}
export interface EncodingVideoProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
export class EncodingVideoProfile {
    /* Properties of GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils.EncodingVideoProfile */
    getPass(): number
    getVariableframerate(): boolean
    setPass(pass: number): void
    setVariableframerate(variableframerate: boolean): void
    /* Methods of GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingVideoProfile_ConstructProps)
    _init (config?: EncodingVideoProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingVideoProfile
    static $gtype: GObject.Type
}
export abstract class AudioVisualizerClass {
    /* Fields of GstPbutils.AudioVisualizerClass */
    setup: (scope: AudioVisualizer) => boolean
    render: (scope: AudioVisualizer, audio: Gst.Buffer, video: GstVideo.VideoFrame) => boolean
    decideAllocation: (scope: AudioVisualizer, query: Gst.Query) => boolean
    static name: string
}
export class AudioVisualizerPrivate {
    static name: string
}
export abstract class DiscovererClass {
    /* Fields of GstPbutils.DiscovererClass */
    parentclass: GObject.ObjectClass
    finished: (discoverer: Discoverer) => void
    starting: (discoverer: Discoverer) => void
    discovered: (discoverer: Discoverer, info: DiscovererInfo, err: GLib.Error) => void
    sourceSetup: (discoverer: Discoverer, source: Gst.Element) => void
    reserved: object[]
    static name: string
}
export class DiscovererPrivate {
    static name: string
}
export abstract class EncodingAudioProfileClass {
    static name: string
}
export abstract class EncodingContainerProfileClass {
    static name: string
}
export abstract class EncodingProfileClass {
    static name: string
}
export abstract class EncodingVideoProfileClass {
    static name: string
}
export class InstallPluginsContext {
    /* Methods of GstPbutils.InstallPluginsContext */
    copy(): InstallPluginsContext
    free(): void
    setConfirmSearch(confirmSearch: boolean): void
    setDesktopId(desktopId: string): void
    setStartupNotificationId(startupId: string): void
    setXid(xid: number): void
    static name: string
    static new(): InstallPluginsContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): InstallPluginsContext
}
export type DiscovererAudioInfoClass = GObject.ObjectClass
export type DiscovererContainerInfoClass = GObject.ObjectClass
export type DiscovererInfoClass = GObject.ObjectClass
export type DiscovererStreamInfoClass = GObject.ObjectClass
export type DiscovererSubtitleInfoClass = GObject.ObjectClass
export type DiscovererVideoInfoClass = GObject.ObjectClass
export type EncodingTargetClass = GObject.ObjectClass
}