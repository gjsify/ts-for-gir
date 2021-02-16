/**
 * GstGLEGL-1.0
 */

/// <reference types="node" />
/// <reference path="GstVideo-1.0.d.ts" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="GstGL-1.0.d.ts" />

declare namespace GstGLEGL {

export const GL_DISPLAY_EGL_NAME: string
export const GL_MEMORY_EGL_ALLOCATOR_NAME: string
export function eglGetErrorString(err: number): string
export function eglImageFromDmabuf(context: GstGL.GLContext, dmabuf: number, inInfo: GstVideo.VideoInfo, plane: number, offset: number): EGLImage
export function eglImageFromDmabufDirect(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo): EGLImage
export function eglImageFromDmabufDirectTarget(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage
export function eglImageFromTexture(context: GstGL.GLContext, glMem: GstGL.GLMemory, attribs: any): EGLImage
export function glMemoryEglInitOnce(): void
export function isGlMemoryEgl(mem: Gst.Memory): boolean
export interface EGLImageDestroyNotify {
    (image: EGLImage, data?: object | null): void
}
export interface GLDisplayEGL_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}
export class GLDisplayEGL {
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
    addContext(context: GstGL.GLContext): boolean
    createContext(otherContext: GstGL.GLContext): [ /* returnType */ boolean, /* pContext */ GstGL.GLContext ]
    createWindow(): GstGL.GLWindow
    filterGlApi(glApi: GstGL.GLAPI): void
    findWindow(data: object | null, compareFunc: GLib.CompareFunc): GstGL.GLWindow
    getGlApi(): GstGL.GLAPI
    getGlApiUnlocked(): GstGL.GLAPI
    getGlContextForThread(thread: GLib.Thread): GstGL.GLContext
    getHandle(): any
    getHandleType(): GstGL.GLDisplayType
    removeContext(context: GstGL.GLContext): void
    removeWindow(window: GstGL.GLWindow): boolean
    retrieveWindow(data: object | null, compareFunc: GLib.CompareFunc): GstGL.GLWindow
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
    vfuncCreateWindow(): GstGL.GLWindow
    vfuncGetHandle(): any
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
    connect(sigName: "create-context", callback: (($obj: GLDisplayEGL, context: GstGL.GLContext) => GstGL.GLContext)): number
    connect_after(sigName: "create-context", callback: (($obj: GLDisplayEGL, context: GstGL.GLContext) => GstGL.GLContext)): number
    emit(sigName: "create-context", context: GstGL.GLContext): void
    on(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLDisplayEGL, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLDisplayEGL, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLDisplayEGL, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLDisplayEGL, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLDisplayEGL, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLDisplayEGL, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLDisplayEGL, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLDisplayEGL, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLDisplayEGL_ConstructProps)
    _init (config?: GLDisplayEGL_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLDisplayEGL
    static newWithEglDisplay(display?: object | null): GLDisplayEGL
    static fromGlDisplay(display: GstGL.GLDisplay): GLDisplayEGL
    static getFromNative(type: GstGL.GLDisplayType, display: any): object | null
    static $gtype: GObject.Type
}
export interface GLDisplayEGLDevice_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}
export class GLDisplayEGLDevice {
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGLEGL.GLDisplayEGLDevice */
    device: object
    padding: object[]
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL.GLDisplay */
    addContext(context: GstGL.GLContext): boolean
    createContext(otherContext: GstGL.GLContext): [ /* returnType */ boolean, /* pContext */ GstGL.GLContext ]
    createWindow(): GstGL.GLWindow
    filterGlApi(glApi: GstGL.GLAPI): void
    findWindow(data: object | null, compareFunc: GLib.CompareFunc): GstGL.GLWindow
    getGlApi(): GstGL.GLAPI
    getGlApiUnlocked(): GstGL.GLAPI
    getGlContextForThread(thread: GLib.Thread): GstGL.GLContext
    getHandle(): any
    getHandleType(): GstGL.GLDisplayType
    removeContext(context: GstGL.GLContext): void
    removeWindow(window: GstGL.GLWindow): boolean
    retrieveWindow(data: object | null, compareFunc: GLib.CompareFunc): GstGL.GLWindow
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
    vfuncCreateWindow(): GstGL.GLWindow
    vfuncGetHandle(): any
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
    connect(sigName: "create-context", callback: (($obj: GLDisplayEGLDevice, context: GstGL.GLContext) => GstGL.GLContext)): number
    connect_after(sigName: "create-context", callback: (($obj: GLDisplayEGLDevice, context: GstGL.GLContext) => GstGL.GLContext)): number
    emit(sigName: "create-context", context: GstGL.GLContext): void
    on(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "create-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLDisplayEGLDevice, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLDisplayEGLDevice, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLDisplayEGLDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLDisplayEGLDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLDisplayEGLDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLDisplayEGLDevice, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLDisplayEGLDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLDisplayEGLDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLDisplayEGLDevice_ConstructProps)
    _init (config?: GLDisplayEGLDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(deviceIndex: number): GLDisplayEGLDevice
    static new(): GLDisplayEGLDevice
    static newWithEglDevice(device?: object | null): GLDisplayEGLDevice
    static $gtype: GObject.Type
}
export interface GLMemoryEGLAllocator_ConstructProps extends GstGL.GLMemoryAllocator_ConstructProps {
}
export class GLMemoryEGLAllocator {
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
    /* Virtual methods of GstGLEGL.GLMemoryEGLAllocator */
    vfuncAlloc(params: GstGL.GLAllocationParams): GstGL.GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL.GLMemoryAllocator */
    vfuncAlloc(params: GstGL.GLAllocationParams): GstGL.GLBaseMemory
    vfuncAlloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL.GLBaseMemoryAllocator */
    vfuncAlloc(params: GstGL.GLAllocationParams): GstGL.GLBaseMemory
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
    connect(sigName: "deep-notify", callback: (($obj: GLMemoryEGLAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLMemoryEGLAllocator, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    on(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLMemoryEGLAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLMemoryEGLAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GLMemoryEGLAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLMemoryEGLAllocator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GLMemoryEGLAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLMemoryEGLAllocator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLMemoryEGLAllocator_ConstructProps)
    _init (config?: GLMemoryEGLAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export class EGLImage {
    /* Methods of GstGLEGL.EGLImage */
    exportDmabuf(fd: number, stride: number, offset: number): boolean
    getImage(): object | null
    static name: string
    /* Static methods and pseudo-constructors */
    static newWrapped(context: GstGL.GLContext, image: object | null, format: GstGL.GLFormat, userDataDestroy: EGLImageDestroyNotify): EGLImage
    static fromDmabuf(context: GstGL.GLContext, dmabuf: number, inInfo: GstVideo.VideoInfo, plane: number, offset: number): EGLImage
    static fromDmabufDirect(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo): EGLImage
    static fromDmabufDirectTarget(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage
    static fromTexture(context: GstGL.GLContext, glMem: GstGL.GLMemory, attribs: any): EGLImage
}
export abstract class GLDisplayEGLClass {
    /* Fields of GstGLEGL.GLDisplayEGLClass */
    objectClass: GstGL.GLDisplayClass
    padding: object[]
    static name: string
}
export abstract class GLDisplayEGLDeviceClass {
    /* Fields of GstGLEGL.GLDisplayEGLDeviceClass */
    objectClass: GstGL.GLDisplayClass
    padding: object[]
    static name: string
}
export class GLMemoryEGL {
    /* Methods of GstGLEGL.GLMemoryEGL */
    getDisplay(): object | null
    getImage(): object | null
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
export abstract class GLMemoryEGLAllocatorClass {
    static name: string
}
}