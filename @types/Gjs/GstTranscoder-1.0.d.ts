/**
 * GstTranscoder-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstPbutils from './GstPbutils-1.0';
import type * as GstVideo from './GstVideo-1.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GstAudio from './GstAudio-1.0';

export enum TranscoderError {
    FAILED,
}
export enum TranscoderMessage {
    POSITION_UPDATED,
    DURATION_CHANGED,
    STATE_CHANGED,
    DONE,
    ERROR,
    WARNING,
}
export enum TranscoderState {
    STOPPED,
    PAUSED,
    PLAYING,
}
export function transcoder_error_get_name(error: TranscoderError): string
export function transcoder_error_quark(): GLib.Quark
export function transcoder_message_get_name(message: TranscoderMessage): string
export function transcoder_message_parse_duration(msg: Gst.Message): /* duration */ Gst.ClockTime
export function transcoder_message_parse_error(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
export function transcoder_message_parse_position(msg: Gst.Message): /* position */ Gst.ClockTime
export function transcoder_message_parse_state(msg: Gst.Message): /* state */ TranscoderState
export function transcoder_message_parse_warning(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
export function transcoder_state_get_name(state: TranscoderState): string
export interface Transcoder_ConstructProps extends Gst.Object_ConstructProps {
    avoid_reencoding?: boolean
    dest_uri?: string
    position_update_interval?: number
    profile?: GstPbutils.EncodingProfile
    src_uri?: string
}
export class Transcoder {
    /* Properties of GstTranscoder-1.0.GstTranscoder.Transcoder */
    avoid_reencoding: boolean
    readonly duration: number
    readonly pipeline: Gst.Element
    readonly position: number
    position_update_interval: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstTranscoder-1.0.GstTranscoder.Transcoder */
    get_avoid_reencoding(): boolean
    get_dest_uri(): string
    get_duration(): Gst.ClockTime
    get_message_bus(): Gst.Bus
    get_pipeline(): Gst.Element
    get_position(): Gst.ClockTime
    get_position_update_interval(): number
    get_signal_adapter(context?: GLib.MainContext | null): TranscoderSignalAdapter | null
    get_source_uri(): string
    get_sync_signal_adapter(): TranscoderSignalAdapter
    run(): boolean
    run_async(): void
    set_avoid_reencoding(avoid_reencoding: boolean): void
    set_cpu_usage(cpu_usage: number): void
    set_position_update_interval(interval: number): void
    /* Methods of Gst-1.0.Gst.Object */
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
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transcoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Transcoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::avoid-reencoding", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avoid-reencoding", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pipeline", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position-update-interval", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-update-interval", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transcoder_ConstructProps)
    _init (config?: Transcoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source_uri: string, dest_uri: string, encoding_profile: string): Transcoder
    static new_full(source_uri: string, dest_uri: string, profile: GstPbutils.EncodingProfile): Transcoder
    static is_transcoder_message(msg: Gst.Message): boolean
    static $gtype: GObject.Type
}
export interface TranscoderSignalAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
export class TranscoderSignalAdapter {
    /* Properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter */
    readonly transcoder: Transcoder
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter */
    get_transcoder(): Transcoder | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter */
    connect(sigName: "done", callback: (($obj: TranscoderSignalAdapter) => void)): number
    connect_after(sigName: "done", callback: (($obj: TranscoderSignalAdapter) => void)): number
    emit(sigName: "done"): void
    connect(sigName: "duration-changed", callback: (($obj: TranscoderSignalAdapter, object: number) => void)): number
    connect_after(sigName: "duration-changed", callback: (($obj: TranscoderSignalAdapter, object: number) => void)): number
    emit(sigName: "duration-changed", object: number): void
    connect(sigName: "error", callback: (($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "error", callback: (($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "error", object: GLib.Error, p0: Gst.Structure): void
    connect(sigName: "position-updated", callback: (($obj: TranscoderSignalAdapter, object: number) => void)): number
    connect_after(sigName: "position-updated", callback: (($obj: TranscoderSignalAdapter, object: number) => void)): number
    emit(sigName: "position-updated", object: number): void
    connect(sigName: "state-changed", callback: (($obj: TranscoderSignalAdapter, object: TranscoderState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: TranscoderSignalAdapter, object: TranscoderState) => void)): number
    emit(sigName: "state-changed", object: TranscoderState): void
    connect(sigName: "warning", callback: (($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "warning", callback: (($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "warning", object: GLib.Error, p0: Gst.Structure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::transcoder", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transcoder", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TranscoderSignalAdapter_ConstructProps)
    _init (config?: TranscoderSignalAdapter_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class TranscoderClass {
    /* Fields of GstTranscoder-1.0.GstTranscoder.TranscoderClass */
    parent_class: Gst.ObjectClass
    static name: string
}
export abstract class TranscoderSignalAdapterClass {
    /* Fields of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass */
    parent_class: GObject.ObjectClass
    static name: string
}