/**
 * GES-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstVideo from './GstVideo-1.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GstPbutils from './GstPbutils-1.0';
import type * as GstAudio from './GstAudio-1.0';
import type * as Gio from './Gio-2.0';

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
export function add_missing_uri_relocation_uri(uri: string, recurse: boolean): boolean
export function deinit(): void
export function edge_name(edge: Edge): string
export function edit_mode_name(mode: EditMode): string
export function find_formatter_for_uri(uri: string): Asset
export function init(): boolean
export function init_check(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export function is_initialized(): boolean
export function list_assets(filter: GObject.Type): Asset[]
export function play_sink_convert_frame(playsink: Gst.Element, caps: Gst.Caps): Gst.Sample
export function pspec_equal(key_spec_1?: object | null, key_spec_2?: object | null): boolean
export function pspec_hash(key_spec?: object | null): number
export function track_type_name(type: TrackType): string
export function validate_register_action_types(): boolean
export function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
export interface BaseEffectTimeTranslationFunc {
    (effect: BaseEffect, time: Gst.ClockTime, time_property_values: GLib.HashTable): Gst.ClockTime
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
    (clip: Clip, track_element: TrackElement, nleobj: Gst.Element): boolean
}
export interface FormatterCanLoadURIMethod {
    (dummy_instance: Formatter, uri: string): boolean
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
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GES.Extractable */
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Extractable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Extractable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Extractable_ConstructProps)
    _init (config?: Extractable_ConstructProps): void
    static $gtype: GObject.Type
}
export class MetaContainer {
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: MetaContainer, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: MetaContainer, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    static name: string
}
export interface Asset_ConstructProps extends GObject.Object_ConstructProps {
    extractable_type?: GObject.Type
    id?: string
    proxy?: Asset
}
export class Asset {
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.Asset */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Asset, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Asset, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::proxy", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: Asset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Asset_ConstructProps)
    _init (config?: Asset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static needs_reload(extractable_type: GObject.Type, id?: string | null): boolean
    static request(extractable_type: GObject.Type, id?: string | null): Asset | null
    static request_async(extractable_type: GObject.Type, id?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static request_finish(res: Gio.AsyncResult): Asset
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface AudioSource_ConstructProps extends Source_ConstructProps {
}
export class AudioSource {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: AudioSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: AudioSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: AudioSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: AudioSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: AudioSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioSource_ConstructProps)
    _init (config?: AudioSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioTestSource_ConstructProps extends AudioSource_ConstructProps {
}
export class AudioTestSource {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.AudioTestSource */
    get_freq(): number
    get_volume(): number
    set_freq(freq: number): void
    set_volume(volume: number): void
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioTestSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: AudioTestSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioTestSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: AudioTestSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: AudioTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: AudioTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioTestSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: AudioTestSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioTestSource_ConstructProps)
    _init (config?: AudioTestSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioTrack_ConstructProps extends Track_ConstructProps {
}
export class AudioTrack {
    /* Properties of GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restriction_caps: Gst.Caps
    /* Properties of Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES.AudioTrack */
    parent_instance: Track
    /* Fields of GES.Track */
    type: TrackType
    /* Fields of Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Track */
    add_element(object: TrackElement): boolean
    add_element_full(object: TrackElement): boolean
    commit(): boolean
    get_caps(): Gst.Caps
    get_elements(): TrackElement[]
    get_mixing(): boolean
    get_restriction_caps(): Gst.Caps
    get_timeline(): Timeline | null
    remove_element(object: TrackElement): boolean
    remove_element_full(object: TrackElement): boolean
    set_mixing(mixing: boolean): void
    set_restriction_caps(caps: Gst.Caps): void
    set_timeline(timeline: Timeline): void
    update_restriction_caps(caps: Gst.Caps): void
    /* Methods of Gst.Bin */
    add(element: Gst.Element): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad | null
    get_by_interface(iface: GObject.Type): Gst.Element | null
    get_by_name(name: string): Gst.Element | null
    get_by_name_recurse_up(name: string): Gst.Element | null
    get_suppressed_flags(): Gst.ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Gst.Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator | null
    iterate_elements(): Gst.Iterator | null
    iterate_recurse(): Gst.Iterator | null
    iterate_sinks(): Gst.Iterator | null
    iterate_sorted(): Gst.Iterator | null
    iterate_sources(): Gst.Iterator | null
    recalculate_latency(): boolean
    remove(element: Gst.Element): boolean
    set_suppressed_flags(flags: Gst.ElementFlags): void
    sync_children_states(): boolean
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gst.ChildProxy */
    child_added(child: GObject.Object, name: string): void
    child_removed(child: GObject.Object, name: string): void
    get_child_by_index(index: number): GObject.Object | null
    get_child_by_name(name: string): GObject.Object | null
    get_children_count(): number
    get_property(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    set_property(name: string, value: any): void
    /* Virtual methods of GES.Track */
    vfunc_child_added(child: GObject.Object, name: string): void
    vfunc_child_removed(child: GObject.Object, name: string): void
    vfunc_get_child_by_index(index: number): GObject.Object | null
    vfunc_get_child_by_name(name: string): GObject.Object | null
    vfunc_get_children_count(): number
    /* Virtual methods of Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_deep_element_added(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_deep_element_removed(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Gst.Element): void
    vfunc_element_removed(child: Gst.Element): void
    vfunc_handle_message(message: Gst.Message): void
    vfunc_remove_element(element: Gst.Element): boolean
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Track */
    connect(sigName: "commited", callback: (($obj: AudioTrack) => void)): number
    connect_after(sigName: "commited", callback: (($obj: AudioTrack) => void)): number
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: (($obj: AudioTrack, effect: TrackElement) => void)): number
    connect_after(sigName: "track-element-added", callback: (($obj: AudioTrack, effect: TrackElement) => void)): number
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: (($obj: AudioTrack, effect: TrackElement) => void)): number
    connect_after(sigName: "track-element-removed", callback: (($obj: AudioTrack, effect: TrackElement) => void)): number
    emit(sigName: "track-element-removed", effect: TrackElement): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: AudioTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: AudioTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: AudioTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: AudioTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: AudioTrack) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: AudioTrack) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: AudioTrack, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: AudioTrack, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: AudioTrack, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: AudioTrack, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioTrack) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioTrack) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioTrack, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioTrack, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioTrack, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioTrack, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioTrack, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioTrack, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioTrack, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: AudioTrack, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: AudioTrack, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: AudioTrack, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: AudioTrack, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: AudioTrack, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::duration", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mixing", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction-caps", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioTransition, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: AudioTransition, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioTransition, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: AudioTransition, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: AudioTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: AudioTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioTransition, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: AudioTransition, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: AudioUriSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: AudioUriSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: AudioUriSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: AudioUriSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: AudioUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: AudioUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: AudioUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: AudioUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: AudioUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: AudioUriSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: AudioUriSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: AudioUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioUriSource_ConstructProps)
    _init (config?: AudioUriSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseEffect_ConstructProps extends Operation_ConstructProps {
}
export class BaseEffect {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.BaseEffect */
    is_time_effect(): boolean
    register_time_property(child_property_name: string): boolean
    set_time_translation_funcs(source_to_sink_func?: BaseEffectTimeTranslationFunc | null, sink_to_source_func?: BaseEffectTimeTranslationFunc | null): boolean
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: BaseEffect, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: BaseEffect, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: BaseEffect, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: BaseEffect, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: BaseEffect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: BaseEffect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: BaseEffect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: BaseEffect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: BaseEffect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseEffect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: BaseEffect, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: BaseEffect, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: BaseEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseEffect_ConstructProps)
    _init (config?: BaseEffect_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseEffectClip_ConstructProps extends OperationClip_ConstructProps {
}
export class BaseEffectClip {
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: BaseEffectClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: BaseEffectClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: BaseEffectClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: BaseEffectClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: BaseEffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: BaseEffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: BaseEffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: BaseEffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: BaseEffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseEffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: BaseEffectClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: BaseEffectClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: BaseEffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseEffectClip_ConstructProps)
    _init (config?: BaseEffectClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseTransitionClip_ConstructProps extends OperationClip_ConstructProps {
}
export class BaseTransitionClip {
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: BaseTransitionClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: BaseTransitionClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: BaseTransitionClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: BaseTransitionClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: BaseTransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: BaseTransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: BaseTransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: BaseTransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: BaseTransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseTransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: BaseTransitionClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: BaseTransitionClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: BaseTransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseTransitionClip_ConstructProps)
    _init (config?: BaseTransitionClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseXmlFormatter_ConstructProps extends Formatter_ConstructProps {
}
export class BaseXmlFormatter {
    /* Fields of GES.BaseXmlFormatter */
    parent: Formatter
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Formatter */
    load_from_uri(timeline: Timeline, uri: string): boolean
    save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Virtual methods of GES.Formatter */
    vfunc_can_load_uri(uri: string): boolean
    vfunc_load_from_uri(timeline: Timeline, uri: string): boolean
    vfunc_save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseXmlFormatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseXmlFormatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseXmlFormatter_ConstructProps)
    _init (config?: BaseXmlFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Clip_ConstructProps extends Container_ConstructProps {
    supported_formats?: TrackType
}
export class Clip {
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: Clip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Clip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: Clip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Clip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Clip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: Clip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Clip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: Clip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Clip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Clip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Clip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Clip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Clip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Clip_ConstructProps)
    _init (config?: Clip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClipAsset_ConstructProps extends Asset_ConstructProps {
    supported_formats?: TrackType
}
export class ClipAsset {
    /* Properties of GES.ClipAsset */
    supported_formats: TrackType
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.ClipAsset */
    parent: Asset
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.ClipAsset */
    get_frame_time(frame_number: FrameNumber): Gst.ClockTime
    get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    get_supported_formats(): TrackType
    set_supported_formats(supportedformats: TrackType): void
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.ClipAsset */
    vfunc_get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: ClipAsset, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: ClipAsset, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::supported-formats", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: ClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClipAsset_ConstructProps)
    _init (config?: ClipAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommandLineFormatter_ConstructProps extends Formatter_ConstructProps {
}
export class CommandLineFormatter {
    /* Fields of GES.CommandLineFormatter */
    parent_instance: Formatter
    priv: CommandLineFormatterPrivate
    /* Fields of GES.Formatter */
    parent: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Formatter */
    load_from_uri(timeline: Timeline, uri: string): boolean
    save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Virtual methods of GES.Formatter */
    vfunc_can_load_uri(uri: string): boolean
    vfunc_load_from_uri(timeline: Timeline, uri: string): boolean
    vfunc_save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommandLineFormatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommandLineFormatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CommandLineFormatter_ConstructProps)
    _init (config?: CommandLineFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_help(nargs: number, commands: string): string
    static get_timeline_uri(timeline: Timeline): string
    static $gtype: GObject.Type
}
export interface Container_ConstructProps extends TimelineElement_ConstructProps {
}
export class Container {
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: Container, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Container, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: Container, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Container, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Container, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: Container, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Container, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: Container, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Container, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Container, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Container, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Container, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::height", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Container, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Container_ConstructProps)
    _init (config?: Container_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static group(containers?: Container[] | null): Container
    static $gtype: GObject.Type
}
export interface Effect_ConstructProps extends BaseEffect_ConstructProps {
    bin_description?: string
}
export class Effect {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.BaseEffect */
    is_time_effect(): boolean
    register_time_property(child_property_name: string): boolean
    set_time_translation_funcs(source_to_sink_func?: BaseEffectTimeTranslationFunc | null, sink_to_source_func?: BaseEffectTimeTranslationFunc | null): boolean
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Effect, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: Effect, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Effect, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: Effect, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Effect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: Effect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Effect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: Effect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Effect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Effect, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Effect, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Effect, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Effect_ConstructProps)
    _init (config?: Effect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bin_description: string): Effect
    static register_rate_property(klass: Effect | Function | GObject.Type, element_name: string, property_name: string): boolean
    static $gtype: GObject.Type
}
export interface EffectAsset_ConstructProps extends TrackElementAsset_ConstructProps {
}
export class EffectAsset {
    /* Properties of GES.TrackElementAsset */
    track_type: TrackType
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.EffectAsset */
    parent_instance: TrackElementAsset
    priv: EffectAssetPrivate
    _ges_reserved: object[]
    /* Fields of GES.TrackElementAsset */
    parent: Asset
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElementAsset */
    get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    get_track_type(): TrackType
    set_track_type(type: TrackType): void
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.TrackElementAsset */
    vfunc_get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: EffectAsset, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: EffectAsset, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: EffectAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EffectAsset_ConstructProps)
    _init (config?: EffectAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EffectClip_ConstructProps extends BaseEffectClip_ConstructProps {
    audio_bin_description?: string
    video_bin_description?: string
}
export class EffectClip {
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: EffectClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: EffectClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: EffectClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: EffectClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: EffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: EffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: EffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: EffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: EffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: EffectClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: EffectClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: EffectClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: EffectClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EffectClip_ConstructProps)
    _init (config?: EffectClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(video_bin_description: string, audio_bin_description: string): EffectClip
    static $gtype: GObject.Type
}
export interface Formatter_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class Formatter {
    /* Fields of GES.Formatter */
    parent: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Formatter */
    load_from_uri(timeline: Timeline, uri: string): boolean
    save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Virtual methods of GES.Formatter */
    vfunc_can_load_uri(uri: string): boolean
    vfunc_load_from_uri(timeline: Timeline, uri: string): boolean
    vfunc_save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Formatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Formatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Formatter_ConstructProps)
    _init (config?: Formatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static can_load_uri(uri: string): boolean
    static can_save_uri(uri: string): boolean
    static get_default(): Asset
    static register_metas(klass: Formatter | Function | GObject.Type, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
    static $gtype: GObject.Type
}
export interface Group_ConstructProps extends Container_ConstructProps {
    duration?: number
    in_point?: number
    max_duration?: number
    priority?: number
    start?: number
}
export class Group {
    /* Properties of GES.Group */
    duration: number
    in_point: number
    max_duration: number
    priority: number
    start: number
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    name: string
    parent: TimelineElement
    serialize: boolean
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: Group, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Group, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: Group, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Group, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Group, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: Group, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Group, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: Group, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Group, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Group, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Group, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Group, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.VideoSource */
    get_natural_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: ImageSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: ImageSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: ImageSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: ImageSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: ImageSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: ImageSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: ImageSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: ImageSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: ImageSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ImageSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: ImageSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: ImageSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: ImageSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImageSource_ConstructProps)
    _init (config?: ImageSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Layer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    auto_transition?: boolean
    priority?: number
}
export class Layer {
    /* Properties of GES.Layer */
    auto_transition: boolean
    priority: number
    /* Fields of GES.Layer */
    parent: GObject.InitiallyUnowned
    timeline: Timeline
    min_nle_priority: number
    max_nle_priority: number
    priv: LayerPrivate
    _ges_reserved: object[]
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Layer */
    add_asset(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, track_types: TrackType): Clip
    add_asset_full(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, track_types: TrackType): Clip
    add_clip(clip: Clip): boolean
    add_clip_full(clip: Clip): boolean
    get_active_for_track(track: Track): boolean
    get_auto_transition(): boolean
    get_clips(): Clip[]
    get_clips_in_interval(start: Gst.ClockTime, end: Gst.ClockTime): Clip[]
    get_duration(): Gst.ClockTime
    get_priority(): number
    get_timeline(): Timeline | null
    is_empty(): boolean
    remove_clip(clip: Clip): boolean
    set_active_for_tracks(active: boolean, tracks?: Track[] | null): boolean
    set_auto_transition(auto_transition: boolean): void
    set_priority(priority: number): void
    set_timeline(timeline: Timeline): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Layer */
    vfunc_object_added(object: Clip): void
    vfunc_object_removed(object: Clip): void
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Layer */
    connect(sigName: "active-changed", callback: (($obj: Layer, active: boolean, tracks: Track[]) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Layer, active: boolean, tracks: Track[]) => void)): number
    emit(sigName: "active-changed", active: boolean, tracks: Track[]): void
    connect(sigName: "clip-added", callback: (($obj: Layer, clip: Clip) => void)): number
    connect_after(sigName: "clip-added", callback: (($obj: Layer, clip: Clip) => void)): number
    emit(sigName: "clip-added", clip: Clip): void
    connect(sigName: "clip-removed", callback: (($obj: Layer, clip: Clip) => void)): number
    connect_after(sigName: "clip-removed", callback: (($obj: Layer, clip: Clip) => void)): number
    emit(sigName: "clip-removed", clip: Clip): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Layer, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Layer, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::auto-transition", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-transition", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.Marker */
    readonly position: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Marker, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Marker, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Marker_ConstructProps)
    _init (config?: Marker_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MarkerList_ConstructProps extends GObject.Object_ConstructProps {
}
export class MarkerList {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.MarkerList */
    add(position: Gst.ClockTime): Marker
    get_markers(): Marker[]
    move(marker: Marker, position: Gst.ClockTime): boolean
    remove(marker: Marker): boolean
    size(): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.MarkerList */
    connect(sigName: "marker-added", callback: (($obj: MarkerList, position: number, marker: Marker) => void)): number
    connect_after(sigName: "marker-added", callback: (($obj: MarkerList, position: number, marker: Marker) => void)): number
    emit(sigName: "marker-added", position: number, marker: Marker): void
    connect(sigName: "marker-moved", callback: (($obj: MarkerList, previous_position: number, new_position: number, marker: Marker) => void)): number
    connect_after(sigName: "marker-moved", callback: (($obj: MarkerList, previous_position: number, new_position: number, marker: Marker) => void)): number
    emit(sigName: "marker-moved", previous_position: number, new_position: number, marker: Marker): void
    connect(sigName: "marker-removed", callback: (($obj: MarkerList, marker: Marker) => void)): number
    connect_after(sigName: "marker-removed", callback: (($obj: MarkerList, marker: Marker) => void)): number
    emit(sigName: "marker-removed", marker: Marker): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MarkerList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MarkerList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.VideoSource */
    get_natural_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: MultiFileSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: MultiFileSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: MultiFileSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: MultiFileSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: MultiFileSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: MultiFileSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: MultiFileSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: MultiFileSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: MultiFileSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: MultiFileSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: MultiFileSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: MultiFileSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: MultiFileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Operation, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: Operation, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Operation, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: Operation, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Operation, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: Operation, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Operation, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: Operation, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Operation, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Operation, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Operation, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Operation, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OperationClip_ConstructProps extends Clip_ConstructProps {
}
export class OperationClip {
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: OperationClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: OperationClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: OperationClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: OperationClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: OperationClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: OperationClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: OperationClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: OperationClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: OperationClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: OperationClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: OperationClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: OperationClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: OperationClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OperationClip_ConstructProps)
    _init (config?: OperationClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OverlayClip_ConstructProps extends OperationClip_ConstructProps {
}
export class OverlayClip {
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: OverlayClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: OverlayClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: OverlayClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: OverlayClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: OverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: OverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: OverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: OverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: OverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: OverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: OverlayClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: OverlayClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: OverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OverlayClip_ConstructProps)
    _init (config?: OverlayClip_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Pipeline_ConstructProps extends Gst.Pipeline_ConstructProps {
    audio_filter?: Gst.Element
    audio_sink?: Gst.Element
    mode?: PipelineFlags
    timeline?: Timeline
    video_filter?: Gst.Element
    video_sink?: Gst.Element
}
export class Pipeline {
    /* Properties of GES.Pipeline */
    audio_filter: Gst.Element
    audio_sink: Gst.Element
    mode: PipelineFlags
    timeline: Timeline
    video_filter: Gst.Element
    video_sink: Gst.Element
    /* Properties of Gst.Pipeline */
    auto_flush_bus: boolean
    delay: number
    latency: number
    /* Properties of Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Pipeline */
    bin: Gst.Bin
    fixed_clock: Gst.Clock
    stream_time: Gst.ClockTime
    /* Fields of Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Pipeline */
    get_mode(): PipelineFlags
    get_thumbnail(caps: Gst.Caps): Gst.Sample
    get_thumbnail_rgb24(width: number, height: number): Gst.Sample
    preview_get_audio_sink(): Gst.Element
    preview_get_video_sink(): Gst.Element
    preview_set_audio_sink(sink: Gst.Element): void
    preview_set_video_sink(sink: Gst.Element): void
    save_thumbnail(width: number, height: number, format: string, location: string): boolean
    set_mode(mode: PipelineFlags): boolean
    set_render_settings(output_uri: string, profile: GstPbutils.EncodingProfile): boolean
    set_timeline(timeline: Timeline): boolean
    /* Methods of Gst.Pipeline */
    auto_clock(): void
    get_auto_flush_bus(): boolean
    get_bus(): Gst.Bus
    get_delay(): Gst.ClockTime
    get_latency(): Gst.ClockTime
    get_pipeline_clock(): Gst.Clock
    set_auto_flush_bus(auto_flush: boolean): void
    set_delay(delay: Gst.ClockTime): void
    set_latency(latency: Gst.ClockTime): void
    use_clock(clock?: Gst.Clock | null): void
    /* Methods of Gst.Bin */
    add(element: Gst.Element): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad | null
    get_by_interface(iface: GObject.Type): Gst.Element | null
    get_by_name(name: string): Gst.Element | null
    get_by_name_recurse_up(name: string): Gst.Element | null
    get_suppressed_flags(): Gst.ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Gst.Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator | null
    iterate_elements(): Gst.Iterator | null
    iterate_recurse(): Gst.Iterator | null
    iterate_sinks(): Gst.Iterator | null
    iterate_sorted(): Gst.Iterator | null
    iterate_sources(): Gst.Iterator | null
    recalculate_latency(): boolean
    remove(element: Gst.Element): boolean
    set_suppressed_flags(flags: Gst.ElementFlags): void
    sync_children_states(): boolean
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gst.ChildProxy */
    child_added(child: GObject.Object, name: string): void
    child_removed(child: GObject.Object, name: string): void
    get_child_by_index(index: number): GObject.Object | null
    get_child_by_name(name: string): GObject.Object | null
    get_children_count(): number
    get_property(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    set_property(name: string, value: any): void
    /* Methods of GstVideo.VideoOverlay */
    expose(): void
    got_window_handle(handle: any): void
    handle_events(handle_events: boolean): void
    prepare_window_handle(): void
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    set_window_handle(handle: any): void
    /* Virtual methods of GES.Pipeline */
    vfunc_child_added(child: GObject.Object, name: string): void
    vfunc_child_removed(child: GObject.Object, name: string): void
    vfunc_get_child_by_index(index: number): GObject.Object | null
    vfunc_get_child_by_name(name: string): GObject.Object | null
    vfunc_get_children_count(): number
    vfunc_expose(): void
    vfunc_handle_events(handle_events: boolean): void
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): void
    vfunc_set_window_handle(handle: any): void
    /* Virtual methods of Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_deep_element_added(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_deep_element_removed(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Gst.Element): void
    vfunc_element_removed(child: Gst.Element): void
    vfunc_handle_message(message: Gst.Message): void
    vfunc_remove_element(element: Gst.Element): boolean
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Pipeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Pipeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Pipeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Pipeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Pipeline, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Pipeline, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Pipeline, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Pipeline, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Pipeline, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Pipeline, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Pipeline, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Pipeline, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pipeline, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pipeline, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::audio-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-filter", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pipeline_ConstructProps)
    _init (config?: Pipeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pipeline
    static new(name?: string | null): Pipeline
    static install_properties(oclass: GObject.ObjectClass, last_prop_id: number): void
    static set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: any): boolean
    static $gtype: GObject.Type
}
export interface PitiviFormatter_ConstructProps extends Formatter_ConstructProps {
}
export class PitiviFormatter {
    /* Fields of GES.PitiviFormatter */
    parent: Formatter
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Formatter */
    load_from_uri(timeline: Timeline, uri: string): boolean
    save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Virtual methods of GES.Formatter */
    vfunc_can_load_uri(uri: string): boolean
    vfunc_load_from_uri(timeline: Timeline, uri: string): boolean
    vfunc_save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PitiviFormatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PitiviFormatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.Project */
    parent: Asset
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Project */
    add_asset(asset: Asset): boolean
    add_encoding_profile(profile: GstPbutils.EncodingProfile): boolean
    add_formatter(formatter: Formatter): void
    create_asset(id: string | null, extractable_type: GObject.Type): boolean
    create_asset_sync(id: string | null, extractable_type: GObject.Type): Asset | null
    get_asset(id: string, extractable_type: GObject.Type): Asset | null
    get_loading_assets(): Asset[]
    get_uri(): string | null
    list_assets(filter: GObject.Type): Asset[]
    list_encoding_profiles(): GstPbutils.EncodingProfile[] | null
    load(timeline: Timeline): boolean
    remove_asset(asset: Asset): boolean
    save(timeline: Timeline, uri: string, formatter_asset: Asset | null, overwrite: boolean): boolean
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.Project */
    vfunc_asset_added(asset: Asset): void
    vfunc_asset_loading(asset: Asset): void
    vfunc_asset_removed(asset: Asset): void
    vfunc_loaded(timeline: Timeline): boolean
    vfunc_loading(timeline: Timeline): void
    vfunc_loading_error(error: GLib.Error, id: string, extractable_type: GObject.Type): boolean
    vfunc_missing_uri(error: GLib.Error, wrong_asset: Asset): string
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Project */
    connect(sigName: "asset-added", callback: (($obj: Project, asset: Asset) => void)): number
    connect_after(sigName: "asset-added", callback: (($obj: Project, asset: Asset) => void)): number
    emit(sigName: "asset-added", asset: Asset): void
    connect(sigName: "asset-loading", callback: (($obj: Project, asset: Asset) => void)): number
    connect_after(sigName: "asset-loading", callback: (($obj: Project, asset: Asset) => void)): number
    emit(sigName: "asset-loading", asset: Asset): void
    connect(sigName: "asset-removed", callback: (($obj: Project, asset: Asset) => void)): number
    connect_after(sigName: "asset-removed", callback: (($obj: Project, asset: Asset) => void)): number
    emit(sigName: "asset-removed", asset: Asset): void
    connect(sigName: "error-loading", callback: (($obj: Project, timeline: Timeline, error: GLib.Error) => void)): number
    connect_after(sigName: "error-loading", callback: (($obj: Project, timeline: Timeline, error: GLib.Error) => void)): number
    emit(sigName: "error-loading", timeline: Timeline, error: GLib.Error): void
    connect(sigName: "error-loading-asset", callback: (($obj: Project, error: GLib.Error, id: string, extractable_type: GObject.Type) => void)): number
    connect_after(sigName: "error-loading-asset", callback: (($obj: Project, error: GLib.Error, id: string, extractable_type: GObject.Type) => void)): number
    emit(sigName: "error-loading-asset", error: GLib.Error, id: string, extractable_type: GObject.Type): void
    connect(sigName: "loaded", callback: (($obj: Project, timeline: Timeline) => void)): number
    connect_after(sigName: "loaded", callback: (($obj: Project, timeline: Timeline) => void)): number
    emit(sigName: "loaded", timeline: Timeline): void
    connect(sigName: "loading", callback: (($obj: Project, timeline: Timeline) => void)): number
    connect_after(sigName: "loading", callback: (($obj: Project, timeline: Timeline) => void)): number
    emit(sigName: "loading", timeline: Timeline): void
    connect(sigName: "missing-uri", callback: (($obj: Project, error: GLib.Error, wrong_asset: Asset) => string | null)): number
    connect_after(sigName: "missing-uri", callback: (($obj: Project, error: GLib.Error, wrong_asset: Asset) => string | null)): number
    emit(sigName: "missing-uri", error: GLib.Error, wrong_asset: Asset): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Project, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Project, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::proxy", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Source, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: Source, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Source, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: Source, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Source, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: Source, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Source, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: Source, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Source, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Source, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Source, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Source, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SourceClip_ConstructProps extends Clip_ConstructProps {
}
export class SourceClip {
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: SourceClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: SourceClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: SourceClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: SourceClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: SourceClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: SourceClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: SourceClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: SourceClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: SourceClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: SourceClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: SourceClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: SourceClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: SourceClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceClip_ConstructProps)
    _init (config?: SourceClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_time_overlay(): SourceClip
    static $gtype: GObject.Type
}
export interface SourceClipAsset_ConstructProps extends ClipAsset_ConstructProps {
}
export class SourceClipAsset {
    /* Properties of GES.ClipAsset */
    supported_formats: TrackType
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.SourceClipAsset */
    parent_instance: ClipAsset
    /* Fields of GES.ClipAsset */
    parent: Asset
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.ClipAsset */
    get_frame_time(frame_number: FrameNumber): Gst.ClockTime
    get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    get_supported_formats(): TrackType
    set_supported_formats(supportedformats: TrackType): void
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.ClipAsset */
    vfunc_get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: SourceClipAsset, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: SourceClipAsset, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::supported-formats", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: SourceClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TestClip */
    freq: number
    mute: boolean
    volume: number
    vpattern: VideoTestPattern
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TestClip */
    get_frequency(): number
    get_volume(): number
    get_vpattern(): VideoTestPattern
    is_muted(): boolean
    set_frequency(freq: number): void
    set_mute(mute: boolean): void
    set_volume(volume: number): void
    set_vpattern(vpattern: VideoTestPattern): void
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: TestClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: TestClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TestClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: TestClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TestClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TestClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TestClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TestClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TestClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TestClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TestClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TestClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::freq", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::freq", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mute", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vpattern", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpattern", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-limit", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TestClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TestClip_ConstructProps)
    _init (config?: TestClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TestClip
    static new_for_nick(nick: string): TestClip
    static $gtype: GObject.Type
}
export interface TextOverlay_ConstructProps extends Operation_ConstructProps {
}
export class TextOverlay {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TextOverlay */
    get_color(): number
    get_font_desc(): string
    get_halignment(): TextHAlign
    get_text(): string
    get_valignment(): TextVAlign
    get_xpos(): number
    get_ypos(): number
    set_color(color: number): void
    set_font_desc(font_desc: string): void
    set_halignment(halign: TextHAlign): void
    set_text(text: string): void
    set_valignment(valign: TextVAlign): void
    set_xpos(position: number): void
    set_ypos(position: number): void
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: TextOverlay, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: TextOverlay, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: TextOverlay, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: TextOverlay, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TextOverlay, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TextOverlay, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TextOverlay, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TextOverlay, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TextOverlay, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TextOverlay, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TextOverlay, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TextOverlay, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TextOverlay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextOverlay_ConstructProps)
    _init (config?: TextOverlay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextOverlay
    static $gtype: GObject.Type
}
export interface TextOverlayClip_ConstructProps extends OverlayClip_ConstructProps {
    color?: number
    font_desc?: string
    halignment?: TextHAlign
    text?: string
    valignment?: TextVAlign
    xpos?: number
    ypos?: number
}
export class TextOverlayClip {
    /* Properties of GES.TextOverlayClip */
    color: number
    font_desc: string
    halignment: TextHAlign
    text: string
    valignment: TextVAlign
    xpos: number
    ypos: number
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TextOverlayClip */
    get_color(): number
    get_font_desc(): string
    get_halignment(): TextHAlign
    get_text(): string
    get_valignment(): TextVAlign
    get_xpos(): number
    get_ypos(): number
    set_color(color: number): void
    set_font_desc(font_desc: string): void
    set_halign(halign: TextHAlign): void
    set_text(text: string): void
    set_valign(valign: TextVAlign): void
    set_xpos(position: number): void
    set_ypos(position: number): void
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: TextOverlayClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: TextOverlayClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TextOverlayClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: TextOverlayClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TextOverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TextOverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TextOverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TextOverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TextOverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TextOverlayClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TextOverlayClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TextOverlayClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::color", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valignment", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xpos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ypos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypos", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-limit", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TextOverlayClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextOverlayClip_ConstructProps)
    _init (config?: TextOverlayClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextOverlayClip
    static $gtype: GObject.Type
}
export interface Timeline_ConstructProps extends Gst.Bin_ConstructProps {
    auto_transition?: boolean
    snapping_distance?: number
}
export class Timeline {
    /* Properties of GES.Timeline */
    auto_transition: boolean
    readonly duration: number
    snapping_distance: number
    /* Properties of Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES.Timeline */
    layers: Layer[]
    tracks: object[]
    /* Fields of Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Timeline */
    add_layer(layer: Layer): boolean
    add_track(track: Track): boolean
    append_layer(): Layer
    commit(): boolean
    commit_sync(): boolean
    get_auto_transition(): boolean
    get_duration(): Gst.ClockTime
    get_element(name: string): TimelineElement | null
    get_frame_at(timestamp: Gst.ClockTime): FrameNumber
    get_frame_time(frame_number: FrameNumber): Gst.ClockTime
    get_groups(): Group[]
    get_layer(priority: number): Layer | null
    get_layers(): Layer[]
    get_pad_for_track(track: Track): Gst.Pad | null
    get_snapping_distance(): Gst.ClockTime
    get_track_for_pad(pad: Gst.Pad): Track | null
    get_tracks(): Track[]
    is_empty(): boolean
    load_from_uri(uri: string): boolean
    move_layer(layer: Layer, new_layer_priority: number): boolean
    paste_element(element: TimelineElement, position: Gst.ClockTime, layer_priority: number): TimelineElement | null
    remove_layer(layer: Layer): boolean
    remove_track(track: Track): boolean
    save_to_uri(uri: string, formatter_asset: Asset | null, overwrite: boolean): boolean
    set_auto_transition(auto_transition: boolean): void
    set_snapping_distance(snapping_distance: Gst.ClockTime): void
    /* Methods of Gst.Bin */
    add(element: Gst.Element): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad | null
    get_by_interface(iface: GObject.Type): Gst.Element | null
    get_by_name(name: string): Gst.Element | null
    get_by_name_recurse_up(name: string): Gst.Element | null
    get_suppressed_flags(): Gst.ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Gst.Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator | null
    iterate_elements(): Gst.Iterator | null
    iterate_recurse(): Gst.Iterator | null
    iterate_sinks(): Gst.Iterator | null
    iterate_sorted(): Gst.Iterator | null
    iterate_sources(): Gst.Iterator | null
    recalculate_latency(): boolean
    remove(element: Gst.Element): boolean
    set_suppressed_flags(flags: Gst.ElementFlags): void
    sync_children_states(): boolean
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gst.ChildProxy */
    child_added(child: GObject.Object, name: string): void
    child_removed(child: GObject.Object, name: string): void
    get_child_by_index(index: number): GObject.Object | null
    get_child_by_name(name: string): GObject.Object | null
    get_children_count(): number
    get_property(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    set_property(name: string, value: any): void
    /* Virtual methods of GES.Timeline */
    vfunc_group_added(group: Group): void
    vfunc_layer_added(layer: Layer): void
    vfunc_layer_removed(layer: Layer): void
    vfunc_track_added(track: Track): void
    vfunc_track_removed(track: Track): void
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    vfunc_child_added(child: GObject.Object, name: string): void
    vfunc_child_removed(child: GObject.Object, name: string): void
    vfunc_get_child_by_index(index: number): GObject.Object | null
    vfunc_get_child_by_name(name: string): GObject.Object | null
    vfunc_get_children_count(): number
    /* Virtual methods of Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_deep_element_added(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_deep_element_removed(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Gst.Element): void
    vfunc_element_removed(child: Gst.Element): void
    vfunc_handle_message(message: Gst.Message): void
    vfunc_remove_element(element: Gst.Element): boolean
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Timeline */
    connect(sigName: "commited", callback: (($obj: Timeline) => void)): number
    connect_after(sigName: "commited", callback: (($obj: Timeline) => void)): number
    emit(sigName: "commited"): void
    connect(sigName: "group-added", callback: (($obj: Timeline, group: Group) => void)): number
    connect_after(sigName: "group-added", callback: (($obj: Timeline, group: Group) => void)): number
    emit(sigName: "group-added", group: Group): void
    connect(sigName: "group-removed", callback: (($obj: Timeline, group: Group, children: Container[]) => void)): number
    connect_after(sigName: "group-removed", callback: (($obj: Timeline, group: Group, children: Container[]) => void)): number
    emit(sigName: "group-removed", group: Group, children: Container[]): void
    connect(sigName: "layer-added", callback: (($obj: Timeline, layer: Layer) => void)): number
    connect_after(sigName: "layer-added", callback: (($obj: Timeline, layer: Layer) => void)): number
    emit(sigName: "layer-added", layer: Layer): void
    connect(sigName: "layer-removed", callback: (($obj: Timeline, layer: Layer) => void)): number
    connect_after(sigName: "layer-removed", callback: (($obj: Timeline, layer: Layer) => void)): number
    emit(sigName: "layer-removed", layer: Layer): void
    connect(sigName: "select-element-track", callback: (($obj: Timeline, clip: Clip, track_element: TrackElement) => Track)): number
    connect_after(sigName: "select-element-track", callback: (($obj: Timeline, clip: Clip, track_element: TrackElement) => Track)): number
    emit(sigName: "select-element-track", clip: Clip, track_element: TrackElement): void
    connect(sigName: "select-tracks-for-object", callback: (($obj: Timeline, clip: Clip, track_element: TrackElement) => Track[])): number
    connect_after(sigName: "select-tracks-for-object", callback: (($obj: Timeline, clip: Clip, track_element: TrackElement) => Track[])): number
    emit(sigName: "select-tracks-for-object", clip: Clip, track_element: TrackElement): void
    connect(sigName: "snapping-ended", callback: (($obj: Timeline, obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    connect_after(sigName: "snapping-ended", callback: (($obj: Timeline, obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    emit(sigName: "snapping-ended", obj1: TrackElement, obj2: TrackElement, position: number): void
    connect(sigName: "snapping-started", callback: (($obj: Timeline, obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    connect_after(sigName: "snapping-started", callback: (($obj: Timeline, obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    emit(sigName: "snapping-started", obj1: TrackElement, obj2: TrackElement, position: number): void
    connect(sigName: "track-added", callback: (($obj: Timeline, track: Track) => void)): number
    connect_after(sigName: "track-added", callback: (($obj: Timeline, track: Track) => void)): number
    emit(sigName: "track-added", track: Track): void
    connect(sigName: "track-removed", callback: (($obj: Timeline, track: Track) => void)): number
    connect_after(sigName: "track-removed", callback: (($obj: Timeline, track: Track) => void)): number
    emit(sigName: "track-removed", track: Track): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Timeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Timeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Timeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Timeline, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: Timeline) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Timeline) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Timeline, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Timeline, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Timeline, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Timeline, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Timeline) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Timeline) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Timeline, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Timeline, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Timeline, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Timeline, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Timeline, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Timeline, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Timeline, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Timeline, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Timeline, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Timeline, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: Timeline, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Timeline, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::auto-transition", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-transition", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::snapping-distance", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snapping-distance", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Timeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Timeline_ConstructProps)
    _init (config?: Timeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Timeline
    static new(name?: string | null): Timeline
    static new_audio_video(): Timeline
    static new_from_uri(uri: string): Timeline
    static $gtype: GObject.Type
}
export interface TimelineElement_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    duration?: number
    in_point?: number
    max_duration?: number
    name?: string
    parent?: TimelineElement
    priority?: number
    serialize?: boolean
    start?: number
    timeline?: Timeline
}
export class TimelineElement {
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TimelineElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TimelineElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TimelineElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TimelineElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TimelineElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TimelineElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TimelineElement, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TimelineElement, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TimelineElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimelineElement_ConstructProps)
    _init (config?: TimelineElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TitleClip_ConstructProps extends SourceClip_ConstructProps {
    background?: number
    color?: number
    font_desc?: string
    halignment?: TextHAlign
    text?: string
    valignment?: TextVAlign
    xpos?: number
    ypos?: number
}
export class TitleClip {
    /* Properties of GES.TitleClip */
    background: number
    color: number
    font_desc: string
    halignment: TextHAlign
    text: string
    valignment: TextVAlign
    xpos: number
    ypos: number
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TitleClip */
    get_background_color(): number
    get_font_desc(): string
    get_halignment(): TextHAlign
    get_text(): string
    get_text_color(): number
    get_valignment(): TextVAlign
    get_xpos(): number
    get_ypos(): number
    set_background(background: number): void
    set_color(color: number): void
    set_font_desc(font_desc: string): void
    set_halignment(halign: TextHAlign): void
    set_text(text: string): void
    set_valignment(valign: TextVAlign): void
    set_xpos(position: number): void
    set_ypos(position: number): void
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: TitleClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: TitleClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TitleClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: TitleClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TitleClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TitleClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TitleClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TitleClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TitleClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TitleClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TitleClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TitleClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::background", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valignment", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xpos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ypos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypos", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-limit", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TitleClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TitleSource */
    get_background_color(): number
    get_font_desc(): string
    get_halignment(): TextHAlign
    get_text(): string
    get_text_color(): number
    get_valignment(): TextVAlign
    get_xpos(): number
    get_ypos(): number
    set_background_color(color: number): void
    set_font_desc(font_desc: string): void
    set_halignment(halign: TextHAlign): void
    set_text(text: string): void
    set_text_color(color: number): void
    set_valignment(valign: TextVAlign): void
    set_xpos(position: number): void
    set_ypos(position: number): void
    /* Methods of GES.VideoSource */
    get_natural_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: TitleSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: TitleSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: TitleSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: TitleSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TitleSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TitleSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TitleSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TitleSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TitleSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TitleSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TitleSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TitleSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TitleSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TitleSource_ConstructProps)
    _init (config?: TitleSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Track_ConstructProps extends Gst.Bin_ConstructProps {
    caps?: Gst.Caps
    id?: string
    mixing?: boolean
    restriction_caps?: Gst.Caps
    track_type?: TrackType
}
export class Track {
    /* Properties of GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restriction_caps: Gst.Caps
    /* Properties of Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES.Track */
    type: TrackType
    /* Fields of Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Track */
    add_element(object: TrackElement): boolean
    add_element_full(object: TrackElement): boolean
    commit(): boolean
    get_caps(): Gst.Caps
    get_elements(): TrackElement[]
    get_mixing(): boolean
    get_restriction_caps(): Gst.Caps
    get_timeline(): Timeline | null
    remove_element(object: TrackElement): boolean
    remove_element_full(object: TrackElement): boolean
    set_mixing(mixing: boolean): void
    set_restriction_caps(caps: Gst.Caps): void
    set_timeline(timeline: Timeline): void
    update_restriction_caps(caps: Gst.Caps): void
    /* Methods of Gst.Bin */
    add(element: Gst.Element): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad | null
    get_by_interface(iface: GObject.Type): Gst.Element | null
    get_by_name(name: string): Gst.Element | null
    get_by_name_recurse_up(name: string): Gst.Element | null
    get_suppressed_flags(): Gst.ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Gst.Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator | null
    iterate_elements(): Gst.Iterator | null
    iterate_recurse(): Gst.Iterator | null
    iterate_sinks(): Gst.Iterator | null
    iterate_sorted(): Gst.Iterator | null
    iterate_sources(): Gst.Iterator | null
    recalculate_latency(): boolean
    remove(element: Gst.Element): boolean
    set_suppressed_flags(flags: Gst.ElementFlags): void
    sync_children_states(): boolean
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gst.ChildProxy */
    child_added(child: GObject.Object, name: string): void
    child_removed(child: GObject.Object, name: string): void
    get_child_by_index(index: number): GObject.Object | null
    get_child_by_name(name: string): GObject.Object | null
    get_children_count(): number
    get_property(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    set_property(name: string, value: any): void
    /* Virtual methods of GES.Track */
    vfunc_child_added(child: GObject.Object, name: string): void
    vfunc_child_removed(child: GObject.Object, name: string): void
    vfunc_get_child_by_index(index: number): GObject.Object | null
    vfunc_get_child_by_name(name: string): GObject.Object | null
    vfunc_get_children_count(): number
    /* Virtual methods of Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_deep_element_added(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_deep_element_removed(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Gst.Element): void
    vfunc_element_removed(child: Gst.Element): void
    vfunc_handle_message(message: Gst.Message): void
    vfunc_remove_element(element: Gst.Element): boolean
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Track */
    connect(sigName: "commited", callback: (($obj: Track) => void)): number
    connect_after(sigName: "commited", callback: (($obj: Track) => void)): number
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: (($obj: Track, effect: TrackElement) => void)): number
    connect_after(sigName: "track-element-added", callback: (($obj: Track, effect: TrackElement) => void)): number
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: (($obj: Track, effect: TrackElement) => void)): number
    connect_after(sigName: "track-element-removed", callback: (($obj: Track, effect: TrackElement) => void)): number
    emit(sigName: "track-element-removed", effect: TrackElement): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Track, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Track, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Track, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Track, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: Track) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Track) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Track, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Track, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Track, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Track, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Track) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Track) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Track, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Track, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Track, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Track, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Track, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Track, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Track, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Track, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Track, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Track, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: Track, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Track, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::duration", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mixing", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction-caps", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Track, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    auto_clamp_control_sources?: boolean
    has_internal_source?: boolean
    track_type?: TrackType
}
export class TrackElement {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: TrackElement, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: TrackElement, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: TrackElement, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: TrackElement, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TrackElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TrackElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TrackElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TrackElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TrackElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TrackElement, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TrackElement, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TrackElement, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TrackElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TrackElement_ConstructProps)
    _init (config?: TrackElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TrackElementAsset_ConstructProps extends Asset_ConstructProps {
    track_type?: TrackType
}
export class TrackElementAsset {
    /* Properties of GES.TrackElementAsset */
    track_type: TrackType
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.TrackElementAsset */
    parent: Asset
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElementAsset */
    get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    get_track_type(): TrackType
    set_track_type(type: TrackType): void
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.TrackElementAsset */
    vfunc_get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TrackElementAsset, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TrackElementAsset, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: TrackElementAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TrackElementAsset_ConstructProps)
    _init (config?: TrackElementAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transition_ConstructProps extends Operation_ConstructProps {
}
export class Transition {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: Transition, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: Transition, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: Transition, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: Transition, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: Transition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: Transition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: Transition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: Transition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: Transition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Transition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: Transition, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: Transition, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: Transition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transition_ConstructProps)
    _init (config?: Transition_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TransitionClip_ConstructProps extends BaseTransitionClip_ConstructProps {
    vtype?: VideoStandardTransitionType
}
export class TransitionClip {
    /* Properties of GES.TransitionClip */
    vtype: VideoStandardTransitionType
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    supported_formats: TrackType
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: TransitionClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: TransitionClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: TransitionClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: TransitionClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: TransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: TransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: TransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: TransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: TransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TransitionClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: TransitionClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: TransitionClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::vtype", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vtype", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-limit", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: TransitionClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransitionClip_ConstructProps)
    _init (config?: TransitionClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(vtype: VideoStandardTransitionType): TransitionClip
    static new_for_nick(nick: string): TransitionClip
    static $gtype: GObject.Type
}
export interface UriClip_ConstructProps extends SourceClip_ConstructProps {
    is_image?: boolean
    mute?: boolean
    supported_formats?: TrackType
    uri?: string
}
export class UriClip {
    /* Properties of GES.UriClip */
    is_image: boolean
    mute: boolean
    supported_formats: TrackType
    /* Properties of GES.Clip */
    readonly duration_limit: number
    readonly layer: Layer
    /* Properties of GES.Container */
    readonly height: number
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.Container */
    children: TimelineElement[]
    children_control_mode: ChildrenControlMode
    initiated_move: TimelineElement
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.UriClip */
    get_uri(): string
    is_muted(): boolean
    set_is_image(is_image: boolean): void
    set_mute(mute: boolean): void
    /* Methods of GES.Clip */
    add_asset(asset: Asset): TrackElement | null
    add_child_to_track(child: TrackElement, track: Track): TrackElement
    add_top_effect(effect: BaseEffect, index: number): boolean
    find_track_element(track: Track | null, type: GObject.Type): TrackElement | null
    find_track_elements(track: Track | null, track_type: TrackType, type: GObject.Type): TrackElement[]
    get_duration_limit(): Gst.ClockTime
    get_internal_time_from_timeline_time(child: TrackElement, timeline_time: Gst.ClockTime): Gst.ClockTime
    get_layer(): Layer | null
    get_supported_formats(): TrackType
    get_timeline_time_from_internal_time(child: TrackElement, internal_time: Gst.ClockTime): Gst.ClockTime
    get_timeline_time_from_source_frame(frame_number: FrameNumber): Gst.ClockTime
    get_top_effect_index(effect: BaseEffect): number
    get_top_effect_position(effect: BaseEffect): number
    get_top_effects(): TrackElement[]
    move_to_layer(layer: Layer): boolean
    move_to_layer_full(layer: Layer): boolean
    remove_top_effect(effect: BaseEffect): boolean
    set_supported_formats(supportedformats: TrackType): void
    set_top_effect_index(effect: BaseEffect, newindex: number): boolean
    set_top_effect_index_full(effect: BaseEffect, newindex: number): boolean
    set_top_effect_priority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    split_full(position: number): Clip | null
    /* Methods of GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_children(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Clip */
    vfunc_create_track_element(type: TrackType): TrackElement | null
    vfunc_create_track_elements(type: TrackType): TrackElement[]
    /* Virtual methods of GES.Container */
    vfunc_add_child(element: TimelineElement): boolean
    vfunc_child_added(element: TimelineElement): void
    vfunc_child_removed(element: TimelineElement): void
    vfunc_edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    vfunc_remove_child(element: TimelineElement): boolean
    vfunc_ungroup(recursive: boolean): Container[]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Container */
    connect(sigName: "child-added", callback: (($obj: UriClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: UriClip, element: TimelineElement) => void)): number
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: (($obj: UriClip, element: TimelineElement) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: UriClip, element: TimelineElement) => void)): number
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: UriClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: UriClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: UriClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: UriClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: UriClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: UriClip, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: UriClip, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: UriClip, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::is-image", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-image", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mute", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration-limit", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layer", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: UriClip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.UriClipAsset */
    duration: number
    readonly is_nested_timeline: boolean
    /* Properties of GES.ClipAsset */
    supported_formats: TrackType
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.UriClipAsset */
    parent: SourceClipAsset
    /* Fields of GES.SourceClipAsset */
    parent_instance: ClipAsset
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.UriClipAsset */
    get_duration(): Gst.ClockTime
    get_info(): GstPbutils.DiscovererInfo
    get_max_duration(): Gst.ClockTime
    get_stream_assets(): UriSourceAsset[]
    is_image(): boolean
    /* Methods of GES.ClipAsset */
    get_frame_time(frame_number: FrameNumber): Gst.ClockTime
    get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    get_supported_formats(): TrackType
    set_supported_formats(supportedformats: TrackType): void
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.ClipAsset */
    vfunc_get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: UriClipAsset, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: UriClipAsset, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-nested-timeline", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-nested-timeline", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-formats", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: UriClipAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UriClipAsset_ConstructProps)
    _init (config?: UriClipAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static finish(res: Gio.AsyncResult): UriClipAsset
    static request_sync(uri: string): UriClipAsset
    static set_timeout(klass: UriClipAsset | Function | GObject.Type, timeout: Gst.ClockTime): void
    static $gtype: GObject.Type
}
export interface UriSourceAsset_ConstructProps extends TrackElementAsset_ConstructProps {
}
export class UriSourceAsset {
    /* Properties of GES.TrackElementAsset */
    track_type: TrackType
    /* Properties of GES.Asset */
    proxy: Asset
    readonly proxy_target: Asset
    /* Fields of GES.UriSourceAsset */
    parent: TrackElementAsset
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.UriSourceAsset */
    get_filesource_asset(): UriClipAsset
    get_stream_info(): GstPbutils.DiscovererStreamInfo
    get_stream_uri(): string
    is_image(): boolean
    /* Methods of GES.TrackElementAsset */
    get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    get_track_type(): TrackType
    set_track_type(type: TrackType): void
    /* Methods of GES.Asset */
    extract(): Extractable
    get_error(): GLib.Error | null
    get_extractable_type(): GObject.Type
    get_id(): string
    get_proxy(): Asset | null
    get_proxy_target(): Asset | null
    list_proxies(): Asset[]
    set_proxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GES.TrackElementAsset */
    vfunc_get_natural_framerate(framerate_n: number, framerate_d: number): boolean
    /* Virtual methods of GES.Asset */
    vfunc_extract(): Extractable
    vfunc_inform_proxy(proxy_id: string): void
    vfunc_proxied(proxy: Asset): void
    vfunc_request_id_update(proposed_new_id: string, error: GLib.Error): boolean
    vfunc_start_loading(): AssetLoadingReturn
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: UriSourceAsset, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: UriSourceAsset, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-target", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: (($obj: UriSourceAsset, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UriSourceAsset_ConstructProps)
    _init (config?: UriSourceAsset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoSource_ConstructProps extends Source_ConstructProps {
}
export class VideoSource {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.VideoSource */
    get_natural_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: VideoSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: VideoSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: VideoSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: VideoSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: VideoSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoSource_ConstructProps)
    _init (config?: VideoSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoTestSource_ConstructProps extends VideoSource_ConstructProps {
}
export class VideoTestSource {
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.VideoTestSource */
    get_pattern(): VideoTestPattern
    set_pattern(pattern: VideoTestPattern): void
    /* Methods of GES.VideoSource */
    get_natural_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoTestSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: VideoTestSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoTestSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: VideoTestSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: VideoTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: VideoTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoTestSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoTestSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: VideoTestSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoTestSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoTestSource_ConstructProps)
    _init (config?: VideoTestSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VideoTrack_ConstructProps extends Track_ConstructProps {
}
export class VideoTrack {
    /* Properties of GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restriction_caps: Gst.Caps
    /* Properties of Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GES.VideoTrack */
    parent_instance: Track
    /* Fields of GES.Track */
    type: TrackType
    /* Fields of Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: Gst.Element[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: Gst.Message[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
    /* Fields of Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Track */
    add_element(object: TrackElement): boolean
    add_element_full(object: TrackElement): boolean
    commit(): boolean
    get_caps(): Gst.Caps
    get_elements(): TrackElement[]
    get_mixing(): boolean
    get_restriction_caps(): Gst.Caps
    get_timeline(): Timeline | null
    remove_element(object: TrackElement): boolean
    remove_element_full(object: TrackElement): boolean
    set_mixing(mixing: boolean): void
    set_restriction_caps(caps: Gst.Caps): void
    set_timeline(timeline: Timeline): void
    update_restriction_caps(caps: Gst.Caps): void
    /* Methods of Gst.Bin */
    add(element: Gst.Element): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad | null
    get_by_interface(iface: GObject.Type): Gst.Element | null
    get_by_name(name: string): Gst.Element | null
    get_by_name_recurse_up(name: string): Gst.Element | null
    get_suppressed_flags(): Gst.ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Gst.Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator | null
    iterate_elements(): Gst.Iterator | null
    iterate_recurse(): Gst.Iterator | null
    iterate_sinks(): Gst.Iterator | null
    iterate_sorted(): Gst.Iterator | null
    iterate_sources(): Gst.Iterator | null
    recalculate_latency(): boolean
    remove(element: Gst.Element): boolean
    set_suppressed_flags(flags: Gst.ElementFlags): void
    sync_children_states(): boolean
    /* Methods of Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Methods of Gst.ChildProxy */
    child_added(child: GObject.Object, name: string): void
    child_removed(child: GObject.Object, name: string): void
    get_child_by_index(index: number): GObject.Object | null
    get_child_by_name(name: string): GObject.Object | null
    get_children_count(): number
    get_property(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    set_property(name: string, value: any): void
    /* Virtual methods of GES.Track */
    vfunc_child_added(child: GObject.Object, name: string): void
    vfunc_child_removed(child: GObject.Object, name: string): void
    vfunc_get_child_by_index(index: number): GObject.Object | null
    vfunc_get_child_by_name(name: string): GObject.Object | null
    vfunc_get_children_count(): number
    /* Virtual methods of Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_deep_element_added(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_deep_element_removed(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Gst.Element): void
    vfunc_element_removed(child: Gst.Element): void
    vfunc_handle_message(message: Gst.Message): void
    vfunc_remove_element(element: Gst.Element): boolean
    /* Virtual methods of Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.Track */
    connect(sigName: "commited", callback: (($obj: VideoTrack) => void)): number
    connect_after(sigName: "commited", callback: (($obj: VideoTrack) => void)): number
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: (($obj: VideoTrack, effect: TrackElement) => void)): number
    connect_after(sigName: "track-element-added", callback: (($obj: VideoTrack, effect: TrackElement) => void)): number
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: (($obj: VideoTrack, effect: TrackElement) => void)): number
    connect_after(sigName: "track-element-removed", callback: (($obj: VideoTrack, effect: TrackElement) => void)): number
    emit(sigName: "track-element-removed", effect: TrackElement): void
    /* Signals of Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: VideoTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: VideoTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: VideoTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: VideoTrack, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (($obj: VideoTrack) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: VideoTrack) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: VideoTrack, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: VideoTrack, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: VideoTrack, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: VideoTrack, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoTrack) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoTrack) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoTrack, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoTrack, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoTrack, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoTrack, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoTrack, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoTrack, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoTrack, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: VideoTrack, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    /* Signals of Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: VideoTrack, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: VideoTrack, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: VideoTrack, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: VideoTrack, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::duration", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mixing", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction-caps", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    transition_type?: VideoStandardTransitionType
}
export class VideoTransition {
    /* Properties of GES.VideoTransition */
    border: number
    invert: boolean
    transition_type: VideoStandardTransitionType
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.VideoTransition */
    get_border(): number
    get_transition_type(): VideoStandardTransitionType
    is_inverted(): boolean
    set_border(value: number): void
    set_inverted(inverted: boolean): void
    set_transition_type(type: VideoStandardTransitionType): boolean
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoTransition, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: VideoTransition, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoTransition, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: VideoTransition, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: VideoTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: VideoTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoTransition, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoTransition, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: VideoTransition, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::border", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invert", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invert", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transition-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoTransition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GES.TrackElement */
    active: boolean
    auto_clamp_control_sources: boolean
    has_internal_source: boolean
    readonly track: Track
    track_type: TrackType
    /* Properties of GES.TimelineElement */
    duration: number
    in_point: number
    max_duration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GES.TimelineElement */
    parent_instance: GObject.InitiallyUnowned
    asset: Asset
    inpoint: Gst.ClockTime
    maxduration: Gst.ClockTime
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.VideoSource */
    get_natural_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES.TrackElement */
    add_children_props(element: Gst.Element, wanted_categories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clamp_control_source(property_name: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    get_all_control_bindings(): GLib.HashTable
    get_auto_clamp_control_sources(): boolean
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_element(): Gst.Element
    get_gnlobject(): Gst.Element
    get_nleobject(): Gst.Element
    get_track(): Track | null
    get_track_type(): TrackType
    is_active(): boolean
    is_core(): boolean
    list_children_properties(): GObject.ParamSpec[]
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    remove_control_binding(property_name: string): boolean
    set_active(active: boolean): boolean
    set_auto_clamp_control_sources(auto_clamp: boolean): void
    set_control_source(source: Gst.ControlSource, property_name: string, binding_type: string): boolean
    set_has_internal_source(has_internal_source: boolean): boolean
    set_track_type(type: TrackType): void
    /* Methods of GES.TimelineElement */
    add_child_property(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    edit_full(new_layer_priority: number, mode: EditMode, edge: Edge, position: number): boolean
    get_child_property(property_name: string): [ /* returnType */ boolean, /* value */ any ]
    get_child_property_by_pspec(pspec: GObject.ParamSpec): /* value */ any
    get_duration(): Gst.ClockTime
    get_inpoint(): Gst.ClockTime
    get_layer_priority(): number
    get_max_duration(): Gst.ClockTime
    get_name(): string
    get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    get_parent(): TimelineElement | null
    get_priority(): number
    get_start(): Gst.ClockTime
    get_timeline(): Timeline | null
    get_toplevel_parent(): TimelineElement
    get_track_types(): TrackType
    lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(paste_position: Gst.ClockTime): TimelineElement | null
    remove_child_property(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    ripple_end(end: Gst.ClockTime): boolean
    roll_end(end: Gst.ClockTime): boolean
    roll_start(start: Gst.ClockTime): boolean
    set_child_property(property_name: string, value: any): boolean
    set_child_property_by_pspec(pspec: GObject.ParamSpec, value: any): void
    set_child_property_full(property_name: string, value: any): boolean
    set_duration(duration: Gst.ClockTime): boolean
    set_inpoint(inpoint: Gst.ClockTime): boolean
    set_max_duration(maxduration: Gst.ClockTime): boolean
    set_name(name?: string | null): boolean
    set_parent(parent: TimelineElement): boolean
    set_priority(priority: number): boolean
    set_start(start: Gst.ClockTime): boolean
    set_timeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Methods of GES.MetaContainer */
    add_metas_from_string(str: string): boolean
    check_meta_registered(meta_item: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    get_boolean(meta_item: string): [ /* returnType */ boolean, /* dest */ boolean ]
    get_date(meta_item: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    get_date_time(meta_item: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    get_double(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_float(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_int64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_marker_list(key: string): MarkerList
    get_meta(key: string): any
    get_string(meta_item: string): string
    get_uint(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    get_uint64(meta_item: string): [ /* returnType */ boolean, /* dest */ number ]
    metas_to_string(): string
    register_meta(flags: MetaFlag, meta_item: string, value: any): boolean
    register_meta_boolean(flags: MetaFlag, meta_item: string, value: boolean): boolean
    register_meta_date(flags: MetaFlag, meta_item: string, value: GLib.Date): boolean
    register_meta_date_time(flags: MetaFlag, meta_item: string, value: Gst.DateTime): boolean
    register_meta_double(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_float(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_int64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_string(flags: MetaFlag, meta_item: string, value: string): boolean
    register_meta_uint(flags: MetaFlag, meta_item: string, value: number): boolean
    register_meta_uint64(flags: MetaFlag, meta_item: string, value: number): boolean
    register_static_meta(flags: MetaFlag, meta_item: string, type: GObject.Type): boolean
    set_boolean(meta_item: string, value: boolean): boolean
    set_date(meta_item: string, value: GLib.Date): boolean
    set_date_time(meta_item: string, value: Gst.DateTime): boolean
    set_double(meta_item: string, value: number): boolean
    set_float(meta_item: string, value: number): boolean
    set_int(meta_item: string, value: number): boolean
    set_int64(meta_item: string, value: number): boolean
    set_marker_list(meta_item: string, list: MarkerList): boolean
    set_meta(meta_item: string, value?: any | null): boolean
    set_string(meta_item: string, value: string): boolean
    set_uint(meta_item: string, value: number): boolean
    set_uint64(meta_item: string, value: number): boolean
    /* Virtual methods of GES.Source */
    vfunc_select_pad(pad: Gst.Pad): boolean
    /* Virtual methods of GES.TrackElement */
    vfunc_active_changed(active: boolean): void
    vfunc_changed(): void
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    /* Virtual methods of GES.TimelineElement */
    vfunc_deep_copy(copy: TimelineElement): void
    vfunc_get_layer_priority(): number
    vfunc_get_natural_framerate(): [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    vfunc_get_track_types(): TrackType
    vfunc_lookup_child(prop_name: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    vfunc_ripple(start: number): boolean
    vfunc_ripple_end(end: number): boolean
    vfunc_roll_end(end: number): boolean
    vfunc_roll_start(start: number): boolean
    vfunc_set_child_property(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    vfunc_set_child_property_full(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    vfunc_set_duration(duration: Gst.ClockTime): boolean
    vfunc_set_inpoint(inpoint: Gst.ClockTime): boolean
    vfunc_set_max_duration(maxduration: Gst.ClockTime): boolean
    vfunc_set_parent(parent: TimelineElement): boolean
    vfunc_set_priority(priority: number): boolean
    vfunc_set_start(start: Gst.ClockTime): boolean
    vfunc_trim(start: number): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GES.TrackElement */
    connect(sigName: "control-binding-added", callback: (($obj: VideoUriSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-added", callback: (($obj: VideoUriSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-added", control_binding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: (($obj: VideoUriSource, control_binding: Gst.ControlBinding) => void)): number
    connect_after(sigName: "control-binding-removed", callback: (($obj: VideoUriSource, control_binding: Gst.ControlBinding) => void)): number
    emit(sigName: "control-binding-removed", control_binding: Gst.ControlBinding): void
    /* Signals of GES.TimelineElement */
    connect(sigName: "child-property-added", callback: (($obj: VideoUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-added", callback: (($obj: VideoUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-added", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: (($obj: VideoUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-property-removed", callback: (($obj: VideoUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "child-property-removed", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: (($obj: VideoUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoUriSource, prop_object: GObject.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES.MetaContainer */
    connect(sigName: "notify-meta", callback: (($obj: VideoUriSource, key: string, value?: any | null) => void)): number
    connect_after(sigName: "notify-meta", callback: (($obj: VideoUriSource, key: string, value?: any | null) => void)): number
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-internal-source", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-type", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-point", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialize", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeline", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: (($obj: VideoUriSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoUriSource_ConstructProps)
    _init (config?: VideoUriSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface XmlFormatter_ConstructProps extends BaseXmlFormatter_ConstructProps {
}
export class XmlFormatter {
    /* Fields of GES.XmlFormatter */
    parent: BaseXmlFormatter
    priv: XmlFormatterPrivate
    _ges_reserved: object[]
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GES.Formatter */
    load_from_uri(timeline: Timeline, uri: string): boolean
    save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GES.Extractable */
    get_asset(): Asset | null
    get_id(): string
    set_asset(asset: Asset): boolean
    /* Virtual methods of GES.Formatter */
    vfunc_can_load_uri(uri: string): boolean
    vfunc_load_from_uri(timeline: Timeline, uri: string): boolean
    vfunc_save_to_uri(timeline: Timeline, uri: string, overwrite: boolean): boolean
    vfunc_get_id(): string
    vfunc_set_asset(asset: Asset): void
    vfunc_set_asset_full(asset: Asset): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: XmlFormatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XmlFormatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XmlFormatter_ConstructProps)
    _init (config?: XmlFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AssetClass {
    /* Fields of GES.AssetClass */
    parent: GObject.ObjectClass
    start_loading: (self: Asset) => AssetLoadingReturn
    extract: (self: Asset) => Extractable
    inform_proxy: (self: Asset, proxy_id: string) => void
    proxied: (self: Asset, proxy: Asset) => void
    request_id_update: (self: Asset, proposed_new_id: string, error: GLib.Error) => boolean
    _ges_reserved: object[]
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
    /* Fields of GES.AudioTrackClass */
    parent_class: TrackClass
    _ges_reserved: object[]
    static name: string
}
export class AudioTrackPrivate {
    static name: string
}
export abstract class AudioTransitionClass {
    /* Fields of GES.AudioTransitionClass */
    parent_class: TransitionClass
    _ges_reserved: object[]
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
    /* Fields of GES.BaseXmlFormatterClass */
    parent: FormatterClass
    content_parser: GLib.MarkupParser
    save: (formatter: Formatter, timeline: Timeline) => GLib.String
    _ges_reserved: object[]
    static name: string
}
export class BaseXmlFormatterPrivate {
    static name: string
}
export abstract class ClipAssetClass {
    /* Fields of GES.ClipAssetClass */
    parent: AssetClass
    get_natural_framerate: (self: ClipAsset, framerate_n: number, framerate_d: number) => boolean
    _ges_reserved: object[]
    static name: string
}
export class ClipAssetPrivate {
    static name: string
}
export abstract class ClipClass {
    /* Fields of GES.ClipClass */
    create_track_element: CreateTrackElementFunc
    create_track_elements: CreateTrackElementsFunc
    static name: string
}
export class ClipPrivate {
    static name: string
}
export abstract class CommandLineFormatterClass {
    /* Fields of GES.CommandLineFormatterClass */
    parent_class: FormatterClass
    static name: string
}
export class CommandLineFormatterPrivate {
    static name: string
}
export abstract class ContainerClass {
    /* Fields of GES.ContainerClass */
    child_added: (container: Container, element: TimelineElement) => void
    child_removed: (container: Container, element: TimelineElement) => void
    add_child: (container: Container, element: TimelineElement) => boolean
    remove_child: (container: Container, element: TimelineElement) => boolean
    ungroup: (container: Container, recursive: boolean) => Container[]
    edit: (container: Container, layers: Layer[] | null, new_layer_priority: number, mode: EditMode, edge: Edge, position: number) => boolean
    static name: string
}
export class ContainerPrivate {
    static name: string
}
export abstract class EffectAssetClass {
    /* Fields of GES.EffectAssetClass */
    parent_class: TrackElementAssetClass
    _ges_reserved: object[]
    static name: string
}
export class EffectAssetPrivate {
    static name: string
}
export abstract class EffectClass {
    /* Methods of GES.EffectClass */
    register_rate_property(klass: Effect | Function | GObject.Type, element_name: string, property_name: string): boolean
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
    /* Fields of GES.ExtractableInterface */
    parent: GObject.TypeInterface
    asset_type: GObject.Type
    check_id: ExtractableCheckId
    can_update_asset: boolean
    set_asset: (self: Extractable, asset: Asset) => void
    set_asset_full: (self: Extractable, asset: Asset) => boolean
    get_id: (self: Extractable) => string
    get_real_extractable_type: (wanted_type: GObject.Type, id: string) => GObject.Type
    register_metas: (self: ExtractableInterface, klass: GObject.ObjectClass, asset: Asset) => boolean
    _ges_reserved: object[]
    static name: string
}
export abstract class FormatterClass {
    /* Fields of GES.FormatterClass */
    parent_class: GObject.InitiallyUnownedClass
    can_load_uri: FormatterCanLoadURIMethod
    load_from_uri: FormatterLoadFromURIMethod
    save_to_uri: FormatterSaveToURIMethod
    /* Methods of GES.FormatterClass */
    register_metas(klass: Formatter | Function | GObject.Type, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
    static name: string
}
export class FormatterPrivate {
    static name: string
}
export abstract class GroupClass {
    /* Fields of GES.GroupClass */
    parent_class: ContainerClass
    _ges_reserved: object[]
    static name: string
}
export class GroupPrivate {
    static name: string
}
export abstract class ImageSourceClass {
    /* Fields of GES.ImageSourceClass */
    parent_class: VideoSourceClass
    _ges_reserved: object[]
    static name: string
}
export class ImageSourcePrivate {
    static name: string
}
export abstract class LayerClass {
    /* Fields of GES.LayerClass */
    object_added: (layer: Layer, object: Clip) => void
    object_removed: (layer: Layer, object: Clip) => void
    static name: string
}
export class LayerPrivate {
    static name: string
}
export abstract class MarkerClass {
    /* Fields of GES.MarkerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MarkerListClass {
    /* Fields of GES.MarkerListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MetaContainerInterface {
    /* Fields of GES.MetaContainerInterface */
    parent_iface: GObject.TypeInterface
    _ges_reserved: object[]
    static name: string
}
export abstract class MultiFileSourceClass {
    /* Fields of GES.MultiFileSourceClass */
    parent_class: VideoSourceClass
    _ges_reserved: object[]
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
    /* Fields of GES.OverlayClipClass */
    parent_class: OperationClipClass
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
    /* Fields of GES.ProjectClass */
    parent_class: AssetClass
    asset_added: (self: Project, asset: Asset) => void
    asset_loading: (self: Project, asset: Asset) => void
    asset_removed: (self: Project, asset: Asset) => void
    missing_uri: (self: Project, error: GLib.Error, wrong_asset: Asset) => string
    loading_error: (self: Project, error: GLib.Error, id: string, extractable_type: GObject.Type) => boolean
    loaded: (self: Project, timeline: Timeline) => boolean
    loading: (self: Project, timeline: Timeline) => void
    _ges_reserved: object[]
    static name: string
}
export class ProjectPrivate {
    static name: string
}
export abstract class SourceClass {
    /* Fields of GES.SourceClass */
    select_pad: (source: Source, pad: Gst.Pad) => boolean
    static name: string
}
export abstract class SourceClipAssetClass {
    /* Fields of GES.SourceClipAssetClass */
    parent_class: ClipAssetClass
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
    /* Fields of GES.TextOverlayClass */
    parent_class: OperationClass
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
    /* Fields of GES.TimelineClass */
    parent_class: Gst.BinClass
    track_added: (timeline: Timeline, track: Track) => void
    track_removed: (timeline: Timeline, track: Track) => void
    layer_added: (timeline: Timeline, layer: Layer) => void
    layer_removed: (timeline: Timeline, layer: Layer) => void
    group_added: (timeline: Timeline, group: Group) => void
    static name: string
}
export abstract class TimelineElementClass {
    /* Fields of GES.TimelineElementClass */
    parent_class: GObject.InitiallyUnownedClass
    set_parent: (self: TimelineElement, parent: TimelineElement) => boolean
    set_start: (self: TimelineElement, start: Gst.ClockTime) => boolean
    set_inpoint: (self: TimelineElement, inpoint: Gst.ClockTime) => boolean
    set_duration: (self: TimelineElement, duration: Gst.ClockTime) => boolean
    set_max_duration: (self: TimelineElement, maxduration: Gst.ClockTime) => boolean
    set_priority: (self: TimelineElement, priority: number) => boolean
    ripple: (self: TimelineElement, start: number) => boolean
    ripple_end: (self: TimelineElement, end: number) => boolean
    roll_start: (self: TimelineElement, start: number) => boolean
    roll_end: (self: TimelineElement, end: number) => boolean
    trim: (self: TimelineElement, start: number) => boolean
    deep_copy: (self: TimelineElement, copy: TimelineElement) => void
    lookup_child: (self: TimelineElement, prop_name: string) => [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    get_track_types: (self: TimelineElement) => TrackType
    set_child_property: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => void
    get_layer_priority: (self: TimelineElement) => number
    get_natural_framerate: (self: TimelineElement) => [ /* returnType */ boolean, /* framerate_n */ number, /* framerate_d */ number ]
    set_child_property_full: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => boolean
    _ges_reserved: object[]
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
    /* Fields of GES.TitleSourceClass */
    parent_class: VideoSourceClass
    static name: string
}
export class TitleSourcePrivate {
    static name: string
}
export abstract class TrackClass {
    static name: string
}
export abstract class TrackElementAssetClass {
    /* Fields of GES.TrackElementAssetClass */
    parent_class: AssetClass
    get_natural_framerate: (self: TrackElementAsset, framerate_n: number, framerate_d: number) => boolean
    _ges_reserved: object[]
    static name: string
}
export class TrackElementAssetPrivate {
    static name: string
}
export abstract class TrackElementClass {
    /* Fields of GES.TrackElementClass */
    nleobject_factorytype: string
    active_changed: (object: TrackElement, active: boolean) => void
    changed: (object: TrackElement) => void
    lookup_child: (object: TrackElement, prop_name: string) => [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
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
    /* Fields of GES.UriClipAssetClass */
    parent_class: SourceClipAssetClass
    discovered: (discoverer: GstPbutils.Discoverer, info: GstPbutils.DiscovererInfo, err: GLib.Error) => void
    /* Methods of GES.UriClipAssetClass */
    set_timeout(klass: UriClipAsset | Function | GObject.Type, timeout: Gst.ClockTime): void
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
    /* Fields of GES.UriSourceAssetClass */
    parent_class: TrackElementAssetClass
    _ges_reserved: object[]
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
    /* Fields of GES.VideoTestSourceClass */
    parent_class: VideoSourceClass
    _ges_reserved: object[]
    static name: string
}
export class VideoTestSourcePrivate {
    static name: string
}
export abstract class VideoTrackClass {
    /* Fields of GES.VideoTrackClass */
    parent_class: TrackClass
    _ges_reserved: object[]
    static name: string
}
export class VideoTrackPrivate {
    static name: string
}
export abstract class VideoTransitionClass {
    /* Fields of GES.VideoTransitionClass */
    parent_class: TransitionClass
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
    /* Fields of GES.XmlFormatterClass */
    parent: BaseXmlFormatterClass
    _ges_reserved: object[]
    static name: string
}
export class XmlFormatterPrivate {
    static name: string
}
export type FrameNumber = number