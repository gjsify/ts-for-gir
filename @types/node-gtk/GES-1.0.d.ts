/**
 * GES-1.0
 */

import "node"
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstPbutils } from './GstPbutils-1.0';
import type { GstAudio } from './GstAudio-1.0';
import type { Gio } from './Gio-2.0';

export declare namespace GES {

export enum AssetLoadingReturn {
    ERROR,
    ASYNC,
    OK,
}
export enum ChildrenControlMode {
    UPDATE,
    IGNORE_NOTIFIES,
    UPDATE_OFFSETS,
    UPDATE_ALL_VALUES,
    LAST,
}
export enum Edge {
    EDGE_START,
    START,
    EDGE_END,
    END,
    EDGE_NONE,
    NONE,
}
export enum EditMode {
    EDIT_NORMAL,
    NORMAL,
    EDIT_RIPPLE,
    RIPPLE,
    EDIT_ROLL,
    ROLL,
    EDIT_TRIM,
    TRIM,
    EDIT_SLIDE,
    SLIDE,
}
export enum Error {
    ASSET_WRONG_ID,
    ASSET_LOADING,
    FORMATTER_MALFORMED_INPUT_FILE,
    INVALID_FRAME_NUMBER,
    NEGATIVE_LAYER,
    NEGATIVE_TIME,
    NOT_ENOUGH_INTERNAL_CONTENT,
    INVALID_OVERLAP_IN_TRACK,
    INVALID_EFFECT_BIN_DESCRIPTION,
}
export enum TextHAlign {
    LEFT,
    CENTER,
    RIGHT,
    POSITION,
    ABSOLUTE,
}
export enum TextVAlign {
    BASELINE,
    BOTTOM,
    TOP,
    POSITION,
    CENTER,
    ABSOLUTE,
}
export enum VideoStandardTransitionType {
    NONE,
    BAR_WIPE_LR,
    BAR_WIPE_TB,
    BOX_WIPE_TL,
    BOX_WIPE_TR,
    BOX_WIPE_BR,
    BOX_WIPE_BL,
    FOUR_BOX_WIPE_CI,
    FOUR_BOX_WIPE_CO,
    BARNDOOR_V,
    BARNDOOR_H,
    BOX_WIPE_TC,
    BOX_WIPE_RC,
    BOX_WIPE_BC,
    BOX_WIPE_LC,
    DIAGONAL_TL,
    DIAGONAL_TR,
    BOWTIE_V,
    BOWTIE_H,
    BARNDOOR_DBL,
    BARNDOOR_DTL,
    MISC_DIAGONAL_DBD,
    MISC_DIAGONAL_DD,
    VEE_D,
    VEE_L,
    VEE_U,
    VEE_R,
    BARNVEE_D,
    BARNVEE_L,
    BARNVEE_U,
    BARNVEE_R,
    IRIS_RECT,
    CLOCK_CW12,
    CLOCK_CW3,
    CLOCK_CW6,
    CLOCK_CW9,
    PINWHEEL_TBV,
    PINWHEEL_TBH,
    PINWHEEL_FB,
    FAN_CT,
    FAN_CR,
    DOUBLEFAN_FOV,
    DOUBLEFAN_FOH,
    SINGLESWEEP_CWT,
    SINGLESWEEP_CWR,
    SINGLESWEEP_CWB,
    SINGLESWEEP_CWL,
    DOUBLESWEEP_PV,
    DOUBLESWEEP_PD,
    DOUBLESWEEP_OV,
    DOUBLESWEEP_OH,
    FAN_T,
    FAN_R,
    FAN_B,
    FAN_L,
    DOUBLEFAN_FIV,
    DOUBLEFAN_FIH,
    SINGLESWEEP_CWTL,
    SINGLESWEEP_CWBL,
    SINGLESWEEP_CWBR,
    SINGLESWEEP_CWTR,
    DOUBLESWEEP_PDTL,
    DOUBLESWEEP_PDBL,
    SALOONDOOR_T,
    SALOONDOOR_L,
    SALOONDOOR_B,
    SALOONDOOR_R,
    WINDSHIELD_R,
    WINDSHIELD_U,
    WINDSHIELD_V,
    WINDSHIELD_H,
    CROSSFADE,
}
export enum VideoTestPattern {
    SMPTE,
    SNOW,
    BLACK,
    WHITE,
    RED,
    GREEN,
    BLUE,
    CHECKERS_1,
    CHECKERS_2,
    CHECKERS_4,
    CHECKERS_8,
    CIRCULAR,
    BLINK,
    SMPTE75,
    ZONE_PLATE,
    GAMUT,
    CHROMA_ZONE_PLATE,
    SOLID_COLOR,
}
export enum MetaFlag {
    READABLE,
    WRITABLE,
    READWRITE,
}
export enum PipelineFlags {
    AUDIO_PREVIEW,
    VIDEO_PREVIEW,
    FULL_PREVIEW,
    RENDER,
    SMART_RENDER,
}
export enum TrackType {
    UNKNOWN,
    AUDIO,
    VIDEO,
    TEXT,
    CUSTOM,
}
export const FRAME_NUMBER_NONE: number
export const META_DESCRIPTION: string
export const META_FORMATTER_EXTENSION: string
export const META_FORMATTER_MIMETYPE: string
export const META_FORMATTER_NAME: string
export const META_FORMATTER_RANK: string
export const META_FORMATTER_VERSION: string
export const META_FORMAT_VERSION: string
export const META_MARKER_COLOR: string
export const META_VOLUME: string
export const META_VOLUME_DEFAULT: number
export const MULTI_FILE_URI_PREFIX: string
export const PADDING: number
export const PADDING_LARGE: number
export const TIMELINE_ELEMENT_NO_LAYER_PRIORITY: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_NANO: number
export function addMissingUriRelocationUri(uri: string, recurse: boolean): boolean
export function deinit(): void
export function edgeName(edge: Edge): string
export function editModeName(mode: EditMode): string
export function findFormatterForUri(uri: string): Asset
export function init(): boolean
export function initCheck(argv?: string[] | null): { returnType: boolean, argv: string[] | null }
export function isInitialized(): boolean
export function listAssets(filter: GObject.Type): Asset[]
export function playSinkConvertFrame(playsink: Gst.Element, caps: Gst.Caps): Gst.Sample
export function pspecEqual(keySpec1?: object | null, keySpec2?: object | null): boolean
export function pspecHash(keySpec?: object | null): number
export function trackTypeName(type: TrackType): string
export function validateRegisterActionTypes(): boolean
export function version(): { major: number, minor: number, micro: number, nano: number }
export interface BaseEffectTimeTranslationFunc {
    (effect: BaseEffect, time: Gst.ClockTime, timePropertyValues: GLib.HashTable): Gst.ClockTime
}
export interface CreateTrackElementFunc {
    (clip: Clip, type: TrackType): TrackElement | null
}
export interface CreateTrackElementsFunc {
    (clip: Clip, type: TrackType): TrackElement[]
}
export interface ExtractableCheckId {
    (type: GObject.Type, id: string): string
}
export interface FillTrackElementFunc {
    (clip: Clip, trackElement: TrackElement, nleobj: Gst.Element): boolean
}
export interface FormatterCanLoadURIMethod {
    (dummyInstance: Formatter, uri: string): boolean
}
export interface FormatterLoadFromURIMethod {
    (formatter: Formatter, timeline: Timeline, uri: string): boolean
}
export interface FormatterSaveToURIMethod {
    (formatter: Formatter, timeline: Timeline, uri: string, overwrite: boolean): boolean
}
export interface MetaForeachFunc {
    (container: MetaContainer, key: string, value: any): void
}
export interface Extractable_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class Extractable {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Extractable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Extractable_ConstructProps)
    _init (config?: Extractable_ConstructProps): void
    static $gtype: GObject.Type
}
export class MetaContainer {
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: MetaContainer, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    static name: string
}
export interface Asset_ConstructProps extends GObject.Object_ConstructProps {
    extractableType?: GObject.Type
    id?: string
    proxy?: Asset
}
export class Asset {
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.Asset */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Asset, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::proxy", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Asset_ConstructProps)
    _init (config?: Asset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static needsReload(extractableType: GObject.Type, id?: string | null): boolean
    static request(extractableType: GObject.Type, id?: string | null): Asset | null
    static requestAsync(extractableType: GObject.Type, id?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static requestFinish(res: Gio.AsyncResult): Asset
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface AudioSource_ConstructProps extends Source_ConstructProps {
}
export class AudioSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioSource_ConstructProps)
    _init (config?: AudioSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioTestSource_ConstructProps extends AudioSource_ConstructProps {
}
export class AudioTestSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.AudioTestSource */
    getFreq(): number
    getVolume(): number
    setFreq(freq: number): void
    setVolume(volume: number): void
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioTestSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioTestSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioTestSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioTestSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioTestSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioTestSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioTestSource_ConstructProps)
    _init (config?: AudioTestSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioTrack_ConstructProps extends Track_ConstructProps {
}
export class AudioTrack {
    /* Properties of GES-1.0.GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restrictionCaps: Gst.Caps
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES-1.0.GES.AudioTrack */
    parentInstance: Track
    /* Fields of GES-1.0.GES.Track */
    type: TrackType
    /* Fields of Gst-1.0.Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    childrenCookie: number
    childBus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Gst.Clock
    clockProvider: Gst.Element
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
    /* Methods of GES-1.0.GES.Track */
    addElement(object: TrackElement): boolean
    addElementFull(object: TrackElement): boolean
    commit(): boolean
    getCaps(): Gst.Caps
    getElements(): TrackElement[]
    getMixing(): boolean
    getRestrictionCaps(): Gst.Caps
    getTimeline(): Timeline | null
    removeElement(object: TrackElement): boolean
    removeElementFull(object: TrackElement): boolean
    setMixing(mixing: boolean): void
    setRestrictionCaps(caps: Gst.Caps): void
    setTimeline(timeline: Timeline): void
    updateRestrictionCaps(caps: Gst.Caps): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Gst.Element): boolean
    findUnlinkedPad(direction: Gst.PadDirection): Gst.Pad | null
    getByInterface(iface: GObject.Type): Gst.Element | null
    getByName(name: string): Gst.Element | null
    getByNameRecurseUp(name: string): Gst.Element | null
    getSuppressedFlags(): Gst.ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Gst.Iterator | null
    iterateAllByInterface(iface: GObject.Type): Gst.Iterator | null
    iterateElements(): Gst.Iterator | null
    iterateRecurse(): Gst.Iterator | null
    iterateSinks(): Gst.Iterator | null
    iterateSorted(): Gst.Iterator | null
    iterateSources(): Gst.Iterator | null
    recalculateLatency(): boolean
    remove(element: Gst.Element): boolean
    setSuppressedFlags(flags: Gst.ElementFlags): void
    syncChildrenStates(): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): { value: any }
    lookup(name: string): { returnType: boolean, target: GObject.Object | null, pspec: GObject.ParamSpec | null }
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Track */
    connect(sigName: "commited", callback: (($obj: AudioTrack) => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: (($obj: AudioTrack, effect: TrackElement) => void)): number
    on(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-added", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: (($obj: AudioTrack, effect: TrackElement) => void)): number
    on(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-removed", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-removed", effect: TrackElement): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: AudioTrack, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: AudioTrack, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: AudioTrack) => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: AudioTrack, element: Gst.Element) => void)): number
    on(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: AudioTrack, element: Gst.Element) => void)): number
    on(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioTrack) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioTrack, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioTrack, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioTrack, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioTrack, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: AudioTrack, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: AudioTrack, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::duration", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mixing", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AudioTrack_ConstructProps)
    _init (config?: AudioTrack_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AudioTrack
    static new(type: TrackType, caps: Gst.Caps): AudioTrack
    static new(name?: string | null): AudioTrack
    static $gtype: GObject.Type
}
export interface AudioTransition_ConstructProps extends Transition_ConstructProps {
}
export class AudioTransition {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioTransition, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioTransition, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioTransition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioTransition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioTransition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioTransition, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioTransition_ConstructProps)
    _init (config?: AudioTransition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AudioTransition
    static $gtype: GObject.Type
}
export interface AudioUriSource_ConstructProps extends AudioSource_ConstructProps {
    uri?: string
}
export class AudioUriSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioUriSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioUriSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioUriSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioUriSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioUriSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioUriSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioUriSource_ConstructProps)
    _init (config?: AudioUriSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseEffect_ConstructProps extends Operation_ConstructProps {
}
export class BaseEffect {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.BaseEffect */
    isTimeEffect(): boolean
    registerTimeProperty(childPropertyName: string): boolean
    setTimeTranslationFuncs(sourceToSinkFunc?: BaseEffectTimeTranslationFunc | null, sinkToSourceFunc?: BaseEffectTimeTranslationFunc | null): boolean
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: BaseEffect, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: BaseEffect, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: BaseEffect, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: BaseEffect, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: BaseEffect, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: BaseEffect, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseEffect_ConstructProps)
    _init (config?: BaseEffect_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseEffectClip_ConstructProps extends OperationClip_ConstructProps {
}
export class BaseEffectClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: BaseEffectClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: BaseEffectClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: BaseEffectClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: BaseEffectClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: BaseEffectClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: BaseEffectClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseEffectClip_ConstructProps)
    _init (config?: BaseEffectClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseTransitionClip_ConstructProps extends OperationClip_ConstructProps {
}
export class BaseTransitionClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: BaseTransitionClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: BaseTransitionClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: BaseTransitionClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: BaseTransitionClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: BaseTransitionClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: BaseTransitionClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseTransitionClip_ConstructProps)
    _init (config?: BaseTransitionClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseXmlFormatter_ConstructProps extends Formatter_ConstructProps {
}
export class BaseXmlFormatter {
    /* Fields of GES-1.0.GES.BaseXmlFormatter */
    parent: Formatter
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseXmlFormatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BaseXmlFormatter_ConstructProps)
    _init (config?: BaseXmlFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Clip_ConstructProps extends Container_ConstructProps {
    supportedFormats?: TrackType
}
export class Clip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: Clip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: Clip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Clip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Clip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Clip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Clip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Clip_ConstructProps)
    _init (config?: Clip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClipAsset_ConstructProps extends Asset_ConstructProps {
    supportedFormats?: TrackType
}
export class ClipAsset {
    /* Properties of GES-1.0.GES.ClipAsset */
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.ClipAsset */
    parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.ClipAsset */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getNaturalFramerate(framerateN: number, framerateD: number): boolean
    getSupportedFormats(): TrackType
    setSupportedFormats(supportedformats: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: ClipAsset, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::supported-formats", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClipAsset_ConstructProps)
    _init (config?: ClipAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommandLineFormatter_ConstructProps extends Formatter_ConstructProps {
}
export class CommandLineFormatter {
    /* Fields of GES-1.0.GES.CommandLineFormatter */
    parentInstance: Formatter
    priv: CommandLineFormatterPrivate
    /* Fields of GES-1.0.GES.Formatter */
    parent: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommandLineFormatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CommandLineFormatter_ConstructProps)
    _init (config?: CommandLineFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getHelp(nargs: number, commands: string): string
    static getTimelineUri(timeline: Timeline): string
    static $gtype: GObject.Type
}
export interface Container_ConstructProps extends TimelineElement_ConstructProps {
}
export class Container {
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: Container, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: Container, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Container, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Container, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Container, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Container, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::height", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Container_ConstructProps)
    _init (config?: Container_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static group(containers?: Container[] | null): Container
    static $gtype: GObject.Type
}
export interface Effect_ConstructProps extends BaseEffect_ConstructProps {
    binDescription?: string
}
export class Effect {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.BaseEffect */
    isTimeEffect(): boolean
    registerTimeProperty(childPropertyName: string): boolean
    setTimeTranslationFuncs(sourceToSinkFunc?: BaseEffectTimeTranslationFunc | null, sinkToSourceFunc?: BaseEffectTimeTranslationFunc | null): boolean
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Effect, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Effect, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Effect, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Effect, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Effect, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Effect, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Effect_ConstructProps)
    _init (config?: Effect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(binDescription: string): Effect
    static registerRateProperty(klass: Effect | Function | GObject.Type, elementName: string, propertyName: string): boolean
    static $gtype: GObject.Type
}
export interface EffectAsset_ConstructProps extends TrackElementAsset_ConstructProps {
}
export class EffectAsset {
    /* Properties of GES-1.0.GES.TrackElementAsset */
    trackType: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.EffectAsset */
    parentInstance: TrackElementAsset
    priv: EffectAssetPrivate
    gesReserved: object[]
    /* Fields of GES-1.0.GES.TrackElementAsset */
    parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElementAsset */
    getNaturalFramerate(framerateN: number, framerateD: number): boolean
    getTrackType(): TrackType
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: EffectAsset, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EffectAsset_ConstructProps)
    _init (config?: EffectAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EffectClip_ConstructProps extends BaseEffectClip_ConstructProps {
    audioBinDescription?: string
    videoBinDescription?: string
}
export class EffectClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: EffectClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: EffectClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: EffectClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: EffectClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: EffectClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: EffectClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EffectClip_ConstructProps)
    _init (config?: EffectClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(videoBinDescription: string, audioBinDescription: string): EffectClip
    static $gtype: GObject.Type
}
export interface Formatter_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class Formatter {
    /* Fields of GES-1.0.GES.Formatter */
    parent: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Formatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Formatter_ConstructProps)
    _init (config?: Formatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static canLoadUri(uri: string): boolean
    static canSaveUri(uri: string): boolean
    static getDefault(): Asset
    static registerMetas(klass: Formatter | Function | GObject.Type, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
    static $gtype: GObject.Type
}
export interface Group_ConstructProps extends Container_ConstructProps {
    duration?: number
    inPoint?: number
    maxDuration?: number
    priority?: number
    start?: number
}
export class Group {
    /* Properties of GES-1.0.GES.Group */
    duration: number
    inPoint: number
    maxDuration: number
    priority: number
    start: number
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    name: string
    parent: TimelineElement
    serialize: boolean
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: Group, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: Group, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Group, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Group, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Group, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Group, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Group_ConstructProps)
    _init (config?: Group_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Group
    static $gtype: GObject.Type
}
export interface ImageSource_ConstructProps extends VideoSource_ConstructProps {
    uri?: string
}
export class ImageSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): { returnType: boolean, width: number, height: number }
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: ImageSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: ImageSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: ImageSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: ImageSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: ImageSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: ImageSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImageSource_ConstructProps)
    _init (config?: ImageSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Layer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    autoTransition?: boolean
    priority?: number
}
export class Layer {
    /* Properties of GES-1.0.GES.Layer */
    autoTransition: boolean
    priority: number
    /* Fields of GES-1.0.GES.Layer */
    parent: GObject.InitiallyUnowned
    timeline: Timeline
    minNlePriority: number
    maxNlePriority: number
    priv: LayerPrivate
    gesReserved: object[]
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Layer */
    addAsset(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, trackTypes: TrackType): Clip
    addAssetFull(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, trackTypes: TrackType): Clip
    addClip(clip: Clip): boolean
    addClipFull(clip: Clip): boolean
    getActiveForTrack(track: Track): boolean
    getAutoTransition(): boolean
    getClips(): Clip[]
    getClipsInInterval(start: Gst.ClockTime, end: Gst.ClockTime): Clip[]
    getDuration(): Gst.ClockTime
    getPriority(): number
    getTimeline(): Timeline | null
    isEmpty(): boolean
    removeClip(clip: Clip): boolean
    setActiveForTracks(active: boolean, tracks?: Track[] | null): boolean
    setAutoTransition(autoTransition: boolean): void
    setPriority(priority: number): void
    setTimeline(timeline: Timeline): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Layer */
    connect(sigName: "active-changed", callback: (($obj: Layer, active: boolean, tracks: Track[]) => void)): number
    on(sigName: "active-changed", callback: (active: boolean, tracks: Track[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (active: boolean, tracks: Track[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (active: boolean, tracks: Track[]) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", active: boolean, tracks: Track[]): void
    connect(sigName: "clip-added", callback: (($obj: Layer, clip: Clip) => void)): number
    on(sigName: "clip-added", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clip-added", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clip-added", callback: (clip: Clip) => void): NodeJS.EventEmitter
    emit(sigName: "clip-added", clip: Clip): void
    connect(sigName: "clip-removed", callback: (($obj: Layer, clip: Clip) => void)): number
    on(sigName: "clip-removed", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clip-removed", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clip-removed", callback: (clip: Clip) => void): NodeJS.EventEmitter
    emit(sigName: "clip-removed", clip: Clip): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Layer, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::auto-transition", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-transition", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Layer
    static $gtype: GObject.Type
}
export interface Marker_ConstructProps extends GObject.Object_ConstructProps {
}
export class Marker {
    /* Properties of GES-1.0.GES.Marker */
    readonly position: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Marker, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Marker_ConstructProps)
    _init (config?: Marker_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MarkerList_ConstructProps extends GObject.Object_ConstructProps {
}
export class MarkerList {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.MarkerList */
    add(position: Gst.ClockTime): Marker
    getMarkers(): Marker[]
    move(marker: Marker, position: Gst.ClockTime): boolean
    remove(marker: Marker): boolean
    size(): number
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GES-1.0.GES.MarkerList */
    connect(sigName: "marker-added", callback: (($obj: MarkerList, position: number, marker: Marker) => void)): number
    on(sigName: "marker-added", callback: (position: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-added", callback: (position: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-added", callback: (position: number, marker: Marker) => void): NodeJS.EventEmitter
    emit(sigName: "marker-added", position: number, marker: Marker): void
    connect(sigName: "marker-moved", callback: (($obj: MarkerList, previousPosition: number, newPosition: number, marker: Marker) => void)): number
    on(sigName: "marker-moved", callback: (previousPosition: number, newPosition: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-moved", callback: (previousPosition: number, newPosition: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-moved", callback: (previousPosition: number, newPosition: number, marker: Marker) => void): NodeJS.EventEmitter
    emit(sigName: "marker-moved", previousPosition: number, newPosition: number, marker: Marker): void
    connect(sigName: "marker-removed", callback: (($obj: MarkerList, marker: Marker) => void)): number
    on(sigName: "marker-removed", callback: (marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-removed", callback: (marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-removed", callback: (marker: Marker) => void): NodeJS.EventEmitter
    emit(sigName: "marker-removed", marker: Marker): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MarkerList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MarkerList_ConstructProps)
    _init (config?: MarkerList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MarkerList
    static $gtype: GObject.Type
}
export interface MultiFileSource_ConstructProps extends VideoSource_ConstructProps {
    uri?: string
}
export class MultiFileSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): { returnType: boolean, width: number, height: number }
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: MultiFileSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: MultiFileSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: MultiFileSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: MultiFileSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: MultiFileSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: MultiFileSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultiFileSource_ConstructProps)
    _init (config?: MultiFileSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): MultiFileSource
    static $gtype: GObject.Type
}
export interface Operation_ConstructProps extends TrackElement_ConstructProps {
}
export class Operation {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Operation, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Operation, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Operation, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Operation, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Operation, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Operation, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface OperationClip_ConstructProps extends Clip_ConstructProps {
}
export class OperationClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: OperationClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: OperationClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: OperationClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: OperationClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: OperationClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: OperationClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OperationClip_ConstructProps)
    _init (config?: OperationClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OverlayClip_ConstructProps extends OperationClip_ConstructProps {
}
export class OverlayClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: OverlayClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: OverlayClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: OverlayClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: OverlayClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: OverlayClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: OverlayClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OverlayClip_ConstructProps)
    _init (config?: OverlayClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Pipeline_ConstructProps extends Gst.Pipeline_ConstructProps {
    audioFilter?: Gst.Element
    audioSink?: Gst.Element
    mode?: PipelineFlags
    timeline?: Timeline
    videoFilter?: Gst.Element
    videoSink?: Gst.Element
}
export class Pipeline {
    /* Properties of GES-1.0.GES.Pipeline */
    audioFilter: Gst.Element
    audioSink: Gst.Element
    mode: PipelineFlags
    timeline: Timeline
    videoFilter: Gst.Element
    videoSink: Gst.Element
    /* Properties of Gst-1.0.Gst.Pipeline */
    autoFlushBus: boolean
    delay: number
    latency: number
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Pipeline */
    bin: Gst.Bin
    fixedClock: Gst.Clock
    streamTime: Gst.ClockTime
    /* Fields of Gst-1.0.Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    childrenCookie: number
    childBus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Gst.Clock
    clockProvider: Gst.Element
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
    /* Methods of GES-1.0.GES.Pipeline */
    getMode(): PipelineFlags
    getThumbnail(caps: Gst.Caps): Gst.Sample
    getThumbnailRgb24(width: number, height: number): Gst.Sample
    previewGetAudioSink(): Gst.Element
    previewGetVideoSink(): Gst.Element
    previewSetAudioSink(sink: Gst.Element): void
    previewSetVideoSink(sink: Gst.Element): void
    saveThumbnail(width: number, height: number, format: string, location: string): boolean
    setMode(mode: PipelineFlags): boolean
    setRenderSettings(outputUri: string, profile: GstPbutils.EncodingProfile): boolean
    setTimeline(timeline: Timeline): boolean
    /* Methods of Gst-1.0.Gst.Pipeline */
    autoClock(): void
    getAutoFlushBus(): boolean
    getBus(): Gst.Bus
    getDelay(): Gst.ClockTime
    getLatency(): Gst.ClockTime
    getPipelineClock(): Gst.Clock
    setAutoFlushBus(autoFlush: boolean): void
    setDelay(delay: Gst.ClockTime): void
    setLatency(latency: Gst.ClockTime): void
    useClock(clock?: Gst.Clock | null): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Gst.Element): boolean
    findUnlinkedPad(direction: Gst.PadDirection): Gst.Pad | null
    getByInterface(iface: GObject.Type): Gst.Element | null
    getByName(name: string): Gst.Element | null
    getByNameRecurseUp(name: string): Gst.Element | null
    getSuppressedFlags(): Gst.ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Gst.Iterator | null
    iterateAllByInterface(iface: GObject.Type): Gst.Iterator | null
    iterateElements(): Gst.Iterator | null
    iterateRecurse(): Gst.Iterator | null
    iterateSinks(): Gst.Iterator | null
    iterateSorted(): Gst.Iterator | null
    iterateSources(): Gst.Iterator | null
    recalculateLatency(): boolean
    remove(element: Gst.Element): boolean
    setSuppressedFlags(flags: Gst.ElementFlags): void
    syncChildrenStates(): boolean
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
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): { value: any }
    lookup(name: string): { returnType: boolean, target: GObject.Object | null, pspec: GObject.ParamSpec | null }
    setProperty(name: string, value: any): void
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlay */
    expose(): void
    gotWindowHandle(handle: number): void
    handleEvents(handleEvents: boolean): void
    prepareWindowHandle(): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setWindowHandle(handle: number): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Pipeline, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Pipeline, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Pipeline, element: Gst.Element) => void)): number
    on(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Pipeline, element: Gst.Element) => void)): number
    on(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Pipeline, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Pipeline, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pipeline, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::audio-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Pipeline_ConstructProps)
    _init (config?: Pipeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pipeline
    static new(name?: string | null): Pipeline
    static installProperties(oclass: GObject.ObjectClass, lastPropId: number): void
    static setProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
    static $gtype: GObject.Type
}
export interface PitiviFormatter_ConstructProps extends Formatter_ConstructProps {
}
export class PitiviFormatter {
    /* Fields of GES-1.0.GES.PitiviFormatter */
    parent: Formatter
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PitiviFormatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PitiviFormatter_ConstructProps)
    _init (config?: PitiviFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PitiviFormatter
    static $gtype: GObject.Type
}
export interface Project_ConstructProps extends Asset_ConstructProps {
    uri?: string
}
export class Project {
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.Project */
    parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Project */
    addAsset(asset: Asset): boolean
    addEncodingProfile(profile: GstPbutils.EncodingProfile): boolean
    addFormatter(formatter: Formatter): void
    createAsset(id: string | null, extractableType: GObject.Type): boolean
    createAssetSync(id: string | null, extractableType: GObject.Type): Asset | null
    getAsset(id: string, extractableType: GObject.Type): Asset | null
    getLoadingAssets(): Asset[]
    getUri(): string | null
    listAssets(filter: GObject.Type): Asset[]
    listEncodingProfiles(): GstPbutils.EncodingProfile[] | null
    load(timeline: Timeline): boolean
    removeAsset(asset: Asset): boolean
    save(timeline: Timeline, uri: string, formatterAsset: Asset | null, overwrite: boolean): boolean
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GES-1.0.GES.Project */
    connect(sigName: "asset-added", callback: (($obj: Project, asset: Asset) => void)): number
    on(sigName: "asset-added", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-added", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-added", callback: (asset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "asset-added", asset: Asset): void
    connect(sigName: "asset-loading", callback: (($obj: Project, asset: Asset) => void)): number
    on(sigName: "asset-loading", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-loading", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-loading", callback: (asset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "asset-loading", asset: Asset): void
    connect(sigName: "asset-removed", callback: (($obj: Project, asset: Asset) => void)): number
    on(sigName: "asset-removed", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-removed", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-removed", callback: (asset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "asset-removed", asset: Asset): void
    connect(sigName: "error-loading", callback: (($obj: Project, timeline: Timeline, error: GLib.Error) => void)): number
    on(sigName: "error-loading", callback: (timeline: Timeline, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-loading", callback: (timeline: Timeline, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-loading", callback: (timeline: Timeline, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error-loading", timeline: Timeline, error: GLib.Error): void
    connect(sigName: "error-loading-asset", callback: (($obj: Project, error: GLib.Error, id: string, extractableType: GObject.Type) => void)): number
    on(sigName: "error-loading-asset", callback: (error: GLib.Error, id: string, extractableType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-loading-asset", callback: (error: GLib.Error, id: string, extractableType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-loading-asset", callback: (error: GLib.Error, id: string, extractableType: GObject.Type) => void): NodeJS.EventEmitter
    emit(sigName: "error-loading-asset", error: GLib.Error, id: string, extractableType: GObject.Type): void
    connect(sigName: "loaded", callback: (($obj: Project, timeline: Timeline) => void)): number
    on(sigName: "loaded", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loaded", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loaded", callback: (timeline: Timeline) => void): NodeJS.EventEmitter
    emit(sigName: "loaded", timeline: Timeline): void
    connect(sigName: "loading", callback: (($obj: Project, timeline: Timeline) => void)): number
    on(sigName: "loading", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loading", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loading", callback: (timeline: Timeline) => void): NodeJS.EventEmitter
    emit(sigName: "loading", timeline: Timeline): void
    connect(sigName: "missing-uri", callback: (($obj: Project, error: GLib.Error, wrongAsset: Asset) => string | null)): number
    on(sigName: "missing-uri", callback: (error: GLib.Error, wrongAsset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "missing-uri", callback: (error: GLib.Error, wrongAsset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "missing-uri", callback: (error: GLib.Error, wrongAsset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "missing-uri", error: GLib.Error, wrongAsset: Asset): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Project, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::proxy", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Project_ConstructProps)
    _init (config?: Project_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri?: string | null): Project
    static $gtype: GObject.Type
}
export interface Source_ConstructProps extends TrackElement_ConstructProps {
}
export class Source {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Source, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Source, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Source, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Source, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Source, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Source, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SourceClip_ConstructProps extends Clip_ConstructProps {
}
export class SourceClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: SourceClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: SourceClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: SourceClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: SourceClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: SourceClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: SourceClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceClip_ConstructProps)
    _init (config?: SourceClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newTimeOverlay(): SourceClip
    static $gtype: GObject.Type
}
export interface SourceClipAsset_ConstructProps extends ClipAsset_ConstructProps {
}
export class SourceClipAsset {
    /* Properties of GES-1.0.GES.ClipAsset */
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.SourceClipAsset */
    parentInstance: ClipAsset
    /* Fields of GES-1.0.GES.ClipAsset */
    parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.ClipAsset */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getNaturalFramerate(framerateN: number, framerateD: number): boolean
    getSupportedFormats(): TrackType
    setSupportedFormats(supportedformats: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: SourceClipAsset, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::supported-formats", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceClipAsset_ConstructProps)
    _init (config?: SourceClipAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TestClip_ConstructProps extends SourceClip_ConstructProps {
    freq?: number
    mute?: boolean
    volume?: number
    vpattern?: VideoTestPattern
}
export class TestClip {
    /* Properties of GES-1.0.GES.TestClip */
    freq: number
    mute: boolean
    volume: number
    vpattern: VideoTestPattern
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TestClip */
    getFrequency(): number
    getVolume(): number
    getVpattern(): VideoTestPattern
    isMuted(): boolean
    setFrequency(freq: number): void
    setMute(mute: boolean): void
    setVolume(volume: number): void
    setVpattern(vpattern: VideoTestPattern): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: TestClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TestClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TestClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TestClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TestClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TestClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::freq", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::freq", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpattern", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpattern", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TestClip_ConstructProps)
    _init (config?: TestClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TestClip
    static newForNick(nick: string): TestClip
    static $gtype: GObject.Type
}
export interface TextOverlay_ConstructProps extends Operation_ConstructProps {
}
export class TextOverlay {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TextOverlay */
    getColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalignment(halign: TextHAlign): void
    setText(text: string): void
    setValignment(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: TextOverlay, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: TextOverlay, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TextOverlay, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TextOverlay, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TextOverlay, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TextOverlay, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TextOverlay_ConstructProps)
    _init (config?: TextOverlay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextOverlay
    static $gtype: GObject.Type
}
export interface TextOverlayClip_ConstructProps extends OverlayClip_ConstructProps {
    color?: number
    fontDesc?: string
    halignment?: TextHAlign
    text?: string
    valignment?: TextVAlign
    xpos?: number
    ypos?: number
}
export class TextOverlayClip {
    /* Properties of GES-1.0.GES.TextOverlayClip */
    color: number
    fontDesc: string
    halignment: TextHAlign
    text: string
    valignment: TextVAlign
    xpos: number
    ypos: number
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TextOverlayClip */
    getColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalign(halign: TextHAlign): void
    setText(text: string): void
    setValign(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: TextOverlayClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TextOverlayClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TextOverlayClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TextOverlayClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TextOverlayClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TextOverlayClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::color", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TextOverlayClip_ConstructProps)
    _init (config?: TextOverlayClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextOverlayClip
    static $gtype: GObject.Type
}
export interface Timeline_ConstructProps extends Gst.Bin_ConstructProps {
    autoTransition?: boolean
    snappingDistance?: number
}
export class Timeline {
    /* Properties of GES-1.0.GES.Timeline */
    autoTransition: boolean
    readonly duration: number
    snappingDistance: number
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES-1.0.GES.Timeline */
    layers: Layer[]
    tracks: object[]
    /* Fields of Gst-1.0.Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    childrenCookie: number
    childBus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Gst.Clock
    clockProvider: Gst.Element
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
    /* Methods of GES-1.0.GES.Timeline */
    addLayer(layer: Layer): boolean
    addTrack(track: Track): boolean
    appendLayer(): Layer
    commit(): boolean
    commitSync(): boolean
    getAutoTransition(): boolean
    getDuration(): Gst.ClockTime
    getElement(name: string): TimelineElement | null
    getFrameAt(timestamp: Gst.ClockTime): FrameNumber
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getGroups(): Group[]
    getLayer(priority: number): Layer | null
    getLayers(): Layer[]
    getPadForTrack(track: Track): Gst.Pad | null
    getSnappingDistance(): Gst.ClockTime
    getTrackForPad(pad: Gst.Pad): Track | null
    getTracks(): Track[]
    isEmpty(): boolean
    loadFromUri(uri: string): boolean
    moveLayer(layer: Layer, newLayerPriority: number): boolean
    pasteElement(element: TimelineElement, position: Gst.ClockTime, layerPriority: number): TimelineElement | null
    removeLayer(layer: Layer): boolean
    removeTrack(track: Track): boolean
    saveToUri(uri: string, formatterAsset: Asset | null, overwrite: boolean): boolean
    setAutoTransition(autoTransition: boolean): void
    setSnappingDistance(snappingDistance: Gst.ClockTime): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Gst.Element): boolean
    findUnlinkedPad(direction: Gst.PadDirection): Gst.Pad | null
    getByInterface(iface: GObject.Type): Gst.Element | null
    getByName(name: string): Gst.Element | null
    getByNameRecurseUp(name: string): Gst.Element | null
    getSuppressedFlags(): Gst.ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Gst.Iterator | null
    iterateAllByInterface(iface: GObject.Type): Gst.Iterator | null
    iterateElements(): Gst.Iterator | null
    iterateRecurse(): Gst.Iterator | null
    iterateSinks(): Gst.Iterator | null
    iterateSorted(): Gst.Iterator | null
    iterateSources(): Gst.Iterator | null
    recalculateLatency(): boolean
    remove(element: Gst.Element): boolean
    setSuppressedFlags(flags: Gst.ElementFlags): void
    syncChildrenStates(): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): { value: any }
    lookup(name: string): { returnType: boolean, target: GObject.Object | null, pspec: GObject.ParamSpec | null }
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Timeline */
    connect(sigName: "commited", callback: (($obj: Timeline) => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "group-added", callback: (($obj: Timeline, group: Group) => void)): number
    on(sigName: "group-added", callback: (group: Group) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-added", callback: (group: Group) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-added", callback: (group: Group) => void): NodeJS.EventEmitter
    emit(sigName: "group-added", group: Group): void
    connect(sigName: "group-removed", callback: (($obj: Timeline, group: Group, children: Container[]) => void)): number
    on(sigName: "group-removed", callback: (group: Group, children: Container[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: (group: Group, children: Container[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: (group: Group, children: Container[]) => void): NodeJS.EventEmitter
    emit(sigName: "group-removed", group: Group, children: Container[]): void
    connect(sigName: "layer-added", callback: (($obj: Timeline, layer: Layer) => void)): number
    on(sigName: "layer-added", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layer-added", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layer-added", callback: (layer: Layer) => void): NodeJS.EventEmitter
    emit(sigName: "layer-added", layer: Layer): void
    connect(sigName: "layer-removed", callback: (($obj: Timeline, layer: Layer) => void)): number
    on(sigName: "layer-removed", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layer-removed", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layer-removed", callback: (layer: Layer) => void): NodeJS.EventEmitter
    emit(sigName: "layer-removed", layer: Layer): void
    connect(sigName: "select-element-track", callback: (($obj: Timeline, clip: Clip, trackElement: TrackElement) => Track)): number
    on(sigName: "select-element-track", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-element-track", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-element-track", callback: (clip: Clip, trackElement: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "select-element-track", clip: Clip, trackElement: TrackElement): void
    connect(sigName: "select-tracks-for-object", callback: (($obj: Timeline, clip: Clip, trackElement: TrackElement) => Track[])): number
    on(sigName: "select-tracks-for-object", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-tracks-for-object", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-tracks-for-object", callback: (clip: Clip, trackElement: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "select-tracks-for-object", clip: Clip, trackElement: TrackElement): void
    connect(sigName: "snapping-ended", callback: (($obj: Timeline, obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    on(sigName: "snapping-ended", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "snapping-ended", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "snapping-ended", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void): NodeJS.EventEmitter
    emit(sigName: "snapping-ended", obj1: TrackElement, obj2: TrackElement, position: number): void
    connect(sigName: "snapping-started", callback: (($obj: Timeline, obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    on(sigName: "snapping-started", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "snapping-started", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "snapping-started", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void): NodeJS.EventEmitter
    emit(sigName: "snapping-started", obj1: TrackElement, obj2: TrackElement, position: number): void
    connect(sigName: "track-added", callback: (($obj: Timeline, track: Track) => void)): number
    on(sigName: "track-added", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-added", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-added", callback: (track: Track) => void): NodeJS.EventEmitter
    emit(sigName: "track-added", track: Track): void
    connect(sigName: "track-removed", callback: (($obj: Timeline, track: Track) => void)): number
    on(sigName: "track-removed", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-removed", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-removed", callback: (track: Track) => void): NodeJS.EventEmitter
    emit(sigName: "track-removed", track: Track): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Timeline, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Timeline, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: Timeline) => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Timeline, element: Gst.Element) => void)): number
    on(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Timeline, element: Gst.Element) => void)): number
    on(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Timeline) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Timeline, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Timeline, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Timeline, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Timeline, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Timeline, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: Timeline, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::auto-transition", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-transition", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snapping-distance", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snapping-distance", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Timeline_ConstructProps)
    _init (config?: Timeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Timeline
    static new(name?: string | null): Timeline
    static newAudioVideo(): Timeline
    static newFromUri(uri: string): Timeline
    static $gtype: GObject.Type
}
export interface TimelineElement_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    duration?: number
    inPoint?: number
    maxDuration?: number
    name?: string
    parent?: TimelineElement
    priority?: number
    serialize?: boolean
    start?: number
    timeline?: Timeline
}
export class TimelineElement {
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TimelineElement, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TimelineElement, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TimelineElement, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TimelineElement, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimelineElement_ConstructProps)
    _init (config?: TimelineElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TitleClip_ConstructProps extends SourceClip_ConstructProps {
    background?: number
    color?: number
    fontDesc?: string
    halignment?: TextHAlign
    text?: string
    valignment?: TextVAlign
    xpos?: number
    ypos?: number
}
export class TitleClip {
    /* Properties of GES-1.0.GES.TitleClip */
    background: number
    color: number
    fontDesc: string
    halignment: TextHAlign
    text: string
    valignment: TextVAlign
    xpos: number
    ypos: number
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TitleClip */
    getBackgroundColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getTextColor(): number
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setBackground(background: number): void
    setColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalignment(halign: TextHAlign): void
    setText(text: string): void
    setValignment(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: TitleClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TitleClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TitleClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TitleClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TitleClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TitleClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::background", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TitleClip_ConstructProps)
    _init (config?: TitleClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TitleClip
    static $gtype: GObject.Type
}
export interface TitleSource_ConstructProps extends VideoSource_ConstructProps {
}
export class TitleSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TitleSource */
    getBackgroundColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getTextColor(): number
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setBackgroundColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalignment(halign: TextHAlign): void
    setText(text: string): void
    setTextColor(color: number): void
    setValignment(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): { returnType: boolean, width: number, height: number }
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: TitleSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: TitleSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TitleSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TitleSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TitleSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TitleSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TitleSource_ConstructProps)
    _init (config?: TitleSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Track_ConstructProps extends Gst.Bin_ConstructProps {
    caps?: Gst.Caps
    id?: string
    mixing?: boolean
    restrictionCaps?: Gst.Caps
    trackType?: TrackType
}
export class Track {
    /* Properties of GES-1.0.GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restrictionCaps: Gst.Caps
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES-1.0.GES.Track */
    type: TrackType
    /* Fields of Gst-1.0.Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    childrenCookie: number
    childBus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Gst.Clock
    clockProvider: Gst.Element
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
    /* Methods of GES-1.0.GES.Track */
    addElement(object: TrackElement): boolean
    addElementFull(object: TrackElement): boolean
    commit(): boolean
    getCaps(): Gst.Caps
    getElements(): TrackElement[]
    getMixing(): boolean
    getRestrictionCaps(): Gst.Caps
    getTimeline(): Timeline | null
    removeElement(object: TrackElement): boolean
    removeElementFull(object: TrackElement): boolean
    setMixing(mixing: boolean): void
    setRestrictionCaps(caps: Gst.Caps): void
    setTimeline(timeline: Timeline): void
    updateRestrictionCaps(caps: Gst.Caps): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Gst.Element): boolean
    findUnlinkedPad(direction: Gst.PadDirection): Gst.Pad | null
    getByInterface(iface: GObject.Type): Gst.Element | null
    getByName(name: string): Gst.Element | null
    getByNameRecurseUp(name: string): Gst.Element | null
    getSuppressedFlags(): Gst.ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Gst.Iterator | null
    iterateAllByInterface(iface: GObject.Type): Gst.Iterator | null
    iterateElements(): Gst.Iterator | null
    iterateRecurse(): Gst.Iterator | null
    iterateSinks(): Gst.Iterator | null
    iterateSorted(): Gst.Iterator | null
    iterateSources(): Gst.Iterator | null
    recalculateLatency(): boolean
    remove(element: Gst.Element): boolean
    setSuppressedFlags(flags: Gst.ElementFlags): void
    syncChildrenStates(): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): { value: any }
    lookup(name: string): { returnType: boolean, target: GObject.Object | null, pspec: GObject.ParamSpec | null }
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Track */
    connect(sigName: "commited", callback: (($obj: Track) => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: (($obj: Track, effect: TrackElement) => void)): number
    on(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-added", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: (($obj: Track, effect: TrackElement) => void)): number
    on(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-removed", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-removed", effect: TrackElement): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Track, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Track, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: Track) => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Track, element: Gst.Element) => void)): number
    on(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Track, element: Gst.Element) => void)): number
    on(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Track) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Track, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Track, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Track, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Track, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Track, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: Track, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::duration", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mixing", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Track_ConstructProps)
    _init (config?: Track_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: TrackType, caps: Gst.Caps): Track
    static new(name?: string | null): Track
    static $gtype: GObject.Type
}
export interface TrackElement_ConstructProps extends TimelineElement_ConstructProps {
    active?: boolean
    autoClampControlSources?: boolean
    hasInternalSource?: boolean
    trackType?: TrackType
}
export class TrackElement {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: TrackElement, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: TrackElement, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TrackElement, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TrackElement, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TrackElement, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TrackElement, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackElement_ConstructProps)
    _init (config?: TrackElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TrackElementAsset_ConstructProps extends Asset_ConstructProps {
    trackType?: TrackType
}
export class TrackElementAsset {
    /* Properties of GES-1.0.GES.TrackElementAsset */
    trackType: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.TrackElementAsset */
    parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElementAsset */
    getNaturalFramerate(framerateN: number, framerateD: number): boolean
    getTrackType(): TrackType
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TrackElementAsset, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackElementAsset_ConstructProps)
    _init (config?: TrackElementAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transition_ConstructProps extends Operation_ConstructProps {
}
export class Transition {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Transition, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Transition, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Transition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Transition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Transition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Transition, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transition_ConstructProps)
    _init (config?: Transition_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TransitionClip_ConstructProps extends BaseTransitionClip_ConstructProps {
    vtype?: VideoStandardTransitionType
}
export class TransitionClip {
    /* Properties of GES-1.0.GES.TransitionClip */
    vtype: VideoStandardTransitionType
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: TransitionClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TransitionClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TransitionClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TransitionClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TransitionClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TransitionClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::vtype", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vtype", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TransitionClip_ConstructProps)
    _init (config?: TransitionClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(vtype: VideoStandardTransitionType): TransitionClip
    static newForNick(nick: string): TransitionClip
    static $gtype: GObject.Type
}
export interface UriClip_ConstructProps extends SourceClip_ConstructProps {
    isImage?: boolean
    mute?: boolean
    supportedFormats?: TrackType
    uri?: string
}
export class UriClip {
    /* Properties of GES-1.0.GES.UriClip */
    isImage: boolean
    mute: boolean
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.Container */
    children: TimelineElement[]
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.UriClip */
    getUri(): string
    isMuted(): boolean
    setIsImage(isImage: boolean): void
    setMute(mute: boolean): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: (($obj: UriClip, element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: UriClip, element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: UriClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: UriClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: UriClip, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: UriClip, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::is-image", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-image", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UriClip_ConstructProps)
    _init (config?: UriClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): UriClip
    static $gtype: GObject.Type
}
export interface UriClipAsset_ConstructProps extends SourceClipAsset_ConstructProps {
    duration?: number
}
export class UriClipAsset {
    /* Properties of GES-1.0.GES.UriClipAsset */
    duration: number
    readonly isNestedTimeline: boolean
    /* Properties of GES-1.0.GES.ClipAsset */
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.UriClipAsset */
    parent: SourceClipAsset
    /* Fields of GES-1.0.GES.SourceClipAsset */
    parentInstance: ClipAsset
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.UriClipAsset */
    getDuration(): Gst.ClockTime
    getInfo(): GstPbutils.DiscovererInfo
    getMaxDuration(): Gst.ClockTime
    getStreamAssets(): UriSourceAsset[]
    isImage(): boolean
    /* Methods of GES-1.0.GES.ClipAsset */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getNaturalFramerate(framerateN: number, framerateD: number): boolean
    getSupportedFormats(): TrackType
    setSupportedFormats(supportedformats: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: UriClipAsset, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-nested-timeline", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-nested-timeline", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UriClipAsset_ConstructProps)
    _init (config?: UriClipAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static finish(res: Gio.AsyncResult): UriClipAsset
    static requestSync(uri: string): UriClipAsset
    static setTimeout(klass: UriClipAsset | Function | GObject.Type, timeout: Gst.ClockTime): void
    static $gtype: GObject.Type
}
export interface UriSourceAsset_ConstructProps extends TrackElementAsset_ConstructProps {
}
export class UriSourceAsset {
    /* Properties of GES-1.0.GES.TrackElementAsset */
    trackType: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.UriSourceAsset */
    parent: TrackElementAsset
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.UriSourceAsset */
    getFilesourceAsset(): UriClipAsset
    getStreamInfo(): GstPbutils.DiscovererStreamInfo
    getStreamUri(): string
    isImage(): boolean
    /* Methods of GES-1.0.GES.TrackElementAsset */
    getNaturalFramerate(framerateN: number, framerateD: number): boolean
    getTrackType(): TrackType
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: UriSourceAsset, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UriSourceAsset_ConstructProps)
    _init (config?: UriSourceAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoSource_ConstructProps extends Source_ConstructProps {
}
export class VideoSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): { returnType: boolean, width: number, height: number }
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoSource_ConstructProps)
    _init (config?: VideoSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoTestSource_ConstructProps extends VideoSource_ConstructProps {
}
export class VideoTestSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoTestSource */
    getPattern(): VideoTestPattern
    setPattern(pattern: VideoTestPattern): void
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): { returnType: boolean, width: number, height: number }
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoTestSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoTestSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoTestSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoTestSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoTestSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoTestSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoTestSource_ConstructProps)
    _init (config?: VideoTestSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoTrack_ConstructProps extends Track_ConstructProps {
}
export class VideoTrack {
    /* Properties of GES-1.0.GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restrictionCaps: Gst.Caps
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES-1.0.GES.VideoTrack */
    parentInstance: Track
    /* Fields of GES-1.0.GES.Track */
    type: TrackType
    /* Fields of Gst-1.0.Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    childrenCookie: number
    childBus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Gst.Clock
    clockProvider: Gst.Element
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
    /* Methods of GES-1.0.GES.Track */
    addElement(object: TrackElement): boolean
    addElementFull(object: TrackElement): boolean
    commit(): boolean
    getCaps(): Gst.Caps
    getElements(): TrackElement[]
    getMixing(): boolean
    getRestrictionCaps(): Gst.Caps
    getTimeline(): Timeline | null
    removeElement(object: TrackElement): boolean
    removeElementFull(object: TrackElement): boolean
    setMixing(mixing: boolean): void
    setRestrictionCaps(caps: Gst.Caps): void
    setTimeline(timeline: Timeline): void
    updateRestrictionCaps(caps: Gst.Caps): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Gst.Element): boolean
    findUnlinkedPad(direction: Gst.PadDirection): Gst.Pad | null
    getByInterface(iface: GObject.Type): Gst.Element | null
    getByName(name: string): Gst.Element | null
    getByNameRecurseUp(name: string): Gst.Element | null
    getSuppressedFlags(): Gst.ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Gst.Iterator | null
    iterateAllByInterface(iface: GObject.Type): Gst.Iterator | null
    iterateElements(): Gst.Iterator | null
    iterateRecurse(): Gst.Iterator | null
    iterateSinks(): Gst.Iterator | null
    iterateSorted(): Gst.Iterator | null
    iterateSources(): Gst.Iterator | null
    recalculateLatency(): boolean
    remove(element: Gst.Element): boolean
    setSuppressedFlags(flags: Gst.ElementFlags): void
    syncChildrenStates(): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): { value: any }
    lookup(name: string): { returnType: boolean, target: GObject.Object | null, pspec: GObject.ParamSpec | null }
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Track */
    connect(sigName: "commited", callback: (($obj: VideoTrack) => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: (($obj: VideoTrack, effect: TrackElement) => void)): number
    on(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-added", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: (($obj: VideoTrack, effect: TrackElement) => void)): number
    on(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-removed", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-removed", effect: TrackElement): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: VideoTrack, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: VideoTrack, subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: VideoTrack) => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: VideoTrack, element: Gst.Element) => void)): number
    on(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: VideoTrack, element: Gst.Element) => void)): number
    on(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoTrack) => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoTrack, newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoTrack, oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoTrack, propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoTrack, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: VideoTrack, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: VideoTrack, object: GObject.Object, name: string) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::duration", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mixing", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: VideoTrack_ConstructProps)
    _init (config?: VideoTrack_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTrack
    static new(type: TrackType, caps: Gst.Caps): VideoTrack
    static new(name?: string | null): VideoTrack
    static $gtype: GObject.Type
}
export interface VideoTransition_ConstructProps extends Transition_ConstructProps {
    border?: number
    invert?: boolean
    transitionType?: VideoStandardTransitionType
}
export class VideoTransition {
    /* Properties of GES-1.0.GES.VideoTransition */
    border: number
    invert: boolean
    transitionType: VideoStandardTransitionType
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoTransition */
    getBorder(): number
    getTransitionType(): VideoStandardTransitionType
    isInverted(): boolean
    setBorder(value: number): void
    setInverted(inverted: boolean): void
    setTransitionType(type: VideoStandardTransitionType): boolean
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoTransition, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoTransition, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoTransition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoTransition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoTransition, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoTransition, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::border", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::invert", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invert", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::invert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::invert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transition-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transition-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transition-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transition-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoTransition_ConstructProps)
    _init (config?: VideoTransition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTransition
    static $gtype: GObject.Type
}
export interface VideoUriSource_ConstructProps extends VideoSource_ConstructProps {
    uri?: string
}
export class VideoUriSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES-1.0.GES.TimelineElement */
    parentInstance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): { returnType: boolean, width: number, height: number }
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): { returnType: boolean, value: any }
    getChildPropertyByPspec(pspec: GObject.ParamSpec): { value: any }
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): { returnType: boolean, framerateN: number, framerateD: number }
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): { returnType: boolean, flags: MetaFlag | null, type: GObject.Type | null }
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): { returnType: boolean, dest: boolean }
    getDate(metaItem: string): { returnType: boolean, dest: GLib.Date }
    getDateTime(metaItem: string): { returnType: boolean, dest: Gst.DateTime }
    getDouble(metaItem: string): { returnType: boolean, dest: number }
    getFloat(metaItem: string): { returnType: boolean, dest: number }
    getInt(metaItem: string): { returnType: boolean, dest: number }
    getInt64(metaItem: string): { returnType: boolean, dest: number }
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): { returnType: boolean, dest: number }
    getUint64(metaItem: string): { returnType: boolean, dest: number }
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoUriSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoUriSource, controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoUriSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoUriSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoUriSource, propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoUriSource, key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoUriSource_ConstructProps)
    _init (config?: VideoUriSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface XmlFormatter_ConstructProps extends BaseXmlFormatter_ConstructProps {
}
export class XmlFormatter {
    /* Fields of GES-1.0.GES.XmlFormatter */
    parent: BaseXmlFormatter
    priv: XmlFormatterPrivate
    gesReserved: object[]
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XmlFormatter, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: XmlFormatter_ConstructProps)
    _init (config?: XmlFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AssetClass {
    /* Fields of GES-1.0.GES.AssetClass */
    parent: GObject.ObjectClass
    startLoading: (self: Asset) => AssetLoadingReturn
    extract: (self: Asset) => Extractable
    informProxy: (self: Asset, proxyId: string) => void
    proxied: (self: Asset, proxy: Asset) => void
    requestIdUpdate: (self: Asset, proposedNewId: string, error: GLib.Error) => boolean
    gesReserved: object[]
    static name: string
}
export class AssetPrivate {
    static name: string
}
export abstract class AudioSourceClass {
    static name: string
}
export class AudioSourcePrivate {
    static name: string
}
export abstract class AudioTestSourceClass {
    static name: string
}
export class AudioTestSourcePrivate {
    static name: string
}
export abstract class AudioTrackClass {
    /* Fields of GES-1.0.GES.AudioTrackClass */
    parentClass: TrackClass
    gesReserved: object[]
    static name: string
}
export class AudioTrackPrivate {
    static name: string
}
export abstract class AudioTransitionClass {
    /* Fields of GES-1.0.GES.AudioTransitionClass */
    parentClass: TransitionClass
    gesReserved: object[]
    static name: string
}
export class AudioTransitionPrivate {
    static name: string
}
export abstract class AudioUriSourceClass {
    static name: string
}
export class AudioUriSourcePrivate {
    static name: string
}
export abstract class BaseEffectClass {
    static name: string
}
export abstract class BaseEffectClipClass {
    static name: string
}
export class BaseEffectClipPrivate {
    static name: string
}
export class BaseEffectPrivate {
    static name: string
}
export abstract class BaseTransitionClipClass {
    static name: string
}
export class BaseTransitionClipPrivate {
    static name: string
}
export abstract class BaseXmlFormatterClass {
    /* Fields of GES-1.0.GES.BaseXmlFormatterClass */
    parent: FormatterClass
    contentParser: GLib.MarkupParser
    save: (formatter: Formatter, timeline: Timeline) => GLib.String
    gesReserved: object[]
    static name: string
}
export class BaseXmlFormatterPrivate {
    static name: string
}
export abstract class ClipAssetClass {
    /* Fields of GES-1.0.GES.ClipAssetClass */
    parent: AssetClass
    getNaturalFramerate: (self: ClipAsset, framerateN: number, framerateD: number) => boolean
    gesReserved: object[]
    static name: string
}
export class ClipAssetPrivate {
    static name: string
}
export abstract class ClipClass {
    /* Fields of GES-1.0.GES.ClipClass */
    createTrackElement: CreateTrackElementFunc
    createTrackElements: CreateTrackElementsFunc
    static name: string
}
export class ClipPrivate {
    static name: string
}
export abstract class CommandLineFormatterClass {
    /* Fields of GES-1.0.GES.CommandLineFormatterClass */
    parentClass: FormatterClass
    static name: string
}
export class CommandLineFormatterPrivate {
    static name: string
}
export abstract class ContainerClass {
    /* Fields of GES-1.0.GES.ContainerClass */
    childAdded: (container: Container, element: TimelineElement) => void
    childRemoved: (container: Container, element: TimelineElement) => void
    addChild: (container: Container, element: TimelineElement) => boolean
    removeChild: (container: Container, element: TimelineElement) => boolean
    ungroup: (container: Container, recursive: boolean) => Container[]
    edit: (container: Container, layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number) => boolean
    static name: string
}
export class ContainerPrivate {
    static name: string
}
export abstract class EffectAssetClass {
    /* Fields of GES-1.0.GES.EffectAssetClass */
    parentClass: TrackElementAssetClass
    gesReserved: object[]
    static name: string
}
export class EffectAssetPrivate {
    static name: string
}
export abstract class EffectClass {
    /* Methods of GES-1.0.GES.EffectClass */
    registerRateProperty(klass: Effect | Function | GObject.Type, elementName: string, propertyName: string): boolean
    static name: string
}
export abstract class EffectClipClass {
    static name: string
}
export class EffectClipPrivate {
    static name: string
}
export class EffectPrivate {
    static name: string
}
export abstract class ExtractableInterface {
    /* Fields of GES-1.0.GES.ExtractableInterface */
    parent: GObject.TypeInterface
    assetType: GObject.Type
    checkId: ExtractableCheckId
    canUpdateAsset: boolean
    setAsset: (self: Extractable, asset: Asset) => void
    setAssetFull: (self: Extractable, asset: Asset) => boolean
    getId: (self: Extractable) => string
    getRealExtractableType: (wantedType: GObject.Type, id: string) => GObject.Type
    registerMetas: (self: ExtractableInterface, klass: GObject.ObjectClass, asset: Asset) => boolean
    gesReserved: object[]
    static name: string
}
export abstract class FormatterClass {
    /* Fields of GES-1.0.GES.FormatterClass */
    parentClass: GObject.InitiallyUnownedClass
    canLoadUri: FormatterCanLoadURIMethod
    loadFromUri: FormatterLoadFromURIMethod
    saveToUri: FormatterSaveToURIMethod
    /* Methods of GES-1.0.GES.FormatterClass */
    registerMetas(klass: Formatter | Function | GObject.Type, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
    static name: string
}
export class FormatterPrivate {
    static name: string
}
export abstract class GroupClass {
    /* Fields of GES-1.0.GES.GroupClass */
    parentClass: ContainerClass
    gesReserved: object[]
    static name: string
}
export class GroupPrivate {
    static name: string
}
export abstract class ImageSourceClass {
    /* Fields of GES-1.0.GES.ImageSourceClass */
    parentClass: VideoSourceClass
    gesReserved: object[]
    static name: string
}
export class ImageSourcePrivate {
    static name: string
}
export abstract class LayerClass {
    /* Fields of GES-1.0.GES.LayerClass */
    objectAdded: (layer: Layer, object: Clip) => void
    objectRemoved: (layer: Layer, object: Clip) => void
    static name: string
}
export class LayerPrivate {
    static name: string
}
export abstract class MarkerClass {
    /* Fields of GES-1.0.GES.MarkerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MarkerListClass {
    /* Fields of GES-1.0.GES.MarkerListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class MetaContainerInterface {
    /* Fields of GES-1.0.GES.MetaContainerInterface */
    parentIface: GObject.TypeInterface
    gesReserved: object[]
    static name: string
}
export abstract class MultiFileSourceClass {
    /* Fields of GES-1.0.GES.MultiFileSourceClass */
    parentClass: VideoSourceClass
    gesReserved: object[]
    static name: string
}
export class MultiFileSourcePrivate {
    static name: string
}
export abstract class OperationClass {
    static name: string
}
export abstract class OperationClipClass {
    static name: string
}
export class OperationClipPrivate {
    static name: string
}
export class OperationPrivate {
    static name: string
}
export abstract class OverlayClipClass {
    /* Fields of GES-1.0.GES.OverlayClipClass */
    parentClass: OperationClipClass
    static name: string
}
export class OverlayClipPrivate {
    static name: string
}
export abstract class PipelineClass {
    static name: string
}
export class PipelinePrivate {
    static name: string
}
export abstract class PitiviFormatterClass {
    static name: string
}
export class PitiviFormatterPrivate {
    static name: string
}
export abstract class ProjectClass {
    /* Fields of GES-1.0.GES.ProjectClass */
    parentClass: AssetClass
    assetAdded: (self: Project, asset: Asset) => void
    assetLoading: (self: Project, asset: Asset) => void
    assetRemoved: (self: Project, asset: Asset) => void
    missingUri: (self: Project, error: GLib.Error, wrongAsset: Asset) => string
    loadingError: (self: Project, error: GLib.Error, id: string, extractableType: GObject.Type) => boolean
    loaded: (self: Project, timeline: Timeline) => boolean
    loading: (self: Project, timeline: Timeline) => void
    gesReserved: object[]
    static name: string
}
export class ProjectPrivate {
    static name: string
}
export abstract class SourceClass {
    /* Fields of GES-1.0.GES.SourceClass */
    selectPad: (source: Source, pad: Gst.Pad) => boolean
    static name: string
}
export abstract class SourceClipAssetClass {
    /* Fields of GES-1.0.GES.SourceClipAssetClass */
    parentClass: ClipAssetClass
    static name: string
}
export abstract class SourceClipClass {
    static name: string
}
export class SourceClipPrivate {
    static name: string
}
export class SourcePrivate {
    static name: string
}
export abstract class TestClipClass {
    static name: string
}
export class TestClipPrivate {
    static name: string
}
export abstract class TextOverlayClass {
    /* Fields of GES-1.0.GES.TextOverlayClass */
    parentClass: OperationClass
    static name: string
}
export abstract class TextOverlayClipClass {
    static name: string
}
export class TextOverlayClipPrivate {
    static name: string
}
export class TextOverlayPrivate {
    static name: string
}
export abstract class TimelineClass {
    /* Fields of GES-1.0.GES.TimelineClass */
    parentClass: Gst.BinClass
    trackAdded: (timeline: Timeline, track: Track) => void
    trackRemoved: (timeline: Timeline, track: Track) => void
    layerAdded: (timeline: Timeline, layer: Layer) => void
    layerRemoved: (timeline: Timeline, layer: Layer) => void
    groupAdded: (timeline: Timeline, group: Group) => void
    static name: string
}
export abstract class TimelineElementClass {
    /* Fields of GES-1.0.GES.TimelineElementClass */
    parentClass: GObject.InitiallyUnownedClass
    setParent: (self: TimelineElement, parent: TimelineElement) => boolean
    setStart: (self: TimelineElement, start: Gst.ClockTime) => boolean
    setInpoint: (self: TimelineElement, inpoint: Gst.ClockTime) => boolean
    setDuration: (self: TimelineElement, duration: Gst.ClockTime) => boolean
    setMaxDuration: (self: TimelineElement, maxduration: Gst.ClockTime) => boolean
    setPriority: (self: TimelineElement, priority: number) => boolean
    ripple: (self: TimelineElement, start: number) => boolean
    rippleEnd: (self: TimelineElement, end: number) => boolean
    rollStart: (self: TimelineElement, start: number) => boolean
    rollEnd: (self: TimelineElement, end: number) => boolean
    trim: (self: TimelineElement, start: number) => boolean
    deepCopy: (self: TimelineElement, copy: TimelineElement) => void
    lookupChild: (self: TimelineElement, propName: string) => { returnType: boolean, child: GObject.Object | null, pspec: GObject.ParamSpec | null }
    getTrackTypes: (self: TimelineElement) => TrackType
    setChildProperty: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => void
    getLayerPriority: (self: TimelineElement) => number
    getNaturalFramerate: (self: TimelineElement) => { returnType: boolean, framerateN: number, framerateD: number }
    setChildPropertyFull: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => boolean
    gesReserved: object[]
    static name: string
}
export class TimelineElementPrivate {
    static name: string
}
export class TimelinePrivate {
    static name: string
}
export abstract class TitleClipClass {
    static name: string
}
export class TitleClipPrivate {
    static name: string
}
export abstract class TitleSourceClass {
    /* Fields of GES-1.0.GES.TitleSourceClass */
    parentClass: VideoSourceClass
    static name: string
}
export class TitleSourcePrivate {
    static name: string
}
export abstract class TrackClass {
    static name: string
}
export abstract class TrackElementAssetClass {
    /* Fields of GES-1.0.GES.TrackElementAssetClass */
    parentClass: AssetClass
    getNaturalFramerate: (self: TrackElementAsset, framerateN: number, framerateD: number) => boolean
    gesReserved: object[]
    static name: string
}
export class TrackElementAssetPrivate {
    static name: string
}
export abstract class TrackElementClass {
    /* Fields of GES-1.0.GES.TrackElementClass */
    nleobjectFactorytype: string
    activeChanged: (object: TrackElement, active: boolean) => void
    changed: (object: TrackElement) => void
    lookupChild: (object: TrackElement, propName: string) => { returnType: boolean, element: Gst.Element | null, pspec: GObject.ParamSpec | null }
    static name: string
}
export class TrackElementPrivate {
    static name: string
}
export class TrackPrivate {
    static name: string
}
export abstract class TransitionClass {
    static name: string
}
export abstract class TransitionClipClass {
    static name: string
}
export class TransitionClipPrivate {
    static name: string
}
export class TransitionPrivate {
    static name: string
}
export abstract class UriClipAssetClass {
    /* Fields of GES-1.0.GES.UriClipAssetClass */
    parentClass: SourceClipAssetClass
    discovered: (discoverer: GstPbutils.Discoverer, info: GstPbutils.DiscovererInfo, err: GLib.Error) => void
    /* Methods of GES-1.0.GES.UriClipAssetClass */
    setTimeout(klass: UriClipAsset | Function | GObject.Type, timeout: Gst.ClockTime): void
    static name: string
}
export class UriClipAssetPrivate {
    static name: string
}
export abstract class UriClipClass {
    static name: string
}
export class UriClipPrivate {
    static name: string
}
export class UriSource {
    static name: string
}
export abstract class UriSourceAssetClass {
    /* Fields of GES-1.0.GES.UriSourceAssetClass */
    parentClass: TrackElementAssetClass
    gesReserved: object[]
    static name: string
}
export class UriSourceAssetPrivate {
    static name: string
}
export abstract class VideoSourceClass {
    static name: string
}
export class VideoSourcePrivate {
    static name: string
}
export abstract class VideoTestSourceClass {
    /* Fields of GES-1.0.GES.VideoTestSourceClass */
    parentClass: VideoSourceClass
    gesReserved: object[]
    static name: string
}
export class VideoTestSourcePrivate {
    static name: string
}
export abstract class VideoTrackClass {
    /* Fields of GES-1.0.GES.VideoTrackClass */
    parentClass: TrackClass
    gesReserved: object[]
    static name: string
}
export class VideoTrackPrivate {
    static name: string
}
export abstract class VideoTransitionClass {
    /* Fields of GES-1.0.GES.VideoTransitionClass */
    parentClass: TransitionClass
    static name: string
}
export class VideoTransitionPrivate {
    static name: string
}
export abstract class VideoUriSourceClass {
    static name: string
}
export class VideoUriSourcePrivate {
    static name: string
}
export abstract class XmlFormatterClass {
    /* Fields of GES-1.0.GES.XmlFormatterClass */
    parent: BaseXmlFormatterClass
    gesReserved: object[]
    static name: string
}
export class XmlFormatterPrivate {
    static name: string
}
export type FrameNumber = number
}