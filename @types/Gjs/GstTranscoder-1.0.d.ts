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
export function transcoder_error_get_name(error: TranscoderError): string
export function transcoder_error_quark(): GLib.Quark
export class TranscoderSignalDispatcher {
    /* Virtual methods of GstTranscoder.TranscoderSignalDispatcher */
    vfunc_dispatch(transcoder: Transcoder, emitter: object | null, data: object | null, destroy: GLib.DestroyNotify): void
    static name: string
}
export interface Transcoder_ConstructProps extends Gst.Object_ConstructProps {
    avoid_reencoding?: boolean
    dest_uri?: string
    position_update_interval?: number
    profile?: GstPbutils.EncodingProfile
    signal_dispatcher?: TranscoderSignalDispatcher
    src_uri?: string
}
export class Transcoder {
    /* Properties of GstTranscoder.Transcoder */
    avoid_reencoding: boolean
    readonly duration: number
    readonly pipeline: Gst.Element
    readonly position: number
    position_update_interval: number
    /* Properties of Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstTranscoder.Transcoder */
    get_avoid_reencoding(): boolean
    get_dest_uri(): string
    get_duration(): Gst.ClockTime
    get_pipeline(): Gst.Element
    get_position(): Gst.ClockTime
    get_position_update_interval(): number
    get_source_uri(): string
    run(): boolean
    run_async(): void
    set_avoid_reencoding(avoid_reencoding: boolean): void
    set_cpu_usage(cpu_usage: number): void
    set_position_update_interval(interval: number): void
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
    /* Signals of GstTranscoder.Transcoder */
    connect(sigName: "done", callback: (($obj: Transcoder) => void)): number
    connect_after(sigName: "done", callback: (($obj: Transcoder) => void)): number
    emit(sigName: "done"): void
    connect(sigName: "duration-changed", callback: (($obj: Transcoder, object: number) => void)): number
    connect_after(sigName: "duration-changed", callback: (($obj: Transcoder, object: number) => void)): number
    emit(sigName: "duration-changed", object: number): void
    connect(sigName: "error", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "error", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "error", object: GLib.Error, p0: Gst.Structure): void
    connect(sigName: "position-updated", callback: (($obj: Transcoder, object: number) => void)): number
    connect_after(sigName: "position-updated", callback: (($obj: Transcoder, object: number) => void)): number
    emit(sigName: "position-updated", object: number): void
    connect(sigName: "warning", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "warning", callback: (($obj: Transcoder, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "warning", object: GLib.Error, p0: Gst.Structure): void
    /* Signals of Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transcoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Transcoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    static new_full(source_uri: string, dest_uri: string, profile: GstPbutils.EncodingProfile, signal_dispatcher: TranscoderSignalDispatcher): Transcoder
    static $gtype: GObject.Type
}
export interface TranscoderGMainContextSignalDispatcher_ConstructProps extends GObject.Object_ConstructProps {
    application_context?: GLib.MainContext
}
export class TranscoderGMainContextSignalDispatcher {
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
    /* Virtual methods of GstTranscoder.TranscoderGMainContextSignalDispatcher */
    vfunc_dispatch(transcoder: Transcoder, emitter: object | null, data: object | null, destroy: GLib.DestroyNotify): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TranscoderGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TranscoderGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TranscoderGMainContextSignalDispatcher_ConstructProps)
    _init (config?: TranscoderGMainContextSignalDispatcher_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class TranscoderClass {
    static name: string
}
export abstract class TranscoderGMainContextSignalDispatcherClass {
    static name: string
}
export class TranscoderPrivate {
    static name: string
}
export abstract class TranscoderSignalDispatcherInterface {
    /* Fields of GstTranscoder.TranscoderSignalDispatcherInterface */
    parent_iface: GObject.TypeInterface
    dispatch: (self: TranscoderSignalDispatcher, transcoder: Transcoder, emitter: object | null, data: object | null, destroy: GLib.DestroyNotify) => void
    static name: string
}