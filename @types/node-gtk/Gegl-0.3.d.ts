/**
 * Gegl-0.3
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace Gegl {

export enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
export enum DistanceMetric {
    EUCLIDEAN,
    MANHATTAN,
    CHEBYSHEV,
}
export enum DitherMethod {
    NONE,
    FLOYD_STEINBERG,
    BAYER,
    RANDOM,
    RANDOM_COVARIANT,
    ADD,
    ADD_COVARIANT,
    XOR,
    XOR_COVARIANT,
}
export enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
export enum SamplerType {
    NEAREST,
    LINEAR,
    CUBIC,
    NOHALO,
    LOHALO,
}
export enum SplitStrategy {
    AUTO,
    HORIZONTAL,
    VERTICAL,
}
export enum TileCommand {
    IDLE,
    SET,
    GET,
    IS_CACHED,
    EXIST,
    VOID,
    FLUSH,
    REFETCH,
    REINIT,
    LAST_COMMAND,
}
export enum AccessMode {
    READ,
    WRITE,
    READWRITE,
}
export enum BlitFlags {
    DEFAULT,
    CACHE,
    DIRTY,
}
export enum PadType {
    OUTPUT,
    INPUT,
}
export enum SerializeFlag {
    TRIM_DEFAULTS,
    VERSION,
    INDENT,
}
export const AUTO_ROWSTRIDE: number
export const BUFFER_MAX_ITERATORS: number
export const CH_BACK_CENTER: number
export const CH_BACK_LEFT: number
export const CH_BACK_RIGHT: number
export const CH_FRONT_CENTER: number
export const CH_FRONT_LEFT: number
export const CH_FRONT_LEFT_OF_CENTER: number
export const CH_FRONT_RIGHT: number
export const CH_FRONT_RIGHT_OF_CENTER: number
export const CH_LAYOUT_2POINT1: number
export const CH_LAYOUT_2_1: number
export const CH_LAYOUT_2_2: number
export const CH_LAYOUT_3POINT1: number
export const CH_LAYOUT_4POINT0: number
export const CH_LAYOUT_4POINT1: number
export const CH_LAYOUT_5POINT0: number
export const CH_LAYOUT_5POINT0_BACK: number
export const CH_LAYOUT_5POINT1: number
export const CH_LAYOUT_5POINT1_BACK: number
export const CH_LAYOUT_6POINT0: number
export const CH_LAYOUT_6POINT0_FRONT: number
export const CH_LAYOUT_6POINT1: number
export const CH_LAYOUT_6POINT1_BACK: number
export const CH_LAYOUT_6POINT1_FRONT: number
export const CH_LAYOUT_7POINT0: number
export const CH_LAYOUT_7POINT0_FRONT: number
export const CH_LAYOUT_7POINT1: number
export const CH_LAYOUT_7POINT1_WIDE: number
export const CH_LAYOUT_7POINT1_WIDE_BACK: number
export const CH_LAYOUT_HEXADECAGONAL: number
export const CH_LAYOUT_HEXAGONAL: number
export const CH_LAYOUT_NATIVE: number
export const CH_LAYOUT_OCTAGONAL: number
export const CH_LAYOUT_QUAD: number
export const CH_LAYOUT_STEREO: number
export const CH_LAYOUT_STEREO_DOWNMIX: number
export const CH_LAYOUT_SURROUND: number
export const CH_LOW_FREQUENCY: number
export const CH_LOW_FREQUENCY_2: number
export const CH_SIDE_LEFT: number
export const CH_SIDE_RIGHT: number
export const CH_STEREO_LEFT: number
export const CH_STEREO_RIGHT: number
export const CH_SURROUND_DIRECT_LEFT: number
export const CH_SURROUND_DIRECT_RIGHT: number
export const CH_TOP_BACK_CENTER: number
export const CH_TOP_BACK_LEFT: number
export const CH_TOP_BACK_RIGHT: number
export const CH_TOP_CENTER: number
export const CH_TOP_FRONT_CENTER: number
export const CH_TOP_FRONT_LEFT: number
export const CH_TOP_FRONT_RIGHT: number
export const CH_WIDE_LEFT: number
export const CH_WIDE_RIGHT: number
export const FLOAT_EPSILON: number
export const LOOKUP_MAX_ENTRIES: number
export const MAJOR_VERSION: number
export const MAX_AUDIO_CHANNELS: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const PARAM_NO_VALIDATE: number
export function clDisable(): void
export function clInit(): boolean
export function clIsAccelerated(): boolean
export function config(): Config
export function createChain(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
export function createChainArgv(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
export function exit(): void
export function format(formatName: string): any
export function formatGetName(format: any): string | null
export function getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
export function graphDumpOutputs(node: Node): void
export function graphDumpRequest(node: Node, roi: Rectangle): void
export function hasOperation(operationType: string): boolean
export function init(argv?: string[] | null): /* argv */ string[] | null
export function isMainThread(): boolean
export function listOperations(): string[]
export function loadModuleDirectory(path: string): void
export function paramSpecAudioFragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecColor(name: string, nick: string, blurb: string, defaultColor: Color, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecColorFromString(name: string, nick: string, blurb: string, defaultColorString: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecColorGetDefault(self: GObject.ParamSpec): Color
export function paramSpecCurve(name: string, nick: string, blurb: string, defaultCurve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecEnum(name: string, nick: string, blurb: string, enumType: GObject.Type, defaultValue: number, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecFilePath(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecFormat(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecGetPropertyKey(pspec: GObject.ParamSpec, keyName: string): string
export function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecPath(name: string, nick: string, blurb: string, defaultPath: Path, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecSeed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecSetPropertyKey(pspec: GObject.ParamSpec, keyName: string, value: string): void
export function paramSpecString(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function paramSpecUri(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function rectangleInfinitePlane(): Rectangle
export function resetStats(): void
export function serialize(start: Node, end: Node, basepath: string, serializeFlags: SerializeFlag): string
export function stats(): Stats
export interface LookupFunction {
    (value: number, data?: object | null): number
}
export interface NodeFunction {
    (node: PathItem): void
}
export interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: Matrix2, output: object | null, repeatMode: AbyssPolicy): void
}
export interface TileCallback {
    (tile: Tile): void
}
export interface TileSourceCommand {
    (geglTileSource: TileSource, command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
}
export interface AudioFragment_ConstructProps extends GObject.Object_ConstructProps {
    string?: string
}
export class AudioFragment {
    /* Properties of Gegl.AudioFragment */
    string: string
    /* Fields of Gegl.AudioFragment */
    parentInstance: GObject.Object
    data: number[]
    priv: AudioFragmentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.AudioFragment */
    getChannelLayout(): number
    getChannels(): number
    getMaxSamples(): number
    getPos(): number
    getSampleCount(): number
    getSampleRate(): number
    setChannelLayout(channelLayout: number): void
    setChannels(channels: number): void
    setMaxSamples(maxSamples: number): void
    setPos(pos: number): void
    setSampleCount(sampleCount: number): void
    setSampleRate(sampleRate: number): void
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
    connect(sigName: "notify", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioFragment_ConstructProps)
    _init (config?: AudioFragment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sampleRate: number, channels: number, channelLayout: number, maxSamples: number): AudioFragment
    static $gtype: GObject.Type
}
export interface Buffer_ConstructProps extends TileHandler_ConstructProps {
    abyssHeight?: number
    abyssWidth?: number
    abyssX?: number
    abyssY?: number
    backend?: TileBackend
    format?: object
    height?: number
    path?: string
    shiftX?: number
    shiftY?: number
    tileHeight?: number
    tileWidth?: number
    width?: number
    x?: number
    y?: number
}
export class Buffer {
    /* Properties of Gegl.Buffer */
    format: object
    height: number
    readonly pixels: number
    readonly pxSize: number
    width: number
    x: number
    y: number
    /* Properties of Gegl.TileHandler */
    source: GObject.Object
    /* Fields of Gegl.TileHandler */
    parentInstance: TileSource
    priv: TileHandlerPrivate
    /* Fields of Gegl.TileSource */
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.Buffer */
    addHandler(handler?: object | null): void
    clear(roi: Rectangle): void
    copy(srcRect: Rectangle, repeatMode: AbyssPolicy, dst: Buffer, dstRect: Rectangle): void
    createSubBuffer(extent: Rectangle): Buffer
    dup(): Buffer
    flush(): void
    getAbyss(): Rectangle
    getExtent(): Rectangle
    get(rect: Rectangle, scale: number, formatName: string | null, repeatMode: AbyssPolicy): any
    set(rect: Rectangle, formatName: string, src: any): void
    linearClose(linear?: object | null): void
    removeHandler(handler?: object | null): void
    sampleCleanup(): void
    save(path: string, roi: Rectangle): void
    setAbyss(abyss: Rectangle): boolean
    setColor(rect: Rectangle, color: Color): void
    setExtent(extent: Rectangle): boolean
    setPattern(rect: Rectangle, pattern: Buffer, xOffset: number, yOffset: number): void
    signalConnect(detailedSignal: string, cHandler: GObject.Callback): number
    /* Methods of Gegl.TileHandler */
    damageRect(rect: Rectangle): void
    damageTile(x: number, y: number, z: number, damage: number): void
    lock(): void
    setSource(source: TileSource): void
    unlock(): void
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
    /* Signals of Gegl.Buffer */
    connect(sigName: "changed", callback: (($obj: Buffer, object: Rectangle) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Buffer, object: Rectangle) => void)): number
    emit(sigName: "changed", object: Rectangle): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::px-size", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(formatName: string, x: number, y: number, width: number, height: number): Buffer
    static newForBackend(extent: Rectangle, backend: TileBackend): Buffer
    static load(path: string): Buffer
    static open(path: string): Buffer
    static $gtype: GObject.Type
}
export interface Color_ConstructProps extends GObject.Object_ConstructProps {
    string?: string
}
export class Color {
    /* Properties of Gegl.Color */
    string: string
    /* Fields of Gegl.Color */
    parentInstance: GObject.Object
    priv: ColorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.Color */
    duplicate(): Color
    getComponents(format: any): number[]
    getRgba(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
    setComponents(format: any, components: number[]): void
    setRgba(red: number, green: number, blue: number, alpha: number): void
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
    connect(sigName: "notify", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Color_ConstructProps)
    _init (config?: Color_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(string: string): Color
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
    applicationLicense?: string
    chunkSize?: number
    quality?: number
    queueSize?: number
    swap?: string
    threads?: number
    tileCacheSize?: number
    tileHeight?: number
    tileWidth?: number
    useOpencl?: boolean
}
export class Config {
    /* Properties of Gegl.Config */
    applicationLicense: string
    chunkSize: number
    quality: number
    queueSize: number
    swap: string
    threads: number
    tileCacheSize: number
    tileHeight: number
    tileWidth: number
    useOpencl: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::threads", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threads", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-height", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-width", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-opencl", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Curve_ConstructProps extends GObject.Object_ConstructProps {
}
export class Curve {
    /* Fields of Gegl.Curve */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.Curve */
    addPoint(x: number, y: number): number
    calcValue(x: number): number
    duplicate(): Curve
    getPoint(index: number): [ /* x */ number, /* y */ number ]
    getYBounds(): [ /* minY */ number, /* maxY */ number ]
    numPoints(): number
    setPoint(index: number, x: number, y: number): void
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
    connect(sigName: "notify", callback: (($obj: Curve, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Curve, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Curve_ConstructProps)
    _init (config?: Curve_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(yMin: number, yMax: number): Curve
    static newDefault(): Curve
    static $gtype: GObject.Type
}
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    dontCache?: boolean
    geglOperation?: Operation
    name?: string
    operation?: string
    passthrough?: boolean
    useOpencl?: boolean
}
export class Node {
    /* Properties of Gegl.Node */
    dontCache: boolean
    geglOperation: Operation
    name: string
    operation: string
    passthrough: boolean
    useOpencl: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.Node */
    addChild(child: Node): Node
    blitBuffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyssPolicy: AbyssPolicy): void
    connectFrom(inputPadName: string, source: Node, outputPadName: string): boolean
    connectTo(outputPadName: string, sink: Node, inputPadName: string): boolean
    createChild(operation: string): Node
    detect(x: number, y: number): Node
    disconnect(inputPad: string): boolean
    findProperty(propertyName: string): GObject.ParamSpec
    getChildren(): Node[]
    getConsumers(outputPad: string): [ /* returnType */ number, /* nodes */ Node[] | null, /* pads */ string[] | null ]
    getGeglOperation(): Operation | null
    getInputProxy(padName: string): Node
    getOperation(): string
    getOutputProxy(padName: string): Node
    getParent(): Node
    getPassthrough(): boolean
    getProducer(inputPadName: string, outputPadName?: string | null): Node
    hasPad(padName: string): boolean
    getBoundingBox(): Rectangle
    getProperty(propertyName: string): any
    link(sink: Node): void
    listInputPads(): string[]
    listOutputPads(): string[]
    newProcessor(rectangle: Rectangle): Processor
    process(): void
    progress(progress: number, message: string): void
    removeChild(child: Node): Node
    setPassthrough(passthrough: boolean): void
    setProperty(propertyName: string, value: any): void
    toXml(pathRoot: string): string
    toXmlFull(tail: Node | null, pathRoot: string): string
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
    /* Signals of Gegl.Node */
    connect(sigName: "computed", callback: (($obj: Node, object: Rectangle) => void)): number
    connect_after(sigName: "computed", callback: (($obj: Node, object: Rectangle) => void)): number
    emit(sigName: "computed", object: Rectangle): void
    on(sigName: "computed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "computed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "computed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "invalidated", callback: (($obj: Node, object: Rectangle) => void)): number
    connect_after(sigName: "invalidated", callback: (($obj: Node, object: Rectangle) => void)): number
    emit(sigName: "invalidated", object: Rectangle): void
    on(sigName: "invalidated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "invalidated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "invalidated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "progress", callback: (($obj: Node, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Node, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    on(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dont-cache", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dont-cache", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gegl-operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gegl-operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::passthrough", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::passthrough", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-opencl", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Node
    static newFromFile(path: string): Node
    static newFromSerialized(chaindata: string, pathRoot: string): Node
    static newFromXml(xmldata: string, pathRoot: string): Node
    static $gtype: GObject.Type
}
export interface Operation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Operation {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static findProperty(operationType: string, propertyName: string): GObject.ParamSpec
    static getKey(operationType: string, keyName: string): string
    static getOpVersion(opName: string): string
    static getPropertyKey(operationType: string, propertyName: string, propertyKeyName: string): string
    static listKeys(operationType: string): string[]
    static listProperties(operationType: string): GObject.ParamSpec[]
    static listPropertyKeys(operationType: string, propertyName: string): string[]
    static $gtype: GObject.Type
}
export class ParamAudioFragment {
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamColor {
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamCurve {
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamDouble {
    /* Fields of GObject.ParamSpecDouble */
    parentInstance: GObject.ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    epsilon: number
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamEnum {
    /* Fields of GObject.ParamSpecEnum */
    parentInstance: GObject.ParamSpec
    enumClass: GObject.EnumClass
    defaultValue: number
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamFilePath {
    /* Fields of GObject.ParamSpecString */
    parentInstance: GObject.ParamSpec
    defaultValue: string
    csetFirst: string
    csetNth: string
    substitutor: number
    nullFoldIfEmpty: number
    ensureNonNull: number
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamFormat {
    /* Fields of GObject.ParamSpecPointer */
    parentInstance: GObject.ParamSpec
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamInt {
    /* Fields of GObject.ParamSpecInt */
    parentInstance: GObject.ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamPath {
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamSeed {
    /* Fields of GObject.ParamSpecUInt */
    parentInstance: GObject.ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamString {
    /* Fields of GObject.ParamSpecString */
    parentInstance: GObject.ParamSpec
    defaultValue: string
    csetFirst: string
    csetNth: string
    substitutor: number
    nullFoldIfEmpty: number
    ensureNonNull: number
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamUri {
    /* Fields of GObject.ParamSpecString */
    parentInstance: GObject.ParamSpec
    defaultValue: string
    csetFirst: string
    csetNth: string
    substitutor: number
    nullFoldIfEmpty: number
    ensureNonNull: number
    /* Fields of GObject.ParamSpec */
    gTypeInstance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    valueType: GObject.Type
    ownerType: GObject.Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): GObject.Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize(): void
    vfuncValueSetDefault(value: GObject.Value): void
    vfuncValueValidate(value: GObject.Value): boolean
    vfuncValuesCmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
export class Path {
    /* Fields of Gegl.Path */
    parentInstance: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.Path */
    calc(pos: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    calcYForX(x: number): [ /* returnType */ number, /* y */ number ]
    clear(): void
    closestPoint(x: number, y: number): [ /* returnType */ number, /* onPathX */ number, /* onPathY */ number, /* nodePosBefore */ number ]
    foreach(eachItem: NodeFunction): void
    foreachFlat(eachItem: NodeFunction): void
    freeze(): void
    getBounds(): [ /* minX */ number, /* maxX */ number, /* minY */ number, /* maxY */ number ]
    getLength(): number
    getMatrix(): /* matrix */ Matrix3
    getNNodes(): number
    getNode(index: number): [ /* returnType */ boolean, /* node */ PathItem ]
    insertNode(pos: number, node: PathItem): void
    isEmpty(): boolean
    parseString(instructions: string): void
    removeNode(pos: number): void
    replaceNode(pos: number, node: PathItem): void
    setMatrix(matrix: Matrix3): void
    thaw(): void
    toString(): string
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
    /* Signals of Gegl.Path */
    connect(sigName: "changed", callback: (($obj: Path, object?: object | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Path, object?: object | null) => void)): number
    emit(sigName: "changed", object?: object | null): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    static newFromString(instructions: string): Path
    static addType(type: number, items: number, description: string): void
    static $gtype: GObject.Type
}
export interface Processor_ConstructProps extends GObject.Object_ConstructProps {
    chunksize?: number
    node?: Node
    progress?: number
    rectangle?: object
}
export class Processor {
    /* Properties of Gegl.Processor */
    node: Node
    progress: number
    rectangle: object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.Processor */
    setLevel(level: number): void
    setRectangle(rectangle: Rectangle): void
    setScale(scale: number): void
    work(): [ /* returnType */ boolean, /* progress */ number ]
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
    connect(sigName: "notify", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Processor_ConstructProps)
    _init (config?: Processor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stats_ConstructProps extends GObject.Object_ConstructProps {
}
export class Stats {
    /* Properties of Gegl.Stats */
    readonly swapBusy: boolean
    readonly swapFileSize: number
    readonly swapTotal: number
    readonly tileCacheHits: number
    readonly tileCacheMisses: number
    readonly tileCacheTotal: number
    readonly tileCacheTotalMax: number
    readonly tileCacheTotalUncloned: number
    readonly zoomTotal: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-hits", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-hits", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-misses", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-misses", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total-max", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-max", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total-uncloned", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-uncloned", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total-uncloned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-uncloned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-uncloned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stats_ConstructProps)
    _init (config?: Stats_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TileBackend_ConstructProps extends TileSource_ConstructProps {
    flushOnDestroy?: boolean
    format?: object
    tileHeight?: number
    tileWidth?: number
}
export class TileBackend {
    /* Properties of Gegl.TileBackend */
    flushOnDestroy: boolean
    readonly pxSize: number
    readonly tileSize: number
    /* Fields of Gegl.TileBackend */
    parentInstance: TileSource
    priv: TileBackendPrivate
    /* Fields of Gegl.TileSource */
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.TileBackend */
    getExtent(): Rectangle
    getFlushOnDestroy(): boolean
    getTileHeight(): number
    getTileSize(): number
    getTileWidth(): number
    peekStorage(): TileSource
    setExtent(rectangle: Rectangle): void
    setFlushOnDestroy(flushOnDestroy: boolean): void
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
    connect(sigName: "notify", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flush-on-destroy", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-on-destroy", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::px-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileBackend_ConstructProps)
    _init (config?: TileBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unlinkSwap(path: string): void
    static $gtype: GObject.Type
}
export interface TileHandler_ConstructProps extends TileSource_ConstructProps {
    source?: GObject.Object
}
export class TileHandler {
    /* Properties of Gegl.TileHandler */
    source: GObject.Object
    /* Fields of Gegl.TileHandler */
    parentInstance: TileSource
    priv: TileHandlerPrivate
    /* Fields of Gegl.TileSource */
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl.TileHandler */
    damageRect(rect: Rectangle): void
    setSource(source: TileSource): void
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
    connect(sigName: "notify", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileHandler_ConstructProps)
    _init (config?: TileHandler_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TileSource_ConstructProps extends GObject.Object_ConstructProps {
}
export class TileSource {
    /* Fields of Gegl.TileSource */
    parentInstance: GObject.Object
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TileSource_ConstructProps)
    _init (config?: TileSource_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AudioFragmentClass {
    /* Fields of Gegl.AudioFragmentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AudioFragmentPrivate {
    static name: string
}
export class BufferIterator {
    /* Fields of Gegl.BufferIterator */
    length: number
    data: object[]
    roi: Rectangle[]
    priv: BufferIteratorPriv
    static name: string
}
export class BufferIteratorPriv {
    static name: string
}
export abstract class ColorClass {
    /* Fields of Gegl.ColorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ColorPrivate {
    static name: string
}
export abstract class CurveClass {
    /* Fields of Gegl.CurveClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Lookup {
    /* Fields of Gegl.Lookup */
    function_: LookupFunction
    data: object
    shift: number
    positiveMin: number
    positiveMax: number
    negativeMin: number
    negativeMax: number
    bitmask: number[]
    table: number[]
    static name: string
}
export class Matrix2 {
    /* Fields of Gegl.Matrix2 */
    coeff: number[]
    /* Methods of Gegl.Matrix2 */
    determinant(): number
    isScale(): boolean
    static name: string
}
export class Matrix3 {
    /* Fields of Gegl.Matrix3 */
    coeff: number[]
    /* Methods of Gegl.Matrix3 */
    copy(): Matrix3
    copyInto(src: Matrix3): void
    determinant(): number
    equal(matrix2: Matrix3): boolean
    identity(): void
    invert(): void
    isIdentity(): boolean
    isScale(): boolean
    isTranslate(): boolean
    multiply(right: Matrix3, product: Matrix3): void
    originate(x: number, y: number): void
    parseString(string: string): void
    toString(): string
    transformPoint(x: number, y: number): void
    static name: string
    static new(): Matrix3
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Matrix3
}
export class OperationContext {
    static name: string
}
export class ParamSpecDouble {
    /* Fields of Gegl.ParamSpecDouble */
    parentInstance: GObject.ParamSpecDouble
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number
    uiDigits: number
    /* Methods of Gegl.ParamSpecDouble */
    setDigits(digits: number): void
    setSteps(smallStep: number, bigStep: number): void
    static name: string
}
export class ParamSpecEnum {
    /* Fields of Gegl.ParamSpecEnum */
    parentInstance: GObject.ParamSpecEnum
    excludedValues: object[]
    /* Methods of Gegl.ParamSpecEnum */
    excludeValue(value: number): void
    static name: string
}
export class ParamSpecFilePath {
    /* Fields of Gegl.ParamSpecFilePath */
    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
    static name: string
}
export class ParamSpecFormat {
    /* Fields of Gegl.ParamSpecFormat */
    parentInstance: GObject.ParamSpecPointer
    static name: string
}
export class ParamSpecInt {
    /* Fields of Gegl.ParamSpecInt */
    parentInstance: GObject.ParamSpecInt
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number
    /* Methods of Gegl.ParamSpecInt */
    setSteps(smallStep: number, bigStep: number): void
    static name: string
}
export class ParamSpecSeed {
    /* Fields of Gegl.ParamSpecSeed */
    parentInstance: GObject.ParamSpecUInt
    uiMinimum: number
    uiMaximum: number
    static name: string
}
export class ParamSpecString {
    /* Fields of Gegl.ParamSpecString */
    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
    static name: string
}
export class ParamSpecUri {
    /* Fields of Gegl.ParamSpecUri */
    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
    static name: string
}
export abstract class PathClass {
    static name: string
}
export class PathItem {
    /* Fields of Gegl.PathItem */
    type: number
    point: PathPoint[]
    static name: string
}
export class PathList {
    /* Fields of Gegl.PathList */
    next: object
    d: PathItem
    static name: string
}
export class PathPoint {
    /* Fields of Gegl.PathPoint */
    x: number
    y: number
    static name: string
}
export class Random {
    /* Methods of Gegl.Random */
    duplicate(): Random
    float(x: number, y: number, z: number, n: number): number
    floatRange(x: number, y: number, z: number, n: number, min: number, max: number): number
    free(): void
    int(x: number, y: number, z: number, n: number): number
    intRange(x: number, y: number, z: number, n: number, min: number, max: number): number
    setSeed(seed: number): void
    static name: string
    static new(): Random
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Random
    static newWithSeed(seed: number): Random
}
export class Rectangle {
    /* Fields of Gegl.Rectangle */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Gegl.Rectangle */
    boundingBox(source1: Rectangle, source2: Rectangle): void
    contains(child: Rectangle): boolean
    copy(source: Rectangle): void
    dump(): void
    dup(): Rectangle
    equal(rectangle2: Rectangle): boolean
    equalCoords(x: number, y: number, width: number, height: number): boolean
    intersect(src1: Rectangle, src2: Rectangle): boolean
    isEmpty(): boolean
    isInfinitePlane(): boolean
    set(x: number, y: number, width: number, height: number): void
    subtractBoundingBox(minuend: Rectangle, subtrahend: Rectangle): boolean
    static name: string
    static new(x: number, y: number, width: number, height: number): Rectangle
    constructor(x: number, y: number, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(x: number, y: number, width: number, height: number): Rectangle
    static infinitePlane(): Rectangle
}
export class Sampler {
    /* Methods of Gegl.Sampler */
    get(x: number, y: number, scale: Matrix2, output: object | null, repeatMode: AbyssPolicy): void
    getContextRect(): Rectangle
    static name: string
}
export class Tile {
    static name: string
}
export abstract class TileBackendClass {
    /* Fields of Gegl.TileBackendClass */
    parentClass: TileSourceClass
    padding: object[]
    static name: string
}
export class TileBackendPrivate {
    static name: string
}
export abstract class TileHandlerClass {
    /* Fields of Gegl.TileHandlerClass */
    parentClass: TileSourceClass
    static name: string
}
export class TileHandlerPrivate {
    static name: string
}
export abstract class TileSourceClass {
    /* Fields of Gegl.TileSourceClass */
    parentClass: GObject.ObjectClass
    padding: object[]
    static name: string
}
}