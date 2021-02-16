/**
 * GstGL-1.0
 */

/// <reference types="node" />
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstGL {

export enum GLBaseMemoryError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
export enum GLContextError {
    FAILED,
    WRONG_CONFIG,
    WRONG_API,
    OLD_LIBS,
    CREATE_CONTEXT,
    RESOURCE_UNAVAILABLE,
}
export enum GLFormat {
    LUMINANCE,
    ALPHA,
    LUMINANCE_ALPHA,
    RED,
    R8,
    RG,
    RG8,
    RGB,
    RGB8,
    RGB565,
    RGB16,
    RGBA,
    RGBA8,
    RGBA16,
    DEPTH_COMPONENT16,
    DEPTH24_STENCIL8,
    RGB10_A2,
    R16,
    RG16,
}
export enum GLQueryType {
    NONE,
    TIME_ELAPSED,
    TIMESTAMP,
}
export enum GLSLError {
    COMPILE,
    LINK,
    PROGRAM,
}
export enum GLSLVersion {
    NONE,
    /* 100 (invalid, starts with a number) */
    /* 110 (invalid, starts with a number) */
    /* 120 (invalid, starts with a number) */
    /* 130 (invalid, starts with a number) */
    /* 140 (invalid, starts with a number) */
    /* 150 (invalid, starts with a number) */
    /* 300 (invalid, starts with a number) */
    /* 310 (invalid, starts with a number) */
    /* 320 (invalid, starts with a number) */
    /* 330 (invalid, starts with a number) */
    /* 400 (invalid, starts with a number) */
    /* 410 (invalid, starts with a number) */
    /* 420 (invalid, starts with a number) */
    /* 430 (invalid, starts with a number) */
    /* 440 (invalid, starts with a number) */
    /* 450 (invalid, starts with a number) */
}
export enum GLStereoDownmix {
    GREEN_MAGENTA_DUBOIS,
    RED_CYAN_DUBOIS,
    AMBER_BLUE_DUBOIS,
}
export enum GLTextureTarget {
    NONE,
    /* 2D (invalid, starts with a number) */
    RECTANGLE,
    EXTERNAL_OES,
}
export enum GLUploadReturn {
    DONE,
    ERROR,
    UNSUPPORTED,
    RECONFIGURE,
    UNSHARED_GL_CONTEXT,
}
export enum GLWindowError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
export enum GLAPI {
    NONE,
    OPENGL,
    OPENGL3,
    GLES1,
    GLES2,
    ANY,
}
export enum GLBaseMemoryTransfer {
    DOWNLOAD,
    UPLOAD,
}
export enum GLDisplayType {
    NONE,
    X11,
    WAYLAND,
    COCOA,
    WIN32,
    DISPMANX,
    EGL,
    VIV_FB,
    GBM,
    EGL_DEVICE,
    ANY,
}
export enum GLPlatform {
    NONE,
    EGL,
    GLX,
    WGL,
    CGL,
    EAGL,
    ANY,
}
export enum GLSLProfile {
    NONE,
    ES,
    CORE,
    COMPATIBILITY,
    ANY,
}
export const BUFFER_POOL_OPTION_GL_SYNC_META: string
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string
export const CAPS_FEATURE_MEMORY_GL_BUFFER: string
export const CAPS_FEATURE_MEMORY_GL_MEMORY: string
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number
export const GL_API_GLES1_NAME: string
export const GL_API_GLES2_NAME: string
export const GL_API_OPENGL3_NAME: string
export const GL_API_OPENGL_NAME: string
export const GL_BASE_MEMORY_ALLOCATOR_NAME: string
export const GL_BUFFER_ALLOCATOR_NAME: string
export const GL_COLOR_CONVERT_FORMATS: string
export const GL_COLOR_CONVERT_VIDEO_CAPS: string
export const GL_CONTEXT_TYPE_CGL: string
export const GL_CONTEXT_TYPE_EAGL: string
export const GL_CONTEXT_TYPE_EGL: string
export const GL_CONTEXT_TYPE_GLX: string
export const GL_CONTEXT_TYPE_WGL: string
export const GL_DISPLAY_CONTEXT_TYPE: string
export const GL_MEMORY_ALLOCATOR_NAME: string
export const GL_MEMORY_PBO_ALLOCATOR_NAME: string
export const GL_MEMORY_VIDEO_FORMATS_STR: string
export const GL_RENDERBUFFER_ALLOCATOR_NAME: string
export const GL_TEXTURE_TARGET_2D_STR: string
export const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string
export const GL_TEXTURE_TARGET_RECTANGLE_STR: string
export const MAP_GL: number
export function bufferAddGlSyncMeta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta
export function bufferAddGlSyncMetaFull(context: GLContext, buffer: Gst.Buffer, data?: object | null): GLSyncMeta
export function bufferPoolConfigGetGlAllocationParams(config: Gst.Structure): GLAllocationParams
export function bufferPoolConfigSetGlAllocationParams(config: Gst.Structure, params: GLAllocationParams): void
export function contextGetGlDisplay(context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay ]
export function contextSetGlDisplay(context: Gst.Context, display: GLDisplay): void
export function glApiFromString(apiS: string): GLAPI
export function glApiToString(api: GLAPI): string
export function glBaseMemoryAlloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
export function glBaseMemoryErrorQuark(): GLib.Quark
export function glBaseMemoryInitOnce(): void
export function glBufferInitOnce(): void
export function glCheckExtension(name: string, ext: string): boolean
export function glContextErrorQuark(): GLib.Quark
export function glElementPropagateDisplayContext(element: Gst.Element, display: GLDisplay): void
export function glEnsureElementData(element: object | null, displayPtr: GLDisplay, otherContextPtr: GLContext): [ /* returnType */ boolean, /* displayPtr */ GLDisplay, /* otherContextPtr */ GLContext ]
export function glFormatFromVideoInfo(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat
export function glFormatIsSupported(context: GLContext, format: GLFormat): boolean
export function glFormatTypeFromSizedGlFormat(format: GLFormat): [ /* unsizedFormat */ GLFormat, /* glType */ number ]
export function glFormatTypeNBytes(format: number, type: number): number
export function glGetPlaneDataSize(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number
export function glGetPlaneStart(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number
export function glHandleContextQuery(element: Gst.Element, query: Gst.Query, display?: GLDisplay | null, context?: GLContext | null, otherContext?: GLContext | null): boolean
export function glHandleSetContext(element: Gst.Element, context: Gst.Context, display: GLDisplay, otherContext: GLContext): [ /* returnType */ boolean, /* display */ GLDisplay, /* otherContext */ GLContext ]
export function glMemoryInitOnce(): void
export function glMemoryPboInitOnce(): void
export function glPlatformFromString(platformS: string): GLPlatform
export function glPlatformToString(platform: GLPlatform): string
export function glQueryLocalGlContext(element: Gst.Element, direction: Gst.PadDirection, contextPtr: GLContext): [ /* returnType */ boolean, /* contextPtr */ GLContext ]
export function glRenderbufferInitOnce(): void
export function glSizedGlFormatFromGlFormatType(context: GLContext, format: number, type: number): number
export function glStereoDownmixModeGetType(): GObject.Type
export function glSyncMetaApiGetType(): GObject.Type
export function glSyncMetaGetInfo(): Gst.MetaInfo
export function glTextureTargetFromGl(target: number): GLTextureTarget
export function glTextureTargetFromString(str: string): GLTextureTarget
export function glTextureTargetToBufferPoolOption(target: GLTextureTarget): string
export function glTextureTargetToGl(target: GLTextureTarget): number
export function glTextureTargetToString(target: GLTextureTarget): string
export function glValueGetTextureTargetMask(value: any): GLTextureTarget
export function glValueSetTextureTarget(value: any, target: GLTextureTarget): boolean
export function glValueSetTextureTargetFromMask(value: any, targetMask: GLTextureTarget): boolean
export function glVersionToGlslVersion(glApi: GLAPI, maj: number, min: number): GLSLVersion
export function glWindowErrorQuark(): GLib.Quark
export function glslErrorQuark(): GLib.Quark
export function glslProfileFromString(string: string): GLSLProfile
export function glslProfileToString(profile: GLSLProfile): string | null
export function glslStringGetVersionProfile(s: string): [ /* returnType */ boolean, /* version */ GLSLVersion, /* profile */ GLSLProfile ]
export function glslVersionFromString(string: string): GLSLVersion
export function glslVersionProfileFromString(string: string): [ /* returnType */ boolean, /* versionRet */ GLSLVersion, /* profileRet */ GLSLProfile ]
export function glslVersionProfileToString(version: GLSLVersion, profile: GLSLProfile): string
export function glslVersionToString(version: GLSLVersion): string | null
export function isGlBaseMemory(mem: Gst.Memory): boolean
export function isGlBuffer(mem: Gst.Memory): boolean
export function isGlMemory(mem: Gst.Memory): boolean
export function isGlMemoryPbo(mem: Gst.Memory): boolean
export function isGlRenderbuffer(mem: Gst.Memory): boolean
export interface GLAllocationParamsCopyFunc {
    (src: GLAllocationParams, dest: GLAllocationParams): void
}
export interface GLAllocationParamsFreeFunc {
    (params?: object | null): void
}
export interface GLAsyncDebugLogGetMessage {
    (): string
}
export interface GLBaseMemoryAllocatorAllocFunction {
    (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
}
export interface GLBaseMemoryAllocatorCopyFunction {
    (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory
}
export interface GLBaseMemoryAllocatorCreateFunction {
    (mem: GLBaseMemory): boolean
}
export interface GLBaseMemoryAllocatorDestroyFunction {
    (mem: GLBaseMemory): void
}
export interface GLBaseMemoryAllocatorMapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): object | null
}
export interface GLBaseMemoryAllocatorUnmapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo): void
}
export interface GLContextThreadFunc {
    (context: GLContext, data?: object | null): void
}
export interface GLFilterRenderFunc {
    (filter: GLFilter, inTex: GLMemory): boolean
}
export interface GLFramebufferFunc {
    (stuff?: object | null): boolean
}
export interface GLWindowCB {
    (data?: object | null): void
}
export interface GLWindowResizeCB {
    (data: object | null, width: number, height: number): void
}
export interface GLBaseFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
export class GLBaseFilter {
    /* Properties of GstGL.GLBaseFilter */
    readonly context: GLContext
    /* Properties of GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLBaseFilter */
    display: GLDisplay
    inCaps: Gst.Caps
    outCaps: Gst.Caps
    /* Fields of GstBase.BaseTransform */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    haveSegment: boolean
    segment: Gst.Segment
    queuedBuf: Gst.Buffer
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
    /* Methods of GstGL.GLBaseFilter */
    findGlContext(): boolean
    getGlContext(): GLContext | null
    /* Methods of GstBase.BaseTransform */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
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
    /* Virtual methods of GstGL.GLBaseFilter */
    vfuncGlSetCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfuncGlStart(): boolean
    vfuncGlStop(): void
    vfuncQuery(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfuncQuery(query: Gst.Query): boolean
    /* Virtual methods of GstBase.BaseTransform */
    vfuncAcceptCaps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfuncBeforeTransform(buffer: Gst.Buffer): void
    vfuncCopyMetadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncFilterMeta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfuncFixateCaps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfuncGenerateOutput(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfuncGetUnitSize(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfuncPrepareOutputBuffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfuncProposeAllocation(decideQuery: Gst.Query, query: Gst.Query): boolean
    vfuncQuery(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfuncQuery(query: Gst.Query): boolean
    vfuncSetCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfuncSinkEvent(event: Gst.Event): boolean
    vfuncSrcEvent(event: Gst.Event): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncSubmitInputBuffer(isDiscont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfuncTransform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfuncTransformCaps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfuncTransformIp(buf: Gst.Buffer): Gst.FlowReturn
    vfuncTransformMeta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfuncTransformSize(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
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
    connect(sigName: "no-more-pads", callback: (($obj: GLBaseFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: GLBaseFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: GLBaseFilter, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: GLBaseFilter, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: GLBaseFilter, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: GLBaseFilter, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLBaseFilter, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBaseFilter, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::context", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLBaseFilter_ConstructProps)
    _init (config?: GLBaseFilter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBaseMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
export class GLBaseMemoryAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    memType: string
    memMap: Gst.MemoryMapFunction
    memUnmap: Gst.MemoryUnmapFunction
    memCopy: Gst.MemoryCopyFunction
    memShare: Gst.MemoryShareFunction
    memIsSpan: Gst.MemoryIsSpanFunction
    memMapFull: Gst.MemoryMapFullFunction
    memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    /* Virtual methods of GstGL.GLBaseMemoryAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst.Allocator */
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfuncFree(memory: Gst.Memory): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLBaseMemoryAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBaseMemoryAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLBaseMemoryAllocator_ConstructProps)
    _init (config?: GLBaseMemoryAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBaseSrc_ConstructProps extends GstBase.PushSrc_ConstructProps {
    timestampOffset?: number
}
export class GLBaseSrc {
    /* Properties of GstGL.GLBaseSrc */
    timestampOffset: number
    /* Properties of GstBase.BaseSrc */
    blocksize: number
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLBaseSrc */
    display: GLDisplay
    context: GLContext
    outInfo: GstVideo.VideoInfo
    outCaps: Gst.Caps
    runningTime: Gst.ClockTime
    /* Fields of GstBase.BaseSrc */
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
    /* Virtual methods of GstGL.GLBaseSrc */
    vfuncFillGlMemory(mem: GLMemory): boolean
    vfuncGlStart(): boolean
    vfuncGlStop(): void
    vfuncAlloc(buf: Gst.Buffer): Gst.FlowReturn
    vfuncAlloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfuncCreate(buf: Gst.Buffer): Gst.FlowReturn
    vfuncCreate(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfuncFill(buf: Gst.Buffer): Gst.FlowReturn
    vfuncFill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase.PushSrc */
    vfuncAlloc(buf: Gst.Buffer): Gst.FlowReturn
    vfuncAlloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfuncCreate(buf: Gst.Buffer): Gst.FlowReturn
    vfuncCreate(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfuncFill(buf: Gst.Buffer): Gst.FlowReturn
    vfuncFill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
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
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: GLBaseSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: GLBaseSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: GLBaseSrc, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: GLBaseSrc, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: GLBaseSrc, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: GLBaseSrc, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLBaseSrc, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBaseSrc, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp-offset", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLBaseSrc_ConstructProps)
    _init (config?: GLBaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
export class GLBufferAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    memType: string
    memMap: Gst.MemoryMapFunction
    memUnmap: Gst.MemoryUnmapFunction
    memCopy: Gst.MemoryCopyFunction
    memShare: Gst.MemoryShareFunction
    memIsSpan: Gst.MemoryIsSpanFunction
    memMapFull: Gst.MemoryMapFullFunction
    memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    /* Virtual methods of GstGL.GLBufferAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL.GLBaseMemoryAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst.Allocator */
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfuncFree(memory: Gst.Memory): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLBufferAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBufferAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLBufferAllocator_ConstructProps)
    _init (config?: GLBufferAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
export class GLBufferPool {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLBufferPool */
    bufferpool: Gst.BufferPool
    context: GLContext
    /* Fields of Gst.BufferPool */
    object: Gst.Object
    flushing: number
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.BufferPool */
    acquireBuffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getConfig(): Gst.Structure
    getOptions(): string[]
    hasOption(option: string): boolean
    isActive(): boolean
    releaseBuffer(buffer: Gst.Buffer): void
    setActive(active: boolean): boolean
    setConfig(config: Gst.Structure): boolean
    setFlushing(flushing: boolean): void
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
    /* Virtual methods of Gst.BufferPool */
    vfuncAcquireBuffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfuncAllocBuffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfuncFlushStart(): void
    vfuncFlushStop(): void
    vfuncFreeBuffer(buffer: Gst.Buffer): void
    vfuncGetOptions(): string[]
    vfuncReleaseBuffer(buffer: Gst.Buffer): void
    vfuncResetBuffer(buffer: Gst.Buffer): void
    vfuncSetConfig(config: Gst.Structure): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLBufferPool, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBufferPool, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLBufferPool_ConstructProps)
    _init (config?: GLBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLBufferPool
    static new(): GLBufferPool
    static $gtype: GObject.Type
}
export interface GLColorConvert_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLColorConvert {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLColorConvert */
    decideAllocation(query: Gst.Query): boolean
    perform(inbuf: Gst.Buffer): Gst.Buffer
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLColorConvert, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLColorConvert, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLColorConvert_ConstructProps)
    _init (config?: GLColorConvert_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLColorConvert
    static fixateCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps
    static transformCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    static $gtype: GObject.Type
}
export interface GLContext_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLContext {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLContext */
    glVtable: GLFuncs
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLContext */
    activate(activate: boolean): boolean
    canShare(otherContext: GLContext): boolean
    checkFeature(feature: string): boolean
    checkFramebufferStatus(fboTarget: number): boolean
    checkGlVersion(api: GLAPI, maj: number, min: number): boolean
    clearFramebuffer(): void
    clearShader(): void
    create(otherContext?: GLContext | null): boolean
    destroy(): void
    fillInfo(): boolean
    getDisplay(): GLDisplay
    getGlApi(): GLAPI
    getGlContext(): guintptr
    getGlPlatform(): GLPlatform
    getGlPlatformVersion(): [ /* major */ number, /* minor */ number ]
    getGlVersion(): [ /* maj */ number, /* min */ number ]
    getProcAddress(name: string): object | null
    getThread(): GLib.Thread
    getWindow(): GLWindow | null
    isShared(): boolean
    setSharedWith(share: GLContext): void
    setWindow(window: GLWindow): boolean
    supportsGlslProfileVersion(version: GLSLVersion, profile: GLSLProfile): boolean
    supportsPrecision(version: GLSLVersion, profile: GLSLProfile): boolean
    supportsPrecisionHighp(version: GLSLVersion, profile: GLSLProfile): boolean
    swapBuffers(): void
    threadAdd(func: GLContextThreadFunc): void
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
    /* Virtual methods of GstGL.GLContext */
    vfuncActivate(activate: boolean): boolean
    vfuncCheckFeature(feature: string): boolean
    vfuncChooseFormat(): boolean
    vfuncCreateContext(glApi: GLAPI, otherContext: GLContext): boolean
    vfuncDestroyContext(): void
    vfuncGetGlApi(): GLAPI
    vfuncGetGlContext(): guintptr
    vfuncGetGlPlatform(): GLPlatform
    vfuncGetGlPlatformVersion(): [ /* major */ number, /* minor */ number ]
    vfuncSwapBuffers(): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLContext, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLContext, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: GLDisplay): GLContext
    static newWrapped(display: GLDisplay, handle: guintptr, contextType: GLPlatform, availableApis: GLAPI): GLContext
    static defaultGetProcAddress(glApi: GLAPI, name: string): object | null
    static getCurrent(): GLContext
    static getCurrentGlApi(platform: GLPlatform): [ /* returnType */ GLAPI, /* major */ number | null, /* minor */ number | null ]
    static getCurrentGlContext(contextType: GLPlatform): guintptr
    static getProcAddressWithPlatform(contextType: GLPlatform, glApi: GLAPI, name: string): object | null
    static $gtype: GObject.Type
}
export interface GLDisplay_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLDisplay {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLDisplay */
    addContext(context: GLContext): boolean
    createContext(otherContext: GLContext): [ /* returnType */ boolean, /* pContext */ GLContext ]
    createWindow(): GLWindow
    filterGlApi(glApi: GLAPI): void
    findWindow(data: object | null, compareFunc: GLib.CompareFunc): GLWindow
    getGlApi(): GLAPI
    getGlApiUnlocked(): GLAPI
    getGlContextForThread(thread: GLib.Thread): GLContext
    getHandle(): guintptr
    getHandleType(): GLDisplayType
    removeContext(context: GLContext): void
    removeWindow(window: GLWindow): boolean
    retrieveWindow(data: object | null, compareFunc: GLib.CompareFunc): GLWindow
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
    /* Virtual methods of GstGL.GLDisplay */
    vfuncCreateWindow(): GLWindow
    vfuncGetHandle(): guintptr
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
    /* Signals of GstGL.GLDisplay */
    connect(sigName: "create-context", callback: (($obj: GLDisplay, context: GLContext) => GLContext)): number
    connect_after(sigName: "create-context", callback: (($obj: GLDisplay, context: GLContext) => GLContext)): number
    emit(sigName: "create-context", context: GLContext): void
    on(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLDisplay, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLDisplay, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLDisplay_ConstructProps)
    _init (config?: GLDisplay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLDisplay
    static $gtype: GObject.Type
}
export interface GLFilter_ConstructProps extends GLBaseFilter_ConstructProps {
}
export class GLFilter {
    /* Properties of GstGL.GLBaseFilter */
    readonly context: GLContext
    /* Properties of GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLFilter */
    inInfo: GstVideo.VideoInfo
    outInfo: GstVideo.VideoInfo
    inTextureTarget: GLTextureTarget
    outTextureTarget: GLTextureTarget
    outCaps: Gst.Caps
    fbo: GLFramebuffer
    /* Fields of GstGL.GLBaseFilter */
    display: GLDisplay
    inCaps: Gst.Caps
    /* Fields of GstBase.BaseTransform */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    haveSegment: boolean
    segment: Gst.Segment
    queuedBuf: Gst.Buffer
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
    /* Methods of GstGL.GLFilter */
    drawFullscreenQuad(): void
    filterTexture(input: Gst.Buffer, output: Gst.Buffer): boolean
    renderToTarget(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean
    renderToTargetWithShader(input: GLMemory, output: GLMemory, shader: GLShader): void
    /* Methods of GstGL.GLBaseFilter */
    findGlContext(): boolean
    getGlContext(): GLContext | null
    /* Methods of GstBase.BaseTransform */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
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
    /* Virtual methods of GstGL.GLFilter */
    vfuncFilter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfuncFilterTexture(input: GLMemory, output: GLMemory): boolean
    vfuncInitFbo(): boolean
    vfuncSetCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfuncTransformInternalCaps(direction: Gst.PadDirection, caps: Gst.Caps, filterCaps: Gst.Caps): Gst.Caps
    vfuncQuery(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfuncQuery(query: Gst.Query): boolean
    /* Virtual methods of GstGL.GLBaseFilter */
    vfuncGlSetCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfuncGlStart(): boolean
    vfuncGlStop(): void
    vfuncQuery(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfuncQuery(query: Gst.Query): boolean
    /* Virtual methods of GstBase.BaseTransform */
    vfuncAcceptCaps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfuncBeforeTransform(buffer: Gst.Buffer): void
    vfuncCopyMetadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfuncDecideAllocation(query: Gst.Query): boolean
    vfuncFilterMeta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfuncFixateCaps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfuncGenerateOutput(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfuncGetUnitSize(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfuncPrepareOutputBuffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfuncProposeAllocation(decideQuery: Gst.Query, query: Gst.Query): boolean
    vfuncQuery(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfuncQuery(query: Gst.Query): boolean
    vfuncSetCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfuncSinkEvent(event: Gst.Event): boolean
    vfuncSrcEvent(event: Gst.Event): boolean
    vfuncStart(): boolean
    vfuncStop(): boolean
    vfuncSubmitInputBuffer(isDiscont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfuncTransform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfuncTransformCaps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfuncTransformIp(buf: Gst.Buffer): Gst.FlowReturn
    vfuncTransformMeta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfuncTransformSize(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
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
    connect(sigName: "no-more-pads", callback: (($obj: GLFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: GLFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    on(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-added", callback: (($obj: GLFilter, newPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: GLFilter, newPad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    on(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pad-removed", callback: (($obj: GLFilter, oldPad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: GLFilter, oldPad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    on(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLFilter, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLFilter, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::context", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLFilter_ConstructProps)
    _init (config?: GLFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static addRgbaPadTemplates(klass: GLFilterClass): void
    static $gtype: GObject.Type
}
export interface GLFramebuffer_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLFramebuffer {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLFramebuffer */
    attach(attachmentPoint: number, mem: GLBaseMemory): void
    bind(): void
    drawToTexture(mem: GLMemory, func: GLFramebufferFunc): boolean
    getEffectiveDimensions(): [ /* width */ number | null, /* height */ number | null ]
    getId(): number
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLFramebuffer, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLFramebuffer, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLFramebuffer_ConstructProps)
    _init (config?: GLFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLFramebuffer
    static newWithDefaultDepth(context: GLContext, width: number, height: number): GLFramebuffer
    static $gtype: GObject.Type
}
export interface GLMemoryAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
export class GLMemoryAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    memType: string
    memMap: Gst.MemoryMapFunction
    memUnmap: Gst.MemoryUnmapFunction
    memCopy: Gst.MemoryCopyFunction
    memShare: Gst.MemoryShareFunction
    memIsSpan: Gst.MemoryIsSpanFunction
    memMapFull: Gst.MemoryMapFullFunction
    memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    /* Virtual methods of GstGL.GLMemoryAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL.GLBaseMemoryAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst.Allocator */
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfuncFree(memory: Gst.Memory): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLMemoryAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLMemoryAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLMemoryAllocator_ConstructProps)
    _init (config?: GLMemoryAllocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(context: GLContext): GLMemoryAllocator
    static $gtype: GObject.Type
}
export interface GLMemoryPBOAllocator_ConstructProps extends GLMemoryAllocator_ConstructProps {
}
export class GLMemoryPBOAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    memType: string
    memMap: Gst.MemoryMapFunction
    memUnmap: Gst.MemoryUnmapFunction
    memCopy: Gst.MemoryCopyFunction
    memShare: Gst.MemoryShareFunction
    memIsSpan: Gst.MemoryIsSpanFunction
    memMapFull: Gst.MemoryMapFullFunction
    memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    /* Virtual methods of GstGL.GLMemoryPBOAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL.GLMemoryAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL.GLBaseMemoryAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst.Allocator */
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfuncFree(memory: Gst.Memory): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLMemoryPBOAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLMemoryPBOAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLMemoryPBOAllocator_ConstructProps)
    _init (config?: GLMemoryPBOAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLOverlayCompositor_ConstructProps extends Gst.Object_ConstructProps {
    yinvert?: boolean
}
export class GLOverlayCompositor {
    /* Properties of GstGL.GLOverlayCompositor */
    yinvert: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLOverlayCompositor */
    drawOverlays(): void
    freeOverlays(): void
    uploadOverlays(buf: Gst.Buffer): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLOverlayCompositor, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLOverlayCompositor, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yinvert", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yinvert", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yinvert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yinvert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yinvert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLOverlayCompositor_ConstructProps)
    _init (config?: GLOverlayCompositor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLOverlayCompositor
    static addCaps(caps: Gst.Caps): Gst.Caps
    static $gtype: GObject.Type
}
export interface GLRenderbufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
export class GLRenderbufferAllocator {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Allocator */
    object: Gst.Object
    memType: string
    memMap: Gst.MemoryMapFunction
    memUnmap: Gst.MemoryUnmapFunction
    memCopy: Gst.MemoryCopyFunction
    memShare: Gst.MemoryShareFunction
    memIsSpan: Gst.MemoryIsSpanFunction
    memMapFull: Gst.MemoryMapFullFunction
    memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    /* Virtual methods of GstGL.GLRenderbufferAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL.GLBaseMemoryAllocator */
    vfuncAlloc(params: GLAllocationParams): GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst.Allocator */
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfuncFree(memory: Gst.Memory): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLRenderbufferAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLRenderbufferAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLRenderbufferAllocator_ConstructProps)
    _init (config?: GLRenderbufferAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLSLStage_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLSLStage {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLSLStage */
    compile(): boolean
    getHandle(): number
    getProfile(): GLSLProfile
    getShaderType(): number
    getVersion(): GLSLVersion
    setStrings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLSLStage, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLSLStage, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLSLStage_ConstructProps)
    _init (config?: GLSLStage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, type: number): GLSLStage
    static newDefaultFragment(context: GLContext): GLSLStage
    static newDefaultVertex(context: GLContext): GLSLStage
    static newWithString(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string): GLSLStage
    static newWithStrings(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string[]): GLSLStage
    static $gtype: GObject.Type
}
export interface GLShader_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLShader {
    /* Properties of GstGL.GLShader */
    readonly linked: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLShader */
    context: GLContext
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLShader */
    attach(stage: GLSLStage): boolean
    attachUnlocked(stage: GLSLStage): boolean
    bindAttributeLocation(index: number, name: string): void
    bindFragDataLocation(index: number, name: string): void
    compileAttachStage(stage: GLSLStage): boolean
    detach(stage: GLSLStage): void
    detachUnlocked(stage: GLSLStage): void
    getAttributeLocation(name: string): number
    getProgramHandle(): number
    isLinked(): boolean
    link(): boolean
    release(): void
    releaseUnlocked(): void
    setUniform1f(name: string, value: number): void
    setUniform1fv(name: string, value: number[]): void
    setUniform1i(name: string, value: number): void
    setUniform1iv(name: string, value: number[]): void
    setUniform2f(name: string, v0: number, v1: number): void
    setUniform2fv(name: string, value: number[]): void
    setUniform2i(name: string, v0: number, v1: number): void
    setUniform2iv(name: string, value: number[]): void
    setUniform3f(name: string, v0: number, v1: number, v2: number): void
    setUniform3fv(name: string, value: number[]): void
    setUniform3i(name: string, v0: number, v1: number, v2: number): void
    setUniform3iv(name: string, value: number[]): void
    setUniform4f(name: string, v0: number, v1: number, v2: number, v3: number): void
    setUniform4fv(name: string, value: number[]): void
    setUniform4i(name: string, v0: number, v1: number, v2: number, v3: number): void
    setUniform4iv(name: string, value: number[]): void
    setUniformMatrix2fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix2x3fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix2x4fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix3fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix3x2fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix3x4fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix4fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix4x2fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix4x3fv(name: string, count: number, transpose: boolean, value: number): void
    use(): void
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLShader, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLShader, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linked", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linked", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLShader
    static newDefault(context: GLContext): GLShader
    static stringFragmentExternalOesGetDefault(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static stringFragmentGetDefault(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static stringGetHighestPrecision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static $gtype: GObject.Type
}
export interface GLUpload_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLUpload {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLUpload */
    context: GLContext
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLUpload */
    getCaps(): [ /* inCaps */ Gst.Caps | null, /* outCaps */ Gst.Caps | null ]
    performWithBuffer(buffer: Gst.Buffer): [ /* returnType */ GLUploadReturn, /* outbufPtr */ Gst.Buffer ]
    proposeAllocation(decideQuery: Gst.Query | null, query: Gst.Query): void
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
    setContext(context: GLContext): void
    transformCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLUpload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLUpload, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLUpload_ConstructProps)
    _init (config?: GLUpload_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLUpload
    static getInputTemplateCaps(): Gst.Caps
    static $gtype: GObject.Type
}
export interface GLViewConvert_ConstructProps extends Gst.Object_ConstructProps {
    downmixMode?: GLStereoDownmix
    inputFlagsOverride?: GstVideo.VideoMultiviewFlags
    inputModeOverride?: GstVideo.VideoMultiviewMode
    outputFlagsOverride?: GstVideo.VideoMultiviewFlags
    outputModeOverride?: GstVideo.VideoMultiviewMode
}
export class GLViewConvert {
    /* Properties of GstGL.GLViewConvert */
    downmixMode: GLStereoDownmix
    inputFlagsOverride: GstVideo.VideoMultiviewFlags
    inputModeOverride: GstVideo.VideoMultiviewMode
    outputFlagsOverride: GstVideo.VideoMultiviewFlags
    outputModeOverride: GstVideo.VideoMultiviewMode
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL.GLViewConvert */
    object: Gst.Object
    context: GLContext
    shader: GLShader
    inInfo: GstVideo.VideoInfo
    outInfo: GstVideo.VideoInfo
    fromTextureTarget: GLTextureTarget
    toTextureTarget: GLTextureTarget
    capsPassthrough: boolean
    initted: boolean
    reconfigure: boolean
    fbo: GLFramebuffer
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLViewConvert */
    fixateCaps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    getOutput(): [ /* returnType */ Gst.FlowReturn, /* outbufPtr */ Gst.Buffer ]
    perform(inbuf: Gst.Buffer): Gst.Buffer
    reset(): void
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
    setContext(context: GLContext): void
    submitInputBuffer(isDiscont: boolean, input: Gst.Buffer): Gst.FlowReturn
    transformCaps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
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
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLViewConvert, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLViewConvert, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::downmix-mode", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::downmix-mode", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::downmix-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::downmix-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::downmix-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLViewConvert_ConstructProps)
    _init (config?: GLViewConvert_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLViewConvert
    static $gtype: GObject.Type
}
export interface GLWindow_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLWindow {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLWindow */
    controlsViewport(): boolean
    draw(): void
    getContext(): GLContext
    getDisplay(): guintptr
    getSurfaceDimensions(): [ /* width */ number, /* height */ number ]
    getWindowHandle(): guintptr
    handleEvents(handleEvents: boolean): void
    hasOutputSurface(): boolean
    queueResize(): void
    quit(): void
    resize(width: number, height: number): void
    run(): void
    sendKeyEvent(eventType: string, keyStr: string): void
    sendMessage(callback: GLWindowCB): void
    sendMessageAsync(callback: GLWindowCB): void
    sendMouseEvent(eventType: string, button: number, posx: number, posy: number): void
    sendScrollEvent(posx: number, posy: number, deltaX: number, deltaY: number): void
    setCloseCallback(callback: GLWindowCB): void
    setDrawCallback(callback: GLWindowCB): void
    setPreferredSize(width: number, height: number): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setResizeCallback(callback: GLWindowResizeCB): void
    setWindowHandle(handle: guintptr): void
    show(): void
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
    /* Virtual methods of GstGL.GLWindow */
    vfuncClose(): void
    vfuncControlsViewport(): boolean
    vfuncDraw(): void
    vfuncGetDisplay(): guintptr
    vfuncGetWindowHandle(): guintptr
    vfuncHandleEvents(handleEvents: boolean): void
    vfuncHasOutputSurface(): boolean
    vfuncOpen(): boolean
    vfuncQueueResize(): void
    vfuncQuit(): void
    vfuncRun(): void
    vfuncSendMessage(callback: GLWindowCB): void
    vfuncSendMessageAsync(callback: GLWindowCB): void
    vfuncSetPreferredSize(width: number, height: number): void
    vfuncSetRenderRectangle(x: number, y: number, width: number, height: number): boolean
    vfuncSetWindowHandle(handle: guintptr): void
    vfuncShow(): void
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
    /* Signals of GstGL.GLWindow */
    connect(sigName: "key-event", callback: (($obj: GLWindow, id: string, key: string) => void)): number
    connect_after(sigName: "key-event", callback: (($obj: GLWindow, id: string, key: string) => void)): number
    emit(sigName: "key-event", id: string, key: string): void
    on(sigName: "key-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mouse-event", callback: (($obj: GLWindow, id: string, button: number, x: number, y: number) => void)): number
    connect_after(sigName: "mouse-event", callback: (($obj: GLWindow, id: string, button: number, x: number, y: number) => void)): number
    emit(sigName: "mouse-event", id: string, button: number, x: number, y: number): void
    on(sigName: "mouse-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mouse-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mouse-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: GLWindow, x: number, y: number, deltaX: number, deltaY: number) => void)): number
    connect_after(sigName: "scroll-event", callback: (($obj: GLWindow, x: number, y: number, deltaX: number, deltaY: number) => void)): number
    emit(sigName: "scroll-event", x: number, y: number, deltaX: number, deltaY: number): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLWindow, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLWindow, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLWindow_ConstructProps)
    _init (config?: GLWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: GLDisplay): GLWindow
    static $gtype: GObject.Type
}
export class GLAllocationParams {
    /* Fields of GstGL.GLAllocationParams */
    structSize: number
    copy: GLAllocationParamsCopyFunc
    free: GLAllocationParamsFreeFunc
    allocFlags: number
    allocSize: number
    allocParams: Gst.AllocationParams
    context: GLContext
    notify: GLib.DestroyNotify
    userData: object
    wrappedData: object
    glHandle: object
    /* Methods of GstGL.GLAllocationParams */
    copyData(dest: GLAllocationParams): void
    freeData(): void
    static name: string
}
export class GLAsyncDebug {
    /* Methods of GstGL.GLAsyncDebug */
    free(): void
    freeze(): void
    init(): void
    outputLogMsg(): void
    thaw(): void
    unset(): void
    static name: string
}
export abstract class GLBaseFilterClass {
    /* Fields of GstGL.GLBaseFilterClass */
    parentClass: GstBase.BaseTransformClass
    supportedGlApi: GLAPI
    glStart: (filter: GLBaseFilter) => boolean
    glStop: (filter: GLBaseFilter) => void
    glSetCaps: (filter: GLBaseFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    static name: string
}
export class GLBaseFilterPrivate {
    static name: string
}
export class GLBaseMemory {
    /* Fields of GstGL.GLBaseMemory */
    mem: Gst.Memory
    context: GLContext
    lock: GLib.Mutex
    mapFlags: Gst.MapFlags
    mapCount: number
    glMapCount: number
    data: object
    query: GLQuery
    /* Methods of GstGL.GLBaseMemory */
    allocData(): boolean
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, params: Gst.AllocationParams | null, size: number, userData?: object | null, notify?: GLib.DestroyNotify | null): void
    memcpy(dest: GLBaseMemory, offset: number, size: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
    static initOnce(): void
}
export abstract class GLBaseMemoryAllocatorClass {
    /* Fields of GstGL.GLBaseMemoryAllocatorClass */
    parentClass: Gst.AllocatorClass
    alloc: GLBaseMemoryAllocatorAllocFunction
    create: GLBaseMemoryAllocatorCreateFunction
    map: GLBaseMemoryAllocatorMapFunction
    unmap: GLBaseMemoryAllocatorUnmapFunction
    copy: GLBaseMemoryAllocatorCopyFunction
    destroy: GLBaseMemoryAllocatorDestroyFunction
    static name: string
}
export abstract class GLBaseSrcClass {
    /* Fields of GstGL.GLBaseSrcClass */
    parentClass: GstBase.PushSrcClass
    supportedGlApi: GLAPI
    glStart: (src: GLBaseSrc) => boolean
    glStop: (src: GLBaseSrc) => void
    fillGlMemory: (src: GLBaseSrc, mem: GLMemory) => boolean
    static name: string
}
export class GLBaseSrcPrivate {
    static name: string
}
export class GLBuffer {
    /* Fields of GstGL.GLBuffer */
    mem: GLBaseMemory
    id: number
    target: number
    usageHints: number
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
export class GLBufferAllocationParams {
    /* Fields of GstGL.GLBufferAllocationParams */
    parent: GLAllocationParams
    glTarget: number
    glUsage: number
    static name: string
    static new(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number): GLBufferAllocationParams
    constructor(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number): GLBufferAllocationParams
}
export abstract class GLBufferAllocatorClass {
    /* Fields of GstGL.GLBufferAllocatorClass */
    parentClass: GLBaseMemoryAllocatorClass
    static name: string
}
export abstract class GLBufferPoolClass {
    /* Fields of GstGL.GLBufferPoolClass */
    parentClass: Gst.BufferPoolClass
    static name: string
}
export class GLBufferPoolPrivate {
    static name: string
}
export abstract class GLColorConvertClass {
    static name: string
}
export class GLColorConvertPrivate {
    static name: string
}
export abstract class GLContextClass {
    /* Fields of GstGL.GLContextClass */
    parentClass: Gst.ObjectClass
    getCurrentContext: () => guintptr
    getGlContext: (context: GLContext) => guintptr
    getGlApi: (context: GLContext) => GLAPI
    getGlPlatform: (context: GLContext) => GLPlatform
    getProcAddress: (glApi: GLAPI, name: string) => object
    activate: (context: GLContext, activate: boolean) => boolean
    chooseFormat: (context: GLContext) => boolean
    createContext: (context: GLContext, glApi: GLAPI, otherContext: GLContext) => boolean
    destroyContext: (context: GLContext) => void
    swapBuffers: (context: GLContext) => void
    checkFeature: (context: GLContext, feature: string) => boolean
    getGlPlatformVersion: (context: GLContext) => [ /* major */ number, /* minor */ number ]
    static name: string
}
export class GLContextPrivate {
    static name: string
}
export abstract class GLDisplayClass {
    /* Fields of GstGL.GLDisplayClass */
    objectClass: Gst.ObjectClass
    getHandle: (display: GLDisplay) => guintptr
    createWindow: (display: GLDisplay) => GLWindow
    static name: string
}
export class GLDisplayPrivate {
    static name: string
}
export abstract class GLFilterClass {
    /* Fields of GstGL.GLFilterClass */
    parentClass: GLBaseFilterClass
    setCaps: (filter: GLFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    filter: (filter: GLFilter, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    filterTexture: (filter: GLFilter, input: GLMemory, output: GLMemory) => boolean
    initFbo: (filter: GLFilter) => boolean
    transformInternalCaps: (filter: GLFilter, direction: Gst.PadDirection, caps: Gst.Caps, filterCaps: Gst.Caps) => Gst.Caps
    static name: string
}
export abstract class GLFramebufferClass {
    static name: string
}
export class GLFramebufferPrivate {
    static name: string
}
export class GLFuncs {
    static name: string
}
export class GLMemory {
    /* Fields of GstGL.GLMemory */
    mem: GLBaseMemory
    texId: number
    texTarget: GLTextureTarget
    texFormat: GLFormat
    info: GstVideo.VideoInfo
    valign: GstVideo.VideoAlignment
    plane: number
    texScaling: number[]
    textureWrapped: boolean
    unpackLength: number
    texWidth: number
    /* Methods of GstGL.GLMemory */
    copyInto(texId: number, target: GLTextureTarget, texFormat: GLFormat, width: number, height: number): boolean
    copyTeximage(texId: number, outTarget: GLTextureTarget, outTexFormat: GLFormat, outWidth: number, outHeight: number): boolean
    getTextureFormat(): GLFormat
    getTextureHeight(): number
    getTextureId(): number
    getTextureTarget(): GLTextureTarget
    getTextureWidth(): number
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, target: GLTextureTarget, texFormat: GLFormat, params: Gst.AllocationParams | null, info: GstVideo.VideoInfo, plane: number, valign?: GstVideo.VideoAlignment | null, userData?: object | null, notify?: GLib.DestroyNotify | null): void
    readPixels(writePointer?: object | null): boolean
    texsubimage(readPointer?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
export abstract class GLMemoryAllocatorClass {
    /* Fields of GstGL.GLMemoryAllocatorClass */
    map: GLBaseMemoryAllocatorMapFunction
    copy: GLBaseMemoryAllocatorCopyFunction
    unmap: GLBaseMemoryAllocatorUnmapFunction
    static name: string
}
export class GLMemoryPBO {
    /* Methods of GstGL.GLMemoryPBO */
    copyIntoTexture(texId: number, target: GLTextureTarget, texFormat: GLFormat, width: number, height: number, stride: number, respecify: boolean): boolean
    downloadTransfer(): void
    uploadTransfer(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
export abstract class GLMemoryPBOAllocatorClass {
    /* Fields of GstGL.GLMemoryPBOAllocatorClass */
    parentClass: GLMemoryAllocatorClass
    static name: string
}
export abstract class GLOverlayCompositorClass {
    /* Fields of GstGL.GLOverlayCompositorClass */
    objectClass: Gst.ObjectClass
    static name: string
}
export class GLQuery {
    /* Methods of GstGL.GLQuery */
    counter(): void
    end(): void
    free(): void
    init(context: GLContext, queryType: GLQueryType): void
    result(): number
    start(): void
    unset(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static localGlContext(element: Gst.Element, direction: Gst.PadDirection, contextPtr: GLContext): [ /* returnType */ boolean, /* contextPtr */ GLContext ]
}
export class GLRenderbuffer {
    /* Fields of GstGL.GLRenderbuffer */
    renderbufferId: number
    renderbufferFormat: GLFormat
    width: number
    height: number
    renderbufferWrapped: boolean
    /* Methods of GstGL.GLRenderbuffer */
    getFormat(): GLFormat
    getHeight(): number
    getId(): number
    getWidth(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
export class GLRenderbufferAllocationParams {
    /* Fields of GstGL.GLRenderbufferAllocationParams */
    renderbufferFormat: GLFormat
    width: number
    height: number
    static name: string
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    constructor(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    static newWrapped(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number, glHandle?: object | null, userData?: object | null, notify?: GLib.DestroyNotify | null): GLRenderbufferAllocationParams
}
export abstract class GLRenderbufferAllocatorClass {
    /* Fields of GstGL.GLRenderbufferAllocatorClass */
    parentClass: GLBaseMemoryAllocatorClass
    static name: string
}
export abstract class GLSLStageClass {
    static name: string
}
export class GLSLStagePrivate {
    static name: string
}
export abstract class GLShaderClass {
    static name: string
}
export class GLShaderPrivate {
    static name: string
}
export class GLSyncMeta {
    /* Fields of GstGL.GLSyncMeta */
    parent: Gst.Meta
    context: GLContext
    data: object
    setSync: (sync: GLSyncMeta, context: GLContext) => void
    setSyncGl: (sync: GLSyncMeta, context: GLContext) => void
    wait: (sync: GLSyncMeta, context: GLContext) => void
    waitGl: (sync: GLSyncMeta, context: GLContext) => void
    waitCpu: (sync: GLSyncMeta, context: GLContext) => void
    waitCpuGl: (sync: GLSyncMeta, context: GLContext) => void
    copy: (src: GLSyncMeta, sbuffer: Gst.Buffer, dest: GLSyncMeta, dbuffer: Gst.Buffer) => void
    free: (sync: GLSyncMeta, context: GLContext) => void
    freeGl: (sync: GLSyncMeta, context: GLContext) => void
    /* Methods of GstGL.GLSyncMeta */
    setSyncPoint(context: GLContext): void
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
export abstract class GLUploadClass {
    /* Fields of GstGL.GLUploadClass */
    objectClass: Gst.ObjectClass
    static name: string
}
export class GLUploadPrivate {
    static name: string
}
export class GLVideoAllocationParams {
    /* Fields of GstGL.GLVideoAllocationParams */
    parent: GLAllocationParams
    vInfo: GstVideo.VideoInfo
    plane: number
    valign: GstVideo.VideoAlignment
    target: GLTextureTarget
    texFormat: GLFormat
    /* Methods of GstGL.GLVideoAllocationParams */
    copyData(destVid: GLVideoAllocationParams): void
    freeData(): void
    static name: string
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat): GLVideoAllocationParams
    constructor(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat): GLVideoAllocationParams
    static newWrappedData(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, wrappedData?: object | null, userData?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
    static newWrappedGlHandle(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, glHandle?: object | null, userData?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
    static newWrappedTexture(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, texId: number, userData?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
}
export abstract class GLViewConvertClass {
    static name: string
}
export class GLViewConvertPrivate {
    static name: string
}
export abstract class GLWindowClass {
    /* Fields of GstGL.GLWindowClass */
    parentClass: Gst.ObjectClass
    getDisplay: (window: GLWindow) => guintptr
    setWindowHandle: (window: GLWindow, handle: guintptr) => void
    getWindowHandle: (window: GLWindow) => guintptr
    draw: (window: GLWindow) => void
    run: (window: GLWindow) => void
    quit: (window: GLWindow) => void
    sendMessage: (window: GLWindow, callback: GLWindowCB) => void
    sendMessageAsync: (window: GLWindow, callback: GLWindowCB) => void
    open: (window: GLWindow) => boolean
    close: (window: GLWindow) => void
    handleEvents: (window: GLWindow, handleEvents: boolean) => void
    setPreferredSize: (window: GLWindow, width: number, height: number) => void
    show: (window: GLWindow) => void
    setRenderRectangle: (window: GLWindow, x: number, y: number, width: number, height: number) => boolean
    queueResize: (window: GLWindow) => void
    controlsViewport: (window: GLWindow) => boolean
    hasOutputSurface: (window: GLWindow) => boolean
    static name: string
}
export class GLWindowPrivate {
    static name: string
}
}